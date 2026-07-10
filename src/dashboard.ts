/**
 * 统计仪表盘
 * 使用 SiYuan Dialog 展示可视化的 Token 用量统计。
 */
import { Dialog, showMessage, confirm, getFrontend } from "siyuan";
import type { Store } from "./store";
import type { KeyManager } from "./key-manager";
import type { StatisticsSummary, KeyStat, DailyStat, ModelStat, TokenRecord, PluginSettings } from "./types";
import { projectMonthEnd, detectAnomalies, buildSuggestions } from "./analytics";

/** 转义 HTML 特殊字符，防止 XSS */
function esc(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** 根据模型 key 生成稳定的图例/柱状颜色（同模型多处保持一致） */
function modelColor(key: string): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (h * 31 + key.charCodeAt(i)) >>> 0;
  }
  const hue = h % 360;
  return `hsl(${hue}, 60%, 52%)`;
}

/** 格式化 yyyy-MM-dd */
function formatDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** 获取指定日期所在周起始（周一） */
function getWeekStart(d: Date): Date {
  const day = d.getDay();
  const diff = (day === 0 ? -6 : 1) - day; // 周一为周起始
  const start = new Date(d);
  start.setDate(d.getDate() + diff);
  start.setHours(0, 0, 0, 0);
  return start;
}

/** 获取指定日期所在月起始 */
function getMonthStart(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

/**
 * Token 数字格式化：
 * auto  模式：>=1亿显示 X.XXX亿，>=1万显示 XXX.X万，否则原样；
 * full 模式：始终 toLocaleString 完整数字。
 */
function fmtToken(n: number, mode: "auto" | "full"): string {
  if (mode !== "auto") return n.toLocaleString();
  if (n >= 1e8) return (n / 1e8).toFixed(3) + "亿";
  if (n >= 1e4) return (n / 1e4).toFixed(1) + "万";
  return n.toLocaleString();
}

export class Dashboard {
  private store: Store;
  private keyManager: KeyManager;
  private dialog: Dialog | null = null;
  private summary: StatisticsSummary | null = null;
  private refreshTimer: ReturnType<typeof setInterval> | null = null;
  /** 会话级标记：用户本次打开仪表盘时点击了「不再提示」，不持久化，重启恢复 */
  private disclaimerDismissed: boolean = false;
  public onManualSync: (() => Promise<boolean>) | null = null;

  constructor(store: Store, keyManager: KeyManager) {
    this.store = store;
    this.keyManager = keyManager;
  }

  show(): void {
    try {
      this.summary = this.computeSummary();

      // 1.3.7 修复：如果弹窗仍然存在且已连接到 DOM，直接更新内容并恢复滚动位置
      if (this.dialog && this.dialog.element && this.dialog.element.isConnected) {
        this.refreshContent();
        return;
      }

      // 弹窗不存在或已断开，销毁残留并重新创建
      if (this.dialog) {
        this.dialog.destroy();
        this.dialog = null;
      }

      const mobile = this.isMobile();
      this.dialog = new Dialog({
        title: "📊 Token 用量统计",
        width: mobile ? "95vw" : "900px",
        content: this.renderHTML(this.summary),
        destroyCallback: () => {
          if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
            this.refreshTimer = null;
          }
          this.dialog = null;
        },
      });

      this.bindEvents();

      // 自动刷新：每 3 秒更新统计数据（仪表盘打开期间实时反映新请求）
      this.refreshTimer = setInterval(() => {
        if (!this.dialog || !this.dialog.element || !this.dialog.element.isConnected) {
          if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
            this.refreshTimer = null;
          }
          return;
        }
        this.refreshContent();
      }, 3000);
    } catch (e: any) {
      console.error("[TokenStats] Dashboard show error:", e);
      showMessage("仪表盘打开失败: " + e.message, 3000, "error");
    }
  }

  /** 自动刷新仪表盘内容（保持滚动位置） */
  private refreshContent(): void {
    if (!this.dialog || !this.dialog.element) return;
    const body = this.dialog.element.querySelector(".b3-dialog__body");
    if (!body) return;

    // 焦点保护：若用户正在仪表盘内编辑表单（如趋势日期框 / 聚合方式下拉框），
    // 跳过本次整页重绘，避免打断输入或重置控件状态。下次刷新（3 秒后）自动恢复。
    const active = document.activeElement as HTMLElement | null;
    if (
      active &&
      body.contains(active) &&
      (active.tagName === "INPUT" ||
        active.tagName === "SELECT" ||
        active.tagName === "TEXTAREA")
    ) {
      return;
    }

    const scrollTop = body.scrollTop;
    this.summary = this.computeSummary();
    body.innerHTML = this.renderHTML(this.summary);
    this.bindEvents();
    const newBody = this.dialog.element.querySelector(".b3-dialog__body");
    if (newBody) newBody.scrollTop = scrollTop;
  }

  /** 检测是否为移动端（含鸿蒙 NEXT） */
  private isMobile(): boolean {
    const frontend = getFrontend();
    return frontend === "mobile" || frontend === "browser-mobile";
  }

  /** 计算统计摘要 */
  private computeSummary(): StatisticsSummary {
    const records = this.store.getRecords();
    const keys = this.store.getApiKeys();
    const settings = this.store.getSettings();

    const summary: StatisticsSummary = {
      totalTokens: 0,
      totalInputTokens: 0,
      totalOutputTokens: 0,
      totalRequests: records.length,
      successRequests: 0,
      failedRequests: 0,
      averageRequestTime: 0,
      totalCost: 0,
      totalCacheReadTokens: 0,
      totalCacheCreationTokens: 0,
      totalCacheCost: 0,
      exactTokens: 0,
      estimatedTokens: 0,
      archivedMonths: 0,
      modelStats: {},
      dailyStats: [],
      keyStats: [],
    };

    let totalTime = 0;

    for (const r of records) {
      summary.totalTokens += r.totalTokens;
      summary.totalInputTokens += r.inputTokens;
      summary.totalOutputTokens += r.outputTokens;
      summary.totalCost += this.store.getRecordCost(r);
      summary.totalCacheReadTokens += r.cacheReadTokens || 0;
      summary.totalCacheCreationTokens += r.cacheCreationTokens || 0;
      summary.totalCacheCost += this.store.getRecordCacheCost(r);
      totalTime += r.requestTime;
      // 精确值（来自 API usage）与启发式估算分别累计；旧版本记录无 estimated 字段，计入估算
      if (r.estimated === false) {
        summary.exactTokens += r.totalTokens;
      } else {
        summary.estimatedTokens += r.totalTokens;
      }

      if (r.success) {
        summary.successRequests++;
      } else {
        summary.failedRequests++;
      }

      // 模型统计：统一 key 使用规范化小写，显示保留原始
      const displayModel = r.model || "unknown";
      const modelKey = displayModel.toLowerCase().trim();
      if (!summary.modelStats[modelKey]) {
        summary.modelStats[modelKey] = {
          model: displayModel,
          count: 0,
          tokens: 0,
          inputTokens: 0,
          outputTokens: 0,
          cacheReadTokens: 0,
          cacheCreationTokens: 0,
          cost: 0,
          cacheCost: 0,
        };
      }
      summary.modelStats[modelKey].count++;
      summary.modelStats[modelKey].tokens += r.totalTokens;
      summary.modelStats[modelKey].inputTokens += r.inputTokens;
      summary.modelStats[modelKey].outputTokens += r.outputTokens;
      summary.modelStats[modelKey].cacheReadTokens += r.cacheReadTokens || 0;
      summary.modelStats[modelKey].cacheCreationTokens += r.cacheCreationTokens || 0;
      summary.modelStats[modelKey].cost += this.store.getRecordCost(r);
      summary.modelStats[modelKey].cacheCost += this.store.getRecordCacheCost(r);
    }

    // 将按月聚合的归档汇总并入总计（明细被滚动淘汰的旧月份），避免历史数据从统计中消失
    const archives = this.store.getArchives();
    summary.archivedMonths = archives.length;
    for (const a of archives) {
      summary.totalTokens += a.totalTokens;
      summary.totalInputTokens += a.totalInputTokens;
      summary.totalOutputTokens += a.totalOutputTokens;
      summary.totalCost += a.cost;
      summary.totalCacheReadTokens += a.totalCacheReadTokens;
      summary.totalCacheCreationTokens += a.totalCacheCreationTokens;
      summary.totalCacheCost += a.cacheCost;
      summary.exactTokens += a.exactTokens;
      summary.estimatedTokens += a.estimatedTokens;
      for (const [mk, m] of Object.entries(a.byModel)) {
        if (!summary.modelStats[mk]) {
          summary.modelStats[mk] = {
            model: mk,
            count: 0,
            tokens: 0,
            inputTokens: 0,
            outputTokens: 0,
            cacheReadTokens: 0,
            cacheCreationTokens: 0,
            cost: 0,
            cacheCost: 0,
          };
        }
        summary.modelStats[mk].tokens += m.tokens;
        summary.modelStats[mk].inputTokens += m.inputTokens;
        summary.modelStats[mk].outputTokens += m.outputTokens;
        summary.modelStats[mk].cacheReadTokens += m.cacheReadTokens || 0;
        summary.modelStats[mk].cacheCreationTokens += m.cacheCreationTokens || 0;
        summary.modelStats[mk].cost += m.cost;
      }
    }

    summary.averageRequestTime =
      records.length > 0 ? totalTime / records.length : 0;

    // 趋势统计按当前设置区间与聚合方式计算
    summary.dailyStats = this.computeTrendStats(records, settings);

    // Key 统计
    for (const key of keys) {
      const usage = this.keyManager.getKeyUsage(key.id);
      const usagePercent =
        key.quotaLimit > 0
          ? Math.min(100, (usage.totalTokens / key.quotaLimit) * 100)
          : 0;

      summary.keyStats.push({
        apiKeyId: key.id,
        apiKeyName: key.name,
        totalTokens: usage.totalTokens,
        totalInputTokens: usage.totalInputTokens,
        totalOutputTokens: usage.totalOutputTokens,
        totalRequests: usage.totalRequests,
        quotaLimit: key.quotaLimit,
        alertThreshold: key.alertThreshold,
        usagePercent,
        isAlert: key.alertThreshold > 0 && usagePercent >= key.alertThreshold,
        isExceeded: key.quotaLimit > 0 && usage.totalTokens >= key.quotaLimit,
        enabled: key.enabled !== false,
      });
    }

    summary.keyStats.sort((a, b) => b.totalTokens - a.totalTokens);

    return summary;
  }

  /** 根据设置的日期区间与聚合方式计算趋势统计 */
  private computeTrendStats(records: TokenRecord[], settings: PluginSettings): DailyStat[] {
    const { trendDateRangeStart, trendDateRangeEnd, trendAggregation } = settings;

    // 计算默认区间：有记录则取记录时间范围，否则最近 14 天
    let minTs = Infinity;
    let maxTs = -Infinity;
    for (const r of records) {
      minTs = Math.min(minTs, r.timestamp);
      maxTs = Math.max(maxTs, r.timestamp);
    }
    const hasRecords = records.length > 0 && isFinite(minTs) && isFinite(maxTs);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const defaultStart = hasRecords ? new Date(minTs) : new Date(today.getTime() - 13 * 24 * 60 * 60 * 1000);
    const defaultEnd = hasRecords ? new Date(maxTs) : today;

    const startStr = trendDateRangeStart || formatDate(defaultStart);
    const endStr = trendDateRangeEnd || formatDate(defaultEnd);
    const startDate = new Date(startStr + "T00:00:00");
    const endDate = new Date(endStr + "T23:59:59.999");

    const buckets: Record<string, DailyStat> = {};

    const addToBucket = (
      key: string,
      tokens: number,
      count: number,
      modelKey: string,
      cost: number
    ) => {
      if (!buckets[key]) {
        buckets[key] = { date: key, tokens: 0, count: 0, byModel: {}, cost: 0 };
      }
      buckets[key].tokens += tokens;
      buckets[key].count += count;
      buckets[key].byModel[modelKey] = (buckets[key].byModel[modelKey] || 0) + tokens;
      buckets[key].cost += cost;
    };

    for (const r of records) {
      if (r.timestamp < startDate.getTime() || r.timestamp > endDate.getTime()) {
        continue;
      }
      const d = new Date(r.timestamp);
      const modelKey = (r.model || "unknown").toLowerCase().trim();
      const cost = this.store.getRecordCost(r);
      if (trendAggregation === "weekly") {
        const ws = getWeekStart(d);
        addToBucket(formatDate(ws), r.totalTokens, 1, modelKey, cost);
      } else if (trendAggregation === "monthly") {
        const ms = getMonthStart(d);
        addToBucket(formatDate(ms), r.totalTokens, 1, modelKey, cost);
      } else {
        addToBucket(formatDate(d), r.totalTokens, 1, modelKey, cost);
      }
    }

    return Object.values(buckets).sort((a, b) => a.date.localeCompare(b.date));
  }

  private renderHTML(s: StatisticsSummary): string {
    const recentRecords = this.store.getRecentRecords(30);
    const maxModelTokens = Math.max(
      ...Object.values(s.modelStats).map((m) => m.tokens),
      1
    );
    const settings = this.store.getSettings();
    const globalPercent = this.keyManager.getGlobalUsagePercent(settings);
    const globalUsage = this.keyManager.getGlobalUsage(settings);
    const numFmt = settings.tokenDisplayUnit || "auto";

    const minDate = this.getMinRecordDate();
    const maxDate = this.getMaxRecordDate();

    const dateInputs = `
      <div class="tks-trend-controls">
        <label>区间：</label>
        <input type="date" id="tks-trend-start" class="b3-text-field" value="${esc(settings.trendDateRangeStart || minDate || "")}" ${minDate ? `min="${esc(minDate)}" max="${esc(maxDate || "")}"` : ""} />
        <span>~</span>
        <input type="date" id="tks-trend-end" class="b3-text-field" value="${esc(settings.trendDateRangeEnd || maxDate || "")}" ${maxDate ? `min="${esc(minDate || "")}" max="${esc(maxDate)}"` : ""} />
        <select id="tks-trend-aggregation" class="b3-select">
          <option value="daily" ${settings.trendAggregation === "daily" ? "selected" : ""}>按日</option>
          <option value="weekly" ${settings.trendAggregation === "weekly" ? "selected" : ""}>按周</option>
          <option value="monthly" ${settings.trendAggregation === "monthly" ? "selected" : ""}>按月</option>
        </select>
        <button class="b3-button b3-button--small" id="tks-trend-apply">应用</button>
        <button class="b3-button b3-button--small" id="tks-trend-reset">重置</button>
      </div>
    `;

    return `
      <div class="tks-dashboard">
        <div class="tks-readme-hint" id="tks-readme-hint">
          <span class="tks-readme-icon">📖</span>
          <span class="tks-readme-text">使用前请仔细阅读 README，特别是「统计精度与免责声明」章节：本插件为本地估算参考工具，<b>单价 / 资源包配置错误会显著放大费用估算误差</b>，所有统计与费用请以 API 服务商官方账单为准。</span>
        </div>
        ${settings.showDisclaimer !== false && !this.disclaimerDismissed ? `
        <div class="tks-disclaimer-banner" id="tks-disclaimer">
          <span class="tks-disclaimer-icon">⚠️</span>
          <span class="tks-disclaimer-text">免责提示：本插件统计数据与 API 供应商官方账单可能存在误差，请以 API 供应商的统计及账单为准。使用本插件即代表您认可此误差。</span>
          <button class="tks-disclaimer-close" id="tks-disclaimer-close" title="本次会话不再显示（重启思源后自动恢复）；如需永久关闭，请到设置面板操作">本次不再提示</button>
        </div>` : ""}
        <!-- 汇总卡片 -->
        <div class="tks-summary-cards">
          <div class="tks-card">
            <div class="tks-card-icon">🪙</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${fmtToken(s.totalTokens, numFmt)}</div>
              <div class="tks-card-label">总 Tokens</div>
              ${settings.dashboardSplitExactEstimate ? `<div class="tks-card-sub">精确 ${fmtToken(s.exactTokens, numFmt)} · 估算 ${fmtToken(s.estimatedTokens, numFmt)}</div>` : ""}
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📥</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${fmtToken(s.totalInputTokens, numFmt)}</div>
              <div class="tks-card-label">输入 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📤</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${fmtToken(s.totalOutputTokens, numFmt)}</div>
              <div class="tks-card-label">输出 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📞</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${s.totalRequests}</div>
              <div class="tks-card-label">总请求 (${s.successRequests}✅ ${s.failedRequests}❌)</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">⏱️</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${Math.round(s.averageRequestTime)}</div>
              <div class="tks-card-label">平均耗时(ms)</div>
            </div>
          </div>
          <div class="tks-card ${this.store.hasAnyPrice() ? "" : "tks-card-muted"}">
            <div class="tks-card-icon">💰</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${this.store.hasAnyPrice() ? this.store.formatCost(s.totalCost) : "未配置"}</div>
              <div class="tks-card-label">估算总费用${this.store.hasAnyPrice() ? "" : "（请设置单价）"}</div>
            </div>
          </div>
          <div class="tks-card tks-card-cache">
            <div class="tks-card-icon">❄️</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${fmtToken(s.totalCacheReadTokens, numFmt)}</div>
              <div class="tks-card-label">缓存命中 Tokens</div>
              ${this.store.hasAnyPrice()
                ? `<div class="tks-card-sub">成本 ${this.store.formatCost(s.totalCacheCost)}${s.totalCost > 0 ? ` · 占 ${(s.totalCacheCost / s.totalCost * 100).toFixed(1)}%` : ""}</div>`
                : `<div class="tks-card-sub">成本（未配置单价）</div>`}
            </div>
          </div>
          ${settings.globalQuotaLimit > 0 ? `
          <div class="tks-card tks-card-global">
            <div class="tks-card-icon">🌍</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${globalPercent.toFixed(1)}%</div>
              <div class="tks-card-label">全局限额 ${fmtToken(globalUsage.totalTokens, numFmt)} / ${fmtToken(settings.globalQuotaLimit, numFmt)}</div>
            </div>
          </div>
          ` : ""}
        </div>
        ${s.archivedMonths > 0 ? `
        <div class="tks-archive-note">📦 另有 <b>${s.archivedMonths}</b> 个月归档数据（超出明细上限被滚动淘汰的旧月份）已计入上方总计与模型分布；归档为冻结快照，不随后续单价变更重算。</div>
        ` : ""}

        <!-- API Key 用量 -->
        <div class="tks-section">
          <h3 class="tks-section-title">🔑 API Key 用量与限额</h3>
          <div class="tks-key-stats">
            ${s.keyStats.map((k) => this.renderKeyStat(k)).join("")}
          </div>
        </div>

        <!-- Token 趋势 -->
        <div class="tks-section">
          <h3 class="tks-section-title">📈 Token 趋势</h3>
          ${dateInputs}
          ${
            s.dailyStats.length === 0
              ? '<div class="tks-empty-chart">当前区间内无数据</div>'
              : `
          <div class="tks-daily-chart">
            ${this.buildTrendSvg(s, settings.trendAggregation)}
          </div>
          ${this.buildTrendLegend(s)}
          <div class="tks-trend-caption">柱形按模型堆叠（高度=当日总 Token）；折线为当日估算费用（右轴），未配置单价时为 0</div>`
          }
        </div>

        <!-- 模型分布 -->
        <div class="tks-section">
          <h3 class="tks-section-title">🤖 模型用量分布</h3>
          <div class="tks-model-stats">
            ${Object.values(s.modelStats)
              .sort((a, b) => b.tokens - a.tokens)
              .map((m) => this.renderModelBar(m, maxModelTokens))
              .join("")}
          </div>
        </div>

        ${settings.showAdvancedDashboard !== false ? this.renderForecastPanel(s, settings) : ""}
        ${settings.showAdvancedDashboard !== false ? this.renderAnomalyPanel(s, settings) : ""}
        ${settings.showAdvancedDashboard !== false ? this.renderSuggestionsPanel(s, settings) : ""}

        <!-- 笔记归因（按文档） -->
        ${settings.showAdvancedDashboard !== false && settings.enableNoteAttribution !== false ? this.renderAttributionPanel(settings) : ""}

        ${settings.showAdvancedDashboard === false ? `
        <div class="tks-advanced-hint">💡 高级数据洞察（月末预测 / 异常检测 / 优化建议 / 笔记归因）已隐藏，可在「设置 → 数据洞察」开启「显示高级数据洞察」。</div>
        ` : ""}

        <!-- 最近请求 -->
        <div class="tks-section">
          <h3 class="tks-section-title">📝 最近请求记录（最近 ${recentRecords.length} 条）</h3>
          <div class="tks-records-table-wrap">
            <table class="tks-records-table">
              <thead>
                <tr>
                  <th>时间</th>
                  <th>API Key</th>
                  <th>来源</th>
                  ${settings.enableNoteAttribution !== false ? `<th>文档</th>` : ""}
                  <th>模型</th>
                  <th>输入</th>
                  <th>缓存命中</th>
                  <th>输出</th>
                  <th>总计</th>
                  <th>费用</th>
                  <th>耗时</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                ${recentRecords.map((r) => this.renderRecordRow(r, settings.enableNoteAttribution !== false)).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="tks-dashboard-actions">
          <button class="b3-button b3-button--outline" id="tks-refresh">🔄 刷新</button>
          <button class="b3-button b3-button--outline" id="tks-sync" title="触发思源云同步并合并其他端的统计记录（与设置「立即同步」功能相同）。需先在思源「设置 - 关于 - 云端」配置并启用云同步；若未配置则只合并本地已有数据。">☁️ 立即同步</button>
          <button class="b3-button b3-button--outline" id="tks-export-json">📥 导出 JSON</button>
          <button class="b3-button b3-button--outline" id="tks-export-csv">📊 导出 CSV</button>
          <button class="b3-button b3-button--outline" id="tks-export-diagnostic" title="导出最近 N 条带原始 usage 的记录（来自供应商响应、未裁剪），用于排查用量统计偏差。条数在设置中「诊断日志导出条数」配置。">🔍 导出原始 usage 日志</button>
          <button class="b3-button b3-button--outline b3-button--danger" id="tks-clear-records">🗑️ 清除记录</button>
        </div>
      </div>
    `;
  }

  /**
   * 笔记归因面板：按「来源文档」聚合 Token 消耗，列出消耗最高的若干文档，
   * 帮助用户定位「最费 Token 的笔记」。仅统计带有来源信息的记录，无来源信息的记录不计入。
   */
  private renderAttributionPanel(settings: PluginSettings): string {
    const records = this.store.getRecords();
    const numFmt = settings.tokenDisplayUnit || "auto";
    const map = new Map<string, { docPath: string; docId: string; tokens: number; count: number }>();
    for (const r of records) {
      if (!r.docPath && !r.docId) continue;
      const key = r.docId || r.docPath || "";
      if (!key) continue;
      let entry = map.get(key);
      if (!entry) {
        entry = { docPath: r.docPath || "(未命名文档)", docId: r.docId || "", tokens: 0, count: 0 };
        map.set(key, entry);
      }
      entry.tokens += r.totalTokens || 0;
      entry.count += 1;
    }
    const topN = Math.max(1, settings.attributionTopN || 10);
    const list = Array.from(map.values()).sort((a, b) => b.tokens - a.tokens).slice(0, topN);
    if (list.length === 0) {
      return `<div class="tks-section">
        <h3 class="tks-section-title">📂 笔记归因（按文档）</h3>
        <div class="tks-empty-chart">暂无归因数据。当你在思源中使用 AI（含引用块 / 文档）时，本插件会自动记录调用来源文档，便于按文档统计 Token 消耗。</div>
      </div>`;
    }
    const maxTokens = Math.max(...list.map((d) => d.tokens), 1);
    return `<div class="tks-section">
      <h3 class="tks-section-title">📂 笔记归因（按文档 Top ${list.length}）</h3>
      <div class="tks-attr-stats">
        ${list
          .map((d) => `
          <div class="tks-attr-row">
            <div class="tks-attr-head">
              <span class="tks-attr-name" title="${esc(d.docId)}">${esc(d.docPath)}</span>
              <span class="tks-attr-meta">${fmtToken(d.tokens, numFmt)} tokens · ${d.count} 次</span>
            </div>
            <div class="tks-attr-bar"><div class="tks-attr-bar-fill" style="width:${(d.tokens / maxTokens * 100).toFixed(1)}%"></div></div>
          </div>`)
          .join("")}
      </div>
      <div class="tks-attr-caption">按文档统计的 Token 消耗，用于定位「最费 Token 的笔记」。仅统计带来源信息的记录；悬停文档名可查看文档 id。</div>
    </div>`;
  }

  private getMinRecordDate(): string | null {
    const records = this.store.getRecords();
    if (records.length === 0) return null;
    let min = Infinity;
    for (const r of records) min = Math.min(min, r.timestamp);
    return formatDate(new Date(min));
  }

  private getMaxRecordDate(): string | null {
    const records = this.store.getRecords();
    if (records.length === 0) return null;
    let max = -Infinity;
    for (const r of records) max = Math.max(max, r.timestamp);
    return formatDate(new Date(max));
  }

  private renderKeyStat(k: KeyStat): string {
    const numFmt = this.store.getSettings().tokenDisplayUnit || "auto";
    const quotaText =
      k.quotaLimit > 0
        ? `${fmtToken(k.totalTokens, numFmt)} / ${fmtToken(k.quotaLimit, numFmt)}`
        : `${fmtToken(k.totalTokens, numFmt)} (不限)`;

    const thresholdText = k.alertThreshold > 0 ? ` · 阈值 ${k.alertThreshold}%` : "";
    const statusIcon = !k.enabled
      ? "🚫"
      : k.isExceeded
      ? "⛔"
      : k.isAlert
      ? "⚠️"
      : k.quotaLimit > 0
      ? "✅"
      : "";

    return `
      <div class="tks-key-stat ${k.isAlert ? "tks-key-stat-alert" : ""} ${k.isExceeded ? "tks-key-stat-exceeded" : ""} ${!k.enabled ? "tks-key-stat-disabled" : ""}">
        <div class="tks-key-stat-header">
          <span class="tks-key-stat-name">${statusIcon} ${esc(k.apiKeyName)}${!k.enabled ? ' <span class="tks-badge tks-badge-off">已禁用</span>' : ""}</span>
          <span class="tks-key-stat-requests">${k.totalRequests} 次请求</span>
        </div>
        <div class="tks-key-stat-bar">
          <div class="tks-key-stat-fill ${k.isAlert ? "alert" : ""} ${k.isExceeded ? "exceeded" : ""} ${!k.enabled ? "disabled" : ""}"
               style="width: ${k.quotaLimit > 0 ? k.usagePercent : 0}%"></div>
        </div>
        <div class="tks-key-stat-detail">
          ${quotaText} tokens${thresholdText}
          ${k.quotaLimit > 0 ? ` · ${k.usagePercent.toFixed(1)}%` : ""}
        </div>
      </div>
    `;
  }

  /** 趋势图：按模型堆叠的彩色柱 + 当日费用折线（右轴） */
  private buildTrendSvg(s: StatisticsSummary, aggregation: string): string {
    const data = s.dailyStats;
    const n = data.length;
    if (n === 0) return "";
    const W = 720, H = 120;
    const padL = 48, padR = 52, padT = 10, padB = 20;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;
    const maxTokens = Math.max(...data.map((d) => d.tokens), 1);

    const modelTotals: Record<string, number> = {};
    for (const d of data) {
      for (const k of Object.keys(d.byModel)) {
        modelTotals[k] = (modelTotals[k] || 0) + d.byModel[k];
      }
    }
    const allModelKeys = Object.keys(modelTotals).sort((a, b) => modelTotals[b] - modelTotals[a]);
    const maxCost = Math.max(...data.map((d) => d.cost), 0);

    const slot = plotW / n;
    const barW = Math.min(26, slot * 0.62);
    const xCenter = (i: number) => padL + slot * (i + 0.5);

    let bars = "";
    for (let i = 0; i < n; i++) {
      const d = data[i];
      const cx = xCenter(i);
      const bx = cx - barW / 2;
      let yCur = padT + plotH;
      for (const k of allModelKeys) {
        const tk = d.byModel[k] || 0;
        if (tk <= 0) continue;
        const segH = (tk / maxTokens) * plotH;
        yCur -= segH;
        bars += `<rect x="${bx.toFixed(1)}" y="${yCur.toFixed(1)}" width="${barW.toFixed(1)}" height="${Math.max(0.5, segH).toFixed(1)}" fill="${modelColor(k)}"><title>${esc(k)}: ${tk.toLocaleString()} tokens</title></rect>`;
      }
    }

    let line = "";
    if (maxCost > 0) {
      const pts = data
        .map((d, i) => `${xCenter(i).toFixed(1)},${(padT + (1 - d.cost / maxCost) * plotH).toFixed(1)}`)
        .join(" ");
      line = `<polyline points="${pts}" fill="none" stroke="#e0556b" stroke-width="2" stroke-linejoin="round"/>`;
      for (let i = 0; i < n; i++) {
        const cy = padT + (1 - data[i].cost / maxCost) * plotH;
        line += `<circle cx="${xCenter(i).toFixed(1)}" cy="${cy.toFixed(1)}" r="2.5" fill="#e0556b"><title>费用: ${esc(this.store.formatCost(data[i].cost))}</title></circle>`;
      }
    }

    let grid = "";
    for (let g = 0; g <= 2; g++) {
      const y = padT + (plotH * g) / 2;
      const val = Math.round(maxTokens * (1 - g / 2));
      grid += `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${padL + plotW}" y2="${y.toFixed(1)}" stroke="#e3e3e3" stroke-width="1"/>`;
      grid += `<text x="${padL - 6}" y="${(y + 3).toFixed(1)}" text-anchor="end" font-size="10" fill="#8a8a8a">${val >= 1000 ? (val / 1000).toFixed(val >= 10000 ? 0 : 1) + "k" : val}</text>`;
      if (maxCost > 0) {
        const cval = maxCost * (1 - g / 2);
        grid += `<text x="${padL + plotW + 6}" y="${(y + 3).toFixed(1)}" text-anchor="start" font-size="10" fill="#e0556b">${esc(this.store.formatCost(cval))}</text>`;
      }
    }

    const step = Math.max(1, Math.ceil(n / 16));
    let xlabels = "";
    for (let i = 0; i < n; i++) {
      if (i % step !== 0 && i !== n - 1) continue;
      const d = data[i];
      let lab = d.date.substring(5);
      if (aggregation === "monthly") lab = d.date.substring(0, 7);
      else if (aggregation === "weekly") lab = `W${d.date.substring(5, 7)}${d.date.substring(8, 10)}`;
      xlabels += `<text x="${xCenter(i).toFixed(1)}" y="${padT + plotH + 14}" text-anchor="middle" font-size="9" fill="#8a8a8a">${esc(lab)}</text>`;
    }

    return `<svg class="tks-trend-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMin slice">${grid}${bars}${line}${xlabels}</svg>`;
  }

  /** 趋势图例：模型色块 + 费用折线说明 */
  private buildTrendLegend(s: StatisticsSummary): string {
    const modelTotals: Record<string, number> = {};
    for (const d of s.dailyStats) {
      for (const k of Object.keys(d.byModel)) {
        modelTotals[k] = (modelTotals[k] || 0) + d.byModel[k];
      }
    }
    const keys = Object.keys(modelTotals).sort((a, b) => modelTotals[b] - modelTotals[a]);
    const items = keys
      .map((k) => `<span class="tks-legend-item"><span class="tks-legend-swatch" style="background:${modelColor(k)}"></span>${esc(k)}</span>`)
      .join("");
    const costItem = `<span class="tks-legend-item"><span class="tks-legend-line"></span>当日费用（右轴）</span>`;
    return `<div class="tks-trend-legend">${items}${costItem}</div>`;
  }

  private renderModelBar(m: ModelStat, max: number): string {
    const numFmt = this.store.getSettings().tokenDisplayUnit || "auto";
    const widthPercent = Math.max(1, (m.tokens / max) * 100);
    return `
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${esc(m.model)}">${esc(m.model)}</div>
        <div class="tks-model-bar-track">
          <div class="tks-model-bar-fill" style="width: ${widthPercent}%; background: ${modelColor(m.model.toLowerCase().trim())}"></div>
        </div>
        <div class="tks-model-detail">
          ${fmtToken(m.tokens, numFmt)} tokens · ${m.count} 次${this.store.hasAnyPrice() ? ` · 💰 ${this.store.formatCost(m.cost)}` : ""}
        </div>
      </div>
    `;
  }

  private renderRecordRow(r: TokenRecord, showDoc: boolean): string {
    const numFmt = this.store.getSettings().tokenDisplayUnit || "auto";
    const time = new Date(r.timestamp).toLocaleString("zh-CN", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return `
      <tr>
        <td>${time}</td>
        <td title="${esc(r.apiKeyName)}">${esc(r.apiKeyName)}</td>
        <td>${esc(r.source)}</td>
        ${showDoc ? `<td class="tks-doc-cell" title="${esc(r.docId || "")}">${esc(r.docPath || "—")}</td>` : ""}
        <td>${esc(r.model)}</td>
        <td>${fmtToken(r.inputTokens, numFmt)}</td>
        <td>${r.cacheReadTokens ? fmtToken(r.cacheReadTokens, numFmt) : "—"}${r.cacheCreationTokens && r.cacheCreationTokens > 0 ? `<br><span class="tks-sub">写入 ${fmtToken(r.cacheCreationTokens, numFmt)}</span>` : ""}</td>
        <td>${fmtToken(r.outputTokens, numFmt)}${r.reasoningTokens && r.reasoningTokens > 0 ? `<br><span class="tks-sub">含推理 ${fmtToken(r.reasoningTokens, numFmt)}</span>` : ""}${r.multimodalEstimated ? `<br><span class="tks-sub tks-warn">多模态·估算偏低</span>` : ""}</td>
        <td><strong>${fmtToken(r.totalTokens, numFmt)}</strong></td>
        <td>${this.store.hasAnyPrice() ? `${this.store.formatCost(this.store.getRecordCost(r))}<br><span class="tks-sub">缓存 ${this.store.formatCost(this.store.getRecordCacheCost(r))}</span>` : "—"}</td>
        <td>${r.requestTime}ms</td>
        <td>${r.success ? "✅" : "❌"}</td>
      </tr>
    `;
  }

  private bindEvents(): void {
    if (!this.dialog) return;
    const el = this.dialog.element;

    el.querySelector("#tks-refresh")?.addEventListener("click", () => {
      this.refreshContent();
    });

    // 区分精确/估算 开关已移至设置面板（API 管理区），此处不再绑定

    el.querySelector("#tks-disclaimer-close")?.addEventListener("click", () => {
      confirm(
        "隐藏免责提示",
        "本插件统计数据与 API 供应商官方账单可能存在误差，请以 API 供应商的统计及账单为准。\n\n点击「确认」仅本次会话隐藏（重启思源后将自动恢复显示）。\n如需永久关闭此提示，请到「设置 - 仪表盘免责提示」中操作。",
        () => {
          this.disclaimerDismissed = true;
          this.refreshContent();
        }
      );
    });

    // 立即同步：触发云同步 + 合并其他端统计（与设置「立即同步」同一入口）
    el.querySelector("#tks-sync")?.addEventListener("click", async (e) => {
      const btn = e.currentTarget as HTMLButtonElement;
      if (btn.disabled) return;
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = "同步中…";
      try {
        if (!this.onManualSync) {
          showMessage("同步功能未就绪", 2000, "error");
          return;
        }
        await this.onManualSync();
        this.refreshContent();
      } catch {
        showMessage("同步失败，请确认思源数据同步已开启", 3000, "error");
      } finally {
        btn.disabled = false;
        btn.textContent = original;
      }
    });

    el.querySelector("#tks-export-json")?.addEventListener("click", () => {
      const data = this.store.exportAll();
      this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`, data, "application/json");
      showMessage("数据已导出（JSON）", 2000, "info");
    });

    el.querySelector("#tks-export-csv")?.addEventListener("click", () => {
      const csv = this.buildRecordsCsv();
      this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.csv`, csv, "text/csv;charset=utf-8");
      showMessage("数据已导出（CSV）", 2000, "info");
    });

    // 诊断模式：导出最近 N 条带原始 usage 的记录
    el.querySelector("#tks-export-diagnostic")?.addEventListener("click", () => {
      const limit = this.store.getSettings().diagnosticExportCount || 50;
      const records = this.store.getRecords();
      // 优先取最近（timestamp 最大）且带 rawUsage 的记录
      const withUsage = records
        .filter((r) => r.rawUsage && Object.keys(r.rawUsage).length > 0)
        .sort((a, b) => b.timestamp - a.timestamp);
      const picked = limit > 0 ? withUsage.slice(0, limit) : withUsage;
      if (picked.length === 0) {
        showMessage("暂无可导出的原始 usage 记录（需在设置中开启相关功能后产生）", 3000, "info");
        return;
      }
      const payload = picked.map((r) => ({
        timestamp: r.timestamp,
        apiKeyName: r.apiKeyName,
        model: r.model,
        source: r.source,
        recorded: {
          inputTokens: r.inputTokens,
          outputTokens: r.outputTokens,
          cacheReadTokens: r.cacheReadTokens ?? 0,
          cacheCreationTokens: r.cacheCreationTokens ?? 0,
          reasoningTokens: r.reasoningTokens ?? 0,
          multimodalEstimated: r.multimodalEstimated ?? false,
          totalTokens: r.totalTokens,
          estimated: r.estimated ?? false,
        },
        rawUsage: r.rawUsage,
      }));
      const data = JSON.stringify(
        {
          exportedAt: new Date().toISOString(),
          note: "原始 usage 来自 API 供应商响应，未做任何裁剪，用于排查用量统计偏差。",
          count: payload.length,
          records: payload,
        },
        null,
        2
      );
      this.downloadFile(`siyuan-token-stats-usage-${new Date().toISOString().split("T")[0]}.json`, data, "application/json");
      showMessage(`已导出 ${payload.length} 条原始 usage 记录`, 3000, "info");
    });

    el.querySelector("#tks-clear-records")?.addEventListener("click", () => {
      confirm("清除调用记录", "确定清除所有 Token 调用记录吗？API Key 配置将保留。", () => {
        this.store.clearRecords();
        this.store.save();
        this.keyManager.clearAllAlerts();
        this.refreshContent();
        showMessage("记录已清除", 2000, "info");
      });
    });

    // Token 趋势区间控制
    el.querySelector("#tks-trend-apply")?.addEventListener("click", () => {
      const start = (el.querySelector("#tks-trend-start") as HTMLInputElement)?.value || "";
      const end = (el.querySelector("#tks-trend-end") as HTMLInputElement)?.value || "";
      const aggregation = (el.querySelector("#tks-trend-aggregation") as HTMLSelectElement)?.value as "daily" | "weekly" | "monthly";
      this.store.updateSettings({
        trendDateRangeStart: start,
        trendDateRangeEnd: end,
        trendAggregation: aggregation,
      });
      this.store.save();
      this.refreshContent();
    });

    el.querySelector("#tks-trend-reset")?.addEventListener("click", () => {
      this.store.updateSettings({
        trendDateRangeStart: "",
        trendDateRangeEnd: "",
        trendAggregation: "daily",
      });
      this.store.save();
      this.refreshContent();
    });
  }

  /** 触发浏览器下载 */
  private downloadFile(filename: string, content: string, mime: string): void {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    // 延迟回收：部分浏览器在 click 触发下载完成前回收 URL 会导致下载失败
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  /** 生成调用记录表的 CSV（含汇总信息表头） */
  private buildRecordsCsv(): string {
    const records = this.store.getRecords().slice().sort((a, b) => a.timestamp - b.timestamp);
    const cur = this.store.getSettings().currency || "¥";
    const summary = this.summary;
    const escapeCsv = (v: string | number): string => {
      const s = String(v);
      return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const lines: string[] = [];
    // 汇总行（以 # 开头，便于表格软件识别为注释/标题）
    if (summary) {
      lines.push(`# 总Token,${summary.totalTokens}`);
      lines.push(`# 输入Token,${summary.totalInputTokens}`);
      lines.push(`# 输出Token,${summary.totalOutputTokens}`);
      lines.push(`# 请求数,${summary.totalRequests}`);
      lines.push(`# 总费用,${cur}${summary.totalCost.toFixed(4)}`);
    }
    lines.push(`# 记录数,${records.length}`);
    const archivesForCsv = this.store.getArchives();
    if (archivesForCsv.length > 0) lines.push(`# 归档月份数,${archivesForCsv.length}`);
    // 表头
    lines.push(["时间", "模型", "输入Token", "缓存命中Token", "输出Token", "总计Token", "费用", "缓存成本", "Key名称", "文档", "耗时(ms)", "成功"].join(","));
    // 数据行
    for (const r of records) {
      const d = new Date(r.timestamp);
      const time = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
      const keyName = this.store.getApiKey(r.apiKeyId)?.name || r.apiKeyName || "";
      const cacheCost = this.store.hasAnyPrice() ? this.store.getRecordCacheCost(r).toFixed(4) : "";
      lines.push([
        time,
        r.model,
        r.inputTokens,
        r.cacheReadTokens ?? "",
        r.outputTokens,
        r.totalTokens,
        cur + this.store.getRecordCost(r).toFixed(4),
        cur + cacheCost,
        keyName,
        r.docPath || "",
        r.requestTime,
        r.success ? "是" : "否",
      ].map(escapeCsv).join(","));
    }
    // 归档月份汇总行：保证「总计」= 各明细行之和（与仪表盘口径一致）
    for (const a of archivesForCsv) {
      lines.push([
        `${a.month} (归档)`,
        "归档(按月聚合)",
        a.totalInputTokens,
        a.totalCacheReadTokens,
        a.totalOutputTokens,
        a.totalTokens,
        cur + a.cost.toFixed(4),
        cur + a.cacheCost.toFixed(4),
        "",
        "",
        "—",
      ].map(escapeCsv).join(","));
    }
    // 加 BOM 头，保证 Excel 正确识别 UTF-8 中文
    return "﻿" + lines.join("\n");
  }

  // ─── L2 数据飞轮面板（v1.5.3）───

  private renderProgress(percent: number, label: string, tone: "ok" | "warn" | "over" = "ok"): string {
    const p = Math.max(0, Math.min(100, percent));
    return `<div class="tks-progress">
      <div class="tks-progress-head"><span>${esc(label)}</span><span>${percent.toFixed(1)}%</span></div>
      <div class="tks-progress-track"><div class="tks-progress-fill tks-progress-fill--${tone}" style="width:${p}%"></div></div>
    </div>`;
  }

  private renderForecastPanel(s: StatisticsSummary, settings: PluginSettings): string {
    if (settings.enableForecast === false) return "";
    const f = projectMonthEnd(this.store, settings, this.keyManager, new Date());
    const numFmt = settings.tokenDisplayUnit || "auto";
    if (!f.hasData) {
      return `<div class="tks-section"><h3 class="tks-section-title">🔮 月末预测</h3><div class="tks-empty-chart">当前周期内暂无用量数据，产生调用后将自动预测月末费用与 Token。</div></div>`;
    }
    const cur = this.store.getCurrency();
    const toneOf = (p: number): "ok" | "warn" | "over" => (p > 100 ? "over" : p > 80 ? "warn" : "ok");
    const tokenBar = f.tokenLimit > 0 ? this.renderProgress(f.projectedTokenPercent, "预计月末 Token 占限额", toneOf(f.projectedTokenPercent)) : "";
    const costBar = f.costLimit > 0 ? this.renderProgress(f.projectedCostPercent, "预计月末费用占限额", toneOf(f.projectedCostPercent)) : "";
    const methodText = settings.forecastMethod === "linear" ? "已用日均线性外推" : `最近 ${(settings.forecastWindowDays || 7)} 日趋势`;
    return `<div class="tks-section">
      <h3 class="tks-section-title">🔮 月末预测（${esc(f.cycleLabel)}）</h3>
      <div class="tks-forecast-grid">
        <div class="tks-fc-card"><div class="tks-fc-value">${cur}${f.projectedCost.toFixed(2)}</div><div class="tks-fc-label">预计月末费用</div><div class="tks-fc-sub">已用 ${cur}${f.usedCost.toFixed(2)} · 日均 ${cur}${f.runRateCost.toFixed(2)}</div></div>
        <div class="tks-fc-card"><div class="tks-fc-value">${fmtToken(f.projectedTokens, numFmt)}</div><div class="tks-fc-label">预计月末 Token</div><div class="tks-fc-sub">已用 ${fmtToken(f.usedTokens, numFmt)} · 日均 ${fmtToken(f.runRateTokens, numFmt)}</div></div>
        <div class="tks-fc-card"><div class="tks-fc-value">${f.daysLeft.toFixed(0)}</div><div class="tks-fc-label">剩余天数</div><div class="tks-fc-sub">共 ${f.daysTotal} 天 · 已过 ${f.daysElapsed.toFixed(1)} 天</div></div>
      </div>
      ${tokenBar}${costBar}
      <div class="tks-fc-note">预测基于「${esc(methodText)}」，仅供参考，实际以 API 供应商官方账单为准。</div>
    </div>`;
  }

  private renderAnomalyPanel(s: StatisticsSummary, settings: PluginSettings): string {
    if (settings.enableAnomaly === false) return "";
    const a = detectAnomalies(this.store, settings, new Date());
    if (!a.hasData) {
      return `<div class="tks-section"><h3 class="tks-section-title">⚠️ 用量异常</h3><div class="tks-empty-chart">暂无足够数据，异常检测需至少 3 天用量记录。</div></div>`;
    }
    const items = a.anomalies.map((x) => {
      const sev = x.severity === "high" ? "tks-anom--high" : "tks-anom--med";
      return `<div class="tks-anom ${sev}">
        <div class="tks-anom-date">${esc(x.date)}</div>
        <div class="tks-anom-body">
          <div class="tks-anom-reason">${esc(x.reason)}</div>
          <div class="tks-anom-meta">Z=${x.z.toFixed(1)} · 偏离均值 ${x.deviationPct.toFixed(0)}%</div>
        </div>
      </div>`;
    }).join("");
    const newModels = a.newModels.length > 0
      ? `<div class="tks-anom-note">🆕 近 7 天新出现的模型：${a.newModels.map((m) => esc(m)).join("、")}</div>`
      : "";
    return `<div class="tks-section">
      <h3 class="tks-section-title">⚠️ 用量异常（近 ${settings.anomalyLookbackDays || 30} 天）</h3>
      ${a.anomalies.length === 0 ? `<div class="tks-empty-chart">未检测到显著异常（阈值 Z ≥ ${(settings.anomalySensitivity || 2.5).toFixed(1)}）。</div>` : `<div class="tks-anom-list">${items}</div>`}
      ${newModels}
    </div>`;
  }

  private renderSuggestionsPanel(s: StatisticsSummary, settings: PluginSettings): string {
    if (settings.enableSuggestions === false) return "";
    const list = buildSuggestions(this.store, settings, s, new Date());
    if (list.length === 0) {
      return `<div class="tks-section"><h3 class="tks-section-title">💡 优化建议</h3><div class="tks-empty-chart">暂无优化建议，当前用量结构较为均衡。</div></div>`;
    }
    const items = list.map((x) => {
      const sevCls = x.severity === "high" ? "tks-sug--high" : x.severity === "medium" ? "tks-sug--med" : "tks-sug--low";
      const sevTxt = x.severity === "high" ? "高" : x.severity === "medium" ? "中" : "低";
      const saving = typeof x.estimatedSaving === "number" && x.estimatedSaving > 0
        ? `<span class="tks-sug-saving">预估可省 ${this.store.getCurrency()}${x.estimatedSaving.toFixed(2)}/周期</span>` : "";
      return `<div class="tks-sug ${sevCls}">
        <div class="tks-sug-head"><span class="tks-sug-sev">${sevTxt}</span><span class="tks-sug-title">${esc(x.title)}</span>${saving}</div>
        <div class="tks-sug-detail">${esc(x.detail)}</div>
      </div>`;
    }).join("");
    return `<div class="tks-section">
      <h3 class="tks-section-title">💡 优化建议</h3>
      <div class="tks-sug-list">${items}</div>
    </div>`;
  }
}

/**
 * 统计仪表盘
 * 使用 SiYuan Dialog 展示可视化的 Token 用量统计。
 */
import { Dialog, showMessage, confirm, getFrontend } from "siyuan";
import type { Store } from "./store";
import type { KeyManager } from "./key-manager";
import type { StatisticsSummary, KeyStat, DailyStat, ModelStat, TokenRecord, PluginSettings } from "./types";

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

export class Dashboard {
  private store: Store;
  private keyManager: KeyManager;
  private dialog: Dialog | null = null;
  private summary: StatisticsSummary | null = null;
  private refreshTimer: ReturnType<typeof setInterval> | null = null;

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
        height: mobile ? "85vh" : "700px",
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
      totalTime += r.requestTime;

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
          cost: 0,
        };
      }
      summary.modelStats[modelKey].count++;
      summary.modelStats[modelKey].tokens += r.totalTokens;
      summary.modelStats[modelKey].inputTokens += r.inputTokens;
      summary.modelStats[modelKey].outputTokens += r.outputTokens;
      summary.modelStats[modelKey].cost += this.store.getRecordCost(r);
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
        <!-- 汇总卡片 -->
        <div class="tks-summary-cards">
          <div class="tks-card">
            <div class="tks-card-icon">🪙</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${s.totalTokens.toLocaleString()}</div>
              <div class="tks-card-label">总 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📥</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${s.totalInputTokens.toLocaleString()}</div>
              <div class="tks-card-label">输入 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📤</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${s.totalOutputTokens.toLocaleString()}</div>
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
          ${settings.globalQuotaLimit > 0 ? `
          <div class="tks-card tks-card-global">
            <div class="tks-card-icon">🌍</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${globalPercent.toFixed(1)}%</div>
              <div class="tks-card-label">全局限额 ${globalUsage.totalTokens.toLocaleString()} / ${settings.globalQuotaLimit.toLocaleString()}</div>
            </div>
          </div>
          ` : ""}
        </div>

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
                ${recentRecords.map((r) => this.renderRecordRow(r)).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="tks-dashboard-actions">
          <button class="b3-button b3-button--outline" id="tks-refresh">🔄 刷新</button>
          <button class="b3-button b3-button--outline" id="tks-export-json">📥 导出 JSON</button>
          <button class="b3-button b3-button--outline" id="tks-export-csv">📊 导出 CSV</button>
          <button class="b3-button b3-button--outline b3-button--danger" id="tks-clear-records">🗑️ 清除记录</button>
        </div>
      </div>
    `;
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
    const quotaText =
      k.quotaLimit > 0
        ? `${k.totalTokens.toLocaleString()} / ${k.quotaLimit.toLocaleString()}`
        : `${k.totalTokens.toLocaleString()} (不限)`;

    const thresholdText = k.alertThreshold > 0 ? ` · 阈值 ${k.alertThreshold}%` : "";
    const statusIcon = k.isExceeded
      ? "⛔"
      : k.isAlert
      ? "⚠️"
      : k.quotaLimit > 0
      ? "✅"
      : "";

    return `
      <div class="tks-key-stat ${k.isAlert ? "tks-key-stat-alert" : ""} ${k.isExceeded ? "tks-key-stat-exceeded" : ""}">
        <div class="tks-key-stat-header">
          <span class="tks-key-stat-name">${statusIcon} ${esc(k.apiKeyName)}</span>
          <span class="tks-key-stat-requests">${k.totalRequests} 次请求</span>
        </div>
        <div class="tks-key-stat-bar">
          <div class="tks-key-stat-fill ${k.isAlert ? "alert" : ""} ${k.isExceeded ? "exceeded" : ""}"
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
    const W = 720, H = 260;
    const padL = 48, padR = 52, padT = 18, padB = 30;
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

    return `<svg class="tks-trend-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" width="100%">${grid}${bars}${line}${xlabels}</svg>`;
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
    const widthPercent = Math.max(1, (m.tokens / max) * 100);
    return `
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${esc(m.model)}">${esc(m.model)}</div>
        <div class="tks-model-bar-track">
          <div class="tks-model-bar-fill" style="width: ${widthPercent}%; background: ${modelColor(m.model.toLowerCase().trim())}"></div>
        </div>
        <div class="tks-model-detail">
          ${m.tokens.toLocaleString()} tokens · ${m.count} 次${this.store.hasAnyPrice() ? ` · 💰 ${this.store.formatCost(m.cost)}` : ""}
        </div>
      </div>
    `;
  }

  private renderRecordRow(r: TokenRecord): string {
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
        <td>${esc(r.model)}</td>
        <td>${r.inputTokens.toLocaleString()}</td>
        <td>${r.cacheReadTokens ? r.cacheReadTokens.toLocaleString() : "—"}</td>
        <td>${r.outputTokens.toLocaleString()}</td>
        <td><strong>${r.totalTokens.toLocaleString()}</strong></td>
        <td>${this.store.hasAnyPrice() ? this.store.formatCost(this.store.getRecordCost(r)) : "—"}</td>
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
    // 表头
    lines.push(["时间", "模型", "输入Token", "缓存命中Token", "输出Token", "总计Token", "费用", "Key名称", "耗时(ms)", "成功"].join(","));
    // 数据行
    for (const r of records) {
      const d = new Date(r.timestamp);
      const time = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
      const keyName = this.store.getApiKey(r.apiKeyId)?.name || r.apiKeyName || "";
      lines.push([
        time,
        r.model,
        r.inputTokens,
        r.cacheReadTokens ?? "",
        r.outputTokens,
        r.totalTokens,
        cur + this.store.getRecordCost(r).toFixed(4),
        keyName,
        r.requestTime,
        r.success ? "是" : "否",
      ].map(escapeCsv).join(","));
    }
    // 加 BOM 头，保证 Excel 正确识别 UTF-8 中文
    return "﻿" + lines.join("\n");
  }
}

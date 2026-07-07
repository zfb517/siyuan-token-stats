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
      summary.totalCost += this.store.calcCost(r.model, r.inputTokens, r.outputTokens);
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
      summary.modelStats[modelKey].cost += this.store.calcCost(r.model, r.inputTokens, r.outputTokens);
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

    const addToBucket = (key: string, tokens: number, count: number) => {
      if (!buckets[key]) {
        buckets[key] = { date: key, tokens: 0, count: 0 };
      }
      buckets[key].tokens += tokens;
      buckets[key].count += count;
    };

    for (const r of records) {
      if (r.timestamp < startDate.getTime() || r.timestamp > endDate.getTime()) {
        continue;
      }
      const d = new Date(r.timestamp);
      if (trendAggregation === "weekly") {
        const ws = getWeekStart(d);
        addToBucket(formatDate(ws), r.totalTokens, 1);
      } else if (trendAggregation === "monthly") {
        const ms = getMonthStart(d);
        addToBucket(formatDate(ms), r.totalTokens, 1);
      } else {
        addToBucket(formatDate(d), r.totalTokens, 1);
      }
    }

    return Object.values(buckets).sort((a, b) => a.date.localeCompare(b.date));
  }

  private renderHTML(s: StatisticsSummary): string {
    const recentRecords = this.store.getRecentRecords(30);
    const maxDailyTokens = Math.max(...s.dailyStats.map((d) => d.tokens), 1);
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
          <div class="tks-daily-chart">
            ${s.dailyStats.map((d) => this.renderDailyBar(d, maxDailyTokens, settings.trendAggregation)).join("")}
          </div>
          ${s.dailyStats.length === 0 ? '<div class="tks-empty-chart">当前区间内无数据</div>' : ""}
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
          <button class="b3-button b3-button--outline" id="tks-export">📥 导出数据</button>
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

  private renderDailyBar(d: DailyStat, max: number, aggregation: string): string {
    const heightPercent = Math.max(2, (d.tokens / max) * 100);
    let dateLabel = d.date.substring(5); // MM-DD
    if (aggregation === "weekly") {
      dateLabel = `W${d.date.substring(5, 7)}${d.date.substring(8, 10)}`;
    } else if (aggregation === "monthly") {
      dateLabel = d.date.substring(0, 7); // yyyy-MM
    }
    return `
      <div class="tks-daily-bar">
        <div class="tks-daily-value">${d.tokens > 999 ? (d.tokens / 1000).toFixed(1) + "k" : d.tokens}</div>
        <div class="tks-daily-col">
          <div class="tks-daily-fill" style="height: ${heightPercent}%"></div>
        </div>
        <div class="tks-daily-date">${dateLabel}</div>
      </div>
    `;
  }

  private renderModelBar(m: ModelStat, max: number): string {
    const widthPercent = Math.max(1, (m.tokens / max) * 100);
    return `
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${esc(m.model)}">${esc(m.model)}</div>
        <div class="tks-model-bar-track">
          <div class="tks-model-bar-fill" style="width: ${widthPercent}%"></div>
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
        <td>${r.outputTokens.toLocaleString()}</td>
        <td><strong>${r.totalTokens.toLocaleString()}</strong></td>
        <td>${this.store.hasAnyPrice() ? this.store.formatCost(this.store.calcCost(r.model, r.inputTokens, r.outputTokens)) : "—"}</td>
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

    el.querySelector("#tks-export")?.addEventListener("click", () => {
      const data = this.store.exportAll();
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showMessage("数据已导出", 2000, "info");
    });

    el.querySelector("#tks-clear-records")?.addEventListener("click", () => {
      confirm("清除调用记录", "确定清除所有 Token 调用记录吗？API Key 配置将保留。", () => {
        this.store.clearRecords();
        this.store.save();
        this.keyManager.clearAllAlerts();
        this.show();
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
      this.show();
    });

    el.querySelector("#tks-trend-reset")?.addEventListener("click", () => {
      this.store.updateSettings({
        trendDateRangeStart: "",
        trendDateRangeEnd: "",
        trendAggregation: "daily",
      });
      this.store.save();
      this.show();
    });
  }
}

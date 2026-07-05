"use strict";
const T = require("siyuan"),
  se = `/* ═══════════════════════════════════════════
   Token Statistics Plugin - Styles
   使用 SiYuan CSS 变量，自动适配明暗主题
   ═══════════════════════════════════════════ */

/* ─── 仪表盘 ─── */
.tks-dashboard {
  padding: 16px 20px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
}

.tks-summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
}

@media (max-width: 800px) {
  .tks-summary-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ─── 移动端适配（含鸿蒙 NEXT） ─── */
@media (max-width: 600px) {
  .tks-dashboard {
    padding: 10px 12px;
  }

  .tks-summary-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }

  .tks-card {
    padding: 8px 10px;
  }

  .tks-card-icon {
    font-size: 18px;
  }

  .tks-card-value {
    font-size: 14px;
  }

  .tks-card-label {
    font-size: 10px;
  }

  .tks-section-title {
    font-size: 13px;
  }

  /* Key 统计条在窄屏下改为更紧凑布局 */
  .tks-key-stat-header {
    flex-wrap: wrap;
  }

  /* 模型分布条在窄屏下名称缩短 */
  .tks-model-name {
    width: 80px;
    font-size: 11px;
  }

  .tks-model-detail {
    width: 100px;
    font-size: 10px;
  }

  /* 记录表横向滚动 */
  .tks-records-table-wrap {
    overflow-x: auto;
  }

  .tks-records-table {
    min-width: 600px;
  }

  /* Key 管理项垂直布局 */
  .tks-key-item {
    flex-direction: column;
    align-items: stretch;
  }

  .tks-key-actions {
    margin-left: 0;
    margin-top: 8px;
    justify-content: flex-end;
  }

  .tks-key-quota {
    flex-wrap: wrap;
  }

  .tks-quota-bar {
    width: 100%;
  }

  /* Key 编辑器双列改单列 */
  .tks-form-row-2col {
    grid-template-columns: 1fr;
  }

  /* 仪表盘操作按钮 */
  .tks-dashboard-actions {
    flex-wrap: wrap;
  }
}

.tks-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: var(--b3-theme-surface);
  border: 1px solid var(--b3-border-color);
  border-radius: 8px;
}

.tks-card-icon {
  font-size: 24px;
  line-height: 1;
}

.tks-card-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--b3-theme-primary);
  line-height: 1.2;
}

.tks-card-label {
  font-size: 11px;
  color: var(--b3-theme-on-surface);
  margin-top: 2px;
}

/* ─── 区块 ─── */
.tks-section {
  margin-bottom: 20px;
}

.tks-section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--b3-theme-on-background);
  margin: 0 0 10px 0;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--b3-border-color);
}

/* ─── API Key 统计条 ─── */
.tks-key-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tks-key-stat {
  padding: 10px 12px;
  background: var(--b3-theme-surface);
  border: 1px solid var(--b3-border-color);
  border-radius: 6px;
  transition: border-color 0.2s;
}

.tks-key-stat-alert {
  border-color: var(--b3-theme-warning, #d97706);
}

.tks-key-stat-exceeded {
  border-color: var(--b3-theme-error);
}

.tks-key-stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.tks-key-stat-name {
  font-weight: 600;
  font-size: 13px;
  color: var(--b3-theme-on-background);
}

.tks-key-stat-requests {
  font-size: 12px;
  color: var(--b3-theme-on-surface);
}

.tks-key-stat-bar {
  height: 8px;
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 4px;
}

.tks-key-stat-fill {
  height: 100%;
  background: var(--b3-theme-primary);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.tks-key-stat-fill.alert {
  background: var(--b3-theme-warning, #d97706);
}

.tks-key-stat-fill.exceeded {
  background: var(--b3-theme-error);
}

.tks-key-stat-detail {
  font-size: 11px;
  color: var(--b3-theme-on-surface);
}

/* ─── Token 趋势控制 ─── */
.tks-trend-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--b3-theme-on-surface);
}

.tks-trend-controls input[type="date"] {
  width: 130px;
  padding: 4px 8px;
  font-size: 12px;
}

.tks-trend-controls .b3-select {
  width: auto;
  min-width: 70px;
  padding: 4px 8px;
  font-size: 12px;
}

.tks-trend-controls .b3-button {
  padding: 4px 10px;
  font-size: 12px;
}

.tks-empty-chart {
  text-align: center;
  padding: 30px;
  color: var(--b3-theme-on-surface);
  font-size: 12px;
  background: var(--b3-theme-surface);
  border: 1px dashed var(--b3-border-color);
  border-radius: 6px;
}

.tks-card-global .tks-card-value {
  color: var(--b3-theme-warning, #d97706);
}

/* ─── 每日趋势图 ─── */
.tks-daily-chart {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 140px;
  padding: 10px;
  background: var(--b3-theme-surface);
  border: 1px solid var(--b3-border-color);
  border-radius: 6px;
  overflow-x: auto;
}

.tks-daily-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 40px;
  height: 100%;
  justify-content: flex-end;
}

.tks-daily-value {
  font-size: 10px;
  color: var(--b3-theme-on-surface);
  margin-bottom: 4px;
  white-space: nowrap;
}

.tks-daily-col {
  width: 70%;
  flex: 1;
  display: flex;
  align-items: flex-end;
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.04));
  border-radius: 3px 3px 0 0;
}

.tks-daily-fill {
  width: 100%;
  background: linear-gradient(180deg, var(--b3-theme-primary), var(--b3-theme-primary-light, rgba(0, 0, 0, 0.2)));
  border-radius: 3px 3px 0 0;
  transition: height 0.3s ease;
}

.tks-daily-date {
  font-size: 10px;
  color: var(--b3-theme-on-surface);
  margin-top: 4px;
}

/* ─── 模型分布 ─── */
.tks-model-stats {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tks-model-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.tks-model-name {
  width: 150px;
  flex-shrink: 0;
  color: var(--b3-theme-on-background);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tks-model-bar-track {
  flex: 1;
  height: 18px;
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));
  border-radius: 3px;
  overflow: hidden;
}

.tks-model-bar-fill {
  height: 100%;
  background: var(--b3-theme-primary);
  border-radius: 3px;
  transition: width 0.3s ease;
  opacity: 0.7;
}

.tks-model-detail {
  width: 180px;
  flex-shrink: 0;
  color: var(--b3-theme-on-surface);
  font-size: 11px;
  text-align: right;
}

/* ─── 请求记录表 ─── */
.tks-records-table-wrap {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid var(--b3-border-color);
  border-radius: 6px;
}

.tks-records-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.tks-records-table thead {
  position: sticky;
  top: 0;
  z-index: 1;
}

.tks-records-table th {
  background: var(--b3-theme-surface);
  color: var(--b3-theme-on-surface);
  padding: 8px 10px;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid var(--b3-border-color);
  white-space: nowrap;
}

.tks-records-table td {
  padding: 6px 10px;
  border-bottom: 1px solid var(--b3-border-color);
  color: var(--b3-theme-on-background);
  white-space: nowrap;
}

.tks-records-table tbody tr:hover {
  background: var(--b3-list-hover, rgba(0, 0, 0, 0.03));
}

/* ─── 仪表盘操作按钮 ─── */
.tks-dashboard-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding-top: 10px;
  border-top: 1px solid var(--b3-border-color);
}

/* ─── API Key 管理对话框 ─── */
.tks-key-mgr {
  padding: 16px 20px;
  height: 100%;
  overflow-y: auto;
}

.tks-key-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--b3-border-color);
}

.tks-key-hint {
  font-size: 12px;
  color: var(--b3-theme-on-surface);
}

.tks-key-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tks-key-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: var(--b3-theme-surface);
  border: 1px solid var(--b3-border-color);
  border-radius: 6px;
}

.tks-key-info {
  flex: 1;
  min-width: 0;
}

.tks-key-name {
  font-weight: 600;
  font-size: 13px;
  color: var(--b3-theme-on-background);
  margin-bottom: 4px;
}

.tks-badge {
  display: inline-block;
  padding: 1px 6px;
  font-size: 10px;
  border-radius: 3px;
  background: var(--b3-theme-primary-light, rgba(0, 0, 0, 0.08));
  color: var(--b3-theme-primary);
  margin-left: 4px;
  vertical-align: middle;
}

.tks-badge-off {
  background: rgba(0, 0, 0, 0.06);
  color: var(--b3-theme-on-surface);
}

.tks-key-detail {
  font-size: 11px;
  color: var(--b3-theme-on-surface);
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
}

.tks-key-provider {
  padding: 0 4px;
  border-radius: 2px;
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));
  white-space: nowrap;
}

.tks-key-url {
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--b3-theme-on-surface);
}

.tks-key-quota {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tks-quota-bar {
  width: 120px;
  height: 6px;
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));
  border-radius: 3px;
  overflow: hidden;
}

.tks-quota-fill {
  height: 100%;
  background: var(--b3-theme-primary);
  border-radius: 3px;
}

.tks-quota-fill.tks-quota-alert {
  background: var(--b3-theme-warning, #d97706);
}

.tks-quota-text {
  font-size: 11px;
  color: var(--b3-theme-on-surface);
  white-space: nowrap;
}

.tks-key-actions {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
  margin-left: 10px;
}

/* ─── Key 编辑器表单 ─── */
.tks-key-editor {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.tks-form-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tks-form-row label {
  font-size: 12px;
  font-weight: 600;
  color: var(--b3-theme-on-background);
}

.tks-form-row .b3-text-field,
.tks-form-row .b3-select {
  width: 100%;
}

.tks-form-row-2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.tks-form-hint {
  font-size: 11px;
  color: var(--b3-theme-on-surface);
}

.tks-form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
}

/* ─── 设置面板滚动支持 ─── */
.b3-dialog:has([id^="tks-"]) {
  max-height: 85vh;
}

.b3-dialog:has([id^="tks-"]) .b3-dialog__container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.b3-dialog:has([id^="tks-"]) .b3-dialog__body {
  max-height: calc(85vh - 120px);
  overflow-y: auto;
}

/* 滚动条样式 */
.b3-dialog:has([id^="tks-"]) .b3-dialog__body::-webkit-scrollbar {
  width: 6px;
}

.b3-dialog:has([id^="tks-"]) .b3-dialog__body::-webkit-scrollbar-thumb {
  background: var(--b3-theme-on-surface-light, rgba(0, 0, 0, 0.2));
  border-radius: 3px;
}
`,
  E = "data/storage/siyuan-token-stats/data.json",
  oe = "data/storage/siyuan-token-stats/data.json.bak",
  q = "1.3.3",
  I = {
    matchByUrl: !0,
    interceptExternalAPIs: !0,
    blockOnQuotaExceeded: !1,
    quotaResetCycle: "monthly",
    abortStreamOnExceeded: !0,
    showNotifications: !0,
    maxRecords: 5e3,
    globalQuotaLimit: 0,
    globalAlertThreshold: 0,
    globalQuotaResetCycle: "monthly",
    globalUsedTokensOffset: 0,
    globalUsedInputTokensOffset: 0,
    globalUsedOutputTokensOffset: 0,
    trendDateRangeStart: "",
    trendDateRangeEnd: "",
    trendAggregation: "daily",
    debugLogging: !1
  };
class ae {
  constructor() {
    ((this.saveTimer = null),
      (this.data = { version: q, lastSavedAt: 0, apiKeys: [], records: [], settings: { ...I } }));
  }
  async load() {
    try {
      const e = await fetch(`/api/file/getFile?path=${encodeURIComponent(E)}`);
      if (!e.ok) {
        console.log("[TokenStats] No existing data file, starting fresh.");
        return;
      }
      const t = await e.text();
      if (!t) return;
      const n = JSON.parse(t),
        s = (n.apiKeys || []).map((a) => {
          const i = { ...a };
          return (
            i.id === "siyuan-built-in" && i.provider === "siyuan" && (i.provider = i.baseUrl ? i.baseUrl : "SiYuan AI"),
            i.usedTokensOffset === void 0 && (i.usedTokensOffset = 0),
            i.usedInputTokensOffset === void 0 && (i.usedInputTokensOffset = 0),
            i.usedOutputTokensOffset === void 0 && (i.usedOutputTokensOffset = 0),
            i
          );
        }),
        r = { ...I, ...n.settings };
      if ("autoDetectSiYuanAI" in (n.settings || {})) {
        const a = n.settings;
        r.matchByUrl = a.autoDetectSiYuanAI;
      }
      ((this.data = { version: q, lastSavedAt: n.lastSavedAt || 0, apiKeys: s, records: n.records || [], settings: r }),
        console.log(`[TokenStats] Loaded: ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`));
    } catch (e) {
      console.warn("[TokenStats] Failed to load data, starting fresh:", e);
    }
  }
  scheduleSave(e = 500) {
    (this.saveTimer && clearTimeout(this.saveTimer),
      (this.saveTimer = setTimeout(() => {
        this.save().catch((t) => console.error("[TokenStats] Save failed:", t));
      }, e)));
  }
  async save() {
    try {
      this.data.lastSavedAt = Date.now();
      try {
        const n = await fetch(`/api/file/getFile?path=${encodeURIComponent(E)}`);
        if (n.ok) {
          const s = await n.text();
          if (s) {
            const r = new FormData();
            (r.append("path", oe),
              r.append("file", new Blob([s], { type: "application/json" })),
              await fetch("/api/file/putFile", { method: "POST", body: r }));
          }
        }
      } catch {}
      const e = new FormData();
      (e.append("path", E),
        e.append("file", new Blob([JSON.stringify(this.data, null, 2)], { type: "application/json" })));
      const t = await fetch("/api/file/putFile", { method: "POST", body: e });
      if (!t.ok) throw new Error(`putFile returned ${t.status}`);
    } catch (e) {
      console.error("[TokenStats] Failed to save data:", e);
    }
  }
  async mergeFromRemote() {
    try {
      const e = await fetch(`/api/file/getFile?path=${encodeURIComponent(E)}`);
      if (!e.ok) return;
      const t = await e.text();
      if (!t) return;
      const n = JSON.parse(t);
      if (!n) return;
      const s = this.data,
        r = n.lastSavedAt || 0,
        a = s.lastSavedAt || 0;
      if (r === a && r > 0) {
        console.log("[TokenStats] Sync merge: data unchanged, skipping.");
        return;
      }
      console.log(`[TokenStats] Sync merge: local ${a}, remote ${r}`);
      const i = n.records || [],
        o = new Map();
      for (const b of s.records) o.set(b.id, b);
      for (const b of i) o.has(b.id) || o.set(b.id, b);
      const l = Array.from(o.values()).sort((b, x) => b.timestamp - x.timestamp),
        c = s.settings.maxRecords,
        u = l.length > c ? l.slice(-c) : l,
        d = n.apiKeys || [],
        h = new Map(),
        g = a >= r,
        p = g ? d : s.apiKeys,
        k = g ? s.apiKeys : d;
      for (const b of p) h.set(b.id, b);
      for (const b of k) h.set(b.id, b);
      const v = Array.from(h.values()),
        m = g ? { ...I, ...s.settings } : { ...I, ...n.settings };
      ((this.data = { version: q, lastSavedAt: Math.max(a, r), apiKeys: v, records: u, settings: m }),
        await this.save(),
        console.log(`[TokenStats] Sync merge complete: ${v.length} keys, ${u.length} records.`));
    } catch (e) {
      console.warn("[TokenStats] Sync merge failed:", e);
    }
  }
  getApiKeys() {
    return this.data.apiKeys;
  }
  getApiKey(e) {
    return this.data.apiKeys.find((t) => t.id === e);
  }
  addApiKey(e) {
    (this.data.apiKeys.push(e), this.scheduleSave());
  }
  updateApiKey(e, t) {
    const n = this.data.apiKeys.findIndex((s) => s.id === e);
    n >= 0 && ((this.data.apiKeys[n] = { ...this.data.apiKeys[n], ...t }), this.scheduleSave());
  }
  deleteApiKey(e) {
    ((this.data.apiKeys = this.data.apiKeys.filter((t) => t.id !== e)), this.scheduleSave());
  }
  addRecord(e) {
    const recs = this.data.records;
    const last5 = recs.slice(-5);
    for (const r of last5) {
      if (
        r.apiKeyId === e.apiKeyId &&
        r.timestamp === e.timestamp &&
        r.totalTokens === e.totalTokens &&
        r.model === e.model
      ) {
        console.log("[TokenStats] Duplicate record skipped:", e.apiKeyName, e.model, e.totalTokens);
        return;
      }
    }
    recs.push(e);
    const t = this.data.settings.maxRecords;
    (this.data.records.length > t && (this.data.records = this.data.records.slice(-t)), this.scheduleSave());
  }
  getRecords() {
    return this.data.records;
  }
  getRecentRecords(e = 50) {
    return [...this.data.records].sort((t, n) => n.timestamp - t.timestamp).slice(0, e);
  }
  clearRecords() {
    ((this.data.records = []), this.scheduleSave());
  }
  clearAll() {
    ((this.data.records = []), (this.data.apiKeys = []), this.scheduleSave());
  }
  getSettings() {
    return this.data.settings;
  }
  updateSettings(e) {
    ((this.data.settings = { ...this.data.settings, ...e }), this.scheduleSave());
  }
  resetSettings() {
    ((this.data.settings = { ...I }), this.scheduleSave());
  }
  exportAll() {
    return JSON.stringify(this.data, null, 2);
  }
  exportRecords() {
    return JSON.stringify(this.data.records, null, 2);
  }
}
function te(f) {
  if (!f) return "";
  try {
    const e = new URL(f, window.location.href);
    return e.pathname + e.search;
  } catch {
    return f;
  }
}
class ie {
  constructor(e) {
    ((this.store = e), (this.alertedKeys = new Set()), (this.alertedGlobal = !1));
  }
  getAllKeys() {
    return this.store.getApiKeys();
  }
  findByKey(e) {
    if (e) return this.store.getApiKeys().find((t) => t.enabled && t.keyFull && t.keyFull === e);
  }
  findByUrl(e) {
    const t = te(e);
    if (t)
      return this.store.getApiKeys().find((n) => {
        if (!n.enabled || !n.baseUrl) return !1;
        const s = te(n.baseUrl);
        return s ? t.includes(s) || s.includes(t) : !1;
      });
  }
  getResetBoundary(e) {
    if (e === "none") return 0;
    const t = new Date();
    return e === "daily"
      ? new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime()
      : new Date(t.getFullYear(), t.getMonth(), 1).getTime();
  }
  getKeyUsage(e) {
    const t = this.store.getSettings(),
      n = this.getResetBoundary(t.quotaResetCycle),
      s = this.store.getApiKey(e),
      r = this.store.getRecords().filter((l) => l.apiKeyId === e && l.timestamp >= n),
      a = (s == null ? void 0 : s.usedTokensOffset) ?? 0,
      i = (s == null ? void 0 : s.usedInputTokensOffset) ?? 0,
      o = (s == null ? void 0 : s.usedOutputTokensOffset) ?? 0;
    return {
      totalTokens: r.reduce((l, c) => l + c.totalTokens, 0) + a,
      totalInputTokens: r.reduce((l, c) => l + c.inputTokens, 0) + i,
      totalOutputTokens: r.reduce((l, c) => l + c.outputTokens, 0) + o,
      totalRequests: r.length
    };
  }
  getRemainingQuota(e) {
    const t = this.store.getApiKey(e);
    if (!t || t.quotaLimit <= 0) return -1;
    const n = this.getKeyUsage(e);
    return Math.max(0, t.quotaLimit - n.totalTokens);
  }
  getUsagePercent(e) {
    const t = this.store.getApiKey(e);
    if (!t || t.quotaLimit <= 0) return 0;
    const n = this.getKeyUsage(e);
    return Math.min(100, (n.totalTokens / t.quotaLimit) * 100);
  }
  isQuotaExceeded(e) {
    const t = this.store.getApiKey(e);
    return !t || t.quotaLimit <= 0 ? !1 : this.getKeyUsage(e).totalTokens >= t.quotaLimit;
  }
  wouldExceedQuota(e, t) {
    const n = this.store.getApiKey(e);
    return !n || n.quotaLimit <= 0 ? !1 : this.getKeyUsage(e).totalTokens + t > n.quotaLimit;
  }
  isThresholdReached(e) {
    const t = this.store.getApiKey(e);
    return !t || t.alertThreshold <= 0 || t.quotaLimit <= 0
      ? !1
      : (this.getKeyUsage(e).totalTokens / t.quotaLimit) * 100 >= t.alertThreshold;
  }
  checkThreshold(e, t) {
    const n = this.store.getApiKey(e);
    if (n) {
      if (
        (this.alertedKeys.has(e) && !this.isThresholdReached(e) && this.alertedKeys.delete(e),
        this.isThresholdReached(e) && !this.alertedKeys.has(e))
      ) {
        this.alertedKeys.add(e);
        const s = this.getKeyUsage(e),
          r = ((s.totalTokens / n.quotaLimit) * 100).toFixed(1),
          a = `⚠️ Token 用量提醒：${n.name} 已使用 ${r}%（${s.totalTokens.toLocaleString()} / ${n.quotaLimit.toLocaleString()} tokens）`;
        t(a);
      }
      if (this.isQuotaExceeded(e)) {
        const s = `⛔ Token 限额已用尽：${n.name}（限额 ${n.quotaLimit.toLocaleString()} tokens）`;
        t(s);
      }
    }
  }
  resetAlert(e) {
    this.alertedKeys.delete(e);
  }
  clearAllAlerts() {
    (this.alertedKeys.clear(), (this.alertedGlobal = !1));
  }
  generateKeyId() {
    return `key-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
  }
  maskKey(e) {
    return e
      ? e.length <= 8
        ? e.substring(0, 2) + "***"
        : e.substring(0, 5) + "..." + e.substring(e.length - 4)
      : "(空)";
  }
  getDefaultBaseUrl(e) {
    return (
      {
        openai: "https://api.openai.com/v1/chat/completions",
        anthropic: "https://api.anthropic.com/v1/messages",
        deepseek: "https://api.deepseek.com/v1/chat/completions"
      }[e.toLowerCase()] || ""
    );
  }
  getGlobalUsage(e) {
    const t = this.getResetBoundary(e.globalQuotaResetCycle),
      n = this.store.getRecords().filter((s) => s.timestamp >= t);
    return {
      totalTokens: n.reduce((s, r) => s + r.totalTokens, 0) + (e.globalUsedTokensOffset ?? 0),
      totalInputTokens: n.reduce((s, r) => s + r.inputTokens, 0) + (e.globalUsedInputTokensOffset ?? 0),
      totalOutputTokens: n.reduce((s, r) => s + r.outputTokens, 0) + (e.globalUsedOutputTokensOffset ?? 0),
      totalRequests: n.length
    };
  }
  getGlobalRemainingQuota(e) {
    if (e.globalQuotaLimit <= 0) return -1;
    const t = this.getGlobalUsage(e);
    return Math.max(0, e.globalQuotaLimit - t.totalTokens);
  }
  getGlobalUsagePercent(e) {
    if (e.globalQuotaLimit <= 0) return 0;
    const t = this.getGlobalUsage(e);
    return Math.min(100, (t.totalTokens / e.globalQuotaLimit) * 100);
  }
  isGlobalQuotaExceeded(e) {
    return e.globalQuotaLimit <= 0 ? !1 : this.getGlobalUsage(e).totalTokens >= e.globalQuotaLimit;
  }
  wouldExceedGlobalQuota(e, t) {
    return e.globalQuotaLimit <= 0 ? !1 : this.getGlobalUsage(e).totalTokens + t > e.globalQuotaLimit;
  }
  isGlobalThresholdReached(e) {
    return e.globalAlertThreshold <= 0 || e.globalQuotaLimit <= 0
      ? !1
      : (this.getGlobalUsage(e).totalTokens / e.globalQuotaLimit) * 100 >= e.globalAlertThreshold;
  }
  checkGlobalThreshold(e, t) {
    if (!(e.globalQuotaLimit <= 0)) {
      if (
        (this.alertedGlobal && !this.isGlobalThresholdReached(e) && (this.alertedGlobal = !1),
        this.isGlobalThresholdReached(e) && !this.alertedGlobal)
      ) {
        this.alertedGlobal = !0;
        const n = this.getGlobalUsage(e),
          r = `⚠️ 全局 Token 用量提醒：已使用 ${((n.totalTokens / e.globalQuotaLimit) * 100).toFixed(1)}%（${n.totalTokens.toLocaleString()} / ${e.globalQuotaLimit.toLocaleString()} tokens）`;
        t(r);
      }
      if (this.isGlobalQuotaExceeded(e)) {
        const n = `⛔ 全局 Token 限额已用尽（限额 ${e.globalQuotaLimit.toLocaleString()} tokens）`;
        t(n);
      }
    }
  }
  resetGlobalAlert() {
    this.alertedGlobal = !1;
  }
}
class re {
  estimate(e) {
    if (!e) return 0;
    const t = (e.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length,
      n = (e.match(/[\u3000-\u303f\uff00-\uffef]/g) || []).length,
      s = (e.match(/[a-zA-Z]+/g) || []).length,
      r = s * 4,
      a = Math.max(0, e.length - t - n - r),
      i = Math.ceil(t * 1 + n * 0.5 + s * 1.3 + a * 0.25);
    return Math.max(0, i);
  }
  estimateFromMessages(e) {
    if (!Array.isArray(e)) return 0;
    let t = 0;
    for (const n of e) {
      if (typeof n == "string") t += this.estimate(n) + 4;
      else if (n != null && n.content) {
        if (typeof n.content == "string") t += this.estimate(n.content) + 4;
        else if (Array.isArray(n.content)) {
          for (const s of n.content)
            typeof s == "string" ? (t += this.estimate(s)) : s != null && s.text && (t += this.estimate(s.text));
          t += 4;
        }
      }
      n != null && n.role && (t += 1);
    }
    return t;
  }
  estimateFromText(e) {
    return this.estimate(e);
  }
}
function ne(f, e) {
  if (!f) return null;
  if (f instanceof Headers) return f.get(e);
  if (Array.isArray(f)) {
    for (const [s, r] of f) if (s.toLowerCase() === e.toLowerCase()) return r;
    return null;
  }
  const t = f,
    n = e.toLowerCase();
  for (const s of Object.keys(t)) if (s.toLowerCase() === n) return t[s];
  return null;
}
function le(f) {
  return typeof f == "string" ? f : f instanceof URL ? f.href : f.url;
}
function ce() {
  return `rec-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function R(f) {
  return (f && String(f).trim()) || "";
}
function de(f) {
  return !f || f === "unknown" || f === "siyuan-ai" || f === "default";
}
function $(f) {
  if (!f) return !0;
  const e = f.trim();
  return !!(
    /^\d{14,}-[a-z0-9]+$/i.test(e) ||
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e) ||
    /^\d+$/.test(e) ||
    (e.length > 40 && !/[._-]/.test(e))
  );
}
function L(...f) {
  for (const e of f) {
    const t = R(e);
    if (t && !de(t) && !$(t)) return t;
  }
  return "";
}
function ue(f) {
  return (
    /\/api\/ai\/agent\/chat\b/i.test(f) || /\/api\/ai\/chatGPT\b/i.test(f) || /\/api\/ai\/chatGPTWithAction\b/i.test(f)
  );
}
function ge(f) {
  return (
    typeof f == "object" &&
    f !== null &&
    "code" in f &&
    "msg" in f &&
    "data" in f &&
    !("choices" in f) &&
    !("usage" in f)
  );
}
function fe() {
  return {
    apiKeyId: "siyuan-ai-default",
    apiKeyName: "思源智能体",
    source: "siyuan-ai",
    provider: "SiYuan AI",
    model: "unknown"
  };
}
class pe {
  constructor(e, t, n) {
    ((this.installed = !1),
      (this.onThresholdAlert = () => {}),
      (this.siyuanConfigCache = null),
      (this.originalFetch = window.fetch.bind(window)),
      (this.store = e),
      (this.keyManager = t),
      (this.tokenCounter = n));
  }
  setThresholdCallback(e) {
    this.onThresholdAlert = e;
  }
  install() {
    if (this.installed) {
      console.warn("[TokenStats] Interceptor already installed.");
      return;
    }
    this.installed = !0;
    const e = this;
    ((window.fetch = async function (t, n) {
      const s = le(t),
        r = e.store.getSettings(),
        a = await e.extractBodyText(t, n),
        i = e.tryParseJson(a),
        o = await e.identifyAiCall(s, n, r, i);
      if (!o) return e.originalFetch(t, n);
      (console.log(`[TokenStats] Intercepted AI call: source=${o.source}, model=${o.model}, key=${o.apiKeyName}`),
        e.logDebug("Request body", { bodyText: a == null ? void 0 : a.slice(0, 500), parsedBody: i }));
      const l = Date.now();
      if (r.blockOnQuotaExceeded && r.globalQuotaLimit > 0) {
        const h = e.tokenCounter.estimateFromMessages(e.extractMessages(i));
        if (e.keyManager.isGlobalQuotaExceeded(r)) {
          const g = "[TokenStats] 已阻止请求：全局 Token 限额已用尽";
          return (console.warn(g), e.onThresholdAlert("global", g), e.createBlockedResponse(g, o));
        }
        if (e.keyManager.wouldExceedGlobalQuota(r, h)) {
          const p = `[TokenStats] 已阻止请求：全局剩余配额 ${e.keyManager.getGlobalRemainingQuota(r).toLocaleString()} tokens，预估输入 ${h.toLocaleString()} tokens 将超限`;
          return (console.warn(p), e.onThresholdAlert("global", p), e.createBlockedResponse(p, o));
        }
      }
      if (r.blockOnQuotaExceeded) {
        if (e.keyManager.isQuotaExceeded(o.apiKeyId)) {
          const g = e.store.getApiKey(o.apiKeyId),
            p = `[TokenStats] 已阻止请求：${(g == null ? void 0 : g.name) || o.apiKeyName} 的 Token 限额已用尽`;
          return (console.warn(p), e.onThresholdAlert(o.apiKeyId, p), e.createBlockedResponse(p, o));
        }
        const h = e.tokenCounter.estimateFromMessages(e.extractMessages(i));
        if (e.keyManager.wouldExceedQuota(o.apiKeyId, h)) {
          const g = e.store.getApiKey(o.apiKeyId),
            p = e.keyManager.getRemainingQuota(o.apiKeyId),
            k = `[TokenStats] 已阻止请求：${(g == null ? void 0 : g.name) || o.apiKeyName} 剩余配额 ${p.toLocaleString()} tokens，预估输入 ${h.toLocaleString()} tokens 将超限`;
          return (console.warn(k), e.onThresholdAlert(o.apiKeyId, k), e.createBlockedResponse(k, o));
        }
      }
      let c,
        u = !1;
      try {
        ((c = await e.originalFetch(t, n)), (u = c.ok));
      } catch (h) {
        throw (e.recordCall(o, 0, 0, l, !1, o.model), h);
      }
      const d = c.clone();
      return (
        e.analyzeResponse(d, o, l, i, u).catch((h) => console.warn("[TokenStats] Response analysis failed:", h)),
        c
      );
    }),
      console.log("[TokenStats] Fetch interceptor installed."));
  }
  createBlockedResponse(e, t) {
    const n = JSON.stringify({
      error: {
        type: "quota_exceeded",
        code: "token_stats_blocked",
        message: e,
        apiKeyId: t.apiKeyId,
        apiKeyName: t.apiKeyName
      }
    });
    return new Response(n, {
      status: 429,
      statusText: "Too Many Requests",
      headers: { "Content-Type": "application/json", "X-TokenStats-Blocked": "true" }
    });
  }
  uninstall() {
    this.installed &&
      ((window.fetch = this.originalFetch),
      (this.installed = !1),
      console.log("[TokenStats] Fetch interceptor uninstalled."));
  }
  async extractBodyText(e, t) {
    if (t != null && t.body && typeof t.body == "string") return t.body;
    if ((t == null ? void 0 : t.body) instanceof URLSearchParams) return t.body.toString();
    if ((t == null ? void 0 : t.body) instanceof FormData)
      try {
        const n = {};
        return (
          t.body.forEach((s, r) => {
            n[r] = typeof s == "string" ? s : s.name;
          }),
          JSON.stringify(n)
        );
      } catch {
        return null;
      }
    if ((t == null ? void 0 : t.body) instanceof Blob)
      try {
        return await t.body.text();
      } catch {
        return null;
      }
    if (t != null && t.body && (t.body instanceof ArrayBuffer || ArrayBuffer.isView(t.body)))
      try {
        return new TextDecoder().decode(t.body);
      } catch {
        return null;
      }
    if (e instanceof Request)
      try {
        return await e.clone().text();
      } catch {
        return null;
      }
    return null;
  }
  tryParseJson(e) {
    if (!e) return null;
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  isDebugEnabled() {
    return this.store.getSettings().debugLogging ?? !1;
  }
  logDebug(...e) {
    this.isDebugEnabled() && console.log("[TokenStats]", ...e);
  }
  async identifyAiCall(e, t, n, s) {
    const r = e.toLowerCase();
    if (ue(e)) {
      const o = await this.getSiYuanAiConfig(),
        l = this.extractEnabledBaseUrls(o);
      for (const d of l) {
        const h = this.keyManager.findByUrl(d);
        if (h && h.enabled)
          return {
            apiKeyId: h.id,
            apiKeyName: h.name,
            source: h.baseUrl || d || "siyuan-ai",
            provider: h.provider,
            model: this.resolveSiYuanModelForCall(s, o)
          };
      }
      const c = this.keyManager.findByUrl(e);
      if (c && c.enabled)
        return {
          apiKeyId: c.id,
          apiKeyName: c.name,
          source: c.baseUrl || "siyuan-ai",
          provider: c.provider,
          model: this.resolveSiYuanModelForCall(s, o)
        };
      const u = this.store.getApiKeys().find((d) => {
        var h, g;
        return (
          d.enabled &&
          (d.name.includes("思源") ||
            ((h = d.provider) == null ? void 0 : h.includes("思源")) ||
            ((g = d.baseUrl) == null ? void 0 : g.includes("/api/ai/")))
        );
      });
      return u
        ? {
            apiKeyId: u.id,
            apiKeyName: u.name,
            source: u.baseUrl || "siyuan-ai",
            provider: u.provider,
            model: this.resolveSiYuanModelForCall(s, o)
          }
        : { ...fe(), model: this.resolveSiYuanModelForCall(s, o) };
    }
    if (n.matchByUrl) {
      const o = this.keyManager.findByUrl(e);
      if (o && o.enabled)
        return {
          apiKeyId: o.id,
          apiKeyName: o.name,
          source: o.baseUrl || "url-match",
          provider: o.provider,
          model: this.extractModel(s) || "unknown"
        };
    }
    if (!n.interceptExternalAPIs) return null;
    if (r.includes("/v1/chat/completions") || r.includes("/v1/completions")) {
      const l = (ne(t == null ? void 0 : t.headers, "Authorization") || "").replace(/^bearer\s+/i, "").trim(),
        c = this.keyManager.findByKey(l) || this.keyManager.findByUrl(e);
      return {
        apiKeyId: (c == null ? void 0 : c.id) || "unknown",
        apiKeyName: (c == null ? void 0 : c.name) || this.keyManager.maskKey(l) || "Unknown",
        source: "external-openai",
        provider: (c == null ? void 0 : c.provider) || "OpenAI",
        model: this.extractModel(s) || "unknown"
      };
    }
    if (r.includes("/v1/messages")) {
      const o = ne(t == null ? void 0 : t.headers, "x-api-key") || "",
        l = this.keyManager.findByKey(o) || this.keyManager.findByUrl(e);
      return {
        apiKeyId: (l == null ? void 0 : l.id) || "unknown",
        apiKeyName: (l == null ? void 0 : l.name) || this.keyManager.maskKey(o) || "Unknown",
        source: "external-anthropic",
        provider: (l == null ? void 0 : l.provider) || "Anthropic",
        model: this.extractModel(s) || "unknown"
      };
    }
    const i = this.keyManager.findByUrl(e);
    return i && i.enabled
      ? {
          apiKeyId: i.id,
          apiKeyName: i.name,
          source: i.baseUrl || "custom-url",
          provider: i.provider,
          model: this.extractModel(s) || "unknown"
        }
      : null;
  }
  extractModel(e) {
    return L(e == null ? void 0 : e.model) || null;
  }
  resolveSiYuanModelForCall(e, t) {
    return L(this.extractModel(e)) || this.resolveSiYuanModelNameFromConfig(t) || "unknown";
  }
  extractMessages(e) {
    if (!e) return [];
    if (Array.isArray(e.messages)) return e.messages;
    if (typeof e.messages == "string") return [e.messages];
    if (typeof e.messages == "object" && e.messages !== null) return [e.messages];
    if (typeof e.prompt == "string") return [e.prompt];
    if (Array.isArray(e.contents)) return e.contents;
    if (typeof e.content == "string") return [e.content];
    if (typeof e.text == "string") return [e.text];
    if (e.message !== void 0 || e.references !== void 0) {
      const t = [];
      if (Array.isArray(e.references))
        for (const n of e.references)
          typeof n == "string"
            ? t.push({ role: "system", content: n })
            : n != null && n.content
              ? t.push({
                  role: "system",
                  content: typeof n.content == "string" ? n.content : JSON.stringify(n.content)
                })
              : n != null && n.text && t.push({ role: "system", content: n.text });
      if (
        (typeof e.message == "string"
          ? t.push({ role: "user", content: e.message })
          : typeof e.message == "object" &&
            e.message !== null &&
            t.push({ role: "user", content: JSON.stringify(e.message) }),
        t.length > 0)
      )
        return t;
    }
    if (typeof e.msg == "string") return [e.msg];
    if (typeof e.msg == "object" && e.msg !== null) return [e.msg];
    if (e.context && e.query)
      return [
        { role: "system", content: e.context },
        { role: "user", content: e.query }
      ];
    if (typeof e.query == "string") return [e.query];
    if (e.input) {
      if (Array.isArray(e.input)) return e.input;
      if (Array.isArray(e.input.messages)) return e.input.messages;
      if (typeof e.input.messages == "string") return [e.input.messages];
      if (typeof e.input.messages == "object" && e.input.messages !== null) return [e.input.messages];
      if (typeof e.input.message == "string") return [e.input.message];
      if (typeof e.input.message == "object" && e.input.message !== null) return [e.input.message];
      if (typeof e.input.text == "string") return [e.input.text];
      if (typeof e.input == "string") return [e.input];
    }
    if (e.data) {
      if (Array.isArray(e.data.messages)) return e.data.messages;
      if (typeof e.data.messages == "string") return [e.data.messages];
      if (typeof e.data.messages == "object" && e.data.messages !== null) return [e.data.messages];
      if (typeof e.data.message == "string") return [e.data.message];
      if (typeof e.data.message == "object" && e.data.message !== null) return [e.data.message];
      if (typeof e.data.prompt == "string") return [e.data.prompt];
      if (Array.isArray(e.data.contents)) return e.data.contents;
      if (typeof e.data.content == "string") return [e.data.content];
      if (typeof e.data.text == "string") return [e.data.text];
    }
    return [];
  }
  async analyzeResponse(e, t, n, s, r = !0) {
    let a = 0,
      i = 0,
      o = t.model;
    const l = (e.headers.get("content-type") || "").toLowerCase(),
      c = this.store.getSettings();
    if (!o || o === "unknown") {
      const u0 = await this.resolveSiYuanModelNameIfNeeded(t.source, t.model);
      u0 && (o = u0);
    }
    const d = this.tokenCounter.estimateFromMessages(this.extractMessages(s));
    if (
      (this.logDebug("analyzeResponse", {
        url: t.source,
        contentType: l,
        ok: e.ok,
        status: e.status,
        estimatedInput: d,
        bodyPreview: JSON.stringify(s).slice(0, 200)
      }),
      !e.body)
    ) {
      (this.logDebug("analyzeResponse: response body is null, using input estimate only"),
        (a = d),
        (i = 0),
        this.recordCall(t, a, i, n, r, o));
      return;
    }
    try {
      if (l.includes("text/event-stream")) {
        const g = await this.parseSSEStream(e, t, c, d);
        ((a = g.inputTokens), (i = g.outputTokens), g.model && (o = g.model), g.aborted && (r = !1));
      } else if (l.includes("application/json") || l.includes("text/json")) {
        const g = await e.text();
        this.logDebug("JSON response raw text preview:", g.slice(0, 300));
        const p = this.tryParseJson(g);
        if (ge(p) && typeof p.data != "string") {
          this.logDebug("Skipping SiYuan kernel non-AI response", {
            code: p.code,
            dataKeys: Object.keys(p.data || {})
          });
          return;
        }
        const k = p ? this.extractUsage(p) : null;
        (k && ((a = k.inputTokens), (i = k.outputTokens)),
          p != null && p.model && (o = L(p.model, o) || o),
          k || ((a = d), (i = this.tokenCounter.estimateFromText(p ? this.extractOutputText(p) : g))));
      } else if (l.includes("application/x-ndjson") || l.includes("application/ndjson")) {
        const g = await this.parseNDJSONStream(e, t, c, d);
        ((a = g.inputTokens), (i = g.outputTokens), g.model && (o = g.model), g.aborted && (r = !1));
      } else if (
        l.includes("text/plain") ||
        l.includes("text/html") ||
        l.includes("application/xml") ||
        l.includes("text/xml")
      ) {
        const g = await e.text();
        ((a = d), (i = this.tokenCounter.estimateFromText(g)));
      } else {
        const g = await e.text();
        (this.logDebug("Unknown content type, raw response preview:", g.slice(0, 300)), (a = d));
        const p = this.tryParseJson(g);
        if (p) {
          const k = this.extractUsage(p);
          k
            ? ((a = k.inputTokens), (i = k.outputTokens))
            : (i = this.tokenCounter.estimateFromText(this.extractOutputText(p)));
        } else i = this.tokenCounter.estimateFromText(g);
      }
    } catch (g) {
      (console.warn("[TokenStats] Token extraction failed, using estimates:", g), (a = d));
      try {
        const p = await e.text();
        i = this.tokenCounter.estimateFromText(p);
      } catch {
        i = 0;
      }
    }
    (r && a === 0 && d > 0 && (a = d),
      this.logDebug("analyzeResponse result:", { inputTokens: a, outputTokens: i, model: o, success: r }));
    const h = a + i;
    (this.recordCall(t, a, i, n, r, o),
      h > 0 &&
        c.showNotifications &&
        (this.keyManager.checkThreshold(t.apiKeyId, (g) => {
          this.onThresholdAlert(t.apiKeyId, g);
        }),
        this.keyManager.checkGlobalThreshold(c, (g) => {
          this.onThresholdAlert("global", g);
        })));
  }
  async parseSSEStream(e, t, n, s = 0) {
    var h;
    const r = (h = e.body) == null ? void 0 : h.getReader();
    if (!r) return { inputTokens: 0, outputTokens: 0, aborted: !1 };
    const a = new TextDecoder();
    let i = "";
    const o = { fullContent: "", usage: null, model: void 0 };
    let l = 0,
      c = !1;
    const u = (g) => {
      const p = g.split(`
`),
        k = [];
      let v = "";
      for (const b of p) {
        const x = b.trim();
        x &&
          (x.startsWith("data:") ? k.push(x.slice(5).trimStart()) : x.startsWith("event:") && (v = x.slice(6).trim()));
      }
      if (k.length === 0) return;
      const m = k.join(`
`);
      if ((this.logDebug("SSE raw event", { eventType: v, data: m.slice(0, 500) }), m !== "[DONE]"))
        try {
          const b = JSON.parse(m);
          if ((this.logDebug("SSE parsed chunk", { eventType: v, chunk: b }), typeof b != "object" || b === null))
            return;
          const x = this.collectChunkInfo(b, o.usage, o.model, o.fullContent, v),
            A = o.fullContent.length;
          ((o.usage = x.usage),
            (o.model = x.model),
            (o.fullContent = x.fullContent),
            this.logDebug("SSE collected after chunk", {
              eventType: v,
              contentAdded: o.fullContent.length - A,
              fullContentLength: o.fullContent.length,
              usage: o.usage
            }));
        } catch (b) {
          this.logDebug("SSE chunk JSON parse failed", { eventType: v, data: m.slice(0, 300), error: String(b) });
        }
    };
    try {
      for (;;) {
        const { done: g, value: p } = await r.read();
        if (g) break;
        ((i += a.decode(p, { stream: !0 })),
          this.logDebug("SSE buffer received", {
            bufferLength: i.length,
            decodedLength: (p == null ? void 0 : p.length) ?? 0
          }));
        const { events: k, remainder: v } = this.splitSSEEvents(i);
        ((i = v), this.logDebug("SSE events split", { eventCount: k.length, remainderLength: v.length }));
        for (const m of k) u(m);
        if (n.abortStreamOnExceeded && n.blockOnQuotaExceeded) {
          if (
            ((l = o.usage ? o.usage.outputTokens : this.tokenCounter.estimateFromText(o.fullContent)),
            this.keyManager.wouldExceedQuota(t.apiKeyId, l))
          ) {
            c = !0;
            const m = this.store.getApiKey(t.apiKeyId),
              b = `[TokenStats] 流式响应已中断：${(m == null ? void 0 : m.name) || t.apiKeyName} 的 Token 限额在生成过程中被超出`;
            (console.warn(b), this.onThresholdAlert(t.apiKeyId, b));
            try {
              await r.cancel();
            } catch {}
            break;
          }
          if (this.keyManager.wouldExceedGlobalQuota(n, l)) {
            c = !0;
            const m = "[TokenStats] 流式响应已中断：全局 Token 限额在生成过程中被超出";
            (console.warn(m), this.onThresholdAlert("global", m));
            try {
              await r.cancel();
            } catch {}
            break;
          }
        }
      }
      if (i.trim().length > 0) {
        const { events: g } = this.splitSSEEvents(
          i +
            `

`
        );
        for (const p of g) u(p);
      }
    } finally {
      r.releaseLock();
    }
    if (
      (this.logDebug("parseSSEStream finished", {
        contentLength: o.fullContent.length,
        hasUsage: !!o.usage,
        usage: o.usage,
        estimatedInput: s
      }),
      o.usage)
    ) {
      const g = this.tokenCounter.estimateFromText(o.fullContent);
      return {
        inputTokens: o.usage.inputTokens || s,
        outputTokens: o.usage.outputTokens || g,
        model: o.model,
        aborted: c
      };
    }
    const d = this.tokenCounter.estimateFromText(o.fullContent);
    return { inputTokens: s, outputTokens: d, model: o.model, aborted: c };
  }
  splitSSEEvents(e) {
    const t = [],
      s = e.replace(
        /\r\n/g,
        `
`
      ).split(`

`),
      r = s.pop() || "";
    for (const a of s) a.trim() && t.push(a);
    return { events: t, remainder: r };
  }
  collectChunkInfo(e, t, n, s, r = "") {
    const a = (...y) => {
      const M = L(...y);
      if (M) return M;
      const O = R(n);
      return O && !$(O) ? O : "";
    };
    if ((e.model && (n = a(e.model, n)), r === "content" || r === "reasoning"))
      return (
        e.token && ((s += e.token), this.logDebug("SiYuan agent content appended", { token: e.token })),
        { usage: t, model: n, fullContent: s }
      );
    if (r === "thinking")
      return (
        e.reasoning &&
          ((s += e.reasoning), this.logDebug("SiYuan agent thinking appended", { reasoning: e.reasoning })),
        { usage: t, model: n, fullContent: s }
      );
    if (r === "usage") {
      const y = e.promptTokens ?? e.prompt_tokens ?? 0,
        M = e.completionTokens ?? e.completion_tokens ?? 0;
      return (
        this.logDebug("SiYuan agent usage event", { promptTokens: y, completionTokens: M, chunk: e }),
        (y > 0 || M > 0) && (t = { inputTokens: y, outputTokens: M }),
        { usage: t, model: n, fullContent: s }
      );
    }
    if (
      r === "done" ||
      r === "error" ||
      r === "retry" ||
      r === "snapshot" ||
      r === "tool_call" ||
      r === "tool_result" ||
      r === "confirm" ||
      r === "question" ||
      r === "frontend_tool_call"
    )
      return { usage: t, model: n, fullContent: s };
    if (e.usage) {
      const y = e.usage;
      t = {
        inputTokens: y.prompt_tokens ?? y.input_tokens ?? y.promptTokens ?? 0,
        outputTokens: y.completion_tokens ?? y.output_tokens ?? y.completionTokens ?? 0
      };
    }
    const i = (y) => {
      typeof y == "string" && (s += y);
    };
    const o = e.choices && e.choices[0];
    if (o) {
      if (o.delta && o.delta.content) i(o.delta.content);
      if (o.text) i(o.text);
      if (o.delta && o.delta.reasoning_content) i(o.delta.reasoning_content);
      if (o.message && o.message.content) i(o.message.content);
      if (o.content) i(o.content);
      if (o.delta && o.delta.function_call && o.delta.function_call.arguments)
        i(o.delta.function_call.arguments);
      if (o.delta && o.delta.tool_calls)
        for (const y of o.delta.tool_calls)
          if (y && y.function && y.function.arguments) i(y.function.arguments);
    }
    if (e.type === "content_block_delta" && e.delta) {
      if (e.delta.text) i(e.delta.text);
      if (e.delta.reasoning) i(e.delta.reasoning);
    }
    if (e.type === "content_block_start" && e.content_block && e.content_block.text)
      i(e.content_block.text);
    if (e.message && e.message.usage) {
      const y = e.message.usage;
      t = { inputTokens: y.input_tokens ?? 0, outputTokens: y.output_tokens ?? 0 };
    }
    if (e.content) {
      if (typeof e.content == "string") i(e.content);
      else if (Array.isArray(e.content))
        for (const y of e.content) i(typeof y == "string" ? y : y == null ? void 0 : y.text);
    }
    if (e.output) i(e.output);
    if (e.text) i(e.text);
    if (e.result) i(e.result);
    if (e.message) {
      if (typeof e.message == "string") i(e.message);
      else if (e.message.content) i(e.message.content);
    }
    const dd = e.data;
    if (dd) {
      const dc0 = dd.choices && dd.choices[0];
      if (dc0) {
        if (dc0.delta && dc0.delta.content) i(dc0.delta.content);
        if (dc0.text) i(dc0.text);
        if (dc0.message && dc0.message.content) i(dc0.message.content);
        if (dc0.delta && dc0.delta.reasoning_content) i(dc0.delta.reasoning_content);
      }
      if (dd.model) n = a(dd.model, n);
      if (dd.usage) {
        t = {
          inputTokens: dd.usage.prompt_tokens ?? dd.usage.input_tokens ?? 0,
          outputTokens: dd.usage.completion_tokens ?? dd.usage.output_tokens ?? 0
        };
      }
      if (dd.content) {
        if (typeof dd.content == "string") i(dd.content);
        else if (Array.isArray(dd.content))
          for (const y of dd.content) i(typeof y == "string" ? y : y == null ? void 0 : y.text);
      }
      if (dd.output) i(dd.output);
      if (dd.text) i(dd.text);
      if (dd.result) i(dd.result);
    }
    return { usage: t, model: n, fullContent: s };
  }
  async parseNDJSONStream(e, t, n, s = 0) {
    var d;
    const r = (d = e.body) == null ? void 0 : d.getReader();
    if (!r) return { inputTokens: 0, outputTokens: 0, aborted: !1 };
    const a = new TextDecoder();
    let i = "",
      o = "",
      l = null,
      c,
      u = !1;
    try {
      for (;;) {
        const { done: h, value: g } = await r.read();
        if (h) break;
        i += a.decode(g, { stream: !0 });
        const p = i.split(`
`);
        i = p.pop() || "";
        for (const k of p)
          if (k.trim())
            try {
              const v = JSON.parse(k),
                m = this.collectChunkInfo(v, l, c, o);
              ((l = m.usage), (c = m.model), (o = m.fullContent));
            } catch {}
        if (n.abortStreamOnExceeded && n.blockOnQuotaExceeded) {
          const k = l ? l.outputTokens : this.tokenCounter.estimateFromText(o);
          if (this.keyManager.wouldExceedQuota(t.apiKeyId, k)) {
            u = !0;
            try {
              await r.cancel();
            } catch {}
            break;
          }
          if (this.keyManager.wouldExceedGlobalQuota(n, k)) {
            u = !0;
            try {
              await r.cancel();
            } catch {}
            break;
          }
        }
      }
      if (i.trim())
        try {
          const h = JSON.parse(i.trim()),
            g = this.collectChunkInfo(h, l, c, o);
          ((l = g.usage), (c = g.model), (o = g.fullContent));
        } catch {}
    } finally {
      r.releaseLock();
    }
    if (
      (this.logDebug("parseNDJSONStream finished", {
        contentLength: o.length,
        hasUsage: !!l,
        usage: l,
        estimatedInput: s
      }),
      l)
    ) {
      const h = this.tokenCounter.estimateFromText(o);
      return { inputTokens: l.inputTokens || s, outputTokens: l.outputTokens || h, model: c, aborted: u };
    }
    return { inputTokens: s, outputTokens: this.tokenCounter.estimateFromText(o), model: c, aborted: u };
  }
  extractUsage(e) {
    if (e != null && e.usage) {
      const t = e.usage,
        n = t.prompt_tokens ?? t.input_tokens ?? t.promptTokens ?? 0,
        s = t.completion_tokens ?? t.output_tokens ?? t.completionTokens ?? 0;
      return n === 0 && s === 0 ? null : { inputTokens: n, outputTokens: s };
    }
    if ((e == null ? void 0 : e.promptTokens) !== void 0 || (e == null ? void 0 : e.completionTokens) !== void 0) {
      const t = e.promptTokens ?? 0,
        n = e.completionTokens ?? 0;
      return t === 0 && n === 0 ? null : { inputTokens: t, outputTokens: n };
    }
    return null;
  }
  extractOutputText(e) {
    var r, a, i, o, l, c, u;
    if (!e) return "";
    const t = [],
      n = (d) => {
        typeof d == "string" && d ? t.push(d) : d && typeof d.text == "string" && d.text && t.push(d.text);
      },
      s = (d) => {
        var h, g, p, k, v, m, b, x;
        if (
          d &&
          (n((h = d == null ? void 0 : d.message) == null ? void 0 : h.content),
          n((g = d == null ? void 0 : d.message) == null ? void 0 : g.reasoning_content),
          n((p = d == null ? void 0 : d.delta) == null ? void 0 : p.content),
          n((k = d == null ? void 0 : d.delta) == null ? void 0 : k.reasoning_content),
          n(d == null ? void 0 : d.text),
          n(d == null ? void 0 : d.content),
          (m = (v = d == null ? void 0 : d.delta) == null ? void 0 : v.function_call) != null &&
            m.arguments &&
            n(d.delta.function_call.arguments),
          (b = d == null ? void 0 : d.delta) != null && b.tool_calls)
        )
          for (const A of d.delta.tool_calls)
            (x = A == null ? void 0 : A.function) != null && x.arguments && n(A.function.arguments);
      };
    if (e.choices) for (const d of e.choices) s(d);
    if (e.content) {
      if (typeof e.content == "string") n(e.content);
      else if (Array.isArray(e.content)) for (const d of e.content) n(d);
    }
    if (
      (e.output && n(e.output),
      e.text && n(e.text),
      e.result && n(e.result),
      e.message && (typeof e.message == "string" ? n(e.message) : (n(e.message.content), n(e.message.text))),
      e.response &&
        (typeof e.response == "string"
          ? n(e.response)
          : e.response.text
            ? n(e.response.text)
            : e.response.content && n(e.response.content)),
      e.data)
    )
      if (typeof e.data == "string") n(e.data);
      else {
        if (
          (n((r = e.data) == null ? void 0 : r.text),
          n((a = e.data) == null ? void 0 : a.output),
          n((i = e.data) == null ? void 0 : i.result),
          n((o = e.data) == null ? void 0 : o.msg),
          (l = e.data) != null && l.choices)
        )
          for (const d of e.data.choices) s(d);
        if ((c = e.data) != null && c.content)
          if (typeof e.data.content == "string") n(e.data.content);
          else if (Array.isArray(e.data.content)) for (const d of e.data.content) n(d);
          else n(e.data.content);
        (u = e.data) != null && u.message && (n(e.data.message.content), n(e.data.message.text));
      }
    return (e.msg && n(e.msg), e.token && n(e.token), e.reasoning && n(e.reasoning), t.join(""));
  }
  recordCall(e, t, n, s, r, a) {
    const i = this.resolveModelName(a || e.model, e),
      o = {
        id: ce(),
        apiKeyId: e.apiKeyId,
        apiKeyName: e.apiKeyName,
        source: e.source,
        model: i,
        inputTokens: t,
        outputTokens: n,
        totalTokens: t + n,
        timestamp: s,
        requestTime: Date.now() - s,
        success: r
      };
    (this.store.addRecord(o),
      console.log(
        `[TokenStats] Recorded: ${o.apiKeyName} | ${o.model} | in=${t} out=${n} total=${o.totalTokens} success=${r}`
      ),
      r &&
        t === 0 &&
        n === 0 &&
        console.warn(
          "[TokenStats] 本次请求 token 计数为 0。若持续出现，请在设置中开启“启用调试日志”，并在浏览器控制台中查看请求/响应详情。"
        ));
  }
  resolveModelName(e, t) {
    var a;
    const n = [e, t.model];
    this.isSiYuanAiSource(t.source) &&
      n.push(this.resolveSiYuanModelNameFromConfig((a = this.siyuanConfigCache) == null ? void 0 : a.config));
    const s = L(...n);
    return s || R(e) || R(t.model) || t.source || "unknown";
  }
  async resolveSiYuanModelNameIfNeeded(e, t) {
    return this.isSiYuanAiSource(e) ? this.getSiYuanModelName() : null;
  }
  isSiYuanAiSource(e) {
    return e === "siyuan-ai" || e.includes("/api/ai/");
  }
  async getSiYuanAiConfig() {
    var e, t;
    if (this.siyuanConfigCache && Date.now() - this.siyuanConfigCache.ts < 5e3) return this.siyuanConfigCache.config;
    try {
      const n = window.siyuan,
        s = (e = n == null ? void 0 : n.config) == null ? void 0 : e.ai;
      if (s) return ((this.siyuanConfigCache = { config: s, ts: Date.now() }), s);
      const r = await this.originalFetch("/api/system/getConf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
      });
      if (!r.ok) return null;
      const a = await r.json(),
        i = ((t = a == null ? void 0 : a.data) == null ? void 0 : t.ai) || (a == null ? void 0 : a.ai);
      if (i) return ((this.siyuanConfigCache = { config: i, ts: Date.now() }), i);
    } catch {}
    return null;
  }
  extractEnabledBaseUrls(e) {
    if (!e) return [];
    const t = e.providers || [],
      n = new Set();
    for (const s of t) s != null && s.enabled && s.baseURL && n.add(String(s.baseURL));
    return Array.from(n);
  }
  resolveSiYuanModelNameFromConfig(e) {
    var i, o;
    if (!e) return null;
    const t = e.agent || {},
      n = e.editing || {},
      s = t.modelId || n.modelId,
      r = t.modelName || t.displayName || t.name || n.modelName || n.displayName || n.name;
    if (r && !$(r)) return r;
    const a = e.providers || [];
    if (s)
      for (const l of a) {
        if (!(l != null && l.enabled)) continue;
        const c = (l.models || []).find((u) => (u == null ? void 0 : u.id) === s);
        if (c) return c.displayName || c.name || c.id || null;
      }
    for (const l of a) {
      if (!(l != null && l.enabled)) continue;
      const c =
        ((i = l.models) == null ? void 0 : i.find((u) => (u == null ? void 0 : u.default))) ||
        ((o = l.models) == null ? void 0 : o[0]);
      if (c) return c.displayName || c.name || c.id || null;
      if (l.name && !$(l.name)) return l.name;
    }
    return s && !$(s) ? s : null;
  }
  async getSiYuanModelName() {
    return this.resolveSiYuanModelNameFromConfig(await this.getSiYuanAiConfig());
  }
}
function w(f) {
  return f
    ? f
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
    : "";
}
class me {
  constructor(e, t) {
    ((this.store = e), (this.keyManager = t), (this.setting = this.build()));
  }
  build() {
    const e = this,
      t = new T.Setting({
        width: this.isMobile() ? "92vw" : "700px",
        height: "auto",
        confirmCallback: () => {
          (e.saveGlobalSettings(), T.showMessage("设置已保存", 2e3, "info"));
        }
      });
    setTimeout(() => this.ensureDialogScrollable(), 0);
    const n = this.store.getSettings();
    return (
      t.addItem({
        title: "按 API Base URL 匹配 Key",
        description: "拦截请求时优先按 URL 匹配已配置的 API Key，适用于思源 AI、自定义代理等场景",
        createActionElement: () => this.createCheckbox("matchByUrl", n.matchByUrl ?? !0)
      }),
      t.addItem({
        title: "拦截外部 API 调用",
        description: "拦截第三方插件对 OpenAI / Anthropic / DeepSeek 等外部 API 的直接调用",
        createActionElement: () => this.createCheckbox("interceptExternalAPIs", n.interceptExternalAPIs)
      }),
      t.addItem({
        title: "超出限额时阻止请求",
        description: "当某个 API Key 的 Token 用量达到限额时，阻止后续请求（谨慎开启）",
        createActionElement: () => this.createCheckbox("blockOnQuotaExceeded", n.blockOnQuotaExceeded)
      }),
      t.addItem({
        title: "限额重置周期",
        description: "按周期自动重置 Token 用量统计。每月 = 每月 1 日归零，每日 = 每天归零",
        createActionElement: () => {
          const s = document.createElement("select");
          ((s.className = "b3-select fn__size200"), (s.id = "tks-quotaResetCycle"));
          const r = [
            { value: "monthly", label: "每月重置" },
            { value: "daily", label: "每日重置" },
            { value: "none", label: "永不重置" }
          ];
          for (const a of r) {
            const i = document.createElement("option");
            ((i.value = a.value),
              (i.textContent = a.label),
              n.quotaResetCycle === a.value && (i.selected = !0),
              s.appendChild(i));
          }
          return s;
        }
      }),
      t.addItem({
        title: "流式响应中途超限时中断",
        description: "当流式 AI 响应生成过程中 Token 超出限额时，立即中断流（避免继续消耗）",
        createActionElement: () => this.createCheckbox("abortStreamOnExceeded", n.abortStreamOnExceeded)
      }),
      t.addItem({
        title: "显示阈值提醒通知",
        description: "当 Token 用量达到设定的提醒阈值时，在思源底部弹出通知",
        createActionElement: () => this.createCheckbox("showNotifications", n.showNotifications)
      }),
      t.addItem({
        title: "启用调试日志",
        description: "在浏览器控制台输出请求/响应调试信息，排查 token 统计为 0 等问题（重启插件后生效）",
        createActionElement: () => this.createCheckbox("debugLogging", n.debugLogging ?? !1)
      }),
      t.addItem({
        title: "最大记录数",
        description: "保留的最近调用记录数量，超出后自动裁剪旧记录（节省存储空间）",
        createActionElement: () => {
          const s = document.createElement("input");
          return (
            (s.type = "number"),
            (s.className = "b3-text-field fn__size200"),
            (s.id = "tks-max-records"),
            (s.value = String(n.maxRecords)),
            (s.min = "100"),
            (s.max = "50000"),
            (s.step = "100"),
            s
          );
        }
      }),
      t.addItem({
        title: "全局总 Token 限额",
        description: "所有 API Key 的 Token 用量总和超过此值时触发拦截（0 = 不开启）",
        createActionElement: () => {
          const s = document.createElement("input");
          return (
            (s.type = "number"),
            (s.className = "b3-text-field fn__size200"),
            (s.id = "tks-globalQuotaLimit"),
            (s.value = String(n.globalQuotaLimit || 0)),
            (s.min = "0"),
            (s.step = "1000"),
            s
          );
        }
      }),
      t.addItem({
        title: "全局提醒阈值 (%)",
        description: "全局 Token 用量达到此百分比时弹出提醒（0 = 不提醒）",
        createActionElement: () => {
          const s = document.createElement("input");
          return (
            (s.type = "number"),
            (s.className = "b3-text-field fn__size200"),
            (s.id = "tks-globalAlertThreshold"),
            (s.value = String(n.globalAlertThreshold || 0)),
            (s.min = "0"),
            (s.max = "100"),
            (s.step = "5"),
            s
          );
        }
      }),
      t.addItem({
        title: "全局限额重置周期",
        description: "按周期自动重置全局 Token 用量统计",
        createActionElement: () => {
          const s = document.createElement("select");
          ((s.className = "b3-select fn__size200"), (s.id = "tks-globalQuotaResetCycle"));
          const r = [
            { value: "monthly", label: "每月重置" },
            { value: "daily", label: "每日重置" },
            { value: "none", label: "永不重置" }
          ];
          for (const a of r) {
            const i = document.createElement("option");
            ((i.value = a.value),
              (i.textContent = a.label),
              n.globalQuotaResetCycle === a.value && (i.selected = !0),
              s.appendChild(i));
          }
          return s;
        }
      }),
      t.addItem({
        title: "全局已用 Token 校准",
        description: "手动输入从第三方平台导入的历史已用 Token，叠加到全局统计中（0 = 不校准）",
        createActionElement: () => {
          const s = document.createElement("div");
          ((s.style.display = "flex"), (s.style.gap = "8px"), (s.style.alignItems = "center"));
          const r = (a, i, o) => {
            const l = document.createElement("div");
            l.style.flex = "1";
            const c = document.createElement("div");
            ((c.style.fontSize = "12px"), (c.style.color = "var(--b3-theme-on-surface)"), (c.textContent = i));
            const u = document.createElement("input");
            return (
              (u.type = "number"),
              (u.className = "b3-text-field"),
              (u.id = `tks-${a}`),
              (u.value = String(o || 0)),
              (u.min = "0"),
              (u.step = "100"),
              (u.style.width = "100%"),
              l.appendChild(c),
              l.appendChild(u),
              l
            );
          };
          return (
            s.appendChild(r("globalUsedTokensOffset", "总 Token", n.globalUsedTokensOffset)),
            s.appendChild(r("globalUsedInputTokensOffset", "输入", n.globalUsedInputTokensOffset)),
            s.appendChild(r("globalUsedOutputTokensOffset", "输出", n.globalUsedOutputTokensOffset)),
            s
          );
        }
      }),
      t.addItem({
        title: "API Key 管理",
        description: "添加、编辑、删除 API Key，为每个 Key 设置限额与提醒阈值",
        actionElement: this.createButton("管理 API Key", () => this.openKeyManager())
      }),
      t.addItem({
        title: "导出统计数据",
        description: "将所有统计数据导出为 JSON 文件",
        actionElement: this.createButton("导出", () => this.exportData())
      }),
      t.addItem({
        title: "清除调用记录",
        description: "删除所有 Token 调用记录，但保留 API Key 配置",
        actionElement: this.createButton("清除记录", () => this.clearRecords())
      }),
      t.addItem({
        title: "重置全部数据",
        description: "清除所有调用记录并恢复默认设置，API Key 配置保留不变",
        actionElement: this.createButton("重置", () => this.resetAll())
      }),
      t
    );
  }
  createCheckbox(e, t) {
    const n = document.createElement("input");
    return ((n.type = "checkbox"), (n.id = `tks-${e}`), (n.className = "b3-switch"), (n.checked = t), n);
  }
  createButton(e, t) {
    const n = document.createElement("button");
    return (
      (n.className = "b3-button b3-button--outline"),
      (n.textContent = e),
      (n.style.fontSize = "14px"),
      n.addEventListener("click", t),
      n
    );
  }
  saveGlobalSettings() {
    var d, h, g, p, k;
    const e = (v) => {
        var m;
        return ((m = document.getElementById(`tks-${v}`)) == null ? void 0 : m.checked) ?? !1;
      },
      t = parseInt(((d = document.getElementById("tks-max-records")) == null ? void 0 : d.value) || "5000", 10),
      n = ((h = document.getElementById("tks-quotaResetCycle")) == null ? void 0 : h.value) || "monthly",
      s = parseInt(((g = document.getElementById("tks-globalQuotaLimit")) == null ? void 0 : g.value) || "0", 10) || 0,
      r =
        parseInt(((p = document.getElementById("tks-globalAlertThreshold")) == null ? void 0 : p.value) || "0", 10) ||
        0,
      a = ((k = document.getElementById("tks-globalQuotaResetCycle")) == null ? void 0 : k.value) || "monthly",
      i = (v) => {
        var m;
        return parseInt(((m = document.getElementById(`tks-${v}`)) == null ? void 0 : m.value) || "0", 10) || 0;
      },
      o = Math.max(0, i("globalUsedTokensOffset")),
      l = Math.max(0, i("globalUsedInputTokensOffset")),
      c = Math.max(0, i("globalUsedOutputTokensOffset")),
      u = s !== this.store.getSettings().globalQuotaLimit || r !== this.store.getSettings().globalAlertThreshold;
    (this.store.updateSettings({
      matchByUrl: e("matchByUrl"),
      interceptExternalAPIs: e("interceptExternalAPIs"),
      blockOnQuotaExceeded: e("blockOnQuotaExceeded"),
      quotaResetCycle: n,
      abortStreamOnExceeded: e("abortStreamOnExceeded"),
      showNotifications: e("showNotifications"),
      debugLogging: e("debugLogging"),
      maxRecords: isNaN(t) ? 5e3 : Math.max(100, Math.min(5e4, t)),
      globalQuotaLimit: Math.max(0, s),
      globalAlertThreshold: Math.max(0, Math.min(100, r)),
      globalQuotaResetCycle: a,
      globalUsedTokensOffset: o,
      globalUsedInputTokensOffset: l,
      globalUsedOutputTokensOffset: c
    }),
      u && this.keyManager.resetGlobalAlert());
  }
  ensureDialogScrollable() {
    const e = document.getElementById("tks-matchByUrl") || document.getElementById("tks-interceptExternalAPIs");
    if (!e) return;
    const t = e.closest(".b3-dialog");
    if (!t) return;
    const n = t.querySelector(".b3-dialog__body");
    n && ((t.style.maxHeight = "85vh"), (n.style.maxHeight = "calc(85vh - 120px)"), (n.style.overflowY = "auto"));
  }
  isMobile() {
    const e = T.getFrontend();
    return e === "mobile" || e === "browser-mobile";
  }
  openKeyManager() {
    const e = this.isMobile(),
      t = new T.Dialog({
        title: "API Key 管理",
        width: e ? "95vw" : "750px",
        height: e ? "80vh" : "500px",
        content: '<div id="tks-key-mgr" class="tks-key-mgr"></div>'
      });
    setTimeout(() => this.renderKeyList(t), 50);
  }
  renderKeyList(e) {
    var r;
    const t = e.element.querySelector("#tks-key-mgr");
    if (!t) return;
    const n = this.store.getApiKeys();
    t.innerHTML = `
      <div class="tks-key-toolbar">
        <button class="b3-button b3-button--text" id="tks-add-key">+ 添加 API Key</button>
        <span class="tks-key-hint">共 ${n.length} 个 Key</span>
      </div>
      <div class="tks-key-list" id="tks-key-list-items"></div>
    `;
    const s = t.querySelector("#tks-key-list-items");
    for (const a of n) {
      const i = this.keyManager.getKeyUsage(a.id),
        o = a.quotaLimit > 0 ? Math.min(100, (i.totalTokens / a.quotaLimit) * 100) : 0,
        l = document.createElement("div");
      ((l.className = "tks-key-item"),
        (l.innerHTML = `
        <div class="tks-key-info">
          <div class="tks-key-name">
            ${this.providerIcon(a.provider)} ${w(a.name)}
            ${a.enabled ? "" : '<span class="tks-badge tks-badge-off">已禁用</span>'}
          </div>
          <div class="tks-key-detail">
            <span class="tks-key-masked">${w(a.keyMasked)}</span>
            ${a.provider ? `<span class="tks-key-provider">${w(a.provider)}</span>` : ""}
            ${a.baseUrl ? `<span class="tks-key-url" title="${w(a.baseUrl)}">${w(a.baseUrl)}</span>` : ""}
          </div>
          <div class="tks-key-quota">
            <div class="tks-quota-bar">
              <div class="tks-quota-fill ${o >= (a.alertThreshold || 100) ? "tks-quota-alert" : ""}"
                   style="width: ${o}%"></div>
            </div>
            <span class="tks-quota-text">
              ${i.totalTokens.toLocaleString()}${a.quotaLimit > 0 ? " / " + a.quotaLimit.toLocaleString() : ""} tokens
              ${a.alertThreshold > 0 ? `· 阈值 ${a.alertThreshold}%` : ""}
            </span>
          </div>
        </div>
        <div class="tks-key-actions">
          <button class="b3-button b3-button--small" data-action="edit" data-id="${w(a.id)}">编辑</button>
          <button class="b3-button b3-button--small b3-button--danger" data-action="delete" data-id="${w(a.id)}">删除</button>
        </div>
      `),
        s.appendChild(l));
    }
    ((r = t.querySelector("#tks-add-key")) == null ||
      r.addEventListener("click", () => {
        this.openKeyEditor(e, null);
      }),
      t.querySelectorAll("[data-action]").forEach((a) => {
        a.addEventListener("click", (i) => {
          const o = i.currentTarget,
            l = o.dataset.action,
            c = o.dataset.id;
          if (l === "edit") {
            const u = this.store.getApiKey(c);
            u && this.openKeyEditor(e, u);
          } else
            l === "delete" &&
              T.confirm("删除 API Key", "确定删除此 API Key 吗？相关统计记录将保留。", () => {
                (this.store.deleteApiKey(c),
                  this.keyManager.resetAlert(c),
                  this.renderKeyList(e),
                  T.showMessage("已删除", 2e3, "info"));
              });
        });
      }));
  }
  openKeyEditor(e, t) {
    var i, o, l;
    const n = !!t,
      s = this.isMobile(),
      r = new T.Dialog({
        title: n ? "编辑 API Key" : "添加 API Key",
        width: s ? "92vw" : "500px",
        height: "auto",
        content: `
        <div class="tks-key-editor">
          <div class="tks-form-row">
            <label>名称</label>
            <input type="text" id="tke-name" class="b3-text-field" value="${w((t == null ? void 0 : t.name) || "")}" placeholder="例如：我的 OpenAI Key" />
          </div>
          <div class="tks-form-row">
            <label>API Key</label>
            <input type="password" id="tke-key" class="b3-text-field" value="${w((t == null ? void 0 : t.keyFull) || "")}" placeholder="sk-..." />
            <div class="tks-form-hint">用于匹配请求头中的 Authorization / x-api-key，留空则仅按 URL 匹配</div>
          </div>
          <div class="tks-form-row">
            <label>提供商名称</label>
            <input type="text" id="tke-provider" class="b3-text-field" value="${w((t == null ? void 0 : t.provider) || "")}" list="tke-provider-list" placeholder="例如：OpenAI、DeepSeek、华为云、SiYuan" />
            <datalist id="tke-provider-list">
              <option value="OpenAI" />
              <option value="Anthropic" />
              <option value="DeepSeek" />
              <option value="SiliconFlow" />
              <option value="华为云" />
              <option value="SiYuan" />
              <option value="自定义" />
            </datalist>
            <div class="tks-form-hint">仅用于显示，可任意填写</div>
          </div>
          <div class="tks-form-row">
            <label>API Base URL</label>
            <input type="text" id="tke-url" class="b3-text-field" value="${w((t == null ? void 0 : t.baseUrl) || "")}" placeholder="例如：https://api.openai.com/v1/chat/completions，或 /api/ai/" />
            <div class="tks-form-hint">用于 URL 匹配。可填完整 URL、域名或路径（如 /api/ai/）。留空则仅按 Key 匹配。</div>
          </div>
          <div class="tks-form-row tks-form-row-2col">
            <div>
              <label>Token 限额</label>
              <input type="number" id="tke-quota" class="b3-text-field" value="${(t == null ? void 0 : t.quotaLimit) || 0}" min="0" step="1000" />
              <div class="tks-form-hint">0 = 不限</div>
            </div>
            <div>
              <label>提醒阈值 (%)</label>
              <input type="number" id="tke-threshold" class="b3-text-field" value="${(t == null ? void 0 : t.alertThreshold) || 0}" min="0" max="100" step="5" />
              <div class="tks-form-hint">0 = 不提醒</div>
            </div>
          </div>
          <div class="tks-form-row tks-form-row-2col">
            <div>
              <label>已用 Token 校准</label>
              <input type="number" id="tke-usedTokensOffset" class="b3-text-field" value="${(t == null ? void 0 : t.usedTokensOffset) ?? 0}" min="0" step="100" />
              <div class="tks-form-hint">从第三方平台导入的历史用量</div>
            </div>
            <div style="display:flex;gap:8px">
              <div style="flex:1">
                <label>已用输入</label>
                <input type="number" id="tke-usedInputTokensOffset" class="b3-text-field" value="${(t == null ? void 0 : t.usedInputTokensOffset) ?? 0}" min="0" step="100" />
              </div>
              <div style="flex:1">
                <label>已用输出</label>
                <input type="number" id="tke-usedOutputTokensOffset" class="b3-text-field" value="${(t == null ? void 0 : t.usedOutputTokensOffset) ?? 0}" min="0" step="100" />
              </div>
            </div>
          </div>
          <div class="tks-form-row tks-form-row-2col">
            <div>
              <label>状态</label>
              <select id="tke-enabled" class="b3-select">
                <option value="true" ${(t == null ? void 0 : t.enabled) !== !1 ? "selected" : ""}>启用</option>
                <option value="false" ${(t == null ? void 0 : t.enabled) === !1 ? "selected" : ""}>禁用</option>
              </select>
            </div>
          </div>
          <div class="tks-form-actions">
            <button class="b3-button b3-button--cancel" id="tke-cancel">取消</button>
            <button class="b3-button b3-button--text" id="tke-save">保存</button>
          </div>
        </div>
      `
      }),
      a = r.element;
    ((i = a.querySelector("#tke-provider")) == null ||
      i.addEventListener("input", (c) => {
        const u = c.target.value.trim(),
          d = a.querySelector("#tke-url");
        !d.value && u && (d.value = this.keyManager.getDefaultBaseUrl(u));
      }),
      (o = a.querySelector("#tke-cancel")) == null || o.addEventListener("click", () => r.destroy()),
      (l = a.querySelector("#tke-save")) == null ||
        l.addEventListener("click", () => {
          const c = a.querySelector("#tke-name").value.trim(),
            u = a.querySelector("#tke-key").value.trim(),
            d = a.querySelector("#tke-provider").value.trim(),
            h = a.querySelector("#tke-url").value.trim(),
            g = parseInt(a.querySelector("#tke-quota").value, 10) || 0,
            p = parseInt(a.querySelector("#tke-threshold").value, 10) || 0,
            k = Math.max(0, parseInt(a.querySelector("#tke-usedTokensOffset").value, 10) || 0),
            v = Math.max(0, parseInt(a.querySelector("#tke-usedInputTokensOffset").value, 10) || 0),
            m = Math.max(0, parseInt(a.querySelector("#tke-usedOutputTokensOffset").value, 10) || 0),
            b = a.querySelector("#tke-enabled").value === "true";
          if (!c) {
            T.showMessage("请输入名称", 3e3, "error");
            return;
          }
          if (n && t)
            (this.store.updateApiKey(t.id, {
              name: c,
              keyFull: u,
              keyMasked: this.keyManager.maskKey(u),
              provider: d,
              baseUrl: h,
              quotaLimit: g,
              alertThreshold: p,
              usedTokensOffset: k,
              usedInputTokensOffset: v,
              usedOutputTokensOffset: m,
              enabled: b
            }),
              this.keyManager.resetAlert(t.id));
          else {
            const x = {
              id: this.keyManager.generateKeyId(),
              name: c,
              keyFull: u,
              keyMasked: this.keyManager.maskKey(u),
              provider: d,
              baseUrl: h,
              quotaLimit: g,
              usedTokensOffset: k,
              usedInputTokensOffset: v,
              usedOutputTokensOffset: m,
              alertThreshold: p,
              enabled: b,
              createdAt: Date.now()
            };
            this.store.addApiKey(x);
          }
          (this.store.save(), r.destroy(), this.renderKeyList(e), T.showMessage("已保存", 2e3, "info"));
        }));
  }
  providerIcon(e) {
    const t = (e || "").toLowerCase();
    return (
      { siyuan: "🐿️", openai: "🤖", anthropic: "🧠", deepseek: "🔍", siliconflow: "🌊", 华为云: "☁️", huawei: "☁️" }[
        t
      ] || "🔑"
    );
  }
  exportData() {
    const e = this.store.exportAll(),
      t = new Blob([e], { type: "application/json" }),
      n = URL.createObjectURL(t),
      s = document.createElement("a");
    ((s.href = n),
      (s.download = `siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`),
      s.click(),
      URL.revokeObjectURL(n),
      T.showMessage("数据已导出", 2e3, "info"));
  }
  clearRecords() {
    T.confirm("清除调用记录", "确定清除所有 Token 调用记录吗？API Key 配置将保留。此操作不可撤销。", () => {
      (this.store.clearRecords(),
        this.store.save(),
        this.keyManager.clearAllAlerts(),
        T.showMessage("记录已清除", 2e3, "info"));
    });
  }
  resetAll() {
    T.confirm(
      "重置全部数据",
      "⚠️ 确定重置吗？所有调用记录将被清除，设置恢复默认值。API Key 配置保留不变，此操作不可撤销。",
      () => {
        (this.store.clearRecords(),
          this.store.resetSettings(),
          this.keyManager.clearAllAlerts(),
          T.showMessage("已重置", 2e3, "info"));
      }
    );
  }
}
function K(f) {
  return `${f.getFullYear()}-${String(f.getMonth() + 1).padStart(2, "0")}-${String(f.getDate()).padStart(2, "0")}`;
}
function he(f) {
  const e = f.getDay(),
    t = (e === 0 ? -6 : 1) - e,
    n = new Date(f);
  return (n.setDate(f.getDate() + t), n.setHours(0, 0, 0, 0), n);
}
function ke(f) {
  return new Date(f.getFullYear(), f.getMonth(), 1);
}
class be {
  constructor(e, t) {
    ((this.dialog = null), (this.summary = null), (this.store = e), (this.keyManager = t));
  }
  show() {
    (this.dialog && (this.dialog.destroy(), (this.dialog = null)), (this.summary = this.computeSummary()));
    const e = this.isMobile();
    ((this.dialog = new T.Dialog({
      title: "📊 Token 用量统计",
      width: e ? "95vw" : "900px",
      height: e ? "85vh" : "700px",
      content: this.renderHTML(this.summary)
    })),
      this.bindEvents());
  }
  isMobile() {
    const e = T.getFrontend();
    return e === "mobile" || e === "browser-mobile";
  }
  computeSummary() {
    const e = this.store.getRecords(),
      t = this.store.getApiKeys(),
      n = this.store.getSettings(),
      s = {
        totalTokens: 0,
        totalInputTokens: 0,
        totalOutputTokens: 0,
        totalRequests: e.length,
        successRequests: 0,
        failedRequests: 0,
        averageRequestTime: 0,
        modelStats: {},
        dailyStats: [],
        keyStats: []
      };
    let r = 0;
    for (const a of e) {
      ((s.totalTokens += a.totalTokens),
        (s.totalInputTokens += a.inputTokens),
        (s.totalOutputTokens += a.outputTokens),
        (r += a.requestTime),
        a.success ? s.successRequests++ : s.failedRequests++);
      const i = a.model || "unknown",
        o = i.toLowerCase().trim();
      (s.modelStats[o] || (s.modelStats[o] = { model: i, count: 0, tokens: 0, inputTokens: 0, outputTokens: 0 }),
        s.modelStats[o].count++,
        (s.modelStats[o].tokens += a.totalTokens),
        (s.modelStats[o].inputTokens += a.inputTokens),
        (s.modelStats[o].outputTokens += a.outputTokens));
    }
    ((s.averageRequestTime = e.length > 0 ? r / e.length : 0), (s.dailyStats = this.computeTrendStats(e, n)));
    for (const a of t) {
      const i = this.keyManager.getKeyUsage(a.id),
        o = a.quotaLimit > 0 ? Math.min(100, (i.totalTokens / a.quotaLimit) * 100) : 0;
      s.keyStats.push({
        apiKeyId: a.id,
        apiKeyName: a.name,
        totalTokens: i.totalTokens,
        totalInputTokens: i.totalInputTokens,
        totalOutputTokens: i.totalOutputTokens,
        totalRequests: i.totalRequests,
        quotaLimit: a.quotaLimit,
        alertThreshold: a.alertThreshold,
        usagePercent: o,
        isAlert: a.alertThreshold > 0 && o >= a.alertThreshold,
        isExceeded: a.quotaLimit > 0 && i.totalTokens >= a.quotaLimit
      });
    }
    return (s.keyStats.sort((a, i) => i.totalTokens - a.totalTokens), s);
  }
  computeTrendStats(e, t) {
    const { trendDateRangeStart: n, trendDateRangeEnd: s, trendAggregation: r } = t;
    let a = 1 / 0,
      i = -1 / 0;
    for (const m of e) ((a = Math.min(a, m.timestamp)), (i = Math.max(i, m.timestamp)));
    const o = e.length > 0 && isFinite(a) && isFinite(i),
      l = new Date();
    l.setHours(0, 0, 0, 0);
    const c = o ? new Date(a) : new Date(l.getTime() - 13 * 24 * 60 * 60 * 1e3),
      u = o ? new Date(i) : l,
      d = n || K(c),
      h = s || K(u),
      g = new Date(d + "T00:00:00"),
      p = new Date(h + "T23:59:59.999"),
      k = {},
      v = (m, b, x) => {
        (k[m] || (k[m] = { date: m, tokens: 0, count: 0 }), (k[m].tokens += b), (k[m].count += x));
      };
    for (const m of e) {
      if (m.timestamp < g.getTime() || m.timestamp > p.getTime()) continue;
      const b = new Date(m.timestamp);
      if (r === "weekly") {
        const x = he(b);
        v(K(x), m.totalTokens, 1);
      } else if (r === "monthly") {
        const x = ke(b);
        v(K(x), m.totalTokens, 1);
      } else v(K(b), m.totalTokens, 1);
    }
    return Object.values(k).sort((m, b) => m.date.localeCompare(b.date));
  }
  renderHTML(e) {
    const t = this.store.getRecentRecords(30),
      n = Math.max(...e.dailyStats.map((u) => u.tokens), 1),
      s = Math.max(...Object.values(e.modelStats).map((u) => u.tokens), 1),
      r = this.store.getSettings(),
      a = this.keyManager.getGlobalUsagePercent(r),
      i = this.keyManager.getGlobalUsage(r),
      o = this.getMinRecordDate(),
      l = this.getMaxRecordDate(),
      c = `
      <div class="tks-trend-controls">
        <label>区间：</label>
        <input type="date" id="tks-trend-start" class="b3-text-field" value="${w(r.trendDateRangeStart || o || "")}" ${o ? `min="${w(o)}" max="${w(l || "")}"` : ""} />
        <span>~</span>
        <input type="date" id="tks-trend-end" class="b3-text-field" value="${w(r.trendDateRangeEnd || l || "")}" ${l ? `min="${w(o || "")}" max="${w(l)}"` : ""} />
        <select id="tks-trend-aggregation" class="b3-select">
          <option value="daily" ${r.trendAggregation === "daily" ? "selected" : ""}>按日</option>
          <option value="weekly" ${r.trendAggregation === "weekly" ? "selected" : ""}>按周</option>
          <option value="monthly" ${r.trendAggregation === "monthly" ? "selected" : ""}>按月</option>
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
              <div class="tks-card-value">${e.totalTokens.toLocaleString()}</div>
              <div class="tks-card-label">总 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📥</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${e.totalInputTokens.toLocaleString()}</div>
              <div class="tks-card-label">输入 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📤</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${e.totalOutputTokens.toLocaleString()}</div>
              <div class="tks-card-label">输出 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📞</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${e.totalRequests}</div>
              <div class="tks-card-label">总请求 (${e.successRequests}✅ ${e.failedRequests}❌)</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">⏱️</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${Math.round(e.averageRequestTime)}</div>
              <div class="tks-card-label">平均耗时(ms)</div>
            </div>
          </div>
          ${
            r.globalQuotaLimit > 0
              ? `
          <div class="tks-card tks-card-global">
            <div class="tks-card-icon">🌍</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${a.toFixed(1)}%</div>
              <div class="tks-card-label">全局限额 ${i.totalTokens.toLocaleString()} / ${r.globalQuotaLimit.toLocaleString()}</div>
            </div>
          </div>
          `
              : ""
          }
        </div>

        <!-- API Key 用量 -->
        <div class="tks-section">
          <h3 class="tks-section-title">🔑 API Key 用量与限额</h3>
          <div class="tks-key-stats">
            ${e.keyStats.map((u) => this.renderKeyStat(u)).join("")}
          </div>
        </div>

        <!-- Token 趋势 -->
        <div class="tks-section">
          <h3 class="tks-section-title">📈 Token 趋势</h3>
          ${c}
          <div class="tks-daily-chart">
            ${e.dailyStats.map((u) => this.renderDailyBar(u, n, r.trendAggregation)).join("")}
          </div>
          ${e.dailyStats.length === 0 ? '<div class="tks-empty-chart">当前区间内无数据</div>' : ""}
        </div>

        <!-- 模型分布 -->
        <div class="tks-section">
          <h3 class="tks-section-title">🤖 模型用量分布</h3>
          <div class="tks-model-stats">
            ${Object.values(e.modelStats)
              .sort((u, d) => d.tokens - u.tokens)
              .map((u) => this.renderModelBar(u, s))
              .join("")}
          </div>
        </div>

        <!-- 最近请求 -->
        <div class="tks-section">
          <h3 class="tks-section-title">📝 最近请求记录（最近 ${t.length} 条）</h3>
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
                  <th>耗时</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                ${t.map((u) => this.renderRecordRow(u)).join("")}
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
  getMinRecordDate() {
    const e = this.store.getRecords();
    if (e.length === 0) return null;
    let t = 1 / 0;
    for (const n of e) t = Math.min(t, n.timestamp);
    return K(new Date(t));
  }
  getMaxRecordDate() {
    const e = this.store.getRecords();
    if (e.length === 0) return null;
    let t = -1 / 0;
    for (const n of e) t = Math.max(t, n.timestamp);
    return K(new Date(t));
  }
  renderKeyStat(e) {
    const t =
        e.quotaLimit > 0
          ? `${e.totalTokens.toLocaleString()} / ${e.quotaLimit.toLocaleString()}`
          : `${e.totalTokens.toLocaleString()} (不限)`,
      n = e.alertThreshold > 0 ? ` · 阈值 ${e.alertThreshold}%` : "",
      s = e.isExceeded ? "⛔" : e.isAlert ? "⚠️" : e.quotaLimit > 0 ? "✅" : "";
    return `
      <div class="tks-key-stat ${e.isAlert ? "tks-key-stat-alert" : ""} ${e.isExceeded ? "tks-key-stat-exceeded" : ""}">
        <div class="tks-key-stat-header">
          <span class="tks-key-stat-name">${s} ${w(e.apiKeyName)}</span>
          <span class="tks-key-stat-requests">${e.totalRequests} 次请求</span>
        </div>
        <div class="tks-key-stat-bar">
          <div class="tks-key-stat-fill ${e.isAlert ? "alert" : ""} ${e.isExceeded ? "exceeded" : ""}"
               style="width: ${e.quotaLimit > 0 ? e.usagePercent : 0}%"></div>
        </div>
        <div class="tks-key-stat-detail">
          ${t} tokens${n}
          ${e.quotaLimit > 0 ? ` · ${e.usagePercent.toFixed(1)}%` : ""}
        </div>
      </div>
    `;
  }
  renderDailyBar(e, t, n) {
    const s = Math.max(2, (e.tokens / t) * 100);
    let r = e.date.substring(5);
    return (
      n === "weekly"
        ? (r = `W${e.date.substring(5, 7)}${e.date.substring(8, 10)}`)
        : n === "monthly" && (r = e.date.substring(0, 7)),
      `
      <div class="tks-daily-bar">
        <div class="tks-daily-value">${e.tokens > 999 ? (e.tokens / 1e3).toFixed(1) + "k" : e.tokens}</div>
        <div class="tks-daily-col">
          <div class="tks-daily-fill" style="height: ${s}%"></div>
        </div>
        <div class="tks-daily-date">${r}</div>
      </div>
    `
    );
  }
  renderModelBar(e, t) {
    const n = Math.max(1, (e.tokens / t) * 100);
    return `
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${w(e.model)}">${w(e.model)}</div>
        <div class="tks-model-bar-track">
          <div class="tks-model-bar-fill" style="width: ${n}%"></div>
        </div>
        <div class="tks-model-detail">
          ${e.tokens.toLocaleString()} tokens · ${e.count} 次
        </div>
      </div>
    `;
  }
  renderRecordRow(e) {
    return `
      <tr>
        <td>${new Date(e.timestamp).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" })}</td>
        <td title="${w(e.apiKeyName)}">${w(e.apiKeyName)}</td>
        <td>${w(e.source)}</td>
        <td>${w(e.model)}</td>
        <td>${e.inputTokens.toLocaleString()}</td>
        <td>${e.outputTokens.toLocaleString()}</td>
        <td><strong>${e.totalTokens.toLocaleString()}</strong></td>
        <td>${e.requestTime}ms</td>
        <td>${e.success ? "✅" : "❌"}</td>
      </tr>
    `;
  }
  bindEvents() {
    var t, n, s, r, a;
    if (!this.dialog) return;
    const e = this.dialog.element;
    ((t = e.querySelector("#tks-refresh")) == null ||
      t.addEventListener("click", () => {
        this.show();
      }),
      (n = e.querySelector("#tks-export")) == null ||
        n.addEventListener("click", () => {
          const i = this.store.exportAll(),
            o = new Blob([i], { type: "application/json" }),
            l = URL.createObjectURL(o),
            c = document.createElement("a");
          ((c.href = l),
            (c.download = `siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`),
            c.click(),
            URL.revokeObjectURL(l),
            T.showMessage("数据已导出", 2e3, "info"));
        }),
      (s = e.querySelector("#tks-clear-records")) == null ||
        s.addEventListener("click", () => {
          T.confirm("清除调用记录", "确定清除所有 Token 调用记录吗？API Key 配置将保留。", () => {
            (this.store.clearRecords(),
              this.store.save(),
              this.keyManager.clearAllAlerts(),
              this.show(),
              T.showMessage("记录已清除", 2e3, "info"));
          });
        }),
      (r = e.querySelector("#tks-trend-apply")) == null ||
        r.addEventListener("click", () => {
          var c, u, d;
          const i = ((c = e.querySelector("#tks-trend-start")) == null ? void 0 : c.value) || "",
            o = ((u = e.querySelector("#tks-trend-end")) == null ? void 0 : u.value) || "",
            l = (d = e.querySelector("#tks-trend-aggregation")) == null ? void 0 : d.value;
          (this.store.updateSettings({ trendDateRangeStart: i, trendDateRangeEnd: o, trendAggregation: l }),
            this.store.save(),
            this.show());
        }),
      (a = e.querySelector("#tks-trend-reset")) == null ||
        a.addEventListener("click", () => {
          (this.store.updateSettings({ trendDateRangeStart: "", trendDateRangeEnd: "", trendAggregation: "daily" }),
            this.store.save(),
            this.show());
        }));
  }
}
const ye = `<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="iconTokenStats" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>
    <rect x="9.5" y="16" width="3" height="7" rx="0.8" fill="currentColor"/>
    <rect x="14.5" y="12" width="3" height="11" rx="0.8" fill="currentColor"/>
    <rect x="19.5" y="9" width="3" height="14" rx="0.8" fill="currentColor"/>
  </symbol>
</svg>`;
class ve extends T.Plugin {
  constructor() {
    (super(...arguments), (this.styleElement = null), (this.syncHandler = null));
  }
  async onload() {
    (console.log("[TokenStats] Plugin loading..."),
      console.log(`[TokenStats] Frontend: ${T.getFrontend()}`),
      (this.styleElement = document.createElement("style")),
      (this.styleElement.id = "siyuan-token-stats-style"),
      (this.styleElement.textContent = se),
      document.head.appendChild(this.styleElement),
      this.addIcons(ye),
      (this.store = new ae()),
      await this.store.load(),
      (this.tokenCounter = new re()),
      (this.keyManager = new ie(this.store)),
      (this.interceptor = new pe(this.store, this.keyManager, this.tokenCounter)),
      (this.dashboard = new be(this.store, this.keyManager)),
      this.interceptor.setThresholdCallback((e, t) => {
        this.store.getSettings().showNotifications && T.showMessage(t, 5e3, "error");
      }),
      this.interceptor.install(),
      this.addTopBar({
        icon: "iconTokenStats",
        title: "Token 用量统计",
        position: "right",
        callback: () => {
          this.dashboard.show();
        }
      }),
      (this.settingsPanel = new me(this.store, this.keyManager)),
      (this.setting = this.settingsPanel.setting),
      this.addCommand({
        langKey: "showTokenStats",
        langText: "打开 Token 用量统计",
        hotkey: "",
        callback: () => {
          this.dashboard.show();
        }
      }),
      (this.syncHandler = (e) => {
        const t =
          typeof (e == null ? void 0 : e.detail) == "string"
            ? e.detail
            : JSON.stringify((e == null ? void 0 : e.detail) ?? "");
        (console.log("[TokenStats] Sync event received, merging data...", t.substring(0, 100)),
          setTimeout(() => {
            this.store.mergeFromRemote().catch((n) => console.warn("[TokenStats] Sync merge failed:", n));
          }, 1e3));
      }),
      this.eventBus.on("sync-end", this.syncHandler),
      console.log("[TokenStats] Plugin loaded successfully."));
  }
  onunload() {
    var e, t, n;
    (console.log("[TokenStats] Plugin unloading..."),
      this.syncHandler && (this.eventBus.off("sync-end", this.syncHandler), (this.syncHandler = null)),
      (e = this.interceptor) == null || e.uninstall(),
      (t = this.store) == null || t.save().catch((s) => console.error("[TokenStats] Save on unload failed:", s)),
      (n = this.styleElement) == null || n.remove(),
      (this.styleElement = null),
      console.log("[TokenStats] Plugin unloaded."));
  }
}
module.exports = ve;

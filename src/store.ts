/**
 * 数据持久化层
 * 使用思源的文件 API 将数据存储在 data/storage/siyuan-token-stats/ 下。
 */
import type { PluginData, TokenRecord, ApiKeyConfig, PluginSettings } from "./types";

const STORAGE_PATH = "data/storage/siyuan-token-stats/data.json";
const BAK_PATH = "data/storage/siyuan-token-stats/data.json.bak";
const PLUGIN_DIR_PATH = "data/plugins/siyuan-token-stats/settings.json";
const LS_KEY = "siyuan-token-stats-data";
const DATA_VERSION = "1.3.0";

const DEFAULT_SETTINGS: PluginSettings = {
  matchByUrl: true,
  interceptExternalAPIs: true,
  blockOnQuotaExceeded: false,
  quotaResetCycle: "monthly",
  abortStreamOnExceeded: true,
  showNotifications: true,
  maxRecords: 5000,
  globalQuotaLimit: 0,
  globalAlertThreshold: 0,
  globalQuotaResetCycle: "monthly",
  globalUsedTokensOffset: 0,
  globalUsedInputTokensOffset: 0,
  globalUsedOutputTokensOffset: 0,
  trendDateRangeStart: "",
  trendDateRangeEnd: "",
  trendAggregation: "daily",
  debugLogging: false,
};

export class Store {
  private data: PluginData;
  private saveTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.data = {
      version: DATA_VERSION,
      lastSavedAt: 0,
      apiKeys: [],
      records: [],
      settings: { ...DEFAULT_SETTINGS },
    };
  }

  async load(): Promise<void> {
    try {
      // 尝试从主存储路径 (E) 读取
      let parsed: Partial<PluginData> | null = null;
      try {
        const response = await fetch(`/api/file/getFile?path=${encodeURIComponent(STORAGE_PATH)}`);
        if (response.ok) {
          const text = await response.text();
          if (text) parsed = JSON.parse(text) as Partial<PluginData>;
        }
      } catch {
        // E 读取失败，继续尝试其他路径
      }

      // 如果主存储没有，尝试从插件目录备份 (F) 读取
      if (!parsed) {
        try {
          const response = await fetch(`/api/file/getFile?path=${encodeURIComponent(PLUGIN_DIR_PATH)}`);
          if (response.ok) {
            const text = await response.text();
            if (text) {
              const fromF = JSON.parse(text) as Partial<PluginData>;
              if (fromF && fromF.lastSavedAt) {
                console.log("[TokenStats] Main storage missing, recovered from plugin directory backup.");
                parsed = fromF;
              }
            }
          }
        } catch {
          // F 读取失败
        }
      }

      // 如果文件路径都读不到，尝试从 localStorage 恢复（第三重备份）
      if (!parsed) {
        try {
          const ls = localStorage.getItem(LS_KEY);
          if (ls) {
            const fromLs = JSON.parse(ls) as Partial<PluginData>;
            if (fromLs && fromLs.lastSavedAt) {
              console.log("[TokenStats] Recovered data from localStorage.");
              parsed = fromLs;
            }
          }
        } catch {
          // localStorage 读取失败
        }
      }

      if (!parsed) {
        console.log("[TokenStats] No existing data file, starting fresh.");
        return;
      }

      // 兼容旧版本：将旧版 siyuan provider 改为用户可自定义名称，并补全新增字段默认值
      const migratedKeys = (parsed.apiKeys || []).map((k) => {
        const migrated = { ...k };
        if (migrated.id === "siyuan-built-in" && migrated.provider === "siyuan") {
          migrated.provider = migrated.baseUrl ? migrated.baseUrl : "SiYuan AI";
        }
        // v1.3.0 新增偏移量字段：旧数据补全默认值 0
        if (migrated.usedTokensOffset === undefined) migrated.usedTokensOffset = 0;
        if (migrated.usedInputTokensOffset === undefined) migrated.usedInputTokensOffset = 0;
        if (migrated.usedOutputTokensOffset === undefined) migrated.usedOutputTokensOffset = 0;
        // v1.3.8 新增关联模型字段：旧数据补全默认值空数组
        if (!Array.isArray(migrated.models)) migrated.models = [];
        return migrated;
      });

      // 兼容旧版本：autoDetectSiYuanAI 改为 matchByUrl
      const migratedSettings = {
        ...DEFAULT_SETTINGS,
        ...parsed.settings,
      };
      if ("autoDetectSiYuanAI" in (parsed.settings || {})) {
        const oldSettings = parsed.settings as Record<string, any>;
        migratedSettings.matchByUrl = oldSettings.autoDetectSiYuanAI;
      }

      // 合并加载的数据，保证默认值
      this.data = {
        version: DATA_VERSION,
        lastSavedAt: parsed.lastSavedAt || 0,
        apiKeys: migratedKeys,
        records: parsed.records || [],
        settings: migratedSettings,
      };

      console.log(
        `[TokenStats] Loaded: ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`
      );
    } catch (e) {
      console.warn("[TokenStats] Failed to load data, starting fresh:", e);
    }
  }

  /** 防抖保存 */
  scheduleSave(delay = 500): void {
    if (this.saveTimer) clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => {
      this.save().catch((e) => console.error("[TokenStats] Save failed:", e));
    }, delay);
  }

  async save(): Promise<void> {
    try {
      // 更新保存时间戳
      this.data.lastSavedAt = Date.now();

      // 先备份旧文件
      try {
        const oldResp = await fetch(
          `/api/file/getFile?path=${encodeURIComponent(STORAGE_PATH)}`
        );
        if (oldResp.ok) {
          const oldText = await oldResp.text();
          if (oldText) {
            const bakForm = new FormData();
            bakForm.append("path", BAK_PATH);
            bakForm.append("file", new Blob([oldText], { type: "application/json" }));
            await fetch("/api/file/putFile", { method: "POST", body: bakForm });
          }
        }
      } catch {
        // 备份失败不影响主流程
      }

      // 写入新数据（主存储 E）
      const formData = new FormData();
      formData.append("path", STORAGE_PATH);
      formData.append(
        "file",
        new Blob([JSON.stringify(this.data, null, 2)], { type: "application/json" })
      );
      const resp = await fetch("/api/file/putFile", { method: "POST", body: formData });
      if (!resp.ok) {
        throw new Error(`putFile returned ${resp.status}`);
      }

      // 同步写入插件目录备份 (F) — 防止插件更新时主存储被清空
      try {
        const formDataF = new FormData();
        formDataF.append("path", PLUGIN_DIR_PATH);
        formDataF.append(
          "file",
          new Blob([JSON.stringify(this.data, null, 2)], { type: "application/json" })
        );
        await fetch("/api/file/putFile", { method: "POST", body: formDataF });
      } catch {
        // F 写入失败不影响主流程
      }

      // 同步写入 localStorage（第三重备份）
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(this.data));
      } catch {
        // localStorage 写入失败（可能空间不足）
      }
    } catch (e) {
      console.error("[TokenStats] Failed to save data:", e);
      // 主存储写入失败时，尝试写 localStorage 兜底
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(this.data));
      } catch {
        // ignore
      }
    }
  }

  /** 同步保存：使用同步 XHR 在插件卸载前强制落盘，写 E + F + localStorage */
  saveSync(): void {
    try {
      this.data.lastSavedAt = Date.now();
      const payload = JSON.stringify(this.data, null, 2);

      // 写主存储 E
      try {
        const xhrE = new XMLHttpRequest();
        xhrE.open("POST", "/api/file/putFile", false);
        const formE = new FormData();
        formE.append("path", STORAGE_PATH);
        formE.append("file", new Blob([payload], { type: "application/json" }));
        xhrE.send(formE);
      } catch {
        // E 写入失败，继续写 F
      }

      // 写插件目录备份 F
      try {
        const xhrF = new XMLHttpRequest();
        xhrF.open("POST", "/api/file/putFile", false);
        const formF = new FormData();
        formF.append("path", PLUGIN_DIR_PATH);
        formF.append("file", new Blob([payload], { type: "application/json" }));
        xhrF.send(formF);
      } catch {
        // F 写入失败
      }

      // 写 localStorage
      try {
        localStorage.setItem(LS_KEY, payload);
      } catch {
        // ignore
      }

      console.log("[TokenStats] Synchronous save completed (E + F + localStorage).");
    } catch (e) {
      console.error("[TokenStats] saveSync error:", e);
    }
  }

  // ─── API Key CRUD ───

  /**
   * 云同步合并：从磁盘重新读取数据文件（已被同步覆盖），
   * 与内存中的数据按 ID 合并，避免多设备数据冲突丢失。
   *
   * 合并策略：
   * - Records: 按 ID 取并集，去重后按时间戳排序
   * - API Keys: 按 ID 取并集；同 ID 冲突时取 lastSavedAt 较大方的版本
   * - Settings: 取 lastSavedAt 较大方的版本
   * - lastSavedAt: 取两者最大值
   */
  async mergeFromRemote(): Promise<void> {
    try {
      const response = await fetch(
        `/api/file/getFile?path=${encodeURIComponent(STORAGE_PATH)}`
      );
      if (!response.ok) return;
      const text = await response.text();
      if (!text) return;

      const remote = JSON.parse(text) as Partial<PluginData>;
      if (!remote) return;

      const local = this.data;
      const remoteLastSavedAt = remote.lastSavedAt || 0;
      const localLastSavedAt = local.lastSavedAt || 0;

      // 如果远程数据和本地完全一致（未变化），跳过
      if (remoteLastSavedAt === localLastSavedAt && remoteLastSavedAt > 0) {
        console.log("[TokenStats] Sync merge: data unchanged, skipping.");
        return;
      }

      console.log(
        `[TokenStats] Sync merge: local ${localLastSavedAt}, remote ${remoteLastSavedAt}`
      );

      // ── 合并 Records：按 ID 并集去重 ──
      const remoteRecords = remote.records || [];
      const recordMap = new Map<string, TokenRecord>();
      for (const r of local.records) recordMap.set(r.id, r);
      for (const r of remoteRecords) {
        if (!recordMap.has(r.id)) recordMap.set(r.id, r);
      }
      const mergedRecords = Array.from(recordMap.values()).sort(
        (a, b) => a.timestamp - b.timestamp
      );
      // 裁剪到 maxRecords
      const max = local.settings.maxRecords;
      const trimmedRecords =
        mergedRecords.length > max
          ? mergedRecords.slice(-max)
          : mergedRecords;

      // ── 合并 API Keys：按 ID 并集，冲突取较新方 ──
      const remoteKeys = remote.apiKeys || [];
      const keyMap = new Map<string, ApiKeyConfig>();
      // 先放入较旧方的数据，再用较新方覆盖
      const localIsNewer = localLastSavedAt >= remoteLastSavedAt;
      const olderKeys = localIsNewer ? remoteKeys : local.apiKeys;
      const newerKeys = localIsNewer ? local.apiKeys : remoteKeys;
      for (const k of olderKeys) keyMap.set(k.id, k);
      for (const k of newerKeys) keyMap.set(k.id, k);

      const mergedKeys = Array.from(keyMap.values());

      // ── 合并 Settings：取较新方 ──
      const mergedSettings = localIsNewer
        ? { ...DEFAULT_SETTINGS, ...local.settings }
        : { ...DEFAULT_SETTINGS, ...remote.settings };

      // 写入合并结果
      this.data = {
        version: DATA_VERSION,
        lastSavedAt: Math.max(localLastSavedAt, remoteLastSavedAt),
        apiKeys: mergedKeys,
        records: trimmedRecords,
        settings: mergedSettings,
      };

      // 保存合并后的数据（会更新 lastSavedAt）
      await this.save();

      console.log(
        `[TokenStats] Sync merge complete: ${mergedKeys.length} keys, ${trimmedRecords.length} records.`
      );
    } catch (e) {
      console.warn("[TokenStats] Sync merge failed:", e);
    }
  }

  getApiKeys(): ApiKeyConfig[] {
    return this.data.apiKeys;
  }

  getApiKey(id: string): ApiKeyConfig | undefined {
    return this.data.apiKeys.find((k) => k.id === id);
  }

  addApiKey(key: ApiKeyConfig): void {
    this.data.apiKeys.push(key);
    this.scheduleSave();
  }

  updateApiKey(id: string, updates: Partial<ApiKeyConfig>): void {
    const idx = this.data.apiKeys.findIndex((k) => k.id === id);
    if (idx >= 0) {
      this.data.apiKeys[idx] = { ...this.data.apiKeys[idx], ...updates };
      this.scheduleSave();
    }
  }

  deleteApiKey(id: string): void {
    this.data.apiKeys = this.data.apiKeys.filter((k) => k.id !== id);
    this.scheduleSave();
  }

  // ─── Records ───

  addRecord(record: TokenRecord): void {
    // 记录去重：最近 5 条中 apiKeyId + timestamp + totalTokens + model 完全相同则跳过
    const recs = this.data.records;
    const last5 = recs.slice(-5);
    for (const r of last5) {
      if (
        r.apiKeyId === record.apiKeyId &&
        r.timestamp === record.timestamp &&
        r.totalTokens === record.totalTokens &&
        r.model === record.model
      ) {
        console.log("[TokenStats] Duplicate record skipped:", record.apiKeyName, record.model, record.totalTokens);
        return;
      }
    }
    recs.push(record);
    // 超出上限时裁剪旧记录
    const max = this.data.settings.maxRecords;
    if (recs.length > max) {
      this.data.records = recs.slice(-max);
    }
    this.scheduleSave();
  }

  getRecords(): TokenRecord[] {
    return this.data.records;
  }

  getRecentRecords(limit = 50): TokenRecord[] {
    return [...this.data.records].sort((a, b) => b.timestamp - a.timestamp).slice(0, limit);
  }

  clearRecords(): void {
    this.data.records = [];
    this.scheduleSave();
  }

  clearAll(): void {
    this.data.records = [];
    this.data.apiKeys = [];
    this.scheduleSave();
  }

  // ─── Settings ───

  getSettings(): PluginSettings {
    return this.data.settings;
  }

  updateSettings(updates: Partial<PluginSettings>): void {
    this.data.settings = { ...this.data.settings, ...updates };
    this.scheduleSave();
  }

  /** 重置设置为默认值，保留 API Key 和调用记录不变 */
  resetSettings(): void {
    this.data.settings = { ...DEFAULT_SETTINGS };
    this.scheduleSave();
  }

  // ─── Export ───

  exportAll(): string {
    return JSON.stringify(this.data, null, 2);
  }

  exportRecords(): string {
    return JSON.stringify(this.data.records, null, 2);
  }
}

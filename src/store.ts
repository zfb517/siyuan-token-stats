/**
 * 数据持久化层
 * 使用思源的文件 API 将数据存储在 data/storage/siyuan-token-stats/ 下。
 */
import type { PluginData, TokenRecord, ApiKeyConfig, PluginSettings, ModelPrice, PricePack } from "./types";

const STORAGE_PATH = "data/storage/siyuan-token-stats/data.json";
const BAK_PATH = "data/storage/siyuan-token-stats/data.json.bak";
// 自有备份：仍放在 data/storage 用户数据目录下（随插件更新保留、随云同步），
// 不再写入插件安装目录 data/plugins/...，避免更新时被清空或与思源插件自身设置冲突。
const BACKUP_PATH = "data/storage/siyuan-token-stats/data.backup.json";
// 旧版曾把数据写入插件安装目录的 settings.json，作为只读迁移源尝试恢复；
// 仅当文件中确含本插件数据（apiKeys/records）时才接受，避免误读思源自身的插件设置。
const LEGACY_PATH = "data/plugins/siyuan-token-stats/settings.json";
const LS_KEY = "siyuan-token-stats-data";
const DATA_VERSION = "1.3.0";

const DEFAULT_SETTINGS: PluginSettings = {
  matchByUrl: true,
  interceptExternalAPIs: true,
  blockOnQuotaExceeded: false,
  quotaResetCycle: "monthly",
  abortStreamOnExceeded: true,
  showNotifications: true,
  showTopBarBadge: true,
  maxRecords: 5000,
  globalQuotaLimit: 0,
  globalAlertThreshold: 0,
  globalQuotaResetCycle: "monthly",
  globalUsedTokensOffset: 0,
  globalUsedInputTokensOffset: 0,
  globalUsedOutputTokensOffset: 0,
  globalCostLimit: 0,
  globalCostAlertThreshold: 0,
  globalCostResetCycle: "monthly",
  globalUsedCostOffset: 0,
  customResetDays: 30,
  trendDateRangeStart: "",
  trendDateRangeEnd: "",
  trendAggregation: "daily",
  debugLogging: false,
  currency: "¥",
  recalcCostOnPriceChange: true,
  syncStatistics: true,
  modelPrices: {},
  pricePacks: [],
};

export class Store {
  private data: PluginData;
  private saveTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.data = {
      version: DATA_VERSION,
      lastSavedAt: 0,
      settingsUpdatedAt: 0,
      keysUpdatedAt: 0,
      deletedKeys: [],
      apiKeys: [],
      records: [],
      settings: { ...DEFAULT_SETTINGS },
    };
  }

  /**
   * 读取单个文件来源（失败返回 null）。
   * 只要文件解析为对象且含有本插件数据标记（lastSavedAt / settings / apiKeys / records）即接受，
   * 放宽对 lastSavedAt 的硬性要求，以兼容旧版本（未写入 lastSavedAt）的数据文件。
   * @param strict 为 true 时（用于旧版安装目录迁移源）仅接受确含 apiKeys/records 的文件，
   *               防止误读思源自身的插件设置文件。
   */
  private async readSource(path: string, strict = false): Promise<Partial<PluginData> | null> {
    try {
      const response = await fetch(`/api/file/getFile?path=${encodeURIComponent(path)}`);
      if (!response.ok) return null;
      const text = await response.text();
      if (!text) return null;
      const parsed = JSON.parse(text) as Partial<PluginData>;
      if (!parsed || typeof parsed !== "object") return null;
      const hasKeys = Array.isArray((parsed as any).apiKeys);
      const hasRecords = Array.isArray((parsed as any).records);
      const hasSettings = !!(parsed as any).settings;
      const hasTs = !!(parsed as any).lastSavedAt;
      if (strict && !hasKeys && !hasRecords) return null;
      if (hasKeys || hasRecords || hasSettings || hasTs) return parsed;
    } catch {
      // 读取失败
    }
    return null;
  }

  async load(): Promise<void> {
    try {
      // ── 第一步：优先读 localStorage（存活率最高，插件开关/卸载都不丢失）──
      let primary: Partial<PluginData> | null = null;
      try {
        const ls = localStorage.getItem(LS_KEY);
        if (ls) {
          const fromLs = JSON.parse(ls) as Partial<PluginData>;
          if (fromLs && fromLs.lastSavedAt) {
            primary = fromLs;
            console.log("[TokenStats] Found data in localStorage (primary).");
          }
        }
      } catch { /* ignore */ }

      // ── 第二步：读文件来源（E 主存储 + F 自有备份 + 旧版安装目录迁移源）──
      const eParsed = await this.readSource(STORAGE_PATH);
      const fParsed = await this.readSource(BACKUP_PATH);
      const legacyParsed = await this.readSource(LEGACY_PATH, true);

      // 收集所有非空来源（用于补充合并）
      const fileSources = [eParsed, fParsed, legacyParsed].filter(Boolean) as Partial<PluginData>[];
      const allSources: Partial<PluginData>[] = primary ? [primary, ...fileSources] : fileSources;

      if (allSources.length === 0) {
        console.log("[TokenStats] No existing data in any source, starting fresh.");
        return;
      }

      // ── 合并策略：以 primary(localStorage) 为基础，文件来源做并集补充 ──
      // API Keys：按 id 并集，冲突取 keysUpdatedAt 较新者（相等时优先保留有密钥串的）
      const keyMap = new Map<string, ApiKeyConfig>();
      const putKey = (k: ApiKeyConfig) => {
        const exist = keyMap.get(k.id);
        if (!exist) {
          keyMap.set(k.id, k);
          return;
        }
        const existTs = (exist as any).keysUpdatedAt || 0;
        const newTs = (k as any).keysUpdatedAt || 0;
        if (newTs > existTs || (newTs === existTs && (!exist.keyFull && k.keyFull))) {
          keyMap.set(k.id, k);
        }
      };
      for (const src of allSources) {
        for (const k of src.apiKeys || []) putKey(k);
      }
      const mergedKeys = Array.from(keyMap.values());

      // 合并所有来源的已删除 Key 墓碑（并集）—— 防止删除的 Key 在同步后复活
      const deletedSet = new Set<string>();
      for (const src of allSources) {
        for (const id of (src as any).deletedKeys || []) deletedSet.add(id);
      }

      // Records：按 id 取并集，去重
      const recordMap = new Map<string, TokenRecord>();
      for (const src of allSources) {
        for (const r of src.records || []) {
          if (!recordMap.has(r.id)) recordMap.set(r.id, r);
        }
      }
      const mergedRecords = Array.from(recordMap.values()).sort(
        (a, b) => a.timestamp - b.timestamp
      );
      const maxRecords = (() => {
        let m = 5000;
        for (const src of allSources) {
          const v = (src.settings as any)?.maxRecords;
          if (typeof v === "number" && v > m) m = v;
        }
        return m;
      })();
      const trimmedRecords =
        mergedRecords.length > maxRecords
          ? mergedRecords.slice(-maxRecords)
          : mergedRecords;

      // Settings：取 settingsUpdatedAt 最大者，再与默认值合并
      let bestSettingsSrc: Partial<PluginData> = allSources[0];
      for (const src of allSources) {
        if ((src as any).settingsUpdatedAt > (bestSettingsSrc as any).settingsUpdatedAt) {
          bestSettingsSrc = src;
        }
      }
      const rawSettings = (bestSettingsSrc.settings || {}) as Record<string, any>;
      const migratedSettings = { ...DEFAULT_SETTINGS, ...rawSettings };
      if ("autoDetectSiYuanAI" in rawSettings) {
        migratedSettings.matchByUrl = rawSettings.autoDetectSiYuanAI;
      }
      // 旧版无独立的费用重置周期字段时，继承全局 Token 限额周期，避免老用户行为突变
      if (!("globalCostResetCycle" in rawSettings) && rawSettings.globalQuotaResetCycle) {
        migratedSettings.globalCostResetCycle = rawSettings.globalQuotaResetCycle;
      }

      // 兼容旧版本字段补全
      const finalMigratedKeys = mergedKeys
        .map((k) => {
          const migrated = { ...k };
          if (migrated.id === "siyuan-built-in" && migrated.provider === "siyuan") {
            migrated.provider = migrated.baseUrl ? migrated.baseUrl : "SiYuan AI";
          }
          if (migrated.usedTokensOffset === undefined) migrated.usedTokensOffset = 0;
          if (migrated.usedInputTokensOffset === undefined) migrated.usedInputTokensOffset = 0;
          if (migrated.usedOutputTokensOffset === undefined) migrated.usedOutputTokensOffset = 0;
          if (!Array.isArray(migrated.models)) migrated.models = [];
          return migrated;
        })
        .filter((k) => !deletedSet.has(k.id));

      // 时间戳取各来源最大值
      const maxLastSavedAt = Math.max(0, ...allSources.map((s) => s.lastSavedAt || 0));
      const maxSettingsUpdatedAt = Math.max(0, ...allSources.map((s) => (s as any).settingsUpdatedAt || 0));
      const maxKeysUpdatedAt = Math.max(0, ...allSources.map((s) => (s as any).keysUpdatedAt || 0));

      this.data = {
        version: DATA_VERSION,
        lastSavedAt: maxLastSavedAt,
        settingsUpdatedAt: maxSettingsUpdatedAt,
        keysUpdatedAt: maxKeysUpdatedAt,
        deletedKeys: Array.from(deletedSet),
        apiKeys: finalMigratedKeys,
        records: trimmedRecords,
        settings: migratedSettings,
      };

      console.log(
        `[TokenStats] Loaded (merged ${allSources.length} source(s), primary=${!!primary}): ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`
      );

      // 加载后立即回写 localStorage 确保最新状态 + 异步落盘到文件
      this.saveToLocalStorage();
      this.save().catch((e) => console.error("[TokenStats] Post-load save failed:", e));
    } catch (e) {
      console.warn("[TokenStats] Failed to load data, starting fresh:", e);
    }
  }

  /** 防抖保存（写文件），同时立即同步写 localStorage 确保不丢 */
  scheduleSave(delay = 500): void {
    // ★ 每次变更都立即写 localStorage —— 这是存活率最高的持久化层，
    //   插件卸载/集市开关/浏览器关闭都不会丢失。
    this.saveToLocalStorage();
    if (this.saveTimer) clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => {
      this.save().catch((e) => console.error("[TokenStats] Save failed:", e));
    }, delay);
  }

  /**
   * 同步、立即写入 localStorage。
   * 这是最可靠的持久化方式——不依赖异步 fetch/XHR，不会被防抖跳过，
   * 在 onunload / 插件被杀 / 浏览器关闭前都能执行完毕。
   */
  saveToLocalStorage(): void {
    try {
      this.data.lastSavedAt = Date.now();
      localStorage.setItem(LS_KEY, JSON.stringify(this.data));
    } catch {
      // ignore
    }
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

      // 同步写入自有备份 (F) —— 同样位于 data/storage 用户数据目录，
      // 随插件更新保留、随云同步，且不会污染插件安装目录。
      try {
        const formDataF = new FormData();
        formDataF.append("path", BACKUP_PATH);
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

  /** 同步保存：使用同步 XHR 在插件卸载前强制落盘，先 localStorage 再 E + F */
  saveSync(): void {
    // ★ 最优先：同步 localStorage —— 不依赖网络，必定在插件被杀前完成
    this.saveToLocalStorage();

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

      // 写自有备份 F（data/storage 用户数据目录）
      try {
        const xhrF = new XMLHttpRequest();
        xhrF.open("POST", "/api/file/putFile", false);
        const formF = new FormData();
        formF.append("path", BACKUP_PATH);
        formF.append("file", new Blob([payload], { type: "application/json" }));
        xhrF.send(formF);
      } catch {
        // F 写入失败
      }

      console.log("[TokenStats] Synchronous save completed (localStorage + E + F).");
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
  /**
   * 云同步合并：从磁盘重新读取数据文件（已被同步覆盖），
   * 与内存中的数据按 ID 合并，避免多设备数据冲突丢失。
   *
   * 合并策略：
   * - Records: 按 ID 取并集，去重后按时间戳排序
   * - API Keys: 按 ID 取并集；同 ID 冲突时按 keysUpdatedAt 取较新方
   * - Settings: 按 settingsUpdatedAt 取较新方（不再用全局 lastSavedAt，
   *   否则本端任何一次 Token 记录保存都会刷新 lastSavedAt，导致把对端更新的设置覆盖掉）
   *
   * @returns 是否发生了实际合并/变更
   */
  async mergeFromRemote(): Promise<boolean> {
    try {
      const response = await fetch(
        `/api/file/getFile?path=${encodeURIComponent(STORAGE_PATH)}`
      );
      if (!response.ok) return false;
      const text = await response.text();
      if (!text) return false;

      const remote = JSON.parse(text) as Partial<PluginData>;
      if (!remote) return false;

      const local = this.data;
      const remoteLastSavedAt = remote.lastSavedAt || 0;
      const localLastSavedAt = local.lastSavedAt || 0;
      const remoteSettingsUpdatedAt = (remote as any).settingsUpdatedAt || 0;
      const remoteKeysUpdatedAt = (remote as any).keysUpdatedAt || 0;
      const localSettingsUpdatedAt = local.settingsUpdatedAt || 0;
      const localKeysUpdatedAt = local.keysUpdatedAt || 0;

      // 如果远程数据与本地完全一致（未变化），跳过
      if (
        remoteLastSavedAt === localLastSavedAt &&
        remoteSettingsUpdatedAt === localSettingsUpdatedAt &&
        remoteKeysUpdatedAt === localKeysUpdatedAt &&
        remoteLastSavedAt > 0
      ) {
        console.log("[TokenStats] Sync merge: data unchanged, skipping.");
        return false;
      }

      console.log(
        `[TokenStats] Sync merge: local ls=${localLastSavedAt} lset=${localSettingsUpdatedAt} lkey=${localKeysUpdatedAt}, remote rs=${remoteLastSavedAt} rset=${remoteSettingsUpdatedAt} rkey=${remoteKeysUpdatedAt}`
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

      // ── 合并 API Keys：按 ID 并集，冲突按 keysUpdatedAt 取较新方 ──
      const remoteKeys = remote.apiKeys || [];
      const keyMap = new Map<string, ApiKeyConfig>();
      const localKeysNewer = localKeysUpdatedAt >= remoteKeysUpdatedAt;
      const olderKeys = localKeysNewer ? remoteKeys : local.apiKeys;
      const newerKeys = localKeysNewer ? local.apiKeys : remoteKeys;
      for (const k of olderKeys) keyMap.set(k.id, k);
      for (const k of newerKeys) keyMap.set(k.id, k);

      // 合并已删除 Key 墓碑（并集），并排除 —— 防止删除的 Key 在同步后复活
      const remoteDeleted = (remote as any).deletedKeys || [];
      const localDeleted = local.deletedKeys || [];
      const mergedDeleted = Array.from(new Set([...localDeleted, ...remoteDeleted]));
      const mergedKeys = Array.from(keyMap.values()).filter(
        (k) => !mergedDeleted.includes(k.id)
      );

      // ── 合并 Settings：按 settingsUpdatedAt 取较新方 ──
      const localSettingsNewer = localSettingsUpdatedAt >= remoteSettingsUpdatedAt;
      const mergedSettings = localSettingsNewer
        ? { ...DEFAULT_SETTINGS, ...local.settings }
        : { ...DEFAULT_SETTINGS, ...remote.settings };
      // 旧版无独立的费用重置周期字段时，继承全局 Token 限额周期，避免老用户行为突变
      const srcSettings = (localSettingsNewer ? local.settings : remote.settings) as Record<string, any> | undefined;
      if (srcSettings && !("globalCostResetCycle" in srcSettings) && srcSettings.globalQuotaResetCycle) {
        mergedSettings.globalCostResetCycle = srcSettings.globalQuotaResetCycle;
      }

      const mergedSettingsUpdatedAt = Math.max(localSettingsUpdatedAt, remoteSettingsUpdatedAt);
      const mergedKeysUpdatedAt = Math.max(localKeysUpdatedAt, remoteKeysUpdatedAt);

      // 写入合并结果
      this.data = {
        version: DATA_VERSION,
        lastSavedAt: Math.max(localLastSavedAt, remoteLastSavedAt),
        settingsUpdatedAt: mergedSettingsUpdatedAt,
        keysUpdatedAt: mergedKeysUpdatedAt,
        deletedKeys: mergedDeleted,
        apiKeys: mergedKeys,
        records: trimmedRecords,
        settings: mergedSettings,
      };

      // 保存合并后的数据（会更新 lastSavedAt）
      await this.save();

      console.log(
        `[TokenStats] Sync merge complete: ${mergedKeys.length} keys, ${trimmedRecords.length} records.`
      );
      return true;
    } catch (e) {
      console.warn("[TokenStats] Sync merge failed:", e);
      return false;
    }
  }

  getApiKeys(): ApiKeyConfig[] {
    return this.data.apiKeys;
  }

  getApiKey(id: string): ApiKeyConfig | undefined {
    return this.data.apiKeys.find((k) => k.id === id);
  }

  addApiKey(key: ApiKeyConfig): void {
    // 若添加的是之前被删除的 Key（同 id），从墓碑列表移除，允许恢复
    if (!this.data.deletedKeys) this.data.deletedKeys = [];
    this.data.deletedKeys = this.data.deletedKeys.filter((id) => id !== key.id);
    this.data.apiKeys.push(key);
    this.data.keysUpdatedAt = Date.now();
    this.scheduleSave();
  }

  updateApiKey(id: string, updates: Partial<ApiKeyConfig>): void {
    const idx = this.data.apiKeys.findIndex((k) => k.id === id);
    if (idx >= 0) {
      this.data.apiKeys[idx] = { ...this.data.apiKeys[idx], ...updates };
      this.data.keysUpdatedAt = Date.now();
      this.scheduleSave();
    }
  }

  deleteApiKey(id: string): void {
    this.data.apiKeys = this.data.apiKeys.filter((k) => k.id !== id);
    // 记入墓碑列表，云同步合并时仍会排除该 Key，避免其在其他设备上「复活」
    if (!this.data.deletedKeys) this.data.deletedKeys = [];
    if (!this.data.deletedKeys.includes(id)) this.data.deletedKeys.push(id);
    this.data.keysUpdatedAt = Date.now();
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
    // 关闭「单价变更后自动重算」时，把当前费用写入记录作为固定快照
    if (this.data.settings.recalcCostOnPriceChange === false) {
      record.cost = this.calcCost(record.model, record.inputTokens, record.outputTokens, record.cacheReadTokens);
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
    this.data.deletedKeys = [];
    this.scheduleSave();
  }

  // ─── Settings ───

  getSettings(): PluginSettings {
    return this.data.settings;
  }

  updateSettings(updates: Partial<PluginSettings>): void {
    this.data.settings = { ...this.data.settings, ...updates };
    this.data.settingsUpdatedAt = Date.now();
    this.scheduleSave();
  }

  /** 重置设置为默认值，保留 API Key 和调用记录不变 */
  resetSettings(): void {
    this.data.settings = { ...DEFAULT_SETTINGS };
    this.data.settingsUpdatedAt = Date.now();
    this.scheduleSave();
  }

  // ─── 费用估算 ───

  /** 费用货币符号 */
  getCurrency(): string {
    return this.data.settings.currency || "¥";
  }

  /** 归一化模型名为单价表的查询键（小写、去首尾空白、去掉所有空格/连字符/下划线） */
  private normalizeModelKey(model: string): string {
    return (model || "").toLowerCase().trim().replace(/[\s\-_]+/g, "");
  }

  /** 获取某模型的单价配置（未配置返回 null）。
   *  优先级：单模型单价(modelPrices) > 资源包(pricePacks，按包内模型列表匹配)。 */
  getModelPrice(model: string): ModelPrice | null {
    const key = this.normalizeModelKey(model);
    if (!key) return null;
    const map = this.data.settings.modelPrices || {};
    if (map[key]) return map[key];
    const pack = this.findPackForModel(key);
    if (pack) return { input: pack.input, output: pack.output };
    return null;
  }

  /** 查找涵盖指定模型的资源包（按归一化模型名精确匹配包内 models 列表） */
  findPackForModel(normalizedModel: string): PricePack | null {
    const packs = this.data.settings.pricePacks || [];
    for (const p of packs) {
      if (!Array.isArray(p.models)) continue;
      if (p.models.some((m) => this.normalizeModelKey(m) === normalizedModel)) {
        return p;
      }
    }
    return null;
  }

  /** 是否存在任意模型单价或资源包配置 */
  hasAnyPrice(): boolean {
    if (Object.keys(this.data.settings.modelPrices || {}).length > 0) return true;
    return (this.data.settings.pricePacks || []).length > 0;
  }

  /**
   * 计算单次调用的估算费用（货币单位）。
   * 未配置该模型单价时返回 0。
   */
  calcCost(model: string, inputTokens: number, outputTokens: number, cacheReadTokens?: number): number {
    const price = this.getModelPrice(model);
    if (!price) return 0;
    const inputCost = (inputTokens / 1000) * price.input;
    const outputCost = (outputTokens / 1000) * price.output;
    let total = inputCost + outputCost;
    // 缓存命中 tokens 按独立折扣单价计费（若已配置）
    if (price.cacheRead && cacheReadTokens && cacheReadTokens > 0) {
      total += (cacheReadTokens / 1000) * price.cacheRead;
    }
    return total;
  }

  /** 格式化费用显示，如 ¥0.0123 */
  formatCost(cost: number): string {
    const cur = this.getCurrency();
    return `${cur}${cost.toFixed(4)}`;
  }

  /**
   * 获取某条记录应显示的费用。
   * - 开启「单价变更后自动重算」（默认）：始终按当前单价实时计算，历史记录随单价浮动；
   * - 关闭：优先返回记录生成时写入的快照 record.cost，无快照的旧记录回退实时计算。
   */
  getRecordCost(r: TokenRecord): number {
    if (this.data.settings.recalcCostOnPriceChange !== false) {
      return this.calcCost(r.model, r.inputTokens, r.outputTokens, r.cacheReadTokens);
    }
    if (typeof r.cost === "number") return r.cost;
    return this.calcCost(r.model, r.inputTokens, r.outputTokens, r.cacheReadTokens);
  }

  /**
   * 计算某资源包已消耗的 token 总量（输入+输出），按包内涵盖模型（归一化）聚合所有历史记录。
   * 用于费用估算配置弹窗中展示资源包的「已用 / 总量 / 剩余」额度。
   */
  getPackUsage(pack: PricePack): { usedTokens: number } {
    const models = new Set((pack.models || []).map((m) => this.normalizeModelKey(m)));
    if (models.size === 0) return { usedTokens: 0 };
    let used = 0;
    for (const r of this.data.records) {
      if (models.has(this.normalizeModelKey(r.model))) {
        used += (r.inputTokens || 0) + (r.outputTokens || 0);
      }
    }
    return { usedTokens: used };
  }

  /**
   * 计算当前重置周期内所有记录的总费用（用于费用限额）。
   * 依赖 keyManager 提供的重置周期边界，因此放在 Store 上供 KeyManager 调用。
   */
  getTotalCostInPeriod(records: TokenRecord[], boundary: number): number {
    let total = 0;
    for (const r of records) {
      if (r.timestamp >= boundary) {
        total += this.getRecordCost(r);
      }
    }
    return total;
  }

  // ─── Export ───

  exportAll(): string {
    return JSON.stringify(this.data, null, 2);
  }

  exportRecords(): string {
    return JSON.stringify(this.data.records, null, 2);
  }
}

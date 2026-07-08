/**
 * 数据持久化层
 * 使用思源的文件 API 将数据存储在 data/storage/siyuan-token-stats/ 下。
 */
import type { PluginData, TokenRecord, ApiKeyConfig, PluginSettings, ModelPrice, PricePack } from "./types";

// 主存储与自有备份：使用 SiYuan 官方 Plugin.loadData/saveData API 读写，
// 实际落盘于 data/storage/siyuan-token-stats/ 下，随插件更新保留、随云同步，
// 且在集市开关插件（插件上下文重建）后依然存在 —— 这是唯一可靠的持久化层。
const FILE_NAME = "data.json";
const BACKUP_NAME = "data.backup.json";
// 旧的裸 fetch 完整路径写法：仅用于 saveSync() 在 onunload 时的同步兜底写入，
// 以及旧版安装目录迁移源的只读读取。
const STORAGE_PATH = "data/storage/siyuan-token-stats/data.json";
const BACKUP_PATH = "data/storage/siyuan-token-stats/data.backup.json";
// 旧版曾把数据写入插件安装目录的 settings.json，作为只读迁移源尝试恢复；
// 仅当文件中确含本插件数据（apiKeys/records）时才接受，避免误读思源自身的插件设置。
const LEGACY_PATH = "data/plugins/siyuan-token-stats/settings.json";
// localStorage 仅作为最后兜底镜像（上下文绑定、开关插件时可能被清空，不可作为权威来源）。
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
  private plugin: any;
  private loaded = false;
  private saveTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(plugin?: any) {
    this.plugin = plugin;
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

  /**
   * 将任意原始值归一化为 PluginData 对象。
   * 兼容 loadData 返回字符串（某些 SiYuan 版本返回未解析的 JSON）、
   * 空对象、以及已解析的对象。不含数据标记时返回 null。
   */
  private normalizeData(raw: any, source: string): Partial<PluginData> | null {
    // 某些 SiYuan 版本的 loadData 返回 JSON 字符串而非对象
    if (typeof raw === "string") {
      try { raw = JSON.parse(raw); } catch { return null; }
    }
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
      console.log(`[TokenStats] ${source} returned non-object:`, typeof raw, raw);
      return null;
    }
    // 空对象 {} 或不含本插件数据的对象一律拒绝，防止空数据污染合并流程
    if (!this.hasDataMarkers(raw)) {
      console.log(`[TokenStats] ${source} returned object without data markers:`, Object.keys(raw));
      return null;
    }
    const markers = {
      apiKeys: Array.isArray(raw.apiKeys) ? raw.apiKeys.length : "none",
      records: Array.isArray(raw.records) ? raw.records.length : "none",
      settings: !!raw.settings,
      lastSavedAt: raw.lastSavedAt || 0,
    };
    console.log(`[TokenStats] ${source} read OK:`, markers);
    return raw as Partial<PluginData>;
  }

  /**
   * 通过 SiYuan 官方 Plugin.loadData API 读取数据文件（主路径），
   * 失败或返回无效值时自动回落到裸 fetch 读取同一物理文件（备用路径）。
   * 双路径确保：即使官方 API 在插件热替换/升级场景下行为异常，仍能读到磁盘上的数据。
   */
  private async readOfficial(name: string): Promise<Partial<PluginData> | null> {
    // ── 路径 A：SiYuan 官方 loadData API ──
    try {
      if (this.plugin && typeof this.plugin.loadData === "function") {
        const raw = await this.plugin.loadData(name);
        const normalized = this.normalizeData(raw, `loadData(${name})`);
        if (normalized) return normalized;
      }
    } catch (e) {
      console.warn("[TokenStats] readOfficial loadData failed:", e);
    }

    // ── 路径 B：裸 fetch 回落（直接读取 data/storage/ 下同一物理文件）──
    try {
      const path = `data/storage/siyuan-token-stats/${name}`;
      const resp = await fetch(`/api/file/getFile?path=${encodeURIComponent(path)}`);
      if (!resp.ok) {
        console.log(`[TokenStats] readOfficial fetch fallback: HTTP ${resp.status} for ${path}`);
        return null;
      }
      const text = await resp.text();
      if (!text) return null;
      const parsed = JSON.parse(text);
      return this.normalizeData(parsed, `fetch(${name})`);
    } catch (e) {
      console.warn("[TokenStats] readOfficial fetch fallback failed:", e);
    }
    return null;
  }

  /** 判断一个来源对象是否包含本插件数据标记 */
  private hasDataMarkers(p: any): boolean {
    if (!p || typeof p !== "object") return false;
    return (
      Array.isArray(p.apiKeys) ||
      Array.isArray(p.records) ||
      !!p.settings ||
      !!p.lastSavedAt
    );
  }

  /**
   * 非破坏性守卫：当内存数据为「空」（无 Key、无记录）而磁盘上的主文件仍含有数据时，
   * 禁止用空数据覆盖，防止集市开关插件竞态/异常时把用户数据清空。
   * @param force 为 true 时（clear/reset 等用户显式清空操作）绕过守卫强制写入。
   */
  private async isDestructiveWrite(force: boolean): Promise<boolean> {
    if (force) return false;
    if (this.data.apiKeys.length > 0 || this.data.records.length > 0) return false;
    const existing = await this.readOfficial(FILE_NAME).catch(() => null);
    if (!existing) return false;
    const ek = Array.isArray((existing as any).apiKeys) ? (existing as any).apiKeys.length : 0;
    const er = Array.isArray((existing as any).records) ? (existing as any).records.length : 0;
    return ek > 0 || er > 0;
  }

  async load(): Promise<void> {
    try {
      // ── 第一步：读文件来源（权威、随插件更新/云同步保留，开关插件后依然存在）──
      //   优先使用 SiYuan 官方 loadData API：主存储 data.json + 自有备份 data.backup.json
      const primaryParsed = await this.readOfficial(FILE_NAME);
      const backupParsed = await this.readOfficial(BACKUP_NAME);
      //   旧版安装目录迁移源（只读、严格校验）
      const legacyParsed = await this.readSource(LEGACY_PATH, true);
      const fileSources = [primaryParsed, backupParsed, legacyParsed].filter(Boolean) as Partial<PluginData>[];

      // ── 第二步：读 localStorage 仅作为最后兜底镜像（上下文绑定，开关插件时可能被清空）──
      let lsData: Partial<PluginData> | null = null;
      try {
        const ls = localStorage.getItem(LS_KEY);
        if (ls) {
          const fromLs = JSON.parse(ls) as Partial<PluginData>;
          if (this.hasDataMarkers(fromLs)) {
            lsData = fromLs;
            console.log("[TokenStats] Found data in localStorage (fallback only).");
          }
        }
      } catch { /* ignore */ }

      // 收集所有非空来源（文件优先、localStorage 兜底）
      const allSources: Partial<PluginData>[] = [...fileSources];
      if (lsData) allSources.push(lsData);

      if (allSources.length === 0) {
        // 诊断日志：帮助排查替换文件升级等场景下数据丢失的根因
        console.warn(
          "[TokenStats] ⚠ No existing data in ANY source — starting fresh with empty defaults!",
          `primary(${FILE_NAME})=${!!primaryParsed}, backup(${BACKUP_NAME})=${!!backupParsed},` +
          `legacy(${LEGACY_PATH})=${!!legacyParsed}, localStorage=${!!lsData}`
        );
        this.loaded = true;
        return;
      }

      // ── 合并策略：各来源按 ID 并集，取较新版本；文件来源排在前面，时间戳并列时优先文件 ──
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
        `[TokenStats] Loaded (merged ${allSources.length} source(s), fileSources=${fileSources.length}, localStorage=${!!lsData}): ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`
      );

      this.loaded = true;

      // 加载后立即回写 localStorage 镜像（确保兜底可用）+ 异步落盘到文件（非破坏性）
      this.saveToLocalStorage();
      this.save().catch((e) => console.error("[TokenStats] Post-load save failed:", e));
    } catch (e) {
      console.warn("[TokenStats] Failed to load data, starting fresh:", e);
      // 即使加载异常也允许后续保存（写入受非破坏性守卫保护，不会覆盖已有文件）
      this.loaded = true;
    }
  }

  /** 防抖保存：写文件（官方 API）+ 立即写 localStorage 镜像。
   *  未加载完成前不写入，避免用空数据覆盖已有文件。force 用于显式清空/重置。 */
  scheduleSave(delay = 500, force = false): void {
    if (!this.loaded) {
      console.warn("[TokenStats] scheduleSave ignored: data not loaded yet.");
      return;
    }
    // 每次变更都立即写 localStorage 镜像（兜底）
    this.saveToLocalStorage();
    if (this.saveTimer) clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => {
      this.save(force).catch((e) => console.error("[TokenStats] Save failed:", e));
    }, delay);
  }

  /**
   * 同步、立即写入 localStorage 镜像（兜底层）。
   * 未加载完成前不写入，避免用空数据污染镜像。
   */
  saveToLocalStorage(): void {
    if (!this.loaded) return;
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(this.data));
    } catch {
      // ignore
    }
  }

  /** 裸 fetch 兜底写入（仅当官方 API 不可用时） */
  private async putFileRaw(path: string, data: any): Promise<void> {
    const formData = new FormData();
    formData.append("path", path);
    formData.append("file", new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    const resp = await fetch("/api/file/putFile", { method: "POST", body: formData });
    if (!resp.ok) throw new Error(`putFile returned ${resp.status}`);
  }

  /** 异步保存（主存储 + 自有备份），经 SiYuan 官方 saveData API 落盘到 data/storage/<pluginName>/。
   *  未加载完成前直接跳过；空数据且磁盘已有数据时非破坏性跳过（除非 force）。 */
  async save(force = false): Promise<void> {
    if (!this.loaded) {
      console.warn("[TokenStats] save() ignored: data not loaded yet.");
      return;
    }
    // 非破坏性守卫：防止把含数据的文件覆盖为空（开关插件竞态/异常）
    if (await this.isDestructiveWrite(force)) {
      console.warn("[TokenStats] save() skipped: in-memory data empty but existing file has data; not overwriting.");
      return;
    }
    try {
      this.data.lastSavedAt = Date.now();
      // 主存储（官方 API 优先，裸 fetch 兜底）
      if (this.plugin && typeof this.plugin.saveData === "function") {
        await this.plugin.saveData(FILE_NAME, this.data);
      } else {
        await this.putFileRaw(STORAGE_PATH, this.data);
      }
      // 自有备份（同样位于 data/storage 用户数据目录）
      try {
        if (this.plugin && typeof this.plugin.saveData === "function") {
          await this.plugin.saveData(BACKUP_NAME, this.data);
        } else {
          await this.putFileRaw(BACKUP_PATH, this.data);
        }
      } catch {
        // 备份失败不影响主流程
      }
      // localStorage 镜像
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(this.data));
      } catch {
        // localStorage 写入失败（可能空间不足）
      }
    } catch (e) {
      console.error("[TokenStats] Failed to save data:", e);
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(this.data));
      } catch {
        // ignore
      }
    }
  }

  /** 同步保存：在插件卸载前强制落盘（同步 XHR 兜底 + localStorage 镜像）。
   *  未加载完成前直接跳过；仅在确有数据或曾成功保存过时写文件，避免清空已有文件。 */
  saveSync(): void {
    if (!this.loaded) {
      console.warn("[TokenStats] saveSync() ignored: data not loaded yet.");
      return;
    }
    // 在更新时间戳前判断：内存为空且从未成功保存过，则只写镜像、不写文件，保护已有数据文件
    const hadContent =
      this.data.apiKeys.length > 0 ||
      this.data.records.length > 0 ||
      this.data.lastSavedAt > 0;

    try {
      this.data.lastSavedAt = Date.now();
      const payload = JSON.stringify(this.data, null, 2);

      // localStorage 镜像（同步、必定完成）
      try {
        localStorage.setItem(LS_KEY, payload);
      } catch {
        // ignore
      }

      if (!hadContent) {
        console.log("[TokenStats] saveSync skipped file write: in-memory empty and never saved (protecting existing file).");
        return;
      }

      // 写主存储 E（同步 XHR）
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
      // ── 读取磁盘上的主文件（使用与 load() 相同的可靠路径）──
      // 重要：必须走 readOfficial() 而非内联读取代码，确保：
      //   ① normalizeData 自动处理字符串返回值和空对象
      //   ② 官方 API 失败时自动回落裸 fetch
      //   ③ 每条路径都有诊断日志
      const remote = await this.readOfficial(FILE_NAME);
      if (!remote) {
        console.warn("[TokenStats] mergeFromRemote: 无法读取远程数据文件，合并跳过");
        return false;
      }

      const local = this.data;
      const remoteLastSavedAt = remote.lastSavedAt || 0;
      const localLastSavedAt = local.lastSavedAt || 0;
      const remoteSettingsUpdatedAt = (remote as any).settingsUpdatedAt || 0;
      const remoteKeysUpdatedAt = (remote as any).keysUpdatedAt || 0;
      const localSettingsUpdatedAt = local.settingsUpdatedAt || 0;
      const localKeysUpdatedAt = local.keysUpdatedAt || 0;

      // 如果远程数据与本地完全一致（未变化），跳过。
      // 同时比较时间戳 + 记录数 + Key 数，防止仅靠时间戳判断漏掉实际数据差异。
      const remoteRecordCount = (remote.records || []).length;
      const localRecordCount = (local.records || []).length;
      const remoteKeyCount = (remote.apiKeys || []).length;
      const localKeyCount = (local.apiKeys || []).length;
      if (
        remoteLastSavedAt === localLastSavedAt &&
        remoteSettingsUpdatedAt === localSettingsUpdatedAt &&
        remoteKeysUpdatedAt === localKeysUpdatedAt &&
        remoteRecordCount === localRecordCount &&
        remoteKeyCount === localKeyCount &&
        remoteLastSavedAt > 0
      ) {
        console.log("[TokenStats] Sync merge: data unchanged, skipping.");
        return false;
      }

      console.log(
        `[TokenStats] Sync merge: local ls=${localLastSavedAt} lset=${localSettingsUpdatedAt} lkey=${localKeysUpdatedAt} lr=${localRecordCount} lk=${localKeyCount}, remote rs=${remoteLastSavedAt} rset=${remoteSettingsUpdatedAt} rkey=${remoteKeysUpdatedAt} rr=${remoteRecordCount} rk=${remoteKeyCount}`
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
    this.scheduleSave(0, true);
  }

  clearAll(): void {
    this.data.records = [];
    this.data.apiKeys = [];
    this.data.deletedKeys = [];
    this.scheduleSave(0, true);
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
    this.scheduleSave(0, true);
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

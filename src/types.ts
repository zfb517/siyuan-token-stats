/**
 * Token Statistics Plugin - Type Definitions
 */

/** 模型单价：每 1000 tokens 的价格（以 currency 指定的货币单位计） */
export interface ModelPrice {
  /** 每 1K 输入 tokens 价格 */
  input: number;
  /** 每 1K 输出 tokens 价格 */
  output: number;
  /** 每 1K 缓存命中（cache_read / cached_input）tokens 价格，0 或不填表示不支持/不单独计费 */
  cacheRead?: number;
}

/**
 * 资源包：一个资源包可涵盖多个模型，包内所有模型共用同一输入/输出单价。
 * 适用于「某套餐内含多个模型」的场景（如通义千问资源包涵盖 qwen-turbo / qwen-plus / qwen-max）。
 * 费用计算时优先用单模型单价（modelPrices），未命中时再按资源包匹配。
 */
export interface PricePack {
  id: string;
  /** 资源包名称（仅展示用） */
  name: string;
  /** 资源包总 Token 额度（0 = 不限，适用于按总量计费的资源包） */
  totalTokens: number;
  /** 每 1K 输入 tokens 价格 */
  input: number;
  /** 每 1K 输出 tokens 价格 */
  output: number;
  /** 每 1K 缓存命中 tokens 价格（可选） */
  cacheRead?: number;
  /** 该资源包涵盖的模型名列表（保存时归一化为小写，匹配时忽略大小写） */
  models: string[];
}

/** API Key 配置 */
export interface ApiKeyConfig {
  id: string;
  name: string;
  /** 完整密钥，用于匹配拦截到的请求（本地存储，不上传） */
  keyFull: string;
  /** 脱敏显示用 */
  keyMasked: string;
  /** 提供商名称，用户可自定义（如 OpenAI、DeepSeek、SiliconFlow、华为云等） */
  provider: string;
  /** API 基础 URL，用于 URL 模式匹配（可选） */
  baseUrl: string;
  /** 关联模型列表：多 Key 同 URL 时按模型精确匹配 */
  models: string[];
  /** Token 限额，0 = 不限 */
  quotaLimit: number;
  /** 手动校准的已用 Token 偏移量（用于导入第三方平台历史用量），>= 0 */
  usedTokensOffset: number;
  /** 手动校准的已用输入 Token 偏移量 */
  usedInputTokensOffset: number;
  /** 手动校准的已用输出 Token 偏移量 */
  usedOutputTokensOffset: number;
  /** 提醒阈值百分比 (0-100)，0 = 不提醒 */
  alertThreshold: number;
  enabled: boolean;
  createdAt: number;
}

/** 单次调用记录 */
export interface TokenRecord {
  id: string;
  apiKeyId: string;
  apiKeyName: string;
  source: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  /** 缓存命中 tokens 数（API 返回的 cached_input_tokens / cache_read_input_tokens 等） */
  cacheReadTokens?: number;
  totalTokens: number;
  timestamp: number;
  requestTime: number;
  success: boolean;
  /** 费用快照（仅当关闭「单价变更后自动重算」时写入，用于冻结当时费用；开启自动重算时为 undefined 实时计算） */
  cost?: number;
}

/** 限额重置周期 */
export type QuotaResetCycle = "none" | "daily" | "monthly" | "custom";

/** 插件全局设置 */
export interface PluginSettings {
  /** 按 API Base URL 匹配已配置的 Key */
  matchByUrl: boolean;
  /** 拦截外部 OpenAI / Anthropic 等标准 API */
  interceptExternalAPIs: boolean;
  blockOnQuotaExceeded: boolean;
  /** 单个 API Key 限额重置周期 */
  quotaResetCycle: QuotaResetCycle;
  /** 流式响应中途超限时中断流 */
  abortStreamOnExceeded: boolean;
  showNotifications: boolean;
  /** 顶栏显示实时用量徽标 */
  showTopBarBadge: boolean;
  /** 最多保留多少条记录 */
  maxRecords: number;
  /** 全局总 Token 限额，0 = 不开启 */
  globalQuotaLimit: number;
  /** 全局总 Token 提醒阈值 (0-100)，0 = 不提醒 */
  globalAlertThreshold: number;
  /** 全局限额重置周期 */
  globalQuotaResetCycle: QuotaResetCycle;
  /** 全局手动校准的已用 Token 偏移量 */
  globalUsedTokensOffset: number;
  /** 全局手动校准的已用输入 Token 偏移量 */
  globalUsedInputTokensOffset: number;
  /** 全局手动校准的已用输出 Token 偏移量 */
  globalUsedOutputTokensOffset: number;
  /** 全局费用限额（货币单位），0 = 不开启 */
  globalCostLimit: number;
  /** 全局费用提醒阈值 (0-100)，0 = 不提醒 */
  globalCostAlertThreshold: number;
  /** 全局费用限额重置周期（独立于全局 Token 限额周期，便于费用按不同节奏结算） */
  globalCostResetCycle: QuotaResetCycle;
  /** 全局手工校准的已用费用偏移量（货币单位，用于导入第三方平台历史花费），>= 0 */
  globalUsedCostOffset: number;
  /** 自定义重置周期天数：当任一周期设为「自定义」时生效，表示统计「最近 N 个自然日」的用量 */
  customResetDays: number;
  /** Token 趋势图默认开始日期 (yyyy-MM-dd)，空表示自动 */
  trendDateRangeStart: string;
  /** Token 趋势图默认结束日期 (yyyy-MM-dd)，空表示自动 */
  trendDateRangeEnd: string;
  /** Token 趋势图聚合方式 */
  trendAggregation: "daily" | "weekly" | "monthly";
  /** 启用调试日志（默认关闭） */
  debugLogging?: boolean;
  /** 费用估算货币符号，默认 ¥ */
  currency: string;
  /**
   * 单价变更后是否自动重算历史费用。
   * true（默认）：仪表盘与记录表的费用始终按当前单价实时计算，改单价后立即生效；
   * false：每条记录在生成时把费用快照写入 record.cost，之后固定不变。
   */
  recalcCostOnPriceChange: boolean;
  /** 跨端统计合并：开启后，各端（电脑/鸿蒙/浏览器）通过思源数据同步共享同一套 API Key 时，自动按记录合并多方用量 */
  syncStatistics: boolean;
  /** 每模型单价（每 1K tokens），键为模型名小写归一化 */
  modelPrices: Record<string, ModelPrice>;
  /** 资源包单价：一个包涵盖多个模型，包内模型共用同一单价 */
  pricePacks: PricePack[];
}

/** 完整持久化数据 */
export interface PluginData {
  version: string;
  /** 最后保存时间戳，用于云同步冲突检测（每次保存都会更新） */
  lastSavedAt: number;
  /**
   * 设置最后修改时间戳，独立于 lastSavedAt。
   * 云同步合并时据此判断「哪端设置更新」，避免被无关的 Token 记录保存时间戳覆盖。
   */
  settingsUpdatedAt: number;
  /**
   * API Key 最后修改时间戳，独立于 lastSavedAt。
   * 云同步合并时据此判断「哪端 Key 更新」。
   */
  keysUpdatedAt: number;
  /**
   * 已删除 Key 的墓碑列表（记录 id）。
   * 云同步合并时用于排除已被删除的 Key，避免其在另一台设备上「复活」。
   */
  deletedKeys: string[];
  apiKeys: ApiKeyConfig[];
  records: TokenRecord[];
  settings: PluginSettings;
}

/** 拦截器识别到的 AI 调用信息 */
export interface AiCallInfo {
  apiKeyId: string;
  apiKeyName: string;
  source: string;
  /** 提供商名称（用户自定义） */
  provider: string;
  model: string;
}

/** 统计摘要 */
export interface StatisticsSummary {
  totalTokens: number;
  totalInputTokens: number;
  totalOutputTokens: number;
  totalRequests: number;
  successRequests: number;
  failedRequests: number;
  averageRequestTime: number;
  /** 估算总费用（货币单位，由各模型单价计算） */
  totalCost: number;
  modelStats: Record<string, ModelStat>;
  dailyStats: DailyStat[];
  keyStats: KeyStat[];
}

export interface ModelStat {
  model: string;
  count: number;
  tokens: number;
  inputTokens: number;
  outputTokens: number;
  /** 该模型估算费用 */
  cost: number;
}

export interface DailyStat {
  date: string;
  tokens: number;
  count: number;
  /** 当日各模型 token 分布，key 为规范化小写模型名 */
  byModel: Record<string, number>;
  /** 当日估算费用合计（货币单位） */
  cost: number;
}

export interface KeyStat {
  apiKeyId: string;
  apiKeyName: string;
  totalTokens: number;
  totalInputTokens: number;
  totalOutputTokens: number;
  totalRequests: number;
  quotaLimit: number;
  alertThreshold: number;
  usagePercent: number;
  isAlert: boolean;
  isExceeded: boolean;
}

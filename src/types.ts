/**
 * Token Statistics Plugin - Type Definitions
 */

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
  totalTokens: number;
  timestamp: number;
  requestTime: number;
  success: boolean;
}

/** 限额重置周期 */
export type QuotaResetCycle = "none" | "daily" | "monthly";

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
  /** Token 趋势图默认开始日期 (yyyy-MM-dd)，空表示自动 */
  trendDateRangeStart: string;
  /** Token 趋势图默认结束日期 (yyyy-MM-dd)，空表示自动 */
  trendDateRangeEnd: string;
  /** Token 趋势图聚合方式 */
  trendAggregation: "daily" | "weekly" | "monthly";
  /** 启用调试日志（默认关闭） */
  debugLogging?: boolean;
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
}

export interface DailyStat {
  date: string;
  tokens: number;
  count: number;
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

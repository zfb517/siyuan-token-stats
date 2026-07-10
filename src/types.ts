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
  /** 每 1K 缓存写入（cache_creation，Anthropic 等将上下文写入缓存，通常按 1.25x/10x 计费）tokens 价格，0 或不填表示不支持/不单独计费 */
  cacheCreation?: number;
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
  /** 资源包总 Token 额度（0 = 不限，用于按总量计费的资源包） */
  totalTokens: number;
  /** 资源包打包总价（>0 时启用打包价模式，忽略逐项单价；费用 = usedTokens/totalTokens * totalPrice） */
  totalPrice?: number;
  /** 每 1K 输入 tokens 价格（totalPrice > 0 时忽略） */
  input: number;
  /** 每 1K 输出 tokens 价格（totalPrice > 0 时忽略） */
  output: number;
  /** 每 1K 缓存命中 tokens 价格（可选，totalPrice > 0 时忽略） */
  cacheRead?: number;
  /** 每 1K 缓存写入 tokens 价格（可选，totalPrice > 0 时忽略） */
  cacheCreation?: number;
  /** 该资源包涵盖的模型名列表（保存时归一化为小写，匹配时忽略大小写） */
  models: string[];
}

/** API Key 配置 */
export interface ApiKeyConfig {
  id: string;
  name: string;
  /** 完整密钥：仅在用户录入时用于派生下面的 keyHash，录入后即刻丢弃，不进入持久化层、不随云同步或导出传输 */
  keyFull?: string;
  /** 完整密钥的单向 SHA-256 摘要，用于匹配拦截到的请求。只存摘要、不可逆，即使数据文件外泄也无法还原明文密钥 */
  keyHash?: string;
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
  /** 缓存写入 tokens 数（API 返回的 cache_creation_input_tokens，如 Anthropic 将上下文写入 Prompt Cache，按更高单价计费） */
  cacheCreationTokens?: number;
  totalTokens: number;
  timestamp: number;
  requestTime: number;
  success: boolean;
  /** 是否为启发式估算：true=无 usage 字段、token 由估算器得出；false=来自 API 响应 usage（精确）；undefined=旧版本记录（无法区分，统计时计入估算） */
  estimated?: boolean;
  /** 费用快照（仅当关闭「单价变更后自动重算」时写入，用于冻结当时费用；开启自动重算时为 undefined 实时计算） */
  cost?: number;
  /**
   * 诊断模式：本次调用 API 返回的原始 usage 对象（来自供应商响应，未做任何裁剪）。
   * 仅当开启「诊断模式」且成功解析到 usage 时写入，用于排查用量偏差，不参与任何费用计算。
   */
  rawUsage?: Record<string, unknown>;
  /** 笔记归因：来源笔记本（笔记本 id），来自请求体 references[].box */
  notebookId?: string;
  /** 笔记归因：来源文档（文档 id），来自请求体 references[].rootID */
  docId?: string;
  /** 笔记归因：来源文档路径（含笔记本的人文意义路径），来自请求体 references[].hpath */
  docPath?: string;
  /** 笔记归因：涉及的块 id 列表，来自请求体 references[].id */
  blockIds?: string[];
  /** 推理(reasoning/thinking) token 数：插件从 SSE 中间事件累加估算，用于从 completionTokens 中分离；非推理模型或未捕获时为 undefined */
  reasoningTokens?: number;
  /** 多模态估算标记：当本次调用含图像/音频等无法直接按文本估算的输入、且最终 token 来自启发式估算（无 API usage）时置 true，提示该记录输入量可能被低估 */
  multimodalEstimated?: boolean;
}

/**
 * 月度归档汇总：当明细记录超过 maxRecords 上限被滚动淘汰时，
 * 超出范围的更早月份会被聚合为一个月度汇总，避免历史数据彻底丢失。
 * 归档是冻结快照（记录被淘汰那一刻的费用，不随后续单价变更重算）。
 */
export interface MonthArchive {
  /** 月份标识 yyyy-MM */
  month: string;
  /** 被聚合的请求条数 */
  count: number;
  totalTokens: number;
  totalInputTokens: number;
  totalOutputTokens: number;
  totalCacheReadTokens: number;
  /** 缓存写入 tokens 总量（从各记录 cacheCreationTokens 累加） */
  totalCacheCreationTokens: number;
  /** 推理 token 总量（从各记录 reasoningTokens 累加） */
  totalReasoningTokens: number;
  /** 精确值总量（来自 API usage 的记录） */
  exactTokens: number;
  /** 启发式估算总量（无 usage 或旧版本记录） */
  estimatedTokens: number;
  /** 估算总费用（货币单位，淘汰时按当时单价计算） */
  cost: number;
  /** 缓存命中部分费用 */
  cacheCost: number;
  /** 按模型聚合：tokens / 输入 / 输出 / 费用 */
  byModel: Record<string, { tokens: number; inputTokens: number; outputTokens: number; cost: number; reasoningTokens: number; cacheReadTokens: number; cacheCreationTokens: number }>;
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
  /** 仪表盘是否拆分展示「精确值 / 启发式估算」总量（默认 false） */
  dashboardSplitExactEstimate?: boolean;
  /** 仪表盘免责提示：开启时在仪表盘顶部常驻显示「数据仅供参考、以 API 供应商账单为准」提示（默认 true） */
  showDisclaimer?: boolean;
  /** 最多保留多少条记录 */
  maxRecords: number;
  /** 资源包模式下缓存命中是否计入费用：true（默认）计入；false 则资源包匹配到的请求其缓存命中 tokens 不计入费用估算，避免「大量命中缓存」场景下费用高估 */
  packCountCacheRead: boolean;
  /** 推理(reasoning/thinking) token 是否计入输出与费用：true（默认）计入，与绝大多数商家按 completion_tokens 统一计费口径一致；false 则从可计费输出中扣除推理部分（适用于推理 token 单独计费或免费的商家） */
  countReasoningInOutput: boolean;
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
  /**
   * 诊断模式导出条数：仪表盘「导出原始 usage 日志」时，最多导出最近 N 条带 rawUsage 的记录（默认 50）。
   * 设为 0 表示全部导出。
   */
  diagnosticExportCount: number;
  // ─── L2 数据飞轮（v1.5.3）───
  /** 月末预测：开启后在仪表盘展示「预计月末费用 / Token」及与全局限额的进度对比 */
  enableForecast?: boolean;
  /** 预测方法：linear=按已用日均线性外推；recentTrend=按最近 N 日均值外推（默认） */
  forecastMethod?: "linear" | "recentTrend";
  /** 最近趋势窗口天数（recentTrend 方法使用，默认 7） */
  forecastWindowDays?: number;
  /** 异常检测：开启后在仪表盘列出用量离群日 */
  enableAnomaly?: boolean;
  /** 异常敏感度：标准差倍数阈值（默认 2.5），越大越宽松 */
  anomalySensitivity?: number;
  /** 异常检测回溯天数（默认 30，至少 3） */
  anomalyLookbackDays?: number;
  /** 优化建议：开启后在仪表盘给出基于数据的降本 / 提效建议 */
  enableSuggestions?: boolean;
  // ─── 仪表盘简洁模式（v1.5.3）───
  /** 显示高级数据洞察总开关：关闭时仪表盘仅展示核心视图（简洁版），隐藏预测 / 异常 / 建议 / 笔记归因 */
  showAdvancedDashboard?: boolean;
  /** 笔记归因面板：开启后在高级视图中展示「按文档 Token 消耗」排行（采集始终后台进行，此开关仅控制显示） */
  enableNoteAttribution?: boolean;
  /** 笔记归因显示条数（Top N，默认 10），替换原硬编码上限 */
  attributionTopN?: number;
  // ─── 数字显示（v1.5.3）───
  /** Token 数字格式：auto=大数字自动用 M/k 后缀（默认）；full=始终显示完整数字 */
  tokenDisplayUnit?: "auto" | "full";
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
  /** 月度归档汇总（超出明细上限被滚动淘汰的旧月份聚合，避免历史数据丢失） */
  archives: MonthArchive[];
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
  /** 缓存命中 tokens 总量（API 返回的 cached_input_tokens 等） */
  totalCacheReadTokens: number;
  /** 缓存写入 tokens 总量（API 返回的 cache_creation_input_tokens 等） */
  totalCacheCreationTokens: number;
  /** 缓存命中部分费用（货币单位） */
  totalCacheCost: number;
  /** 精确值总量（来自 API usage 的记录 totalTokens 之和） */
  exactTokens: number;
  /** 启发式估算总量（无 usage 的记录 totalTokens 之和，含旧版本未区分记录） */
  estimatedTokens: number;
  /** 已归档的月份数（超出明细上限被聚合为月度汇总的旧数据），其总量已计入上述总计 */
  archivedMonths: number;
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
  /** 缓存命中 tokens */
  cacheReadTokens: number;
  /** 缓存写入 tokens */
  cacheCreationTokens: number;
  /** 该模型估算费用 */
  cost: number;
  /** 该模型缓存命中部分费用 */
  cacheCost: number;
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
  enabled: boolean;
}

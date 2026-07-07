/**
 * API Key 管理器
 * 负责：密钥匹配、用量追踪、限额检查、阈值提醒
 */
import type { Store } from "./store";
import type { ApiKeyConfig, PluginSettings, QuotaResetCycle } from "./types";

/** 提取 URL 的路径部分用于匹配（兼容相对路径和绝对路径） */
function normalizeUrlPath(url: string): string {
  if (!url) return "";
  try {
    const u = new URL(url, window.location.href);
    return u.pathname + u.search;
  } catch {
    return url;
  }
}

export class KeyManager {
  constructor(private store: Store) {}

  /** 获取所有密钥 */
  getAllKeys(): ApiKeyConfig[] {
    return this.store.getApiKeys();
  }

  /** 根据实际 API Key 字符串查找匹配的配置 */
  findByKey(apiKey: string): ApiKeyConfig | undefined {
    if (!apiKey) return undefined;
    return this.store.getApiKeys().find(
      (k) => k.enabled && k.keyFull && k.keyFull === apiKey
    );
  }

  /** 根据 URL 查找匹配的配置（同时支持相对路径和绝对路径） */
  findByUrl(url: string): ApiKeyConfig | undefined {
    const normalizedUrl = normalizeUrlPath(url);
    if (!normalizedUrl) return undefined;
    return this.store
      .getApiKeys()
      .find((k) => {
        if (!k.enabled || !k.baseUrl) return false;
        const normalizedBase = normalizeUrlPath(k.baseUrl);
        if (!normalizedBase) return false;
        return normalizedUrl.includes(normalizedBase) || normalizedBase.includes(normalizedUrl);
      });
  }

  /** 按 URL + 模型联合匹配 */
  findByUrlAndModel(url: string, model: string): ApiKeyConfig | undefined {
    if (!url) return undefined;
    const candidates = this.store.getApiKeys().filter((k) => {
      if (!k.enabled || !k.baseUrl) return false;
      const normalizedBase = normalizeUrlPath(k.baseUrl);
      const normalizedUrl = normalizeUrlPath(url);
      return normalizedBase && normalizedUrl
        ? normalizedUrl.includes(normalizedBase) || normalizedBase.includes(normalizedUrl)
        : false;
    });
    if (candidates.length === 0) return undefined;
    if (model) {
      const lowerModel = String(model).toLowerCase().trim();
      for (const k of candidates) {
        if (Array.isArray(k.models) && k.models.find((m) => String(m).toLowerCase().trim() === lowerModel)) {
          return k;
        }
      }
    }
    return candidates[0];
  }

  /** 按关联模型查找匹配的 Key */
  findByModel(model: string): ApiKeyConfig | undefined {
    if (!model) return undefined;
    const lowerModel = String(model).toLowerCase().trim();
    return this.store.getApiKeys().find((k) => {
      if (!k.enabled) return false;
      const models = (k.models || []).map((m) => String(m).toLowerCase().trim());
      return models.includes(lowerModel);
    });
  }

  /** 计算重置周期的起始时间戳 */
  getResetBoundary(cycle: QuotaResetCycle): number {
    if (cycle === "none") return 0;
    const now = new Date();
    if (cycle === "daily") {
      return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    }
    // monthly: 本月 1 日 00:00
    return new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  }

  /** 计算某个 key 在当前重置周期内的累计用量（含手动校准偏移量） */
  getKeyUsage(apiKeyId: string): {
    totalTokens: number;
    totalInputTokens: number;
    totalOutputTokens: number;
    totalRequests: number;
  } {
    const settings = this.store.getSettings();
    const boundary = this.getResetBoundary(settings.quotaResetCycle);
    const key = this.store.getApiKey(apiKeyId);
    const records = this.store
      .getRecords()
      .filter((r) => r.apiKeyId === apiKeyId && r.timestamp >= boundary);
    // 偏移量：用户手动导入的第三方平台历史用量，叠加到当前周期
    const offsetTokens = key?.usedTokensOffset ?? 0;
    const offsetInput = key?.usedInputTokensOffset ?? 0;
    const offsetOutput = key?.usedOutputTokensOffset ?? 0;
    return {
      totalTokens: records.reduce((sum, r) => sum + r.totalTokens, 0) + offsetTokens,
      totalInputTokens: records.reduce((sum, r) => sum + r.inputTokens, 0) + offsetInput,
      totalOutputTokens: records.reduce((sum, r) => sum + r.outputTokens, 0) + offsetOutput,
      totalRequests: records.length,
    };
  }

  /** 获取剩余配额（-1 表示不限） */
  getRemainingQuota(apiKeyId: string): number {
    const key = this.store.getApiKey(apiKeyId);
    if (!key || key.quotaLimit <= 0) return -1;
    const usage = this.getKeyUsage(apiKeyId);
    return Math.max(0, key.quotaLimit - usage.totalTokens);
  }

  /** 使用百分比 */
  getUsagePercent(apiKeyId: string): number {
    const key = this.store.getApiKey(apiKeyId);
    if (!key || key.quotaLimit <= 0) return 0;
    const usage = this.getKeyUsage(apiKeyId);
    return Math.min(100, (usage.totalTokens / key.quotaLimit) * 100);
  }

  /** 是否已超出限额 */
  isQuotaExceeded(apiKeyId: string): boolean {
    const key = this.store.getApiKey(apiKeyId);
    if (!key || key.quotaLimit <= 0) return false;
    const usage = this.getKeyUsage(apiKeyId);
    return usage.totalTokens >= key.quotaLimit;
  }

  /** 请求前预检：当前用量 + 预估输入 token 是否会超限 */
  wouldExceedQuota(apiKeyId: string, estimatedInputTokens: number): boolean {
    const key = this.store.getApiKey(apiKeyId);
    if (!key || key.quotaLimit <= 0) return false;
    const usage = this.getKeyUsage(apiKeyId);
    return usage.totalTokens + estimatedInputTokens > key.quotaLimit;
  }

  /** 是否达到提醒阈值 */
  isThresholdReached(apiKeyId: string): boolean {
    const key = this.store.getApiKey(apiKeyId);
    if (!key || key.alertThreshold <= 0 || key.quotaLimit <= 0) return false;
    const usage = this.getKeyUsage(apiKeyId);
    const percent = (usage.totalTokens / key.quotaLimit) * 100;
    return percent >= key.alertThreshold;
  }

  /**
   * 检查阈值并返回提醒信息（如果需要提醒）
   * 使用闭包变量避免重复提醒
   */
  private alertedKeys = new Set<string>();

  checkThreshold(
    apiKeyId: string,
    showNotification: (msg: string) => void
  ): void {
    const key = this.store.getApiKey(apiKeyId);
    if (!key) return;

    // 跨周期重置：如果当前用量已低于阈值（新周期开始），清除告警状态
    if (this.alertedKeys.has(apiKeyId) && !this.isThresholdReached(apiKeyId)) {
      this.alertedKeys.delete(apiKeyId);
    }

    // 达到阈值提醒（不因超限而跳过，因为单次请求可能同时跨越阈值和限额）
    if (this.isThresholdReached(apiKeyId) && !this.alertedKeys.has(apiKeyId)) {
      this.alertedKeys.add(apiKeyId);
      const usage = this.getKeyUsage(apiKeyId);
      const percent = ((usage.totalTokens / key.quotaLimit) * 100).toFixed(1);
      const msg = `⚠️ Token 用量提醒：${key.name} 已使用 ${percent}%（${usage.totalTokens.toLocaleString()} / ${key.quotaLimit.toLocaleString()} tokens）`;
      showNotification(msg);
    }

    // 超出限额（在阈值提醒之后显示）
    if (this.isQuotaExceeded(apiKeyId)) {
      const msg = `⛔ Token 限额已用尽：${key.name}（限额 ${key.quotaLimit.toLocaleString()} tokens）`;
      showNotification(msg);
    }
  }

  /** 重置提醒状态（用户修改阈值后调用） */
  resetAlert(apiKeyId: string): void {
    this.alertedKeys.delete(apiKeyId);
  }

  /** 清除所有提醒状态（重置全部数据时调用） */
  clearAllAlerts(): void {
    this.alertedKeys.clear();
    this.alertedGlobal = false;
  }

  /** 生成新 key 的 ID */
  generateKeyId(): string {
    return `key-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
  }

  /** 生成脱敏显示 */
  maskKey(key: string): string {
    if (!key) return "(空)";
    if (key.length <= 8) return key.substring(0, 2) + "***";
    return key.substring(0, 5) + "..." + key.substring(key.length - 4);
  }

  /** 根据提供商返回默认 base URL */
  getDefaultBaseUrl(provider: string): string {
    const urls: Record<string, string> = {
      openai: "https://api.openai.com/v1/chat/completions",
      anthropic: "https://api.anthropic.com/v1/messages",
      deepseek: "https://api.deepseek.com/v1/chat/completions",
    };
    return urls[provider.toLowerCase()] || "";
  }

  // ─── 全局总 Token 限额 ───

  /** 全局在当前重置周期内的累计用量（含手动校准偏移量） */
  getGlobalUsage(settings: PluginSettings): {
    totalTokens: number;
    totalInputTokens: number;
    totalOutputTokens: number;
    totalRequests: number;
  } {
    const boundary = this.getResetBoundary(settings.globalQuotaResetCycle);
    const records = this.store.getRecords().filter((r) => r.timestamp >= boundary);
    return {
      totalTokens: records.reduce((sum, r) => sum + r.totalTokens, 0) + (settings.globalUsedTokensOffset ?? 0),
      totalInputTokens: records.reduce((sum, r) => sum + r.inputTokens, 0) + (settings.globalUsedInputTokensOffset ?? 0),
      totalOutputTokens: records.reduce((sum, r) => sum + r.outputTokens, 0) + (settings.globalUsedOutputTokensOffset ?? 0),
      totalRequests: records.length,
    };
  }

  /** 全局剩余配额（-1 表示不限） */
  getGlobalRemainingQuota(settings: PluginSettings): number {
    if (settings.globalQuotaLimit <= 0) return -1;
    const usage = this.getGlobalUsage(settings);
    return Math.max(0, settings.globalQuotaLimit - usage.totalTokens);
  }

  /** 全局使用百分比 */
  getGlobalUsagePercent(settings: PluginSettings): number {
    if (settings.globalQuotaLimit <= 0) return 0;
    const usage = this.getGlobalUsage(settings);
    return Math.min(100, (usage.totalTokens / settings.globalQuotaLimit) * 100);
  }

  /** 全局是否已超出限额 */
  isGlobalQuotaExceeded(settings: PluginSettings): boolean {
    if (settings.globalQuotaLimit <= 0) return false;
    const usage = this.getGlobalUsage(settings);
    return usage.totalTokens >= settings.globalQuotaLimit;
  }

  /** 请求前预检：全局当前用量 + 预估 token 是否会超限 */
  wouldExceedGlobalQuota(settings: PluginSettings, estimatedTokens: number): boolean {
    if (settings.globalQuotaLimit <= 0) return false;
    const usage = this.getGlobalUsage(settings);
    return usage.totalTokens + estimatedTokens > settings.globalQuotaLimit;
  }

  /** 全局是否达到提醒阈值 */
  isGlobalThresholdReached(settings: PluginSettings): boolean {
    if (settings.globalAlertThreshold <= 0 || settings.globalQuotaLimit <= 0) return false;
    const usage = this.getGlobalUsage(settings);
    const percent = (usage.totalTokens / settings.globalQuotaLimit) * 100;
    return percent >= settings.globalAlertThreshold;
  }

  private alertedGlobal = false;

  /** 检查全局阈值并返回提醒信息 */
  checkGlobalThreshold(
    settings: PluginSettings,
    showNotification: (msg: string) => void
  ): void {
    if (settings.globalQuotaLimit <= 0) return;

    // 跨周期重置：如果当前用量已低于阈值（新周期开始），清除告警状态
    if (this.alertedGlobal && !this.isGlobalThresholdReached(settings)) {
      this.alertedGlobal = false;
    }

    // 达到全局阈值提醒（不因超限而跳过）
    if (this.isGlobalThresholdReached(settings) && !this.alertedGlobal) {
      this.alertedGlobal = true;
      const usage = this.getGlobalUsage(settings);
      const percent = ((usage.totalTokens / settings.globalQuotaLimit) * 100).toFixed(1);
      const msg = `⚠️ 全局 Token 用量提醒：已使用 ${percent}%（${usage.totalTokens.toLocaleString()} / ${settings.globalQuotaLimit.toLocaleString()} tokens）`;
      showNotification(msg);
    }

    // 全局超出限额
    if (this.isGlobalQuotaExceeded(settings)) {
      const msg = `⛔ 全局 Token 限额已用尽（限额 ${settings.globalQuotaLimit.toLocaleString()} tokens）`;
      showNotification(msg);
    }
  }

  /** 重置全局提醒状态（修改阈值后调用） */
  resetGlobalAlert(): void {
    this.alertedGlobal = false;
  }

  // ─── 全局费用限额 ───

  /** 全局在当前重置周期内的累计总费用 */
  getGlobalCostUsage(settings: PluginSettings): { totalCost: number; totalRequests: number } {
    const boundary = this.getResetBoundary(settings.globalQuotaResetCycle);
    const records = this.store.getRecords().filter((r) => r.timestamp >= boundary);
    let totalCost = 0;
    for (const r of records) {
      totalCost += this.store.getRecordCost(r);
    }
    return { totalCost, totalRequests: records.length };
  }

  /** 全局剩余费用额度（-1 表示不限） */
  getGlobalRemainingCost(settings: PluginSettings): number {
    if (settings.globalCostLimit <= 0) return -1;
    const usage = this.getGlobalCostUsage(settings);
    return Math.max(0, settings.globalCostLimit - usage.totalCost);
  }

  /** 全局费用使用百分比 */
  getGlobalCostPercent(settings: PluginSettings): number {
    if (settings.globalCostLimit <= 0) return 0;
    const usage = this.getGlobalCostUsage(settings);
    return Math.min(100, (usage.totalCost / settings.globalCostLimit) * 100);
  }

  /** 全局是否已超出费用限额 */
  isGlobalCostExceeded(settings: PluginSettings): boolean {
    if (settings.globalCostLimit <= 0) return false;
    const usage = this.getGlobalCostUsage(settings);
    return usage.totalCost >= settings.globalCostLimit;
  }

  /** 请求前预检：全局当前累计费用 + 预估本次费用是否会超限 */
  wouldExceedGlobalCostQuota(settings: PluginSettings, estimatedCost: number): boolean {
    if (settings.globalCostLimit <= 0) return false;
    const usage = this.getGlobalCostUsage(settings);
    return usage.totalCost + estimatedCost > settings.globalCostLimit;
  }

  /** 全局是否达到费用提醒阈值 */
  isGlobalCostThresholdReached(settings: PluginSettings): boolean {
    if (settings.globalCostAlertThreshold <= 0 || settings.globalCostLimit <= 0) return false;
    const usage = this.getGlobalCostUsage(settings);
    const percent = (usage.totalCost / settings.globalCostLimit) * 100;
    return percent >= settings.globalCostAlertThreshold;
  }

  private alertedCostGlobal = false;

  /** 检查全局费用阈值并返回提醒信息 */
  checkGlobalCostThreshold(
    settings: PluginSettings,
    showNotification: (msg: string) => void
  ): void {
    if (settings.globalCostLimit <= 0) return;

    // 跨周期重置
    if (this.alertedCostGlobal && !this.isGlobalCostThresholdReached(settings)) {
      this.alertedCostGlobal = false;
    }

    // 达到全局费用阈值提醒
    if (this.isGlobalCostThresholdReached(settings) && !this.alertedCostGlobal) {
      this.alertedCostGlobal = true;
      const usage = this.getGlobalCostUsage(settings);
      const percent = ((usage.totalCost / settings.globalCostLimit) * 100).toFixed(1);
      const cur = settings.currency || "¥";
      const msg = `⚠️ 全局费用提醒：已使用 ${percent}%（${cur}${usage.totalCost.toFixed(2)} / ${cur}${settings.globalCostLimit.toFixed(2)}）`;
      showNotification(msg);
    }

    // 全局超出费用限额
    if (this.isGlobalCostExceeded(settings)) {
      const cur = settings.currency || "¥";
      const msg = `⛔ 全局费用限额已用尽（限额 ${cur}${settings.globalCostLimit.toFixed(2)}）`;
      showNotification(msg);
    }
  }

  /** 重置全局费用提醒状态 */
  resetGlobalCostAlert(): void {
    this.alertedCostGlobal = false;
  }

  /**
   * 检查所有密钥 + 全局的阈值与限额，并在需要提醒时调用 showNotification。
   * 由定时器与云同步合并后调用，使阈值提醒在「用量经云同步到达本端」时也能触发，
   * 而不仅依赖本端一次新的 API 调用（interceptor 中仅对当次命中的 key 检查）。
   * 已提醒过的 key / 全局不会重复通知（alertedKeys / alertedGlobal 去重）。
   */
  checkAllThresholds(showNotification: (msg: string) => void): void {
    const settings = this.store.getSettings();
    for (const k of this.store.getApiKeys()) {
      if (k.enabled) this.checkThreshold(k.id, showNotification);
    }
    this.checkGlobalThreshold(settings, showNotification);
    this.checkGlobalCostThreshold(settings, showNotification);
  }
}

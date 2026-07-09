/**
 * 数据飞轮分析层（v1.5.3）
 * 纯函数集合：月末预测、异常检测、优化建议。
 * 仅依赖 Store（读取记录与单价）与 KeyManager（重置周期边界），不触碰 DOM。
 */
import type { Store } from "./store";
import type { KeyManager } from "./key-manager";
import type { PluginSettings, StatisticsSummary } from "./types";

const DAY = 86400000;

export type ForecastMethod = "linear" | "recentTrend";

export interface ForecastResult {
  enabled: boolean;
  hasData: boolean;
  cycleLabel: string;
  cycleStartTs: number;
  cycleEndTs: number;
  daysElapsed: number;
  daysTotal: number;
  daysLeft: number;
  usedTokens: number;
  usedCost: number;
  runRateTokens: number;
  runRateCost: number;
  projectedTokens: number;
  projectedCost: number;
  tokenLimit: number;
  costLimit: number;
  projectedTokenPercent: number;
  projectedCostPercent: number;
}

export interface Anomaly {
  date: string;
  metric: "tokens" | "cost" | "requests";
  value: number;
  expected: number;
  z: number;
  deviationPct: number;
  reason: string;
  severity: "high" | "medium";
  topModel?: string;
}

export interface AnomalyResult {
  hasData: boolean;
  anomalies: Anomaly[];
  newModels: string[];
}

export type SuggestionSeverity = "high" | "medium" | "low";

export interface Suggestion {
  id: string;
  severity: SuggestionSeverity;
  title: string;
  detail: string;
  estimatedSaving?: number;
}

function formatDateLocal(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function cycleLabel(cycle: string, customDays = 30): string {
  if (cycle === "daily") return "今日";
  if (cycle === "custom") return `最近 ${customDays} 天`;
  return "本月";
}

/** 选择用于预测的主周期：有全局费用限额取费用周期，否则有全局 Token 限额取 Token 周期，否则自然月 */
function pickCycle(settings: PluginSettings): { cycle: "none" | "daily" | "monthly" | "custom"; label: string } {
  if (settings.globalCostLimit > 0) {
    return { cycle: settings.globalCostResetCycle, label: cycleLabel(settings.globalCostResetCycle, settings.customResetDays) };
  }
  if (settings.globalQuotaLimit > 0) {
    return { cycle: settings.globalQuotaResetCycle, label: cycleLabel(settings.globalQuotaResetCycle, settings.customResetDays) };
  }
  return { cycle: "monthly", label: "自然月" };
}

/** 计算周期结束时间戳（下一个重置点） */
function computeCycleEnd(cycle: string, startTs: number, customDays = 30, nowTs = Date.now()): number {
  if (cycle === "daily") return startTs + DAY;
  if (cycle === "custom") return startTs + customDays * DAY;
  const d = new Date(startTs);
  return new Date(d.getFullYear(), d.getMonth() + 1, 1).getTime() || new Date(new Date(nowTs).getFullYear(), new Date(nowTs).getMonth() + 1, 1).getTime();
}

/**
 * 月末预测：根据当前重置周期内的已用用量，外推到周期结束时的总费用与 Token。
 * 预测方法：linear=按已用日均线性外推；recentTrend=按最近 N 日均值外推（更贴合近期变化）。
 */
export function projectMonthEnd(
  store: Store,
  settings: PluginSettings,
  keyManager: KeyManager,
  now: Date
): ForecastResult {
  const result: ForecastResult = {
    enabled: settings.enableForecast !== false,
    hasData: false,
    cycleLabel: "",
    cycleStartTs: 0,
    cycleEndTs: 0,
    daysElapsed: 0,
    daysTotal: 0,
    daysLeft: 0,
    usedTokens: 0,
    usedCost: 0,
    runRateTokens: 0,
    runRateCost: 0,
    projectedTokens: 0,
    projectedCost: 0,
    tokenLimit: settings.globalQuotaLimit > 0 ? settings.globalQuotaLimit : 0,
    costLimit: settings.globalCostLimit > 0 ? settings.globalCostLimit : 0,
    projectedTokenPercent: 0,
    projectedCostPercent: 0,
  };
  if (!result.enabled) return result;

  const pick = pickCycle(settings);
  const effCycle = pick.cycle === "none" ? "monthly" : pick.cycle;
  const startTs = keyManager.getResetBoundary(effCycle, settings.customResetDays);
  const endTs = computeCycleEnd(effCycle, startTs, settings.customResetDays, now.getTime());
  const nowTs = now.getTime();

  const records = store.getRecords().filter((r) => r.timestamp >= startTs && r.timestamp <= nowTs);
  const usedTokens = records.reduce((sum, r) => sum + (r.totalTokens || 0), 0);
  const usedCost = records.reduce((sum, r) => sum + store.getRecordCost(r), 0);

  result.cycleLabel = pick.label;
  result.cycleStartTs = startTs;
  result.cycleEndTs = endTs;
  result.usedTokens = usedTokens;
  result.usedCost = usedCost;
  result.hasData = records.length > 0;

  const daysTotal = Math.max(1, Math.round((endTs - startTs) / DAY));
  const daysElapsed = Math.max(0, Math.min(daysTotal, (nowTs - startTs) / DAY));
  const daysLeft = Math.max(0, daysTotal - daysElapsed);
  result.daysTotal = daysTotal;
  result.daysElapsed = daysElapsed;
  result.daysLeft = daysLeft;

  const method: ForecastMethod = settings.forecastMethod === "linear" ? "linear" : "recentTrend";
  const windowDays = Math.max(1, Math.min(settings.forecastWindowDays || 7, daysElapsed || 1));

  let runRateTokens: number;
  let runRateCost: number;
  if (method === "linear" || daysElapsed <= 0) {
    runRateTokens = daysElapsed > 0 ? usedTokens / daysElapsed : 0;
    runRateCost = daysElapsed > 0 ? usedCost / daysElapsed : 0;
  } else {
    const cutoff = nowTs - windowDays * DAY;
    const recent = records.filter((r) => r.timestamp >= cutoff);
    const rTokens = recent.reduce((sum, r) => sum + (r.totalTokens || 0), 0);
    const rCost = recent.reduce((sum, r) => sum + store.getRecordCost(r), 0);
    if (recent.length > 0) {
      runRateTokens = rTokens / windowDays;
      runRateCost = rCost / windowDays;
    } else {
      runRateTokens = daysElapsed > 0 ? usedTokens / daysElapsed : 0;
      runRateCost = daysElapsed > 0 ? usedCost / daysElapsed : 0;
    }
  }

  result.runRateTokens = runRateTokens;
  result.runRateCost = runRateCost;
  result.projectedTokens = usedTokens + runRateTokens * daysLeft;
  result.projectedCost = usedCost + runRateCost * daysLeft;
  result.projectedTokenPercent = result.tokenLimit > 0 ? (result.projectedTokens / result.tokenLimit) * 100 : 0;
  result.projectedCostPercent = result.costLimit > 0 ? (result.projectedCost / result.costLimit) * 100 : 0;

  return result;
}

/**
 * 异常检测：对最近 lookback 天的每日聚合（Token / 费用 / 请求数）计算均值与标准差，
 * 标记显著超出均值（Z ≥ 敏感度）的离群日；同时识别近 7 天新出现的模型。
 */
export function detectAnomalies(store: Store, settings: PluginSettings, now: Date): AnomalyResult {
  const lookback = Math.max(3, settings.anomalyLookbackDays || 30);
  const k = Math.max(1.5, settings.anomalySensitivity || 2.5);
  const out: AnomalyResult = { hasData: false, anomalies: [], newModels: [] };

  const today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const daily = new Map<string, { tokens: number; cost: number; count: number; byModel: Record<string, number> }>();
  for (let i = lookback - 1; i >= 0; i--) {
    const d = new Date(today0 - i * DAY);
    daily.set(formatDateLocal(d), { tokens: 0, cost: 0, count: 0, byModel: {} });
  }

  const records = store.getRecords();
  for (const r of records) {
    if (r.timestamp < today0 - (lookback - 1) * DAY) continue;
    const key = formatDateLocal(new Date(r.timestamp));
    const bucket = daily.get(key);
    if (!bucket) continue;
    bucket.tokens += r.totalTokens || 0;
    bucket.cost += store.getRecordCost(r);
    bucket.count += 1;
    const mk = (r.model || "unknown").toLowerCase().trim();
    bucket.byModel[mk] = (bucket.byModel[mk] || 0) + (r.totalTokens || 0);
  }

  const series = Array.from(daily.values());
  const dates = Array.from(daily.keys());
  out.hasData = series.some((b) => b.count > 0);
  if (!out.hasData) return out;

  const metrics: ("tokens" | "cost" | "requests")[] = ["tokens", "cost", "requests"];
  for (const m of metrics) {
    const vals = series.map((b) => (m === "tokens" ? b.tokens : m === "cost" ? b.cost : b.count));
    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    const variance = vals.reduce((a, b) => a + (b - mean) * (b - mean), 0) / vals.length;
    const std = Math.sqrt(variance);
    for (let i = 0; i < vals.length; i++) {
      const v = vals[i];
      if (v <= 0 || std < 1e-9) continue;
      const z = (v - mean) / std;
      const devPct = mean > 0 ? ((v - mean) / mean) * 100 : 0;
      if (z >= k && v > mean * 1.3) {
        let topModel: string | undefined;
        const entries = Object.entries(series[i].byModel);
        if (entries.length > 0) {
          entries.sort((a, b) => b[1] - a[1]);
          if (entries[0][1] > v * 0.6) topModel = entries[0][0];
        }
        const metricName = m === "tokens" ? "Token 用量" : m === "cost" ? "费用" : "请求数";
        out.anomalies.push({
          date: dates[i],
          metric: m,
          value: v,
          expected: mean,
          z,
          deviationPct: devPct,
          reason:
            `${metricName}突增${devPct.toFixed(0)}%（${v.toLocaleString()} vs 日均 ${mean.toLocaleString()}）` +
            (topModel ? `，主要由模型 ${topModel} 贡献` : ""),
          severity: z >= k * 1.5 ? "high" : "medium",
          topModel,
        });
      }
    }
  }

  // 新模型：近 7 天出现但更早 7~14 天未出现的模型
  const recentModels = new Set<string>();
  const olderModels = new Set<string>();
  const sevenAgo = today0 - 7 * DAY;
  const fourteenAgo = today0 - 14 * DAY;
  for (const r of records) {
    const mk = (r.model || "unknown").toLowerCase().trim();
    if (r.timestamp >= sevenAgo) recentModels.add(mk);
    else if (r.timestamp >= fourteenAgo) olderModels.add(mk);
  }
  for (const m of recentModels) {
    if (!olderModels.has(m)) out.newModels.push(m);
  }

  out.anomalies.sort((a, b) => b.z - a.z);
  out.anomalies = out.anomalies.slice(0, 12);
  return out;
}

/**
 * 优化建议：基于统计摘要与记录给出降本 / 提效建议。
 * 规则：缓存命中率偏低、本地估算占比偏高、高价模型占据过半费用、用量按星期集中。
 */
export function buildSuggestions(
  store: Store,
  settings: PluginSettings,
  summary: StatisticsSummary,
  _now: Date
): Suggestion[] {
  const out: Suggestion[] = [];
  const models = Object.values(summary.modelStats);

  // 1. 缓存命中率偏低：该模型配置了缓存单价但命中率 < 20% 且输入量足够
  for (const m of models) {
    if (m.inputTokens <= 0) continue;
    if (!store.modelHasCachePrice(m.model)) continue;
    const cacheRate = m.cacheReadTokens / m.inputTokens;
    if (cacheRate >= 0.2 || m.inputTokens <= 10000) continue;
    const inputPrice = store.getInputPrice(m.model);
    const cachePrice = store.getCachePrice(m.model);
    let saving = 0;
    if (inputPrice > 0 && cachePrice >= 0) {
      const convertible = m.inputTokens * 0.5;
      saving = (convertible / 1000) * Math.max(0, inputPrice - cachePrice);
    }
    out.push({
      id: "cache-" + m.model,
      severity: "medium",
      title: `提升「${m.model}」缓存命中率`,
      detail: `当前缓存命中率仅 ${(cacheRate * 100).toFixed(0)}%。复用 system prompt 或开启提示缓存，可将部分输入 token 转为更便宜的缓存读取，降低输入成本。`,
      estimatedSaving: saving > 0 ? saving : undefined,
    });
  }

  // 2. 本地估算占比偏高
  const totalTokens = summary.totalTokens || 0;
  if (totalTokens > 0 && summary.estimatedTokens / totalTokens > 0.3) {
    out.push({
      id: "estimated-ratio",
      severity: "low",
      title: "本地估算占比偏高",
      detail: `约 ${(summary.estimatedTokens / totalTokens * 100).toFixed(0)}% 的用量为启发式估算（供应商未返回 usage）。切换至返回 usage 的端点或模型可提升统计精度，进而改善预测与账单对账的可靠性。`,
    });
  }

  // 3. 高价模型占据过半费用
  const costModels = models.filter((x) => x.cost > 0).sort((a, b) => b.cost - a.cost);
  if (costModels.length > 0) {
    const top = costModels[0];
    const totalCost = costModels.reduce((s, x) => s + x.cost, 0);
    if (totalCost > 0 && top.cost / totalCost > 0.5) {
      out.push({
        id: "expensive-model",
        severity: "low",
        title: `「${top.model}」占总费用 ${(top.cost / totalCost * 100).toFixed(0)}%`,
        detail: `该模型费用占比过半。初稿、摘要、分类等低风险任务可迁移至单价更低的模型，仅在精修阶段使用高价模型，通常可显著降本。`,
      });
    }
  }

  // 4. 用量按星期集中
  const records = store.getRecords();
  const wkTokens = new Array(7).fill(0);
  const wkCount = new Array(7).fill(0);
  const weekdayNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  for (const r of records) {
    const idx = new Date(r.timestamp).getDay();
    wkTokens[idx] += r.totalTokens || 0;
    wkCount[idx] += 1;
  }
  const avgByDay = wkTokens.map((t, i) => (wkCount[i] > 0 ? t / wkCount[i] : 0));
  const positives = avgByDay.filter((x) => x > 0);
  const maxAvg = positives.length > 0 ? Math.max(...positives) : 0;
  const minAvg = positives.length > 0 ? Math.min(...positives) : 0;
  if (minAvg > 0 && maxAvg > minAvg * 1.8) {
    const peak = avgByDay.indexOf(maxAvg);
    out.push({
      id: "weekday-concentration",
      severity: "low",
      title: `用量集中在${weekdayNames[peak]}`,
      detail: `${weekdayNames[peak]}的日均用量约为最低日的 ${(maxAvg / minAvg).toFixed(1)} 倍。将批量或重任务集中到同一天处理，有助于复用提示缓存、摊薄固定开销。`,
    });
  }

  const order: Record<SuggestionSeverity, number> = { high: 0, medium: 1, low: 2 };
  out.sort((a, b) => order[a.severity] - order[b.severity] || (b.estimatedSaving || 0) - (a.estimatedSaving || 0));
  return out.slice(0, 12);
}

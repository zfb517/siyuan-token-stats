/**
 * 网络拦截器
 * 通过覆写 window.fetch，拦截所有 AI API 调用，提取/估算 token 用量。
 *
 * 支持拦截的 API 类型：
 * 1. 按 API Base URL 匹配（用户自定义 URL 模式）
 * 2. OpenAI 兼容：v1/chat/completions, v1/completions
 * 3. Anthropic：v1/messages
 * 4. 按 Authorization / x-api-key 头中的 Key 匹配
 */
import type { Store } from "./store";
import type { KeyManager } from "./key-manager";
import type { TokenCounter } from "./token-counter";
import type { AiCallInfo, ApiKeyConfig, PluginSettings, TokenRecord } from "./types";

/** 从 HeadersInit 中安全提取 header 值 */
function getHeader(headers: HeadersInit | undefined, name: string): string | null {
  if (!headers) return null;
  if (headers instanceof Headers) {
    return headers.get(name);
  }
  if (Array.isArray(headers)) {
    for (const [k, v] of headers) {
      if (k.toLowerCase() === name.toLowerCase()) return v;
    }
    return null;
  }
  const obj = headers as Record<string, string>;
  const lower = name.toLowerCase();
  for (const k of Object.keys(obj)) {
    if (k.toLowerCase() === lower) return obj[k];
  }
  return null;
}

/** 从 RequestInfo/URL 中提取 URL 字符串 */
function extractUrl(input: RequestInfo | URL): string {
  if (typeof input === "string") return input;
  if (input instanceof URL) return input.href;
  return input.url;
}

/** 生成唯一 ID */
function genId(): string {
  return `rec-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/** 规范化模型名：trim、去除空值 */
function normalizeModel(model: string | undefined | null): string {
  if (!model) return "";
  const s = String(model).trim();
  return s || "";
}

/** 判断是否为无意义模型名 */
function isPlaceholderModel(model: string): boolean {
  return !model || model === "unknown" || model === "siyuan-ai" || model === "default";
}

/** 判断模型名是否看起来像是会话/会话 ID 而非模型名（思源有时会返回会话 ID） */
function isProbablyModelId(value: string): boolean {
  if (!value) return true;
  const s = value.trim();
  // 思源会话 ID 通常形如 20260704224952-9ml5cfo（14位日期+短码）
  if (/^\d{14,}-[a-z0-9]+$/i.test(s)) return true;
  // 纯 UUID
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s)) return true;
  // 纯数字或过长（>40）且不含常见模型字符
  if (/^\d+$/.test(s)) return true;
  if (s.length > 40 && !/[._-]/.test(s)) return true;
  return false;
}

/** 提取有效的模型名：过滤无意义值和会话 ID */
function pickValidModelName(...candidates: (string | null | undefined)[]): string {
  for (const c of candidates) {
    const m = normalizeModel(c);
    if (!m) continue;
    if (isPlaceholderModel(m)) continue;
    if (isProbablyModelId(m)) continue;
    return m;
  }
  return "";
}
/** 判断是否为思源内置 AI 对话端点（非管理/配置/索引等端点） */
function isSiYuanAiUrl(url: string): boolean {
  // 只匹配实际产生 AI 对话的端点，排除模型列表、索引状态、配置等管理端点
  return (
    /\/api\/ai\/agent\/chat\b/i.test(url) ||
    /\/api\/ai\/chatGPT\b/i.test(url) ||
    /\/api\/ai\/chatGPTWithAction\b/i.test(url)
  );
}

/** 判断响应是否为思源内核格式（非 AI 对话响应） */
function isSiYuanKernelResponse(data: any): boolean {
  return (
    typeof data === "object" &&
    data !== null &&
    "code" in data &&
    "msg" in data &&
    "data" in data &&
    !("choices" in data) &&
    !("usage" in data)
  );
}

/** 生成思源 AI 兜底识别的 Key（仅用于记录，不写入持久化） */
function createSiYuanFallbackKey(): AiCallInfo {
  return {
    apiKeyId: "siyuan-ai-default",
    apiKeyName: "思源智能体",
    source: "siyuan-ai",
    provider: "SiYuan AI",
    model: "unknown",
  };
}

export class Interceptor {
  private originalFetch: typeof window.fetch;
  private store: Store;
  private keyManager: KeyManager;
  private tokenCounter: TokenCounter;
  private installed = false;
  private onThresholdAlert: (apiKeyId: string, message: string) => void = () => {};
  private siyuanConfigCache: { config: any; ts: number } | null = null;

  constructor(store: Store, keyManager: KeyManager, tokenCounter: TokenCounter) {
    this.originalFetch = window.fetch.bind(window);
    this.store = store;
    this.keyManager = keyManager;
    this.tokenCounter = tokenCounter;
  }

  /** 设置阈值提醒回调 */
  setThresholdCallback(cb: (apiKeyId: string, message: string) => void): void {
    this.onThresholdAlert = cb;
  }

  /** 判断某个 Key 是否关联了指定模型 */
  private keyMatchesModel(key: ApiKeyConfig | undefined, model: string): boolean {
    if (!key || !model) return false;
    const lowerModel = String(model).toLowerCase().trim();
    const models = (key.models || []).map((m) => String(m).toLowerCase().trim());
    return models.includes(lowerModel);
  }

  /** 安装拦截器 */
  install(): void {
    if (this.installed) {
      console.warn("[TokenStats] Interceptor already installed.");
      return;
    }
    this.installed = true;

    const self = this;
    window.fetch = async function (
      input: RequestInfo | URL,
      init?: RequestInit
    ): Promise<Response> {
      const url = extractUrl(input);
      const settings = self.store.getSettings();

      // 尝试读取请求体文本（用于 model / messages 提取与限额估算）
      const bodyText = await self.extractBodyText(input, init);
      const parsedBody = self.tryParseJson(bodyText);

      // 识别是否是 AI API 调用
      const aiCall = await self.identifyAiCall(url, init, settings, parsedBody);

      if (!aiCall) {
        return self.originalFetch(input as RequestInfo, init);
      }

      self.logDebug(`Intercepted AI call: source=${aiCall.source}, model=${aiCall.model}, key=${aiCall.apiKeyName}`);
      self.logDebug("Request body", { bodyText: bodyText?.slice(0, 500), parsedBody });
      const startTime = Date.now();

      // ── 全局限额拦截 ──
      if (settings.blockOnQuotaExceeded && settings.globalQuotaLimit > 0) {
        const estimatedInput = self.tokenCounter.estimateFromMessages(
          self.extractMessages(parsedBody)
        );
        if (self.keyManager.isGlobalQuotaExceeded(settings)) {
          const msg = `[TokenStats] 已阻止请求：全局 Token 限额已用尽`;
          console.warn(msg);
          self.onThresholdAlert("global", msg);
          return self.createBlockedResponse(msg, aiCall);
        }
        if (self.keyManager.wouldExceedGlobalQuota(settings, estimatedInput)) {
          const remaining = self.keyManager.getGlobalRemainingQuota(settings);
          const msg = `[TokenStats] 已阻止请求：全局剩余配额 ${remaining.toLocaleString()} tokens，预估输入 ${estimatedInput.toLocaleString()} tokens 将超限`;
          console.warn(msg);
          self.onThresholdAlert("global", msg);
          return self.createBlockedResponse(msg, aiCall);
        }
      }

      // ── 单 Key 限额拦截 ──
      if (settings.blockOnQuotaExceeded) {
        // 检查 1：已超限 → 直接拦截
        if (self.keyManager.isQuotaExceeded(aiCall.apiKeyId)) {
          const key = self.store.getApiKey(aiCall.apiKeyId);
          const msg = `[TokenStats] 已阻止请求：${key?.name || aiCall.apiKeyName} 的 Token 限额已用尽`;
          console.warn(msg);
          self.onThresholdAlert(aiCall.apiKeyId, msg);
          return self.createBlockedResponse(msg, aiCall);
        }

        // 检查 2：预估算输入 token，如果当前用量 + 预估输入会超限 → 拦截
        const estimatedInput = self.tokenCounter.estimateFromMessages(
          self.extractMessages(parsedBody)
        );
        if (self.keyManager.wouldExceedQuota(aiCall.apiKeyId, estimatedInput)) {
          const key = self.store.getApiKey(aiCall.apiKeyId);
          const remaining = self.keyManager.getRemainingQuota(aiCall.apiKeyId);
          const msg = `[TokenStats] 已阻止请求：${key?.name || aiCall.apiKeyName} 剩余配额 ${remaining.toLocaleString()} tokens，预估输入 ${estimatedInput.toLocaleString()} tokens 将超限`;
          console.warn(msg);
          self.onThresholdAlert(aiCall.apiKeyId, msg);
          return self.createBlockedResponse(msg, aiCall);
        }
      }

      // 发起原始请求
      let response: Response;
      let success = false;
      try {
        response = await self.originalFetch(input as RequestInfo, init);
        success = response.ok;
      } catch (err) {
        // 记录失败请求
        self.recordCall(aiCall, 0, 0, startTime, false, aiCall.model);
        throw err;
      }

      // 异步分析响应（不阻塞原始请求的返回）
      const cloned = response.clone();
      self
        .analyzeResponse(cloned, aiCall, startTime, parsedBody, success)
        .catch((e) => console.warn("[TokenStats] Response analysis failed:", e));

      return response;
    } as typeof window.fetch;

    console.log("[TokenStats] Fetch interceptor installed.");
  }

  /** 创建受控的错误 Response（不抛异常，让调用方正常处理 HTTP 错误） */
  private createBlockedResponse(message: string, aiCall: AiCallInfo): Response {
    const errorBody = JSON.stringify({
      error: {
        type: "quota_exceeded",
        code: "token_stats_blocked",
        message: message,
        apiKeyId: aiCall.apiKeyId,
        apiKeyName: aiCall.apiKeyName,
      },
    });
    return new Response(errorBody, {
      status: 429,
      statusText: "Too Many Requests",
      headers: {
        "Content-Type": "application/json",
        "X-TokenStats-Blocked": "true",
      },
    });
  }

  /** 卸载拦截器 */
  uninstall(): void {
    if (!this.installed) return;
    window.fetch = this.originalFetch;
    this.installed = false;
    console.log("[TokenStats] Fetch interceptor uninstalled.");
  }

  /** 尝试异步读取请求体文本，兼容多种 body 类型 */
  private async extractBodyText(
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<string | null> {
    // 1. 优先从 init.body 读取字符串
    if (init?.body && typeof init.body === "string") {
      return init.body;
    }
    // 2. URLSearchParams / FormData / Blob / File 等
    if (init?.body instanceof URLSearchParams) {
      return init.body.toString();
    }
    if (init?.body instanceof FormData) {
      try {
        const obj: Record<string, any> = {};
        init.body.forEach((value, key) => {
          obj[key] = typeof value === "string" ? value : value.name;
        });
        return JSON.stringify(obj);
      } catch {
        return null;
      }
    }
    if (init?.body instanceof Blob) {
      try {
        return await init.body.text();
      } catch {
        return null;
      }
    }
    // 3. ArrayBuffer / TypedArray
    if (init?.body && (init.body instanceof ArrayBuffer || ArrayBuffer.isView(init.body))) {
      try {
        return new TextDecoder().decode(init.body as ArrayBufferView);
      } catch {
        return null;
      }
    }
    // 4. 如果 input 是 Request 对象，克隆后读取文本
    if (input instanceof Request) {
      try {
        const clone = input.clone();
        return await clone.text();
      } catch {
        return null;
      }
    }
    return null;
  }

  /** 安全解析 JSON */
  private tryParseJson(text: string | null): any {
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  }

  private isDebugEnabled(): boolean {
    return this.store.getSettings().debugLogging ?? false;
  }

  private logDebug(...args: any[]): void {
    if (this.isDebugEnabled()) {
      console.log("[TokenStats]", ...args);
    }
  }

  /** 识别 AI API 调用 */
  private async identifyAiCall(
    url: string,
    init: RequestInit | undefined,
    settings: { matchByUrl: boolean; interceptExternalAPIs: boolean },
    parsedBody: any
  ): Promise<AiCallInfo | null> {
    const lowerUrl = url.toLowerCase();
    const isSiYuan = isSiYuanAiUrl(url);

    // 0. 思源内置 AI 端点
    if (isSiYuan) {
      const siyuanConfig = await this.getSiYuanAiConfig();
      // 思源 AI 请求体中的 model 字段是块 ID（如 20260705184400-rxdfohi），不是模型名
      // 需要通过块 ID 在 providers 配置中查找真实模型名和对应 provider
      const rawModelId = parsedBody?.model || null;
      const m = this.extractModel(parsedBody) || rawModelId || this.getSiYuanSelectedModelId(siyuanConfig);
      if (m) {
        const p = this.findProviderByModel(siyuanConfig, m);
        const providerBaseUrl = p ? p.baseURL : null;
        // 1) 最优先：按 SiYuan provider 里配置的 apiKey 匹配插件中的 Key（与 copilot 按请求头 Key 匹配等价）
        if (p && p.apiKey) {
          const h0 = this.keyManager.findByKey(p.apiKey);
          if (h0 && h0.enabled) {
            return {
              apiKeyId: h0.id,
              apiKeyName: h0.name,
              source: h0.baseUrl || providerBaseUrl || "siyuan-ai",
              provider: h0.provider,
              model: this.resolveSiYuanModelForCall(parsedBody, siyuanConfig),
            };
          }
        }
        // 2) 按用户配置的 Key 关联模型匹配
        const h1 = this.keyManager.findByModel(m);
        if (h1 && h1.enabled) {
          return {
            apiKeyId: h1.id,
            apiKeyName: h1.name,
            source: h1.baseUrl || providerBaseUrl || "siyuan-ai",
            provider: h1.provider,
            model: this.resolveSiYuanModelForCall(parsedBody, siyuanConfig),
          };
        }
        // 3) 回退：按 provider baseURL + 模型匹配
        if (providerBaseUrl) {
          const h2 = this.keyManager.findByUrlAndModel(providerBaseUrl, m);
          if (h2 && h2.enabled) {
            return {
              apiKeyId: h2.id,
              apiKeyName: h2.name,
              source: h2.baseUrl || providerBaseUrl || "siyuan-ai",
              provider: h2.provider,
              model: this.resolveSiYuanModelForCall(parsedBody, siyuanConfig),
            };
          }
        }
      }
      // 3.5) 按启用的 provider 信息匹配用户配置的 Key
      // 当默认模型未配置（m 为空）或前面未匹配到时，遍历所有启用的 provider，
      // 按 provider.apiKey / provider.baseURL 匹配用户配置的 Key，解决统计归属问题
      if (siyuanConfig?.providers) {
        for (const p of siyuanConfig.providers) {
          if (!p?.enabled) continue;

          // 按 provider apiKey 匹配
          if (p.apiKey) {
            const h = this.keyManager.findByKey(p.apiKey);
            if (h && h.enabled) {
              return {
                apiKeyId: h.id,
                apiKeyName: h.name,
                source: h.baseUrl || p.baseURL || "siyuan-ai",
                provider: h.provider,
                model: this.resolveModelByBlockId(rawModelId, siyuanConfig) || this.resolveModelNameFromProvider(p) || this.resolveSiYuanModelForCall(parsedBody, siyuanConfig),
              };
            }
          }

          // 按 provider baseURL 匹配
          if (p.baseURL) {
            const h = this.keyManager.findByUrl(p.baseURL);
            if (h && h.enabled) {
              return {
                apiKeyId: h.id,
                apiKeyName: h.name,
                source: h.baseUrl || p.baseURL || "siyuan-ai",
                provider: h.provider,
                model: this.resolveModelByBlockId(rawModelId, siyuanConfig) || this.resolveModelNameFromProvider(p) || this.resolveSiYuanModelForCall(parsedBody, siyuanConfig),
              };
            }
          }

          // 按 provider 的模型列表匹配
          if (Array.isArray(p.models)) {
            for (const pm of p.models) {
              const modelName = pm?.id || pm?.name || pm?.displayName;
              if (!modelName) continue;
              const h = this.keyManager.findByModel(modelName);
              if (h && h.enabled) {
                return {
                  apiKeyId: h.id,
                  apiKeyName: h.name,
                  source: h.baseUrl || p.baseURL || "siyuan-ai",
                  provider: h.provider,
                  model: modelName,
                };
              }
            }
          }
        }
      }

      // 4) 兜底：URL 匹配
      const urlMatch = this.keyManager.findByUrl(url);
      if (urlMatch && urlMatch.enabled) {
        return {
          apiKeyId: urlMatch.id,
          apiKeyName: urlMatch.name,
          source: urlMatch.baseUrl || "siyuan-ai",
          provider: urlMatch.provider,
          model: this.resolveSiYuanModelForCall(parsedBody, siyuanConfig),
        };
      }
      // 5) 默认兜底
      return {
        ...createSiYuanFallbackKey(),
        model: this.resolveSiYuanModelForCall(parsedBody, siyuanConfig),
      };
    }

    // 1. 按 API Base URL 匹配（优先级最高，针对第三方自定义 URL）
    if (settings.matchByUrl) {
      const urlMatch = this.keyManager.findByUrl(url);
      const modelFromReq = this.extractModel(parsedBody);
      // 若按 URL 命中的 Key 未包含该模型，则优先按模型重新匹配（支持同一 URL 下多 Key）
      let matched = urlMatch;
      if (modelFromReq && urlMatch && !this.keyMatchesModel(urlMatch, modelFromReq)) {
        const modelMatch = this.keyManager.findByModel(modelFromReq);
        if (modelMatch && modelMatch.enabled) matched = modelMatch;
      }
      if (matched && matched.enabled) {
        return {
          apiKeyId: matched.id,
          apiKeyName: matched.name,
          source: matched.baseUrl || "url-match",
          provider: matched.provider,
          model: modelFromReq || "unknown",
        };
      }
    }

    if (!settings.interceptExternalAPIs) return null;

    const modelFromReq = this.extractModel(parsedBody);

    // 2. OpenAI 兼容 API：优先按模型匹配，再按 Key，最后按 URL
    if (
      lowerUrl.includes("/v1/chat/completions") ||
      lowerUrl.includes("/v1/completions")
    ) {
      const authHeader = getHeader(init?.headers, "Authorization") || "";
      const apiKey = authHeader.replace(/^bearer\s+/i, "").trim();
      let matched = modelFromReq ? this.keyManager.findByModel(modelFromReq) : undefined;
      if (!matched || !matched.enabled) matched = apiKey ? this.keyManager.findByKey(apiKey) : undefined;
      if (!matched || !matched.enabled) matched = this.keyManager.findByUrl(url);
      return {
        apiKeyId: matched?.id || "unknown",
        apiKeyName: matched?.name || this.keyManager.maskKey(apiKey) || "Unknown",
        source: "external-openai",
        provider: matched?.provider || "OpenAI",
        model: modelFromReq || "unknown",
      };
    }

    // 3. Anthropic API：优先按模型匹配，再按 Key，最后按 URL
    if (lowerUrl.includes("/v1/messages")) {
      const apiKey = getHeader(init?.headers, "x-api-key") || "";
      let matched = modelFromReq ? this.keyManager.findByModel(modelFromReq) : undefined;
      if (!matched || !matched.enabled) matched = apiKey ? this.keyManager.findByKey(apiKey) : undefined;
      if (!matched || !matched.enabled) matched = this.keyManager.findByUrl(url);
      return {
        apiKeyId: matched?.id || "unknown",
        apiKeyName: matched?.name || this.keyManager.maskKey(apiKey) || "Unknown",
        source: "external-anthropic",
        provider: matched?.provider || "Anthropic",
        model: modelFromReq || "unknown",
      };
    }

    // 4. 其他自定义 URL：优先按模型，再按 URL
    let customMatch = modelFromReq ? this.keyManager.findByModel(modelFromReq) : undefined;
    if (!customMatch || !customMatch.enabled) customMatch = this.keyManager.findByUrl(url);
    if (customMatch && customMatch.enabled) {
      return {
        apiKeyId: customMatch.id,
        apiKeyName: customMatch.name,
        source: customMatch.baseUrl || "custom-url",
        provider: customMatch.provider,
        model: modelFromReq || "unknown",
      };
    }

    return null;
  }

  /** 从思源配置中获取当前选中的模型 ID */
  private getSiYuanSelectedModelId(siyuanConfig: any): string | null {
    if (!siyuanConfig) return null;
    const agent = siyuanConfig.agent || {};
    const editing = siyuanConfig.editing || {};
    return agent.modelId || editing.modelId || null;
  }

  /** 从请求体中提取 model 字段（过滤掉会话 ID 等无效值） */
  private extractModel(parsedBody: any): string | null {
    return pickValidModelName(parsedBody?.model) || null;
  }

  /** 通过思源块 ID 在 providers 配置中查找真实模型名 */
  private resolveModelByBlockId(blockId: string | null, siyuanConfig: any): string | null {
    if (!siyuanConfig || !blockId) return null;
    const providers: any[] = siyuanConfig.providers || [];
    for (const p of providers) {
      const model = (p.models || []).find((m: any) => m?.id === blockId);
      if (model) {
        return model.name || model.displayName || null;
      }
    }
    return null;
  }

  /** 获取思源 AI 模型名：块 ID 优先 → 请求体 model → 全局配置兜底 → unknown */
  private resolveSiYuanModelForCall(parsedBody: any, siyuanConfig: any): string {
    // 思源 AI 请求体中的 model 字段是块 ID（如 20260705184400-rxdfohi），
    // 需要先通过块 ID 在 providers 配置中查找真实模型名
    const rawModelId = parsedBody?.model;
    if (rawModelId) {
      const modelName = this.resolveModelByBlockId(rawModelId, siyuanConfig);
      if (modelName) return modelName;
    }
    return (
      pickValidModelName(this.extractModel(parsedBody)) ||
      this.resolveSiYuanModelNameFromConfig(siyuanConfig) ||
      "unknown"
    );
  }

  /** 从请求体中提取 messages 数组（兼容多种格式） */
  private extractMessages(parsedBody: any): any[] {
    if (!parsedBody) return [];
    if (Array.isArray(parsedBody.messages)) return parsedBody.messages;
    if (typeof parsedBody.messages === "string") return [parsedBody.messages];
    if (typeof parsedBody.messages === "object" && parsedBody.messages !== null) {
      return [parsedBody.messages];
    }

    // 思源 AI 可能的非标准字段
    if (typeof parsedBody.prompt === "string") return [parsedBody.prompt];
    if (Array.isArray(parsedBody.contents)) return parsedBody.contents;
    if (typeof parsedBody.content === "string") return [parsedBody.content];
    if (typeof parsedBody.text === "string") return [parsedBody.text];
    // 思源智能体 /api/ai/agent/chat 请求体：message 字段 + references 上下文
    // references 包含引用的文档块内容，对输入 token 估算影响很大
    if (parsedBody.message !== undefined || parsedBody.references !== undefined) {
      const msgs: any[] = [];
      // references 上下文（系统侧输入，通常占大部分 token）
      if (Array.isArray(parsedBody.references)) {
        for (const ref of parsedBody.references) {
          if (typeof ref === "string") {
            msgs.push({ role: "system", content: ref });
          } else if (ref?.content) {
            msgs.push({ role: "system", content: typeof ref.content === "string" ? ref.content : JSON.stringify(ref.content) });
          } else if (ref?.text) {
            msgs.push({ role: "system", content: ref.text });
          }
        }
      }
      // 用户消息
      if (typeof parsedBody.message === "string") {
        msgs.push({ role: "user", content: parsedBody.message });
      } else if (typeof parsedBody.message === "object" && parsedBody.message !== null) {
        msgs.push({ role: "user", content: JSON.stringify(parsedBody.message) });
      }
      if (msgs.length > 0) return msgs;
    }
    // 思源 /api/ai/chatGPT 请求体：msg 字段
    if (typeof parsedBody.msg === "string") return [parsedBody.msg];
    if (typeof parsedBody.msg === "object" && parsedBody.msg !== null) {
      return [parsedBody.msg];
    }
    // context + query 要在 query 单独判断之前，否则 context 信息会丢失
    if (parsedBody.context && parsedBody.query) {
      return [
        { role: "system", content: parsedBody.context },
        { role: "user", content: parsedBody.query },
      ];
    }
    if (typeof parsedBody.query === "string") return [parsedBody.query];
    if (parsedBody.input) {
      if (Array.isArray(parsedBody.input)) return parsedBody.input;
      if (Array.isArray(parsedBody.input.messages)) return parsedBody.input.messages;
      if (typeof parsedBody.input.messages === "string") return [parsedBody.input.messages];
      if (typeof parsedBody.input.messages === "object" && parsedBody.input.messages !== null) {
        return [parsedBody.input.messages];
      }
      if (typeof parsedBody.input.message === "string") return [parsedBody.input.message];
      if (typeof parsedBody.input.message === "object" && parsedBody.input.message !== null) {
        return [parsedBody.input.message];
      }
      if (typeof parsedBody.input.text === "string") return [parsedBody.input.text];
      if (typeof parsedBody.input === "string") return [parsedBody.input];
    }
    if (parsedBody.data) {
      if (Array.isArray(parsedBody.data.messages)) return parsedBody.data.messages;
      if (typeof parsedBody.data.messages === "string") return [parsedBody.data.messages];
      if (typeof parsedBody.data.messages === "object" && parsedBody.data.messages !== null) {
        return [parsedBody.data.messages];
      }
      if (typeof parsedBody.data.message === "string") return [parsedBody.data.message];
      if (typeof parsedBody.data.message === "object" && parsedBody.data.message !== null) {
        return [parsedBody.data.message];
      }
      if (typeof parsedBody.data.prompt === "string") return [parsedBody.data.prompt];
      if (Array.isArray(parsedBody.data.contents)) return parsedBody.data.contents;
      if (typeof parsedBody.data.content === "string") return [parsedBody.data.content];
      if (typeof parsedBody.data.text === "string") return [parsedBody.data.text];
    }

    return [];
  }

  /** 异步分析响应，提取或估算 token */
  private async analyzeResponse(
    response: Response,
    aiCall: AiCallInfo,
    startTime: number,
    parsedBody: any,
    success: boolean = true
  ): Promise<void> {
    let inputTokens = 0;
    let outputTokens = 0;
    let model = aiCall.model;

    const contentType = (response.headers.get("content-type") || "").toLowerCase();
    const settings = this.store.getSettings();

    // 如果 URL 是思源 AI 端点且当前模型未知，才尝试读取思源内置模型名称兜底
    // 注意：响应数据中返回的模型名优先级更高，已在 JSON/SSE 解析阶段处理
    if (!model || isPlaceholderModel(model)) {
      const resolvedModel = await this.resolveSiYuanModelNameIfNeeded(aiCall.source);
      if (resolvedModel) model = resolvedModel;
    }

    const estimatedInput = this.tokenCounter.estimateFromMessages(this.extractMessages(parsedBody));
    this.logDebug("analyzeResponse", {
      url: aiCall.source,
      contentType,
      ok: response.ok,
      status: response.status,
      estimatedInput,
      bodyPreview: JSON.stringify(parsedBody).slice(0, 200),
    });

    if (!response.body) {
      this.logDebug("analyzeResponse: response body is null, using input estimate only");
      inputTokens = estimatedInput;
      outputTokens = 0;
      this.recordCall(aiCall, inputTokens, outputTokens, startTime, success, model);
      return;
    }

    try {
      if (contentType.includes("text/event-stream")) {
        // 流式响应 (SSE) — 支持中途超限中断
        const result = await this.parseSSEStream(response, aiCall, settings, estimatedInput);
        inputTokens = result.inputTokens;
        outputTokens = result.outputTokens;
        if (result.model) model = result.model;
        if (result.aborted) {
          success = false;
        }
      } else if (contentType.includes("application/json") || contentType.includes("text/json")) {
        // JSON 响应：先读取文本，再解析，失败时仍可估算
        const text = await response.text();
        this.logDebug("JSON response raw text preview:", text.slice(0, 300));
        const data = this.tryParseJson(text);

        // 过滤思源内核非 AI 响应（如模型列表、索引状态、配置查询等）
        // 但保留 /api/ai/chatGPT 等端点的 AI 回复（data.data 为字符串时是 AI 文本）
        if (isSiYuanKernelResponse(data) && typeof data.data !== "string") {
          this.logDebug("Skipping SiYuan kernel non-AI response", { code: data.code, dataKeys: Object.keys(data.data || {}) });
          return;
        }

        const usage = data ? this.extractUsage(data) : null;
        if (usage) {
          inputTokens = usage.inputTokens;
          outputTokens = usage.outputTokens;
        }
        if (data?.model) {
          model = pickValidModelName(data.model, model) || model;
        }

        // 如果没有 usage，尝试估算
        if (!usage) {
          inputTokens = estimatedInput;
          outputTokens = this.tokenCounter.estimateFromText(
            data ? this.extractOutputText(data) : text
          );
        }
      } else if (contentType.includes("application/x-ndjson") || contentType.includes("application/ndjson")) {
        // NDJSON 流式响应
        const result = await this.parseNDJSONStream(response, aiCall, settings, estimatedInput);
        inputTokens = result.inputTokens;
        outputTokens = result.outputTokens;
        if (result.model) model = result.model;
        if (result.aborted) success = false;
      } else if (contentType.includes("text/plain") || contentType.includes("text/html") || contentType.includes("application/xml") || contentType.includes("text/xml")) {
        // 文本类响应，直接估算
        const text = await response.text();
        inputTokens = estimatedInput;
        outputTokens = this.tokenCounter.estimateFromText(text);
      } else {
        // 其他类型，尝试先作为 JSON 解析，失败再作为文本处理
        const text = await response.text();
        this.logDebug("Unknown content type, raw response preview:", text.slice(0, 300));
        inputTokens = estimatedInput;
        const asJson = this.tryParseJson(text);
        if (asJson) {
          const usage = this.extractUsage(asJson);
          if (usage) {
            inputTokens = usage.inputTokens;
            outputTokens = usage.outputTokens;
          } else {
            outputTokens = this.tokenCounter.estimateFromText(this.extractOutputText(asJson));
          }
        } else {
          outputTokens = this.tokenCounter.estimateFromText(text);
        }
      }
    } catch (e) {
      // 分析失败时仍记录请求，并用请求体做输入估算，尽量用原始文本估算输出
      console.warn("[TokenStats] Token extraction failed, using estimates:", e);
      inputTokens = estimatedInput;
      try {
        const text = await response.text();
        outputTokens = this.tokenCounter.estimateFromText(text);
      } catch {
        // body 可能已被流式读取器消费，无法再次读取
        outputTokens = 0;
      }
    }

    // 兜底：只要请求成功且输入 token 为 0，复用已估算的 estimatedInput
    if (success && inputTokens === 0 && estimatedInput > 0) {
      inputTokens = estimatedInput;
    }

    this.logDebug("analyzeResponse result:", { inputTokens, outputTokens, model, success });

    // 记录本次调用（无论 token 是否为 0，都需记录以反映真实请求量）
    const totalTokens = inputTokens + outputTokens;
    this.recordCall(aiCall, inputTokens, outputTokens, startTime, success, model);

    // 检查阈值（全局 + 单 Key）— 仅在有实际 token 消耗时检查，避免 0-token 请求触发误报
    if (totalTokens > 0 && settings.showNotifications) {
      this.keyManager.checkThreshold(aiCall.apiKeyId, (msg) => {
        this.onThresholdAlert(aiCall.apiKeyId, msg);
      });
      this.keyManager.checkGlobalThreshold(settings, (msg) => {
        this.onThresholdAlert("global", msg);
      });
    }
  }

  /** 解析 SSE 流式响应，支持中途超限中断 */
  private async parseSSEStream(
    response: Response,
    aiCall: AiCallInfo,
    settings: PluginSettings,
    estimatedInput: number = 0
  ): Promise<{
    inputTokens: number;
    outputTokens: number;
    model?: string;
    aborted: boolean;
  }> {
    const reader = response.body?.getReader();
    if (!reader) return { inputTokens: 0, outputTokens: 0, aborted: false };

    const decoder = new TextDecoder();
    let buffer = "";
    // 使用容器对象避免 TypeScript 闭包类型 narrowing 问题
    const state = {
      fullContent: "",
      usage: null as { inputTokens: number; outputTokens: number } | null,
      model: undefined as string | undefined,
    };
    let estimatedOutputTokens = 0;
    let aborted = false;

    /** 处理单个 SSE 事件块，返回更新后的状态 */
    const processEvent = (eventText: string): void => {
      const lines = eventText.split("\n");
      const dataLines: string[] = [];
      let eventType = "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        if (trimmed.startsWith("data:")) {
          dataLines.push(trimmed.slice(5).trimStart());
        } else if (trimmed.startsWith("event:")) {
          eventType = trimmed.slice(6).trim();
        }
        // id: 忽略
      }
      if (dataLines.length === 0) return;
      const dataStr = dataLines.join("\n");
      this.logDebug("SSE raw event", { eventType, data: dataStr.slice(0, 500) });
      if (dataStr === "[DONE]") return;

      try {
        const chunk = JSON.parse(dataStr);
        this.logDebug("SSE parsed chunk", { eventType, chunk });
        if (typeof chunk !== "object" || chunk === null) return;
        const collected = this.collectChunkInfo(chunk, state.usage, state.model, state.fullContent, eventType);
        const prevLen = state.fullContent.length;
        state.usage = collected.usage;
        state.model = collected.model;
        state.fullContent = collected.fullContent;
        this.logDebug("SSE collected after chunk", {
          eventType,
          contentAdded: state.fullContent.length - prevLen,
          fullContentLength: state.fullContent.length,
          usage: state.usage,
        });
      } catch (err) {
        this.logDebug("SSE chunk JSON parse failed", { eventType, data: dataStr.slice(0, 300), error: String(err) });
      }
    };

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        this.logDebug("SSE buffer received", { bufferLength: buffer.length, decodedLength: value?.length ?? 0 });
        const { events, remainder } = this.splitSSEEvents(buffer);
        buffer = remainder;
        this.logDebug("SSE events split", { eventCount: events.length, remainderLength: remainder.length });

        for (const event of events) {
          processEvent(event);
        }

        // ── 流式中途超限检测 ──
        if (settings.abortStreamOnExceeded && settings.blockOnQuotaExceeded) {
          estimatedOutputTokens = state.usage
            ? state.usage.outputTokens
            : this.tokenCounter.estimateFromText(state.fullContent);

          if (this.keyManager.wouldExceedQuota(aiCall.apiKeyId, estimatedOutputTokens)) {
            aborted = true;
            const key = this.store.getApiKey(aiCall.apiKeyId);
            const msg = `[TokenStats] 流式响应已中断：${key?.name || aiCall.apiKeyName} 的 Token 限额在生成过程中被超出`;
            console.warn(msg);
            this.onThresholdAlert(aiCall.apiKeyId, msg);
            try {
              await reader.cancel();
            } catch {
              // 忽略 cancel 错误
            }
            break;
          }

          // 全局流式中断
          if (this.keyManager.wouldExceedGlobalQuota(settings, estimatedOutputTokens)) {
            aborted = true;
            const msg = `[TokenStats] 流式响应已中断：全局 Token 限额在生成过程中被超出`;
            console.warn(msg);
            this.onThresholdAlert("global", msg);
            try {
              await reader.cancel();
            } catch {
              // 忽略 cancel 错误
            }
            break;
          }
        }
      }

      // 如果余量看起来是一个完整事件但没有末尾换行，也尝试处理一次（某些服务端不发送最终 \n\n）
      if (buffer.trim().length > 0) {
        const { events } = this.splitSSEEvents(buffer + "\n\n");
        for (const event of events) {
          processEvent(event);
        }
      }
    } finally {
      reader.releaseLock();
    }

    this.logDebug("parseSSEStream finished", {
      contentLength: state.fullContent.length,
      hasUsage: !!state.usage,
      usage: state.usage,
      estimatedInput,
    });

    if (state.usage) {
      // 部分 API 中间状态报告 0 tokens，用估算值兜底
      const estimatedOutput = this.tokenCounter.estimateFromText(state.fullContent);
      return {
        inputTokens: state.usage.inputTokens || estimatedInput,
        outputTokens: state.usage.outputTokens || estimatedOutput,
        model: state.model,
        aborted,
      };
    }

    // 无 usage 字段时，用估算输入 + 累计输出内容估算
    const estimatedOutput = this.tokenCounter.estimateFromText(state.fullContent);
    return {
      inputTokens: estimatedInput,
      outputTokens: estimatedOutput,
      model: state.model,
      aborted,
    };
  }

  /** 将 SSE 缓冲区分成独立事件（兼容 \n\n 与 \r\n\r\n） */
  private splitSSEEvents(buffer: string): { events: string[]; remainder: string } {
    const events: string[] = [];
    // 统一将 \r\n\r\n 转成 \n\n 再分割
    const normalized = buffer.replace(/\r\n/g, "\n");
    const parts = normalized.split("\n\n");
    const remainder = parts.pop() || "";
    for (const part of parts) {
      if (part.trim()) events.push(part);
    }
    return { events, remainder };
  }

  /** 从单个 SSE/NDJSON 数据块中提取 usage / model / content，返回更新后的状态 */
  private collectChunkInfo(
    chunk: any,
    usage: { inputTokens: number; outputTokens: number } | null,
    model: string | undefined,
    fullContent: string,
    eventType: string = ""
  ): {
    usage: { inputTokens: number; outputTokens: number } | null;
    model: string | undefined;
    fullContent: string;
  } {
    const pickModel = (...candidates: (string | null | undefined)[]) => {
      const valid = pickValidModelName(...candidates);
      if (valid) return valid;
      // 如果没有更合理的候选，才接受当前模型名
      const current = normalizeModel(model);
      return current && !isProbablyModelId(current) ? current : "";
    };

    if (chunk.model) {
      model = pickModel(chunk.model, model);
    }

    // ── 思源智能体自定义 SSE 格式 ──
    // event:content → data:{"token":"..."}
    // event:reasoning → data:{"token":"..."}
    // event:thinking → data:{"reasoning":"..."}
    // event:usage → data:{"promptTokens":1234,"completionTokens":567,...}
    if (eventType === "content" || eventType === "reasoning") {
      if (chunk.token) {
        fullContent += chunk.token;
        this.logDebug("SiYuan agent content appended", { token: chunk.token });
      }
      return { usage, model, fullContent };
    }
    if (eventType === "thinking") {
      if (chunk.reasoning) {
        fullContent += chunk.reasoning;
        this.logDebug("SiYuan agent thinking appended", { reasoning: chunk.reasoning });
      }
      return { usage, model, fullContent };
    }
    if (eventType === "usage") {
      const promptTokens = chunk.promptTokens ?? chunk.prompt_tokens ?? 0;
      const completionTokens = chunk.completionTokens ?? chunk.completion_tokens ?? 0;
      this.logDebug("SiYuan agent usage event", { promptTokens, completionTokens, chunk });
      if (promptTokens > 0 || completionTokens > 0) {
        usage = { inputTokens: promptTokens, outputTokens: completionTokens };
      }
      return { usage, model, fullContent };
    }
    // event:done / event:error / event:retry / event:snapshot / event:tool_call / event:tool_result
    // 这些事件不包含内容或 token 信息，跳过
    if (eventType === "done" || eventType === "error" || eventType === "retry" ||
        eventType === "snapshot" || eventType === "tool_call" || eventType === "tool_result" ||
        eventType === "confirm" || eventType === "question" || eventType === "frontend_tool_call") {
      return { usage, model, fullContent };
    }

    // ── 标准 OpenAI / Anthropic 格式（无 event 类型或未知类型） ──
    // OpenAI 格式
    if (chunk.usage) {
      const u = chunk.usage;
      usage = {
        inputTokens: u.prompt_tokens ?? u.input_tokens ?? u.promptTokens ?? 0,
        outputTokens: u.completion_tokens ?? u.output_tokens ?? u.completionTokens ?? 0,
      };
    }

    const appendContent = (val: string | null | undefined) => {
      if (typeof val === "string") fullContent += val;
    };

    const choice = chunk.choices?.[0];
    if (choice?.delta?.content) appendContent(choice.delta.content);
    if (choice?.text) appendContent(choice.text);
    if (choice?.delta?.reasoning_content) appendContent(choice.delta.reasoning_content);
    if (choice?.message?.content) appendContent(choice.message.content);
    if (choice?.content) appendContent(choice.content);
    if (choice?.delta?.function_call?.arguments) appendContent(choice.delta.function_call.arguments);
    if (choice?.delta?.tool_calls) {
      for (const tc of choice.delta.tool_calls) {
        if (tc?.function?.arguments) appendContent(tc.function.arguments);
      }
    }

    // Anthropic 格式
    if (chunk.type === "content_block_delta" && chunk.delta?.text) {
      appendContent(chunk.delta.text);
    }
    if (chunk.type === "content_block_delta" && chunk.delta?.reasoning) {
      appendContent(chunk.delta.reasoning);
    }
    if (chunk.type === "content_block_start" && chunk.content_block?.text) {
      appendContent(chunk.content_block.text);
    }
    if (chunk.message?.usage) {
      const u = chunk.message.usage;
      usage = {
        inputTokens: u.input_tokens ?? 0,
        outputTokens: u.output_tokens ?? 0,
      };
    }
    if (chunk.content) {
      if (typeof chunk.content === "string") appendContent(chunk.content);
      else if (Array.isArray(chunk.content)) {
        for (const c of chunk.content) appendContent(typeof c === "string" ? c : c?.text);
      }
    }
    if (chunk.output) appendContent(chunk.output);
    if (chunk.text) appendContent(chunk.text);
    if (chunk.result) appendContent(chunk.result);
    if (chunk.message) {
      if (typeof chunk.message === "string") appendContent(chunk.message);
      else if (chunk.message.content) appendContent(chunk.message.content);
    }

    // 部分国产厂商 / 思源封装：data.data.choices[0].delta.content
    if (chunk.data?.choices?.[0]?.delta?.content) {
      appendContent(chunk.data.choices[0].delta.content);
    }
    if (chunk.data?.choices?.[0]?.text) {
      appendContent(chunk.data.choices[0].text);
    }
    if (chunk.data?.choices?.[0]?.message?.content) {
      appendContent(chunk.data.choices[0].message.content);
    }
    if (chunk.data?.choices?.[0]?.delta?.reasoning_content) {
      appendContent(chunk.data.choices[0].delta.reasoning_content);
    }
    if (chunk.data?.model) {
      model = pickModel(chunk.data.model, model);
    }
    if (chunk.data?.usage) {
      const u = chunk.data.usage;
      usage = {
        inputTokens: u.prompt_tokens ?? u.input_tokens ?? 0,
        outputTokens: u.completion_tokens ?? u.output_tokens ?? 0,
      };
    }
    if (chunk.data?.content) {
      if (typeof chunk.data.content === "string") appendContent(chunk.data.content);
      else if (Array.isArray(chunk.data.content)) {
        for (const c of chunk.data.content) appendContent(typeof c === "string" ? c : c?.text);
      }
    }
    if (chunk.data?.output) appendContent(chunk.data.output);
    if (chunk.data?.text) appendContent(chunk.data.text);
    if (chunk.data?.result) appendContent(chunk.data.result);

    return { usage, model, fullContent };
  }

  /** 解析 NDJSON 流式响应 */
  private async parseNDJSONStream(
    response: Response,
    aiCall: AiCallInfo,
    settings: PluginSettings,
    estimatedInput: number = 0
  ): Promise<{
    inputTokens: number;
    outputTokens: number;
    model?: string;
    aborted: boolean;
  }> {
    const reader = response.body?.getReader();
    if (!reader) return { inputTokens: 0, outputTokens: 0, aborted: false };

    const decoder = new TextDecoder();
    let buffer = "";
    let fullContent = "";
    let usage: { inputTokens: number; outputTokens: number } | null = null;
    let model: string | undefined;
    let aborted = false;

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          if (!line.trim()) continue;
          try {
            const chunk = JSON.parse(line);
            const collected = this.collectChunkInfo(chunk, usage, model, fullContent);
            usage = collected.usage;
            model = collected.model;
            fullContent = collected.fullContent;
          } catch {
            // ignore
          }
        }

        if (settings.abortStreamOnExceeded && settings.blockOnQuotaExceeded) {
          const estimatedOutput = usage
            ? usage.outputTokens
            : this.tokenCounter.estimateFromText(fullContent);
          if (this.keyManager.wouldExceedQuota(aiCall.apiKeyId, estimatedOutput)) {
            aborted = true;
            try {
              await reader.cancel();
            } catch {
              // 忽略 cancel 错误
            }
            break;
          }
          if (this.keyManager.wouldExceedGlobalQuota(settings, estimatedOutput)) {
            aborted = true;
            try {
              await reader.cancel();
            } catch {
              // 忽略 cancel 错误
            }
            break;
          }
        }
      }

      // 处理末尾未换行的剩余行
      if (buffer.trim()) {
        try {
          const chunk = JSON.parse(buffer.trim());
          const collected = this.collectChunkInfo(chunk, usage, model, fullContent);
          usage = collected.usage;
          model = collected.model;
          fullContent = collected.fullContent;
        } catch {
          // ignore
        }
      }
    } finally {
      reader.releaseLock();
    }

    this.logDebug("parseNDJSONStream finished", {
      contentLength: fullContent.length,
      hasUsage: !!usage,
      usage,
      estimatedInput,
    });

    if (usage) {
      // 部分 API 中间状态报告 0 tokens，用估算值兜底
      const estimatedOutput = this.tokenCounter.estimateFromText(fullContent);
      return {
        inputTokens: usage.inputTokens || estimatedInput,
        outputTokens: usage.outputTokens || estimatedOutput,
        model,
        aborted,
      };
    }
    return {
      inputTokens: estimatedInput,
      outputTokens: this.tokenCounter.estimateFromText(fullContent),
      model,
      aborted,
    };
  }

  /** 从 JSON 响应中提取 usage */
  private extractUsage(data: any): { inputTokens: number; outputTokens: number } | null {
    // 标准 OpenAI / Anthropic 格式：usage 子对象
    if (data?.usage) {
      const u = data.usage;
      const inputTokens =
        u.prompt_tokens ?? u.input_tokens ?? u.promptTokens ?? 0;
      const outputTokens =
        u.completion_tokens ?? u.output_tokens ?? u.completionTokens ?? 0;
      if (inputTokens === 0 && outputTokens === 0) return null;
      return { inputTokens, outputTokens };
    }
    // 思源智能体 usage 事件格式：顶层 promptTokens / completionTokens
    if (data?.promptTokens !== undefined || data?.completionTokens !== undefined) {
      const inputTokens = data.promptTokens ?? 0;
      const outputTokens = data.completionTokens ?? 0;
      if (inputTokens === 0 && outputTokens === 0) return null;
      return { inputTokens, outputTokens };
    }
    return null;
  }

  /** 从 JSON 响应中提取输出文本（用于估算） */
  private extractOutputText(data: any): string {
    if (!data) return "";
    const parts: string[] = [];

    const add = (val: any) => {
      if (typeof val === "string" && val) parts.push(val);
      else if (val && typeof val.text === "string" && val.text) parts.push(val.text);
    };

    const collectChoice = (choice: any) => {
      if (!choice) return;
      add(choice?.message?.content);
      add(choice?.message?.reasoning_content);
      add(choice?.delta?.content);
      add(choice?.delta?.reasoning_content);
      add(choice?.text);
      add(choice?.content);
      if (choice?.delta?.function_call?.arguments) add(choice.delta.function_call.arguments);
      if (choice?.delta?.tool_calls) {
        for (const tc of choice.delta.tool_calls) {
          if (tc?.function?.arguments) add(tc.function.arguments);
        }
      }
    };

    // OpenAI 格式
    if (data.choices) {
      for (const choice of data.choices) collectChoice(choice);
    }

    // Anthropic 格式
    if (data.content) {
      if (typeof data.content === "string") add(data.content);
      else if (Array.isArray(data.content)) {
        for (const c of data.content) add(c);
      }
    }
    if (data.output) add(data.output);
    if (data.text) add(data.text);
    if (data.result) add(data.result);
    if (data.message) {
      if (typeof data.message === "string") add(data.message);
      else {
        add(data.message.content);
        add(data.message.text);
      }
    }
    if (data.response) {
      if (typeof data.response === "string") add(data.response);
      else if (data.response.text) add(data.response.text);
      else if (data.response.content) add(data.response.content);
    }

    // SiYuan / 国产封装：data.data
    if (data.data) {
      if (typeof data.data === "string") add(data.data);
      else {
        add(data.data?.text);
        add(data.data?.output);
        add(data.data?.result);
        add(data.data?.msg);
        if (data.data?.choices) {
          for (const choice of data.data.choices) collectChoice(choice);
        }
        // content 可能是 string、对象或数组，统一处理避免重复
        if (data.data?.content) {
          if (typeof data.data.content === "string") add(data.data.content);
          else if (Array.isArray(data.data.content)) {
            for (const c of data.data.content) add(c);
          } else {
            add(data.data.content);
          }
        }
        if (data.data?.message) {
          add(data.data.message.content);
          add(data.data.message.text);
        }
      }
    }

    if (data.msg) add(data.msg);
    // 思源智能体 content 事件 JSON：{"token": "..."}
    if (data.token) add(data.token);
    // 思源智能体 thinking 事件 JSON：{"reasoning": "..."}
    if (data.reasoning) add(data.reasoning);

    return parts.join("");
  }

  /** 记录一次调用 */
  private recordCall(
    aiCall: AiCallInfo,
    inputTokens: number,
    outputTokens: number,
    startTime: number,
    success: boolean,
    model?: string
  ): void {
    const finalModel = this.resolveModelName(model || aiCall.model, aiCall);
    const record: TokenRecord = {
      id: genId(),
      apiKeyId: aiCall.apiKeyId,
      apiKeyName: aiCall.apiKeyName,
      source: aiCall.source,
      model: finalModel,
      inputTokens,
      outputTokens,
      totalTokens: inputTokens + outputTokens,
      timestamp: startTime,
      requestTime: Date.now() - startTime,
      success,
    };
    this.store.addRecord(record);
    this.logDebug(`Recorded: ${record.apiKeyName} | ${record.model} | in=${inputTokens} out=${outputTokens} total=${record.totalTokens} success=${success}`);
    if (success && inputTokens === 0 && outputTokens === 0) {
      console.warn("[TokenStats] 本次请求 token 计数为 0。若持续出现，请在设置中开启“启用调试日志”，并在浏览器控制台中查看请求/响应详情。");
    }
  }

  /** 解析最终模型名：过滤无意义 ID，优先使用响应中解析的模型，思源全局配置仅兜底 */
  private resolveModelName(model: string, aiCall: AiCallInfo): string {
    const candidates: (string | null | undefined)[] = [];

    // 1) 优先使用传入的 model（通常是响应中解析的真实模型名）
    candidates.push(model, aiCall.model);

    // 2) 上述都无效时，才尝试思源全局配置兜底
    if (this.isSiYuanAiSource(aiCall.source)) {
      candidates.push(this.resolveSiYuanModelNameFromConfig(this.siyuanConfigCache?.config));
    }

    const valid = pickValidModelName(...candidates);
    if (valid) return valid;

    const fallback = normalizeModel(model) || normalizeModel(aiCall.model);
    return fallback || aiCall.source || "unknown";
  }

  /** 如果调用的是思源 AI，尝试读取思源内置模型名称 */
  private async resolveSiYuanModelNameIfNeeded(
    source: string
  ): Promise<string | null> {
    if (this.isSiYuanAiSource(source)) {
      return this.getSiYuanModelName();
    }
    return null;
  }

  private isSiYuanAiSource(source: string): boolean {
    return source === "siyuan-ai" || source.includes("/api/ai/");
  }

  /** 获取思源内置 AI 配置（带 5 秒缓存） */
  private async getSiYuanAiConfig(): Promise<any | null> {
    if (this.siyuanConfigCache && Date.now() - this.siyuanConfigCache.ts < 5000) {
      return this.siyuanConfigCache.config;
    }
    try {
      const globalSiyuan = (window as any).siyuan;
      const fromGlobal = globalSiyuan?.config?.ai;
      if (fromGlobal) {
        this.siyuanConfigCache = { config: fromGlobal, ts: Date.now() };
        return fromGlobal;
      }

      const response = await this.originalFetch("/api/system/getConf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      if (!response.ok) return null;
      const data = await response.json();
      const ai = data?.data?.ai || data?.ai;
      if (ai) {
        this.siyuanConfigCache = { config: ai, ts: Date.now() };
        return ai;
      }
    } catch {
      // ignore
    }
    return null;
  }

  /** 在思源配置中按模型名/ID 查找对应的 provider */
  private findProviderByModel(siyuanConfig: any, model: string): any | null {
    if (!siyuanConfig || !model) return null;
    const lowerModel = String(model).toLowerCase().trim();
    if (!lowerModel) return null;
    const providers: any[] = siyuanConfig.providers || [];
    for (const p of providers) {
      if (!p || !p.enabled) continue;
      const found = (p.models || []).find((m: any) => {
        const id = String(m?.id || "").toLowerCase().trim();
        const name = String(m?.name || "").toLowerCase().trim();
        const displayName = String(m?.displayName || "").toLowerCase().trim();
        return id === lowerModel || name === lowerModel || displayName === lowerModel;
      });
      if (found) return p;
    }
    return null;
  }

  /** 从思源配置中解析当前使用的模型名 */
  private resolveSiYuanModelNameFromConfig(siyuanConfig: any): string | null {
    if (!siyuanConfig) return null;

    const agent = siyuanConfig.agent || {};
    const editing = siyuanConfig.editing || {};
    const modelId = agent.modelId || editing.modelId;

    // 优先从 agent/modelName 等字段取友好名称
    const friendlyName =
      agent.modelName ||
      agent.displayName ||
      agent.name ||
      editing.modelName ||
      editing.displayName ||
      editing.name;
    if (friendlyName && !isProbablyModelId(friendlyName)) {
      return friendlyName;
    }

    const providers: any[] = siyuanConfig.providers || [];

    // 如果能拿到 modelId，在 provider 的 models 里找对应名称
    if (modelId) {
      for (const p of providers) {
        if (!p?.enabled) continue;
        const model = (p.models || []).find((m: any) => m?.id === modelId);
        if (model) {
          return model.displayName || model.name || model.id || null;
        }
      }
    }

    // 未找到 modelId 对应名称，或 modelId 看起来是会话 ID，尝试用当前启用 provider 的默认模型名
    for (const p of providers) {
      if (!p?.enabled) continue;
      const defaultModel = p.models?.find((m: any) => m?.default) || p.models?.[0];
      if (defaultModel) {
        return defaultModel.displayName || defaultModel.name || defaultModel.id || null;
      }
      if (p.name && !isProbablyModelId(p.name)) return p.name;
    }

    // 最后兜底：返回 modelId，如果它看起来是模型名而非会话 ID
    if (modelId && !isProbablyModelId(modelId)) return modelId;

    return null;
  }

  /** 从单个 provider 中提取默认模型名 */
  private resolveModelNameFromProvider(provider: any): string | null {
    if (!provider?.models || !Array.isArray(provider.models)) return null;
    const defaultModel = provider.models.find((m: any) => m?.default) || provider.models[0];
    if (defaultModel) {
      return pickValidModelName(defaultModel.displayName, defaultModel.name, defaultModel.id) || null;
    }
    return null;
  }

  /** 获取思源内置 AI 模型名称（兼容旧调用） */
  private async getSiYuanModelName(): Promise<string | null> {
    return this.resolveSiYuanModelNameFromConfig(await this.getSiYuanAiConfig());
  }
}

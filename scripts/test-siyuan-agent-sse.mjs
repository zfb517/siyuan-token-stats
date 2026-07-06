/**
 * 测试思源智能体 /api/ai/agent/chat 的自定义 SSE 格式解析
 *
 * 思源智能体 SSE 格式：
 * event:content
 * data:{"token":"你好"}
 *
 * event:usage
 * data:{"promptTokens":1234,"completionTokens":567}
 *
 * event:done
 * data:{}
 */

// 在 import 拦截器之前设置 mock 环境
const mockSSEResponse = [
  'event:content\ndata:{"token":"你好，"}\n\n',
  'event:content\ndata:{"token":"我是思源笔记的AI助手"}\n\n',
  'event:reasoning\ndata:{"token":"分析用户问题中..."}\n\n',
  'event:thinking\ndata:{"reasoning":"用户在询问AI功能"}\n\n',
  'event:usage\ndata:{"promptTokens":150,"completionTokens":28,"lastPromptTokens":150,"cachedTokens":0}\n\n',
  'event:done\ndata:{}\n\n',
].join("");

function createMockResponse(sseText) {
  const encoder = new TextEncoder();
  const chunks = [encoder.encode(sseText)];
  let chunkIndex = 0;

  const stream = new ReadableStream({
    start(controller) {
      const pushChunk = () => {
        if (chunkIndex < chunks.length) {
          controller.enqueue(chunks[chunkIndex]);
          chunkIndex++;
          setTimeout(pushChunk, 10);
        } else {
          controller.close();
        }
      };
      setTimeout(pushChunk, 10);
    },
  });

  return new Response(stream, {
    status: 200,
    headers: {
      "content-type": "text/event-stream",
      "cache-control": "no-cache",
      "connection": "keep-alive",
    },
  });
}

// Mock fetch
const mockFetch = async (input, init) => {
  const url = typeof input === "string" ? input : input.url || "";
  console.log(`[MockFetch] ${url}`);

  if (url.includes("/api/ai/agent/chat")) {
    return createMockResponse(mockSSEResponse);
  }
  if (url.includes("/api/system/getConf")) {
    return new Response(JSON.stringify({
      code: 0,
      msg: "",
      data: {
        ai: {
          agent: { modelId: "glm-4.7" },
          providers: [{
            id: "bigmodel",
            name: "BigModel",
            enabled: true,
            baseURL: "https://open.bigmodel.cn/api/paas/v4",
            models: [{ id: "glm-4.7", name: "GLM-4.7", default: true }],
          }],
        },
      },
    }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response("{}", { status: 404 });
};

// 设置全局环境
globalThis.window = globalThis;
globalThis.window.fetch = mockFetch;
globalThis.window.siyuan = {
  config: {
    ai: {
      agent: { modelId: "glm-4.7" },
      providers: [{
        id: "bigmodel",
        name: "BigModel",
        enabled: true,
        baseURL: "https://open.bigmodel.cn/api/paas/v4",
        models: [{ id: "glm-4.7", name: "GLM-4.7", default: true }],
      }],
    },
  },
};

// Mock store, keyManager, tokenCounter
const mockStore = {
  getSettings: () => ({
    matchByUrl: true,
    interceptExternalAPIs: true,
    blockOnQuotaExceeded: false,
    abortStreamOnExceeded: false,
    showNotifications: false,
    debugLogging: true,
    globalQuotaLimit: 0,
  }),
  getApiKeys: () => [{
    id: "key-1",
    name: "BigModel Key",
    enabled: true,
    baseUrl: "https://open.bigmodel.cn/api/paas/v4",
    provider: "BigModel",
    apiKey: "test-key",
  }],
  getApiKey: (id) => ({
    id: "key-1",
    name: "BigModel Key",
    enabled: true,
  }),
  addRecord: (record) => {
    console.log("\n=== 记录到的 Token 统计 ===");
    console.log(`  Model: ${record.model}`);
    console.log(`  Input: ${record.inputTokens}`);
    console.log(`  Output: ${record.outputTokens}`);
    console.log(`  Total: ${record.totalTokens}`);
    console.log(`  Success: ${record.success}`);

    if (record.inputTokens > 0 || record.outputTokens > 0) {
      console.log("\n✅ 测试通过！Token 统计不为 0");
    } else {
      console.log("\n❌ 测试失败！Token 统计仍为 0");
    }
  },
};

const mockKeyManager = {
  findByUrl: (url) => {
    if (url.includes("bigmodel.cn")) {
      return mockStore.getApiKeys()[0];
    }
    return null;
  },
  findByKey: () => null,
  maskKey: (k) => k ? k.slice(0, 4) + "..." : "",
  isQuotaExceeded: () => false,
  wouldExceedQuota: () => false,
  isGlobalQuotaExceeded: () => false,
  wouldExceedGlobalQuota: () => false,
  checkThreshold: () => {},
  checkGlobalThreshold: () => {},
  getRemainingQuota: () => 999999,
  getGlobalRemainingQuota: () => 999999,
};

const mockTokenCounter = {
  estimateFromMessages: (messages) => {
    if (!messages || messages.length === 0) return 0;
    let total = 0;
    for (const msg of messages) {
      const text = typeof msg === "string" ? msg : (msg?.content || "");
      total += Math.ceil(text.length / 4);
    }
    return total;
  },
  estimateFromText: (text) => {
    if (!text) return 0;
    return Math.ceil(text.length / 4);
  },
};

// 现在动态编译并 import 拦截器
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 编译 TypeScript
console.log("正在编译 TypeScript...");
try {
  execSync('npx tsc --outDir dist-test --module commonjs --target es2020 --moduleResolution node --skipLibCheck src/interceptor.ts', {
    cwd: path.join(__dirname, ".."),
    stdio: "pipe",
  });
} catch (e) {
  console.error("编译失败:", e.stderr?.toString() || e.message);
  process.exit(1);
}

async function main() {
  const interceptorPath = path.join(__dirname, "..", "dist-test", "interceptor.js");
  const { Interceptor } = await import(pathToFileURL(interceptorPath).href);

  const interceptor = new Interceptor(mockStore, mockKeyManager, mockTokenCounter);
  interceptor.install();

  // 模拟思源智能体请求
  console.log("\n=== 模拟思源智能体 /api/ai/agent/chat 请求 ===\n");

  const requestBody = JSON.stringify({
    model: "",
    sessionId: "20260705113857-abc1234",
    message: "你好，请介绍一下你自己",
    language: "zh_CN",
    references: [],
  });

  await fetch("/api/ai/agent/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  });

  // 等待异步分析完成
  await new Promise((resolve) => setTimeout(resolve, 1000));

  interceptor.uninstall();
  console.log("\n=== 测试完成 ===");
}

main().catch(console.error);

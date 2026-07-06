/**
 * 调试脚本：模拟 BigModel / OpenAI 兼容 SSE 响应，验证拦截器 token 提取。
 *
 * 运行方式：
 *   npx tsc --outDir dist-test
 *   node scripts/test-interceptor.mjs
 */

// 在浏览器代码执行前提供全局 window 对象
if (typeof window === "undefined") {
  globalThis.window = globalThis;
}

// 先定义 mock fetch 在 window 上，再构造拦截器，这样 originalFetch 才是 mock
globalThis.window.fetch = async (input, init) => {
  console.log("[MockFetch] URL:", input, "body:", init?.body);
  const resp = createBigModelSSEResponse();
  console.log("[MockFetch] created response ok=", resp.ok, "status=", resp.status);
  return resp;
};

// 先定义 mock fetch 在 window 上，再构造拦截器，这样 originalFetch 才是 mock
globalThis.window.fetch = async (input, init) => {
  console.log("[MockFetch] URL:", input, "body:", init?.body);
  const resp = createBigModelSSEResponse();
  console.log("[MockFetch] created response ok=", resp.ok, "status=", resp.status);
  return resp;
};

const { Interceptor } = await import("../dist-test/interceptor.js");
const { Store } = await import("../dist-test/store.js");
const { KeyManager } = await import("../dist-test/key-manager.js");
const { TokenCounter } = await import("../dist-test/token-counter.js");

class MockStore extends Store {
  constructor() {
    super();
    this.data.apiKeys = [
      {
        id: "key-bigmodel",
        name: "思源AI",
        keyFull: "sk-xxx",
        keyMasked: "sk-...xxx",
        provider: "SiYuan AI",
        baseUrl: "https://open.bigmodel.cn/api/paas/v4",
        quotaLimit: 10000,
        alertThreshold: 50,
        enabled: true,
        createdAt: Date.now(),
      },
    ];
  }
}

class MockKeyManager extends KeyManager {
  constructor(store) {
    super(store);
  }
}

const store = new MockStore();
const keyManager = new MockKeyManager(store);
const tokenCounter = new TokenCounter();
const interceptor = new Interceptor(store, keyManager, tokenCounter);

let originalFetch = globalThis.fetch;
let lastRecord = null;

// 覆盖 store.addRecord 以捕获记录
const originalAddRecord = store.addRecord.bind(store);
store.addRecord = (record) => {
  lastRecord = record;
  originalAddRecord(record);
};

// 构造 SSE 响应
function createBigModelSSEResponse() {
  const chunks = [
    { id: "1", object: "chat.completion.chunk", created: Date.now(), model: "glm-4.7", choices: [{ index: 0, delta: { role: "assistant", content: "你好" }, finish_reason: null }] },
    { id: "2", object: "chat.completion.chunk", created: Date.now(), model: "glm-4.7", choices: [{ index: 0, delta: { content: "！" }, finish_reason: null }] },
    { id: "3", object: "chat.completion.chunk", created: Date.now(), model: "glm-4.7", choices: [{ index: 0, delta: { content: "有什么" }, finish_reason: null }] },
    { id: "4", object: "chat.completion.chunk", created: Date.now(), model: "glm-4.7", choices: [{ index: 0, delta: { content: "可以帮你的？" }, finish_reason: null }] },
    { id: "5", object: "chat.completion.chunk", created: Date.now(), model: "glm-4.7", choices: [{ index: 0, delta: {}, finish_reason: "stop" }] },
  ];

  const encoder = new TextEncoder();
  let index = 0;
  const stream = new ReadableStream({
    pull(controller) {
      if (index >= chunks.length) {
        controller.close();
        return;
      }
      const chunk = chunks[index++];
      const data = `data: ${JSON.stringify(chunk)}\n\n`;
      controller.enqueue(encoder.encode(data));
    },
  });

  return new Response(stream, {
    status: 200,
    headers: { "content-type": "text/event-stream; charset=utf-8" },
  });
}

interceptor.install();

async function run() {
  const body = JSON.stringify({
    model: "glm-4.7",
    messages: [{ role: "user", content: "你好，请介绍一下你自己" }],
    stream: true,
  });

  const resp = await fetch("https://open.bigmodel.cn/api/paas/v4/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer sk-xxx" },
    body,
  });
  console.log("[Test] response.ok:", resp.ok, "status:", resp.status);

  // 读取原始响应（模拟调用方）
  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let all = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    all += decoder.decode(value, { stream: true });
  }
  console.log("[MockFetch] Original response length:", all.length);
  console.log("[MockFetch] Original response preview:\n", all.substring(0, 200));

  // 等待拦截器异步分析完成
  await new Promise((r) => setTimeout(r, 500));

  console.log("[Test] Last recorded:", lastRecord);
  console.log("[Test] All records:", store.getRecords());
}

run().catch((e) => console.error(e)).finally(() => {
  interceptor.uninstall();
  globalThis.fetch = originalFetch;
});

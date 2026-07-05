# SiYuan Token Statistics

> 思源笔记 Token 用量统计插件 — 统计思源智能体及第三方插件的 Token 消耗，支持每个 API Key 单独设置限额、自定义提醒阈值、限额自动切断，以及 S3/WebDAV 云同步数据合并。

## 功能特性

- **按 API Base URL 匹配**：所有 API Key 均按 Base URL 匹配，不再区分"内置"与"外部"。思源 AI 可配置为 `http://127.0.0.1:6806/api/ai/` 或 `/api/ai/`，第三方 API 填写对应 URL
- **模型自动识别**：按优先级从高到低依次尝试：请求体 `model` 字段 → SSE 响应中的模型名 → 思源全局 AI 配置。一把 Key 对应多个模型时无需逐个配置
- **自定义提供商名称**：每个 API Key 的"提供商"字段可任意填写（如 OpenAI、DeepSeek、华为云、SiYuan 等），仅用于显示和图标
- **双匹配策略**：同时支持按 URL 匹配和按请求头中的 API Key 匹配
- **Token 统计**：优先从 API 响应中提取精确的 token 用量（SSE `event:usage` 的 `promptTokens` / `completionTokens`），无 usage 字段时自动估算
- **流式支持**：正确处理 SSE 流式响应，解析思源智能体的 `content` / `thinking` / `usage` / `done` 等全部事件类型
- **API Key 管理**：
  - 每个 API Key 可单独设置 Token 限额（0 = 不限）
  - 每个 API Key 可自定义提醒阈值百分比（0-100%）
  - 支持启用/禁用、按 Key 或 URL 匹配
- **限额自动切断**（两道防线）：
  - **请求前预检**：当前用量 + 预估输入超限时，直接返回 HTTP 429，不发网络请求，零 token 消耗
  - **流式途中检测**：SSE 生成过程中检测到超限时标记本次请求为中断（注：取消的是插件克隆流，原始响应流可能仍在传输，实际 token 可能已被计费）
- **限额重置周期**：支持每月/每日/永不重置，统计用量时只计算当前周期内的记录
- **记录去重**：最近 5 条记录中 `apiKeyId + timestamp + totalTokens + model` 完全相同则跳过，避免重复计数
- **云同步合并**：监听思源 `sync-end` 事件，S3/WebDAV 同步后自动按 ID 合并多设备数据
- **多端适配**：支持桌面端、移动端（含鸿蒙 NEXT），UI 响应式适配
- **可视化仪表盘**：
  - 汇总卡片（总 Token / 输入 / 输出 / 请求数 / 平均耗时）
  - 每个 Key 的用量进度条与阈值标记
  - 每日 Token 趋势柱状图（近 14 天）
  - 模型用量分布
  - 最近请求记录表
- **弹窗居中**：仪表盘和 API Key 管理弹窗默认屏幕居中显示，便于操作
- **数据管理**：导出 JSON、清除记录、自动备份

## 安装

### 方式一：手动安装

1. 将插件目录下的所有文件复制到 `思源数据目录/data/plugins/siyuan-token-stats/`
2. 在思源笔记中打开 `设置 → 集市 → 已下载 → 插件`，启用「Token 用量统计」

### 方式二：从 zip 安装

1. 下载 `siyuan-token-stats-vX.X.X.zip`
2. 解压到 `思源数据目录/data/plugins/siyuan-token-stats/`
3. 在思源笔记中启用插件

## 使用方法

### 基本操作

1. **查看统计**：点击思源顶栏的 Token 统计图标，或使用命令面板搜索「Token 用量统计」
2. **配置 API Key**：在插件设置中点击「管理 API Key」

### API Base URL 怎么填

| 场景 | 推荐填写 | 说明 |
|------|----------|------|
| 思源智能体使用第三方模型 | **第三方 API 地址**（如 `https://api.openai.com/v1`） | 第一优先级精确匹配，能区分不同 provider |
| 思源内置 AI（内核模型） | `/api/ai/` 或 `http://127.0.0.1:6806/api/ai/` | 内置 provider 无第三方 baseURL，靠请求 URL 匹配 |
| 只有一把 Key，不关心配额区分 | `/api/ai/` | 兜底逻辑保证 token 照样统计 |

**匹配优先级**：思源 AI 配置中 provider 的 baseURL → 请求 URL 本身 → 名称/提供商模糊匹配 → 默认记录（标记为未知 Key）

**关键点**：思源智能体即使配了第三方模型，前端请求仍然发往 `/api/ai/agent/chat`（思源内核转发），但思源 AI 配置中该 provider 的 `baseURL` 是第三方地址。插件第一优先级正是用这个第三方地址去匹配你的 Key。

### 配额与限额

- **配额按 API Key 聚合**：`getKeyUsage` 只按 `apiKeyId` 过滤当前重置周期内的记录，模型名称仅用于展示，不参与配额计算
- 一把 Key 对应多个模型时，所有模型的 token 消耗汇总到同一个配额池

**开启限额阻断**：

1. 在设置中开启「超出限额时阻止请求」（`blockOnQuotaExceeded`）— 核心开关
2. 可选：开启「流式响应中途超限时中断」（`abortStreamOnExceeded`）

**阻断效果**：

| 场景 | 能否阻断 | 机制 |
|------|----------|------|
| 配额已满后的下一次请求 | ✅ 能 | 请求前返回 429，不发网络请求 |
| 当前正在进行的流式响应 | ⚠️ 有限 | 标记为中断，但克隆流取消不影响原始流 |
| 达到提醒阈值（alertThreshold） | ❌ 不阻断 | 仅弹通知 |

**注意**：请求前预检使用估算的输入 token，可能与实际值有偏差。如果估算偏低，请求可能通过检查后实际消耗超出限额。真正精确的 token 数要等 SSE `event:usage` 返回才知道。

### 阈值提醒

当某 Key 用量达到设定百分比时，思源底部会弹出通知。

### 调试日志

在设置中开启「启用调试日志」后，浏览器控制台（Ctrl+Shift+I）会输出：

```
[TokenStats] Intercepted AI call: source=..., model=..., key=...
[TokenStats] Request body { bodyText: "...", parsedBody: {...} }
[TokenStats] SSE raw event { eventType: "usage", data: "..." }
[TokenStats] analyzeResponse result: { inputTokens: ..., outputTokens: ..., model: "..." }
```

可用于排查模型识别、token 计数、配额匹配等问题。

## 云同步说明

插件数据存储在 `data/storage/siyuan-token-stats/data.json`，位于思源工作空间内。

- **S3 / WebDAV 同步**：思源内核同步工作空间时会自动包含此文件
- **多设备合并**：同步完成后，插件监听 `sync-end` 事件，自动按记录 ID 合并多设备数据
  - 调用记录：按 ID 取并集，不丢失任何设备的记录
  - API Key 配置：按 ID 合并，冲突时取较新版本
  - 全局设置：取最后修改时间较新的版本
- **兼容性**：支持华为云 S3、AWS S3、Cloudflare R2 等所有 S3 兼容存储，切换提供商无需修改插件配置

## 多端支持

| 平台 | 后端 | 前端 | 支持 |
|------|------|------|------|
| Windows | windows | desktop | ✅ |
| macOS | darwin | desktop | ✅ |
| Linux | linux | desktop | ✅ |
| Docker | docker | browser-desktop | ✅ |
| Android | android | mobile | ✅ |
| iOS | ios | mobile | ✅ |
| 鸿蒙 NEXT | harmony | mobile | ✅ |

移动端 UI 已做响应式适配：Dialog 尺寸自适应、表格横向滚动、表单单列布局。

## 技术架构

```
index.js  插件主文件（打包后单文件），包含 7 个核心模块：
├── Store (ae)           数据持久化（思源文件 API）+ 云同步合并 + 记录去重
├── KeyManager (ie)      API Key CRUD、限额检查、阈值提醒
├── TokenCounter (re)    Token 估算器（中英文启发式）
├── Interceptor (pe)     Fetch 拦截器，识别 AI 调用并提取用量
├── SettingsPanel (me)   设置面板（SiYuan Setting + Dialog）
├── Dashboard (be)       统计仪表盘（Dialog + 可视化）
└── Plugin (ve)          插件入口，生命周期管理，同步事件监听
```

### 核心流程

```
思源 AI 请求 → window.fetch 拦截 → identifyAiCall() 识别 Key 和模型
  → 配额预检（超限返回 429）→ originalFetch 发出请求
  → analyzeResponse() 解析响应
    → SSE 流解析（event:usage 提取精确 token）
    → recordCall() 保存记录（去重检查）
    → 阈值检查 → 弹通知
```

### 模型名称识别优先级

```
recordCall 保存时的模型名解析（resolveModelName）：
  1. SSE 响应中提取的模型名（最准确）
  2. 请求体 model 字段
  3. 思源全局 AI 配置中的模型名（兜底）
  4. "unknown"
```

## 数据存储

- 统计数据存储在 `data/storage/siyuan-token-stats/data.json`
- 每次保存前自动备份为 `data.json.bak`
- 数据文件随思源工作空间同步，支持 S3/WebDAV 云同步

## 注意事项

- Token 估算为近似值（无 usage 字段时），精确度取决于文本类型
- 网络拦截有极轻微性能开销（异步分析，不阻塞原始请求）
- 不同 AI 平台的响应格式可能不同，插件已兼容主流格式
- 鸿蒙 NEXT 端的 AI 请求如果通过内核发起，拦截器仍然有效
- 云同步合并是自动的，无需手动操作
- 思源智能体的模型切换如果是会话级的（不写入全局配置），插件可能无法识别实际使用的模型。此时模型名会显示为全局配置中的默认模型

## 更新日志

### v1.3.4

- 修复仪表盘弹窗布局损坏：`position: fixed` 导致对话框尺寸和定位异常，改为 flexbox 居中
- 移除 `.tks-dashboard` 内部滚动，统一由 `.b3-dialog__body` 处理滚动，避免双滚动条

### v1.3.3

- 修复模型名称识别不一致：`resolveModelName` 和 `analyzeResponse` 中全局配置仍优先于 SSE/请求体的问题，统一为「SSE 响应 → 请求体 → 全局配置」优先级

### v1.3.2

- 模型识别：`resolveSiYuanModelForCall` 改为请求体 `model` 字段优先，全局配置兜底
- AI 配置缓存从 30 秒缩短到 5 秒
- 弹窗居中：仪表盘和 Key 管理 Dialog 默认屏幕居中

### v1.3.1

- 合并重复的 HTML 转义函数
- 简化 `collectChunkInfo` 中超长可选链
- `addRecord` 新增记录去重机制

### v1.3.0

- 通过 fetch 拦截器 + SSE `event:usage` 完整支持思源智能体 Token 统计
- 支持 `/api/ai/agent/chat`、`/api/ai/chatGPT`、`/api/ai/chatGPTWithAction` 端点
- `collectChunkInfo` 处理思源 Agent 全部 SSE 事件类型（content/thinking/usage/done/tool_call 等）

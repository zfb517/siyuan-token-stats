# SiYuan Token Statistics

> 思源笔记 Token 用量统计插件 — 统计思源内置 AI 功能（智能体、编辑器 AI）及第三方插件的 Token 消耗，支持每个 API Key 单独设置限额、自定义提醒阈值、限额自动切断，以及 S3/WebDAV 云同步数据合并。
>
> **架构说明**：思源笔记的所有 AI 功能（智能体、编辑器 AI、嵌入）均依赖用户在 `设置 → AI` 中配置的第三方 Provider（API Key + Base URL + 模型）。思源 Go 后端负责：读取 Provider 配置 → 向第三方 API 发送真实请求 → 将响应流以 SSE 格式转发给前端。本插件通过拦截前端 fetch 请求来统计 Token 用量。

## 功能特性

- **按真实 API Key 匹配**：插件会读取思源 AI 配置中当前选中 Provider 的 `apiKey`，优先匹配你在插件中保存的相同 Key，实现按真实 API Key 分账统计（无论请求是从思源内置 AI 还是第三方插件发出）
- **多 Key 同 URL 时按模型区分**：当多个 API Key 使用相同 Base URL 时，可在每个 Key 中设置"关联模型"。无论是思源内置 AI 还是第三方插件，都会按请求体中实际的模型信息匹配到对应 Key
- **按 API Base URL 匹配**：作为兜底方案，所有 API Key 可配置 Base URL 用于匹配。思源 AI 请求可配置为 `http://127.0.0.1:6806/api/ai/`，第三方 API 填写对应的外部 URL
- **模型自动识别**：按优先级从高到低依次尝试：SSE 响应中的模型名 → 请求体 `model` 字段 → 思源 Provider 配置。一把 Key 对应多个模型时无需逐个配置
- **自定义提供商名称**：每个 API Key 的"提供商"字段可任意填写（如 OpenAI、DeepSeek、华为云、SiYuan 等），仅用于显示和图标
- **双匹配策略**：同时支持按 URL 匹配和按请求头中的 API Key 匹配
- **Token 统计**：优先从 API 响应中提取精确的 token 用量（SSE `event:usage` 的 `promptTokens` / `completionTokens`），无 usage 字段时自动估算
- **流式支持**：正确处理 SSE 流式响应，解析思源智能体的 `content` / `thinking` / `usage` / `done` 等全部事件类型
- **API Key 管理**：
  - 每个 API Key 可单独设置 Token 限额（0 = 不限）
  - 每个 API Key 可自定义提醒阈值百分比（0-100%）
  - 支持启用/禁用、按 Key 或 URL 匹配
  - 支持为每个 Key 设置“关联模型”，多个 Key 同 URL 时按模型精确区分
  - 支持导出/导入 API Key 配置（含完整 Key），方便备份与迁移
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
  - 刷新按钮仅重载数据，不重置滚动位置与弹窗位置
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
| 思源内置 AI（智能体 / 编辑器 AI） | **第三方 API 地址**（如 `https://api.openai.com/v1`） | 思源 AI 全部依赖第三方 Provider 工作，第一优先级按 Provider 的 apiKey 精确匹配，能区分不同 Provider |
| 只想用兜底匹配，不关心配额区分 | `/api/ai/` 或留空 | 兜底逻辑会按请求 URL 匹配，token 照样统计但不区分具体 Key |
| 第三方插件（SiYuan Copilot 等） | 插件实际调用的 API 地址 | 第三方插件通过请求头中的 API Key 直接匹配 |

**匹配原理**（思源内置 AI 请求，包括智能体和编辑器 AI）：插件读取思源配置中当前 Provider 的 `apiKey` 精确匹配插件 Key → 按用户 Key 的"关联模型"匹配 → 按 Provider 的 `baseURL` + "关联模型"匹配 → 按请求 URL 兜底匹配 → 默认记录（标记为未知 Key）

**匹配原理**（第三方插件直接访问外部 API）：请求体模型名 → 用户 Key 的"关联模型" → 请求头中的 API Key → 请求 URL 本身 → 默认记录

**关键点**：思源内置 AI（包括智能体）的请求在前端看起来发往 `/api/ai/agent/chat` 或 `/api/ai/chatGPT`（思源内核端点），但思源 Go 后端会根据你配置的 Provider 向真正的第三方 API 发起请求。插件通过读取思源配置中的 `provider.apiKey` 来精确匹配，与第三方插件按请求头 Key 匹配在逻辑上是等价的。

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

### 思源 AI 请求流程（基于思源 GitHub 源码）

```
思源前端 UI
  │  fetch("/api/ai/agent/chat", { body: { sessionID, message, ... } })
  ▼
思源 Go 后端 (kernel/api/agent.go, kernel/model/ai.go)
  │  读取 Conf.AI.Providers → 找到选中的 Provider
  │  使用 provider.APIKey + provider.BaseURL 创建 OpenAI 客户端
  │  向第三方 API 发送真实 HTTP 请求 (e.g. https://api.openai.com/v1/chat/completions)
  ▼
第三方 API 服务器 (OpenAI / DeepSeek / 硅基流动 / ...)
  │  返回 SSE 流 (content, usage events)
  ▼
思源 Go 后端 — SSE 转发给前端
  │  event:content, event:usage, event:done, ...
  ▼
思源前端 UI — 展示 AI 回复
```

> **关键**：本插件运行在思源前端，只能拦截前端 ↔ 后端之间的 fetch 请求。插件通过读取 `window.siyuan.config.ai`（即思源 Go 后端的 `Conf.AI` 配置）来获知当前使用的是哪个 Provider 的 API Key 和模型，从而实现按真实 API Key 分账。

### 插件内部模块

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
前端 fetch 请求 → window.fetch 拦截 → identifyAiCall() 识别 Key 和模型
  ├── 思源内置 AI (/api/ai/...): 读取思源配置 → 按 provider.apiKey 匹配插件 Key
  └── 第三方插件 (外部 URL): 按请求头 API Key / 模型名匹配插件 Key
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

- 主统计数据存储在 `data/storage/siyuan-token-stats/data.json`
- 插件目录备份存储在 `data/plugins/siyuan-token-stats/settings.json`（防止集市关闭/启用后主存储被清空导致配置丢失）
- 每次保存前自动备份上一次的主存储内容为 `data.json.bak`
- 加载时比较两份文件，取 `lastSavedAt` 最新的一份
- 插件卸载时执行同步写入确保配置落盘

## 注意事项

- Token 估算为近似值（无 usage 字段时），精确度取决于文本类型
- 网络拦截有极轻微性能开销（异步分析，不阻塞原始请求）
- 不同 AI 平台的响应格式可能不同，插件已兼容主流格式
- 鸿蒙 NEXT 端的 AI 请求如果通过内核发起，拦截器仍然有效
- 云同步合并是自动的，无需手动操作
- 思源内置 AI（智能体 + 编辑器 AI）全部通过第三方 Provider 工作，不存在"内核模型"。插件通过读取思源配置中当前 Provider 的 apiKey 来识别使用者

## 更新日志

### v1.3.12

- 基于思源 GitHub 源码（`kernel/api/ai.go`, `kernel/api/agent.go`, `kernel/model/ai.go`, `kernel/conf/ai.go`）重新梳理架构文档：确认思源所有 AI 功能（智能体、编辑器 AI、嵌入）均通过第三方 Provider 工作，不存在"内核模型"
- 修正 README 中关于"思源智能体"与"思源内置 AI"的错误区分——它们都是同一套 Provider 系统，只是调用场景不同（agent vs editing）
- 补充思源 AI 请求的完整数据流图：前端 fetch → Go 后端 → 第三方 API → SSE 转发，阐明插件拦截位置
- 优化匹配原理说明：优先按 Provider 的真实 apiKey 匹配插件 Key，与第三方插件按请求头 Key 匹配在逻辑上等价

### v1.3.11

- 修复思源智能体仍不能按真实 API Key 统计的问题：现在会读取思源 AI 配置中当前 provider 的 `apiKey`，优先匹配插件中保存的相同 Key，实现与第三方插件一样的分 Key 统计
- 修复请求体不含 `model` 字段时思源 AI 请求无法按模型匹配的问题：同时从思源配置的 `agent.modelId` / `editing.modelId` 解析当前模型进行匹配
- 增强配置持久化：除 `data/storage/siyuan-token-stats/data.json` 外，额外在插件目录 `data/plugins/siyuan-token-stats/settings.json` 保存完整配置副本；加载时取两者中最新的一份，集市关闭/重新启用后 API KEY 等设置可从插件目录恢复
- `onunload` 时先执行异步 `save()`，再执行同步 `saveSync()` 强制写入插件目录备份，避免异步保存被中断导致数据丢失

### v1.3.10

- 修复第三方插件直接访问外部 API 时，多 Key 仍被汇总到一个 Key 的问题：外部 API 请求（OpenAI/Anthropic/自定义 URL）现在同样优先按请求体 `model` 字段匹配“关联模型”
- 修复插件在集市开关后 API Key 配置可能丢失的问题：`onunload` 改为异步并等待 `save()` 完成，确保卸载前数据已写入存储
- 增加 `keyMatchesModel` 辅助方法，统一模型匹配逻辑

### v1.3.9

- 修复 API Key 按模型区分仍不生效的问题：思源 AI 请求中，把「Key 关联模型」匹配优先级提升到最高，优先于思源 provider 的 baseURL 匹配
- 修复 `resolveSiYuanModelNameIfNeeded` 存在未使用参数的代码质量警告

### v1.3.8

- 新增 API Key「关联模型」字段：多 Key 同 Base URL 时，按请求体 `model` 字段精确匹配到对应 Key
- 修复仪表盘刷新后跳转到中部的 Bug：弹窗仍打开时只更新内容，关闭后重新打开时重建
- 优化弹窗定位 CSS，避免与思源 Dialog 拖拽机制冲突

### v1.3.7

- 修复仪表盘关闭后无法再次打开的问题：弹窗关闭后旧 Dialog 元素仍被重用，导致内容更新但弹窗不显示

### v1.3.6

- 修复多 provider 时所有请求被汇总到第一个 API Key 的问题：`identifyAiCall` 新增按请求体 `model` 字段匹配 provider，再匹配对应 API Key
- 仪表盘刷新改为就地更新内容，不再销毁并重建弹窗，保留当前滚动位置与弹窗拖拽位置
- API Key 管理增加导出/导入功能（导出文件包含完整 `keyFull`，导入时按 Key 去重：相同 Key 更新，不同 Key 新增）

### v1.3.5

- 修复 v1.3.4 弹窗无法向左拖拽的问题：移除 `align-items/justify-content/margin` 的 `!important` 声明，避免覆盖思源 Dialog 拖拽时设置的 inline margin
- 改为仅设置 `margin-top: 5vh` 使弹窗初始位置下移，不干扰拖拽机制

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

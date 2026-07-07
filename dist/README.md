# SiYuan Token Statistics

> 思源笔记 Token 用量统计插件 — 统计思源智能体及第三方插件的 Token 消耗，支持每个 API Key 单独设置限额、自定义提醒阈值、限额自动切断，以及 S3/WebDAV 云同步数据合并。

## 功能特性

- **按 API Base URL 匹配**：所有 API Key 均按 Base URL 匹配，不再区分"内置"与"外部"。思源 AI 可配置为 `http://127.0.0.1:6806/api/ai/` 或 `/api/ai/`，第三方 API 填写对应 URL
- **思源 conf.json 模型识别**：自动扫描思源工作空间 `conf/conf.json` 配置文件，将请求体中的块 ID（如 `20260705184400-rxdfohi`）解析为真实模型名（如 `deepseek-v4-flash`），精确识别思源智能体实际使用的模型
- **自定义提供商名称**：每个 API Key 的"提供商"字段可任意填写（如 OpenAI、DeepSeek、华为云、SiYuan 等），仅用于显示和图标
- **多级 Key 匹配策略**：思源 AI 请求按 provider.apiKey → 关联模型 → provider.baseURL → provider 模型列表 → URL 兜底顺序匹配；外部 API 按模型 → API Key → URL 匹配
- **关联模型匹配**：同一 Base URL 下配置多个 Key 时，可通过"关联模型"字段按请求模型精确匹配到对应 Key
- **Token 统计**：优先从 API 响应中提取精确的 token 用量，无 usage 字段时自动估算
- **流式支持**：正确处理 SSE 流式响应（含思源智能体自定义事件格式），解析 usage 事件或估算累积文本
- **API Key 管理**：
  - 每个 API Key 可单独设置 Token 限额（0 = 不限）
  - 每个 API Key 可自定义提醒阈值百分比（0-100%）
  - 支持启用/禁用、按 Key 或 URL 匹配
  - 支持导入/导出 Key 配置（JSON 格式）
- **限额自动切断**（三道防线）：
  - 请求前预检：当前用量 + 预估输入超限时拦截
  - 流式中途中断：SSE 生成过程中超限时 `reader.cancel()` 立即中断
  - 受控错误响应：返回 HTTP 429 而非 throw，调用方可正常处理
- **限额重置周期**：支持每月/每日/永不重置，统计用量时只计算当前周期内的记录
- **云同步合并与跨端同步**：监听思源 `sync-end` 事件，并在插件加载后延迟合并、之后每 60 秒周期合并，自动按 ID 合并多设备数据。设置项与 API Key 采用独立时间戳合并，确保 Windows 端的设置能可靠同步到鸿蒙 NEXT 等移动端
- **多端适配**：支持桌面端、移动端（含鸿蒙 NEXT），UI 响应式适配
- **可视化仪表盘**：
  - 汇总卡片（总 Token / 输入 / 输出 / 请求数 / 平均耗时 / 全局限额）
  - 每个 Key 的用量进度条与阈值标记
  - 每日 Token 趋势柱状图（支持按日/周/月聚合，自定义日期区间）
  - 模型用量分布
  - 最近请求记录表
  - **仪表盘自动刷新**：打开期间每 3 秒自动更新统计数据，实时反映新请求
- **费用估算**：在插件设置中按模型配置输入 / 输出单价（如 `deepseek-v4-flash` 输入 ¥0.001/千 token、输出 ¥0.004/千 token），仪表盘自动按模型汇总估算总费用；汇总卡片、最近请求记录表、模型用量分布均展示费用（未配置单价时显示"未配置")
- **数据管理**：导出 JSON、清除记录、自动备份

## 安装

### 方式一：手动安装

1. 将 `dist/` 目录下的所有文件复制到 `思源数据目录/data/plugins/siyuan-token-stats/`
2. 在思源笔记中打开 `设置 → 集市 → 已下载 → 插件`，启用「Token 用量统计」

### 方式二：从源码构建

```bash
npm install
npm run build
```

将生成的 `dist/` 内容复制到思源插件目录。

## 使用方法

### 基本使用

1. **查看统计**：点击思源顶栏的 Token 统计图标，或使用命令面板搜索「Token 用量统计」
2. **配置 API Key**：在插件设置中点击「管理 API Key」
   - 添加思源 AI：名称随意（如"思源智能体"），Base URL 填写 `/api/ai/` 或 `http://127.0.0.1:6806/api/ai/`
   - 添加第三方 API：输入名称、API Key、提供商名称、Base URL、限额、阈值
   - **关联模型**：当多个 Key 使用相同 Base URL 时，在"关联模型"字段填写模型名（逗号分隔），插件会按请求模型匹配到对应 Key
3. **限额自动切断**：在设置中开启「超出限额时阻止请求」和「流式响应中途超限时中断」
4. **阈值提醒**：当某 Key 用量达到设定百分比时，思源底部会弹出通知
5. **仪表盘自动刷新**：仪表盘打开期间每 3 秒自动更新，无需手动点击刷新
6. **费用估算配置**：在插件设置中点击「费用估算配置」
   - 选择币种（¥ 人民币 / $ 美元）
   - 为每个模型添加输入单价与输出单价（单位：每千 token 的费用，例如 DeepSeek V3 输入 ¥0.001、输出 ¥0.004）
   - 模型名填写时统一转为小写（与统计中的模型匹配），匹配到对应模型后，仪表盘即按 `输入 token ÷ 1000 × 输入单价 + 输出 token ÷ 1000 × 输出单价` 估算费用
   - 未配置单价的模型在汇总卡片与记录表中显示"—"或"未配置"，不影响其他模型统计

### 思源智能体模型识别

思源智能体（`/api/ai/agent/chat`）的请求体中 `model` 字段是**块 ID**（如 `20260705184400-rxdfohi`），不是模型名。插件通过以下机制识别真实模型：

1. **扫描 conf.json**：插件读取思源工作空间 `conf/conf.json` 中的 AI 配置（`window.siyuan.config.ai`），5 秒缓存
2. **块 ID → 模型名**：遍历 `providers[].models[]`，通过块 ID 匹配到真实模型名（如 `deepseek-v4-flash`）
3. **Key 归属匹配**：通过 provider 中的 `apiKey`、`baseURL`、`models` 字段与用户配置的 Key 匹配，确保统计归属正确

**配置建议**：在思源设置 → 人工智能中配置好 provider 和模型后，在插件的 API Key 管理中：
- 将思源 AI 的 API Key 填入插件（与 conf.json 中 provider.apiKey 一致）
- 在"关联模型"字段填写对应的模型名（如 `sensenova-6.7-flash-lite, deepseek-v4-flash`）
- 这样即使思源默认模型未配置（设为"未指定"），插件也能正确识别和归属

### 调试日志

在插件设置中开启「启用调试日志」后，浏览器控制台（Ctrl+Shift+I）会输出：
- 拦截到的 AI 调用信息（source / model / key）
- 请求体解析详情
- SSE 流式事件解析过程
- 响应分析结果（inputTokens / outputTokens / model）
- 记录写入日志

排查 token 统计为 0 或模型识别错误时，开启调试日志可快速定位问题。

## 云同步说明

插件数据存储在 `data/storage/siyuan-token-stats/data.json`，位于思源工作空间内，随思源云同步自动在设备间传输。

- **三重存储备份**：主存储（`data/storage/`）+ 插件目录备份（`data/plugins/siyuan-token-stats/settings.json`）+ localStorage，防止插件更新或异常时数据丢失
- **S3 / WebDAV 同步**：思源内核同步工作空间时会自动包含此文件；兼容华为云 S3、AWS S3、Cloudflare R2 等所有 S3 兼容存储，切换提供商无需修改插件配置
- **多设备合并**：合并在以下时机自动触发——同步完成（`sync-end` 事件）、插件加载后延迟合并、以及之后每 60 秒的周期合并（确保移动端 / 鸿蒙 NEXT 即使错过 `sync-end` 也能收敛）：
  - 调用记录：按 ID 取并集，不丢失任何设备的记录
  - API Key 配置：按 ID 合并，冲突时取 `keysUpdatedAt` 时间戳较新的一方
  - 设置项：按 `settingsUpdatedAt` 时间戳取较新的一方（v1.3.15 修复：此前曾使用全局保存时间戳，而该时间戳会在每次 Token 记录保存时被刷新，导致本端一次普通调用就把对端刚改的设置覆盖掉，表现为「Windows 设置无法同步到鸿蒙 NEXT」。现已改为设置 / 密钥各自独立的更新时间戳，互不干扰）
- **合并后回填**：若设置面板在合并时处于打开状态，最新设置会自动回填（正在编辑的字段不会被打断）

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
src/
├── index.ts            # 插件入口，生命周期管理，同步事件监听
├── types.ts            # TypeScript 类型定义
├── store.ts            # 数据持久化（三重备份）+ 云同步合并
├── token-counter.ts    # Token 估算器（中英文启发式）
├── interceptor.ts      # Fetch 拦截器，识别 AI 调用并提取用量
├── key-manager.ts      # API Key CRUD、限额检查、阈值提醒
├── settings-panel.ts   # 设置面板（SiYuan Setting + Dialog）
├── dashboard.ts        # 统计仪表盘（Dialog + 可视化 + 自动刷新）
├── vite-env.d.ts       # Vite 环境类型声明
└── style.css           # 样式（使用 SiYuan CSS 变量适配主题）
```

## 数据存储

- 统计数据存储在 `data/storage/siyuan-token-stats/data.json`
- 插件目录备份：`data/plugins/siyuan-token-stats/settings.json`
- 每次保存前自动备份为 `data.json.bak`
- localStorage 第三重备份，防止异常丢失
- 数据文件随思源工作空间同步，支持 S3/WebDAV 云同步

## 注意事项

- **conf.json 扫描**：插件优先从思源运行时配置 `window.siyuan.config.ai`（即 `conf/conf.json` 的加载结果）读取 AI 配置（含 providers、models），并缓存 5 秒以减少开销，用于将块 ID 解析为真实模型名。此操作只读取内存中的配置，不修改 conf.json 文件
- **模型识别优先级**：响应中的模型名 > 请求体块 ID 解析 > 全局配置兜底。确保实际使用的模型被正确记录
- **多 Key 场景**：当使用多个 API Key 管理不同大模型时，务必填写"关联模型"字段，否则同一 URL 下的请求可能归属到错误的 Key
- **Token 估算**：无 usage 字段时为近似值，精确度取决于文本类型。思源智能体的 usage 事件包含精确 token 数
- **网络拦截**：有极轻微性能开销（异步分析，不阻塞原始请求）
- **调试日志**：默认关闭，排查问题时在设置中开启即可，修改后实时生效，无需重启插件
- **鸿蒙 NEXT**：AI 请求如果通过内核发起，拦截器仍然有效
- **云同步合并**：自动执行，无需手动操作

## 更新日志

### v1.3.16

- **新增** 费用估算：设置面板新增「费用估算配置」，支持选择币种（¥/$），并按模型配置输入 / 输出单价（每千 token）
- **新增** 仪表盘费用展示：汇总卡片新增「估算总费用」，最近请求记录表新增「费用」列，模型用量分布新增费用明细；未配置单价的模型显示"—"/未配置"
- **优化** 模型名匹配统一小写化，确保单价配置与统计模型正确对应

### v1.3.15

- **修复** 设置无法跨端同步（含鸿蒙 NEXT）：云同步合并改用 `settingsUpdatedAt` / `keysUpdatedAt` 专属时间戳按各自时效性判定，不再使用全局 `lastSavedAt`（该时间戳会在每次 Token 记录保存时刷新，导致本端一次普通调用就把对端更新的设置覆盖掉）
- **修复** 鸿蒙 NEXT 等端可能错过 `sync-end` 事件：除 `sync-end` 外，新增插件加载后延迟合并 + 每 60 秒周期合并（带并发锁、卸载时清理定时器），确保设置与数据一定能收敛
- **优化** 合并后自动回填已打开的设置面板（正在编辑的字段跳过）
- **文档** 更新 README，补充跨端同步机制与版本记录

### v1.3.14

- **修复** 思源智能体模型识别错误：请求体 `model` 字段是块 ID（如 `20260705184400-rxdfohi`），之前被过滤导致模型名错误。新增 `resolveModelByBlockId()` 通过块 ID 在 `conf.json` 的 providers 配置中查找真实模型名
- **修复** 仪表盘不自动更新：打开期间每 3 秒自动刷新统计数据，关闭时自动清除定时器
- **修复** 新建 API Key 时关联模型被丢弃：`settings-panel.ts` 中创建新 Key 的 `models` 字段错误设为空数组，已修正为用户输入值
- **修复** 调试日志不受开关控制：`Intercepted AI call` 和 `Recorded` 日志改为受 `debugLogging` 开关控制
- **优化** 思源 AI Key 归属匹配：新增 provider 级匹配（provider.apiKey → provider.baseURL → provider.models），解决默认模型未配置时的统计归属问题
- **优化** 模型名解析优先级：响应解析的 model > aiCall.model > 全局配置兜底
- **清理** 移除死代码 `extractEnabledBaseUrls` 方法

### v1.3.13

- **修复** API KEY 设置丢失：saveSync 从只写插件目录改为写主存储 + 插件目录 + localStorage 三重备份；load 增加 localStorage 恢复
- **新增** provider 级 Key 匹配，解决思源智能体请求统计不归属问题
- **优化** getSiYuanAiConfig 优先实时读取 window.siyuan.config.ai

### v1.3.12

- **修复** 思源 AI 请求体 message/references 字段的 token 估算
- **优化** SSE 事件解析支持思源智能体自定义格式（content/reasoning/thinking/usage/done）

### v1.3.8

- **新增** API Key 关联模型字段（`models: string[]`），支持同 URL 下多 Key 按模型匹配
- **新增** `findByModel()` 和 `findByUrlAndModel()` 方法

### v1.3.7

- **修复** 仪表盘弹窗重复打开时的 DOM 复用逻辑

### v1.3.6

- **新增** API Key 导入/导出功能

### v1.3.5

- **优化** 弹窗布局：align-items: flex-start / padding-top: 5vh / max-height: 92vh

### v1.3.0

- **新增** 全局总 Token 限额、手动校准偏移量、Token 趋势图日期区间与聚合方式
- **新增** 云同步合并（sync-end 事件监听）
- **重构** 统一按 URL 匹配，移除"内置/外部"区分

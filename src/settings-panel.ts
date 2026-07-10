/**
 * 设置面板
 * 使用 SiYuan 的 Setting 类构建设置页，API Key 管理使用自定义 Dialog。
 */
import { Setting, Dialog, showMessage, confirm, getFrontend } from "siyuan";
import type { Store } from "./store";
import type { KeyManager } from "./key-manager";
import type { ApiKeyConfig, QuotaResetCycle, ModelPrice, PricePack } from "./types";
import { sha256Sync } from "./crypto";

/** 转义 HTML 特殊字符，防止 XSS */
function esc(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export class SettingsPanel {
  private store: Store;
  private keyManager: KeyManager;
  setting: Setting;
  /** 手动同步回调（由插件入口注入，指向 manualSyncFull） */
  onManualSync: (() => Promise<boolean>) | null = null;

  constructor(store: Store, keyManager: KeyManager) {
    this.store = store;
    this.keyManager = keyManager;
    this.setting = this.build();
  }

  private build(): Setting {
    const self = this;
    const setting = new Setting({
      width: this.isMobile() ? "92vw" : "700px",
      height: "auto",
      confirmCallback: () => {
        self.saveGlobalSettings();
        showMessage("设置已保存", 2000, "info");
      },
    });

    // 设置面板打开后添加滚动支持（思源 Setting 默认不会自动滚动）
    setTimeout(() => this.ensureDialogScrollable(), 0);

    const s = this.store.getSettings();

    // ─── 通用设置 ───
    setting.addItem({
      title: "按 API Base URL 匹配 Key",
      description: "拦截请求时优先按 URL 匹配已配置的 API Key，适用于思源 AI、自定义代理等场景",
      createActionElement: () => this.createCheckbox("matchByUrl", s.matchByUrl ?? true),
    });

    setting.addItem({
      title: "拦截外部 API 调用",
      description: "拦截第三方插件对 OpenAI / Anthropic / DeepSeek 等外部 API 的直接调用",
      createActionElement: () => this.createCheckbox("interceptExternalAPIs", s.interceptExternalAPIs),
    });

    setting.addItem({
      title: "超出限额时阻止请求",
      description: "当某个 API Key 的 Token 用量达到限额时，阻止后续请求（谨慎开启）",
      createActionElement: () => this.createCheckbox("blockOnQuotaExceeded", s.blockOnQuotaExceeded),
    });

    setting.addItem({
      title: "限额重置周期",
      description: "按周期自动重置 Token 用量统计。每月 = 每月 1 日归零，每日 = 每天归零",
      createActionElement: () => {
        const select = document.createElement("select");
        select.className = "b3-select fn__size200";
        select.id = "tks-quotaResetCycle";
        const options: { value: QuotaResetCycle; label: string }[] = [
          { value: "monthly", label: "每月重置" },
          { value: "daily", label: "每日重置" },
          { value: "custom", label: "自定义（天）" },
          { value: "none", label: "永不重置" },
        ];
        for (const opt of options) {
          const el = document.createElement("option");
          el.value = opt.value;
          el.textContent = opt.label;
          if (s.quotaResetCycle === opt.value) el.selected = true;
          select.appendChild(el);
        }
        return select;
      },
    });

    setting.addItem({
      title: "自定义周期天数（天）",
      description: "单 Key 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）。例如 14 = 每两周、90 = 每季。下方全局周期也共用此天数。",
      createActionElement: () => this.createCustomDaysInput("tks-customResetDays"),
    });

    setting.addItem({
      title: "流式响应中途超限时中断",
      description: "当流式 AI 响应生成过程中 Token 超出限额时，立即中断流（避免继续消耗）",
      createActionElement: () => this.createCheckbox("abortStreamOnExceeded", s.abortStreamOnExceeded),
    });

    setting.addItem({
      title: "显示阈值提醒通知",
      description: "当 Token 用量达到设定的提醒阈值时，在思源底部弹出通知",
      createActionElement: () => this.createCheckbox("showNotifications", s.showNotifications),
    });

    setting.addItem({
      title: "顶栏显示实时用量徽标",
      description: "在顶栏图标上显示当前全局用量（无全局限额时显示总 token 数，设有全局限额时显示百分比，颜色随阈值变化）",
      createActionElement: () => this.createCheckbox("showTopBarBadge", s.showTopBarBadge),
    });

    setting.addItem({
      title: "启用调试日志",
      description: "在浏览器控制台输出请求/响应调试信息，排查 token 统计为 0 等问题（重启插件后生效）",
      createActionElement: () => this.createCheckbox("debugLogging", s.debugLogging ?? false),
    });

    setting.addItem({
      title: "最大记录数",
      description: "保留的最近调用记录数量，超出后自动裁剪旧记录（节省存储空间）",
      createActionElement: () => {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "b3-text-field fn__size200";
        input.id = "tks-max-records";
        input.value = String(s.maxRecords);
        input.min = "100";
        input.max = "50000";
        input.step = "100";
        return input;
      },
    });

    setting.addItem({
      title: "诊断日志导出条数",
      description: "仪表盘「导出原始 usage 日志」时，最多导出最近 N 条带原始 usage 的记录（0 = 全部导出）。原始 usage 来自 API 供应商响应、未做任何裁剪，用于排查用量统计偏差。",
      createActionElement: () => {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "b3-text-field fn__size200";
        input.id = "tks-diagnosticExportCount";
        input.value = String(s.diagnosticExportCount ?? 50);
        input.min = "0";
        input.max = "500";
        input.step = "10";
        return input;
      },
    });

    // ─── 全局总 Token 限额 ───
    setting.addItem({
      title: "全局总 Token 限额",
      description: "所有 API Key 的 Token 用量总和超过此值时触发拦截（0 = 不开启）",
      createActionElement: () => {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "b3-text-field fn__size200";
        input.id = "tks-globalQuotaLimit";
        input.value = String(s.globalQuotaLimit || 0);
        input.min = "0";
        input.step = "1000";
        return input;
      },
    });

    setting.addItem({
      title: "全局提醒阈值 (%)",
      description: "全局 Token 用量达到此百分比时弹出提醒（0 = 不提醒）",
      createActionElement: () => {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "b3-text-field fn__size200";
        input.id = "tks-globalAlertThreshold";
        input.value = String(s.globalAlertThreshold || 0);
        input.min = "0";
        input.max = "100";
        input.step = "5";
        return input;
      },
    });

    setting.addItem({
      title: "全局限额重置周期",
      description: "按周期自动重置全局 Token 用量统计",
      createActionElement: () => {
        const select = document.createElement("select");
        select.className = "b3-select fn__size200";
        select.id = "tks-globalQuotaResetCycle";
        const options: { value: QuotaResetCycle; label: string }[] = [
          { value: "monthly", label: "每月重置" },
          { value: "daily", label: "每日重置" },
          { value: "custom", label: "自定义（天）" },
          { value: "none", label: "永不重置" },
        ];
        for (const opt of options) {
          const el = document.createElement("option");
          el.value = opt.value;
          el.textContent = opt.label;
          if (s.globalQuotaResetCycle === opt.value) el.selected = true;
          select.appendChild(el);
        }
        return select;
      },
    });

    setting.addItem({
      title: "全局周期自定义天数（天）",
      description: "全局 Token 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方单 Key 周期共用同一天数",
      createActionElement: () => this.createCustomDaysInput("tks-globalQuotaResetDays"),
    });

    setting.addItem({
      title: "全局已用 Token 校准",
      description: "手动输入从第三方平台导入的历史已用 Token，叠加到全局统计中（0 = 不校准）",
      createActionElement: () => {
        const wrap = document.createElement("div");
        wrap.style.display = "flex";
        wrap.style.gap = "8px";
        wrap.style.alignItems = "center";

        const makeInput = (id: string, label: string, val: number) => {
          const div = document.createElement("div");
          div.style.flex = "1";
          const lab = document.createElement("div");
          lab.style.fontSize = "12px";
          lab.style.color = "var(--b3-theme-on-surface)";
          lab.textContent = label;
          const inp = document.createElement("input");
          inp.type = "number";
          inp.className = "b3-text-field";
          inp.id = `tks-${id}`;
          inp.value = String(val || 0);
          inp.min = "0";
          inp.step = "100";
          inp.style.width = "100%";
          div.appendChild(lab);
          div.appendChild(inp);
          return div;
        };

        wrap.appendChild(makeInput("globalUsedTokensOffset", "总 Token", s.globalUsedTokensOffset));
        wrap.appendChild(makeInput("globalUsedInputTokensOffset", "输入", s.globalUsedInputTokensOffset));
        wrap.appendChild(makeInput("globalUsedOutputTokensOffset", "输出", s.globalUsedOutputTokensOffset));
        return wrap;
      },
    });

    // ─── 全局费用限额 ───
    setting.addItem({
      title: "全局费用限额",
      description: "当前周期内所有 API 调用的估算总费用超过此金额时触发提醒与拦截（0 = 不开启；需先在「费用估算配置」中设置模型单价）",
      createActionElement: () => {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "b3-text-field fn__size200";
        input.id = "tks-globalCostLimit";
        input.value = String(s.globalCostLimit || 0);
        input.min = "0";
        input.step = "1";
        return input;
      },
    });

    setting.addItem({
      title: "全局费用提醒阈值 (%)",
      description: "全局费用达到限额的此百分比时弹出提醒（0 = 不提醒）",
      createActionElement: () => {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "b3-text-field fn__size200";
        input.id = "tks-globalCostAlertThreshold";
        input.value = String(s.globalCostAlertThreshold || 0);
        input.min = "0";
        input.max = "100";
        input.step = "5";
        return input;
      },
    });

    setting.addItem({
      title: "全局费用重置周期",
      description: "按周期自动重置全局费用用量统计（独立于「全局限额重置周期」，可与 Token 限额采用不同节奏）",
      createActionElement: () => {
        const select = document.createElement("select");
        select.className = "b3-select fn__size200";
        select.id = "tks-globalCostResetCycle";
        const options: { value: QuotaResetCycle; label: string }[] = [
          { value: "monthly", label: "每月重置" },
          { value: "daily", label: "每日重置" },
          { value: "custom", label: "自定义（天）" },
          { value: "none", label: "永不重置" },
        ];
        for (const opt of options) {
          const el = document.createElement("option");
          el.value = opt.value;
          el.textContent = opt.label;
          if (s.globalCostResetCycle === opt.value) el.selected = true;
          select.appendChild(el);
        }
        return select;
      },
    });

    setting.addItem({
      title: "全局费用周期自定义天数（天）",
      description: "全局费用限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方周期共用同一天数",
      createActionElement: () => this.createCustomDaysInput("tks-globalCostResetDays"),
    });

    setting.addItem({
      title: "全局已用费用校准",
      description: "手动输入从第三方平台导入的历史已花费金额，叠加到全局费用统计中（0 = 不校准；单位与货币类型一致）",
      createActionElement: () => {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "b3-text-field fn__size200";
        input.id = "tks-globalUsedCostOffset";
        input.value = String(s.globalUsedCostOffset || 0);
        input.min = "0";
        input.step = "1";
        return input;
      },
    });

    // ─── 费用估算配置 ───
    setting.addItem({
      title: "费用估算配置",
      description: "设置每模型单价（每 1K tokens 的输入/输出价格）与资源包（一个包涵盖多个模型），仪表盘将显示估算费用。注意：费用估算完全依赖此处配置，单价 / 资源包填错会显著放大费用误差，请以 API 服务商账单为准；使用前请先阅读 README「统计精度与免责声明」章节",
      actionElement: this.createButton("配置", () => this.openPriceEditor()),
    });

    // ─── API Key 管理 ───
    setting.addItem({
      title: "API Key 管理",
      description: "添加、编辑、删除 API Key，为每个 Key 设置限额与提醒阈值",
      actionElement: this.createButton("管理 API Key", () => this.openKeyManager()),
    });

    // ─── 区分精确/估算（原在仪表盘工具栏，移至此处保持仪表盘清爽） ───
    setting.addItem({
      title: "仪表盘区分精确/估算",
      description: "开启后，仪表盘「总 Tokens」卡片将拆分展示「精确值（来自 API 响应 usage 字段）」与「启发式估算」各自的 Token 量，便于评估统计可信度。仅 v1.4.19 及以后新增的记录可区分；旧版本记录无此标记，统一计入估算。",
      createActionElement: () => this.createCheckbox("dashboardSplitExactEstimate", s.dashboardSplitExactEstimate ?? false),
    });

    // ─── 跨端统计合并 ───
    setting.addItem({
      title: "跨端统计合并",
      description: "开启后，各端（电脑 / 鸿蒙 / 浏览器）通过思源数据同步共享同一套 API Key 时，自动按记录合并多方 Token 用量，汇总到每一端；关闭则仅统计本端。",
      createActionElement: () => this.createCheckbox("syncStatistics", s.syncStatistics ?? true),
    });

    setting.addItem({
      title: "立即同步统计",
      description: "触发思源云同步（通过官方内核 API /api/sync/performSync）并合并其他端的统计记录（例如手机端一键拉取电脑端历史数据），不受上方开关限制。需先在思源「设置 - 关于 - 云端」中配置并启用云同步（已登录 S3/WebDAV 等存储服务）。若思源未配置云同步，则只合并本地已有数据。",
      actionElement: this.createButton("立即同步", () => this.handleManualSync()),
    });

    // ─── 仪表盘免责提示 ───
    setting.addItem({
      title: "仪表盘免责提示",
      description: "本插件统计数据与各 API 供应商官方账单可能存在误差（原因包括：部分请求未被拦截、单价配置偏差、启发式估算精度限制、云同步合并延迟等），请以 API 供应商的统计及账单为准。开启时，仪表盘面板顶部会常驻显示橙色免责横幅；关闭后横幅不再显示。注意：仪表盘内的「本次不再提示」按钮仅隐藏当前会话（重启思源后自动恢复），而此处开关为永久关闭。",
      createActionElement: () => {
        const cb = this.createCheckbox("showDisclaimer", s.showDisclaimer ?? true);
        cb.addEventListener("change", () => {
          if (!cb.checked) {
            confirm(
              "关闭免责提示",
              "关闭后仪表盘将不再显示本免责提示。\n\n本插件统计数据仅供参考，实际用量与费用请以各 API 供应商的官方账单为准。使用本插件即代表您认可统计结果可能存在误差。\n\n是否确认关闭？",
              () => {
                this.store.updateSettings({ showDisclaimer: false });
              },
              () => {
                cb.checked = true;
              }
            );
          } else {
            this.store.updateSettings({ showDisclaimer: true });
          }
        });
        return cb;
      },
    });

    // ─── 数据管理 ───
    setting.addItem({
      title: "导出统计数据",
      description: "将所有统计数据导出为 JSON 文件",
      actionElement: this.createButton("导出", () => this.exportData()),
    });

    setting.addItem({
      title: "清除调用记录",
      description: "删除所有 Token 调用记录，但保留 API Key 配置",
      actionElement: this.createButton("清除记录", () => this.clearRecords()),
    });

    setting.addItem({
      title: "重置全部数据",
      description: "清除所有调用记录并恢复默认设置，API Key 配置保留不变",
      actionElement: this.createButton("重置", () => this.resetAll()),
    });

    // ─── 数据洞察（L2 护城河）───
    setting.addItem({
      title: "显示高级数据洞察",
      description: "总开关：关闭后仪表盘回归简洁核心视图，隐藏月末预测 / 异常检测 / 优化建议 / 笔记归因。需要时再打开。",
      createActionElement: () => this.createCheckbox("showAdvancedDashboard", s.showAdvancedDashboard !== false),
    });
    setting.addItem({
      title: "月末预测",
      description: "仪表盘展示「预计月末费用 / Token」及与全局限额的进度对比",
      createActionElement: () => this.createCheckbox("enableForecast", s.enableForecast !== false),
    });
    setting.addItem({
      title: "预测方法",
      description: "线性外推=按已用日均推算；最近趋势=按最近 N 日均值推算（更贴合近期变化）",
      createActionElement: () => {
        const select = document.createElement("select");
        select.className = "b3-select fn__size200";
        select.id = "tks-forecastMethod";
        const options: { value: string; label: string }[] = [
          { value: "recentTrend", label: "最近趋势（默认）" },
          { value: "linear", label: "线性外推" },
        ];
        for (const opt of options) {
          const el = document.createElement("option");
          el.value = opt.value;
          el.textContent = opt.label;
          if ((s.forecastMethod || "recentTrend") === opt.value) el.selected = true;
          select.appendChild(el);
        }
        return select;
      },
    });
    setting.addItem({
      title: "趋势窗口天数",
      description: "「最近趋势」方法使用的回溯天数（默认 7）",
      createActionElement: () => this.createNumberInput("forecastWindowDays", s.forecastWindowDays || 7, 1, 90, 1),
    });
    setting.addItem({
      title: "异常检测",
      description: "仪表盘列出用量离群日（Token / 费用 / 请求数突增）",
      createActionElement: () => this.createCheckbox("enableAnomaly", s.enableAnomaly !== false),
    });
    setting.addItem({
      title: "异常敏感度",
      description: "标准差倍数阈值，越大越宽松（默认 2.5，即超过均值 2.5 个标准差才报警）",
      createActionElement: () => this.createNumberInput("anomalySensitivity", s.anomalySensitivity || 2.5, 1.5, 6, 0.1),
    });
    setting.addItem({
      title: "异常回溯天数",
      description: "异常检测统计的回溯窗口（默认 30 天，至少 3 天）",
      createActionElement: () => this.createNumberInput("anomalyLookbackDays", s.anomalyLookbackDays || 30, 3, 365, 1),
    });
    setting.addItem({
      title: "优化建议",
      description: "仪表盘基于数据给出降本 / 提效建议（缓存命中率、估算占比、高价模型、用量集中等）",
      createActionElement: () => this.createCheckbox("enableSuggestions", s.enableSuggestions !== false),
    });
    setting.addItem({
      title: "笔记归因",
      description: "在高级视图中展示「按文档 Token 消耗」排行。数据采集始终后台进行（零额外成本），此开关仅控制是否显示面板。",
      createActionElement: () => this.createCheckbox("enableNoteAttribution", s.enableNoteAttribution !== false),
    });
    setting.addItem({
      title: "归因显示条数",
      description: "笔记归因排行展示 Top N 条（默认 10，替换原硬编码上限 10）",
      createActionElement: () => this.createNumberInput("attributionTopN", s.attributionTopN || 10, 1, 50, 1),
    });
    setting.addItem({
      title: "Token 数字格式",
      description: "仪表盘大数字显示方式：auto=自动用「万/亿」后缀（推荐，紧凑）；full=始终显示完整数字",
      createActionElement: () => {
        const sel = document.createElement("select");
        sel.id = "tks-tokenDisplayUnit";
        sel.className = "b3-select";
        ["auto", "full"].forEach((v) => {
          const opt = document.createElement("option");
          opt.value = v;
          opt.textContent = v === "auto" ? "自动（万/亿）" : "完整数字";
          if ((s.tokenDisplayUnit || "auto") === v) opt.selected = true;
          sel.appendChild(opt);
        });
        return sel;
      },
    });

    return setting;
  }

  private createCheckbox(id: string, checked: boolean): HTMLInputElement {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = `tks-${id}`;
    input.className = "b3-switch";
    input.checked = checked;
    return input;
  }

  private createButton(text: string, callback: () => void): HTMLButtonElement {
    const btn = document.createElement("button");
    btn.className = "b3-button b3-button--outline";
    btn.textContent = text;
    btn.style.fontSize = "14px";
    btn.addEventListener("click", callback);
    return btn;
  }

  /**
   * 自定义周期天数输入：单 Key / 全局 Token / 全局费用 三个重置周期共用同一天数。
   * 任一输入框改动会同步到另外两个，确保「选了自定义（天）」时一定有可填写的入口。
   */
  private createCustomDaysInput(id: string): HTMLInputElement {
    const input = document.createElement("input");
    input.type = "number";
    input.className = "b3-text-field fn__size200";
    input.id = id;
    input.value = String(this.store.getSettings().customResetDays || 30);
    input.min = "1";
    input.max = "365";
    input.step = "1";
    const ids = ["tks-customResetDays", "tks-globalQuotaResetDays", "tks-globalCostResetDays"];
    input.addEventListener("input", () => {
      const v = input.value;
      for (const other of ids) {
        if (other === id) continue;
        const el = document.getElementById(other) as HTMLInputElement | null;
        if (el && el.value !== v) el.value = v;
      }
    });
    return input;
  }

  private createNumberInput(id: string, value: number, min?: number, max?: number, step = 1): HTMLInputElement {
    const input = document.createElement("input");
    input.type = "number";
    input.className = "b3-text-field fn__size200";
    input.id = `tks-${id}`;
    input.value = String(value);
    if (min !== undefined) input.min = String(min);
    if (max !== undefined) input.max = String(max);
    input.step = String(step);
    return input;
  }

  /** 「立即同步」按钮回调：委托插件统一入口（云同步 + 合并 + 浮动反馈） */
  private async handleManualSync(): Promise<void> {
    const btn = document.activeElement as HTMLButtonElement | null;
    if (btn) {
      btn.disabled = true;
      btn.textContent = "同步中…";
    }
    try {
      if (!this.onManualSync) {
        showMessage("同步功能未就绪", 2000, "error");
        return;
      }
      await this.onManualSync();
    } catch {
      showMessage("同步失败，请确认思源数据同步已开启", 3000, "error");
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = "立即同步";
      }
    }
  }

  private saveGlobalSettings(): void {
    const get = (id: string) => (document.getElementById(`tks-${id}`) as HTMLInputElement)?.checked ?? false;
    const maxRecords = parseInt(
      (document.getElementById("tks-max-records") as HTMLInputElement)?.value || "5000",
      10
    );
    const quotaResetCycle = (document.getElementById("tks-quotaResetCycle") as HTMLSelectElement)?.value as QuotaResetCycle || "monthly";
    const globalQuotaLimit = parseInt(
      (document.getElementById("tks-globalQuotaLimit") as HTMLInputElement)?.value || "0",
      10
    ) || 0;
    const globalAlertThreshold = parseInt(
      (document.getElementById("tks-globalAlertThreshold") as HTMLInputElement)?.value || "0",
      10
    ) || 0;
    const globalQuotaResetCycle = (document.getElementById("tks-globalQuotaResetCycle") as HTMLSelectElement)?.value as QuotaResetCycle || "monthly";

    // 全局偏移量（手动校准）
    const getNum = (id: string) => parseInt(
      (document.getElementById(`tks-${id}`) as HTMLInputElement)?.value || "0",
      10
    ) || 0;
    const globalUsedTokensOffset = Math.max(0, getNum("globalUsedTokensOffset"));
    const globalUsedInputTokensOffset = Math.max(0, getNum("globalUsedInputTokensOffset"));
    const globalUsedOutputTokensOffset = Math.max(0, getNum("globalUsedOutputTokensOffset"));

    const globalCostLimit = parseFloat(
      (document.getElementById("tks-globalCostLimit") as HTMLInputElement)?.value || "0"
    ) || 0;
    const globalCostAlertThreshold = parseInt(
      (document.getElementById("tks-globalCostAlertThreshold") as HTMLInputElement)?.value || "0",
      10
    ) || 0;
    const globalCostResetCycle = (document.getElementById("tks-globalCostResetCycle") as HTMLSelectElement)?.value as QuotaResetCycle || "monthly";
    const globalUsedCostOffset = Math.max(
      0,
      parseFloat((document.getElementById("tks-globalUsedCostOffset") as HTMLInputElement)?.value || "0") || 0
    );
    const customResetDays = Math.max(1, getNum("customResetDays"));
    const diagnosticExportCount = Math.max(0, getNum("diagnosticExportCount"));

    const enableForecast = get("enableForecast");
    const forecastMethod = (document.getElementById("tks-forecastMethod") as HTMLSelectElement)?.value || "recentTrend";
    const forecastWindowDays = Math.max(1, getNum("forecastWindowDays"));
    const enableAnomaly = get("enableAnomaly");
    const anomalySensitivity = Math.max(1.5, parseFloat((document.getElementById("tks-anomalySensitivity") as HTMLInputElement)?.value || "2.5") || 2.5);
    const anomalyLookbackDays = Math.max(3, getNum("anomalyLookbackDays"));
    const enableSuggestions = get("enableSuggestions");
    const showAdvancedDashboard = get("showAdvancedDashboard");
    const enableNoteAttribution = get("enableNoteAttribution");
    const attributionTopN = Math.max(1, getNum("attributionTopN"));
    const tokenDisplayUnit = (document.querySelector("#tks-tokenDisplayUnit") as HTMLSelectElement)?.value || "auto";

    const shouldResetGlobalAlert =
      globalQuotaLimit !== this.store.getSettings().globalQuotaLimit ||
      globalAlertThreshold !== this.store.getSettings().globalAlertThreshold;

    this.store.updateSettings({
      matchByUrl: get("matchByUrl"),
      interceptExternalAPIs: get("interceptExternalAPIs"),
      blockOnQuotaExceeded: get("blockOnQuotaExceeded"),
      quotaResetCycle,
      abortStreamOnExceeded: get("abortStreamOnExceeded"),
      showNotifications: get("showNotifications"),
      showTopBarBadge: get("showTopBarBadge"),
      debugLogging: get("debugLogging"),
      maxRecords: isNaN(maxRecords) ? 5000 : Math.max(100, Math.min(50000, maxRecords)),
      globalQuotaLimit: Math.max(0, globalQuotaLimit),
      globalAlertThreshold: Math.max(0, Math.min(100, globalAlertThreshold)),
      globalQuotaResetCycle,
      globalUsedTokensOffset,
      globalUsedInputTokensOffset,
      globalUsedOutputTokensOffset,
      globalCostLimit: Math.max(0, globalCostLimit),
      globalCostAlertThreshold: Math.max(0, Math.min(100, globalCostAlertThreshold)),
      globalCostResetCycle,
      globalUsedCostOffset,
      customResetDays,
      syncStatistics: get("syncStatistics"),
      showDisclaimer: get("showDisclaimer"),
      dashboardSplitExactEstimate: get("dashboardSplitExactEstimate"),
      diagnosticExportCount,
      enableForecast,
      forecastMethod: forecastMethod as "linear" | "recentTrend",
      forecastWindowDays,
      enableAnomaly,
      anomalySensitivity,
      anomalyLookbackDays,
      enableSuggestions,
      showAdvancedDashboard,
      enableNoteAttribution,
      attributionTopN,
      tokenDisplayUnit: tokenDisplayUnit as "auto" | "full",
    });

    if (shouldResetGlobalAlert) {
      this.keyManager.resetGlobalAlert();
    }

    const shouldResetCostAlert =
      globalCostLimit !== this.store.getSettings().globalCostLimit ||
      globalCostAlertThreshold !== this.store.getSettings().globalCostAlertThreshold ||
      globalCostResetCycle !== this.store.getSettings().globalCostResetCycle ||
      globalUsedCostOffset !== this.store.getSettings().globalUsedCostOffset;

    if (shouldResetCostAlert) {
      this.keyManager.resetGlobalCostAlert();
    }
  }

  /**
   * 云同步合并后，将最新设置回填到已打开的设置面板（若面板未打开则自动跳过）。
   * 若用户正在编辑某个字段（该字段获焦），则跳过该字段以免打断输入。
   */
  refreshFromStore(): void {
    const s = this.store.getSettings();
    const active = document.activeElement as HTMLElement | null;
    const isEditing = !!active && active.id?.startsWith("tks-");

    const setCheck = (id: string, val: boolean) => {
      if (isEditing && active!.id === `tks-${id}`) return;
      const el = document.getElementById(`tks-${id}`) as HTMLInputElement | null;
      if (el) el.checked = !!val;
    };
    const setVal = (id: string, val: string | number) => {
      if (isEditing && active!.id === `tks-${id}`) return;
      const el = document.getElementById(`tks-${id}`) as HTMLInputElement | null;
      if (el) el.value = String(val);
    };

    setCheck("matchByUrl", s.matchByUrl ?? true);
    setCheck("interceptExternalAPIs", s.interceptExternalAPIs);
    setCheck("blockOnQuotaExceeded", s.blockOnQuotaExceeded);
    setCheck("abortStreamOnExceeded", s.abortStreamOnExceeded);
    setCheck("showNotifications", s.showNotifications);
    setCheck("showTopBarBadge", s.showTopBarBadge);
    setCheck("debugLogging", s.debugLogging ?? false);
    setCheck("syncStatistics", s.syncStatistics ?? true);
    setCheck("showDisclaimer", s.showDisclaimer ?? true);
    setCheck("dashboardSplitExactEstimate", s.dashboardSplitExactEstimate ?? false);
    setVal("max-records", s.maxRecords);
    setVal("globalQuotaLimit", s.globalQuotaLimit);
    setVal("globalAlertThreshold", s.globalAlertThreshold);
    setVal("globalUsedTokensOffset", s.globalUsedTokensOffset);
    setVal("globalUsedInputTokensOffset", s.globalUsedInputTokensOffset);
    setVal("globalUsedOutputTokensOffset", s.globalUsedOutputTokensOffset);
    setVal("globalCostLimit", s.globalCostLimit);
    setVal("globalCostAlertThreshold", s.globalCostAlertThreshold);
    setVal("globalUsedCostOffset", s.globalUsedCostOffset);
    setVal("customResetDays", s.customResetDays);
    setVal("globalQuotaResetDays", s.customResetDays);
    setVal("globalCostResetDays", s.customResetDays);
    setVal("diagnosticExportCount", s.diagnosticExportCount ?? 50);
    setCheck("enableForecast", s.enableForecast !== false);
    setVal("forecastMethod", s.forecastMethod || "recentTrend");
    setVal("forecastWindowDays", s.forecastWindowDays || 7);
    setCheck("enableAnomaly", s.enableAnomaly !== false);
    setVal("anomalySensitivity", s.anomalySensitivity || 2.5);
    setVal("anomalyLookbackDays", s.anomalyLookbackDays || 30);
    setCheck("enableSuggestions", s.enableSuggestions !== false);
    setCheck("showAdvancedDashboard", s.showAdvancedDashboard !== false);
    setCheck("enableNoteAttribution", s.enableNoteAttribution !== false);
    setVal("attributionTopN", s.attributionTopN || 10);
    const tduSel = document.getElementById("tks-tokenDisplayUnit") as HTMLSelectElement | null;
    if (tduSel) tduSel.value = s.tokenDisplayUnit || "auto";
    if (!(isEditing && active!.id === "tks-quotaResetCycle")) {
      const cyc = document.getElementById("tks-quotaResetCycle") as HTMLSelectElement | null;
      if (cyc) cyc.value = s.quotaResetCycle;
    }
    if (!(isEditing && active!.id === "tks-globalQuotaResetCycle")) {
      const gcyc = document.getElementById("tks-globalQuotaResetCycle") as HTMLSelectElement | null;
      if (gcyc) gcyc.value = s.globalQuotaResetCycle;
    }
    if (!(isEditing && active!.id === "tks-globalCostResetCycle")) {
      const ccyc = document.getElementById("tks-globalCostResetCycle") as HTMLSelectElement | null;
      if (ccyc) ccyc.value = s.globalCostResetCycle;
    }
  }

  /** 确保设置面板 dialog 可滚动 */
  private ensureDialogScrollable(): void {
    // 通过 id 前缀找到我们的设置项，向上找到 dialog 容器并设置滚动
    const marker = document.getElementById("tks-matchByUrl") || document.getElementById("tks-interceptExternalAPIs");
    if (!marker) return;
    const dialog = marker.closest(".b3-dialog") as HTMLElement | null;
    if (!dialog) return;
    const body = dialog.querySelector(".b3-dialog__body") as HTMLElement | null;
    if (!body) return;
    dialog.style.maxHeight = "85vh";
    body.style.maxHeight = "calc(85vh - 120px)";
    body.style.overflowY = "auto";
  }

  /** 检测是否为移动端（含鸿蒙 NEXT） */
  private isMobile(): boolean {
    const frontend = getFrontend();
    return frontend === "mobile" || frontend === "browser-mobile";
  }

  // ─── 费用估算配置对话框 ───

  private openPriceEditor(): void {
    const s = this.store.getSettings();
    const mobile = this.isMobile();
    const dialog = new Dialog({
      title: "费用估算配置",
      width: mobile ? "95vw" : "640px",
      height: "auto",
      content: `<div id="tks-price-editor" class="tks-price-editor"></div>`,
    });

    setTimeout(() => this.renderPriceEditor(dialog, { ...s.modelPrices }, s.currency || "¥", (s.pricePacks || []).map((p) => ({ ...p, models: [...p.models] }))), 50);
  }

  private renderPriceEditor(
    dialog: Dialog,
    prices: Record<string, ModelPrice>,
    currency: string,
    packs: PricePack[]
  ): void {
    const container = dialog.element.querySelector("#tks-price-editor") as HTMLElement;
    if (!container) return;
    const recalc = this.store.getSettings().recalcCostOnPriceChange !== false;
    const packCountCache = this.store.getSettings().packCountCacheRead !== false;
    const countReasoning = this.store.getSettings().countReasoningInOutput !== false;

    const makeRow = (model: string, input: number, output: number, cacheRead?: number, cacheCreation?: number): string => `
      <div class="tks-price-row">
        <input type="text" class="b3-text-field tks-price-model" value="${esc(model)}" placeholder="模型名（如 gpt-4o）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-input" value="${esc(String(input))}" placeholder="输入/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-cache" value="${esc(String(cacheRead ?? 0))}" placeholder="缓存命中/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-cachecreate" value="${esc(String(cacheCreation ?? 0))}" placeholder="缓存写入/1K" title="缓存写入（如 Anthropic Prompt Cache 创建）单价，按更高倍率计费" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-output" value="${esc(String(output))}" placeholder="输出/1K" />
        <button class="b3-button b3-button--small b3-button--danger tks-price-del" title="删除">✕</button>
      </div>
    `;

    const makePackRow = (pack: PricePack): string => {
      const usage = this.store.getPackUsage(pack);
      const total = pack.totalTokens || 0;
      let usageText: string;
      if (total > 0) {
        const remaining = Math.max(0, total - usage.usedTokens);
        usageText = `已用 ${usage.usedTokens.toLocaleString()} / 总量 ${total.toLocaleString()}（剩余 ${remaining.toLocaleString()}）`;
      } else {
        usageText = `已用 ${usage.usedTokens.toLocaleString()}（总量不限）`;
      }
      return `
      <div class="tks-pack-row" data-pack-id="${esc(pack.id)}">
        <input type="text" class="b3-text-field tks-pack-name" value="${esc(pack.name)}" placeholder="资源包名（如 通义千问）" />
        <input type="number" step="1" min="0" class="b3-text-field tks-pack-total" value="${esc(String(pack.totalTokens || 0))}" placeholder="总 Tokens（0 不限）" />
        <input type="number" step="0.01" min="0" class="b3-text-field tks-pack-totalprice" value="${esc(String(pack.totalPrice ?? ""))}" placeholder="打包总价（¥）" title="填入后启用打包价模式：费用 = 已用 tokens / 总 tokens × 总价格，忽略下方逐项单价。留空或 0 则使用逐项单价模式。" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-input" value="${esc(String(pack.input))}" placeholder="输入单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-cache" value="${esc(String(pack.cacheRead ?? 0))}" placeholder="缓存命中单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-cachecreate" value="${esc(String(pack.cacheCreation ?? 0))}" placeholder="缓存写入/1K" title="缓存写入（如 Anthropic Prompt Cache 创建）单价，按更高倍率计费" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-output" value="${esc(String(pack.output))}" placeholder="输出单价/1K" />
        <input type="text" class="b3-text-field tks-pack-models" value="${esc((pack.models || []).join(", "))}" placeholder="涵盖模型，逗号分隔" />
        <button class="b3-button b3-button--small b3-button--danger tks-pack-del" title="删除">✕</button>
        <div class="tks-pack-usage">${esc(usageText)}</div>
      </div>
    `;
    };

    const initialRows = Object.entries(prices)
      .map(([m, p]) => makeRow(m, p.input, p.output, p.cacheRead, p.cacheCreation))
      .join("");

    const initialPacks = packs.map((p) => makePackRow(p)).join("");

    container.innerHTML = `
      <div class="tks-price-warning">
        ⚠️ 费用估算完全依赖下方单价与资源包配置。<b>填错单价（数量级）、模型名与请求实际模型不匹配、或资源包计价模式选错，都会直接放大费用估算误差</b>。本插件数据为估算参考，请以 API 服务商官方账单为准；使用前请阅读 README「统计精度与免责声明」章节。
      </div>
      <div class="tks-price-head">
        <label>货币类型</label>
        <select id="tks-price-currency" class="b3-select fn__size200">
          <option value="¥" ${currency === "¥" ? "selected" : ""}>¥ (人民币)</option>
          <option value="$" ${currency === "$" ? "selected" : ""}>$ (美元)</option>
        </select>
      </div>
      <div class="tks-price-opt">
        <label class="tks-price-opt-label"><input type="checkbox" id="tks-price-recalc" ${recalc ? "checked" : ""} /> 单价变更后自动重算历史费用</label>
        <span class="tks-price-opt-hint">开启后仪表盘与记录费用随单价实时更新；关闭则每条记录的费用在生成时固定，不再随单价变化。</span>
      </div>
      <div class="tks-price-opt">
        <label class="tks-price-opt-label"><input type="checkbox" id="tks-price-packcache" ${packCountCache ? "checked" : ""} /> 资源包模式下缓存命中计入费用</label>
        <span class="tks-price-opt-hint">默认开启。关闭后，由资源包（逐项或打包价模式）匹配到的请求，其缓存命中 tokens 不再计入费用估算，可避免「大量命中缓存」场景下费用被高估；单模型单价配置不受此开关影响。</span>
      </div>
      <div class="tks-price-opt">
        <label class="tks-price-opt-label"><input type="checkbox" id="tks-price-reasoning" ${countReasoning ? "checked" : ""} /> 推理 token 计入输出与费用</label>
        <span class="tks-price-opt-hint">默认开启。开启时输出量与费用按 completion_tokens 全额计（含推理，与绝大多数商家计费口径一致）；关闭后，可计费输出将扣除推理（reasoning/thinking）token 部分，适用于推理 token 单独计费或免费的商家。仪表盘最近请求表会标注每条记录的「含推理」token 数，便于直观区分偏差。</span>
      </div>
      <div class="tks-price-section-title">按模型单价（模型名不区分大小写，保存时自动归一化为小写）</div>
      <div class="tks-price-header">
        <span class="tks-price-hd-model">模型名称</span>
        <span class="tks-price-hd-input">输入/1K</span>
        <span class="tks-price-hd-cache">缓存命中/1K</span>
        <span class="tks-price-hd-cachecreate">缓存写入/1K</span>
        <span class="tks-price-hd-output">输出/1K</span>
        <span></span>
      </div>
      <div class="tks-price-list" id="tks-price-list">${initialRows || '<div class="tks-price-empty">尚未配置任何模型单价</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-price-add">+ 添加模型</button>
      </div>
      <div class="tks-price-section-title">资源包（一个资源包可涵盖多个模型；支持两种计价模式：① 逐项单价（输入/缓存命中/输出分别设每 1K 价格）；② 打包总价（填「总价格 + 总 Tokens」，系统自动折算等效单价，适用于按量计费的套餐））</div>
      <div class="tks-pack-header">
        <span class="tks-pack-hd-name">名称</span>
        <span class="tks-pack-hd-total">总 Tokens</span>
        <span class="tks-pack-hd-totalprice">打包总价</span>
        <span class="tks-pack-hd-input">输入/1K</span>
        <span class="tks-pack-hd-cache">缓存命中/1K</span>
        <span class="tks-pack-hd-cachecreate">缓存写入/1K</span>
        <span class="tks-pack-hd-output">输出/1K</span>
        <span class="tks-pack-hd-models">涵盖模型</span>
        <span></span>
      </div>
      <div class="tks-pack-list" id="tks-pack-list">${initialPacks || '<div class="tks-price-empty">尚未配置任何资源包</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-pack-add">+ 添加资源包</button>
        <span style="flex:1"></span>
        <button class="b3-button b3-button--text" id="tks-price-export">📤 导出配置</button>
        <button class="b3-button b3-button--text" id="tks-price-import">📥 导入配置</button>
        <button class="b3-button b3-button--outline" id="tks-price-save">保存</button>
      </div>
    `;

    const listEl = container.querySelector("#tks-price-list") as HTMLElement;
    const packListEl = container.querySelector("#tks-pack-list") as HTMLElement;

    const bindRow = (row: HTMLElement) => {
      row.querySelector(".tks-price-del")?.addEventListener("click", () => {
        row.remove();
        if (listEl.querySelectorAll(".tks-price-row").length === 0) {
          listEl.innerHTML = '<div class="tks-price-empty">尚未配置任何模型单价</div>';
        }
      });
    };

    listEl.querySelectorAll(".tks-price-row").forEach((r) => bindRow(r as HTMLElement));

    container.querySelector("#tks-price-add")?.addEventListener("click", () => {
      const empty = listEl.querySelector(".tks-price-empty");
      if (empty) empty.remove();
      listEl.insertAdjacentHTML("beforeend", makeRow("", 0, 0, 0));
      bindRow(listEl.lastElementChild as HTMLElement);
    });

    const bindPackRow = (row: HTMLElement) => {
      row.querySelector(".tks-pack-del")?.addEventListener("click", () => {
        row.remove();
        if (packListEl.querySelectorAll(".tks-pack-row").length === 0) {
          packListEl.innerHTML = '<div class="tks-price-empty">尚未配置任何资源包</div>';
        }
      });
    };

    packListEl.querySelectorAll(".tks-pack-row").forEach((r) => bindPackRow(r as HTMLElement));

    container.querySelector("#tks-pack-add")?.addEventListener("click", () => {
      const empty = packListEl.querySelector(".tks-price-empty");
      if (empty) empty.remove();
      const newPack: PricePack = {
        id: `pack-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
        name: "",
        totalTokens: 0,
        input: 0,
        output: 0,
        models: [],
      };
      packListEl.insertAdjacentHTML("beforeend", makePackRow(newPack));
      bindPackRow(packListEl.lastElementChild as HTMLElement);
    });

    container.querySelector("#tks-price-save")?.addEventListener("click", () => {
      const finalPrices: Record<string, ModelPrice> = {};
      listEl.querySelectorAll(".tks-price-row").forEach((row) => {
        const model = ((row.querySelector(".tks-price-model") as HTMLInputElement)?.value || "")
          .toLowerCase().trim().replace(/[\s\-_]+/g, "");
        const input = parseFloat((row.querySelector(".tks-price-input") as HTMLInputElement)?.value || "0") || 0;
        const cacheRead = parseFloat((row.querySelector(".tks-price-cache") as HTMLInputElement)?.value || "0") || 0;
        const cacheCreation = parseFloat((row.querySelector(".tks-price-cachecreate") as HTMLInputElement)?.value || "0") || 0;
        const output = parseFloat((row.querySelector(".tks-price-output") as HTMLInputElement)?.value || "0") || 0;
        if (model) finalPrices[model] = { input, output, ...(cacheRead > 0 ? { cacheRead } : {}), ...(cacheCreation > 0 ? { cacheCreation } : {}) };
      });
      const finalPacks: PricePack[] = [];
      packListEl.querySelectorAll(".tks-pack-row").forEach((row) => {
        const id = (row as HTMLElement).dataset.packId || `pack-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
        const name = ((row.querySelector(".tks-pack-name") as HTMLInputElement)?.value || "").trim();
        const totalTokens = parseInt((row.querySelector(".tks-pack-total") as HTMLInputElement)?.value || "0", 10) || 0;
        const totalPrice = parseFloat((row.querySelector(".tks-pack-totalprice") as HTMLInputElement)?.value || "0") || 0;
        const input = parseFloat((row.querySelector(".tks-pack-input") as HTMLInputElement)?.value || "0") || 0;
        const cacheRead = parseFloat((row.querySelector(".tks-pack-cache") as HTMLInputElement)?.value || "0") || 0;
        const cacheCreation = parseFloat((row.querySelector(".tks-pack-cachecreate") as HTMLInputElement)?.value || "0") || 0;
        const output = parseFloat((row.querySelector(".tks-pack-output") as HTMLInputElement)?.value || "0") || 0;
        const models = ((row.querySelector(".tks-pack-models") as HTMLInputElement)?.value || "")
          .split(/[,，]/)
          .map((x) => x.toLowerCase().trim().replace(/[\s\-_]+/g, ""))
          .filter(Boolean);
        if (name || models.length > 0) {
          finalPacks.push({ id, name, totalTokens, ...(totalPrice > 0 ? { totalPrice } : {}), input, output, ...(cacheRead > 0 ? { cacheRead } : {}), ...(cacheCreation > 0 ? { cacheCreation } : {}), models });
        }
      });
      const cur = (container.querySelector("#tks-price-currency") as HTMLSelectElement)?.value || "¥";
      const recalc = (container.querySelector("#tks-price-recalc") as HTMLInputElement)?.checked ?? true;
      const packCountCache = (container.querySelector("#tks-price-packcache") as HTMLInputElement)?.checked ?? true;
      const countReasoning = (container.querySelector("#tks-price-reasoning") as HTMLInputElement)?.checked ?? true;
      this.store.updateSettings({ currency: cur, modelPrices: finalPrices, pricePacks: finalPacks, recalcCostOnPriceChange: recalc, packCountCacheRead: packCountCache, countReasoningInOutput: countReasoning });
      this.store.save();
      dialog.destroy();
      showMessage("费用配置已保存", 2000, "info");
    });

    container.querySelector("#tks-price-export")?.addEventListener("click", () => this.exportPriceConfig());
    container.querySelector("#tks-price-import")?.addEventListener("click", () => this.importPriceConfig(dialog));
  }

  /** 导出费用估算配置（货币 / 单价变更重算开关 / 模型单价 / 资源包）为 JSON 文件 */
  private exportPriceConfig(): void {
    const s = this.store.getSettings();
    const payload = JSON.stringify(
      {
        version: "1.3.0",
        exportedAt: Date.now(),
        currency: s.currency || "¥",
        recalcCostOnPriceChange: s.recalcCostOnPriceChange !== false,
        modelPrices: s.modelPrices || {},
        pricePacks: s.pricePacks || [],
      },
      null,
      2
    );
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `siyuan-token-stats-prices-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1000);
    showMessage("费用配置已导出", 2000, "info");
  }

  /** 从 JSON 文件导入费用估算配置，载入到编辑器供确认后保存（不直接覆盖） */
  private importPriceConfig(dialog: Dialog): void {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.style.display = "none";
    input.addEventListener("change", async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        const modelPrices =
          parsed && parsed.modelPrices && typeof parsed.modelPrices === "object" ? parsed.modelPrices : {};
        const pricePacks = Array.isArray(parsed?.pricePacks) ? parsed.pricePacks : [];
        const currency = typeof parsed?.currency === "string" ? parsed.currency : this.store.getSettings().currency || "¥";
        const recalc = typeof parsed?.recalcCostOnPriceChange === "boolean" ? parsed.recalcCostOnPriceChange : true;
        const packs = pricePacks.map((p: any) => ({
          ...p,
          models: Array.isArray(p?.models) ? [...p.models] : [],
        }));
        // 重新渲染编辑器，载入导入配置；recalc 勾选框按导入值设置
        this.renderPriceEditor(dialog, { ...modelPrices }, currency, packs);
        setTimeout(() => {
          const recEl = dialog.element.querySelector("#tks-price-recalc") as HTMLInputElement | null;
          if (recEl) recEl.checked = recalc;
        }, 10);
        showMessage("已载入导入的费用配置，请检查后点击保存", 2000, "info");
      } catch (err: any) {
        console.error("[TokenStats] Import price config failed:", err);
        showMessage("导入失败：" + (err?.message || "文件格式不正确"), 3000, "error");
      }
    });
    document.body.appendChild(input);
    input.click();
    setTimeout(() => document.body.removeChild(input), 0);
  }

  // ─── API Key 管理对话框 ───

  private openKeyManager(): void {
    const mobile = this.isMobile();
    const dialog = new Dialog({
      title: "API Key 管理",
      width: mobile ? "95vw" : "750px",
      height: mobile ? "80vh" : "500px",
      content: `<div id="tks-key-mgr" class="tks-key-mgr"></div>`,
    });

    setTimeout(() => this.renderKeyList(dialog), 50);
  }

  private renderKeyList(dialog: Dialog): void {
    const container = dialog.element.querySelector("#tks-key-mgr") as HTMLElement;
    if (!container) return;

    const keys = this.store.getApiKeys();

    container.innerHTML = `
      <div class="tks-key-toolbar">
        <button class="b3-button b3-button--text" id="tks-add-key">+ 添加 API Key</button>
        <button class="b3-button b3-button--text" id="tks-export-keys">📤 导出</button>
        <button class="b3-button b3-button--text" id="tks-import-keys">📥 导入</button>
        <span class="tks-key-hint">共 ${keys.length} 个 Key</span>
      </div>
      <div class="tks-key-list" id="tks-key-list-items"></div>
    `;

    const listEl = container.querySelector("#tks-key-list-items") as HTMLElement;

    for (const key of keys) {
      const usage = this.keyManager.getKeyUsage(key.id);
      const usagePercent = key.quotaLimit > 0
        ? Math.min(100, (usage.totalTokens / key.quotaLimit) * 100)
        : 0;

      const item = document.createElement("div");
      item.className = "tks-key-item";
      item.innerHTML = `
        <div class="tks-key-info">
          <div class="tks-key-name">
            ${this.providerIcon(key.provider)} ${esc(key.name)}
            ${!key.enabled ? '<span class="tks-badge tks-badge-off">已禁用</span>' : ""}
          </div>
          <div class="tks-key-detail">
            <span class="tks-key-masked">${esc(key.keyMasked)}</span>
            ${key.provider ? `<span class="tks-key-provider">${esc(key.provider)}</span>` : ""}
            ${key.baseUrl ? `<span class="tks-key-url" title="${esc(key.baseUrl)}">${esc(key.baseUrl)}</span>` : ""}
          </div>
          <div class="tks-key-quota">
            <div class="tks-quota-bar">
              <div class="tks-quota-fill ${usagePercent >= (key.alertThreshold || 100) ? "tks-quota-alert" : ""}"
                   style="width: ${usagePercent}%"></div>
            </div>
            <span class="tks-quota-text">
              ${usage.totalTokens.toLocaleString()}${key.quotaLimit > 0 ? " / " + key.quotaLimit.toLocaleString() : ""} tokens
              ${key.alertThreshold > 0 ? `· 阈值 ${key.alertThreshold}%` : ""}
            </span>
          </div>
        </div>
        <div class="tks-key-actions">
          <button class="b3-button b3-button--small" data-action="edit" data-id="${esc(key.id)}">编辑</button>
          <button class="b3-button b3-button--small b3-button--danger" data-action="delete" data-id="${esc(key.id)}">删除</button>
        </div>
      `;
      listEl.appendChild(item);
    }

    // 绑定事件
    container.querySelector("#tks-add-key")?.addEventListener("click", () => {
      this.openKeyEditor(dialog, null);
    });

    container.querySelector("#tks-export-keys")?.addEventListener("click", () => {
      this.exportKeys();
    });

    container.querySelector("#tks-import-keys")?.addEventListener("click", () => {
      this.importKeys(dialog);
    });

    container.querySelectorAll("[data-action]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLElement;
        const action = target.dataset.action;
        const id = target.dataset.id;
        if (action === "edit") {
          const key = this.store.getApiKey(id!);
          if (key) this.openKeyEditor(dialog, key);
        } else if (action === "delete") {
          confirm("删除 API Key", `确定删除此 API Key 吗？相关统计记录将保留。`, () => {
            this.store.deleteApiKey(id!);
            this.keyManager.resetAlert(id!);
            this.renderKeyList(dialog);
            showMessage("已删除", 2000, "info");
          });
        }
      });
    });
  }

  private openKeyEditor(parentDialog: Dialog, key: ApiKeyConfig | null): void {
    const isEdit = !!key;
    const mobile = this.isMobile();
    const dialog = new Dialog({
      title: isEdit ? "编辑 API Key" : "添加 API Key",
      width: mobile ? "92vw" : "500px",
      height: "auto",
      content: `
        <div class="tks-key-editor">
          <div class="tks-form-row">
            <label>名称</label>
            <input type="text" id="tke-name" class="b3-text-field" value="${esc(key?.name || "")}" placeholder="例如：我的 OpenAI Key" />
          </div>
          <div class="tks-form-row">
            <label>API Key</label>
            <input type="password" id="tke-key" class="b3-text-field" value="" placeholder="sk-..." />
            <div class="tks-form-hint">用于匹配请求头中的 Authorization / x-api-key；编辑时留空则保留现有密钥，仅按 URL 匹配时可不填</div>
          </div>
          <div class="tks-form-row">
            <label>提供商名称</label>
            <input type="text" id="tke-provider" class="b3-text-field" value="${esc(key?.provider || "")}" list="tke-provider-list" placeholder="例如：OpenAI、DeepSeek、华为云、SiYuan" />
            <datalist id="tke-provider-list">
              <option value="OpenAI" />
              <option value="Anthropic" />
              <option value="DeepSeek" />
              <option value="SiliconFlow" />
              <option value="华为云" />
              <option value="SiYuan" />
              <option value="自定义" />
            </datalist>
            <div class="tks-form-hint">仅用于显示，可任意填写</div>
          </div>
          <div class="tks-form-row">
            <label>API Base URL</label>
            <input type="text" id="tke-url" class="b3-text-field" value="${esc(key?.baseUrl || "")}" placeholder="例如：https://api.openai.com/v1/chat/completions，或 /api/ai/" />
            <div class="tks-form-hint">用于 URL 匹配。可填完整 URL、域名或路径（如 /api/ai/）。留空则仅按 Key 匹配。</div>
          </div>
          <div class="tks-form-row">
            <label>关联模型</label>
            <input type="text" id="tke-models" class="b3-text-field" value="${esc(key?.models ? key.models.join(", ") : "")}" placeholder="例如：Qwen/Qwen3-8B, sensenova-6.7-flash-lite" />
            <div class="tks-form-hint">多个模型用逗号分隔。当多个 Key 使用相同 Base URL 时，按请求模型匹配到对应 Key</div>
          </div>
          <div class="tks-form-row tks-form-row-2col">
            <div>
              <label>Token 限额</label>
              <input type="number" id="tke-quota" class="b3-text-field" value="${key?.quotaLimit || 0}" min="0" step="1000" />
              <div class="tks-form-hint">0 = 不限</div>
            </div>
            <div>
              <label>提醒阈值 (%)</label>
              <input type="number" id="tke-threshold" class="b3-text-field" value="${key?.alertThreshold || 0}" min="0" max="100" step="5" />
              <div class="tks-form-hint">0 = 不提醒</div>
            </div>
          </div>
          <div class="tks-form-row tks-form-row-2col">
            <div>
              <label>已用 Token 校准</label>
              <input type="number" id="tke-usedTokensOffset" class="b3-text-field" value="${key?.usedTokensOffset ?? 0}" min="0" step="100" />
              <div class="tks-form-hint">从第三方平台导入的历史用量</div>
            </div>
            <div style="display:flex;gap:8px">
              <div style="flex:1">
                <label>已用输入</label>
                <input type="number" id="tke-usedInputTokensOffset" class="b3-text-field" value="${key?.usedInputTokensOffset ?? 0}" min="0" step="100" />
              </div>
              <div style="flex:1">
                <label>已用输出</label>
                <input type="number" id="tke-usedOutputTokensOffset" class="b3-text-field" value="${key?.usedOutputTokensOffset ?? 0}" min="0" step="100" />
              </div>
            </div>
          </div>
          <div class="tks-form-row tks-form-row-2col">
            <div>
              <label>状态</label>
              <select id="tke-enabled" class="b3-select">
                <option value="true" ${key?.enabled !== false ? "selected" : ""}>启用</option>
                <option value="false" ${key?.enabled === false ? "selected" : ""}>禁用</option>
              </select>
            </div>
          </div>
          <div class="tks-form-actions">
            <button class="b3-button b3-button--cancel" id="tke-cancel">取消</button>
            <button class="b3-button b3-button--text" id="tke-save">保存</button>
          </div>
        </div>
      `,
    });

    const el = dialog.element;

    // Provider 输入时自动填充默认 URL（仅在 URL 为空时）
    el.querySelector("#tke-provider")?.addEventListener("input", (e) => {
      const provider = (e.target as HTMLInputElement).value.trim();
      const urlInput = el.querySelector("#tke-url") as HTMLInputElement;
      if (!urlInput.value && provider) {
        urlInput.value = this.keyManager.getDefaultBaseUrl(provider);
      }
    });

    el.querySelector("#tke-cancel")?.addEventListener("click", () => dialog.destroy());

    el.querySelector("#tke-save")?.addEventListener("click", () => {
      const name = (el.querySelector("#tke-name") as HTMLInputElement).value.trim();
      const apiKey = (el.querySelector("#tke-key") as HTMLInputElement).value.trim();
      const provider = (el.querySelector("#tke-provider") as HTMLInputElement).value.trim();
      const baseUrl = (el.querySelector("#tke-url") as HTMLInputElement).value.trim();
      const models = (el.querySelector("#tke-models") as HTMLInputElement).value
        .split(/[,，]/)
        .map((x) => x.trim())
        .filter(Boolean);
      const quotaLimit = parseInt((el.querySelector("#tke-quota") as HTMLInputElement).value, 10) || 0;
      const alertThreshold = parseInt((el.querySelector("#tke-threshold") as HTMLInputElement).value, 10) || 0;
      const usedTokensOffset = Math.max(0, parseInt((el.querySelector("#tke-usedTokensOffset") as HTMLInputElement).value, 10) || 0);
      const usedInputTokensOffset = Math.max(0, parseInt((el.querySelector("#tke-usedInputTokensOffset") as HTMLInputElement).value, 10) || 0);
      const usedOutputTokensOffset = Math.max(0, parseInt((el.querySelector("#tke-usedOutputTokensOffset") as HTMLInputElement).value, 10) || 0);
      const enabled = (el.querySelector("#tke-enabled") as HTMLSelectElement).value === "true";

      if (!name) {
        showMessage("请输入名称", 3000, "error");
        return;
      }

      if (isEdit && key) {
        const updates: Partial<ApiKeyConfig> = {
          name,
          provider,
          baseUrl,
          models,
          quotaLimit,
          alertThreshold,
          usedTokensOffset,
          usedInputTokensOffset,
          usedOutputTokensOffset,
          enabled,
        };
        // 仅当填写了新密钥时才更新（留空则保留既有哈希，不覆盖）
        if (apiKey) {
          updates.keyFull = apiKey;
          updates.keyMasked = this.keyManager.maskKey(apiKey);
        }
        this.store.updateApiKey(key.id, updates);
        this.keyManager.resetAlert(key.id);
      } else {
        const newKey: ApiKeyConfig = {
          id: this.keyManager.generateKeyId(),
          name,
          keyFull: apiKey,
          keyMasked: this.keyManager.maskKey(apiKey),
          provider,
          baseUrl,
          models,
          quotaLimit,
          usedTokensOffset,
          usedInputTokensOffset,
          usedOutputTokensOffset,
          alertThreshold,
          enabled,
          createdAt: Date.now(),
        };
        this.store.addApiKey(newKey);
      }

      this.store.save();
      dialog.destroy();
      this.renderKeyList(parentDialog);
      showMessage("已保存", 2000, "info");
    });
  }

  /** 导出 API Key 列表为 JSON 文件 */
  private exportKeys(): void {
    // 导出时仅保留单向哈希，不携带明文密钥
    const keys = this.store.getApiKeys().map((k) => {
      const { keyFull, ...rest } = k;
      return rest;
    });
    const payload = JSON.stringify(
      { version: "1.3.0", exportedAt: Date.now(), apiKeys: keys },
      null,
      2
    );
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `siyuan-token-stats-keys-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1000);
    showMessage(`已导出 ${keys.length} 个 API Key`, 2000, "info");
  }

  /** 从 JSON 文件导入 API Key */
  private importKeys(parentDialog: Dialog): void {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.style.display = "none";

    input.addEventListener("change", async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        const keys = Array.isArray(parsed) ? parsed : parsed.apiKeys;
        if (!Array.isArray(keys))
          throw new Error("导入文件格式不正确，未找到 apiKeys 数组");

        let added = 0;
        let updated = 0;
        for (const k of keys) {
          if (!k || (!k.keyFull && !k.keyHash)) continue;
          const models = Array.isArray(k.models)
            ? k.models
            : typeof k.models === "string"
              ? k.models.split(/[,，]/).map((x: string) => x.trim()).filter(Boolean)
              : [];

          // 按单向哈希去重（兼容仅含 keyHash 的导出文件）
          const incomingHash = k.keyHash || (k.keyFull ? sha256Sync(k.keyFull) : "");
          const existing = incomingHash
            ? this.store.getApiKeys().find((d) => d.keyHash === incomingHash)
            : undefined;
          if (existing) {
            const updates: Partial<ApiKeyConfig> = {
              name: k.name || existing.name,
              provider: k.provider || existing.provider,
              baseUrl: k.baseUrl || existing.baseUrl,
              models: models.length ? models : (existing.models || []),
              quotaLimit: k.quotaLimit ?? existing.quotaLimit,
              alertThreshold: k.alertThreshold ?? existing.alertThreshold,
              enabled: k.enabled ?? existing.enabled,
            };
            // 导入文件若携带明文密钥，则一并更新哈希
            if (k.keyFull) {
              updates.keyFull = k.keyFull;
              updates.keyMasked = this.keyManager.maskKey(k.keyFull);
            }
            this.store.updateApiKey(existing.id, updates);
            updated++;
          } else {
            this.store.addApiKey({
              id: this.keyManager.generateKeyId(),
              name: k.name || "Imported Key",
              keyFull: k.keyFull || "",
              keyHash: k.keyHash || "",
              keyMasked: k.keyMasked || this.keyManager.maskKey(k.keyFull || "Imported"),
              provider: k.provider || "",
              baseUrl: k.baseUrl || "",
              models,
              quotaLimit: k.quotaLimit || 0,
              usedTokensOffset: k.usedTokensOffset || 0,
              usedInputTokensOffset: k.usedInputTokensOffset || 0,
              usedOutputTokensOffset: k.usedOutputTokensOffset || 0,
              alertThreshold: k.alertThreshold || 0,
              enabled: k.enabled !== false,
              createdAt: Date.now(),
            });
            added++;
          }
        }
        this.store.save();
        this.renderKeyList(parentDialog);
        const parts: string[] = [];
        if (added > 0) parts.push(`新增 ${added} 个`);
        if (updated > 0) parts.push(`更新 ${updated} 个`);
        showMessage(`导入成功：${parts.join("，") || "无变化"}`, 2000, "info");
      } catch (err: any) {
        console.error("[TokenStats] Import keys failed:", err);
        showMessage("导入失败：" + err.message, 3000, "error");
      }
    });

    document.body.appendChild(input);
    input.click();
    setTimeout(() => document.body.removeChild(input), 0);
  }

  private providerIcon(provider: string): string {
    const p = (provider || "").toLowerCase();
    const icons: Record<string, string> = {
      siyuan: "🐿️",
      openai: "🤖",
      anthropic: "🧠",
      deepseek: "🔍",
      siliconflow: "🌊",
      "华为云": "☁️",
      huawei: "☁️",
    };
    return icons[p] || "🔑";
  }

  private exportData(): void {
    const data = this.store.exportAll();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1000);
    showMessage("数据已导出", 2000, "info");
  }

  private clearRecords(): void {
    confirm("清除调用记录", "确定清除所有 Token 调用记录吗？API Key 配置将保留。此操作不可撤销。", () => {
      this.store.clearRecords();
      this.store.save();
      this.keyManager.clearAllAlerts();
      showMessage("记录已清除", 2000, "info");
    });
  }

  private resetAll(): void {
    confirm(
      "重置全部数据",
      "⚠️ 确定重置吗？所有调用记录将被清除，设置恢复默认值。API Key 配置保留不变，此操作不可撤销。",
      () => {
        this.store.clearRecords();
        this.store.resetSettings();
        this.keyManager.clearAllAlerts();
        showMessage("已重置", 2000, "info");
      }
    );
  }
}

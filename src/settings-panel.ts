/**
 * 设置面板
 * 使用 SiYuan 的 Setting 类构建设置页，API Key 管理使用自定义 Dialog。
 */
import { Setting, Dialog, showMessage, confirm, getFrontend } from "siyuan";
import type { Store } from "./store";
import type { KeyManager } from "./key-manager";
import type { ApiKeyConfig, QuotaResetCycle, ModelPrice, PricePack } from "./types";

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
      description: "设置每模型单价（每 1K tokens 的输入/输出价格）与资源包（一个包涵盖多个模型），仪表盘将显示估算费用",
      actionElement: this.createButton("配置", () => this.openPriceEditor()),
    });

    // ─── API Key 管理 ───
    setting.addItem({
      title: "API Key 管理",
      description: "添加、编辑、删除 API Key，为每个 Key 设置限额与提醒阈值",
      actionElement: this.createButton("管理 API Key", () => this.openKeyManager()),
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
    setVal("max-records", s.maxRecords);
    setVal("globalQuotaLimit", s.globalQuotaLimit);
    setVal("globalAlertThreshold", s.globalAlertThreshold);
    setVal("globalUsedTokensOffset", s.globalUsedTokensOffset);
    setVal("globalUsedInputTokensOffset", s.globalUsedInputTokensOffset);
    setVal("globalUsedOutputTokensOffset", s.globalUsedOutputTokensOffset);
    setVal("globalCostLimit", s.globalCostLimit);
    setVal("globalCostAlertThreshold", s.globalCostAlertThreshold);
    setVal("globalUsedCostOffset", s.globalUsedCostOffset);
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

    const makeRow = (model: string, input: number, output: number): string => `
      <div class="tks-price-row">
        <input type="text" class="b3-text-field tks-price-model" value="${esc(model)}" placeholder="模型名（如 gpt-4o）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-input" value="${esc(String(input))}" placeholder="输入/1K" />
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
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-input" value="${esc(String(pack.input))}" placeholder="输入单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-output" value="${esc(String(pack.output))}" placeholder="输出单价/1K" />
        <input type="text" class="b3-text-field tks-pack-models" value="${esc((pack.models || []).join(", "))}" placeholder="涵盖模型，逗号分隔" />
        <button class="b3-button b3-button--small b3-button--danger tks-pack-del" title="删除">✕</button>
        <div class="tks-pack-usage">${esc(usageText)}</div>
      </div>
    `;
    };

    const initialRows = Object.entries(prices)
      .map(([m, p]) => makeRow(m, p.input, p.output))
      .join("");

    const initialPacks = packs.map((p) => makePackRow(p)).join("");

    container.innerHTML = `
      <div class="tks-price-head">
        <label>货币类型</label>
        <select id="tks-price-currency" class="b3-select fn__size200">
          <option value="¥" ${currency === "¥" ? "selected" : ""}>¥ (人民币)</option>
          <option value="$" ${currency === "$" ? "selected" : ""}>$ (美元)</option>
        </select>
      </div>
      <div class="tks-price-hint">模型名不区分大小写，保存时自动归一化为小写。</div>
      <div class="tks-price-opt">
        <label class="tks-price-opt-label"><input type="checkbox" id="tks-price-recalc" ${recalc ? "checked" : ""} /> 单价变更后自动重算历史费用</label>
        <span class="tks-price-opt-hint">开启后仪表盘与记录费用随单价实时更新；关闭则每条记录的费用在生成时固定，不再随单价变化。</span>
      </div>
      <div class="tks-price-header">
        <span class="tks-price-hd-model">模型名称</span>
        <span class="tks-price-hd-input">输入/1K</span>
        <span class="tks-price-hd-output">输出/1K</span>
        <span></span>
      </div>
      <div class="tks-price-section-title">按模型单价</div>
      <div class="tks-price-list" id="tks-price-list">${initialRows || '<div class="tks-price-empty">尚未配置任何模型单价</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-price-add">+ 添加模型</button>
      </div>
      <div class="tks-price-section-title">资源包（一个资源包可涵盖多个模型，包内模型共用同一单价；「总 Tokens」填该资源包的总额度，0 表示不限，用于按总量计费的资源包）</div>
      <div class="tks-pack-header">
        <span class="tks-pack-hd-name">名称</span>
        <span class="tks-pack-hd-total">总 Tokens</span>
        <span class="tks-pack-hd-input">输入/1K</span>
        <span class="tks-pack-hd-output">输出/1K</span>
        <span class="tks-pack-hd-models">涵盖模型</span>
        <span></span>
      </div>
      <div class="tks-pack-list" id="tks-pack-list">${initialPacks || '<div class="tks-price-empty">尚未配置任何资源包</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-pack-add">+ 添加资源包</button>
        <button class="b3-button b3-button--text" id="tks-price-save">保存</button>
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
      listEl.insertAdjacentHTML("beforeend", makeRow("", 0, 0));
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
        const output = parseFloat((row.querySelector(".tks-price-output") as HTMLInputElement)?.value || "0") || 0;
        if (model) finalPrices[model] = { input, output };
      });
      const finalPacks: PricePack[] = [];
      packListEl.querySelectorAll(".tks-pack-row").forEach((row) => {
        const id = (row as HTMLElement).dataset.packId || `pack-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
        const name = ((row.querySelector(".tks-pack-name") as HTMLInputElement)?.value || "").trim();
        const totalTokens = parseInt((row.querySelector(".tks-pack-total") as HTMLInputElement)?.value || "0", 10) || 0;
        const input = parseFloat((row.querySelector(".tks-pack-input") as HTMLInputElement)?.value || "0") || 0;
        const output = parseFloat((row.querySelector(".tks-pack-output") as HTMLInputElement)?.value || "0") || 0;
        const models = ((row.querySelector(".tks-pack-models") as HTMLInputElement)?.value || "")
          .split(/[,，]/)
          .map((x) => x.toLowerCase().trim().replace(/[\s\-_]+/g, ""))
          .filter(Boolean);
        if (name || models.length > 0) {
          finalPacks.push({ id, name, totalTokens, input, output, models });
        }
      });
      const cur = (container.querySelector("#tks-price-currency") as HTMLSelectElement)?.value || "¥";
      const recalc = (container.querySelector("#tks-price-recalc") as HTMLInputElement)?.checked ?? true;
      this.store.updateSettings({ currency: cur, modelPrices: finalPrices, pricePacks: finalPacks, recalcCostOnPriceChange: recalc });
      this.store.save();
      dialog.destroy();
      showMessage("费用配置已保存", 2000, "info");
    });
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
            <input type="password" id="tke-key" class="b3-text-field" value="${esc(key?.keyFull || "")}" placeholder="sk-..." />
            <div class="tks-form-hint">用于匹配请求头中的 Authorization / x-api-key，留空则仅按 URL 匹配</div>
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
        this.store.updateApiKey(key.id, {
          name,
          keyFull: apiKey,
          keyMasked: this.keyManager.maskKey(apiKey),
          provider,
          baseUrl,
          models,
          quotaLimit,
          alertThreshold,
          usedTokensOffset,
          usedInputTokensOffset,
          usedOutputTokensOffset,
          enabled,
        });
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
    const keys = this.store.getApiKeys();
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
    }, 0);
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
          if (!k || !k.keyFull) continue;
          const models = Array.isArray(k.models)
            ? k.models
            : typeof k.models === "string"
              ? k.models.split(/[,，]/).map((x: string) => x.trim()).filter(Boolean)
              : [];

          const existing = this.store.getApiKeys().find((d) => d.keyFull === k.keyFull);
          if (existing) {
            this.store.updateApiKey(existing.id, {
              name: k.name || existing.name,
              provider: k.provider || existing.provider,
              baseUrl: k.baseUrl || existing.baseUrl,
              models: models.length ? models : (existing.models || []),
              quotaLimit: k.quotaLimit ?? existing.quotaLimit,
              alertThreshold: k.alertThreshold ?? existing.alertThreshold,
              enabled: k.enabled ?? existing.enabled,
            });
            updated++;
          } else {
            this.store.addApiKey({
              id: this.keyManager.generateKeyId(),
              name: k.name || "Imported Key",
              keyFull: k.keyFull,
              keyMasked: this.keyManager.maskKey(k.keyFull),
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
    a.click();
    URL.revokeObjectURL(url);
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

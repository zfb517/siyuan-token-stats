/**
 * SiYuan Token Statistics Plugin
 * 主入口 - 统计思源智能体及第三方插件的 Token 消耗
 *
 * 功能：
 * 1. 拦截 AI API 调用（SiYuan 内置 + 外部第三方）
 * 2. 提取/估算每次调用的 Token 用量
 * 3. 为每个 API Key 单独设置限额与提醒阈值
 * 4. 可视化仪表盘展示统计结果
 */
import { Plugin, showMessage, getFrontend } from "siyuan";
import cssText from "./style.css?raw";
import { Store } from "./store";
import { KeyManager } from "./key-manager";
import { TokenCounter } from "./token-counter";
import { Interceptor } from "./interceptor";
import { SettingsPanel } from "./settings-panel";
import { Dashboard } from "./dashboard";

const PLUGIN_ICON = `<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="iconTokenStats" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>
    <rect x="9.5" y="16" width="3" height="7" rx="0.8" fill="currentColor"/>
    <rect x="14.5" y="12" width="3" height="11" rx="0.8" fill="currentColor"/>
    <rect x="19.5" y="9" width="3" height="14" rx="0.8" fill="currentColor"/>
  </symbol>
</svg>`;

export default class TokenStatsPlugin extends Plugin {
  private store!: Store;
  private keyManager!: KeyManager;
  private tokenCounter!: TokenCounter;
  private interceptor!: Interceptor;
  private dashboard!: Dashboard;
  private settingsPanel!: SettingsPanel;
  private styleElement: HTMLStyleElement | null = null;
  private syncHandler: ((e: any) => void) | null = null;
  private mergeTimer: number | null = null;
  private merging = false;
  private topBarItem: HTMLElement | null = null;
  private badgeEl: HTMLElement | null = null;
  private badgeTimer: number | null = null;
  private lsHeartbeatTimer: number | null = null;

  async onload(): Promise<void> {
    console.log("[TokenStats] Plugin loading...");
    console.log(`[TokenStats] Frontend: ${getFrontend()}`);

    // 1. 注入样式
    this.styleElement = document.createElement("style");
    this.styleElement.id = "siyuan-token-stats-style";
    this.styleElement.textContent = cssText;
    document.head.appendChild(this.styleElement);

    // 2. 注册图标
    this.addIcons(PLUGIN_ICON);

    // 3. 初始化各模块
    this.store = new Store();
    await this.store.load();

    this.tokenCounter = new TokenCounter();
    this.keyManager = new KeyManager(this.store);
    this.interceptor = new Interceptor(this.store, this.keyManager, this.tokenCounter);
    this.dashboard = new Dashboard(this.store, this.keyManager);

    // 4. 设置阈值提醒回调
    this.interceptor.setThresholdCallback((_apiKeyId, message) => {
      const settings = this.store.getSettings();
      if (settings.showNotifications) {
        showMessage(message, 5000, "error");
      }
    });

    // 5. 安装网络拦截器
    this.interceptor.install();

    // 6. 顶栏按钮 → 打开仪表盘（并附加实时用量徽标）
    this.topBarItem = this.addTopBar({
      icon: "iconTokenStats",
      title: "Token 用量统计",
      position: "right",
      callback: () => {
        this.dashboard.show();
      },
    });
    this.initTopBarBadge();

    // 7. 设置面板
    this.settingsPanel = new SettingsPanel(this.store, this.keyManager);
    this.settingsPanel.onManualSync = () => this.manualSync();
    this.setting = this.settingsPanel.setting;

    // 8. 注册命令
    this.addCommand({
      langKey: "showTokenStats",
      langText: "打开 Token 用量统计",
      hotkey: "",
      callback: () => {
        this.dashboard.show();
      },
    });

    // 9. 监听云同步完成事件 — 合并多设备数据
    this.syncHandler = (e: any) => {
      const detailStr = typeof e?.detail === "string" ? e.detail : JSON.stringify(e?.detail ?? "");
      console.log("[TokenStats] Sync event received, merging data...", detailStr.substring(0, 100));
      // 延迟 1 秒等待思源完成文件同步写入
      setTimeout(() => this.mergeFromRemote(), 1000);
    };
    this.eventBus.on("sync-end", this.syncHandler);

    // 10. 云同步可能在插件加载前就已结束（尤其移动端/鸿蒙 NEXT 上），
    //     因此加载后延迟合并一次，并启动周期合并，确保设置/数据一定能跨端收敛。
    setTimeout(() => this.mergeFromRemote(), 3000);
    this.mergeTimer = window.setInterval(() => this.mergeFromRemote(), 60000);

    console.log("[TokenStats] Plugin loaded successfully.");

    // 11. localStorage 定期心跳：每 10 秒同步写一次 localStorage，
    //     确保即使异步保存被防抖/网络异常跳过，数据也不会丢失。
    this.lsHeartbeatTimer = window.setInterval(() => {
      this.store.saveToLocalStorage();
    }, 10000);
  }

  onunload(): void {
    console.log("[TokenStats] Plugin unloading...");

    // 停止周期合并
    if (this.mergeTimer !== null) {
      clearInterval(this.mergeTimer);
      this.mergeTimer = null;
    }

    // 停止顶栏徽标刷新定时器
    if (this.badgeTimer !== null) {
      clearInterval(this.badgeTimer);
      this.badgeTimer = null;
    }

    // 停止 localStorage 心跳
    if (this.lsHeartbeatTimer !== null) {
      clearInterval(this.lsHeartbeatTimer);
      this.lsHeartbeatTimer = null;
    }

    // 移除同步事件监听
    if (this.syncHandler) {
      this.eventBus.off("sync-end", this.syncHandler);
      this.syncHandler = null;
    }

    // 卸载拦截器
    this.interceptor?.uninstall();

    // 保存数据：按可靠性从高到低依次执行
    //   1. saveToLocalStorage() —— 同步、不依赖网络，必定完成
    //   2. saveSync() —— 同步 XHR 写文件（E + F）
    //   3. save() —— 异步写文件（兜底）
    this.store?.saveToLocalStorage();     // 最优先：同步 localStorage
    this.store?.saveSync();              // 其次：同步 XHR 文件
    this.store?.save().catch((e) => console.error("[TokenStats] Save on unload failed:", e));

    // 移除样式
    this.styleElement?.remove();
    this.styleElement = null;

    console.log("[TokenStats] Plugin unloaded.");
  }

  /**
   * 执行一次云同步合并（带并发锁）。
   * sync-end、加载后延迟、周期定时器都会调用它；合并后若设置有变更，
   * 回填到已打开的设置面板。
   * 受「跨端统计合并」开关约束——关闭时不自动合并（手动同步仍可强制执行）。
   */
  private async mergeFromRemote(): Promise<void> {
    if (!this.store.getSettings().syncStatistics) return;
    await this.doMerge();
  }

  /** 实际执行合并（不含开关判断，供自动合并与手动同步共用） */
  private async doMerge(): Promise<boolean> {
    if (this.merging) return false;
    this.merging = true;
    try {
      const changed = await this.store.mergeFromRemote();
      if (changed) this.settingsPanel.refreshFromStore();
      // 合并后用量可能来自其它设备 → 实时刷新徽标并触发阈值提醒
      this.updateBadge();
      this.checkThresholdsLive();
      return changed;
    } catch (err) {
      console.warn("[TokenStats] Sync merge failed:", err);
      return false;
    } finally {
      this.merging = false;
    }
  }

  /** 手动触发一次跨端统计合并（设置面板「立即同步」按钮调用），不受开关限制 */
  async manualSync(): Promise<boolean> {
    return this.doMerge();
  }

  /** 初始化顶栏实时用量徽标 */
  private initTopBarBadge(): void {
    if (!this.topBarItem) return;
    const badge = document.createElement("span");
    badge.className = "tks-topbar-badge";
    badge.style.display = "none";
    this.topBarItem.style.position = "relative";
    this.topBarItem.appendChild(badge);
    this.badgeEl = badge;
    this.updateBadge();
    // 实时刷新：每 3 秒更新徽标并做阈值检查（即使仪表盘未打开）
    this.badgeTimer = window.setInterval(() => {
      this.updateBadge();
      this.checkThresholdsLive();
    }, 3000);
  }

  /** 更新顶栏徽标显示 */
  private updateBadge(): void {
    const badge = this.badgeEl;
    if (!badge) return;
    const settings = this.store.getSettings();
    if (!settings.showTopBarBadge) {
      badge.style.display = "none";
      return;
    }

    // 优先显示费用限额模式（设了 globalCostLimit 时）
    if (settings.globalCostLimit > 0) {
      const costPct = this.keyManager.getGlobalCostPercent(settings);
      const costUsage = this.keyManager.getGlobalCostUsage(settings);
      const cur = settings.currency || "¥";
      let text: string;
      let level: "ok" | "warn" | "danger" | "neutral" = "neutral";
      text = `${costPct.toFixed(0)}%`;
      const warn = settings.globalCostAlertThreshold > 0 ? settings.globalCostAlertThreshold : 70;
      const danger = 90;
      if (costPct >= danger || this.keyManager.isGlobalCostExceeded(settings)) level = "danger";
      else if (costPct >= warn) level = "warn";
      else level = "ok";
      badge.textContent = text;
      badge.className = `tks-topbar-badge tks-badge-${level}`;
      badge.style.display = "inline-block";
      badge.title = `费用 ${cur}${costUsage.totalCost.toFixed(2)} / ${cur}${settings.globalCostLimit.toFixed(2)}`;
      return;
    }

    // Token 限额模式
    const usage = this.keyManager.getGlobalUsage(settings);
    let text: string;
    let level: "ok" | "warn" | "danger" | "neutral" = "neutral";
    if (settings.globalQuotaLimit > 0) {
      const pct = this.keyManager.getGlobalUsagePercent(settings);
      text = `${Math.round(pct)}%`;
      const warn = settings.globalAlertThreshold > 0 ? settings.globalAlertThreshold : 70;
      const danger = 90;
      if (pct >= danger || this.keyManager.isGlobalQuotaExceeded(settings)) level = "danger";
      else if (pct >= warn) level = "warn";
      else level = "ok";
    } else {
      text = this.formatCompactTokens(usage.totalTokens);
      level = "neutral";
    }
    badge.textContent = text;
    badge.className = `tks-topbar-badge tks-badge-${level}`;
    badge.style.display = "inline-block";
  }

  /** 实时阈值检查：供定时器与云同步合并后调用，使同步到达的用量也能触发提醒 */
  private checkThresholdsLive(): void {
    const settings = this.store.getSettings();
    if (!settings.showNotifications) return;
    this.keyManager.checkAllThresholds((msg) => showMessage(msg, 5000, "error"));
  }

  /** 紧凑显示 token 数量（如 1.2k / 3.4M） */
  private formatCompactTokens(n: number): string {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
    return String(n);
  }
}

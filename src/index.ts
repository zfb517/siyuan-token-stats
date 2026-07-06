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

    // 6. 顶栏按钮 → 打开仪表盘
    this.addTopBar({
      icon: "iconTokenStats",
      title: "Token 用量统计",
      position: "right",
      callback: () => {
        this.dashboard.show();
      },
    });

    // 7. 设置面板
    this.settingsPanel = new SettingsPanel(this.store, this.keyManager);
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
      setTimeout(() => {
        this.store.mergeFromRemote().catch((err) =>
          console.warn("[TokenStats] Sync merge failed:", err)
        );
      }, 1000);
    };
    this.eventBus.on("sync-end", this.syncHandler);

    console.log("[TokenStats] Plugin loaded successfully.");
  }

  onunload(): void {
    console.log("[TokenStats] Plugin unloading...");

    // 移除同步事件监听
    if (this.syncHandler) {
      this.eventBus.off("sync-end", this.syncHandler);
      this.syncHandler = null;
    }

    // 卸载拦截器
    this.interceptor?.uninstall();

    // 保存数据：先异步保存（写 E + F + localStorage），再同步保存（确保卸载前强制落盘）
    this.store?.save().catch((e) => console.error("[TokenStats] Save on unload failed:", e));
    this.store?.saveSync();

    // 移除样式
    this.styleElement?.remove();
    this.styleElement = null;

    console.log("[TokenStats] Plugin unloaded.");
  }
}

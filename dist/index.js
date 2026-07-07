"use strict";const w=require("siyuan"),ae=`/* ═══════════════════════════════════════════\r
   Token Statistics Plugin - Styles\r
   使用 SiYuan CSS 变量，自动适配明暗主题\r
   ═══════════════════════════════════════════ */\r
\r
/* ─── 仪表盘 ─── */\r
.tks-dashboard {\r
  padding: 16px 20px;\r
  max-height: calc(100vh - 120px);\r
  overflow-y: auto;\r
}\r
\r
.tks-summary-cards {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\r
  gap: 10px;\r
  margin-bottom: 20px;\r
}\r
\r
@media (max-width: 800px) {\r
  .tks-summary-cards {\r
    grid-template-columns: repeat(3, 1fr);\r
  }\r
}\r
\r
/* ─── 移动端适配（含鸿蒙 NEXT） ─── */\r
@media (max-width: 600px) {\r
  .tks-dashboard {\r
    padding: 10px 12px;\r
  }\r
\r
  .tks-summary-cards {\r
    grid-template-columns: repeat(2, 1fr);\r
    gap: 6px;\r
  }\r
\r
  .tks-card {\r
    padding: 8px 10px;\r
  }\r
\r
  .tks-card-icon {\r
    font-size: 18px;\r
  }\r
\r
  .tks-card-value {\r
    font-size: 14px;\r
  }\r
\r
  .tks-card-label {\r
    font-size: 10px;\r
  }\r
\r
  .tks-section-title {\r
    font-size: 13px;\r
  }\r
\r
  /* Key 统计条在窄屏下改为更紧凑布局 */\r
  .tks-key-stat-header {\r
    flex-wrap: wrap;\r
  }\r
\r
  /* 模型分布条在窄屏下名称缩短 */\r
  .tks-model-name {\r
    width: 80px;\r
    font-size: 11px;\r
  }\r
\r
  .tks-model-detail {\r
    width: 100px;\r
    font-size: 10px;\r
  }\r
\r
  /* 记录表横向滚动 */\r
  .tks-records-table-wrap {\r
    overflow-x: auto;\r
  }\r
\r
  .tks-records-table {\r
    min-width: 600px;\r
  }\r
\r
  /* Key 管理项垂直布局 */\r
  .tks-key-item {\r
    flex-direction: column;\r
    align-items: stretch;\r
  }\r
\r
  .tks-key-actions {\r
    margin-left: 0;\r
    margin-top: 8px;\r
    justify-content: flex-end;\r
  }\r
\r
  .tks-key-quota {\r
    flex-wrap: wrap;\r
  }\r
\r
  .tks-quota-bar {\r
    width: 100%;\r
  }\r
\r
  /* Key 编辑器双列改单列 */\r
  .tks-form-row-2col {\r
    grid-template-columns: 1fr;\r
  }\r
\r
  /* 仪表盘操作按钮 */\r
  .tks-dashboard-actions {\r
    flex-wrap: wrap;\r
  }\r
}\r
\r
.tks-card {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 12px 14px;\r
  background: var(--b3-theme-surface);\r
  border: 1px solid var(--b3-border-color);\r
  border-radius: 8px;\r
}\r
\r
.tks-card-icon {\r
  font-size: 24px;\r
  line-height: 1;\r
}\r
\r
.tks-card-value {\r
  font-size: 18px;\r
  font-weight: 700;\r
  color: var(--b3-theme-primary);\r
  line-height: 1.2;\r
}\r
\r
.tks-card-label {\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface);\r
  margin-top: 2px;\r
}\r
\r
/* ─── 区块 ─── */\r
.tks-section {\r
  margin-bottom: 20px;\r
}\r
\r
.tks-section-title {\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: var(--b3-theme-on-background);\r
  margin: 0 0 10px 0;\r
  padding-bottom: 6px;\r
  border-bottom: 1px solid var(--b3-border-color);\r
}\r
\r
/* ─── API Key 统计条 ─── */\r
.tks-key-stats {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.tks-key-stat {\r
  padding: 10px 12px;\r
  background: var(--b3-theme-surface);\r
  border: 1px solid var(--b3-border-color);\r
  border-radius: 6px;\r
  transition: border-color 0.2s;\r
}\r
\r
.tks-key-stat-alert {\r
  border-color: var(--b3-theme-warning, #d97706);\r
}\r
\r
.tks-key-stat-exceeded {\r
  border-color: var(--b3-theme-error);\r
}\r
\r
.tks-key-stat-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 6px;\r
}\r
\r
.tks-key-stat-name {\r
  font-weight: 600;\r
  font-size: 13px;\r
  color: var(--b3-theme-on-background);\r
}\r
\r
.tks-key-stat-requests {\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface);\r
}\r
\r
.tks-key-stat-bar {\r
  height: 8px;\r
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));\r
  border-radius: 4px;\r
  overflow: hidden;\r
  margin-bottom: 4px;\r
}\r
\r
.tks-key-stat-fill {\r
  height: 100%;\r
  background: var(--b3-theme-primary);\r
  border-radius: 4px;\r
  transition: width 0.3s ease;\r
}\r
\r
.tks-key-stat-fill.alert {\r
  background: var(--b3-theme-warning, #d97706);\r
}\r
\r
.tks-key-stat-fill.exceeded {\r
  background: var(--b3-theme-error);\r
}\r
\r
.tks-key-stat-detail {\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface);\r
}\r
\r
/* ─── Token 趋势控制 ─── */\r
.tks-trend-controls {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  margin-bottom: 10px;\r
  flex-wrap: wrap;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface);\r
}\r
\r
.tks-trend-controls input[type="date"] {\r
  width: 130px;\r
  padding: 4px 8px;\r
  font-size: 12px;\r
}\r
\r
.tks-trend-controls .b3-select {\r
  width: auto;\r
  min-width: 70px;\r
  padding: 4px 8px;\r
  font-size: 12px;\r
}\r
\r
.tks-trend-controls .b3-button {\r
  padding: 4px 10px;\r
  font-size: 12px;\r
}\r
\r
.tks-empty-chart {\r
  text-align: center;\r
  padding: 30px;\r
  color: var(--b3-theme-on-surface);\r
  font-size: 12px;\r
  background: var(--b3-theme-surface);\r
  border: 1px dashed var(--b3-border-color);\r
  border-radius: 6px;\r
}\r
\r
.tks-card-global .tks-card-value {\r
  color: var(--b3-theme-warning, #d97706);\r
}\r
\r
/* ─── 每日趋势图 ─── */\r
.tks-daily-chart {\r
  display: flex;\r
  align-items: flex-end;\r
  gap: 4px;\r
  height: 140px;\r
  padding: 10px;\r
  background: var(--b3-theme-surface);\r
  border: 1px solid var(--b3-border-color);\r
  border-radius: 6px;\r
  overflow-x: auto;\r
}\r
\r
.tks-daily-bar {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  flex: 1;\r
  min-width: 40px;\r
  height: 100%;\r
  justify-content: flex-end;\r
}\r
\r
.tks-daily-value {\r
  font-size: 10px;\r
  color: var(--b3-theme-on-surface);\r
  margin-bottom: 4px;\r
  white-space: nowrap;\r
}\r
\r
.tks-daily-col {\r
  width: 70%;\r
  flex: 1;\r
  display: flex;\r
  align-items: flex-end;\r
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.04));\r
  border-radius: 3px 3px 0 0;\r
}\r
\r
.tks-daily-fill {\r
  width: 100%;\r
  background: linear-gradient(180deg, var(--b3-theme-primary), var(--b3-theme-primary-light, rgba(0, 0, 0, 0.2)));\r
  border-radius: 3px 3px 0 0;\r
  transition: height 0.3s ease;\r
}\r
\r
.tks-daily-date {\r
  font-size: 10px;\r
  color: var(--b3-theme-on-surface);\r
  margin-top: 4px;\r
}\r
\r
/* ─── 模型分布 ─── */\r
.tks-model-stats {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 6px;\r
}\r
\r
.tks-model-bar {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  font-size: 12px;\r
}\r
\r
.tks-model-name {\r
  width: 150px;\r
  flex-shrink: 0;\r
  color: var(--b3-theme-on-background);\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.tks-model-bar-track {\r
  flex: 1;\r
  height: 18px;\r
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));\r
  border-radius: 3px;\r
  overflow: hidden;\r
}\r
\r
.tks-model-bar-fill {\r
  height: 100%;\r
  background: var(--b3-theme-primary);\r
  border-radius: 3px;\r
  transition: width 0.3s ease;\r
  opacity: 0.7;\r
}\r
\r
.tks-model-detail {\r
  width: 180px;\r
  flex-shrink: 0;\r
  color: var(--b3-theme-on-surface);\r
  font-size: 11px;\r
  text-align: right;\r
}\r
\r
/* ─── 请求记录表 ─── */\r
.tks-records-table-wrap {\r
  max-height: 300px;\r
  overflow-y: auto;\r
  border: 1px solid var(--b3-border-color);\r
  border-radius: 6px;\r
}\r
\r
.tks-records-table {\r
  width: 100%;\r
  border-collapse: collapse;\r
  font-size: 12px;\r
}\r
\r
.tks-records-table thead {\r
  position: sticky;\r
  top: 0;\r
  z-index: 1;\r
}\r
\r
.tks-records-table th {\r
  background: var(--b3-theme-surface);\r
  color: var(--b3-theme-on-surface);\r
  padding: 8px 10px;\r
  text-align: left;\r
  font-weight: 600;\r
  border-bottom: 1px solid var(--b3-border-color);\r
  white-space: nowrap;\r
}\r
\r
.tks-records-table td {\r
  padding: 6px 10px;\r
  border-bottom: 1px solid var(--b3-border-color);\r
  color: var(--b3-theme-on-background);\r
  white-space: nowrap;\r
}\r
\r
.tks-records-table tbody tr:hover {\r
  background: var(--b3-list-hover, rgba(0, 0, 0, 0.03));\r
}\r
\r
/* ─── 仪表盘操作按钮 ─── */\r
.tks-dashboard-actions {\r
  display: flex;\r
  gap: 8px;\r
  justify-content: flex-end;\r
  padding-top: 10px;\r
  border-top: 1px solid var(--b3-border-color);\r
}\r
\r
/* ─── API Key 管理对话框 ─── */\r
.tks-key-mgr {\r
  padding: 16px 20px;\r
  height: 100%;\r
  overflow-y: auto;\r
}\r
\r
.tks-key-toolbar {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  margin-bottom: 12px;\r
  padding-bottom: 8px;\r
  border-bottom: 1px solid var(--b3-border-color);\r
}\r
\r
.tks-key-toolbar > button {\r
  margin-right: 6px;\r
}\r
\r
.tks-key-hint {\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface);\r
  margin-left: auto;\r
}\r
\r
.tks-key-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.tks-key-item {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: 12px;\r
  background: var(--b3-theme-surface);\r
  border: 1px solid var(--b3-border-color);\r
  border-radius: 6px;\r
}\r
\r
.tks-key-info {\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.tks-key-name {\r
  font-weight: 600;\r
  font-size: 13px;\r
  color: var(--b3-theme-on-background);\r
  margin-bottom: 4px;\r
}\r
\r
.tks-badge {\r
  display: inline-block;\r
  padding: 1px 6px;\r
  font-size: 10px;\r
  border-radius: 3px;\r
  background: var(--b3-theme-primary-light, rgba(0, 0, 0, 0.08));\r
  color: var(--b3-theme-primary);\r
  margin-left: 4px;\r
  vertical-align: middle;\r
}\r
\r
.tks-badge-off {\r
  background: rgba(0, 0, 0, 0.06);\r
  color: var(--b3-theme-on-surface);\r
}\r
\r
.tks-key-detail {\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface);\r
  display: flex;\r
  gap: 8px;\r
  margin-bottom: 4px;\r
}\r
\r
.tks-key-provider {\r
  padding: 0 4px;\r
  border-radius: 2px;\r
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));\r
  white-space: nowrap;\r
}\r
\r
.tks-key-url {\r
  max-width: 180px;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
  color: var(--b3-theme-on-surface);\r
}\r
\r
.tks-key-quota {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
.tks-quota-bar {\r
  width: 120px;\r
  height: 6px;\r
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));\r
  border-radius: 3px;\r
  overflow: hidden;\r
}\r
\r
.tks-quota-fill {\r
  height: 100%;\r
  background: var(--b3-theme-primary);\r
  border-radius: 3px;\r
}\r
\r
.tks-quota-fill.tks-quota-alert {\r
  background: var(--b3-theme-warning, #d97706);\r
}\r
\r
.tks-quota-text {\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface);\r
  white-space: nowrap;\r
}\r
\r
.tks-key-actions {\r
  display: flex;\r
  gap: 4px;\r
  flex-shrink: 0;\r
  margin-left: 10px;\r
}\r
\r
/* ─── Key 编辑器表单 ─── */\r
.tks-key-editor {\r
  padding: 20px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 14px;\r
}\r
\r
.tks-form-row {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 4px;\r
}\r
\r
.tks-form-row label {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: var(--b3-theme-on-background);\r
}\r
\r
.tks-form-row .b3-text-field,\r
.tks-form-row .b3-select {\r
  width: 100%;\r
}\r
\r
.tks-form-row-2col {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
  gap: 12px;\r
}\r
\r
.tks-form-hint {\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface);\r
}\r
\r
.tks-form-actions {\r
  display: flex;\r
  justify-content: flex-end;\r
  gap: 8px;\r
  margin-top: 8px;\r
}\r
\r
/* ─── 弹窗位置 + 滚动支持 ─── */\r
/* 使用 overlay 的 align-items + padding-top 控制垂直位置，避免与 Dialog 拖拽时设置的 inline margin 冲突 */\r
.b3-dialog:has([id^="tks-"]) {\r
  align-items: flex-start;\r
  padding-top: 5vh;\r
}\r
\r
.b3-dialog:has([id^="tks-"]) .b3-dialog__container {\r
  max-width: 96vw;\r
  max-height: 92vh;\r
}\r
\r
.b3-dialog:has([id^="tks-"]) .b3-dialog__body {\r
  max-height: calc(82vh - 120px);\r
  overflow-y: auto;\r
}\r
\r
/* 移除仪表盘内部滚动，统一交给 dialog body */\r
.tks-dashboard {\r
  max-height: none;\r
  overflow-y: visible;\r
}\r
\r
/* 滚动条样式 */\r
.b3-dialog:has([id^="tks-"]) .b3-dialog__body::-webkit-scrollbar {\r
  width: 6px;\r
}\r
\r
.b3-dialog:has([id^="tks-"]) .b3-dialog__body::-webkit-scrollbar-thumb {\r
  background: var(--b3-theme-on-surface-light, rgba(0, 0, 0, 0.2));\r
  border-radius: 3px;\r
}\r
\r
/* 费用估算配置弹窗 */\r
.tks-price-editor {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 10px;\r
  padding: 16px 20px;\r
}\r
.tks-price-head {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
}\r
.tks-price-head label {\r
  font-size: 13px;\r
  color: var(--b3-theme-on-surface);\r
  min-width: 64px;\r
}\r
.tks-price-hint {\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface-light, #999);\r
  line-height: 1.5;\r
}\r
.tks-price-opt {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
  padding: 8px 10px;\r
  background: var(--b3-theme-background-light, #f5f5f5);\r
  border-radius: 4px;\r
}\r
.tks-price-opt-label {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 13px;\r
  font-weight: 500;\r
  cursor: pointer;\r
}\r
.tks-price-opt-label input[type="checkbox"] {\r
  width: 15px;\r
  height: 15px;\r
  cursor: pointer;\r
}\r
.tks-price-opt-hint {\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface-light, #999);\r
  line-height: 1.4;\r
}\r
.tks-price-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
  max-height: 50vh;\r
  overflow-y: auto;\r
}\r
.tks-price-row {\r
  display: grid;\r
  grid-template-columns: 1fr 110px 110px 36px;\r
  gap: 8px;\r
  align-items: center;\r
}\r
\r
/* 按模型单价列表列标题 */\r
.tks-price-header {\r
  display: grid;\r
  grid-template-columns: 1fr 110px 110px 36px;\r
  gap: 8px;\r
  align-items: center;\r
  padding: 4px 0;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface-light, #888);\r
  font-weight: 500;\r
}\r
.tks-price-hd-input,\r
.tks-price-hd-output {\r
  text-align: center;\r
}\r
.tks-price-model {\r
  min-width: 0;\r
}\r
.tks-price-del {\r
  padding: 4px 8px;\r
}\r
.tks-price-empty {\r
  font-size: 13px;\r
  color: var(--b3-theme-on-surface-light, #999);\r
  padding: 8px 0;\r
}\r
.tks-price-toolbar {\r
  display: flex;\r
  gap: 12px;\r
  justify-content: flex-end;\r
  margin-top: 4px;\r
}\r
.tks-price-section-title {\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: var(--b3-theme-on-surface);\r
  margin: 14px 0 8px;\r
  padding-top: 10px;\r
  border-top: 1px solid var(--b3-border-color, #ddd);\r
}\r
.tks-pack-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
  max-height: 40vh;\r
  overflow-y: auto;\r
}\r
.tks-pack-row {\r
  display: grid;\r
  grid-template-columns: 1.3fr 110px 80px 80px 1.5fr 36px;\r
  gap: 8px;\r
  align-items: center;\r
}\r
.tks-pack-name,\r
.tks-pack-models {\r
  min-width: 0;\r
}\r
\r
/* 资源包列表列标题 */\r
.tks-pack-header {\r
  display: grid;\r
  grid-template-columns: 1.3fr 110px 80px 80px 1.5fr 36px;\r
  gap: 8px;\r
  align-items: center;\r
  padding: 4px 0;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface-light, #888);\r
  font-weight: 500;\r
}\r
.tks-pack-hd-total,\r
.tks-pack-hd-input,\r
.tks-pack-hd-output {\r
  text-align: center;\r
}\r
\r
/* 未配置单价时的汇总卡弱化显示 */\r
.tks-card-muted .tks-card-value {\r
  color: var(--b3-theme-on-surface-light, #999);\r
}\r
\r
/* ─── 顶栏实时用量徽标 ─── */\r
.tks-topbar-badge {\r
  position: absolute;\r
  top: -4px;\r
  right: -4px;\r
  min-width: 16px;\r
  height: 16px;\r
  padding: 0 4px;\r
  box-sizing: border-box;\r
  border-radius: 8px;\r
  font-size: 10px;\r
  line-height: 16px;\r
  font-weight: 600;\r
  text-align: center;\r
  color: #fff;\r
  background: var(--b3-theme-on-surface-light, #999);\r
  border: 1.5px solid var(--b3-toolbar-background, var(--b3-theme-background, #fff));\r
  pointer-events: none;\r
  font-variant-numeric: tabular-nums;\r
  z-index: 2;\r
}\r
\r
.tks-topbar-badge.tks-badge-ok {\r
  background: #2e9e5b;\r
}\r
\r
.tks-topbar-badge.tks-badge-warn {\r
  background: #d98b00;\r
}\r
\r
.tks-topbar-badge.tks-badge-danger {\r
  background: #d4453b;\r
}\r
\r
.tks-topbar-badge.tks-badge-neutral {\r
  background: var(--b3-theme-primary, #4a6fff);\r
}\r
`,z="data/storage/siyuan-token-stats/data.json",ie="data/storage/siyuan-token-stats/data.json.bak",X="data/plugins/siyuan-token-stats/settings.json",B="siyuan-token-stats-data",V="1.3.0",Q={matchByUrl:!0,interceptExternalAPIs:!0,blockOnQuotaExceeded:!1,quotaResetCycle:"monthly",abortStreamOnExceeded:!0,showNotifications:!0,showTopBarBadge:!0,maxRecords:5e3,globalQuotaLimit:0,globalAlertThreshold:0,globalQuotaResetCycle:"monthly",globalUsedTokensOffset:0,globalUsedInputTokensOffset:0,globalUsedOutputTokensOffset:0,globalCostLimit:0,globalCostAlertThreshold:0,trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily",debugLogging:!1,currency:"¥",recalcCostOnPriceChange:!0,modelPrices:{},pricePacks:[]};class le{constructor(){this.saveTimer=null,this.data={version:V,lastSavedAt:0,settingsUpdatedAt:0,keysUpdatedAt:0,deletedKeys:[],apiKeys:[],records:[],settings:{...Q}}}async readSource(e){try{const t=await fetch(`/api/file/getFile?path=${encodeURIComponent(e)}`);if(!t.ok)return null;const n=await t.text();if(!n)return null;const s=JSON.parse(n);if(s&&s.lastSavedAt)return s}catch{}return null}async load(){try{let e=null;try{const b=localStorage.getItem(B);if(b){const v=JSON.parse(b);v&&v.lastSavedAt&&(e=v,console.log("[TokenStats] Found data in localStorage (primary)."))}}catch{}const t=await this.readSource(z),n=await this.readSource(X),s=[t,n].filter(Boolean),r=e?[e,...s]:s;if(r.length===0){console.log("[TokenStats] No existing data in any source, starting fresh.");return}const i=new Map,a=b=>{const v=i.get(b.id);if(!v){i.set(b.id,b);return}const L=v.keysUpdatedAt||0,C=b.keysUpdatedAt||0;(C>L||C===L&&!v.keyFull&&b.keyFull)&&i.set(b.id,b)};for(const b of r)for(const v of b.apiKeys||[])a(v);const o=Array.from(i.values()),l=new Set;for(const b of r)for(const v of b.deletedKeys||[])l.add(v);const u=new Map;for(const b of r)for(const v of b.records||[])u.has(v.id)||u.set(v.id,v);const c=Array.from(u.values()).sort((b,v)=>b.timestamp-v.timestamp),d=(()=>{var v;let b=5e3;for(const L of r){const C=(v=L.settings)==null?void 0:v.maxRecords;typeof C=="number"&&C>b&&(b=C)}return b})(),g=c.length>d?c.slice(-d):c;let p=r[0];for(const b of r)b.settingsUpdatedAt>p.settingsUpdatedAt&&(p=b);const m=p.settings||{},k={...Q,...m};"autoDetectSiYuanAI"in m&&(k.matchByUrl=m.autoDetectSiYuanAI);const T=o.map(b=>{const v={...b};return v.id==="siyuan-built-in"&&v.provider==="siyuan"&&(v.provider=v.baseUrl?v.baseUrl:"SiYuan AI"),v.usedTokensOffset===void 0&&(v.usedTokensOffset=0),v.usedInputTokensOffset===void 0&&(v.usedInputTokensOffset=0),v.usedOutputTokensOffset===void 0&&(v.usedOutputTokensOffset=0),Array.isArray(v.models)||(v.models=[]),v}).filter(b=>!l.has(b.id)),h=Math.max(0,...r.map(b=>b.lastSavedAt||0)),y=Math.max(0,...r.map(b=>b.settingsUpdatedAt||0)),S=Math.max(0,...r.map(b=>b.keysUpdatedAt||0));this.data={version:V,lastSavedAt:h,settingsUpdatedAt:y,keysUpdatedAt:S,deletedKeys:Array.from(l),apiKeys:T,records:g,settings:k},console.log(`[TokenStats] Loaded (merged ${r.length} source(s), primary=${!!e}): ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`),this.saveToLocalStorage(),this.save().catch(b=>console.error("[TokenStats] Post-load save failed:",b))}catch(e){console.warn("[TokenStats] Failed to load data, starting fresh:",e)}}scheduleSave(e=500){this.saveToLocalStorage(),this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.save().catch(t=>console.error("[TokenStats] Save failed:",t))},e)}saveToLocalStorage(){try{this.data.lastSavedAt=Date.now(),localStorage.setItem(B,JSON.stringify(this.data))}catch{}}async save(){try{this.data.lastSavedAt=Date.now();try{const n=await fetch(`/api/file/getFile?path=${encodeURIComponent(z)}`);if(n.ok){const s=await n.text();if(s){const r=new FormData;r.append("path",ie),r.append("file",new Blob([s],{type:"application/json"})),await fetch("/api/file/putFile",{method:"POST",body:r})}}}catch{}const e=new FormData;e.append("path",z),e.append("file",new Blob([JSON.stringify(this.data,null,2)],{type:"application/json"}));const t=await fetch("/api/file/putFile",{method:"POST",body:e});if(!t.ok)throw new Error(`putFile returned ${t.status}`);try{const n=new FormData;n.append("path",X),n.append("file",new Blob([JSON.stringify(this.data,null,2)],{type:"application/json"})),await fetch("/api/file/putFile",{method:"POST",body:n})}catch{}try{localStorage.setItem(B,JSON.stringify(this.data))}catch{}}catch(e){console.error("[TokenStats] Failed to save data:",e);try{localStorage.setItem(B,JSON.stringify(this.data))}catch{}}}saveSync(){this.saveToLocalStorage();try{this.data.lastSavedAt=Date.now();const e=JSON.stringify(this.data,null,2);try{const t=new XMLHttpRequest;t.open("POST","/api/file/putFile",!1);const n=new FormData;n.append("path",z),n.append("file",new Blob([e],{type:"application/json"})),t.send(n)}catch{}try{const t=new XMLHttpRequest;t.open("POST","/api/file/putFile",!1);const n=new FormData;n.append("path",X),n.append("file",new Blob([e],{type:"application/json"})),t.send(n)}catch{}console.log("[TokenStats] Synchronous save completed (localStorage + E + F).")}catch(e){console.error("[TokenStats] saveSync error:",e)}}async mergeFromRemote(){try{const e=await fetch(`/api/file/getFile?path=${encodeURIComponent(z)}`);if(!e.ok)return!1;const t=await e.text();if(!t)return!1;const n=JSON.parse(t);if(!n)return!1;const s=this.data,r=n.lastSavedAt||0,i=s.lastSavedAt||0,a=n.settingsUpdatedAt||0,o=n.keysUpdatedAt||0,l=s.settingsUpdatedAt||0,u=s.keysUpdatedAt||0;if(r===i&&a===l&&o===u&&r>0)return console.log("[TokenStats] Sync merge: data unchanged, skipping."),!1;console.log(`[TokenStats] Sync merge: local ls=${i} lset=${l} lkey=${u}, remote rs=${r} rset=${a} rkey=${o}`);const c=n.records||[],d=new Map;for(const A of s.records)d.set(A.id,A);for(const A of c)d.has(A.id)||d.set(A.id,A);const g=Array.from(d.values()).sort((A,I)=>A.timestamp-I.timestamp),p=s.settings.maxRecords,m=g.length>p?g.slice(-p):g,k=n.apiKeys||[],T=new Map,h=u>=o,y=h?k:s.apiKeys,S=h?s.apiKeys:k;for(const A of y)T.set(A.id,A);for(const A of S)T.set(A.id,A);const b=n.deletedKeys||[],v=s.deletedKeys||[],L=Array.from(new Set([...v,...b])),C=Array.from(T.values()).filter(A=>!L.includes(A.id)),$=l>=a?{...Q,...s.settings}:{...Q,...n.settings},U=Math.max(l,a),E=Math.max(u,o);return this.data={version:V,lastSavedAt:Math.max(i,r),settingsUpdatedAt:U,keysUpdatedAt:E,deletedKeys:L,apiKeys:C,records:m,settings:$},await this.save(),console.log(`[TokenStats] Sync merge complete: ${C.length} keys, ${m.length} records.`),!0}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}}getApiKeys(){return this.data.apiKeys}getApiKey(e){return this.data.apiKeys.find(t=>t.id===e)}addApiKey(e){this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys=this.data.deletedKeys.filter(t=>t!==e.id),this.data.apiKeys.push(e),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}updateApiKey(e,t){const n=this.data.apiKeys.findIndex(s=>s.id===e);n>=0&&(this.data.apiKeys[n]={...this.data.apiKeys[n],...t},this.data.keysUpdatedAt=Date.now(),this.scheduleSave())}deleteApiKey(e){this.data.apiKeys=this.data.apiKeys.filter(t=>t.id!==e),this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys.includes(e)||this.data.deletedKeys.push(e),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}addRecord(e){const t=this.data.records,n=t.slice(-5);for(const r of n)if(r.apiKeyId===e.apiKeyId&&r.timestamp===e.timestamp&&r.totalTokens===e.totalTokens&&r.model===e.model){console.log("[TokenStats] Duplicate record skipped:",e.apiKeyName,e.model,e.totalTokens);return}this.data.settings.recalcCostOnPriceChange===!1&&(e.cost=this.calcCost(e.model,e.inputTokens,e.outputTokens)),t.push(e);const s=this.data.settings.maxRecords;t.length>s&&(this.data.records=t.slice(-s)),this.scheduleSave()}getRecords(){return this.data.records}getRecentRecords(e=50){return[...this.data.records].sort((t,n)=>n.timestamp-t.timestamp).slice(0,e)}clearRecords(){this.data.records=[],this.scheduleSave()}clearAll(){this.data.records=[],this.data.apiKeys=[],this.data.deletedKeys=[],this.scheduleSave()}getSettings(){return this.data.settings}updateSettings(e){this.data.settings={...this.data.settings,...e},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave()}resetSettings(){this.data.settings={...Q},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave()}getCurrency(){return this.data.settings.currency||"¥"}normalizeModelKey(e){return(e||"").toLowerCase().trim().replace(/[\s\-_]+/g,"")}getModelPrice(e){const t=this.normalizeModelKey(e);if(!t)return null;const n=this.data.settings.modelPrices||{};if(n[t])return n[t];const s=this.findPackForModel(t);return s?{input:s.input,output:s.output}:null}findPackForModel(e){const t=this.data.settings.pricePacks||[];for(const n of t)if(Array.isArray(n.models)&&n.models.some(s=>this.normalizeModelKey(s)===e))return n;return null}hasAnyPrice(){return Object.keys(this.data.settings.modelPrices||{}).length>0?!0:(this.data.settings.pricePacks||[]).length>0}calcCost(e,t,n){const s=this.getModelPrice(e);if(!s)return 0;const r=t/1e3*s.input,i=n/1e3*s.output;return r+i}formatCost(e){return`${this.getCurrency()}${e.toFixed(4)}`}getRecordCost(e){return this.data.settings.recalcCostOnPriceChange!==!1?this.calcCost(e.model,e.inputTokens,e.outputTokens):typeof e.cost=="number"?e.cost:this.calcCost(e.model,e.inputTokens,e.outputTokens)}getTotalCostInPeriod(e,t){let n=0;for(const s of e)s.timestamp>=t&&(n+=this.getRecordCost(s));return n}exportAll(){return JSON.stringify(this.data,null,2)}exportRecords(){return JSON.stringify(this.data.records,null,2)}}function H(f){if(!f)return"";try{const e=new URL(f,window.location.href);return e.pathname+e.search}catch{return f}}class ce{constructor(e){this.store=e,this.alertedKeys=new Set,this.alertedGlobal=!1,this.alertedCostGlobal=!1}getAllKeys(){return this.store.getApiKeys()}findByKey(e){if(e)return this.store.getApiKeys().find(t=>t.enabled&&t.keyFull&&t.keyFull===e)}findByUrl(e){const t=H(e);if(t)return this.store.getApiKeys().find(n=>{if(!n.enabled||!n.baseUrl)return!1;const s=H(n.baseUrl);return s?t.includes(s)||s.includes(t):!1})}findByUrlAndModel(e,t){if(!e)return;const n=this.store.getApiKeys().filter(s=>{if(!s.enabled||!s.baseUrl)return!1;const r=H(s.baseUrl),i=H(e);return r&&i?i.includes(r)||r.includes(i):!1});if(n.length!==0){if(t){const s=String(t).toLowerCase().trim();for(const r of n)if(Array.isArray(r.models)&&r.models.find(i=>String(i).toLowerCase().trim()===s))return r}return n[0]}}findByModel(e){if(!e)return;const t=String(e).toLowerCase().trim();return this.store.getApiKeys().find(n=>n.enabled?(n.models||[]).map(r=>String(r).toLowerCase().trim()).includes(t):!1)}getResetBoundary(e){if(e==="none")return 0;const t=new Date;return e==="daily"?new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime():new Date(t.getFullYear(),t.getMonth(),1).getTime()}getKeyUsage(e){const t=this.store.getSettings(),n=this.getResetBoundary(t.quotaResetCycle),s=this.store.getApiKey(e),r=this.store.getRecords().filter(l=>l.apiKeyId===e&&l.timestamp>=n),i=(s==null?void 0:s.usedTokensOffset)??0,a=(s==null?void 0:s.usedInputTokensOffset)??0,o=(s==null?void 0:s.usedOutputTokensOffset)??0;return{totalTokens:r.reduce((l,u)=>l+u.totalTokens,0)+i,totalInputTokens:r.reduce((l,u)=>l+u.inputTokens,0)+a,totalOutputTokens:r.reduce((l,u)=>l+u.outputTokens,0)+o,totalRequests:r.length}}getRemainingQuota(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return-1;const n=this.getKeyUsage(e);return Math.max(0,t.quotaLimit-n.totalTokens)}getUsagePercent(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return 0;const n=this.getKeyUsage(e);return Math.min(100,n.totalTokens/t.quotaLimit*100)}isQuotaExceeded(e){const t=this.store.getApiKey(e);return!t||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens>=t.quotaLimit}wouldExceedQuota(e,t){const n=this.store.getApiKey(e);return!n||n.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens+t>n.quotaLimit}isThresholdReached(e){const t=this.store.getApiKey(e);return!t||t.alertThreshold<=0||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens/t.quotaLimit*100>=t.alertThreshold}checkThreshold(e,t){const n=this.store.getApiKey(e);if(n){if(this.alertedKeys.has(e)&&!this.isThresholdReached(e)&&this.alertedKeys.delete(e),this.isThresholdReached(e)&&!this.alertedKeys.has(e)){this.alertedKeys.add(e);const s=this.getKeyUsage(e),r=(s.totalTokens/n.quotaLimit*100).toFixed(1),i=`⚠️ Token 用量提醒：${n.name} 已使用 ${r}%（${s.totalTokens.toLocaleString()} / ${n.quotaLimit.toLocaleString()} tokens）`;t(i)}if(this.isQuotaExceeded(e)){const s=`⛔ Token 限额已用尽：${n.name}（限额 ${n.quotaLimit.toLocaleString()} tokens）`;t(s)}}}resetAlert(e){this.alertedKeys.delete(e)}clearAllAlerts(){this.alertedKeys.clear(),this.alertedGlobal=!1}generateKeyId(){return`key-${Date.now()}-${Math.random().toString(36).substring(2,8)}`}maskKey(e){return e?e.length<=8?e.substring(0,2)+"***":e.substring(0,5)+"..."+e.substring(e.length-4):"(空)"}getDefaultBaseUrl(e){return{openai:"https://api.openai.com/v1/chat/completions",anthropic:"https://api.anthropic.com/v1/messages",deepseek:"https://api.deepseek.com/v1/chat/completions"}[e.toLowerCase()]||""}getGlobalUsage(e){const t=this.getResetBoundary(e.globalQuotaResetCycle),n=this.store.getRecords().filter(s=>s.timestamp>=t);return{totalTokens:n.reduce((s,r)=>s+r.totalTokens,0)+(e.globalUsedTokensOffset??0),totalInputTokens:n.reduce((s,r)=>s+r.inputTokens,0)+(e.globalUsedInputTokensOffset??0),totalOutputTokens:n.reduce((s,r)=>s+r.outputTokens,0)+(e.globalUsedOutputTokensOffset??0),totalRequests:n.length}}getGlobalRemainingQuota(e){if(e.globalQuotaLimit<=0)return-1;const t=this.getGlobalUsage(e);return Math.max(0,e.globalQuotaLimit-t.totalTokens)}getGlobalUsagePercent(e){if(e.globalQuotaLimit<=0)return 0;const t=this.getGlobalUsage(e);return Math.min(100,t.totalTokens/e.globalQuotaLimit*100)}isGlobalQuotaExceeded(e){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens>=e.globalQuotaLimit}wouldExceedGlobalQuota(e,t){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens+t>e.globalQuotaLimit}isGlobalThresholdReached(e){return e.globalAlertThreshold<=0||e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens/e.globalQuotaLimit*100>=e.globalAlertThreshold}checkGlobalThreshold(e,t){if(!(e.globalQuotaLimit<=0)){if(this.alertedGlobal&&!this.isGlobalThresholdReached(e)&&(this.alertedGlobal=!1),this.isGlobalThresholdReached(e)&&!this.alertedGlobal){this.alertedGlobal=!0;const n=this.getGlobalUsage(e),r=`⚠️ 全局 Token 用量提醒：已使用 ${(n.totalTokens/e.globalQuotaLimit*100).toFixed(1)}%（${n.totalTokens.toLocaleString()} / ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(r)}if(this.isGlobalQuotaExceeded(e)){const n=`⛔ 全局 Token 限额已用尽（限额 ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(n)}}}resetGlobalAlert(){this.alertedGlobal=!1}getGlobalCostUsage(e){const t=this.getResetBoundary(e.globalQuotaResetCycle),n=this.store.getRecords().filter(r=>r.timestamp>=t);let s=0;for(const r of n)s+=this.store.getRecordCost(r);return{totalCost:s,totalRequests:n.length}}getGlobalRemainingCost(e){if(e.globalCostLimit<=0)return-1;const t=this.getGlobalCostUsage(e);return Math.max(0,e.globalCostLimit-t.totalCost)}getGlobalCostPercent(e){if(e.globalCostLimit<=0)return 0;const t=this.getGlobalCostUsage(e);return Math.min(100,t.totalCost/e.globalCostLimit*100)}isGlobalCostExceeded(e){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost>=e.globalCostLimit}wouldExceedGlobalCostQuota(e,t){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost+t>e.globalCostLimit}isGlobalCostThresholdReached(e){return e.globalCostAlertThreshold<=0||e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost/e.globalCostLimit*100>=e.globalCostAlertThreshold}checkGlobalCostThreshold(e,t){if(!(e.globalCostLimit<=0)){if(this.alertedCostGlobal&&!this.isGlobalCostThresholdReached(e)&&(this.alertedCostGlobal=!1),this.isGlobalCostThresholdReached(e)&&!this.alertedCostGlobal){this.alertedCostGlobal=!0;const n=this.getGlobalCostUsage(e),s=(n.totalCost/e.globalCostLimit*100).toFixed(1),r=e.currency||"¥",i=`⚠️ 全局费用提醒：已使用 ${s}%（${r}${n.totalCost.toFixed(2)} / ${r}${e.globalCostLimit.toFixed(2)}）`;t(i)}if(this.isGlobalCostExceeded(e)){const s=`⛔ 全局费用限额已用尽（限额 ${e.currency||"¥"}${e.globalCostLimit.toFixed(2)}）`;t(s)}}}resetGlobalCostAlert(){this.alertedCostGlobal=!1}checkAllThresholds(e){const t=this.store.getSettings();for(const n of this.store.getApiKeys())n.enabled&&this.checkThreshold(n.id,e);this.checkGlobalThreshold(t,e),this.checkGlobalCostThreshold(t,e)}}class de{estimate(e){if(!e)return 0;const t=(e.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g)||[]).length,n=(e.match(/[\u3000-\u303f\uff00-\uffef]/g)||[]).length,s=(e.match(/[a-zA-Z]+/g)||[]).length,r=s*4,i=Math.max(0,e.length-t-n-r),a=Math.ceil(t*1+n*.5+s*1.3+i*.25);return Math.max(0,a)}estimateFromMessages(e){if(!Array.isArray(e))return 0;let t=0;for(const n of e){if(typeof n=="string")t+=this.estimate(n)+4;else if(n!=null&&n.content){if(typeof n.content=="string")t+=this.estimate(n.content)+4;else if(Array.isArray(n.content)){for(const s of n.content)typeof s=="string"?t+=this.estimate(s):s!=null&&s.text&&(t+=this.estimate(s.text));t+=4}}n!=null&&n.role&&(t+=1)}return t}estimateFromText(e){return this.estimate(e)}}function re(f,e){if(!f)return null;if(f instanceof Headers)return f.get(e);if(Array.isArray(f)){for(const[s,r]of f)if(s.toLowerCase()===e.toLowerCase())return r;return null}const t=f,n=e.toLowerCase();for(const s of Object.keys(t))if(s.toLowerCase()===n)return t[s];return null}function ue(f){return typeof f=="string"?f:f instanceof URL?f.href:f.url}function pe(){return`rec-${Date.now()}-${Math.random().toString(36).substring(2,9)}`}function J(f){return f&&String(f).trim()||""}function oe(f){return!f||f==="unknown"||f==="siyuan-ai"||f==="default"}function j(f){if(!f)return!0;const e=f.trim();return!!(/^\d{14,}-[a-z0-9]+$/i.test(e)||/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)||/^\d+$/.test(e)||e.length>40&&!/[._-]/.test(e))}function P(...f){for(const e of f){const t=J(e);if(t&&!oe(t)&&!j(t))return t}return""}function ge(f){return/\/api\/ai\/agent\/chat\b/i.test(f)||/\/api\/ai\/chatGPT\b/i.test(f)||/\/api\/ai\/chatGPTWithAction\b/i.test(f)}function he(f){return typeof f=="object"&&f!==null&&"code"in f&&"msg"in f&&"data"in f&&!("choices"in f)&&!("usage"in f)}function me(){return{apiKeyId:"siyuan-ai-default",apiKeyName:"思源智能体",source:"siyuan-ai",provider:"SiYuan AI",model:"unknown"}}class fe{constructor(e,t,n){this.installed=!1,this.onThresholdAlert=()=>{},this.siyuanConfigCache=null,this.originalFetch=window.fetch.bind(window),this.store=e,this.keyManager=t,this.tokenCounter=n}setThresholdCallback(e){this.onThresholdAlert=e}keyMatchesModel(e,t){if(!e||!t)return!1;const n=String(t).toLowerCase().trim();return(e.models||[]).map(r=>String(r).toLowerCase().trim()).includes(n)}install(){if(this.installed){console.warn("[TokenStats] Interceptor already installed.");return}this.installed=!0;const e=this;window.fetch=async function(t,n){const s=ue(t),r=e.store.getSettings(),i=await e.extractBodyText(t,n),a=e.tryParseJson(i),o=await e.identifyAiCall(s,n,r,a);if(!o)return e.originalFetch(t,n);e.logDebug(`Intercepted AI call: source=${o.source}, model=${o.model}, key=${o.apiKeyName}`),e.logDebug("Request body",{bodyText:i==null?void 0:i.slice(0,500),parsedBody:a});const l=Date.now();if(r.blockOnQuotaExceeded&&r.globalQuotaLimit>0){const g=e.tokenCounter.estimateFromMessages(e.extractMessages(a));if(e.keyManager.isGlobalQuotaExceeded(r)){const p="[TokenStats] 已阻止请求：全局 Token 限额已用尽";return console.warn(p),e.onThresholdAlert("global",p),e.createBlockedResponse(p,o)}if(e.keyManager.wouldExceedGlobalQuota(r,g)){const m=`[TokenStats] 已阻止请求：全局剩余配额 ${e.keyManager.getGlobalRemainingQuota(r).toLocaleString()} tokens，预估输入 ${g.toLocaleString()} tokens 将超限`;return console.warn(m),e.onThresholdAlert("global",m),e.createBlockedResponse(m,o)}}if(r.blockOnQuotaExceeded){if(e.keyManager.isQuotaExceeded(o.apiKeyId)){const p=e.store.getApiKey(o.apiKeyId),m=`[TokenStats] 已阻止请求：${(p==null?void 0:p.name)||o.apiKeyName} 的 Token 限额已用尽`;return console.warn(m),e.onThresholdAlert(o.apiKeyId,m),e.createBlockedResponse(m,o)}const g=e.tokenCounter.estimateFromMessages(e.extractMessages(a));if(e.keyManager.wouldExceedQuota(o.apiKeyId,g)){const p=e.store.getApiKey(o.apiKeyId),m=e.keyManager.getRemainingQuota(o.apiKeyId),k=`[TokenStats] 已阻止请求：${(p==null?void 0:p.name)||o.apiKeyName} 剩余配额 ${m.toLocaleString()} tokens，预估输入 ${g.toLocaleString()} tokens 将超限`;return console.warn(k),e.onThresholdAlert(o.apiKeyId,k),e.createBlockedResponse(k,o)}}let u,c=!1;try{u=await e.originalFetch(t,n),c=u.ok}catch(g){throw e.recordCall(o,0,0,l,!1,o.model),g}const d=u.clone();return e.analyzeResponse(d,o,l,a,c).catch(g=>console.warn("[TokenStats] Response analysis failed:",g)),u},console.log("[TokenStats] Fetch interceptor installed.")}createBlockedResponse(e,t){const n=JSON.stringify({error:{type:"quota_exceeded",code:"token_stats_blocked",message:e,apiKeyId:t.apiKeyId,apiKeyName:t.apiKeyName}});return new Response(n,{status:429,statusText:"Too Many Requests",headers:{"Content-Type":"application/json","X-TokenStats-Blocked":"true"}})}uninstall(){this.installed&&(window.fetch=this.originalFetch,this.installed=!1,console.log("[TokenStats] Fetch interceptor uninstalled."))}async extractBodyText(e,t){if(t!=null&&t.body&&typeof t.body=="string")return t.body;if((t==null?void 0:t.body)instanceof URLSearchParams)return t.body.toString();if((t==null?void 0:t.body)instanceof FormData)try{const n={};return t.body.forEach((s,r)=>{n[r]=typeof s=="string"?s:s.name}),JSON.stringify(n)}catch{return null}if((t==null?void 0:t.body)instanceof Blob)try{return await t.body.text()}catch{return null}if(t!=null&&t.body&&(t.body instanceof ArrayBuffer||ArrayBuffer.isView(t.body)))try{return new TextDecoder().decode(t.body)}catch{return null}if(e instanceof Request)try{return await e.clone().text()}catch{return null}return null}tryParseJson(e){if(!e)return null;try{return JSON.parse(e)}catch{return null}}isDebugEnabled(){return this.store.getSettings().debugLogging??!1}logDebug(...e){this.isDebugEnabled()&&console.log("[TokenStats]",...e)}async identifyAiCall(e,t,n,s){const r=e.toLowerCase();if(ge(e)){const l=await this.getSiYuanAiConfig(),u=(s==null?void 0:s.model)||null,c=this.extractModel(s)||u||this.getSiYuanSelectedModelId(l);if(c){const g=this.findProviderByModel(l,c),p=g?g.baseURL:null;if(g&&g.apiKey){const k=this.keyManager.findByKey(g.apiKey);if(k&&k.enabled)return{apiKeyId:k.id,apiKeyName:k.name,source:k.baseUrl||p||"siyuan-ai",provider:k.provider,model:this.resolveSiYuanModelForCall(s,l)}}const m=this.keyManager.findByModel(c);if(m&&m.enabled)return{apiKeyId:m.id,apiKeyName:m.name,source:m.baseUrl||p||"siyuan-ai",provider:m.provider,model:this.resolveSiYuanModelForCall(s,l)};if(p){const k=this.keyManager.findByUrlAndModel(p,c);if(k&&k.enabled)return{apiKeyId:k.id,apiKeyName:k.name,source:k.baseUrl||p||"siyuan-ai",provider:k.provider,model:this.resolveSiYuanModelForCall(s,l)}}}if(l!=null&&l.providers){for(const g of l.providers)if(g!=null&&g.enabled){if(g.apiKey){const p=this.keyManager.findByKey(g.apiKey);if(p&&p.enabled)return{apiKeyId:p.id,apiKeyName:p.name,source:p.baseUrl||g.baseURL||"siyuan-ai",provider:p.provider,model:this.resolveModelByBlockId(u,l)||this.resolveModelNameFromProvider(g)||this.resolveSiYuanModelForCall(s,l)}}if(g.baseURL){const p=this.keyManager.findByUrl(g.baseURL);if(p&&p.enabled)return{apiKeyId:p.id,apiKeyName:p.name,source:p.baseUrl||g.baseURL||"siyuan-ai",provider:p.provider,model:this.resolveModelByBlockId(u,l)||this.resolveModelNameFromProvider(g)||this.resolveSiYuanModelForCall(s,l)}}if(Array.isArray(g.models))for(const p of g.models){const m=(p==null?void 0:p.id)||(p==null?void 0:p.name)||(p==null?void 0:p.displayName);if(!m)continue;const k=this.keyManager.findByModel(m);if(k&&k.enabled)return{apiKeyId:k.id,apiKeyName:k.name,source:k.baseUrl||g.baseURL||"siyuan-ai",provider:k.provider,model:m}}}}const d=this.keyManager.findByUrl(e);return d&&d.enabled?{apiKeyId:d.id,apiKeyName:d.name,source:d.baseUrl||"siyuan-ai",provider:d.provider,model:this.resolveSiYuanModelForCall(s,l)}:{...me(),model:this.resolveSiYuanModelForCall(s,l)}}if(n.matchByUrl){const l=this.keyManager.findByUrl(e),u=this.extractModel(s);let c=l;if(u&&l&&!this.keyMatchesModel(l,u)){const d=this.keyManager.findByModel(u);d&&d.enabled&&(c=d)}if(c&&c.enabled)return{apiKeyId:c.id,apiKeyName:c.name,source:c.baseUrl||"url-match",provider:c.provider,model:u||"unknown"}}if(!n.interceptExternalAPIs)return null;const a=this.extractModel(s);if(r.includes("/v1/chat/completions")||r.includes("/v1/completions")){const u=(re(t==null?void 0:t.headers,"Authorization")||"").replace(/^bearer\s+/i,"").trim();let c=a?this.keyManager.findByModel(a):void 0;return(!c||!c.enabled)&&(c=u?this.keyManager.findByKey(u):void 0),(!c||!c.enabled)&&(c=this.keyManager.findByUrl(e)),{apiKeyId:(c==null?void 0:c.id)||"unknown",apiKeyName:(c==null?void 0:c.name)||this.keyManager.maskKey(u)||"Unknown",source:"external-openai",provider:(c==null?void 0:c.provider)||"OpenAI",model:a||"unknown"}}if(r.includes("/v1/messages")){const l=re(t==null?void 0:t.headers,"x-api-key")||"";let u=a?this.keyManager.findByModel(a):void 0;return(!u||!u.enabled)&&(u=l?this.keyManager.findByKey(l):void 0),(!u||!u.enabled)&&(u=this.keyManager.findByUrl(e)),{apiKeyId:(u==null?void 0:u.id)||"unknown",apiKeyName:(u==null?void 0:u.name)||this.keyManager.maskKey(l)||"Unknown",source:"external-anthropic",provider:(u==null?void 0:u.provider)||"Anthropic",model:a||"unknown"}}let o=a?this.keyManager.findByModel(a):void 0;return(!o||!o.enabled)&&(o=this.keyManager.findByUrl(e)),o&&o.enabled?{apiKeyId:o.id,apiKeyName:o.name,source:o.baseUrl||"custom-url",provider:o.provider,model:a||"unknown"}:null}getSiYuanSelectedModelId(e){if(!e)return null;const t=e.agent||{},n=e.editing||{};return t.modelId||n.modelId||null}extractModel(e){return P(e==null?void 0:e.model)||null}resolveModelByBlockId(e,t){if(!t||!e)return null;const n=t.providers||[];for(const s of n){const r=(s.models||[]).find(i=>(i==null?void 0:i.id)===e);if(r)return r.name||r.displayName||null}return null}resolveSiYuanModelForCall(e,t){const n=e==null?void 0:e.model;if(n){const s=this.resolveModelByBlockId(n,t);if(s)return s}return P(this.extractModel(e))||this.resolveSiYuanModelNameFromConfig(t)||"unknown"}extractMessages(e){if(!e)return[];if(Array.isArray(e.messages))return e.messages;if(typeof e.messages=="string")return[e.messages];if(typeof e.messages=="object"&&e.messages!==null)return[e.messages];if(typeof e.prompt=="string")return[e.prompt];if(Array.isArray(e.contents))return e.contents;if(typeof e.content=="string")return[e.content];if(typeof e.text=="string")return[e.text];if(e.message!==void 0||e.references!==void 0){const t=[];if(Array.isArray(e.references))for(const n of e.references)typeof n=="string"?t.push({role:"system",content:n}):n!=null&&n.content?t.push({role:"system",content:typeof n.content=="string"?n.content:JSON.stringify(n.content)}):n!=null&&n.text&&t.push({role:"system",content:n.text});if(typeof e.message=="string"?t.push({role:"user",content:e.message}):typeof e.message=="object"&&e.message!==null&&t.push({role:"user",content:JSON.stringify(e.message)}),t.length>0)return t}if(typeof e.msg=="string")return[e.msg];if(typeof e.msg=="object"&&e.msg!==null)return[e.msg];if(e.context&&e.query)return[{role:"system",content:e.context},{role:"user",content:e.query}];if(typeof e.query=="string")return[e.query];if(e.input){if(Array.isArray(e.input))return e.input;if(Array.isArray(e.input.messages))return e.input.messages;if(typeof e.input.messages=="string")return[e.input.messages];if(typeof e.input.messages=="object"&&e.input.messages!==null)return[e.input.messages];if(typeof e.input.message=="string")return[e.input.message];if(typeof e.input.message=="object"&&e.input.message!==null)return[e.input.message];if(typeof e.input.text=="string")return[e.input.text];if(typeof e.input=="string")return[e.input]}if(e.data){if(Array.isArray(e.data.messages))return e.data.messages;if(typeof e.data.messages=="string")return[e.data.messages];if(typeof e.data.messages=="object"&&e.data.messages!==null)return[e.data.messages];if(typeof e.data.message=="string")return[e.data.message];if(typeof e.data.message=="object"&&e.data.message!==null)return[e.data.message];if(typeof e.data.prompt=="string")return[e.data.prompt];if(Array.isArray(e.data.contents))return e.data.contents;if(typeof e.data.content=="string")return[e.data.content];if(typeof e.data.text=="string")return[e.data.text]}return[]}async analyzeResponse(e,t,n,s,r=!0){let i=0,a=0,o=t.model;const l=(e.headers.get("content-type")||"").toLowerCase(),u=this.store.getSettings();if(!o||oe(o)){const g=await this.resolveSiYuanModelNameIfNeeded(t.source);g&&(o=g)}const c=this.tokenCounter.estimateFromMessages(this.extractMessages(s));if(this.logDebug("analyzeResponse",{url:t.source,contentType:l,ok:e.ok,status:e.status,estimatedInput:c,bodyPreview:JSON.stringify(s).slice(0,200)}),!e.body){this.logDebug("analyzeResponse: response body is null, using input estimate only"),i=c,a=0,this.recordCall(t,i,a,n,r,o);return}try{if(l.includes("text/event-stream")){const g=await this.parseSSEStream(e,t,u,c);i=g.inputTokens,a=g.outputTokens,g.model&&(o=g.model),g.aborted&&(r=!1)}else if(l.includes("application/json")||l.includes("text/json")){const g=await e.text();this.logDebug("JSON response raw text preview:",g.slice(0,300));const p=this.tryParseJson(g);if(he(p)&&typeof p.data!="string"){this.logDebug("Skipping SiYuan kernel non-AI response",{code:p.code,dataKeys:Object.keys(p.data||{})});return}const m=p?this.extractUsage(p):null;m&&(i=m.inputTokens,a=m.outputTokens),p!=null&&p.model&&(o=P(p.model,o)||o),m||(i=c,a=this.tokenCounter.estimateFromText(p?this.extractOutputText(p):g))}else if(l.includes("application/x-ndjson")||l.includes("application/ndjson")){const g=await this.parseNDJSONStream(e,t,u,c);i=g.inputTokens,a=g.outputTokens,g.model&&(o=g.model),g.aborted&&(r=!1)}else if(l.includes("text/plain")||l.includes("text/html")||l.includes("application/xml")||l.includes("text/xml")){const g=await e.text();i=c,a=this.tokenCounter.estimateFromText(g)}else{const g=await e.text();this.logDebug("Unknown content type, raw response preview:",g.slice(0,300)),i=c;const p=this.tryParseJson(g);if(p){const m=this.extractUsage(p);m?(i=m.inputTokens,a=m.outputTokens):a=this.tokenCounter.estimateFromText(this.extractOutputText(p))}else a=this.tokenCounter.estimateFromText(g)}}catch(g){console.warn("[TokenStats] Token extraction failed, using estimates:",g),i=c;try{const p=await e.text();a=this.tokenCounter.estimateFromText(p)}catch{a=0}}r&&i===0&&c>0&&(i=c),this.logDebug("analyzeResponse result:",{inputTokens:i,outputTokens:a,model:o,success:r});const d=i+a;this.recordCall(t,i,a,n,r,o),d>0&&u.showNotifications&&(this.keyManager.checkThreshold(t.apiKeyId,g=>{this.onThresholdAlert(t.apiKeyId,g)}),this.keyManager.checkGlobalThreshold(u,g=>{this.onThresholdAlert("global",g)}))}async parseSSEStream(e,t,n,s=0){var g;const r=(g=e.body)==null?void 0:g.getReader();if(!r)return{inputTokens:0,outputTokens:0,aborted:!1};const i=new TextDecoder;let a="";const o={fullContent:"",usage:null,model:void 0};let l=0,u=!1;const c=p=>{const m=p.split(`
`),k=[];let T="";for(const y of m){const S=y.trim();S&&(S.startsWith("data:")?k.push(S.slice(5).trimStart()):S.startsWith("event:")&&(T=S.slice(6).trim()))}if(k.length===0)return;const h=k.join(`
`);if(this.logDebug("SSE raw event",{eventType:T,data:h.slice(0,500)}),h!=="[DONE]")try{const y=JSON.parse(h);if(this.logDebug("SSE parsed chunk",{eventType:T,chunk:y}),typeof y!="object"||y===null)return;const S=this.collectChunkInfo(y,o.usage,o.model,o.fullContent,T),b=o.fullContent.length;o.usage=S.usage,o.model=S.model,o.fullContent=S.fullContent,this.logDebug("SSE collected after chunk",{eventType:T,contentAdded:o.fullContent.length-b,fullContentLength:o.fullContent.length,usage:o.usage})}catch(y){this.logDebug("SSE chunk JSON parse failed",{eventType:T,data:h.slice(0,300),error:String(y)})}};try{for(;;){const{done:p,value:m}=await r.read();if(p)break;a+=i.decode(m,{stream:!0}),this.logDebug("SSE buffer received",{bufferLength:a.length,decodedLength:(m==null?void 0:m.length)??0});const{events:k,remainder:T}=this.splitSSEEvents(a);a=T,this.logDebug("SSE events split",{eventCount:k.length,remainderLength:T.length});for(const h of k)c(h);if(n.abortStreamOnExceeded&&n.blockOnQuotaExceeded){if(l=o.usage?o.usage.outputTokens:this.tokenCounter.estimateFromText(o.fullContent),this.keyManager.wouldExceedQuota(t.apiKeyId,l)){u=!0;const h=this.store.getApiKey(t.apiKeyId),y=`[TokenStats] 流式响应已中断：${(h==null?void 0:h.name)||t.apiKeyName} 的 Token 限额在生成过程中被超出`;console.warn(y),this.onThresholdAlert(t.apiKeyId,y);try{await r.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(n,l)){u=!0;const h="[TokenStats] 流式响应已中断：全局 Token 限额在生成过程中被超出";console.warn(h),this.onThresholdAlert("global",h);try{await r.cancel()}catch{}break}}}if(a.trim().length>0){const{events:p}=this.splitSSEEvents(a+`

`);for(const m of p)c(m)}}finally{r.releaseLock()}if(this.logDebug("parseSSEStream finished",{contentLength:o.fullContent.length,hasUsage:!!o.usage,usage:o.usage,estimatedInput:s}),o.usage){const p=this.tokenCounter.estimateFromText(o.fullContent);return{inputTokens:o.usage.inputTokens||s,outputTokens:o.usage.outputTokens||p,model:o.model,aborted:u}}const d=this.tokenCounter.estimateFromText(o.fullContent);return{inputTokens:s,outputTokens:d,model:o.model,aborted:u}}splitSSEEvents(e){const t=[],s=e.replace(/\r\n/g,`
`).split(`

`),r=s.pop()||"";for(const i of s)i.trim()&&t.push(i);return{events:t,remainder:r}}collectChunkInfo(e,t,n,s,r=""){var l,u,c,d,g,p,m,k,T,h,y,S,b,v,L,C,R,$,U,E,A,I,D,N,F,_,G,Y,Z,ee,te,ne,se;const i=(...x)=>{const q=P(...x);if(q)return q;const W=J(n);return W&&!j(W)?W:""};if(e.model&&(n=i(e.model,n)),r==="content"||r==="reasoning")return e.token&&(s+=e.token,this.logDebug("SiYuan agent content appended",{token:e.token})),{usage:t,model:n,fullContent:s};if(r==="thinking")return e.reasoning&&(s+=e.reasoning,this.logDebug("SiYuan agent thinking appended",{reasoning:e.reasoning})),{usage:t,model:n,fullContent:s};if(r==="usage"){const x=e.promptTokens??e.prompt_tokens??0,q=e.completionTokens??e.completion_tokens??0;return this.logDebug("SiYuan agent usage event",{promptTokens:x,completionTokens:q,chunk:e}),(x>0||q>0)&&(t={inputTokens:x,outputTokens:q}),{usage:t,model:n,fullContent:s}}if(r==="done"||r==="error"||r==="retry"||r==="snapshot"||r==="tool_call"||r==="tool_result"||r==="confirm"||r==="question"||r==="frontend_tool_call")return{usage:t,model:n,fullContent:s};if(e.usage){const x=e.usage;t={inputTokens:x.prompt_tokens??x.input_tokens??x.promptTokens??0,outputTokens:x.completion_tokens??x.output_tokens??x.completionTokens??0}}const a=x=>{typeof x=="string"&&(s+=x)},o=(l=e.choices)==null?void 0:l[0];if((u=o==null?void 0:o.delta)!=null&&u.content&&a(o.delta.content),o!=null&&o.text&&a(o.text),(c=o==null?void 0:o.delta)!=null&&c.reasoning_content&&a(o.delta.reasoning_content),(d=o==null?void 0:o.message)!=null&&d.content&&a(o.message.content),o!=null&&o.content&&a(o.content),(p=(g=o==null?void 0:o.delta)==null?void 0:g.function_call)!=null&&p.arguments&&a(o.delta.function_call.arguments),(m=o==null?void 0:o.delta)!=null&&m.tool_calls)for(const x of o.delta.tool_calls)(k=x==null?void 0:x.function)!=null&&k.arguments&&a(x.function.arguments);if(e.type==="content_block_delta"&&((T=e.delta)!=null&&T.text)&&a(e.delta.text),e.type==="content_block_delta"&&((h=e.delta)!=null&&h.reasoning)&&a(e.delta.reasoning),e.type==="content_block_start"&&((y=e.content_block)!=null&&y.text)&&a(e.content_block.text),(S=e.message)!=null&&S.usage){const x=e.message.usage;t={inputTokens:x.input_tokens??0,outputTokens:x.output_tokens??0}}if(e.content){if(typeof e.content=="string")a(e.content);else if(Array.isArray(e.content))for(const x of e.content)a(typeof x=="string"?x:x==null?void 0:x.text)}if(e.output&&a(e.output),e.text&&a(e.text),e.result&&a(e.result),e.message&&(typeof e.message=="string"?a(e.message):e.message.content&&a(e.message.content)),(C=(L=(v=(b=e.data)==null?void 0:b.choices)==null?void 0:v[0])==null?void 0:L.delta)!=null&&C.content&&a(e.data.choices[0].delta.content),(U=($=(R=e.data)==null?void 0:R.choices)==null?void 0:$[0])!=null&&U.text&&a(e.data.choices[0].text),(D=(I=(A=(E=e.data)==null?void 0:E.choices)==null?void 0:A[0])==null?void 0:I.message)!=null&&D.content&&a(e.data.choices[0].message.content),(G=(_=(F=(N=e.data)==null?void 0:N.choices)==null?void 0:F[0])==null?void 0:_.delta)!=null&&G.reasoning_content&&a(e.data.choices[0].delta.reasoning_content),(Y=e.data)!=null&&Y.model&&(n=i(e.data.model,n)),(Z=e.data)!=null&&Z.usage){const x=e.data.usage;t={inputTokens:x.prompt_tokens??x.input_tokens??0,outputTokens:x.completion_tokens??x.output_tokens??0}}if((ee=e.data)!=null&&ee.content){if(typeof e.data.content=="string")a(e.data.content);else if(Array.isArray(e.data.content))for(const x of e.data.content)a(typeof x=="string"?x:x==null?void 0:x.text)}return(te=e.data)!=null&&te.output&&a(e.data.output),(ne=e.data)!=null&&ne.text&&a(e.data.text),(se=e.data)!=null&&se.result&&a(e.data.result),{usage:t,model:n,fullContent:s}}async parseNDJSONStream(e,t,n,s=0){var d;const r=(d=e.body)==null?void 0:d.getReader();if(!r)return{inputTokens:0,outputTokens:0,aborted:!1};const i=new TextDecoder;let a="",o="",l=null,u,c=!1;try{for(;;){const{done:g,value:p}=await r.read();if(g)break;a+=i.decode(p,{stream:!0});const m=a.split(`
`);a=m.pop()||"";for(const k of m)if(k.trim())try{const T=JSON.parse(k),h=this.collectChunkInfo(T,l,u,o);l=h.usage,u=h.model,o=h.fullContent}catch{}if(n.abortStreamOnExceeded&&n.blockOnQuotaExceeded){const k=l?l.outputTokens:this.tokenCounter.estimateFromText(o);if(this.keyManager.wouldExceedQuota(t.apiKeyId,k)){c=!0;try{await r.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(n,k)){c=!0;try{await r.cancel()}catch{}break}}}if(a.trim())try{const g=JSON.parse(a.trim()),p=this.collectChunkInfo(g,l,u,o);l=p.usage,u=p.model,o=p.fullContent}catch{}}finally{r.releaseLock()}if(this.logDebug("parseNDJSONStream finished",{contentLength:o.length,hasUsage:!!l,usage:l,estimatedInput:s}),l){const g=this.tokenCounter.estimateFromText(o);return{inputTokens:l.inputTokens||s,outputTokens:l.outputTokens||g,model:u,aborted:c}}return{inputTokens:s,outputTokens:this.tokenCounter.estimateFromText(o),model:u,aborted:c}}extractUsage(e){if(e!=null&&e.usage){const t=e.usage,n=t.prompt_tokens??t.input_tokens??t.promptTokens??0,s=t.completion_tokens??t.output_tokens??t.completionTokens??0;return n===0&&s===0?null:{inputTokens:n,outputTokens:s}}if((e==null?void 0:e.promptTokens)!==void 0||(e==null?void 0:e.completionTokens)!==void 0){const t=e.promptTokens??0,n=e.completionTokens??0;return t===0&&n===0?null:{inputTokens:t,outputTokens:n}}return null}extractOutputText(e){var r,i,a,o,l,u,c;if(!e)return"";const t=[],n=d=>{typeof d=="string"&&d?t.push(d):d&&typeof d.text=="string"&&d.text&&t.push(d.text)},s=d=>{var g,p,m,k,T,h,y,S;if(d&&(n((g=d==null?void 0:d.message)==null?void 0:g.content),n((p=d==null?void 0:d.message)==null?void 0:p.reasoning_content),n((m=d==null?void 0:d.delta)==null?void 0:m.content),n((k=d==null?void 0:d.delta)==null?void 0:k.reasoning_content),n(d==null?void 0:d.text),n(d==null?void 0:d.content),(h=(T=d==null?void 0:d.delta)==null?void 0:T.function_call)!=null&&h.arguments&&n(d.delta.function_call.arguments),(y=d==null?void 0:d.delta)!=null&&y.tool_calls))for(const b of d.delta.tool_calls)(S=b==null?void 0:b.function)!=null&&S.arguments&&n(b.function.arguments)};if(e.choices)for(const d of e.choices)s(d);if(e.content){if(typeof e.content=="string")n(e.content);else if(Array.isArray(e.content))for(const d of e.content)n(d)}if(e.output&&n(e.output),e.text&&n(e.text),e.result&&n(e.result),e.message&&(typeof e.message=="string"?n(e.message):(n(e.message.content),n(e.message.text))),e.response&&(typeof e.response=="string"?n(e.response):e.response.text?n(e.response.text):e.response.content&&n(e.response.content)),e.data)if(typeof e.data=="string")n(e.data);else{if(n((r=e.data)==null?void 0:r.text),n((i=e.data)==null?void 0:i.output),n((a=e.data)==null?void 0:a.result),n((o=e.data)==null?void 0:o.msg),(l=e.data)!=null&&l.choices)for(const d of e.data.choices)s(d);if((u=e.data)!=null&&u.content)if(typeof e.data.content=="string")n(e.data.content);else if(Array.isArray(e.data.content))for(const d of e.data.content)n(d);else n(e.data.content);(c=e.data)!=null&&c.message&&(n(e.data.message.content),n(e.data.message.text))}return e.msg&&n(e.msg),e.token&&n(e.token),e.reasoning&&n(e.reasoning),t.join("")}recordCall(e,t,n,s,r,i){const a=this.resolveModelName(i||e.model,e),o={id:pe(),apiKeyId:e.apiKeyId,apiKeyName:e.apiKeyName,source:e.source,model:a,inputTokens:t,outputTokens:n,totalTokens:t+n,timestamp:s,requestTime:Date.now()-s,success:r};this.store.addRecord(o),this.logDebug(`Recorded: ${o.apiKeyName} | ${o.model} | in=${t} out=${n} total=${o.totalTokens} success=${r}`),r&&t===0&&n===0&&console.warn("[TokenStats] 本次请求 token 计数为 0。若持续出现，请在设置中开启“启用调试日志”，并在浏览器控制台中查看请求/响应详情。")}resolveModelName(e,t){var i;const n=[];n.push(e,t.model),this.isSiYuanAiSource(t.source)&&n.push(this.resolveSiYuanModelNameFromConfig((i=this.siyuanConfigCache)==null?void 0:i.config));const s=P(...n);return s||J(e)||J(t.model)||t.source||"unknown"}async resolveSiYuanModelNameIfNeeded(e){return this.isSiYuanAiSource(e)?this.getSiYuanModelName():null}isSiYuanAiSource(e){return e==="siyuan-ai"||e.includes("/api/ai/")}async getSiYuanAiConfig(){var e,t;if(this.siyuanConfigCache&&Date.now()-this.siyuanConfigCache.ts<5e3)return this.siyuanConfigCache.config;try{const n=window.siyuan,s=(e=n==null?void 0:n.config)==null?void 0:e.ai;if(s)return this.siyuanConfigCache={config:s,ts:Date.now()},s;const r=await this.originalFetch("/api/system/getConf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});if(!r.ok)return null;const i=await r.json(),a=((t=i==null?void 0:i.data)==null?void 0:t.ai)||(i==null?void 0:i.ai);if(a)return this.siyuanConfigCache={config:a,ts:Date.now()},a}catch{}return null}findProviderByModel(e,t){if(!e||!t)return null;const n=String(t).toLowerCase().trim();if(!n)return null;const s=e.providers||[];for(const r of s){if(!r||!r.enabled)continue;if((r.models||[]).find(a=>{const o=String((a==null?void 0:a.id)||"").toLowerCase().trim(),l=String((a==null?void 0:a.name)||"").toLowerCase().trim(),u=String((a==null?void 0:a.displayName)||"").toLowerCase().trim();return o===n||l===n||u===n}))return r}return null}resolveSiYuanModelNameFromConfig(e){var a,o;if(!e)return null;const t=e.agent||{},n=e.editing||{},s=t.modelId||n.modelId,r=t.modelName||t.displayName||t.name||n.modelName||n.displayName||n.name;if(r&&!j(r))return r;const i=e.providers||[];if(s)for(const l of i){if(!(l!=null&&l.enabled))continue;const u=(l.models||[]).find(c=>(c==null?void 0:c.id)===s);if(u)return u.displayName||u.name||u.id||null}for(const l of i){if(!(l!=null&&l.enabled))continue;const u=((a=l.models)==null?void 0:a.find(c=>c==null?void 0:c.default))||((o=l.models)==null?void 0:o[0]);if(u)return u.displayName||u.name||u.id||null;if(l.name&&!j(l.name))return l.name}return s&&!j(s)?s:null}resolveModelNameFromProvider(e){if(!(e!=null&&e.models)||!Array.isArray(e.models))return null;const t=e.models.find(n=>n==null?void 0:n.default)||e.models[0];return t&&P(t.displayName,t.name,t.id)||null}async getSiYuanModelName(){return this.resolveSiYuanModelNameFromConfig(await this.getSiYuanAiConfig())}}function M(f){return f?f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}class ke{constructor(e,t){this.store=e,this.keyManager=t,this.setting=this.build()}build(){const e=this,t=new w.Setting({width:this.isMobile()?"92vw":"700px",height:"auto",confirmCallback:()=>{e.saveGlobalSettings(),w.showMessage("设置已保存",2e3,"info")}});setTimeout(()=>this.ensureDialogScrollable(),0);const n=this.store.getSettings();return t.addItem({title:"按 API Base URL 匹配 Key",description:"拦截请求时优先按 URL 匹配已配置的 API Key，适用于思源 AI、自定义代理等场景",createActionElement:()=>this.createCheckbox("matchByUrl",n.matchByUrl??!0)}),t.addItem({title:"拦截外部 API 调用",description:"拦截第三方插件对 OpenAI / Anthropic / DeepSeek 等外部 API 的直接调用",createActionElement:()=>this.createCheckbox("interceptExternalAPIs",n.interceptExternalAPIs)}),t.addItem({title:"超出限额时阻止请求",description:"当某个 API Key 的 Token 用量达到限额时，阻止后续请求（谨慎开启）",createActionElement:()=>this.createCheckbox("blockOnQuotaExceeded",n.blockOnQuotaExceeded)}),t.addItem({title:"限额重置周期",description:"按周期自动重置 Token 用量统计。每月 = 每月 1 日归零，每日 = 每天归零",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-quotaResetCycle";const r=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"none",label:"永不重置"}];for(const i of r){const a=document.createElement("option");a.value=i.value,a.textContent=i.label,n.quotaResetCycle===i.value&&(a.selected=!0),s.appendChild(a)}return s}}),t.addItem({title:"流式响应中途超限时中断",description:"当流式 AI 响应生成过程中 Token 超出限额时，立即中断流（避免继续消耗）",createActionElement:()=>this.createCheckbox("abortStreamOnExceeded",n.abortStreamOnExceeded)}),t.addItem({title:"显示阈值提醒通知",description:"当 Token 用量达到设定的提醒阈值时，在思源底部弹出通知",createActionElement:()=>this.createCheckbox("showNotifications",n.showNotifications)}),t.addItem({title:"顶栏显示实时用量徽标",description:"在顶栏图标上显示当前全局用量（无全局限额时显示总 token 数，设有全局限额时显示百分比，颜色随阈值变化）",createActionElement:()=>this.createCheckbox("showTopBarBadge",n.showTopBarBadge)}),t.addItem({title:"启用调试日志",description:"在浏览器控制台输出请求/响应调试信息，排查 token 统计为 0 等问题（重启插件后生效）",createActionElement:()=>this.createCheckbox("debugLogging",n.debugLogging??!1)}),t.addItem({title:"最大记录数",description:"保留的最近调用记录数量，超出后自动裁剪旧记录（节省存储空间）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-max-records",s.value=String(n.maxRecords),s.min="100",s.max="50000",s.step="100",s}}),t.addItem({title:"全局总 Token 限额",description:"所有 API Key 的 Token 用量总和超过此值时触发拦截（0 = 不开启）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalQuotaLimit",s.value=String(n.globalQuotaLimit||0),s.min="0",s.step="1000",s}}),t.addItem({title:"全局提醒阈值 (%)",description:"全局 Token 用量达到此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalAlertThreshold",s.value=String(n.globalAlertThreshold||0),s.min="0",s.max="100",s.step="5",s}}),t.addItem({title:"全局限额重置周期",description:"按周期自动重置全局 Token 用量统计",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-globalQuotaResetCycle";const r=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"none",label:"永不重置"}];for(const i of r){const a=document.createElement("option");a.value=i.value,a.textContent=i.label,n.globalQuotaResetCycle===i.value&&(a.selected=!0),s.appendChild(a)}return s}}),t.addItem({title:"全局已用 Token 校准",description:"手动输入从第三方平台导入的历史已用 Token，叠加到全局统计中（0 = 不校准）",createActionElement:()=>{const s=document.createElement("div");s.style.display="flex",s.style.gap="8px",s.style.alignItems="center";const r=(i,a,o)=>{const l=document.createElement("div");l.style.flex="1";const u=document.createElement("div");u.style.fontSize="12px",u.style.color="var(--b3-theme-on-surface)",u.textContent=a;const c=document.createElement("input");return c.type="number",c.className="b3-text-field",c.id=`tks-${i}`,c.value=String(o||0),c.min="0",c.step="100",c.style.width="100%",l.appendChild(u),l.appendChild(c),l};return s.appendChild(r("globalUsedTokensOffset","总 Token",n.globalUsedTokensOffset)),s.appendChild(r("globalUsedInputTokensOffset","输入",n.globalUsedInputTokensOffset)),s.appendChild(r("globalUsedOutputTokensOffset","输出",n.globalUsedOutputTokensOffset)),s}}),t.addItem({title:"全局费用限额",description:"当前周期内所有 API 调用的估算总费用超过此金额时触发提醒与拦截（0 = 不开启；需先在「费用估算配置」中设置模型单价）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalCostLimit",s.value=String(n.globalCostLimit||0),s.min="0",s.step="1",s}}),t.addItem({title:"全局费用提醒阈值 (%)",description:"全局费用达到限额的此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalCostAlertThreshold",s.value=String(n.globalCostAlertThreshold||0),s.min="0",s.max="100",s.step="5",s}}),t.addItem({title:"费用估算配置",description:"设置每模型单价（每 1K tokens 的输入/输出价格）与资源包（一个包涵盖多个模型），仪表盘将显示估算费用",actionElement:this.createButton("配置",()=>this.openPriceEditor())}),t.addItem({title:"API Key 管理",description:"添加、编辑、删除 API Key，为每个 Key 设置限额与提醒阈值",actionElement:this.createButton("管理 API Key",()=>this.openKeyManager())}),t.addItem({title:"导出统计数据",description:"将所有统计数据导出为 JSON 文件",actionElement:this.createButton("导出",()=>this.exportData())}),t.addItem({title:"清除调用记录",description:"删除所有 Token 调用记录，但保留 API Key 配置",actionElement:this.createButton("清除记录",()=>this.clearRecords())}),t.addItem({title:"重置全部数据",description:"清除所有调用记录并恢复默认设置，API Key 配置保留不变",actionElement:this.createButton("重置",()=>this.resetAll())}),t}createCheckbox(e,t){const n=document.createElement("input");return n.type="checkbox",n.id=`tks-${e}`,n.className="b3-switch",n.checked=t,n}createButton(e,t){const n=document.createElement("button");return n.className="b3-button b3-button--outline",n.textContent=e,n.style.fontSize="14px",n.addEventListener("click",t),n}saveGlobalSettings(){var m,k,T,h,y,S,b;const e=v=>{var L;return((L=document.getElementById(`tks-${v}`))==null?void 0:L.checked)??!1},t=parseInt(((m=document.getElementById("tks-max-records"))==null?void 0:m.value)||"5000",10),n=((k=document.getElementById("tks-quotaResetCycle"))==null?void 0:k.value)||"monthly",s=parseInt(((T=document.getElementById("tks-globalQuotaLimit"))==null?void 0:T.value)||"0",10)||0,r=parseInt(((h=document.getElementById("tks-globalAlertThreshold"))==null?void 0:h.value)||"0",10)||0,i=((y=document.getElementById("tks-globalQuotaResetCycle"))==null?void 0:y.value)||"monthly",a=v=>{var L;return parseInt(((L=document.getElementById(`tks-${v}`))==null?void 0:L.value)||"0",10)||0},o=Math.max(0,a("globalUsedTokensOffset")),l=Math.max(0,a("globalUsedInputTokensOffset")),u=Math.max(0,a("globalUsedOutputTokensOffset")),c=parseFloat(((S=document.getElementById("tks-globalCostLimit"))==null?void 0:S.value)||"0")||0,d=parseInt(((b=document.getElementById("tks-globalCostAlertThreshold"))==null?void 0:b.value)||"0",10)||0,g=s!==this.store.getSettings().globalQuotaLimit||r!==this.store.getSettings().globalAlertThreshold;this.store.updateSettings({matchByUrl:e("matchByUrl"),interceptExternalAPIs:e("interceptExternalAPIs"),blockOnQuotaExceeded:e("blockOnQuotaExceeded"),quotaResetCycle:n,abortStreamOnExceeded:e("abortStreamOnExceeded"),showNotifications:e("showNotifications"),showTopBarBadge:e("showTopBarBadge"),debugLogging:e("debugLogging"),maxRecords:isNaN(t)?5e3:Math.max(100,Math.min(5e4,t)),globalQuotaLimit:Math.max(0,s),globalAlertThreshold:Math.max(0,Math.min(100,r)),globalQuotaResetCycle:i,globalUsedTokensOffset:o,globalUsedInputTokensOffset:l,globalUsedOutputTokensOffset:u,globalCostLimit:Math.max(0,c),globalCostAlertThreshold:Math.max(0,Math.min(100,d))}),g&&this.keyManager.resetGlobalAlert(),(c!==this.store.getSettings().globalCostLimit||d!==this.store.getSettings().globalCostAlertThreshold)&&this.keyManager.resetGlobalCostAlert()}refreshFromStore(){var i;const e=this.store.getSettings(),t=document.activeElement,n=!!t&&((i=t.id)==null?void 0:i.startsWith("tks-")),s=(a,o)=>{if(n&&t.id===`tks-${a}`)return;const l=document.getElementById(`tks-${a}`);l&&(l.checked=!!o)},r=(a,o)=>{if(n&&t.id===`tks-${a}`)return;const l=document.getElementById(`tks-${a}`);l&&(l.value=String(o))};if(s("matchByUrl",e.matchByUrl??!0),s("interceptExternalAPIs",e.interceptExternalAPIs),s("blockOnQuotaExceeded",e.blockOnQuotaExceeded),s("abortStreamOnExceeded",e.abortStreamOnExceeded),s("showNotifications",e.showNotifications),s("showTopBarBadge",e.showTopBarBadge),s("debugLogging",e.debugLogging??!1),r("max-records",e.maxRecords),r("globalQuotaLimit",e.globalQuotaLimit),r("globalAlertThreshold",e.globalAlertThreshold),r("globalUsedTokensOffset",e.globalUsedTokensOffset),r("globalUsedInputTokensOffset",e.globalUsedInputTokensOffset),r("globalUsedOutputTokensOffset",e.globalUsedOutputTokensOffset),r("globalCostLimit",e.globalCostLimit),r("globalCostAlertThreshold",e.globalCostAlertThreshold),!(n&&t.id==="tks-quotaResetCycle")){const a=document.getElementById("tks-quotaResetCycle");a&&(a.value=e.quotaResetCycle)}if(!(n&&t.id==="tks-globalQuotaResetCycle")){const a=document.getElementById("tks-globalQuotaResetCycle");a&&(a.value=e.globalQuotaResetCycle)}}ensureDialogScrollable(){const e=document.getElementById("tks-matchByUrl")||document.getElementById("tks-interceptExternalAPIs");if(!e)return;const t=e.closest(".b3-dialog");if(!t)return;const n=t.querySelector(".b3-dialog__body");n&&(t.style.maxHeight="85vh",n.style.maxHeight="calc(85vh - 120px)",n.style.overflowY="auto")}isMobile(){const e=w.getFrontend();return e==="mobile"||e==="browser-mobile"}openPriceEditor(){const e=this.store.getSettings(),t=this.isMobile(),n=new w.Dialog({title:"费用估算配置",width:t?"95vw":"640px",height:"auto",content:'<div id="tks-price-editor" class="tks-price-editor"></div>'});setTimeout(()=>this.renderPriceEditor(n,{...e.modelPrices},e.currency||"¥",(e.pricePacks||[]).map(s=>({...s,models:[...s.models]}))),50)}renderPriceEditor(e,t,n,s){var m,k,T;const r=e.element.querySelector("#tks-price-editor");if(!r)return;const i=this.store.getSettings().recalcCostOnPriceChange!==!1,a=(h,y,S)=>`
      <div class="tks-price-row">
        <input type="text" class="b3-text-field tks-price-model" value="${M(h)}" placeholder="模型名（如 gpt-4o）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-input" value="${M(String(y))}" placeholder="输入/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-output" value="${M(String(S))}" placeholder="输出/1K" />
        <button class="b3-button b3-button--small b3-button--danger tks-price-del" title="删除">✕</button>
      </div>
    `,o=h=>`
      <div class="tks-pack-row" data-pack-id="${M(h.id)}">
        <input type="text" class="b3-text-field tks-pack-name" value="${M(h.name)}" placeholder="资源包名（如 通义千问）" />
        <input type="number" step="1" min="0" class="b3-text-field tks-pack-total" value="${M(String(h.totalTokens||0))}" placeholder="总 Tokens（0 不限）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-input" value="${M(String(h.input))}" placeholder="输入单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-output" value="${M(String(h.output))}" placeholder="输出单价/1K" />
        <input type="text" class="b3-text-field tks-pack-models" value="${M((h.models||[]).join(", "))}" placeholder="涵盖模型，逗号分隔" />
        <button class="b3-button b3-button--small b3-button--danger tks-pack-del" title="删除">✕</button>
      </div>
    `,l=Object.entries(t).map(([h,y])=>a(h,y.input,y.output)).join(""),u=s.map(h=>o(h)).join("");r.innerHTML=`
      <div class="tks-price-head">
        <label>货币类型</label>
        <select id="tks-price-currency" class="b3-select fn__size200">
          <option value="¥" ${n==="¥"?"selected":""}>¥ (人民币)</option>
          <option value="$" ${n==="$"?"selected":""}>$ (美元)</option>
        </select>
      </div>
      <div class="tks-price-hint">模型名不区分大小写，保存时自动归一化为小写。</div>
      <div class="tks-price-opt">
        <label class="tks-price-opt-label"><input type="checkbox" id="tks-price-recalc" ${i?"checked":""} /> 单价变更后自动重算历史费用</label>
        <span class="tks-price-opt-hint">开启后仪表盘与记录费用随单价实时更新；关闭则每条记录的费用在生成时固定，不再随单价变化。</span>
      </div>
      <div class="tks-price-header">
        <span class="tks-price-hd-model">模型名称</span>
        <span class="tks-price-hd-input">输入/1K</span>
        <span class="tks-price-hd-output">输出/1K</span>
        <span></span>
      </div>
      <div class="tks-price-section-title">按模型单价</div>
      <div class="tks-price-list" id="tks-price-list">${l||'<div class="tks-price-empty">尚未配置任何模型单价</div>'}</div>
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
      <div class="tks-pack-list" id="tks-pack-list">${u||'<div class="tks-price-empty">尚未配置任何资源包</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-pack-add">+ 添加资源包</button>
        <button class="b3-button b3-button--text" id="tks-price-save">保存</button>
      </div>
    `;const c=r.querySelector("#tks-price-list"),d=r.querySelector("#tks-pack-list"),g=h=>{var y;(y=h.querySelector(".tks-price-del"))==null||y.addEventListener("click",()=>{h.remove(),c.querySelectorAll(".tks-price-row").length===0&&(c.innerHTML='<div class="tks-price-empty">尚未配置任何模型单价</div>')})};c.querySelectorAll(".tks-price-row").forEach(h=>g(h)),(m=r.querySelector("#tks-price-add"))==null||m.addEventListener("click",()=>{const h=c.querySelector(".tks-price-empty");h&&h.remove(),c.insertAdjacentHTML("beforeend",a("",0,0)),g(c.lastElementChild)});const p=h=>{var y;(y=h.querySelector(".tks-pack-del"))==null||y.addEventListener("click",()=>{h.remove(),d.querySelectorAll(".tks-pack-row").length===0&&(d.innerHTML='<div class="tks-price-empty">尚未配置任何资源包</div>')})};d.querySelectorAll(".tks-pack-row").forEach(h=>p(h)),(k=r.querySelector("#tks-pack-add"))==null||k.addEventListener("click",()=>{const h=d.querySelector(".tks-price-empty");h&&h.remove();const y={id:`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,name:"",totalTokens:0,input:0,output:0,models:[]};d.insertAdjacentHTML("beforeend",o(y)),p(d.lastElementChild)}),(T=r.querySelector("#tks-price-save"))==null||T.addEventListener("click",()=>{var v,L;const h={};c.querySelectorAll(".tks-price-row").forEach(C=>{var E,A,I;const R=(((E=C.querySelector(".tks-price-model"))==null?void 0:E.value)||"").toLowerCase().trim().replace(/[\s\-_]+/g,""),$=parseFloat(((A=C.querySelector(".tks-price-input"))==null?void 0:A.value)||"0")||0,U=parseFloat(((I=C.querySelector(".tks-price-output"))==null?void 0:I.value)||"0")||0;R&&(h[R]={input:$,output:U})});const y=[];d.querySelectorAll(".tks-pack-row").forEach(C=>{var D,N,F,_,G;const R=C.dataset.packId||`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,$=(((D=C.querySelector(".tks-pack-name"))==null?void 0:D.value)||"").trim(),U=parseInt(((N=C.querySelector(".tks-pack-total"))==null?void 0:N.value)||"0",10)||0,E=parseFloat(((F=C.querySelector(".tks-pack-input"))==null?void 0:F.value)||"0")||0,A=parseFloat(((_=C.querySelector(".tks-pack-output"))==null?void 0:_.value)||"0")||0,I=(((G=C.querySelector(".tks-pack-models"))==null?void 0:G.value)||"").split(/[,，]/).map(Y=>Y.toLowerCase().trim().replace(/[\s\-_]+/g,"")).filter(Boolean);($||I.length>0)&&y.push({id:R,name:$,totalTokens:U,input:E,output:A,models:I})});const S=((v=r.querySelector("#tks-price-currency"))==null?void 0:v.value)||"¥",b=((L=r.querySelector("#tks-price-recalc"))==null?void 0:L.checked)??!0;this.store.updateSettings({currency:S,modelPrices:h,pricePacks:y,recalcCostOnPriceChange:b}),this.store.save(),e.destroy(),w.showMessage("费用配置已保存",2e3,"info")})}openKeyManager(){const e=this.isMobile(),t=new w.Dialog({title:"API Key 管理",width:e?"95vw":"750px",height:e?"80vh":"500px",content:'<div id="tks-key-mgr" class="tks-key-mgr"></div>'});setTimeout(()=>this.renderKeyList(t),50)}renderKeyList(e){var r,i,a;const t=e.element.querySelector("#tks-key-mgr");if(!t)return;const n=this.store.getApiKeys();t.innerHTML=`
      <div class="tks-key-toolbar">
        <button class="b3-button b3-button--text" id="tks-add-key">+ 添加 API Key</button>
        <button class="b3-button b3-button--text" id="tks-export-keys">📤 导出</button>
        <button class="b3-button b3-button--text" id="tks-import-keys">📥 导入</button>
        <span class="tks-key-hint">共 ${n.length} 个 Key</span>
      </div>
      <div class="tks-key-list" id="tks-key-list-items"></div>
    `;const s=t.querySelector("#tks-key-list-items");for(const o of n){const l=this.keyManager.getKeyUsage(o.id),u=o.quotaLimit>0?Math.min(100,l.totalTokens/o.quotaLimit*100):0,c=document.createElement("div");c.className="tks-key-item",c.innerHTML=`
        <div class="tks-key-info">
          <div class="tks-key-name">
            ${this.providerIcon(o.provider)} ${M(o.name)}
            ${o.enabled?"":'<span class="tks-badge tks-badge-off">已禁用</span>'}
          </div>
          <div class="tks-key-detail">
            <span class="tks-key-masked">${M(o.keyMasked)}</span>
            ${o.provider?`<span class="tks-key-provider">${M(o.provider)}</span>`:""}
            ${o.baseUrl?`<span class="tks-key-url" title="${M(o.baseUrl)}">${M(o.baseUrl)}</span>`:""}
          </div>
          <div class="tks-key-quota">
            <div class="tks-quota-bar">
              <div class="tks-quota-fill ${u>=(o.alertThreshold||100)?"tks-quota-alert":""}"
                   style="width: ${u}%"></div>
            </div>
            <span class="tks-quota-text">
              ${l.totalTokens.toLocaleString()}${o.quotaLimit>0?" / "+o.quotaLimit.toLocaleString():""} tokens
              ${o.alertThreshold>0?`· 阈值 ${o.alertThreshold}%`:""}
            </span>
          </div>
        </div>
        <div class="tks-key-actions">
          <button class="b3-button b3-button--small" data-action="edit" data-id="${M(o.id)}">编辑</button>
          <button class="b3-button b3-button--small b3-button--danger" data-action="delete" data-id="${M(o.id)}">删除</button>
        </div>
      `,s.appendChild(c)}(r=t.querySelector("#tks-add-key"))==null||r.addEventListener("click",()=>{this.openKeyEditor(e,null)}),(i=t.querySelector("#tks-export-keys"))==null||i.addEventListener("click",()=>{this.exportKeys()}),(a=t.querySelector("#tks-import-keys"))==null||a.addEventListener("click",()=>{this.importKeys(e)}),t.querySelectorAll("[data-action]").forEach(o=>{o.addEventListener("click",l=>{const u=l.currentTarget,c=u.dataset.action,d=u.dataset.id;if(c==="edit"){const g=this.store.getApiKey(d);g&&this.openKeyEditor(e,g)}else c==="delete"&&w.confirm("删除 API Key","确定删除此 API Key 吗？相关统计记录将保留。",()=>{this.store.deleteApiKey(d),this.keyManager.resetAlert(d),this.renderKeyList(e),w.showMessage("已删除",2e3,"info")})})})}openKeyEditor(e,t){var a,o,l;const n=!!t,s=this.isMobile(),r=new w.Dialog({title:n?"编辑 API Key":"添加 API Key",width:s?"92vw":"500px",height:"auto",content:`
        <div class="tks-key-editor">
          <div class="tks-form-row">
            <label>名称</label>
            <input type="text" id="tke-name" class="b3-text-field" value="${M((t==null?void 0:t.name)||"")}" placeholder="例如：我的 OpenAI Key" />
          </div>
          <div class="tks-form-row">
            <label>API Key</label>
            <input type="password" id="tke-key" class="b3-text-field" value="${M((t==null?void 0:t.keyFull)||"")}" placeholder="sk-..." />
            <div class="tks-form-hint">用于匹配请求头中的 Authorization / x-api-key，留空则仅按 URL 匹配</div>
          </div>
          <div class="tks-form-row">
            <label>提供商名称</label>
            <input type="text" id="tke-provider" class="b3-text-field" value="${M((t==null?void 0:t.provider)||"")}" list="tke-provider-list" placeholder="例如：OpenAI、DeepSeek、华为云、SiYuan" />
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
            <input type="text" id="tke-url" class="b3-text-field" value="${M((t==null?void 0:t.baseUrl)||"")}" placeholder="例如：https://api.openai.com/v1/chat/completions，或 /api/ai/" />
            <div class="tks-form-hint">用于 URL 匹配。可填完整 URL、域名或路径（如 /api/ai/）。留空则仅按 Key 匹配。</div>
          </div>
          <div class="tks-form-row">
            <label>关联模型</label>
            <input type="text" id="tke-models" class="b3-text-field" value="${M(t!=null&&t.models?t.models.join(", "):"")}" placeholder="例如：Qwen/Qwen3-8B, sensenova-6.7-flash-lite" />
            <div class="tks-form-hint">多个模型用逗号分隔。当多个 Key 使用相同 Base URL 时，按请求模型匹配到对应 Key</div>
          </div>
          <div class="tks-form-row tks-form-row-2col">
            <div>
              <label>Token 限额</label>
              <input type="number" id="tke-quota" class="b3-text-field" value="${(t==null?void 0:t.quotaLimit)||0}" min="0" step="1000" />
              <div class="tks-form-hint">0 = 不限</div>
            </div>
            <div>
              <label>提醒阈值 (%)</label>
              <input type="number" id="tke-threshold" class="b3-text-field" value="${(t==null?void 0:t.alertThreshold)||0}" min="0" max="100" step="5" />
              <div class="tks-form-hint">0 = 不提醒</div>
            </div>
          </div>
          <div class="tks-form-row tks-form-row-2col">
            <div>
              <label>已用 Token 校准</label>
              <input type="number" id="tke-usedTokensOffset" class="b3-text-field" value="${(t==null?void 0:t.usedTokensOffset)??0}" min="0" step="100" />
              <div class="tks-form-hint">从第三方平台导入的历史用量</div>
            </div>
            <div style="display:flex;gap:8px">
              <div style="flex:1">
                <label>已用输入</label>
                <input type="number" id="tke-usedInputTokensOffset" class="b3-text-field" value="${(t==null?void 0:t.usedInputTokensOffset)??0}" min="0" step="100" />
              </div>
              <div style="flex:1">
                <label>已用输出</label>
                <input type="number" id="tke-usedOutputTokensOffset" class="b3-text-field" value="${(t==null?void 0:t.usedOutputTokensOffset)??0}" min="0" step="100" />
              </div>
            </div>
          </div>
          <div class="tks-form-row tks-form-row-2col">
            <div>
              <label>状态</label>
              <select id="tke-enabled" class="b3-select">
                <option value="true" ${(t==null?void 0:t.enabled)!==!1?"selected":""}>启用</option>
                <option value="false" ${(t==null?void 0:t.enabled)===!1?"selected":""}>禁用</option>
              </select>
            </div>
          </div>
          <div class="tks-form-actions">
            <button class="b3-button b3-button--cancel" id="tke-cancel">取消</button>
            <button class="b3-button b3-button--text" id="tke-save">保存</button>
          </div>
        </div>
      `}),i=r.element;(a=i.querySelector("#tke-provider"))==null||a.addEventListener("input",u=>{const c=u.target.value.trim(),d=i.querySelector("#tke-url");!d.value&&c&&(d.value=this.keyManager.getDefaultBaseUrl(c))}),(o=i.querySelector("#tke-cancel"))==null||o.addEventListener("click",()=>r.destroy()),(l=i.querySelector("#tke-save"))==null||l.addEventListener("click",()=>{const u=i.querySelector("#tke-name").value.trim(),c=i.querySelector("#tke-key").value.trim(),d=i.querySelector("#tke-provider").value.trim(),g=i.querySelector("#tke-url").value.trim(),p=i.querySelector("#tke-models").value.split(/[,，]/).map(b=>b.trim()).filter(Boolean),m=parseInt(i.querySelector("#tke-quota").value,10)||0,k=parseInt(i.querySelector("#tke-threshold").value,10)||0,T=Math.max(0,parseInt(i.querySelector("#tke-usedTokensOffset").value,10)||0),h=Math.max(0,parseInt(i.querySelector("#tke-usedInputTokensOffset").value,10)||0),y=Math.max(0,parseInt(i.querySelector("#tke-usedOutputTokensOffset").value,10)||0),S=i.querySelector("#tke-enabled").value==="true";if(!u){w.showMessage("请输入名称",3e3,"error");return}if(n&&t)this.store.updateApiKey(t.id,{name:u,keyFull:c,keyMasked:this.keyManager.maskKey(c),provider:d,baseUrl:g,models:p,quotaLimit:m,alertThreshold:k,usedTokensOffset:T,usedInputTokensOffset:h,usedOutputTokensOffset:y,enabled:S}),this.keyManager.resetAlert(t.id);else{const b={id:this.keyManager.generateKeyId(),name:u,keyFull:c,keyMasked:this.keyManager.maskKey(c),provider:d,baseUrl:g,models:p,quotaLimit:m,usedTokensOffset:T,usedInputTokensOffset:h,usedOutputTokensOffset:y,alertThreshold:k,enabled:S,createdAt:Date.now()};this.store.addApiKey(b)}this.store.save(),r.destroy(),this.renderKeyList(e),w.showMessage("已保存",2e3,"info")})}exportKeys(){const e=this.store.getApiKeys(),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),apiKeys:e},null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=`siyuan-token-stats-keys-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),setTimeout(()=>{document.body.removeChild(r),URL.revokeObjectURL(s)},0),w.showMessage(`已导出 ${e.length} 个 API Key`,2e3,"info")}importKeys(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async n=>{var r;const s=(r=n.target.files)==null?void 0:r[0];if(s)try{const i=await s.text(),a=JSON.parse(i),o=Array.isArray(a)?a:a.apiKeys;if(!Array.isArray(o))throw new Error("导入文件格式不正确，未找到 apiKeys 数组");let l=0,u=0;for(const d of o){if(!d||!d.keyFull)continue;const g=Array.isArray(d.models)?d.models:typeof d.models=="string"?d.models.split(/[,，]/).map(m=>m.trim()).filter(Boolean):[],p=this.store.getApiKeys().find(m=>m.keyFull===d.keyFull);p?(this.store.updateApiKey(p.id,{name:d.name||p.name,provider:d.provider||p.provider,baseUrl:d.baseUrl||p.baseUrl,models:g.length?g:p.models||[],quotaLimit:d.quotaLimit??p.quotaLimit,alertThreshold:d.alertThreshold??p.alertThreshold,enabled:d.enabled??p.enabled}),u++):(this.store.addApiKey({id:this.keyManager.generateKeyId(),name:d.name||"Imported Key",keyFull:d.keyFull,keyMasked:this.keyManager.maskKey(d.keyFull),provider:d.provider||"",baseUrl:d.baseUrl||"",models:g,quotaLimit:d.quotaLimit||0,usedTokensOffset:d.usedTokensOffset||0,usedInputTokensOffset:d.usedInputTokensOffset||0,usedOutputTokensOffset:d.usedOutputTokensOffset||0,alertThreshold:d.alertThreshold||0,enabled:d.enabled!==!1,createdAt:Date.now()}),l++)}this.store.save(),this.renderKeyList(e);const c=[];l>0&&c.push(`新增 ${l} 个`),u>0&&c.push(`更新 ${u} 个`),w.showMessage(`导入成功：${c.join("，")||"无变化"}`,2e3,"info")}catch(i){console.error("[TokenStats] Import keys failed:",i),w.showMessage("导入失败："+i.message,3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}providerIcon(e){const t=(e||"").toLowerCase();return{siyuan:"🐿️",openai:"🤖",anthropic:"🧠",deepseek:"🔍",siliconflow:"🌊",华为云:"☁️",huawei:"☁️"}[t]||"🔑"}exportData(){const e=this.store.exportAll(),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,s.click(),URL.revokeObjectURL(n),w.showMessage("数据已导出",2e3,"info")}clearRecords(){w.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。此操作不可撤销。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),w.showMessage("记录已清除",2e3,"info")})}resetAll(){w.confirm("重置全部数据","⚠️ 确定重置吗？所有调用记录将被清除，设置恢复默认值。API Key 配置保留不变，此操作不可撤销。",()=>{this.store.clearRecords(),this.store.resetSettings(),this.keyManager.clearAllAlerts(),w.showMessage("已重置",2e3,"info")})}}function K(f){return f?f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function O(f){return`${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`}function be(f){const e=f.getDay(),t=(e===0?-6:1)-e,n=new Date(f);return n.setDate(f.getDate()+t),n.setHours(0,0,0,0),n}function ye(f){return new Date(f.getFullYear(),f.getMonth(),1)}class ve{constructor(e,t){this.dialog=null,this.summary=null,this.refreshTimer=null,this.store=e,this.keyManager=t}show(){try{if(this.summary=this.computeSummary(),this.dialog&&this.dialog.element&&this.dialog.element.isConnected){this.refreshContent();return}this.dialog&&(this.dialog.destroy(),this.dialog=null);const e=this.isMobile();this.dialog=new w.Dialog({title:"📊 Token 用量统计",width:e?"95vw":"900px",height:e?"85vh":"700px",content:this.renderHTML(this.summary),destroyCallback:()=>{this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null),this.dialog=null}}),this.bindEvents(),this.refreshTimer=setInterval(()=>{if(!this.dialog||!this.dialog.element||!this.dialog.element.isConnected){this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null);return}this.refreshContent()},3e3)}catch(e){console.error("[TokenStats] Dashboard show error:",e),w.showMessage("仪表盘打开失败: "+e.message,3e3,"error")}}refreshContent(){if(!this.dialog||!this.dialog.element)return;const e=this.dialog.element.querySelector(".b3-dialog__body");if(!e)return;const t=document.activeElement;if(t&&e.contains(t)&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"))return;const n=e.scrollTop;this.summary=this.computeSummary(),e.innerHTML=this.renderHTML(this.summary),this.bindEvents();const s=this.dialog.element.querySelector(".b3-dialog__body");s&&(s.scrollTop=n)}isMobile(){const e=w.getFrontend();return e==="mobile"||e==="browser-mobile"}computeSummary(){const e=this.store.getRecords(),t=this.store.getApiKeys(),n=this.store.getSettings(),s={totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalRequests:e.length,successRequests:0,failedRequests:0,averageRequestTime:0,totalCost:0,modelStats:{},dailyStats:[],keyStats:[]};let r=0;for(const i of e){s.totalTokens+=i.totalTokens,s.totalInputTokens+=i.inputTokens,s.totalOutputTokens+=i.outputTokens,s.totalCost+=this.store.getRecordCost(i),r+=i.requestTime,i.success?s.successRequests++:s.failedRequests++;const a=i.model||"unknown",o=a.toLowerCase().trim();s.modelStats[o]||(s.modelStats[o]={model:a,count:0,tokens:0,inputTokens:0,outputTokens:0,cost:0}),s.modelStats[o].count++,s.modelStats[o].tokens+=i.totalTokens,s.modelStats[o].inputTokens+=i.inputTokens,s.modelStats[o].outputTokens+=i.outputTokens,s.modelStats[o].cost+=this.store.getRecordCost(i)}s.averageRequestTime=e.length>0?r/e.length:0,s.dailyStats=this.computeTrendStats(e,n);for(const i of t){const a=this.keyManager.getKeyUsage(i.id),o=i.quotaLimit>0?Math.min(100,a.totalTokens/i.quotaLimit*100):0;s.keyStats.push({apiKeyId:i.id,apiKeyName:i.name,totalTokens:a.totalTokens,totalInputTokens:a.totalInputTokens,totalOutputTokens:a.totalOutputTokens,totalRequests:a.totalRequests,quotaLimit:i.quotaLimit,alertThreshold:i.alertThreshold,usagePercent:o,isAlert:i.alertThreshold>0&&o>=i.alertThreshold,isExceeded:i.quotaLimit>0&&a.totalTokens>=i.quotaLimit})}return s.keyStats.sort((i,a)=>a.totalTokens-i.totalTokens),s}computeTrendStats(e,t){const{trendDateRangeStart:n,trendDateRangeEnd:s,trendAggregation:r}=t;let i=1/0,a=-1/0;for(const h of e)i=Math.min(i,h.timestamp),a=Math.max(a,h.timestamp);const o=e.length>0&&isFinite(i)&&isFinite(a),l=new Date;l.setHours(0,0,0,0);const u=o?new Date(i):new Date(l.getTime()-13*24*60*60*1e3),c=o?new Date(a):l,d=n||O(u),g=s||O(c),p=new Date(d+"T00:00:00"),m=new Date(g+"T23:59:59.999"),k={},T=(h,y,S)=>{k[h]||(k[h]={date:h,tokens:0,count:0}),k[h].tokens+=y,k[h].count+=S};for(const h of e){if(h.timestamp<p.getTime()||h.timestamp>m.getTime())continue;const y=new Date(h.timestamp);if(r==="weekly"){const S=be(y);T(O(S),h.totalTokens,1)}else if(r==="monthly"){const S=ye(y);T(O(S),h.totalTokens,1)}else T(O(y),h.totalTokens,1)}return Object.values(k).sort((h,y)=>h.date.localeCompare(y.date))}renderHTML(e){const t=this.store.getRecentRecords(30),n=Math.max(...e.dailyStats.map(c=>c.tokens),1),s=Math.max(...Object.values(e.modelStats).map(c=>c.tokens),1),r=this.store.getSettings(),i=this.keyManager.getGlobalUsagePercent(r),a=this.keyManager.getGlobalUsage(r),o=this.getMinRecordDate(),l=this.getMaxRecordDate(),u=`
      <div class="tks-trend-controls">
        <label>区间：</label>
        <input type="date" id="tks-trend-start" class="b3-text-field" value="${K(r.trendDateRangeStart||o||"")}" ${o?`min="${K(o)}" max="${K(l||"")}"`:""} />
        <span>~</span>
        <input type="date" id="tks-trend-end" class="b3-text-field" value="${K(r.trendDateRangeEnd||l||"")}" ${l?`min="${K(o||"")}" max="${K(l)}"`:""} />
        <select id="tks-trend-aggregation" class="b3-select">
          <option value="daily" ${r.trendAggregation==="daily"?"selected":""}>按日</option>
          <option value="weekly" ${r.trendAggregation==="weekly"?"selected":""}>按周</option>
          <option value="monthly" ${r.trendAggregation==="monthly"?"selected":""}>按月</option>
        </select>
        <button class="b3-button b3-button--small" id="tks-trend-apply">应用</button>
        <button class="b3-button b3-button--small" id="tks-trend-reset">重置</button>
      </div>
    `;return`
      <div class="tks-dashboard">
        <!-- 汇总卡片 -->
        <div class="tks-summary-cards">
          <div class="tks-card">
            <div class="tks-card-icon">🪙</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${e.totalTokens.toLocaleString()}</div>
              <div class="tks-card-label">总 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📥</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${e.totalInputTokens.toLocaleString()}</div>
              <div class="tks-card-label">输入 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📤</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${e.totalOutputTokens.toLocaleString()}</div>
              <div class="tks-card-label">输出 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📞</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${e.totalRequests}</div>
              <div class="tks-card-label">总请求 (${e.successRequests}✅ ${e.failedRequests}❌)</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">⏱️</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${Math.round(e.averageRequestTime)}</div>
              <div class="tks-card-label">平均耗时(ms)</div>
            </div>
          </div>
          <div class="tks-card ${this.store.hasAnyPrice()?"":"tks-card-muted"}">
            <div class="tks-card-icon">💰</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${this.store.hasAnyPrice()?this.store.formatCost(e.totalCost):"未配置"}</div>
              <div class="tks-card-label">估算总费用${this.store.hasAnyPrice()?"":"（请设置单价）"}</div>
            </div>
          </div>
          ${r.globalQuotaLimit>0?`
          <div class="tks-card tks-card-global">
            <div class="tks-card-icon">🌍</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${i.toFixed(1)}%</div>
              <div class="tks-card-label">全局限额 ${a.totalTokens.toLocaleString()} / ${r.globalQuotaLimit.toLocaleString()}</div>
            </div>
          </div>
          `:""}
        </div>

        <!-- API Key 用量 -->
        <div class="tks-section">
          <h3 class="tks-section-title">🔑 API Key 用量与限额</h3>
          <div class="tks-key-stats">
            ${e.keyStats.map(c=>this.renderKeyStat(c)).join("")}
          </div>
        </div>

        <!-- Token 趋势 -->
        <div class="tks-section">
          <h3 class="tks-section-title">📈 Token 趋势</h3>
          ${u}
          <div class="tks-daily-chart">
            ${e.dailyStats.map(c=>this.renderDailyBar(c,n,r.trendAggregation)).join("")}
          </div>
          ${e.dailyStats.length===0?'<div class="tks-empty-chart">当前区间内无数据</div>':""}
        </div>

        <!-- 模型分布 -->
        <div class="tks-section">
          <h3 class="tks-section-title">🤖 模型用量分布</h3>
          <div class="tks-model-stats">
            ${Object.values(e.modelStats).sort((c,d)=>d.tokens-c.tokens).map(c=>this.renderModelBar(c,s)).join("")}
          </div>
        </div>

        <!-- 最近请求 -->
        <div class="tks-section">
          <h3 class="tks-section-title">📝 最近请求记录（最近 ${t.length} 条）</h3>
          <div class="tks-records-table-wrap">
            <table class="tks-records-table">
              <thead>
                <tr>
                  <th>时间</th>
                  <th>API Key</th>
                  <th>来源</th>
                  <th>模型</th>
                  <th>输入</th>
                  <th>输出</th>
                  <th>总计</th>
                  <th>费用</th>
                  <th>耗时</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                ${t.map(c=>this.renderRecordRow(c)).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="tks-dashboard-actions">
          <button class="b3-button b3-button--outline" id="tks-refresh">🔄 刷新</button>
          <button class="b3-button b3-button--outline" id="tks-export">📥 导出数据</button>
          <button class="b3-button b3-button--outline b3-button--danger" id="tks-clear-records">🗑️ 清除记录</button>
        </div>
      </div>
    `}getMinRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=1/0;for(const n of e)t=Math.min(t,n.timestamp);return O(new Date(t))}getMaxRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=-1/0;for(const n of e)t=Math.max(t,n.timestamp);return O(new Date(t))}renderKeyStat(e){const t=e.quotaLimit>0?`${e.totalTokens.toLocaleString()} / ${e.quotaLimit.toLocaleString()}`:`${e.totalTokens.toLocaleString()} (不限)`,n=e.alertThreshold>0?` · 阈值 ${e.alertThreshold}%`:"",s=e.isExceeded?"⛔":e.isAlert?"⚠️":e.quotaLimit>0?"✅":"";return`
      <div class="tks-key-stat ${e.isAlert?"tks-key-stat-alert":""} ${e.isExceeded?"tks-key-stat-exceeded":""}">
        <div class="tks-key-stat-header">
          <span class="tks-key-stat-name">${s} ${K(e.apiKeyName)}</span>
          <span class="tks-key-stat-requests">${e.totalRequests} 次请求</span>
        </div>
        <div class="tks-key-stat-bar">
          <div class="tks-key-stat-fill ${e.isAlert?"alert":""} ${e.isExceeded?"exceeded":""}"
               style="width: ${e.quotaLimit>0?e.usagePercent:0}%"></div>
        </div>
        <div class="tks-key-stat-detail">
          ${t} tokens${n}
          ${e.quotaLimit>0?` · ${e.usagePercent.toFixed(1)}%`:""}
        </div>
      </div>
    `}renderDailyBar(e,t,n){const s=Math.max(2,e.tokens/t*100);let r=e.date.substring(5);return n==="weekly"?r=`W${e.date.substring(5,7)}${e.date.substring(8,10)}`:n==="monthly"&&(r=e.date.substring(0,7)),`
      <div class="tks-daily-bar">
        <div class="tks-daily-value">${e.tokens>999?(e.tokens/1e3).toFixed(1)+"k":e.tokens}</div>
        <div class="tks-daily-col">
          <div class="tks-daily-fill" style="height: ${s}%"></div>
        </div>
        <div class="tks-daily-date">${r}</div>
      </div>
    `}renderModelBar(e,t){const n=Math.max(1,e.tokens/t*100);return`
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${K(e.model)}">${K(e.model)}</div>
        <div class="tks-model-bar-track">
          <div class="tks-model-bar-fill" style="width: ${n}%"></div>
        </div>
        <div class="tks-model-detail">
          ${e.tokens.toLocaleString()} tokens · ${e.count} 次${this.store.hasAnyPrice()?` · 💰 ${this.store.formatCost(e.cost)}`:""}
        </div>
      </div>
    `}renderRecordRow(e){return`
      <tr>
        <td>${new Date(e.timestamp).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}</td>
        <td title="${K(e.apiKeyName)}">${K(e.apiKeyName)}</td>
        <td>${K(e.source)}</td>
        <td>${K(e.model)}</td>
        <td>${e.inputTokens.toLocaleString()}</td>
        <td>${e.outputTokens.toLocaleString()}</td>
        <td><strong>${e.totalTokens.toLocaleString()}</strong></td>
        <td>${this.store.hasAnyPrice()?this.store.formatCost(this.store.getRecordCost(e)):"—"}</td>
        <td>${e.requestTime}ms</td>
        <td>${e.success?"✅":"❌"}</td>
      </tr>
    `}bindEvents(){var t,n,s,r,i;if(!this.dialog)return;const e=this.dialog.element;(t=e.querySelector("#tks-refresh"))==null||t.addEventListener("click",()=>{this.refreshContent()}),(n=e.querySelector("#tks-export"))==null||n.addEventListener("click",()=>{const a=this.store.exportAll(),o=new Blob([a],{type:"application/json"}),l=URL.createObjectURL(o),u=document.createElement("a");u.href=l,u.download=`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,u.click(),URL.revokeObjectURL(l),w.showMessage("数据已导出",2e3,"info")}),(s=e.querySelector("#tks-clear-records"))==null||s.addEventListener("click",()=>{w.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),this.show(),w.showMessage("记录已清除",2e3,"info")})}),(r=e.querySelector("#tks-trend-apply"))==null||r.addEventListener("click",()=>{var u,c,d;const a=((u=e.querySelector("#tks-trend-start"))==null?void 0:u.value)||"",o=((c=e.querySelector("#tks-trend-end"))==null?void 0:c.value)||"",l=(d=e.querySelector("#tks-trend-aggregation"))==null?void 0:d.value;this.store.updateSettings({trendDateRangeStart:a,trendDateRangeEnd:o,trendAggregation:l}),this.store.save(),this.show()}),(i=e.querySelector("#tks-trend-reset"))==null||i.addEventListener("click",()=>{this.store.updateSettings({trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily"}),this.store.save(),this.show()})}}const xe=`<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="iconTokenStats" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>
    <rect x="9.5" y="16" width="3" height="7" rx="0.8" fill="currentColor"/>
    <rect x="14.5" y="12" width="3" height="11" rx="0.8" fill="currentColor"/>
    <rect x="19.5" y="9" width="3" height="14" rx="0.8" fill="currentColor"/>
  </symbol>
</svg>`;class Te extends w.Plugin{constructor(){super(...arguments),this.styleElement=null,this.syncHandler=null,this.mergeTimer=null,this.merging=!1,this.topBarItem=null,this.badgeEl=null,this.badgeTimer=null,this.lsHeartbeatTimer=null}async onload(){console.log("[TokenStats] Plugin loading..."),console.log(`[TokenStats] Frontend: ${w.getFrontend()}`),this.styleElement=document.createElement("style"),this.styleElement.id="siyuan-token-stats-style",this.styleElement.textContent=ae,document.head.appendChild(this.styleElement),this.addIcons(xe),this.store=new le,await this.store.load(),this.tokenCounter=new de,this.keyManager=new ce(this.store),this.interceptor=new fe(this.store,this.keyManager,this.tokenCounter),this.dashboard=new ve(this.store,this.keyManager),this.interceptor.setThresholdCallback((e,t)=>{this.store.getSettings().showNotifications&&w.showMessage(t,5e3,"error")}),this.interceptor.install(),this.topBarItem=this.addTopBar({icon:"iconTokenStats",title:"Token 用量统计",position:"right",callback:()=>{this.dashboard.show()}}),this.initTopBarBadge(),this.settingsPanel=new ke(this.store,this.keyManager),this.setting=this.settingsPanel.setting,this.addCommand({langKey:"showTokenStats",langText:"打开 Token 用量统计",hotkey:"",callback:()=>{this.dashboard.show()}}),this.syncHandler=e=>{const t=typeof(e==null?void 0:e.detail)=="string"?e.detail:JSON.stringify((e==null?void 0:e.detail)??"");console.log("[TokenStats] Sync event received, merging data...",t.substring(0,100)),setTimeout(()=>this.mergeFromRemote(),1e3)},this.eventBus.on("sync-end",this.syncHandler),setTimeout(()=>this.mergeFromRemote(),3e3),this.mergeTimer=window.setInterval(()=>this.mergeFromRemote(),6e4),console.log("[TokenStats] Plugin loaded successfully."),this.lsHeartbeatTimer=window.setInterval(()=>{this.store.saveToLocalStorage()},1e4)}onunload(){var e,t,n,s,r;console.log("[TokenStats] Plugin unloading..."),this.mergeTimer!==null&&(clearInterval(this.mergeTimer),this.mergeTimer=null),this.badgeTimer!==null&&(clearInterval(this.badgeTimer),this.badgeTimer=null),this.lsHeartbeatTimer!==null&&(clearInterval(this.lsHeartbeatTimer),this.lsHeartbeatTimer=null),this.syncHandler&&(this.eventBus.off("sync-end",this.syncHandler),this.syncHandler=null),(e=this.interceptor)==null||e.uninstall(),(t=this.store)==null||t.saveToLocalStorage(),(n=this.store)==null||n.saveSync(),(s=this.store)==null||s.save().catch(i=>console.error("[TokenStats] Save on unload failed:",i)),(r=this.styleElement)==null||r.remove(),this.styleElement=null,console.log("[TokenStats] Plugin unloaded.")}async mergeFromRemote(){if(!this.merging){this.merging=!0;try{await this.store.mergeFromRemote()&&this.settingsPanel.refreshFromStore(),this.updateBadge(),this.checkThresholdsLive()}catch(e){console.warn("[TokenStats] Sync merge failed:",e)}finally{this.merging=!1}}}initTopBarBadge(){if(!this.topBarItem)return;const e=document.createElement("span");e.className="tks-topbar-badge",e.style.display="none",this.topBarItem.style.position="relative",this.topBarItem.appendChild(e),this.badgeEl=e,this.updateBadge(),this.badgeTimer=window.setInterval(()=>{this.updateBadge(),this.checkThresholdsLive()},3e3)}updateBadge(){const e=this.badgeEl;if(!e)return;const t=this.store.getSettings();if(!t.showTopBarBadge){e.style.display="none";return}if(t.globalCostLimit>0){const i=this.keyManager.getGlobalCostPercent(t),a=this.keyManager.getGlobalCostUsage(t),o=t.currency||"¥";let l,u="neutral";l=`${i.toFixed(0)}%`;const c=t.globalCostAlertThreshold>0?t.globalCostAlertThreshold:70;i>=90||this.keyManager.isGlobalCostExceeded(t)?u="danger":i>=c?u="warn":u="ok",e.textContent=l,e.className=`tks-topbar-badge tks-badge-${u}`,e.style.display="inline-block",e.title=`费用 ${o}${a.totalCost.toFixed(2)} / ${o}${t.globalCostLimit.toFixed(2)}`;return}const n=this.keyManager.getGlobalUsage(t);let s,r="neutral";if(t.globalQuotaLimit>0){const i=this.keyManager.getGlobalUsagePercent(t);s=`${Math.round(i)}%`;const a=t.globalAlertThreshold>0?t.globalAlertThreshold:70;i>=90||this.keyManager.isGlobalQuotaExceeded(t)?r="danger":i>=a?r="warn":r="ok"}else s=this.formatCompactTokens(n.totalTokens),r="neutral";e.textContent=s,e.className=`tks-topbar-badge tks-badge-${r}`,e.style.display="inline-block"}checkThresholdsLive(){this.store.getSettings().showNotifications&&this.keyManager.checkAllThresholds(t=>w.showMessage(t,5e3,"error"))}formatCompactTokens(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}}module.exports=Te;

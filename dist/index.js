"use strict";const A=require("siyuan"),ie=`/* ═══════════════════════════════════════════\r
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
  width: 100%;\r
  padding: 10px;\r
  background: var(--b3-theme-surface);\r
  border: 1px solid var(--b3-border-color);\r
  border-radius: 6px;\r
  box-sizing: border-box;\r
}\r
\r
.tks-trend-svg {\r
  display: block;\r
  width: 100%;\r
  height: auto;\r
}\r
\r
.tks-trend-legend {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 12px;\r
  margin-top: 8px;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface);\r
}\r
\r
.tks-legend-item {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 5px;\r
}\r
\r
.tks-legend-swatch {\r
  width: 12px;\r
  height: 12px;\r
  border-radius: 3px;\r
  display: inline-block;\r
}\r
\r
.tks-legend-line {\r
  width: 16px;\r
  height: 0;\r
  border-top: 2px solid #e0556b;\r
  display: inline-block;\r
}\r
\r
.tks-trend-caption {\r
  margin-top: 6px;\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface);\r
  opacity: 0.7;\r
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
.tks-pack-usage {\r
  grid-column: 1 / -1;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface-light, #999);\r
  padding: 2px 0 4px;\r
  border-top: 1px dashed var(--b3-border-color, #e0e0e0);\r
  margin-top: 2px;\r
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
`,j="data/storage/siyuan-token-stats/data.json",le="data/storage/siyuan-token-stats/data.json.bak",V="data/plugins/siyuan-token-stats/settings.json",B="siyuan-token-stats-data",X="1.3.0",G={matchByUrl:!0,interceptExternalAPIs:!0,blockOnQuotaExceeded:!1,quotaResetCycle:"monthly",abortStreamOnExceeded:!0,showNotifications:!0,showTopBarBadge:!0,maxRecords:5e3,globalQuotaLimit:0,globalAlertThreshold:0,globalQuotaResetCycle:"monthly",globalUsedTokensOffset:0,globalUsedInputTokensOffset:0,globalUsedOutputTokensOffset:0,globalCostLimit:0,globalCostAlertThreshold:0,globalCostResetCycle:"monthly",globalUsedCostOffset:0,customResetDays:30,trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily",debugLogging:!1,currency:"¥",recalcCostOnPriceChange:!0,syncStatistics:!0,modelPrices:{},pricePacks:[]};class ce{constructor(){this.saveTimer=null,this.data={version:X,lastSavedAt:0,settingsUpdatedAt:0,keysUpdatedAt:0,deletedKeys:[],apiKeys:[],records:[],settings:{...G}}}async readSource(e){try{const t=await fetch(`/api/file/getFile?path=${encodeURIComponent(e)}`);if(!t.ok)return null;const s=await t.text();if(!s)return null;const n=JSON.parse(s);if(n&&n.lastSavedAt)return n}catch{}return null}async load(){try{let e=null;try{const k=localStorage.getItem(B);if(k){const v=JSON.parse(k);v&&v.lastSavedAt&&(e=v,console.log("[TokenStats] Found data in localStorage (primary)."))}}catch{}const t=await this.readSource(j),s=await this.readSource(V),n=[t,s].filter(Boolean),o=e?[e,...n]:n;if(o.length===0){console.log("[TokenStats] No existing data in any source, starting fresh.");return}const i=new Map,r=k=>{const v=i.get(k.id);if(!v){i.set(k.id,k);return}const R=v.keysUpdatedAt||0,M=k.keysUpdatedAt||0;(M>R||M===R&&!v.keyFull&&k.keyFull)&&i.set(k.id,k)};for(const k of o)for(const v of k.apiKeys||[])r(v);const a=Array.from(i.values()),l=new Set;for(const k of o)for(const v of k.deletedKeys||[])l.add(v);const d=new Map;for(const k of o)for(const v of k.records||[])d.has(v.id)||d.set(v.id,v);const u=Array.from(d.values()).sort((k,v)=>k.timestamp-v.timestamp),c=(()=>{var v;let k=5e3;for(const R of o){const M=(v=R.settings)==null?void 0:v.maxRecords;typeof M=="number"&&M>k&&(k=M)}return k})(),g=u.length>c?u.slice(-c):u;let p=o[0];for(const k of o)k.settingsUpdatedAt>p.settingsUpdatedAt&&(p=k);const f=p.settings||{},h={...G,...f};"autoDetectSiYuanAI"in f&&(h.matchByUrl=f.autoDetectSiYuanAI),!("globalCostResetCycle"in f)&&f.globalQuotaResetCycle&&(h.globalCostResetCycle=f.globalQuotaResetCycle);const S=a.map(k=>{const v={...k};return v.id==="siyuan-built-in"&&v.provider==="siyuan"&&(v.provider=v.baseUrl?v.baseUrl:"SiYuan AI"),v.usedTokensOffset===void 0&&(v.usedTokensOffset=0),v.usedInputTokensOffset===void 0&&(v.usedInputTokensOffset=0),v.usedOutputTokensOffset===void 0&&(v.usedOutputTokensOffset=0),Array.isArray(v.models)||(v.models=[]),v}).filter(k=>!l.has(k.id)),m=Math.max(0,...o.map(k=>k.lastSavedAt||0)),y=Math.max(0,...o.map(k=>k.settingsUpdatedAt||0)),T=Math.max(0,...o.map(k=>k.keysUpdatedAt||0));this.data={version:X,lastSavedAt:m,settingsUpdatedAt:y,keysUpdatedAt:T,deletedKeys:Array.from(l),apiKeys:S,records:g,settings:h},console.log(`[TokenStats] Loaded (merged ${o.length} source(s), primary=${!!e}): ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`),this.saveToLocalStorage(),this.save().catch(k=>console.error("[TokenStats] Post-load save failed:",k))}catch(e){console.warn("[TokenStats] Failed to load data, starting fresh:",e)}}scheduleSave(e=500){this.saveToLocalStorage(),this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.save().catch(t=>console.error("[TokenStats] Save failed:",t))},e)}saveToLocalStorage(){try{this.data.lastSavedAt=Date.now(),localStorage.setItem(B,JSON.stringify(this.data))}catch{}}async save(){try{this.data.lastSavedAt=Date.now();try{const s=await fetch(`/api/file/getFile?path=${encodeURIComponent(j)}`);if(s.ok){const n=await s.text();if(n){const o=new FormData;o.append("path",le),o.append("file",new Blob([n],{type:"application/json"})),await fetch("/api/file/putFile",{method:"POST",body:o})}}}catch{}const e=new FormData;e.append("path",j),e.append("file",new Blob([JSON.stringify(this.data,null,2)],{type:"application/json"}));const t=await fetch("/api/file/putFile",{method:"POST",body:e});if(!t.ok)throw new Error(`putFile returned ${t.status}`);try{const s=new FormData;s.append("path",V),s.append("file",new Blob([JSON.stringify(this.data,null,2)],{type:"application/json"})),await fetch("/api/file/putFile",{method:"POST",body:s})}catch{}try{localStorage.setItem(B,JSON.stringify(this.data))}catch{}}catch(e){console.error("[TokenStats] Failed to save data:",e);try{localStorage.setItem(B,JSON.stringify(this.data))}catch{}}}saveSync(){this.saveToLocalStorage();try{this.data.lastSavedAt=Date.now();const e=JSON.stringify(this.data,null,2);try{const t=new XMLHttpRequest;t.open("POST","/api/file/putFile",!1);const s=new FormData;s.append("path",j),s.append("file",new Blob([e],{type:"application/json"})),t.send(s)}catch{}try{const t=new XMLHttpRequest;t.open("POST","/api/file/putFile",!1);const s=new FormData;s.append("path",V),s.append("file",new Blob([e],{type:"application/json"})),t.send(s)}catch{}console.log("[TokenStats] Synchronous save completed (localStorage + E + F).")}catch(e){console.error("[TokenStats] saveSync error:",e)}}async mergeFromRemote(){try{const e=await fetch(`/api/file/getFile?path=${encodeURIComponent(j)}`);if(!e.ok)return!1;const t=await e.text();if(!t)return!1;const s=JSON.parse(t);if(!s)return!1;const n=this.data,o=s.lastSavedAt||0,i=n.lastSavedAt||0,r=s.settingsUpdatedAt||0,a=s.keysUpdatedAt||0,l=n.settingsUpdatedAt||0,d=n.keysUpdatedAt||0;if(o===i&&r===l&&a===d&&o>0)return console.log("[TokenStats] Sync merge: data unchanged, skipping."),!1;console.log(`[TokenStats] Sync merge: local ls=${i} lset=${l} lkey=${d}, remote rs=${o} rset=${r} rkey=${a}`);const u=s.records||[],c=new Map;for(const L of n.records)c.set(L.id,L);for(const L of u)c.has(L.id)||c.set(L.id,L);const g=Array.from(c.values()).sort((L,O)=>L.timestamp-O.timestamp),p=n.settings.maxRecords,f=g.length>p?g.slice(-p):g,h=s.apiKeys||[],S=new Map,m=d>=a,y=m?h:n.apiKeys,T=m?n.apiKeys:h;for(const L of y)S.set(L.id,L);for(const L of T)S.set(L.id,L);const k=s.deletedKeys||[],v=n.deletedKeys||[],R=Array.from(new Set([...v,...k])),M=Array.from(S.values()).filter(L=>!R.includes(L.id)),x=l>=r,C=x?{...G,...n.settings}:{...G,...s.settings},$=x?n.settings:s.settings;$&&!("globalCostResetCycle"in $)&&$.globalQuotaResetCycle&&(C.globalCostResetCycle=$.globalQuotaResetCycle);const I=Math.max(l,r),U=Math.max(d,a);return this.data={version:X,lastSavedAt:Math.max(i,o),settingsUpdatedAt:I,keysUpdatedAt:U,deletedKeys:R,apiKeys:M,records:f,settings:C},await this.save(),console.log(`[TokenStats] Sync merge complete: ${M.length} keys, ${f.length} records.`),!0}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}}getApiKeys(){return this.data.apiKeys}getApiKey(e){return this.data.apiKeys.find(t=>t.id===e)}addApiKey(e){this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys=this.data.deletedKeys.filter(t=>t!==e.id),this.data.apiKeys.push(e),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}updateApiKey(e,t){const s=this.data.apiKeys.findIndex(n=>n.id===e);s>=0&&(this.data.apiKeys[s]={...this.data.apiKeys[s],...t},this.data.keysUpdatedAt=Date.now(),this.scheduleSave())}deleteApiKey(e){this.data.apiKeys=this.data.apiKeys.filter(t=>t.id!==e),this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys.includes(e)||this.data.deletedKeys.push(e),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}addRecord(e){const t=this.data.records,s=t.slice(-5);for(const o of s)if(o.apiKeyId===e.apiKeyId&&o.timestamp===e.timestamp&&o.totalTokens===e.totalTokens&&o.model===e.model){console.log("[TokenStats] Duplicate record skipped:",e.apiKeyName,e.model,e.totalTokens);return}this.data.settings.recalcCostOnPriceChange===!1&&(e.cost=this.calcCost(e.model,e.inputTokens,e.outputTokens)),t.push(e);const n=this.data.settings.maxRecords;t.length>n&&(this.data.records=t.slice(-n)),this.scheduleSave()}getRecords(){return this.data.records}getRecentRecords(e=50){return[...this.data.records].sort((t,s)=>s.timestamp-t.timestamp).slice(0,e)}clearRecords(){this.data.records=[],this.scheduleSave()}clearAll(){this.data.records=[],this.data.apiKeys=[],this.data.deletedKeys=[],this.scheduleSave()}getSettings(){return this.data.settings}updateSettings(e){this.data.settings={...this.data.settings,...e},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave()}resetSettings(){this.data.settings={...G},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave()}getCurrency(){return this.data.settings.currency||"¥"}normalizeModelKey(e){return(e||"").toLowerCase().trim().replace(/[\s\-_]+/g,"")}getModelPrice(e){const t=this.normalizeModelKey(e);if(!t)return null;const s=this.data.settings.modelPrices||{};if(s[t])return s[t];const n=this.findPackForModel(t);return n?{input:n.input,output:n.output}:null}findPackForModel(e){const t=this.data.settings.pricePacks||[];for(const s of t)if(Array.isArray(s.models)&&s.models.some(n=>this.normalizeModelKey(n)===e))return s;return null}hasAnyPrice(){return Object.keys(this.data.settings.modelPrices||{}).length>0?!0:(this.data.settings.pricePacks||[]).length>0}calcCost(e,t,s){const n=this.getModelPrice(e);if(!n)return 0;const o=t/1e3*n.input,i=s/1e3*n.output;return o+i}formatCost(e){return`${this.getCurrency()}${e.toFixed(4)}`}getRecordCost(e){return this.data.settings.recalcCostOnPriceChange!==!1?this.calcCost(e.model,e.inputTokens,e.outputTokens):typeof e.cost=="number"?e.cost:this.calcCost(e.model,e.inputTokens,e.outputTokens)}getPackUsage(e){const t=new Set((e.models||[]).map(n=>this.normalizeModelKey(n)));if(t.size===0)return{usedTokens:0};let s=0;for(const n of this.data.records)t.has(this.normalizeModelKey(n.model))&&(s+=(n.inputTokens||0)+(n.outputTokens||0));return{usedTokens:s}}getTotalCostInPeriod(e,t){let s=0;for(const n of e)n.timestamp>=t&&(s+=this.getRecordCost(n));return s}exportAll(){return JSON.stringify(this.data,null,2)}exportRecords(){return JSON.stringify(this.data.records,null,2)}}function H(b){if(!b)return"";try{const e=new URL(b,window.location.href);return e.pathname+e.search}catch{return b}}class de{constructor(e){this.store=e,this.alertedKeys=new Set,this.alertedGlobal=!1,this.alertedCostGlobal=!1}getAllKeys(){return this.store.getApiKeys()}findByKey(e){if(e)return this.store.getApiKeys().find(t=>t.enabled&&t.keyFull&&t.keyFull===e)}findByUrl(e){const t=H(e);if(t)return this.store.getApiKeys().find(s=>{if(!s.enabled||!s.baseUrl)return!1;const n=H(s.baseUrl);return n?t.includes(n)||n.includes(t):!1})}findByUrlAndModel(e,t){if(!e)return;const s=this.store.getApiKeys().filter(n=>{if(!n.enabled||!n.baseUrl)return!1;const o=H(n.baseUrl),i=H(e);return o&&i?i.includes(o)||o.includes(i):!1});if(s.length!==0){if(t){const n=String(t).toLowerCase().trim();for(const o of s)if(Array.isArray(o.models)&&o.models.find(i=>String(i).toLowerCase().trim()===n))return o}return s[0]}}findByModel(e){if(!e)return;const t=String(e).toLowerCase().trim();return this.store.getApiKeys().find(s=>s.enabled?(s.models||[]).map(o=>String(o).toLowerCase().trim()).includes(t):!1)}getResetBoundary(e,t=30){if(e==="none")return 0;const s=new Date;if(e==="daily")return new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime();if(e==="custom"){const n=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime(),o=Math.max(1,Math.floor(t)||30);return n-(o-1)*864e5}return new Date(s.getFullYear(),s.getMonth(),1).getTime()}getKeyUsage(e){const t=this.store.getSettings(),s=this.getResetBoundary(t.quotaResetCycle,t.customResetDays),n=this.store.getApiKey(e),o=this.store.getRecords().filter(l=>l.apiKeyId===e&&l.timestamp>=s),i=(n==null?void 0:n.usedTokensOffset)??0,r=(n==null?void 0:n.usedInputTokensOffset)??0,a=(n==null?void 0:n.usedOutputTokensOffset)??0;return{totalTokens:o.reduce((l,d)=>l+d.totalTokens,0)+i,totalInputTokens:o.reduce((l,d)=>l+d.inputTokens,0)+r,totalOutputTokens:o.reduce((l,d)=>l+d.outputTokens,0)+a,totalRequests:o.length}}getRemainingQuota(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return-1;const s=this.getKeyUsage(e);return Math.max(0,t.quotaLimit-s.totalTokens)}getUsagePercent(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return 0;const s=this.getKeyUsage(e);return Math.min(100,s.totalTokens/t.quotaLimit*100)}isQuotaExceeded(e){const t=this.store.getApiKey(e);return!t||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens>=t.quotaLimit}wouldExceedQuota(e,t){const s=this.store.getApiKey(e);return!s||s.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens+t>s.quotaLimit}isThresholdReached(e){const t=this.store.getApiKey(e);return!t||t.alertThreshold<=0||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens/t.quotaLimit*100>=t.alertThreshold}checkThreshold(e,t){const s=this.store.getApiKey(e);if(s){if(this.alertedKeys.has(e)&&!this.isThresholdReached(e)&&this.alertedKeys.delete(e),this.isThresholdReached(e)&&!this.alertedKeys.has(e)){this.alertedKeys.add(e);const n=this.getKeyUsage(e),o=(n.totalTokens/s.quotaLimit*100).toFixed(1),i=`⚠️ Token 用量提醒：${s.name} 已使用 ${o}%（${n.totalTokens.toLocaleString()} / ${s.quotaLimit.toLocaleString()} tokens）`;t(i)}if(this.isQuotaExceeded(e)){const n=`⛔ Token 限额已用尽：${s.name}（限额 ${s.quotaLimit.toLocaleString()} tokens）`;t(n)}}}resetAlert(e){this.alertedKeys.delete(e)}clearAllAlerts(){this.alertedKeys.clear(),this.alertedGlobal=!1}generateKeyId(){return`key-${Date.now()}-${Math.random().toString(36).substring(2,8)}`}maskKey(e){return e?e.length<=8?e.substring(0,2)+"***":e.substring(0,5)+"..."+e.substring(e.length-4):"(空)"}getDefaultBaseUrl(e){return{openai:"https://api.openai.com/v1/chat/completions",anthropic:"https://api.anthropic.com/v1/messages",deepseek:"https://api.deepseek.com/v1/chat/completions"}[e.toLowerCase()]||""}getGlobalUsage(e){const t=this.getResetBoundary(e.globalQuotaResetCycle,e.customResetDays),s=this.store.getRecords().filter(n=>n.timestamp>=t);return{totalTokens:s.reduce((n,o)=>n+o.totalTokens,0)+(e.globalUsedTokensOffset??0),totalInputTokens:s.reduce((n,o)=>n+o.inputTokens,0)+(e.globalUsedInputTokensOffset??0),totalOutputTokens:s.reduce((n,o)=>n+o.outputTokens,0)+(e.globalUsedOutputTokensOffset??0),totalRequests:s.length}}getGlobalRemainingQuota(e){if(e.globalQuotaLimit<=0)return-1;const t=this.getGlobalUsage(e);return Math.max(0,e.globalQuotaLimit-t.totalTokens)}getGlobalUsagePercent(e){if(e.globalQuotaLimit<=0)return 0;const t=this.getGlobalUsage(e);return Math.min(100,t.totalTokens/e.globalQuotaLimit*100)}isGlobalQuotaExceeded(e){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens>=e.globalQuotaLimit}wouldExceedGlobalQuota(e,t){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens+t>e.globalQuotaLimit}isGlobalThresholdReached(e){return e.globalAlertThreshold<=0||e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens/e.globalQuotaLimit*100>=e.globalAlertThreshold}checkGlobalThreshold(e,t){if(!(e.globalQuotaLimit<=0)){if(this.alertedGlobal&&!this.isGlobalThresholdReached(e)&&(this.alertedGlobal=!1),this.isGlobalThresholdReached(e)&&!this.alertedGlobal){this.alertedGlobal=!0;const s=this.getGlobalUsage(e),o=`⚠️ 全局 Token 用量提醒：已使用 ${(s.totalTokens/e.globalQuotaLimit*100).toFixed(1)}%（${s.totalTokens.toLocaleString()} / ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(o)}if(this.isGlobalQuotaExceeded(e)){const s=`⛔ 全局 Token 限额已用尽（限额 ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(s)}}}resetGlobalAlert(){this.alertedGlobal=!1}getGlobalCostUsage(e){const t=this.getResetBoundary(e.globalCostResetCycle,e.customResetDays),s=this.store.getRecords().filter(o=>o.timestamp>=t);let n=0;for(const o of s)n+=this.store.getRecordCost(o);return n+=e.globalUsedCostOffset??0,{totalCost:n,totalRequests:s.length}}getGlobalRemainingCost(e){if(e.globalCostLimit<=0)return-1;const t=this.getGlobalCostUsage(e);return Math.max(0,e.globalCostLimit-t.totalCost)}getGlobalCostPercent(e){if(e.globalCostLimit<=0)return 0;const t=this.getGlobalCostUsage(e);return Math.min(100,t.totalCost/e.globalCostLimit*100)}isGlobalCostExceeded(e){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost>=e.globalCostLimit}wouldExceedGlobalCostQuota(e,t){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost+t>e.globalCostLimit}isGlobalCostThresholdReached(e){return e.globalCostAlertThreshold<=0||e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost/e.globalCostLimit*100>=e.globalCostAlertThreshold}checkGlobalCostThreshold(e,t){if(!(e.globalCostLimit<=0)){if(this.alertedCostGlobal&&!this.isGlobalCostThresholdReached(e)&&(this.alertedCostGlobal=!1),this.isGlobalCostThresholdReached(e)&&!this.alertedCostGlobal){this.alertedCostGlobal=!0;const s=this.getGlobalCostUsage(e),n=(s.totalCost/e.globalCostLimit*100).toFixed(1),o=e.currency||"¥",i=`⚠️ 全局费用提醒：已使用 ${n}%（${o}${s.totalCost.toFixed(2)} / ${o}${e.globalCostLimit.toFixed(2)}）`;t(i)}if(this.isGlobalCostExceeded(e)){const n=`⛔ 全局费用限额已用尽（限额 ${e.currency||"¥"}${e.globalCostLimit.toFixed(2)}）`;t(n)}}}resetGlobalCostAlert(){this.alertedCostGlobal=!1}checkAllThresholds(e){const t=this.store.getSettings();for(const s of this.store.getApiKeys())s.enabled&&this.checkThreshold(s.id,e);this.checkGlobalThreshold(t,e),this.checkGlobalCostThreshold(t,e)}}class ue{estimate(e){if(!e)return 0;const t=(e.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g)||[]).length,s=(e.match(/[\u3000-\u303f\uff00-\uffef]/g)||[]).length,n=(e.match(/[a-zA-Z]+/g)||[]).length,o=n*4,i=Math.max(0,e.length-t-s-o),r=Math.ceil(t*1+s*.5+n*1.3+i*.25);return Math.max(0,r)}estimateFromMessages(e){if(!Array.isArray(e))return 0;let t=0;for(const s of e){if(typeof s=="string")t+=this.estimate(s)+4;else if(s!=null&&s.content){if(typeof s.content=="string")t+=this.estimate(s.content)+4;else if(Array.isArray(s.content)){for(const n of s.content)typeof n=="string"?t+=this.estimate(n):n!=null&&n.text&&(t+=this.estimate(n.text));t+=4}}s!=null&&s.role&&(t+=1)}return t}estimateFromText(e){return this.estimate(e)}}function re(b,e){if(!b)return null;if(b instanceof Headers)return b.get(e);if(Array.isArray(b)){for(const[n,o]of b)if(n.toLowerCase()===e.toLowerCase())return o;return null}const t=b,s=e.toLowerCase();for(const n of Object.keys(t))if(n.toLowerCase()===s)return t[n];return null}function pe(b){return typeof b=="string"?b:b instanceof URL?b.href:b.url}function ge(){return`rec-${Date.now()}-${Math.random().toString(36).substring(2,9)}`}function J(b){return b&&String(b).trim()||""}function ae(b){return!b||b==="unknown"||b==="siyuan-ai"||b==="default"}function Q(b){if(!b)return!0;const e=b.trim();return!!(/^\d{14,}-[a-z0-9]+$/i.test(e)||/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)||/^\d+$/.test(e)||e.length>40&&!/[._-]/.test(e))}function N(...b){for(const e of b){const t=J(e);if(t&&!ae(t)&&!Q(t))return t}return""}function me(b){return/\/api\/ai\/agent\/chat\b/i.test(b)||/\/api\/ai\/chatGPT\b/i.test(b)||/\/api\/ai\/chatGPTWithAction\b/i.test(b)}function he(b){return typeof b=="object"&&b!==null&&"code"in b&&"msg"in b&&"data"in b&&!("choices"in b)&&!("usage"in b)}function fe(){return{apiKeyId:"siyuan-ai-default",apiKeyName:"思源智能体",source:"siyuan-ai",provider:"SiYuan AI",model:"unknown"}}class ke{constructor(e,t,s){this.installed=!1,this.onThresholdAlert=()=>{},this.siyuanConfigCache=null,this.originalFetch=window.fetch.bind(window),this.store=e,this.keyManager=t,this.tokenCounter=s}setThresholdCallback(e){this.onThresholdAlert=e}keyMatchesModel(e,t){if(!e||!t)return!1;const s=String(t).toLowerCase().trim();return(e.models||[]).map(o=>String(o).toLowerCase().trim()).includes(s)}install(){if(this.installed){console.warn("[TokenStats] Interceptor already installed.");return}this.installed=!0;const e=this;window.fetch=async function(t,s){const n=pe(t),o=e.store.getSettings(),i=await e.extractBodyText(t,s),r=e.tryParseJson(i),a=await e.identifyAiCall(n,s,o,r);if(!a)return e.originalFetch(t,s);e.logDebug(`Intercepted AI call: source=${a.source}, model=${a.model}, key=${a.apiKeyName}`),e.logDebug("Request body",{bodyText:i==null?void 0:i.slice(0,500),parsedBody:r});const l=Date.now();if(o.blockOnQuotaExceeded&&o.globalQuotaLimit>0){const g=e.tokenCounter.estimateFromMessages(e.extractMessages(r));if(e.keyManager.isGlobalQuotaExceeded(o)){const p="[TokenStats] 已阻止请求：全局 Token 限额已用尽";return console.warn(p),e.onThresholdAlert("global",p),e.createBlockedResponse(p,a)}if(e.keyManager.wouldExceedGlobalQuota(o,g)){const f=`[TokenStats] 已阻止请求：全局剩余配额 ${e.keyManager.getGlobalRemainingQuota(o).toLocaleString()} tokens，预估输入 ${g.toLocaleString()} tokens 将超限`;return console.warn(f),e.onThresholdAlert("global",f),e.createBlockedResponse(f,a)}}if(o.blockOnQuotaExceeded&&o.globalCostLimit>0){const g=e.tokenCounter.estimateFromMessages(e.extractMessages(r)),p=e.store.calcCost(a.model,g,g),f=o.currency||"¥";if(e.keyManager.isGlobalCostExceeded(o)){const h=`[TokenStats] 已阻止请求：全局费用限额已用尽（${f}${o.globalCostLimit.toFixed(2)}）`;return console.warn(h),e.onThresholdAlert("global-cost",h),e.createBlockedResponse(h,a)}if(p>0&&e.keyManager.wouldExceedGlobalCostQuota(o,p)){const h=e.keyManager.getGlobalRemainingCost(o),S=`[TokenStats] 已阻止请求：全局费用剩余 ${f}${h.toFixed(2)}，预估本次费用 ${f}${p.toFixed(2)} 将超限`;return console.warn(S),e.onThresholdAlert("global-cost",S),e.createBlockedResponse(S,a)}}if(o.blockOnQuotaExceeded){if(e.keyManager.isQuotaExceeded(a.apiKeyId)){const p=e.store.getApiKey(a.apiKeyId),f=`[TokenStats] 已阻止请求：${(p==null?void 0:p.name)||a.apiKeyName} 的 Token 限额已用尽`;return console.warn(f),e.onThresholdAlert(a.apiKeyId,f),e.createBlockedResponse(f,a)}const g=e.tokenCounter.estimateFromMessages(e.extractMessages(r));if(e.keyManager.wouldExceedQuota(a.apiKeyId,g)){const p=e.store.getApiKey(a.apiKeyId),f=e.keyManager.getRemainingQuota(a.apiKeyId),h=`[TokenStats] 已阻止请求：${(p==null?void 0:p.name)||a.apiKeyName} 剩余配额 ${f.toLocaleString()} tokens，预估输入 ${g.toLocaleString()} tokens 将超限`;return console.warn(h),e.onThresholdAlert(a.apiKeyId,h),e.createBlockedResponse(h,a)}}let d,u=!1;try{d=await e.originalFetch(t,s),u=d.ok}catch(g){throw e.recordCall(a,0,0,l,!1,a.model),g}const c=d.clone();return e.analyzeResponse(c,a,l,r,u).catch(g=>console.warn("[TokenStats] Response analysis failed:",g)),d},console.log("[TokenStats] Fetch interceptor installed.")}createBlockedResponse(e,t){const s=JSON.stringify({error:{type:"quota_exceeded",code:"token_stats_blocked",message:e,apiKeyId:t.apiKeyId,apiKeyName:t.apiKeyName}});return new Response(s,{status:429,statusText:"Too Many Requests",headers:{"Content-Type":"application/json","X-TokenStats-Blocked":"true"}})}uninstall(){this.installed&&(window.fetch=this.originalFetch,this.installed=!1,console.log("[TokenStats] Fetch interceptor uninstalled."))}async extractBodyText(e,t){if(t!=null&&t.body&&typeof t.body=="string")return t.body;if((t==null?void 0:t.body)instanceof URLSearchParams)return t.body.toString();if((t==null?void 0:t.body)instanceof FormData)try{const s={};return t.body.forEach((n,o)=>{s[o]=typeof n=="string"?n:n.name}),JSON.stringify(s)}catch{return null}if((t==null?void 0:t.body)instanceof Blob)try{return await t.body.text()}catch{return null}if(t!=null&&t.body&&(t.body instanceof ArrayBuffer||ArrayBuffer.isView(t.body)))try{return new TextDecoder().decode(t.body)}catch{return null}if(e instanceof Request)try{return await e.clone().text()}catch{return null}return null}tryParseJson(e){if(!e)return null;try{return JSON.parse(e)}catch{return null}}isDebugEnabled(){return this.store.getSettings().debugLogging??!1}logDebug(...e){this.isDebugEnabled()&&console.log("[TokenStats]",...e)}async identifyAiCall(e,t,s,n){const o=e.toLowerCase();if(me(e)){const l=await this.getSiYuanAiConfig(),d=(n==null?void 0:n.model)||null,u=this.extractModel(n)||d||this.getSiYuanSelectedModelId(l);if(u){const g=this.findProviderByModel(l,u),p=g?g.baseURL:null;if(g&&g.apiKey){const h=this.keyManager.findByKey(g.apiKey);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||p||"siyuan-ai",provider:h.provider,model:this.resolveSiYuanModelForCall(n,l)}}const f=this.keyManager.findByModel(u);if(f&&f.enabled)return{apiKeyId:f.id,apiKeyName:f.name,source:f.baseUrl||p||"siyuan-ai",provider:f.provider,model:this.resolveSiYuanModelForCall(n,l)};if(p){const h=this.keyManager.findByUrlAndModel(p,u);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||p||"siyuan-ai",provider:h.provider,model:this.resolveSiYuanModelForCall(n,l)}}}if(l!=null&&l.providers){for(const g of l.providers)if(g!=null&&g.enabled){if(g.apiKey){const p=this.keyManager.findByKey(g.apiKey);if(p&&p.enabled)return{apiKeyId:p.id,apiKeyName:p.name,source:p.baseUrl||g.baseURL||"siyuan-ai",provider:p.provider,model:this.resolveModelByBlockId(d,l)||this.resolveModelNameFromProvider(g)||this.resolveSiYuanModelForCall(n,l)}}if(g.baseURL){const p=this.keyManager.findByUrl(g.baseURL);if(p&&p.enabled)return{apiKeyId:p.id,apiKeyName:p.name,source:p.baseUrl||g.baseURL||"siyuan-ai",provider:p.provider,model:this.resolveModelByBlockId(d,l)||this.resolveModelNameFromProvider(g)||this.resolveSiYuanModelForCall(n,l)}}if(Array.isArray(g.models))for(const p of g.models){const f=(p==null?void 0:p.id)||(p==null?void 0:p.name)||(p==null?void 0:p.displayName);if(!f)continue;const h=this.keyManager.findByModel(f);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||g.baseURL||"siyuan-ai",provider:h.provider,model:f}}}}const c=this.keyManager.findByUrl(e);return c&&c.enabled?{apiKeyId:c.id,apiKeyName:c.name,source:c.baseUrl||"siyuan-ai",provider:c.provider,model:this.resolveSiYuanModelForCall(n,l)}:{...fe(),model:this.resolveSiYuanModelForCall(n,l)}}if(s.matchByUrl){const l=this.keyManager.findByUrl(e),d=this.extractModel(n);let u=l;if(d&&l&&!this.keyMatchesModel(l,d)){const c=this.keyManager.findByModel(d);c&&c.enabled&&(u=c)}if(u&&u.enabled)return{apiKeyId:u.id,apiKeyName:u.name,source:u.baseUrl||"url-match",provider:u.provider,model:d||"unknown"}}if(!s.interceptExternalAPIs)return null;const r=this.extractModel(n);if(o.includes("/v1/chat/completions")||o.includes("/v1/completions")){const d=(re(t==null?void 0:t.headers,"Authorization")||"").replace(/^bearer\s+/i,"").trim();let u=r?this.keyManager.findByModel(r):void 0;return(!u||!u.enabled)&&(u=d?this.keyManager.findByKey(d):void 0),(!u||!u.enabled)&&(u=this.keyManager.findByUrl(e)),{apiKeyId:(u==null?void 0:u.id)||"unknown",apiKeyName:(u==null?void 0:u.name)||this.keyManager.maskKey(d)||"Unknown",source:"external-openai",provider:(u==null?void 0:u.provider)||"OpenAI",model:r||"unknown"}}if(o.includes("/v1/messages")){const l=re(t==null?void 0:t.headers,"x-api-key")||"";let d=r?this.keyManager.findByModel(r):void 0;return(!d||!d.enabled)&&(d=l?this.keyManager.findByKey(l):void 0),(!d||!d.enabled)&&(d=this.keyManager.findByUrl(e)),{apiKeyId:(d==null?void 0:d.id)||"unknown",apiKeyName:(d==null?void 0:d.name)||this.keyManager.maskKey(l)||"Unknown",source:"external-anthropic",provider:(d==null?void 0:d.provider)||"Anthropic",model:r||"unknown"}}let a=r?this.keyManager.findByModel(r):void 0;return(!a||!a.enabled)&&(a=this.keyManager.findByUrl(e)),a&&a.enabled?{apiKeyId:a.id,apiKeyName:a.name,source:a.baseUrl||"custom-url",provider:a.provider,model:r||"unknown"}:null}getSiYuanSelectedModelId(e){if(!e)return null;const t=e.agent||{},s=e.editing||{};return t.modelId||s.modelId||null}extractModel(e){return N(e==null?void 0:e.model)||null}resolveModelByBlockId(e,t){if(!t||!e)return null;const s=t.providers||[];for(const n of s){const o=(n.models||[]).find(i=>(i==null?void 0:i.id)===e);if(o)return o.name||o.displayName||null}return null}resolveSiYuanModelForCall(e,t){const s=e==null?void 0:e.model;if(s){const n=this.resolveModelByBlockId(s,t);if(n)return n}return N(this.extractModel(e))||this.resolveSiYuanModelNameFromConfig(t)||"unknown"}extractMessages(e){if(!e)return[];if(Array.isArray(e.messages))return e.messages;if(typeof e.messages=="string")return[e.messages];if(typeof e.messages=="object"&&e.messages!==null)return[e.messages];if(typeof e.prompt=="string")return[e.prompt];if(Array.isArray(e.contents))return e.contents;if(typeof e.content=="string")return[e.content];if(typeof e.text=="string")return[e.text];if(e.message!==void 0||e.references!==void 0){const t=[];if(Array.isArray(e.references))for(const s of e.references)typeof s=="string"?t.push({role:"system",content:s}):s!=null&&s.content?t.push({role:"system",content:typeof s.content=="string"?s.content:JSON.stringify(s.content)}):s!=null&&s.text&&t.push({role:"system",content:s.text});if(typeof e.message=="string"?t.push({role:"user",content:e.message}):typeof e.message=="object"&&e.message!==null&&t.push({role:"user",content:JSON.stringify(e.message)}),t.length>0)return t}if(typeof e.msg=="string")return[e.msg];if(typeof e.msg=="object"&&e.msg!==null)return[e.msg];if(e.context&&e.query)return[{role:"system",content:e.context},{role:"user",content:e.query}];if(typeof e.query=="string")return[e.query];if(e.input){if(Array.isArray(e.input))return e.input;if(Array.isArray(e.input.messages))return e.input.messages;if(typeof e.input.messages=="string")return[e.input.messages];if(typeof e.input.messages=="object"&&e.input.messages!==null)return[e.input.messages];if(typeof e.input.message=="string")return[e.input.message];if(typeof e.input.message=="object"&&e.input.message!==null)return[e.input.message];if(typeof e.input.text=="string")return[e.input.text];if(typeof e.input=="string")return[e.input]}if(e.data){if(Array.isArray(e.data.messages))return e.data.messages;if(typeof e.data.messages=="string")return[e.data.messages];if(typeof e.data.messages=="object"&&e.data.messages!==null)return[e.data.messages];if(typeof e.data.message=="string")return[e.data.message];if(typeof e.data.message=="object"&&e.data.message!==null)return[e.data.message];if(typeof e.data.prompt=="string")return[e.data.prompt];if(Array.isArray(e.data.contents))return e.data.contents;if(typeof e.data.content=="string")return[e.data.content];if(typeof e.data.text=="string")return[e.data.text]}return[]}async analyzeResponse(e,t,s,n,o=!0){let i=0,r=0,a=t.model;const l=(e.headers.get("content-type")||"").toLowerCase(),d=this.store.getSettings();if(!a||ae(a)){const g=await this.resolveSiYuanModelNameIfNeeded(t.source);g&&(a=g)}const u=this.tokenCounter.estimateFromMessages(this.extractMessages(n));if(this.logDebug("analyzeResponse",{url:t.source,contentType:l,ok:e.ok,status:e.status,estimatedInput:u,bodyPreview:JSON.stringify(n).slice(0,200)}),!e.body){this.logDebug("analyzeResponse: response body is null, using input estimate only"),i=u,r=0,this.recordCall(t,i,r,s,o,a);return}try{if(l.includes("text/event-stream")){const g=await this.parseSSEStream(e,t,d,u);i=g.inputTokens,r=g.outputTokens,g.model&&(a=g.model),g.aborted&&(o=!1)}else if(l.includes("application/json")||l.includes("text/json")){const g=await e.text();this.logDebug("JSON response raw text preview:",g.slice(0,300));const p=this.tryParseJson(g);if(he(p)&&typeof p.data!="string"){this.logDebug("Skipping SiYuan kernel non-AI response",{code:p.code,dataKeys:Object.keys(p.data||{})});return}const f=p?this.extractUsage(p):null;f&&(i=f.inputTokens,r=f.outputTokens),p!=null&&p.model&&(a=N(p.model,a)||a),f||(i=u,r=this.tokenCounter.estimateFromText(p?this.extractOutputText(p):g))}else if(l.includes("application/x-ndjson")||l.includes("application/ndjson")){const g=await this.parseNDJSONStream(e,t,d,u);i=g.inputTokens,r=g.outputTokens,g.model&&(a=g.model),g.aborted&&(o=!1)}else if(l.includes("text/plain")||l.includes("text/html")||l.includes("application/xml")||l.includes("text/xml")){const g=await e.text();i=u,r=this.tokenCounter.estimateFromText(g)}else{const g=await e.text();this.logDebug("Unknown content type, raw response preview:",g.slice(0,300)),i=u;const p=this.tryParseJson(g);if(p){const f=this.extractUsage(p);f?(i=f.inputTokens,r=f.outputTokens):r=this.tokenCounter.estimateFromText(this.extractOutputText(p))}else r=this.tokenCounter.estimateFromText(g)}}catch(g){console.warn("[TokenStats] Token extraction failed, using estimates:",g),i=u;try{const p=await e.text();r=this.tokenCounter.estimateFromText(p)}catch{r=0}}o&&i===0&&u>0&&(i=u),this.logDebug("analyzeResponse result:",{inputTokens:i,outputTokens:r,model:a,success:o});const c=i+r;this.recordCall(t,i,r,s,o,a),c>0&&d.showNotifications&&(this.keyManager.checkThreshold(t.apiKeyId,g=>{this.onThresholdAlert(t.apiKeyId,g)}),this.keyManager.checkGlobalThreshold(d,g=>{this.onThresholdAlert("global",g)}))}async parseSSEStream(e,t,s,n=0){var g;const o=(g=e.body)==null?void 0:g.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1};const i=new TextDecoder;let r="";const a={fullContent:"",usage:null,model:void 0};let l=0,d=!1;const u=p=>{const f=p.split(`
`),h=[];let S="";for(const y of f){const T=y.trim();T&&(T.startsWith("data:")?h.push(T.slice(5).trimStart()):T.startsWith("event:")&&(S=T.slice(6).trim()))}if(h.length===0)return;const m=h.join(`
`);if(this.logDebug("SSE raw event",{eventType:S,data:m.slice(0,500)}),m!=="[DONE]")try{const y=JSON.parse(m);if(this.logDebug("SSE parsed chunk",{eventType:S,chunk:y}),typeof y!="object"||y===null)return;const T=this.collectChunkInfo(y,a.usage,a.model,a.fullContent,S),k=a.fullContent.length;a.usage=T.usage,a.model=T.model,a.fullContent=T.fullContent,this.logDebug("SSE collected after chunk",{eventType:S,contentAdded:a.fullContent.length-k,fullContentLength:a.fullContent.length,usage:a.usage})}catch(y){this.logDebug("SSE chunk JSON parse failed",{eventType:S,data:m.slice(0,300),error:String(y)})}};try{for(;;){const{done:p,value:f}=await o.read();if(p)break;r+=i.decode(f,{stream:!0}),this.logDebug("SSE buffer received",{bufferLength:r.length,decodedLength:(f==null?void 0:f.length)??0});const{events:h,remainder:S}=this.splitSSEEvents(r);r=S,this.logDebug("SSE events split",{eventCount:h.length,remainderLength:S.length});for(const m of h)u(m);if(s.abortStreamOnExceeded&&s.blockOnQuotaExceeded){if(l=a.usage?a.usage.outputTokens:this.tokenCounter.estimateFromText(a.fullContent),this.keyManager.wouldExceedQuota(t.apiKeyId,l)){d=!0;const m=this.store.getApiKey(t.apiKeyId),y=`[TokenStats] 流式响应已中断：${(m==null?void 0:m.name)||t.apiKeyName} 的 Token 限额在生成过程中被超出`;console.warn(y),this.onThresholdAlert(t.apiKeyId,y);try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(s,l)){d=!0;const m="[TokenStats] 流式响应已中断：全局 Token 限额在生成过程中被超出";console.warn(m),this.onThresholdAlert("global",m);try{await o.cancel()}catch{}break}}}if(r.trim().length>0){const{events:p}=this.splitSSEEvents(r+`

`);for(const f of p)u(f)}}finally{o.releaseLock()}if(this.logDebug("parseSSEStream finished",{contentLength:a.fullContent.length,hasUsage:!!a.usage,usage:a.usage,estimatedInput:n}),a.usage){const p=this.tokenCounter.estimateFromText(a.fullContent);return{inputTokens:a.usage.inputTokens||n,outputTokens:a.usage.outputTokens||p,model:a.model,aborted:d}}const c=this.tokenCounter.estimateFromText(a.fullContent);return{inputTokens:n,outputTokens:c,model:a.model,aborted:d}}splitSSEEvents(e){const t=[],n=e.replace(/\r\n/g,`
`).split(`

`),o=n.pop()||"";for(const i of n)i.trim()&&t.push(i);return{events:t,remainder:o}}collectChunkInfo(e,t,s,n,o=""){var l,d,u,c,g,p,f,h,S,m,y,T,k,v,R,M,x,C,$,I,U,L,O,q,P,_,z,Y,ee,te,se,ne,oe;const i=(...w)=>{const D=N(...w);if(D)return D;const W=J(s);return W&&!Q(W)?W:""};if(e.model&&(s=i(e.model,s)),o==="content"||o==="reasoning")return e.token&&(n+=e.token,this.logDebug("SiYuan agent content appended",{token:e.token})),{usage:t,model:s,fullContent:n};if(o==="thinking")return e.reasoning&&(n+=e.reasoning,this.logDebug("SiYuan agent thinking appended",{reasoning:e.reasoning})),{usage:t,model:s,fullContent:n};if(o==="usage"){const w=e.promptTokens??e.prompt_tokens??0,D=e.completionTokens??e.completion_tokens??0;return this.logDebug("SiYuan agent usage event",{promptTokens:w,completionTokens:D,chunk:e}),(w>0||D>0)&&(t={inputTokens:w,outputTokens:D}),{usage:t,model:s,fullContent:n}}if(o==="done"||o==="error"||o==="retry"||o==="snapshot"||o==="tool_call"||o==="tool_result"||o==="confirm"||o==="question"||o==="frontend_tool_call")return{usage:t,model:s,fullContent:n};if(e.usage){const w=e.usage;t={inputTokens:w.prompt_tokens??w.input_tokens??w.promptTokens??0,outputTokens:w.completion_tokens??w.output_tokens??w.completionTokens??0}}const r=w=>{typeof w=="string"&&(n+=w)},a=(l=e.choices)==null?void 0:l[0];if((d=a==null?void 0:a.delta)!=null&&d.content&&r(a.delta.content),a!=null&&a.text&&r(a.text),(u=a==null?void 0:a.delta)!=null&&u.reasoning_content&&r(a.delta.reasoning_content),(c=a==null?void 0:a.message)!=null&&c.content&&r(a.message.content),a!=null&&a.content&&r(a.content),(p=(g=a==null?void 0:a.delta)==null?void 0:g.function_call)!=null&&p.arguments&&r(a.delta.function_call.arguments),(f=a==null?void 0:a.delta)!=null&&f.tool_calls)for(const w of a.delta.tool_calls)(h=w==null?void 0:w.function)!=null&&h.arguments&&r(w.function.arguments);if(e.type==="content_block_delta"&&((S=e.delta)!=null&&S.text)&&r(e.delta.text),e.type==="content_block_delta"&&((m=e.delta)!=null&&m.reasoning)&&r(e.delta.reasoning),e.type==="content_block_start"&&((y=e.content_block)!=null&&y.text)&&r(e.content_block.text),(T=e.message)!=null&&T.usage){const w=e.message.usage;t={inputTokens:w.input_tokens??0,outputTokens:w.output_tokens??0}}if(e.content){if(typeof e.content=="string")r(e.content);else if(Array.isArray(e.content))for(const w of e.content)r(typeof w=="string"?w:w==null?void 0:w.text)}if(e.output&&r(e.output),e.text&&r(e.text),e.result&&r(e.result),e.message&&(typeof e.message=="string"?r(e.message):e.message.content&&r(e.message.content)),(M=(R=(v=(k=e.data)==null?void 0:k.choices)==null?void 0:v[0])==null?void 0:R.delta)!=null&&M.content&&r(e.data.choices[0].delta.content),($=(C=(x=e.data)==null?void 0:x.choices)==null?void 0:C[0])!=null&&$.text&&r(e.data.choices[0].text),(O=(L=(U=(I=e.data)==null?void 0:I.choices)==null?void 0:U[0])==null?void 0:L.message)!=null&&O.content&&r(e.data.choices[0].message.content),(z=(_=(P=(q=e.data)==null?void 0:q.choices)==null?void 0:P[0])==null?void 0:_.delta)!=null&&z.reasoning_content&&r(e.data.choices[0].delta.reasoning_content),(Y=e.data)!=null&&Y.model&&(s=i(e.data.model,s)),(ee=e.data)!=null&&ee.usage){const w=e.data.usage;t={inputTokens:w.prompt_tokens??w.input_tokens??0,outputTokens:w.completion_tokens??w.output_tokens??0}}if((te=e.data)!=null&&te.content){if(typeof e.data.content=="string")r(e.data.content);else if(Array.isArray(e.data.content))for(const w of e.data.content)r(typeof w=="string"?w:w==null?void 0:w.text)}return(se=e.data)!=null&&se.output&&r(e.data.output),(ne=e.data)!=null&&ne.text&&r(e.data.text),(oe=e.data)!=null&&oe.result&&r(e.data.result),{usage:t,model:s,fullContent:n}}async parseNDJSONStream(e,t,s,n=0){var c;const o=(c=e.body)==null?void 0:c.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1};const i=new TextDecoder;let r="",a="",l=null,d,u=!1;try{for(;;){const{done:g,value:p}=await o.read();if(g)break;r+=i.decode(p,{stream:!0});const f=r.split(`
`);r=f.pop()||"";for(const h of f)if(h.trim())try{const S=JSON.parse(h),m=this.collectChunkInfo(S,l,d,a);l=m.usage,d=m.model,a=m.fullContent}catch{}if(s.abortStreamOnExceeded&&s.blockOnQuotaExceeded){const h=l?l.outputTokens:this.tokenCounter.estimateFromText(a);if(this.keyManager.wouldExceedQuota(t.apiKeyId,h)){u=!0;try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(s,h)){u=!0;try{await o.cancel()}catch{}break}}}if(r.trim())try{const g=JSON.parse(r.trim()),p=this.collectChunkInfo(g,l,d,a);l=p.usage,d=p.model,a=p.fullContent}catch{}}finally{o.releaseLock()}if(this.logDebug("parseNDJSONStream finished",{contentLength:a.length,hasUsage:!!l,usage:l,estimatedInput:n}),l){const g=this.tokenCounter.estimateFromText(a);return{inputTokens:l.inputTokens||n,outputTokens:l.outputTokens||g,model:d,aborted:u}}return{inputTokens:n,outputTokens:this.tokenCounter.estimateFromText(a),model:d,aborted:u}}extractUsage(e){if(e!=null&&e.usage){const t=e.usage,s=t.prompt_tokens??t.input_tokens??t.promptTokens??0,n=t.completion_tokens??t.output_tokens??t.completionTokens??0;return s===0&&n===0?null:{inputTokens:s,outputTokens:n}}if((e==null?void 0:e.promptTokens)!==void 0||(e==null?void 0:e.completionTokens)!==void 0){const t=e.promptTokens??0,s=e.completionTokens??0;return t===0&&s===0?null:{inputTokens:t,outputTokens:s}}return null}extractOutputText(e){var o,i,r,a,l,d,u;if(!e)return"";const t=[],s=c=>{typeof c=="string"&&c?t.push(c):c&&typeof c.text=="string"&&c.text&&t.push(c.text)},n=c=>{var g,p,f,h,S,m,y,T;if(c&&(s((g=c==null?void 0:c.message)==null?void 0:g.content),s((p=c==null?void 0:c.message)==null?void 0:p.reasoning_content),s((f=c==null?void 0:c.delta)==null?void 0:f.content),s((h=c==null?void 0:c.delta)==null?void 0:h.reasoning_content),s(c==null?void 0:c.text),s(c==null?void 0:c.content),(m=(S=c==null?void 0:c.delta)==null?void 0:S.function_call)!=null&&m.arguments&&s(c.delta.function_call.arguments),(y=c==null?void 0:c.delta)!=null&&y.tool_calls))for(const k of c.delta.tool_calls)(T=k==null?void 0:k.function)!=null&&T.arguments&&s(k.function.arguments)};if(e.choices)for(const c of e.choices)n(c);if(e.content){if(typeof e.content=="string")s(e.content);else if(Array.isArray(e.content))for(const c of e.content)s(c)}if(e.output&&s(e.output),e.text&&s(e.text),e.result&&s(e.result),e.message&&(typeof e.message=="string"?s(e.message):(s(e.message.content),s(e.message.text))),e.response&&(typeof e.response=="string"?s(e.response):e.response.text?s(e.response.text):e.response.content&&s(e.response.content)),e.data)if(typeof e.data=="string")s(e.data);else{if(s((o=e.data)==null?void 0:o.text),s((i=e.data)==null?void 0:i.output),s((r=e.data)==null?void 0:r.result),s((a=e.data)==null?void 0:a.msg),(l=e.data)!=null&&l.choices)for(const c of e.data.choices)n(c);if((d=e.data)!=null&&d.content)if(typeof e.data.content=="string")s(e.data.content);else if(Array.isArray(e.data.content))for(const c of e.data.content)s(c);else s(e.data.content);(u=e.data)!=null&&u.message&&(s(e.data.message.content),s(e.data.message.text))}return e.msg&&s(e.msg),e.token&&s(e.token),e.reasoning&&s(e.reasoning),t.join("")}recordCall(e,t,s,n,o,i){const r=this.resolveModelName(i||e.model,e),a={id:ge(),apiKeyId:e.apiKeyId,apiKeyName:e.apiKeyName,source:e.source,model:r,inputTokens:t,outputTokens:s,totalTokens:t+s,timestamp:n,requestTime:Date.now()-n,success:o};this.store.addRecord(a),this.logDebug(`Recorded: ${a.apiKeyName} | ${a.model} | in=${t} out=${s} total=${a.totalTokens} success=${o}`),o&&t===0&&s===0&&console.warn("[TokenStats] 本次请求 token 计数为 0。若持续出现，请在设置中开启“启用调试日志”，并在浏览器控制台中查看请求/响应详情。")}resolveModelName(e,t){var i;const s=[];s.push(e,t.model),this.isSiYuanAiSource(t.source)&&s.push(this.resolveSiYuanModelNameFromConfig((i=this.siyuanConfigCache)==null?void 0:i.config));const n=N(...s);return n||J(e)||J(t.model)||t.source||"unknown"}async resolveSiYuanModelNameIfNeeded(e){return this.isSiYuanAiSource(e)?this.getSiYuanModelName():null}isSiYuanAiSource(e){return e==="siyuan-ai"||e.includes("/api/ai/")}async getSiYuanAiConfig(){var e,t;if(this.siyuanConfigCache&&Date.now()-this.siyuanConfigCache.ts<5e3)return this.siyuanConfigCache.config;try{const s=window.siyuan,n=(e=s==null?void 0:s.config)==null?void 0:e.ai;if(n)return this.siyuanConfigCache={config:n,ts:Date.now()},n;const o=await this.originalFetch("/api/system/getConf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});if(!o.ok)return null;const i=await o.json(),r=((t=i==null?void 0:i.data)==null?void 0:t.ai)||(i==null?void 0:i.ai);if(r)return this.siyuanConfigCache={config:r,ts:Date.now()},r}catch{}return null}findProviderByModel(e,t){if(!e||!t)return null;const s=String(t).toLowerCase().trim();if(!s)return null;const n=e.providers||[];for(const o of n){if(!o||!o.enabled)continue;if((o.models||[]).find(r=>{const a=String((r==null?void 0:r.id)||"").toLowerCase().trim(),l=String((r==null?void 0:r.name)||"").toLowerCase().trim(),d=String((r==null?void 0:r.displayName)||"").toLowerCase().trim();return a===s||l===s||d===s}))return o}return null}resolveSiYuanModelNameFromConfig(e){var r,a;if(!e)return null;const t=e.agent||{},s=e.editing||{},n=t.modelId||s.modelId,o=t.modelName||t.displayName||t.name||s.modelName||s.displayName||s.name;if(o&&!Q(o))return o;const i=e.providers||[];if(n)for(const l of i){if(!(l!=null&&l.enabled))continue;const d=(l.models||[]).find(u=>(u==null?void 0:u.id)===n);if(d)return d.displayName||d.name||d.id||null}for(const l of i){if(!(l!=null&&l.enabled))continue;const d=((r=l.models)==null?void 0:r.find(u=>u==null?void 0:u.default))||((a=l.models)==null?void 0:a[0]);if(d)return d.displayName||d.name||d.id||null;if(l.name&&!Q(l.name))return l.name}return n&&!Q(n)?n:null}resolveModelNameFromProvider(e){if(!(e!=null&&e.models)||!Array.isArray(e.models))return null;const t=e.models.find(s=>s==null?void 0:s.default)||e.models[0];return t&&N(t.displayName,t.name,t.id)||null}async getSiYuanModelName(){return this.resolveSiYuanModelNameFromConfig(await this.getSiYuanAiConfig())}}function K(b){return b?b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}class be{constructor(e,t){this.onManualSync=null,this.store=e,this.keyManager=t,this.setting=this.build()}build(){const e=this,t=new A.Setting({width:this.isMobile()?"92vw":"700px",height:"auto",confirmCallback:()=>{e.saveGlobalSettings(),A.showMessage("设置已保存",2e3,"info")}});setTimeout(()=>this.ensureDialogScrollable(),0);const s=this.store.getSettings();return t.addItem({title:"按 API Base URL 匹配 Key",description:"拦截请求时优先按 URL 匹配已配置的 API Key，适用于思源 AI、自定义代理等场景",createActionElement:()=>this.createCheckbox("matchByUrl",s.matchByUrl??!0)}),t.addItem({title:"拦截外部 API 调用",description:"拦截第三方插件对 OpenAI / Anthropic / DeepSeek 等外部 API 的直接调用",createActionElement:()=>this.createCheckbox("interceptExternalAPIs",s.interceptExternalAPIs)}),t.addItem({title:"超出限额时阻止请求",description:"当某个 API Key 的 Token 用量达到限额时，阻止后续请求（谨慎开启）",createActionElement:()=>this.createCheckbox("blockOnQuotaExceeded",s.blockOnQuotaExceeded)}),t.addItem({title:"限额重置周期",description:"按周期自动重置 Token 用量统计。每月 = 每月 1 日归零，每日 = 每天归零",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-quotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const i of o){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,s.quotaResetCycle===i.value&&(r.selected=!0),n.appendChild(r)}return n}}),t.addItem({title:"自定义周期天数（天）",description:"当任一重置周期选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）。例如 14 = 每两周、90 = 每季",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-customResetDays",n.value=String(s.customResetDays||30),n.min="1",n.max="365",n.step="1",n}}),t.addItem({title:"流式响应中途超限时中断",description:"当流式 AI 响应生成过程中 Token 超出限额时，立即中断流（避免继续消耗）",createActionElement:()=>this.createCheckbox("abortStreamOnExceeded",s.abortStreamOnExceeded)}),t.addItem({title:"显示阈值提醒通知",description:"当 Token 用量达到设定的提醒阈值时，在思源底部弹出通知",createActionElement:()=>this.createCheckbox("showNotifications",s.showNotifications)}),t.addItem({title:"顶栏显示实时用量徽标",description:"在顶栏图标上显示当前全局用量（无全局限额时显示总 token 数，设有全局限额时显示百分比，颜色随阈值变化）",createActionElement:()=>this.createCheckbox("showTopBarBadge",s.showTopBarBadge)}),t.addItem({title:"启用调试日志",description:"在浏览器控制台输出请求/响应调试信息，排查 token 统计为 0 等问题（重启插件后生效）",createActionElement:()=>this.createCheckbox("debugLogging",s.debugLogging??!1)}),t.addItem({title:"最大记录数",description:"保留的最近调用记录数量，超出后自动裁剪旧记录（节省存储空间）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-max-records",n.value=String(s.maxRecords),n.min="100",n.max="50000",n.step="100",n}}),t.addItem({title:"全局总 Token 限额",description:"所有 API Key 的 Token 用量总和超过此值时触发拦截（0 = 不开启）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalQuotaLimit",n.value=String(s.globalQuotaLimit||0),n.min="0",n.step="1000",n}}),t.addItem({title:"全局提醒阈值 (%)",description:"全局 Token 用量达到此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalAlertThreshold",n.value=String(s.globalAlertThreshold||0),n.min="0",n.max="100",n.step="5",n}}),t.addItem({title:"全局限额重置周期",description:"按周期自动重置全局 Token 用量统计",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-globalQuotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const i of o){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,s.globalQuotaResetCycle===i.value&&(r.selected=!0),n.appendChild(r)}return n}}),t.addItem({title:"全局已用 Token 校准",description:"手动输入从第三方平台导入的历史已用 Token，叠加到全局统计中（0 = 不校准）",createActionElement:()=>{const n=document.createElement("div");n.style.display="flex",n.style.gap="8px",n.style.alignItems="center";const o=(i,r,a)=>{const l=document.createElement("div");l.style.flex="1";const d=document.createElement("div");d.style.fontSize="12px",d.style.color="var(--b3-theme-on-surface)",d.textContent=r;const u=document.createElement("input");return u.type="number",u.className="b3-text-field",u.id=`tks-${i}`,u.value=String(a||0),u.min="0",u.step="100",u.style.width="100%",l.appendChild(d),l.appendChild(u),l};return n.appendChild(o("globalUsedTokensOffset","总 Token",s.globalUsedTokensOffset)),n.appendChild(o("globalUsedInputTokensOffset","输入",s.globalUsedInputTokensOffset)),n.appendChild(o("globalUsedOutputTokensOffset","输出",s.globalUsedOutputTokensOffset)),n}}),t.addItem({title:"全局费用限额",description:"当前周期内所有 API 调用的估算总费用超过此金额时触发提醒与拦截（0 = 不开启；需先在「费用估算配置」中设置模型单价）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalCostLimit",n.value=String(s.globalCostLimit||0),n.min="0",n.step="1",n}}),t.addItem({title:"全局费用提醒阈值 (%)",description:"全局费用达到限额的此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalCostAlertThreshold",n.value=String(s.globalCostAlertThreshold||0),n.min="0",n.max="100",n.step="5",n}}),t.addItem({title:"全局费用重置周期",description:"按周期自动重置全局费用用量统计（独立于「全局限额重置周期」，可与 Token 限额采用不同节奏）",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-globalCostResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const i of o){const r=document.createElement("option");r.value=i.value,r.textContent=i.label,s.globalCostResetCycle===i.value&&(r.selected=!0),n.appendChild(r)}return n}}),t.addItem({title:"全局已用费用校准",description:"手动输入从第三方平台导入的历史已花费金额，叠加到全局费用统计中（0 = 不校准；单位与货币类型一致）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalUsedCostOffset",n.value=String(s.globalUsedCostOffset||0),n.min="0",n.step="1",n}}),t.addItem({title:"费用估算配置",description:"设置每模型单价（每 1K tokens 的输入/输出价格）与资源包（一个包涵盖多个模型），仪表盘将显示估算费用",actionElement:this.createButton("配置",()=>this.openPriceEditor())}),t.addItem({title:"API Key 管理",description:"添加、编辑、删除 API Key，为每个 Key 设置限额与提醒阈值",actionElement:this.createButton("管理 API Key",()=>this.openKeyManager())}),t.addItem({title:"跨端统计合并",description:"开启后，各端（电脑 / 鸿蒙 / 浏览器）通过思源数据同步共享同一套 API Key 时，自动按记录合并多方 Token 用量，汇总到每一端；关闭则仅统计本端。",createActionElement:()=>this.createCheckbox("syncStatistics",s.syncStatistics??!0)}),t.addItem({title:"立即同步统计",description:"手动从同步文件拉取一次其他端的统计记录（例如鸿蒙端打开后一键获取电脑端历史数据），不受上方开关限制。",actionElement:this.createButton("立即同步",()=>this.handleManualSync())}),t.addItem({title:"导出统计数据",description:"将所有统计数据导出为 JSON 文件",actionElement:this.createButton("导出",()=>this.exportData())}),t.addItem({title:"清除调用记录",description:"删除所有 Token 调用记录，但保留 API Key 配置",actionElement:this.createButton("清除记录",()=>this.clearRecords())}),t.addItem({title:"重置全部数据",description:"清除所有调用记录并恢复默认设置，API Key 配置保留不变",actionElement:this.createButton("重置",()=>this.resetAll())}),t}createCheckbox(e,t){const s=document.createElement("input");return s.type="checkbox",s.id=`tks-${e}`,s.className="b3-switch",s.checked=t,s}createButton(e,t){const s=document.createElement("button");return s.className="b3-button b3-button--outline",s.textContent=e,s.style.fontSize="14px",s.addEventListener("click",t),s}async handleManualSync(){const e=document.activeElement;e&&(e.disabled=!0,e.textContent="同步中…");try{if(!this.onManualSync){A.showMessage("同步功能未就绪",2e3,"error");return}const t=await this.onManualSync();A.showMessage(t?"已合并其他端统计":"已是最新，无新数据",2e3,"info")}catch{A.showMessage("同步失败，请确认思源数据同步已开启",3e3,"error")}finally{e&&(e.disabled=!1,e.textContent="立即同步")}}saveGlobalSettings(){var m,y,T,k,v,R,M,x,C;const e=$=>{var I;return((I=document.getElementById(`tks-${$}`))==null?void 0:I.checked)??!1},t=parseInt(((m=document.getElementById("tks-max-records"))==null?void 0:m.value)||"5000",10),s=((y=document.getElementById("tks-quotaResetCycle"))==null?void 0:y.value)||"monthly",n=parseInt(((T=document.getElementById("tks-globalQuotaLimit"))==null?void 0:T.value)||"0",10)||0,o=parseInt(((k=document.getElementById("tks-globalAlertThreshold"))==null?void 0:k.value)||"0",10)||0,i=((v=document.getElementById("tks-globalQuotaResetCycle"))==null?void 0:v.value)||"monthly",r=$=>{var I;return parseInt(((I=document.getElementById(`tks-${$}`))==null?void 0:I.value)||"0",10)||0},a=Math.max(0,r("globalUsedTokensOffset")),l=Math.max(0,r("globalUsedInputTokensOffset")),d=Math.max(0,r("globalUsedOutputTokensOffset")),u=parseFloat(((R=document.getElementById("tks-globalCostLimit"))==null?void 0:R.value)||"0")||0,c=parseInt(((M=document.getElementById("tks-globalCostAlertThreshold"))==null?void 0:M.value)||"0",10)||0,g=((x=document.getElementById("tks-globalCostResetCycle"))==null?void 0:x.value)||"monthly",p=Math.max(0,parseFloat(((C=document.getElementById("tks-globalUsedCostOffset"))==null?void 0:C.value)||"0")||0),f=Math.max(1,r("customResetDays")),h=n!==this.store.getSettings().globalQuotaLimit||o!==this.store.getSettings().globalAlertThreshold;this.store.updateSettings({matchByUrl:e("matchByUrl"),interceptExternalAPIs:e("interceptExternalAPIs"),blockOnQuotaExceeded:e("blockOnQuotaExceeded"),quotaResetCycle:s,abortStreamOnExceeded:e("abortStreamOnExceeded"),showNotifications:e("showNotifications"),showTopBarBadge:e("showTopBarBadge"),debugLogging:e("debugLogging"),maxRecords:isNaN(t)?5e3:Math.max(100,Math.min(5e4,t)),globalQuotaLimit:Math.max(0,n),globalAlertThreshold:Math.max(0,Math.min(100,o)),globalQuotaResetCycle:i,globalUsedTokensOffset:a,globalUsedInputTokensOffset:l,globalUsedOutputTokensOffset:d,globalCostLimit:Math.max(0,u),globalCostAlertThreshold:Math.max(0,Math.min(100,c)),globalCostResetCycle:g,globalUsedCostOffset:p,customResetDays:f,syncStatistics:e("syncStatistics")}),h&&this.keyManager.resetGlobalAlert(),(u!==this.store.getSettings().globalCostLimit||c!==this.store.getSettings().globalCostAlertThreshold||g!==this.store.getSettings().globalCostResetCycle||p!==this.store.getSettings().globalUsedCostOffset)&&this.keyManager.resetGlobalCostAlert()}refreshFromStore(){var i;const e=this.store.getSettings(),t=document.activeElement,s=!!t&&((i=t.id)==null?void 0:i.startsWith("tks-")),n=(r,a)=>{if(s&&t.id===`tks-${r}`)return;const l=document.getElementById(`tks-${r}`);l&&(l.checked=!!a)},o=(r,a)=>{if(s&&t.id===`tks-${r}`)return;const l=document.getElementById(`tks-${r}`);l&&(l.value=String(a))};if(n("matchByUrl",e.matchByUrl??!0),n("interceptExternalAPIs",e.interceptExternalAPIs),n("blockOnQuotaExceeded",e.blockOnQuotaExceeded),n("abortStreamOnExceeded",e.abortStreamOnExceeded),n("showNotifications",e.showNotifications),n("showTopBarBadge",e.showTopBarBadge),n("debugLogging",e.debugLogging??!1),n("syncStatistics",e.syncStatistics??!0),o("max-records",e.maxRecords),o("globalQuotaLimit",e.globalQuotaLimit),o("globalAlertThreshold",e.globalAlertThreshold),o("globalUsedTokensOffset",e.globalUsedTokensOffset),o("globalUsedInputTokensOffset",e.globalUsedInputTokensOffset),o("globalUsedOutputTokensOffset",e.globalUsedOutputTokensOffset),o("globalCostLimit",e.globalCostLimit),o("globalCostAlertThreshold",e.globalCostAlertThreshold),o("globalUsedCostOffset",e.globalUsedCostOffset),o("customResetDays",e.customResetDays),!(s&&t.id==="tks-quotaResetCycle")){const r=document.getElementById("tks-quotaResetCycle");r&&(r.value=e.quotaResetCycle)}if(!(s&&t.id==="tks-globalQuotaResetCycle")){const r=document.getElementById("tks-globalQuotaResetCycle");r&&(r.value=e.globalQuotaResetCycle)}if(!(s&&t.id==="tks-globalCostResetCycle")){const r=document.getElementById("tks-globalCostResetCycle");r&&(r.value=e.globalCostResetCycle)}}ensureDialogScrollable(){const e=document.getElementById("tks-matchByUrl")||document.getElementById("tks-interceptExternalAPIs");if(!e)return;const t=e.closest(".b3-dialog");if(!t)return;const s=t.querySelector(".b3-dialog__body");s&&(t.style.maxHeight="85vh",s.style.maxHeight="calc(85vh - 120px)",s.style.overflowY="auto")}isMobile(){const e=A.getFrontend();return e==="mobile"||e==="browser-mobile"}openPriceEditor(){const e=this.store.getSettings(),t=this.isMobile(),s=new A.Dialog({title:"费用估算配置",width:t?"95vw":"640px",height:"auto",content:'<div id="tks-price-editor" class="tks-price-editor"></div>'});setTimeout(()=>this.renderPriceEditor(s,{...e.modelPrices},e.currency||"¥",(e.pricePacks||[]).map(n=>({...n,models:[...n.models]}))),50)}renderPriceEditor(e,t,s,n){var f,h,S;const o=e.element.querySelector("#tks-price-editor");if(!o)return;const i=this.store.getSettings().recalcCostOnPriceChange!==!1,r=(m,y,T)=>`
      <div class="tks-price-row">
        <input type="text" class="b3-text-field tks-price-model" value="${K(m)}" placeholder="模型名（如 gpt-4o）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-input" value="${K(String(y))}" placeholder="输入/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-output" value="${K(String(T))}" placeholder="输出/1K" />
        <button class="b3-button b3-button--small b3-button--danger tks-price-del" title="删除">✕</button>
      </div>
    `,a=m=>{const y=this.store.getPackUsage(m),T=m.totalTokens||0;let k;if(T>0){const v=Math.max(0,T-y.usedTokens);k=`已用 ${y.usedTokens.toLocaleString()} / 总量 ${T.toLocaleString()}（剩余 ${v.toLocaleString()}）`}else k=`已用 ${y.usedTokens.toLocaleString()}（总量不限）`;return`
      <div class="tks-pack-row" data-pack-id="${K(m.id)}">
        <input type="text" class="b3-text-field tks-pack-name" value="${K(m.name)}" placeholder="资源包名（如 通义千问）" />
        <input type="number" step="1" min="0" class="b3-text-field tks-pack-total" value="${K(String(m.totalTokens||0))}" placeholder="总 Tokens（0 不限）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-input" value="${K(String(m.input))}" placeholder="输入单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-output" value="${K(String(m.output))}" placeholder="输出单价/1K" />
        <input type="text" class="b3-text-field tks-pack-models" value="${K((m.models||[]).join(", "))}" placeholder="涵盖模型，逗号分隔" />
        <button class="b3-button b3-button--small b3-button--danger tks-pack-del" title="删除">✕</button>
        <div class="tks-pack-usage">${K(k)}</div>
      </div>
    `},l=Object.entries(t).map(([m,y])=>r(m,y.input,y.output)).join(""),d=n.map(m=>a(m)).join("");o.innerHTML=`
      <div class="tks-price-head">
        <label>货币类型</label>
        <select id="tks-price-currency" class="b3-select fn__size200">
          <option value="¥" ${s==="¥"?"selected":""}>¥ (人民币)</option>
          <option value="$" ${s==="$"?"selected":""}>$ (美元)</option>
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
      <div class="tks-pack-list" id="tks-pack-list">${d||'<div class="tks-price-empty">尚未配置任何资源包</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-pack-add">+ 添加资源包</button>
        <button class="b3-button b3-button--text" id="tks-price-save">保存</button>
      </div>
    `;const u=o.querySelector("#tks-price-list"),c=o.querySelector("#tks-pack-list"),g=m=>{var y;(y=m.querySelector(".tks-price-del"))==null||y.addEventListener("click",()=>{m.remove(),u.querySelectorAll(".tks-price-row").length===0&&(u.innerHTML='<div class="tks-price-empty">尚未配置任何模型单价</div>')})};u.querySelectorAll(".tks-price-row").forEach(m=>g(m)),(f=o.querySelector("#tks-price-add"))==null||f.addEventListener("click",()=>{const m=u.querySelector(".tks-price-empty");m&&m.remove(),u.insertAdjacentHTML("beforeend",r("",0,0)),g(u.lastElementChild)});const p=m=>{var y;(y=m.querySelector(".tks-pack-del"))==null||y.addEventListener("click",()=>{m.remove(),c.querySelectorAll(".tks-pack-row").length===0&&(c.innerHTML='<div class="tks-price-empty">尚未配置任何资源包</div>')})};c.querySelectorAll(".tks-pack-row").forEach(m=>p(m)),(h=o.querySelector("#tks-pack-add"))==null||h.addEventListener("click",()=>{const m=c.querySelector(".tks-price-empty");m&&m.remove();const y={id:`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,name:"",totalTokens:0,input:0,output:0,models:[]};c.insertAdjacentHTML("beforeend",a(y)),p(c.lastElementChild)}),(S=o.querySelector("#tks-price-save"))==null||S.addEventListener("click",()=>{var v,R;const m={};u.querySelectorAll(".tks-price-row").forEach(M=>{var I,U,L;const x=(((I=M.querySelector(".tks-price-model"))==null?void 0:I.value)||"").toLowerCase().trim().replace(/[\s\-_]+/g,""),C=parseFloat(((U=M.querySelector(".tks-price-input"))==null?void 0:U.value)||"0")||0,$=parseFloat(((L=M.querySelector(".tks-price-output"))==null?void 0:L.value)||"0")||0;x&&(m[x]={input:C,output:$})});const y=[];c.querySelectorAll(".tks-pack-row").forEach(M=>{var O,q,P,_,z;const x=M.dataset.packId||`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,C=(((O=M.querySelector(".tks-pack-name"))==null?void 0:O.value)||"").trim(),$=parseInt(((q=M.querySelector(".tks-pack-total"))==null?void 0:q.value)||"0",10)||0,I=parseFloat(((P=M.querySelector(".tks-pack-input"))==null?void 0:P.value)||"0")||0,U=parseFloat(((_=M.querySelector(".tks-pack-output"))==null?void 0:_.value)||"0")||0,L=(((z=M.querySelector(".tks-pack-models"))==null?void 0:z.value)||"").split(/[,，]/).map(Y=>Y.toLowerCase().trim().replace(/[\s\-_]+/g,"")).filter(Boolean);(C||L.length>0)&&y.push({id:x,name:C,totalTokens:$,input:I,output:U,models:L})});const T=((v=o.querySelector("#tks-price-currency"))==null?void 0:v.value)||"¥",k=((R=o.querySelector("#tks-price-recalc"))==null?void 0:R.checked)??!0;this.store.updateSettings({currency:T,modelPrices:m,pricePacks:y,recalcCostOnPriceChange:k}),this.store.save(),e.destroy(),A.showMessage("费用配置已保存",2e3,"info")})}openKeyManager(){const e=this.isMobile(),t=new A.Dialog({title:"API Key 管理",width:e?"95vw":"750px",height:e?"80vh":"500px",content:'<div id="tks-key-mgr" class="tks-key-mgr"></div>'});setTimeout(()=>this.renderKeyList(t),50)}renderKeyList(e){var o,i,r;const t=e.element.querySelector("#tks-key-mgr");if(!t)return;const s=this.store.getApiKeys();t.innerHTML=`
      <div class="tks-key-toolbar">
        <button class="b3-button b3-button--text" id="tks-add-key">+ 添加 API Key</button>
        <button class="b3-button b3-button--text" id="tks-export-keys">📤 导出</button>
        <button class="b3-button b3-button--text" id="tks-import-keys">📥 导入</button>
        <span class="tks-key-hint">共 ${s.length} 个 Key</span>
      </div>
      <div class="tks-key-list" id="tks-key-list-items"></div>
    `;const n=t.querySelector("#tks-key-list-items");for(const a of s){const l=this.keyManager.getKeyUsage(a.id),d=a.quotaLimit>0?Math.min(100,l.totalTokens/a.quotaLimit*100):0,u=document.createElement("div");u.className="tks-key-item",u.innerHTML=`
        <div class="tks-key-info">
          <div class="tks-key-name">
            ${this.providerIcon(a.provider)} ${K(a.name)}
            ${a.enabled?"":'<span class="tks-badge tks-badge-off">已禁用</span>'}
          </div>
          <div class="tks-key-detail">
            <span class="tks-key-masked">${K(a.keyMasked)}</span>
            ${a.provider?`<span class="tks-key-provider">${K(a.provider)}</span>`:""}
            ${a.baseUrl?`<span class="tks-key-url" title="${K(a.baseUrl)}">${K(a.baseUrl)}</span>`:""}
          </div>
          <div class="tks-key-quota">
            <div class="tks-quota-bar">
              <div class="tks-quota-fill ${d>=(a.alertThreshold||100)?"tks-quota-alert":""}"
                   style="width: ${d}%"></div>
            </div>
            <span class="tks-quota-text">
              ${l.totalTokens.toLocaleString()}${a.quotaLimit>0?" / "+a.quotaLimit.toLocaleString():""} tokens
              ${a.alertThreshold>0?`· 阈值 ${a.alertThreshold}%`:""}
            </span>
          </div>
        </div>
        <div class="tks-key-actions">
          <button class="b3-button b3-button--small" data-action="edit" data-id="${K(a.id)}">编辑</button>
          <button class="b3-button b3-button--small b3-button--danger" data-action="delete" data-id="${K(a.id)}">删除</button>
        </div>
      `,n.appendChild(u)}(o=t.querySelector("#tks-add-key"))==null||o.addEventListener("click",()=>{this.openKeyEditor(e,null)}),(i=t.querySelector("#tks-export-keys"))==null||i.addEventListener("click",()=>{this.exportKeys()}),(r=t.querySelector("#tks-import-keys"))==null||r.addEventListener("click",()=>{this.importKeys(e)}),t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",l=>{const d=l.currentTarget,u=d.dataset.action,c=d.dataset.id;if(u==="edit"){const g=this.store.getApiKey(c);g&&this.openKeyEditor(e,g)}else u==="delete"&&A.confirm("删除 API Key","确定删除此 API Key 吗？相关统计记录将保留。",()=>{this.store.deleteApiKey(c),this.keyManager.resetAlert(c),this.renderKeyList(e),A.showMessage("已删除",2e3,"info")})})})}openKeyEditor(e,t){var r,a,l;const s=!!t,n=this.isMobile(),o=new A.Dialog({title:s?"编辑 API Key":"添加 API Key",width:n?"92vw":"500px",height:"auto",content:`
        <div class="tks-key-editor">
          <div class="tks-form-row">
            <label>名称</label>
            <input type="text" id="tke-name" class="b3-text-field" value="${K((t==null?void 0:t.name)||"")}" placeholder="例如：我的 OpenAI Key" />
          </div>
          <div class="tks-form-row">
            <label>API Key</label>
            <input type="password" id="tke-key" class="b3-text-field" value="${K((t==null?void 0:t.keyFull)||"")}" placeholder="sk-..." />
            <div class="tks-form-hint">用于匹配请求头中的 Authorization / x-api-key，留空则仅按 URL 匹配</div>
          </div>
          <div class="tks-form-row">
            <label>提供商名称</label>
            <input type="text" id="tke-provider" class="b3-text-field" value="${K((t==null?void 0:t.provider)||"")}" list="tke-provider-list" placeholder="例如：OpenAI、DeepSeek、华为云、SiYuan" />
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
            <input type="text" id="tke-url" class="b3-text-field" value="${K((t==null?void 0:t.baseUrl)||"")}" placeholder="例如：https://api.openai.com/v1/chat/completions，或 /api/ai/" />
            <div class="tks-form-hint">用于 URL 匹配。可填完整 URL、域名或路径（如 /api/ai/）。留空则仅按 Key 匹配。</div>
          </div>
          <div class="tks-form-row">
            <label>关联模型</label>
            <input type="text" id="tke-models" class="b3-text-field" value="${K(t!=null&&t.models?t.models.join(", "):"")}" placeholder="例如：Qwen/Qwen3-8B, sensenova-6.7-flash-lite" />
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
      `}),i=o.element;(r=i.querySelector("#tke-provider"))==null||r.addEventListener("input",d=>{const u=d.target.value.trim(),c=i.querySelector("#tke-url");!c.value&&u&&(c.value=this.keyManager.getDefaultBaseUrl(u))}),(a=i.querySelector("#tke-cancel"))==null||a.addEventListener("click",()=>o.destroy()),(l=i.querySelector("#tke-save"))==null||l.addEventListener("click",()=>{const d=i.querySelector("#tke-name").value.trim(),u=i.querySelector("#tke-key").value.trim(),c=i.querySelector("#tke-provider").value.trim(),g=i.querySelector("#tke-url").value.trim(),p=i.querySelector("#tke-models").value.split(/[,，]/).map(k=>k.trim()).filter(Boolean),f=parseInt(i.querySelector("#tke-quota").value,10)||0,h=parseInt(i.querySelector("#tke-threshold").value,10)||0,S=Math.max(0,parseInt(i.querySelector("#tke-usedTokensOffset").value,10)||0),m=Math.max(0,parseInt(i.querySelector("#tke-usedInputTokensOffset").value,10)||0),y=Math.max(0,parseInt(i.querySelector("#tke-usedOutputTokensOffset").value,10)||0),T=i.querySelector("#tke-enabled").value==="true";if(!d){A.showMessage("请输入名称",3e3,"error");return}if(s&&t)this.store.updateApiKey(t.id,{name:d,keyFull:u,keyMasked:this.keyManager.maskKey(u),provider:c,baseUrl:g,models:p,quotaLimit:f,alertThreshold:h,usedTokensOffset:S,usedInputTokensOffset:m,usedOutputTokensOffset:y,enabled:T}),this.keyManager.resetAlert(t.id);else{const k={id:this.keyManager.generateKeyId(),name:d,keyFull:u,keyMasked:this.keyManager.maskKey(u),provider:c,baseUrl:g,models:p,quotaLimit:f,usedTokensOffset:S,usedInputTokensOffset:m,usedOutputTokensOffset:y,alertThreshold:h,enabled:T,createdAt:Date.now()};this.store.addApiKey(k)}this.store.save(),o.destroy(),this.renderKeyList(e),A.showMessage("已保存",2e3,"info")})}exportKeys(){const e=this.store.getApiKeys(),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),apiKeys:e},null,2),s=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(s),o=document.createElement("a");o.href=n,o.download=`siyuan-token-stats-keys-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(n)},0),A.showMessage(`已导出 ${e.length} 个 API Key`,2e3,"info")}importKeys(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async s=>{var o;const n=(o=s.target.files)==null?void 0:o[0];if(n)try{const i=await n.text(),r=JSON.parse(i),a=Array.isArray(r)?r:r.apiKeys;if(!Array.isArray(a))throw new Error("导入文件格式不正确，未找到 apiKeys 数组");let l=0,d=0;for(const c of a){if(!c||!c.keyFull)continue;const g=Array.isArray(c.models)?c.models:typeof c.models=="string"?c.models.split(/[,，]/).map(f=>f.trim()).filter(Boolean):[],p=this.store.getApiKeys().find(f=>f.keyFull===c.keyFull);p?(this.store.updateApiKey(p.id,{name:c.name||p.name,provider:c.provider||p.provider,baseUrl:c.baseUrl||p.baseUrl,models:g.length?g:p.models||[],quotaLimit:c.quotaLimit??p.quotaLimit,alertThreshold:c.alertThreshold??p.alertThreshold,enabled:c.enabled??p.enabled}),d++):(this.store.addApiKey({id:this.keyManager.generateKeyId(),name:c.name||"Imported Key",keyFull:c.keyFull,keyMasked:this.keyManager.maskKey(c.keyFull),provider:c.provider||"",baseUrl:c.baseUrl||"",models:g,quotaLimit:c.quotaLimit||0,usedTokensOffset:c.usedTokensOffset||0,usedInputTokensOffset:c.usedInputTokensOffset||0,usedOutputTokensOffset:c.usedOutputTokensOffset||0,alertThreshold:c.alertThreshold||0,enabled:c.enabled!==!1,createdAt:Date.now()}),l++)}this.store.save(),this.renderKeyList(e);const u=[];l>0&&u.push(`新增 ${l} 个`),d>0&&u.push(`更新 ${d} 个`),A.showMessage(`导入成功：${u.join("，")||"无变化"}`,2e3,"info")}catch(i){console.error("[TokenStats] Import keys failed:",i),A.showMessage("导入失败："+i.message,3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}providerIcon(e){const t=(e||"").toLowerCase();return{siyuan:"🐿️",openai:"🤖",anthropic:"🧠",deepseek:"🔍",siliconflow:"🌊",华为云:"☁️",huawei:"☁️"}[t]||"🔑"}exportData(){const e=this.store.exportAll(),t=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,n.click(),URL.revokeObjectURL(s),A.showMessage("数据已导出",2e3,"info")}clearRecords(){A.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。此操作不可撤销。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),A.showMessage("记录已清除",2e3,"info")})}resetAll(){A.confirm("重置全部数据","⚠️ 确定重置吗？所有调用记录将被清除，设置恢复默认值。API Key 配置保留不变，此操作不可撤销。",()=>{this.store.clearRecords(),this.store.resetSettings(),this.keyManager.clearAllAlerts(),A.showMessage("已重置",2e3,"info")})}}function E(b){return b?b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function Z(b){let e=0;for(let s=0;s<b.length;s++)e=e*31+b.charCodeAt(s)>>>0;return`hsl(${e%360}, 60%, 52%)`}function F(b){return`${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}-${String(b.getDate()).padStart(2,"0")}`}function ye(b){const e=b.getDay(),t=(e===0?-6:1)-e,s=new Date(b);return s.setDate(b.getDate()+t),s.setHours(0,0,0,0),s}function ve(b){return new Date(b.getFullYear(),b.getMonth(),1)}class xe{constructor(e,t){this.dialog=null,this.summary=null,this.refreshTimer=null,this.store=e,this.keyManager=t}show(){try{if(this.summary=this.computeSummary(),this.dialog&&this.dialog.element&&this.dialog.element.isConnected){this.refreshContent();return}this.dialog&&(this.dialog.destroy(),this.dialog=null);const e=this.isMobile();this.dialog=new A.Dialog({title:"📊 Token 用量统计",width:e?"95vw":"900px",height:e?"85vh":"700px",content:this.renderHTML(this.summary),destroyCallback:()=>{this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null),this.dialog=null}}),this.bindEvents(),this.refreshTimer=setInterval(()=>{if(!this.dialog||!this.dialog.element||!this.dialog.element.isConnected){this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null);return}this.refreshContent()},3e3)}catch(e){console.error("[TokenStats] Dashboard show error:",e),A.showMessage("仪表盘打开失败: "+e.message,3e3,"error")}}refreshContent(){if(!this.dialog||!this.dialog.element)return;const e=this.dialog.element.querySelector(".b3-dialog__body");if(!e)return;const t=document.activeElement;if(t&&e.contains(t)&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"))return;const s=e.scrollTop;this.summary=this.computeSummary(),e.innerHTML=this.renderHTML(this.summary),this.bindEvents();const n=this.dialog.element.querySelector(".b3-dialog__body");n&&(n.scrollTop=s)}isMobile(){const e=A.getFrontend();return e==="mobile"||e==="browser-mobile"}computeSummary(){const e=this.store.getRecords(),t=this.store.getApiKeys(),s=this.store.getSettings(),n={totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalRequests:e.length,successRequests:0,failedRequests:0,averageRequestTime:0,totalCost:0,modelStats:{},dailyStats:[],keyStats:[]};let o=0;for(const i of e){n.totalTokens+=i.totalTokens,n.totalInputTokens+=i.inputTokens,n.totalOutputTokens+=i.outputTokens,n.totalCost+=this.store.getRecordCost(i),o+=i.requestTime,i.success?n.successRequests++:n.failedRequests++;const r=i.model||"unknown",a=r.toLowerCase().trim();n.modelStats[a]||(n.modelStats[a]={model:r,count:0,tokens:0,inputTokens:0,outputTokens:0,cost:0}),n.modelStats[a].count++,n.modelStats[a].tokens+=i.totalTokens,n.modelStats[a].inputTokens+=i.inputTokens,n.modelStats[a].outputTokens+=i.outputTokens,n.modelStats[a].cost+=this.store.getRecordCost(i)}n.averageRequestTime=e.length>0?o/e.length:0,n.dailyStats=this.computeTrendStats(e,s);for(const i of t){const r=this.keyManager.getKeyUsage(i.id),a=i.quotaLimit>0?Math.min(100,r.totalTokens/i.quotaLimit*100):0;n.keyStats.push({apiKeyId:i.id,apiKeyName:i.name,totalTokens:r.totalTokens,totalInputTokens:r.totalInputTokens,totalOutputTokens:r.totalOutputTokens,totalRequests:r.totalRequests,quotaLimit:i.quotaLimit,alertThreshold:i.alertThreshold,usagePercent:a,isAlert:i.alertThreshold>0&&a>=i.alertThreshold,isExceeded:i.quotaLimit>0&&r.totalTokens>=i.quotaLimit})}return n.keyStats.sort((i,r)=>r.totalTokens-i.totalTokens),n}computeTrendStats(e,t){const{trendDateRangeStart:s,trendDateRangeEnd:n,trendAggregation:o}=t;let i=1/0,r=-1/0;for(const m of e)i=Math.min(i,m.timestamp),r=Math.max(r,m.timestamp);const a=e.length>0&&isFinite(i)&&isFinite(r),l=new Date;l.setHours(0,0,0,0);const d=a?new Date(i):new Date(l.getTime()-13*24*60*60*1e3),u=a?new Date(r):l,c=s||F(d),g=n||F(u),p=new Date(c+"T00:00:00"),f=new Date(g+"T23:59:59.999"),h={},S=(m,y,T,k,v)=>{h[m]||(h[m]={date:m,tokens:0,count:0,byModel:{},cost:0}),h[m].tokens+=y,h[m].count+=T,h[m].byModel[k]=(h[m].byModel[k]||0)+y,h[m].cost+=v};for(const m of e){if(m.timestamp<p.getTime()||m.timestamp>f.getTime())continue;const y=new Date(m.timestamp),T=(m.model||"unknown").toLowerCase().trim(),k=this.store.getRecordCost(m);if(o==="weekly"){const v=ye(y);S(F(v),m.totalTokens,1,T,k)}else if(o==="monthly"){const v=ve(y);S(F(v),m.totalTokens,1,T,k)}else S(F(y),m.totalTokens,1,T,k)}return Object.values(h).sort((m,y)=>m.date.localeCompare(y.date))}renderHTML(e){const t=this.store.getRecentRecords(30),s=Math.max(...Object.values(e.modelStats).map(d=>d.tokens),1),n=this.store.getSettings(),o=this.keyManager.getGlobalUsagePercent(n),i=this.keyManager.getGlobalUsage(n),r=this.getMinRecordDate(),a=this.getMaxRecordDate(),l=`
      <div class="tks-trend-controls">
        <label>区间：</label>
        <input type="date" id="tks-trend-start" class="b3-text-field" value="${E(n.trendDateRangeStart||r||"")}" ${r?`min="${E(r)}" max="${E(a||"")}"`:""} />
        <span>~</span>
        <input type="date" id="tks-trend-end" class="b3-text-field" value="${E(n.trendDateRangeEnd||a||"")}" ${a?`min="${E(r||"")}" max="${E(a)}"`:""} />
        <select id="tks-trend-aggregation" class="b3-select">
          <option value="daily" ${n.trendAggregation==="daily"?"selected":""}>按日</option>
          <option value="weekly" ${n.trendAggregation==="weekly"?"selected":""}>按周</option>
          <option value="monthly" ${n.trendAggregation==="monthly"?"selected":""}>按月</option>
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
          ${n.globalQuotaLimit>0?`
          <div class="tks-card tks-card-global">
            <div class="tks-card-icon">🌍</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${o.toFixed(1)}%</div>
              <div class="tks-card-label">全局限额 ${i.totalTokens.toLocaleString()} / ${n.globalQuotaLimit.toLocaleString()}</div>
            </div>
          </div>
          `:""}
        </div>

        <!-- API Key 用量 -->
        <div class="tks-section">
          <h3 class="tks-section-title">🔑 API Key 用量与限额</h3>
          <div class="tks-key-stats">
            ${e.keyStats.map(d=>this.renderKeyStat(d)).join("")}
          </div>
        </div>

        <!-- Token 趋势 -->
        <div class="tks-section">
          <h3 class="tks-section-title">📈 Token 趋势</h3>
          ${l}
          ${e.dailyStats.length===0?'<div class="tks-empty-chart">当前区间内无数据</div>':`
          <div class="tks-daily-chart">
            ${this.buildTrendSvg(e,n.trendAggregation)}
          </div>
          ${this.buildTrendLegend(e)}
          <div class="tks-trend-caption">柱形按模型堆叠（高度=当日总 Token）；折线为当日估算费用（右轴），未配置单价时为 0</div>`}
        </div>

        <!-- 模型分布 -->
        <div class="tks-section">
          <h3 class="tks-section-title">🤖 模型用量分布</h3>
          <div class="tks-model-stats">
            ${Object.values(e.modelStats).sort((d,u)=>u.tokens-d.tokens).map(d=>this.renderModelBar(d,s)).join("")}
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
                ${t.map(d=>this.renderRecordRow(d)).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="tks-dashboard-actions">
          <button class="b3-button b3-button--outline" id="tks-refresh">🔄 刷新</button>
          <button class="b3-button b3-button--outline" id="tks-export-json">📥 导出 JSON</button>
          <button class="b3-button b3-button--outline" id="tks-export-csv">📊 导出 CSV</button>
          <button class="b3-button b3-button--outline b3-button--danger" id="tks-clear-records">🗑️ 清除记录</button>
        </div>
      </div>
    `}getMinRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=1/0;for(const s of e)t=Math.min(t,s.timestamp);return F(new Date(t))}getMaxRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=-1/0;for(const s of e)t=Math.max(t,s.timestamp);return F(new Date(t))}renderKeyStat(e){const t=e.quotaLimit>0?`${e.totalTokens.toLocaleString()} / ${e.quotaLimit.toLocaleString()}`:`${e.totalTokens.toLocaleString()} (不限)`,s=e.alertThreshold>0?` · 阈值 ${e.alertThreshold}%`:"",n=e.isExceeded?"⛔":e.isAlert?"⚠️":e.quotaLimit>0?"✅":"";return`
      <div class="tks-key-stat ${e.isAlert?"tks-key-stat-alert":""} ${e.isExceeded?"tks-key-stat-exceeded":""}">
        <div class="tks-key-stat-header">
          <span class="tks-key-stat-name">${n} ${E(e.apiKeyName)}</span>
          <span class="tks-key-stat-requests">${e.totalRequests} 次请求</span>
        </div>
        <div class="tks-key-stat-bar">
          <div class="tks-key-stat-fill ${e.isAlert?"alert":""} ${e.isExceeded?"exceeded":""}"
               style="width: ${e.quotaLimit>0?e.usagePercent:0}%"></div>
        </div>
        <div class="tks-key-stat-detail">
          ${t} tokens${s}
          ${e.quotaLimit>0?` · ${e.usagePercent.toFixed(1)}%`:""}
        </div>
      </div>
    `}buildTrendSvg(e,t){const s=e.dailyStats,n=s.length;if(n===0)return"";const o=720,i=260,r=48,a=52,l=18,d=30,u=o-r-a,c=i-l-d,g=Math.max(...s.map(x=>x.tokens),1),p={};for(const x of s)for(const C of Object.keys(x.byModel))p[C]=(p[C]||0)+x.byModel[C];const f=Object.keys(p).sort((x,C)=>p[C]-p[x]),h=Math.max(...s.map(x=>x.cost),0),S=u/n,m=Math.min(26,S*.62),y=x=>r+S*(x+.5);let T="";for(let x=0;x<n;x++){const C=s[x],I=y(x)-m/2;let U=l+c;for(const L of f){const O=C.byModel[L]||0;if(O<=0)continue;const q=O/g*c;U-=q,T+=`<rect x="${I.toFixed(1)}" y="${U.toFixed(1)}" width="${m.toFixed(1)}" height="${Math.max(.5,q).toFixed(1)}" fill="${Z(L)}"><title>${E(L)}: ${O.toLocaleString()} tokens</title></rect>`}}let k="";if(h>0){k=`<polyline points="${s.map((C,$)=>`${y($).toFixed(1)},${(l+(1-C.cost/h)*c).toFixed(1)}`).join(" ")}" fill="none" stroke="#e0556b" stroke-width="2" stroke-linejoin="round"/>`;for(let C=0;C<n;C++){const $=l+(1-s[C].cost/h)*c;k+=`<circle cx="${y(C).toFixed(1)}" cy="${$.toFixed(1)}" r="2.5" fill="#e0556b"><title>费用: ${E(this.store.formatCost(s[C].cost))}</title></circle>`}}let v="";for(let x=0;x<=2;x++){const C=l+c*x/2,$=Math.round(g*(1-x/2));if(v+=`<line x1="${r}" y1="${C.toFixed(1)}" x2="${r+u}" y2="${C.toFixed(1)}" stroke="#e3e3e3" stroke-width="1"/>`,v+=`<text x="${r-6}" y="${(C+3).toFixed(1)}" text-anchor="end" font-size="10" fill="#8a8a8a">${$>=1e3?($/1e3).toFixed($>=1e4?0:1)+"k":$}</text>`,h>0){const I=h*(1-x/2);v+=`<text x="${r+u+6}" y="${(C+3).toFixed(1)}" text-anchor="start" font-size="10" fill="#e0556b">${E(this.store.formatCost(I))}</text>`}}const R=Math.max(1,Math.ceil(n/16));let M="";for(let x=0;x<n;x++){if(x%R!==0&&x!==n-1)continue;const C=s[x];let $=C.date.substring(5);t==="monthly"?$=C.date.substring(0,7):t==="weekly"&&($=`W${C.date.substring(5,7)}${C.date.substring(8,10)}`),M+=`<text x="${y(x).toFixed(1)}" y="${l+c+14}" text-anchor="middle" font-size="9" fill="#8a8a8a">${E($)}</text>`}return`<svg class="tks-trend-svg" viewBox="0 0 ${o} ${i}" preserveAspectRatio="xMidYMid meet" width="100%">${v}${T}${k}${M}</svg>`}buildTrendLegend(e){const t={};for(const i of e.dailyStats)for(const r of Object.keys(i.byModel))t[r]=(t[r]||0)+i.byModel[r];return`<div class="tks-trend-legend">${Object.keys(t).sort((i,r)=>t[r]-t[i]).map(i=>`<span class="tks-legend-item"><span class="tks-legend-swatch" style="background:${Z(i)}"></span>${E(i)}</span>`).join("")}<span class="tks-legend-item"><span class="tks-legend-line"></span>当日费用（右轴）</span></div>`}renderModelBar(e,t){const s=Math.max(1,e.tokens/t*100);return`
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${E(e.model)}">${E(e.model)}</div>
        <div class="tks-model-bar-track">
          <div class="tks-model-bar-fill" style="width: ${s}%; background: ${Z(e.model.toLowerCase().trim())}"></div>
        </div>
        <div class="tks-model-detail">
          ${e.tokens.toLocaleString()} tokens · ${e.count} 次${this.store.hasAnyPrice()?` · 💰 ${this.store.formatCost(e.cost)}`:""}
        </div>
      </div>
    `}renderRecordRow(e){return`
      <tr>
        <td>${new Date(e.timestamp).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}</td>
        <td title="${E(e.apiKeyName)}">${E(e.apiKeyName)}</td>
        <td>${E(e.source)}</td>
        <td>${E(e.model)}</td>
        <td>${e.inputTokens.toLocaleString()}</td>
        <td>${e.outputTokens.toLocaleString()}</td>
        <td><strong>${e.totalTokens.toLocaleString()}</strong></td>
        <td>${this.store.hasAnyPrice()?this.store.formatCost(this.store.getRecordCost(e)):"—"}</td>
        <td>${e.requestTime}ms</td>
        <td>${e.success?"✅":"❌"}</td>
      </tr>
    `}bindEvents(){var t,s,n,o,i,r;if(!this.dialog)return;const e=this.dialog.element;(t=e.querySelector("#tks-refresh"))==null||t.addEventListener("click",()=>{this.refreshContent()}),(s=e.querySelector("#tks-export-json"))==null||s.addEventListener("click",()=>{const a=this.store.exportAll();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,a,"application/json"),A.showMessage("数据已导出（JSON）",2e3,"info")}),(n=e.querySelector("#tks-export-csv"))==null||n.addEventListener("click",()=>{const a=this.buildRecordsCsv();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.csv`,a,"text/csv;charset=utf-8"),A.showMessage("数据已导出（CSV）",2e3,"info")}),(o=e.querySelector("#tks-clear-records"))==null||o.addEventListener("click",()=>{A.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),this.show(),A.showMessage("记录已清除",2e3,"info")})}),(i=e.querySelector("#tks-trend-apply"))==null||i.addEventListener("click",()=>{var u,c,g;const a=((u=e.querySelector("#tks-trend-start"))==null?void 0:u.value)||"",l=((c=e.querySelector("#tks-trend-end"))==null?void 0:c.value)||"",d=(g=e.querySelector("#tks-trend-aggregation"))==null?void 0:g.value;this.store.updateSettings({trendDateRangeStart:a,trendDateRangeEnd:l,trendAggregation:d}),this.store.save(),this.show()}),(r=e.querySelector("#tks-trend-reset"))==null||r.addEventListener("click",()=>{this.store.updateSettings({trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily"}),this.store.save(),this.show()})}downloadFile(e,t,s){const n=new Blob([t],{type:s}),o=URL.createObjectURL(n),i=document.createElement("a");i.href=o,i.download=e,i.click(),URL.revokeObjectURL(o)}buildRecordsCsv(){var i;const e=this.store.getRecords().slice().sort((r,a)=>r.timestamp-a.timestamp),t=this.store.getSettings().currency||"¥",s=this.summary,n=r=>{const a=String(r);return/[",\n]/.test(a)?`"${a.replace(/"/g,'""')}"`:a},o=[];s&&(o.push(`# 总Token,${s.totalTokens}`),o.push(`# 输入Token,${s.totalInputTokens}`),o.push(`# 输出Token,${s.totalOutputTokens}`),o.push(`# 请求数,${s.totalRequests}`),o.push(`# 总费用,${t}${s.totalCost.toFixed(4)}`)),o.push(`# 记录数,${e.length}`),o.push(["时间","模型","输入Token","输出Token","总计Token","费用","Key名称","耗时(ms)","成功"].join(","));for(const r of e){const a=new Date(r.timestamp),l=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")} ${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`,d=((i=this.store.getApiKey(r.apiKeyId))==null?void 0:i.name)||r.apiKeyName||"";o.push([l,r.model,r.inputTokens,r.outputTokens,r.totalTokens,t+this.store.getRecordCost(r).toFixed(4),d,r.requestTime,r.success?"是":"否"].map(n).join(","))}return"\uFEFF"+o.join(`
`)}}const Te=`<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="iconTokenStats" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>
    <rect x="9.5" y="16" width="3" height="7" rx="0.8" fill="currentColor"/>
    <rect x="14.5" y="12" width="3" height="11" rx="0.8" fill="currentColor"/>
    <rect x="19.5" y="9" width="3" height="14" rx="0.8" fill="currentColor"/>
  </symbol>
</svg>`;class Se extends A.Plugin{constructor(){super(...arguments),this.styleElement=null,this.syncHandler=null,this.mergeTimer=null,this.merging=!1,this.topBarItem=null,this.badgeEl=null,this.badgeTimer=null,this.lsHeartbeatTimer=null}async onload(){console.log("[TokenStats] Plugin loading..."),console.log(`[TokenStats] Frontend: ${A.getFrontend()}`),this.styleElement=document.createElement("style"),this.styleElement.id="siyuan-token-stats-style",this.styleElement.textContent=ie,document.head.appendChild(this.styleElement),this.addIcons(Te),this.store=new ce,await this.store.load(),this.tokenCounter=new ue,this.keyManager=new de(this.store),this.interceptor=new ke(this.store,this.keyManager,this.tokenCounter),this.dashboard=new xe(this.store,this.keyManager),this.interceptor.setThresholdCallback((e,t)=>{this.store.getSettings().showNotifications&&A.showMessage(t,5e3,"error")}),this.interceptor.install(),this.topBarItem=this.addTopBar({icon:"iconTokenStats",title:"Token 用量统计",position:"right",callback:()=>{this.dashboard.show()}}),this.initTopBarBadge(),this.settingsPanel=new be(this.store,this.keyManager),this.settingsPanel.onManualSync=()=>this.manualSync(),this.setting=this.settingsPanel.setting,this.addCommand({langKey:"showTokenStats",langText:"打开 Token 用量统计",hotkey:"",callback:()=>{this.dashboard.show()}}),this.syncHandler=e=>{const t=typeof(e==null?void 0:e.detail)=="string"?e.detail:JSON.stringify((e==null?void 0:e.detail)??"");console.log("[TokenStats] Sync event received, merging data...",t.substring(0,100)),setTimeout(()=>this.mergeFromRemote(),1e3)},this.eventBus.on("sync-end",this.syncHandler),setTimeout(()=>this.mergeFromRemote(),3e3),this.mergeTimer=window.setInterval(()=>this.mergeFromRemote(),6e4),console.log("[TokenStats] Plugin loaded successfully."),this.lsHeartbeatTimer=window.setInterval(()=>{this.store.saveToLocalStorage()},1e4)}onunload(){var e,t,s,n,o;console.log("[TokenStats] Plugin unloading..."),this.mergeTimer!==null&&(clearInterval(this.mergeTimer),this.mergeTimer=null),this.badgeTimer!==null&&(clearInterval(this.badgeTimer),this.badgeTimer=null),this.lsHeartbeatTimer!==null&&(clearInterval(this.lsHeartbeatTimer),this.lsHeartbeatTimer=null),this.syncHandler&&(this.eventBus.off("sync-end",this.syncHandler),this.syncHandler=null),(e=this.interceptor)==null||e.uninstall(),(t=this.store)==null||t.saveToLocalStorage(),(s=this.store)==null||s.saveSync(),(n=this.store)==null||n.save().catch(i=>console.error("[TokenStats] Save on unload failed:",i)),(o=this.styleElement)==null||o.remove(),this.styleElement=null,console.log("[TokenStats] Plugin unloaded.")}async mergeFromRemote(){this.store.getSettings().syncStatistics&&await this.doMerge()}async doMerge(){if(this.merging)return!1;this.merging=!0;try{const e=await this.store.mergeFromRemote();return e&&this.settingsPanel.refreshFromStore(),this.updateBadge(),this.checkThresholdsLive(),e}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}finally{this.merging=!1}}async manualSync(){return this.doMerge()}initTopBarBadge(){if(!this.topBarItem)return;const e=document.createElement("span");e.className="tks-topbar-badge",e.style.display="none",this.topBarItem.style.position="relative",this.topBarItem.appendChild(e),this.badgeEl=e,this.updateBadge(),this.badgeTimer=window.setInterval(()=>{this.updateBadge(),this.checkThresholdsLive()},3e3)}updateBadge(){const e=this.badgeEl;if(!e)return;const t=this.store.getSettings();if(!t.showTopBarBadge){e.style.display="none";return}if(t.globalCostLimit>0){const i=this.keyManager.getGlobalCostPercent(t),r=this.keyManager.getGlobalCostUsage(t),a=t.currency||"¥";let l,d="neutral";l=`${i.toFixed(0)}%`;const u=t.globalCostAlertThreshold>0?t.globalCostAlertThreshold:70;i>=90||this.keyManager.isGlobalCostExceeded(t)?d="danger":i>=u?d="warn":d="ok",e.textContent=l,e.className=`tks-topbar-badge tks-badge-${d}`,e.style.display="inline-block",e.title=`费用 ${a}${r.totalCost.toFixed(2)} / ${a}${t.globalCostLimit.toFixed(2)}`;return}const s=this.keyManager.getGlobalUsage(t);let n,o="neutral";if(t.globalQuotaLimit>0){const i=this.keyManager.getGlobalUsagePercent(t);n=`${Math.round(i)}%`;const r=t.globalAlertThreshold>0?t.globalAlertThreshold:70;i>=90||this.keyManager.isGlobalQuotaExceeded(t)?o="danger":i>=r?o="warn":o="ok"}else n=this.formatCompactTokens(s.totalTokens),o="neutral";e.textContent=n,e.className=`tks-topbar-badge tks-badge-${o}`,e.style.display="inline-block"}checkThresholdsLive(){this.store.getSettings().showNotifications&&this.keyManager.checkAllThresholds(t=>A.showMessage(t,5e3,"error"))}formatCompactTokens(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}}module.exports=Se;

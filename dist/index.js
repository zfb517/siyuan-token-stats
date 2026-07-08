"use strict";const M=require("siyuan"),le=`/* ═══════════════════════════════════════════\r
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
  grid-template-columns: 1fr 100px 100px 100px 36px;\r
  gap: 8px;\r
  align-items: center;\r
}\r
\r
/* 按模型单价列表列标题 */\r
.tks-price-header {\r
  display: grid;\r
  grid-template-columns: 1fr 100px 100px 100px 36px;\r
  gap: 8px;\r
  align-items: center;\r
  padding: 4px 0;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface-light, #888);\r
  font-weight: 500;\r
}\r
.tks-price-hd-input,\r
.tks-price-hd-cache,\r
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
  grid-template-columns: 1.2fr 100px 75px 75px 75px 1.4fr 36px;\r
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
  grid-template-columns: 1.2fr 100px 75px 75px 75px 1.4fr 36px;\r
  gap: 8px;\r
  align-items: center;\r
  padding: 4px 0;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface-light, #888);\r
  font-weight: 500;\r
}\r
.tks-pack-hd-total,\r
.tks-pack-hd-input,\r
.tks-pack-hd-cache,\r
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
`,Y="data/storage/siyuan-token-stats/data.json",ce="data/storage/siyuan-token-stats/data.json.bak",te="data/storage/siyuan-token-stats/data.backup.json",de="data/plugins/siyuan-token-stats/settings.json",V="siyuan-token-stats-data",se="1.3.0",H={matchByUrl:!0,interceptExternalAPIs:!0,blockOnQuotaExceeded:!1,quotaResetCycle:"monthly",abortStreamOnExceeded:!0,showNotifications:!0,showTopBarBadge:!0,maxRecords:5e3,globalQuotaLimit:0,globalAlertThreshold:0,globalQuotaResetCycle:"monthly",globalUsedTokensOffset:0,globalUsedInputTokensOffset:0,globalUsedOutputTokensOffset:0,globalCostLimit:0,globalCostAlertThreshold:0,globalCostResetCycle:"monthly",globalUsedCostOffset:0,customResetDays:30,trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily",debugLogging:!1,currency:"¥",recalcCostOnPriceChange:!0,syncStatistics:!0,modelPrices:{},pricePacks:[]};class ue{constructor(){this.saveTimer=null,this.data={version:se,lastSavedAt:0,settingsUpdatedAt:0,keysUpdatedAt:0,deletedKeys:[],apiKeys:[],records:[],settings:{...H}}}async readSource(e,t=!1){try{const s=await fetch(`/api/file/getFile?path=${encodeURIComponent(e)}`);if(!s.ok)return null;const n=await s.text();if(!n)return null;const o=JSON.parse(n);if(!o||typeof o!="object")return null;const a=Array.isArray(o.apiKeys),r=Array.isArray(o.records),i=!!o.settings,l=!!o.lastSavedAt;if(t&&!a&&!r)return null;if(a||r||i||l)return o}catch{}return null}async load(){try{let e=null;try{const b=localStorage.getItem(V);if(b){const v=JSON.parse(b);v&&v.lastSavedAt&&(e=v,console.log("[TokenStats] Found data in localStorage (primary)."))}}catch{}const t=await this.readSource(Y),s=await this.readSource(te),n=await this.readSource(de,!0),o=[t,s,n].filter(Boolean),a=e?[e,...o]:o;if(a.length===0){console.log("[TokenStats] No existing data in any source, starting fresh.");return}const r=new Map,i=b=>{const v=r.get(b.id);if(!v){r.set(b.id,b);return}const K=v.keysUpdatedAt||0,T=b.keysUpdatedAt||0;(T>K||T===K&&!v.keyFull&&b.keyFull)&&r.set(b.id,b)};for(const b of a)for(const v of b.apiKeys||[])i(v);const l=Array.from(r.values()),d=new Set;for(const b of a)for(const v of b.deletedKeys||[])d.add(v);const p=new Map;for(const b of a)for(const v of b.records||[])p.has(v.id)||p.set(v.id,v);const c=Array.from(p.values()).sort((b,v)=>b.timestamp-v.timestamp),h=(()=>{var v;let b=5e3;for(const K of a){const T=(v=K.settings)==null?void 0:v.maxRecords;typeof T=="number"&&T>b&&(b=T)}return b})(),u=c.length>h?c.slice(-h):c;let m=a[0];for(const b of a)b.settingsUpdatedAt>m.settingsUpdatedAt&&(m=b);const g=m.settings||{},A={...H,...g};"autoDetectSiYuanAI"in g&&(A.matchByUrl=g.autoDetectSiYuanAI),!("globalCostResetCycle"in g)&&g.globalQuotaResetCycle&&(A.globalCostResetCycle=g.globalQuotaResetCycle);const y=l.map(b=>{const v={...b};return v.id==="siyuan-built-in"&&v.provider==="siyuan"&&(v.provider=v.baseUrl?v.baseUrl:"SiYuan AI"),v.usedTokensOffset===void 0&&(v.usedTokensOffset=0),v.usedInputTokensOffset===void 0&&(v.usedInputTokensOffset=0),v.usedOutputTokensOffset===void 0&&(v.usedOutputTokensOffset=0),Array.isArray(v.models)||(v.models=[]),v}).filter(b=>!d.has(b.id)),C=Math.max(0,...a.map(b=>b.lastSavedAt||0)),f=Math.max(0,...a.map(b=>b.settingsUpdatedAt||0)),x=Math.max(0,...a.map(b=>b.keysUpdatedAt||0));this.data={version:se,lastSavedAt:C,settingsUpdatedAt:f,keysUpdatedAt:x,deletedKeys:Array.from(d),apiKeys:y,records:u,settings:A},console.log(`[TokenStats] Loaded (merged ${a.length} source(s), primary=${!!e}): ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`),this.saveToLocalStorage(),this.save().catch(b=>console.error("[TokenStats] Post-load save failed:",b))}catch(e){console.warn("[TokenStats] Failed to load data, starting fresh:",e)}}scheduleSave(e=500){this.saveToLocalStorage(),this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.save().catch(t=>console.error("[TokenStats] Save failed:",t))},e)}saveToLocalStorage(){try{this.data.lastSavedAt=Date.now(),localStorage.setItem(V,JSON.stringify(this.data))}catch{}}async save(){try{this.data.lastSavedAt=Date.now();try{const s=await fetch(`/api/file/getFile?path=${encodeURIComponent(Y)}`);if(s.ok){const n=await s.text();if(n){const o=new FormData;o.append("path",ce),o.append("file",new Blob([n],{type:"application/json"})),await fetch("/api/file/putFile",{method:"POST",body:o})}}}catch{}const e=new FormData;e.append("path",Y),e.append("file",new Blob([JSON.stringify(this.data,null,2)],{type:"application/json"}));const t=await fetch("/api/file/putFile",{method:"POST",body:e});if(!t.ok)throw new Error(`putFile returned ${t.status}`);try{const s=new FormData;s.append("path",te),s.append("file",new Blob([JSON.stringify(this.data,null,2)],{type:"application/json"})),await fetch("/api/file/putFile",{method:"POST",body:s})}catch{}try{localStorage.setItem(V,JSON.stringify(this.data))}catch{}}catch(e){console.error("[TokenStats] Failed to save data:",e);try{localStorage.setItem(V,JSON.stringify(this.data))}catch{}}}saveSync(){this.saveToLocalStorage();try{this.data.lastSavedAt=Date.now();const e=JSON.stringify(this.data,null,2);try{const t=new XMLHttpRequest;t.open("POST","/api/file/putFile",!1);const s=new FormData;s.append("path",Y),s.append("file",new Blob([e],{type:"application/json"})),t.send(s)}catch{}try{const t=new XMLHttpRequest;t.open("POST","/api/file/putFile",!1);const s=new FormData;s.append("path",te),s.append("file",new Blob([e],{type:"application/json"})),t.send(s)}catch{}console.log("[TokenStats] Synchronous save completed (localStorage + E + F).")}catch(e){console.error("[TokenStats] saveSync error:",e)}}async mergeFromRemote(){try{const e=await fetch(`/api/file/getFile?path=${encodeURIComponent(Y)}`);if(!e.ok)return!1;const t=await e.text();if(!t)return!1;const s=JSON.parse(t);if(!s)return!1;const n=this.data,o=s.lastSavedAt||0,a=n.lastSavedAt||0,r=s.settingsUpdatedAt||0,i=s.keysUpdatedAt||0,l=n.settingsUpdatedAt||0,d=n.keysUpdatedAt||0;if(o===a&&r===l&&i===d&&o>0)return console.log("[TokenStats] Sync merge: data unchanged, skipping."),!1;console.log(`[TokenStats] Sync merge: local ls=${a} lset=${l} lkey=${d}, remote rs=${o} rset=${r} rkey=${i}`);const p=s.records||[],c=new Map;for(const R of n.records)c.set(R.id,R);for(const R of p)c.has(R.id)||c.set(R.id,R);const h=Array.from(c.values()).sort((R,O)=>R.timestamp-O.timestamp),u=n.settings.maxRecords,m=h.length>u?h.slice(-u):h,g=s.apiKeys||[],A=new Map,y=d>=i,C=y?g:n.apiKeys,f=y?n.apiKeys:g;for(const R of C)A.set(R.id,R);for(const R of f)A.set(R.id,R);const x=s.deletedKeys||[],b=n.deletedKeys||[],v=Array.from(new Set([...b,...x])),K=Array.from(A.values()).filter(R=>!v.includes(R.id)),T=l>=r,S=T?{...H,...n.settings}:{...H,...s.settings},$=T?n.settings:s.settings;$&&!("globalCostResetCycle"in $)&&$.globalQuotaResetCycle&&(S.globalCostResetCycle=$.globalQuotaResetCycle);const I=Math.max(l,r),U=Math.max(d,i);return this.data={version:se,lastSavedAt:Math.max(a,o),settingsUpdatedAt:I,keysUpdatedAt:U,deletedKeys:v,apiKeys:K,records:m,settings:S},await this.save(),console.log(`[TokenStats] Sync merge complete: ${K.length} keys, ${m.length} records.`),!0}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}}getApiKeys(){return this.data.apiKeys}getApiKey(e){return this.data.apiKeys.find(t=>t.id===e)}addApiKey(e){this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys=this.data.deletedKeys.filter(t=>t!==e.id),this.data.apiKeys.push(e),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}updateApiKey(e,t){const s=this.data.apiKeys.findIndex(n=>n.id===e);s>=0&&(this.data.apiKeys[s]={...this.data.apiKeys[s],...t},this.data.keysUpdatedAt=Date.now(),this.scheduleSave())}deleteApiKey(e){this.data.apiKeys=this.data.apiKeys.filter(t=>t.id!==e),this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys.includes(e)||this.data.deletedKeys.push(e),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}addRecord(e){const t=this.data.records,s=t.slice(-5);for(const o of s)if(o.apiKeyId===e.apiKeyId&&o.timestamp===e.timestamp&&o.totalTokens===e.totalTokens&&o.model===e.model){console.log("[TokenStats] Duplicate record skipped:",e.apiKeyName,e.model,e.totalTokens);return}this.data.settings.recalcCostOnPriceChange===!1&&(e.cost=this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens)),t.push(e);const n=this.data.settings.maxRecords;t.length>n&&(this.data.records=t.slice(-n)),this.scheduleSave()}getRecords(){return this.data.records}getRecentRecords(e=50){return[...this.data.records].sort((t,s)=>s.timestamp-t.timestamp).slice(0,e)}clearRecords(){this.data.records=[],this.scheduleSave()}clearAll(){this.data.records=[],this.data.apiKeys=[],this.data.deletedKeys=[],this.scheduleSave()}getSettings(){return this.data.settings}updateSettings(e){this.data.settings={...this.data.settings,...e},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave()}resetSettings(){this.data.settings={...H},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave()}getCurrency(){return this.data.settings.currency||"¥"}normalizeModelKey(e){return(e||"").toLowerCase().trim().replace(/[\s\-_]+/g,"")}getModelPrice(e){const t=this.normalizeModelKey(e);if(!t)return null;const s=this.data.settings.modelPrices||{};if(s[t])return s[t];const n=this.findPackForModel(t);return n?{input:n.input,output:n.output}:null}findPackForModel(e){const t=this.data.settings.pricePacks||[];for(const s of t)if(Array.isArray(s.models)&&s.models.some(n=>this.normalizeModelKey(n)===e))return s;return null}hasAnyPrice(){return Object.keys(this.data.settings.modelPrices||{}).length>0?!0:(this.data.settings.pricePacks||[]).length>0}calcCost(e,t,s,n){const o=this.getModelPrice(e);if(!o)return 0;const a=t/1e3*o.input,r=s/1e3*o.output;let i=a+r;return o.cacheRead&&n&&n>0&&(i+=n/1e3*o.cacheRead),i}formatCost(e){return`${this.getCurrency()}${e.toFixed(4)}`}getRecordCost(e){return this.data.settings.recalcCostOnPriceChange!==!1?this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens):typeof e.cost=="number"?e.cost:this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens)}getPackUsage(e){const t=new Set((e.models||[]).map(n=>this.normalizeModelKey(n)));if(t.size===0)return{usedTokens:0};let s=0;for(const n of this.data.records)t.has(this.normalizeModelKey(n.model))&&(s+=(n.inputTokens||0)+(n.outputTokens||0));return{usedTokens:s}}getTotalCostInPeriod(e,t){let s=0;for(const n of e)n.timestamp>=t&&(s+=this.getRecordCost(n));return s}exportAll(){return JSON.stringify(this.data,null,2)}exportRecords(){return JSON.stringify(this.data.records,null,2)}}function X(k){if(!k)return"";try{const e=new URL(k,window.location.href);return e.pathname+e.search}catch{return k}}class pe{constructor(e){this.store=e,this.alertedKeys=new Set,this.alertedGlobal=!1,this.alertedCostGlobal=!1}getAllKeys(){return this.store.getApiKeys()}findByKey(e){if(e)return this.store.getApiKeys().find(t=>t.enabled&&t.keyFull&&t.keyFull===e)}findByUrl(e){const t=X(e);if(t)return this.store.getApiKeys().find(s=>{if(!s.enabled||!s.baseUrl)return!1;const n=X(s.baseUrl);return n?t.includes(n)||n.includes(t):!1})}findByUrlAndModel(e,t){if(!e)return;const s=this.store.getApiKeys().filter(n=>{if(!n.enabled||!n.baseUrl)return!1;const o=X(n.baseUrl),a=X(e);return o&&a?a.includes(o)||o.includes(a):!1});if(s.length!==0){if(t){const n=String(t).toLowerCase().trim();for(const o of s)if(Array.isArray(o.models)&&o.models.find(a=>String(a).toLowerCase().trim()===n))return o}return s[0]}}findByModel(e){if(!e)return;const t=String(e).toLowerCase().trim();return this.store.getApiKeys().find(s=>s.enabled?(s.models||[]).map(o=>String(o).toLowerCase().trim()).includes(t):!1)}getResetBoundary(e,t=30){if(e==="none")return 0;const s=new Date;if(e==="daily")return new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime();if(e==="custom"){const n=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime(),o=Math.max(1,Math.floor(t)||30);return n-(o-1)*864e5}return new Date(s.getFullYear(),s.getMonth(),1).getTime()}getKeyUsage(e){const t=this.store.getSettings(),s=this.getResetBoundary(t.quotaResetCycle,t.customResetDays),n=this.store.getApiKey(e),o=this.store.getRecords().filter(l=>l.apiKeyId===e&&l.timestamp>=s),a=(n==null?void 0:n.usedTokensOffset)??0,r=(n==null?void 0:n.usedInputTokensOffset)??0,i=(n==null?void 0:n.usedOutputTokensOffset)??0;return{totalTokens:o.reduce((l,d)=>l+d.totalTokens,0)+a,totalInputTokens:o.reduce((l,d)=>l+d.inputTokens,0)+r,totalOutputTokens:o.reduce((l,d)=>l+d.outputTokens,0)+i,totalRequests:o.length}}getRemainingQuota(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return-1;const s=this.getKeyUsage(e);return Math.max(0,t.quotaLimit-s.totalTokens)}getUsagePercent(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return 0;const s=this.getKeyUsage(e);return Math.min(100,s.totalTokens/t.quotaLimit*100)}isQuotaExceeded(e){const t=this.store.getApiKey(e);return!t||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens>=t.quotaLimit}wouldExceedQuota(e,t){const s=this.store.getApiKey(e);return!s||s.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens+t>s.quotaLimit}isThresholdReached(e){const t=this.store.getApiKey(e);return!t||t.alertThreshold<=0||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens/t.quotaLimit*100>=t.alertThreshold}checkThreshold(e,t){const s=this.store.getApiKey(e);if(s){if(this.alertedKeys.has(e)&&!this.isThresholdReached(e)&&this.alertedKeys.delete(e),this.isThresholdReached(e)&&!this.alertedKeys.has(e)){this.alertedKeys.add(e);const n=this.getKeyUsage(e),o=(n.totalTokens/s.quotaLimit*100).toFixed(1),a=`⚠️ Token 用量提醒：${s.name} 已使用 ${o}%（${n.totalTokens.toLocaleString()} / ${s.quotaLimit.toLocaleString()} tokens）`;t(a)}if(this.isQuotaExceeded(e)){const n=`⛔ Token 限额已用尽：${s.name}（限额 ${s.quotaLimit.toLocaleString()} tokens）`;t(n)}}}resetAlert(e){this.alertedKeys.delete(e)}clearAllAlerts(){this.alertedKeys.clear(),this.alertedGlobal=!1}generateKeyId(){return`key-${Date.now()}-${Math.random().toString(36).substring(2,8)}`}maskKey(e){return e?e.length<=8?e.substring(0,2)+"***":e.substring(0,5)+"..."+e.substring(e.length-4):"(空)"}getDefaultBaseUrl(e){return{openai:"https://api.openai.com/v1/chat/completions",anthropic:"https://api.anthropic.com/v1/messages",deepseek:"https://api.deepseek.com/v1/chat/completions"}[e.toLowerCase()]||""}getGlobalUsage(e){const t=this.getResetBoundary(e.globalQuotaResetCycle,e.customResetDays),s=this.store.getRecords().filter(n=>n.timestamp>=t);return{totalTokens:s.reduce((n,o)=>n+o.totalTokens,0)+(e.globalUsedTokensOffset??0),totalInputTokens:s.reduce((n,o)=>n+o.inputTokens,0)+(e.globalUsedInputTokensOffset??0),totalOutputTokens:s.reduce((n,o)=>n+o.outputTokens,0)+(e.globalUsedOutputTokensOffset??0),totalRequests:s.length}}getGlobalRemainingQuota(e){if(e.globalQuotaLimit<=0)return-1;const t=this.getGlobalUsage(e);return Math.max(0,e.globalQuotaLimit-t.totalTokens)}getGlobalUsagePercent(e){if(e.globalQuotaLimit<=0)return 0;const t=this.getGlobalUsage(e);return Math.min(100,t.totalTokens/e.globalQuotaLimit*100)}isGlobalQuotaExceeded(e){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens>=e.globalQuotaLimit}wouldExceedGlobalQuota(e,t){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens+t>e.globalQuotaLimit}isGlobalThresholdReached(e){return e.globalAlertThreshold<=0||e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens/e.globalQuotaLimit*100>=e.globalAlertThreshold}checkGlobalThreshold(e,t){if(!(e.globalQuotaLimit<=0)){if(this.alertedGlobal&&!this.isGlobalThresholdReached(e)&&(this.alertedGlobal=!1),this.isGlobalThresholdReached(e)&&!this.alertedGlobal){this.alertedGlobal=!0;const s=this.getGlobalUsage(e),o=`⚠️ 全局 Token 用量提醒：已使用 ${(s.totalTokens/e.globalQuotaLimit*100).toFixed(1)}%（${s.totalTokens.toLocaleString()} / ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(o)}if(this.isGlobalQuotaExceeded(e)){const s=`⛔ 全局 Token 限额已用尽（限额 ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(s)}}}resetGlobalAlert(){this.alertedGlobal=!1}getGlobalCostUsage(e){const t=this.getResetBoundary(e.globalCostResetCycle,e.customResetDays),s=this.store.getRecords().filter(o=>o.timestamp>=t);let n=0;for(const o of s)n+=this.store.getRecordCost(o);return n+=e.globalUsedCostOffset??0,{totalCost:n,totalRequests:s.length}}getGlobalRemainingCost(e){if(e.globalCostLimit<=0)return-1;const t=this.getGlobalCostUsage(e);return Math.max(0,e.globalCostLimit-t.totalCost)}getGlobalCostPercent(e){if(e.globalCostLimit<=0)return 0;const t=this.getGlobalCostUsage(e);return Math.min(100,t.totalCost/e.globalCostLimit*100)}isGlobalCostExceeded(e){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost>=e.globalCostLimit}wouldExceedGlobalCostQuota(e,t){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost+t>e.globalCostLimit}isGlobalCostThresholdReached(e){return e.globalCostAlertThreshold<=0||e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost/e.globalCostLimit*100>=e.globalCostAlertThreshold}checkGlobalCostThreshold(e,t){if(!(e.globalCostLimit<=0)){if(this.alertedCostGlobal&&!this.isGlobalCostThresholdReached(e)&&(this.alertedCostGlobal=!1),this.isGlobalCostThresholdReached(e)&&!this.alertedCostGlobal){this.alertedCostGlobal=!0;const s=this.getGlobalCostUsage(e),n=(s.totalCost/e.globalCostLimit*100).toFixed(1),o=e.currency||"¥",a=`⚠️ 全局费用提醒：已使用 ${n}%（${o}${s.totalCost.toFixed(2)} / ${o}${e.globalCostLimit.toFixed(2)}）`;t(a)}if(this.isGlobalCostExceeded(e)){const n=`⛔ 全局费用限额已用尽（限额 ${e.currency||"¥"}${e.globalCostLimit.toFixed(2)}）`;t(n)}}}resetGlobalCostAlert(){this.alertedCostGlobal=!1}checkAllThresholds(e){const t=this.store.getSettings();for(const s of this.store.getApiKeys())s.enabled&&this.checkThreshold(s.id,e);this.checkGlobalThreshold(t,e),this.checkGlobalCostThreshold(t,e)}}class ge{estimate(e){if(!e)return 0;const t=(e.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g)||[]).length,s=(e.match(/[\u3000-\u303f\uff00-\uffef]/g)||[]).length,n=(e.match(/[a-zA-Z]+/g)||[]).length,o=n*4,a=Math.max(0,e.length-t-s-o),r=Math.ceil(t*1+s*.5+n*1.3+a*.25);return Math.max(0,r)}estimateFromMessages(e){if(!Array.isArray(e))return 0;let t=0;for(const s of e){if(typeof s=="string")t+=this.estimate(s)+4;else if(s!=null&&s.content){if(typeof s.content=="string")t+=this.estimate(s.content)+4;else if(Array.isArray(s.content)){for(const n of s.content)typeof n=="string"?t+=this.estimate(n):n!=null&&n.text&&(t+=this.estimate(n.text));t+=4}}s!=null&&s.role&&(t+=1)}return t}estimateFromText(e){return this.estimate(e)}}function ae(k,e){if(!k)return null;if(k instanceof Headers)return k.get(e);if(Array.isArray(k)){for(const[n,o]of k)if(n.toLowerCase()===e.toLowerCase())return o;return null}const t=k,s=e.toLowerCase();for(const n of Object.keys(t))if(n.toLowerCase()===s)return t[n];return null}function he(k){return typeof k=="string"?k:k instanceof URL?k.href:k.url}function me(){return`rec-${Date.now()}-${Math.random().toString(36).substring(2,9)}`}function Z(k){return k&&String(k).trim()||""}function ie(k){return!k||k==="unknown"||k==="siyuan-ai"||k==="default"}function J(k){if(!k)return!0;const e=k.trim();return!!(/^\d{14,}-[a-z0-9]+$/i.test(e)||/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)||/^\d+$/.test(e)||e.length>40&&!/[._-]/.test(e))}function _(...k){for(const e of k){const t=Z(e);if(t&&!ie(t)&&!J(t))return t}return""}function fe(k){return/\/api\/ai\/agent\/chat\b/i.test(k)||/\/api\/ai\/chatGPT\b/i.test(k)||/\/api\/ai\/chatGPTWithAction\b/i.test(k)}function ke(k){return typeof k=="object"&&k!==null&&"code"in k&&"msg"in k&&"data"in k&&!("choices"in k)&&!("usage"in k)}function be(){return{apiKeyId:"siyuan-ai-default",apiKeyName:"思源智能体",source:"siyuan-ai",provider:"SiYuan AI",model:"unknown"}}class ye{constructor(e,t,s){this.installed=!1,this.onThresholdAlert=()=>{},this.siyuanConfigCache=null,this.originalFetch=window.fetch.bind(window),this.store=e,this.keyManager=t,this.tokenCounter=s}setThresholdCallback(e){this.onThresholdAlert=e}keyMatchesModel(e,t){if(!e||!t)return!1;const s=String(t).toLowerCase().trim();return(e.models||[]).map(o=>String(o).toLowerCase().trim()).includes(s)}install(){if(this.installed){console.warn("[TokenStats] Interceptor already installed.");return}this.installed=!0;const e=this;window.fetch=async function(t,s){const n=he(t),o=e.store.getSettings(),a=await e.extractBodyText(t,s),r=e.tryParseJson(a),i=await e.identifyAiCall(n,s,o,r);if(!i)return e.originalFetch(t,s);e.logDebug(`Intercepted AI call: source=${i.source}, model=${i.model}, key=${i.apiKeyName}`),e.logDebug("Request body",{bodyText:a==null?void 0:a.slice(0,500),parsedBody:r});const l=Date.now();if(o.blockOnQuotaExceeded&&o.globalQuotaLimit>0){const h=e.tokenCounter.estimateFromMessages(e.extractMessages(r));if(e.keyManager.isGlobalQuotaExceeded(o)){const u="[TokenStats] 已阻止请求：全局 Token 限额已用尽";return console.warn(u),e.onThresholdAlert("global",u),e.createBlockedResponse(u,i)}if(e.keyManager.wouldExceedGlobalQuota(o,h)){const m=`[TokenStats] 已阻止请求：全局剩余配额 ${e.keyManager.getGlobalRemainingQuota(o).toLocaleString()} tokens，预估输入 ${h.toLocaleString()} tokens 将超限`;return console.warn(m),e.onThresholdAlert("global",m),e.createBlockedResponse(m,i)}}if(o.blockOnQuotaExceeded&&o.globalCostLimit>0){const h=e.tokenCounter.estimateFromMessages(e.extractMessages(r)),u=e.store.calcCost(i.model,h,h),m=o.currency||"¥";if(e.keyManager.isGlobalCostExceeded(o)){const g=`[TokenStats] 已阻止请求：全局费用限额已用尽（${m}${o.globalCostLimit.toFixed(2)}）`;return console.warn(g),e.onThresholdAlert("global-cost",g),e.createBlockedResponse(g,i)}if(u>0&&e.keyManager.wouldExceedGlobalCostQuota(o,u)){const g=e.keyManager.getGlobalRemainingCost(o),A=`[TokenStats] 已阻止请求：全局费用剩余 ${m}${g.toFixed(2)}，预估本次费用 ${m}${u.toFixed(2)} 将超限`;return console.warn(A),e.onThresholdAlert("global-cost",A),e.createBlockedResponse(A,i)}}if(o.blockOnQuotaExceeded){if(e.keyManager.isQuotaExceeded(i.apiKeyId)){const u=e.store.getApiKey(i.apiKeyId),m=`[TokenStats] 已阻止请求：${(u==null?void 0:u.name)||i.apiKeyName} 的 Token 限额已用尽`;return console.warn(m),e.onThresholdAlert(i.apiKeyId,m),e.createBlockedResponse(m,i)}const h=e.tokenCounter.estimateFromMessages(e.extractMessages(r));if(e.keyManager.wouldExceedQuota(i.apiKeyId,h)){const u=e.store.getApiKey(i.apiKeyId),m=e.keyManager.getRemainingQuota(i.apiKeyId),g=`[TokenStats] 已阻止请求：${(u==null?void 0:u.name)||i.apiKeyName} 剩余配额 ${m.toLocaleString()} tokens，预估输入 ${h.toLocaleString()} tokens 将超限`;return console.warn(g),e.onThresholdAlert(i.apiKeyId,g),e.createBlockedResponse(g,i)}}let d,p=!1;try{d=await e.originalFetch(t,s),p=d.ok}catch(h){throw e.recordCall(i,0,0,l,!1,i.model),h}const c=d.clone();return e.analyzeResponse(c,i,l,r,p).catch(h=>console.warn("[TokenStats] Response analysis failed:",h)),d},console.log("[TokenStats] Fetch interceptor installed.")}createBlockedResponse(e,t){const s=JSON.stringify({error:{type:"quota_exceeded",code:"token_stats_blocked",message:e,apiKeyId:t.apiKeyId,apiKeyName:t.apiKeyName}});return new Response(s,{status:429,statusText:"Too Many Requests",headers:{"Content-Type":"application/json","X-TokenStats-Blocked":"true"}})}uninstall(){this.installed&&(window.fetch=this.originalFetch,this.installed=!1,console.log("[TokenStats] Fetch interceptor uninstalled."))}async extractBodyText(e,t){if(t!=null&&t.body&&typeof t.body=="string")return t.body;if((t==null?void 0:t.body)instanceof URLSearchParams)return t.body.toString();if((t==null?void 0:t.body)instanceof FormData)try{const s={};return t.body.forEach((n,o)=>{s[o]=typeof n=="string"?n:n.name}),JSON.stringify(s)}catch{return null}if((t==null?void 0:t.body)instanceof Blob)try{return await t.body.text()}catch{return null}if(t!=null&&t.body&&(t.body instanceof ArrayBuffer||ArrayBuffer.isView(t.body)))try{return new TextDecoder().decode(t.body)}catch{return null}if(e instanceof Request)try{return await e.clone().text()}catch{return null}return null}tryParseJson(e){if(!e)return null;try{return JSON.parse(e)}catch{return null}}isDebugEnabled(){return this.store.getSettings().debugLogging??!1}logDebug(...e){this.isDebugEnabled()&&console.log("[TokenStats]",...e)}async identifyAiCall(e,t,s,n){const o=e.toLowerCase();if(fe(e)){const l=await this.getSiYuanAiConfig(),d=(n==null?void 0:n.model)||null,p=this.extractModel(n)||d||this.getSiYuanSelectedModelId(l);if(p){const h=this.findProviderByModel(l,p),u=h?h.baseURL:null;if(h&&h.apiKey){const g=this.keyManager.findByKey(h.apiKey);if(g&&g.enabled)return{apiKeyId:g.id,apiKeyName:g.name,source:g.baseUrl||u||"siyuan-ai",provider:g.provider,model:this.resolveSiYuanModelForCall(n,l)}}const m=this.keyManager.findByModel(p);if(m&&m.enabled)return{apiKeyId:m.id,apiKeyName:m.name,source:m.baseUrl||u||"siyuan-ai",provider:m.provider,model:this.resolveSiYuanModelForCall(n,l)};if(u){const g=this.keyManager.findByUrlAndModel(u,p);if(g&&g.enabled)return{apiKeyId:g.id,apiKeyName:g.name,source:g.baseUrl||u||"siyuan-ai",provider:g.provider,model:this.resolveSiYuanModelForCall(n,l)}}}if(l!=null&&l.providers){for(const h of l.providers)if(h!=null&&h.enabled){if(h.apiKey){const u=this.keyManager.findByKey(h.apiKey);if(u&&u.enabled)return{apiKeyId:u.id,apiKeyName:u.name,source:u.baseUrl||h.baseURL||"siyuan-ai",provider:u.provider,model:this.resolveModelByBlockId(d,l)||this.resolveModelNameFromProvider(h)||this.resolveSiYuanModelForCall(n,l)}}if(h.baseURL){const u=this.keyManager.findByUrl(h.baseURL);if(u&&u.enabled)return{apiKeyId:u.id,apiKeyName:u.name,source:u.baseUrl||h.baseURL||"siyuan-ai",provider:u.provider,model:this.resolveModelByBlockId(d,l)||this.resolveModelNameFromProvider(h)||this.resolveSiYuanModelForCall(n,l)}}if(Array.isArray(h.models))for(const u of h.models){const m=(u==null?void 0:u.id)||(u==null?void 0:u.name)||(u==null?void 0:u.displayName);if(!m)continue;const g=this.keyManager.findByModel(m);if(g&&g.enabled)return{apiKeyId:g.id,apiKeyName:g.name,source:g.baseUrl||h.baseURL||"siyuan-ai",provider:g.provider,model:m}}}}const c=this.keyManager.findByUrl(e);return c&&c.enabled?{apiKeyId:c.id,apiKeyName:c.name,source:c.baseUrl||"siyuan-ai",provider:c.provider,model:this.resolveSiYuanModelForCall(n,l)}:{...be(),model:this.resolveSiYuanModelForCall(n,l)}}if(s.matchByUrl){const l=this.keyManager.findByUrl(e),d=this.extractModel(n);let p=l;if(d&&l&&!this.keyMatchesModel(l,d)){const c=this.keyManager.findByModel(d);c&&c.enabled&&(p=c)}if(p&&p.enabled)return{apiKeyId:p.id,apiKeyName:p.name,source:p.baseUrl||"url-match",provider:p.provider,model:d||"unknown"}}if(!s.interceptExternalAPIs)return null;const r=this.extractModel(n);if(o.includes("/v1/chat/completions")||o.includes("/v1/completions")){const d=(ae(t==null?void 0:t.headers,"Authorization")||"").replace(/^bearer\s+/i,"").trim();let p=r?this.keyManager.findByModel(r):void 0;return(!p||!p.enabled)&&(p=d?this.keyManager.findByKey(d):void 0),(!p||!p.enabled)&&(p=this.keyManager.findByUrl(e)),{apiKeyId:(p==null?void 0:p.id)||"unknown",apiKeyName:(p==null?void 0:p.name)||this.keyManager.maskKey(d)||"Unknown",source:"external-openai",provider:(p==null?void 0:p.provider)||"OpenAI",model:r||"unknown"}}if(o.includes("/v1/messages")){const l=ae(t==null?void 0:t.headers,"x-api-key")||"";let d=r?this.keyManager.findByModel(r):void 0;return(!d||!d.enabled)&&(d=l?this.keyManager.findByKey(l):void 0),(!d||!d.enabled)&&(d=this.keyManager.findByUrl(e)),{apiKeyId:(d==null?void 0:d.id)||"unknown",apiKeyName:(d==null?void 0:d.name)||this.keyManager.maskKey(l)||"Unknown",source:"external-anthropic",provider:(d==null?void 0:d.provider)||"Anthropic",model:r||"unknown"}}let i=r?this.keyManager.findByModel(r):void 0;return(!i||!i.enabled)&&(i=this.keyManager.findByUrl(e)),i&&i.enabled?{apiKeyId:i.id,apiKeyName:i.name,source:i.baseUrl||"custom-url",provider:i.provider,model:r||"unknown"}:null}getSiYuanSelectedModelId(e){if(!e)return null;const t=e.agent||{},s=e.editing||{};return t.modelId||s.modelId||null}extractModel(e){return _(e==null?void 0:e.model)||null}resolveModelByBlockId(e,t){if(!t||!e)return null;const s=t.providers||[];for(const n of s){const o=(n.models||[]).find(a=>(a==null?void 0:a.id)===e);if(o)return o.name||o.displayName||null}return null}resolveSiYuanModelForCall(e,t){const s=e==null?void 0:e.model;if(s){const n=this.resolveModelByBlockId(s,t);if(n)return n}return _(this.extractModel(e))||this.resolveSiYuanModelNameFromConfig(t)||"unknown"}extractMessages(e){if(!e)return[];if(Array.isArray(e.messages))return e.messages;if(typeof e.messages=="string")return[e.messages];if(typeof e.messages=="object"&&e.messages!==null)return[e.messages];if(typeof e.prompt=="string")return[e.prompt];if(Array.isArray(e.contents))return e.contents;if(typeof e.content=="string")return[e.content];if(typeof e.text=="string")return[e.text];if(e.message!==void 0||e.references!==void 0){const t=[];if(Array.isArray(e.references))for(const s of e.references)typeof s=="string"?t.push({role:"system",content:s}):s!=null&&s.content?t.push({role:"system",content:typeof s.content=="string"?s.content:JSON.stringify(s.content)}):s!=null&&s.text&&t.push({role:"system",content:s.text});if(typeof e.message=="string"?t.push({role:"user",content:e.message}):typeof e.message=="object"&&e.message!==null&&t.push({role:"user",content:JSON.stringify(e.message)}),t.length>0)return t}if(typeof e.msg=="string")return[e.msg];if(typeof e.msg=="object"&&e.msg!==null)return[e.msg];if(e.context&&e.query)return[{role:"system",content:e.context},{role:"user",content:e.query}];if(typeof e.query=="string")return[e.query];if(e.input){if(Array.isArray(e.input))return e.input;if(Array.isArray(e.input.messages))return e.input.messages;if(typeof e.input.messages=="string")return[e.input.messages];if(typeof e.input.messages=="object"&&e.input.messages!==null)return[e.input.messages];if(typeof e.input.message=="string")return[e.input.message];if(typeof e.input.message=="object"&&e.input.message!==null)return[e.input.message];if(typeof e.input.text=="string")return[e.input.text];if(typeof e.input=="string")return[e.input]}if(e.data){if(Array.isArray(e.data.messages))return e.data.messages;if(typeof e.data.messages=="string")return[e.data.messages];if(typeof e.data.messages=="object"&&e.data.messages!==null)return[e.data.messages];if(typeof e.data.message=="string")return[e.data.message];if(typeof e.data.message=="object"&&e.data.message!==null)return[e.data.message];if(typeof e.data.prompt=="string")return[e.data.prompt];if(Array.isArray(e.data.contents))return e.data.contents;if(typeof e.data.content=="string")return[e.data.content];if(typeof e.data.text=="string")return[e.data.text]}return[]}async analyzeResponse(e,t,s,n,o=!0){let a=0,r=0,i,l=t.model;const d=(e.headers.get("content-type")||"").toLowerCase(),p=this.store.getSettings();if(!l||ie(l)){const u=await this.resolveSiYuanModelNameIfNeeded(t.source);u&&(l=u)}const c=this.tokenCounter.estimateFromMessages(this.extractMessages(n));if(this.logDebug("analyzeResponse",{url:t.source,contentType:d,ok:e.ok,status:e.status,estimatedInput:c,bodyPreview:JSON.stringify(n).slice(0,200)}),!e.body){this.logDebug("analyzeResponse: response body is null, using input estimate only"),a=c,r=0,this.recordCall(t,a,r,s,o,l);return}try{if(d.includes("text/event-stream")){const u=await this.parseSSEStream(e,t,p,c);a=u.inputTokens,r=u.outputTokens,i=u.cacheReadTokens,u.model&&(l=u.model),u.aborted&&(o=!1)}else if(d.includes("application/json")||d.includes("text/json")){const u=await e.text();this.logDebug("JSON response raw text preview:",u.slice(0,300));const m=this.tryParseJson(u);if(ke(m)&&typeof m.data!="string"){this.logDebug("Skipping SiYuan kernel non-AI response",{code:m.code,dataKeys:Object.keys(m.data||{})});return}const g=m?this.extractUsage(m):null;g&&(a=g.inputTokens,r=g.outputTokens,i=g.cacheReadTokens||void 0),m!=null&&m.model&&(l=_(m.model,l)||l),g||(a=c,r=this.tokenCounter.estimateFromText(m?this.extractOutputText(m):u))}else if(d.includes("application/x-ndjson")||d.includes("application/ndjson")){const u=await this.parseNDJSONStream(e,t,p,c);a=u.inputTokens,r=u.outputTokens,i=u.cacheReadTokens,u.model&&(l=u.model),u.aborted&&(o=!1)}else if(d.includes("text/plain")||d.includes("text/html")||d.includes("application/xml")||d.includes("text/xml")){const u=await e.text();a=c,r=this.tokenCounter.estimateFromText(u)}else{const u=await e.text();this.logDebug("Unknown content type, raw response preview:",u.slice(0,300)),a=c;const m=this.tryParseJson(u);if(m){const g=this.extractUsage(m);g?(a=g.inputTokens,r=g.outputTokens,i=g.cacheReadTokens||void 0):r=this.tokenCounter.estimateFromText(this.extractOutputText(m))}else r=this.tokenCounter.estimateFromText(u)}}catch(u){console.warn("[TokenStats] Token extraction failed, using estimates:",u),a=c;try{const m=await e.text();r=this.tokenCounter.estimateFromText(m)}catch{r=0}}o&&a===0&&c>0&&(a=c),this.logDebug("analyzeResponse result:",{inputTokens:a,outputTokens:r,model:l,success:o});const h=a+r;this.recordCall(t,a,r,s,o,l,i),h>0&&p.showNotifications&&(this.keyManager.checkThreshold(t.apiKeyId,u=>{this.onThresholdAlert(t.apiKeyId,u)}),this.keyManager.checkGlobalThreshold(p,u=>{this.onThresholdAlert("global",u)}))}async parseSSEStream(e,t,s,n=0){var h;const o=(h=e.body)==null?void 0:h.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1};const a=new TextDecoder;let r="";const i={fullContent:"",usage:null,model:void 0};let l=0,d=!1;const p=u=>{const m=u.split(`
`),g=[];let A="";for(const C of m){const f=C.trim();f&&(f.startsWith("data:")?g.push(f.slice(5).trimStart()):f.startsWith("event:")&&(A=f.slice(6).trim()))}if(g.length===0)return;const y=g.join(`
`);if(this.logDebug("SSE raw event",{eventType:A,data:y.slice(0,500)}),y!=="[DONE]")try{const C=JSON.parse(y);if(this.logDebug("SSE parsed chunk",{eventType:A,chunk:C}),typeof C!="object"||C===null)return;const f=this.collectChunkInfo(C,i.usage,i.model,i.fullContent,A),x=i.fullContent.length;i.usage=f.usage,i.model=f.model,i.fullContent=f.fullContent,this.logDebug("SSE collected after chunk",{eventType:A,contentAdded:i.fullContent.length-x,fullContentLength:i.fullContent.length,usage:i.usage})}catch(C){this.logDebug("SSE chunk JSON parse failed",{eventType:A,data:y.slice(0,300),error:String(C)})}};try{for(;;){const{done:u,value:m}=await o.read();if(u)break;r+=a.decode(m,{stream:!0}),this.logDebug("SSE buffer received",{bufferLength:r.length,decodedLength:(m==null?void 0:m.length)??0});const{events:g,remainder:A}=this.splitSSEEvents(r);r=A,this.logDebug("SSE events split",{eventCount:g.length,remainderLength:A.length});for(const y of g)p(y);if(s.abortStreamOnExceeded&&s.blockOnQuotaExceeded){if(l=i.usage?i.usage.outputTokens:this.tokenCounter.estimateFromText(i.fullContent),this.keyManager.wouldExceedQuota(t.apiKeyId,l)){d=!0;const y=this.store.getApiKey(t.apiKeyId),C=`[TokenStats] 流式响应已中断：${(y==null?void 0:y.name)||t.apiKeyName} 的 Token 限额在生成过程中被超出`;console.warn(C),this.onThresholdAlert(t.apiKeyId,C);try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(s,l)){d=!0;const y="[TokenStats] 流式响应已中断：全局 Token 限额在生成过程中被超出";console.warn(y),this.onThresholdAlert("global",y);try{await o.cancel()}catch{}break}}}if(r.trim().length>0){const{events:u}=this.splitSSEEvents(r+`

`);for(const m of u)p(m)}}finally{o.releaseLock()}if(this.logDebug("parseSSEStream finished",{contentLength:i.fullContent.length,hasUsage:!!i.usage,usage:i.usage,estimatedInput:n}),i.usage){const u=this.tokenCounter.estimateFromText(i.fullContent);return{inputTokens:i.usage.inputTokens||n,outputTokens:i.usage.outputTokens||u,cacheReadTokens:i.usage.cacheReadTokens||void 0,model:i.model,aborted:d}}const c=this.tokenCounter.estimateFromText(i.fullContent);return{inputTokens:n,outputTokens:c,model:i.model,aborted:d}}splitSSEEvents(e){const t=[],n=e.replace(/\r\n/g,`
`).split(`

`),o=n.pop()||"";for(const a of n)a.trim()&&t.push(a);return{events:t,remainder:o}}collectChunkInfo(e,t,s,n,o=""){var l,d,p,c,h,u,m,g,A,y,C,f,x,b,v,K,T,S,$,I,U,R,O,q,D,F,j,z,G,Q,B,W,oe,re;const a=(...w)=>{const P=_(...w);if(P)return P;const ee=Z(s);return ee&&!J(ee)?ee:""};if(e.model&&(s=a(e.model,s)),o==="content"||o==="reasoning")return e.token&&(n+=e.token,this.logDebug("SiYuan agent content appended",{token:e.token})),{usage:t,model:s,fullContent:n};if(o==="thinking")return e.reasoning&&(n+=e.reasoning,this.logDebug("SiYuan agent thinking appended",{reasoning:e.reasoning})),{usage:t,model:s,fullContent:n};if(o==="usage"){const w=e.promptTokens??e.prompt_tokens??0,P=e.completionTokens??e.completion_tokens??0;return this.logDebug("SiYuan agent usage event",{promptTokens:w,completionTokens:P,chunk:e}),(w>0||P>0)&&(t={inputTokens:w,outputTokens:P,cacheReadTokens:e.cacheReadTokens??e.cachedInputTokens??0}),{usage:t,model:s,fullContent:n}}if(o==="done"||o==="error"||o==="retry"||o==="snapshot"||o==="tool_call"||o==="tool_result"||o==="confirm"||o==="question"||o==="frontend_tool_call")return{usage:t,model:s,fullContent:n};if(e.usage){const w=e.usage,P=w.cached_input_tokens??w.cache_read_input_tokens??((l=w.prompt_tokens_details)==null?void 0:l.cached_tokens)??0;t={inputTokens:w.prompt_tokens??w.input_tokens??w.promptTokens??0,outputTokens:w.completion_tokens??w.output_tokens??w.completionTokens??0,cacheReadTokens:P}}const r=w=>{typeof w=="string"&&(n+=w)},i=(d=e.choices)==null?void 0:d[0];if((p=i==null?void 0:i.delta)!=null&&p.content&&r(i.delta.content),i!=null&&i.text&&r(i.text),(c=i==null?void 0:i.delta)!=null&&c.reasoning_content&&r(i.delta.reasoning_content),(h=i==null?void 0:i.message)!=null&&h.content&&r(i.message.content),i!=null&&i.content&&r(i.content),(m=(u=i==null?void 0:i.delta)==null?void 0:u.function_call)!=null&&m.arguments&&r(i.delta.function_call.arguments),(g=i==null?void 0:i.delta)!=null&&g.tool_calls)for(const w of i.delta.tool_calls)(A=w==null?void 0:w.function)!=null&&A.arguments&&r(w.function.arguments);if(e.type==="content_block_delta"&&((y=e.delta)!=null&&y.text)&&r(e.delta.text),e.type==="content_block_delta"&&((C=e.delta)!=null&&C.reasoning)&&r(e.delta.reasoning),e.type==="content_block_start"&&((f=e.content_block)!=null&&f.text)&&r(e.content_block.text),(x=e.message)!=null&&x.usage){const w=e.message.usage,P=w.cache_read_input_tokens??0;t={inputTokens:w.input_tokens??0,outputTokens:w.output_tokens??0,cacheReadTokens:P}}if(e.content){if(typeof e.content=="string")r(e.content);else if(Array.isArray(e.content))for(const w of e.content)r(typeof w=="string"?w:w==null?void 0:w.text)}if(e.output&&r(e.output),e.text&&r(e.text),e.result&&r(e.result),e.message&&(typeof e.message=="string"?r(e.message):e.message.content&&r(e.message.content)),(T=(K=(v=(b=e.data)==null?void 0:b.choices)==null?void 0:v[0])==null?void 0:K.delta)!=null&&T.content&&r(e.data.choices[0].delta.content),(I=($=(S=e.data)==null?void 0:S.choices)==null?void 0:$[0])!=null&&I.text&&r(e.data.choices[0].text),(q=(O=(R=(U=e.data)==null?void 0:U.choices)==null?void 0:R[0])==null?void 0:O.message)!=null&&q.content&&r(e.data.choices[0].message.content),(z=(j=(F=(D=e.data)==null?void 0:D.choices)==null?void 0:F[0])==null?void 0:j.delta)!=null&&z.reasoning_content&&r(e.data.choices[0].delta.reasoning_content),(G=e.data)!=null&&G.model&&(s=a(e.data.model,s)),(Q=e.data)!=null&&Q.usage){const w=e.data.usage;t={inputTokens:w.prompt_tokens??w.input_tokens??0,outputTokens:w.completion_tokens??w.output_tokens??0,cacheReadTokens:w.cached_input_tokens??w.cache_read_input_tokens??0}}if((B=e.data)!=null&&B.content){if(typeof e.data.content=="string")r(e.data.content);else if(Array.isArray(e.data.content))for(const w of e.data.content)r(typeof w=="string"?w:w==null?void 0:w.text)}return(W=e.data)!=null&&W.output&&r(e.data.output),(oe=e.data)!=null&&oe.text&&r(e.data.text),(re=e.data)!=null&&re.result&&r(e.data.result),{usage:t,model:s,fullContent:n}}async parseNDJSONStream(e,t,s,n=0){var c;const o=(c=e.body)==null?void 0:c.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1};const a=new TextDecoder;let r="",i="",l=null,d,p=!1;try{for(;;){const{done:h,value:u}=await o.read();if(h)break;r+=a.decode(u,{stream:!0});const m=r.split(`
`);r=m.pop()||"";for(const g of m)if(g.trim())try{const A=JSON.parse(g),y=this.collectChunkInfo(A,l,d,i);l=y.usage,d=y.model,i=y.fullContent}catch{}if(s.abortStreamOnExceeded&&s.blockOnQuotaExceeded){const g=l?l.outputTokens:this.tokenCounter.estimateFromText(i);if(this.keyManager.wouldExceedQuota(t.apiKeyId,g)){p=!0;try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(s,g)){p=!0;try{await o.cancel()}catch{}break}}}if(r.trim())try{const h=JSON.parse(r.trim()),u=this.collectChunkInfo(h,l,d,i);l=u.usage,d=u.model,i=u.fullContent}catch{}}finally{o.releaseLock()}if(this.logDebug("parseNDJSONStream finished",{contentLength:i.length,hasUsage:!!l,usage:l,estimatedInput:n}),l){const h=this.tokenCounter.estimateFromText(i);return{inputTokens:l.inputTokens||n,outputTokens:l.outputTokens||h,cacheReadTokens:l.cacheReadTokens||void 0,model:d,aborted:p}}return{inputTokens:n,outputTokens:this.tokenCounter.estimateFromText(i),model:d,aborted:p}}extractUsage(e){var t;if(e!=null&&e.usage){const s=e.usage,n=s.prompt_tokens??s.input_tokens??s.promptTokens??0,o=s.completion_tokens??s.output_tokens??s.completionTokens??0,a=s.cached_input_tokens??s.cache_read_input_tokens??((t=s.prompt_tokens_details)==null?void 0:t.cached_tokens)??0;return n===0&&o===0&&a===0?null:{inputTokens:n,outputTokens:o,cacheReadTokens:a}}if((e==null?void 0:e.promptTokens)!==void 0||(e==null?void 0:e.completionTokens)!==void 0){const s=e.promptTokens??0,n=e.completionTokens??0,o=e.cacheReadTokens??e.cachedInputTokens??0;return s===0&&n===0?null:{inputTokens:s,outputTokens:n,cacheReadTokens:o}}return null}extractOutputText(e){var o,a,r,i,l,d,p;if(!e)return"";const t=[],s=c=>{typeof c=="string"&&c?t.push(c):c&&typeof c.text=="string"&&c.text&&t.push(c.text)},n=c=>{var h,u,m,g,A,y,C,f;if(c&&(s((h=c==null?void 0:c.message)==null?void 0:h.content),s((u=c==null?void 0:c.message)==null?void 0:u.reasoning_content),s((m=c==null?void 0:c.delta)==null?void 0:m.content),s((g=c==null?void 0:c.delta)==null?void 0:g.reasoning_content),s(c==null?void 0:c.text),s(c==null?void 0:c.content),(y=(A=c==null?void 0:c.delta)==null?void 0:A.function_call)!=null&&y.arguments&&s(c.delta.function_call.arguments),(C=c==null?void 0:c.delta)!=null&&C.tool_calls))for(const x of c.delta.tool_calls)(f=x==null?void 0:x.function)!=null&&f.arguments&&s(x.function.arguments)};if(e.choices)for(const c of e.choices)n(c);if(e.content){if(typeof e.content=="string")s(e.content);else if(Array.isArray(e.content))for(const c of e.content)s(c)}if(e.output&&s(e.output),e.text&&s(e.text),e.result&&s(e.result),e.message&&(typeof e.message=="string"?s(e.message):(s(e.message.content),s(e.message.text))),e.response&&(typeof e.response=="string"?s(e.response):e.response.text?s(e.response.text):e.response.content&&s(e.response.content)),e.data)if(typeof e.data=="string")s(e.data);else{if(s((o=e.data)==null?void 0:o.text),s((a=e.data)==null?void 0:a.output),s((r=e.data)==null?void 0:r.result),s((i=e.data)==null?void 0:i.msg),(l=e.data)!=null&&l.choices)for(const c of e.data.choices)n(c);if((d=e.data)!=null&&d.content)if(typeof e.data.content=="string")s(e.data.content);else if(Array.isArray(e.data.content))for(const c of e.data.content)s(c);else s(e.data.content);(p=e.data)!=null&&p.message&&(s(e.data.message.content),s(e.data.message.text))}return e.msg&&s(e.msg),e.token&&s(e.token),e.reasoning&&s(e.reasoning),t.join("")}recordCall(e,t,s,n,o,a,r){const i=this.resolveModelName(a||e.model,e),l={id:me(),apiKeyId:e.apiKeyId,apiKeyName:e.apiKeyName,source:e.source,model:i,inputTokens:t,outputTokens:s,cacheReadTokens:r,totalTokens:t+s,timestamp:n,requestTime:Date.now()-n,success:o};this.store.addRecord(l),this.logDebug(`Recorded: ${l.apiKeyName} | ${l.model} | in=${t} out=${s} cache=${r??0} total=${l.totalTokens} success=${o}`),o&&t===0&&s===0&&console.warn("[TokenStats] 本次请求 token 计数为 0。若持续出现，请在设置中开启“启用调试日志”，并在浏览器控制台中查看请求/响应详情。")}resolveModelName(e,t){var a;const s=[];s.push(e,t.model),this.isSiYuanAiSource(t.source)&&s.push(this.resolveSiYuanModelNameFromConfig((a=this.siyuanConfigCache)==null?void 0:a.config));const n=_(...s);return n||Z(e)||Z(t.model)||t.source||"unknown"}async resolveSiYuanModelNameIfNeeded(e){return this.isSiYuanAiSource(e)?this.getSiYuanModelName():null}isSiYuanAiSource(e){return e==="siyuan-ai"||e.includes("/api/ai/")}async getSiYuanAiConfig(){var e,t;if(this.siyuanConfigCache&&Date.now()-this.siyuanConfigCache.ts<5e3)return this.siyuanConfigCache.config;try{const s=window.siyuan,n=(e=s==null?void 0:s.config)==null?void 0:e.ai;if(n)return this.siyuanConfigCache={config:n,ts:Date.now()},n;const o=await this.originalFetch("/api/system/getConf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});if(!o.ok)return null;const a=await o.json(),r=((t=a==null?void 0:a.data)==null?void 0:t.ai)||(a==null?void 0:a.ai);if(r)return this.siyuanConfigCache={config:r,ts:Date.now()},r}catch{}return null}findProviderByModel(e,t){if(!e||!t)return null;const s=String(t).toLowerCase().trim();if(!s)return null;const n=e.providers||[];for(const o of n){if(!o||!o.enabled)continue;if((o.models||[]).find(r=>{const i=String((r==null?void 0:r.id)||"").toLowerCase().trim(),l=String((r==null?void 0:r.name)||"").toLowerCase().trim(),d=String((r==null?void 0:r.displayName)||"").toLowerCase().trim();return i===s||l===s||d===s}))return o}return null}resolveSiYuanModelNameFromConfig(e){var r,i;if(!e)return null;const t=e.agent||{},s=e.editing||{},n=t.modelId||s.modelId,o=t.modelName||t.displayName||t.name||s.modelName||s.displayName||s.name;if(o&&!J(o))return o;const a=e.providers||[];if(n)for(const l of a){if(!(l!=null&&l.enabled))continue;const d=(l.models||[]).find(p=>(p==null?void 0:p.id)===n);if(d)return d.displayName||d.name||d.id||null}for(const l of a){if(!(l!=null&&l.enabled))continue;const d=((r=l.models)==null?void 0:r.find(p=>p==null?void 0:p.default))||((i=l.models)==null?void 0:i[0]);if(d)return d.displayName||d.name||d.id||null;if(l.name&&!J(l.name))return l.name}return n&&!J(n)?n:null}resolveModelNameFromProvider(e){if(!(e!=null&&e.models)||!Array.isArray(e.models))return null;const t=e.models.find(s=>s==null?void 0:s.default)||e.models[0];return t&&_(t.displayName,t.name,t.id)||null}async getSiYuanModelName(){return this.resolveSiYuanModelNameFromConfig(await this.getSiYuanAiConfig())}}function L(k){return k?k.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}class ve{constructor(e,t){this.onManualSync=null,this.store=e,this.keyManager=t,this.setting=this.build()}build(){const e=this,t=new M.Setting({width:this.isMobile()?"92vw":"700px",height:"auto",confirmCallback:()=>{e.saveGlobalSettings(),M.showMessage("设置已保存",2e3,"info")}});setTimeout(()=>this.ensureDialogScrollable(),0);const s=this.store.getSettings();return t.addItem({title:"按 API Base URL 匹配 Key",description:"拦截请求时优先按 URL 匹配已配置的 API Key，适用于思源 AI、自定义代理等场景",createActionElement:()=>this.createCheckbox("matchByUrl",s.matchByUrl??!0)}),t.addItem({title:"拦截外部 API 调用",description:"拦截第三方插件对 OpenAI / Anthropic / DeepSeek 等外部 API 的直接调用",createActionElement:()=>this.createCheckbox("interceptExternalAPIs",s.interceptExternalAPIs)}),t.addItem({title:"超出限额时阻止请求",description:"当某个 API Key 的 Token 用量达到限额时，阻止后续请求（谨慎开启）",createActionElement:()=>this.createCheckbox("blockOnQuotaExceeded",s.blockOnQuotaExceeded)}),t.addItem({title:"限额重置周期",description:"按周期自动重置 Token 用量统计。每月 = 每月 1 日归零，每日 = 每天归零",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-quotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,s.quotaResetCycle===a.value&&(r.selected=!0),n.appendChild(r)}return n}}),t.addItem({title:"自定义周期天数（天）",description:"单 Key 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）。例如 14 = 每两周、90 = 每季。下方全局周期也共用此天数。",createActionElement:()=>this.createCustomDaysInput("tks-customResetDays")}),t.addItem({title:"流式响应中途超限时中断",description:"当流式 AI 响应生成过程中 Token 超出限额时，立即中断流（避免继续消耗）",createActionElement:()=>this.createCheckbox("abortStreamOnExceeded",s.abortStreamOnExceeded)}),t.addItem({title:"显示阈值提醒通知",description:"当 Token 用量达到设定的提醒阈值时，在思源底部弹出通知",createActionElement:()=>this.createCheckbox("showNotifications",s.showNotifications)}),t.addItem({title:"顶栏显示实时用量徽标",description:"在顶栏图标上显示当前全局用量（无全局限额时显示总 token 数，设有全局限额时显示百分比，颜色随阈值变化）",createActionElement:()=>this.createCheckbox("showTopBarBadge",s.showTopBarBadge)}),t.addItem({title:"启用调试日志",description:"在浏览器控制台输出请求/响应调试信息，排查 token 统计为 0 等问题（重启插件后生效）",createActionElement:()=>this.createCheckbox("debugLogging",s.debugLogging??!1)}),t.addItem({title:"最大记录数",description:"保留的最近调用记录数量，超出后自动裁剪旧记录（节省存储空间）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-max-records",n.value=String(s.maxRecords),n.min="100",n.max="50000",n.step="100",n}}),t.addItem({title:"全局总 Token 限额",description:"所有 API Key 的 Token 用量总和超过此值时触发拦截（0 = 不开启）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalQuotaLimit",n.value=String(s.globalQuotaLimit||0),n.min="0",n.step="1000",n}}),t.addItem({title:"全局提醒阈值 (%)",description:"全局 Token 用量达到此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalAlertThreshold",n.value=String(s.globalAlertThreshold||0),n.min="0",n.max="100",n.step="5",n}}),t.addItem({title:"全局限额重置周期",description:"按周期自动重置全局 Token 用量统计",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-globalQuotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,s.globalQuotaResetCycle===a.value&&(r.selected=!0),n.appendChild(r)}return n}}),t.addItem({title:"全局周期自定义天数（天）",description:"全局 Token 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方单 Key 周期共用同一天数",createActionElement:()=>this.createCustomDaysInput("tks-globalQuotaResetDays")}),t.addItem({title:"全局已用 Token 校准",description:"手动输入从第三方平台导入的历史已用 Token，叠加到全局统计中（0 = 不校准）",createActionElement:()=>{const n=document.createElement("div");n.style.display="flex",n.style.gap="8px",n.style.alignItems="center";const o=(a,r,i)=>{const l=document.createElement("div");l.style.flex="1";const d=document.createElement("div");d.style.fontSize="12px",d.style.color="var(--b3-theme-on-surface)",d.textContent=r;const p=document.createElement("input");return p.type="number",p.className="b3-text-field",p.id=`tks-${a}`,p.value=String(i||0),p.min="0",p.step="100",p.style.width="100%",l.appendChild(d),l.appendChild(p),l};return n.appendChild(o("globalUsedTokensOffset","总 Token",s.globalUsedTokensOffset)),n.appendChild(o("globalUsedInputTokensOffset","输入",s.globalUsedInputTokensOffset)),n.appendChild(o("globalUsedOutputTokensOffset","输出",s.globalUsedOutputTokensOffset)),n}}),t.addItem({title:"全局费用限额",description:"当前周期内所有 API 调用的估算总费用超过此金额时触发提醒与拦截（0 = 不开启；需先在「费用估算配置」中设置模型单价）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalCostLimit",n.value=String(s.globalCostLimit||0),n.min="0",n.step="1",n}}),t.addItem({title:"全局费用提醒阈值 (%)",description:"全局费用达到限额的此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalCostAlertThreshold",n.value=String(s.globalCostAlertThreshold||0),n.min="0",n.max="100",n.step="5",n}}),t.addItem({title:"全局费用重置周期",description:"按周期自动重置全局费用用量统计（独立于「全局限额重置周期」，可与 Token 限额采用不同节奏）",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-globalCostResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,s.globalCostResetCycle===a.value&&(r.selected=!0),n.appendChild(r)}return n}}),t.addItem({title:"全局费用周期自定义天数（天）",description:"全局费用限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方周期共用同一天数",createActionElement:()=>this.createCustomDaysInput("tks-globalCostResetDays")}),t.addItem({title:"全局已用费用校准",description:"手动输入从第三方平台导入的历史已花费金额，叠加到全局费用统计中（0 = 不校准；单位与货币类型一致）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalUsedCostOffset",n.value=String(s.globalUsedCostOffset||0),n.min="0",n.step="1",n}}),t.addItem({title:"费用估算配置",description:"设置每模型单价（每 1K tokens 的输入/输出价格）与资源包（一个包涵盖多个模型），仪表盘将显示估算费用",actionElement:this.createButton("配置",()=>this.openPriceEditor())}),t.addItem({title:"API Key 管理",description:"添加、编辑、删除 API Key，为每个 Key 设置限额与提醒阈值",actionElement:this.createButton("管理 API Key",()=>this.openKeyManager())}),t.addItem({title:"跨端统计合并",description:"开启后，各端（电脑 / 鸿蒙 / 浏览器）通过思源数据同步共享同一套 API Key 时，自动按记录合并多方 Token 用量，汇总到每一端；关闭则仅统计本端。",createActionElement:()=>this.createCheckbox("syncStatistics",s.syncStatistics??!0)}),t.addItem({title:"立即同步统计",description:"手动触发一次思源云同步，并合并其他端的统计记录（例如鸿蒙端打开后一键获取电脑端历史数据），不受上方开关限制。需先在思源「设置 - 关于 - 云端」中配置并启用云同步。",actionElement:this.createButton("立即同步",()=>this.handleManualSync())}),t.addItem({title:"导出统计数据",description:"将所有统计数据导出为 JSON 文件",actionElement:this.createButton("导出",()=>this.exportData())}),t.addItem({title:"清除调用记录",description:"删除所有 Token 调用记录，但保留 API Key 配置",actionElement:this.createButton("清除记录",()=>this.clearRecords())}),t.addItem({title:"重置全部数据",description:"清除所有调用记录并恢复默认设置，API Key 配置保留不变",actionElement:this.createButton("重置",()=>this.resetAll())}),t}createCheckbox(e,t){const s=document.createElement("input");return s.type="checkbox",s.id=`tks-${e}`,s.className="b3-switch",s.checked=t,s}createButton(e,t){const s=document.createElement("button");return s.className="b3-button b3-button--outline",s.textContent=e,s.style.fontSize="14px",s.addEventListener("click",t),s}createCustomDaysInput(e){const t=document.createElement("input");t.type="number",t.className="b3-text-field fn__size200",t.id=e,t.value=String(this.store.getSettings().customResetDays||30),t.min="1",t.max="365",t.step="1";const s=["tks-customResetDays","tks-globalQuotaResetDays","tks-globalCostResetDays"];return t.addEventListener("input",()=>{const n=t.value;for(const o of s){if(o===e)continue;const a=document.getElementById(o);a&&a.value!==n&&(a.value=n)}}),t}async handleManualSync(){const e=document.activeElement;e&&(e.disabled=!0,e.textContent="同步中…");try{if(!this.onManualSync){M.showMessage("同步功能未就绪",2e3,"error");return}let t=!1;try{t=(await fetch("/api/sync/now",{method:"POST"})).ok}catch{t=!1}t&&await new Promise(n=>setTimeout(n,2500)),await this.onManualSync()?M.showMessage("已合并其他端统计",2e3,"info"):t?M.showMessage("已是最新，无新数据（请确认其他端已开启云同步并完成过同步）",3500,"info"):M.showMessage("已是最新，无新数据（建议先在思源设置中开启云同步）",3500,"info")}catch{M.showMessage("同步失败，请确认思源数据同步已开启",3e3,"error")}finally{e&&(e.disabled=!1,e.textContent="立即同步")}}saveGlobalSettings(){var y,C,f,x,b,v,K,T,S;const e=$=>{var I;return((I=document.getElementById(`tks-${$}`))==null?void 0:I.checked)??!1},t=parseInt(((y=document.getElementById("tks-max-records"))==null?void 0:y.value)||"5000",10),s=((C=document.getElementById("tks-quotaResetCycle"))==null?void 0:C.value)||"monthly",n=parseInt(((f=document.getElementById("tks-globalQuotaLimit"))==null?void 0:f.value)||"0",10)||0,o=parseInt(((x=document.getElementById("tks-globalAlertThreshold"))==null?void 0:x.value)||"0",10)||0,a=((b=document.getElementById("tks-globalQuotaResetCycle"))==null?void 0:b.value)||"monthly",r=$=>{var I;return parseInt(((I=document.getElementById(`tks-${$}`))==null?void 0:I.value)||"0",10)||0},i=Math.max(0,r("globalUsedTokensOffset")),l=Math.max(0,r("globalUsedInputTokensOffset")),d=Math.max(0,r("globalUsedOutputTokensOffset")),p=parseFloat(((v=document.getElementById("tks-globalCostLimit"))==null?void 0:v.value)||"0")||0,c=parseInt(((K=document.getElementById("tks-globalCostAlertThreshold"))==null?void 0:K.value)||"0",10)||0,h=((T=document.getElementById("tks-globalCostResetCycle"))==null?void 0:T.value)||"monthly",u=Math.max(0,parseFloat(((S=document.getElementById("tks-globalUsedCostOffset"))==null?void 0:S.value)||"0")||0),m=Math.max(1,r("customResetDays")),g=n!==this.store.getSettings().globalQuotaLimit||o!==this.store.getSettings().globalAlertThreshold;this.store.updateSettings({matchByUrl:e("matchByUrl"),interceptExternalAPIs:e("interceptExternalAPIs"),blockOnQuotaExceeded:e("blockOnQuotaExceeded"),quotaResetCycle:s,abortStreamOnExceeded:e("abortStreamOnExceeded"),showNotifications:e("showNotifications"),showTopBarBadge:e("showTopBarBadge"),debugLogging:e("debugLogging"),maxRecords:isNaN(t)?5e3:Math.max(100,Math.min(5e4,t)),globalQuotaLimit:Math.max(0,n),globalAlertThreshold:Math.max(0,Math.min(100,o)),globalQuotaResetCycle:a,globalUsedTokensOffset:i,globalUsedInputTokensOffset:l,globalUsedOutputTokensOffset:d,globalCostLimit:Math.max(0,p),globalCostAlertThreshold:Math.max(0,Math.min(100,c)),globalCostResetCycle:h,globalUsedCostOffset:u,customResetDays:m,syncStatistics:e("syncStatistics")}),g&&this.keyManager.resetGlobalAlert(),(p!==this.store.getSettings().globalCostLimit||c!==this.store.getSettings().globalCostAlertThreshold||h!==this.store.getSettings().globalCostResetCycle||u!==this.store.getSettings().globalUsedCostOffset)&&this.keyManager.resetGlobalCostAlert()}refreshFromStore(){var a;const e=this.store.getSettings(),t=document.activeElement,s=!!t&&((a=t.id)==null?void 0:a.startsWith("tks-")),n=(r,i)=>{if(s&&t.id===`tks-${r}`)return;const l=document.getElementById(`tks-${r}`);l&&(l.checked=!!i)},o=(r,i)=>{if(s&&t.id===`tks-${r}`)return;const l=document.getElementById(`tks-${r}`);l&&(l.value=String(i))};if(n("matchByUrl",e.matchByUrl??!0),n("interceptExternalAPIs",e.interceptExternalAPIs),n("blockOnQuotaExceeded",e.blockOnQuotaExceeded),n("abortStreamOnExceeded",e.abortStreamOnExceeded),n("showNotifications",e.showNotifications),n("showTopBarBadge",e.showTopBarBadge),n("debugLogging",e.debugLogging??!1),n("syncStatistics",e.syncStatistics??!0),o("max-records",e.maxRecords),o("globalQuotaLimit",e.globalQuotaLimit),o("globalAlertThreshold",e.globalAlertThreshold),o("globalUsedTokensOffset",e.globalUsedTokensOffset),o("globalUsedInputTokensOffset",e.globalUsedInputTokensOffset),o("globalUsedOutputTokensOffset",e.globalUsedOutputTokensOffset),o("globalCostLimit",e.globalCostLimit),o("globalCostAlertThreshold",e.globalCostAlertThreshold),o("globalUsedCostOffset",e.globalUsedCostOffset),o("customResetDays",e.customResetDays),o("globalQuotaResetDays",e.customResetDays),o("globalCostResetDays",e.customResetDays),!(s&&t.id==="tks-quotaResetCycle")){const r=document.getElementById("tks-quotaResetCycle");r&&(r.value=e.quotaResetCycle)}if(!(s&&t.id==="tks-globalQuotaResetCycle")){const r=document.getElementById("tks-globalQuotaResetCycle");r&&(r.value=e.globalQuotaResetCycle)}if(!(s&&t.id==="tks-globalCostResetCycle")){const r=document.getElementById("tks-globalCostResetCycle");r&&(r.value=e.globalCostResetCycle)}}ensureDialogScrollable(){const e=document.getElementById("tks-matchByUrl")||document.getElementById("tks-interceptExternalAPIs");if(!e)return;const t=e.closest(".b3-dialog");if(!t)return;const s=t.querySelector(".b3-dialog__body");s&&(t.style.maxHeight="85vh",s.style.maxHeight="calc(85vh - 120px)",s.style.overflowY="auto")}isMobile(){const e=M.getFrontend();return e==="mobile"||e==="browser-mobile"}openPriceEditor(){const e=this.store.getSettings(),t=this.isMobile(),s=new M.Dialog({title:"费用估算配置",width:t?"95vw":"640px",height:"auto",content:'<div id="tks-price-editor" class="tks-price-editor"></div>'});setTimeout(()=>this.renderPriceEditor(s,{...e.modelPrices},e.currency||"¥",(e.pricePacks||[]).map(n=>({...n,models:[...n.models]}))),50)}renderPriceEditor(e,t,s,n){var m,g,A,y,C;const o=e.element.querySelector("#tks-price-editor");if(!o)return;const a=this.store.getSettings().recalcCostOnPriceChange!==!1,r=(f,x,b,v)=>`
      <div class="tks-price-row">
        <input type="text" class="b3-text-field tks-price-model" value="${L(f)}" placeholder="模型名（如 gpt-4o）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-input" value="${L(String(x))}" placeholder="输入/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-cache" value="${L(String(v??0))}" placeholder="缓存命中/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-output" value="${L(String(b))}" placeholder="输出/1K" />
        <button class="b3-button b3-button--small b3-button--danger tks-price-del" title="删除">✕</button>
      </div>
    `,i=f=>{const x=this.store.getPackUsage(f),b=f.totalTokens||0;let v;if(b>0){const K=Math.max(0,b-x.usedTokens);v=`已用 ${x.usedTokens.toLocaleString()} / 总量 ${b.toLocaleString()}（剩余 ${K.toLocaleString()}）`}else v=`已用 ${x.usedTokens.toLocaleString()}（总量不限）`;return`
      <div class="tks-pack-row" data-pack-id="${L(f.id)}">
        <input type="text" class="b3-text-field tks-pack-name" value="${L(f.name)}" placeholder="资源包名（如 通义千问）" />
        <input type="number" step="1" min="0" class="b3-text-field tks-pack-total" value="${L(String(f.totalTokens||0))}" placeholder="总 Tokens（0 不限）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-input" value="${L(String(f.input))}" placeholder="输入单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-cache" value="${L(String(f.cacheRead??0))}" placeholder="缓存命中单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-output" value="${L(String(f.output))}" placeholder="输出单价/1K" />
        <input type="text" class="b3-text-field tks-pack-models" value="${L((f.models||[]).join(", "))}" placeholder="涵盖模型，逗号分隔" />
        <button class="b3-button b3-button--small b3-button--danger tks-pack-del" title="删除">✕</button>
        <div class="tks-pack-usage">${L(v)}</div>
      </div>
    `},l=Object.entries(t).map(([f,x])=>r(f,x.input,x.output,x.cacheRead)).join(""),d=n.map(f=>i(f)).join("");o.innerHTML=`
      <div class="tks-price-head">
        <label>货币类型</label>
        <select id="tks-price-currency" class="b3-select fn__size200">
          <option value="¥" ${s==="¥"?"selected":""}>¥ (人民币)</option>
          <option value="$" ${s==="$"?"selected":""}>$ (美元)</option>
        </select>
      </div>
      <div class="tks-price-opt">
        <label class="tks-price-opt-label"><input type="checkbox" id="tks-price-recalc" ${a?"checked":""} /> 单价变更后自动重算历史费用</label>
        <span class="tks-price-opt-hint">开启后仪表盘与记录费用随单价实时更新；关闭则每条记录的费用在生成时固定，不再随单价变化。</span>
      </div>
      <div class="tks-price-header">
        <span class="tks-price-hd-model">模型名称</span>
        <span class="tks-price-hd-input">输入/1K</span>
        <span class="tks-price-hd-cache">缓存命中/1K</span>
        <span class="tks-price-hd-output">输出/1K</span>
        <span></span>
      </div>
      <div class="tks-price-section-title">按模型单价（模型名不区分大小写，保存时自动归一化为小写）</div>
      <div class="tks-price-list" id="tks-price-list">${l||'<div class="tks-price-empty">尚未配置任何模型单价</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-price-add">+ 添加模型</button>
      </div>
      <div class="tks-price-section-title">资源包（一个资源包可涵盖多个模型，包内模型共用同一单价；「总 Tokens」填该资源包的总额度，0 表示不限，用于按总量计费的资源包）</div>
      <div class="tks-pack-header">
        <span class="tks-pack-hd-name">名称</span>
        <span class="tks-pack-hd-total">总 Tokens</span>
        <span class="tks-pack-hd-input">输入/1K</span>
        <span class="tks-pack-hd-cache">缓存命中/1K</span>
        <span class="tks-pack-hd-output">输出/1K</span>
        <span class="tks-pack-hd-models">涵盖模型</span>
        <span></span>
      </div>
      <div class="tks-pack-list" id="tks-pack-list">${d||'<div class="tks-price-empty">尚未配置任何资源包</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-pack-add">+ 添加资源包</button>
        <span style="flex:1"></span>
        <button class="b3-button b3-button--text" id="tks-price-export">📤 导出配置</button>
        <button class="b3-button b3-button--text" id="tks-price-import">📥 导入配置</button>
        <button class="b3-button b3-button--outline" id="tks-price-save">保存</button>
      </div>
    `;const p=o.querySelector("#tks-price-list"),c=o.querySelector("#tks-pack-list"),h=f=>{var x;(x=f.querySelector(".tks-price-del"))==null||x.addEventListener("click",()=>{f.remove(),p.querySelectorAll(".tks-price-row").length===0&&(p.innerHTML='<div class="tks-price-empty">尚未配置任何模型单价</div>')})};p.querySelectorAll(".tks-price-row").forEach(f=>h(f)),(m=o.querySelector("#tks-price-add"))==null||m.addEventListener("click",()=>{const f=p.querySelector(".tks-price-empty");f&&f.remove(),p.insertAdjacentHTML("beforeend",r("",0,0,0)),h(p.lastElementChild)});const u=f=>{var x;(x=f.querySelector(".tks-pack-del"))==null||x.addEventListener("click",()=>{f.remove(),c.querySelectorAll(".tks-pack-row").length===0&&(c.innerHTML='<div class="tks-price-empty">尚未配置任何资源包</div>')})};c.querySelectorAll(".tks-pack-row").forEach(f=>u(f)),(g=o.querySelector("#tks-pack-add"))==null||g.addEventListener("click",()=>{const f=c.querySelector(".tks-price-empty");f&&f.remove();const x={id:`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,name:"",totalTokens:0,input:0,output:0,models:[]};c.insertAdjacentHTML("beforeend",i(x)),u(c.lastElementChild)}),(A=o.querySelector("#tks-price-save"))==null||A.addEventListener("click",()=>{var K,T;const f={};p.querySelectorAll(".tks-price-row").forEach(S=>{var O,q,D,F;const $=(((O=S.querySelector(".tks-price-model"))==null?void 0:O.value)||"").toLowerCase().trim().replace(/[\s\-_]+/g,""),I=parseFloat(((q=S.querySelector(".tks-price-input"))==null?void 0:q.value)||"0")||0,U=parseFloat(((D=S.querySelector(".tks-price-cache"))==null?void 0:D.value)||"0")||0,R=parseFloat(((F=S.querySelector(".tks-price-output"))==null?void 0:F.value)||"0")||0;$&&(f[$]={input:I,output:R,...U>0?{cacheRead:U}:{}})});const x=[];c.querySelectorAll(".tks-pack-row").forEach(S=>{var F,j,z,G,Q,B;const $=S.dataset.packId||`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,I=(((F=S.querySelector(".tks-pack-name"))==null?void 0:F.value)||"").trim(),U=parseInt(((j=S.querySelector(".tks-pack-total"))==null?void 0:j.value)||"0",10)||0,R=parseFloat(((z=S.querySelector(".tks-pack-input"))==null?void 0:z.value)||"0")||0,O=parseFloat(((G=S.querySelector(".tks-pack-cache"))==null?void 0:G.value)||"0")||0,q=parseFloat(((Q=S.querySelector(".tks-pack-output"))==null?void 0:Q.value)||"0")||0,D=(((B=S.querySelector(".tks-pack-models"))==null?void 0:B.value)||"").split(/[,，]/).map(W=>W.toLowerCase().trim().replace(/[\s\-_]+/g,"")).filter(Boolean);(I||D.length>0)&&x.push({id:$,name:I,totalTokens:U,input:R,output:q,...O>0?{cacheRead:O}:{},models:D})});const b=((K=o.querySelector("#tks-price-currency"))==null?void 0:K.value)||"¥",v=((T=o.querySelector("#tks-price-recalc"))==null?void 0:T.checked)??!0;this.store.updateSettings({currency:b,modelPrices:f,pricePacks:x,recalcCostOnPriceChange:v}),this.store.save(),e.destroy(),M.showMessage("费用配置已保存",2e3,"info")}),(y=o.querySelector("#tks-price-export"))==null||y.addEventListener("click",()=>this.exportPriceConfig()),(C=o.querySelector("#tks-price-import"))==null||C.addEventListener("click",()=>this.importPriceConfig(e))}exportPriceConfig(){const e=this.store.getSettings(),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),currency:e.currency||"¥",recalcCostOnPriceChange:e.recalcCostOnPriceChange!==!1,modelPrices:e.modelPrices||{},pricePacks:e.pricePacks||[]},null,2),s=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(s),o=document.createElement("a");o.href=n,o.download=`siyuan-token-stats-prices-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(n)},0),M.showMessage("费用配置已导出",2e3,"info")}importPriceConfig(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async s=>{var o;const n=(o=s.target.files)==null?void 0:o[0];if(n)try{const a=await n.text(),r=JSON.parse(a),i=r&&r.modelPrices&&typeof r.modelPrices=="object"?r.modelPrices:{},l=Array.isArray(r==null?void 0:r.pricePacks)?r.pricePacks:[],d=typeof(r==null?void 0:r.currency)=="string"?r.currency:this.store.getSettings().currency||"¥",p=typeof(r==null?void 0:r.recalcCostOnPriceChange)=="boolean"?r.recalcCostOnPriceChange:!0,c=l.map(h=>({...h,models:Array.isArray(h==null?void 0:h.models)?[...h.models]:[]}));this.renderPriceEditor(e,{...i},d,c),setTimeout(()=>{const h=e.element.querySelector("#tks-price-recalc");h&&(h.checked=p)},10),M.showMessage("已载入导入的费用配置，请检查后点击保存",2e3,"info")}catch(a){console.error("[TokenStats] Import price config failed:",a),M.showMessage("导入失败："+((a==null?void 0:a.message)||"文件格式不正确"),3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}openKeyManager(){const e=this.isMobile(),t=new M.Dialog({title:"API Key 管理",width:e?"95vw":"750px",height:e?"80vh":"500px",content:'<div id="tks-key-mgr" class="tks-key-mgr"></div>'});setTimeout(()=>this.renderKeyList(t),50)}renderKeyList(e){var o,a,r;const t=e.element.querySelector("#tks-key-mgr");if(!t)return;const s=this.store.getApiKeys();t.innerHTML=`
      <div class="tks-key-toolbar">
        <button class="b3-button b3-button--text" id="tks-add-key">+ 添加 API Key</button>
        <button class="b3-button b3-button--text" id="tks-export-keys">📤 导出</button>
        <button class="b3-button b3-button--text" id="tks-import-keys">📥 导入</button>
        <span class="tks-key-hint">共 ${s.length} 个 Key</span>
      </div>
      <div class="tks-key-list" id="tks-key-list-items"></div>
    `;const n=t.querySelector("#tks-key-list-items");for(const i of s){const l=this.keyManager.getKeyUsage(i.id),d=i.quotaLimit>0?Math.min(100,l.totalTokens/i.quotaLimit*100):0,p=document.createElement("div");p.className="tks-key-item",p.innerHTML=`
        <div class="tks-key-info">
          <div class="tks-key-name">
            ${this.providerIcon(i.provider)} ${L(i.name)}
            ${i.enabled?"":'<span class="tks-badge tks-badge-off">已禁用</span>'}
          </div>
          <div class="tks-key-detail">
            <span class="tks-key-masked">${L(i.keyMasked)}</span>
            ${i.provider?`<span class="tks-key-provider">${L(i.provider)}</span>`:""}
            ${i.baseUrl?`<span class="tks-key-url" title="${L(i.baseUrl)}">${L(i.baseUrl)}</span>`:""}
          </div>
          <div class="tks-key-quota">
            <div class="tks-quota-bar">
              <div class="tks-quota-fill ${d>=(i.alertThreshold||100)?"tks-quota-alert":""}"
                   style="width: ${d}%"></div>
            </div>
            <span class="tks-quota-text">
              ${l.totalTokens.toLocaleString()}${i.quotaLimit>0?" / "+i.quotaLimit.toLocaleString():""} tokens
              ${i.alertThreshold>0?`· 阈值 ${i.alertThreshold}%`:""}
            </span>
          </div>
        </div>
        <div class="tks-key-actions">
          <button class="b3-button b3-button--small" data-action="edit" data-id="${L(i.id)}">编辑</button>
          <button class="b3-button b3-button--small b3-button--danger" data-action="delete" data-id="${L(i.id)}">删除</button>
        </div>
      `,n.appendChild(p)}(o=t.querySelector("#tks-add-key"))==null||o.addEventListener("click",()=>{this.openKeyEditor(e,null)}),(a=t.querySelector("#tks-export-keys"))==null||a.addEventListener("click",()=>{this.exportKeys()}),(r=t.querySelector("#tks-import-keys"))==null||r.addEventListener("click",()=>{this.importKeys(e)}),t.querySelectorAll("[data-action]").forEach(i=>{i.addEventListener("click",l=>{const d=l.currentTarget,p=d.dataset.action,c=d.dataset.id;if(p==="edit"){const h=this.store.getApiKey(c);h&&this.openKeyEditor(e,h)}else p==="delete"&&M.confirm("删除 API Key","确定删除此 API Key 吗？相关统计记录将保留。",()=>{this.store.deleteApiKey(c),this.keyManager.resetAlert(c),this.renderKeyList(e),M.showMessage("已删除",2e3,"info")})})})}openKeyEditor(e,t){var r,i,l;const s=!!t,n=this.isMobile(),o=new M.Dialog({title:s?"编辑 API Key":"添加 API Key",width:n?"92vw":"500px",height:"auto",content:`
        <div class="tks-key-editor">
          <div class="tks-form-row">
            <label>名称</label>
            <input type="text" id="tke-name" class="b3-text-field" value="${L((t==null?void 0:t.name)||"")}" placeholder="例如：我的 OpenAI Key" />
          </div>
          <div class="tks-form-row">
            <label>API Key</label>
            <input type="password" id="tke-key" class="b3-text-field" value="${L((t==null?void 0:t.keyFull)||"")}" placeholder="sk-..." />
            <div class="tks-form-hint">用于匹配请求头中的 Authorization / x-api-key，留空则仅按 URL 匹配</div>
          </div>
          <div class="tks-form-row">
            <label>提供商名称</label>
            <input type="text" id="tke-provider" class="b3-text-field" value="${L((t==null?void 0:t.provider)||"")}" list="tke-provider-list" placeholder="例如：OpenAI、DeepSeek、华为云、SiYuan" />
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
            <input type="text" id="tke-url" class="b3-text-field" value="${L((t==null?void 0:t.baseUrl)||"")}" placeholder="例如：https://api.openai.com/v1/chat/completions，或 /api/ai/" />
            <div class="tks-form-hint">用于 URL 匹配。可填完整 URL、域名或路径（如 /api/ai/）。留空则仅按 Key 匹配。</div>
          </div>
          <div class="tks-form-row">
            <label>关联模型</label>
            <input type="text" id="tke-models" class="b3-text-field" value="${L(t!=null&&t.models?t.models.join(", "):"")}" placeholder="例如：Qwen/Qwen3-8B, sensenova-6.7-flash-lite" />
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
      `}),a=o.element;(r=a.querySelector("#tke-provider"))==null||r.addEventListener("input",d=>{const p=d.target.value.trim(),c=a.querySelector("#tke-url");!c.value&&p&&(c.value=this.keyManager.getDefaultBaseUrl(p))}),(i=a.querySelector("#tke-cancel"))==null||i.addEventListener("click",()=>o.destroy()),(l=a.querySelector("#tke-save"))==null||l.addEventListener("click",()=>{const d=a.querySelector("#tke-name").value.trim(),p=a.querySelector("#tke-key").value.trim(),c=a.querySelector("#tke-provider").value.trim(),h=a.querySelector("#tke-url").value.trim(),u=a.querySelector("#tke-models").value.split(/[,，]/).map(x=>x.trim()).filter(Boolean),m=parseInt(a.querySelector("#tke-quota").value,10)||0,g=parseInt(a.querySelector("#tke-threshold").value,10)||0,A=Math.max(0,parseInt(a.querySelector("#tke-usedTokensOffset").value,10)||0),y=Math.max(0,parseInt(a.querySelector("#tke-usedInputTokensOffset").value,10)||0),C=Math.max(0,parseInt(a.querySelector("#tke-usedOutputTokensOffset").value,10)||0),f=a.querySelector("#tke-enabled").value==="true";if(!d){M.showMessage("请输入名称",3e3,"error");return}if(s&&t)this.store.updateApiKey(t.id,{name:d,keyFull:p,keyMasked:this.keyManager.maskKey(p),provider:c,baseUrl:h,models:u,quotaLimit:m,alertThreshold:g,usedTokensOffset:A,usedInputTokensOffset:y,usedOutputTokensOffset:C,enabled:f}),this.keyManager.resetAlert(t.id);else{const x={id:this.keyManager.generateKeyId(),name:d,keyFull:p,keyMasked:this.keyManager.maskKey(p),provider:c,baseUrl:h,models:u,quotaLimit:m,usedTokensOffset:A,usedInputTokensOffset:y,usedOutputTokensOffset:C,alertThreshold:g,enabled:f,createdAt:Date.now()};this.store.addApiKey(x)}this.store.save(),o.destroy(),this.renderKeyList(e),M.showMessage("已保存",2e3,"info")})}exportKeys(){const e=this.store.getApiKeys(),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),apiKeys:e},null,2),s=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(s),o=document.createElement("a");o.href=n,o.download=`siyuan-token-stats-keys-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(n)},0),M.showMessage(`已导出 ${e.length} 个 API Key`,2e3,"info")}importKeys(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async s=>{var o;const n=(o=s.target.files)==null?void 0:o[0];if(n)try{const a=await n.text(),r=JSON.parse(a),i=Array.isArray(r)?r:r.apiKeys;if(!Array.isArray(i))throw new Error("导入文件格式不正确，未找到 apiKeys 数组");let l=0,d=0;for(const c of i){if(!c||!c.keyFull)continue;const h=Array.isArray(c.models)?c.models:typeof c.models=="string"?c.models.split(/[,，]/).map(m=>m.trim()).filter(Boolean):[],u=this.store.getApiKeys().find(m=>m.keyFull===c.keyFull);u?(this.store.updateApiKey(u.id,{name:c.name||u.name,provider:c.provider||u.provider,baseUrl:c.baseUrl||u.baseUrl,models:h.length?h:u.models||[],quotaLimit:c.quotaLimit??u.quotaLimit,alertThreshold:c.alertThreshold??u.alertThreshold,enabled:c.enabled??u.enabled}),d++):(this.store.addApiKey({id:this.keyManager.generateKeyId(),name:c.name||"Imported Key",keyFull:c.keyFull,keyMasked:this.keyManager.maskKey(c.keyFull),provider:c.provider||"",baseUrl:c.baseUrl||"",models:h,quotaLimit:c.quotaLimit||0,usedTokensOffset:c.usedTokensOffset||0,usedInputTokensOffset:c.usedInputTokensOffset||0,usedOutputTokensOffset:c.usedOutputTokensOffset||0,alertThreshold:c.alertThreshold||0,enabled:c.enabled!==!1,createdAt:Date.now()}),l++)}this.store.save(),this.renderKeyList(e);const p=[];l>0&&p.push(`新增 ${l} 个`),d>0&&p.push(`更新 ${d} 个`),M.showMessage(`导入成功：${p.join("，")||"无变化"}`,2e3,"info")}catch(a){console.error("[TokenStats] Import keys failed:",a),M.showMessage("导入失败："+a.message,3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}providerIcon(e){const t=(e||"").toLowerCase();return{siyuan:"🐿️",openai:"🤖",anthropic:"🧠",deepseek:"🔍",siliconflow:"🌊",华为云:"☁️",huawei:"☁️"}[t]||"🔑"}exportData(){const e=this.store.exportAll(),t=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,n.click(),URL.revokeObjectURL(s),M.showMessage("数据已导出",2e3,"info")}clearRecords(){M.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。此操作不可撤销。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),M.showMessage("记录已清除",2e3,"info")})}resetAll(){M.confirm("重置全部数据","⚠️ 确定重置吗？所有调用记录将被清除，设置恢复默认值。API Key 配置保留不变，此操作不可撤销。",()=>{this.store.clearRecords(),this.store.resetSettings(),this.keyManager.clearAllAlerts(),M.showMessage("已重置",2e3,"info")})}}function E(k){return k?k.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function ne(k){let e=0;for(let s=0;s<k.length;s++)e=e*31+k.charCodeAt(s)>>>0;return`hsl(${e%360}, 60%, 52%)`}function N(k){return`${k.getFullYear()}-${String(k.getMonth()+1).padStart(2,"0")}-${String(k.getDate()).padStart(2,"0")}`}function xe(k){const e=k.getDay(),t=(e===0?-6:1)-e,s=new Date(k);return s.setDate(k.getDate()+t),s.setHours(0,0,0,0),s}function Te(k){return new Date(k.getFullYear(),k.getMonth(),1)}class Se{constructor(e,t){this.dialog=null,this.summary=null,this.refreshTimer=null,this.store=e,this.keyManager=t}show(){try{if(this.summary=this.computeSummary(),this.dialog&&this.dialog.element&&this.dialog.element.isConnected){this.refreshContent();return}this.dialog&&(this.dialog.destroy(),this.dialog=null);const e=this.isMobile();this.dialog=new M.Dialog({title:"📊 Token 用量统计",width:e?"95vw":"900px",height:e?"85vh":"700px",content:this.renderHTML(this.summary),destroyCallback:()=>{this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null),this.dialog=null}}),this.bindEvents(),this.refreshTimer=setInterval(()=>{if(!this.dialog||!this.dialog.element||!this.dialog.element.isConnected){this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null);return}this.refreshContent()},3e3)}catch(e){console.error("[TokenStats] Dashboard show error:",e),M.showMessage("仪表盘打开失败: "+e.message,3e3,"error")}}refreshContent(){if(!this.dialog||!this.dialog.element)return;const e=this.dialog.element.querySelector(".b3-dialog__body");if(!e)return;const t=document.activeElement;if(t&&e.contains(t)&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"))return;const s=e.scrollTop;this.summary=this.computeSummary(),e.innerHTML=this.renderHTML(this.summary),this.bindEvents();const n=this.dialog.element.querySelector(".b3-dialog__body");n&&(n.scrollTop=s)}isMobile(){const e=M.getFrontend();return e==="mobile"||e==="browser-mobile"}computeSummary(){const e=this.store.getRecords(),t=this.store.getApiKeys(),s=this.store.getSettings(),n={totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalRequests:e.length,successRequests:0,failedRequests:0,averageRequestTime:0,totalCost:0,modelStats:{},dailyStats:[],keyStats:[]};let o=0;for(const a of e){n.totalTokens+=a.totalTokens,n.totalInputTokens+=a.inputTokens,n.totalOutputTokens+=a.outputTokens,n.totalCost+=this.store.getRecordCost(a),o+=a.requestTime,a.success?n.successRequests++:n.failedRequests++;const r=a.model||"unknown",i=r.toLowerCase().trim();n.modelStats[i]||(n.modelStats[i]={model:r,count:0,tokens:0,inputTokens:0,outputTokens:0,cost:0}),n.modelStats[i].count++,n.modelStats[i].tokens+=a.totalTokens,n.modelStats[i].inputTokens+=a.inputTokens,n.modelStats[i].outputTokens+=a.outputTokens,n.modelStats[i].cost+=this.store.getRecordCost(a)}n.averageRequestTime=e.length>0?o/e.length:0,n.dailyStats=this.computeTrendStats(e,s);for(const a of t){const r=this.keyManager.getKeyUsage(a.id),i=a.quotaLimit>0?Math.min(100,r.totalTokens/a.quotaLimit*100):0;n.keyStats.push({apiKeyId:a.id,apiKeyName:a.name,totalTokens:r.totalTokens,totalInputTokens:r.totalInputTokens,totalOutputTokens:r.totalOutputTokens,totalRequests:r.totalRequests,quotaLimit:a.quotaLimit,alertThreshold:a.alertThreshold,usagePercent:i,isAlert:a.alertThreshold>0&&i>=a.alertThreshold,isExceeded:a.quotaLimit>0&&r.totalTokens>=a.quotaLimit})}return n.keyStats.sort((a,r)=>r.totalTokens-a.totalTokens),n}computeTrendStats(e,t){const{trendDateRangeStart:s,trendDateRangeEnd:n,trendAggregation:o}=t;let a=1/0,r=-1/0;for(const y of e)a=Math.min(a,y.timestamp),r=Math.max(r,y.timestamp);const i=e.length>0&&isFinite(a)&&isFinite(r),l=new Date;l.setHours(0,0,0,0);const d=i?new Date(a):new Date(l.getTime()-13*24*60*60*1e3),p=i?new Date(r):l,c=s||N(d),h=n||N(p),u=new Date(c+"T00:00:00"),m=new Date(h+"T23:59:59.999"),g={},A=(y,C,f,x,b)=>{g[y]||(g[y]={date:y,tokens:0,count:0,byModel:{},cost:0}),g[y].tokens+=C,g[y].count+=f,g[y].byModel[x]=(g[y].byModel[x]||0)+C,g[y].cost+=b};for(const y of e){if(y.timestamp<u.getTime()||y.timestamp>m.getTime())continue;const C=new Date(y.timestamp),f=(y.model||"unknown").toLowerCase().trim(),x=this.store.getRecordCost(y);if(o==="weekly"){const b=xe(C);A(N(b),y.totalTokens,1,f,x)}else if(o==="monthly"){const b=Te(C);A(N(b),y.totalTokens,1,f,x)}else A(N(C),y.totalTokens,1,f,x)}return Object.values(g).sort((y,C)=>y.date.localeCompare(C.date))}renderHTML(e){const t=this.store.getRecentRecords(30),s=Math.max(...Object.values(e.modelStats).map(d=>d.tokens),1),n=this.store.getSettings(),o=this.keyManager.getGlobalUsagePercent(n),a=this.keyManager.getGlobalUsage(n),r=this.getMinRecordDate(),i=this.getMaxRecordDate(),l=`
      <div class="tks-trend-controls">
        <label>区间：</label>
        <input type="date" id="tks-trend-start" class="b3-text-field" value="${E(n.trendDateRangeStart||r||"")}" ${r?`min="${E(r)}" max="${E(i||"")}"`:""} />
        <span>~</span>
        <input type="date" id="tks-trend-end" class="b3-text-field" value="${E(n.trendDateRangeEnd||i||"")}" ${i?`min="${E(r||"")}" max="${E(i)}"`:""} />
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
              <div class="tks-card-label">全局限额 ${a.totalTokens.toLocaleString()} / ${n.globalQuotaLimit.toLocaleString()}</div>
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
            ${Object.values(e.modelStats).sort((d,p)=>p.tokens-d.tokens).map(d=>this.renderModelBar(d,s)).join("")}
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
                  <th>缓存命中</th>
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
    `}getMinRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=1/0;for(const s of e)t=Math.min(t,s.timestamp);return N(new Date(t))}getMaxRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=-1/0;for(const s of e)t=Math.max(t,s.timestamp);return N(new Date(t))}renderKeyStat(e){const t=e.quotaLimit>0?`${e.totalTokens.toLocaleString()} / ${e.quotaLimit.toLocaleString()}`:`${e.totalTokens.toLocaleString()} (不限)`,s=e.alertThreshold>0?` · 阈值 ${e.alertThreshold}%`:"",n=e.isExceeded?"⛔":e.isAlert?"⚠️":e.quotaLimit>0?"✅":"";return`
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
    `}buildTrendSvg(e,t){const s=e.dailyStats,n=s.length;if(n===0)return"";const o=720,a=260,r=48,i=52,l=18,d=30,p=o-r-i,c=a-l-d,h=Math.max(...s.map(T=>T.tokens),1),u={};for(const T of s)for(const S of Object.keys(T.byModel))u[S]=(u[S]||0)+T.byModel[S];const m=Object.keys(u).sort((T,S)=>u[S]-u[T]),g=Math.max(...s.map(T=>T.cost),0),A=p/n,y=Math.min(26,A*.62),C=T=>r+A*(T+.5);let f="";for(let T=0;T<n;T++){const S=s[T],I=C(T)-y/2;let U=l+c;for(const R of m){const O=S.byModel[R]||0;if(O<=0)continue;const q=O/h*c;U-=q,f+=`<rect x="${I.toFixed(1)}" y="${U.toFixed(1)}" width="${y.toFixed(1)}" height="${Math.max(.5,q).toFixed(1)}" fill="${ne(R)}"><title>${E(R)}: ${O.toLocaleString()} tokens</title></rect>`}}let x="";if(g>0){x=`<polyline points="${s.map((S,$)=>`${C($).toFixed(1)},${(l+(1-S.cost/g)*c).toFixed(1)}`).join(" ")}" fill="none" stroke="#e0556b" stroke-width="2" stroke-linejoin="round"/>`;for(let S=0;S<n;S++){const $=l+(1-s[S].cost/g)*c;x+=`<circle cx="${C(S).toFixed(1)}" cy="${$.toFixed(1)}" r="2.5" fill="#e0556b"><title>费用: ${E(this.store.formatCost(s[S].cost))}</title></circle>`}}let b="";for(let T=0;T<=2;T++){const S=l+c*T/2,$=Math.round(h*(1-T/2));if(b+=`<line x1="${r}" y1="${S.toFixed(1)}" x2="${r+p}" y2="${S.toFixed(1)}" stroke="#e3e3e3" stroke-width="1"/>`,b+=`<text x="${r-6}" y="${(S+3).toFixed(1)}" text-anchor="end" font-size="10" fill="#8a8a8a">${$>=1e3?($/1e3).toFixed($>=1e4?0:1)+"k":$}</text>`,g>0){const I=g*(1-T/2);b+=`<text x="${r+p+6}" y="${(S+3).toFixed(1)}" text-anchor="start" font-size="10" fill="#e0556b">${E(this.store.formatCost(I))}</text>`}}const v=Math.max(1,Math.ceil(n/16));let K="";for(let T=0;T<n;T++){if(T%v!==0&&T!==n-1)continue;const S=s[T];let $=S.date.substring(5);t==="monthly"?$=S.date.substring(0,7):t==="weekly"&&($=`W${S.date.substring(5,7)}${S.date.substring(8,10)}`),K+=`<text x="${C(T).toFixed(1)}" y="${l+c+14}" text-anchor="middle" font-size="9" fill="#8a8a8a">${E($)}</text>`}return`<svg class="tks-trend-svg" viewBox="0 0 ${o} ${a}" preserveAspectRatio="xMidYMid meet" width="100%">${b}${f}${x}${K}</svg>`}buildTrendLegend(e){const t={};for(const a of e.dailyStats)for(const r of Object.keys(a.byModel))t[r]=(t[r]||0)+a.byModel[r];return`<div class="tks-trend-legend">${Object.keys(t).sort((a,r)=>t[r]-t[a]).map(a=>`<span class="tks-legend-item"><span class="tks-legend-swatch" style="background:${ne(a)}"></span>${E(a)}</span>`).join("")}<span class="tks-legend-item"><span class="tks-legend-line"></span>当日费用（右轴）</span></div>`}renderModelBar(e,t){const s=Math.max(1,e.tokens/t*100);return`
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${E(e.model)}">${E(e.model)}</div>
        <div class="tks-model-bar-track">
          <div class="tks-model-bar-fill" style="width: ${s}%; background: ${ne(e.model.toLowerCase().trim())}"></div>
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
        <td>${e.cacheReadTokens?e.cacheReadTokens.toLocaleString():"—"}</td>
        <td>${e.outputTokens.toLocaleString()}</td>
        <td><strong>${e.totalTokens.toLocaleString()}</strong></td>
        <td>${this.store.hasAnyPrice()?this.store.formatCost(this.store.getRecordCost(e)):"—"}</td>
        <td>${e.requestTime}ms</td>
        <td>${e.success?"✅":"❌"}</td>
      </tr>
    `}bindEvents(){var t,s,n,o,a,r;if(!this.dialog)return;const e=this.dialog.element;(t=e.querySelector("#tks-refresh"))==null||t.addEventListener("click",()=>{this.refreshContent()}),(s=e.querySelector("#tks-export-json"))==null||s.addEventListener("click",()=>{const i=this.store.exportAll();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,i,"application/json"),M.showMessage("数据已导出（JSON）",2e3,"info")}),(n=e.querySelector("#tks-export-csv"))==null||n.addEventListener("click",()=>{const i=this.buildRecordsCsv();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.csv`,i,"text/csv;charset=utf-8"),M.showMessage("数据已导出（CSV）",2e3,"info")}),(o=e.querySelector("#tks-clear-records"))==null||o.addEventListener("click",()=>{M.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),this.show(),M.showMessage("记录已清除",2e3,"info")})}),(a=e.querySelector("#tks-trend-apply"))==null||a.addEventListener("click",()=>{var p,c,h;const i=((p=e.querySelector("#tks-trend-start"))==null?void 0:p.value)||"",l=((c=e.querySelector("#tks-trend-end"))==null?void 0:c.value)||"",d=(h=e.querySelector("#tks-trend-aggregation"))==null?void 0:h.value;this.store.updateSettings({trendDateRangeStart:i,trendDateRangeEnd:l,trendAggregation:d}),this.store.save(),this.show()}),(r=e.querySelector("#tks-trend-reset"))==null||r.addEventListener("click",()=>{this.store.updateSettings({trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily"}),this.store.save(),this.show()})}downloadFile(e,t,s){const n=new Blob([t],{type:s}),o=URL.createObjectURL(n),a=document.createElement("a");a.href=o,a.download=e,a.click(),URL.revokeObjectURL(o)}buildRecordsCsv(){var a;const e=this.store.getRecords().slice().sort((r,i)=>r.timestamp-i.timestamp),t=this.store.getSettings().currency||"¥",s=this.summary,n=r=>{const i=String(r);return/[",\n]/.test(i)?`"${i.replace(/"/g,'""')}"`:i},o=[];s&&(o.push(`# 总Token,${s.totalTokens}`),o.push(`# 输入Token,${s.totalInputTokens}`),o.push(`# 输出Token,${s.totalOutputTokens}`),o.push(`# 请求数,${s.totalRequests}`),o.push(`# 总费用,${t}${s.totalCost.toFixed(4)}`)),o.push(`# 记录数,${e.length}`),o.push(["时间","模型","输入Token","缓存命中Token","输出Token","总计Token","费用","Key名称","耗时(ms)","成功"].join(","));for(const r of e){const i=new Date(r.timestamp),l=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")} ${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`,d=((a=this.store.getApiKey(r.apiKeyId))==null?void 0:a.name)||r.apiKeyName||"";o.push([l,r.model,r.inputTokens,r.cacheReadTokens??"",r.outputTokens,r.totalTokens,t+this.store.getRecordCost(r).toFixed(4),d,r.requestTime,r.success?"是":"否"].map(n).join(","))}return"\uFEFF"+o.join(`
`)}}const we=`<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="iconTokenStats" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>
    <rect x="9.5" y="16" width="3" height="7" rx="0.8" fill="currentColor"/>
    <rect x="14.5" y="12" width="3" height="11" rx="0.8" fill="currentColor"/>
    <rect x="19.5" y="9" width="3" height="14" rx="0.8" fill="currentColor"/>
  </symbol>
</svg>`;class Ce extends M.Plugin{constructor(){super(...arguments),this.styleElement=null,this.syncHandler=null,this.mergeTimer=null,this.merging=!1,this.topBarItem=null,this.badgeEl=null,this.badgeTimer=null,this.lsHeartbeatTimer=null}async onload(){console.log("[TokenStats] Plugin loading..."),console.log(`[TokenStats] Frontend: ${M.getFrontend()}`),this.styleElement=document.createElement("style"),this.styleElement.id="siyuan-token-stats-style",this.styleElement.textContent=le,document.head.appendChild(this.styleElement),this.addIcons(we),this.store=new ue,await this.store.load(),this.tokenCounter=new ge,this.keyManager=new pe(this.store),this.interceptor=new ye(this.store,this.keyManager,this.tokenCounter),this.dashboard=new Se(this.store,this.keyManager),this.interceptor.setThresholdCallback((e,t)=>{this.store.getSettings().showNotifications&&M.showMessage(t,5e3,"error")}),this.interceptor.install(),this.topBarItem=this.addTopBar({icon:"iconTokenStats",title:"Token 用量统计",position:"right",callback:()=>{this.dashboard.show()}}),this.initTopBarBadge(),this.settingsPanel=new ve(this.store,this.keyManager),this.settingsPanel.onManualSync=()=>this.manualSync(),this.setting=this.settingsPanel.setting,this.addCommand({langKey:"showTokenStats",langText:"打开 Token 用量统计",hotkey:"",callback:()=>{this.dashboard.show()}}),this.syncHandler=e=>{const t=typeof(e==null?void 0:e.detail)=="string"?e.detail:JSON.stringify((e==null?void 0:e.detail)??"");console.log("[TokenStats] Sync event received, merging data...",t.substring(0,100)),setTimeout(()=>this.mergeFromRemote(),1e3)},this.eventBus.on("sync-end",this.syncHandler),setTimeout(()=>this.mergeFromRemote(),3e3),this.mergeTimer=window.setInterval(()=>this.mergeFromRemote(),6e4),console.log("[TokenStats] Plugin loaded successfully."),this.lsHeartbeatTimer=window.setInterval(()=>{this.store.saveToLocalStorage()},1e4)}onunload(){var e,t,s,n,o;console.log("[TokenStats] Plugin unloading..."),this.mergeTimer!==null&&(clearInterval(this.mergeTimer),this.mergeTimer=null),this.badgeTimer!==null&&(clearInterval(this.badgeTimer),this.badgeTimer=null),this.lsHeartbeatTimer!==null&&(clearInterval(this.lsHeartbeatTimer),this.lsHeartbeatTimer=null),this.syncHandler&&(this.eventBus.off("sync-end",this.syncHandler),this.syncHandler=null),(e=this.interceptor)==null||e.uninstall(),(t=this.store)==null||t.saveToLocalStorage(),(s=this.store)==null||s.saveSync(),(n=this.store)==null||n.save().catch(a=>console.error("[TokenStats] Save on unload failed:",a)),(o=this.styleElement)==null||o.remove(),this.styleElement=null,console.log("[TokenStats] Plugin unloaded.")}async mergeFromRemote(){this.store.getSettings().syncStatistics&&await this.doMerge()}async doMerge(){if(this.merging)return!1;this.merging=!0;try{const e=await this.store.mergeFromRemote();return e&&this.settingsPanel.refreshFromStore(),this.updateBadge(),this.checkThresholdsLive(),e}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}finally{this.merging=!1}}async manualSync(){return this.doMerge()}initTopBarBadge(){if(!this.topBarItem)return;const e=document.createElement("span");e.className="tks-topbar-badge",e.style.display="none",this.topBarItem.style.position="relative",this.topBarItem.appendChild(e),this.badgeEl=e,this.updateBadge(),this.badgeTimer=window.setInterval(()=>{this.updateBadge(),this.checkThresholdsLive()},3e3)}updateBadge(){const e=this.badgeEl;if(!e)return;const t=this.store.getSettings();if(!t.showTopBarBadge){e.style.display="none";return}if(t.globalCostLimit>0){const a=this.keyManager.getGlobalCostPercent(t),r=this.keyManager.getGlobalCostUsage(t),i=t.currency||"¥";let l,d="neutral";l=`${a.toFixed(0)}%`;const p=t.globalCostAlertThreshold>0?t.globalCostAlertThreshold:70;a>=90||this.keyManager.isGlobalCostExceeded(t)?d="danger":a>=p?d="warn":d="ok",e.textContent=l,e.className=`tks-topbar-badge tks-badge-${d}`,e.style.display="inline-block",e.title=`费用 ${i}${r.totalCost.toFixed(2)} / ${i}${t.globalCostLimit.toFixed(2)}`;return}const s=this.keyManager.getGlobalUsage(t);let n,o="neutral";if(t.globalQuotaLimit>0){const a=this.keyManager.getGlobalUsagePercent(t);n=`${Math.round(a)}%`;const r=t.globalAlertThreshold>0?t.globalAlertThreshold:70;a>=90||this.keyManager.isGlobalQuotaExceeded(t)?o="danger":a>=r?o="warn":o="ok"}else n=this.formatCompactTokens(s.totalTokens),o="neutral";e.textContent=n,e.className=`tks-topbar-badge tks-badge-${o}`,e.style.display="inline-block"}checkThresholdsLive(){this.store.getSettings().showNotifications&&this.keyManager.checkAllThresholds(t=>M.showMessage(t,5e3,"error"))}formatCompactTokens(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}}module.exports=Ce;

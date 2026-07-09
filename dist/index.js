"use strict";const M=require("siyuan"),he=`/* ═══════════════════════════════════════════\r
   Token Statistics Plugin - Styles\r
   使用 SiYuan CSS 变量，自动适配明暗主题\r
   ═══════════════════════════════════════════ */\r
\r
/* ─── 仪表盘 ─── */\r
.tks-dashboard {\r
  padding: 12px 16px;\r
}\r
\r
.tks-summary-cards {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\r
  gap: 8px;\r
  margin-bottom: 12px;\r
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
  gap: 8px;\r
  padding: 10px 12px;\r
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
.tks-card-sub {\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface);\r
  margin-top: 4px;\r
  font-weight: 400;\r
}\r
\r
.tks-dash-toolbar {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  margin-bottom: 10px;\r
}\r
\r
.tks-split-toggle {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface);\r
  cursor: pointer;\r
  user-select: none;\r
}\r
\r
.tks-split-toggle input {\r
  cursor: pointer;\r
}\r
\r
.tks-split-hint {\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface-light, #999);\r
  font-style: italic;\r
}\r
\r
.tks-disclaimer-banner {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 8px;\r
  margin-bottom: 14px;\r
  padding: 12px 16px;\r
  border-radius: 4px;\r
  background-color: #fff7ed;\r
  border: 2px solid #ea580c;\r
  color: #7c2d12;\r
  font-size: 13px;\r
  font-weight: 700;\r
  line-height: 1.6;\r
}\r
\r
.tks-disclaimer-icon {\r
  flex: 0 0 auto;\r
  line-height: 1.5;\r
}\r
\r
.tks-disclaimer-text {\r
  flex: 1 1 auto;\r
}\r
\r
.tks-disclaimer-close {\r
  flex: 0 0 auto;\r
  margin-left: 8px;\r
  border: 2px solid #c2410c;\r
  background: transparent;\r
  color: #c2410c;\r
  cursor: pointer;\r
  font-size: 12px;\r
  font-weight: 700;\r
  padding: 3px 10px;\r
  border-radius: 4px;\r
  white-space: nowrap;\r
}\r
\r
.tks-disclaimer-close:hover {\r
  background-color: #ea580c;\r
  color: #fff;\r
}\r
\r
/* ─── 区块 ─── */\r
.tks-section {\r
  margin-bottom: 14px;\r
}\r
\r
.tks-section-title {\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: var(--b3-theme-on-background);\r
  margin: 0 0 8px 0;\r
  padding-bottom: 4px;\r
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
  padding: 8px 10px;\r
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
  overflow: hidden;\r
  padding: 4px;\r
  background: var(--b3-theme-surface);\r
  border: 1px solid var(--b3-border-color);\r
  border-radius: 6px;\r
  box-sizing: border-box;\r
}\r
\r
.tks-trend-svg {\r
  display: block;\r
  width: 100%;\r
  height: 120px !important;\r
  max-height: 120px !important;\r
}\r
\r
.tks-trend-legend {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 6px;\r
  margin-top: 2px;\r
  font-size: 10px;\r
  line-height: 1.3;\r
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
  width: 10px;\r
  height: 10px;\r
  border-radius: 2px;\r
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
  margin-top: 2px;\r
  font-size: 9px;\r
  color: var(--b3-theme-on-surface);\r
  opacity: 0.55;\r
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
  padding-top: 8px;\r
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
  grid-template-columns: 1.2fr 90px 90px 70px 70px 70px 1.4fr 36px;\r
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
  grid-template-columns: 1.2fr 90px 90px 70px 70px 70px 1.4fr 36px;\r
  gap: 8px;\r
  align-items: center;\r
  padding: 4px 0;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface-light, #888);\r
  font-weight: 500;\r
}\r
.tks-pack-hd-total,\r
.tks-pack-hd-totalprice,\r
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
`,ge=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),me=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function se(b){const e=new TextEncoder().encode(b),t=e.length*8,s=e.length+1,n=Math.ceil((s+8)/64)*64,o=new Uint8Array(n);o.set(e),o[e.length]=128;const a=new DataView(o.buffer);a.setUint32(n-8,Math.floor(t/4294967296),!1),a.setUint32(n-4,t>>>0,!1);const r=me.slice(),i=new Uint32Array(64);for(let c=0;c<n;c+=64){for(let f=0;f<16;f++)i[f]=a.getUint32(c+f*4,!1);for(let f=16;f<64;f++){const T=i[f-15],k=i[f-2],x=(T>>>7|T<<25)^(T>>>18|T<<14)^T>>>3,y=(k>>>17|k<<15)^(k>>>19|k<<13)^k>>>10;i[f]=i[f-16]+x+i[f-7]+y|0}let l=r[0],u=r[1],d=r[2],m=r[3],g=r[4],p=r[5],h=r[6],v=r[7];for(let f=0;f<64;f++){const T=(g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7),k=g&p^~g&h,x=v+T+k+ge[f]+i[f]|0,y=(l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),S=l&u^l&d^u&d,L=y+S|0;v=h,h=p,p=g,g=m+x|0,m=d,d=u,u=l,l=x+L|0}r[0]=r[0]+l|0,r[1]=r[1]+u|0,r[2]=r[2]+d|0,r[3]=r[3]+m|0,r[4]=r[4]+g|0,r[5]=r[5]+p|0,r[6]=r[6]+h|0,r[7]=r[7]+v|0}return Array.from(r).map(c=>(c>>>0).toString(16).padStart(8,"0")).join("")}const J="data.json",oe="data.backup.json",ie="data/storage/siyuan-token-stats/data.json",le="data/storage/siyuan-token-stats/data.backup.json",ce="data/plugins/siyuan-token-stats/settings.json",W="siyuan-token-stats-data",re="1.3.0",V={matchByUrl:!0,interceptExternalAPIs:!0,blockOnQuotaExceeded:!1,quotaResetCycle:"monthly",abortStreamOnExceeded:!0,showNotifications:!0,showTopBarBadge:!0,maxRecords:5e3,globalQuotaLimit:0,globalAlertThreshold:0,globalQuotaResetCycle:"monthly",globalUsedTokensOffset:0,globalUsedInputTokensOffset:0,globalUsedOutputTokensOffset:0,globalCostLimit:0,globalCostAlertThreshold:0,globalCostResetCycle:"monthly",globalUsedCostOffset:0,customResetDays:30,trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily",debugLogging:!1,currency:"¥",recalcCostOnPriceChange:!0,syncStatistics:!0,showDisclaimer:!0,modelPrices:{},pricePacks:[]};class fe{constructor(e){this.loaded=!1,this.saveTimer=null,this.plugin=e,this.data={version:re,lastSavedAt:0,settingsUpdatedAt:0,keysUpdatedAt:0,deletedKeys:[],apiKeys:[],records:[],settings:{...V}}}sanitizeKey(e){const t={...e};return typeof t.keyFull=="string"&&t.keyFull.length>0&&(t.keyHash=se(t.keyFull),t.keyFull=""),t}async readSource(e,t=!1){try{const s=await fetch(`/api/file/getFile?path=${encodeURIComponent(e)}`);if(!s.ok)return null;const n=await s.text();if(!n)return null;const o=JSON.parse(n);if(!o||typeof o!="object")return null;const a=Array.isArray(o.apiKeys),r=Array.isArray(o.records),i=!!o.settings,c=!!o.lastSavedAt;if(t&&!a&&!r)return null;if(a||r||i||c)return o}catch{}return null}normalizeData(e,t){if(typeof e=="string")try{e=JSON.parse(e)}catch{return null}if(!e||typeof e!="object"||Array.isArray(e))return console.log(`[TokenStats] ${t} returned non-object:`,typeof e,e),null;if(!this.hasDataMarkers(e))return console.log(`[TokenStats] ${t} returned object without data markers:`,Object.keys(e)),null;const s={apiKeys:Array.isArray(e.apiKeys)?e.apiKeys.length:"none",records:Array.isArray(e.records)?e.records.length:"none",settings:!!e.settings,lastSavedAt:e.lastSavedAt||0};return console.log(`[TokenStats] ${t} read OK:`,s),e}async readOfficial(e){try{if(this.plugin&&typeof this.plugin.loadData=="function"){const t=await this.plugin.loadData(e),s=this.normalizeData(t,`loadData(${e})`);if(s)return s}}catch(t){console.warn("[TokenStats] readOfficial loadData failed:",t)}try{const t=`data/storage/siyuan-token-stats/${e}`,s=await fetch(`/api/file/getFile?path=${encodeURIComponent(t)}`);if(!s.ok)return console.log(`[TokenStats] readOfficial fetch fallback: HTTP ${s.status} for ${t}`),null;const n=await s.text();if(!n)return null;const o=JSON.parse(n);return this.normalizeData(o,`fetch(${e})`)}catch(t){console.warn("[TokenStats] readOfficial fetch fallback failed:",t)}return null}hasDataMarkers(e){return!e||typeof e!="object"?!1:Array.isArray(e.apiKeys)||Array.isArray(e.records)||!!e.settings||!!e.lastSavedAt}async isDestructiveWrite(e){if(e||this.data.apiKeys.length>0||this.data.records.length>0)return!1;const t=await this.readOfficial(J).catch(()=>null);if(!t)return!1;const s=Array.isArray(t.apiKeys)?t.apiKeys.length:0,n=Array.isArray(t.records)?t.records.length:0;return s>0||n>0}async load(){try{const e=await this.readOfficial(J),t=await this.readOfficial(oe),s=await this.readSource(ce,!0),n=[e,t,s].filter(Boolean);let o=null;try{const y=localStorage.getItem(W);if(y){const S=JSON.parse(y);this.hasDataMarkers(S)&&(o=S,console.log("[TokenStats] Found data in localStorage (fallback only)."))}}catch{}const a=[...n];if(o&&a.push(o),a.length===0){console.warn("[TokenStats] ⚠ No existing data in ANY source — starting fresh with empty defaults!",`primary(${J})=${!!e}, backup(${oe})=${!!t},legacy(${ce})=${!!s}, localStorage=${!!o}`),this.loaded=!0;return}const r=new Map,i=y=>{const S=r.get(y.id);if(!S){r.set(y.id,y);return}const L=S.keysUpdatedAt||0,w=y.keysUpdatedAt||0;(w>L||w===L&&!S.keyHash&&y.keyHash)&&r.set(y.id,y)};for(const y of a)for(const S of y.apiKeys||[])i(S);const c=Array.from(r.values()),l=new Set;for(const y of a)for(const S of y.deletedKeys||[])l.add(S);const u=new Map;for(const y of a)for(const S of y.records||[])u.has(S.id)||u.set(S.id,S);const d=Array.from(u.values()).sort((y,S)=>y.timestamp-S.timestamp),m=(()=>{var S;let y=5e3;for(const L of a){const w=(S=L.settings)==null?void 0:S.maxRecords;typeof w=="number"&&w>y&&(y=w)}return y})(),g=d.length>m?d.slice(-m):d;let p=a[0];for(const y of a)y.settingsUpdatedAt>p.settingsUpdatedAt&&(p=y);const h=p.settings||{},v={...V,...h};"autoDetectSiYuanAI"in h&&(v.matchByUrl=h.autoDetectSiYuanAI),!("globalCostResetCycle"in h)&&h.globalQuotaResetCycle&&(v.globalCostResetCycle=h.globalQuotaResetCycle);const f=c.map(y=>{const S={...y};return S.id==="siyuan-built-in"&&S.provider==="siyuan"&&(S.provider=S.baseUrl?S.baseUrl:"SiYuan AI"),S.usedTokensOffset===void 0&&(S.usedTokensOffset=0),S.usedInputTokensOffset===void 0&&(S.usedInputTokensOffset=0),S.usedOutputTokensOffset===void 0&&(S.usedOutputTokensOffset=0),Array.isArray(S.models)||(S.models=[]),this.sanitizeKey(S)}).filter(y=>!l.has(y.id)),T=Math.max(0,...a.map(y=>y.lastSavedAt||0)),k=Math.max(0,...a.map(y=>y.settingsUpdatedAt||0)),x=Math.max(0,...a.map(y=>y.keysUpdatedAt||0));this.data={version:re,lastSavedAt:T,settingsUpdatedAt:k,keysUpdatedAt:x,deletedKeys:Array.from(l),apiKeys:f,records:g,settings:v},console.log(`[TokenStats] Loaded (merged ${a.length} source(s), fileSources=${n.length}, localStorage=${!!o}): ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`),this.loaded=!0,this.saveToLocalStorage(),this.save().catch(y=>console.error("[TokenStats] Post-load save failed:",y))}catch(e){console.warn("[TokenStats] Failed to load data, starting fresh:",e),this.loaded=!0}}scheduleSave(e=500,t=!1){if(!this.loaded){console.warn("[TokenStats] scheduleSave ignored: data not loaded yet.");return}this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.save(t).catch(s=>console.error("[TokenStats] Save failed:",s))},e)}saveToLocalStorage(){if(this.loaded)try{localStorage.setItem(W,JSON.stringify(this.data))}catch{}}async putFileRaw(e,t){const s=new FormData;s.append("path",e),s.append("file",new Blob([JSON.stringify(t,null,2)],{type:"application/json"}));const n=await fetch("/api/file/putFile",{method:"POST",body:s});if(!n.ok)throw new Error(`putFile returned ${n.status}`)}async save(e=!1){if(!this.loaded){console.warn("[TokenStats] save() ignored: data not loaded yet.");return}if(await this.isDestructiveWrite(e)){console.warn("[TokenStats] save() skipped: in-memory data empty but existing file has data; not overwriting.");return}try{this.data.lastSavedAt=Date.now(),this.plugin&&typeof this.plugin.saveData=="function"?await this.plugin.saveData(J,this.data):await this.putFileRaw(ie,this.data);try{this.plugin&&typeof this.plugin.saveData=="function"?await this.plugin.saveData(oe,this.data):await this.putFileRaw(le,this.data)}catch{}try{localStorage.setItem(W,JSON.stringify(this.data))}catch{}}catch(t){console.error("[TokenStats] Failed to save data:",t);try{localStorage.setItem(W,JSON.stringify(this.data))}catch{}}}beaconPutFile(e,t){try{if(typeof navigator<"u"&&typeof navigator.sendBeacon=="function"){const s=new FormData;s.append("path",e),s.append("file",new Blob([t],{type:"application/json"})),navigator.sendBeacon("/api/file/putFile",s)}}catch{}}saveSync(){if(!this.loaded){console.warn("[TokenStats] saveSync() ignored: data not loaded yet.");return}const e=this.data.apiKeys.length>0||this.data.records.length>0||this.data.lastSavedAt>0;try{this.data.lastSavedAt=Date.now();const t=JSON.stringify(this.data,null,2);try{localStorage.setItem(W,t)}catch{}if(!e){console.log("[TokenStats] saveSync skipped file write: in-memory empty and never saved (protecting existing file).");return}this.beaconPutFile(ie,t),this.beaconPutFile(le,t),console.log("[TokenStats] Synchronous save completed (localStorage mirror + sendBeacon file flush).")}catch(t){console.error("[TokenStats] saveSync error:",t)}}async mergeFromRemote(){try{const e=await this.readOfficial(J);if(!e)return console.warn("[TokenStats] mergeFromRemote: 无法读取远程数据文件，合并跳过"),!1;const t=this.data,s=e.lastSavedAt||0,n=t.lastSavedAt||0,o=e.settingsUpdatedAt||0,a=e.keysUpdatedAt||0,r=t.settingsUpdatedAt||0,i=t.keysUpdatedAt||0,c=(e.records||[]).length,l=(t.records||[]).length,u=(e.apiKeys||[]).length,d=(t.apiKeys||[]).length;if(s===n&&o===r&&a===i&&c===l&&u===d&&s>0)return console.log("[TokenStats] Sync merge: data unchanged, skipping."),!1;console.log(`[TokenStats] Sync merge: local ls=${n} lset=${r} lkey=${i} lr=${l} lk=${d}, remote rs=${s} rset=${o} rkey=${a} rr=${c} rk=${u}`);const m=e.records||[],g=new Map;for(const $ of t.records)g.set($.id,$);for(const $ of m)g.has($.id)||g.set($.id,$);const p=Array.from(g.values()).sort(($,q)=>$.timestamp-q.timestamp),h=t.settings.maxRecords,v=p.length>h?p.slice(-h):p,f=e.apiKeys||[],T=new Map,k=i>=a,x=k?f:t.apiKeys,y=k?t.apiKeys:f;for(const $ of x)T.set($.id,$);for(const $ of y)T.set($.id,$);const S=e.deletedKeys||[],L=t.deletedKeys||[],w=Array.from(new Set([...L,...S])),A=Array.from(T.values()).filter($=>!w.includes($.id)).map($=>this.sanitizeKey($)),K=r>=o,E=K?{...V,...t.settings}:{...V,...e.settings},O=K?t.settings:e.settings;O&&!("globalCostResetCycle"in O)&&O.globalQuotaResetCycle&&(E.globalCostResetCycle=O.globalQuotaResetCycle);const U=Math.max(r,o),D=Math.max(i,a);return this.data={version:re,lastSavedAt:Math.max(n,s),settingsUpdatedAt:U,keysUpdatedAt:D,deletedKeys:w,apiKeys:A,records:v,settings:E},await this.save(),console.log(`[TokenStats] Sync merge complete: ${A.length} keys, ${v.length} records.`),!0}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}}getApiKeys(){return this.data.apiKeys}getApiKey(e){return this.data.apiKeys.find(t=>t.id===e)}addApiKey(e){this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys=this.data.deletedKeys.filter(t=>t!==e.id),this.data.apiKeys.push(this.sanitizeKey(e)),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}updateApiKey(e,t){const s=this.data.apiKeys.findIndex(n=>n.id===e);if(s>=0){const n={...this.data.apiKeys[s],...t};typeof t.keyFull=="string"&&t.keyFull.length>0&&(n.keyHash=se(t.keyFull),n.keyFull=""),this.data.apiKeys[s]=n,this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}}deleteApiKey(e){this.data.apiKeys=this.data.apiKeys.filter(t=>t.id!==e),this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys.includes(e)||this.data.deletedKeys.push(e),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}addRecord(e){const t=this.data.records,s=t.slice(-5);for(const o of s)if(o.apiKeyId===e.apiKeyId&&o.timestamp===e.timestamp&&o.totalTokens===e.totalTokens&&o.model===e.model){console.log("[TokenStats] Duplicate record skipped:",e.apiKeyName,e.model,e.totalTokens);return}this.data.settings.recalcCostOnPriceChange===!1&&(e.cost=this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens)),t.push(e);const n=this.data.settings.maxRecords;t.length>n&&(this.data.records=t.slice(-n)),this.scheduleSave()}getRecords(){return this.data.records}getRecentRecords(e=50){return[...this.data.records].sort((t,s)=>s.timestamp-t.timestamp).slice(0,e)}clearRecords(){this.data.records=[],this.scheduleSave(0,!0)}clearAll(){this.data.records=[],this.data.apiKeys=[],this.data.deletedKeys=[],this.scheduleSave(0,!0)}getSettings(){return this.data.settings}updateSettings(e){this.data.settings={...this.data.settings,...e},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave()}resetSettings(){this.data.settings={...V},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave(0,!0)}getCurrency(){return this.data.settings.currency||"¥"}normalizeModelKey(e){return(e||"").toLowerCase().trim().replace(/[\s\-_]+/g,"")}getModelPrice(e){const t=this.normalizeModelKey(e);if(!t)return null;const s=this.data.settings.modelPrices||{};if(s[t])return s[t];const n=this.findPackForModel(t);if(n){if(n.totalPrice&&n.totalPrice>0&&n.totalTokens>0){const a=n.totalPrice/n.totalTokens*1e3;return{input:a,output:a,cacheRead:a}}return{input:n.input,output:n.output,...n.cacheRead?{cacheRead:n.cacheRead}:{}}}return null}findPackForModel(e){const t=this.data.settings.pricePacks||[];for(const s of t)if(Array.isArray(s.models)&&s.models.some(n=>this.normalizeModelKey(n)===e))return s;return null}hasAnyPrice(){return Object.keys(this.data.settings.modelPrices||{}).length>0?!0:(this.data.settings.pricePacks||[]).length>0}calcCost(e,t,s,n){const o=this.getModelPrice(e);if(!o)return 0;const a=t/1e3*o.input,r=s/1e3*o.output;let i=a+r;return o.cacheRead&&n&&n>0&&(i+=n/1e3*o.cacheRead),i}formatCost(e){return`${this.getCurrency()}${e.toFixed(4)}`}getRecordCost(e){return this.data.settings.recalcCostOnPriceChange!==!1?this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens):typeof e.cost=="number"?e.cost:this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens)}getPackUsage(e){const t=new Set((e.models||[]).map(n=>this.normalizeModelKey(n)));if(t.size===0)return{usedTokens:0};let s=0;for(const n of this.data.records)t.has(this.normalizeModelKey(n.model))&&(s+=(n.inputTokens||0)+(n.outputTokens||0));return{usedTokens:s}}getTotalCostInPeriod(e,t){let s=0;for(const n of e)n.timestamp>=t&&(s+=this.getRecordCost(n));return s}exportAll(){const e=JSON.parse(JSON.stringify(this.data));if(Array.isArray(e.apiKeys))for(const t of e.apiKeys)t&&"keyFull"in t&&delete t.keyFull;return JSON.stringify(e,null,2)}exportRecords(){return JSON.stringify(this.data.records,null,2)}}function ee(b){if(!b)return"";try{const e=new URL(b,window.location.href);return e.pathname+e.search}catch{return b}}function de(b,e){return e?b===e?!0:b.startsWith(e)&&(b[e.length]==="/"||b[e.length]==="?"):!1}class ke{constructor(e){this.store=e,this.alertedKeys=new Set,this.exceededAlertedKeys=new Set,this.alertedGlobal=!1,this.exceededAlertedGlobal=!1,this.alertedCostGlobal=!1,this.exceededAlertedCostGlobal=!1}getAllKeys(){return this.store.getApiKeys()}findByKey(e){if(!e)return;const t=se(e);return this.store.getApiKeys().find(s=>s.enabled&&s.keyHash&&s.keyHash===t)}findByUrl(e){const t=ee(e);if(t)return this.store.getApiKeys().find(s=>{if(!s.enabled||!s.baseUrl)return!1;const n=ee(s.baseUrl);return n?de(t,n):!1})}findByUrlAndModel(e,t){if(!e)return;const s=this.store.getApiKeys().filter(n=>{if(!n.enabled||!n.baseUrl)return!1;const o=ee(n.baseUrl),a=ee(e);return o&&a?de(a,o):!1});if(s.length!==0){if(t){const n=String(t).toLowerCase().trim();for(const o of s)if(Array.isArray(o.models)&&o.models.find(a=>String(a).toLowerCase().trim()===n))return o}return s[0]}}findByModel(e){if(!e)return;const t=String(e).toLowerCase().trim();return this.store.getApiKeys().find(s=>s.enabled?(s.models||[]).map(o=>String(o).toLowerCase().trim()).includes(t):!1)}getResetBoundary(e,t=30){if(e==="none")return 0;const s=new Date;if(e==="daily")return new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime();if(e==="custom"){const n=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime(),o=Math.max(1,Math.floor(t)||30);return n-(o-1)*864e5}return new Date(s.getFullYear(),s.getMonth(),1).getTime()}getKeyUsage(e){const t=this.store.getSettings(),s=this.getResetBoundary(t.quotaResetCycle,t.customResetDays),n=this.store.getApiKey(e),o=this.store.getRecords().filter(c=>c.apiKeyId===e&&c.timestamp>=s),a=(n==null?void 0:n.usedTokensOffset)??0,r=(n==null?void 0:n.usedInputTokensOffset)??0,i=(n==null?void 0:n.usedOutputTokensOffset)??0;return{totalTokens:o.reduce((c,l)=>c+l.totalTokens,0)+a,totalInputTokens:o.reduce((c,l)=>c+l.inputTokens,0)+r,totalOutputTokens:o.reduce((c,l)=>c+l.outputTokens,0)+i,totalRequests:o.length}}getRemainingQuota(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return-1;const s=this.getKeyUsage(e);return Math.max(0,t.quotaLimit-s.totalTokens)}getUsagePercent(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return 0;const s=this.getKeyUsage(e);return Math.min(100,s.totalTokens/t.quotaLimit*100)}isQuotaExceeded(e){const t=this.store.getApiKey(e);return!t||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens>=t.quotaLimit}wouldExceedQuota(e,t){const s=this.store.getApiKey(e);return!s||s.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens+t>s.quotaLimit}isThresholdReached(e){const t=this.store.getApiKey(e);return!t||t.alertThreshold<=0||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens/t.quotaLimit*100>=t.alertThreshold}checkThreshold(e,t){const s=this.store.getApiKey(e);if(s){if(this.alertedKeys.has(e)&&!this.isThresholdReached(e)&&this.alertedKeys.delete(e),this.isThresholdReached(e)&&!this.alertedKeys.has(e)){this.alertedKeys.add(e);const n=this.getKeyUsage(e),o=(n.totalTokens/s.quotaLimit*100).toFixed(1),a=`⚠️ Token 用量提醒：${s.name} 已使用 ${o}%（${n.totalTokens.toLocaleString()} / ${s.quotaLimit.toLocaleString()} tokens）`;t(a)}if(this.isQuotaExceeded(e)){if(!this.exceededAlertedKeys.has(e)){this.exceededAlertedKeys.add(e);const n=`⛔ Token 限额已用尽：${s.name}（限额 ${s.quotaLimit.toLocaleString()} tokens）`;t(n)}}else this.exceededAlertedKeys.delete(e)}}resetAlert(e){this.alertedKeys.delete(e),this.exceededAlertedKeys.delete(e)}clearAllAlerts(){this.alertedKeys.clear(),this.alertedGlobal=!1,this.alertedCostGlobal=!1,this.exceededAlertedKeys.clear(),this.exceededAlertedGlobal=!1,this.exceededAlertedCostGlobal=!1}generateKeyId(){return`key-${Date.now()}-${Math.random().toString(36).substring(2,8)}`}maskKey(e){return e?e.length<=8?e.substring(0,2)+"***":e.substring(0,5)+"..."+e.substring(e.length-4):"(空)"}getDefaultBaseUrl(e){return{openai:"https://api.openai.com/v1/chat/completions",anthropic:"https://api.anthropic.com/v1/messages",deepseek:"https://api.deepseek.com/v1/chat/completions"}[e.toLowerCase()]||""}getGlobalUsage(e){const t=this.getResetBoundary(e.globalQuotaResetCycle,e.customResetDays),s=this.store.getRecords().filter(n=>n.timestamp>=t);return{totalTokens:s.reduce((n,o)=>n+o.totalTokens,0)+(e.globalUsedTokensOffset??0),totalInputTokens:s.reduce((n,o)=>n+o.inputTokens,0)+(e.globalUsedInputTokensOffset??0),totalOutputTokens:s.reduce((n,o)=>n+o.outputTokens,0)+(e.globalUsedOutputTokensOffset??0),totalRequests:s.length}}getGlobalRemainingQuota(e){if(e.globalQuotaLimit<=0)return-1;const t=this.getGlobalUsage(e);return Math.max(0,e.globalQuotaLimit-t.totalTokens)}getGlobalUsagePercent(e){if(e.globalQuotaLimit<=0)return 0;const t=this.getGlobalUsage(e);return Math.min(100,t.totalTokens/e.globalQuotaLimit*100)}isGlobalQuotaExceeded(e){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens>=e.globalQuotaLimit}wouldExceedGlobalQuota(e,t){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens+t>e.globalQuotaLimit}isGlobalThresholdReached(e){return e.globalAlertThreshold<=0||e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens/e.globalQuotaLimit*100>=e.globalAlertThreshold}checkGlobalThreshold(e,t){if(!(e.globalQuotaLimit<=0)){if(this.alertedGlobal&&!this.isGlobalThresholdReached(e)&&(this.alertedGlobal=!1),this.isGlobalThresholdReached(e)&&!this.alertedGlobal){this.alertedGlobal=!0;const s=this.getGlobalUsage(e),o=`⚠️ 全局 Token 用量提醒：已使用 ${(s.totalTokens/e.globalQuotaLimit*100).toFixed(1)}%（${s.totalTokens.toLocaleString()} / ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(o)}if(this.isGlobalQuotaExceeded(e)){if(!this.exceededAlertedGlobal){this.exceededAlertedGlobal=!0;const s=`⛔ 全局 Token 限额已用尽（限额 ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(s)}}else this.exceededAlertedGlobal=!1}}resetGlobalAlert(){this.alertedGlobal=!1,this.exceededAlertedGlobal=!1}getGlobalCostUsage(e){const t=this.getResetBoundary(e.globalCostResetCycle,e.customResetDays),s=this.store.getRecords().filter(o=>o.timestamp>=t);let n=0;for(const o of s)n+=this.store.getRecordCost(o);return n+=e.globalUsedCostOffset??0,{totalCost:n,totalRequests:s.length}}getGlobalRemainingCost(e){if(e.globalCostLimit<=0)return-1;const t=this.getGlobalCostUsage(e);return Math.max(0,e.globalCostLimit-t.totalCost)}getGlobalCostPercent(e){if(e.globalCostLimit<=0)return 0;const t=this.getGlobalCostUsage(e);return Math.min(100,t.totalCost/e.globalCostLimit*100)}isGlobalCostExceeded(e){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost>=e.globalCostLimit}wouldExceedGlobalCostQuota(e,t){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost+t>e.globalCostLimit}isGlobalCostThresholdReached(e){return e.globalCostAlertThreshold<=0||e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost/e.globalCostLimit*100>=e.globalCostAlertThreshold}checkGlobalCostThreshold(e,t){if(!(e.globalCostLimit<=0)){if(this.alertedCostGlobal&&!this.isGlobalCostThresholdReached(e)&&(this.alertedCostGlobal=!1),this.isGlobalCostThresholdReached(e)&&!this.alertedCostGlobal){this.alertedCostGlobal=!0;const s=this.getGlobalCostUsage(e),n=(s.totalCost/e.globalCostLimit*100).toFixed(1),o=e.currency||"¥",a=`⚠️ 全局费用提醒：已使用 ${n}%（${o}${s.totalCost.toFixed(2)} / ${o}${e.globalCostLimit.toFixed(2)}）`;t(a)}if(this.isGlobalCostExceeded(e)){if(!this.exceededAlertedCostGlobal){this.exceededAlertedCostGlobal=!0;const n=`⛔ 全局费用限额已用尽（限额 ${e.currency||"¥"}${e.globalCostLimit.toFixed(2)}）`;t(n)}}else this.exceededAlertedCostGlobal=!1}}resetGlobalCostAlert(){this.alertedCostGlobal=!1,this.exceededAlertedCostGlobal=!1}checkAllThresholds(e){const t=this.store.getSettings();for(const s of this.store.getApiKeys())s.enabled&&this.checkThreshold(s.id,e);this.checkGlobalThreshold(t,e),this.checkGlobalCostThreshold(t,e)}}class be{estimate(e){if(!e)return 0;const t=(e.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g)||[]).length,s=(e.match(/[\u3000-\u303f\uff00-\uffef]/g)||[]).length,n=(e.match(/[a-zA-Z]+/g)||[]).length,o=n*4,a=Math.max(0,e.length-t-s-o),r=Math.ceil(t*1+s*.5+n*1.3+a*.25);return Math.max(0,r)}estimateFromMessages(e){var s,n;if(!Array.isArray(e))return 0;let t=0;for(const o of e){if(typeof o=="string")t+=this.estimate(o)+4;else if(o!=null&&o.content){if(typeof o.content=="string")t+=this.estimate(o.content)+4;else if(Array.isArray(o.content)){for(const a of o.content)typeof a=="string"?t+=this.estimate(a):a!=null&&a.text&&(t+=this.estimate(a.text));t+=4}}if(Array.isArray(o.tool_calls)){for(const a of o.tool_calls)(s=a==null?void 0:a.function)!=null&&s.name&&(t+=this.estimate(a.function.name)+1),typeof((n=a==null?void 0:a.function)==null?void 0:n.arguments)=="string"&&(t+=this.estimate(a.function.arguments));t+=4}o!=null&&o.role&&(t+=1)}return t}estimateFromText(e){return this.estimate(e)}}function ue(b,e){if(!b)return null;if(b instanceof Headers)return b.get(e);if(Array.isArray(b)){for(const[n,o]of b)if(n.toLowerCase()===e.toLowerCase())return o;return null}const t=b,s=e.toLowerCase();for(const n of Object.keys(t))if(n.toLowerCase()===s)return t[n];return null}function ye(b){return typeof b=="string"?b:b instanceof URL?b.href:b.url}function xe(){return`rec-${Date.now()}-${Math.random().toString(36).substring(2,9)}`}function te(b){return b&&String(b).trim()||""}function pe(b){return!b||b==="unknown"||b==="siyuan-ai"||b==="default"}function X(b){if(!b)return!0;const e=b.trim();return!!(/^\d{14,}-[a-z0-9]+$/i.test(e)||/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)||/^\d+$/.test(e)||e.length>40&&!/[._-]/.test(e))}function _(...b){for(const e of b){const t=te(e);if(t&&!pe(t)&&!X(t))return t}return""}function ve(b){return/\/api\/ai\/agent\/chat\b/i.test(b)||/\/api\/ai\/chatGPT\b/i.test(b)||/\/api\/ai\/chatGPTWithAction\b/i.test(b)}function Te(b){return typeof b=="object"&&b!==null&&"code"in b&&"msg"in b&&"data"in b&&!("choices"in b)&&!("usage"in b)}function Se(){return{apiKeyId:"siyuan-ai-default",apiKeyName:"思源智能体",source:"siyuan-ai",provider:"SiYuan AI",model:"unknown"}}class we{constructor(e,t,s){this.installed=!1,this.onThresholdAlert=()=>{},this.siyuanConfigCache=null,this.originalFetch=window.fetch.bind(window),this.store=e,this.keyManager=t,this.tokenCounter=s}setThresholdCallback(e){this.onThresholdAlert=e}keyMatchesModel(e,t){if(!e||!t)return!1;const s=String(t).toLowerCase().trim();return(e.models||[]).map(o=>String(o).toLowerCase().trim()).includes(s)}install(){if(this.installed){console.warn("[TokenStats] Interceptor already installed.");return}this.installed=!0;const e=this;window.fetch=async function(t,s){const n=ye(t),o=e.store.getSettings(),a=await e.extractBodyText(t,s),r=e.tryParseJson(a),i=await e.identifyAiCall(n,s,o,r);if(!i)return e.originalFetch(t,s);e.logDebug(`Intercepted AI call: source=${i.source}, model=${i.model}, key=${i.apiKeyName}`),e.logDebug("Request body",{bodyText:a==null?void 0:a.slice(0,500),parsedBody:r});const c=Date.now();if(o.blockOnQuotaExceeded&&o.globalQuotaLimit>0){const m=e.tokenCounter.estimateFromMessages(e.extractMessages(r));if(e.keyManager.isGlobalQuotaExceeded(o)){const g="[TokenStats] 已阻止请求：全局 Token 限额已用尽";return console.warn(g),e.onThresholdAlert("global",g),e.createBlockedResponse(g,i)}if(e.keyManager.wouldExceedGlobalQuota(o,m)){const p=`[TokenStats] 已阻止请求：全局剩余配额 ${e.keyManager.getGlobalRemainingQuota(o).toLocaleString()} tokens，预估输入 ${m.toLocaleString()} tokens 将超限`;return console.warn(p),e.onThresholdAlert("global",p),e.createBlockedResponse(p,i)}}if(o.blockOnQuotaExceeded&&o.globalCostLimit>0){const m=e.tokenCounter.estimateFromMessages(e.extractMessages(r)),g=e.store.calcCost(i.model,m,m),p=o.currency||"¥";if(e.keyManager.isGlobalCostExceeded(o)){const h=`[TokenStats] 已阻止请求：全局费用限额已用尽（${p}${o.globalCostLimit.toFixed(2)}）`;return console.warn(h),e.onThresholdAlert("global-cost",h),e.createBlockedResponse(h,i)}if(g>0&&e.keyManager.wouldExceedGlobalCostQuota(o,g)){const h=e.keyManager.getGlobalRemainingCost(o),v=`[TokenStats] 已阻止请求：全局费用剩余 ${p}${h.toFixed(2)}，预估本次费用 ${p}${g.toFixed(2)} 将超限`;return console.warn(v),e.onThresholdAlert("global-cost",v),e.createBlockedResponse(v,i)}}if(o.blockOnQuotaExceeded){if(e.keyManager.isQuotaExceeded(i.apiKeyId)){const g=e.store.getApiKey(i.apiKeyId),p=`[TokenStats] 已阻止请求：${(g==null?void 0:g.name)||i.apiKeyName} 的 Token 限额已用尽`;return console.warn(p),e.onThresholdAlert(i.apiKeyId,p),e.createBlockedResponse(p,i)}const m=e.tokenCounter.estimateFromMessages(e.extractMessages(r));if(e.keyManager.wouldExceedQuota(i.apiKeyId,m)){const g=e.store.getApiKey(i.apiKeyId),p=e.keyManager.getRemainingQuota(i.apiKeyId),h=`[TokenStats] 已阻止请求：${(g==null?void 0:g.name)||i.apiKeyName} 剩余配额 ${p.toLocaleString()} tokens，预估输入 ${m.toLocaleString()} tokens 将超限`;return console.warn(h),e.onThresholdAlert(i.apiKeyId,h),e.createBlockedResponse(h,i)}}let l,u=!1;try{l=await e.originalFetch(t,s),u=l.ok}catch(m){throw e.recordCall(i,0,0,c,!1,i.model,void 0,!0),m}const d=l.clone();return e.analyzeResponse(d,i,c,r,u).catch(m=>console.warn("[TokenStats] Response analysis failed:",m)),l},console.log("[TokenStats] Fetch interceptor installed.")}createBlockedResponse(e,t){const s=JSON.stringify({error:{type:"quota_exceeded",code:"token_stats_blocked",message:e,apiKeyId:t.apiKeyId,apiKeyName:t.apiKeyName}});return new Response(s,{status:429,statusText:"Too Many Requests",headers:{"Content-Type":"application/json","X-TokenStats-Blocked":"true"}})}uninstall(){this.installed&&(window.fetch=this.originalFetch,this.installed=!1,console.log("[TokenStats] Fetch interceptor uninstalled."))}async extractBodyText(e,t){if(t!=null&&t.body&&typeof t.body=="string")return t.body;if((t==null?void 0:t.body)instanceof URLSearchParams)return t.body.toString();if((t==null?void 0:t.body)instanceof FormData)try{const s={};return t.body.forEach((n,o)=>{s[o]=typeof n=="string"?n:n.name}),JSON.stringify(s)}catch{return null}if((t==null?void 0:t.body)instanceof Blob)try{return await t.body.text()}catch{return null}if(t!=null&&t.body&&(t.body instanceof ArrayBuffer||ArrayBuffer.isView(t.body)))try{return new TextDecoder().decode(t.body)}catch{return null}if(e instanceof Request)try{return await e.clone().text()}catch{return null}return null}tryParseJson(e){if(!e)return null;try{return JSON.parse(e)}catch{return null}}isDebugEnabled(){return this.store.getSettings().debugLogging??!1}logDebug(...e){this.isDebugEnabled()&&console.log("[TokenStats]",...e)}async identifyAiCall(e,t,s,n){const o=e.toLowerCase();if(ve(e)){const c=await this.getSiYuanAiConfig(),l=(n==null?void 0:n.model)||null,u=this.extractModel(n)||l||this.getSiYuanSelectedModelId(c);if(u){const m=this.findProviderByModel(c,u),g=m?m.baseURL:null;if(m&&m.apiKey){const h=this.keyManager.findByKey(m.apiKey);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||g||"siyuan-ai",provider:h.provider,model:this.resolveSiYuanModelForCall(n,c)}}const p=this.keyManager.findByModel(u);if(p&&p.enabled)return{apiKeyId:p.id,apiKeyName:p.name,source:p.baseUrl||g||"siyuan-ai",provider:p.provider,model:this.resolveSiYuanModelForCall(n,c)};if(g){const h=this.keyManager.findByUrlAndModel(g,u);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||g||"siyuan-ai",provider:h.provider,model:this.resolveSiYuanModelForCall(n,c)}}}if(c!=null&&c.providers){for(const m of c.providers)if(m!=null&&m.enabled){if(m.apiKey){const g=this.keyManager.findByKey(m.apiKey);if(g&&g.enabled)return{apiKeyId:g.id,apiKeyName:g.name,source:g.baseUrl||m.baseURL||"siyuan-ai",provider:g.provider,model:this.resolveModelByBlockId(l,c)||this.resolveModelNameFromProvider(m)||this.resolveSiYuanModelForCall(n,c)}}if(m.baseURL){const g=this.keyManager.findByUrl(m.baseURL);if(g&&g.enabled)return{apiKeyId:g.id,apiKeyName:g.name,source:g.baseUrl||m.baseURL||"siyuan-ai",provider:g.provider,model:this.resolveModelByBlockId(l,c)||this.resolveModelNameFromProvider(m)||this.resolveSiYuanModelForCall(n,c)}}if(Array.isArray(m.models))for(const g of m.models){const p=(g==null?void 0:g.id)||(g==null?void 0:g.name)||(g==null?void 0:g.displayName);if(!p)continue;const h=this.keyManager.findByModel(p);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||m.baseURL||"siyuan-ai",provider:h.provider,model:p}}}}const d=this.keyManager.findByUrl(e);return d&&d.enabled?{apiKeyId:d.id,apiKeyName:d.name,source:d.baseUrl||"siyuan-ai",provider:d.provider,model:this.resolveSiYuanModelForCall(n,c)}:{...Se(),model:this.resolveSiYuanModelForCall(n,c)}}if(s.matchByUrl){const c=this.keyManager.findByUrl(e),l=this.extractModel(n);let u=c;if(l&&c&&!this.keyMatchesModel(c,l)){const d=this.keyManager.findByModel(l);d&&d.enabled&&(u=d)}if(u&&u.enabled)return{apiKeyId:u.id,apiKeyName:u.name,source:u.baseUrl||"url-match",provider:u.provider,model:l||"unknown"}}if(!s.interceptExternalAPIs)return null;const r=this.extractModel(n);if(o.includes("/v1/chat/completions")||o.includes("/v1/completions")){const l=(ue(t==null?void 0:t.headers,"Authorization")||"").replace(/^bearer\s+/i,"").trim();let u=r?this.keyManager.findByModel(r):void 0;return(!u||!u.enabled)&&(u=l?this.keyManager.findByKey(l):void 0),(!u||!u.enabled)&&(u=this.keyManager.findByUrl(e)),{apiKeyId:(u==null?void 0:u.id)||"unknown",apiKeyName:(u==null?void 0:u.name)||this.keyManager.maskKey(l)||"Unknown",source:"external-openai",provider:(u==null?void 0:u.provider)||"OpenAI",model:r||"unknown"}}if(o.includes("/v1/messages")){const c=ue(t==null?void 0:t.headers,"x-api-key")||"";let l=r?this.keyManager.findByModel(r):void 0;return(!l||!l.enabled)&&(l=c?this.keyManager.findByKey(c):void 0),(!l||!l.enabled)&&(l=this.keyManager.findByUrl(e)),{apiKeyId:(l==null?void 0:l.id)||"unknown",apiKeyName:(l==null?void 0:l.name)||this.keyManager.maskKey(c)||"Unknown",source:"external-anthropic",provider:(l==null?void 0:l.provider)||"Anthropic",model:r||"unknown"}}let i=r?this.keyManager.findByModel(r):void 0;return(!i||!i.enabled)&&(i=this.keyManager.findByUrl(e)),i&&i.enabled?{apiKeyId:i.id,apiKeyName:i.name,source:i.baseUrl||"custom-url",provider:i.provider,model:r||"unknown"}:null}getSiYuanSelectedModelId(e){if(!e)return null;const t=e.agent||{},s=e.editing||{};return t.modelId||s.modelId||null}extractModel(e){return _(e==null?void 0:e.model)||null}resolveModelByBlockId(e,t){if(!t||!e)return null;const s=t.providers||[];for(const n of s){const o=(n.models||[]).find(a=>(a==null?void 0:a.id)===e);if(o)return o.name||o.displayName||null}return null}resolveSiYuanModelForCall(e,t){const s=e==null?void 0:e.model;if(s){const n=this.resolveModelByBlockId(s,t);if(n)return n}return _(this.extractModel(e))||this.resolveSiYuanModelNameFromConfig(t)||"unknown"}extractMessages(e){if(!e)return[];if(Array.isArray(e.messages))return e.messages;if(typeof e.messages=="string")return[e.messages];if(typeof e.messages=="object"&&e.messages!==null)return[e.messages];if(typeof e.prompt=="string")return[e.prompt];if(Array.isArray(e.contents))return e.contents;if(typeof e.content=="string")return[e.content];if(typeof e.text=="string")return[e.text];if(e.message!==void 0||e.references!==void 0){const t=[];if(Array.isArray(e.references))for(const s of e.references)typeof s=="string"?t.push({role:"system",content:s}):s!=null&&s.content?t.push({role:"system",content:typeof s.content=="string"?s.content:JSON.stringify(s.content)}):s!=null&&s.text&&t.push({role:"system",content:s.text});if(typeof e.message=="string"?t.push({role:"user",content:e.message}):typeof e.message=="object"&&e.message!==null&&t.push({role:"user",content:JSON.stringify(e.message)}),t.length>0)return t}if(typeof e.msg=="string")return[e.msg];if(typeof e.msg=="object"&&e.msg!==null)return[e.msg];if(e.context&&e.query)return[{role:"system",content:e.context},{role:"user",content:e.query}];if(typeof e.query=="string")return[e.query];if(e.input){if(Array.isArray(e.input))return e.input;if(Array.isArray(e.input.messages))return e.input.messages;if(typeof e.input.messages=="string")return[e.input.messages];if(typeof e.input.messages=="object"&&e.input.messages!==null)return[e.input.messages];if(typeof e.input.message=="string")return[e.input.message];if(typeof e.input.message=="object"&&e.input.message!==null)return[e.input.message];if(typeof e.input.text=="string")return[e.input.text];if(typeof e.input=="string")return[e.input]}if(e.data){if(Array.isArray(e.data.messages))return e.data.messages;if(typeof e.data.messages=="string")return[e.data.messages];if(typeof e.data.messages=="object"&&e.data.messages!==null)return[e.data.messages];if(typeof e.data.message=="string")return[e.data.message];if(typeof e.data.message=="object"&&e.data.message!==null)return[e.data.message];if(typeof e.data.prompt=="string")return[e.data.prompt];if(Array.isArray(e.data.contents))return e.data.contents;if(typeof e.data.content=="string")return[e.data.content];if(typeof e.data.text=="string")return[e.data.text]}return[]}async analyzeResponse(e,t,s,n,o=!0){let a=0,r=0,i,c=t.model,l=!0;const u=(e.headers.get("content-type")||"").toLowerCase(),d=this.store.getSettings();if(!c||pe(c)){const p=await this.resolveSiYuanModelNameIfNeeded(t.source);p&&(c=p)}const m=this.tokenCounter.estimateFromMessages(this.extractMessages(n));if(this.logDebug("analyzeResponse",{url:t.source,contentType:u,ok:e.ok,status:e.status,estimatedInput:m,bodyPreview:JSON.stringify(n).slice(0,200)}),!e.body){this.logDebug("analyzeResponse: response body is null, using input estimate only"),a=m,r=0,this.recordCall(t,a,r,s,o,c,void 0,!0);return}try{if(u.includes("text/event-stream")){const p=await this.parseSSEStream(e,t,d,m);a=p.inputTokens,r=p.outputTokens,i=p.cacheReadTokens,l=p.estimated,p.model&&(c=p.model),p.aborted&&(o=!1)}else if(u.includes("application/json")||u.includes("text/json")){const p=await e.text();this.logDebug("JSON response raw text preview:",p.slice(0,300));const h=this.tryParseJson(p);if(Te(h)&&typeof h.data!="string"){this.logDebug("Skipping SiYuan kernel non-AI response",{code:h.code,dataKeys:Object.keys(h.data||{})});return}const v=h?this.extractUsage(h):null;v&&(a=v.inputTokens,r=v.outputTokens,i=v.cacheReadTokens||void 0),h!=null&&h.model&&(c=_(h.model,c)||c),v||(a=m,r=this.tokenCounter.estimateFromText(h?this.extractOutputText(h):p)),l=!v}else if(u.includes("application/x-ndjson")||u.includes("application/ndjson")){const p=await this.parseNDJSONStream(e,t,d,m);a=p.inputTokens,r=p.outputTokens,i=p.cacheReadTokens,l=p.estimated,p.model&&(c=p.model),p.aborted&&(o=!1)}else if(u.includes("text/plain")||u.includes("text/html")||u.includes("application/xml")||u.includes("text/xml")){const p=await e.text();a=m,r=this.tokenCounter.estimateFromText(p)}else{const p=await e.text();this.logDebug("Unknown content type, raw response preview:",p.slice(0,300)),a=m;const h=this.tryParseJson(p);if(h){const v=this.extractUsage(h);v?(a=v.inputTokens,r=v.outputTokens,i=v.cacheReadTokens||void 0):r=this.tokenCounter.estimateFromText(this.extractOutputText(h))}else r=this.tokenCounter.estimateFromText(p)}}catch(p){console.warn("[TokenStats] Token extraction failed, using estimates:",p),a=m;try{const h=await e.text();r=this.tokenCounter.estimateFromText(h)}catch{r=0}}o&&a===0&&m>0&&(a=m),this.logDebug("analyzeResponse result:",{inputTokens:a,outputTokens:r,model:c,success:o});const g=a+r;this.recordCall(t,a,r,s,o,c,i,l),g>0&&d.showNotifications&&(this.keyManager.checkThreshold(t.apiKeyId,p=>{this.onThresholdAlert(t.apiKeyId,p)}),this.keyManager.checkGlobalThreshold(d,p=>{this.onThresholdAlert("global",p)}))}async parseSSEStream(e,t,s,n=0){var m;const o=(m=e.body)==null?void 0:m.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1,estimated:!0};const a=new TextDecoder;let r="";const i={fullContent:"",usage:null,model:void 0};let c=0,l=!1;const u=g=>{const p=g.split(`
`),h=[];let v="";for(const T of p){const k=T.trim();k&&(k.startsWith("data:")?h.push(k.slice(5).trimStart()):k.startsWith("event:")&&(v=k.slice(6).trim()))}if(h.length===0)return;const f=h.join(`
`);if(this.logDebug("SSE raw event",{eventType:v,data:f.slice(0,500)}),f!=="[DONE]")try{const T=JSON.parse(f);if(this.logDebug("SSE parsed chunk",{eventType:v,chunk:T}),typeof T!="object"||T===null)return;const k=this.collectChunkInfo(T,i.usage,i.model,i.fullContent,v),x=i.fullContent.length;i.usage=k.usage,i.model=k.model,i.fullContent=k.fullContent,this.logDebug("SSE collected after chunk",{eventType:v,contentAdded:i.fullContent.length-x,fullContentLength:i.fullContent.length,usage:i.usage})}catch(T){this.logDebug("SSE chunk JSON parse failed",{eventType:v,data:f.slice(0,300),error:String(T)})}};try{for(;;){const{done:g,value:p}=await o.read();if(g)break;r+=a.decode(p,{stream:!0}),this.logDebug("SSE buffer received",{bufferLength:r.length,decodedLength:(p==null?void 0:p.length)??0});const{events:h,remainder:v}=this.splitSSEEvents(r);r=v,this.logDebug("SSE events split",{eventCount:h.length,remainderLength:v.length});for(const f of h)u(f);if(s.abortStreamOnExceeded&&s.blockOnQuotaExceeded){if(c=i.usage?i.usage.outputTokens:this.tokenCounter.estimateFromText(i.fullContent),this.keyManager.wouldExceedQuota(t.apiKeyId,c)){l=!0;const f=this.store.getApiKey(t.apiKeyId),T=`[TokenStats] 流式响应已中断：${(f==null?void 0:f.name)||t.apiKeyName} 的 Token 限额在生成过程中被超出`;console.warn(T),this.onThresholdAlert(t.apiKeyId,T);try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(s,c)){l=!0;const f="[TokenStats] 流式响应已中断：全局 Token 限额在生成过程中被超出";console.warn(f),this.onThresholdAlert("global",f);try{await o.cancel()}catch{}break}}}if(r.trim().length>0){const{events:g}=this.splitSSEEvents(r+`

`);for(const p of g)u(p)}}finally{o.releaseLock()}if(this.logDebug("parseSSEStream finished",{contentLength:i.fullContent.length,hasUsage:!!i.usage,usage:i.usage,estimatedInput:n}),i.usage){const g=this.tokenCounter.estimateFromText(i.fullContent);return{inputTokens:i.usage.inputTokens||n,outputTokens:i.usage.outputTokens||g,cacheReadTokens:i.usage.cacheReadTokens||void 0,model:i.model,aborted:l,estimated:!1}}const d=this.tokenCounter.estimateFromText(i.fullContent);return{inputTokens:n,outputTokens:d,model:i.model,aborted:l,estimated:!0}}splitSSEEvents(e){const t=[],n=e.replace(/\r\n/g,`
`).split(`

`),o=n.pop()||"";for(const a of n)a.trim()&&t.push(a);return{events:t,remainder:o}}collectChunkInfo(e,t,s,n,o=""){var c,l,u,d,m,g,p,h,v,f,T,k,x,y,S,L,w,A,K,E,O,U,D,$,q,F,z,j,G,Q,H,B,Y,Z;const a=(...C)=>{const P=_(...C);if(P)return P;const ne=te(s);return ne&&!X(ne)?ne:""};if(e.model&&(s=a(e.model,s)),o==="content"||o==="reasoning")return e.token&&(n+=e.token,this.logDebug("SiYuan agent content appended",{token:e.token})),{usage:t,model:s,fullContent:n};if(o==="thinking")return e.reasoning&&(n+=e.reasoning,this.logDebug("SiYuan agent thinking appended",{reasoning:e.reasoning})),{usage:t,model:s,fullContent:n};if(o==="usage"){const C=e.promptTokens??e.prompt_tokens??0,P=e.completionTokens??e.completion_tokens??0;return this.logDebug("SiYuan agent usage event",{promptTokens:C,completionTokens:P,chunk:e}),(C>0||P>0)&&(t={inputTokens:C,outputTokens:P,cacheReadTokens:e.cacheReadTokens??e.cachedInputTokens??0}),{usage:t,model:s,fullContent:n}}if(o==="done"||o==="error"||o==="retry"||o==="snapshot"||o==="tool_call"||o==="tool_result"||o==="confirm"||o==="question"||o==="frontend_tool_call")return{usage:t,model:s,fullContent:n};if(e.usage){const C=e.usage,P=C.cached_input_tokens??C.cache_read_input_tokens??((c=C.prompt_tokens_details)==null?void 0:c.cached_tokens)??0;t={inputTokens:C.prompt_tokens??C.input_tokens??C.promptTokens??0,outputTokens:C.completion_tokens??C.output_tokens??C.completionTokens??0,cacheReadTokens:P}}const r=C=>{typeof C=="string"&&(n+=C)},i=(l=e.choices)==null?void 0:l[0];if((u=i==null?void 0:i.delta)!=null&&u.content&&r(i.delta.content),i!=null&&i.text&&r(i.text),(d=i==null?void 0:i.delta)!=null&&d.reasoning_content&&r(i.delta.reasoning_content),(m=i==null?void 0:i.message)!=null&&m.content&&r(i.message.content),i!=null&&i.content&&r(i.content),(p=(g=i==null?void 0:i.delta)==null?void 0:g.function_call)!=null&&p.arguments&&r(i.delta.function_call.arguments),(h=i==null?void 0:i.delta)!=null&&h.tool_calls)for(const C of i.delta.tool_calls)(v=C==null?void 0:C.function)!=null&&v.arguments&&r(C.function.arguments);if(e.type==="content_block_delta"&&((f=e.delta)!=null&&f.text)&&r(e.delta.text),e.type==="content_block_delta"&&((T=e.delta)!=null&&T.reasoning)&&r(e.delta.reasoning),e.type==="content_block_start"&&((k=e.content_block)!=null&&k.text)&&r(e.content_block.text),(x=e.message)!=null&&x.usage){const C=e.message.usage,P=C.cache_read_input_tokens??0;t={inputTokens:C.input_tokens??0,outputTokens:C.output_tokens??0,cacheReadTokens:P}}if(e.content){if(typeof e.content=="string")r(e.content);else if(Array.isArray(e.content))for(const C of e.content)r(typeof C=="string"?C:C==null?void 0:C.text)}if(e.output&&r(e.output),e.text&&r(e.text),e.result&&r(e.result),e.message&&(typeof e.message=="string"?r(e.message):e.message.content&&r(e.message.content)),(w=(L=(S=(y=e.data)==null?void 0:y.choices)==null?void 0:S[0])==null?void 0:L.delta)!=null&&w.content&&r(e.data.choices[0].delta.content),(E=(K=(A=e.data)==null?void 0:A.choices)==null?void 0:K[0])!=null&&E.text&&r(e.data.choices[0].text),($=(D=(U=(O=e.data)==null?void 0:O.choices)==null?void 0:U[0])==null?void 0:D.message)!=null&&$.content&&r(e.data.choices[0].message.content),(j=(z=(F=(q=e.data)==null?void 0:q.choices)==null?void 0:F[0])==null?void 0:z.delta)!=null&&j.reasoning_content&&r(e.data.choices[0].delta.reasoning_content),(G=e.data)!=null&&G.model&&(s=a(e.data.model,s)),(Q=e.data)!=null&&Q.usage){const C=e.data.usage;t={inputTokens:C.prompt_tokens??C.input_tokens??0,outputTokens:C.completion_tokens??C.output_tokens??0,cacheReadTokens:C.cached_input_tokens??C.cache_read_input_tokens??0}}if((H=e.data)!=null&&H.content){if(typeof e.data.content=="string")r(e.data.content);else if(Array.isArray(e.data.content))for(const C of e.data.content)r(typeof C=="string"?C:C==null?void 0:C.text)}return(B=e.data)!=null&&B.output&&r(e.data.output),(Y=e.data)!=null&&Y.text&&r(e.data.text),(Z=e.data)!=null&&Z.result&&r(e.data.result),{usage:t,model:s,fullContent:n}}async parseNDJSONStream(e,t,s,n=0){var d;const o=(d=e.body)==null?void 0:d.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1,estimated:!0};const a=new TextDecoder;let r="",i="",c=null,l,u=!1;try{for(;;){const{done:m,value:g}=await o.read();if(m)break;r+=a.decode(g,{stream:!0});const p=r.split(`
`);r=p.pop()||"";for(const h of p)if(h.trim())try{const v=JSON.parse(h),f=this.collectChunkInfo(v,c,l,i);c=f.usage,l=f.model,i=f.fullContent}catch{}if(s.abortStreamOnExceeded&&s.blockOnQuotaExceeded){const h=c?c.outputTokens:this.tokenCounter.estimateFromText(i);if(this.keyManager.wouldExceedQuota(t.apiKeyId,h)){u=!0;try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(s,h)){u=!0;try{await o.cancel()}catch{}break}}}if(r.trim())try{const m=JSON.parse(r.trim()),g=this.collectChunkInfo(m,c,l,i);c=g.usage,l=g.model,i=g.fullContent}catch{}}finally{o.releaseLock()}if(this.logDebug("parseNDJSONStream finished",{contentLength:i.length,hasUsage:!!c,usage:c,estimatedInput:n}),c){const m=this.tokenCounter.estimateFromText(i);return{inputTokens:c.inputTokens||n,outputTokens:c.outputTokens||m,cacheReadTokens:c.cacheReadTokens||void 0,model:l,aborted:u,estimated:!1}}return{inputTokens:n,outputTokens:this.tokenCounter.estimateFromText(i),model:l,aborted:u,estimated:!0}}extractUsage(e){var t;if(e!=null&&e.usage){const s=e.usage,n=s.prompt_tokens??s.input_tokens??s.promptTokens??0,o=s.completion_tokens??s.output_tokens??s.completionTokens??0,a=s.cached_input_tokens??s.cache_read_input_tokens??((t=s.prompt_tokens_details)==null?void 0:t.cached_tokens)??0;return n===0&&o===0&&a===0?null:{inputTokens:n,outputTokens:o,cacheReadTokens:a}}if((e==null?void 0:e.promptTokens)!==void 0||(e==null?void 0:e.completionTokens)!==void 0){const s=e.promptTokens??0,n=e.completionTokens??0,o=e.cacheReadTokens??e.cachedInputTokens??0;return s===0&&n===0?null:{inputTokens:s,outputTokens:n,cacheReadTokens:o}}return null}extractOutputText(e){var o,a,r,i,c,l,u;if(!e)return"";const t=[],s=d=>{typeof d=="string"&&d?t.push(d):d&&typeof d.text=="string"&&d.text&&t.push(d.text)},n=d=>{var m,g,p,h,v,f,T,k;if(d&&(s((m=d==null?void 0:d.message)==null?void 0:m.content),s((g=d==null?void 0:d.message)==null?void 0:g.reasoning_content),s((p=d==null?void 0:d.delta)==null?void 0:p.content),s((h=d==null?void 0:d.delta)==null?void 0:h.reasoning_content),s(d==null?void 0:d.text),s(d==null?void 0:d.content),(f=(v=d==null?void 0:d.delta)==null?void 0:v.function_call)!=null&&f.arguments&&s(d.delta.function_call.arguments),(T=d==null?void 0:d.delta)!=null&&T.tool_calls))for(const x of d.delta.tool_calls)(k=x==null?void 0:x.function)!=null&&k.arguments&&s(x.function.arguments)};if(e.choices)for(const d of e.choices)n(d);if(e.content){if(typeof e.content=="string")s(e.content);else if(Array.isArray(e.content))for(const d of e.content)s(d)}if(e.output&&s(e.output),e.text&&s(e.text),e.result&&s(e.result),e.message&&(typeof e.message=="string"?s(e.message):(s(e.message.content),s(e.message.text))),e.response&&(typeof e.response=="string"?s(e.response):e.response.text?s(e.response.text):e.response.content&&s(e.response.content)),e.data)if(typeof e.data=="string")s(e.data);else{if(s((o=e.data)==null?void 0:o.text),s((a=e.data)==null?void 0:a.output),s((r=e.data)==null?void 0:r.result),s((i=e.data)==null?void 0:i.msg),(c=e.data)!=null&&c.choices)for(const d of e.data.choices)n(d);if((l=e.data)!=null&&l.content)if(typeof e.data.content=="string")s(e.data.content);else if(Array.isArray(e.data.content))for(const d of e.data.content)s(d);else s(e.data.content);(u=e.data)!=null&&u.message&&(s(e.data.message.content),s(e.data.message.text))}return e.msg&&s(e.msg),e.token&&s(e.token),e.reasoning&&s(e.reasoning),t.join("")}recordCall(e,t,s,n,o,a,r,i=!0){const c=this.resolveModelName(a||e.model,e),l={id:xe(),apiKeyId:e.apiKeyId,apiKeyName:e.apiKeyName,source:e.source,model:c,inputTokens:t,outputTokens:s,cacheReadTokens:r,totalTokens:t+s,timestamp:n,requestTime:Date.now()-n,success:o,estimated:i};this.store.addRecord(l),this.logDebug(`Recorded: ${l.apiKeyName} | ${l.model} | in=${t} out=${s} cache=${r??0} total=${l.totalTokens} success=${o}`),o&&t===0&&s===0&&console.warn("[TokenStats] 本次请求 token 计数为 0。若持续出现，请在设置中开启“启用调试日志”，并在浏览器控制台中查看请求/响应详情。")}resolveModelName(e,t){var a;const s=[];s.push(e,t.model),this.isSiYuanAiSource(t.source)&&s.push(this.resolveSiYuanModelNameFromConfig((a=this.siyuanConfigCache)==null?void 0:a.config));const n=_(...s);return n||te(e)||te(t.model)||t.source||"unknown"}async resolveSiYuanModelNameIfNeeded(e){return this.isSiYuanAiSource(e)?this.getSiYuanModelName():null}isSiYuanAiSource(e){return e==="siyuan-ai"||e.includes("/api/ai/")}async getSiYuanAiConfig(){var e,t;if(this.siyuanConfigCache&&Date.now()-this.siyuanConfigCache.ts<5e3)return this.siyuanConfigCache.config;try{const s=window.siyuan,n=(e=s==null?void 0:s.config)==null?void 0:e.ai;if(n)return this.siyuanConfigCache={config:n,ts:Date.now()},n;const o=await this.originalFetch("/api/system/getConf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});if(!o.ok)return null;const a=await o.json(),r=((t=a==null?void 0:a.data)==null?void 0:t.ai)||(a==null?void 0:a.ai);if(r)return this.siyuanConfigCache={config:r,ts:Date.now()},r}catch{}return null}findProviderByModel(e,t){if(!e||!t)return null;const s=String(t).toLowerCase().trim();if(!s)return null;const n=e.providers||[];for(const o of n){if(!o||!o.enabled)continue;if((o.models||[]).find(r=>{const i=String((r==null?void 0:r.id)||"").toLowerCase().trim(),c=String((r==null?void 0:r.name)||"").toLowerCase().trim(),l=String((r==null?void 0:r.displayName)||"").toLowerCase().trim();return i===s||c===s||l===s}))return o}return null}resolveSiYuanModelNameFromConfig(e){var r,i;if(!e)return null;const t=e.agent||{},s=e.editing||{},n=t.modelId||s.modelId,o=t.modelName||t.displayName||t.name||s.modelName||s.displayName||s.name;if(o&&!X(o))return o;const a=e.providers||[];if(n)for(const c of a){if(!(c!=null&&c.enabled))continue;const l=(c.models||[]).find(u=>(u==null?void 0:u.id)===n);if(l)return l.displayName||l.name||l.id||null}for(const c of a){if(!(c!=null&&c.enabled))continue;const l=((r=c.models)==null?void 0:r.find(u=>u==null?void 0:u.default))||((i=c.models)==null?void 0:i[0]);if(l)return l.displayName||l.name||l.id||null;if(c.name&&!X(c.name))return c.name}return n&&!X(n)?n:null}resolveModelNameFromProvider(e){if(!(e!=null&&e.models)||!Array.isArray(e.models))return null;const t=e.models.find(s=>s==null?void 0:s.default)||e.models[0];return t&&_(t.displayName,t.name,t.id)||null}async getSiYuanModelName(){return this.resolveSiYuanModelNameFromConfig(await this.getSiYuanAiConfig())}}function R(b){return b?b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}class Ae{constructor(e,t){this.onManualSync=null,this.store=e,this.keyManager=t,this.setting=this.build()}build(){const e=this,t=new M.Setting({width:this.isMobile()?"92vw":"700px",height:"auto",confirmCallback:()=>{e.saveGlobalSettings(),M.showMessage("设置已保存",2e3,"info")}});setTimeout(()=>this.ensureDialogScrollable(),0);const s=this.store.getSettings();return t.addItem({title:"按 API Base URL 匹配 Key",description:"拦截请求时优先按 URL 匹配已配置的 API Key，适用于思源 AI、自定义代理等场景",createActionElement:()=>this.createCheckbox("matchByUrl",s.matchByUrl??!0)}),t.addItem({title:"拦截外部 API 调用",description:"拦截第三方插件对 OpenAI / Anthropic / DeepSeek 等外部 API 的直接调用",createActionElement:()=>this.createCheckbox("interceptExternalAPIs",s.interceptExternalAPIs)}),t.addItem({title:"超出限额时阻止请求",description:"当某个 API Key 的 Token 用量达到限额时，阻止后续请求（谨慎开启）",createActionElement:()=>this.createCheckbox("blockOnQuotaExceeded",s.blockOnQuotaExceeded)}),t.addItem({title:"限额重置周期",description:"按周期自动重置 Token 用量统计。每月 = 每月 1 日归零，每日 = 每天归零",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-quotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,s.quotaResetCycle===a.value&&(r.selected=!0),n.appendChild(r)}return n}}),t.addItem({title:"自定义周期天数（天）",description:"单 Key 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）。例如 14 = 每两周、90 = 每季。下方全局周期也共用此天数。",createActionElement:()=>this.createCustomDaysInput("tks-customResetDays")}),t.addItem({title:"流式响应中途超限时中断",description:"当流式 AI 响应生成过程中 Token 超出限额时，立即中断流（避免继续消耗）",createActionElement:()=>this.createCheckbox("abortStreamOnExceeded",s.abortStreamOnExceeded)}),t.addItem({title:"显示阈值提醒通知",description:"当 Token 用量达到设定的提醒阈值时，在思源底部弹出通知",createActionElement:()=>this.createCheckbox("showNotifications",s.showNotifications)}),t.addItem({title:"顶栏显示实时用量徽标",description:"在顶栏图标上显示当前全局用量（无全局限额时显示总 token 数，设有全局限额时显示百分比，颜色随阈值变化）",createActionElement:()=>this.createCheckbox("showTopBarBadge",s.showTopBarBadge)}),t.addItem({title:"启用调试日志",description:"在浏览器控制台输出请求/响应调试信息，排查 token 统计为 0 等问题（重启插件后生效）",createActionElement:()=>this.createCheckbox("debugLogging",s.debugLogging??!1)}),t.addItem({title:"最大记录数",description:"保留的最近调用记录数量，超出后自动裁剪旧记录（节省存储空间）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-max-records",n.value=String(s.maxRecords),n.min="100",n.max="50000",n.step="100",n}}),t.addItem({title:"全局总 Token 限额",description:"所有 API Key 的 Token 用量总和超过此值时触发拦截（0 = 不开启）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalQuotaLimit",n.value=String(s.globalQuotaLimit||0),n.min="0",n.step="1000",n}}),t.addItem({title:"全局提醒阈值 (%)",description:"全局 Token 用量达到此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalAlertThreshold",n.value=String(s.globalAlertThreshold||0),n.min="0",n.max="100",n.step="5",n}}),t.addItem({title:"全局限额重置周期",description:"按周期自动重置全局 Token 用量统计",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-globalQuotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,s.globalQuotaResetCycle===a.value&&(r.selected=!0),n.appendChild(r)}return n}}),t.addItem({title:"全局周期自定义天数（天）",description:"全局 Token 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方单 Key 周期共用同一天数",createActionElement:()=>this.createCustomDaysInput("tks-globalQuotaResetDays")}),t.addItem({title:"全局已用 Token 校准",description:"手动输入从第三方平台导入的历史已用 Token，叠加到全局统计中（0 = 不校准）",createActionElement:()=>{const n=document.createElement("div");n.style.display="flex",n.style.gap="8px",n.style.alignItems="center";const o=(a,r,i)=>{const c=document.createElement("div");c.style.flex="1";const l=document.createElement("div");l.style.fontSize="12px",l.style.color="var(--b3-theme-on-surface)",l.textContent=r;const u=document.createElement("input");return u.type="number",u.className="b3-text-field",u.id=`tks-${a}`,u.value=String(i||0),u.min="0",u.step="100",u.style.width="100%",c.appendChild(l),c.appendChild(u),c};return n.appendChild(o("globalUsedTokensOffset","总 Token",s.globalUsedTokensOffset)),n.appendChild(o("globalUsedInputTokensOffset","输入",s.globalUsedInputTokensOffset)),n.appendChild(o("globalUsedOutputTokensOffset","输出",s.globalUsedOutputTokensOffset)),n}}),t.addItem({title:"全局费用限额",description:"当前周期内所有 API 调用的估算总费用超过此金额时触发提醒与拦截（0 = 不开启；需先在「费用估算配置」中设置模型单价）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalCostLimit",n.value=String(s.globalCostLimit||0),n.min="0",n.step="1",n}}),t.addItem({title:"全局费用提醒阈值 (%)",description:"全局费用达到限额的此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalCostAlertThreshold",n.value=String(s.globalCostAlertThreshold||0),n.min="0",n.max="100",n.step="5",n}}),t.addItem({title:"全局费用重置周期",description:"按周期自动重置全局费用用量统计（独立于「全局限额重置周期」，可与 Token 限额采用不同节奏）",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-globalCostResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,s.globalCostResetCycle===a.value&&(r.selected=!0),n.appendChild(r)}return n}}),t.addItem({title:"全局费用周期自定义天数（天）",description:"全局费用限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方周期共用同一天数",createActionElement:()=>this.createCustomDaysInput("tks-globalCostResetDays")}),t.addItem({title:"全局已用费用校准",description:"手动输入从第三方平台导入的历史已花费金额，叠加到全局费用统计中（0 = 不校准；单位与货币类型一致）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalUsedCostOffset",n.value=String(s.globalUsedCostOffset||0),n.min="0",n.step="1",n}}),t.addItem({title:"费用估算配置",description:"设置每模型单价（每 1K tokens 的输入/输出价格）与资源包（一个包涵盖多个模型），仪表盘将显示估算费用",actionElement:this.createButton("配置",()=>this.openPriceEditor())}),t.addItem({title:"API Key 管理",description:"添加、编辑、删除 API Key，为每个 Key 设置限额与提醒阈值",actionElement:this.createButton("管理 API Key",()=>this.openKeyManager())}),t.addItem({title:"仪表盘区分精确/估算",description:"开启后，仪表盘「总 Tokens」卡片将拆分展示「精确值（来自 API 响应 usage 字段）」与「启发式估算」各自的 Token 量，便于评估统计可信度。仅 v1.4.19 及以后新增的记录可区分；旧版本记录无此标记，统一计入估算。",createActionElement:()=>this.createCheckbox("dashboardSplitExactEstimate",s.dashboardSplitExactEstimate??!1)}),t.addItem({title:"跨端统计合并",description:"开启后，各端（电脑 / 鸿蒙 / 浏览器）通过思源数据同步共享同一套 API Key 时，自动按记录合并多方 Token 用量，汇总到每一端；关闭则仅统计本端。",createActionElement:()=>this.createCheckbox("syncStatistics",s.syncStatistics??!0)}),t.addItem({title:"立即同步统计",description:"触发思源云同步（通过官方内核 API /api/sync/performSync）并合并其他端的统计记录（例如手机端一键拉取电脑端历史数据），不受上方开关限制。需先在思源「设置 - 关于 - 云端」中配置并启用云同步（已登录 S3/WebDAV 等存储服务）。若思源未配置云同步，则只合并本地已有数据。",actionElement:this.createButton("立即同步",()=>this.handleManualSync())}),t.addItem({title:"仪表盘免责提示",description:"本插件统计数据与各 API 供应商官方账单可能存在误差（原因包括：部分请求未被拦截、单价配置偏差、启发式估算精度限制、云同步合并延迟等），请以 API 供应商的统计及账单为准。开启时，仪表盘面板顶部会常驻显示橙色免责横幅；关闭后横幅不再显示。注意：仪表盘内的「本次不再提示」按钮仅隐藏当前会话（重启思源后自动恢复），而此处开关为永久关闭。",createActionElement:()=>{const n=this.createCheckbox("showDisclaimer",s.showDisclaimer??!0);return n.addEventListener("change",()=>{n.checked?this.store.updateSettings({showDisclaimer:!0}):M.confirm("关闭免责提示",`关闭后仪表盘将不再显示本免责提示。

本插件统计数据仅供参考，实际用量与费用请以各 API 供应商的官方账单为准。使用本插件即代表您认可统计结果可能存在误差。

是否确认关闭？`,()=>{this.store.updateSettings({showDisclaimer:!1})},()=>{n.checked=!0})}),n}}),t.addItem({title:"导出统计数据",description:"将所有统计数据导出为 JSON 文件",actionElement:this.createButton("导出",()=>this.exportData())}),t.addItem({title:"清除调用记录",description:"删除所有 Token 调用记录，但保留 API Key 配置",actionElement:this.createButton("清除记录",()=>this.clearRecords())}),t.addItem({title:"重置全部数据",description:"清除所有调用记录并恢复默认设置，API Key 配置保留不变",actionElement:this.createButton("重置",()=>this.resetAll())}),t}createCheckbox(e,t){const s=document.createElement("input");return s.type="checkbox",s.id=`tks-${e}`,s.className="b3-switch",s.checked=t,s}createButton(e,t){const s=document.createElement("button");return s.className="b3-button b3-button--outline",s.textContent=e,s.style.fontSize="14px",s.addEventListener("click",t),s}createCustomDaysInput(e){const t=document.createElement("input");t.type="number",t.className="b3-text-field fn__size200",t.id=e,t.value=String(this.store.getSettings().customResetDays||30),t.min="1",t.max="365",t.step="1";const s=["tks-customResetDays","tks-globalQuotaResetDays","tks-globalCostResetDays"];return t.addEventListener("input",()=>{const n=t.value;for(const o of s){if(o===e)continue;const a=document.getElementById(o);a&&a.value!==n&&(a.value=n)}}),t}async handleManualSync(){const e=document.activeElement;e&&(e.disabled=!0,e.textContent="同步中…");try{if(!this.onManualSync){M.showMessage("同步功能未就绪",2e3,"error");return}await this.onManualSync()}catch{M.showMessage("同步失败，请确认思源数据同步已开启",3e3,"error")}finally{e&&(e.disabled=!1,e.textContent="立即同步")}}saveGlobalSettings(){var f,T,k,x,y,S,L,w,A;const e=K=>{var E;return((E=document.getElementById(`tks-${K}`))==null?void 0:E.checked)??!1},t=parseInt(((f=document.getElementById("tks-max-records"))==null?void 0:f.value)||"5000",10),s=((T=document.getElementById("tks-quotaResetCycle"))==null?void 0:T.value)||"monthly",n=parseInt(((k=document.getElementById("tks-globalQuotaLimit"))==null?void 0:k.value)||"0",10)||0,o=parseInt(((x=document.getElementById("tks-globalAlertThreshold"))==null?void 0:x.value)||"0",10)||0,a=((y=document.getElementById("tks-globalQuotaResetCycle"))==null?void 0:y.value)||"monthly",r=K=>{var E;return parseInt(((E=document.getElementById(`tks-${K}`))==null?void 0:E.value)||"0",10)||0},i=Math.max(0,r("globalUsedTokensOffset")),c=Math.max(0,r("globalUsedInputTokensOffset")),l=Math.max(0,r("globalUsedOutputTokensOffset")),u=parseFloat(((S=document.getElementById("tks-globalCostLimit"))==null?void 0:S.value)||"0")||0,d=parseInt(((L=document.getElementById("tks-globalCostAlertThreshold"))==null?void 0:L.value)||"0",10)||0,m=((w=document.getElementById("tks-globalCostResetCycle"))==null?void 0:w.value)||"monthly",g=Math.max(0,parseFloat(((A=document.getElementById("tks-globalUsedCostOffset"))==null?void 0:A.value)||"0")||0),p=Math.max(1,r("customResetDays")),h=n!==this.store.getSettings().globalQuotaLimit||o!==this.store.getSettings().globalAlertThreshold;this.store.updateSettings({matchByUrl:e("matchByUrl"),interceptExternalAPIs:e("interceptExternalAPIs"),blockOnQuotaExceeded:e("blockOnQuotaExceeded"),quotaResetCycle:s,abortStreamOnExceeded:e("abortStreamOnExceeded"),showNotifications:e("showNotifications"),showTopBarBadge:e("showTopBarBadge"),debugLogging:e("debugLogging"),maxRecords:isNaN(t)?5e3:Math.max(100,Math.min(5e4,t)),globalQuotaLimit:Math.max(0,n),globalAlertThreshold:Math.max(0,Math.min(100,o)),globalQuotaResetCycle:a,globalUsedTokensOffset:i,globalUsedInputTokensOffset:c,globalUsedOutputTokensOffset:l,globalCostLimit:Math.max(0,u),globalCostAlertThreshold:Math.max(0,Math.min(100,d)),globalCostResetCycle:m,globalUsedCostOffset:g,customResetDays:p,syncStatistics:e("syncStatistics"),showDisclaimer:e("showDisclaimer"),dashboardSplitExactEstimate:e("dashboardSplitExactEstimate")}),h&&this.keyManager.resetGlobalAlert(),(u!==this.store.getSettings().globalCostLimit||d!==this.store.getSettings().globalCostAlertThreshold||m!==this.store.getSettings().globalCostResetCycle||g!==this.store.getSettings().globalUsedCostOffset)&&this.keyManager.resetGlobalCostAlert()}refreshFromStore(){var a;const e=this.store.getSettings(),t=document.activeElement,s=!!t&&((a=t.id)==null?void 0:a.startsWith("tks-")),n=(r,i)=>{if(s&&t.id===`tks-${r}`)return;const c=document.getElementById(`tks-${r}`);c&&(c.checked=!!i)},o=(r,i)=>{if(s&&t.id===`tks-${r}`)return;const c=document.getElementById(`tks-${r}`);c&&(c.value=String(i))};if(n("matchByUrl",e.matchByUrl??!0),n("interceptExternalAPIs",e.interceptExternalAPIs),n("blockOnQuotaExceeded",e.blockOnQuotaExceeded),n("abortStreamOnExceeded",e.abortStreamOnExceeded),n("showNotifications",e.showNotifications),n("showTopBarBadge",e.showTopBarBadge),n("debugLogging",e.debugLogging??!1),n("syncStatistics",e.syncStatistics??!0),n("showDisclaimer",e.showDisclaimer??!0),n("dashboardSplitExactEstimate",e.dashboardSplitExactEstimate??!1),o("max-records",e.maxRecords),o("globalQuotaLimit",e.globalQuotaLimit),o("globalAlertThreshold",e.globalAlertThreshold),o("globalUsedTokensOffset",e.globalUsedTokensOffset),o("globalUsedInputTokensOffset",e.globalUsedInputTokensOffset),o("globalUsedOutputTokensOffset",e.globalUsedOutputTokensOffset),o("globalCostLimit",e.globalCostLimit),o("globalCostAlertThreshold",e.globalCostAlertThreshold),o("globalUsedCostOffset",e.globalUsedCostOffset),o("customResetDays",e.customResetDays),o("globalQuotaResetDays",e.customResetDays),o("globalCostResetDays",e.customResetDays),!(s&&t.id==="tks-quotaResetCycle")){const r=document.getElementById("tks-quotaResetCycle");r&&(r.value=e.quotaResetCycle)}if(!(s&&t.id==="tks-globalQuotaResetCycle")){const r=document.getElementById("tks-globalQuotaResetCycle");r&&(r.value=e.globalQuotaResetCycle)}if(!(s&&t.id==="tks-globalCostResetCycle")){const r=document.getElementById("tks-globalCostResetCycle");r&&(r.value=e.globalCostResetCycle)}}ensureDialogScrollable(){const e=document.getElementById("tks-matchByUrl")||document.getElementById("tks-interceptExternalAPIs");if(!e)return;const t=e.closest(".b3-dialog");if(!t)return;const s=t.querySelector(".b3-dialog__body");s&&(t.style.maxHeight="85vh",s.style.maxHeight="calc(85vh - 120px)",s.style.overflowY="auto")}isMobile(){const e=M.getFrontend();return e==="mobile"||e==="browser-mobile"}openPriceEditor(){const e=this.store.getSettings(),t=this.isMobile(),s=new M.Dialog({title:"费用估算配置",width:t?"95vw":"640px",height:"auto",content:'<div id="tks-price-editor" class="tks-price-editor"></div>'});setTimeout(()=>this.renderPriceEditor(s,{...e.modelPrices},e.currency||"¥",(e.pricePacks||[]).map(n=>({...n,models:[...n.models]}))),50)}renderPriceEditor(e,t,s,n){var p,h,v,f,T;const o=e.element.querySelector("#tks-price-editor");if(!o)return;const a=this.store.getSettings().recalcCostOnPriceChange!==!1,r=(k,x,y,S)=>`
      <div class="tks-price-row">
        <input type="text" class="b3-text-field tks-price-model" value="${R(k)}" placeholder="模型名（如 gpt-4o）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-input" value="${R(String(x))}" placeholder="输入/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-cache" value="${R(String(S??0))}" placeholder="缓存命中/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-output" value="${R(String(y))}" placeholder="输出/1K" />
        <button class="b3-button b3-button--small b3-button--danger tks-price-del" title="删除">✕</button>
      </div>
    `,i=k=>{const x=this.store.getPackUsage(k),y=k.totalTokens||0;let S;if(y>0){const L=Math.max(0,y-x.usedTokens);S=`已用 ${x.usedTokens.toLocaleString()} / 总量 ${y.toLocaleString()}（剩余 ${L.toLocaleString()}）`}else S=`已用 ${x.usedTokens.toLocaleString()}（总量不限）`;return`
      <div class="tks-pack-row" data-pack-id="${R(k.id)}">
        <input type="text" class="b3-text-field tks-pack-name" value="${R(k.name)}" placeholder="资源包名（如 通义千问）" />
        <input type="number" step="1" min="0" class="b3-text-field tks-pack-total" value="${R(String(k.totalTokens||0))}" placeholder="总 Tokens（0 不限）" />
        <input type="number" step="0.01" min="0" class="b3-text-field tks-pack-totalprice" value="${R(String(k.totalPrice??""))}" placeholder="打包总价（¥）" title="填入后启用打包价模式：费用 = 已用 tokens / 总 tokens × 总价格，忽略下方逐项单价。留空或 0 则使用逐项单价模式。" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-input" value="${R(String(k.input))}" placeholder="输入单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-cache" value="${R(String(k.cacheRead??0))}" placeholder="缓存命中单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-output" value="${R(String(k.output))}" placeholder="输出单价/1K" />
        <input type="text" class="b3-text-field tks-pack-models" value="${R((k.models||[]).join(", "))}" placeholder="涵盖模型，逗号分隔" />
        <button class="b3-button b3-button--small b3-button--danger tks-pack-del" title="删除">✕</button>
        <div class="tks-pack-usage">${R(S)}</div>
      </div>
    `},c=Object.entries(t).map(([k,x])=>r(k,x.input,x.output,x.cacheRead)).join(""),l=n.map(k=>i(k)).join("");o.innerHTML=`
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
      <div class="tks-price-section-title">按模型单价（模型名不区分大小写，保存时自动归一化为小写）</div>
      <div class="tks-price-header">
        <span class="tks-price-hd-model">模型名称</span>
        <span class="tks-price-hd-input">输入/1K</span>
        <span class="tks-price-hd-cache">缓存命中/1K</span>
        <span class="tks-price-hd-output">输出/1K</span>
        <span></span>
      </div>
      <div class="tks-price-list" id="tks-price-list">${c||'<div class="tks-price-empty">尚未配置任何模型单价</div>'}</div>
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
        <span class="tks-pack-hd-output">输出/1K</span>
        <span class="tks-pack-hd-models">涵盖模型</span>
        <span></span>
      </div>
      <div class="tks-pack-list" id="tks-pack-list">${l||'<div class="tks-price-empty">尚未配置任何资源包</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-pack-add">+ 添加资源包</button>
        <span style="flex:1"></span>
        <button class="b3-button b3-button--text" id="tks-price-export">📤 导出配置</button>
        <button class="b3-button b3-button--text" id="tks-price-import">📥 导入配置</button>
        <button class="b3-button b3-button--outline" id="tks-price-save">保存</button>
      </div>
    `;const u=o.querySelector("#tks-price-list"),d=o.querySelector("#tks-pack-list"),m=k=>{var x;(x=k.querySelector(".tks-price-del"))==null||x.addEventListener("click",()=>{k.remove(),u.querySelectorAll(".tks-price-row").length===0&&(u.innerHTML='<div class="tks-price-empty">尚未配置任何模型单价</div>')})};u.querySelectorAll(".tks-price-row").forEach(k=>m(k)),(p=o.querySelector("#tks-price-add"))==null||p.addEventListener("click",()=>{const k=u.querySelector(".tks-price-empty");k&&k.remove(),u.insertAdjacentHTML("beforeend",r("",0,0,0)),m(u.lastElementChild)});const g=k=>{var x;(x=k.querySelector(".tks-pack-del"))==null||x.addEventListener("click",()=>{k.remove(),d.querySelectorAll(".tks-pack-row").length===0&&(d.innerHTML='<div class="tks-price-empty">尚未配置任何资源包</div>')})};d.querySelectorAll(".tks-pack-row").forEach(k=>g(k)),(h=o.querySelector("#tks-pack-add"))==null||h.addEventListener("click",()=>{const k=d.querySelector(".tks-price-empty");k&&k.remove();const x={id:`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,name:"",totalTokens:0,input:0,output:0,models:[]};d.insertAdjacentHTML("beforeend",i(x)),g(d.lastElementChild)}),(v=o.querySelector("#tks-price-save"))==null||v.addEventListener("click",()=>{var L,w;const k={};u.querySelectorAll(".tks-price-row").forEach(A=>{var D,$,q,F;const K=(((D=A.querySelector(".tks-price-model"))==null?void 0:D.value)||"").toLowerCase().trim().replace(/[\s\-_]+/g,""),E=parseFloat((($=A.querySelector(".tks-price-input"))==null?void 0:$.value)||"0")||0,O=parseFloat(((q=A.querySelector(".tks-price-cache"))==null?void 0:q.value)||"0")||0,U=parseFloat(((F=A.querySelector(".tks-price-output"))==null?void 0:F.value)||"0")||0;K&&(k[K]={input:E,output:U,...O>0?{cacheRead:O}:{}})});const x=[];d.querySelectorAll(".tks-pack-row").forEach(A=>{var z,j,G,Q,H,B,Y;const K=A.dataset.packId||`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,E=(((z=A.querySelector(".tks-pack-name"))==null?void 0:z.value)||"").trim(),O=parseInt(((j=A.querySelector(".tks-pack-total"))==null?void 0:j.value)||"0",10)||0,U=parseFloat(((G=A.querySelector(".tks-pack-totalprice"))==null?void 0:G.value)||"0")||0,D=parseFloat(((Q=A.querySelector(".tks-pack-input"))==null?void 0:Q.value)||"0")||0,$=parseFloat(((H=A.querySelector(".tks-pack-cache"))==null?void 0:H.value)||"0")||0,q=parseFloat(((B=A.querySelector(".tks-pack-output"))==null?void 0:B.value)||"0")||0,F=(((Y=A.querySelector(".tks-pack-models"))==null?void 0:Y.value)||"").split(/[,，]/).map(Z=>Z.toLowerCase().trim().replace(/[\s\-_]+/g,"")).filter(Boolean);(E||F.length>0)&&x.push({id:K,name:E,totalTokens:O,...U>0?{totalPrice:U}:{},input:D,output:q,...$>0?{cacheRead:$}:{},models:F})});const y=((L=o.querySelector("#tks-price-currency"))==null?void 0:L.value)||"¥",S=((w=o.querySelector("#tks-price-recalc"))==null?void 0:w.checked)??!0;this.store.updateSettings({currency:y,modelPrices:k,pricePacks:x,recalcCostOnPriceChange:S}),this.store.save(),e.destroy(),M.showMessage("费用配置已保存",2e3,"info")}),(f=o.querySelector("#tks-price-export"))==null||f.addEventListener("click",()=>this.exportPriceConfig()),(T=o.querySelector("#tks-price-import"))==null||T.addEventListener("click",()=>this.importPriceConfig(e))}exportPriceConfig(){const e=this.store.getSettings(),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),currency:e.currency||"¥",recalcCostOnPriceChange:e.recalcCostOnPriceChange!==!1,modelPrices:e.modelPrices||{},pricePacks:e.pricePacks||[]},null,2),s=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(s),o=document.createElement("a");o.href=n,o.download=`siyuan-token-stats-prices-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(n)},1e3),M.showMessage("费用配置已导出",2e3,"info")}importPriceConfig(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async s=>{var o;const n=(o=s.target.files)==null?void 0:o[0];if(n)try{const a=await n.text(),r=JSON.parse(a),i=r&&r.modelPrices&&typeof r.modelPrices=="object"?r.modelPrices:{},c=Array.isArray(r==null?void 0:r.pricePacks)?r.pricePacks:[],l=typeof(r==null?void 0:r.currency)=="string"?r.currency:this.store.getSettings().currency||"¥",u=typeof(r==null?void 0:r.recalcCostOnPriceChange)=="boolean"?r.recalcCostOnPriceChange:!0,d=c.map(m=>({...m,models:Array.isArray(m==null?void 0:m.models)?[...m.models]:[]}));this.renderPriceEditor(e,{...i},l,d),setTimeout(()=>{const m=e.element.querySelector("#tks-price-recalc");m&&(m.checked=u)},10),M.showMessage("已载入导入的费用配置，请检查后点击保存",2e3,"info")}catch(a){console.error("[TokenStats] Import price config failed:",a),M.showMessage("导入失败："+((a==null?void 0:a.message)||"文件格式不正确"),3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}openKeyManager(){const e=this.isMobile(),t=new M.Dialog({title:"API Key 管理",width:e?"95vw":"750px",height:e?"80vh":"500px",content:'<div id="tks-key-mgr" class="tks-key-mgr"></div>'});setTimeout(()=>this.renderKeyList(t),50)}renderKeyList(e){var o,a,r;const t=e.element.querySelector("#tks-key-mgr");if(!t)return;const s=this.store.getApiKeys();t.innerHTML=`
      <div class="tks-key-toolbar">
        <button class="b3-button b3-button--text" id="tks-add-key">+ 添加 API Key</button>
        <button class="b3-button b3-button--text" id="tks-export-keys">📤 导出</button>
        <button class="b3-button b3-button--text" id="tks-import-keys">📥 导入</button>
        <span class="tks-key-hint">共 ${s.length} 个 Key</span>
      </div>
      <div class="tks-key-list" id="tks-key-list-items"></div>
    `;const n=t.querySelector("#tks-key-list-items");for(const i of s){const c=this.keyManager.getKeyUsage(i.id),l=i.quotaLimit>0?Math.min(100,c.totalTokens/i.quotaLimit*100):0,u=document.createElement("div");u.className="tks-key-item",u.innerHTML=`
        <div class="tks-key-info">
          <div class="tks-key-name">
            ${this.providerIcon(i.provider)} ${R(i.name)}
            ${i.enabled?"":'<span class="tks-badge tks-badge-off">已禁用</span>'}
          </div>
          <div class="tks-key-detail">
            <span class="tks-key-masked">${R(i.keyMasked)}</span>
            ${i.provider?`<span class="tks-key-provider">${R(i.provider)}</span>`:""}
            ${i.baseUrl?`<span class="tks-key-url" title="${R(i.baseUrl)}">${R(i.baseUrl)}</span>`:""}
          </div>
          <div class="tks-key-quota">
            <div class="tks-quota-bar">
              <div class="tks-quota-fill ${l>=(i.alertThreshold||100)?"tks-quota-alert":""}"
                   style="width: ${l}%"></div>
            </div>
            <span class="tks-quota-text">
              ${c.totalTokens.toLocaleString()}${i.quotaLimit>0?" / "+i.quotaLimit.toLocaleString():""} tokens
              ${i.alertThreshold>0?`· 阈值 ${i.alertThreshold}%`:""}
            </span>
          </div>
        </div>
        <div class="tks-key-actions">
          <button class="b3-button b3-button--small" data-action="edit" data-id="${R(i.id)}">编辑</button>
          <button class="b3-button b3-button--small b3-button--danger" data-action="delete" data-id="${R(i.id)}">删除</button>
        </div>
      `,n.appendChild(u)}(o=t.querySelector("#tks-add-key"))==null||o.addEventListener("click",()=>{this.openKeyEditor(e,null)}),(a=t.querySelector("#tks-export-keys"))==null||a.addEventListener("click",()=>{this.exportKeys()}),(r=t.querySelector("#tks-import-keys"))==null||r.addEventListener("click",()=>{this.importKeys(e)}),t.querySelectorAll("[data-action]").forEach(i=>{i.addEventListener("click",c=>{const l=c.currentTarget,u=l.dataset.action,d=l.dataset.id;if(u==="edit"){const m=this.store.getApiKey(d);m&&this.openKeyEditor(e,m)}else u==="delete"&&M.confirm("删除 API Key","确定删除此 API Key 吗？相关统计记录将保留。",()=>{this.store.deleteApiKey(d),this.keyManager.resetAlert(d),this.renderKeyList(e),M.showMessage("已删除",2e3,"info")})})})}openKeyEditor(e,t){var r,i,c;const s=!!t,n=this.isMobile(),o=new M.Dialog({title:s?"编辑 API Key":"添加 API Key",width:n?"92vw":"500px",height:"auto",content:`
        <div class="tks-key-editor">
          <div class="tks-form-row">
            <label>名称</label>
            <input type="text" id="tke-name" class="b3-text-field" value="${R((t==null?void 0:t.name)||"")}" placeholder="例如：我的 OpenAI Key" />
          </div>
          <div class="tks-form-row">
            <label>API Key</label>
            <input type="password" id="tke-key" class="b3-text-field" value="" placeholder="sk-..." />
            <div class="tks-form-hint">用于匹配请求头中的 Authorization / x-api-key；编辑时留空则保留现有密钥，仅按 URL 匹配时可不填</div>
          </div>
          <div class="tks-form-row">
            <label>提供商名称</label>
            <input type="text" id="tke-provider" class="b3-text-field" value="${R((t==null?void 0:t.provider)||"")}" list="tke-provider-list" placeholder="例如：OpenAI、DeepSeek、华为云、SiYuan" />
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
            <input type="text" id="tke-url" class="b3-text-field" value="${R((t==null?void 0:t.baseUrl)||"")}" placeholder="例如：https://api.openai.com/v1/chat/completions，或 /api/ai/" />
            <div class="tks-form-hint">用于 URL 匹配。可填完整 URL、域名或路径（如 /api/ai/）。留空则仅按 Key 匹配。</div>
          </div>
          <div class="tks-form-row">
            <label>关联模型</label>
            <input type="text" id="tke-models" class="b3-text-field" value="${R(t!=null&&t.models?t.models.join(", "):"")}" placeholder="例如：Qwen/Qwen3-8B, sensenova-6.7-flash-lite" />
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
      `}),a=o.element;(r=a.querySelector("#tke-provider"))==null||r.addEventListener("input",l=>{const u=l.target.value.trim(),d=a.querySelector("#tke-url");!d.value&&u&&(d.value=this.keyManager.getDefaultBaseUrl(u))}),(i=a.querySelector("#tke-cancel"))==null||i.addEventListener("click",()=>o.destroy()),(c=a.querySelector("#tke-save"))==null||c.addEventListener("click",()=>{const l=a.querySelector("#tke-name").value.trim(),u=a.querySelector("#tke-key").value.trim(),d=a.querySelector("#tke-provider").value.trim(),m=a.querySelector("#tke-url").value.trim(),g=a.querySelector("#tke-models").value.split(/[,，]/).map(x=>x.trim()).filter(Boolean),p=parseInt(a.querySelector("#tke-quota").value,10)||0,h=parseInt(a.querySelector("#tke-threshold").value,10)||0,v=Math.max(0,parseInt(a.querySelector("#tke-usedTokensOffset").value,10)||0),f=Math.max(0,parseInt(a.querySelector("#tke-usedInputTokensOffset").value,10)||0),T=Math.max(0,parseInt(a.querySelector("#tke-usedOutputTokensOffset").value,10)||0),k=a.querySelector("#tke-enabled").value==="true";if(!l){M.showMessage("请输入名称",3e3,"error");return}if(s&&t){const x={name:l,provider:d,baseUrl:m,models:g,quotaLimit:p,alertThreshold:h,usedTokensOffset:v,usedInputTokensOffset:f,usedOutputTokensOffset:T,enabled:k};u&&(x.keyFull=u,x.keyMasked=this.keyManager.maskKey(u)),this.store.updateApiKey(t.id,x),this.keyManager.resetAlert(t.id)}else{const x={id:this.keyManager.generateKeyId(),name:l,keyFull:u,keyMasked:this.keyManager.maskKey(u),provider:d,baseUrl:m,models:g,quotaLimit:p,usedTokensOffset:v,usedInputTokensOffset:f,usedOutputTokensOffset:T,alertThreshold:h,enabled:k,createdAt:Date.now()};this.store.addApiKey(x)}this.store.save(),o.destroy(),this.renderKeyList(e),M.showMessage("已保存",2e3,"info")})}exportKeys(){const e=this.store.getApiKeys().map(a=>{const{keyFull:r,...i}=a;return i}),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),apiKeys:e},null,2),s=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(s),o=document.createElement("a");o.href=n,o.download=`siyuan-token-stats-keys-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(n)},1e3),M.showMessage(`已导出 ${e.length} 个 API Key`,2e3,"info")}importKeys(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async s=>{var o;const n=(o=s.target.files)==null?void 0:o[0];if(n)try{const a=await n.text(),r=JSON.parse(a),i=Array.isArray(r)?r:r.apiKeys;if(!Array.isArray(i))throw new Error("导入文件格式不正确，未找到 apiKeys 数组");let c=0,l=0;for(const d of i){if(!d||!d.keyFull&&!d.keyHash)continue;const m=Array.isArray(d.models)?d.models:typeof d.models=="string"?d.models.split(/[,，]/).map(h=>h.trim()).filter(Boolean):[],g=d.keyHash||(d.keyFull?se(d.keyFull):""),p=g?this.store.getApiKeys().find(h=>h.keyHash===g):void 0;if(p){const h={name:d.name||p.name,provider:d.provider||p.provider,baseUrl:d.baseUrl||p.baseUrl,models:m.length?m:p.models||[],quotaLimit:d.quotaLimit??p.quotaLimit,alertThreshold:d.alertThreshold??p.alertThreshold,enabled:d.enabled??p.enabled};d.keyFull&&(h.keyFull=d.keyFull,h.keyMasked=this.keyManager.maskKey(d.keyFull)),this.store.updateApiKey(p.id,h),l++}else this.store.addApiKey({id:this.keyManager.generateKeyId(),name:d.name||"Imported Key",keyFull:d.keyFull||"",keyHash:d.keyHash||"",keyMasked:d.keyMasked||this.keyManager.maskKey(d.keyFull||"Imported"),provider:d.provider||"",baseUrl:d.baseUrl||"",models:m,quotaLimit:d.quotaLimit||0,usedTokensOffset:d.usedTokensOffset||0,usedInputTokensOffset:d.usedInputTokensOffset||0,usedOutputTokensOffset:d.usedOutputTokensOffset||0,alertThreshold:d.alertThreshold||0,enabled:d.enabled!==!1,createdAt:Date.now()}),c++}this.store.save(),this.renderKeyList(e);const u=[];c>0&&u.push(`新增 ${c} 个`),l>0&&u.push(`更新 ${l} 个`),M.showMessage(`导入成功：${u.join("，")||"无变化"}`,2e3,"info")}catch(a){console.error("[TokenStats] Import keys failed:",a),M.showMessage("导入失败："+a.message,3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}providerIcon(e){const t=(e||"").toLowerCase();return{siyuan:"🐿️",openai:"🤖",anthropic:"🧠",deepseek:"🔍",siliconflow:"🌊",华为云:"☁️",huawei:"☁️"}[t]||"🔑"}exportData(){const e=this.store.exportAll(),t=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(s)},1e3),M.showMessage("数据已导出",2e3,"info")}clearRecords(){M.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。此操作不可撤销。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),M.showMessage("记录已清除",2e3,"info")})}resetAll(){M.confirm("重置全部数据","⚠️ 确定重置吗？所有调用记录将被清除，设置恢复默认值。API Key 配置保留不变，此操作不可撤销。",()=>{this.store.clearRecords(),this.store.resetSettings(),this.keyManager.clearAllAlerts(),M.showMessage("已重置",2e3,"info")})}}function I(b){return b?b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function ae(b){let e=0;for(let s=0;s<b.length;s++)e=e*31+b.charCodeAt(s)>>>0;return`hsl(${e%360}, 60%, 52%)`}function N(b){return`${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}-${String(b.getDate()).padStart(2,"0")}`}function Ce(b){const e=b.getDay(),t=(e===0?-6:1)-e,s=new Date(b);return s.setDate(b.getDate()+t),s.setHours(0,0,0,0),s}function Me(b){return new Date(b.getFullYear(),b.getMonth(),1)}class $e{constructor(e,t){this.dialog=null,this.summary=null,this.refreshTimer=null,this.disclaimerDismissed=!1,this.onManualSync=null,this.store=e,this.keyManager=t}show(){try{if(this.summary=this.computeSummary(),this.dialog&&this.dialog.element&&this.dialog.element.isConnected){this.refreshContent();return}this.dialog&&(this.dialog.destroy(),this.dialog=null);const e=this.isMobile();this.dialog=new M.Dialog({title:"📊 Token 用量统计",width:e?"95vw":"900px",content:this.renderHTML(this.summary),destroyCallback:()=>{this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null),this.dialog=null}}),this.bindEvents(),this.refreshTimer=setInterval(()=>{if(!this.dialog||!this.dialog.element||!this.dialog.element.isConnected){this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null);return}this.refreshContent()},3e3)}catch(e){console.error("[TokenStats] Dashboard show error:",e),M.showMessage("仪表盘打开失败: "+e.message,3e3,"error")}}refreshContent(){if(!this.dialog||!this.dialog.element)return;const e=this.dialog.element.querySelector(".b3-dialog__body");if(!e)return;const t=document.activeElement;if(t&&e.contains(t)&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"))return;const s=e.scrollTop;this.summary=this.computeSummary(),e.innerHTML=this.renderHTML(this.summary),this.bindEvents();const n=this.dialog.element.querySelector(".b3-dialog__body");n&&(n.scrollTop=s)}isMobile(){const e=M.getFrontend();return e==="mobile"||e==="browser-mobile"}computeSummary(){const e=this.store.getRecords(),t=this.store.getApiKeys(),s=this.store.getSettings(),n={totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalRequests:e.length,successRequests:0,failedRequests:0,averageRequestTime:0,totalCost:0,exactTokens:0,estimatedTokens:0,modelStats:{},dailyStats:[],keyStats:[]};let o=0;for(const a of e){n.totalTokens+=a.totalTokens,n.totalInputTokens+=a.inputTokens,n.totalOutputTokens+=a.outputTokens,n.totalCost+=this.store.getRecordCost(a),o+=a.requestTime,a.estimated===!1?n.exactTokens+=a.totalTokens:n.estimatedTokens+=a.totalTokens,a.success?n.successRequests++:n.failedRequests++;const r=a.model||"unknown",i=r.toLowerCase().trim();n.modelStats[i]||(n.modelStats[i]={model:r,count:0,tokens:0,inputTokens:0,outputTokens:0,cost:0}),n.modelStats[i].count++,n.modelStats[i].tokens+=a.totalTokens,n.modelStats[i].inputTokens+=a.inputTokens,n.modelStats[i].outputTokens+=a.outputTokens,n.modelStats[i].cost+=this.store.getRecordCost(a)}n.averageRequestTime=e.length>0?o/e.length:0,n.dailyStats=this.computeTrendStats(e,s);for(const a of t){const r=this.keyManager.getKeyUsage(a.id),i=a.quotaLimit>0?Math.min(100,r.totalTokens/a.quotaLimit*100):0;n.keyStats.push({apiKeyId:a.id,apiKeyName:a.name,totalTokens:r.totalTokens,totalInputTokens:r.totalInputTokens,totalOutputTokens:r.totalOutputTokens,totalRequests:r.totalRequests,quotaLimit:a.quotaLimit,alertThreshold:a.alertThreshold,usagePercent:i,isAlert:a.alertThreshold>0&&i>=a.alertThreshold,isExceeded:a.quotaLimit>0&&r.totalTokens>=a.quotaLimit})}return n.keyStats.sort((a,r)=>r.totalTokens-a.totalTokens),n}computeTrendStats(e,t){const{trendDateRangeStart:s,trendDateRangeEnd:n,trendAggregation:o}=t;let a=1/0,r=-1/0;for(const f of e)a=Math.min(a,f.timestamp),r=Math.max(r,f.timestamp);const i=e.length>0&&isFinite(a)&&isFinite(r),c=new Date;c.setHours(0,0,0,0);const l=i?new Date(a):new Date(c.getTime()-13*24*60*60*1e3),u=i?new Date(r):c,d=s||N(l),m=n||N(u),g=new Date(d+"T00:00:00"),p=new Date(m+"T23:59:59.999"),h={},v=(f,T,k,x,y)=>{h[f]||(h[f]={date:f,tokens:0,count:0,byModel:{},cost:0}),h[f].tokens+=T,h[f].count+=k,h[f].byModel[x]=(h[f].byModel[x]||0)+T,h[f].cost+=y};for(const f of e){if(f.timestamp<g.getTime()||f.timestamp>p.getTime())continue;const T=new Date(f.timestamp),k=(f.model||"unknown").toLowerCase().trim(),x=this.store.getRecordCost(f);if(o==="weekly"){const y=Ce(T);v(N(y),f.totalTokens,1,k,x)}else if(o==="monthly"){const y=Me(T);v(N(y),f.totalTokens,1,k,x)}else v(N(T),f.totalTokens,1,k,x)}return Object.values(h).sort((f,T)=>f.date.localeCompare(T.date))}renderHTML(e){const t=this.store.getRecentRecords(30),s=Math.max(...Object.values(e.modelStats).map(l=>l.tokens),1),n=this.store.getSettings(),o=this.keyManager.getGlobalUsagePercent(n),a=this.keyManager.getGlobalUsage(n),r=this.getMinRecordDate(),i=this.getMaxRecordDate(),c=`
      <div class="tks-trend-controls">
        <label>区间：</label>
        <input type="date" id="tks-trend-start" class="b3-text-field" value="${I(n.trendDateRangeStart||r||"")}" ${r?`min="${I(r)}" max="${I(i||"")}"`:""} />
        <span>~</span>
        <input type="date" id="tks-trend-end" class="b3-text-field" value="${I(n.trendDateRangeEnd||i||"")}" ${i?`min="${I(r||"")}" max="${I(i)}"`:""} />
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
        ${n.showDisclaimer!==!1&&!this.disclaimerDismissed?`
        <div class="tks-disclaimer-banner" id="tks-disclaimer">
          <span class="tks-disclaimer-icon">⚠️</span>
          <span class="tks-disclaimer-text">免责提示：本插件统计数据与 API 供应商官方账单可能存在误差，请以 API 供应商的统计及账单为准。使用本插件即代表您认可此误差。</span>
          <button class="tks-disclaimer-close" id="tks-disclaimer-close" title="本次会话不再显示（重启思源后自动恢复）；如需永久关闭，请到设置面板操作">本次不再提示</button>
        </div>`:""}
        <!-- 汇总卡片 -->
        <div class="tks-summary-cards">
          <div class="tks-card">
            <div class="tks-card-icon">🪙</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${e.totalTokens.toLocaleString()}</div>
              <div class="tks-card-label">总 Tokens</div>
              ${n.dashboardSplitExactEstimate?`<div class="tks-card-sub">精确 ${e.exactTokens.toLocaleString()} · 估算 ${e.estimatedTokens.toLocaleString()}</div>`:""}
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
            ${e.keyStats.map(l=>this.renderKeyStat(l)).join("")}
          </div>
        </div>

        <!-- Token 趋势 -->
        <div class="tks-section">
          <h3 class="tks-section-title">📈 Token 趋势</h3>
          ${c}
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
            ${Object.values(e.modelStats).sort((l,u)=>u.tokens-l.tokens).map(l=>this.renderModelBar(l,s)).join("")}
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
                ${t.map(l=>this.renderRecordRow(l)).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="tks-dashboard-actions">
          <button class="b3-button b3-button--outline" id="tks-refresh">🔄 刷新</button>
          <button class="b3-button b3-button--outline" id="tks-sync" title="触发思源云同步并合并其他端的统计记录（与设置「立即同步」功能相同）。需先在思源「设置 - 关于 - 云端」配置并启用云同步；若未配置则只合并本地已有数据。">☁️ 立即同步</button>
          <button class="b3-button b3-button--outline" id="tks-export-json">📥 导出 JSON</button>
          <button class="b3-button b3-button--outline" id="tks-export-csv">📊 导出 CSV</button>
          <button class="b3-button b3-button--outline b3-button--danger" id="tks-clear-records">🗑️ 清除记录</button>
        </div>
      </div>
    `}getMinRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=1/0;for(const s of e)t=Math.min(t,s.timestamp);return N(new Date(t))}getMaxRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=-1/0;for(const s of e)t=Math.max(t,s.timestamp);return N(new Date(t))}renderKeyStat(e){const t=e.quotaLimit>0?`${e.totalTokens.toLocaleString()} / ${e.quotaLimit.toLocaleString()}`:`${e.totalTokens.toLocaleString()} (不限)`,s=e.alertThreshold>0?` · 阈值 ${e.alertThreshold}%`:"",n=e.isExceeded?"⛔":e.isAlert?"⚠️":e.quotaLimit>0?"✅":"";return`
      <div class="tks-key-stat ${e.isAlert?"tks-key-stat-alert":""} ${e.isExceeded?"tks-key-stat-exceeded":""}">
        <div class="tks-key-stat-header">
          <span class="tks-key-stat-name">${n} ${I(e.apiKeyName)}</span>
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
    `}buildTrendSvg(e,t){const s=e.dailyStats,n=s.length;if(n===0)return"";const o=720,a=120,r=48,i=52,c=10,l=20,u=o-r-i,d=a-c-l,m=Math.max(...s.map(w=>w.tokens),1),g={};for(const w of s)for(const A of Object.keys(w.byModel))g[A]=(g[A]||0)+w.byModel[A];const p=Object.keys(g).sort((w,A)=>g[A]-g[w]),h=Math.max(...s.map(w=>w.cost),0),v=u/n,f=Math.min(26,v*.62),T=w=>r+v*(w+.5);let k="";for(let w=0;w<n;w++){const A=s[w],E=T(w)-f/2;let O=c+d;for(const U of p){const D=A.byModel[U]||0;if(D<=0)continue;const $=D/m*d;O-=$,k+=`<rect x="${E.toFixed(1)}" y="${O.toFixed(1)}" width="${f.toFixed(1)}" height="${Math.max(.5,$).toFixed(1)}" fill="${ae(U)}"><title>${I(U)}: ${D.toLocaleString()} tokens</title></rect>`}}let x="";if(h>0){x=`<polyline points="${s.map((A,K)=>`${T(K).toFixed(1)},${(c+(1-A.cost/h)*d).toFixed(1)}`).join(" ")}" fill="none" stroke="#e0556b" stroke-width="2" stroke-linejoin="round"/>`;for(let A=0;A<n;A++){const K=c+(1-s[A].cost/h)*d;x+=`<circle cx="${T(A).toFixed(1)}" cy="${K.toFixed(1)}" r="2.5" fill="#e0556b"><title>费用: ${I(this.store.formatCost(s[A].cost))}</title></circle>`}}let y="";for(let w=0;w<=2;w++){const A=c+d*w/2,K=Math.round(m*(1-w/2));if(y+=`<line x1="${r}" y1="${A.toFixed(1)}" x2="${r+u}" y2="${A.toFixed(1)}" stroke="#e3e3e3" stroke-width="1"/>`,y+=`<text x="${r-6}" y="${(A+3).toFixed(1)}" text-anchor="end" font-size="10" fill="#8a8a8a">${K>=1e3?(K/1e3).toFixed(K>=1e4?0:1)+"k":K}</text>`,h>0){const E=h*(1-w/2);y+=`<text x="${r+u+6}" y="${(A+3).toFixed(1)}" text-anchor="start" font-size="10" fill="#e0556b">${I(this.store.formatCost(E))}</text>`}}const S=Math.max(1,Math.ceil(n/16));let L="";for(let w=0;w<n;w++){if(w%S!==0&&w!==n-1)continue;const A=s[w];let K=A.date.substring(5);t==="monthly"?K=A.date.substring(0,7):t==="weekly"&&(K=`W${A.date.substring(5,7)}${A.date.substring(8,10)}`),L+=`<text x="${T(w).toFixed(1)}" y="${c+d+14}" text-anchor="middle" font-size="9" fill="#8a8a8a">${I(K)}</text>`}return`<svg class="tks-trend-svg" viewBox="0 0 ${o} ${a}" preserveAspectRatio="xMidYMin slice">${y}${k}${x}${L}</svg>`}buildTrendLegend(e){const t={};for(const a of e.dailyStats)for(const r of Object.keys(a.byModel))t[r]=(t[r]||0)+a.byModel[r];return`<div class="tks-trend-legend">${Object.keys(t).sort((a,r)=>t[r]-t[a]).map(a=>`<span class="tks-legend-item"><span class="tks-legend-swatch" style="background:${ae(a)}"></span>${I(a)}</span>`).join("")}<span class="tks-legend-item"><span class="tks-legend-line"></span>当日费用（右轴）</span></div>`}renderModelBar(e,t){const s=Math.max(1,e.tokens/t*100);return`
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${I(e.model)}">${I(e.model)}</div>
        <div class="tks-model-bar-track">
          <div class="tks-model-bar-fill" style="width: ${s}%; background: ${ae(e.model.toLowerCase().trim())}"></div>
        </div>
        <div class="tks-model-detail">
          ${e.tokens.toLocaleString()} tokens · ${e.count} 次${this.store.hasAnyPrice()?` · 💰 ${this.store.formatCost(e.cost)}`:""}
        </div>
      </div>
    `}renderRecordRow(e){return`
      <tr>
        <td>${new Date(e.timestamp).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}</td>
        <td title="${I(e.apiKeyName)}">${I(e.apiKeyName)}</td>
        <td>${I(e.source)}</td>
        <td>${I(e.model)}</td>
        <td>${e.inputTokens.toLocaleString()}</td>
        <td>${e.cacheReadTokens?e.cacheReadTokens.toLocaleString():"—"}</td>
        <td>${e.outputTokens.toLocaleString()}</td>
        <td><strong>${e.totalTokens.toLocaleString()}</strong></td>
        <td>${this.store.hasAnyPrice()?this.store.formatCost(this.store.getRecordCost(e)):"—"}</td>
        <td>${e.requestTime}ms</td>
        <td>${e.success?"✅":"❌"}</td>
      </tr>
    `}bindEvents(){var t,s,n,o,a,r,i,c;if(!this.dialog)return;const e=this.dialog.element;(t=e.querySelector("#tks-refresh"))==null||t.addEventListener("click",()=>{this.refreshContent()}),(s=e.querySelector("#tks-disclaimer-close"))==null||s.addEventListener("click",()=>{M.confirm("隐藏免责提示",`本插件统计数据与 API 供应商官方账单可能存在误差，请以 API 供应商的统计及账单为准。

点击「确认」仅本次会话隐藏（重启思源后将自动恢复显示）。
如需永久关闭此提示，请到「设置 - 仪表盘免责提示」中操作。`,()=>{this.disclaimerDismissed=!0,this.refreshContent()})}),(n=e.querySelector("#tks-sync"))==null||n.addEventListener("click",async l=>{const u=l.currentTarget;if(u.disabled)return;const d=u.textContent;u.disabled=!0,u.textContent="同步中…";try{if(!this.onManualSync){M.showMessage("同步功能未就绪",2e3,"error");return}await this.onManualSync(),this.refreshContent()}catch{M.showMessage("同步失败，请确认思源数据同步已开启",3e3,"error")}finally{u.disabled=!1,u.textContent=d}}),(o=e.querySelector("#tks-export-json"))==null||o.addEventListener("click",()=>{const l=this.store.exportAll();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,l,"application/json"),M.showMessage("数据已导出（JSON）",2e3,"info")}),(a=e.querySelector("#tks-export-csv"))==null||a.addEventListener("click",()=>{const l=this.buildRecordsCsv();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.csv`,l,"text/csv;charset=utf-8"),M.showMessage("数据已导出（CSV）",2e3,"info")}),(r=e.querySelector("#tks-clear-records"))==null||r.addEventListener("click",()=>{M.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),this.refreshContent(),M.showMessage("记录已清除",2e3,"info")})}),(i=e.querySelector("#tks-trend-apply"))==null||i.addEventListener("click",()=>{var m,g,p;const l=((m=e.querySelector("#tks-trend-start"))==null?void 0:m.value)||"",u=((g=e.querySelector("#tks-trend-end"))==null?void 0:g.value)||"",d=(p=e.querySelector("#tks-trend-aggregation"))==null?void 0:p.value;this.store.updateSettings({trendDateRangeStart:l,trendDateRangeEnd:u,trendAggregation:d}),this.store.save(),this.refreshContent()}),(c=e.querySelector("#tks-trend-reset"))==null||c.addEventListener("click",()=>{this.store.updateSettings({trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily"}),this.store.save(),this.refreshContent()})}downloadFile(e,t,s){const n=new Blob([t],{type:s}),o=URL.createObjectURL(n),a=document.createElement("a");a.href=o,a.download=e,a.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}buildRecordsCsv(){var a;const e=this.store.getRecords().slice().sort((r,i)=>r.timestamp-i.timestamp),t=this.store.getSettings().currency||"¥",s=this.summary,n=r=>{const i=String(r);return/[",\n]/.test(i)?`"${i.replace(/"/g,'""')}"`:i},o=[];s&&(o.push(`# 总Token,${s.totalTokens}`),o.push(`# 输入Token,${s.totalInputTokens}`),o.push(`# 输出Token,${s.totalOutputTokens}`),o.push(`# 请求数,${s.totalRequests}`),o.push(`# 总费用,${t}${s.totalCost.toFixed(4)}`)),o.push(`# 记录数,${e.length}`),o.push(["时间","模型","输入Token","缓存命中Token","输出Token","总计Token","费用","Key名称","耗时(ms)","成功"].join(","));for(const r of e){const i=new Date(r.timestamp),c=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")} ${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`,l=((a=this.store.getApiKey(r.apiKeyId))==null?void 0:a.name)||r.apiKeyName||"";o.push([c,r.model,r.inputTokens,r.cacheReadTokens??"",r.outputTokens,r.totalTokens,t+this.store.getRecordCost(r).toFixed(4),l,r.requestTime,r.success?"是":"否"].map(n).join(","))}return"\uFEFF"+o.join(`
`)}}const Ke=`<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="iconTokenStats" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>
    <rect x="9.5" y="16" width="3" height="7" rx="0.8" fill="currentColor"/>
    <rect x="14.5" y="12" width="3" height="11" rx="0.8" fill="currentColor"/>
    <rect x="19.5" y="9" width="3" height="14" rx="0.8" fill="currentColor"/>
  </symbol>
</svg>`;class Re extends M.Plugin{constructor(){super(...arguments),this.styleElement=null,this.syncHandler=null,this.mergeTimer=null,this.merging=!1,this.topBarItem=null,this.badgeEl=null,this.badgeTimer=null,this.lsHeartbeatTimer=null}async onload(){console.log("[TokenStats] Plugin loading..."),console.log(`[TokenStats] Frontend: ${M.getFrontend()}`),this.styleElement=document.createElement("style"),this.styleElement.id="siyuan-token-stats-style",this.styleElement.textContent=he,document.head.appendChild(this.styleElement),this.addIcons(Ke),this.store=new fe(this),await this.store.load(),this.tokenCounter=new be,this.keyManager=new ke(this.store),this.interceptor=new we(this.store,this.keyManager,this.tokenCounter),this.dashboard=new $e(this.store,this.keyManager),this.interceptor.setThresholdCallback((e,t)=>{this.store.getSettings().showNotifications&&M.showMessage(t,5e3,"info")}),this.interceptor.install(),this.topBarItem=this.addTopBar({icon:"iconTokenStats",title:"Token 用量统计",position:"right",callback:()=>{this.dashboard.show()}}),this.initTopBarBadge(),this.settingsPanel=new Ae(this.store,this.keyManager),this.settingsPanel.onManualSync=()=>this.manualSyncFull(),this.dashboard.onManualSync=()=>this.manualSyncFull(),this.setting=this.settingsPanel.setting,this.addCommand({langKey:"showTokenStats",langText:"打开 Token 用量统计",hotkey:"",callback:()=>{this.dashboard.show()}}),this.syncHandler=e=>{const t=typeof(e==null?void 0:e.detail)=="string"?e.detail:JSON.stringify((e==null?void 0:e.detail)??"");console.log("[TokenStats] Sync event received, merging data...",t.substring(0,100)),setTimeout(()=>this.mergeFromRemote(),2500)},this.eventBus.on("sync-end",this.syncHandler),setTimeout(()=>this.mergeFromRemote(),5e3),this.mergeTimer=window.setInterval(()=>this.mergeFromRemote(),6e4),console.log("[TokenStats] Plugin loaded successfully."),this.lsHeartbeatTimer=window.setInterval(()=>{this.store.saveToLocalStorage()},1e4)}onunload(){var e,t,s,n,o;console.log("[TokenStats] Plugin unloading..."),this.mergeTimer!==null&&(clearInterval(this.mergeTimer),this.mergeTimer=null),this.badgeTimer!==null&&(clearInterval(this.badgeTimer),this.badgeTimer=null),this.lsHeartbeatTimer!==null&&(clearInterval(this.lsHeartbeatTimer),this.lsHeartbeatTimer=null),this.syncHandler&&(this.eventBus.off("sync-end",this.syncHandler),this.syncHandler=null),(e=this.interceptor)==null||e.uninstall(),(t=this.store)==null||t.saveToLocalStorage(),(s=this.store)==null||s.saveSync(),(n=this.store)==null||n.save().catch(a=>console.error("[TokenStats] Save on unload failed:",a)),(o=this.styleElement)==null||o.remove(),this.styleElement=null,this.topBarItem&&(this.topBarItem.remove(),this.topBarItem=null),this.badgeEl=null,console.log("[TokenStats] Plugin unloaded.")}async mergeFromRemote(){this.store.getSettings().syncStatistics&&await this.doMerge()}async doMerge(){if(this.merging)return!1;this.merging=!0;try{const e=await this.store.mergeFromRemote();return e&&this.settingsPanel.refreshFromStore(),this.updateBadge(),this.checkThresholdsLive(),e}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}finally{this.merging=!1}}async manualSyncFull(){let e=!1,t="";try{const n=await M.fetchSyncPost("/api/sync/performSync",{app:"siyuan-token-stats"});n.code===0?e=!0:t=n.msg?String(n.msg):`code=${n.code}`}catch(n){t=n instanceof Error?n.message:String(n)}e&&(M.showMessage("已触发思源云同步，等待同步完成…",2e3,"info"),await new Promise(n=>setTimeout(n,5e3)));const s=await this.doMerge();return s?M.showMessage("已合并其他端统计",2e3,"info"):e?M.showMessage("已是最新，无新数据（请确认其他端已完成过云同步）",3500,"info"):t?M.showMessage(`未能触发思源云同步：${t}。请先在思源「设置 - 关于 - 云端」启用并登录云同步，再点此按钮。`,6e3,"info"):M.showMessage("已是最新，无新数据（建议先在思源设置中开启云同步）",3500,"info"),s}initTopBarBadge(){if(!this.topBarItem)return;const e=document.createElement("span");e.className="tks-topbar-badge",e.style.display="none",this.topBarItem.style.position="relative",this.topBarItem.appendChild(e),this.badgeEl=e,this.updateBadge(),this.badgeTimer=window.setInterval(()=>{this.updateBadge(),this.checkThresholdsLive()},3e3)}updateBadge(){const e=this.badgeEl;if(!e)return;const t=this.store.getSettings();if(!t.showTopBarBadge){e.style.display="none";return}if(e.title="",t.globalCostLimit>0){const a=this.keyManager.getGlobalCostPercent(t),r=this.keyManager.getGlobalCostUsage(t),i=t.currency||"¥";let c,l="neutral";c=`${a.toFixed(0)}%`;const u=t.globalCostAlertThreshold>0?t.globalCostAlertThreshold:70;a>=90||this.keyManager.isGlobalCostExceeded(t)?l="danger":a>=u?l="warn":l="ok",e.textContent=c,e.className=`tks-topbar-badge tks-badge-${l}`,e.style.display="inline-block",e.title=`费用 ${i}${r.totalCost.toFixed(2)} / ${i}${t.globalCostLimit.toFixed(2)}`;return}const s=this.keyManager.getGlobalUsage(t);let n,o="neutral";if(t.globalQuotaLimit>0){const a=this.keyManager.getGlobalUsagePercent(t);n=`${Math.round(a)}%`;const r=t.globalAlertThreshold>0?t.globalAlertThreshold:70;a>=90||this.keyManager.isGlobalQuotaExceeded(t)?o="danger":a>=r?o="warn":o="ok"}else n=this.formatCompactTokens(s.totalTokens),o="neutral";e.textContent=n,e.className=`tks-topbar-badge tks-badge-${o}`,e.style.display="inline-block"}checkThresholdsLive(){this.store.getSettings().showNotifications&&this.keyManager.checkAllThresholds(t=>M.showMessage(t,5e3,"info"))}formatCompactTokens(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}}module.exports=Re;

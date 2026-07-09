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
/* 缓存命中卡片：冷色调强调 */\r
.tks-card-cache .tks-card-value {\r
  color: #2f80ed;\r
}\r
\r
/* 记录表内缓存成本小字 */\r
.tks-sub {\r
  font-size: 10px;\r
  color: var(--b3-theme-on-surface);\r
  opacity: 0.85;\r
}\r
\r
/* 归档提示条 */\r
.tks-archive-note {\r
  margin: 10px 0 4px;\r
  padding: 8px 12px;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface);\r
  background: var(--b3-theme-background);\r
  border: 1px dashed var(--b3-border-color);\r
  border-radius: 6px;\r
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
.tks-readme-hint {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 8px;\r
  margin-bottom: 14px;\r
  padding: 10px 16px;\r
  border-radius: 4px;\r
  background-color: #eff6ff;\r
  border: 2px solid #2563eb;\r
  color: #1e3a8a;\r
  font-size: 13px;\r
  font-weight: 600;\r
  line-height: 1.6;\r
}\r
\r
.tks-readme-icon {\r
  flex: 0 0 auto;\r
  line-height: 1.5;\r
}\r
\r
.tks-readme-text {\r
  flex: 1 1 auto;\r
}\r
\r
.tks-readme-text b {\r
  font-weight: 700;\r
}\r
\r
.tks-price-warning {\r
  margin-bottom: 14px;\r
  padding: 10px 14px;\r
  border-radius: 4px;\r
  background-color: #fffbeb;\r
  border: 1px solid #f59e0b;\r
  color: #92400e;\r
  font-size: 12.5px;\r
  font-weight: 500;\r
  line-height: 1.6;\r
}\r
\r
.tks-price-warning b {\r
  font-weight: 700;\r
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
`,ge=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),me=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function ne(v){const e=new TextEncoder().encode(v),t=e.length*8,s=e.length+1,n=Math.ceil((s+8)/64)*64,r=new Uint8Array(n);r.set(e),r[e.length]=128;const a=new DataView(r.buffer);a.setUint32(n-8,Math.floor(t/4294967296),!1),a.setUint32(n-4,t>>>0,!1);const o=me.slice(),i=new Uint32Array(64);for(let l=0;l<n;l+=64){for(let b=0;b<16;b++)i[b]=a.getUint32(l+b*4,!1);for(let b=16;b<64;b++){const x=i[b-15],C=i[b-2],y=(x>>>7|x<<25)^(x>>>18|x<<14)^x>>>3,A=(C>>>17|C<<15)^(C>>>19|C<<13)^C>>>10;i[b]=i[b-16]+y+i[b-7]+A|0}let c=o[0],u=o[1],d=o[2],m=o[3],h=o[4],p=o[5],g=o[6],T=o[7];for(let b=0;b<64;b++){const x=(h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7),C=h&p^~h&g,y=T+x+C+ge[b]+i[b]|0,A=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),E=c&u^c&d^u&d,O=A+E|0;T=g,g=p,p=h,h=m+y|0,m=d,d=u,u=c,c=y+O|0}o[0]=o[0]+c|0,o[1]=o[1]+u|0,o[2]=o[2]+d|0,o[3]=o[3]+m|0,o[4]=o[4]+h|0,o[5]=o[5]+p|0,o[6]=o[6]+g|0,o[7]=o[7]+T|0}return Array.from(o).map(l=>(l>>>0).toString(16).padStart(8,"0")).join("")}const V="data.json",oe="data.backup.json",ie="data/storage/siyuan-token-stats/data.json",le="data/storage/siyuan-token-stats/data.backup.json",ce="data/plugins/siyuan-token-stats/settings.json",ee="siyuan-token-stats-data",re="1.3.0",X={matchByUrl:!0,interceptExternalAPIs:!0,blockOnQuotaExceeded:!1,quotaResetCycle:"monthly",abortStreamOnExceeded:!0,showNotifications:!0,showTopBarBadge:!0,maxRecords:5e3,packCountCacheRead:!0,globalQuotaLimit:0,globalAlertThreshold:0,globalQuotaResetCycle:"monthly",globalUsedTokensOffset:0,globalUsedInputTokensOffset:0,globalUsedOutputTokensOffset:0,globalCostLimit:0,globalCostAlertThreshold:0,globalCostResetCycle:"monthly",globalUsedCostOffset:0,customResetDays:30,trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily",debugLogging:!1,currency:"¥",recalcCostOnPriceChange:!0,syncStatistics:!0,showDisclaimer:!0,modelPrices:{},pricePacks:[]};class fe{constructor(e){this.loaded=!1,this.saveTimer=null,this.plugin=e,this.data={version:re,lastSavedAt:0,settingsUpdatedAt:0,keysUpdatedAt:0,deletedKeys:[],apiKeys:[],records:[],archives:[],settings:{...X}}}sanitizeKey(e){const t={...e};return typeof t.keyFull=="string"&&t.keyFull.length>0&&(t.keyHash=ne(t.keyFull),t.keyFull=""),t}async readSource(e,t=!1){try{const s=await fetch(`/api/file/getFile?path=${encodeURIComponent(e)}`);if(!s.ok)return null;const n=await s.text();if(!n)return null;const r=JSON.parse(n);if(!r||typeof r!="object")return null;const a=Array.isArray(r.apiKeys),o=Array.isArray(r.records),i=!!r.settings,l=!!r.lastSavedAt;if(t&&!a&&!o)return null;if(a||o||i||l)return r}catch{}return null}normalizeData(e,t){if(typeof e=="string")try{e=JSON.parse(e)}catch{return null}if(!e||typeof e!="object"||Array.isArray(e))return console.log(`[TokenStats] ${t} returned non-object:`,typeof e,e),null;if(!this.hasDataMarkers(e))return console.log(`[TokenStats] ${t} returned object without data markers:`,Object.keys(e)),null;const s={apiKeys:Array.isArray(e.apiKeys)?e.apiKeys.length:"none",records:Array.isArray(e.records)?e.records.length:"none",settings:!!e.settings,lastSavedAt:e.lastSavedAt||0};return console.log(`[TokenStats] ${t} read OK:`,s),e}async readOfficial(e){try{if(this.plugin&&typeof this.plugin.loadData=="function"){const t=await this.plugin.loadData(e),s=this.normalizeData(t,`loadData(${e})`);if(s)return s}}catch(t){console.warn("[TokenStats] readOfficial loadData failed:",t)}try{const t=`data/storage/siyuan-token-stats/${e}`,s=await fetch(`/api/file/getFile?path=${encodeURIComponent(t)}`);if(!s.ok)return console.log(`[TokenStats] readOfficial fetch fallback: HTTP ${s.status} for ${t}`),null;const n=await s.text();if(!n)return null;const r=JSON.parse(n);return this.normalizeData(r,`fetch(${e})`)}catch(t){console.warn("[TokenStats] readOfficial fetch fallback failed:",t)}return null}hasDataMarkers(e){return!e||typeof e!="object"?!1:Array.isArray(e.apiKeys)||Array.isArray(e.records)||!!e.settings||!!e.lastSavedAt}async isDestructiveWrite(e){if(e||this.data.apiKeys.length>0||this.data.records.length>0)return!1;const t=await this.readOfficial(V).catch(()=>null);if(!t)return!1;const s=Array.isArray(t.apiKeys)?t.apiKeys.length:0,n=Array.isArray(t.records)?t.records.length:0;return s>0||n>0}async load(){try{const e=await this.readOfficial(V),t=await this.readOfficial(oe),s=await this.readSource(ce,!0),n=[e,t,s].filter(Boolean);let r=null;try{const f=localStorage.getItem(ee);if(f){const k=JSON.parse(f);this.hasDataMarkers(k)&&(r=k,console.log("[TokenStats] Found data in localStorage (fallback only)."))}}catch{}const a=[...n];if(r&&a.push(r),a.length===0){console.warn("[TokenStats] ⚠ No existing data in ANY source — starting fresh with empty defaults!",`primary(${V})=${!!e}, backup(${oe})=${!!t},legacy(${ce})=${!!s}, localStorage=${!!r}`),this.loaded=!0;return}const o=new Map,i=f=>{const k=o.get(f.id);if(!k){o.set(f.id,f);return}const $=k.keysUpdatedAt||0,R=f.keysUpdatedAt||0;(R>$||R===$&&!k.keyHash&&f.keyHash)&&o.set(f.id,f)};for(const f of a)for(const k of f.apiKeys||[])i(k);const l=Array.from(o.values()),c=new Set;for(const f of a)for(const k of f.deletedKeys||[])c.add(k);const u=new Map;for(const f of a)for(const k of f.records||[])u.has(k.id)||u.set(k.id,k);const d=Array.from(u.values()).sort((f,k)=>f.timestamp-k.timestamp),m=(()=>{var k;let f=5e3;for(const $ of a){const R=(k=$.settings)==null?void 0:k.maxRecords;typeof R=="number"&&R>f&&(f=R)}return f})(),h=d.length>m?d.slice(-m):d,p=new Map,g=f=>{if(!f||!f.month)return;const k=p.get(f.month)||{month:f.month,count:0,totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalCacheReadTokens:0,exactTokens:0,estimatedTokens:0,cost:0,cacheCost:0,byModel:{}};k.count+=f.count||0,k.totalTokens+=f.totalTokens||0,k.totalInputTokens+=f.totalInputTokens||0,k.totalOutputTokens+=f.totalOutputTokens||0,k.totalCacheReadTokens+=f.totalCacheReadTokens||0,k.exactTokens+=f.exactTokens||0,k.estimatedTokens+=f.estimatedTokens||0,k.cost+=f.cost||0,k.cacheCost+=f.cacheCost||0;for(const[$,R]of Object.entries(f.byModel||{})){const K=k.byModel[$]||{tokens:0,inputTokens:0,outputTokens:0,cost:0};K.tokens+=R.tokens||0,K.inputTokens+=R.inputTokens||0,K.outputTokens+=R.outputTokens||0,K.cost+=R.cost||0,k.byModel[$]=K}p.set(f.month,k)};for(const f of a)for(const k of f.archives||[])g(k);const T=Array.from(p.values()).sort((f,k)=>f.month<k.month?-1:1);let b=a[0];for(const f of a)f.settingsUpdatedAt>b.settingsUpdatedAt&&(b=f);const x=b.settings||{},C={...X,...x};"autoDetectSiYuanAI"in x&&(C.matchByUrl=x.autoDetectSiYuanAI),!("globalCostResetCycle"in x)&&x.globalQuotaResetCycle&&(C.globalCostResetCycle=x.globalQuotaResetCycle);const y=l.map(f=>{const k={...f};return k.id==="siyuan-built-in"&&k.provider==="siyuan"&&(k.provider=k.baseUrl?k.baseUrl:"SiYuan AI"),k.usedTokensOffset===void 0&&(k.usedTokensOffset=0),k.usedInputTokensOffset===void 0&&(k.usedInputTokensOffset=0),k.usedOutputTokensOffset===void 0&&(k.usedOutputTokensOffset=0),Array.isArray(k.models)||(k.models=[]),this.sanitizeKey(k)}).filter(f=>!c.has(f.id)),A=Math.max(0,...a.map(f=>f.lastSavedAt||0)),E=Math.max(0,...a.map(f=>f.settingsUpdatedAt||0)),O=Math.max(0,...a.map(f=>f.keysUpdatedAt||0));this.data={version:re,lastSavedAt:A,settingsUpdatedAt:E,keysUpdatedAt:O,deletedKeys:Array.from(c),apiKeys:y,records:h,archives:T,settings:C},this.enforceRetention(),console.log(`[TokenStats] Loaded (merged ${a.length} source(s), fileSources=${n.length}, localStorage=${!!r}): ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`),this.loaded=!0,this.saveToLocalStorage(),this.save().catch(f=>console.error("[TokenStats] Post-load save failed:",f))}catch(e){console.warn("[TokenStats] Failed to load data, starting fresh:",e),this.loaded=!0}}scheduleSave(e=500,t=!1){if(!this.loaded){console.warn("[TokenStats] scheduleSave ignored: data not loaded yet.");return}this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.save(t).catch(s=>console.error("[TokenStats] Save failed:",s))},e)}saveToLocalStorage(){if(this.loaded)try{localStorage.setItem(ee,JSON.stringify(this.data))}catch{}}async putFileRaw(e,t){const s=new FormData;s.append("path",e),s.append("file",new Blob([JSON.stringify(t,null,2)],{type:"application/json"}));const n=await fetch("/api/file/putFile",{method:"POST",body:s});if(!n.ok)throw new Error(`putFile returned ${n.status}`)}async save(e=!1){if(!this.loaded){console.warn("[TokenStats] save() ignored: data not loaded yet.");return}if(await this.isDestructiveWrite(e)){console.warn("[TokenStats] save() skipped: in-memory data empty but existing file has data; not overwriting.");return}try{this.data.lastSavedAt=Date.now(),this.plugin&&typeof this.plugin.saveData=="function"?await this.plugin.saveData(V,this.data):await this.putFileRaw(ie,this.data);try{this.plugin&&typeof this.plugin.saveData=="function"?await this.plugin.saveData(oe,this.data):await this.putFileRaw(le,this.data)}catch{}}catch(t){console.error("[TokenStats] Failed to save data:",t);try{localStorage.setItem(ee,JSON.stringify(this.data))}catch{}}}beaconPutFile(e,t){try{if(typeof navigator<"u"&&typeof navigator.sendBeacon=="function"){const s=new FormData;s.append("path",e),s.append("file",new Blob([t],{type:"application/json"})),navigator.sendBeacon("/api/file/putFile",s)}}catch{}}saveSync(){if(!this.loaded){console.warn("[TokenStats] saveSync() ignored: data not loaded yet.");return}const e=this.data.apiKeys.length>0||this.data.records.length>0||this.data.lastSavedAt>0;try{this.data.lastSavedAt=Date.now();const t=JSON.stringify(this.data,null,2);try{localStorage.setItem(ee,t)}catch{}if(!e){console.log("[TokenStats] saveSync skipped file write: in-memory empty and never saved (protecting existing file).");return}this.beaconPutFile(ie,t),this.beaconPutFile(le,t),console.log("[TokenStats] Synchronous save completed (localStorage mirror + sendBeacon file flush).")}catch(t){console.error("[TokenStats] saveSync error:",t)}}async mergeFromRemote(){try{const e=await this.readOfficial(V);if(!e)return console.warn("[TokenStats] mergeFromRemote: 无法读取远程数据文件，合并跳过"),!1;const t=this.data,s=e.lastSavedAt||0,n=t.lastSavedAt||0,r=e.settingsUpdatedAt||0,a=e.keysUpdatedAt||0,o=t.settingsUpdatedAt||0,i=t.keysUpdatedAt||0,l=(e.records||[]).length,c=(t.records||[]).length,u=(e.apiKeys||[]).length,d=(t.apiKeys||[]).length;if(s===n&&r===o&&a===i&&l===c&&u===d&&s>0)return console.log("[TokenStats] Sync merge: data unchanged, skipping."),!1;console.log(`[TokenStats] Sync merge: local ls=${n} lset=${o} lkey=${i} lr=${c} lk=${d}, remote rs=${s} rset=${r} rkey=${a} rr=${l} rk=${u}`);const m=e.records||[],h=new Map;for(const S of t.records)h.set(S.id,S);for(const S of m)h.has(S.id)||h.set(S.id,S);const p=Array.from(h.values()).sort((S,I)=>S.timestamp-I.timestamp),g=t.settings.maxRecords,T=p.length>g?p.slice(-g):p,b=new Map,x=S=>{if(!S||!S.month)return;const I=b.get(S.month)||{month:S.month,count:0,totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalCacheReadTokens:0,exactTokens:0,estimatedTokens:0,cost:0,cacheCost:0,byModel:{}};I.count+=S.count||0,I.totalTokens+=S.totalTokens||0,I.totalInputTokens+=S.totalInputTokens||0,I.totalOutputTokens+=S.totalOutputTokens||0,I.totalCacheReadTokens+=S.totalCacheReadTokens||0,I.exactTokens+=S.exactTokens||0,I.estimatedTokens+=S.estimatedTokens||0,I.cost+=S.cost||0,I.cacheCost+=S.cacheCost||0;for(const[N,z]of Object.entries(S.byModel||{})){const _=I.byModel[N]||{tokens:0,inputTokens:0,outputTokens:0,cost:0};_.tokens+=z.tokens||0,_.inputTokens+=z.inputTokens||0,_.outputTokens+=z.outputTokens||0,_.cost+=z.cost||0,I.byModel[N]=_}b.set(S.month,I)};for(const S of t.archives||[])x(S);for(const S of e.archives||[])x(S);const C=Array.from(b.values()).sort((S,I)=>S.month<I.month?-1:1),y=e.apiKeys||[],A=new Map,E=i>=a,O=E?y:t.apiKeys,f=E?t.apiKeys:y;for(const S of O)A.set(S.id,S);for(const S of f)A.set(S.id,S);const k=e.deletedKeys||[],$=t.deletedKeys||[],R=Array.from(new Set([...$,...k])),K=Array.from(A.values()).filter(S=>!R.includes(S.id)).map(S=>this.sanitizeKey(S)),P=o>=r,q=P?{...X,...t.settings}:{...X,...e.settings},D=P?t.settings:e.settings;D&&!("globalCostResetCycle"in D)&&D.globalQuotaResetCycle&&(q.globalCostResetCycle=D.globalQuotaResetCycle);const j=Math.max(o,r),G=Math.max(i,a);return this.data={version:re,lastSavedAt:Math.max(n,s),settingsUpdatedAt:j,keysUpdatedAt:G,deletedKeys:R,apiKeys:K,records:T,archives:C,settings:q},this.enforceRetention(),await this.save(),console.log(`[TokenStats] Sync merge complete: ${K.length} keys, ${T.length} records.`),!0}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}}getApiKeys(){return this.data.apiKeys}getApiKey(e){return this.data.apiKeys.find(t=>t.id===e)}addApiKey(e){this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys=this.data.deletedKeys.filter(t=>t!==e.id),this.data.apiKeys.push(this.sanitizeKey(e)),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}updateApiKey(e,t){const s=this.data.apiKeys.findIndex(n=>n.id===e);if(s>=0){const n={...this.data.apiKeys[s],...t};typeof t.keyFull=="string"&&t.keyFull.length>0&&(n.keyHash=ne(t.keyFull),n.keyFull=""),this.data.apiKeys[s]=n,this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}}deleteApiKey(e){this.data.apiKeys=this.data.apiKeys.filter(t=>t.id!==e),this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys.includes(e)||this.data.deletedKeys.push(e),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}addRecord(e){const t=this.data.records,s=t.slice(-5);for(const n of s)if(n.apiKeyId===e.apiKeyId&&n.timestamp===e.timestamp&&n.totalTokens===e.totalTokens&&n.model===e.model){console.log("[TokenStats] Duplicate record skipped:",e.apiKeyName,e.model,e.totalTokens);return}this.data.settings.recalcCostOnPriceChange===!1&&(e.cost=this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens)),t.push(e),this.enforceRetention(),this.scheduleSave()}getRecords(){return this.data.records}getArchives(){return this.data.archives||[]}enforceRetention(){const e=this.data.records,t=this.data.settings.maxRecords||5e3;if(e.length<=t)return;e.sort((r,a)=>r.timestamp-a.timestamp);const s=e.slice(0,e.length-t),n=e.slice(e.length-t);this.data.records=n,s.length>0&&this.aggregateIntoArchives(s)}aggregateIntoArchives(e){Array.isArray(this.data.archives)||(this.data.archives=[]);const t=new Map;for(const s of this.data.archives)t.set(s.month,s);for(const s of e){const n=new Date(s.timestamp),r=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`;let a=t.get(r);a||(a={month:r,count:0,totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalCacheReadTokens:0,exactTokens:0,estimatedTokens:0,cost:0,cacheCost:0,byModel:{}},t.set(r,a)),a.count+=1,a.totalTokens+=s.totalTokens,a.totalInputTokens+=s.inputTokens,a.totalOutputTokens+=s.outputTokens,a.totalCacheReadTokens+=s.cacheReadTokens||0,s.estimated===!1?a.exactTokens+=s.totalTokens:a.estimatedTokens+=s.totalTokens,a.cost+=this.getRecordCost(s),a.cacheCost+=this.getRecordCacheCost(s);const o=(s.model||"unknown").toLowerCase().trim();a.byModel[o]||(a.byModel[o]={tokens:0,inputTokens:0,outputTokens:0,cost:0}),a.byModel[o].tokens+=s.totalTokens,a.byModel[o].inputTokens+=s.inputTokens,a.byModel[o].outputTokens+=s.outputTokens,a.byModel[o].cost+=this.getRecordCost(s)}this.data.archives=Array.from(t.values()).sort((s,n)=>s.month<n.month?-1:1)}getRecentRecords(e=50){return[...this.data.records].sort((t,s)=>s.timestamp-t.timestamp).slice(0,e)}clearRecords(){this.data.records=[],this.scheduleSave(0,!0)}clearAll(){this.data.records=[],this.data.apiKeys=[],this.data.deletedKeys=[],this.scheduleSave(0,!0)}getSettings(){return this.data.settings}updateSettings(e){this.data.settings={...this.data.settings,...e},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave()}resetSettings(){this.data.settings={...X},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave(0,!0)}getCurrency(){return this.data.settings.currency||"¥"}normalizeModelKey(e){return(e||"").toLowerCase().trim().replace(/[\s\-_]+/g,"")}resolvePrice(e){const t=this.normalizeModelKey(e);if(!t)return{price:null,fromPack:!1};const s=this.data.settings.modelPrices||{};if(s[t])return{price:s[t],fromPack:!1};const n=this.findPackForModel(t);if(n){if(n.totalPrice&&n.totalPrice>0&&n.totalTokens>0){const a=n.totalPrice/n.totalTokens*1e3;return{price:{input:a,output:a,cacheRead:a},fromPack:!0}}return{price:{input:n.input,output:n.output,...n.cacheRead?{cacheRead:n.cacheRead}:{}},fromPack:!0}}return{price:null,fromPack:!1}}getModelPrice(e){return this.resolvePrice(e).price}findPackForModel(e){const t=this.data.settings.pricePacks||[];for(const s of t)if(Array.isArray(s.models)&&s.models.some(n=>this.normalizeModelKey(n)===e))return s;return null}hasAnyPrice(){return Object.keys(this.data.settings.modelPrices||{}).length>0?!0:(this.data.settings.pricePacks||[]).length>0}calcCost(e,t,s,n){const{price:r,fromPack:a}=this.resolvePrice(e);if(!r)return 0;const o=t/1e3*r.input,i=s/1e3*r.output;let l=o+i;return r.cacheRead&&n&&n>0&&(!a||this.data.settings.packCountCacheRead!==!1)&&(l+=n/1e3*r.cacheRead),l}calcCacheCost(e,t){if(!t||t<=0)return 0;const{price:s,fromPack:n}=this.resolvePrice(e);return!s||!s.cacheRead||n&&this.data.settings.packCountCacheRead===!1?0:t/1e3*s.cacheRead}formatCost(e){return`${this.getCurrency()}${e.toFixed(4)}`}getRecordCacheCost(e){const t=this.calcCacheCost(e.model,e.cacheReadTokens);if(this.data.settings.recalcCostOnPriceChange!==!1)return t;if(typeof e.cost=="number"){const s=this.calcCost(e.model,e.inputTokens,e.outputTokens,0);return Math.max(0,e.cost-s)}return t}getRecordCost(e){return this.data.settings.recalcCostOnPriceChange!==!1?this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens):typeof e.cost=="number"?e.cost:this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens)}getPackUsage(e){const t=new Set((e.models||[]).map(n=>this.normalizeModelKey(n)));if(t.size===0)return{usedTokens:0};let s=0;for(const n of this.data.records)t.has(this.normalizeModelKey(n.model))&&(s+=(n.inputTokens||0)+(n.outputTokens||0));return{usedTokens:s}}getTotalCostInPeriod(e,t){let s=0;for(const n of e)n.timestamp>=t&&(s+=this.getRecordCost(n));return s}exportAll(){const e=JSON.parse(JSON.stringify(this.data));if(Array.isArray(e.apiKeys))for(const t of e.apiKeys)t&&"keyFull"in t&&delete t.keyFull;return JSON.stringify(e,null,2)}exportRecords(){return JSON.stringify(this.data.records,null,2)}}function te(v){if(!v)return"";try{const e=new URL(v,window.location.href);return e.pathname+e.search}catch{return v}}function de(v,e){return e?v===e?!0:v.startsWith(e)&&(v[e.length]==="/"||v[e.length]==="?"):!1}class ke{constructor(e){this.store=e,this.alertedKeys=new Set,this.exceededAlertedKeys=new Set,this.alertedGlobal=!1,this.exceededAlertedGlobal=!1,this.alertedCostGlobal=!1,this.exceededAlertedCostGlobal=!1}getAllKeys(){return this.store.getApiKeys()}findByKey(e){if(!e)return;const t=ne(e);return this.store.getApiKeys().find(s=>s.enabled&&s.keyHash&&s.keyHash===t)}findByUrl(e){const t=te(e);if(t)return this.store.getApiKeys().find(s=>{if(!s.enabled||!s.baseUrl)return!1;const n=te(s.baseUrl);return n?de(t,n):!1})}findByUrlAndModel(e,t){if(!e)return;const s=this.store.getApiKeys().filter(n=>{if(!n.enabled||!n.baseUrl)return!1;const r=te(n.baseUrl),a=te(e);return r&&a?de(a,r):!1});if(s.length!==0){if(t){const n=String(t).toLowerCase().trim();for(const r of s)if(Array.isArray(r.models)&&r.models.find(a=>String(a).toLowerCase().trim()===n))return r}return s[0]}}findByModel(e){if(!e)return;const t=String(e).toLowerCase().trim();return this.store.getApiKeys().find(s=>s.enabled?(s.models||[]).map(r=>String(r).toLowerCase().trim()).includes(t):!1)}getResetBoundary(e,t=30){if(e==="none")return 0;const s=new Date;if(e==="daily")return new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime();if(e==="custom"){const n=new Date(s.getFullYear(),s.getMonth(),s.getDate()).getTime(),r=Math.max(1,Math.floor(t)||30);return n-(r-1)*864e5}return new Date(s.getFullYear(),s.getMonth(),1).getTime()}getKeyUsage(e){const t=this.store.getSettings(),s=this.getResetBoundary(t.quotaResetCycle,t.customResetDays),n=this.store.getApiKey(e),r=this.store.getRecords().filter(l=>l.apiKeyId===e&&l.timestamp>=s),a=(n==null?void 0:n.usedTokensOffset)??0,o=(n==null?void 0:n.usedInputTokensOffset)??0,i=(n==null?void 0:n.usedOutputTokensOffset)??0;return{totalTokens:r.reduce((l,c)=>l+c.totalTokens,0)+a,totalInputTokens:r.reduce((l,c)=>l+c.inputTokens,0)+o,totalOutputTokens:r.reduce((l,c)=>l+c.outputTokens,0)+i,totalRequests:r.length}}getRemainingQuota(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return-1;const s=this.getKeyUsage(e);return Math.max(0,t.quotaLimit-s.totalTokens)}getUsagePercent(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return 0;const s=this.getKeyUsage(e);return Math.min(100,s.totalTokens/t.quotaLimit*100)}isQuotaExceeded(e){const t=this.store.getApiKey(e);return!t||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens>=t.quotaLimit}wouldExceedQuota(e,t){const s=this.store.getApiKey(e);return!s||s.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens+t>s.quotaLimit}isThresholdReached(e){const t=this.store.getApiKey(e);return!t||t.alertThreshold<=0||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens/t.quotaLimit*100>=t.alertThreshold}checkThreshold(e,t){const s=this.store.getApiKey(e);if(s){if(this.alertedKeys.has(e)&&!this.isThresholdReached(e)&&this.alertedKeys.delete(e),this.isThresholdReached(e)&&!this.alertedKeys.has(e)){this.alertedKeys.add(e);const n=this.getKeyUsage(e),r=(n.totalTokens/s.quotaLimit*100).toFixed(1),a=`⚠️ Token 用量提醒：${s.name} 已使用 ${r}%（${n.totalTokens.toLocaleString()} / ${s.quotaLimit.toLocaleString()} tokens）`;t(a)}if(this.isQuotaExceeded(e)){if(!this.exceededAlertedKeys.has(e)){this.exceededAlertedKeys.add(e);const n=`⛔ Token 限额已用尽：${s.name}（限额 ${s.quotaLimit.toLocaleString()} tokens）`;t(n)}}else this.exceededAlertedKeys.delete(e)}}resetAlert(e){this.alertedKeys.delete(e),this.exceededAlertedKeys.delete(e)}clearAllAlerts(){this.alertedKeys.clear(),this.alertedGlobal=!1,this.alertedCostGlobal=!1,this.exceededAlertedKeys.clear(),this.exceededAlertedGlobal=!1,this.exceededAlertedCostGlobal=!1}generateKeyId(){return`key-${Date.now()}-${Math.random().toString(36).substring(2,8)}`}maskKey(e){return e?e.length<=8?e.substring(0,2)+"***":e.substring(0,5)+"..."+e.substring(e.length-4):"(空)"}getDefaultBaseUrl(e){return{openai:"https://api.openai.com/v1/chat/completions",anthropic:"https://api.anthropic.com/v1/messages",deepseek:"https://api.deepseek.com/v1/chat/completions"}[e.toLowerCase()]||""}getGlobalUsage(e){const t=this.getResetBoundary(e.globalQuotaResetCycle,e.customResetDays),s=this.store.getRecords().filter(n=>n.timestamp>=t);return{totalTokens:s.reduce((n,r)=>n+r.totalTokens,0)+(e.globalUsedTokensOffset??0),totalInputTokens:s.reduce((n,r)=>n+r.inputTokens,0)+(e.globalUsedInputTokensOffset??0),totalOutputTokens:s.reduce((n,r)=>n+r.outputTokens,0)+(e.globalUsedOutputTokensOffset??0),totalRequests:s.length}}getGlobalRemainingQuota(e){if(e.globalQuotaLimit<=0)return-1;const t=this.getGlobalUsage(e);return Math.max(0,e.globalQuotaLimit-t.totalTokens)}getGlobalUsagePercent(e){if(e.globalQuotaLimit<=0)return 0;const t=this.getGlobalUsage(e);return Math.min(100,t.totalTokens/e.globalQuotaLimit*100)}isGlobalQuotaExceeded(e){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens>=e.globalQuotaLimit}wouldExceedGlobalQuota(e,t){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens+t>e.globalQuotaLimit}isGlobalThresholdReached(e){return e.globalAlertThreshold<=0||e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens/e.globalQuotaLimit*100>=e.globalAlertThreshold}checkGlobalThreshold(e,t){if(!(e.globalQuotaLimit<=0)){if(this.alertedGlobal&&!this.isGlobalThresholdReached(e)&&(this.alertedGlobal=!1),this.isGlobalThresholdReached(e)&&!this.alertedGlobal){this.alertedGlobal=!0;const s=this.getGlobalUsage(e),r=`⚠️ 全局 Token 用量提醒：已使用 ${(s.totalTokens/e.globalQuotaLimit*100).toFixed(1)}%（${s.totalTokens.toLocaleString()} / ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(r)}if(this.isGlobalQuotaExceeded(e)){if(!this.exceededAlertedGlobal){this.exceededAlertedGlobal=!0;const s=`⛔ 全局 Token 限额已用尽（限额 ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(s)}}else this.exceededAlertedGlobal=!1}}resetGlobalAlert(){this.alertedGlobal=!1,this.exceededAlertedGlobal=!1}getGlobalCostUsage(e){const t=this.getResetBoundary(e.globalCostResetCycle,e.customResetDays),s=this.store.getRecords().filter(r=>r.timestamp>=t);let n=0;for(const r of s)n+=this.store.getRecordCost(r);return n+=e.globalUsedCostOffset??0,{totalCost:n,totalRequests:s.length}}getGlobalRemainingCost(e){if(e.globalCostLimit<=0)return-1;const t=this.getGlobalCostUsage(e);return Math.max(0,e.globalCostLimit-t.totalCost)}getGlobalCostPercent(e){if(e.globalCostLimit<=0)return 0;const t=this.getGlobalCostUsage(e);return Math.min(100,t.totalCost/e.globalCostLimit*100)}isGlobalCostExceeded(e){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost>=e.globalCostLimit}wouldExceedGlobalCostQuota(e,t){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost+t>e.globalCostLimit}isGlobalCostThresholdReached(e){return e.globalCostAlertThreshold<=0||e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost/e.globalCostLimit*100>=e.globalCostAlertThreshold}checkGlobalCostThreshold(e,t){if(!(e.globalCostLimit<=0)){if(this.alertedCostGlobal&&!this.isGlobalCostThresholdReached(e)&&(this.alertedCostGlobal=!1),this.isGlobalCostThresholdReached(e)&&!this.alertedCostGlobal){this.alertedCostGlobal=!0;const s=this.getGlobalCostUsage(e),n=(s.totalCost/e.globalCostLimit*100).toFixed(1),r=e.currency||"¥",a=`⚠️ 全局费用提醒：已使用 ${n}%（${r}${s.totalCost.toFixed(2)} / ${r}${e.globalCostLimit.toFixed(2)}）`;t(a)}if(this.isGlobalCostExceeded(e)){if(!this.exceededAlertedCostGlobal){this.exceededAlertedCostGlobal=!0;const n=`⛔ 全局费用限额已用尽（限额 ${e.currency||"¥"}${e.globalCostLimit.toFixed(2)}）`;t(n)}}else this.exceededAlertedCostGlobal=!1}}resetGlobalCostAlert(){this.alertedCostGlobal=!1,this.exceededAlertedCostGlobal=!1}checkAllThresholds(e){const t=this.store.getSettings();for(const s of this.store.getApiKeys())s.enabled&&this.checkThreshold(s.id,e);this.checkGlobalThreshold(t,e),this.checkGlobalCostThreshold(t,e)}}class be{estimate(e){if(!e)return 0;const t=(e.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g)||[]).length,s=(e.match(/[\u3000-\u303f\uff00-\uffef]/g)||[]).length,n=(e.match(/[a-zA-Z]+/g)||[]).length,r=n*4,a=Math.max(0,e.length-t-s-r),o=Math.ceil(t*1.5+s*.75+n*1.3+a*.25);return Math.max(0,o)}estimateFromMessages(e){var s,n;if(!Array.isArray(e))return 0;let t=0;for(const r of e){if(typeof r=="string")t+=this.estimate(r)+4;else if(r!=null&&r.content){if(typeof r.content=="string")t+=this.estimate(r.content)+4;else if(Array.isArray(r.content)){for(const a of r.content)typeof a=="string"?t+=this.estimate(a):a!=null&&a.text&&(t+=this.estimate(a.text));t+=4}}if(Array.isArray(r.tool_calls)){for(const a of r.tool_calls)(s=a==null?void 0:a.function)!=null&&s.name&&(t+=this.estimate(a.function.name)+1),typeof((n=a==null?void 0:a.function)==null?void 0:n.arguments)=="string"&&(t+=this.estimate(a.function.arguments));t+=4}r!=null&&r.role&&(t+=1)}return t}estimateFromText(e){return this.estimate(e)}}function ue(v,e){if(!v)return null;if(v instanceof Headers)return v.get(e);if(Array.isArray(v)){for(const[n,r]of v)if(n.toLowerCase()===e.toLowerCase())return r;return null}const t=v,s=e.toLowerCase();for(const n of Object.keys(t))if(n.toLowerCase()===s)return t[n];return null}function ye(v){return typeof v=="string"?v:v instanceof URL?v.href:v.url}function ve(){return`rec-${Date.now()}-${Math.random().toString(36).substring(2,9)}`}function se(v){return v&&String(v).trim()||""}function pe(v){return!v||v==="unknown"||v==="siyuan-ai"||v==="default"}function Z(v){if(!v)return!0;const e=v.trim();return!!(/^\d{14,}-[a-z0-9]+$/i.test(e)||/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)||/^\d+$/.test(e)||e.length>40&&!/[._-]/.test(e))}function H(...v){for(const e of v){const t=se(e);if(t&&!pe(t)&&!Z(t))return t}return""}function xe(v){return/\/api\/ai\/agent\/chat\b/i.test(v)||/\/api\/ai\/chatGPT\b/i.test(v)||/\/api\/ai\/chatGPTWithAction\b/i.test(v)}function Te(v){return typeof v=="object"&&v!==null&&"code"in v&&"msg"in v&&"data"in v&&!("choices"in v)&&!("usage"in v)}function Se(){return{apiKeyId:"siyuan-ai-default",apiKeyName:"思源智能体",source:"siyuan-ai",provider:"SiYuan AI",model:"unknown"}}class we{constructor(e,t,s){this.installed=!1,this.onThresholdAlert=()=>{},this.siyuanConfigCache=null,this.originalFetch=window.fetch.bind(window),this.store=e,this.keyManager=t,this.tokenCounter=s}setThresholdCallback(e){this.onThresholdAlert=e}keyMatchesModel(e,t){if(!e||!t)return!1;const s=String(t).toLowerCase().trim();return(e.models||[]).map(r=>String(r).toLowerCase().trim()).includes(s)}install(){if(this.installed){console.warn("[TokenStats] Interceptor already installed.");return}this.installed=!0;const e=this;window.fetch=async function(t,s){const n=ye(t),r=e.store.getSettings(),a=await e.extractBodyText(t,s),o=e.tryParseJson(a),i=await e.identifyAiCall(n,s,r,o);if(!i)return e.originalFetch(t,s);e.logDebug(`Intercepted AI call: source=${i.source}, model=${i.model}, key=${i.apiKeyName}`),e.logDebug("Request body",{bodyText:a==null?void 0:a.slice(0,500),parsedBody:o});const l=Date.now();if(r.blockOnQuotaExceeded&&r.globalQuotaLimit>0){const m=e.tokenCounter.estimateFromMessages(e.extractMessages(o));if(e.keyManager.isGlobalQuotaExceeded(r)){const h="[TokenStats] 已阻止请求：全局 Token 限额已用尽";return console.warn(h),e.onThresholdAlert("global",h),e.createBlockedResponse(h,i)}if(e.keyManager.wouldExceedGlobalQuota(r,m)){const p=`[TokenStats] 已阻止请求：全局剩余配额 ${e.keyManager.getGlobalRemainingQuota(r).toLocaleString()} tokens，预估输入 ${m.toLocaleString()} tokens 将超限`;return console.warn(p),e.onThresholdAlert("global",p),e.createBlockedResponse(p,i)}}if(r.blockOnQuotaExceeded&&r.globalCostLimit>0){const m=e.tokenCounter.estimateFromMessages(e.extractMessages(o)),h=e.store.calcCost(i.model,m,m),p=r.currency||"¥";if(e.keyManager.isGlobalCostExceeded(r)){const g=`[TokenStats] 已阻止请求：全局费用限额已用尽（${p}${r.globalCostLimit.toFixed(2)}）`;return console.warn(g),e.onThresholdAlert("global-cost",g),e.createBlockedResponse(g,i)}if(h>0&&e.keyManager.wouldExceedGlobalCostQuota(r,h)){const g=e.keyManager.getGlobalRemainingCost(r),T=`[TokenStats] 已阻止请求：全局费用剩余 ${p}${g.toFixed(2)}，预估本次费用 ${p}${h.toFixed(2)} 将超限`;return console.warn(T),e.onThresholdAlert("global-cost",T),e.createBlockedResponse(T,i)}}if(r.blockOnQuotaExceeded){if(e.keyManager.isQuotaExceeded(i.apiKeyId)){const h=e.store.getApiKey(i.apiKeyId),p=`[TokenStats] 已阻止请求：${(h==null?void 0:h.name)||i.apiKeyName} 的 Token 限额已用尽`;return console.warn(p),e.onThresholdAlert(i.apiKeyId,p),e.createBlockedResponse(p,i)}const m=e.tokenCounter.estimateFromMessages(e.extractMessages(o));if(e.keyManager.wouldExceedQuota(i.apiKeyId,m)){const h=e.store.getApiKey(i.apiKeyId),p=e.keyManager.getRemainingQuota(i.apiKeyId),g=`[TokenStats] 已阻止请求：${(h==null?void 0:h.name)||i.apiKeyName} 剩余配额 ${p.toLocaleString()} tokens，预估输入 ${m.toLocaleString()} tokens 将超限`;return console.warn(g),e.onThresholdAlert(i.apiKeyId,g),e.createBlockedResponse(g,i)}}let c,u=!1;try{c=await e.originalFetch(t,s),u=c.ok}catch(m){throw e.recordCall(i,0,0,l,!1,i.model,void 0,!0),m}const d=c.clone();return e.analyzeResponse(d,i,l,o,u).catch(m=>console.warn("[TokenStats] Response analysis failed:",m)),c},console.log("[TokenStats] Fetch interceptor installed.")}createBlockedResponse(e,t){const s=JSON.stringify({error:{type:"quota_exceeded",code:"token_stats_blocked",message:e,apiKeyId:t.apiKeyId,apiKeyName:t.apiKeyName}});return new Response(s,{status:429,statusText:"Too Many Requests",headers:{"Content-Type":"application/json","X-TokenStats-Blocked":"true"}})}uninstall(){this.installed&&(window.fetch=this.originalFetch,this.installed=!1,console.log("[TokenStats] Fetch interceptor uninstalled."))}async extractBodyText(e,t){if(t!=null&&t.body&&typeof t.body=="string")return t.body;if((t==null?void 0:t.body)instanceof URLSearchParams)return t.body.toString();if((t==null?void 0:t.body)instanceof FormData)try{const s={};return t.body.forEach((n,r)=>{s[r]=typeof n=="string"?n:n.name}),JSON.stringify(s)}catch{return null}if((t==null?void 0:t.body)instanceof Blob)try{return await t.body.text()}catch{return null}if(t!=null&&t.body&&(t.body instanceof ArrayBuffer||ArrayBuffer.isView(t.body)))try{return new TextDecoder().decode(t.body)}catch{return null}if(e instanceof Request)try{return await e.clone().text()}catch{return null}return null}tryParseJson(e){if(!e)return null;try{return JSON.parse(e)}catch{return null}}isDebugEnabled(){return this.store.getSettings().debugLogging??!1}logDebug(...e){this.isDebugEnabled()&&console.log("[TokenStats]",...e)}async identifyAiCall(e,t,s,n){const r=e.toLowerCase();if(xe(e)){const l=await this.getSiYuanAiConfig(),c=(n==null?void 0:n.model)||null,u=this.extractModel(n)||c||this.getSiYuanSelectedModelId(l);if(u){const m=this.findProviderByModel(l,u),h=m?m.baseURL:null;if(m&&m.apiKey){const g=this.keyManager.findByKey(m.apiKey);if(g&&g.enabled)return{apiKeyId:g.id,apiKeyName:g.name,source:g.baseUrl||h||"siyuan-ai",provider:g.provider,model:this.resolveSiYuanModelForCall(n,l)}}const p=this.keyManager.findByModel(u);if(p&&p.enabled)return{apiKeyId:p.id,apiKeyName:p.name,source:p.baseUrl||h||"siyuan-ai",provider:p.provider,model:this.resolveSiYuanModelForCall(n,l)};if(h){const g=this.keyManager.findByUrlAndModel(h,u);if(g&&g.enabled)return{apiKeyId:g.id,apiKeyName:g.name,source:g.baseUrl||h||"siyuan-ai",provider:g.provider,model:this.resolveSiYuanModelForCall(n,l)}}}if(l!=null&&l.providers){for(const m of l.providers)if(m!=null&&m.enabled){if(m.apiKey){const h=this.keyManager.findByKey(m.apiKey);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||m.baseURL||"siyuan-ai",provider:h.provider,model:this.resolveModelByBlockId(c,l)||this.resolveModelNameFromProvider(m)||this.resolveSiYuanModelForCall(n,l)}}if(m.baseURL){const h=this.keyManager.findByUrl(m.baseURL);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||m.baseURL||"siyuan-ai",provider:h.provider,model:this.resolveModelByBlockId(c,l)||this.resolveModelNameFromProvider(m)||this.resolveSiYuanModelForCall(n,l)}}if(Array.isArray(m.models))for(const h of m.models){const p=(h==null?void 0:h.id)||(h==null?void 0:h.name)||(h==null?void 0:h.displayName);if(!p)continue;const g=this.keyManager.findByModel(p);if(g&&g.enabled)return{apiKeyId:g.id,apiKeyName:g.name,source:g.baseUrl||m.baseURL||"siyuan-ai",provider:g.provider,model:p}}}}const d=this.keyManager.findByUrl(e);return d&&d.enabled?{apiKeyId:d.id,apiKeyName:d.name,source:d.baseUrl||"siyuan-ai",provider:d.provider,model:this.resolveSiYuanModelForCall(n,l)}:{...Se(),model:this.resolveSiYuanModelForCall(n,l)}}if(s.matchByUrl){const l=this.keyManager.findByUrl(e),c=this.extractModel(n);let u=l;if(c&&l&&!this.keyMatchesModel(l,c)){const d=this.keyManager.findByModel(c);d&&d.enabled&&(u=d)}if(u&&u.enabled)return{apiKeyId:u.id,apiKeyName:u.name,source:u.baseUrl||"url-match",provider:u.provider,model:c||"unknown"}}if(!s.interceptExternalAPIs)return null;const o=this.extractModel(n);if(r.includes("/v1/chat/completions")||r.includes("/v1/completions")){const c=(ue(t==null?void 0:t.headers,"Authorization")||"").replace(/^bearer\s+/i,"").trim();let u=o?this.keyManager.findByModel(o):void 0;return(!u||!u.enabled)&&(u=c?this.keyManager.findByKey(c):void 0),(!u||!u.enabled)&&(u=this.keyManager.findByUrl(e)),{apiKeyId:(u==null?void 0:u.id)||"unknown",apiKeyName:(u==null?void 0:u.name)||this.keyManager.maskKey(c)||"Unknown",source:"external-openai",provider:(u==null?void 0:u.provider)||"OpenAI",model:o||"unknown"}}if(r.includes("/v1/messages")){const l=ue(t==null?void 0:t.headers,"x-api-key")||"";let c=o?this.keyManager.findByModel(o):void 0;return(!c||!c.enabled)&&(c=l?this.keyManager.findByKey(l):void 0),(!c||!c.enabled)&&(c=this.keyManager.findByUrl(e)),{apiKeyId:(c==null?void 0:c.id)||"unknown",apiKeyName:(c==null?void 0:c.name)||this.keyManager.maskKey(l)||"Unknown",source:"external-anthropic",provider:(c==null?void 0:c.provider)||"Anthropic",model:o||"unknown"}}let i=o?this.keyManager.findByModel(o):void 0;return(!i||!i.enabled)&&(i=this.keyManager.findByUrl(e)),i&&i.enabled?{apiKeyId:i.id,apiKeyName:i.name,source:i.baseUrl||"custom-url",provider:i.provider,model:o||"unknown"}:null}getSiYuanSelectedModelId(e){if(!e)return null;const t=e.agent||{},s=e.editing||{};return t.modelId||s.modelId||null}extractModel(e){return H(e==null?void 0:e.model)||null}resolveModelByBlockId(e,t){if(!t||!e)return null;const s=t.providers||[];for(const n of s){const r=(n.models||[]).find(a=>(a==null?void 0:a.id)===e);if(r)return r.name||r.displayName||null}return null}resolveSiYuanModelForCall(e,t){const s=e==null?void 0:e.model;if(s){const n=this.resolveModelByBlockId(s,t);if(n)return n}return H(this.extractModel(e))||this.resolveSiYuanModelNameFromConfig(t)||"unknown"}extractMessages(e){if(!e)return[];if(Array.isArray(e.messages))return e.messages;if(typeof e.messages=="string")return[e.messages];if(typeof e.messages=="object"&&e.messages!==null)return[e.messages];if(typeof e.prompt=="string")return[e.prompt];if(Array.isArray(e.contents))return e.contents;if(typeof e.content=="string")return[e.content];if(typeof e.text=="string")return[e.text];if(e.message!==void 0||e.references!==void 0){const t=[];if(Array.isArray(e.references))for(const s of e.references)typeof s=="string"?t.push({role:"system",content:s}):s!=null&&s.content?t.push({role:"system",content:typeof s.content=="string"?s.content:JSON.stringify(s.content)}):s!=null&&s.text&&t.push({role:"system",content:s.text});if(typeof e.message=="string"?t.push({role:"user",content:e.message}):typeof e.message=="object"&&e.message!==null&&t.push({role:"user",content:JSON.stringify(e.message)}),t.length>0)return t}if(typeof e.msg=="string")return[e.msg];if(typeof e.msg=="object"&&e.msg!==null)return[e.msg];if(e.context&&e.query)return[{role:"system",content:e.context},{role:"user",content:e.query}];if(typeof e.query=="string")return[e.query];if(e.input){if(Array.isArray(e.input))return e.input;if(Array.isArray(e.input.messages))return e.input.messages;if(typeof e.input.messages=="string")return[e.input.messages];if(typeof e.input.messages=="object"&&e.input.messages!==null)return[e.input.messages];if(typeof e.input.message=="string")return[e.input.message];if(typeof e.input.message=="object"&&e.input.message!==null)return[e.input.message];if(typeof e.input.text=="string")return[e.input.text];if(typeof e.input=="string")return[e.input]}if(e.data){if(Array.isArray(e.data.messages))return e.data.messages;if(typeof e.data.messages=="string")return[e.data.messages];if(typeof e.data.messages=="object"&&e.data.messages!==null)return[e.data.messages];if(typeof e.data.message=="string")return[e.data.message];if(typeof e.data.message=="object"&&e.data.message!==null)return[e.data.message];if(typeof e.data.prompt=="string")return[e.data.prompt];if(Array.isArray(e.data.contents))return e.data.contents;if(typeof e.data.content=="string")return[e.data.content];if(typeof e.data.text=="string")return[e.data.text]}return[]}async analyzeResponse(e,t,s,n,r=!0){let a=0,o=0,i,l=t.model,c=!0;const u=(e.headers.get("content-type")||"").toLowerCase(),d=this.store.getSettings();if(!l||pe(l)){const p=await this.resolveSiYuanModelNameIfNeeded(t.source);p&&(l=p)}const m=this.tokenCounter.estimateFromMessages(this.extractMessages(n));if(this.logDebug("analyzeResponse",{url:t.source,contentType:u,ok:e.ok,status:e.status,estimatedInput:m,bodyPreview:JSON.stringify(n).slice(0,200)}),!e.body){this.logDebug("analyzeResponse: response body is null, using input estimate only"),a=m,o=0,this.recordCall(t,a,o,s,r,l,void 0,!0);return}try{if(u.includes("text/event-stream")){const p=await this.parseSSEStream(e,t,d,m);a=p.inputTokens,o=p.outputTokens,i=p.cacheReadTokens,c=p.estimated,p.model&&(l=p.model),p.aborted&&(r=!1)}else if(u.includes("application/json")||u.includes("text/json")){const p=await e.text();this.logDebug("JSON response raw text preview:",p.slice(0,300));const g=this.tryParseJson(p);if(Te(g)&&typeof g.data!="string"){this.logDebug("Skipping SiYuan kernel non-AI response",{code:g.code,dataKeys:Object.keys(g.data||{})});return}const T=g?this.extractUsage(g):null;T&&(a=T.inputTokens,o=T.outputTokens,i=T.cacheReadTokens||void 0),g!=null&&g.model&&(l=H(g.model,l)||l),T||(a=m,o=this.tokenCounter.estimateFromText(g?this.extractOutputText(g):p)),c=!T}else if(u.includes("application/x-ndjson")||u.includes("application/ndjson")){const p=await this.parseNDJSONStream(e,t,d,m);a=p.inputTokens,o=p.outputTokens,i=p.cacheReadTokens,c=p.estimated,p.model&&(l=p.model),p.aborted&&(r=!1)}else if(u.includes("text/plain")||u.includes("text/html")||u.includes("application/xml")||u.includes("text/xml")){const p=await e.text();a=m,o=this.tokenCounter.estimateFromText(p)}else{const p=await e.text();this.logDebug("Unknown content type, raw response preview:",p.slice(0,300)),a=m;const g=this.tryParseJson(p);if(g){const T=this.extractUsage(g);T?(a=T.inputTokens,o=T.outputTokens,i=T.cacheReadTokens||void 0):o=this.tokenCounter.estimateFromText(this.extractOutputText(g))}else o=this.tokenCounter.estimateFromText(p)}}catch(p){console.warn("[TokenStats] Token extraction failed, using estimates:",p),a=m;try{const g=await e.text();o=this.tokenCounter.estimateFromText(g)}catch{o=0}}r&&a===0&&m>0&&(a=m),this.logDebug("analyzeResponse result:",{inputTokens:a,outputTokens:o,model:l,success:r});const h=a+o;this.recordCall(t,a,o,s,r,l,i,c),h>0&&d.showNotifications&&(this.keyManager.checkThreshold(t.apiKeyId,p=>{this.onThresholdAlert(t.apiKeyId,p)}),this.keyManager.checkGlobalThreshold(d,p=>{this.onThresholdAlert("global",p)}))}async parseSSEStream(e,t,s,n=0){var m;const r=(m=e.body)==null?void 0:m.getReader();if(!r)return{inputTokens:0,outputTokens:0,aborted:!1,estimated:!0};const a=new TextDecoder;let o="";const i={fullContent:"",usage:null,model:void 0};let l=0,c=!1;const u=h=>{const p=h.split(`
`),g=[];let T="";for(const x of p){const C=x.trim();C&&(C.startsWith("data:")?g.push(C.slice(5).trimStart()):C.startsWith("event:")&&(T=C.slice(6).trim()))}if(g.length===0)return;const b=g.join(`
`);if(this.logDebug("SSE raw event",{eventType:T,data:b.slice(0,500)}),b!=="[DONE]")try{const x=JSON.parse(b);if(this.logDebug("SSE parsed chunk",{eventType:T,chunk:x}),typeof x!="object"||x===null)return;const C=this.collectChunkInfo(x,i.usage,i.model,i.fullContent,T),y=i.fullContent.length;i.usage=C.usage,i.model=C.model,i.fullContent=C.fullContent,this.logDebug("SSE collected after chunk",{eventType:T,contentAdded:i.fullContent.length-y,fullContentLength:i.fullContent.length,usage:i.usage})}catch(x){this.logDebug("SSE chunk JSON parse failed",{eventType:T,data:b.slice(0,300),error:String(x)})}};try{for(;;){const{done:h,value:p}=await r.read();if(h)break;o+=a.decode(p,{stream:!0}),this.logDebug("SSE buffer received",{bufferLength:o.length,decodedLength:(p==null?void 0:p.length)??0});const{events:g,remainder:T}=this.splitSSEEvents(o);o=T,this.logDebug("SSE events split",{eventCount:g.length,remainderLength:T.length});for(const b of g)u(b);if(s.abortStreamOnExceeded&&s.blockOnQuotaExceeded){if(l=i.usage?i.usage.outputTokens:this.tokenCounter.estimateFromText(i.fullContent),this.keyManager.wouldExceedQuota(t.apiKeyId,l)){c=!0;const b=this.store.getApiKey(t.apiKeyId),x=`[TokenStats] 流式响应已中断：${(b==null?void 0:b.name)||t.apiKeyName} 的 Token 限额在生成过程中被超出`;console.warn(x),this.onThresholdAlert(t.apiKeyId,x);try{await r.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(s,l)){c=!0;const b="[TokenStats] 流式响应已中断：全局 Token 限额在生成过程中被超出";console.warn(b),this.onThresholdAlert("global",b);try{await r.cancel()}catch{}break}}}if(o.trim().length>0){const{events:h}=this.splitSSEEvents(o+`

`);for(const p of h)u(p)}}finally{r.releaseLock()}if(this.logDebug("parseSSEStream finished",{contentLength:i.fullContent.length,hasUsage:!!i.usage,usage:i.usage,estimatedInput:n}),i.usage){const h=this.tokenCounter.estimateFromText(i.fullContent);return{inputTokens:i.usage.inputTokens||n,outputTokens:i.usage.outputTokens||h,cacheReadTokens:i.usage.cacheReadTokens||void 0,model:i.model,aborted:c,estimated:!1}}const d=this.tokenCounter.estimateFromText(i.fullContent);return{inputTokens:n,outputTokens:d,model:i.model,aborted:c,estimated:!0}}splitSSEEvents(e){const t=[],n=e.replace(/\r\n/g,`
`).split(`

`),r=n.pop()||"";for(const a of n)a.trim()&&t.push(a);return{events:t,remainder:r}}collectChunkInfo(e,t,s,n,r=""){var l,c,u,d,m,h,p,g,T,b,x,C,y,A,E,O,f,k,$,R,K,P,q,D,j,G,S,I,N,z,_,B,Y,J;const a=(...w)=>{const F=H(...w);if(F)return F;const W=se(s);return W&&!Z(W)?W:""};if(e.model&&(s=a(e.model,s)),r==="content"||r==="reasoning")return e.token&&(n+=e.token,this.logDebug("SiYuan agent content appended",{token:e.token})),{usage:t,model:s,fullContent:n};if(r==="thinking")return e.reasoning&&(n+=e.reasoning,this.logDebug("SiYuan agent thinking appended",{reasoning:e.reasoning})),{usage:t,model:s,fullContent:n};if(r==="usage"){const w=e.promptTokens??e.prompt_tokens??0,F=e.completionTokens??e.completion_tokens??0;return this.logDebug("SiYuan agent usage event",{promptTokens:w,completionTokens:F,chunk:e}),(w>0||F>0)&&(t={inputTokens:w,outputTokens:F,cacheReadTokens:e.cacheReadTokens??e.cachedInputTokens??0}),{usage:t,model:s,fullContent:n}}if(r==="done"||r==="error"||r==="retry"||r==="snapshot"||r==="tool_call"||r==="tool_result"||r==="confirm"||r==="question"||r==="frontend_tool_call")return{usage:t,model:s,fullContent:n};if(e.usage){const w=e.usage,F=w.cached_input_tokens??w.cache_read_input_tokens??((l=w.prompt_tokens_details)==null?void 0:l.cached_tokens)??0;t={inputTokens:w.prompt_tokens??w.input_tokens??w.promptTokens??0,outputTokens:w.completion_tokens??w.output_tokens??w.completionTokens??0,cacheReadTokens:F}}const o=w=>{typeof w=="string"&&(n+=w)},i=(c=e.choices)==null?void 0:c[0];if((u=i==null?void 0:i.delta)!=null&&u.content&&o(i.delta.content),i!=null&&i.text&&o(i.text),(d=i==null?void 0:i.delta)!=null&&d.reasoning_content&&o(i.delta.reasoning_content),(m=i==null?void 0:i.message)!=null&&m.content&&o(i.message.content),i!=null&&i.content&&o(i.content),(p=(h=i==null?void 0:i.delta)==null?void 0:h.function_call)!=null&&p.arguments&&o(i.delta.function_call.arguments),(g=i==null?void 0:i.delta)!=null&&g.tool_calls)for(const w of i.delta.tool_calls)(T=w==null?void 0:w.function)!=null&&T.arguments&&o(w.function.arguments);if(e.type==="content_block_delta"&&((b=e.delta)!=null&&b.text)&&o(e.delta.text),e.type==="content_block_delta"&&((x=e.delta)!=null&&x.reasoning)&&o(e.delta.reasoning),e.type==="content_block_start"&&((C=e.content_block)!=null&&C.text)&&o(e.content_block.text),(y=e.message)!=null&&y.usage){const w=e.message.usage,F=w.cache_read_input_tokens??0;t={inputTokens:w.input_tokens??0,outputTokens:w.output_tokens??0,cacheReadTokens:F}}if(e.content){if(typeof e.content=="string")o(e.content);else if(Array.isArray(e.content))for(const w of e.content)o(typeof w=="string"?w:w==null?void 0:w.text)}if(e.output&&o(e.output),e.text&&o(e.text),e.result&&o(e.result),e.message&&(typeof e.message=="string"?o(e.message):e.message.content&&o(e.message.content)),(f=(O=(E=(A=e.data)==null?void 0:A.choices)==null?void 0:E[0])==null?void 0:O.delta)!=null&&f.content&&o(e.data.choices[0].delta.content),(R=($=(k=e.data)==null?void 0:k.choices)==null?void 0:$[0])!=null&&R.text&&o(e.data.choices[0].text),(D=(q=(P=(K=e.data)==null?void 0:K.choices)==null?void 0:P[0])==null?void 0:q.message)!=null&&D.content&&o(e.data.choices[0].message.content),(I=(S=(G=(j=e.data)==null?void 0:j.choices)==null?void 0:G[0])==null?void 0:S.delta)!=null&&I.reasoning_content&&o(e.data.choices[0].delta.reasoning_content),(N=e.data)!=null&&N.model&&(s=a(e.data.model,s)),(z=e.data)!=null&&z.usage){const w=e.data.usage;t={inputTokens:w.prompt_tokens??w.input_tokens??0,outputTokens:w.completion_tokens??w.output_tokens??0,cacheReadTokens:w.cached_input_tokens??w.cache_read_input_tokens??0}}if((_=e.data)!=null&&_.content){if(typeof e.data.content=="string")o(e.data.content);else if(Array.isArray(e.data.content))for(const w of e.data.content)o(typeof w=="string"?w:w==null?void 0:w.text)}return(B=e.data)!=null&&B.output&&o(e.data.output),(Y=e.data)!=null&&Y.text&&o(e.data.text),(J=e.data)!=null&&J.result&&o(e.data.result),{usage:t,model:s,fullContent:n}}async parseNDJSONStream(e,t,s,n=0){var d;const r=(d=e.body)==null?void 0:d.getReader();if(!r)return{inputTokens:0,outputTokens:0,aborted:!1,estimated:!0};const a=new TextDecoder;let o="",i="",l=null,c,u=!1;try{for(;;){const{done:m,value:h}=await r.read();if(m)break;o+=a.decode(h,{stream:!0});const p=o.split(`
`);o=p.pop()||"";for(const g of p)if(g.trim())try{const T=JSON.parse(g),b=this.collectChunkInfo(T,l,c,i);l=b.usage,c=b.model,i=b.fullContent}catch{}if(s.abortStreamOnExceeded&&s.blockOnQuotaExceeded){const g=l?l.outputTokens:this.tokenCounter.estimateFromText(i);if(this.keyManager.wouldExceedQuota(t.apiKeyId,g)){u=!0;try{await r.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(s,g)){u=!0;try{await r.cancel()}catch{}break}}}if(o.trim())try{const m=JSON.parse(o.trim()),h=this.collectChunkInfo(m,l,c,i);l=h.usage,c=h.model,i=h.fullContent}catch{}}finally{r.releaseLock()}if(this.logDebug("parseNDJSONStream finished",{contentLength:i.length,hasUsage:!!l,usage:l,estimatedInput:n}),l){const m=this.tokenCounter.estimateFromText(i);return{inputTokens:l.inputTokens||n,outputTokens:l.outputTokens||m,cacheReadTokens:l.cacheReadTokens||void 0,model:c,aborted:u,estimated:!1}}return{inputTokens:n,outputTokens:this.tokenCounter.estimateFromText(i),model:c,aborted:u,estimated:!0}}extractUsage(e){var t;if(e!=null&&e.usage){const s=e.usage,n=s.prompt_tokens??s.input_tokens??s.promptTokens??0,r=s.completion_tokens??s.output_tokens??s.completionTokens??0,a=s.cached_input_tokens??s.cache_read_input_tokens??((t=s.prompt_tokens_details)==null?void 0:t.cached_tokens)??0;return n===0&&r===0&&a===0?null:{inputTokens:n,outputTokens:r,cacheReadTokens:a}}if((e==null?void 0:e.promptTokens)!==void 0||(e==null?void 0:e.completionTokens)!==void 0){const s=e.promptTokens??0,n=e.completionTokens??0,r=e.cacheReadTokens??e.cachedInputTokens??0;return s===0&&n===0?null:{inputTokens:s,outputTokens:n,cacheReadTokens:r}}return null}extractOutputText(e){var r,a,o,i,l,c,u;if(!e)return"";const t=[],s=d=>{typeof d=="string"&&d?t.push(d):d&&typeof d.text=="string"&&d.text&&t.push(d.text)},n=d=>{var m,h,p,g,T,b,x,C;if(d&&(s((m=d==null?void 0:d.message)==null?void 0:m.content),s((h=d==null?void 0:d.message)==null?void 0:h.reasoning_content),s((p=d==null?void 0:d.delta)==null?void 0:p.content),s((g=d==null?void 0:d.delta)==null?void 0:g.reasoning_content),s(d==null?void 0:d.text),s(d==null?void 0:d.content),(b=(T=d==null?void 0:d.delta)==null?void 0:T.function_call)!=null&&b.arguments&&s(d.delta.function_call.arguments),(x=d==null?void 0:d.delta)!=null&&x.tool_calls))for(const y of d.delta.tool_calls)(C=y==null?void 0:y.function)!=null&&C.arguments&&s(y.function.arguments)};if(e.choices)for(const d of e.choices)n(d);if(e.content){if(typeof e.content=="string")s(e.content);else if(Array.isArray(e.content))for(const d of e.content)s(d)}if(e.output&&s(e.output),e.text&&s(e.text),e.result&&s(e.result),e.message&&(typeof e.message=="string"?s(e.message):(s(e.message.content),s(e.message.text))),e.response&&(typeof e.response=="string"?s(e.response):e.response.text?s(e.response.text):e.response.content&&s(e.response.content)),e.data)if(typeof e.data=="string")s(e.data);else{if(s((r=e.data)==null?void 0:r.text),s((a=e.data)==null?void 0:a.output),s((o=e.data)==null?void 0:o.result),s((i=e.data)==null?void 0:i.msg),(l=e.data)!=null&&l.choices)for(const d of e.data.choices)n(d);if((c=e.data)!=null&&c.content)if(typeof e.data.content=="string")s(e.data.content);else if(Array.isArray(e.data.content))for(const d of e.data.content)s(d);else s(e.data.content);(u=e.data)!=null&&u.message&&(s(e.data.message.content),s(e.data.message.text))}return e.msg&&s(e.msg),e.token&&s(e.token),e.reasoning&&s(e.reasoning),t.join("")}recordCall(e,t,s,n,r,a,o,i=!0){const l=this.resolveModelName(a||e.model,e),c={id:ve(),apiKeyId:e.apiKeyId,apiKeyName:e.apiKeyName,source:e.source,model:l,inputTokens:t,outputTokens:s,cacheReadTokens:o,totalTokens:t+s,timestamp:n,requestTime:Date.now()-n,success:r,estimated:i};this.store.addRecord(c),this.logDebug(`Recorded: ${c.apiKeyName} | ${c.model} | in=${t} out=${s} cache=${o??0} total=${c.totalTokens} success=${r}`),r&&t===0&&s===0&&console.warn("[TokenStats] 本次请求 token 计数为 0。若持续出现，请在设置中开启“启用调试日志”，并在浏览器控制台中查看请求/响应详情。")}resolveModelName(e,t){var a;const s=[];s.push(e,t.model),this.isSiYuanAiSource(t.source)&&s.push(this.resolveSiYuanModelNameFromConfig((a=this.siyuanConfigCache)==null?void 0:a.config));const n=H(...s);return n||se(e)||se(t.model)||t.source||"unknown"}async resolveSiYuanModelNameIfNeeded(e){return this.isSiYuanAiSource(e)?this.getSiYuanModelName():null}isSiYuanAiSource(e){return e==="siyuan-ai"||e.includes("/api/ai/")}async getSiYuanAiConfig(){var e,t;if(this.siyuanConfigCache&&Date.now()-this.siyuanConfigCache.ts<5e3)return this.siyuanConfigCache.config;try{const s=window.siyuan,n=(e=s==null?void 0:s.config)==null?void 0:e.ai;if(n)return this.siyuanConfigCache={config:n,ts:Date.now()},n;const r=await this.originalFetch("/api/system/getConf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});if(!r.ok)return null;const a=await r.json(),o=((t=a==null?void 0:a.data)==null?void 0:t.ai)||(a==null?void 0:a.ai);if(o)return this.siyuanConfigCache={config:o,ts:Date.now()},o}catch{}return null}findProviderByModel(e,t){if(!e||!t)return null;const s=String(t).toLowerCase().trim();if(!s)return null;const n=e.providers||[];for(const r of n){if(!r||!r.enabled)continue;if((r.models||[]).find(o=>{const i=String((o==null?void 0:o.id)||"").toLowerCase().trim(),l=String((o==null?void 0:o.name)||"").toLowerCase().trim(),c=String((o==null?void 0:o.displayName)||"").toLowerCase().trim();return i===s||l===s||c===s}))return r}return null}resolveSiYuanModelNameFromConfig(e){var o,i;if(!e)return null;const t=e.agent||{},s=e.editing||{},n=t.modelId||s.modelId,r=t.modelName||t.displayName||t.name||s.modelName||s.displayName||s.name;if(r&&!Z(r))return r;const a=e.providers||[];if(n)for(const l of a){if(!(l!=null&&l.enabled))continue;const c=(l.models||[]).find(u=>(u==null?void 0:u.id)===n);if(c)return c.displayName||c.name||c.id||null}for(const l of a){if(!(l!=null&&l.enabled))continue;const c=((o=l.models)==null?void 0:o.find(u=>u==null?void 0:u.default))||((i=l.models)==null?void 0:i[0]);if(c)return c.displayName||c.name||c.id||null;if(l.name&&!Z(l.name))return l.name}return n&&!Z(n)?n:null}resolveModelNameFromProvider(e){if(!(e!=null&&e.models)||!Array.isArray(e.models))return null;const t=e.models.find(s=>s==null?void 0:s.default)||e.models[0];return t&&H(t.displayName,t.name,t.id)||null}async getSiYuanModelName(){return this.resolveSiYuanModelNameFromConfig(await this.getSiYuanAiConfig())}}function L(v){return v?v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}class Ce{constructor(e,t){this.onManualSync=null,this.store=e,this.keyManager=t,this.setting=this.build()}build(){const e=this,t=new M.Setting({width:this.isMobile()?"92vw":"700px",height:"auto",confirmCallback:()=>{e.saveGlobalSettings(),M.showMessage("设置已保存",2e3,"info")}});setTimeout(()=>this.ensureDialogScrollable(),0);const s=this.store.getSettings();return t.addItem({title:"按 API Base URL 匹配 Key",description:"拦截请求时优先按 URL 匹配已配置的 API Key，适用于思源 AI、自定义代理等场景",createActionElement:()=>this.createCheckbox("matchByUrl",s.matchByUrl??!0)}),t.addItem({title:"拦截外部 API 调用",description:"拦截第三方插件对 OpenAI / Anthropic / DeepSeek 等外部 API 的直接调用",createActionElement:()=>this.createCheckbox("interceptExternalAPIs",s.interceptExternalAPIs)}),t.addItem({title:"超出限额时阻止请求",description:"当某个 API Key 的 Token 用量达到限额时，阻止后续请求（谨慎开启）",createActionElement:()=>this.createCheckbox("blockOnQuotaExceeded",s.blockOnQuotaExceeded)}),t.addItem({title:"限额重置周期",description:"按周期自动重置 Token 用量统计。每月 = 每月 1 日归零，每日 = 每天归零",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-quotaResetCycle";const r=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of r){const o=document.createElement("option");o.value=a.value,o.textContent=a.label,s.quotaResetCycle===a.value&&(o.selected=!0),n.appendChild(o)}return n}}),t.addItem({title:"自定义周期天数（天）",description:"单 Key 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）。例如 14 = 每两周、90 = 每季。下方全局周期也共用此天数。",createActionElement:()=>this.createCustomDaysInput("tks-customResetDays")}),t.addItem({title:"流式响应中途超限时中断",description:"当流式 AI 响应生成过程中 Token 超出限额时，立即中断流（避免继续消耗）",createActionElement:()=>this.createCheckbox("abortStreamOnExceeded",s.abortStreamOnExceeded)}),t.addItem({title:"显示阈值提醒通知",description:"当 Token 用量达到设定的提醒阈值时，在思源底部弹出通知",createActionElement:()=>this.createCheckbox("showNotifications",s.showNotifications)}),t.addItem({title:"顶栏显示实时用量徽标",description:"在顶栏图标上显示当前全局用量（无全局限额时显示总 token 数，设有全局限额时显示百分比，颜色随阈值变化）",createActionElement:()=>this.createCheckbox("showTopBarBadge",s.showTopBarBadge)}),t.addItem({title:"启用调试日志",description:"在浏览器控制台输出请求/响应调试信息，排查 token 统计为 0 等问题（重启插件后生效）",createActionElement:()=>this.createCheckbox("debugLogging",s.debugLogging??!1)}),t.addItem({title:"最大记录数",description:"保留的最近调用记录数量，超出后自动裁剪旧记录（节省存储空间）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-max-records",n.value=String(s.maxRecords),n.min="100",n.max="50000",n.step="100",n}}),t.addItem({title:"全局总 Token 限额",description:"所有 API Key 的 Token 用量总和超过此值时触发拦截（0 = 不开启）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalQuotaLimit",n.value=String(s.globalQuotaLimit||0),n.min="0",n.step="1000",n}}),t.addItem({title:"全局提醒阈值 (%)",description:"全局 Token 用量达到此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalAlertThreshold",n.value=String(s.globalAlertThreshold||0),n.min="0",n.max="100",n.step="5",n}}),t.addItem({title:"全局限额重置周期",description:"按周期自动重置全局 Token 用量统计",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-globalQuotaResetCycle";const r=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of r){const o=document.createElement("option");o.value=a.value,o.textContent=a.label,s.globalQuotaResetCycle===a.value&&(o.selected=!0),n.appendChild(o)}return n}}),t.addItem({title:"全局周期自定义天数（天）",description:"全局 Token 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方单 Key 周期共用同一天数",createActionElement:()=>this.createCustomDaysInput("tks-globalQuotaResetDays")}),t.addItem({title:"全局已用 Token 校准",description:"手动输入从第三方平台导入的历史已用 Token，叠加到全局统计中（0 = 不校准）",createActionElement:()=>{const n=document.createElement("div");n.style.display="flex",n.style.gap="8px",n.style.alignItems="center";const r=(a,o,i)=>{const l=document.createElement("div");l.style.flex="1";const c=document.createElement("div");c.style.fontSize="12px",c.style.color="var(--b3-theme-on-surface)",c.textContent=o;const u=document.createElement("input");return u.type="number",u.className="b3-text-field",u.id=`tks-${a}`,u.value=String(i||0),u.min="0",u.step="100",u.style.width="100%",l.appendChild(c),l.appendChild(u),l};return n.appendChild(r("globalUsedTokensOffset","总 Token",s.globalUsedTokensOffset)),n.appendChild(r("globalUsedInputTokensOffset","输入",s.globalUsedInputTokensOffset)),n.appendChild(r("globalUsedOutputTokensOffset","输出",s.globalUsedOutputTokensOffset)),n}}),t.addItem({title:"全局费用限额",description:"当前周期内所有 API 调用的估算总费用超过此金额时触发提醒与拦截（0 = 不开启；需先在「费用估算配置」中设置模型单价）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalCostLimit",n.value=String(s.globalCostLimit||0),n.min="0",n.step="1",n}}),t.addItem({title:"全局费用提醒阈值 (%)",description:"全局费用达到限额的此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalCostAlertThreshold",n.value=String(s.globalCostAlertThreshold||0),n.min="0",n.max="100",n.step="5",n}}),t.addItem({title:"全局费用重置周期",description:"按周期自动重置全局费用用量统计（独立于「全局限额重置周期」，可与 Token 限额采用不同节奏）",createActionElement:()=>{const n=document.createElement("select");n.className="b3-select fn__size200",n.id="tks-globalCostResetCycle";const r=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of r){const o=document.createElement("option");o.value=a.value,o.textContent=a.label,s.globalCostResetCycle===a.value&&(o.selected=!0),n.appendChild(o)}return n}}),t.addItem({title:"全局费用周期自定义天数（天）",description:"全局费用限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方周期共用同一天数",createActionElement:()=>this.createCustomDaysInput("tks-globalCostResetDays")}),t.addItem({title:"全局已用费用校准",description:"手动输入从第三方平台导入的历史已花费金额，叠加到全局费用统计中（0 = 不校准；单位与货币类型一致）",createActionElement:()=>{const n=document.createElement("input");return n.type="number",n.className="b3-text-field fn__size200",n.id="tks-globalUsedCostOffset",n.value=String(s.globalUsedCostOffset||0),n.min="0",n.step="1",n}}),t.addItem({title:"费用估算配置",description:"设置每模型单价（每 1K tokens 的输入/输出价格）与资源包（一个包涵盖多个模型），仪表盘将显示估算费用。注意：费用估算完全依赖此处配置，单价 / 资源包填错会显著放大费用误差，请以 API 服务商账单为准；使用前请先阅读 README「统计精度与免责声明」章节",actionElement:this.createButton("配置",()=>this.openPriceEditor())}),t.addItem({title:"API Key 管理",description:"添加、编辑、删除 API Key，为每个 Key 设置限额与提醒阈值",actionElement:this.createButton("管理 API Key",()=>this.openKeyManager())}),t.addItem({title:"仪表盘区分精确/估算",description:"开启后，仪表盘「总 Tokens」卡片将拆分展示「精确值（来自 API 响应 usage 字段）」与「启发式估算」各自的 Token 量，便于评估统计可信度。仅 v1.4.19 及以后新增的记录可区分；旧版本记录无此标记，统一计入估算。",createActionElement:()=>this.createCheckbox("dashboardSplitExactEstimate",s.dashboardSplitExactEstimate??!1)}),t.addItem({title:"跨端统计合并",description:"开启后，各端（电脑 / 鸿蒙 / 浏览器）通过思源数据同步共享同一套 API Key 时，自动按记录合并多方 Token 用量，汇总到每一端；关闭则仅统计本端。",createActionElement:()=>this.createCheckbox("syncStatistics",s.syncStatistics??!0)}),t.addItem({title:"立即同步统计",description:"触发思源云同步（通过官方内核 API /api/sync/performSync）并合并其他端的统计记录（例如手机端一键拉取电脑端历史数据），不受上方开关限制。需先在思源「设置 - 关于 - 云端」中配置并启用云同步（已登录 S3/WebDAV 等存储服务）。若思源未配置云同步，则只合并本地已有数据。",actionElement:this.createButton("立即同步",()=>this.handleManualSync())}),t.addItem({title:"仪表盘免责提示",description:"本插件统计数据与各 API 供应商官方账单可能存在误差（原因包括：部分请求未被拦截、单价配置偏差、启发式估算精度限制、云同步合并延迟等），请以 API 供应商的统计及账单为准。开启时，仪表盘面板顶部会常驻显示橙色免责横幅；关闭后横幅不再显示。注意：仪表盘内的「本次不再提示」按钮仅隐藏当前会话（重启思源后自动恢复），而此处开关为永久关闭。",createActionElement:()=>{const n=this.createCheckbox("showDisclaimer",s.showDisclaimer??!0);return n.addEventListener("change",()=>{n.checked?this.store.updateSettings({showDisclaimer:!0}):M.confirm("关闭免责提示",`关闭后仪表盘将不再显示本免责提示。

本插件统计数据仅供参考，实际用量与费用请以各 API 供应商的官方账单为准。使用本插件即代表您认可统计结果可能存在误差。

是否确认关闭？`,()=>{this.store.updateSettings({showDisclaimer:!1})},()=>{n.checked=!0})}),n}}),t.addItem({title:"导出统计数据",description:"将所有统计数据导出为 JSON 文件",actionElement:this.createButton("导出",()=>this.exportData())}),t.addItem({title:"清除调用记录",description:"删除所有 Token 调用记录，但保留 API Key 配置",actionElement:this.createButton("清除记录",()=>this.clearRecords())}),t.addItem({title:"重置全部数据",description:"清除所有调用记录并恢复默认设置，API Key 配置保留不变",actionElement:this.createButton("重置",()=>this.resetAll())}),t}createCheckbox(e,t){const s=document.createElement("input");return s.type="checkbox",s.id=`tks-${e}`,s.className="b3-switch",s.checked=t,s}createButton(e,t){const s=document.createElement("button");return s.className="b3-button b3-button--outline",s.textContent=e,s.style.fontSize="14px",s.addEventListener("click",t),s}createCustomDaysInput(e){const t=document.createElement("input");t.type="number",t.className="b3-text-field fn__size200",t.id=e,t.value=String(this.store.getSettings().customResetDays||30),t.min="1",t.max="365",t.step="1";const s=["tks-customResetDays","tks-globalQuotaResetDays","tks-globalCostResetDays"];return t.addEventListener("input",()=>{const n=t.value;for(const r of s){if(r===e)continue;const a=document.getElementById(r);a&&a.value!==n&&(a.value=n)}}),t}async handleManualSync(){const e=document.activeElement;e&&(e.disabled=!0,e.textContent="同步中…");try{if(!this.onManualSync){M.showMessage("同步功能未就绪",2e3,"error");return}await this.onManualSync()}catch{M.showMessage("同步失败，请确认思源数据同步已开启",3e3,"error")}finally{e&&(e.disabled=!1,e.textContent="立即同步")}}saveGlobalSettings(){var b,x,C,y,A,E,O,f,k;const e=$=>{var R;return((R=document.getElementById(`tks-${$}`))==null?void 0:R.checked)??!1},t=parseInt(((b=document.getElementById("tks-max-records"))==null?void 0:b.value)||"5000",10),s=((x=document.getElementById("tks-quotaResetCycle"))==null?void 0:x.value)||"monthly",n=parseInt(((C=document.getElementById("tks-globalQuotaLimit"))==null?void 0:C.value)||"0",10)||0,r=parseInt(((y=document.getElementById("tks-globalAlertThreshold"))==null?void 0:y.value)||"0",10)||0,a=((A=document.getElementById("tks-globalQuotaResetCycle"))==null?void 0:A.value)||"monthly",o=$=>{var R;return parseInt(((R=document.getElementById(`tks-${$}`))==null?void 0:R.value)||"0",10)||0},i=Math.max(0,o("globalUsedTokensOffset")),l=Math.max(0,o("globalUsedInputTokensOffset")),c=Math.max(0,o("globalUsedOutputTokensOffset")),u=parseFloat(((E=document.getElementById("tks-globalCostLimit"))==null?void 0:E.value)||"0")||0,d=parseInt(((O=document.getElementById("tks-globalCostAlertThreshold"))==null?void 0:O.value)||"0",10)||0,m=((f=document.getElementById("tks-globalCostResetCycle"))==null?void 0:f.value)||"monthly",h=Math.max(0,parseFloat(((k=document.getElementById("tks-globalUsedCostOffset"))==null?void 0:k.value)||"0")||0),p=Math.max(1,o("customResetDays")),g=n!==this.store.getSettings().globalQuotaLimit||r!==this.store.getSettings().globalAlertThreshold;this.store.updateSettings({matchByUrl:e("matchByUrl"),interceptExternalAPIs:e("interceptExternalAPIs"),blockOnQuotaExceeded:e("blockOnQuotaExceeded"),quotaResetCycle:s,abortStreamOnExceeded:e("abortStreamOnExceeded"),showNotifications:e("showNotifications"),showTopBarBadge:e("showTopBarBadge"),debugLogging:e("debugLogging"),maxRecords:isNaN(t)?5e3:Math.max(100,Math.min(5e4,t)),globalQuotaLimit:Math.max(0,n),globalAlertThreshold:Math.max(0,Math.min(100,r)),globalQuotaResetCycle:a,globalUsedTokensOffset:i,globalUsedInputTokensOffset:l,globalUsedOutputTokensOffset:c,globalCostLimit:Math.max(0,u),globalCostAlertThreshold:Math.max(0,Math.min(100,d)),globalCostResetCycle:m,globalUsedCostOffset:h,customResetDays:p,syncStatistics:e("syncStatistics"),showDisclaimer:e("showDisclaimer"),dashboardSplitExactEstimate:e("dashboardSplitExactEstimate")}),g&&this.keyManager.resetGlobalAlert(),(u!==this.store.getSettings().globalCostLimit||d!==this.store.getSettings().globalCostAlertThreshold||m!==this.store.getSettings().globalCostResetCycle||h!==this.store.getSettings().globalUsedCostOffset)&&this.keyManager.resetGlobalCostAlert()}refreshFromStore(){var a;const e=this.store.getSettings(),t=document.activeElement,s=!!t&&((a=t.id)==null?void 0:a.startsWith("tks-")),n=(o,i)=>{if(s&&t.id===`tks-${o}`)return;const l=document.getElementById(`tks-${o}`);l&&(l.checked=!!i)},r=(o,i)=>{if(s&&t.id===`tks-${o}`)return;const l=document.getElementById(`tks-${o}`);l&&(l.value=String(i))};if(n("matchByUrl",e.matchByUrl??!0),n("interceptExternalAPIs",e.interceptExternalAPIs),n("blockOnQuotaExceeded",e.blockOnQuotaExceeded),n("abortStreamOnExceeded",e.abortStreamOnExceeded),n("showNotifications",e.showNotifications),n("showTopBarBadge",e.showTopBarBadge),n("debugLogging",e.debugLogging??!1),n("syncStatistics",e.syncStatistics??!0),n("showDisclaimer",e.showDisclaimer??!0),n("dashboardSplitExactEstimate",e.dashboardSplitExactEstimate??!1),r("max-records",e.maxRecords),r("globalQuotaLimit",e.globalQuotaLimit),r("globalAlertThreshold",e.globalAlertThreshold),r("globalUsedTokensOffset",e.globalUsedTokensOffset),r("globalUsedInputTokensOffset",e.globalUsedInputTokensOffset),r("globalUsedOutputTokensOffset",e.globalUsedOutputTokensOffset),r("globalCostLimit",e.globalCostLimit),r("globalCostAlertThreshold",e.globalCostAlertThreshold),r("globalUsedCostOffset",e.globalUsedCostOffset),r("customResetDays",e.customResetDays),r("globalQuotaResetDays",e.customResetDays),r("globalCostResetDays",e.customResetDays),!(s&&t.id==="tks-quotaResetCycle")){const o=document.getElementById("tks-quotaResetCycle");o&&(o.value=e.quotaResetCycle)}if(!(s&&t.id==="tks-globalQuotaResetCycle")){const o=document.getElementById("tks-globalQuotaResetCycle");o&&(o.value=e.globalQuotaResetCycle)}if(!(s&&t.id==="tks-globalCostResetCycle")){const o=document.getElementById("tks-globalCostResetCycle");o&&(o.value=e.globalCostResetCycle)}}ensureDialogScrollable(){const e=document.getElementById("tks-matchByUrl")||document.getElementById("tks-interceptExternalAPIs");if(!e)return;const t=e.closest(".b3-dialog");if(!t)return;const s=t.querySelector(".b3-dialog__body");s&&(t.style.maxHeight="85vh",s.style.maxHeight="calc(85vh - 120px)",s.style.overflowY="auto")}isMobile(){const e=M.getFrontend();return e==="mobile"||e==="browser-mobile"}openPriceEditor(){const e=this.store.getSettings(),t=this.isMobile(),s=new M.Dialog({title:"费用估算配置",width:t?"95vw":"640px",height:"auto",content:'<div id="tks-price-editor" class="tks-price-editor"></div>'});setTimeout(()=>this.renderPriceEditor(s,{...e.modelPrices},e.currency||"¥",(e.pricePacks||[]).map(n=>({...n,models:[...n.models]}))),50)}renderPriceEditor(e,t,s,n){var g,T,b,x,C;const r=e.element.querySelector("#tks-price-editor");if(!r)return;const a=this.store.getSettings().recalcCostOnPriceChange!==!1,o=this.store.getSettings().packCountCacheRead!==!1,i=(y,A,E,O)=>`
      <div class="tks-price-row">
        <input type="text" class="b3-text-field tks-price-model" value="${L(y)}" placeholder="模型名（如 gpt-4o）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-input" value="${L(String(A))}" placeholder="输入/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-cache" value="${L(String(O??0))}" placeholder="缓存命中/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-output" value="${L(String(E))}" placeholder="输出/1K" />
        <button class="b3-button b3-button--small b3-button--danger tks-price-del" title="删除">✕</button>
      </div>
    `,l=y=>{const A=this.store.getPackUsage(y),E=y.totalTokens||0;let O;if(E>0){const f=Math.max(0,E-A.usedTokens);O=`已用 ${A.usedTokens.toLocaleString()} / 总量 ${E.toLocaleString()}（剩余 ${f.toLocaleString()}）`}else O=`已用 ${A.usedTokens.toLocaleString()}（总量不限）`;return`
      <div class="tks-pack-row" data-pack-id="${L(y.id)}">
        <input type="text" class="b3-text-field tks-pack-name" value="${L(y.name)}" placeholder="资源包名（如 通义千问）" />
        <input type="number" step="1" min="0" class="b3-text-field tks-pack-total" value="${L(String(y.totalTokens||0))}" placeholder="总 Tokens（0 不限）" />
        <input type="number" step="0.01" min="0" class="b3-text-field tks-pack-totalprice" value="${L(String(y.totalPrice??""))}" placeholder="打包总价（¥）" title="填入后启用打包价模式：费用 = 已用 tokens / 总 tokens × 总价格，忽略下方逐项单价。留空或 0 则使用逐项单价模式。" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-input" value="${L(String(y.input))}" placeholder="输入单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-cache" value="${L(String(y.cacheRead??0))}" placeholder="缓存命中单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-output" value="${L(String(y.output))}" placeholder="输出单价/1K" />
        <input type="text" class="b3-text-field tks-pack-models" value="${L((y.models||[]).join(", "))}" placeholder="涵盖模型，逗号分隔" />
        <button class="b3-button b3-button--small b3-button--danger tks-pack-del" title="删除">✕</button>
        <div class="tks-pack-usage">${L(O)}</div>
      </div>
    `},c=Object.entries(t).map(([y,A])=>i(y,A.input,A.output,A.cacheRead)).join(""),u=n.map(y=>l(y)).join("");r.innerHTML=`
      <div class="tks-price-warning">
        ⚠️ 费用估算完全依赖下方单价与资源包配置。<b>填错单价（数量级）、模型名与请求实际模型不匹配、或资源包计价模式选错，都会直接放大费用估算误差</b>。本插件数据为估算参考，请以 API 服务商官方账单为准；使用前请阅读 README「统计精度与免责声明」章节。
      </div>
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
      <div class="tks-price-opt">
        <label class="tks-price-opt-label"><input type="checkbox" id="tks-price-packcache" ${o?"checked":""} /> 资源包模式下缓存命中计入费用</label>
        <span class="tks-price-opt-hint">默认开启。关闭后，由资源包（逐项或打包价模式）匹配到的请求，其缓存命中 tokens 不再计入费用估算，可避免「大量命中缓存」场景下费用被高估；单模型单价配置不受此开关影响。</span>
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
      <div class="tks-pack-list" id="tks-pack-list">${u||'<div class="tks-price-empty">尚未配置任何资源包</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-pack-add">+ 添加资源包</button>
        <span style="flex:1"></span>
        <button class="b3-button b3-button--text" id="tks-price-export">📤 导出配置</button>
        <button class="b3-button b3-button--text" id="tks-price-import">📥 导入配置</button>
        <button class="b3-button b3-button--outline" id="tks-price-save">保存</button>
      </div>
    `;const d=r.querySelector("#tks-price-list"),m=r.querySelector("#tks-pack-list"),h=y=>{var A;(A=y.querySelector(".tks-price-del"))==null||A.addEventListener("click",()=>{y.remove(),d.querySelectorAll(".tks-price-row").length===0&&(d.innerHTML='<div class="tks-price-empty">尚未配置任何模型单价</div>')})};d.querySelectorAll(".tks-price-row").forEach(y=>h(y)),(g=r.querySelector("#tks-price-add"))==null||g.addEventListener("click",()=>{const y=d.querySelector(".tks-price-empty");y&&y.remove(),d.insertAdjacentHTML("beforeend",i("",0,0,0)),h(d.lastElementChild)});const p=y=>{var A;(A=y.querySelector(".tks-pack-del"))==null||A.addEventListener("click",()=>{y.remove(),m.querySelectorAll(".tks-pack-row").length===0&&(m.innerHTML='<div class="tks-price-empty">尚未配置任何资源包</div>')})};m.querySelectorAll(".tks-pack-row").forEach(y=>p(y)),(T=r.querySelector("#tks-pack-add"))==null||T.addEventListener("click",()=>{const y=m.querySelector(".tks-price-empty");y&&y.remove();const A={id:`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,name:"",totalTokens:0,input:0,output:0,models:[]};m.insertAdjacentHTML("beforeend",l(A)),p(m.lastElementChild)}),(b=r.querySelector("#tks-price-save"))==null||b.addEventListener("click",()=>{var k,$,R;const y={};d.querySelectorAll(".tks-price-row").forEach(K=>{var G,S,I,N;const P=(((G=K.querySelector(".tks-price-model"))==null?void 0:G.value)||"").toLowerCase().trim().replace(/[\s\-_]+/g,""),q=parseFloat(((S=K.querySelector(".tks-price-input"))==null?void 0:S.value)||"0")||0,D=parseFloat(((I=K.querySelector(".tks-price-cache"))==null?void 0:I.value)||"0")||0,j=parseFloat(((N=K.querySelector(".tks-price-output"))==null?void 0:N.value)||"0")||0;P&&(y[P]={input:q,output:j,...D>0?{cacheRead:D}:{}})});const A=[];m.querySelectorAll(".tks-pack-row").forEach(K=>{var z,_,B,Y,J,w,F;const P=K.dataset.packId||`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,q=(((z=K.querySelector(".tks-pack-name"))==null?void 0:z.value)||"").trim(),D=parseInt(((_=K.querySelector(".tks-pack-total"))==null?void 0:_.value)||"0",10)||0,j=parseFloat(((B=K.querySelector(".tks-pack-totalprice"))==null?void 0:B.value)||"0")||0,G=parseFloat(((Y=K.querySelector(".tks-pack-input"))==null?void 0:Y.value)||"0")||0,S=parseFloat(((J=K.querySelector(".tks-pack-cache"))==null?void 0:J.value)||"0")||0,I=parseFloat(((w=K.querySelector(".tks-pack-output"))==null?void 0:w.value)||"0")||0,N=(((F=K.querySelector(".tks-pack-models"))==null?void 0:F.value)||"").split(/[,，]/).map(W=>W.toLowerCase().trim().replace(/[\s\-_]+/g,"")).filter(Boolean);(q||N.length>0)&&A.push({id:P,name:q,totalTokens:D,...j>0?{totalPrice:j}:{},input:G,output:I,...S>0?{cacheRead:S}:{},models:N})});const E=((k=r.querySelector("#tks-price-currency"))==null?void 0:k.value)||"¥",O=(($=r.querySelector("#tks-price-recalc"))==null?void 0:$.checked)??!0,f=((R=r.querySelector("#tks-price-packcache"))==null?void 0:R.checked)??!0;this.store.updateSettings({currency:E,modelPrices:y,pricePacks:A,recalcCostOnPriceChange:O,packCountCacheRead:f}),this.store.save(),e.destroy(),M.showMessage("费用配置已保存",2e3,"info")}),(x=r.querySelector("#tks-price-export"))==null||x.addEventListener("click",()=>this.exportPriceConfig()),(C=r.querySelector("#tks-price-import"))==null||C.addEventListener("click",()=>this.importPriceConfig(e))}exportPriceConfig(){const e=this.store.getSettings(),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),currency:e.currency||"¥",recalcCostOnPriceChange:e.recalcCostOnPriceChange!==!1,modelPrices:e.modelPrices||{},pricePacks:e.pricePacks||[]},null,2),s=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(s),r=document.createElement("a");r.href=n,r.download=`siyuan-token-stats-prices-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),setTimeout(()=>{document.body.removeChild(r),URL.revokeObjectURL(n)},1e3),M.showMessage("费用配置已导出",2e3,"info")}importPriceConfig(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async s=>{var r;const n=(r=s.target.files)==null?void 0:r[0];if(n)try{const a=await n.text(),o=JSON.parse(a),i=o&&o.modelPrices&&typeof o.modelPrices=="object"?o.modelPrices:{},l=Array.isArray(o==null?void 0:o.pricePacks)?o.pricePacks:[],c=typeof(o==null?void 0:o.currency)=="string"?o.currency:this.store.getSettings().currency||"¥",u=typeof(o==null?void 0:o.recalcCostOnPriceChange)=="boolean"?o.recalcCostOnPriceChange:!0,d=l.map(m=>({...m,models:Array.isArray(m==null?void 0:m.models)?[...m.models]:[]}));this.renderPriceEditor(e,{...i},c,d),setTimeout(()=>{const m=e.element.querySelector("#tks-price-recalc");m&&(m.checked=u)},10),M.showMessage("已载入导入的费用配置，请检查后点击保存",2e3,"info")}catch(a){console.error("[TokenStats] Import price config failed:",a),M.showMessage("导入失败："+((a==null?void 0:a.message)||"文件格式不正确"),3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}openKeyManager(){const e=this.isMobile(),t=new M.Dialog({title:"API Key 管理",width:e?"95vw":"750px",height:e?"80vh":"500px",content:'<div id="tks-key-mgr" class="tks-key-mgr"></div>'});setTimeout(()=>this.renderKeyList(t),50)}renderKeyList(e){var r,a,o;const t=e.element.querySelector("#tks-key-mgr");if(!t)return;const s=this.store.getApiKeys();t.innerHTML=`
      <div class="tks-key-toolbar">
        <button class="b3-button b3-button--text" id="tks-add-key">+ 添加 API Key</button>
        <button class="b3-button b3-button--text" id="tks-export-keys">📤 导出</button>
        <button class="b3-button b3-button--text" id="tks-import-keys">📥 导入</button>
        <span class="tks-key-hint">共 ${s.length} 个 Key</span>
      </div>
      <div class="tks-key-list" id="tks-key-list-items"></div>
    `;const n=t.querySelector("#tks-key-list-items");for(const i of s){const l=this.keyManager.getKeyUsage(i.id),c=i.quotaLimit>0?Math.min(100,l.totalTokens/i.quotaLimit*100):0,u=document.createElement("div");u.className="tks-key-item",u.innerHTML=`
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
              <div class="tks-quota-fill ${c>=(i.alertThreshold||100)?"tks-quota-alert":""}"
                   style="width: ${c}%"></div>
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
      `,n.appendChild(u)}(r=t.querySelector("#tks-add-key"))==null||r.addEventListener("click",()=>{this.openKeyEditor(e,null)}),(a=t.querySelector("#tks-export-keys"))==null||a.addEventListener("click",()=>{this.exportKeys()}),(o=t.querySelector("#tks-import-keys"))==null||o.addEventListener("click",()=>{this.importKeys(e)}),t.querySelectorAll("[data-action]").forEach(i=>{i.addEventListener("click",l=>{const c=l.currentTarget,u=c.dataset.action,d=c.dataset.id;if(u==="edit"){const m=this.store.getApiKey(d);m&&this.openKeyEditor(e,m)}else u==="delete"&&M.confirm("删除 API Key","确定删除此 API Key 吗？相关统计记录将保留。",()=>{this.store.deleteApiKey(d),this.keyManager.resetAlert(d),this.renderKeyList(e),M.showMessage("已删除",2e3,"info")})})})}openKeyEditor(e,t){var o,i,l;const s=!!t,n=this.isMobile(),r=new M.Dialog({title:s?"编辑 API Key":"添加 API Key",width:n?"92vw":"500px",height:"auto",content:`
        <div class="tks-key-editor">
          <div class="tks-form-row">
            <label>名称</label>
            <input type="text" id="tke-name" class="b3-text-field" value="${L((t==null?void 0:t.name)||"")}" placeholder="例如：我的 OpenAI Key" />
          </div>
          <div class="tks-form-row">
            <label>API Key</label>
            <input type="password" id="tke-key" class="b3-text-field" value="" placeholder="sk-..." />
            <div class="tks-form-hint">用于匹配请求头中的 Authorization / x-api-key；编辑时留空则保留现有密钥，仅按 URL 匹配时可不填</div>
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
      `}),a=r.element;(o=a.querySelector("#tke-provider"))==null||o.addEventListener("input",c=>{const u=c.target.value.trim(),d=a.querySelector("#tke-url");!d.value&&u&&(d.value=this.keyManager.getDefaultBaseUrl(u))}),(i=a.querySelector("#tke-cancel"))==null||i.addEventListener("click",()=>r.destroy()),(l=a.querySelector("#tke-save"))==null||l.addEventListener("click",()=>{const c=a.querySelector("#tke-name").value.trim(),u=a.querySelector("#tke-key").value.trim(),d=a.querySelector("#tke-provider").value.trim(),m=a.querySelector("#tke-url").value.trim(),h=a.querySelector("#tke-models").value.split(/[,，]/).map(y=>y.trim()).filter(Boolean),p=parseInt(a.querySelector("#tke-quota").value,10)||0,g=parseInt(a.querySelector("#tke-threshold").value,10)||0,T=Math.max(0,parseInt(a.querySelector("#tke-usedTokensOffset").value,10)||0),b=Math.max(0,parseInt(a.querySelector("#tke-usedInputTokensOffset").value,10)||0),x=Math.max(0,parseInt(a.querySelector("#tke-usedOutputTokensOffset").value,10)||0),C=a.querySelector("#tke-enabled").value==="true";if(!c){M.showMessage("请输入名称",3e3,"error");return}if(s&&t){const y={name:c,provider:d,baseUrl:m,models:h,quotaLimit:p,alertThreshold:g,usedTokensOffset:T,usedInputTokensOffset:b,usedOutputTokensOffset:x,enabled:C};u&&(y.keyFull=u,y.keyMasked=this.keyManager.maskKey(u)),this.store.updateApiKey(t.id,y),this.keyManager.resetAlert(t.id)}else{const y={id:this.keyManager.generateKeyId(),name:c,keyFull:u,keyMasked:this.keyManager.maskKey(u),provider:d,baseUrl:m,models:h,quotaLimit:p,usedTokensOffset:T,usedInputTokensOffset:b,usedOutputTokensOffset:x,alertThreshold:g,enabled:C,createdAt:Date.now()};this.store.addApiKey(y)}this.store.save(),r.destroy(),this.renderKeyList(e),M.showMessage("已保存",2e3,"info")})}exportKeys(){const e=this.store.getApiKeys().map(a=>{const{keyFull:o,...i}=a;return i}),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),apiKeys:e},null,2),s=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(s),r=document.createElement("a");r.href=n,r.download=`siyuan-token-stats-keys-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(r),r.click(),setTimeout(()=>{document.body.removeChild(r),URL.revokeObjectURL(n)},1e3),M.showMessage(`已导出 ${e.length} 个 API Key`,2e3,"info")}importKeys(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async s=>{var r;const n=(r=s.target.files)==null?void 0:r[0];if(n)try{const a=await n.text(),o=JSON.parse(a),i=Array.isArray(o)?o:o.apiKeys;if(!Array.isArray(i))throw new Error("导入文件格式不正确，未找到 apiKeys 数组");let l=0,c=0;for(const d of i){if(!d||!d.keyFull&&!d.keyHash)continue;const m=Array.isArray(d.models)?d.models:typeof d.models=="string"?d.models.split(/[,，]/).map(g=>g.trim()).filter(Boolean):[],h=d.keyHash||(d.keyFull?ne(d.keyFull):""),p=h?this.store.getApiKeys().find(g=>g.keyHash===h):void 0;if(p){const g={name:d.name||p.name,provider:d.provider||p.provider,baseUrl:d.baseUrl||p.baseUrl,models:m.length?m:p.models||[],quotaLimit:d.quotaLimit??p.quotaLimit,alertThreshold:d.alertThreshold??p.alertThreshold,enabled:d.enabled??p.enabled};d.keyFull&&(g.keyFull=d.keyFull,g.keyMasked=this.keyManager.maskKey(d.keyFull)),this.store.updateApiKey(p.id,g),c++}else this.store.addApiKey({id:this.keyManager.generateKeyId(),name:d.name||"Imported Key",keyFull:d.keyFull||"",keyHash:d.keyHash||"",keyMasked:d.keyMasked||this.keyManager.maskKey(d.keyFull||"Imported"),provider:d.provider||"",baseUrl:d.baseUrl||"",models:m,quotaLimit:d.quotaLimit||0,usedTokensOffset:d.usedTokensOffset||0,usedInputTokensOffset:d.usedInputTokensOffset||0,usedOutputTokensOffset:d.usedOutputTokensOffset||0,alertThreshold:d.alertThreshold||0,enabled:d.enabled!==!1,createdAt:Date.now()}),l++}this.store.save(),this.renderKeyList(e);const u=[];l>0&&u.push(`新增 ${l} 个`),c>0&&u.push(`更新 ${c} 个`),M.showMessage(`导入成功：${u.join("，")||"无变化"}`,2e3,"info")}catch(a){console.error("[TokenStats] Import keys failed:",a),M.showMessage("导入失败："+a.message,3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}providerIcon(e){const t=(e||"").toLowerCase();return{siyuan:"🐿️",openai:"🤖",anthropic:"🧠",deepseek:"🔍",siliconflow:"🌊",华为云:"☁️",huawei:"☁️"}[t]||"🔑"}exportData(){const e=this.store.exportAll(),t=new Blob([e],{type:"application/json"}),s=URL.createObjectURL(t),n=document.createElement("a");n.href=s,n.download=`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(s)},1e3),M.showMessage("数据已导出",2e3,"info")}clearRecords(){M.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。此操作不可撤销。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),M.showMessage("记录已清除",2e3,"info")})}resetAll(){M.confirm("重置全部数据","⚠️ 确定重置吗？所有调用记录将被清除，设置恢复默认值。API Key 配置保留不变，此操作不可撤销。",()=>{this.store.clearRecords(),this.store.resetSettings(),this.keyManager.clearAllAlerts(),M.showMessage("已重置",2e3,"info")})}}function U(v){return v?v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function ae(v){let e=0;for(let s=0;s<v.length;s++)e=e*31+v.charCodeAt(s)>>>0;return`hsl(${e%360}, 60%, 52%)`}function Q(v){return`${v.getFullYear()}-${String(v.getMonth()+1).padStart(2,"0")}-${String(v.getDate()).padStart(2,"0")}`}function Ae(v){const e=v.getDay(),t=(e===0?-6:1)-e,s=new Date(v);return s.setDate(v.getDate()+t),s.setHours(0,0,0,0),s}function Me(v){return new Date(v.getFullYear(),v.getMonth(),1)}class $e{constructor(e,t){this.dialog=null,this.summary=null,this.refreshTimer=null,this.disclaimerDismissed=!1,this.onManualSync=null,this.store=e,this.keyManager=t}show(){try{if(this.summary=this.computeSummary(),this.dialog&&this.dialog.element&&this.dialog.element.isConnected){this.refreshContent();return}this.dialog&&(this.dialog.destroy(),this.dialog=null);const e=this.isMobile();this.dialog=new M.Dialog({title:"📊 Token 用量统计",width:e?"95vw":"900px",content:this.renderHTML(this.summary),destroyCallback:()=>{this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null),this.dialog=null}}),this.bindEvents(),this.refreshTimer=setInterval(()=>{if(!this.dialog||!this.dialog.element||!this.dialog.element.isConnected){this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null);return}this.refreshContent()},3e3)}catch(e){console.error("[TokenStats] Dashboard show error:",e),M.showMessage("仪表盘打开失败: "+e.message,3e3,"error")}}refreshContent(){if(!this.dialog||!this.dialog.element)return;const e=this.dialog.element.querySelector(".b3-dialog__body");if(!e)return;const t=document.activeElement;if(t&&e.contains(t)&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"))return;const s=e.scrollTop;this.summary=this.computeSummary(),e.innerHTML=this.renderHTML(this.summary),this.bindEvents();const n=this.dialog.element.querySelector(".b3-dialog__body");n&&(n.scrollTop=s)}isMobile(){const e=M.getFrontend();return e==="mobile"||e==="browser-mobile"}computeSummary(){const e=this.store.getRecords(),t=this.store.getApiKeys(),s=this.store.getSettings(),n={totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalRequests:e.length,successRequests:0,failedRequests:0,averageRequestTime:0,totalCost:0,totalCacheReadTokens:0,totalCacheCost:0,exactTokens:0,estimatedTokens:0,archivedMonths:0,modelStats:{},dailyStats:[],keyStats:[]};let r=0;for(const o of e){n.totalTokens+=o.totalTokens,n.totalInputTokens+=o.inputTokens,n.totalOutputTokens+=o.outputTokens,n.totalCost+=this.store.getRecordCost(o),n.totalCacheReadTokens+=o.cacheReadTokens||0,n.totalCacheCost+=this.store.getRecordCacheCost(o),r+=o.requestTime,o.estimated===!1?n.exactTokens+=o.totalTokens:n.estimatedTokens+=o.totalTokens,o.success?n.successRequests++:n.failedRequests++;const i=o.model||"unknown",l=i.toLowerCase().trim();n.modelStats[l]||(n.modelStats[l]={model:i,count:0,tokens:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cost:0,cacheCost:0}),n.modelStats[l].count++,n.modelStats[l].tokens+=o.totalTokens,n.modelStats[l].inputTokens+=o.inputTokens,n.modelStats[l].outputTokens+=o.outputTokens,n.modelStats[l].cacheReadTokens+=o.cacheReadTokens||0,n.modelStats[l].cost+=this.store.getRecordCost(o),n.modelStats[l].cacheCost+=this.store.getRecordCacheCost(o)}const a=this.store.getArchives();n.archivedMonths=a.length;for(const o of a){n.totalTokens+=o.totalTokens,n.totalInputTokens+=o.totalInputTokens,n.totalOutputTokens+=o.totalOutputTokens,n.totalCost+=o.cost,n.totalCacheReadTokens+=o.totalCacheReadTokens,n.totalCacheCost+=o.cacheCost,n.exactTokens+=o.exactTokens,n.estimatedTokens+=o.estimatedTokens;for(const[i,l]of Object.entries(o.byModel))n.modelStats[i]||(n.modelStats[i]={model:i,count:0,tokens:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cost:0,cacheCost:0}),n.modelStats[i].count+=0,n.modelStats[i].tokens+=l.tokens,n.modelStats[i].inputTokens+=l.inputTokens,n.modelStats[i].outputTokens+=l.outputTokens,n.modelStats[i].cost+=l.cost}n.averageRequestTime=e.length>0?r/e.length:0,n.dailyStats=this.computeTrendStats(e,s);for(const o of t){const i=this.keyManager.getKeyUsage(o.id),l=o.quotaLimit>0?Math.min(100,i.totalTokens/o.quotaLimit*100):0;n.keyStats.push({apiKeyId:o.id,apiKeyName:o.name,totalTokens:i.totalTokens,totalInputTokens:i.totalInputTokens,totalOutputTokens:i.totalOutputTokens,totalRequests:i.totalRequests,quotaLimit:o.quotaLimit,alertThreshold:o.alertThreshold,usagePercent:l,isAlert:o.alertThreshold>0&&l>=o.alertThreshold,isExceeded:o.quotaLimit>0&&i.totalTokens>=o.quotaLimit})}return n.keyStats.sort((o,i)=>i.totalTokens-o.totalTokens),n}computeTrendStats(e,t){const{trendDateRangeStart:s,trendDateRangeEnd:n,trendAggregation:r}=t;let a=1/0,o=-1/0;for(const b of e)a=Math.min(a,b.timestamp),o=Math.max(o,b.timestamp);const i=e.length>0&&isFinite(a)&&isFinite(o),l=new Date;l.setHours(0,0,0,0);const c=i?new Date(a):new Date(l.getTime()-13*24*60*60*1e3),u=i?new Date(o):l,d=s||Q(c),m=n||Q(u),h=new Date(d+"T00:00:00"),p=new Date(m+"T23:59:59.999"),g={},T=(b,x,C,y,A)=>{g[b]||(g[b]={date:b,tokens:0,count:0,byModel:{},cost:0}),g[b].tokens+=x,g[b].count+=C,g[b].byModel[y]=(g[b].byModel[y]||0)+x,g[b].cost+=A};for(const b of e){if(b.timestamp<h.getTime()||b.timestamp>p.getTime())continue;const x=new Date(b.timestamp),C=(b.model||"unknown").toLowerCase().trim(),y=this.store.getRecordCost(b);if(r==="weekly"){const A=Ae(x);T(Q(A),b.totalTokens,1,C,y)}else if(r==="monthly"){const A=Me(x);T(Q(A),b.totalTokens,1,C,y)}else T(Q(x),b.totalTokens,1,C,y)}return Object.values(g).sort((b,x)=>b.date.localeCompare(x.date))}renderHTML(e){const t=this.store.getRecentRecords(30),s=Math.max(...Object.values(e.modelStats).map(c=>c.tokens),1),n=this.store.getSettings(),r=this.keyManager.getGlobalUsagePercent(n),a=this.keyManager.getGlobalUsage(n),o=this.getMinRecordDate(),i=this.getMaxRecordDate(),l=`
      <div class="tks-trend-controls">
        <label>区间：</label>
        <input type="date" id="tks-trend-start" class="b3-text-field" value="${U(n.trendDateRangeStart||o||"")}" ${o?`min="${U(o)}" max="${U(i||"")}"`:""} />
        <span>~</span>
        <input type="date" id="tks-trend-end" class="b3-text-field" value="${U(n.trendDateRangeEnd||i||"")}" ${i?`min="${U(o||"")}" max="${U(i)}"`:""} />
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
        <div class="tks-readme-hint" id="tks-readme-hint">
          <span class="tks-readme-icon">📖</span>
          <span class="tks-readme-text">使用前请仔细阅读 README，特别是「统计精度与免责声明」章节：本插件为本地估算参考工具，<b>单价 / 资源包配置错误会显著放大费用估算误差</b>，所有统计与费用请以 API 服务商官方账单为准。</span>
        </div>
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
          <div class="tks-card tks-card-cache">
            <div class="tks-card-icon">❄️</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${e.totalCacheReadTokens.toLocaleString()}</div>
              <div class="tks-card-label">缓存命中 Tokens</div>
              ${this.store.hasAnyPrice()?`<div class="tks-card-sub">成本 ${this.store.formatCost(e.totalCacheCost)}${e.totalCost>0?` · 占 ${(e.totalCacheCost/e.totalCost*100).toFixed(1)}%`:""}</div>`:'<div class="tks-card-sub">成本（未配置单价）</div>'}
            </div>
          </div>
          ${n.globalQuotaLimit>0?`
          <div class="tks-card tks-card-global">
            <div class="tks-card-icon">🌍</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${r.toFixed(1)}%</div>
              <div class="tks-card-label">全局限额 ${a.totalTokens.toLocaleString()} / ${n.globalQuotaLimit.toLocaleString()}</div>
            </div>
          </div>
          `:""}
        </div>
        ${e.archivedMonths>0?`
        <div class="tks-archive-note">📦 另有 <b>${e.archivedMonths}</b> 个月归档数据（超出明细上限被滚动淘汰的旧月份）已计入上方总计与模型分布；归档为冻结快照，不随后续单价变更重算。</div>
        `:""}

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
            ${Object.values(e.modelStats).sort((c,u)=>u.tokens-c.tokens).map(c=>this.renderModelBar(c,s)).join("")}
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
                ${t.map(c=>this.renderRecordRow(c)).join("")}
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
    `}getMinRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=1/0;for(const s of e)t=Math.min(t,s.timestamp);return Q(new Date(t))}getMaxRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=-1/0;for(const s of e)t=Math.max(t,s.timestamp);return Q(new Date(t))}renderKeyStat(e){const t=e.quotaLimit>0?`${e.totalTokens.toLocaleString()} / ${e.quotaLimit.toLocaleString()}`:`${e.totalTokens.toLocaleString()} (不限)`,s=e.alertThreshold>0?` · 阈值 ${e.alertThreshold}%`:"",n=e.isExceeded?"⛔":e.isAlert?"⚠️":e.quotaLimit>0?"✅":"";return`
      <div class="tks-key-stat ${e.isAlert?"tks-key-stat-alert":""} ${e.isExceeded?"tks-key-stat-exceeded":""}">
        <div class="tks-key-stat-header">
          <span class="tks-key-stat-name">${n} ${U(e.apiKeyName)}</span>
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
    `}buildTrendSvg(e,t){const s=e.dailyStats,n=s.length;if(n===0)return"";const r=720,a=120,o=48,i=52,l=10,c=20,u=r-o-i,d=a-l-c,m=Math.max(...s.map(f=>f.tokens),1),h={};for(const f of s)for(const k of Object.keys(f.byModel))h[k]=(h[k]||0)+f.byModel[k];const p=Object.keys(h).sort((f,k)=>h[k]-h[f]),g=Math.max(...s.map(f=>f.cost),0),T=u/n,b=Math.min(26,T*.62),x=f=>o+T*(f+.5);let C="";for(let f=0;f<n;f++){const k=s[f],R=x(f)-b/2;let K=l+d;for(const P of p){const q=k.byModel[P]||0;if(q<=0)continue;const D=q/m*d;K-=D,C+=`<rect x="${R.toFixed(1)}" y="${K.toFixed(1)}" width="${b.toFixed(1)}" height="${Math.max(.5,D).toFixed(1)}" fill="${ae(P)}"><title>${U(P)}: ${q.toLocaleString()} tokens</title></rect>`}}let y="";if(g>0){y=`<polyline points="${s.map((k,$)=>`${x($).toFixed(1)},${(l+(1-k.cost/g)*d).toFixed(1)}`).join(" ")}" fill="none" stroke="#e0556b" stroke-width="2" stroke-linejoin="round"/>`;for(let k=0;k<n;k++){const $=l+(1-s[k].cost/g)*d;y+=`<circle cx="${x(k).toFixed(1)}" cy="${$.toFixed(1)}" r="2.5" fill="#e0556b"><title>费用: ${U(this.store.formatCost(s[k].cost))}</title></circle>`}}let A="";for(let f=0;f<=2;f++){const k=l+d*f/2,$=Math.round(m*(1-f/2));if(A+=`<line x1="${o}" y1="${k.toFixed(1)}" x2="${o+u}" y2="${k.toFixed(1)}" stroke="#e3e3e3" stroke-width="1"/>`,A+=`<text x="${o-6}" y="${(k+3).toFixed(1)}" text-anchor="end" font-size="10" fill="#8a8a8a">${$>=1e3?($/1e3).toFixed($>=1e4?0:1)+"k":$}</text>`,g>0){const R=g*(1-f/2);A+=`<text x="${o+u+6}" y="${(k+3).toFixed(1)}" text-anchor="start" font-size="10" fill="#e0556b">${U(this.store.formatCost(R))}</text>`}}const E=Math.max(1,Math.ceil(n/16));let O="";for(let f=0;f<n;f++){if(f%E!==0&&f!==n-1)continue;const k=s[f];let $=k.date.substring(5);t==="monthly"?$=k.date.substring(0,7):t==="weekly"&&($=`W${k.date.substring(5,7)}${k.date.substring(8,10)}`),O+=`<text x="${x(f).toFixed(1)}" y="${l+d+14}" text-anchor="middle" font-size="9" fill="#8a8a8a">${U($)}</text>`}return`<svg class="tks-trend-svg" viewBox="0 0 ${r} ${a}" preserveAspectRatio="xMidYMin slice">${A}${C}${y}${O}</svg>`}buildTrendLegend(e){const t={};for(const a of e.dailyStats)for(const o of Object.keys(a.byModel))t[o]=(t[o]||0)+a.byModel[o];return`<div class="tks-trend-legend">${Object.keys(t).sort((a,o)=>t[o]-t[a]).map(a=>`<span class="tks-legend-item"><span class="tks-legend-swatch" style="background:${ae(a)}"></span>${U(a)}</span>`).join("")}<span class="tks-legend-item"><span class="tks-legend-line"></span>当日费用（右轴）</span></div>`}renderModelBar(e,t){const s=Math.max(1,e.tokens/t*100);return`
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${U(e.model)}">${U(e.model)}</div>
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
        <td title="${U(e.apiKeyName)}">${U(e.apiKeyName)}</td>
        <td>${U(e.source)}</td>
        <td>${U(e.model)}</td>
        <td>${e.inputTokens.toLocaleString()}</td>
        <td>${e.cacheReadTokens?e.cacheReadTokens.toLocaleString():"—"}</td>
        <td>${e.outputTokens.toLocaleString()}</td>
        <td><strong>${e.totalTokens.toLocaleString()}</strong></td>
        <td>${this.store.hasAnyPrice()?`${this.store.formatCost(this.store.getRecordCost(e))}<br><span class="tks-sub">缓存 ${this.store.formatCost(this.store.getRecordCacheCost(e))}</span>`:"—"}</td>
        <td>${e.requestTime}ms</td>
        <td>${e.success?"✅":"❌"}</td>
      </tr>
    `}bindEvents(){var t,s,n,r,a,o,i,l;if(!this.dialog)return;const e=this.dialog.element;(t=e.querySelector("#tks-refresh"))==null||t.addEventListener("click",()=>{this.refreshContent()}),(s=e.querySelector("#tks-disclaimer-close"))==null||s.addEventListener("click",()=>{M.confirm("隐藏免责提示",`本插件统计数据与 API 供应商官方账单可能存在误差，请以 API 供应商的统计及账单为准。

点击「确认」仅本次会话隐藏（重启思源后将自动恢复显示）。
如需永久关闭此提示，请到「设置 - 仪表盘免责提示」中操作。`,()=>{this.disclaimerDismissed=!0,this.refreshContent()})}),(n=e.querySelector("#tks-sync"))==null||n.addEventListener("click",async c=>{const u=c.currentTarget;if(u.disabled)return;const d=u.textContent;u.disabled=!0,u.textContent="同步中…";try{if(!this.onManualSync){M.showMessage("同步功能未就绪",2e3,"error");return}await this.onManualSync(),this.refreshContent()}catch{M.showMessage("同步失败，请确认思源数据同步已开启",3e3,"error")}finally{u.disabled=!1,u.textContent=d}}),(r=e.querySelector("#tks-export-json"))==null||r.addEventListener("click",()=>{const c=this.store.exportAll();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,c,"application/json"),M.showMessage("数据已导出（JSON）",2e3,"info")}),(a=e.querySelector("#tks-export-csv"))==null||a.addEventListener("click",()=>{const c=this.buildRecordsCsv();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.csv`,c,"text/csv;charset=utf-8"),M.showMessage("数据已导出（CSV）",2e3,"info")}),(o=e.querySelector("#tks-clear-records"))==null||o.addEventListener("click",()=>{M.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),this.refreshContent(),M.showMessage("记录已清除",2e3,"info")})}),(i=e.querySelector("#tks-trend-apply"))==null||i.addEventListener("click",()=>{var m,h,p;const c=((m=e.querySelector("#tks-trend-start"))==null?void 0:m.value)||"",u=((h=e.querySelector("#tks-trend-end"))==null?void 0:h.value)||"",d=(p=e.querySelector("#tks-trend-aggregation"))==null?void 0:p.value;this.store.updateSettings({trendDateRangeStart:c,trendDateRangeEnd:u,trendAggregation:d}),this.store.save(),this.refreshContent()}),(l=e.querySelector("#tks-trend-reset"))==null||l.addEventListener("click",()=>{this.store.updateSettings({trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily"}),this.store.save(),this.refreshContent()})}downloadFile(e,t,s){const n=new Blob([t],{type:s}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=e,a.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}buildRecordsCsv(){var a;const e=this.store.getRecords().slice().sort((o,i)=>o.timestamp-i.timestamp),t=this.store.getSettings().currency||"¥",s=this.summary,n=o=>{const i=String(o);return/[",\n]/.test(i)?`"${i.replace(/"/g,'""')}"`:i},r=[];s&&(r.push(`# 总Token,${s.totalTokens}`),r.push(`# 输入Token,${s.totalInputTokens}`),r.push(`# 输出Token,${s.totalOutputTokens}`),r.push(`# 请求数,${s.totalRequests}`),r.push(`# 总费用,${t}${s.totalCost.toFixed(4)}`)),r.push(`# 记录数,${e.length}`),r.push(["时间","模型","输入Token","缓存命中Token","输出Token","总计Token","费用","缓存成本","Key名称","耗时(ms)","成功"].join(","));for(const o of e){const i=new Date(o.timestamp),l=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")} ${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`,c=((a=this.store.getApiKey(o.apiKeyId))==null?void 0:a.name)||o.apiKeyName||"",u=this.store.hasAnyPrice()?this.store.getRecordCacheCost(o).toFixed(4):"";r.push([l,o.model,o.inputTokens,o.cacheReadTokens??"",o.outputTokens,o.totalTokens,t+this.store.getRecordCost(o).toFixed(4),t+u,c,o.requestTime,o.success?"是":"否"].map(n).join(","))}return"\uFEFF"+r.join(`
`)}}const Re=`<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="iconTokenStats" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>
    <rect x="9.5" y="16" width="3" height="7" rx="0.8" fill="currentColor"/>
    <rect x="14.5" y="12" width="3" height="11" rx="0.8" fill="currentColor"/>
    <rect x="19.5" y="9" width="3" height="14" rx="0.8" fill="currentColor"/>
  </symbol>
</svg>`;class Ke extends M.Plugin{constructor(){super(...arguments),this.styleElement=null,this.syncHandler=null,this.mergeTimer=null,this.merging=!1,this.topBarItem=null,this.badgeEl=null,this.badgeTimer=null,this.lsHeartbeatTimer=null}async onload(){console.log("[TokenStats] Plugin loading..."),console.log(`[TokenStats] Frontend: ${M.getFrontend()}`),this.styleElement=document.createElement("style"),this.styleElement.id="siyuan-token-stats-style",this.styleElement.textContent=he,document.head.appendChild(this.styleElement),this.addIcons(Re),this.store=new fe(this),await this.store.load(),this.tokenCounter=new be,this.keyManager=new ke(this.store),this.interceptor=new we(this.store,this.keyManager,this.tokenCounter),this.dashboard=new $e(this.store,this.keyManager),this.interceptor.setThresholdCallback((e,t)=>{this.store.getSettings().showNotifications&&M.showMessage(t,5e3,"info")}),this.interceptor.install(),this.topBarItem=this.addTopBar({icon:"iconTokenStats",title:"Token 用量统计",position:"right",callback:()=>{this.dashboard.show()}}),this.initTopBarBadge(),this.settingsPanel=new Ce(this.store,this.keyManager),this.settingsPanel.onManualSync=()=>this.manualSyncFull(),this.dashboard.onManualSync=()=>this.manualSyncFull(),this.setting=this.settingsPanel.setting,this.addCommand({langKey:"showTokenStats",langText:"打开 Token 用量统计",hotkey:"",callback:()=>{this.dashboard.show()}}),this.syncHandler=e=>{const t=typeof(e==null?void 0:e.detail)=="string"?e.detail:JSON.stringify((e==null?void 0:e.detail)??"");console.log("[TokenStats] Sync event received, merging data...",t.substring(0,100)),setTimeout(()=>this.mergeFromRemote(),2500)},this.eventBus.on("sync-end",this.syncHandler),setTimeout(()=>this.mergeFromRemote(),5e3),this.mergeTimer=window.setInterval(()=>this.mergeFromRemote(),6e4),console.log("[TokenStats] Plugin loaded successfully."),this.lsHeartbeatTimer=window.setInterval(()=>{this.store.saveToLocalStorage()},1e4)}onunload(){var e,t,s,n,r;console.log("[TokenStats] Plugin unloading..."),this.mergeTimer!==null&&(clearInterval(this.mergeTimer),this.mergeTimer=null),this.badgeTimer!==null&&(clearInterval(this.badgeTimer),this.badgeTimer=null),this.lsHeartbeatTimer!==null&&(clearInterval(this.lsHeartbeatTimer),this.lsHeartbeatTimer=null),this.syncHandler&&(this.eventBus.off("sync-end",this.syncHandler),this.syncHandler=null),(e=this.interceptor)==null||e.uninstall(),(t=this.store)==null||t.saveToLocalStorage(),(s=this.store)==null||s.saveSync(),(n=this.store)==null||n.save().catch(a=>console.error("[TokenStats] Save on unload failed:",a)),(r=this.styleElement)==null||r.remove(),this.styleElement=null,this.topBarItem&&(this.topBarItem.remove(),this.topBarItem=null),this.badgeEl=null,console.log("[TokenStats] Plugin unloaded.")}async mergeFromRemote(){this.store.getSettings().syncStatistics&&await this.doMerge()}async doMerge(){if(this.merging)return!1;this.merging=!0;try{const e=await this.store.mergeFromRemote();return e&&this.settingsPanel.refreshFromStore(),this.updateBadge(),this.checkThresholdsLive(),e}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}finally{this.merging=!1}}async manualSyncFull(){let e=!1,t="";try{const n=await M.fetchSyncPost("/api/sync/performSync",{app:"siyuan-token-stats"});n.code===0?e=!0:t=n.msg?String(n.msg):`code=${n.code}`}catch(n){t=n instanceof Error?n.message:String(n)}e&&(M.showMessage("已触发思源云同步，等待同步完成…",2e3,"info"),await new Promise(n=>setTimeout(n,5e3)));const s=await this.doMerge();return s?M.showMessage("已合并其他端统计",2e3,"info"):e?M.showMessage("已是最新，无新数据（请确认其他端已完成过云同步）",3500,"info"):t?M.showMessage(`未能触发思源云同步：${t}。请先在思源「设置 - 关于 - 云端」启用并登录云同步，再点此按钮。`,6e3,"info"):M.showMessage("已是最新，无新数据（建议先在思源设置中开启云同步）",3500,"info"),s}initTopBarBadge(){if(!this.topBarItem)return;const e=document.createElement("span");e.className="tks-topbar-badge",e.style.display="none",this.topBarItem.style.position="relative",this.topBarItem.appendChild(e),this.badgeEl=e,this.updateBadge(),this.badgeTimer=window.setInterval(()=>{this.updateBadge(),this.checkThresholdsLive()},3e3)}updateBadge(){const e=this.badgeEl;if(!e)return;const t=this.store.getSettings();if(!t.showTopBarBadge){e.style.display="none";return}if(e.title="",t.globalCostLimit>0){const a=this.keyManager.getGlobalCostPercent(t),o=this.keyManager.getGlobalCostUsage(t),i=t.currency||"¥";let l,c="neutral";l=`${a.toFixed(0)}%`;const u=t.globalCostAlertThreshold>0?t.globalCostAlertThreshold:70;a>=90||this.keyManager.isGlobalCostExceeded(t)?c="danger":a>=u?c="warn":c="ok",e.textContent=l,e.className=`tks-topbar-badge tks-badge-${c}`,e.style.display="inline-block",e.title=`费用 ${i}${o.totalCost.toFixed(2)} / ${i}${t.globalCostLimit.toFixed(2)}`;return}const s=this.keyManager.getGlobalUsage(t);let n,r="neutral";if(t.globalQuotaLimit>0){const a=this.keyManager.getGlobalUsagePercent(t);n=`${Math.round(a)}%`;const o=t.globalAlertThreshold>0?t.globalAlertThreshold:70;a>=90||this.keyManager.isGlobalQuotaExceeded(t)?r="danger":a>=o?r="warn":r="ok"}else n=this.formatCompactTokens(s.totalTokens),r="neutral";e.textContent=n,e.className=`tks-topbar-badge tks-badge-${r}`,e.style.display="inline-block"}checkThresholdsLive(){this.store.getSettings().showNotifications&&this.keyManager.checkAllThresholds(t=>M.showMessage(t,5e3,"info"))}formatCompactTokens(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}}module.exports=Ke;

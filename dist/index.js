"use strict";const M=require("siyuan"),ye=`/* ═══════════════════════════════════════════\r
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
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
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
/* 高级视图隐藏时的提示条 */\r
.tks-advanced-hint {\r
  margin: 12px 0 4px;\r
  padding: 8px 12px;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface-light, #999);\r
  background: var(--b3-theme-background, #f5f5f5);\r
  border: 1px dashed var(--b3-border-color, #e0e0e0);\r
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
.tks-key-stat-disabled {\r
  opacity: 0.55;\r
}\r
\r
.tks-key-stat-fill.disabled {\r
  background: #bbb !important;\r
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
/* ─── 笔记归因面板 ─── */\r
.tks-attr-stats {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.tks-attr-row {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 3px;\r
}\r
\r
.tks-attr-head {\r
  display: flex;\r
  align-items: baseline;\r
  justify-content: space-between;\r
  gap: 8px;\r
  font-size: 12px;\r
}\r
\r
.tks-attr-name {\r
  color: var(--b3-theme-on-background);\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
  flex: 1;\r
  min-width: 0;\r
}\r
\r
.tks-attr-meta {\r
  flex-shrink: 0;\r
  color: var(--b3-theme-on-surface);\r
  font-size: 11px;\r
}\r
\r
.tks-attr-bar {\r
  height: 16px;\r
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));\r
  border-radius: 3px;\r
  overflow: hidden;\r
}\r
\r
.tks-attr-bar-fill {\r
  height: 100%;\r
  background: var(--b3-theme-primary, #4a90d9);\r
  border-radius: 3px;\r
  opacity: 0.75;\r
}\r
\r
.tks-attr-caption {\r
  margin-top: 8px;\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface);\r
  opacity: 0.8;\r
}\r
\r
.tks-doc-cell {\r
  max-width: 220px;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
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
  flex: 1 1 auto;\r
  width: 100%;\r
  box-sizing: border-box;\r
  overflow-y: auto;\r
}\r
\r
/* 移除仪表盘内部滚动，统一交给 dialog body */\r
.tks-dashboard {\r
  width: 100%;\r
  box-sizing: border-box;\r
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
\r
/* ─── L2 数据飞轮（v1.5.3）─── */\r
\r
.tks-forecast-grid {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 10px;\r
  margin-bottom: 10px;\r
}\r
.tks-fc-card {\r
  flex: 1 1 160px;\r
  min-width: 140px;\r
  background: var(--b3-theme-surface, #f7f8fa);\r
  border: 1px solid var(--b3-border-color, #e0e0e0);\r
  border-radius: 8px;\r
  padding: 10px 12px;\r
}\r
.tks-fc-value {\r
  font-size: 20px;\r
  font-weight: 700;\r
  color: var(--b3-theme-on-background, #1f2329);\r
  font-variant-numeric: tabular-nums;\r
}\r
.tks-fc-label {\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface, #6b7075);\r
  margin-top: 2px;\r
}\r
.tks-fc-sub {\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface-light, #999);\r
  margin-top: 4px;\r
}\r
.tks-fc-note {\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface-light, #999);\r
  margin-top: 8px;\r
}\r
\r
.tks-progress {\r
  margin: 8px 0;\r
}\r
.tks-progress-head {\r
  display: flex;\r
  justify-content: space-between;\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface, #6b7075);\r
  margin-bottom: 4px;\r
  font-variant-numeric: tabular-nums;\r
}\r
.tks-progress-track {\r
  height: 8px;\r
  background: var(--b3-border-color, #e6e6e6);\r
  border-radius: 4px;\r
  overflow: hidden;\r
}\r
.tks-progress-fill {\r
  height: 100%;\r
  border-radius: 4px;\r
  transition: width 0.3s ease;\r
}\r
.tks-progress-fill--ok { background: #2e9e5b; }\r
.tks-progress-fill--warn { background: #d98b00; }\r
.tks-progress-fill--over { background: #d4453b; }\r
\r
.tks-anom-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
.tks-anom {\r
  display: flex;\r
  gap: 10px;\r
  padding: 8px 10px;\r
  border-radius: 8px;\r
  background: var(--b3-theme-surface, #f7f8fa);\r
  border: 1px solid var(--b3-border-color, #e0e0e0);\r
  border-left: 3px solid var(--b3-theme-on-surface-light, #999);\r
}\r
.tks-anom--high { border-left-color: #d4453b; }\r
.tks-anom--med { border-left-color: #d98b00; }\r
.tks-anom-date {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: var(--b3-theme-on-surface, #6b7075);\r
  white-space: nowrap;\r
  padding-top: 1px;\r
  font-variant-numeric: tabular-nums;\r
}\r
.tks-anom-body { flex: 1; }\r
.tks-anom-reason {\r
  font-size: 13px;\r
  color: var(--b3-theme-on-background, #1f2329);\r
}\r
.tks-anom-meta {\r
  font-size: 11px;\r
  color: var(--b3-theme-on-surface-light, #999);\r
  margin-top: 2px;\r
  font-variant-numeric: tabular-nums;\r
}\r
.tks-anom-note {\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface, #6b7075);\r
  margin-top: 8px;\r
}\r
\r
.tks-sug-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
.tks-sug {\r
  padding: 8px 10px;\r
  border-radius: 8px;\r
  background: var(--b3-theme-surface, #f7f8fa);\r
  border: 1px solid var(--b3-border-color, #e0e0e0);\r
  border-left: 3px solid var(--b3-theme-on-surface-light, #999);\r
}\r
.tks-sug--high { border-left-color: #d4453b; }\r
.tks-sug--med { border-left-color: #d98b00; }\r
.tks-sug--low { border-left-color: #4a6fff; }\r
.tks-sug-head {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  flex-wrap: wrap;\r
}\r
.tks-sug-sev {\r
  font-size: 11px;\r
  font-weight: 700;\r
  color: #fff;\r
  background: var(--b3-theme-on-surface-light, #999);\r
  border-radius: 4px;\r
  padding: 1px 6px;\r
}\r
.tks-sug--high .tks-sug-sev { background: #d4453b; }\r
.tks-sug--med .tks-sug-sev { background: #d98b00; }\r
.tks-sug--low .tks-sug-sev { background: #4a6fff; }\r
.tks-sug-title {\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: var(--b3-theme-on-background, #1f2329);\r
}\r
.tks-sug-saving {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: #2e9e5b;\r
  margin-left: auto;\r
  font-variant-numeric: tabular-nums;\r
}\r
.tks-sug-detail {\r
  font-size: 12px;\r
  color: var(--b3-theme-on-surface, #6b7075);\r
  margin-top: 4px;\r
  line-height: 1.5;\r
}\r
`,ve=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),xe=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function ae(b){const e=new TextEncoder().encode(b),t=e.length*8,n=e.length+1,s=Math.ceil((n+8)/64)*64,o=new Uint8Array(s);o.set(e),o[e.length]=128;const a=new DataView(o.buffer);a.setUint32(s-8,Math.floor(t/4294967296),!1),a.setUint32(s-4,t>>>0,!1);const r=xe.slice(),i=new Uint32Array(64);for(let l=0;l<s;l+=64){for(let h=0;h<16;h++)i[h]=a.getUint32(l+h*4,!1);for(let h=16;h<64;h++){const T=i[h-15],w=i[h-2],x=(T>>>7|T<<25)^(T>>>18|T<<14)^T>>>3,S=(w>>>17|w<<15)^(w>>>19|w<<13)^w>>>10;i[h]=i[h-16]+x+i[h-7]+S|0}let d=r[0],p=r[1],c=r[2],k=r[3],m=r[4],y=r[5],g=r[6],u=r[7];for(let h=0;h<64;h++){const T=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7),w=m&y^~m&g,x=u+T+w+ve[h]+i[h]|0,S=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),L=d&p^d&c^p&c,E=S+L|0;u=g,g=y,y=m,m=k+x|0,k=c,c=p,p=d,d=x+E|0}r[0]=r[0]+d|0,r[1]=r[1]+p|0,r[2]=r[2]+c|0,r[3]=r[3]+k|0,r[4]=r[4]+m|0,r[5]=r[5]+y|0,r[6]=r[6]+g|0,r[7]=r[7]+u|0}return Array.from(r).map(l=>(l>>>0).toString(16).padStart(8,"0")).join("")}const ee="data.json",ie="data.backup.json",de="data/storage/siyuan-token-stats/data.json",ue="data/storage/siyuan-token-stats/data.backup.json",pe="data/plugins/siyuan-token-stats/settings.json",ne="siyuan-token-stats-data",le="1.3.0",te={matchByUrl:!0,interceptExternalAPIs:!0,blockOnQuotaExceeded:!1,quotaResetCycle:"monthly",abortStreamOnExceeded:!0,showNotifications:!0,showTopBarBadge:!0,maxRecords:5e3,packCountCacheRead:!0,globalQuotaLimit:0,globalAlertThreshold:0,globalQuotaResetCycle:"monthly",globalUsedTokensOffset:0,globalUsedInputTokensOffset:0,globalUsedOutputTokensOffset:0,globalCostLimit:0,globalCostAlertThreshold:0,globalCostResetCycle:"monthly",globalUsedCostOffset:0,customResetDays:30,trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily",debugLogging:!1,currency:"¥",recalcCostOnPriceChange:!0,syncStatistics:!0,diagnosticExportCount:50,showDisclaimer:!0,enableForecast:!0,forecastMethod:"recentTrend",forecastWindowDays:7,enableAnomaly:!0,anomalySensitivity:2.5,anomalyLookbackDays:30,enableSuggestions:!0,showAdvancedDashboard:!1,enableNoteAttribution:!0,attributionTopN:10,tokenDisplayUnit:"auto",modelPrices:{},pricePacks:[]};class Te{constructor(e){this.loaded=!1,this.saveTimer=null,this.plugin=e,this.data={version:le,lastSavedAt:0,settingsUpdatedAt:0,keysUpdatedAt:0,deletedKeys:[],apiKeys:[],records:[],archives:[],settings:{...te}}}sanitizeKey(e){const t={...e};return typeof t.keyFull=="string"&&t.keyFull.length>0&&(t.keyHash=ae(t.keyFull),t.keyFull=""),t}async readSource(e,t=!1){try{const n=await fetch(`/api/file/getFile?path=${encodeURIComponent(e)}`);if(!n.ok)return null;const s=await n.text();if(!s)return null;const o=JSON.parse(s);if(!o||typeof o!="object")return null;const a=Array.isArray(o.apiKeys),r=Array.isArray(o.records),i=!!o.settings,l=!!o.lastSavedAt;if(t&&!a&&!r)return null;if(a||r||i||l)return o}catch{}return null}normalizeData(e,t){if(typeof e=="string")try{e=JSON.parse(e)}catch{return null}if(!e||typeof e!="object"||Array.isArray(e))return console.log(`[TokenStats] ${t} returned non-object:`,typeof e,e),null;if(!this.hasDataMarkers(e))return console.log(`[TokenStats] ${t} returned object without data markers:`,Object.keys(e)),null;const n={apiKeys:Array.isArray(e.apiKeys)?e.apiKeys.length:"none",records:Array.isArray(e.records)?e.records.length:"none",settings:!!e.settings,lastSavedAt:e.lastSavedAt||0};return console.log(`[TokenStats] ${t} read OK:`,n),e}async readOfficial(e){try{if(this.plugin&&typeof this.plugin.loadData=="function"){const t=await this.plugin.loadData(e),n=this.normalizeData(t,`loadData(${e})`);if(n)return n}}catch(t){console.warn("[TokenStats] readOfficial loadData failed:",t)}try{const t=`data/storage/siyuan-token-stats/${e}`,n=await fetch(`/api/file/getFile?path=${encodeURIComponent(t)}`);if(!n.ok)return console.log(`[TokenStats] readOfficial fetch fallback: HTTP ${n.status} for ${t}`),null;const s=await n.text();if(!s)return null;const o=JSON.parse(s);return this.normalizeData(o,`fetch(${e})`)}catch(t){console.warn("[TokenStats] readOfficial fetch fallback failed:",t)}return null}hasDataMarkers(e){return!e||typeof e!="object"?!1:Array.isArray(e.apiKeys)||Array.isArray(e.records)||!!e.settings||!!e.lastSavedAt}async isDestructiveWrite(e){if(e||this.data.apiKeys.length>0||this.data.records.length>0)return!1;const t=await this.readOfficial(ee).catch(()=>null);if(!t)return!1;const n=Array.isArray(t.apiKeys)?t.apiKeys.length:0,s=Array.isArray(t.records)?t.records.length:0;return n>0||s>0}async load(){try{const e=await this.readOfficial(ee),t=await this.readOfficial(ie),n=await this.readSource(pe,!0),s=[e,t,n].filter(Boolean);let o=null;try{const v=localStorage.getItem(ne);if(v){const f=JSON.parse(v);this.hasDataMarkers(f)&&(o=f,console.log("[TokenStats] Found data in localStorage (fallback only)."))}}catch{}const a=[...s];if(o&&a.push(o),a.length===0){console.warn("[TokenStats] ⚠ No existing data in ANY source — starting fresh with empty defaults!",`primary(${ee})=${!!e}, backup(${ie})=${!!t},legacy(${pe})=${!!n}, localStorage=${!!o}`),this.loaded=!0;return}const r=new Map,i=v=>{const f=r.get(v.id);if(!f){r.set(v.id,v);return}const $=f.keysUpdatedAt||0,R=v.keysUpdatedAt||0;(R>$||R===$&&!f.keyHash&&v.keyHash)&&r.set(v.id,v)};for(const v of a)for(const f of v.apiKeys||[])i(f);const l=Array.from(r.values()),d=new Set;for(const v of a)for(const f of v.deletedKeys||[])d.add(f);const p=new Map;for(const v of a)for(const f of v.records||[])p.has(f.id)||p.set(f.id,f);const c=Array.from(p.values()).sort((v,f)=>v.timestamp-f.timestamp),k=(()=>{var f;let v=5e3;for(const $ of a){const R=(f=$.settings)==null?void 0:f.maxRecords;typeof R=="number"&&R>v&&(v=R)}return v})(),m=c.length>k?c.slice(-k):c,y=new Map,g=v=>{if(!v||!v.month)return;const f=y.get(v.month)||{month:v.month,count:0,totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalCacheReadTokens:0,exactTokens:0,estimatedTokens:0,cost:0,cacheCost:0,byModel:{}};f.count+=v.count||0,f.totalTokens+=v.totalTokens||0,f.totalInputTokens+=v.totalInputTokens||0,f.totalOutputTokens+=v.totalOutputTokens||0,f.totalCacheReadTokens+=v.totalCacheReadTokens||0,f.exactTokens+=v.exactTokens||0,f.estimatedTokens+=v.estimatedTokens||0,f.cost+=v.cost||0,f.cacheCost+=v.cacheCost||0;for(const[$,R]of Object.entries(v.byModel||{})){const I=f.byModel[$]||{tokens:0,inputTokens:0,outputTokens:0,cost:0};I.tokens+=R.tokens||0,I.inputTokens+=R.inputTokens||0,I.outputTokens+=R.outputTokens||0,I.cost+=R.cost||0,f.byModel[$]=I}y.set(v.month,f)};for(const v of a)for(const f of v.archives||[])g(f);const u=Array.from(y.values()).sort((v,f)=>v.month<f.month?-1:1);let h=a[0];for(const v of a)v.settingsUpdatedAt>h.settingsUpdatedAt&&(h=v);const T=h.settings||{},w={...te,...T};"autoDetectSiYuanAI"in T&&(w.matchByUrl=T.autoDetectSiYuanAI),!("globalCostResetCycle"in T)&&T.globalQuotaResetCycle&&(w.globalCostResetCycle=T.globalQuotaResetCycle);const x=l.map(v=>{const f={...v};return f.id==="siyuan-built-in"&&f.provider==="siyuan"&&(f.provider=f.baseUrl?f.baseUrl:"SiYuan AI"),f.usedTokensOffset===void 0&&(f.usedTokensOffset=0),f.usedInputTokensOffset===void 0&&(f.usedInputTokensOffset=0),f.usedOutputTokensOffset===void 0&&(f.usedOutputTokensOffset=0),Array.isArray(f.models)||(f.models=[]),this.sanitizeKey(f)}).filter(v=>!d.has(v.id)),S=Math.max(0,...a.map(v=>v.lastSavedAt||0)),L=Math.max(0,...a.map(v=>v.settingsUpdatedAt||0)),E=Math.max(0,...a.map(v=>v.keysUpdatedAt||0));this.data={version:le,lastSavedAt:S,settingsUpdatedAt:L,keysUpdatedAt:E,deletedKeys:Array.from(d),apiKeys:x,records:m,archives:u,settings:w},this.enforceRetention(),console.log(`[TokenStats] Loaded (merged ${a.length} source(s), fileSources=${s.length}, localStorage=${!!o}): ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`),this.loaded=!0,this.saveToLocalStorage(),this.save().catch(v=>console.error("[TokenStats] Post-load save failed:",v))}catch(e){console.warn("[TokenStats] Failed to load data, starting fresh:",e),this.loaded=!0}}scheduleSave(e=500,t=!1){if(!this.loaded){console.warn("[TokenStats] scheduleSave ignored: data not loaded yet.");return}this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.save(t).catch(n=>console.error("[TokenStats] Save failed:",n))},e)}saveToLocalStorage(){if(this.loaded)try{localStorage.setItem(ne,JSON.stringify(this.data))}catch{}}async putFileRaw(e,t){const n=new FormData;n.append("path",e),n.append("file",new Blob([JSON.stringify(t,null,2)],{type:"application/json"}));const s=await fetch("/api/file/putFile",{method:"POST",body:n});if(!s.ok)throw new Error(`putFile returned ${s.status}`)}async save(e=!1){if(!this.loaded){console.warn("[TokenStats] save() ignored: data not loaded yet.");return}if(await this.isDestructiveWrite(e)){console.warn("[TokenStats] save() skipped: in-memory data empty but existing file has data; not overwriting.");return}try{this.data.lastSavedAt=Date.now(),this.plugin&&typeof this.plugin.saveData=="function"?await this.plugin.saveData(ee,this.data):await this.putFileRaw(de,this.data);try{this.plugin&&typeof this.plugin.saveData=="function"?await this.plugin.saveData(ie,this.data):await this.putFileRaw(ue,this.data)}catch{}}catch(t){console.error("[TokenStats] Failed to save data:",t);try{localStorage.setItem(ne,JSON.stringify(this.data))}catch{}}}beaconPutFile(e,t){try{if(typeof navigator<"u"&&typeof navigator.sendBeacon=="function"){const n=new FormData;n.append("path",e),n.append("file",new Blob([t],{type:"application/json"})),navigator.sendBeacon("/api/file/putFile",n)}}catch{}}saveSync(){if(!this.loaded){console.warn("[TokenStats] saveSync() ignored: data not loaded yet.");return}const e=this.data.apiKeys.length>0||this.data.records.length>0||this.data.lastSavedAt>0;try{this.data.lastSavedAt=Date.now();const t=JSON.stringify(this.data,null,2);try{localStorage.setItem(ne,t)}catch{}if(!e){console.log("[TokenStats] saveSync skipped file write: in-memory empty and never saved (protecting existing file).");return}this.beaconPutFile(de,t),this.beaconPutFile(ue,t),console.log("[TokenStats] Synchronous save completed (localStorage mirror + sendBeacon file flush).")}catch(t){console.error("[TokenStats] saveSync error:",t)}}async mergeFromRemote(){try{const e=await this.readOfficial(ee);if(!e)return console.warn("[TokenStats] mergeFromRemote: 无法读取远程数据文件，合并跳过"),!1;const t=this.data,n=e.lastSavedAt||0,s=t.lastSavedAt||0,o=e.settingsUpdatedAt||0,a=e.keysUpdatedAt||0,r=t.settingsUpdatedAt||0,i=t.keysUpdatedAt||0,l=(e.records||[]).length,d=(t.records||[]).length,p=(e.apiKeys||[]).length,c=(t.apiKeys||[]).length;if(n===s&&o===r&&a===i&&l===d&&p===c&&n>0)return console.log("[TokenStats] Sync merge: data unchanged, skipping."),!1;console.log(`[TokenStats] Sync merge: local ls=${s} lset=${r} lkey=${i} lr=${d} lk=${c}, remote rs=${n} rset=${o} rkey=${a} rr=${l} rk=${p}`);const k=e.records||[],m=new Map;for(const C of t.records)m.set(C.id,C);for(const C of k)m.has(C.id)||m.set(C.id,C);const y=Array.from(m.values()).sort((C,D)=>C.timestamp-D.timestamp),g=t.settings.maxRecords,u=y.length>g?y.slice(-g):y,h=new Map,T=C=>{if(!C||!C.month)return;const D=h.get(C.month)||{month:C.month,count:0,totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalCacheReadTokens:0,exactTokens:0,estimatedTokens:0,cost:0,cacheCost:0,byModel:{}};D.count+=C.count||0,D.totalTokens+=C.totalTokens||0,D.totalInputTokens+=C.totalInputTokens||0,D.totalOutputTokens+=C.totalOutputTokens||0,D.totalCacheReadTokens+=C.totalCacheReadTokens||0,D.exactTokens+=C.exactTokens||0,D.estimatedTokens+=C.estimatedTokens||0,D.cost+=C.cost||0,D.cacheCost+=C.cacheCost||0;for(const[q,j]of Object.entries(C.byModel||{})){const _=D.byModel[q]||{tokens:0,inputTokens:0,outputTokens:0,cost:0};_.tokens+=j.tokens||0,_.inputTokens+=j.inputTokens||0,_.outputTokens+=j.outputTokens||0,_.cost+=j.cost||0,D.byModel[q]=_}h.set(C.month,D)};for(const C of t.archives||[])T(C);for(const C of e.archives||[])T(C);const w=Array.from(h.values()).sort((C,D)=>C.month<D.month?-1:1),x=e.apiKeys||[],S=new Map,L=i>=a,E=L?x:t.apiKeys,v=L?t.apiKeys:x;for(const C of E)S.set(C.id,C);for(const C of v)S.set(C.id,C);const f=e.deletedKeys||[],$=t.deletedKeys||[],R=Array.from(new Set([...$,...f])),I=Array.from(S.values()).filter(C=>!R.includes(C.id)).map(C=>this.sanitizeKey(C)),P=r>=o,N=P?{...te,...t.settings}:{...te,...e.settings},F=P?t.settings:e.settings;F&&!("globalCostResetCycle"in F)&&F.globalQuotaResetCycle&&(N.globalCostResetCycle=F.globalQuotaResetCycle);const G=Math.max(r,o),Q=Math.max(i,a);return this.data={version:le,lastSavedAt:Math.max(s,n),settingsUpdatedAt:G,keysUpdatedAt:Q,deletedKeys:R,apiKeys:I,records:u,archives:w,settings:N},this.enforceRetention(),await this.save(),console.log(`[TokenStats] Sync merge complete: ${I.length} keys, ${u.length} records.`),!0}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}}getApiKeys(){return this.data.apiKeys}getApiKey(e){return this.data.apiKeys.find(t=>t.id===e)}addApiKey(e){this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys=this.data.deletedKeys.filter(t=>t!==e.id),this.data.apiKeys.push(this.sanitizeKey(e)),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}updateApiKey(e,t){const n=this.data.apiKeys.findIndex(s=>s.id===e);if(n>=0){const s={...this.data.apiKeys[n],...t};typeof t.keyFull=="string"&&t.keyFull.length>0&&(s.keyHash=ae(t.keyFull),s.keyFull=""),this.data.apiKeys[n]=s,this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}}deleteApiKey(e){this.data.apiKeys=this.data.apiKeys.filter(t=>t.id!==e),this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys.includes(e)||this.data.deletedKeys.push(e),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}addRecord(e){const t=this.data.records,n=t.slice(-5);for(const s of n)if(s.apiKeyId===e.apiKeyId&&s.timestamp===e.timestamp&&s.totalTokens===e.totalTokens&&s.model===e.model){console.log("[TokenStats] Duplicate record skipped:",e.apiKeyName,e.model,e.totalTokens);return}this.data.settings.recalcCostOnPriceChange===!1&&(e.cost=this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens)),t.push(e),this.enforceRetention(),this.scheduleSave()}getRecords(){return this.data.records}getArchives(){return this.data.archives||[]}enforceRetention(){const e=this.data.records,t=this.data.settings.maxRecords||5e3;if(e.length<=t)return;e.sort((o,a)=>o.timestamp-a.timestamp);const n=e.slice(0,e.length-t),s=e.slice(e.length-t);this.data.records=s,n.length>0&&this.aggregateIntoArchives(n)}aggregateIntoArchives(e){Array.isArray(this.data.archives)||(this.data.archives=[]);const t=new Map;for(const n of this.data.archives)t.set(n.month,n);for(const n of e){const s=new Date(n.timestamp),o=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`;let a=t.get(o);a||(a={month:o,count:0,totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalCacheReadTokens:0,exactTokens:0,estimatedTokens:0,cost:0,cacheCost:0,byModel:{}},t.set(o,a)),a.count+=1,a.totalTokens+=n.totalTokens,a.totalInputTokens+=n.inputTokens,a.totalOutputTokens+=n.outputTokens,a.totalCacheReadTokens+=n.cacheReadTokens||0,n.estimated===!1?a.exactTokens+=n.totalTokens:a.estimatedTokens+=n.totalTokens,a.cost+=this.getRecordCost(n),a.cacheCost+=this.getRecordCacheCost(n);const r=(n.model||"unknown").toLowerCase().trim();a.byModel[r]||(a.byModel[r]={tokens:0,inputTokens:0,outputTokens:0,cost:0}),a.byModel[r].tokens+=n.totalTokens,a.byModel[r].inputTokens+=n.inputTokens,a.byModel[r].outputTokens+=n.outputTokens,a.byModel[r].cost+=this.getRecordCost(n)}this.data.archives=Array.from(t.values()).sort((n,s)=>n.month<s.month?-1:1)}getRecentRecords(e=50){return[...this.data.records].sort((t,n)=>n.timestamp-t.timestamp).slice(0,e)}clearRecords(){this.data.records=[],this.scheduleSave(0,!0)}clearAll(){this.data.records=[],this.data.apiKeys=[],this.data.deletedKeys=[],this.scheduleSave(0,!0)}getSettings(){return this.data.settings}updateSettings(e){this.data.settings={...this.data.settings,...e},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave()}resetSettings(){this.data.settings={...te},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave(0,!0)}getCurrency(){return this.data.settings.currency||"¥"}normalizeModelKey(e){return(e||"").toLowerCase().trim().replace(/[\s\-_]+/g,"")}resolvePrice(e){const t=this.normalizeModelKey(e);if(!t)return{price:null,fromPack:!1};const n=this.data.settings.modelPrices||{};if(n[t])return{price:n[t],fromPack:!1};const s=this.findPackForModel(t);if(s){if(s.totalPrice&&s.totalPrice>0&&s.totalTokens>0){const a=s.totalPrice/s.totalTokens*1e3;return{price:{input:a,output:a,cacheRead:a},fromPack:!0}}return{price:{input:s.input,output:s.output,...s.cacheRead?{cacheRead:s.cacheRead}:{}},fromPack:!0}}return{price:null,fromPack:!1}}getModelPrice(e){return this.resolvePrice(e).price}modelHasCachePrice(e){const{price:t}=this.resolvePrice(e);return!!(t&&typeof t.cacheRead=="number"&&t.cacheRead>0)}getInputPrice(e){const{price:t}=this.resolvePrice(e);return t?t.input:0}getCachePrice(e){const{price:t}=this.resolvePrice(e);return t&&t.cacheRead?t.cacheRead:0}findPackForModel(e){const t=this.data.settings.pricePacks||[];for(const n of t)if(Array.isArray(n.models)&&n.models.some(s=>this.normalizeModelKey(s)===e))return n;return null}hasAnyPrice(){return Object.keys(this.data.settings.modelPrices||{}).length>0?!0:(this.data.settings.pricePacks||[]).length>0}calcCost(e,t,n,s){const{price:o,fromPack:a}=this.resolvePrice(e);if(!o)return 0;const r=s&&s>0?s:0,l=Math.max(0,t-r)/1e3*o.input,d=n/1e3*o.output;let p=l+d;return o.cacheRead&&r>0&&(!a||this.data.settings.packCountCacheRead!==!1)&&(p+=r/1e3*o.cacheRead),p}calcCacheCost(e,t){if(!t||t<=0)return 0;const{price:n,fromPack:s}=this.resolvePrice(e);return!n||!n.cacheRead||s&&this.data.settings.packCountCacheRead===!1?0:t/1e3*n.cacheRead}formatCost(e){return`${this.getCurrency()}${e.toFixed(4)}`}getRecordCacheCost(e){const t=this.calcCacheCost(e.model,e.cacheReadTokens);return this.data.settings.recalcCostOnPriceChange!==!1,t}getRecordCost(e){return this.data.settings.recalcCostOnPriceChange!==!1?this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens):typeof e.cost=="number"?e.cost:this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens)}getPackUsage(e){const t=new Set((e.models||[]).map(s=>this.normalizeModelKey(s)));if(t.size===0)return{usedTokens:0};let n=0;for(const s of this.data.records)t.has(this.normalizeModelKey(s.model))&&(n+=(s.inputTokens||0)+(s.outputTokens||0));for(const s of this.data.archives||[])for(const[o,a]of Object.entries(s.byModel||{}))t.has(this.normalizeModelKey(o))&&(n+=(a.inputTokens||0)+(a.outputTokens||0));return{usedTokens:n}}getTotalCostInPeriod(e,t){let n=0;for(const s of e)s.timestamp>=t&&(n+=this.getRecordCost(s));return n}exportAll(){const e=JSON.parse(JSON.stringify(this.data));if(Array.isArray(e.apiKeys))for(const t of e.apiKeys)t&&"keyFull"in t&&delete t.keyFull;return JSON.stringify(e,null,2)}exportRecords(){return JSON.stringify(this.data.records,null,2)}}function oe(b){if(!b)return"";try{const e=new URL(b,window.location.href);return e.pathname+e.search}catch{return b}}function he(b,e){return e?b===e?!0:b.startsWith(e)&&(b[e.length]==="/"||b[e.length]==="?"):!1}class we{constructor(e){this.store=e,this.alertedKeys=new Set,this.exceededAlertedKeys=new Set,this.alertedGlobal=!1,this.exceededAlertedGlobal=!1,this.alertedCostGlobal=!1,this.exceededAlertedCostGlobal=!1}getAllKeys(){return this.store.getApiKeys()}findByKey(e){if(!e)return;const t=ae(e);return this.store.getApiKeys().find(n=>n.enabled&&n.keyHash&&n.keyHash===t)}findByUrl(e){const t=oe(e);if(t)return this.store.getApiKeys().find(n=>{if(!n.enabled||!n.baseUrl)return!1;const s=oe(n.baseUrl);return s?he(t,s):!1})}findByUrlAndModel(e,t){if(!e)return;const n=this.store.getApiKeys().filter(s=>{if(!s.enabled||!s.baseUrl)return!1;const o=oe(s.baseUrl),a=oe(e);return o&&a?he(a,o):!1});if(n.length!==0){if(t){const s=String(t).toLowerCase().trim();for(const o of n)if(Array.isArray(o.models)&&o.models.find(a=>String(a).toLowerCase().trim()===s))return o}return n[0]}}findByModel(e){if(!e)return;const t=String(e).toLowerCase().trim();return this.store.getApiKeys().find(n=>n.enabled?(n.models||[]).map(o=>String(o).toLowerCase().trim()).includes(t):!1)}getResetBoundary(e,t=30){if(e==="none")return 0;const n=new Date;if(e==="daily")return new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime();if(e==="custom"){const s=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime(),o=Math.max(1,Math.floor(t)||30);return s-(o-1)*864e5}return new Date(n.getFullYear(),n.getMonth(),1).getTime()}getKeyUsage(e){const t=this.store.getSettings(),n=this.getResetBoundary(t.quotaResetCycle,t.customResetDays),s=this.store.getApiKey(e),o=this.store.getRecords().filter(l=>l.apiKeyId===e&&l.timestamp>=n),a=(s==null?void 0:s.usedTokensOffset)??0,r=(s==null?void 0:s.usedInputTokensOffset)??0,i=(s==null?void 0:s.usedOutputTokensOffset)??0;return{totalTokens:o.reduce((l,d)=>l+d.totalTokens,0)+a,totalInputTokens:o.reduce((l,d)=>l+d.inputTokens,0)+r,totalOutputTokens:o.reduce((l,d)=>l+d.outputTokens,0)+i,totalRequests:o.length}}getRemainingQuota(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return-1;const n=this.getKeyUsage(e);return Math.max(0,t.quotaLimit-n.totalTokens)}getUsagePercent(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return 0;const n=this.getKeyUsage(e);return Math.min(100,n.totalTokens/t.quotaLimit*100)}isQuotaExceeded(e){const t=this.store.getApiKey(e);return!t||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens>=t.quotaLimit}wouldExceedQuota(e,t){const n=this.store.getApiKey(e);return!n||n.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens+t>n.quotaLimit}isThresholdReached(e){const t=this.store.getApiKey(e);return!t||t.alertThreshold<=0||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens/t.quotaLimit*100>=t.alertThreshold}checkThreshold(e,t){const n=this.store.getApiKey(e);if(n){if(this.alertedKeys.has(e)&&!this.isThresholdReached(e)&&this.alertedKeys.delete(e),this.isThresholdReached(e)&&!this.alertedKeys.has(e)){this.alertedKeys.add(e);const s=this.getKeyUsage(e),o=(s.totalTokens/n.quotaLimit*100).toFixed(1),a=`⚠️ Token 用量提醒：${n.name} 已使用 ${o}%（${s.totalTokens.toLocaleString()} / ${n.quotaLimit.toLocaleString()} tokens）`;t(a)}if(this.isQuotaExceeded(e)){if(!this.exceededAlertedKeys.has(e)){this.exceededAlertedKeys.add(e);const s=`⛔ Token 限额已用尽：${n.name}（限额 ${n.quotaLimit.toLocaleString()} tokens）`;t(s)}}else this.exceededAlertedKeys.delete(e)}}resetAlert(e){this.alertedKeys.delete(e),this.exceededAlertedKeys.delete(e)}clearAllAlerts(){this.alertedKeys.clear(),this.alertedGlobal=!1,this.alertedCostGlobal=!1,this.exceededAlertedKeys.clear(),this.exceededAlertedGlobal=!1,this.exceededAlertedCostGlobal=!1}generateKeyId(){return`key-${Date.now()}-${Math.random().toString(36).substring(2,8)}`}maskKey(e){return e?e.length<=8?e.substring(0,2)+"***":e.substring(0,5)+"..."+e.substring(e.length-4):"(空)"}getDefaultBaseUrl(e){return{openai:"https://api.openai.com/v1/chat/completions",anthropic:"https://api.anthropic.com/v1/messages",deepseek:"https://api.deepseek.com/v1/chat/completions"}[e.toLowerCase()]||""}getGlobalUsage(e){const t=this.getResetBoundary(e.globalQuotaResetCycle,e.customResetDays),n=this.store.getRecords().filter(s=>s.timestamp>=t);return{totalTokens:n.reduce((s,o)=>s+o.totalTokens,0)+(e.globalUsedTokensOffset??0),totalInputTokens:n.reduce((s,o)=>s+o.inputTokens,0)+(e.globalUsedInputTokensOffset??0),totalOutputTokens:n.reduce((s,o)=>s+o.outputTokens,0)+(e.globalUsedOutputTokensOffset??0),totalRequests:n.length}}getGlobalRemainingQuota(e){if(e.globalQuotaLimit<=0)return-1;const t=this.getGlobalUsage(e);return Math.max(0,e.globalQuotaLimit-t.totalTokens)}getGlobalUsagePercent(e){if(e.globalQuotaLimit<=0)return 0;const t=this.getGlobalUsage(e);return Math.min(100,t.totalTokens/e.globalQuotaLimit*100)}isGlobalQuotaExceeded(e){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens>=e.globalQuotaLimit}wouldExceedGlobalQuota(e,t){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens+t>e.globalQuotaLimit}isGlobalThresholdReached(e){return e.globalAlertThreshold<=0||e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens/e.globalQuotaLimit*100>=e.globalAlertThreshold}checkGlobalThreshold(e,t){if(!(e.globalQuotaLimit<=0)){if(this.alertedGlobal&&!this.isGlobalThresholdReached(e)&&(this.alertedGlobal=!1),this.isGlobalThresholdReached(e)&&!this.alertedGlobal){this.alertedGlobal=!0;const n=this.getGlobalUsage(e),o=`⚠️ 全局 Token 用量提醒：已使用 ${(n.totalTokens/e.globalQuotaLimit*100).toFixed(1)}%（${n.totalTokens.toLocaleString()} / ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(o)}if(this.isGlobalQuotaExceeded(e)){if(!this.exceededAlertedGlobal){this.exceededAlertedGlobal=!0;const n=`⛔ 全局 Token 限额已用尽（限额 ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(n)}}else this.exceededAlertedGlobal=!1}}resetGlobalAlert(){this.alertedGlobal=!1,this.exceededAlertedGlobal=!1}getGlobalCostUsage(e){const t=this.getResetBoundary(e.globalCostResetCycle,e.customResetDays),n=this.store.getRecords().filter(o=>o.timestamp>=t);let s=0;for(const o of n)s+=this.store.getRecordCost(o);return s+=e.globalUsedCostOffset??0,{totalCost:s,totalRequests:n.length}}getGlobalRemainingCost(e){if(e.globalCostLimit<=0)return-1;const t=this.getGlobalCostUsage(e);return Math.max(0,e.globalCostLimit-t.totalCost)}getGlobalCostPercent(e){if(e.globalCostLimit<=0)return 0;const t=this.getGlobalCostUsage(e);return Math.min(100,t.totalCost/e.globalCostLimit*100)}isGlobalCostExceeded(e){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost>=e.globalCostLimit}wouldExceedGlobalCostQuota(e,t){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost+t>e.globalCostLimit}isGlobalCostThresholdReached(e){return e.globalCostAlertThreshold<=0||e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost/e.globalCostLimit*100>=e.globalCostAlertThreshold}checkGlobalCostThreshold(e,t){if(!(e.globalCostLimit<=0)){if(this.alertedCostGlobal&&!this.isGlobalCostThresholdReached(e)&&(this.alertedCostGlobal=!1),this.isGlobalCostThresholdReached(e)&&!this.alertedCostGlobal){this.alertedCostGlobal=!0;const n=this.getGlobalCostUsage(e),s=(n.totalCost/e.globalCostLimit*100).toFixed(1),o=e.currency||"¥",a=`⚠️ 全局费用提醒：已使用 ${s}%（${o}${n.totalCost.toFixed(2)} / ${o}${e.globalCostLimit.toFixed(2)}）`;t(a)}if(this.isGlobalCostExceeded(e)){if(!this.exceededAlertedCostGlobal){this.exceededAlertedCostGlobal=!0;const s=`⛔ 全局费用限额已用尽（限额 ${e.currency||"¥"}${e.globalCostLimit.toFixed(2)}）`;t(s)}}else this.exceededAlertedCostGlobal=!1}}resetGlobalCostAlert(){this.alertedCostGlobal=!1,this.exceededAlertedCostGlobal=!1}checkAllThresholds(e){const t=this.store.getSettings();for(const n of this.store.getApiKeys())n.enabled&&this.checkThreshold(n.id,e);this.checkGlobalThreshold(t,e),this.checkGlobalCostThreshold(t,e)}}class Se{estimate(e){if(!e)return 0;const t=(e.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g)||[]).length,n=(e.match(/[\u3000-\u303f\uff00-\uffef]/g)||[]).length,s=(e.match(/[a-zA-Z]+/g)||[]).length,o=s*4,a=Math.max(0,e.length-t-n-o),r=Math.ceil(t*1.5+n*.75+s*1.3+a*.25);return Math.max(0,r)}estimateFromMessages(e){var n,s;if(!Array.isArray(e))return 0;let t=0;for(const o of e){if(typeof o=="string")t+=this.estimate(o)+4;else if(o!=null&&o.content){if(typeof o.content=="string")t+=this.estimate(o.content)+4;else if(Array.isArray(o.content)){for(const a of o.content)typeof a=="string"?t+=this.estimate(a):a!=null&&a.text&&(t+=this.estimate(a.text));t+=4}}if(Array.isArray(o.tool_calls)){for(const a of o.tool_calls)(n=a==null?void 0:a.function)!=null&&n.name&&(t+=this.estimate(a.function.name)+1),typeof((s=a==null?void 0:a.function)==null?void 0:s.arguments)=="string"&&(t+=this.estimate(a.function.arguments));t+=4}o!=null&&o.role&&(t+=1)}return t}estimateFromText(e){return this.estimate(e)}}let me=0;function fe(b,e){if(!b)return null;if(b instanceof Headers)return b.get(e);if(Array.isArray(b)){for(const[s,o]of b)if(s.toLowerCase()===e.toLowerCase())return o;return null}const t=b,n=e.toLowerCase();for(const s of Object.keys(t))if(s.toLowerCase()===n)return t[s];return null}function Ce(b){return typeof b=="string"?b:b instanceof URL?b.href:b.url}function Ae(){return`rec-${Date.now()}-${Math.random().toString(36).substring(2,9)}`}function re(b){return b&&String(b).trim()||""}function be(b){return!b||b==="unknown"||b==="siyuan-ai"||b==="default"}function se(b){if(!b)return!0;const e=b.trim();return!!(/^\d{14,}-[a-z0-9]+$/i.test(e)||/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)||/^\d+$/.test(e)||e.length>40&&!/[._-]/.test(e))}function X(...b){for(const e of b){const t=re(e);if(t&&!be(t)&&!se(t))return t}return""}function Me(b){return/\/api\/ai\/agent\/chat\b/i.test(b)||/\/api\/ai\/chatGPT\b/i.test(b)||/\/api\/ai\/chatGPTWithAction\b/i.test(b)}function $e(b){return typeof b=="object"&&b!==null&&"code"in b&&"msg"in b&&"data"in b&&!("choices"in b)&&!("usage"in b)}function Re(){return{apiKeyId:"siyuan-ai-default",apiKeyName:"思源智能体",source:"siyuan-ai",provider:"SiYuan AI",model:"unknown"}}class Ie{constructor(e,t,n){this.installed=!1,this.onThresholdAlert=()=>{},this.siyuanConfigCache=null,this.originalFetch=window.fetch.bind(window),this.store=e,this.keyManager=t,this.tokenCounter=n}setThresholdCallback(e){this.onThresholdAlert=e}keyMatchesModel(e,t){if(!e||!t)return!1;const n=String(t).toLowerCase().trim();return(e.models||[]).map(o=>String(o).toLowerCase().trim()).includes(n)}install(){if(this.installed){console.warn("[TokenStats] Interceptor already installed.");return}this.installed=!0;const e=this;window.fetch=async function(t,n){const s=Ce(t),o=e.store.getSettings(),a=await e.extractBodyText(t,n),r=e.tryParseJson(a),i=await e.identifyAiCall(s,n,o,r);if(!i)return e.originalFetch(t,n);e.logDebug(`Intercepted AI call: source=${i.source}, model=${i.model}, key=${i.apiKeyName}`),e.logDebug("Request body",{bodyText:a==null?void 0:a.slice(0,500),parsedBody:r});const l=Date.now();if(o.blockOnQuotaExceeded&&o.globalQuotaLimit>0){const k=e.tokenCounter.estimateFromMessages(e.extractMessages(r));if(e.keyManager.isGlobalQuotaExceeded(o)){const m="[TokenStats] 已阻止请求：全局 Token 限额已用尽";return console.warn(m),e.onThresholdAlert("global",m),e.createBlockedResponse(m,i)}if(e.keyManager.wouldExceedGlobalQuota(o,k)){const y=`[TokenStats] 已阻止请求：全局剩余配额 ${e.keyManager.getGlobalRemainingQuota(o).toLocaleString()} tokens，预估输入 ${k.toLocaleString()} tokens 将超限`;return console.warn(y),e.onThresholdAlert("global",y),e.createBlockedResponse(y,i)}}if(o.blockOnQuotaExceeded&&o.globalCostLimit>0){const k=e.tokenCounter.estimateFromMessages(e.extractMessages(r)),m=e.store.calcCost(i.model,k,k),y=o.currency||"¥";if(e.keyManager.isGlobalCostExceeded(o)){const g=`[TokenStats] 已阻止请求：全局费用限额已用尽（${y}${o.globalCostLimit.toFixed(2)}）`;return console.warn(g),e.onThresholdAlert("global-cost",g),e.createBlockedResponse(g,i)}if(m>0&&e.keyManager.wouldExceedGlobalCostQuota(o,m)){const g=e.keyManager.getGlobalRemainingCost(o),u=`[TokenStats] 已阻止请求：全局费用剩余 ${y}${g.toFixed(2)}，预估本次费用 ${y}${m.toFixed(2)} 将超限`;return console.warn(u),e.onThresholdAlert("global-cost",u),e.createBlockedResponse(u,i)}}if(o.blockOnQuotaExceeded){if(e.keyManager.isQuotaExceeded(i.apiKeyId)){const m=e.store.getApiKey(i.apiKeyId),y=`[TokenStats] 已阻止请求：${(m==null?void 0:m.name)||i.apiKeyName} 的 Token 限额已用尽`;return console.warn(y),e.onThresholdAlert(i.apiKeyId,y),e.createBlockedResponse(y,i)}const k=e.tokenCounter.estimateFromMessages(e.extractMessages(r));if(e.keyManager.wouldExceedQuota(i.apiKeyId,k)){const m=e.store.getApiKey(i.apiKeyId),y=e.keyManager.getRemainingQuota(i.apiKeyId),g=`[TokenStats] 已阻止请求：${(m==null?void 0:m.name)||i.apiKeyName} 剩余配额 ${y.toLocaleString()} tokens，预估输入 ${k.toLocaleString()} tokens 将超限`;return console.warn(g),e.onThresholdAlert(i.apiKeyId,g),e.createBlockedResponse(g,i)}}let d,p=!1;try{d=await e.originalFetch(t,n),p=d.ok}catch(k){throw e.recordCall(i,0,0,l,!1,i.model,void 0,!0),k}const c=d.clone();return e.analyzeResponse(c,i,l,r,p).catch(k=>console.warn("[TokenStats] Response analysis failed:",k)),d},console.log("[TokenStats] Fetch interceptor installed.")}createBlockedResponse(e,t){const n=JSON.stringify({error:{type:"quota_exceeded",code:"token_stats_blocked",message:e,apiKeyId:t.apiKeyId,apiKeyName:t.apiKeyName}});return new Response(n,{status:429,statusText:"Too Many Requests",headers:{"Content-Type":"application/json","X-TokenStats-Blocked":"true"}})}uninstall(){this.installed&&(window.fetch=this.originalFetch,this.installed=!1,console.log("[TokenStats] Fetch interceptor uninstalled."))}async extractBodyText(e,t){if(t!=null&&t.body&&typeof t.body=="string")return t.body;if((t==null?void 0:t.body)instanceof URLSearchParams)return t.body.toString();if((t==null?void 0:t.body)instanceof FormData)try{const n={};return t.body.forEach((s,o)=>{n[o]=typeof s=="string"?s:s.name}),JSON.stringify(n)}catch{return null}if((t==null?void 0:t.body)instanceof Blob)try{return await t.body.text()}catch{return null}if(t!=null&&t.body&&(t.body instanceof ArrayBuffer||ArrayBuffer.isView(t.body)))try{return new TextDecoder().decode(t.body)}catch{return null}if(e instanceof Request)try{return await e.clone().text()}catch{return null}return null}tryParseJson(e){if(!e)return null;try{return JSON.parse(e)}catch{return null}}isDebugEnabled(){return this.store.getSettings().debugLogging??!1}logDebug(...e){this.isDebugEnabled()&&console.log("[TokenStats]",...e)}async identifyAiCall(e,t,n,s){const o=e.toLowerCase();if(Me(e)){const l=await this.getSiYuanAiConfig(),d=(s==null?void 0:s.model)||null,p=this.extractModel(s)||d||this.getSiYuanSelectedModelId(l);if(p){const k=this.findProviderByModel(l,p),m=k?k.baseURL:null;if(k&&k.apiKey){const g=this.keyManager.findByKey(k.apiKey);if(g&&g.enabled)return{apiKeyId:g.id,apiKeyName:g.name,source:g.baseUrl||m||"siyuan-ai",provider:g.provider,model:this.resolveSiYuanModelForCall(s,l)}}const y=this.keyManager.findByModel(p);if(y&&y.enabled)return{apiKeyId:y.id,apiKeyName:y.name,source:y.baseUrl||m||"siyuan-ai",provider:y.provider,model:this.resolveSiYuanModelForCall(s,l)};if(m){const g=this.keyManager.findByUrlAndModel(m,p);if(g&&g.enabled)return{apiKeyId:g.id,apiKeyName:g.name,source:g.baseUrl||m||"siyuan-ai",provider:g.provider,model:this.resolveSiYuanModelForCall(s,l)}}}if(l!=null&&l.providers){for(const k of l.providers)if(k!=null&&k.enabled){if(k.apiKey){const m=this.keyManager.findByKey(k.apiKey);if(m&&m.enabled)return{apiKeyId:m.id,apiKeyName:m.name,source:m.baseUrl||k.baseURL||"siyuan-ai",provider:m.provider,model:this.resolveModelByBlockId(d,l)||this.resolveModelNameFromProvider(k)||this.resolveSiYuanModelForCall(s,l)}}if(k.baseURL){const m=this.keyManager.findByUrl(k.baseURL);if(m&&m.enabled)return{apiKeyId:m.id,apiKeyName:m.name,source:m.baseUrl||k.baseURL||"siyuan-ai",provider:m.provider,model:this.resolveModelByBlockId(d,l)||this.resolveModelNameFromProvider(k)||this.resolveSiYuanModelForCall(s,l)}}if(Array.isArray(k.models))for(const m of k.models){const y=(m==null?void 0:m.id)||(m==null?void 0:m.name)||(m==null?void 0:m.displayName);if(!y)continue;const g=this.keyManager.findByModel(y);if(g&&g.enabled)return{apiKeyId:g.id,apiKeyName:g.name,source:g.baseUrl||k.baseURL||"siyuan-ai",provider:g.provider,model:y}}}}const c=this.keyManager.findByUrl(e);return c&&c.enabled?{apiKeyId:c.id,apiKeyName:c.name,source:c.baseUrl||"siyuan-ai",provider:c.provider,model:this.resolveSiYuanModelForCall(s,l)}:{...Re(),model:this.resolveSiYuanModelForCall(s,l)}}if(n.matchByUrl){const l=this.keyManager.findByUrl(e),d=this.extractModel(s);let p=l;if(d&&l&&!this.keyMatchesModel(l,d)){const c=this.keyManager.findByModel(d);c&&c.enabled&&(p=c)}if(p&&p.enabled)return{apiKeyId:p.id,apiKeyName:p.name,source:p.baseUrl||"url-match",provider:p.provider,model:d||"unknown"}}if(!n.interceptExternalAPIs)return null;const r=this.extractModel(s);if(o.includes("/v1/chat/completions")||o.includes("/v1/completions")){const d=(fe(t==null?void 0:t.headers,"Authorization")||"").replace(/^bearer\s+/i,"").trim();let p=r?this.keyManager.findByModel(r):void 0;return(!p||!p.enabled)&&(p=d?this.keyManager.findByKey(d):void 0),(!p||!p.enabled)&&(p=this.keyManager.findByUrl(e)),{apiKeyId:(p==null?void 0:p.id)||"unknown",apiKeyName:(p==null?void 0:p.name)||this.keyManager.maskKey(d)||"Unknown",source:"external-openai",provider:(p==null?void 0:p.provider)||"OpenAI",model:r||"unknown"}}if(o.includes("/v1/messages")){const l=fe(t==null?void 0:t.headers,"x-api-key")||"";let d=r?this.keyManager.findByModel(r):void 0;return(!d||!d.enabled)&&(d=l?this.keyManager.findByKey(l):void 0),(!d||!d.enabled)&&(d=this.keyManager.findByUrl(e)),{apiKeyId:(d==null?void 0:d.id)||"unknown",apiKeyName:(d==null?void 0:d.name)||this.keyManager.maskKey(l)||"Unknown",source:"external-anthropic",provider:(d==null?void 0:d.provider)||"Anthropic",model:r||"unknown"}}let i=r?this.keyManager.findByModel(r):void 0;return(!i||!i.enabled)&&(i=this.keyManager.findByUrl(e)),i&&i.enabled?{apiKeyId:i.id,apiKeyName:i.name,source:i.baseUrl||"custom-url",provider:i.provider,model:r||"unknown"}:null}getSiYuanSelectedModelId(e){if(!e)return null;const t=e.agent||{},n=e.editing||{};return t.modelId||n.modelId||null}extractModel(e){return X(e==null?void 0:e.model)||null}resolveModelByBlockId(e,t){if(!t||!e)return null;const n=t.providers||[];for(const s of n){const o=(s.models||[]).find(a=>(a==null?void 0:a.id)===e);if(o)return o.name||o.displayName||null}return null}resolveSiYuanModelForCall(e,t){const n=e==null?void 0:e.model;if(n){const s=this.resolveModelByBlockId(n,t);if(s)return s}return X(this.extractModel(e))||this.resolveSiYuanModelNameFromConfig(t)||"unknown"}extractMessages(e){if(!e)return[];if(Array.isArray(e.messages))return e.messages;if(typeof e.messages=="string")return[e.messages];if(typeof e.messages=="object"&&e.messages!==null)return[e.messages];if(typeof e.prompt=="string")return[e.prompt];if(Array.isArray(e.contents))return e.contents;if(typeof e.content=="string")return[e.content];if(typeof e.text=="string")return[e.text];if(e.message!==void 0||e.references!==void 0){const t=[];if(Array.isArray(e.references))for(const n of e.references)typeof n=="string"?t.push({role:"system",content:n}):n!=null&&n.content?t.push({role:"system",content:typeof n.content=="string"?n.content:JSON.stringify(n.content)}):n!=null&&n.text&&t.push({role:"system",content:n.text});if(typeof e.message=="string"?t.push({role:"user",content:e.message}):typeof e.message=="object"&&e.message!==null&&t.push({role:"user",content:JSON.stringify(e.message)}),t.length>0)return t}if(typeof e.msg=="string")return[e.msg];if(typeof e.msg=="object"&&e.msg!==null)return[e.msg];if(e.context&&e.query)return[{role:"system",content:e.context},{role:"user",content:e.query}];if(typeof e.query=="string")return[e.query];if(e.input){if(Array.isArray(e.input))return e.input;if(Array.isArray(e.input.messages))return e.input.messages;if(typeof e.input.messages=="string")return[e.input.messages];if(typeof e.input.messages=="object"&&e.input.messages!==null)return[e.input.messages];if(typeof e.input.message=="string")return[e.input.message];if(typeof e.input.message=="object"&&e.input.message!==null)return[e.input.message];if(typeof e.input.text=="string")return[e.input.text];if(typeof e.input=="string")return[e.input]}if(e.data){if(Array.isArray(e.data.messages))return e.data.messages;if(typeof e.data.messages=="string")return[e.data.messages];if(typeof e.data.messages=="object"&&e.data.messages!==null)return[e.data.messages];if(typeof e.data.message=="string")return[e.data.message];if(typeof e.data.message=="object"&&e.data.message!==null)return[e.data.message];if(typeof e.data.prompt=="string")return[e.data.prompt];if(Array.isArray(e.data.contents))return e.data.contents;if(typeof e.data.content=="string")return[e.data.content];if(typeof e.data.text=="string")return[e.data.text]}return[]}extractAttribution(e){var l,d,p,c,k,m,y,g,u,h,T,w,x,S,L,E,v;if(!e||typeof e!="object")return this.logDebug("attribution: parsedBody is not an object"),{};const t=[],n=f=>{Array.isArray(f)&&t.push(...f)};if(n(e.references),n((l=e.context)==null?void 0:l.references),n((d=e.context)==null?void 0:d.blocks),n((p=e.context)==null?void 0:p.refList),Array.isArray(e.messages))for(const f of e.messages)!f||typeof f!="object"||(n((c=f.context)==null?void 0:c.references),n((k=f.context)==null?void 0:k.blocks),n((m=f.context)==null?void 0:m.refList));if(Array.isArray(e.contents))for(const f of e.contents)!f||typeof f!="object"||(n((y=f.context)==null?void 0:y.references),n((g=f.context)==null?void 0:g.blocks),n((u=f.context)==null?void 0:u.refList));e.content&&typeof e.content=="object"&&(n((h=e.content.context)==null?void 0:h.references),n((T=e.content.context)==null?void 0:T.blocks),n((w=e.content.context)==null?void 0:w.refList)),e.msg&&typeof e.msg=="object"&&(n((x=e.msg.context)==null?void 0:x.references),n((S=e.msg.context)==null?void 0:S.blocks),n((L=e.msg.context)==null?void 0:L.refList));let s,o,a;const r=[];for(const f of t){if(!f||typeof f!="object")continue;const $=f.id||f.blockId||f.blockID||f.block_id;typeof $=="string"&&$&&r.push($);const R=f.box||f.notebookId||f.notebook||f.notebook_id;s===void 0&&typeof R=="string"&&R&&(s=R);const I=f.rootID||f.rootId||f.root_id||f.docId||f.docID||f.doc_id;o===void 0&&typeof I=="string"&&I&&(o=I);const P=f.hpath||f.path||f.name||f.title||f.hPath;a===void 0&&typeof P=="string"&&P&&(a=P)}s===void 0&&typeof e.box=="string"&&e.box&&(s=e.box),o===void 0&&typeof e.rootID=="string"&&e.rootID&&(o=e.rootID),o===void 0&&typeof e.rootId=="string"&&e.rootId&&(o=e.rootId),a===void 0&&typeof e.hpath=="string"&&e.hpath&&(a=e.hpath),a===void 0&&typeof e.path=="string"&&e.path&&(a=e.path),r.length===0&&typeof e.id=="string"&&e.id&&r.push(e.id);const i={};return s&&(i.notebookId=s),o&&(i.docId=o),a&&(i.docPath=a),r.length>0&&(i.blockIds=r),this.logDebug("attribution:",{topRefs:Array.isArray(e.references)?e.references.length:0,contextRefs:Array.isArray((E=e.context)==null?void 0:E.references)?(v=e.context)==null?void 0:v.references.length:0,msgRefs:Array.isArray(e.messages)?e.messages.reduce((f,$)=>{var R;return f+(Array.isArray((R=$==null?void 0:$.context)==null?void 0:R.references)?$.context.references.length:0)},0):0,collected:t.length,firstRef:t[0]?JSON.stringify(t[0]).slice(0,240):void 0,result:i}),i}async analyzeResponse(e,t,n,s,o=!0){let a=0,r=0,i,l=t.model,d=!0,p;const c=this.extractAttribution(s),k=(e.headers.get("content-type")||"").toLowerCase(),m=this.store.getSettings();if(!l||be(l)){const u=await this.resolveSiYuanModelNameIfNeeded(t.source);u&&(l=u)}const y=this.tokenCounter.estimateFromMessages(this.extractMessages(s));if(this.logDebug("analyzeResponse",{url:t.source,contentType:k,ok:e.ok,status:e.status,estimatedInput:y,bodyPreview:JSON.stringify(s).slice(0,200)}),!e.body){this.logDebug("analyzeResponse: response body is null, using input estimate only"),a=y,r=0,this.recordCall(t,a,r,n,o,l,void 0,!0);return}try{if(k.includes("text/event-stream")){const u=await this.parseSSEStream(e,t,m,y);a=u.inputTokens,r=u.outputTokens,i=u.cacheReadTokens,d=u.estimated,u.model&&(l=u.model),u.aborted&&(o=!1),u.rawUsage&&(p=u.rawUsage)}else if(k.includes("application/json")||k.includes("text/json")){const u=await e.text();this.logDebug("JSON response raw text preview:",u.slice(0,300));const h=this.tryParseJson(u);if($e(h)&&typeof h.data!="string"){this.logDebug("Skipping SiYuan kernel non-AI response",{code:h.code,dataKeys:Object.keys(h.data||{})});return}const T=h?this.extractUsage(h):null;T&&(a=T.inputTokens,r=T.outputTokens,i=T.cacheReadTokens||void 0,h!=null&&h.usage&&(p=h.usage)),h!=null&&h.model&&(l=X(h.model,l)||l),T||(a=y,r=this.tokenCounter.estimateFromText(h?this.extractOutputText(h):u)),d=!T}else if(k.includes("application/x-ndjson")||k.includes("application/ndjson")){const u=await this.parseNDJSONStream(e,t,m,y);a=u.inputTokens,r=u.outputTokens,i=u.cacheReadTokens,d=u.estimated,u.model&&(l=u.model),u.aborted&&(o=!1),u.rawUsage&&(p=u.rawUsage)}else if(k.includes("text/plain")||k.includes("text/html")||k.includes("application/xml")||k.includes("text/xml")){const u=await e.text();a=y,r=this.tokenCounter.estimateFromText(u)}else{const u=await e.text();this.logDebug("Unknown content type, raw response preview:",u.slice(0,300)),a=y;const h=this.tryParseJson(u);if(h){const T=this.extractUsage(h);T?(a=T.inputTokens,r=T.outputTokens,i=T.cacheReadTokens||void 0,h.usage&&(p=h.usage)):r=this.tokenCounter.estimateFromText(this.extractOutputText(h))}else r=this.tokenCounter.estimateFromText(u)}}catch(u){console.warn("[TokenStats] Token extraction failed, using estimates:",u),a=y;try{const h=await e.text();r=this.tokenCounter.estimateFromText(h)}catch{r=0}}o&&a===0&&y>0&&(a=y),this.logDebug("analyzeResponse result:",{inputTokens:a,outputTokens:r,model:l,success:o});const g=a+r;this.recordCall(t,a,r,n,o,l,i,d,p,c),g>0&&m.showNotifications&&(this.keyManager.checkThreshold(t.apiKeyId,u=>{this.onThresholdAlert(t.apiKeyId,u)}),this.keyManager.checkGlobalThreshold(m,u=>{this.onThresholdAlert("global",u)}))}async parseSSEStream(e,t,n,s=0){var k;const o=(k=e.body)==null?void 0:k.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1,estimated:!0};const a=new TextDecoder;let r="";const i={fullContent:"",usage:null,model:void 0,rawUsage:void 0};let l=0,d=!1;const p=m=>{const y=m.split(`
`),g=[];let u="";for(const T of y){const w=T.trim();w&&(w.startsWith("data:")?g.push(w.slice(5).trimStart()):w.startsWith("event:")&&(u=w.slice(6).trim()))}if(g.length===0)return;const h=g.join(`
`);if(this.logDebug("SSE raw event",{eventType:u,data:h.slice(0,500)}),h!=="[DONE]")try{const T=JSON.parse(h);if(this.logDebug("SSE parsed chunk",{eventType:u,chunk:T}),typeof T!="object"||T===null)return;const w=this.collectChunkInfo(T,i.usage,i.model,i.fullContent,u),x=i.fullContent.length;i.usage=this.mergeUsage(i.usage,w.usage),i.model=w.model,i.fullContent=w.fullContent,w.rawUsage&&(i.rawUsage=w.rawUsage),this.logDebug("SSE collected after chunk",{eventType:u,contentAdded:i.fullContent.length-x,fullContentLength:i.fullContent.length,usage:i.usage})}catch(T){this.logDebug("SSE chunk JSON parse failed",{eventType:u,data:h.slice(0,300),error:String(T)})}};try{for(;;){const{done:m,value:y}=await o.read();if(m)break;r+=a.decode(y,{stream:!0}),this.logDebug("SSE buffer received",{bufferLength:r.length,decodedLength:(y==null?void 0:y.length)??0});const{events:g,remainder:u}=this.splitSSEEvents(r);r=u,this.logDebug("SSE events split",{eventCount:g.length,remainderLength:u.length});for(const h of g)p(h);if(n.abortStreamOnExceeded&&n.blockOnQuotaExceeded){if(l=i.usage?i.usage.outputTokens:this.tokenCounter.estimateFromText(i.fullContent),this.keyManager.wouldExceedQuota(t.apiKeyId,l)){d=!0;const h=this.store.getApiKey(t.apiKeyId),T=`[TokenStats] 流式响应已中断：${(h==null?void 0:h.name)||t.apiKeyName} 的 Token 限额在生成过程中被超出`;console.warn(T),this.onThresholdAlert(t.apiKeyId,T);try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(n,l)){d=!0;const h="[TokenStats] 流式响应已中断：全局 Token 限额在生成过程中被超出";console.warn(h),this.onThresholdAlert("global",h);try{await o.cancel()}catch{}break}}}if(r.trim().length>0){const{events:m}=this.splitSSEEvents(r+`

`);for(const y of m)p(y)}}finally{o.releaseLock()}if(this.logDebug("parseSSEStream finished",{contentLength:i.fullContent.length,hasUsage:!!i.usage,usage:i.usage,estimatedInput:s}),i.usage){const m=this.tokenCounter.estimateFromText(i.fullContent);return{inputTokens:i.usage.inputTokens||s,outputTokens:i.usage.outputTokens||m,cacheReadTokens:i.usage.cacheReadTokens||void 0,model:i.model,aborted:d,rawUsage:i.rawUsage,estimated:!1}}const c=this.tokenCounter.estimateFromText(i.fullContent);return{inputTokens:s,outputTokens:c,model:i.model,aborted:d,rawUsage:i.rawUsage,estimated:!0}}splitSSEEvents(e){const t=[],s=e.replace(/\r\n/g,`
`).split(`

`),o=s.pop()||"";for(const a of s)a.trim()&&t.push(a);return{events:t,remainder:o}}mergeUsage(e,t){return t?e?{inputTokens:Math.max(e.inputTokens,t.inputTokens),outputTokens:Math.max(e.outputTokens,t.outputTokens),cacheReadTokens:Math.max(e.cacheReadTokens||0,t.cacheReadTokens||0)}:t:e}collectChunkInfo(e,t,n,s,o=""){var d,p,c,k,m,y,g,u,h,T,w,x,S,L,E,v,f,$,R,I,P,N,F,G,Q,C,D,q,j,_,W,B,H,Y;const a=(...A)=>{const z=X(...A);if(z)return z;const V=re(n);return V&&!se(V)?V:""};let r;if(e.model&&(n=a(e.model,n)),o==="content"||o==="reasoning")return e.token&&(s+=e.token,this.logDebug("SiYuan agent content appended",{token:e.token})),{usage:t,model:n,fullContent:s};if(o==="thinking")return e.reasoning&&(s+=e.reasoning,this.logDebug("SiYuan agent thinking appended",{reasoning:e.reasoning})),{usage:t,model:n,fullContent:s};if(o==="usage"){const A=e.promptTokens??e.prompt_tokens??0,z=e.lastPromptTokens??0,V=e.completionTokens??e.completion_tokens??0;return this.logDebug("SiYuan agent usage event",{promptTokens:A,lastPromptTokens:z,completionTokens:V,chunk:e}),(A>0||V>0)&&(t={inputTokens:z>0&&(A===0||z<=A)?z:A,outputTokens:V,cacheReadTokens:e.cachedTokens??e.cacheReadTokens??e.cachedInputTokens??0},r=e),{usage:t,model:n,fullContent:s,rawUsage:r}}if(o==="done"||o==="error"||o==="retry"||o==="snapshot"||o==="tool_call"||o==="tool_result"||o==="confirm"||o==="question"||o==="frontend_tool_call")return{usage:t,model:n,fullContent:s};if(e.usage){const A=e.usage,z=A.cached_input_tokens??A.cache_read_input_tokens??((d=A.prompt_tokens_details)==null?void 0:d.cached_tokens)??0;t={inputTokens:A.prompt_tokens??A.input_tokens??A.promptTokens??0,outputTokens:A.completion_tokens??A.output_tokens??A.completionTokens??0,cacheReadTokens:z},r=e.usage}const i=A=>{typeof A=="string"&&(s+=A)},l=(p=e.choices)==null?void 0:p[0];if((c=l==null?void 0:l.delta)!=null&&c.content&&i(l.delta.content),l!=null&&l.text&&i(l.text),(k=l==null?void 0:l.delta)!=null&&k.reasoning_content&&i(l.delta.reasoning_content),(m=l==null?void 0:l.message)!=null&&m.content&&i(l.message.content),l!=null&&l.content&&i(l.content),(g=(y=l==null?void 0:l.delta)==null?void 0:y.function_call)!=null&&g.arguments&&i(l.delta.function_call.arguments),(u=l==null?void 0:l.delta)!=null&&u.tool_calls)for(const A of l.delta.tool_calls)(h=A==null?void 0:A.function)!=null&&h.arguments&&i(A.function.arguments);if(e.type==="content_block_delta"&&((T=e.delta)!=null&&T.text)&&i(e.delta.text),e.type==="content_block_delta"&&((w=e.delta)!=null&&w.reasoning)&&i(e.delta.reasoning),e.type==="content_block_start"&&((x=e.content_block)!=null&&x.text)&&i(e.content_block.text),(S=e.message)!=null&&S.usage){const A=e.message.usage,z=A.cache_read_input_tokens??0;t={inputTokens:A.input_tokens??0,outputTokens:A.output_tokens??0,cacheReadTokens:z},r=e.message.usage}if(e.content){if(typeof e.content=="string")i(e.content);else if(Array.isArray(e.content))for(const A of e.content)i(typeof A=="string"?A:A==null?void 0:A.text)}if(e.output&&i(e.output),e.text&&i(e.text),e.result&&i(e.result),e.message&&(typeof e.message=="string"?i(e.message):e.message.content&&i(e.message.content)),(f=(v=(E=(L=e.data)==null?void 0:L.choices)==null?void 0:E[0])==null?void 0:v.delta)!=null&&f.content&&i(e.data.choices[0].delta.content),(I=(R=($=e.data)==null?void 0:$.choices)==null?void 0:R[0])!=null&&I.text&&i(e.data.choices[0].text),(G=(F=(N=(P=e.data)==null?void 0:P.choices)==null?void 0:N[0])==null?void 0:F.message)!=null&&G.content&&i(e.data.choices[0].message.content),(q=(D=(C=(Q=e.data)==null?void 0:Q.choices)==null?void 0:C[0])==null?void 0:D.delta)!=null&&q.reasoning_content&&i(e.data.choices[0].delta.reasoning_content),(j=e.data)!=null&&j.model&&(n=a(e.data.model,n)),(_=e.data)!=null&&_.usage){const A=e.data.usage;t={inputTokens:A.prompt_tokens??A.input_tokens??0,outputTokens:A.completion_tokens??A.output_tokens??0,cacheReadTokens:A.cached_input_tokens??A.cache_read_input_tokens??0},r=e.data.usage}if((W=e.data)!=null&&W.content){if(typeof e.data.content=="string")i(e.data.content);else if(Array.isArray(e.data.content))for(const A of e.data.content)i(typeof A=="string"?A:A==null?void 0:A.text)}return(B=e.data)!=null&&B.output&&i(e.data.output),(H=e.data)!=null&&H.text&&i(e.data.text),(Y=e.data)!=null&&Y.result&&i(e.data.result),{usage:t,model:n,fullContent:s,rawUsage:r}}async parseNDJSONStream(e,t,n,s=0){var k;const o=(k=e.body)==null?void 0:k.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1,estimated:!0};const a=new TextDecoder;let r="",i="",l=null,d,p=!1,c;try{for(;;){const{done:m,value:y}=await o.read();if(m)break;r+=a.decode(y,{stream:!0});const g=r.split(`
`);r=g.pop()||"";for(const u of g)if(u.trim())try{const h=JSON.parse(u),T=this.collectChunkInfo(h,l,d,i);l=this.mergeUsage(l,T.usage),d=T.model,i=T.fullContent,T.rawUsage&&(c=T.rawUsage)}catch{}if(n.abortStreamOnExceeded&&n.blockOnQuotaExceeded){const u=l?l.outputTokens:this.tokenCounter.estimateFromText(i);if(this.keyManager.wouldExceedQuota(t.apiKeyId,u)){p=!0;try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(n,u)){p=!0;try{await o.cancel()}catch{}break}}}if(r.trim())try{const m=JSON.parse(r.trim()),y=this.collectChunkInfo(m,l,d,i);l=y.usage,d=y.model,i=y.fullContent,y.rawUsage&&(c=y.rawUsage)}catch{}}finally{o.releaseLock()}if(this.logDebug("parseNDJSONStream finished",{contentLength:i.length,hasUsage:!!l,usage:l,estimatedInput:s}),l){const m=this.tokenCounter.estimateFromText(i);return{inputTokens:l.inputTokens||s,outputTokens:l.outputTokens||m,cacheReadTokens:l.cacheReadTokens||void 0,model:d,aborted:p,rawUsage:c,estimated:!1}}return{inputTokens:s,outputTokens:this.tokenCounter.estimateFromText(i),model:d,aborted:p,rawUsage:c,estimated:!0}}extractUsage(e){var t;if(e!=null&&e.usage){const n=e.usage,s=n.prompt_tokens??n.input_tokens??n.promptTokens??0,o=n.completion_tokens??n.output_tokens??n.completionTokens??0,a=n.cached_input_tokens??n.cache_read_input_tokens??((t=n.prompt_tokens_details)==null?void 0:t.cached_tokens)??0;return s===0&&o===0&&a===0?null:{inputTokens:s,outputTokens:o,cacheReadTokens:a}}if((e==null?void 0:e.promptTokens)!==void 0||(e==null?void 0:e.completionTokens)!==void 0){const n=e.promptTokens??0,s=e.lastPromptTokens??0,o=s>0&&(n===0||s<=n)?s:n,a=e.completionTokens??0,r=e.cachedTokens??e.cacheReadTokens??e.cachedInputTokens??0;return o===0&&a===0?null:{inputTokens:o,outputTokens:a,cacheReadTokens:r}}return null}extractOutputText(e){var o,a,r,i,l,d,p;if(!e)return"";const t=[],n=c=>{typeof c=="string"&&c?t.push(c):c&&typeof c.text=="string"&&c.text&&t.push(c.text)},s=c=>{var k,m,y,g,u,h,T,w;if(c&&(n((k=c==null?void 0:c.message)==null?void 0:k.content),n((m=c==null?void 0:c.message)==null?void 0:m.reasoning_content),n((y=c==null?void 0:c.delta)==null?void 0:y.content),n((g=c==null?void 0:c.delta)==null?void 0:g.reasoning_content),n(c==null?void 0:c.text),n(c==null?void 0:c.content),(h=(u=c==null?void 0:c.delta)==null?void 0:u.function_call)!=null&&h.arguments&&n(c.delta.function_call.arguments),(T=c==null?void 0:c.delta)!=null&&T.tool_calls))for(const x of c.delta.tool_calls)(w=x==null?void 0:x.function)!=null&&w.arguments&&n(x.function.arguments)};if(e.choices)for(const c of e.choices)s(c);if(e.content){if(typeof e.content=="string")n(e.content);else if(Array.isArray(e.content))for(const c of e.content)n(c)}if(e.output&&n(e.output),e.text&&n(e.text),e.result&&n(e.result),e.message&&(typeof e.message=="string"?n(e.message):(n(e.message.content),n(e.message.text))),e.response&&(typeof e.response=="string"?n(e.response):e.response.text?n(e.response.text):e.response.content&&n(e.response.content)),e.data)if(typeof e.data=="string")n(e.data);else{if(n((o=e.data)==null?void 0:o.text),n((a=e.data)==null?void 0:a.output),n((r=e.data)==null?void 0:r.result),n((i=e.data)==null?void 0:i.msg),(l=e.data)!=null&&l.choices)for(const c of e.data.choices)s(c);if((d=e.data)!=null&&d.content)if(typeof e.data.content=="string")n(e.data.content);else if(Array.isArray(e.data.content))for(const c of e.data.content)n(c);else n(e.data.content);(p=e.data)!=null&&p.message&&(n(e.data.message.content),n(e.data.message.text))}return e.msg&&n(e.msg),e.token&&n(e.token),e.reasoning&&n(e.reasoning),t.join("")}recordCall(e,t,n,s,o,a,r,i=!0,l,d){const p=this.resolveModelName(a||e.model,e),c={id:Ae(),apiKeyId:e.apiKeyId,apiKeyName:e.apiKeyName,source:e.source,model:p,inputTokens:t,outputTokens:n,cacheReadTokens:r,totalTokens:t+n,timestamp:s,requestTime:Date.now()-s,success:o,estimated:i,rawUsage:l,notebookId:d==null?void 0:d.notebookId,docId:d==null?void 0:d.docId,docPath:d==null?void 0:d.docPath,blockIds:d==null?void 0:d.blockIds};if(this.store.addRecord(c),this.logDebug(`Recorded: ${c.apiKeyName} | ${c.model} | in=${t} out=${n} cache=${r??0} total=${c.totalTokens} success=${o}`),o&&t===0&&n===0){const k=Date.now();k-me>6e4&&(me=k,console.warn("[TokenStats] 本次请求 token 计数为 0。若持续出现，请在设置中开启“启用调试日志”，并在浏览器控制台中查看请求/响应详情。"))}}resolveModelName(e,t){var a;const n=[];n.push(e,t.model),this.isSiYuanAiSource(t.source)&&n.push(this.resolveSiYuanModelNameFromConfig((a=this.siyuanConfigCache)==null?void 0:a.config));const s=X(...n);return s||re(e)||re(t.model)||t.source||"unknown"}async resolveSiYuanModelNameIfNeeded(e){return this.isSiYuanAiSource(e)?this.getSiYuanModelName():null}isSiYuanAiSource(e){return e==="siyuan-ai"||e.includes("/api/ai/")}async getSiYuanAiConfig(){var e,t;if(this.siyuanConfigCache&&Date.now()-this.siyuanConfigCache.ts<5e3)return this.siyuanConfigCache.config;try{const n=window.siyuan,s=(e=n==null?void 0:n.config)==null?void 0:e.ai;if(s)return this.siyuanConfigCache={config:s,ts:Date.now()},s;const o=await this.originalFetch("/api/system/getConf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});if(!o.ok)return null;const a=await o.json(),r=((t=a==null?void 0:a.data)==null?void 0:t.ai)||(a==null?void 0:a.ai);if(r)return this.siyuanConfigCache={config:r,ts:Date.now()},r}catch{}return null}findProviderByModel(e,t){if(!e||!t)return null;const n=String(t).toLowerCase().trim();if(!n)return null;const s=e.providers||[];for(const o of s){if(!o||!o.enabled)continue;if((o.models||[]).find(r=>{const i=String((r==null?void 0:r.id)||"").toLowerCase().trim(),l=String((r==null?void 0:r.name)||"").toLowerCase().trim(),d=String((r==null?void 0:r.displayName)||"").toLowerCase().trim();return i===n||l===n||d===n}))return o}return null}resolveSiYuanModelNameFromConfig(e){var r,i;if(!e)return null;const t=e.agent||{},n=e.editing||{},s=t.modelId||n.modelId,o=t.modelName||t.displayName||t.name||n.modelName||n.displayName||n.name;if(o&&!se(o))return o;const a=e.providers||[];if(s)for(const l of a){if(!(l!=null&&l.enabled))continue;const d=(l.models||[]).find(p=>(p==null?void 0:p.id)===s);if(d)return d.displayName||d.name||d.id||null}for(const l of a){if(!(l!=null&&l.enabled))continue;const d=((r=l.models)==null?void 0:r.find(p=>p==null?void 0:p.default))||((i=l.models)==null?void 0:i[0]);if(d)return d.displayName||d.name||d.id||null;if(l.name&&!se(l.name))return l.name}return s&&!se(s)?s:null}resolveModelNameFromProvider(e){if(!(e!=null&&e.models)||!Array.isArray(e.models))return null;const t=e.models.find(n=>n==null?void 0:n.default)||e.models[0];return t&&X(t.displayName,t.name,t.id)||null}async getSiYuanModelName(){return this.resolveSiYuanModelNameFromConfig(await this.getSiYuanAiConfig())}}function U(b){return b?b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}class Ee{constructor(e,t){this.onManualSync=null,this.store=e,this.keyManager=t,this.setting=this.build()}build(){const e=this,t=new M.Setting({width:this.isMobile()?"92vw":"700px",height:"auto",confirmCallback:()=>{e.saveGlobalSettings(),M.showMessage("设置已保存",2e3,"info")}});setTimeout(()=>this.ensureDialogScrollable(),0);const n=this.store.getSettings();return t.addItem({title:"按 API Base URL 匹配 Key",description:"拦截请求时优先按 URL 匹配已配置的 API Key，适用于思源 AI、自定义代理等场景",createActionElement:()=>this.createCheckbox("matchByUrl",n.matchByUrl??!0)}),t.addItem({title:"拦截外部 API 调用",description:"拦截第三方插件对 OpenAI / Anthropic / DeepSeek 等外部 API 的直接调用",createActionElement:()=>this.createCheckbox("interceptExternalAPIs",n.interceptExternalAPIs)}),t.addItem({title:"超出限额时阻止请求",description:"当某个 API Key 的 Token 用量达到限额时，阻止后续请求（谨慎开启）",createActionElement:()=>this.createCheckbox("blockOnQuotaExceeded",n.blockOnQuotaExceeded)}),t.addItem({title:"限额重置周期",description:"按周期自动重置 Token 用量统计。每月 = 每月 1 日归零，每日 = 每天归零",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-quotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,n.quotaResetCycle===a.value&&(r.selected=!0),s.appendChild(r)}return s}}),t.addItem({title:"自定义周期天数（天）",description:"单 Key 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）。例如 14 = 每两周、90 = 每季。下方全局周期也共用此天数。",createActionElement:()=>this.createCustomDaysInput("tks-customResetDays")}),t.addItem({title:"流式响应中途超限时中断",description:"当流式 AI 响应生成过程中 Token 超出限额时，立即中断流（避免继续消耗）",createActionElement:()=>this.createCheckbox("abortStreamOnExceeded",n.abortStreamOnExceeded)}),t.addItem({title:"显示阈值提醒通知",description:"当 Token 用量达到设定的提醒阈值时，在思源底部弹出通知",createActionElement:()=>this.createCheckbox("showNotifications",n.showNotifications)}),t.addItem({title:"顶栏显示实时用量徽标",description:"在顶栏图标上显示当前全局用量（无全局限额时显示总 token 数，设有全局限额时显示百分比，颜色随阈值变化）",createActionElement:()=>this.createCheckbox("showTopBarBadge",n.showTopBarBadge)}),t.addItem({title:"启用调试日志",description:"在浏览器控制台输出请求/响应调试信息，排查 token 统计为 0 等问题（重启插件后生效）",createActionElement:()=>this.createCheckbox("debugLogging",n.debugLogging??!1)}),t.addItem({title:"最大记录数",description:"保留的最近调用记录数量，超出后自动裁剪旧记录（节省存储空间）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-max-records",s.value=String(n.maxRecords),s.min="100",s.max="50000",s.step="100",s}}),t.addItem({title:"诊断日志导出条数",description:"仪表盘「导出原始 usage 日志」时，最多导出最近 N 条带原始 usage 的记录（0 = 全部导出）。原始 usage 来自 API 供应商响应、未做任何裁剪，用于排查用量统计偏差。",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-diagnosticExportCount",s.value=String(n.diagnosticExportCount??50),s.min="0",s.max="500",s.step="10",s}}),t.addItem({title:"全局总 Token 限额",description:"所有 API Key 的 Token 用量总和超过此值时触发拦截（0 = 不开启）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalQuotaLimit",s.value=String(n.globalQuotaLimit||0),s.min="0",s.step="1000",s}}),t.addItem({title:"全局提醒阈值 (%)",description:"全局 Token 用量达到此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalAlertThreshold",s.value=String(n.globalAlertThreshold||0),s.min="0",s.max="100",s.step="5",s}}),t.addItem({title:"全局限额重置周期",description:"按周期自动重置全局 Token 用量统计",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-globalQuotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,n.globalQuotaResetCycle===a.value&&(r.selected=!0),s.appendChild(r)}return s}}),t.addItem({title:"全局周期自定义天数（天）",description:"全局 Token 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方单 Key 周期共用同一天数",createActionElement:()=>this.createCustomDaysInput("tks-globalQuotaResetDays")}),t.addItem({title:"全局已用 Token 校准",description:"手动输入从第三方平台导入的历史已用 Token，叠加到全局统计中（0 = 不校准）",createActionElement:()=>{const s=document.createElement("div");s.style.display="flex",s.style.gap="8px",s.style.alignItems="center";const o=(a,r,i)=>{const l=document.createElement("div");l.style.flex="1";const d=document.createElement("div");d.style.fontSize="12px",d.style.color="var(--b3-theme-on-surface)",d.textContent=r;const p=document.createElement("input");return p.type="number",p.className="b3-text-field",p.id=`tks-${a}`,p.value=String(i||0),p.min="0",p.step="100",p.style.width="100%",l.appendChild(d),l.appendChild(p),l};return s.appendChild(o("globalUsedTokensOffset","总 Token",n.globalUsedTokensOffset)),s.appendChild(o("globalUsedInputTokensOffset","输入",n.globalUsedInputTokensOffset)),s.appendChild(o("globalUsedOutputTokensOffset","输出",n.globalUsedOutputTokensOffset)),s}}),t.addItem({title:"全局费用限额",description:"当前周期内所有 API 调用的估算总费用超过此金额时触发提醒与拦截（0 = 不开启；需先在「费用估算配置」中设置模型单价）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalCostLimit",s.value=String(n.globalCostLimit||0),s.min="0",s.step="1",s}}),t.addItem({title:"全局费用提醒阈值 (%)",description:"全局费用达到限额的此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalCostAlertThreshold",s.value=String(n.globalCostAlertThreshold||0),s.min="0",s.max="100",s.step="5",s}}),t.addItem({title:"全局费用重置周期",description:"按周期自动重置全局费用用量统计（独立于「全局限额重置周期」，可与 Token 限额采用不同节奏）",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-globalCostResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,n.globalCostResetCycle===a.value&&(r.selected=!0),s.appendChild(r)}return s}}),t.addItem({title:"全局费用周期自定义天数（天）",description:"全局费用限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方周期共用同一天数",createActionElement:()=>this.createCustomDaysInput("tks-globalCostResetDays")}),t.addItem({title:"全局已用费用校准",description:"手动输入从第三方平台导入的历史已花费金额，叠加到全局费用统计中（0 = 不校准；单位与货币类型一致）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalUsedCostOffset",s.value=String(n.globalUsedCostOffset||0),s.min="0",s.step="1",s}}),t.addItem({title:"费用估算配置",description:"设置每模型单价（每 1K tokens 的输入/输出价格）与资源包（一个包涵盖多个模型），仪表盘将显示估算费用。注意：费用估算完全依赖此处配置，单价 / 资源包填错会显著放大费用误差，请以 API 服务商账单为准；使用前请先阅读 README「统计精度与免责声明」章节",actionElement:this.createButton("配置",()=>this.openPriceEditor())}),t.addItem({title:"API Key 管理",description:"添加、编辑、删除 API Key，为每个 Key 设置限额与提醒阈值",actionElement:this.createButton("管理 API Key",()=>this.openKeyManager())}),t.addItem({title:"仪表盘区分精确/估算",description:"开启后，仪表盘「总 Tokens」卡片将拆分展示「精确值（来自 API 响应 usage 字段）」与「启发式估算」各自的 Token 量，便于评估统计可信度。仅 v1.4.19 及以后新增的记录可区分；旧版本记录无此标记，统一计入估算。",createActionElement:()=>this.createCheckbox("dashboardSplitExactEstimate",n.dashboardSplitExactEstimate??!1)}),t.addItem({title:"跨端统计合并",description:"开启后，各端（电脑 / 鸿蒙 / 浏览器）通过思源数据同步共享同一套 API Key 时，自动按记录合并多方 Token 用量，汇总到每一端；关闭则仅统计本端。",createActionElement:()=>this.createCheckbox("syncStatistics",n.syncStatistics??!0)}),t.addItem({title:"立即同步统计",description:"触发思源云同步（通过官方内核 API /api/sync/performSync）并合并其他端的统计记录（例如手机端一键拉取电脑端历史数据），不受上方开关限制。需先在思源「设置 - 关于 - 云端」中配置并启用云同步（已登录 S3/WebDAV 等存储服务）。若思源未配置云同步，则只合并本地已有数据。",actionElement:this.createButton("立即同步",()=>this.handleManualSync())}),t.addItem({title:"仪表盘免责提示",description:"本插件统计数据与各 API 供应商官方账单可能存在误差（原因包括：部分请求未被拦截、单价配置偏差、启发式估算精度限制、云同步合并延迟等），请以 API 供应商的统计及账单为准。开启时，仪表盘面板顶部会常驻显示橙色免责横幅；关闭后横幅不再显示。注意：仪表盘内的「本次不再提示」按钮仅隐藏当前会话（重启思源后自动恢复），而此处开关为永久关闭。",createActionElement:()=>{const s=this.createCheckbox("showDisclaimer",n.showDisclaimer??!0);return s.addEventListener("change",()=>{s.checked?this.store.updateSettings({showDisclaimer:!0}):M.confirm("关闭免责提示",`关闭后仪表盘将不再显示本免责提示。

本插件统计数据仅供参考，实际用量与费用请以各 API 供应商的官方账单为准。使用本插件即代表您认可统计结果可能存在误差。

是否确认关闭？`,()=>{this.store.updateSettings({showDisclaimer:!1})},()=>{s.checked=!0})}),s}}),t.addItem({title:"导出统计数据",description:"将所有统计数据导出为 JSON 文件",actionElement:this.createButton("导出",()=>this.exportData())}),t.addItem({title:"清除调用记录",description:"删除所有 Token 调用记录，但保留 API Key 配置",actionElement:this.createButton("清除记录",()=>this.clearRecords())}),t.addItem({title:"重置全部数据",description:"清除所有调用记录并恢复默认设置，API Key 配置保留不变",actionElement:this.createButton("重置",()=>this.resetAll())}),t.addItem({title:"显示高级数据洞察",description:"总开关：关闭后仪表盘回归简洁核心视图，隐藏月末预测 / 异常检测 / 优化建议 / 笔记归因。需要时再打开。",createActionElement:()=>this.createCheckbox("showAdvancedDashboard",n.showAdvancedDashboard!==!1)}),t.addItem({title:"月末预测",description:"仪表盘展示「预计月末费用 / Token」及与全局限额的进度对比",createActionElement:()=>this.createCheckbox("enableForecast",n.enableForecast!==!1)}),t.addItem({title:"预测方法",description:"线性外推=按已用日均推算；最近趋势=按最近 N 日均值推算（更贴合近期变化）",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-forecastMethod";const o=[{value:"recentTrend",label:"最近趋势（默认）"},{value:"linear",label:"线性外推"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,(n.forecastMethod||"recentTrend")===a.value&&(r.selected=!0),s.appendChild(r)}return s}}),t.addItem({title:"趋势窗口天数",description:"「最近趋势」方法使用的回溯天数（默认 7）",createActionElement:()=>this.createNumberInput("forecastWindowDays",n.forecastWindowDays||7,1,90,1)}),t.addItem({title:"异常检测",description:"仪表盘列出用量离群日（Token / 费用 / 请求数突增）",createActionElement:()=>this.createCheckbox("enableAnomaly",n.enableAnomaly!==!1)}),t.addItem({title:"异常敏感度",description:"标准差倍数阈值，越大越宽松（默认 2.5，即超过均值 2.5 个标准差才报警）",createActionElement:()=>this.createNumberInput("anomalySensitivity",n.anomalySensitivity||2.5,1.5,6,.1)}),t.addItem({title:"异常回溯天数",description:"异常检测统计的回溯窗口（默认 30 天，至少 3 天）",createActionElement:()=>this.createNumberInput("anomalyLookbackDays",n.anomalyLookbackDays||30,3,365,1)}),t.addItem({title:"优化建议",description:"仪表盘基于数据给出降本 / 提效建议（缓存命中率、估算占比、高价模型、用量集中等）",createActionElement:()=>this.createCheckbox("enableSuggestions",n.enableSuggestions!==!1)}),t.addItem({title:"笔记归因",description:"在高级视图中展示「按文档 Token 消耗」排行。数据采集始终后台进行（零额外成本），此开关仅控制是否显示面板。",createActionElement:()=>this.createCheckbox("enableNoteAttribution",n.enableNoteAttribution!==!1)}),t.addItem({title:"归因显示条数",description:"笔记归因排行展示 Top N 条（默认 10，替换原硬编码上限 10）",createActionElement:()=>this.createNumberInput("attributionTopN",n.attributionTopN||10,1,50,1)}),t.addItem({title:"Token 数字格式",description:"仪表盘大数字显示方式：auto=自动用「万/亿」后缀（推荐，紧凑）；full=始终显示完整数字",createActionElement:()=>{const s=document.createElement("select");return s.id="tks-tokenDisplayUnit",s.className="b3-select",["auto","full"].forEach(o=>{const a=document.createElement("option");a.value=o,a.textContent=o==="auto"?"自动（万/亿）":"完整数字",(n.tokenDisplayUnit||"auto")===o&&(a.selected=!0),s.appendChild(a)}),s}}),t}createCheckbox(e,t){const n=document.createElement("input");return n.type="checkbox",n.id=`tks-${e}`,n.className="b3-switch",n.checked=t,n}createButton(e,t){const n=document.createElement("button");return n.className="b3-button b3-button--outline",n.textContent=e,n.style.fontSize="14px",n.addEventListener("click",t),n}createCustomDaysInput(e){const t=document.createElement("input");t.type="number",t.className="b3-text-field fn__size200",t.id=e,t.value=String(this.store.getSettings().customResetDays||30),t.min="1",t.max="365",t.step="1";const n=["tks-customResetDays","tks-globalQuotaResetDays","tks-globalCostResetDays"];return t.addEventListener("input",()=>{const s=t.value;for(const o of n){if(o===e)continue;const a=document.getElementById(o);a&&a.value!==s&&(a.value=s)}}),t}createNumberInput(e,t,n,s,o=1){const a=document.createElement("input");return a.type="number",a.className="b3-text-field fn__size200",a.id=`tks-${e}`,a.value=String(t),n!==void 0&&(a.min=String(n)),s!==void 0&&(a.max=String(s)),a.step=String(o),a}async handleManualSync(){const e=document.activeElement;e&&(e.disabled=!0,e.textContent="同步中…");try{if(!this.onManualSync){M.showMessage("同步功能未就绪",2e3,"error");return}await this.onManualSync()}catch{M.showMessage("同步失败，请确认思源数据同步已开启",3e3,"error")}finally{e&&(e.disabled=!1,e.textContent="立即同步")}}saveGlobalSettings(){var P,N,F,G,Q,C,D,q,j,_,W,B;const e=H=>{var Y;return((Y=document.getElementById(`tks-${H}`))==null?void 0:Y.checked)??!1},t=parseInt(((P=document.getElementById("tks-max-records"))==null?void 0:P.value)||"5000",10),n=((N=document.getElementById("tks-quotaResetCycle"))==null?void 0:N.value)||"monthly",s=parseInt(((F=document.getElementById("tks-globalQuotaLimit"))==null?void 0:F.value)||"0",10)||0,o=parseInt(((G=document.getElementById("tks-globalAlertThreshold"))==null?void 0:G.value)||"0",10)||0,a=((Q=document.getElementById("tks-globalQuotaResetCycle"))==null?void 0:Q.value)||"monthly",r=H=>{var Y;return parseInt(((Y=document.getElementById(`tks-${H}`))==null?void 0:Y.value)||"0",10)||0},i=Math.max(0,r("globalUsedTokensOffset")),l=Math.max(0,r("globalUsedInputTokensOffset")),d=Math.max(0,r("globalUsedOutputTokensOffset")),p=parseFloat(((C=document.getElementById("tks-globalCostLimit"))==null?void 0:C.value)||"0")||0,c=parseInt(((D=document.getElementById("tks-globalCostAlertThreshold"))==null?void 0:D.value)||"0",10)||0,k=((q=document.getElementById("tks-globalCostResetCycle"))==null?void 0:q.value)||"monthly",m=Math.max(0,parseFloat(((j=document.getElementById("tks-globalUsedCostOffset"))==null?void 0:j.value)||"0")||0),y=Math.max(1,r("customResetDays")),g=Math.max(0,r("diagnosticExportCount")),u=e("enableForecast"),h=((_=document.getElementById("tks-forecastMethod"))==null?void 0:_.value)||"recentTrend",T=Math.max(1,r("forecastWindowDays")),w=e("enableAnomaly"),x=Math.max(1.5,parseFloat(((W=document.getElementById("tks-anomalySensitivity"))==null?void 0:W.value)||"2.5")||2.5),S=Math.max(3,r("anomalyLookbackDays")),L=e("enableSuggestions"),E=e("showAdvancedDashboard"),v=e("enableNoteAttribution"),f=Math.max(1,r("attributionTopN")),$=((B=document.querySelector("#tks-tokenDisplayUnit"))==null?void 0:B.value)||"auto",R=s!==this.store.getSettings().globalQuotaLimit||o!==this.store.getSettings().globalAlertThreshold;this.store.updateSettings({matchByUrl:e("matchByUrl"),interceptExternalAPIs:e("interceptExternalAPIs"),blockOnQuotaExceeded:e("blockOnQuotaExceeded"),quotaResetCycle:n,abortStreamOnExceeded:e("abortStreamOnExceeded"),showNotifications:e("showNotifications"),showTopBarBadge:e("showTopBarBadge"),debugLogging:e("debugLogging"),maxRecords:isNaN(t)?5e3:Math.max(100,Math.min(5e4,t)),globalQuotaLimit:Math.max(0,s),globalAlertThreshold:Math.max(0,Math.min(100,o)),globalQuotaResetCycle:a,globalUsedTokensOffset:i,globalUsedInputTokensOffset:l,globalUsedOutputTokensOffset:d,globalCostLimit:Math.max(0,p),globalCostAlertThreshold:Math.max(0,Math.min(100,c)),globalCostResetCycle:k,globalUsedCostOffset:m,customResetDays:y,syncStatistics:e("syncStatistics"),showDisclaimer:e("showDisclaimer"),dashboardSplitExactEstimate:e("dashboardSplitExactEstimate"),diagnosticExportCount:g,enableForecast:u,forecastMethod:h,forecastWindowDays:T,enableAnomaly:w,anomalySensitivity:x,anomalyLookbackDays:S,enableSuggestions:L,showAdvancedDashboard:E,enableNoteAttribution:v,attributionTopN:f,tokenDisplayUnit:$}),R&&this.keyManager.resetGlobalAlert(),(p!==this.store.getSettings().globalCostLimit||c!==this.store.getSettings().globalCostAlertThreshold||k!==this.store.getSettings().globalCostResetCycle||m!==this.store.getSettings().globalUsedCostOffset)&&this.keyManager.resetGlobalCostAlert()}refreshFromStore(){var r;const e=this.store.getSettings(),t=document.activeElement,n=!!t&&((r=t.id)==null?void 0:r.startsWith("tks-")),s=(i,l)=>{if(n&&t.id===`tks-${i}`)return;const d=document.getElementById(`tks-${i}`);d&&(d.checked=!!l)},o=(i,l)=>{if(n&&t.id===`tks-${i}`)return;const d=document.getElementById(`tks-${i}`);d&&(d.value=String(l))};s("matchByUrl",e.matchByUrl??!0),s("interceptExternalAPIs",e.interceptExternalAPIs),s("blockOnQuotaExceeded",e.blockOnQuotaExceeded),s("abortStreamOnExceeded",e.abortStreamOnExceeded),s("showNotifications",e.showNotifications),s("showTopBarBadge",e.showTopBarBadge),s("debugLogging",e.debugLogging??!1),s("syncStatistics",e.syncStatistics??!0),s("showDisclaimer",e.showDisclaimer??!0),s("dashboardSplitExactEstimate",e.dashboardSplitExactEstimate??!1),o("max-records",e.maxRecords),o("globalQuotaLimit",e.globalQuotaLimit),o("globalAlertThreshold",e.globalAlertThreshold),o("globalUsedTokensOffset",e.globalUsedTokensOffset),o("globalUsedInputTokensOffset",e.globalUsedInputTokensOffset),o("globalUsedOutputTokensOffset",e.globalUsedOutputTokensOffset),o("globalCostLimit",e.globalCostLimit),o("globalCostAlertThreshold",e.globalCostAlertThreshold),o("globalUsedCostOffset",e.globalUsedCostOffset),o("customResetDays",e.customResetDays),o("globalQuotaResetDays",e.customResetDays),o("globalCostResetDays",e.customResetDays),o("diagnosticExportCount",e.diagnosticExportCount??50),s("enableForecast",e.enableForecast!==!1),o("forecastMethod",e.forecastMethod||"recentTrend"),o("forecastWindowDays",e.forecastWindowDays||7),s("enableAnomaly",e.enableAnomaly!==!1),o("anomalySensitivity",e.anomalySensitivity||2.5),o("anomalyLookbackDays",e.anomalyLookbackDays||30),s("enableSuggestions",e.enableSuggestions!==!1),s("showAdvancedDashboard",e.showAdvancedDashboard!==!1),s("enableNoteAttribution",e.enableNoteAttribution!==!1),o("attributionTopN",e.attributionTopN||10);const a=document.getElementById("tks-tokenDisplayUnit");if(a&&(a.value=e.tokenDisplayUnit||"auto"),!(n&&t.id==="tks-quotaResetCycle")){const i=document.getElementById("tks-quotaResetCycle");i&&(i.value=e.quotaResetCycle)}if(!(n&&t.id==="tks-globalQuotaResetCycle")){const i=document.getElementById("tks-globalQuotaResetCycle");i&&(i.value=e.globalQuotaResetCycle)}if(!(n&&t.id==="tks-globalCostResetCycle")){const i=document.getElementById("tks-globalCostResetCycle");i&&(i.value=e.globalCostResetCycle)}}ensureDialogScrollable(){const e=document.getElementById("tks-matchByUrl")||document.getElementById("tks-interceptExternalAPIs");if(!e)return;const t=e.closest(".b3-dialog");if(!t)return;const n=t.querySelector(".b3-dialog__body");n&&(t.style.maxHeight="85vh",n.style.maxHeight="calc(85vh - 120px)",n.style.overflowY="auto")}isMobile(){const e=M.getFrontend();return e==="mobile"||e==="browser-mobile"}openPriceEditor(){const e=this.store.getSettings(),t=this.isMobile(),n=new M.Dialog({title:"费用估算配置",width:t?"95vw":"640px",height:"auto",content:'<div id="tks-price-editor" class="tks-price-editor"></div>'});setTimeout(()=>this.renderPriceEditor(n,{...e.modelPrices},e.currency||"¥",(e.pricePacks||[]).map(s=>({...s,models:[...s.models]}))),50)}renderPriceEditor(e,t,n,s){var g,u,h,T,w;const o=e.element.querySelector("#tks-price-editor");if(!o)return;const a=this.store.getSettings().recalcCostOnPriceChange!==!1,r=this.store.getSettings().packCountCacheRead!==!1,i=(x,S,L,E)=>`
      <div class="tks-price-row">
        <input type="text" class="b3-text-field tks-price-model" value="${U(x)}" placeholder="模型名（如 gpt-4o）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-input" value="${U(String(S))}" placeholder="输入/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-cache" value="${U(String(E??0))}" placeholder="缓存命中/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-output" value="${U(String(L))}" placeholder="输出/1K" />
        <button class="b3-button b3-button--small b3-button--danger tks-price-del" title="删除">✕</button>
      </div>
    `,l=x=>{const S=this.store.getPackUsage(x),L=x.totalTokens||0;let E;if(L>0){const v=Math.max(0,L-S.usedTokens);E=`已用 ${S.usedTokens.toLocaleString()} / 总量 ${L.toLocaleString()}（剩余 ${v.toLocaleString()}）`}else E=`已用 ${S.usedTokens.toLocaleString()}（总量不限）`;return`
      <div class="tks-pack-row" data-pack-id="${U(x.id)}">
        <input type="text" class="b3-text-field tks-pack-name" value="${U(x.name)}" placeholder="资源包名（如 通义千问）" />
        <input type="number" step="1" min="0" class="b3-text-field tks-pack-total" value="${U(String(x.totalTokens||0))}" placeholder="总 Tokens（0 不限）" />
        <input type="number" step="0.01" min="0" class="b3-text-field tks-pack-totalprice" value="${U(String(x.totalPrice??""))}" placeholder="打包总价（¥）" title="填入后启用打包价模式：费用 = 已用 tokens / 总 tokens × 总价格，忽略下方逐项单价。留空或 0 则使用逐项单价模式。" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-input" value="${U(String(x.input))}" placeholder="输入单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-cache" value="${U(String(x.cacheRead??0))}" placeholder="缓存命中单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-output" value="${U(String(x.output))}" placeholder="输出单价/1K" />
        <input type="text" class="b3-text-field tks-pack-models" value="${U((x.models||[]).join(", "))}" placeholder="涵盖模型，逗号分隔" />
        <button class="b3-button b3-button--small b3-button--danger tks-pack-del" title="删除">✕</button>
        <div class="tks-pack-usage">${U(E)}</div>
      </div>
    `},d=Object.entries(t).map(([x,S])=>i(x,S.input,S.output,S.cacheRead)).join(""),p=s.map(x=>l(x)).join("");o.innerHTML=`
      <div class="tks-price-warning">
        ⚠️ 费用估算完全依赖下方单价与资源包配置。<b>填错单价（数量级）、模型名与请求实际模型不匹配、或资源包计价模式选错，都会直接放大费用估算误差</b>。本插件数据为估算参考，请以 API 服务商官方账单为准；使用前请阅读 README「统计精度与免责声明」章节。
      </div>
      <div class="tks-price-head">
        <label>货币类型</label>
        <select id="tks-price-currency" class="b3-select fn__size200">
          <option value="¥" ${n==="¥"?"selected":""}>¥ (人民币)</option>
          <option value="$" ${n==="$"?"selected":""}>$ (美元)</option>
        </select>
      </div>
      <div class="tks-price-opt">
        <label class="tks-price-opt-label"><input type="checkbox" id="tks-price-recalc" ${a?"checked":""} /> 单价变更后自动重算历史费用</label>
        <span class="tks-price-opt-hint">开启后仪表盘与记录费用随单价实时更新；关闭则每条记录的费用在生成时固定，不再随单价变化。</span>
      </div>
      <div class="tks-price-opt">
        <label class="tks-price-opt-label"><input type="checkbox" id="tks-price-packcache" ${r?"checked":""} /> 资源包模式下缓存命中计入费用</label>
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
      <div class="tks-price-list" id="tks-price-list">${d||'<div class="tks-price-empty">尚未配置任何模型单价</div>'}</div>
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
      <div class="tks-pack-list" id="tks-pack-list">${p||'<div class="tks-price-empty">尚未配置任何资源包</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-pack-add">+ 添加资源包</button>
        <span style="flex:1"></span>
        <button class="b3-button b3-button--text" id="tks-price-export">📤 导出配置</button>
        <button class="b3-button b3-button--text" id="tks-price-import">📥 导入配置</button>
        <button class="b3-button b3-button--outline" id="tks-price-save">保存</button>
      </div>
    `;const c=o.querySelector("#tks-price-list"),k=o.querySelector("#tks-pack-list"),m=x=>{var S;(S=x.querySelector(".tks-price-del"))==null||S.addEventListener("click",()=>{x.remove(),c.querySelectorAll(".tks-price-row").length===0&&(c.innerHTML='<div class="tks-price-empty">尚未配置任何模型单价</div>')})};c.querySelectorAll(".tks-price-row").forEach(x=>m(x)),(g=o.querySelector("#tks-price-add"))==null||g.addEventListener("click",()=>{const x=c.querySelector(".tks-price-empty");x&&x.remove(),c.insertAdjacentHTML("beforeend",i("",0,0,0)),m(c.lastElementChild)});const y=x=>{var S;(S=x.querySelector(".tks-pack-del"))==null||S.addEventListener("click",()=>{x.remove(),k.querySelectorAll(".tks-pack-row").length===0&&(k.innerHTML='<div class="tks-price-empty">尚未配置任何资源包</div>')})};k.querySelectorAll(".tks-pack-row").forEach(x=>y(x)),(u=o.querySelector("#tks-pack-add"))==null||u.addEventListener("click",()=>{const x=k.querySelector(".tks-price-empty");x&&x.remove();const S={id:`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,name:"",totalTokens:0,input:0,output:0,models:[]};k.insertAdjacentHTML("beforeend",l(S)),y(k.lastElementChild)}),(h=o.querySelector("#tks-price-save"))==null||h.addEventListener("click",()=>{var f,$,R;const x={};c.querySelectorAll(".tks-price-row").forEach(I=>{var Q,C,D,q;const P=(((Q=I.querySelector(".tks-price-model"))==null?void 0:Q.value)||"").toLowerCase().trim().replace(/[\s\-_]+/g,""),N=parseFloat(((C=I.querySelector(".tks-price-input"))==null?void 0:C.value)||"0")||0,F=parseFloat(((D=I.querySelector(".tks-price-cache"))==null?void 0:D.value)||"0")||0,G=parseFloat(((q=I.querySelector(".tks-price-output"))==null?void 0:q.value)||"0")||0;P&&(x[P]={input:N,output:G,...F>0?{cacheRead:F}:{}})});const S=[];k.querySelectorAll(".tks-pack-row").forEach(I=>{var j,_,W,B,H,Y,A;const P=I.dataset.packId||`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,N=(((j=I.querySelector(".tks-pack-name"))==null?void 0:j.value)||"").trim(),F=parseInt(((_=I.querySelector(".tks-pack-total"))==null?void 0:_.value)||"0",10)||0,G=parseFloat(((W=I.querySelector(".tks-pack-totalprice"))==null?void 0:W.value)||"0")||0,Q=parseFloat(((B=I.querySelector(".tks-pack-input"))==null?void 0:B.value)||"0")||0,C=parseFloat(((H=I.querySelector(".tks-pack-cache"))==null?void 0:H.value)||"0")||0,D=parseFloat(((Y=I.querySelector(".tks-pack-output"))==null?void 0:Y.value)||"0")||0,q=(((A=I.querySelector(".tks-pack-models"))==null?void 0:A.value)||"").split(/[,，]/).map(z=>z.toLowerCase().trim().replace(/[\s\-_]+/g,"")).filter(Boolean);(N||q.length>0)&&S.push({id:P,name:N,totalTokens:F,...G>0?{totalPrice:G}:{},input:Q,output:D,...C>0?{cacheRead:C}:{},models:q})});const L=((f=o.querySelector("#tks-price-currency"))==null?void 0:f.value)||"¥",E=(($=o.querySelector("#tks-price-recalc"))==null?void 0:$.checked)??!0,v=((R=o.querySelector("#tks-price-packcache"))==null?void 0:R.checked)??!0;this.store.updateSettings({currency:L,modelPrices:x,pricePacks:S,recalcCostOnPriceChange:E,packCountCacheRead:v}),this.store.save(),e.destroy(),M.showMessage("费用配置已保存",2e3,"info")}),(T=o.querySelector("#tks-price-export"))==null||T.addEventListener("click",()=>this.exportPriceConfig()),(w=o.querySelector("#tks-price-import"))==null||w.addEventListener("click",()=>this.importPriceConfig(e))}exportPriceConfig(){const e=this.store.getSettings(),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),currency:e.currency||"¥",recalcCostOnPriceChange:e.recalcCostOnPriceChange!==!1,modelPrices:e.modelPrices||{},pricePacks:e.pricePacks||[]},null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`siyuan-token-stats-prices-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(s)},1e3),M.showMessage("费用配置已导出",2e3,"info")}importPriceConfig(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async n=>{var o;const s=(o=n.target.files)==null?void 0:o[0];if(s)try{const a=await s.text(),r=JSON.parse(a),i=r&&r.modelPrices&&typeof r.modelPrices=="object"?r.modelPrices:{},l=Array.isArray(r==null?void 0:r.pricePacks)?r.pricePacks:[],d=typeof(r==null?void 0:r.currency)=="string"?r.currency:this.store.getSettings().currency||"¥",p=typeof(r==null?void 0:r.recalcCostOnPriceChange)=="boolean"?r.recalcCostOnPriceChange:!0,c=l.map(k=>({...k,models:Array.isArray(k==null?void 0:k.models)?[...k.models]:[]}));this.renderPriceEditor(e,{...i},d,c),setTimeout(()=>{const k=e.element.querySelector("#tks-price-recalc");k&&(k.checked=p)},10),M.showMessage("已载入导入的费用配置，请检查后点击保存",2e3,"info")}catch(a){console.error("[TokenStats] Import price config failed:",a),M.showMessage("导入失败："+((a==null?void 0:a.message)||"文件格式不正确"),3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}openKeyManager(){const e=this.isMobile(),t=new M.Dialog({title:"API Key 管理",width:e?"95vw":"750px",height:e?"80vh":"500px",content:'<div id="tks-key-mgr" class="tks-key-mgr"></div>'});setTimeout(()=>this.renderKeyList(t),50)}renderKeyList(e){var o,a,r;const t=e.element.querySelector("#tks-key-mgr");if(!t)return;const n=this.store.getApiKeys();t.innerHTML=`
      <div class="tks-key-toolbar">
        <button class="b3-button b3-button--text" id="tks-add-key">+ 添加 API Key</button>
        <button class="b3-button b3-button--text" id="tks-export-keys">📤 导出</button>
        <button class="b3-button b3-button--text" id="tks-import-keys">📥 导入</button>
        <span class="tks-key-hint">共 ${n.length} 个 Key</span>
      </div>
      <div class="tks-key-list" id="tks-key-list-items"></div>
    `;const s=t.querySelector("#tks-key-list-items");for(const i of n){const l=this.keyManager.getKeyUsage(i.id),d=i.quotaLimit>0?Math.min(100,l.totalTokens/i.quotaLimit*100):0,p=document.createElement("div");p.className="tks-key-item",p.innerHTML=`
        <div class="tks-key-info">
          <div class="tks-key-name">
            ${this.providerIcon(i.provider)} ${U(i.name)}
            ${i.enabled?"":'<span class="tks-badge tks-badge-off">已禁用</span>'}
          </div>
          <div class="tks-key-detail">
            <span class="tks-key-masked">${U(i.keyMasked)}</span>
            ${i.provider?`<span class="tks-key-provider">${U(i.provider)}</span>`:""}
            ${i.baseUrl?`<span class="tks-key-url" title="${U(i.baseUrl)}">${U(i.baseUrl)}</span>`:""}
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
          <button class="b3-button b3-button--small" data-action="edit" data-id="${U(i.id)}">编辑</button>
          <button class="b3-button b3-button--small b3-button--danger" data-action="delete" data-id="${U(i.id)}">删除</button>
        </div>
      `,s.appendChild(p)}(o=t.querySelector("#tks-add-key"))==null||o.addEventListener("click",()=>{this.openKeyEditor(e,null)}),(a=t.querySelector("#tks-export-keys"))==null||a.addEventListener("click",()=>{this.exportKeys()}),(r=t.querySelector("#tks-import-keys"))==null||r.addEventListener("click",()=>{this.importKeys(e)}),t.querySelectorAll("[data-action]").forEach(i=>{i.addEventListener("click",l=>{const d=l.currentTarget,p=d.dataset.action,c=d.dataset.id;if(p==="edit"){const k=this.store.getApiKey(c);k&&this.openKeyEditor(e,k)}else p==="delete"&&M.confirm("删除 API Key","确定删除此 API Key 吗？相关统计记录将保留。",()=>{this.store.deleteApiKey(c),this.keyManager.resetAlert(c),this.renderKeyList(e),M.showMessage("已删除",2e3,"info")})})})}openKeyEditor(e,t){var r,i,l;const n=!!t,s=this.isMobile(),o=new M.Dialog({title:n?"编辑 API Key":"添加 API Key",width:s?"92vw":"500px",height:"auto",content:`
        <div class="tks-key-editor">
          <div class="tks-form-row">
            <label>名称</label>
            <input type="text" id="tke-name" class="b3-text-field" value="${U((t==null?void 0:t.name)||"")}" placeholder="例如：我的 OpenAI Key" />
          </div>
          <div class="tks-form-row">
            <label>API Key</label>
            <input type="password" id="tke-key" class="b3-text-field" value="" placeholder="sk-..." />
            <div class="tks-form-hint">用于匹配请求头中的 Authorization / x-api-key；编辑时留空则保留现有密钥，仅按 URL 匹配时可不填</div>
          </div>
          <div class="tks-form-row">
            <label>提供商名称</label>
            <input type="text" id="tke-provider" class="b3-text-field" value="${U((t==null?void 0:t.provider)||"")}" list="tke-provider-list" placeholder="例如：OpenAI、DeepSeek、华为云、SiYuan" />
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
            <input type="text" id="tke-url" class="b3-text-field" value="${U((t==null?void 0:t.baseUrl)||"")}" placeholder="例如：https://api.openai.com/v1/chat/completions，或 /api/ai/" />
            <div class="tks-form-hint">用于 URL 匹配。可填完整 URL、域名或路径（如 /api/ai/）。留空则仅按 Key 匹配。</div>
          </div>
          <div class="tks-form-row">
            <label>关联模型</label>
            <input type="text" id="tke-models" class="b3-text-field" value="${U(t!=null&&t.models?t.models.join(", "):"")}" placeholder="例如：Qwen/Qwen3-8B, sensenova-6.7-flash-lite" />
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
      `}),a=o.element;(r=a.querySelector("#tke-provider"))==null||r.addEventListener("input",d=>{const p=d.target.value.trim(),c=a.querySelector("#tke-url");!c.value&&p&&(c.value=this.keyManager.getDefaultBaseUrl(p))}),(i=a.querySelector("#tke-cancel"))==null||i.addEventListener("click",()=>o.destroy()),(l=a.querySelector("#tke-save"))==null||l.addEventListener("click",()=>{const d=a.querySelector("#tke-name").value.trim(),p=a.querySelector("#tke-key").value.trim(),c=a.querySelector("#tke-provider").value.trim(),k=a.querySelector("#tke-url").value.trim(),m=a.querySelector("#tke-models").value.split(/[,，]/).map(x=>x.trim()).filter(Boolean),y=parseInt(a.querySelector("#tke-quota").value,10)||0,g=parseInt(a.querySelector("#tke-threshold").value,10)||0,u=Math.max(0,parseInt(a.querySelector("#tke-usedTokensOffset").value,10)||0),h=Math.max(0,parseInt(a.querySelector("#tke-usedInputTokensOffset").value,10)||0),T=Math.max(0,parseInt(a.querySelector("#tke-usedOutputTokensOffset").value,10)||0),w=a.querySelector("#tke-enabled").value==="true";if(!d){M.showMessage("请输入名称",3e3,"error");return}if(n&&t){const x={name:d,provider:c,baseUrl:k,models:m,quotaLimit:y,alertThreshold:g,usedTokensOffset:u,usedInputTokensOffset:h,usedOutputTokensOffset:T,enabled:w};p&&(x.keyFull=p,x.keyMasked=this.keyManager.maskKey(p)),this.store.updateApiKey(t.id,x),this.keyManager.resetAlert(t.id)}else{const x={id:this.keyManager.generateKeyId(),name:d,keyFull:p,keyMasked:this.keyManager.maskKey(p),provider:c,baseUrl:k,models:m,quotaLimit:y,usedTokensOffset:u,usedInputTokensOffset:h,usedOutputTokensOffset:T,alertThreshold:g,enabled:w,createdAt:Date.now()};this.store.addApiKey(x)}this.store.save(),o.destroy(),this.renderKeyList(e),M.showMessage("已保存",2e3,"info")})}exportKeys(){const e=this.store.getApiKeys().map(a=>{const{keyFull:r,...i}=a;return i}),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),apiKeys:e},null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`siyuan-token-stats-keys-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(s)},1e3),M.showMessage(`已导出 ${e.length} 个 API Key`,2e3,"info")}importKeys(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async n=>{var o;const s=(o=n.target.files)==null?void 0:o[0];if(s)try{const a=await s.text(),r=JSON.parse(a),i=Array.isArray(r)?r:r.apiKeys;if(!Array.isArray(i))throw new Error("导入文件格式不正确，未找到 apiKeys 数组");let l=0,d=0;for(const c of i){if(!c||!c.keyFull&&!c.keyHash)continue;const k=Array.isArray(c.models)?c.models:typeof c.models=="string"?c.models.split(/[,，]/).map(g=>g.trim()).filter(Boolean):[],m=c.keyHash||(c.keyFull?ae(c.keyFull):""),y=m?this.store.getApiKeys().find(g=>g.keyHash===m):void 0;if(y){const g={name:c.name||y.name,provider:c.provider||y.provider,baseUrl:c.baseUrl||y.baseUrl,models:k.length?k:y.models||[],quotaLimit:c.quotaLimit??y.quotaLimit,alertThreshold:c.alertThreshold??y.alertThreshold,enabled:c.enabled??y.enabled};c.keyFull&&(g.keyFull=c.keyFull,g.keyMasked=this.keyManager.maskKey(c.keyFull)),this.store.updateApiKey(y.id,g),d++}else this.store.addApiKey({id:this.keyManager.generateKeyId(),name:c.name||"Imported Key",keyFull:c.keyFull||"",keyHash:c.keyHash||"",keyMasked:c.keyMasked||this.keyManager.maskKey(c.keyFull||"Imported"),provider:c.provider||"",baseUrl:c.baseUrl||"",models:k,quotaLimit:c.quotaLimit||0,usedTokensOffset:c.usedTokensOffset||0,usedInputTokensOffset:c.usedInputTokensOffset||0,usedOutputTokensOffset:c.usedOutputTokensOffset||0,alertThreshold:c.alertThreshold||0,enabled:c.enabled!==!1,createdAt:Date.now()}),l++}this.store.save(),this.renderKeyList(e);const p=[];l>0&&p.push(`新增 ${l} 个`),d>0&&p.push(`更新 ${d} 个`),M.showMessage(`导入成功：${p.join("，")||"无变化"}`,2e3,"info")}catch(a){console.error("[TokenStats] Import keys failed:",a),M.showMessage("导入失败："+a.message,3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}providerIcon(e){const t=(e||"").toLowerCase();return{siyuan:"🐿️",openai:"🤖",anthropic:"🧠",deepseek:"🔍",siliconflow:"🌊",华为云:"☁️",huawei:"☁️"}[t]||"🔑"}exportData(){const e=this.store.exportAll(),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(s),s.click(),setTimeout(()=>{document.body.removeChild(s),URL.revokeObjectURL(n)},1e3),M.showMessage("数据已导出",2e3,"info")}clearRecords(){M.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。此操作不可撤销。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),M.showMessage("记录已清除",2e3,"info")})}resetAll(){M.confirm("重置全部数据","⚠️ 确定重置吗？所有调用记录将被清除，设置恢复默认值。API Key 配置保留不变，此操作不可撤销。",()=>{this.store.clearRecords(),this.store.resetSettings(),this.keyManager.clearAllAlerts(),M.showMessage("已重置",2e3,"info")})}}const J=864e5;function ge(b){return`${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}-${String(b.getDate()).padStart(2,"0")}`}function ke(b,e=30){return b==="daily"?"今日":b==="custom"?`最近 ${e} 天`:"本月"}function Le(b){return b.globalCostLimit>0?{cycle:b.globalCostResetCycle,label:ke(b.globalCostResetCycle,b.customResetDays)}:b.globalQuotaLimit>0?{cycle:b.globalQuotaResetCycle,label:ke(b.globalQuotaResetCycle,b.customResetDays)}:{cycle:"monthly",label:"自然月"}}function Ke(b,e,t=30,n=Date.now()){if(b==="daily")return e+J;if(b==="custom")return e+t*J;const s=new Date(e);return new Date(s.getFullYear(),s.getMonth()+1,1).getTime()||new Date(new Date(n).getFullYear(),new Date(n).getMonth()+1,1).getTime()}function De(b,e,t,n){const s={enabled:e.enableForecast!==!1,hasData:!1,cycleLabel:"",cycleStartTs:0,cycleEndTs:0,daysElapsed:0,daysTotal:0,daysLeft:0,usedTokens:0,usedCost:0,runRateTokens:0,runRateCost:0,projectedTokens:0,projectedCost:0,tokenLimit:e.globalQuotaLimit>0?e.globalQuotaLimit:0,costLimit:e.globalCostLimit>0?e.globalCostLimit:0,projectedTokenPercent:0,projectedCostPercent:0};if(!s.enabled)return s;const o=Le(e),a=o.cycle==="none"?"monthly":o.cycle,r=t.getResetBoundary(a,e.customResetDays),i=Ke(a,r,e.customResetDays,n.getTime()),l=n.getTime(),d=b.getRecords().filter(w=>w.timestamp>=r&&w.timestamp<=l),p=d.reduce((w,x)=>w+(x.totalTokens||0),0),c=d.reduce((w,x)=>w+b.getRecordCost(x),0);s.cycleLabel=o.label,s.cycleStartTs=r,s.cycleEndTs=i,s.usedTokens=p,s.usedCost=c,s.hasData=d.length>0;const k=Math.max(1,Math.round((i-r)/J)),m=Math.max(0,Math.min(k,(l-r)/J)),y=Math.max(0,k-m);s.daysTotal=k,s.daysElapsed=m,s.daysLeft=y;const g=e.forecastMethod==="linear"?"linear":"recentTrend",u=Math.max(1,Math.min(e.forecastWindowDays||7,m||1));let h,T;if(g==="linear"||m<=0)h=m>0?p/m:0,T=m>0?c/m:0;else{const w=l-u*J,x=d.filter(E=>E.timestamp>=w),S=x.reduce((E,v)=>E+(v.totalTokens||0),0),L=x.reduce((E,v)=>E+b.getRecordCost(v),0);x.length>0?(h=S/u,T=L/u):(h=m>0?p/m:0,T=m>0?c/m:0)}return s.runRateTokens=h,s.runRateCost=T,s.projectedTokens=p+h*y,s.projectedCost=c+T*y,s.projectedTokenPercent=s.tokenLimit>0?s.projectedTokens/s.tokenLimit*100:0,s.projectedCostPercent=s.costLimit>0?s.projectedCost/s.costLimit*100:0,s}function Ue(b,e,t){const n=Math.max(3,e.anomalyLookbackDays||30),s=Math.max(1.5,e.anomalySensitivity||2.5),o={hasData:!1,anomalies:[],newModels:[]},a=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime(),r=new Map;for(let g=n-1;g>=0;g--){const u=new Date(a-g*J);r.set(ge(u),{tokens:0,cost:0,count:0,byModel:{}})}const i=b.getRecords();for(const g of i){if(g.timestamp<a-(n-1)*J)continue;const u=ge(new Date(g.timestamp)),h=r.get(u);if(!h)continue;h.tokens+=g.totalTokens||0,h.cost+=b.getRecordCost(g),h.count+=1;const T=(g.model||"unknown").toLowerCase().trim();h.byModel[T]=(h.byModel[T]||0)+(g.totalTokens||0)}const l=Array.from(r.values()),d=Array.from(r.keys());if(o.hasData=l.some(g=>g.count>0),!o.hasData)return o;const p=["tokens","cost","requests"];for(const g of p){const u=l.map(x=>g==="tokens"?x.tokens:g==="cost"?x.cost:x.count),h=u.reduce((x,S)=>x+S,0)/u.length,T=u.reduce((x,S)=>x+(S-h)*(S-h),0)/u.length,w=Math.sqrt(T);for(let x=0;x<u.length;x++){const S=u[x];if(S<=0||w<1e-9)continue;const L=(S-h)/w,E=h>0?(S-h)/h*100:0;if(L>=s&&S>h*1.3){let v;const f=Object.entries(l[x].byModel);f.length>0&&(f.sort((R,I)=>I[1]-R[1]),f[0][1]>S*.6&&(v=f[0][0]));const $=g==="tokens"?"Token 用量":g==="cost"?"费用":"请求数";o.anomalies.push({date:d[x],metric:g,value:S,expected:h,z:L,deviationPct:E,reason:`${$}突增${E.toFixed(0)}%（${S.toLocaleString()} vs 日均 ${h.toLocaleString()}）`+(v?`，主要由模型 ${v} 贡献`:""),severity:L>=s*1.5?"high":"medium",topModel:v})}}}const c=new Set,k=new Set,m=a-7*J,y=a-14*J;for(const g of i){const u=(g.model||"unknown").toLowerCase().trim();g.timestamp>=m?c.add(u):g.timestamp>=y&&k.add(u)}for(const g of c)k.has(g)||o.newModels.push(g);return o.anomalies.sort((g,u)=>u.z-g.z),o.anomalies=o.anomalies.slice(0,12),o}function Pe(b,e,t,n){const s=[],o=Object.values(t.modelStats);for(const u of o){if(u.inputTokens<=0||!b.modelHasCachePrice(u.model))continue;const h=u.cacheReadTokens/u.inputTokens;if(h>=.2||u.inputTokens<=1e4)continue;const T=b.getInputPrice(u.model),w=b.getCachePrice(u.model);let x=0;T>0&&w>=0&&(x=u.inputTokens*.5/1e3*Math.max(0,T-w)),s.push({id:"cache-"+u.model,severity:"medium",title:`提升「${u.model}」缓存命中率`,detail:`当前缓存命中率仅 ${(h*100).toFixed(0)}%。复用 system prompt 或开启提示缓存，可将部分输入 token 转为更便宜的缓存读取，降低输入成本。`,estimatedSaving:x>0?x:void 0})}const a=t.totalTokens||0;a>0&&t.estimatedTokens/a>.3&&s.push({id:"estimated-ratio",severity:"low",title:"本地估算占比偏高",detail:`约 ${(t.estimatedTokens/a*100).toFixed(0)}% 的用量为启发式估算（供应商未返回 usage）。切换至返回 usage 的端点或模型可提升统计精度，进而改善预测与账单对账的可靠性。`});const r=o.filter(u=>u.cost>0).sort((u,h)=>h.cost-u.cost);if(r.length>0){const u=r[0],h=r.reduce((T,w)=>T+w.cost,0);h>0&&u.cost/h>.5&&s.push({id:"expensive-model",severity:"low",title:`「${u.model}」占总费用 ${(u.cost/h*100).toFixed(0)}%`,detail:"该模型费用占比过半。初稿、摘要、分类等低风险任务可迁移至单价更低的模型，仅在精修阶段使用高价模型，通常可显著降本。"})}const i=b.getRecords(),l=new Array(7).fill(0),d=new Array(7).fill(0),p=["周日","周一","周二","周三","周四","周五","周六"];for(const u of i){const h=new Date(u.timestamp).getDay();l[h]+=u.totalTokens||0,d[h]+=1}const c=l.map((u,h)=>d[h]>0?u/d[h]:0),k=c.filter(u=>u>0),m=k.length>0?Math.max(...k):0,y=k.length>0?Math.min(...k):0;if(y>0&&m>y*1.8){const u=c.indexOf(m);s.push({id:"weekday-concentration",severity:"low",title:`用量集中在${p[u]}`,detail:`${p[u]}的日均用量约为最低日的 ${(m/y).toFixed(1)} 倍。将批量或重任务集中到同一天处理，有助于复用提示缓存、摊薄固定开销。`})}const g={high:0,medium:1,low:2};return s.sort((u,h)=>g[u.severity]-g[h.severity]||(h.estimatedSaving||0)-(u.estimatedSaving||0)),s.slice(0,12)}function K(b){return b?b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function ce(b){let e=0;for(let n=0;n<b.length;n++)e=e*31+b.charCodeAt(n)>>>0;return`hsl(${e%360}, 60%, 52%)`}function Z(b){return`${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}-${String(b.getDate()).padStart(2,"0")}`}function Oe(b){const e=b.getDay(),t=(e===0?-6:1)-e,n=new Date(b);return n.setDate(b.getDate()+t),n.setHours(0,0,0,0),n}function Fe(b){return new Date(b.getFullYear(),b.getMonth(),1)}function O(b,e){return e!=="auto"?b.toLocaleString():b>=1e8?(b/1e8).toFixed(3)+"亿":b>=1e4?(b/1e4).toFixed(1)+"万":b.toLocaleString()}class Ne{constructor(e,t){this.dialog=null,this.summary=null,this.refreshTimer=null,this.disclaimerDismissed=!1,this.onManualSync=null,this.store=e,this.keyManager=t}show(){try{if(this.summary=this.computeSummary(),this.dialog&&this.dialog.element&&this.dialog.element.isConnected){this.refreshContent();return}this.dialog&&(this.dialog.destroy(),this.dialog=null);const e=this.isMobile();this.dialog=new M.Dialog({title:"📊 Token 用量统计",width:e?"95vw":"900px",content:this.renderHTML(this.summary),destroyCallback:()=>{this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null),this.dialog=null}}),this.bindEvents(),this.refreshTimer=setInterval(()=>{if(!this.dialog||!this.dialog.element||!this.dialog.element.isConnected){this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null);return}this.refreshContent()},3e3)}catch(e){console.error("[TokenStats] Dashboard show error:",e),M.showMessage("仪表盘打开失败: "+e.message,3e3,"error")}}refreshContent(){if(!this.dialog||!this.dialog.element)return;const e=this.dialog.element.querySelector(".b3-dialog__body");if(!e)return;const t=document.activeElement;if(t&&e.contains(t)&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"))return;const n=e.scrollTop;this.summary=this.computeSummary(),e.innerHTML=this.renderHTML(this.summary),this.bindEvents();const s=this.dialog.element.querySelector(".b3-dialog__body");s&&(s.scrollTop=n)}isMobile(){const e=M.getFrontend();return e==="mobile"||e==="browser-mobile"}computeSummary(){const e=this.store.getRecords(),t=this.store.getApiKeys(),n=this.store.getSettings(),s={totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalRequests:e.length,successRequests:0,failedRequests:0,averageRequestTime:0,totalCost:0,totalCacheReadTokens:0,totalCacheCost:0,exactTokens:0,estimatedTokens:0,archivedMonths:0,modelStats:{},dailyStats:[],keyStats:[]};let o=0;for(const r of e){s.totalTokens+=r.totalTokens,s.totalInputTokens+=r.inputTokens,s.totalOutputTokens+=r.outputTokens,s.totalCost+=this.store.getRecordCost(r),s.totalCacheReadTokens+=r.cacheReadTokens||0,s.totalCacheCost+=this.store.getRecordCacheCost(r),o+=r.requestTime,r.estimated===!1?s.exactTokens+=r.totalTokens:s.estimatedTokens+=r.totalTokens,r.success?s.successRequests++:s.failedRequests++;const i=r.model||"unknown",l=i.toLowerCase().trim();s.modelStats[l]||(s.modelStats[l]={model:i,count:0,tokens:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cost:0,cacheCost:0}),s.modelStats[l].count++,s.modelStats[l].tokens+=r.totalTokens,s.modelStats[l].inputTokens+=r.inputTokens,s.modelStats[l].outputTokens+=r.outputTokens,s.modelStats[l].cacheReadTokens+=r.cacheReadTokens||0,s.modelStats[l].cost+=this.store.getRecordCost(r),s.modelStats[l].cacheCost+=this.store.getRecordCacheCost(r)}const a=this.store.getArchives();s.archivedMonths=a.length;for(const r of a){s.totalTokens+=r.totalTokens,s.totalInputTokens+=r.totalInputTokens,s.totalOutputTokens+=r.totalOutputTokens,s.totalCost+=r.cost,s.totalCacheReadTokens+=r.totalCacheReadTokens,s.totalCacheCost+=r.cacheCost,s.exactTokens+=r.exactTokens,s.estimatedTokens+=r.estimatedTokens;for(const[i,l]of Object.entries(r.byModel))s.modelStats[i]||(s.modelStats[i]={model:i,count:0,tokens:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cost:0,cacheCost:0}),s.modelStats[i].tokens+=l.tokens,s.modelStats[i].inputTokens+=l.inputTokens,s.modelStats[i].outputTokens+=l.outputTokens,s.modelStats[i].cost+=l.cost}s.averageRequestTime=e.length>0?o/e.length:0,s.dailyStats=this.computeTrendStats(e,n);for(const r of t){const i=this.keyManager.getKeyUsage(r.id),l=r.quotaLimit>0?Math.min(100,i.totalTokens/r.quotaLimit*100):0;s.keyStats.push({apiKeyId:r.id,apiKeyName:r.name,totalTokens:i.totalTokens,totalInputTokens:i.totalInputTokens,totalOutputTokens:i.totalOutputTokens,totalRequests:i.totalRequests,quotaLimit:r.quotaLimit,alertThreshold:r.alertThreshold,usagePercent:l,isAlert:r.alertThreshold>0&&l>=r.alertThreshold,isExceeded:r.quotaLimit>0&&i.totalTokens>=r.quotaLimit,enabled:r.enabled!==!1})}return s.keyStats.sort((r,i)=>i.totalTokens-r.totalTokens),s}computeTrendStats(e,t){const{trendDateRangeStart:n,trendDateRangeEnd:s,trendAggregation:o}=t;let a=1/0,r=-1/0;for(const h of e)a=Math.min(a,h.timestamp),r=Math.max(r,h.timestamp);const i=e.length>0&&isFinite(a)&&isFinite(r),l=new Date;l.setHours(0,0,0,0);const d=i?new Date(a):new Date(l.getTime()-13*24*60*60*1e3),p=i?new Date(r):l,c=n||Z(d),k=s||Z(p),m=new Date(c+"T00:00:00"),y=new Date(k+"T23:59:59.999"),g={},u=(h,T,w,x,S)=>{g[h]||(g[h]={date:h,tokens:0,count:0,byModel:{},cost:0}),g[h].tokens+=T,g[h].count+=w,g[h].byModel[x]=(g[h].byModel[x]||0)+T,g[h].cost+=S};for(const h of e){if(h.timestamp<m.getTime()||h.timestamp>y.getTime())continue;const T=new Date(h.timestamp),w=(h.model||"unknown").toLowerCase().trim(),x=this.store.getRecordCost(h);if(o==="weekly"){const S=Oe(T);u(Z(S),h.totalTokens,1,w,x)}else if(o==="monthly"){const S=Fe(T);u(Z(S),h.totalTokens,1,w,x)}else u(Z(T),h.totalTokens,1,w,x)}return Object.values(g).sort((h,T)=>h.date.localeCompare(T.date))}renderHTML(e){const t=this.store.getRecentRecords(30),n=Math.max(...Object.values(e.modelStats).map(p=>p.tokens),1),s=this.store.getSettings(),o=this.keyManager.getGlobalUsagePercent(s),a=this.keyManager.getGlobalUsage(s),r=s.tokenDisplayUnit||"auto",i=this.getMinRecordDate(),l=this.getMaxRecordDate(),d=`
      <div class="tks-trend-controls">
        <label>区间：</label>
        <input type="date" id="tks-trend-start" class="b3-text-field" value="${K(s.trendDateRangeStart||i||"")}" ${i?`min="${K(i)}" max="${K(l||"")}"`:""} />
        <span>~</span>
        <input type="date" id="tks-trend-end" class="b3-text-field" value="${K(s.trendDateRangeEnd||l||"")}" ${l?`min="${K(i||"")}" max="${K(l)}"`:""} />
        <select id="tks-trend-aggregation" class="b3-select">
          <option value="daily" ${s.trendAggregation==="daily"?"selected":""}>按日</option>
          <option value="weekly" ${s.trendAggregation==="weekly"?"selected":""}>按周</option>
          <option value="monthly" ${s.trendAggregation==="monthly"?"selected":""}>按月</option>
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
        ${s.showDisclaimer!==!1&&!this.disclaimerDismissed?`
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
              <div class="tks-card-value">${O(e.totalTokens,r)}</div>
              <div class="tks-card-label">总 Tokens</div>
              ${s.dashboardSplitExactEstimate?`<div class="tks-card-sub">精确 ${O(e.exactTokens,r)} · 估算 ${O(e.estimatedTokens,r)}</div>`:""}
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📥</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${O(e.totalInputTokens,r)}</div>
              <div class="tks-card-label">输入 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📤</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${O(e.totalOutputTokens,r)}</div>
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
              <div class="tks-card-value">${O(e.totalCacheReadTokens,r)}</div>
              <div class="tks-card-label">缓存命中 Tokens</div>
              ${this.store.hasAnyPrice()?`<div class="tks-card-sub">成本 ${this.store.formatCost(e.totalCacheCost)}${e.totalCost>0?` · 占 ${(e.totalCacheCost/e.totalCost*100).toFixed(1)}%`:""}</div>`:'<div class="tks-card-sub">成本（未配置单价）</div>'}
            </div>
          </div>
          ${s.globalQuotaLimit>0?`
          <div class="tks-card tks-card-global">
            <div class="tks-card-icon">🌍</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${o.toFixed(1)}%</div>
              <div class="tks-card-label">全局限额 ${O(a.totalTokens,r)} / ${O(s.globalQuotaLimit,r)}</div>
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
            ${e.keyStats.map(p=>this.renderKeyStat(p)).join("")}
          </div>
        </div>

        <!-- Token 趋势 -->
        <div class="tks-section">
          <h3 class="tks-section-title">📈 Token 趋势</h3>
          ${d}
          ${e.dailyStats.length===0?'<div class="tks-empty-chart">当前区间内无数据</div>':`
          <div class="tks-daily-chart">
            ${this.buildTrendSvg(e,s.trendAggregation)}
          </div>
          ${this.buildTrendLegend(e)}
          <div class="tks-trend-caption">柱形按模型堆叠（高度=当日总 Token）；折线为当日估算费用（右轴），未配置单价时为 0</div>`}
        </div>

        <!-- 模型分布 -->
        <div class="tks-section">
          <h3 class="tks-section-title">🤖 模型用量分布</h3>
          <div class="tks-model-stats">
            ${Object.values(e.modelStats).sort((p,c)=>c.tokens-p.tokens).map(p=>this.renderModelBar(p,n)).join("")}
          </div>
        </div>

        ${s.showAdvancedDashboard!==!1?this.renderForecastPanel(e,s):""}
        ${s.showAdvancedDashboard!==!1?this.renderAnomalyPanel(e,s):""}
        ${s.showAdvancedDashboard!==!1?this.renderSuggestionsPanel(e,s):""}

        <!-- 笔记归因（按文档） -->
        ${s.showAdvancedDashboard!==!1&&s.enableNoteAttribution!==!1?this.renderAttributionPanel(s):""}

        ${s.showAdvancedDashboard===!1?`
        <div class="tks-advanced-hint">💡 高级数据洞察（月末预测 / 异常检测 / 优化建议 / 笔记归因）已隐藏，可在「设置 → 数据洞察」开启「显示高级数据洞察」。</div>
        `:""}

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
                  ${s.enableNoteAttribution!==!1?"<th>文档</th>":""}
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
                ${t.map(p=>this.renderRecordRow(p,s.enableNoteAttribution!==!1)).join("")}
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
          <button class="b3-button b3-button--outline" id="tks-export-diagnostic" title="导出最近 N 条带原始 usage 的记录（来自供应商响应、未裁剪），用于排查用量统计偏差。条数在设置中「诊断日志导出条数」配置。">🔍 导出原始 usage 日志</button>
          <button class="b3-button b3-button--outline b3-button--danger" id="tks-clear-records">🗑️ 清除记录</button>
        </div>
      </div>
    `}renderAttributionPanel(e){const t=this.store.getRecords(),n=e.tokenDisplayUnit||"auto",s=new Map;for(const i of t){if(!i.docPath&&!i.docId)continue;const l=i.docId||i.docPath||"";if(!l)continue;let d=s.get(l);d||(d={docPath:i.docPath||"(未命名文档)",docId:i.docId||"",tokens:0,count:0},s.set(l,d)),d.tokens+=i.totalTokens||0,d.count+=1}const o=Math.max(1,e.attributionTopN||10),a=Array.from(s.values()).sort((i,l)=>l.tokens-i.tokens).slice(0,o);if(a.length===0)return`<div class="tks-section">
        <h3 class="tks-section-title">📂 笔记归因（按文档）</h3>
        <div class="tks-empty-chart">暂无归因数据。当你在思源中使用 AI（含引用块 / 文档）时，本插件会自动记录调用来源文档，便于按文档统计 Token 消耗。</div>
      </div>`;const r=Math.max(...a.map(i=>i.tokens),1);return`<div class="tks-section">
      <h3 class="tks-section-title">📂 笔记归因（按文档 Top ${a.length}）</h3>
      <div class="tks-attr-stats">
        ${a.map(i=>`
          <div class="tks-attr-row">
            <div class="tks-attr-head">
              <span class="tks-attr-name" title="${K(i.docId)}">${K(i.docPath)}</span>
              <span class="tks-attr-meta">${O(i.tokens,n)} tokens · ${i.count} 次</span>
            </div>
            <div class="tks-attr-bar"><div class="tks-attr-bar-fill" style="width:${(i.tokens/r*100).toFixed(1)}%"></div></div>
          </div>`).join("")}
      </div>
      <div class="tks-attr-caption">按文档统计的 Token 消耗，用于定位「最费 Token 的笔记」。仅统计带来源信息的记录；悬停文档名可查看文档 id。</div>
    </div>`}getMinRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=1/0;for(const n of e)t=Math.min(t,n.timestamp);return Z(new Date(t))}getMaxRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=-1/0;for(const n of e)t=Math.max(t,n.timestamp);return Z(new Date(t))}renderKeyStat(e){const t=this.store.getSettings().tokenDisplayUnit||"auto",n=e.quotaLimit>0?`${O(e.totalTokens,t)} / ${O(e.quotaLimit,t)}`:`${O(e.totalTokens,t)} (不限)`,s=e.alertThreshold>0?` · 阈值 ${e.alertThreshold}%`:"",o=e.enabled?e.isExceeded?"⛔":e.isAlert?"⚠️":e.quotaLimit>0?"✅":"":"🚫";return`
      <div class="tks-key-stat ${e.isAlert?"tks-key-stat-alert":""} ${e.isExceeded?"tks-key-stat-exceeded":""} ${e.enabled?"":"tks-key-stat-disabled"}">
        <div class="tks-key-stat-header">
          <span class="tks-key-stat-name">${o} ${K(e.apiKeyName)}${e.enabled?"":' <span class="tks-badge tks-badge-off">已禁用</span>'}</span>
          <span class="tks-key-stat-requests">${e.totalRequests} 次请求</span>
        </div>
        <div class="tks-key-stat-bar">
          <div class="tks-key-stat-fill ${e.isAlert?"alert":""} ${e.isExceeded?"exceeded":""} ${e.enabled?"":"disabled"}"
               style="width: ${e.quotaLimit>0?e.usagePercent:0}%"></div>
        </div>
        <div class="tks-key-stat-detail">
          ${n} tokens${s}
          ${e.quotaLimit>0?` · ${e.usagePercent.toFixed(1)}%`:""}
        </div>
      </div>
    `}buildTrendSvg(e,t){const n=e.dailyStats,s=n.length;if(s===0)return"";const o=720,a=120,r=48,i=52,l=10,d=20,p=o-r-i,c=a-l-d,k=Math.max(...n.map(v=>v.tokens),1),m={};for(const v of n)for(const f of Object.keys(v.byModel))m[f]=(m[f]||0)+v.byModel[f];const y=Object.keys(m).sort((v,f)=>m[f]-m[v]),g=Math.max(...n.map(v=>v.cost),0),u=p/s,h=Math.min(26,u*.62),T=v=>r+u*(v+.5);let w="";for(let v=0;v<s;v++){const f=n[v],R=T(v)-h/2;let I=l+c;for(const P of y){const N=f.byModel[P]||0;if(N<=0)continue;const F=N/k*c;I-=F,w+=`<rect x="${R.toFixed(1)}" y="${I.toFixed(1)}" width="${h.toFixed(1)}" height="${Math.max(.5,F).toFixed(1)}" fill="${ce(P)}"><title>${K(P)}: ${N.toLocaleString()} tokens</title></rect>`}}let x="";if(g>0){x=`<polyline points="${n.map((f,$)=>`${T($).toFixed(1)},${(l+(1-f.cost/g)*c).toFixed(1)}`).join(" ")}" fill="none" stroke="#e0556b" stroke-width="2" stroke-linejoin="round"/>`;for(let f=0;f<s;f++){const $=l+(1-n[f].cost/g)*c;x+=`<circle cx="${T(f).toFixed(1)}" cy="${$.toFixed(1)}" r="2.5" fill="#e0556b"><title>费用: ${K(this.store.formatCost(n[f].cost))}</title></circle>`}}let S="";for(let v=0;v<=2;v++){const f=l+c*v/2,$=Math.round(k*(1-v/2));if(S+=`<line x1="${r}" y1="${f.toFixed(1)}" x2="${r+p}" y2="${f.toFixed(1)}" stroke="#e3e3e3" stroke-width="1"/>`,S+=`<text x="${r-6}" y="${(f+3).toFixed(1)}" text-anchor="end" font-size="10" fill="#8a8a8a">${$>=1e3?($/1e3).toFixed($>=1e4?0:1)+"k":$}</text>`,g>0){const R=g*(1-v/2);S+=`<text x="${r+p+6}" y="${(f+3).toFixed(1)}" text-anchor="start" font-size="10" fill="#e0556b">${K(this.store.formatCost(R))}</text>`}}const L=Math.max(1,Math.ceil(s/16));let E="";for(let v=0;v<s;v++){if(v%L!==0&&v!==s-1)continue;const f=n[v];let $=f.date.substring(5);t==="monthly"?$=f.date.substring(0,7):t==="weekly"&&($=`W${f.date.substring(5,7)}${f.date.substring(8,10)}`),E+=`<text x="${T(v).toFixed(1)}" y="${l+c+14}" text-anchor="middle" font-size="9" fill="#8a8a8a">${K($)}</text>`}return`<svg class="tks-trend-svg" viewBox="0 0 ${o} ${a}" preserveAspectRatio="xMidYMin slice">${S}${w}${x}${E}</svg>`}buildTrendLegend(e){const t={};for(const a of e.dailyStats)for(const r of Object.keys(a.byModel))t[r]=(t[r]||0)+a.byModel[r];return`<div class="tks-trend-legend">${Object.keys(t).sort((a,r)=>t[r]-t[a]).map(a=>`<span class="tks-legend-item"><span class="tks-legend-swatch" style="background:${ce(a)}"></span>${K(a)}</span>`).join("")}<span class="tks-legend-item"><span class="tks-legend-line"></span>当日费用（右轴）</span></div>`}renderModelBar(e,t){const n=this.store.getSettings().tokenDisplayUnit||"auto",s=Math.max(1,e.tokens/t*100);return`
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${K(e.model)}">${K(e.model)}</div>
        <div class="tks-model-bar-track">
          <div class="tks-model-bar-fill" style="width: ${s}%; background: ${ce(e.model.toLowerCase().trim())}"></div>
        </div>
        <div class="tks-model-detail">
          ${O(e.tokens,n)} tokens · ${e.count} 次${this.store.hasAnyPrice()?` · 💰 ${this.store.formatCost(e.cost)}`:""}
        </div>
      </div>
    `}renderRecordRow(e,t){const n=this.store.getSettings().tokenDisplayUnit||"auto";return`
      <tr>
        <td>${new Date(e.timestamp).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}</td>
        <td title="${K(e.apiKeyName)}">${K(e.apiKeyName)}</td>
        <td>${K(e.source)}</td>
        ${t?`<td class="tks-doc-cell" title="${K(e.docId||"")}">${K(e.docPath||"—")}</td>`:""}
        <td>${K(e.model)}</td>
        <td>${O(e.inputTokens,n)}</td>
        <td>${e.cacheReadTokens?O(e.cacheReadTokens,n):"—"}</td>
        <td>${O(e.outputTokens,n)}</td>
        <td><strong>${O(e.totalTokens,n)}</strong></td>
        <td>${this.store.hasAnyPrice()?`${this.store.formatCost(this.store.getRecordCost(e))}<br><span class="tks-sub">缓存 ${this.store.formatCost(this.store.getRecordCacheCost(e))}</span>`:"—"}</td>
        <td>${e.requestTime}ms</td>
        <td>${e.success?"✅":"❌"}</td>
      </tr>
    `}bindEvents(){var t,n,s,o,a,r,i,l,d;if(!this.dialog)return;const e=this.dialog.element;(t=e.querySelector("#tks-refresh"))==null||t.addEventListener("click",()=>{this.refreshContent()}),(n=e.querySelector("#tks-disclaimer-close"))==null||n.addEventListener("click",()=>{M.confirm("隐藏免责提示",`本插件统计数据与 API 供应商官方账单可能存在误差，请以 API 供应商的统计及账单为准。

点击「确认」仅本次会话隐藏（重启思源后将自动恢复显示）。
如需永久关闭此提示，请到「设置 - 仪表盘免责提示」中操作。`,()=>{this.disclaimerDismissed=!0,this.refreshContent()})}),(s=e.querySelector("#tks-sync"))==null||s.addEventListener("click",async p=>{const c=p.currentTarget;if(c.disabled)return;const k=c.textContent;c.disabled=!0,c.textContent="同步中…";try{if(!this.onManualSync){M.showMessage("同步功能未就绪",2e3,"error");return}await this.onManualSync(),this.refreshContent()}catch{M.showMessage("同步失败，请确认思源数据同步已开启",3e3,"error")}finally{c.disabled=!1,c.textContent=k}}),(o=e.querySelector("#tks-export-json"))==null||o.addEventListener("click",()=>{const p=this.store.exportAll();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,p,"application/json"),M.showMessage("数据已导出（JSON）",2e3,"info")}),(a=e.querySelector("#tks-export-csv"))==null||a.addEventListener("click",()=>{const p=this.buildRecordsCsv();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.csv`,p,"text/csv;charset=utf-8"),M.showMessage("数据已导出（CSV）",2e3,"info")}),(r=e.querySelector("#tks-export-diagnostic"))==null||r.addEventListener("click",()=>{const p=this.store.getSettings().diagnosticExportCount||50,k=this.store.getRecords().filter(u=>u.rawUsage&&Object.keys(u.rawUsage).length>0).sort((u,h)=>h.timestamp-u.timestamp),m=p>0?k.slice(0,p):k;if(m.length===0){M.showMessage("暂无可导出的原始 usage 记录（需在设置中开启相关功能后产生）",3e3,"info");return}const y=m.map(u=>({timestamp:u.timestamp,apiKeyName:u.apiKeyName,model:u.model,source:u.source,recorded:{inputTokens:u.inputTokens,outputTokens:u.outputTokens,cacheReadTokens:u.cacheReadTokens??0,totalTokens:u.totalTokens,estimated:u.estimated??!1},rawUsage:u.rawUsage})),g=JSON.stringify({exportedAt:new Date().toISOString(),note:"原始 usage 来自 API 供应商响应，未做任何裁剪，用于排查用量统计偏差。",count:y.length,records:y},null,2);this.downloadFile(`siyuan-token-stats-usage-${new Date().toISOString().split("T")[0]}.json`,g,"application/json"),M.showMessage(`已导出 ${y.length} 条原始 usage 记录`,3e3,"info")}),(i=e.querySelector("#tks-clear-records"))==null||i.addEventListener("click",()=>{M.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),this.refreshContent(),M.showMessage("记录已清除",2e3,"info")})}),(l=e.querySelector("#tks-trend-apply"))==null||l.addEventListener("click",()=>{var m,y,g;const p=((m=e.querySelector("#tks-trend-start"))==null?void 0:m.value)||"",c=((y=e.querySelector("#tks-trend-end"))==null?void 0:y.value)||"",k=(g=e.querySelector("#tks-trend-aggregation"))==null?void 0:g.value;this.store.updateSettings({trendDateRangeStart:p,trendDateRangeEnd:c,trendAggregation:k}),this.store.save(),this.refreshContent()}),(d=e.querySelector("#tks-trend-reset"))==null||d.addEventListener("click",()=>{this.store.updateSettings({trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily"}),this.store.save(),this.refreshContent()})}downloadFile(e,t,n){const s=new Blob([t],{type:n}),o=URL.createObjectURL(s),a=document.createElement("a");a.href=o,a.download=e,a.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}buildRecordsCsv(){var r;const e=this.store.getRecords().slice().sort((i,l)=>i.timestamp-l.timestamp),t=this.store.getSettings().currency||"¥",n=this.summary,s=i=>{const l=String(i);return/[",\n]/.test(l)?`"${l.replace(/"/g,'""')}"`:l},o=[];n&&(o.push(`# 总Token,${n.totalTokens}`),o.push(`# 输入Token,${n.totalInputTokens}`),o.push(`# 输出Token,${n.totalOutputTokens}`),o.push(`# 请求数,${n.totalRequests}`),o.push(`# 总费用,${t}${n.totalCost.toFixed(4)}`)),o.push(`# 记录数,${e.length}`);const a=this.store.getArchives();a.length>0&&o.push(`# 归档月份数,${a.length}`),o.push(["时间","模型","输入Token","缓存命中Token","输出Token","总计Token","费用","缓存成本","Key名称","文档","耗时(ms)","成功"].join(","));for(const i of e){const l=new Date(i.timestamp),d=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")} ${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`,p=((r=this.store.getApiKey(i.apiKeyId))==null?void 0:r.name)||i.apiKeyName||"",c=this.store.hasAnyPrice()?this.store.getRecordCacheCost(i).toFixed(4):"";o.push([d,i.model,i.inputTokens,i.cacheReadTokens??"",i.outputTokens,i.totalTokens,t+this.store.getRecordCost(i).toFixed(4),t+c,p,i.docPath||"",i.requestTime,i.success?"是":"否"].map(s).join(","))}for(const i of a)o.push([`${i.month} (归档)`,"归档(按月聚合)",i.totalInputTokens,i.totalCacheReadTokens,i.totalOutputTokens,i.totalTokens,t+i.cost.toFixed(4),t+i.cacheCost.toFixed(4),"","","—"].map(s).join(","));return"\uFEFF"+o.join(`
`)}renderProgress(e,t,n="ok"){const s=Math.max(0,Math.min(100,e));return`<div class="tks-progress">
      <div class="tks-progress-head"><span>${K(t)}</span><span>${e.toFixed(1)}%</span></div>
      <div class="tks-progress-track"><div class="tks-progress-fill tks-progress-fill--${n}" style="width:${s}%"></div></div>
    </div>`}renderForecastPanel(e,t){if(t.enableForecast===!1)return"";const n=De(this.store,t,this.keyManager,new Date),s=t.tokenDisplayUnit||"auto";if(!n.hasData)return'<div class="tks-section"><h3 class="tks-section-title">🔮 月末预测</h3><div class="tks-empty-chart">当前周期内暂无用量数据，产生调用后将自动预测月末费用与 Token。</div></div>';const o=this.store.getCurrency(),a=d=>d>100?"over":d>80?"warn":"ok",r=n.tokenLimit>0?this.renderProgress(n.projectedTokenPercent,"预计月末 Token 占限额",a(n.projectedTokenPercent)):"",i=n.costLimit>0?this.renderProgress(n.projectedCostPercent,"预计月末费用占限额",a(n.projectedCostPercent)):"",l=t.forecastMethod==="linear"?"已用日均线性外推":`最近 ${t.forecastWindowDays||7} 日趋势`;return`<div class="tks-section">
      <h3 class="tks-section-title">🔮 月末预测（${K(n.cycleLabel)}）</h3>
      <div class="tks-forecast-grid">
        <div class="tks-fc-card"><div class="tks-fc-value">${o}${n.projectedCost.toFixed(2)}</div><div class="tks-fc-label">预计月末费用</div><div class="tks-fc-sub">已用 ${o}${n.usedCost.toFixed(2)} · 日均 ${o}${n.runRateCost.toFixed(2)}</div></div>
        <div class="tks-fc-card"><div class="tks-fc-value">${O(n.projectedTokens,s)}</div><div class="tks-fc-label">预计月末 Token</div><div class="tks-fc-sub">已用 ${O(n.usedTokens,s)} · 日均 ${O(n.runRateTokens,s)}</div></div>
        <div class="tks-fc-card"><div class="tks-fc-value">${n.daysLeft.toFixed(0)}</div><div class="tks-fc-label">剩余天数</div><div class="tks-fc-sub">共 ${n.daysTotal} 天 · 已过 ${n.daysElapsed.toFixed(1)} 天</div></div>
      </div>
      ${r}${i}
      <div class="tks-fc-note">预测基于「${K(l)}」，仅供参考，实际以 API 供应商官方账单为准。</div>
    </div>`}renderAnomalyPanel(e,t){if(t.enableAnomaly===!1)return"";const n=Ue(this.store,t,new Date);if(!n.hasData)return'<div class="tks-section"><h3 class="tks-section-title">⚠️ 用量异常</h3><div class="tks-empty-chart">暂无足够数据，异常检测需至少 3 天用量记录。</div></div>';const s=n.anomalies.map(a=>`<div class="tks-anom ${a.severity==="high"?"tks-anom--high":"tks-anom--med"}">
        <div class="tks-anom-date">${K(a.date)}</div>
        <div class="tks-anom-body">
          <div class="tks-anom-reason">${K(a.reason)}</div>
          <div class="tks-anom-meta">Z=${a.z.toFixed(1)} · 偏离均值 ${a.deviationPct.toFixed(0)}%</div>
        </div>
      </div>`).join(""),o=n.newModels.length>0?`<div class="tks-anom-note">🆕 近 7 天新出现的模型：${n.newModels.map(a=>K(a)).join("、")}</div>`:"";return`<div class="tks-section">
      <h3 class="tks-section-title">⚠️ 用量异常（近 ${t.anomalyLookbackDays||30} 天）</h3>
      ${n.anomalies.length===0?`<div class="tks-empty-chart">未检测到显著异常（阈值 Z ≥ ${(t.anomalySensitivity||2.5).toFixed(1)}）。</div>`:`<div class="tks-anom-list">${s}</div>`}
      ${o}
    </div>`}renderSuggestionsPanel(e,t){if(t.enableSuggestions===!1)return"";const n=Pe(this.store,t,e);return n.length===0?'<div class="tks-section"><h3 class="tks-section-title">💡 优化建议</h3><div class="tks-empty-chart">暂无优化建议，当前用量结构较为均衡。</div></div>':`<div class="tks-section">
      <h3 class="tks-section-title">💡 优化建议</h3>
      <div class="tks-sug-list">${n.map(o=>{const a=o.severity==="high"?"tks-sug--high":o.severity==="medium"?"tks-sug--med":"tks-sug--low",r=o.severity==="high"?"高":o.severity==="medium"?"中":"低",i=typeof o.estimatedSaving=="number"&&o.estimatedSaving>0?`<span class="tks-sug-saving">预估可省 ${this.store.getCurrency()}${o.estimatedSaving.toFixed(2)}/周期</span>`:"";return`<div class="tks-sug ${a}">
        <div class="tks-sug-head"><span class="tks-sug-sev">${r}</span><span class="tks-sug-title">${K(o.title)}</span>${i}</div>
        <div class="tks-sug-detail">${K(o.detail)}</div>
      </div>`}).join("")}</div>
    </div>`}}const qe=`<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="iconTokenStats" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>
    <rect x="9.5" y="16" width="3" height="7" rx="0.8" fill="currentColor"/>
    <rect x="14.5" y="12" width="3" height="11" rx="0.8" fill="currentColor"/>
    <rect x="19.5" y="9" width="3" height="14" rx="0.8" fill="currentColor"/>
  </symbol>
</svg>`;class _e extends M.Plugin{constructor(){super(...arguments),this.styleElement=null,this.syncHandler=null,this.mergeTimer=null,this.merging=!1,this.topBarItem=null,this.badgeEl=null,this.badgeTimer=null,this.lsHeartbeatTimer=null}async onload(){console.log("[TokenStats] Plugin loading..."),console.log(`[TokenStats] Frontend: ${M.getFrontend()}`),this.styleElement=document.createElement("style"),this.styleElement.id="siyuan-token-stats-style",this.styleElement.textContent=ye,document.head.appendChild(this.styleElement),this.addIcons(qe),this.store=new Te(this),await this.store.load(),this.tokenCounter=new Se,this.keyManager=new we(this.store),this.interceptor=new Ie(this.store,this.keyManager,this.tokenCounter),this.dashboard=new Ne(this.store,this.keyManager),this.interceptor.setThresholdCallback((e,t)=>{this.store.getSettings().showNotifications&&M.showMessage(t,5e3,"info")}),this.interceptor.install(),this.topBarItem=this.addTopBar({icon:"iconTokenStats",title:"Token 用量统计",position:"right",callback:()=>{this.dashboard.show()}}),this.initTopBarBadge(),this.settingsPanel=new Ee(this.store,this.keyManager),this.settingsPanel.onManualSync=()=>this.manualSyncFull(),this.dashboard.onManualSync=()=>this.manualSyncFull(),this.setting=this.settingsPanel.setting,this.addCommand({langKey:"showTokenStats",langText:"打开 Token 用量统计",hotkey:"",callback:()=>{this.dashboard.show()}}),this.syncHandler=e=>{const t=typeof(e==null?void 0:e.detail)=="string"?e.detail:JSON.stringify((e==null?void 0:e.detail)??"");console.log("[TokenStats] Sync event received, merging data...",t.substring(0,100)),setTimeout(()=>this.mergeFromRemote(),2500)},this.eventBus.on("sync-end",this.syncHandler),setTimeout(()=>this.mergeFromRemote(),5e3),this.mergeTimer=window.setInterval(()=>this.mergeFromRemote(),6e4),console.log("[TokenStats] Plugin loaded successfully."),this.lsHeartbeatTimer=window.setInterval(()=>{this.store.saveToLocalStorage()},1e4)}onunload(){var e,t,n,s,o;console.log("[TokenStats] Plugin unloading..."),this.mergeTimer!==null&&(clearInterval(this.mergeTimer),this.mergeTimer=null),this.badgeTimer!==null&&(clearInterval(this.badgeTimer),this.badgeTimer=null),this.lsHeartbeatTimer!==null&&(clearInterval(this.lsHeartbeatTimer),this.lsHeartbeatTimer=null),this.syncHandler&&(this.eventBus.off("sync-end",this.syncHandler),this.syncHandler=null),(e=this.interceptor)==null||e.uninstall(),(t=this.store)==null||t.saveToLocalStorage(),(n=this.store)==null||n.saveSync(),(s=this.store)==null||s.save().catch(a=>console.error("[TokenStats] Save on unload failed:",a)),(o=this.styleElement)==null||o.remove(),this.styleElement=null,this.topBarItem&&(this.topBarItem.remove(),this.topBarItem=null),this.badgeEl=null,console.log("[TokenStats] Plugin unloaded.")}async mergeFromRemote(){this.store.getSettings().syncStatistics&&await this.doMerge()}async doMerge(){if(this.merging)return!1;this.merging=!0;try{const e=await this.store.mergeFromRemote();return e&&this.settingsPanel.refreshFromStore(),this.updateBadge(),this.checkThresholdsLive(),e}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}finally{this.merging=!1}}async manualSyncFull(){let e=!1,t="";try{const s=await M.fetchSyncPost("/api/sync/performSync",{app:"siyuan-token-stats"});s.code===0?e=!0:t=s.msg?String(s.msg):`code=${s.code}`}catch(s){t=s instanceof Error?s.message:String(s)}e&&(M.showMessage("已触发思源云同步，等待同步完成…",2e3,"info"),await new Promise(s=>setTimeout(s,5e3)));const n=await this.doMerge();return n?M.showMessage("已合并其他端统计",2e3,"info"):e?M.showMessage("已是最新，无新数据（请确认其他端已完成过云同步）",3500,"info"):t?M.showMessage(`未能触发思源云同步：${t}。请先在思源「设置 - 关于 - 云端」启用并登录云同步，再点此按钮。`,6e3,"info"):M.showMessage("已是最新，无新数据（建议先在思源设置中开启云同步）",3500,"info"),n}initTopBarBadge(){if(!this.topBarItem)return;const e=document.createElement("span");e.className="tks-topbar-badge",e.style.display="none",this.topBarItem.style.position="relative",this.topBarItem.appendChild(e),this.badgeEl=e,this.updateBadge(),this.badgeTimer=window.setInterval(()=>{this.updateBadge(),this.checkThresholdsLive()},3e3)}updateBadge(){const e=this.badgeEl;if(!e)return;const t=this.store.getSettings();if(!t.showTopBarBadge){e.style.display="none";return}if(e.title="",t.globalCostLimit>0){const a=this.keyManager.getGlobalCostPercent(t),r=this.keyManager.getGlobalCostUsage(t),i=t.currency||"¥";let l,d="neutral";l=`${a.toFixed(0)}%`;const p=t.globalCostAlertThreshold>0?t.globalCostAlertThreshold:70;a>=90||this.keyManager.isGlobalCostExceeded(t)?d="danger":a>=p?d="warn":d="ok",e.textContent=l,e.className=`tks-topbar-badge tks-badge-${d}`,e.style.display="inline-block",e.title=`费用 ${i}${r.totalCost.toFixed(2)} / ${i}${t.globalCostLimit.toFixed(2)}`;return}const n=this.keyManager.getGlobalUsage(t);let s,o="neutral";if(t.globalQuotaLimit>0){const a=this.keyManager.getGlobalUsagePercent(t);s=`${Math.round(a)}%`;const r=t.globalAlertThreshold>0?t.globalAlertThreshold:70;a>=90||this.keyManager.isGlobalQuotaExceeded(t)?o="danger":a>=r?o="warn":o="ok"}else s=this.formatCompactTokens(n.totalTokens),o="neutral";e.textContent=s,e.className=`tks-topbar-badge tks-badge-${o}`,e.style.display="inline-block"}checkThresholdsLive(){this.store.getSettings().showNotifications&&this.keyManager.checkAllThresholds(t=>M.showMessage(t,5e3,"info"))}formatCompactTokens(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}}module.exports=_e;

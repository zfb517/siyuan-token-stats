"use strict";const M=require("siyuan"),we=`/* ═══════════════════════════════════════════\r
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
.tks-warn {\r
  color: #d97706;\r
  font-weight: 600;\r
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
  grid-template-columns: 1fr 100px 95px 95px 95px 36px;\r
  gap: 8px;\r
  align-items: center;\r
}\r
\r
/* 按模型单价列表列标题 */\r
.tks-price-header {\r
  display: grid;\r
  grid-template-columns: 1fr 100px 95px 95px 95px 36px;\r
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
  grid-template-columns: 1.2fr 90px 90px 70px 70px 70px 70px 1.4fr 36px;\r
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
  grid-template-columns: 1.2fr 90px 90px 70px 70px 70px 70px 1.4fr 36px;\r
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
`,Se=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ce=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function ae(y){const e=new TextEncoder().encode(y),t=e.length*8,n=e.length+1,s=Math.ceil((n+8)/64)*64,o=new Uint8Array(s);o.set(e),o[e.length]=128;const a=new DataView(o.buffer);a.setUint32(s-8,Math.floor(t/4294967296),!1),a.setUint32(s-4,t>>>0,!1);const r=Ce.slice(),i=new Uint32Array(64);for(let l=0;l<s;l+=64){for(let m=0;m<16;m++)i[m]=a.getUint32(l+m*4,!1);for(let m=16;m<64;m++){const S=i[m-15],x=i[m-2],T=(S>>>7|S<<25)^(S>>>18|S<<14)^S>>>3,w=(x>>>17|x<<15)^(x>>>19|x<<13)^x>>>10;i[m]=i[m-16]+T+i[m-7]+w|0}let c=r[0],u=r[1],d=r[2],k=r[3],p=r[4],v=r[5],h=r[6],f=r[7];for(let m=0;m<64;m++){const S=(p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7),x=p&v^~p&h,T=f+S+x+Se[m]+i[m]|0,w=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),$=c&u^c&d^u&d,E=w+$|0;f=h,h=v,v=p,p=k+T|0,k=d,d=u,u=c,c=T+E|0}r[0]=r[0]+c|0,r[1]=r[1]+u|0,r[2]=r[2]+d|0,r[3]=r[3]+k|0,r[4]=r[4]+p|0,r[5]=r[5]+v|0,r[6]=r[6]+h|0,r[7]=r[7]+f|0}return Array.from(r).map(l=>(l>>>0).toString(16).padStart(8,"0")).join("")}const ee="data.json",le="data.backup.json",pe="data/storage/siyuan-token-stats/data.json",me="data/storage/siyuan-token-stats/data.backup.json",ge="data/plugins/siyuan-token-stats/settings.json",ne="siyuan-token-stats-data",ce="1.3.0",te={matchByUrl:!0,interceptExternalAPIs:!0,blockOnQuotaExceeded:!1,quotaResetCycle:"monthly",abortStreamOnExceeded:!0,showNotifications:!0,showTopBarBadge:!0,maxRecords:5e3,packCountCacheRead:!0,countReasoningInOutput:!0,globalQuotaLimit:0,globalAlertThreshold:0,globalQuotaResetCycle:"monthly",globalUsedTokensOffset:0,globalUsedInputTokensOffset:0,globalUsedOutputTokensOffset:0,globalCostLimit:0,globalCostAlertThreshold:0,globalCostResetCycle:"monthly",globalUsedCostOffset:0,customResetDays:30,trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily",debugLogging:!1,currency:"¥",recalcCostOnPriceChange:!0,syncStatistics:!0,diagnosticExportCount:50,showDisclaimer:!0,enableForecast:!0,forecastMethod:"recentTrend",forecastWindowDays:7,enableAnomaly:!0,anomalySensitivity:2.5,anomalyLookbackDays:30,enableSuggestions:!0,showAdvancedDashboard:!1,enableNoteAttribution:!0,attributionTopN:10,tokenDisplayUnit:"auto",modelPrices:{},pricePacks:[]};class Ae{constructor(e){this.loaded=!1,this.saveTimer=null,this.plugin=e,this.data={version:ce,lastSavedAt:0,settingsUpdatedAt:0,keysUpdatedAt:0,deletedKeys:[],apiKeys:[],records:[],archives:[],settings:{...te}}}sanitizeKey(e){const t={...e};return typeof t.keyFull=="string"&&t.keyFull.length>0&&(t.keyHash=ae(t.keyFull),t.keyFull=""),t}async readSource(e,t=!1){try{const n=await fetch(`/api/file/getFile?path=${encodeURIComponent(e)}`);if(!n.ok)return null;const s=await n.text();if(!s)return null;const o=JSON.parse(s);if(!o||typeof o!="object")return null;const a=Array.isArray(o.apiKeys),r=Array.isArray(o.records),i=!!o.settings,l=!!o.lastSavedAt;if(t&&!a&&!r)return null;if(a||r||i||l)return o}catch{}return null}normalizeData(e,t){if(typeof e=="string")try{e=JSON.parse(e)}catch{return null}if(!e||typeof e!="object"||Array.isArray(e))return console.log(`[TokenStats] ${t} returned non-object:`,typeof e,e),null;if(!this.hasDataMarkers(e))return console.log(`[TokenStats] ${t} returned object without data markers:`,Object.keys(e)),null;const n={apiKeys:Array.isArray(e.apiKeys)?e.apiKeys.length:"none",records:Array.isArray(e.records)?e.records.length:"none",settings:!!e.settings,lastSavedAt:e.lastSavedAt||0};return console.log(`[TokenStats] ${t} read OK:`,n),e}async readOfficial(e){try{if(this.plugin&&typeof this.plugin.loadData=="function"){const t=await this.plugin.loadData(e),n=this.normalizeData(t,`loadData(${e})`);if(n)return n}}catch(t){console.warn("[TokenStats] readOfficial loadData failed:",t)}try{const t=`data/storage/siyuan-token-stats/${e}`,n=await fetch(`/api/file/getFile?path=${encodeURIComponent(t)}`);if(!n.ok)return console.log(`[TokenStats] readOfficial fetch fallback: HTTP ${n.status} for ${t}`),null;const s=await n.text();if(!s)return null;const o=JSON.parse(s);return this.normalizeData(o,`fetch(${e})`)}catch(t){console.warn("[TokenStats] readOfficial fetch fallback failed:",t)}return null}hasDataMarkers(e){return!e||typeof e!="object"?!1:Array.isArray(e.apiKeys)||Array.isArray(e.records)||!!e.settings||!!e.lastSavedAt}async isDestructiveWrite(e){if(e||this.data.apiKeys.length>0||this.data.records.length>0)return!1;const t=await this.readOfficial(ee).catch(()=>null);if(!t)return!1;const n=Array.isArray(t.apiKeys)?t.apiKeys.length:0,s=Array.isArray(t.records)?t.records.length:0;return n>0||s>0}async load(){try{const e=await this.readOfficial(ee),t=await this.readOfficial(le),n=await this.readSource(ge,!0),s=[e,t,n].filter(Boolean);let o=null;try{const b=localStorage.getItem(ne);if(b){const g=JSON.parse(b);this.hasDataMarkers(g)&&(o=g,console.log("[TokenStats] Found data in localStorage (fallback only)."))}}catch{}const a=[...s];if(o&&a.push(o),a.length===0){console.warn("[TokenStats] ⚠ No existing data in ANY source — starting fresh with empty defaults!",`primary(${ee})=${!!e}, backup(${le})=${!!t},legacy(${ge})=${!!n}, localStorage=${!!o}`),this.loaded=!0;return}const r=new Map,i=b=>{const g=r.get(b.id);if(!g){r.set(b.id,b);return}const R=g.keysUpdatedAt||0,I=b.keysUpdatedAt||0;(I>R||I===R&&!g.keyHash&&b.keyHash)&&r.set(b.id,b)};for(const b of a)for(const g of b.apiKeys||[])i(g);const l=Array.from(r.values()),c=new Set;for(const b of a)for(const g of b.deletedKeys||[])c.add(g);const u=new Map;for(const b of a)for(const g of b.records||[])u.has(g.id)||u.set(g.id,g);const d=Array.from(u.values()).sort((b,g)=>b.timestamp-g.timestamp),k=(()=>{var g;let b=5e3;for(const R of a){const I=(g=R.settings)==null?void 0:g.maxRecords;typeof I=="number"&&I>b&&(b=I)}return b})(),p=d.length>k?d.slice(-k):d,v=new Map,h=b=>{if(!b||!b.month)return;const g=v.get(b.month)||{month:b.month,count:0,totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalCacheReadTokens:0,totalCacheCreationTokens:0,totalReasoningTokens:0,exactTokens:0,estimatedTokens:0,cost:0,cacheCost:0,byModel:{}};g.count+=b.count||0,g.totalTokens+=b.totalTokens||0,g.totalInputTokens+=b.totalInputTokens||0,g.totalOutputTokens+=b.totalOutputTokens||0,g.totalCacheReadTokens+=b.totalCacheReadTokens||0,g.totalCacheCreationTokens+=b.totalCacheCreationTokens||0,g.totalReasoningTokens+=b.totalReasoningTokens||0,g.exactTokens+=b.exactTokens||0,g.estimatedTokens+=b.estimatedTokens||0,g.cost+=b.cost||0,g.cacheCost+=b.cacheCost||0;for(const[R,I]of Object.entries(b.byModel||{})){const U=g.byModel[R]||{tokens:0,inputTokens:0,outputTokens:0,cost:0,reasoningTokens:0,cacheReadTokens:0,cacheCreationTokens:0};U.tokens+=I.tokens||0,U.inputTokens+=I.inputTokens||0,U.outputTokens+=I.outputTokens||0,U.cost+=I.cost||0,U.reasoningTokens+=I.reasoningTokens||0,U.cacheReadTokens+=I.cacheReadTokens||0,U.cacheCreationTokens+=I.cacheCreationTokens||0,g.byModel[R]=U}v.set(b.month,g)};for(const b of a)for(const g of b.archives||[])h(g);const f=Array.from(v.values()).sort((b,g)=>b.month<g.month?-1:1);let m=a[0];for(const b of a)b.settingsUpdatedAt>m.settingsUpdatedAt&&(m=b);const S=m.settings||{},x={...te,...S};"autoDetectSiYuanAI"in S&&(x.matchByUrl=S.autoDetectSiYuanAI),!("globalCostResetCycle"in S)&&S.globalQuotaResetCycle&&(x.globalCostResetCycle=S.globalQuotaResetCycle);const T=l.map(b=>{const g={...b};return g.id==="siyuan-built-in"&&g.provider==="siyuan"&&(g.provider=g.baseUrl?g.baseUrl:"SiYuan AI"),g.usedTokensOffset===void 0&&(g.usedTokensOffset=0),g.usedInputTokensOffset===void 0&&(g.usedInputTokensOffset=0),g.usedOutputTokensOffset===void 0&&(g.usedOutputTokensOffset=0),Array.isArray(g.models)||(g.models=[]),this.sanitizeKey(g)}).filter(b=>!c.has(b.id)),w=Math.max(0,...a.map(b=>b.lastSavedAt||0)),$=Math.max(0,...a.map(b=>b.settingsUpdatedAt||0)),E=Math.max(0,...a.map(b=>b.keysUpdatedAt||0));this.data={version:ce,lastSavedAt:w,settingsUpdatedAt:$,keysUpdatedAt:E,deletedKeys:Array.from(c),apiKeys:T,records:p,archives:f,settings:x},this.enforceRetention(),console.log(`[TokenStats] Loaded (merged ${a.length} source(s), fileSources=${s.length}, localStorage=${!!o}): ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`),this.loaded=!0,this.saveToLocalStorage(),this.save().catch(b=>console.error("[TokenStats] Post-load save failed:",b))}catch(e){console.warn("[TokenStats] Failed to load data, starting fresh:",e),this.loaded=!0}}scheduleSave(e=500,t=!1){if(!this.loaded){console.warn("[TokenStats] scheduleSave ignored: data not loaded yet.");return}this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.save(t).catch(n=>console.error("[TokenStats] Save failed:",n))},e)}saveToLocalStorage(){if(this.loaded)try{localStorage.setItem(ne,JSON.stringify(this.data))}catch{}}async putFileRaw(e,t){const n=new FormData;n.append("path",e),n.append("file",new Blob([JSON.stringify(t,null,2)],{type:"application/json"}));const s=await fetch("/api/file/putFile",{method:"POST",body:n});if(!s.ok)throw new Error(`putFile returned ${s.status}`)}async save(e=!1){if(!this.loaded){console.warn("[TokenStats] save() ignored: data not loaded yet.");return}if(await this.isDestructiveWrite(e)){console.warn("[TokenStats] save() skipped: in-memory data empty but existing file has data; not overwriting.");return}try{this.data.lastSavedAt=Date.now(),this.plugin&&typeof this.plugin.saveData=="function"?await this.plugin.saveData(ee,this.data):await this.putFileRaw(pe,this.data);try{this.plugin&&typeof this.plugin.saveData=="function"?await this.plugin.saveData(le,this.data):await this.putFileRaw(me,this.data)}catch{}}catch(t){console.error("[TokenStats] Failed to save data:",t);try{localStorage.setItem(ne,JSON.stringify(this.data))}catch{}}}beaconPutFile(e,t){try{if(typeof navigator<"u"&&typeof navigator.sendBeacon=="function"){const n=new FormData;n.append("path",e),n.append("file",new Blob([t],{type:"application/json"})),navigator.sendBeacon("/api/file/putFile",n)}}catch{}}saveSync(){if(!this.loaded){console.warn("[TokenStats] saveSync() ignored: data not loaded yet.");return}const e=this.data.apiKeys.length>0||this.data.records.length>0||this.data.lastSavedAt>0;try{this.data.lastSavedAt=Date.now();const t=JSON.stringify(this.data,null,2);try{localStorage.setItem(ne,t)}catch{}if(!e){console.log("[TokenStats] saveSync skipped file write: in-memory empty and never saved (protecting existing file).");return}this.beaconPutFile(pe,t),this.beaconPutFile(me,t),console.log("[TokenStats] Synchronous save completed (localStorage mirror + sendBeacon file flush).")}catch(t){console.error("[TokenStats] saveSync error:",t)}}async mergeFromRemote(){try{const e=await this.readOfficial(ee);if(!e)return console.warn("[TokenStats] mergeFromRemote: 无法读取远程数据文件，合并跳过"),!1;const t=this.data,n=e.lastSavedAt||0,s=t.lastSavedAt||0,o=e.settingsUpdatedAt||0,a=e.keysUpdatedAt||0,r=t.settingsUpdatedAt||0,i=t.keysUpdatedAt||0,l=(e.records||[]).length,c=(t.records||[]).length,u=(e.apiKeys||[]).length,d=(t.apiKeys||[]).length;if(n===s&&o===r&&a===i&&l===c&&u===d&&n>0)return console.log("[TokenStats] Sync merge: data unchanged, skipping."),!1;console.log(`[TokenStats] Sync merge: local ls=${s} lset=${r} lkey=${i} lr=${c} lk=${d}, remote rs=${n} rset=${o} rkey=${a} rr=${l} rk=${u}`);const k=e.records||[],p=new Map;for(const A of t.records)p.set(A.id,A);for(const A of k)p.has(A.id)||p.set(A.id,A);const v=Array.from(p.values()).sort((A,L)=>A.timestamp-L.timestamp),h=t.settings.maxRecords,f=v.length>h?v.slice(-h):v,m=new Map,S=A=>{if(!A||!A.month)return;const L=m.get(A.month)||{month:A.month,count:0,totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalCacheReadTokens:0,totalCacheCreationTokens:0,totalReasoningTokens:0,exactTokens:0,estimatedTokens:0,cost:0,cacheCost:0,byModel:{}};L.count+=A.count||0,L.totalTokens+=A.totalTokens||0,L.totalInputTokens+=A.totalInputTokens||0,L.totalOutputTokens+=A.totalOutputTokens||0,L.totalCacheReadTokens+=A.totalCacheReadTokens||0,L.totalCacheCreationTokens+=A.totalCacheCreationTokens||0,L.totalReasoningTokens+=A.totalReasoningTokens||0,L.exactTokens+=A.exactTokens||0,L.estimatedTokens+=A.estimatedTokens||0,L.cost+=A.cost||0,L.cacheCost+=A.cacheCost||0;for(const[Y,q]of Object.entries(A.byModel||{})){const F=L.byModel[Y]||{tokens:0,inputTokens:0,outputTokens:0,cost:0,reasoningTokens:0,cacheReadTokens:0,cacheCreationTokens:0};F.tokens+=q.tokens||0,F.inputTokens+=q.inputTokens||0,F.outputTokens+=q.outputTokens||0,F.cost+=q.cost||0,F.reasoningTokens+=q.reasoningTokens||0,F.cacheReadTokens+=q.cacheReadTokens||0,F.cacheCreationTokens+=q.cacheCreationTokens||0,L.byModel[Y]=F}m.set(A.month,L)};for(const A of t.archives||[])S(A);for(const A of e.archives||[])S(A);const x=Array.from(m.values()).sort((A,L)=>A.month<L.month?-1:1),T=e.apiKeys||[],w=new Map,$=i>=a,E=$?T:t.apiKeys,b=$?t.apiKeys:T;for(const A of E)w.set(A.id,A);for(const A of b)w.set(A.id,A);const g=e.deletedKeys||[],R=t.deletedKeys||[],I=Array.from(new Set([...R,...g])),U=Array.from(w.values()).filter(A=>!I.includes(A.id)).map(A=>this.sanitizeKey(A)),N=r>=o,_=N?{...te,...t.settings}:{...te,...e.settings},D=N?t.settings:e.settings;D&&!("globalCostResetCycle"in D)&&D.globalQuotaResetCycle&&(_.globalCostResetCycle=D.globalQuotaResetCycle);const G=Math.max(r,o),Q=Math.max(i,a);return this.data={version:ce,lastSavedAt:Math.max(s,n),settingsUpdatedAt:G,keysUpdatedAt:Q,deletedKeys:I,apiKeys:U,records:f,archives:x,settings:_},this.enforceRetention(),await this.save(),console.log(`[TokenStats] Sync merge complete: ${U.length} keys, ${f.length} records.`),!0}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}}getApiKeys(){return this.data.apiKeys}getApiKey(e){return this.data.apiKeys.find(t=>t.id===e)}addApiKey(e){this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys=this.data.deletedKeys.filter(t=>t!==e.id),this.data.apiKeys.push(this.sanitizeKey(e)),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}updateApiKey(e,t){const n=this.data.apiKeys.findIndex(s=>s.id===e);if(n>=0){const s={...this.data.apiKeys[n],...t};typeof t.keyFull=="string"&&t.keyFull.length>0&&(s.keyHash=ae(t.keyFull),s.keyFull=""),this.data.apiKeys[n]=s,this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}}deleteApiKey(e){this.data.apiKeys=this.data.apiKeys.filter(t=>t.id!==e),this.data.deletedKeys||(this.data.deletedKeys=[]),this.data.deletedKeys.includes(e)||this.data.deletedKeys.push(e),this.data.keysUpdatedAt=Date.now(),this.scheduleSave()}addRecord(e){const t=this.data.records,n=t.slice(-5);for(const s of n)if(s.apiKeyId===e.apiKeyId&&s.timestamp===e.timestamp&&s.totalTokens===e.totalTokens&&s.model===e.model){console.log("[TokenStats] Duplicate record skipped:",e.apiKeyName,e.model,e.totalTokens);return}this.data.settings.recalcCostOnPriceChange===!1&&(e.cost=this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens,e.reasoningTokens,e.cacheCreationTokens)),t.push(e),this.enforceRetention(),this.scheduleSave()}getRecords(){return this.data.records}getArchives(){return this.data.archives||[]}enforceRetention(){const e=this.data.records,t=this.data.settings.maxRecords||5e3;if(e.length<=t)return;e.sort((o,a)=>o.timestamp-a.timestamp);const n=e.slice(0,e.length-t),s=e.slice(e.length-t);this.data.records=s,n.length>0&&this.aggregateIntoArchives(n)}aggregateIntoArchives(e){Array.isArray(this.data.archives)||(this.data.archives=[]);const t=new Map;for(const n of this.data.archives)t.set(n.month,n);for(const n of e){const s=new Date(n.timestamp),o=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`;let a=t.get(o);a||(a={month:o,count:0,totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalCacheReadTokens:0,totalCacheCreationTokens:0,totalReasoningTokens:0,exactTokens:0,estimatedTokens:0,cost:0,cacheCost:0,byModel:{}},t.set(o,a)),a.count+=1,a.totalTokens+=n.totalTokens,a.totalInputTokens+=n.inputTokens,a.totalOutputTokens+=n.outputTokens,a.totalCacheReadTokens+=n.cacheReadTokens||0,a.totalCacheCreationTokens+=n.cacheCreationTokens||0,a.totalReasoningTokens+=n.reasoningTokens||0,n.estimated===!1?a.exactTokens+=n.totalTokens:a.estimatedTokens+=n.totalTokens,a.cost+=this.getRecordCost(n),a.cacheCost+=this.getRecordCacheCost(n);const r=(n.model||"unknown").toLowerCase().trim();a.byModel[r]||(a.byModel[r]={tokens:0,inputTokens:0,outputTokens:0,cost:0,reasoningTokens:0,cacheReadTokens:0,cacheCreationTokens:0}),a.byModel[r].tokens+=n.totalTokens,a.byModel[r].inputTokens+=n.inputTokens,a.byModel[r].outputTokens+=n.outputTokens,a.byModel[r].reasoningTokens+=n.reasoningTokens||0,a.byModel[r].cacheReadTokens+=n.cacheReadTokens||0,a.byModel[r].cacheCreationTokens+=n.cacheCreationTokens||0,a.byModel[r].cost+=this.getRecordCost(n)}this.data.archives=Array.from(t.values()).sort((n,s)=>n.month<s.month?-1:1)}getRecentRecords(e=50){return[...this.data.records].sort((t,n)=>n.timestamp-t.timestamp).slice(0,e)}clearRecords(){this.data.records=[],this.scheduleSave(0,!0)}clearAll(){this.data.records=[],this.data.apiKeys=[],this.data.deletedKeys=[],this.scheduleSave(0,!0)}getSettings(){return this.data.settings}updateSettings(e){this.data.settings={...this.data.settings,...e},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave()}resetSettings(){this.data.settings={...te},this.data.settingsUpdatedAt=Date.now(),this.scheduleSave(0,!0)}getCurrency(){return this.data.settings.currency||"¥"}normalizeModelKey(e){return(e||"").toLowerCase().trim().replace(/[\s\-_]+/g,"")}resolvePrice(e){const t=this.normalizeModelKey(e);if(!t)return{price:null,fromPack:!1};const n=this.data.settings.modelPrices||{};if(n[t])return{price:n[t],fromPack:!1};const s=this.findPackForModel(t);if(s){if(s.totalPrice&&s.totalPrice>0&&s.totalTokens>0){const a=s.totalPrice/s.totalTokens*1e3;return{price:{input:a,output:a,cacheRead:a,cacheCreation:a},fromPack:!0}}return{price:{input:s.input,output:s.output,...s.cacheRead?{cacheRead:s.cacheRead}:{},...s.cacheCreation?{cacheCreation:s.cacheCreation}:{}},fromPack:!0}}return{price:null,fromPack:!1}}getModelPrice(e){return this.resolvePrice(e).price}modelHasCachePrice(e){const{price:t}=this.resolvePrice(e);return!!(t&&typeof t.cacheRead=="number"&&t.cacheRead>0)}getInputPrice(e){const{price:t}=this.resolvePrice(e);return t?t.input:0}getCachePrice(e){const{price:t}=this.resolvePrice(e);return t&&t.cacheRead?t.cacheRead:0}findPackForModel(e){const t=this.data.settings.pricePacks||[];for(const n of t)if(Array.isArray(n.models)&&n.models.some(s=>this.normalizeModelKey(s)===e))return n;return null}hasAnyPrice(){return Object.keys(this.data.settings.modelPrices||{}).length>0?!0:(this.data.settings.pricePacks||[]).length>0}calcCost(e,t,n,s,o,a){const{price:r,fromPack:i}=this.resolvePrice(e);if(!r)return 0;const l=s&&s>0?s:0,u=Math.max(0,t-l)/1e3*r.input,p=(this.data.settings.countReasoningInOutput!==!1?n:Math.max(0,n-(o||0)))/1e3*r.output;let v=u+p;if(r.cacheRead&&l>0&&(!i||this.data.settings.packCountCacheRead!==!1)&&(v+=l/1e3*r.cacheRead),r.cacheCreation){const h=a&&a>0?a:0;h>0&&(v+=h/1e3*r.cacheCreation)}return v}calcCacheCost(e,t){if(!t||t<=0)return 0;const{price:n,fromPack:s}=this.resolvePrice(e);return!n||!n.cacheRead||s&&this.data.settings.packCountCacheRead===!1?0:t/1e3*n.cacheRead}formatCost(e){return`${this.getCurrency()}${e.toFixed(4)}`}getRecordCacheCost(e){const t=this.calcCacheCost(e.model,e.cacheReadTokens);return this.data.settings.recalcCostOnPriceChange!==!1,t}getRecordCost(e){return this.data.settings.recalcCostOnPriceChange!==!1?this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens,e.reasoningTokens,e.cacheCreationTokens):typeof e.cost=="number"?e.cost:this.calcCost(e.model,e.inputTokens,e.outputTokens,e.cacheReadTokens,e.reasoningTokens,e.cacheCreationTokens)}getPackUsage(e){const t=new Set((e.models||[]).map(s=>this.normalizeModelKey(s)));if(t.size===0)return{usedTokens:0};let n=0;for(const s of this.data.records)t.has(this.normalizeModelKey(s.model))&&(n+=(s.inputTokens||0)+(s.outputTokens||0));for(const s of this.data.archives||[])for(const[o,a]of Object.entries(s.byModel||{}))t.has(this.normalizeModelKey(o))&&(n+=(a.inputTokens||0)+(a.outputTokens||0));return{usedTokens:n}}getTotalCostInPeriod(e,t){let n=0;for(const s of e)s.timestamp>=t&&(n+=this.getRecordCost(s));return n}exportAll(){const e=JSON.parse(JSON.stringify(this.data));if(Array.isArray(e.apiKeys))for(const t of e.apiKeys)t&&"keyFull"in t&&delete t.keyFull;return JSON.stringify(e,null,2)}exportRecords(){return JSON.stringify(this.data.records,null,2)}}function oe(y){if(!y)return"";try{const e=new URL(y,window.location.href);return e.pathname+e.search}catch{return y}}function fe(y,e){return e?y===e?!0:y.startsWith(e)&&(y[e.length]==="/"||y[e.length]==="?"):!1}class Me{constructor(e){this.store=e,this.alertedKeys=new Set,this.exceededAlertedKeys=new Set,this.alertedGlobal=!1,this.exceededAlertedGlobal=!1,this.alertedCostGlobal=!1,this.exceededAlertedCostGlobal=!1}getAllKeys(){return this.store.getApiKeys()}findByKey(e){if(!e)return;const t=ae(e);return this.store.getApiKeys().find(n=>n.enabled&&n.keyHash&&n.keyHash===t)}findByUrl(e){const t=oe(e);if(t)return this.store.getApiKeys().find(n=>{if(!n.enabled||!n.baseUrl)return!1;const s=oe(n.baseUrl);return s?fe(t,s):!1})}findByUrlAndModel(e,t){if(!e)return;const n=this.store.getApiKeys().filter(s=>{if(!s.enabled||!s.baseUrl)return!1;const o=oe(s.baseUrl),a=oe(e);return o&&a?fe(a,o):!1});if(n.length!==0){if(t){const s=String(t).toLowerCase().trim();for(const o of n)if(Array.isArray(o.models)&&o.models.find(a=>String(a).toLowerCase().trim()===s))return o}return n[0]}}findByModel(e){if(!e)return;const t=String(e).toLowerCase().trim();return this.store.getApiKeys().find(n=>n.enabled?(n.models||[]).map(o=>String(o).toLowerCase().trim()).includes(t):!1)}getResetBoundary(e,t=30){if(e==="none")return 0;const n=new Date;if(e==="daily")return new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime();if(e==="custom"){const s=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime(),o=Math.max(1,Math.floor(t)||30);return s-(o-1)*864e5}return new Date(n.getFullYear(),n.getMonth(),1).getTime()}getKeyUsage(e){const t=this.store.getSettings(),n=this.getResetBoundary(t.quotaResetCycle,t.customResetDays),s=this.store.getApiKey(e),o=this.store.getRecords().filter(l=>l.apiKeyId===e&&l.timestamp>=n),a=(s==null?void 0:s.usedTokensOffset)??0,r=(s==null?void 0:s.usedInputTokensOffset)??0,i=(s==null?void 0:s.usedOutputTokensOffset)??0;return{totalTokens:o.reduce((l,c)=>l+c.totalTokens,0)+a,totalInputTokens:o.reduce((l,c)=>l+c.inputTokens,0)+r,totalOutputTokens:o.reduce((l,c)=>l+c.outputTokens,0)+i,totalRequests:o.length}}getRemainingQuota(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return-1;const n=this.getKeyUsage(e);return Math.max(0,t.quotaLimit-n.totalTokens)}getUsagePercent(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return 0;const n=this.getKeyUsage(e);return Math.min(100,n.totalTokens/t.quotaLimit*100)}isQuotaExceeded(e){const t=this.store.getApiKey(e);return!t||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens>=t.quotaLimit}wouldExceedQuota(e,t){const n=this.store.getApiKey(e);return!n||n.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens+t>n.quotaLimit}isThresholdReached(e){const t=this.store.getApiKey(e);return!t||t.alertThreshold<=0||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens/t.quotaLimit*100>=t.alertThreshold}checkThreshold(e,t){const n=this.store.getApiKey(e);if(n){if(this.alertedKeys.has(e)&&!this.isThresholdReached(e)&&this.alertedKeys.delete(e),this.isThresholdReached(e)&&!this.alertedKeys.has(e)){this.alertedKeys.add(e);const s=this.getKeyUsage(e),o=(s.totalTokens/n.quotaLimit*100).toFixed(1),a=`⚠️ Token 用量提醒：${n.name} 已使用 ${o}%（${s.totalTokens.toLocaleString()} / ${n.quotaLimit.toLocaleString()} tokens）`;t(a)}if(this.isQuotaExceeded(e)){if(!this.exceededAlertedKeys.has(e)){this.exceededAlertedKeys.add(e);const s=`⛔ Token 限额已用尽：${n.name}（限额 ${n.quotaLimit.toLocaleString()} tokens）`;t(s)}}else this.exceededAlertedKeys.delete(e)}}resetAlert(e){this.alertedKeys.delete(e),this.exceededAlertedKeys.delete(e)}clearAllAlerts(){this.alertedKeys.clear(),this.alertedGlobal=!1,this.alertedCostGlobal=!1,this.exceededAlertedKeys.clear(),this.exceededAlertedGlobal=!1,this.exceededAlertedCostGlobal=!1}generateKeyId(){return`key-${Date.now()}-${Math.random().toString(36).substring(2,8)}`}maskKey(e){return e?e.length<=8?e.substring(0,2)+"***":e.substring(0,5)+"..."+e.substring(e.length-4):"(空)"}getDefaultBaseUrl(e){return{openai:"https://api.openai.com/v1/chat/completions",anthropic:"https://api.anthropic.com/v1/messages",deepseek:"https://api.deepseek.com/v1/chat/completions"}[e.toLowerCase()]||""}getGlobalUsage(e){const t=this.getResetBoundary(e.globalQuotaResetCycle,e.customResetDays),n=this.store.getRecords().filter(s=>s.timestamp>=t);return{totalTokens:n.reduce((s,o)=>s+o.totalTokens,0)+(e.globalUsedTokensOffset??0),totalInputTokens:n.reduce((s,o)=>s+o.inputTokens,0)+(e.globalUsedInputTokensOffset??0),totalOutputTokens:n.reduce((s,o)=>s+o.outputTokens,0)+(e.globalUsedOutputTokensOffset??0),totalRequests:n.length}}getGlobalRemainingQuota(e){if(e.globalQuotaLimit<=0)return-1;const t=this.getGlobalUsage(e);return Math.max(0,e.globalQuotaLimit-t.totalTokens)}getGlobalUsagePercent(e){if(e.globalQuotaLimit<=0)return 0;const t=this.getGlobalUsage(e);return Math.min(100,t.totalTokens/e.globalQuotaLimit*100)}isGlobalQuotaExceeded(e){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens>=e.globalQuotaLimit}wouldExceedGlobalQuota(e,t){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens+t>e.globalQuotaLimit}isGlobalThresholdReached(e){return e.globalAlertThreshold<=0||e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens/e.globalQuotaLimit*100>=e.globalAlertThreshold}checkGlobalThreshold(e,t){if(!(e.globalQuotaLimit<=0)){if(this.alertedGlobal&&!this.isGlobalThresholdReached(e)&&(this.alertedGlobal=!1),this.isGlobalThresholdReached(e)&&!this.alertedGlobal){this.alertedGlobal=!0;const n=this.getGlobalUsage(e),o=`⚠️ 全局 Token 用量提醒：已使用 ${(n.totalTokens/e.globalQuotaLimit*100).toFixed(1)}%（${n.totalTokens.toLocaleString()} / ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(o)}if(this.isGlobalQuotaExceeded(e)){if(!this.exceededAlertedGlobal){this.exceededAlertedGlobal=!0;const n=`⛔ 全局 Token 限额已用尽（限额 ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(n)}}else this.exceededAlertedGlobal=!1}}resetGlobalAlert(){this.alertedGlobal=!1,this.exceededAlertedGlobal=!1}getGlobalCostUsage(e){const t=this.getResetBoundary(e.globalCostResetCycle,e.customResetDays),n=this.store.getRecords().filter(o=>o.timestamp>=t);let s=0;for(const o of n)s+=this.store.getRecordCost(o);return s+=e.globalUsedCostOffset??0,{totalCost:s,totalRequests:n.length}}getGlobalRemainingCost(e){if(e.globalCostLimit<=0)return-1;const t=this.getGlobalCostUsage(e);return Math.max(0,e.globalCostLimit-t.totalCost)}getGlobalCostPercent(e){if(e.globalCostLimit<=0)return 0;const t=this.getGlobalCostUsage(e);return Math.min(100,t.totalCost/e.globalCostLimit*100)}isGlobalCostExceeded(e){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost>=e.globalCostLimit}wouldExceedGlobalCostQuota(e,t){return e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost+t>e.globalCostLimit}isGlobalCostThresholdReached(e){return e.globalCostAlertThreshold<=0||e.globalCostLimit<=0?!1:this.getGlobalCostUsage(e).totalCost/e.globalCostLimit*100>=e.globalCostAlertThreshold}checkGlobalCostThreshold(e,t){if(!(e.globalCostLimit<=0)){if(this.alertedCostGlobal&&!this.isGlobalCostThresholdReached(e)&&(this.alertedCostGlobal=!1),this.isGlobalCostThresholdReached(e)&&!this.alertedCostGlobal){this.alertedCostGlobal=!0;const n=this.getGlobalCostUsage(e),s=(n.totalCost/e.globalCostLimit*100).toFixed(1),o=e.currency||"¥",a=`⚠️ 全局费用提醒：已使用 ${s}%（${o}${n.totalCost.toFixed(2)} / ${o}${e.globalCostLimit.toFixed(2)}）`;t(a)}if(this.isGlobalCostExceeded(e)){if(!this.exceededAlertedCostGlobal){this.exceededAlertedCostGlobal=!0;const s=`⛔ 全局费用限额已用尽（限额 ${e.currency||"¥"}${e.globalCostLimit.toFixed(2)}）`;t(s)}}else this.exceededAlertedCostGlobal=!1}}resetGlobalCostAlert(){this.alertedCostGlobal=!1,this.exceededAlertedCostGlobal=!1}checkAllThresholds(e){const t=this.store.getSettings();for(const n of this.store.getApiKeys())n.enabled&&this.checkThreshold(n.id,e);this.checkGlobalThreshold(t,e),this.checkGlobalCostThreshold(t,e)}}const $e=765;class Re{estimate(e){if(!e)return 0;const t=(e.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g)||[]).length,n=(e.match(/[\u3000-\u303f\uff00-\uffef]/g)||[]).length,s=(e.match(/[a-zA-Z]+/g)||[]).length,o=s*4,a=Math.max(0,e.length-t-n-o),r=Math.ceil(t*1.5+n*.75+s*1.3+a*.25);return Math.max(0,r)}hasMultimodal(e){var n;if(!Array.isArray(e))return!1;const t=s=>typeof s=="string"?!1:Array.isArray(s)?s.some(t):!s||typeof s!="object"?!1:s.image_url||s.input_audio||s.file||s.audio?!0:Array.isArray(s.content)?s.content.some(t):!1;for(const s of e)if(typeof s!="string"){if(t(s==null?void 0:s.content))return!0;if(Array.isArray(s==null?void 0:s.tool_calls)){for(const o of s.tool_calls)if((n=o==null?void 0:o.function)!=null&&n.arguments)try{const a=typeof o.function.arguments=="string"?JSON.parse(o.function.arguments):o.function.arguments;if(t(a))return!0}catch{}}}return!1}estimateFromMessages(e){var n,s;if(!Array.isArray(e))return 0;let t=0;for(const o of e){if(typeof o=="string")t+=this.estimate(o)+4;else if(o!=null&&o.content){if(typeof o.content=="string")t+=this.estimate(o.content)+4;else if(Array.isArray(o.content)){for(const a of o.content)typeof a=="string"?t+=this.estimate(a):a!=null&&a.text?t+=this.estimate(a.text):a!=null&&a.image_url&&(t+=$e);t+=4}}if(Array.isArray(o.tool_calls)){for(const a of o.tool_calls)(n=a==null?void 0:a.function)!=null&&n.name&&(t+=this.estimate(a.function.name)+1),typeof((s=a==null?void 0:a.function)==null?void 0:s.arguments)=="string"&&(t+=this.estimate(a.function.arguments));t+=4}o!=null&&o.role&&(t+=1)}return t}estimateFromText(e){return this.estimate(e)}}let ke=0;function be(y,e){if(!y)return null;if(y instanceof Headers)return y.get(e);if(Array.isArray(y)){for(const[s,o]of y)if(s.toLowerCase()===e.toLowerCase())return o;return null}const t=y,n=e.toLowerCase();for(const s of Object.keys(t))if(s.toLowerCase()===n)return t[s];return null}function Ie(y){return typeof y=="string"?y:y instanceof URL?y.href:y.url}function Ee(){return`rec-${Date.now()}-${Math.random().toString(36).substring(2,9)}`}function re(y){return y&&String(y).trim()||""}function xe(y){return!y||y==="unknown"||y==="siyuan-ai"||y==="default"}function se(y){if(!y)return!0;const e=y.trim();return!!(/^\d{14,}-[a-z0-9]+$/i.test(e)||/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)||/^\d+$/.test(e)||e.length>40&&!/[._-]/.test(e))}function X(...y){for(const e of y){const t=re(e);if(t&&!xe(t)&&!se(t))return t}return""}function Le(y){return/\/api\/ai\/agent\/chat\b/i.test(y)||/\/api\/ai\/chatGPT\b/i.test(y)||/\/api\/ai\/chatGPTWithAction\b/i.test(y)}function Ke(y){return typeof y=="object"&&y!==null&&"code"in y&&"msg"in y&&"data"in y&&!("choices"in y)&&!("usage"in y)}function De(){return{apiKeyId:"siyuan-ai-default",apiKeyName:"思源智能体",source:"siyuan-ai",provider:"SiYuan AI",model:"unknown"}}class Ue{constructor(e,t,n){this.installed=!1,this.onThresholdAlert=()=>{},this.siyuanConfigCache=null,this.originalFetch=window.fetch.bind(window),this.store=e,this.keyManager=t,this.tokenCounter=n}setThresholdCallback(e){this.onThresholdAlert=e}keyMatchesModel(e,t){if(!e||!t)return!1;const n=String(t).toLowerCase().trim();return(e.models||[]).map(o=>String(o).toLowerCase().trim()).includes(n)}install(){if(this.installed){console.warn("[TokenStats] Interceptor already installed.");return}this.installed=!0;const e=this;window.fetch=async function(t,n){const s=Ie(t),o=e.store.getSettings(),a=await e.extractBodyText(t,n),r=e.tryParseJson(a),i=await e.identifyAiCall(s,n,o,r);if(!i)return e.originalFetch(t,n);e.logDebug(`Intercepted AI call: source=${i.source}, model=${i.model}, key=${i.apiKeyName}`),e.logDebug("Request body",{bodyText:a==null?void 0:a.slice(0,500),parsedBody:r});const l=Date.now();if(o.blockOnQuotaExceeded&&o.globalQuotaLimit>0){const k=e.tokenCounter.estimateFromMessages(e.extractMessages(r));if(e.keyManager.isGlobalQuotaExceeded(o)){const p="[TokenStats] 已阻止请求：全局 Token 限额已用尽";return console.warn(p),e.onThresholdAlert("global",p),e.createBlockedResponse(p,i)}if(e.keyManager.wouldExceedGlobalQuota(o,k)){const v=`[TokenStats] 已阻止请求：全局剩余配额 ${e.keyManager.getGlobalRemainingQuota(o).toLocaleString()} tokens，预估输入 ${k.toLocaleString()} tokens 将超限`;return console.warn(v),e.onThresholdAlert("global",v),e.createBlockedResponse(v,i)}}if(o.blockOnQuotaExceeded&&o.globalCostLimit>0){const k=e.tokenCounter.estimateFromMessages(e.extractMessages(r)),p=e.store.calcCost(i.model,k,k),v=o.currency||"¥";if(e.keyManager.isGlobalCostExceeded(o)){const h=`[TokenStats] 已阻止请求：全局费用限额已用尽（${v}${o.globalCostLimit.toFixed(2)}）`;return console.warn(h),e.onThresholdAlert("global-cost",h),e.createBlockedResponse(h,i)}if(p>0&&e.keyManager.wouldExceedGlobalCostQuota(o,p)){const h=e.keyManager.getGlobalRemainingCost(o),f=`[TokenStats] 已阻止请求：全局费用剩余 ${v}${h.toFixed(2)}，预估本次费用 ${v}${p.toFixed(2)} 将超限`;return console.warn(f),e.onThresholdAlert("global-cost",f),e.createBlockedResponse(f,i)}}if(o.blockOnQuotaExceeded){if(e.keyManager.isQuotaExceeded(i.apiKeyId)){const p=e.store.getApiKey(i.apiKeyId),v=`[TokenStats] 已阻止请求：${(p==null?void 0:p.name)||i.apiKeyName} 的 Token 限额已用尽`;return console.warn(v),e.onThresholdAlert(i.apiKeyId,v),e.createBlockedResponse(v,i)}const k=e.tokenCounter.estimateFromMessages(e.extractMessages(r));if(e.keyManager.wouldExceedQuota(i.apiKeyId,k)){const p=e.store.getApiKey(i.apiKeyId),v=e.keyManager.getRemainingQuota(i.apiKeyId),h=`[TokenStats] 已阻止请求：${(p==null?void 0:p.name)||i.apiKeyName} 剩余配额 ${v.toLocaleString()} tokens，预估输入 ${k.toLocaleString()} tokens 将超限`;return console.warn(h),e.onThresholdAlert(i.apiKeyId,h),e.createBlockedResponse(h,i)}}let c,u=!1;try{c=await e.originalFetch(t,n),u=c.ok}catch(k){throw e.recordCall(i,0,0,l,!1,i.model,void 0,!0),k}const d=c.clone();return e.analyzeResponse(d,i,l,r,u).catch(k=>console.warn("[TokenStats] Response analysis failed:",k)),c},console.log("[TokenStats] Fetch interceptor installed.")}createBlockedResponse(e,t){const n=JSON.stringify({error:{type:"quota_exceeded",code:"token_stats_blocked",message:e,apiKeyId:t.apiKeyId,apiKeyName:t.apiKeyName}});return new Response(n,{status:429,statusText:"Too Many Requests",headers:{"Content-Type":"application/json","X-TokenStats-Blocked":"true"}})}uninstall(){this.installed&&(window.fetch=this.originalFetch,this.installed=!1,console.log("[TokenStats] Fetch interceptor uninstalled."))}async extractBodyText(e,t){if(t!=null&&t.body&&typeof t.body=="string")return t.body;if((t==null?void 0:t.body)instanceof URLSearchParams)return t.body.toString();if((t==null?void 0:t.body)instanceof FormData)try{const n={};return t.body.forEach((s,o)=>{n[o]=typeof s=="string"?s:s.name}),JSON.stringify(n)}catch{return null}if((t==null?void 0:t.body)instanceof Blob)try{return await t.body.text()}catch{return null}if(t!=null&&t.body&&(t.body instanceof ArrayBuffer||ArrayBuffer.isView(t.body)))try{return new TextDecoder().decode(t.body)}catch{return null}if(e instanceof Request)try{return await e.clone().text()}catch{return null}return null}tryParseJson(e){if(!e)return null;try{return JSON.parse(e)}catch{return null}}isDebugEnabled(){return this.store.getSettings().debugLogging??!1}logDebug(...e){this.isDebugEnabled()&&console.log("[TokenStats]",...e)}async identifyAiCall(e,t,n,s){const o=e.toLowerCase();if(Le(e)){const l=await this.getSiYuanAiConfig(),c=(s==null?void 0:s.model)||null,u=this.extractModel(s)||c||this.getSiYuanSelectedModelId(l);if(u){const k=this.findProviderByModel(l,u),p=k?k.baseURL:null;if(k&&k.apiKey){const h=this.keyManager.findByKey(k.apiKey);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||p||"siyuan-ai",provider:h.provider,model:this.resolveSiYuanModelForCall(s,l)}}const v=this.keyManager.findByModel(u);if(v&&v.enabled)return{apiKeyId:v.id,apiKeyName:v.name,source:v.baseUrl||p||"siyuan-ai",provider:v.provider,model:this.resolveSiYuanModelForCall(s,l)};if(p){const h=this.keyManager.findByUrlAndModel(p,u);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||p||"siyuan-ai",provider:h.provider,model:this.resolveSiYuanModelForCall(s,l)}}}if(l!=null&&l.providers){for(const k of l.providers)if(k!=null&&k.enabled){if(k.apiKey){const p=this.keyManager.findByKey(k.apiKey);if(p&&p.enabled)return{apiKeyId:p.id,apiKeyName:p.name,source:p.baseUrl||k.baseURL||"siyuan-ai",provider:p.provider,model:this.resolveModelByBlockId(c,l)||this.resolveModelNameFromProvider(k)||this.resolveSiYuanModelForCall(s,l)}}if(k.baseURL){const p=this.keyManager.findByUrl(k.baseURL);if(p&&p.enabled)return{apiKeyId:p.id,apiKeyName:p.name,source:p.baseUrl||k.baseURL||"siyuan-ai",provider:p.provider,model:this.resolveModelByBlockId(c,l)||this.resolveModelNameFromProvider(k)||this.resolveSiYuanModelForCall(s,l)}}if(Array.isArray(k.models))for(const p of k.models){const v=(p==null?void 0:p.id)||(p==null?void 0:p.name)||(p==null?void 0:p.displayName);if(!v)continue;const h=this.keyManager.findByModel(v);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||k.baseURL||"siyuan-ai",provider:h.provider,model:v}}}}const d=this.keyManager.findByUrl(e);return d&&d.enabled?{apiKeyId:d.id,apiKeyName:d.name,source:d.baseUrl||"siyuan-ai",provider:d.provider,model:this.resolveSiYuanModelForCall(s,l)}:{...De(),model:this.resolveSiYuanModelForCall(s,l)}}if(n.matchByUrl){const l=this.keyManager.findByUrl(e),c=this.extractModel(s);let u=l;if(c&&l&&!this.keyMatchesModel(l,c)){const d=this.keyManager.findByModel(c);d&&d.enabled&&(u=d)}if(u&&u.enabled)return{apiKeyId:u.id,apiKeyName:u.name,source:u.baseUrl||"url-match",provider:u.provider,model:c||"unknown"}}if(!n.interceptExternalAPIs)return null;const r=this.extractModel(s);if(o.includes("/v1/chat/completions")||o.includes("/v1/completions")){const c=(be(t==null?void 0:t.headers,"Authorization")||"").replace(/^bearer\s+/i,"").trim();let u=r?this.keyManager.findByModel(r):void 0;return(!u||!u.enabled)&&(u=c?this.keyManager.findByKey(c):void 0),(!u||!u.enabled)&&(u=this.keyManager.findByUrl(e)),{apiKeyId:(u==null?void 0:u.id)||"unknown",apiKeyName:(u==null?void 0:u.name)||this.keyManager.maskKey(c)||"Unknown",source:"external-openai",provider:(u==null?void 0:u.provider)||"OpenAI",model:r||"unknown"}}if(o.includes("/v1/messages")){const l=be(t==null?void 0:t.headers,"x-api-key")||"";let c=r?this.keyManager.findByModel(r):void 0;return(!c||!c.enabled)&&(c=l?this.keyManager.findByKey(l):void 0),(!c||!c.enabled)&&(c=this.keyManager.findByUrl(e)),{apiKeyId:(c==null?void 0:c.id)||"unknown",apiKeyName:(c==null?void 0:c.name)||this.keyManager.maskKey(l)||"Unknown",source:"external-anthropic",provider:(c==null?void 0:c.provider)||"Anthropic",model:r||"unknown"}}let i=r?this.keyManager.findByModel(r):void 0;return(!i||!i.enabled)&&(i=this.keyManager.findByUrl(e)),i&&i.enabled?{apiKeyId:i.id,apiKeyName:i.name,source:i.baseUrl||"custom-url",provider:i.provider,model:r||"unknown"}:null}getSiYuanSelectedModelId(e){if(!e)return null;const t=e.agent||{},n=e.editing||{};return t.modelId||n.modelId||null}extractModel(e){return X(e==null?void 0:e.model)||null}resolveModelByBlockId(e,t){if(!t||!e)return null;const n=t.providers||[];for(const s of n){const o=(s.models||[]).find(a=>(a==null?void 0:a.id)===e);if(o)return o.name||o.displayName||null}return null}resolveSiYuanModelForCall(e,t){const n=e==null?void 0:e.model;if(n){const s=this.resolveModelByBlockId(n,t);if(s)return s}return X(this.extractModel(e))||this.resolveSiYuanModelNameFromConfig(t)||"unknown"}extractMessages(e){if(!e)return[];if(Array.isArray(e.messages))return e.messages;if(typeof e.messages=="string")return[e.messages];if(typeof e.messages=="object"&&e.messages!==null)return[e.messages];if(typeof e.prompt=="string")return[e.prompt];if(Array.isArray(e.contents))return e.contents;if(typeof e.content=="string")return[e.content];if(typeof e.text=="string")return[e.text];if(e.message!==void 0||e.references!==void 0){const t=[];if(Array.isArray(e.references))for(const n of e.references)typeof n=="string"?t.push({role:"system",content:n}):n!=null&&n.content?t.push({role:"system",content:typeof n.content=="string"?n.content:JSON.stringify(n.content)}):n!=null&&n.text&&t.push({role:"system",content:n.text});if(typeof e.message=="string"?t.push({role:"user",content:e.message}):typeof e.message=="object"&&e.message!==null&&t.push({role:"user",content:JSON.stringify(e.message)}),t.length>0)return t}if(typeof e.msg=="string")return[e.msg];if(typeof e.msg=="object"&&e.msg!==null)return[e.msg];if(e.context&&e.query)return[{role:"system",content:e.context},{role:"user",content:e.query}];if(typeof e.query=="string")return[e.query];if(e.input){if(Array.isArray(e.input))return e.input;if(Array.isArray(e.input.messages))return e.input.messages;if(typeof e.input.messages=="string")return[e.input.messages];if(typeof e.input.messages=="object"&&e.input.messages!==null)return[e.input.messages];if(typeof e.input.message=="string")return[e.input.message];if(typeof e.input.message=="object"&&e.input.message!==null)return[e.input.message];if(typeof e.input.text=="string")return[e.input.text];if(typeof e.input=="string")return[e.input]}if(e.data){if(Array.isArray(e.data.messages))return e.data.messages;if(typeof e.data.messages=="string")return[e.data.messages];if(typeof e.data.messages=="object"&&e.data.messages!==null)return[e.data.messages];if(typeof e.data.message=="string")return[e.data.message];if(typeof e.data.message=="object"&&e.data.message!==null)return[e.data.message];if(typeof e.data.prompt=="string")return[e.data.prompt];if(Array.isArray(e.data.contents))return e.data.contents;if(typeof e.data.content=="string")return[e.data.content];if(typeof e.data.text=="string")return[e.data.text]}return[]}extractAttribution(e){var l,c,u,d,k,p,v,h,f,m,S,x,T,w,$,E,b;if(!e||typeof e!="object")return this.logDebug("attribution: parsedBody is not an object"),{};const t=[],n=g=>{Array.isArray(g)&&t.push(...g)};if(n(e.references),n((l=e.context)==null?void 0:l.references),n((c=e.context)==null?void 0:c.blocks),n((u=e.context)==null?void 0:u.refList),Array.isArray(e.messages))for(const g of e.messages)!g||typeof g!="object"||(n((d=g.context)==null?void 0:d.references),n((k=g.context)==null?void 0:k.blocks),n((p=g.context)==null?void 0:p.refList));if(Array.isArray(e.contents))for(const g of e.contents)!g||typeof g!="object"||(n((v=g.context)==null?void 0:v.references),n((h=g.context)==null?void 0:h.blocks),n((f=g.context)==null?void 0:f.refList));e.content&&typeof e.content=="object"&&(n((m=e.content.context)==null?void 0:m.references),n((S=e.content.context)==null?void 0:S.blocks),n((x=e.content.context)==null?void 0:x.refList)),e.msg&&typeof e.msg=="object"&&(n((T=e.msg.context)==null?void 0:T.references),n((w=e.msg.context)==null?void 0:w.blocks),n(($=e.msg.context)==null?void 0:$.refList));let s,o,a;const r=[];for(const g of t){if(!g||typeof g!="object")continue;const R=g.id||g.blockId||g.blockID||g.block_id;typeof R=="string"&&R&&r.push(R);const I=g.box||g.notebookId||g.notebook||g.notebook_id;s===void 0&&typeof I=="string"&&I&&(s=I);const U=g.rootID||g.rootId||g.root_id||g.docId||g.docID||g.doc_id;o===void 0&&typeof U=="string"&&U&&(o=U);const N=g.hpath||g.path||g.name||g.title||g.hPath;a===void 0&&typeof N=="string"&&N&&(a=N)}s===void 0&&typeof e.box=="string"&&e.box&&(s=e.box),o===void 0&&typeof e.rootID=="string"&&e.rootID&&(o=e.rootID),o===void 0&&typeof e.rootId=="string"&&e.rootId&&(o=e.rootId),a===void 0&&typeof e.hpath=="string"&&e.hpath&&(a=e.hpath),a===void 0&&typeof e.path=="string"&&e.path&&(a=e.path),r.length===0&&typeof e.id=="string"&&e.id&&r.push(e.id);const i={};return s&&(i.notebookId=s),o&&(i.docId=o),a&&(i.docPath=a),r.length>0&&(i.blockIds=r),this.logDebug("attribution:",{topRefs:Array.isArray(e.references)?e.references.length:0,contextRefs:Array.isArray((E=e.context)==null?void 0:E.references)?(b=e.context)==null?void 0:b.references.length:0,msgRefs:Array.isArray(e.messages)?e.messages.reduce((g,R)=>{var I;return g+(Array.isArray((I=R==null?void 0:R.context)==null?void 0:I.references)?R.context.references.length:0)},0):0,collected:t.length,firstRef:t[0]?JSON.stringify(t[0]).slice(0,240):void 0,result:i}),i}async analyzeResponse(e,t,n,s,o=!0){let a=0,r=0,i,l,c=t.model,u=!0,d,k;const p=this.tokenCounter.hasMultimodal(this.extractMessages(s)),v=this.extractAttribution(s),h=(e.headers.get("content-type")||"").toLowerCase(),f=this.store.getSettings();if(!c||xe(c)){const x=await this.resolveSiYuanModelNameIfNeeded(t.source);x&&(c=x)}const m=this.tokenCounter.estimateFromMessages(this.extractMessages(s));if(this.logDebug("analyzeResponse",{url:t.source,contentType:h,ok:e.ok,status:e.status,estimatedInput:m,bodyPreview:JSON.stringify(s).slice(0,200)}),!e.body){this.logDebug("analyzeResponse: response body is null, using input estimate only"),a=m,r=0,this.recordCall(t,a,r,n,o,c,void 0,!0,void 0,void 0,void 0,void 0,!1);return}try{if(h.includes("text/event-stream")){const x=await this.parseSSEStream(e,t,f,m);a=x.inputTokens,r=x.outputTokens,i=x.cacheReadTokens,l=x.cacheCreationTokens,u=x.estimated,x.model&&(c=x.model),x.aborted&&(o=!1),x.rawUsage&&(d=x.rawUsage),x.reasoningTokens&&(k=x.reasoningTokens)}else if(h.includes("application/json")||h.includes("text/json")){const x=await e.text();this.logDebug("JSON response raw text preview:",x.slice(0,300));const T=this.tryParseJson(x);if(Ke(T)&&typeof T.data!="string"){this.logDebug("Skipping SiYuan kernel non-AI response",{code:T.code,dataKeys:Object.keys(T.data||{})});return}const w=T?this.extractUsage(T):null;w&&(a=w.inputTokens,r=w.outputTokens,i=w.cacheReadTokens||void 0,l=w.cacheCreationTokens||void 0,T!=null&&T.usage&&(d=T.usage)),T!=null&&T.model&&(c=X(T.model,c)||c),w||(a=m,r=this.tokenCounter.estimateFromText(T?this.extractOutputText(T):x)),u=!w}else if(h.includes("application/x-ndjson")||h.includes("application/ndjson")){const x=await this.parseNDJSONStream(e,t,f,m);a=x.inputTokens,r=x.outputTokens,i=x.cacheReadTokens,l=x.cacheCreationTokens,u=x.estimated,x.model&&(c=x.model),x.aborted&&(o=!1),x.rawUsage&&(d=x.rawUsage)}else if(h.includes("text/plain")||h.includes("text/html")||h.includes("application/xml")||h.includes("text/xml")){const x=await e.text();a=m,r=this.tokenCounter.estimateFromText(x)}else{const x=await e.text();this.logDebug("Unknown content type, raw response preview:",x.slice(0,300)),a=m;const T=this.tryParseJson(x);if(T){const w=this.extractUsage(T);w?(a=w.inputTokens,r=w.outputTokens,i=w.cacheReadTokens||void 0,T.usage&&(d=T.usage)):r=this.tokenCounter.estimateFromText(this.extractOutputText(T))}else r=this.tokenCounter.estimateFromText(x)}}catch(x){console.warn("[TokenStats] Token extraction failed, using estimates:",x),a=m;try{const T=await e.text();r=this.tokenCounter.estimateFromText(T)}catch{r=0}}o&&a===0&&m>0&&(a=m),this.logDebug("analyzeResponse result:",{inputTokens:a,outputTokens:r,model:c,success:o});const S=a+r;this.recordCall(t,a,r,n,o,c,i,u,d,v,k,l,p&&u),S>0&&f.showNotifications&&(this.keyManager.checkThreshold(t.apiKeyId,x=>{this.onThresholdAlert(t.apiKeyId,x)}),this.keyManager.checkGlobalThreshold(f,x=>{this.onThresholdAlert("global",x)}))}async parseSSEStream(e,t,n,s=0){var k;const o=(k=e.body)==null?void 0:k.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1,estimated:!0};const a=new TextDecoder;let r="";const i={fullContent:"",reasoningText:"",usage:null,model:void 0,rawUsage:void 0};let l=0,c=!1;const u=p=>{const v=p.split(`
`),h=[];let f="";for(const S of v){const x=S.trim();x&&(x.startsWith("data:")?h.push(x.slice(5).trimStart()):x.startsWith("event:")&&(f=x.slice(6).trim()))}if(h.length===0)return;const m=h.join(`
`);if(this.logDebug("SSE raw event",{eventType:f,data:m.slice(0,500)}),m!=="[DONE]")try{const S=JSON.parse(m);if(this.logDebug("SSE parsed chunk",{eventType:f,chunk:S}),typeof S!="object"||S===null)return;f==="reasoning"&&typeof S.token=="string"?i.reasoningText+=S.token:f==="thinking"&&typeof S.reasoning=="string"&&(i.reasoningText+=S.reasoning);const x=this.collectChunkInfo(S,i.usage,i.model,i.fullContent,f),T=i.fullContent.length;i.usage=this.mergeUsage(i.usage,x.usage),i.model=x.model,i.fullContent=x.fullContent,x.rawUsage&&(i.rawUsage=x.rawUsage),this.logDebug("SSE collected after chunk",{eventType:f,contentAdded:i.fullContent.length-T,fullContentLength:i.fullContent.length,usage:i.usage})}catch(S){this.logDebug("SSE chunk JSON parse failed",{eventType:f,data:m.slice(0,300),error:String(S)})}};try{for(;;){const{done:p,value:v}=await o.read();if(p)break;r+=a.decode(v,{stream:!0}),this.logDebug("SSE buffer received",{bufferLength:r.length,decodedLength:(v==null?void 0:v.length)??0});const{events:h,remainder:f}=this.splitSSEEvents(r);r=f,this.logDebug("SSE events split",{eventCount:h.length,remainderLength:f.length});for(const m of h)u(m);if(n.abortStreamOnExceeded&&n.blockOnQuotaExceeded){if(l=i.usage?i.usage.outputTokens:this.tokenCounter.estimateFromText(i.fullContent),this.keyManager.wouldExceedQuota(t.apiKeyId,l)){c=!0;const m=this.store.getApiKey(t.apiKeyId),S=`[TokenStats] 流式响应已中断：${(m==null?void 0:m.name)||t.apiKeyName} 的 Token 限额在生成过程中被超出`;console.warn(S),this.onThresholdAlert(t.apiKeyId,S);try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(n,l)){c=!0;const m="[TokenStats] 流式响应已中断：全局 Token 限额在生成过程中被超出";console.warn(m),this.onThresholdAlert("global",m);try{await o.cancel()}catch{}break}}}if(r.trim().length>0){const{events:p}=this.splitSSEEvents(r+`

`);for(const v of p)u(v)}}finally{o.releaseLock()}if(this.logDebug("parseSSEStream finished",{contentLength:i.fullContent.length,hasUsage:!!i.usage,usage:i.usage,estimatedInput:s}),i.usage){const p=this.tokenCounter.estimateFromText(i.fullContent);return{inputTokens:i.usage.inputTokens||s,outputTokens:i.usage.outputTokens||p,cacheReadTokens:i.usage.cacheReadTokens||void 0,cacheCreationTokens:i.usage.cacheCreationTokens||void 0,model:i.model,aborted:c,rawUsage:i.rawUsage,estimated:!1,reasoningTokens:this.tokenCounter.estimateFromText(i.reasoningText)||void 0}}const d=this.tokenCounter.estimateFromText(i.fullContent);return{inputTokens:s,outputTokens:d,model:i.model,aborted:c,rawUsage:i.rawUsage,estimated:!0,reasoningTokens:this.tokenCounter.estimateFromText(i.reasoningText)||void 0}}splitSSEEvents(e){const t=[],s=e.replace(/\r\n/g,`
`).split(`

`),o=s.pop()||"";for(const a of s)a.trim()&&t.push(a);return{events:t,remainder:o}}mergeUsage(e,t){return t?e?{inputTokens:Math.max(e.inputTokens,t.inputTokens),outputTokens:Math.max(e.outputTokens,t.outputTokens),cacheReadTokens:Math.max(e.cacheReadTokens||0,t.cacheReadTokens||0),cacheCreationTokens:Math.max(e.cacheCreationTokens||0,t.cacheCreationTokens||0)}:t:e}collectChunkInfo(e,t,n,s,o=""){var c,u,d,k,p,v,h,f,m,S,x,T,w,$,E,b,g,R,I,U,N,_,D,G,Q,A,L,Y,q,F,B,J,H,W;const a=(...C)=>{const j=X(...C);if(j)return j;const z=re(n);return z&&!se(z)?z:""};let r;if(e.model&&(n=a(e.model,n)),o==="content"||o==="reasoning")return e.token&&(s+=e.token,this.logDebug("SiYuan agent content appended",{token:e.token})),{usage:t,model:n,fullContent:s};if(o==="thinking")return e.reasoning&&(s+=e.reasoning,this.logDebug("SiYuan agent thinking appended",{reasoning:e.reasoning})),{usage:t,model:n,fullContent:s};if(o==="usage"){const C=e.promptTokens??e.prompt_tokens??0,j=e.lastPromptTokens??0,z=e.completionTokens??e.completion_tokens??0;return this.logDebug("SiYuan agent usage event",{promptTokens:C,lastPromptTokens:j,completionTokens:z,chunk:e}),(C>0||z>0)&&(t={inputTokens:j>0&&(C===0||j<=C)?j:C,outputTokens:z,cacheReadTokens:e.cachedTokens??e.cacheReadTokens??e.cachedInputTokens??0,cacheCreationTokens:0},r=e),{usage:t,model:n,fullContent:s,rawUsage:r}}if(o==="done"||o==="error"||o==="retry"||o==="snapshot"||o==="tool_call"||o==="tool_result"||o==="confirm"||o==="question"||o==="frontend_tool_call")return{usage:t,model:n,fullContent:s};if(e.usage){const C=e.usage,j=C.cached_input_tokens??C.cache_read_input_tokens??((c=C.prompt_tokens_details)==null?void 0:c.cached_tokens)??0,z=C.cache_creation_input_tokens??C.cache_creation_tokens??0;t={inputTokens:C.prompt_tokens??C.input_tokens??C.promptTokens??0,outputTokens:C.completion_tokens??C.output_tokens??C.completionTokens??0,cacheReadTokens:j,cacheCreationTokens:z},r=e.usage}const i=C=>{typeof C=="string"&&(s+=C)},l=(u=e.choices)==null?void 0:u[0];if((d=l==null?void 0:l.delta)!=null&&d.content&&i(l.delta.content),l!=null&&l.text&&i(l.text),(k=l==null?void 0:l.delta)!=null&&k.reasoning_content&&i(l.delta.reasoning_content),(p=l==null?void 0:l.message)!=null&&p.content&&i(l.message.content),l!=null&&l.content&&i(l.content),(h=(v=l==null?void 0:l.delta)==null?void 0:v.function_call)!=null&&h.arguments&&i(l.delta.function_call.arguments),(f=l==null?void 0:l.delta)!=null&&f.tool_calls)for(const C of l.delta.tool_calls)(m=C==null?void 0:C.function)!=null&&m.arguments&&i(C.function.arguments);if(e.type==="content_block_delta"&&((S=e.delta)!=null&&S.text)&&i(e.delta.text),e.type==="content_block_delta"&&((x=e.delta)!=null&&x.reasoning)&&i(e.delta.reasoning),e.type==="content_block_start"&&((T=e.content_block)!=null&&T.text)&&i(e.content_block.text),(w=e.message)!=null&&w.usage){const C=e.message.usage,j=C.cache_read_input_tokens??0,z=C.cache_creation_input_tokens??0;t={inputTokens:C.input_tokens??0,outputTokens:C.output_tokens??0,cacheReadTokens:j,cacheCreationTokens:z},r=e.message.usage}if(e.content){if(typeof e.content=="string")i(e.content);else if(Array.isArray(e.content))for(const C of e.content)i(typeof C=="string"?C:C==null?void 0:C.text)}if(e.output&&i(e.output),e.text&&i(e.text),e.result&&i(e.result),e.message&&(typeof e.message=="string"?i(e.message):e.message.content&&i(e.message.content)),(g=(b=(E=($=e.data)==null?void 0:$.choices)==null?void 0:E[0])==null?void 0:b.delta)!=null&&g.content&&i(e.data.choices[0].delta.content),(U=(I=(R=e.data)==null?void 0:R.choices)==null?void 0:I[0])!=null&&U.text&&i(e.data.choices[0].text),(G=(D=(_=(N=e.data)==null?void 0:N.choices)==null?void 0:_[0])==null?void 0:D.message)!=null&&G.content&&i(e.data.choices[0].message.content),(Y=(L=(A=(Q=e.data)==null?void 0:Q.choices)==null?void 0:A[0])==null?void 0:L.delta)!=null&&Y.reasoning_content&&i(e.data.choices[0].delta.reasoning_content),(q=e.data)!=null&&q.model&&(n=a(e.data.model,n)),(F=e.data)!=null&&F.usage){const C=e.data.usage;t={inputTokens:C.prompt_tokens??C.input_tokens??0,outputTokens:C.completion_tokens??C.output_tokens??0,cacheReadTokens:C.cached_input_tokens??C.cache_read_input_tokens??0,cacheCreationTokens:C.cache_creation_input_tokens??0},r=e.data.usage}if((B=e.data)!=null&&B.content){if(typeof e.data.content=="string")i(e.data.content);else if(Array.isArray(e.data.content))for(const C of e.data.content)i(typeof C=="string"?C:C==null?void 0:C.text)}return(J=e.data)!=null&&J.output&&i(e.data.output),(H=e.data)!=null&&H.text&&i(e.data.text),(W=e.data)!=null&&W.result&&i(e.data.result),{usage:t,model:n,fullContent:s,rawUsage:r}}async parseNDJSONStream(e,t,n,s=0){var k;const o=(k=e.body)==null?void 0:k.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1,estimated:!0};const a=new TextDecoder;let r="",i="",l=null,c,u=!1,d;try{for(;;){const{done:p,value:v}=await o.read();if(p)break;r+=a.decode(v,{stream:!0});const h=r.split(`
`);r=h.pop()||"";for(const f of h)if(f.trim())try{const m=JSON.parse(f),S=this.collectChunkInfo(m,l,c,i);l=this.mergeUsage(l,S.usage),c=S.model,i=S.fullContent,S.rawUsage&&(d=S.rawUsage)}catch{}if(n.abortStreamOnExceeded&&n.blockOnQuotaExceeded){const f=l?l.outputTokens:this.tokenCounter.estimateFromText(i);if(this.keyManager.wouldExceedQuota(t.apiKeyId,f)){u=!0;try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(n,f)){u=!0;try{await o.cancel()}catch{}break}}}if(r.trim())try{const p=JSON.parse(r.trim()),v=this.collectChunkInfo(p,l,c,i);l=v.usage,c=v.model,i=v.fullContent,v.rawUsage&&(d=v.rawUsage)}catch{}}finally{o.releaseLock()}if(this.logDebug("parseNDJSONStream finished",{contentLength:i.length,hasUsage:!!l,usage:l,estimatedInput:s}),l){const p=this.tokenCounter.estimateFromText(i);return{inputTokens:l.inputTokens||s,outputTokens:l.outputTokens||p,cacheReadTokens:l.cacheReadTokens||void 0,cacheCreationTokens:l.cacheCreationTokens||void 0,model:c,aborted:u,rawUsage:d,estimated:!1}}return{inputTokens:s,outputTokens:this.tokenCounter.estimateFromText(i),model:c,aborted:u,rawUsage:d,estimated:!0}}extractUsage(e){var t;if(e!=null&&e.usage){const n=e.usage,s=n.prompt_tokens??n.input_tokens??n.promptTokens??0,o=n.completion_tokens??n.output_tokens??n.completionTokens??0,a=n.cached_input_tokens??n.cache_read_input_tokens??((t=n.prompt_tokens_details)==null?void 0:t.cached_tokens)??0,r=n.cache_creation_input_tokens??n.cache_creation_tokens??0;return s===0&&o===0&&a===0&&r===0?null:{inputTokens:s,outputTokens:o,cacheReadTokens:a,cacheCreationTokens:r}}if((e==null?void 0:e.promptTokens)!==void 0||(e==null?void 0:e.completionTokens)!==void 0){const n=e.promptTokens??0,s=e.lastPromptTokens??0,o=s>0&&(n===0||s<=n)?s:n,a=e.completionTokens??0,r=e.cachedTokens??e.cacheReadTokens??e.cachedInputTokens??0;return o===0&&a===0?null:{inputTokens:o,outputTokens:a,cacheReadTokens:r,cacheCreationTokens:0}}return null}extractOutputText(e){var o,a,r,i,l,c,u;if(!e)return"";const t=[],n=d=>{typeof d=="string"&&d?t.push(d):d&&typeof d.text=="string"&&d.text&&t.push(d.text)},s=d=>{var k,p,v,h,f,m,S,x;if(d&&(n((k=d==null?void 0:d.message)==null?void 0:k.content),n((p=d==null?void 0:d.message)==null?void 0:p.reasoning_content),n((v=d==null?void 0:d.delta)==null?void 0:v.content),n((h=d==null?void 0:d.delta)==null?void 0:h.reasoning_content),n(d==null?void 0:d.text),n(d==null?void 0:d.content),(m=(f=d==null?void 0:d.delta)==null?void 0:f.function_call)!=null&&m.arguments&&n(d.delta.function_call.arguments),(S=d==null?void 0:d.delta)!=null&&S.tool_calls))for(const T of d.delta.tool_calls)(x=T==null?void 0:T.function)!=null&&x.arguments&&n(T.function.arguments)};if(e.choices)for(const d of e.choices)s(d);if(e.content){if(typeof e.content=="string")n(e.content);else if(Array.isArray(e.content))for(const d of e.content)n(d)}if(e.output&&n(e.output),e.text&&n(e.text),e.result&&n(e.result),e.message&&(typeof e.message=="string"?n(e.message):(n(e.message.content),n(e.message.text))),e.response&&(typeof e.response=="string"?n(e.response):e.response.text?n(e.response.text):e.response.content&&n(e.response.content)),e.data)if(typeof e.data=="string")n(e.data);else{if(n((o=e.data)==null?void 0:o.text),n((a=e.data)==null?void 0:a.output),n((r=e.data)==null?void 0:r.result),n((i=e.data)==null?void 0:i.msg),(l=e.data)!=null&&l.choices)for(const d of e.data.choices)s(d);if((c=e.data)!=null&&c.content)if(typeof e.data.content=="string")n(e.data.content);else if(Array.isArray(e.data.content))for(const d of e.data.content)n(d);else n(e.data.content);(u=e.data)!=null&&u.message&&(n(e.data.message.content),n(e.data.message.text))}return e.msg&&n(e.msg),e.token&&n(e.token),e.reasoning&&n(e.reasoning),t.join("")}recordCall(e,t,n,s,o,a,r,i=!0,l,c,u,d,k){const p=this.resolveModelName(a||e.model,e),v={id:Ee(),apiKeyId:e.apiKeyId,apiKeyName:e.apiKeyName,source:e.source,model:p,inputTokens:t,outputTokens:n,cacheReadTokens:r,cacheCreationTokens:d,totalTokens:t+n,timestamp:s,requestTime:Date.now()-s,success:o,estimated:i,rawUsage:l,reasoningTokens:u,multimodalEstimated:k,notebookId:c==null?void 0:c.notebookId,docId:c==null?void 0:c.docId,docPath:c==null?void 0:c.docPath,blockIds:c==null?void 0:c.blockIds};if(this.store.addRecord(v),this.logDebug(`Recorded: ${v.apiKeyName} | ${v.model} | in=${t} out=${n} cache=${r??0} total=${v.totalTokens} success=${o}`),o&&t===0&&n===0){const h=Date.now();h-ke>6e4&&(ke=h,console.warn("[TokenStats] 本次请求 token 计数为 0。若持续出现，请在设置中开启“启用调试日志”，并在浏览器控制台中查看请求/响应详情。"))}}resolveModelName(e,t){var a;const n=[];n.push(e,t.model),this.isSiYuanAiSource(t.source)&&n.push(this.resolveSiYuanModelNameFromConfig((a=this.siyuanConfigCache)==null?void 0:a.config));const s=X(...n);return s||re(e)||re(t.model)||t.source||"unknown"}async resolveSiYuanModelNameIfNeeded(e){return this.isSiYuanAiSource(e)?this.getSiYuanModelName():null}isSiYuanAiSource(e){return e==="siyuan-ai"||e.includes("/api/ai/")}async getSiYuanAiConfig(){var e,t;if(this.siyuanConfigCache&&Date.now()-this.siyuanConfigCache.ts<5e3)return this.siyuanConfigCache.config;try{const n=window.siyuan,s=(e=n==null?void 0:n.config)==null?void 0:e.ai;if(s)return this.siyuanConfigCache={config:s,ts:Date.now()},s;const o=await this.originalFetch("/api/system/getConf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});if(!o.ok)return null;const a=await o.json(),r=((t=a==null?void 0:a.data)==null?void 0:t.ai)||(a==null?void 0:a.ai);if(r)return this.siyuanConfigCache={config:r,ts:Date.now()},r}catch{}return null}findProviderByModel(e,t){if(!e||!t)return null;const n=String(t).toLowerCase().trim();if(!n)return null;const s=e.providers||[];for(const o of s){if(!o||!o.enabled)continue;if((o.models||[]).find(r=>{const i=String((r==null?void 0:r.id)||"").toLowerCase().trim(),l=String((r==null?void 0:r.name)||"").toLowerCase().trim(),c=String((r==null?void 0:r.displayName)||"").toLowerCase().trim();return i===n||l===n||c===n}))return o}return null}resolveSiYuanModelNameFromConfig(e){var r,i;if(!e)return null;const t=e.agent||{},n=e.editing||{},s=t.modelId||n.modelId,o=t.modelName||t.displayName||t.name||n.modelName||n.displayName||n.name;if(o&&!se(o))return o;const a=e.providers||[];if(s)for(const l of a){if(!(l!=null&&l.enabled))continue;const c=(l.models||[]).find(u=>(u==null?void 0:u.id)===s);if(c)return c.displayName||c.name||c.id||null}for(const l of a){if(!(l!=null&&l.enabled))continue;const c=((r=l.models)==null?void 0:r.find(u=>u==null?void 0:u.default))||((i=l.models)==null?void 0:i[0]);if(c)return c.displayName||c.name||c.id||null;if(l.name&&!se(l.name))return l.name}return s&&!se(s)?s:null}resolveModelNameFromProvider(e){if(!(e!=null&&e.models)||!Array.isArray(e.models))return null;const t=e.models.find(n=>n==null?void 0:n.default)||e.models[0];return t&&X(t.displayName,t.name,t.id)||null}async getSiYuanModelName(){return this.resolveSiYuanModelNameFromConfig(await this.getSiYuanAiConfig())}}function O(y){return y?y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}class Oe{constructor(e,t){this.onManualSync=null,this.store=e,this.keyManager=t,this.setting=this.build()}build(){const e=this,t=new M.Setting({width:this.isMobile()?"92vw":"700px",height:"auto",confirmCallback:()=>{e.saveGlobalSettings(),M.showMessage("设置已保存",2e3,"info")}});setTimeout(()=>this.ensureDialogScrollable(),0);const n=this.store.getSettings();return t.addItem({title:"按 API Base URL 匹配 Key",description:"拦截请求时优先按 URL 匹配已配置的 API Key，适用于思源 AI、自定义代理等场景",createActionElement:()=>this.createCheckbox("matchByUrl",n.matchByUrl??!0)}),t.addItem({title:"拦截外部 API 调用",description:"拦截第三方插件对 OpenAI / Anthropic / DeepSeek 等外部 API 的直接调用",createActionElement:()=>this.createCheckbox("interceptExternalAPIs",n.interceptExternalAPIs)}),t.addItem({title:"超出限额时阻止请求",description:"当某个 API Key 的 Token 用量达到限额时，阻止后续请求（谨慎开启）",createActionElement:()=>this.createCheckbox("blockOnQuotaExceeded",n.blockOnQuotaExceeded)}),t.addItem({title:"限额重置周期",description:"按周期自动重置 Token 用量统计。每月 = 每月 1 日归零，每日 = 每天归零",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-quotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,n.quotaResetCycle===a.value&&(r.selected=!0),s.appendChild(r)}return s}}),t.addItem({title:"自定义周期天数（天）",description:"单 Key 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）。例如 14 = 每两周、90 = 每季。下方全局周期也共用此天数。",createActionElement:()=>this.createCustomDaysInput("tks-customResetDays")}),t.addItem({title:"流式响应中途超限时中断",description:"当流式 AI 响应生成过程中 Token 超出限额时，立即中断流（避免继续消耗）",createActionElement:()=>this.createCheckbox("abortStreamOnExceeded",n.abortStreamOnExceeded)}),t.addItem({title:"显示阈值提醒通知",description:"当 Token 用量达到设定的提醒阈值时，在思源底部弹出通知",createActionElement:()=>this.createCheckbox("showNotifications",n.showNotifications)}),t.addItem({title:"顶栏显示实时用量徽标",description:"在顶栏图标上显示当前全局用量（无全局限额时显示总 token 数，设有全局限额时显示百分比，颜色随阈值变化）",createActionElement:()=>this.createCheckbox("showTopBarBadge",n.showTopBarBadge)}),t.addItem({title:"启用调试日志",description:"在浏览器控制台输出请求/响应调试信息，排查 token 统计为 0 等问题（重启插件后生效）",createActionElement:()=>this.createCheckbox("debugLogging",n.debugLogging??!1)}),t.addItem({title:"最大记录数",description:"保留的最近调用记录数量，超出后自动裁剪旧记录（节省存储空间）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-max-records",s.value=String(n.maxRecords),s.min="100",s.max="50000",s.step="100",s}}),t.addItem({title:"诊断日志导出条数",description:"仪表盘「导出原始 usage 日志」时，最多导出最近 N 条带原始 usage 的记录（0 = 全部导出）。原始 usage 来自 API 供应商响应、未做任何裁剪，用于排查用量统计偏差。",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-diagnosticExportCount",s.value=String(n.diagnosticExportCount??50),s.min="0",s.max="500",s.step="10",s}}),t.addItem({title:"全局总 Token 限额",description:"所有 API Key 的 Token 用量总和超过此值时触发拦截（0 = 不开启）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalQuotaLimit",s.value=String(n.globalQuotaLimit||0),s.min="0",s.step="1000",s}}),t.addItem({title:"全局提醒阈值 (%)",description:"全局 Token 用量达到此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalAlertThreshold",s.value=String(n.globalAlertThreshold||0),s.min="0",s.max="100",s.step="5",s}}),t.addItem({title:"全局限额重置周期",description:"按周期自动重置全局 Token 用量统计",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-globalQuotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,n.globalQuotaResetCycle===a.value&&(r.selected=!0),s.appendChild(r)}return s}}),t.addItem({title:"全局周期自定义天数（天）",description:"全局 Token 限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方单 Key 周期共用同一天数",createActionElement:()=>this.createCustomDaysInput("tks-globalQuotaResetDays")}),t.addItem({title:"全局已用 Token 校准",description:"手动输入从第三方平台导入的历史已用 Token，叠加到全局统计中（0 = 不校准）",createActionElement:()=>{const s=document.createElement("div");s.style.display="flex",s.style.gap="8px",s.style.alignItems="center";const o=(a,r,i)=>{const l=document.createElement("div");l.style.flex="1";const c=document.createElement("div");c.style.fontSize="12px",c.style.color="var(--b3-theme-on-surface)",c.textContent=r;const u=document.createElement("input");return u.type="number",u.className="b3-text-field",u.id=`tks-${a}`,u.value=String(i||0),u.min="0",u.step="100",u.style.width="100%",l.appendChild(c),l.appendChild(u),l};return s.appendChild(o("globalUsedTokensOffset","总 Token",n.globalUsedTokensOffset)),s.appendChild(o("globalUsedInputTokensOffset","输入",n.globalUsedInputTokensOffset)),s.appendChild(o("globalUsedOutputTokensOffset","输出",n.globalUsedOutputTokensOffset)),s}}),t.addItem({title:"全局费用限额",description:"当前周期内所有 API 调用的估算总费用超过此金额时触发提醒与拦截（0 = 不开启；需先在「费用估算配置」中设置模型单价）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalCostLimit",s.value=String(n.globalCostLimit||0),s.min="0",s.step="1",s}}),t.addItem({title:"全局费用提醒阈值 (%)",description:"全局费用达到限额的此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalCostAlertThreshold",s.value=String(n.globalCostAlertThreshold||0),s.min="0",s.max="100",s.step="5",s}}),t.addItem({title:"全局费用重置周期",description:"按周期自动重置全局费用用量统计（独立于「全局限额重置周期」，可与 Token 限额采用不同节奏）",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-globalCostResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"custom",label:"自定义（天）"},{value:"none",label:"永不重置"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,n.globalCostResetCycle===a.value&&(r.selected=!0),s.appendChild(r)}return s}}),t.addItem({title:"全局费用周期自定义天数（天）",description:"全局费用限额选「自定义（天）」时生效，统计最近 N 个自然日的用量（含当天）；与上方周期共用同一天数",createActionElement:()=>this.createCustomDaysInput("tks-globalCostResetDays")}),t.addItem({title:"全局已用费用校准",description:"手动输入从第三方平台导入的历史已花费金额，叠加到全局费用统计中（0 = 不校准；单位与货币类型一致）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalUsedCostOffset",s.value=String(n.globalUsedCostOffset||0),s.min="0",s.step="1",s}}),t.addItem({title:"费用估算配置",description:"设置每模型单价（每 1K tokens 的输入/输出价格）与资源包（一个包涵盖多个模型），仪表盘将显示估算费用。注意：费用估算完全依赖此处配置，单价 / 资源包填错会显著放大费用误差，请以 API 服务商账单为准；使用前请先阅读 README「统计精度与免责声明」章节",actionElement:this.createButton("配置",()=>this.openPriceEditor())}),t.addItem({title:"API Key 管理",description:"添加、编辑、删除 API Key，为每个 Key 设置限额与提醒阈值",actionElement:this.createButton("管理 API Key",()=>this.openKeyManager())}),t.addItem({title:"仪表盘区分精确/估算",description:"开启后，仪表盘「总 Tokens」卡片将拆分展示「精确值（来自 API 响应 usage 字段）」与「启发式估算」各自的 Token 量，便于评估统计可信度。仅 v1.4.19 及以后新增的记录可区分；旧版本记录无此标记，统一计入估算。",createActionElement:()=>this.createCheckbox("dashboardSplitExactEstimate",n.dashboardSplitExactEstimate??!1)}),t.addItem({title:"跨端统计合并",description:"开启后，各端（电脑 / 鸿蒙 / 浏览器）通过思源数据同步共享同一套 API Key 时，自动按记录合并多方 Token 用量，汇总到每一端；关闭则仅统计本端。",createActionElement:()=>this.createCheckbox("syncStatistics",n.syncStatistics??!0)}),t.addItem({title:"立即同步统计",description:"触发思源云同步（通过官方内核 API /api/sync/performSync）并合并其他端的统计记录（例如手机端一键拉取电脑端历史数据），不受上方开关限制。需先在思源「设置 - 关于 - 云端」中配置并启用云同步（已登录 S3/WebDAV 等存储服务）。若思源未配置云同步，则只合并本地已有数据。",actionElement:this.createButton("立即同步",()=>this.handleManualSync())}),t.addItem({title:"仪表盘免责提示",description:"本插件统计数据与各 API 供应商官方账单可能存在误差（原因包括：部分请求未被拦截、单价配置偏差、启发式估算精度限制、云同步合并延迟等），请以 API 供应商的统计及账单为准。开启时，仪表盘面板顶部会常驻显示橙色免责横幅；关闭后横幅不再显示。注意：仪表盘内的「本次不再提示」按钮仅隐藏当前会话（重启思源后自动恢复），而此处开关为永久关闭。",createActionElement:()=>{const s=this.createCheckbox("showDisclaimer",n.showDisclaimer??!0);return s.addEventListener("change",()=>{s.checked?this.store.updateSettings({showDisclaimer:!0}):M.confirm("关闭免责提示",`关闭后仪表盘将不再显示本免责提示。

本插件统计数据仅供参考，实际用量与费用请以各 API 供应商的官方账单为准。使用本插件即代表您认可统计结果可能存在误差。

是否确认关闭？`,()=>{this.store.updateSettings({showDisclaimer:!1})},()=>{s.checked=!0})}),s}}),t.addItem({title:"导出统计数据",description:"将所有统计数据导出为 JSON 文件",actionElement:this.createButton("导出",()=>this.exportData())}),t.addItem({title:"清除调用记录",description:"删除所有 Token 调用记录，但保留 API Key 配置",actionElement:this.createButton("清除记录",()=>this.clearRecords())}),t.addItem({title:"重置全部数据",description:"清除所有调用记录并恢复默认设置，API Key 配置保留不变",actionElement:this.createButton("重置",()=>this.resetAll())}),t.addItem({title:"显示高级数据洞察",description:"总开关：关闭后仪表盘回归简洁核心视图，隐藏月末预测 / 异常检测 / 优化建议 / 笔记归因。需要时再打开。",createActionElement:()=>this.createCheckbox("showAdvancedDashboard",n.showAdvancedDashboard!==!1)}),t.addItem({title:"月末预测",description:"仪表盘展示「预计月末费用 / Token」及与全局限额的进度对比",createActionElement:()=>this.createCheckbox("enableForecast",n.enableForecast!==!1)}),t.addItem({title:"预测方法",description:"线性外推=按已用日均推算；最近趋势=按最近 N 日均值推算（更贴合近期变化）",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-forecastMethod";const o=[{value:"recentTrend",label:"最近趋势（默认）"},{value:"linear",label:"线性外推"}];for(const a of o){const r=document.createElement("option");r.value=a.value,r.textContent=a.label,(n.forecastMethod||"recentTrend")===a.value&&(r.selected=!0),s.appendChild(r)}return s}}),t.addItem({title:"趋势窗口天数",description:"「最近趋势」方法使用的回溯天数（默认 7）",createActionElement:()=>this.createNumberInput("forecastWindowDays",n.forecastWindowDays||7,1,90,1)}),t.addItem({title:"异常检测",description:"仪表盘列出用量离群日（Token / 费用 / 请求数突增）",createActionElement:()=>this.createCheckbox("enableAnomaly",n.enableAnomaly!==!1)}),t.addItem({title:"异常敏感度",description:"标准差倍数阈值，越大越宽松（默认 2.5，即超过均值 2.5 个标准差才报警）",createActionElement:()=>this.createNumberInput("anomalySensitivity",n.anomalySensitivity||2.5,1.5,6,.1)}),t.addItem({title:"异常回溯天数",description:"异常检测统计的回溯窗口（默认 30 天，至少 3 天）",createActionElement:()=>this.createNumberInput("anomalyLookbackDays",n.anomalyLookbackDays||30,3,365,1)}),t.addItem({title:"优化建议",description:"仪表盘基于数据给出降本 / 提效建议（缓存命中率、估算占比、高价模型、用量集中等）",createActionElement:()=>this.createCheckbox("enableSuggestions",n.enableSuggestions!==!1)}),t.addItem({title:"笔记归因",description:"在高级视图中展示「按文档 Token 消耗」排行。数据采集始终后台进行（零额外成本），此开关仅控制是否显示面板。",createActionElement:()=>this.createCheckbox("enableNoteAttribution",n.enableNoteAttribution!==!1)}),t.addItem({title:"归因显示条数",description:"笔记归因排行展示 Top N 条（默认 10，替换原硬编码上限 10）",createActionElement:()=>this.createNumberInput("attributionTopN",n.attributionTopN||10,1,50,1)}),t.addItem({title:"Token 数字格式",description:"仪表盘大数字显示方式：auto=自动用「万/亿」后缀（推荐，紧凑）；full=始终显示完整数字",createActionElement:()=>{const s=document.createElement("select");return s.id="tks-tokenDisplayUnit",s.className="b3-select",["auto","full"].forEach(o=>{const a=document.createElement("option");a.value=o,a.textContent=o==="auto"?"自动（万/亿）":"完整数字",(n.tokenDisplayUnit||"auto")===o&&(a.selected=!0),s.appendChild(a)}),s}}),t}createCheckbox(e,t){const n=document.createElement("input");return n.type="checkbox",n.id=`tks-${e}`,n.className="b3-switch",n.checked=t,n}createButton(e,t){const n=document.createElement("button");return n.className="b3-button b3-button--outline",n.textContent=e,n.style.fontSize="14px",n.addEventListener("click",t),n}createCustomDaysInput(e){const t=document.createElement("input");t.type="number",t.className="b3-text-field fn__size200",t.id=e,t.value=String(this.store.getSettings().customResetDays||30),t.min="1",t.max="365",t.step="1";const n=["tks-customResetDays","tks-globalQuotaResetDays","tks-globalCostResetDays"];return t.addEventListener("input",()=>{const s=t.value;for(const o of n){if(o===e)continue;const a=document.getElementById(o);a&&a.value!==s&&(a.value=s)}}),t}createNumberInput(e,t,n,s,o=1){const a=document.createElement("input");return a.type="number",a.className="b3-text-field fn__size200",a.id=`tks-${e}`,a.value=String(t),n!==void 0&&(a.min=String(n)),s!==void 0&&(a.max=String(s)),a.step=String(o),a}async handleManualSync(){const e=document.activeElement;e&&(e.disabled=!0,e.textContent="同步中…");try{if(!this.onManualSync){M.showMessage("同步功能未就绪",2e3,"error");return}await this.onManualSync()}catch{M.showMessage("同步失败，请确认思源数据同步已开启",3e3,"error")}finally{e&&(e.disabled=!1,e.textContent="立即同步")}}saveGlobalSettings(){var N,_,D,G,Q,A,L,Y,q,F,B,J;const e=H=>{var W;return((W=document.getElementById(`tks-${H}`))==null?void 0:W.checked)??!1},t=parseInt(((N=document.getElementById("tks-max-records"))==null?void 0:N.value)||"5000",10),n=((_=document.getElementById("tks-quotaResetCycle"))==null?void 0:_.value)||"monthly",s=parseInt(((D=document.getElementById("tks-globalQuotaLimit"))==null?void 0:D.value)||"0",10)||0,o=parseInt(((G=document.getElementById("tks-globalAlertThreshold"))==null?void 0:G.value)||"0",10)||0,a=((Q=document.getElementById("tks-globalQuotaResetCycle"))==null?void 0:Q.value)||"monthly",r=H=>{var W;return parseInt(((W=document.getElementById(`tks-${H}`))==null?void 0:W.value)||"0",10)||0},i=Math.max(0,r("globalUsedTokensOffset")),l=Math.max(0,r("globalUsedInputTokensOffset")),c=Math.max(0,r("globalUsedOutputTokensOffset")),u=parseFloat(((A=document.getElementById("tks-globalCostLimit"))==null?void 0:A.value)||"0")||0,d=parseInt(((L=document.getElementById("tks-globalCostAlertThreshold"))==null?void 0:L.value)||"0",10)||0,k=((Y=document.getElementById("tks-globalCostResetCycle"))==null?void 0:Y.value)||"monthly",p=Math.max(0,parseFloat(((q=document.getElementById("tks-globalUsedCostOffset"))==null?void 0:q.value)||"0")||0),v=Math.max(1,r("customResetDays")),h=Math.max(0,r("diagnosticExportCount")),f=e("enableForecast"),m=((F=document.getElementById("tks-forecastMethod"))==null?void 0:F.value)||"recentTrend",S=Math.max(1,r("forecastWindowDays")),x=e("enableAnomaly"),T=Math.max(1.5,parseFloat(((B=document.getElementById("tks-anomalySensitivity"))==null?void 0:B.value)||"2.5")||2.5),w=Math.max(3,r("anomalyLookbackDays")),$=e("enableSuggestions"),E=e("showAdvancedDashboard"),b=e("enableNoteAttribution"),g=Math.max(1,r("attributionTopN")),R=((J=document.querySelector("#tks-tokenDisplayUnit"))==null?void 0:J.value)||"auto",I=s!==this.store.getSettings().globalQuotaLimit||o!==this.store.getSettings().globalAlertThreshold;this.store.updateSettings({matchByUrl:e("matchByUrl"),interceptExternalAPIs:e("interceptExternalAPIs"),blockOnQuotaExceeded:e("blockOnQuotaExceeded"),quotaResetCycle:n,abortStreamOnExceeded:e("abortStreamOnExceeded"),showNotifications:e("showNotifications"),showTopBarBadge:e("showTopBarBadge"),debugLogging:e("debugLogging"),maxRecords:isNaN(t)?5e3:Math.max(100,Math.min(5e4,t)),globalQuotaLimit:Math.max(0,s),globalAlertThreshold:Math.max(0,Math.min(100,o)),globalQuotaResetCycle:a,globalUsedTokensOffset:i,globalUsedInputTokensOffset:l,globalUsedOutputTokensOffset:c,globalCostLimit:Math.max(0,u),globalCostAlertThreshold:Math.max(0,Math.min(100,d)),globalCostResetCycle:k,globalUsedCostOffset:p,customResetDays:v,syncStatistics:e("syncStatistics"),showDisclaimer:e("showDisclaimer"),dashboardSplitExactEstimate:e("dashboardSplitExactEstimate"),diagnosticExportCount:h,enableForecast:f,forecastMethod:m,forecastWindowDays:S,enableAnomaly:x,anomalySensitivity:T,anomalyLookbackDays:w,enableSuggestions:$,showAdvancedDashboard:E,enableNoteAttribution:b,attributionTopN:g,tokenDisplayUnit:R}),I&&this.keyManager.resetGlobalAlert(),(u!==this.store.getSettings().globalCostLimit||d!==this.store.getSettings().globalCostAlertThreshold||k!==this.store.getSettings().globalCostResetCycle||p!==this.store.getSettings().globalUsedCostOffset)&&this.keyManager.resetGlobalCostAlert()}refreshFromStore(){var r;const e=this.store.getSettings(),t=document.activeElement,n=!!t&&((r=t.id)==null?void 0:r.startsWith("tks-")),s=(i,l)=>{if(n&&t.id===`tks-${i}`)return;const c=document.getElementById(`tks-${i}`);c&&(c.checked=!!l)},o=(i,l)=>{if(n&&t.id===`tks-${i}`)return;const c=document.getElementById(`tks-${i}`);c&&(c.value=String(l))};s("matchByUrl",e.matchByUrl??!0),s("interceptExternalAPIs",e.interceptExternalAPIs),s("blockOnQuotaExceeded",e.blockOnQuotaExceeded),s("abortStreamOnExceeded",e.abortStreamOnExceeded),s("showNotifications",e.showNotifications),s("showTopBarBadge",e.showTopBarBadge),s("debugLogging",e.debugLogging??!1),s("syncStatistics",e.syncStatistics??!0),s("showDisclaimer",e.showDisclaimer??!0),s("dashboardSplitExactEstimate",e.dashboardSplitExactEstimate??!1),o("max-records",e.maxRecords),o("globalQuotaLimit",e.globalQuotaLimit),o("globalAlertThreshold",e.globalAlertThreshold),o("globalUsedTokensOffset",e.globalUsedTokensOffset),o("globalUsedInputTokensOffset",e.globalUsedInputTokensOffset),o("globalUsedOutputTokensOffset",e.globalUsedOutputTokensOffset),o("globalCostLimit",e.globalCostLimit),o("globalCostAlertThreshold",e.globalCostAlertThreshold),o("globalUsedCostOffset",e.globalUsedCostOffset),o("customResetDays",e.customResetDays),o("globalQuotaResetDays",e.customResetDays),o("globalCostResetDays",e.customResetDays),o("diagnosticExportCount",e.diagnosticExportCount??50),s("enableForecast",e.enableForecast!==!1),o("forecastMethod",e.forecastMethod||"recentTrend"),o("forecastWindowDays",e.forecastWindowDays||7),s("enableAnomaly",e.enableAnomaly!==!1),o("anomalySensitivity",e.anomalySensitivity||2.5),o("anomalyLookbackDays",e.anomalyLookbackDays||30),s("enableSuggestions",e.enableSuggestions!==!1),s("showAdvancedDashboard",e.showAdvancedDashboard!==!1),s("enableNoteAttribution",e.enableNoteAttribution!==!1),o("attributionTopN",e.attributionTopN||10);const a=document.getElementById("tks-tokenDisplayUnit");if(a&&(a.value=e.tokenDisplayUnit||"auto"),!(n&&t.id==="tks-quotaResetCycle")){const i=document.getElementById("tks-quotaResetCycle");i&&(i.value=e.quotaResetCycle)}if(!(n&&t.id==="tks-globalQuotaResetCycle")){const i=document.getElementById("tks-globalQuotaResetCycle");i&&(i.value=e.globalQuotaResetCycle)}if(!(n&&t.id==="tks-globalCostResetCycle")){const i=document.getElementById("tks-globalCostResetCycle");i&&(i.value=e.globalCostResetCycle)}}ensureDialogScrollable(){const e=document.getElementById("tks-matchByUrl")||document.getElementById("tks-interceptExternalAPIs");if(!e)return;const t=e.closest(".b3-dialog");if(!t)return;const n=t.querySelector(".b3-dialog__body");n&&(t.style.maxHeight="85vh",n.style.maxHeight="calc(85vh - 120px)",n.style.overflowY="auto")}isMobile(){const e=M.getFrontend();return e==="mobile"||e==="browser-mobile"}openPriceEditor(){const e=this.store.getSettings(),t=this.isMobile(),n=new M.Dialog({title:"费用估算配置",width:t?"95vw":"640px",height:"auto",content:'<div id="tks-price-editor" class="tks-price-editor"></div>'});setTimeout(()=>this.renderPriceEditor(n,{...e.modelPrices},e.currency||"¥",(e.pricePacks||[]).map(s=>({...s,models:[...s.models]}))),50)}renderPriceEditor(e,t,n,s){var f,m,S,x,T;const o=e.element.querySelector("#tks-price-editor");if(!o)return;const a=this.store.getSettings().recalcCostOnPriceChange!==!1,r=this.store.getSettings().packCountCacheRead!==!1,i=this.store.getSettings().countReasoningInOutput!==!1,l=(w,$,E,b,g)=>`
      <div class="tks-price-row">
        <input type="text" class="b3-text-field tks-price-model" value="${O(w)}" placeholder="模型名（如 gpt-4o）" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-input" value="${O(String($))}" placeholder="输入/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-cache" value="${O(String(b??0))}" placeholder="缓存命中/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-cachecreate" value="${O(String(g??0))}" placeholder="缓存写入/1K" title="缓存写入（如 Anthropic Prompt Cache 创建）单价，按更高倍率计费" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-price-output" value="${O(String(E))}" placeholder="输出/1K" />
        <button class="b3-button b3-button--small b3-button--danger tks-price-del" title="删除">✕</button>
      </div>
    `,c=w=>{const $=this.store.getPackUsage(w),E=w.totalTokens||0;let b;if(E>0){const g=Math.max(0,E-$.usedTokens);b=`已用 ${$.usedTokens.toLocaleString()} / 总量 ${E.toLocaleString()}（剩余 ${g.toLocaleString()}）`}else b=`已用 ${$.usedTokens.toLocaleString()}（总量不限）`;return`
      <div class="tks-pack-row" data-pack-id="${O(w.id)}">
        <input type="text" class="b3-text-field tks-pack-name" value="${O(w.name)}" placeholder="资源包名（如 通义千问）" />
        <input type="number" step="1" min="0" class="b3-text-field tks-pack-total" value="${O(String(w.totalTokens||0))}" placeholder="总 Tokens（0 不限）" />
        <input type="number" step="0.01" min="0" class="b3-text-field tks-pack-totalprice" value="${O(String(w.totalPrice??""))}" placeholder="打包总价（¥）" title="填入后启用打包价模式：费用 = 已用 tokens / 总 tokens × 总价格，忽略下方逐项单价。留空或 0 则使用逐项单价模式。" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-input" value="${O(String(w.input))}" placeholder="输入单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-cache" value="${O(String(w.cacheRead??0))}" placeholder="缓存命中单价/1K" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-cachecreate" value="${O(String(w.cacheCreation??0))}" placeholder="缓存写入/1K" title="缓存写入（如 Anthropic Prompt Cache 创建）单价，按更高倍率计费" />
        <input type="number" step="0.0001" min="0" class="b3-text-field tks-pack-output" value="${O(String(w.output))}" placeholder="输出单价/1K" />
        <input type="text" class="b3-text-field tks-pack-models" value="${O((w.models||[]).join(", "))}" placeholder="涵盖模型，逗号分隔" />
        <button class="b3-button b3-button--small b3-button--danger tks-pack-del" title="删除">✕</button>
        <div class="tks-pack-usage">${O(b)}</div>
      </div>
    `},u=Object.entries(t).map(([w,$])=>l(w,$.input,$.output,$.cacheRead,$.cacheCreation)).join(""),d=s.map(w=>c(w)).join("");o.innerHTML=`
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
      <div class="tks-price-opt">
        <label class="tks-price-opt-label"><input type="checkbox" id="tks-price-reasoning" ${i?"checked":""} /> 推理 token 计入输出与费用</label>
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
      <div class="tks-price-list" id="tks-price-list">${u||'<div class="tks-price-empty">尚未配置任何模型单价</div>'}</div>
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
      <div class="tks-pack-list" id="tks-pack-list">${d||'<div class="tks-price-empty">尚未配置任何资源包</div>'}</div>
      <div class="tks-price-toolbar">
        <button class="b3-button b3-button--text" id="tks-pack-add">+ 添加资源包</button>
        <span style="flex:1"></span>
        <button class="b3-button b3-button--text" id="tks-price-export">📤 导出配置</button>
        <button class="b3-button b3-button--text" id="tks-price-import">📥 导入配置</button>
        <button class="b3-button b3-button--outline" id="tks-price-save">保存</button>
      </div>
    `;const k=o.querySelector("#tks-price-list"),p=o.querySelector("#tks-pack-list"),v=w=>{var $;($=w.querySelector(".tks-price-del"))==null||$.addEventListener("click",()=>{w.remove(),k.querySelectorAll(".tks-price-row").length===0&&(k.innerHTML='<div class="tks-price-empty">尚未配置任何模型单价</div>')})};k.querySelectorAll(".tks-price-row").forEach(w=>v(w)),(f=o.querySelector("#tks-price-add"))==null||f.addEventListener("click",()=>{const w=k.querySelector(".tks-price-empty");w&&w.remove(),k.insertAdjacentHTML("beforeend",l("",0,0,0)),v(k.lastElementChild)});const h=w=>{var $;($=w.querySelector(".tks-pack-del"))==null||$.addEventListener("click",()=>{w.remove(),p.querySelectorAll(".tks-pack-row").length===0&&(p.innerHTML='<div class="tks-price-empty">尚未配置任何资源包</div>')})};p.querySelectorAll(".tks-pack-row").forEach(w=>h(w)),(m=o.querySelector("#tks-pack-add"))==null||m.addEventListener("click",()=>{const w=p.querySelector(".tks-price-empty");w&&w.remove();const $={id:`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,name:"",totalTokens:0,input:0,output:0,models:[]};p.insertAdjacentHTML("beforeend",c($)),h(p.lastElementChild)}),(S=o.querySelector("#tks-price-save"))==null||S.addEventListener("click",()=>{var I,U,N,_;const w={};k.querySelectorAll(".tks-price-row").forEach(D=>{var q,F,B,J,H;const G=(((q=D.querySelector(".tks-price-model"))==null?void 0:q.value)||"").toLowerCase().trim().replace(/[\s\-_]+/g,""),Q=parseFloat(((F=D.querySelector(".tks-price-input"))==null?void 0:F.value)||"0")||0,A=parseFloat(((B=D.querySelector(".tks-price-cache"))==null?void 0:B.value)||"0")||0,L=parseFloat(((J=D.querySelector(".tks-price-cachecreate"))==null?void 0:J.value)||"0")||0,Y=parseFloat(((H=D.querySelector(".tks-price-output"))==null?void 0:H.value)||"0")||0;G&&(w[G]={input:Q,output:Y,...A>0?{cacheRead:A}:{},...L>0?{cacheCreation:L}:{}})});const $=[];p.querySelectorAll(".tks-pack-row").forEach(D=>{var H,W,C,j,z,ie,ue,he;const G=D.dataset.packId||`pack-${Date.now()}-${Math.random().toString(36).substring(2,8)}`,Q=(((H=D.querySelector(".tks-pack-name"))==null?void 0:H.value)||"").trim(),A=parseInt(((W=D.querySelector(".tks-pack-total"))==null?void 0:W.value)||"0",10)||0,L=parseFloat(((C=D.querySelector(".tks-pack-totalprice"))==null?void 0:C.value)||"0")||0,Y=parseFloat(((j=D.querySelector(".tks-pack-input"))==null?void 0:j.value)||"0")||0,q=parseFloat(((z=D.querySelector(".tks-pack-cache"))==null?void 0:z.value)||"0")||0,F=parseFloat(((ie=D.querySelector(".tks-pack-cachecreate"))==null?void 0:ie.value)||"0")||0,B=parseFloat(((ue=D.querySelector(".tks-pack-output"))==null?void 0:ue.value)||"0")||0,J=(((he=D.querySelector(".tks-pack-models"))==null?void 0:he.value)||"").split(/[,，]/).map(Te=>Te.toLowerCase().trim().replace(/[\s\-_]+/g,"")).filter(Boolean);(Q||J.length>0)&&$.push({id:G,name:Q,totalTokens:A,...L>0?{totalPrice:L}:{},input:Y,output:B,...q>0?{cacheRead:q}:{},...F>0?{cacheCreation:F}:{},models:J})});const E=((I=o.querySelector("#tks-price-currency"))==null?void 0:I.value)||"¥",b=((U=o.querySelector("#tks-price-recalc"))==null?void 0:U.checked)??!0,g=((N=o.querySelector("#tks-price-packcache"))==null?void 0:N.checked)??!0,R=((_=o.querySelector("#tks-price-reasoning"))==null?void 0:_.checked)??!0;this.store.updateSettings({currency:E,modelPrices:w,pricePacks:$,recalcCostOnPriceChange:b,packCountCacheRead:g,countReasoningInOutput:R}),this.store.save(),e.destroy(),M.showMessage("费用配置已保存",2e3,"info")}),(x=o.querySelector("#tks-price-export"))==null||x.addEventListener("click",()=>this.exportPriceConfig()),(T=o.querySelector("#tks-price-import"))==null||T.addEventListener("click",()=>this.importPriceConfig(e))}exportPriceConfig(){const e=this.store.getSettings(),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),currency:e.currency||"¥",recalcCostOnPriceChange:e.recalcCostOnPriceChange!==!1,modelPrices:e.modelPrices||{},pricePacks:e.pricePacks||[]},null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`siyuan-token-stats-prices-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(s)},1e3),M.showMessage("费用配置已导出",2e3,"info")}importPriceConfig(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async n=>{var o;const s=(o=n.target.files)==null?void 0:o[0];if(s)try{const a=await s.text(),r=JSON.parse(a),i=r&&r.modelPrices&&typeof r.modelPrices=="object"?r.modelPrices:{},l=Array.isArray(r==null?void 0:r.pricePacks)?r.pricePacks:[],c=typeof(r==null?void 0:r.currency)=="string"?r.currency:this.store.getSettings().currency||"¥",u=typeof(r==null?void 0:r.recalcCostOnPriceChange)=="boolean"?r.recalcCostOnPriceChange:!0,d=l.map(k=>({...k,models:Array.isArray(k==null?void 0:k.models)?[...k.models]:[]}));this.renderPriceEditor(e,{...i},c,d),setTimeout(()=>{const k=e.element.querySelector("#tks-price-recalc");k&&(k.checked=u)},10),M.showMessage("已载入导入的费用配置，请检查后点击保存",2e3,"info")}catch(a){console.error("[TokenStats] Import price config failed:",a),M.showMessage("导入失败："+((a==null?void 0:a.message)||"文件格式不正确"),3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}openKeyManager(){const e=this.isMobile(),t=new M.Dialog({title:"API Key 管理",width:e?"95vw":"750px",height:e?"80vh":"500px",content:'<div id="tks-key-mgr" class="tks-key-mgr"></div>'});setTimeout(()=>this.renderKeyList(t),50)}renderKeyList(e){var o,a,r;const t=e.element.querySelector("#tks-key-mgr");if(!t)return;const n=this.store.getApiKeys();t.innerHTML=`
      <div class="tks-key-toolbar">
        <button class="b3-button b3-button--text" id="tks-add-key">+ 添加 API Key</button>
        <button class="b3-button b3-button--text" id="tks-export-keys">📤 导出</button>
        <button class="b3-button b3-button--text" id="tks-import-keys">📥 导入</button>
        <span class="tks-key-hint">共 ${n.length} 个 Key</span>
      </div>
      <div class="tks-key-list" id="tks-key-list-items"></div>
    `;const s=t.querySelector("#tks-key-list-items");for(const i of n){const l=this.keyManager.getKeyUsage(i.id),c=i.quotaLimit>0?Math.min(100,l.totalTokens/i.quotaLimit*100):0,u=document.createElement("div");u.className="tks-key-item",u.innerHTML=`
        <div class="tks-key-info">
          <div class="tks-key-name">
            ${this.providerIcon(i.provider)} ${O(i.name)}
            ${i.enabled?"":'<span class="tks-badge tks-badge-off">已禁用</span>'}
          </div>
          <div class="tks-key-detail">
            <span class="tks-key-masked">${O(i.keyMasked)}</span>
            ${i.provider?`<span class="tks-key-provider">${O(i.provider)}</span>`:""}
            ${i.baseUrl?`<span class="tks-key-url" title="${O(i.baseUrl)}">${O(i.baseUrl)}</span>`:""}
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
          <button class="b3-button b3-button--small" data-action="edit" data-id="${O(i.id)}">编辑</button>
          <button class="b3-button b3-button--small b3-button--danger" data-action="delete" data-id="${O(i.id)}">删除</button>
        </div>
      `,s.appendChild(u)}(o=t.querySelector("#tks-add-key"))==null||o.addEventListener("click",()=>{this.openKeyEditor(e,null)}),(a=t.querySelector("#tks-export-keys"))==null||a.addEventListener("click",()=>{this.exportKeys()}),(r=t.querySelector("#tks-import-keys"))==null||r.addEventListener("click",()=>{this.importKeys(e)}),t.querySelectorAll("[data-action]").forEach(i=>{i.addEventListener("click",l=>{const c=l.currentTarget,u=c.dataset.action,d=c.dataset.id;if(u==="edit"){const k=this.store.getApiKey(d);k&&this.openKeyEditor(e,k)}else u==="delete"&&M.confirm("删除 API Key","确定删除此 API Key 吗？相关统计记录将保留。",()=>{this.store.deleteApiKey(d),this.keyManager.resetAlert(d),this.renderKeyList(e),M.showMessage("已删除",2e3,"info")})})})}openKeyEditor(e,t){var r,i,l;const n=!!t,s=this.isMobile(),o=new M.Dialog({title:n?"编辑 API Key":"添加 API Key",width:s?"92vw":"500px",height:"auto",content:`
        <div class="tks-key-editor">
          <div class="tks-form-row">
            <label>名称</label>
            <input type="text" id="tke-name" class="b3-text-field" value="${O((t==null?void 0:t.name)||"")}" placeholder="例如：我的 OpenAI Key" />
          </div>
          <div class="tks-form-row">
            <label>API Key</label>
            <input type="password" id="tke-key" class="b3-text-field" value="" placeholder="sk-..." />
            <div class="tks-form-hint">用于匹配请求头中的 Authorization / x-api-key；编辑时留空则保留现有密钥，仅按 URL 匹配时可不填</div>
          </div>
          <div class="tks-form-row">
            <label>提供商名称</label>
            <input type="text" id="tke-provider" class="b3-text-field" value="${O((t==null?void 0:t.provider)||"")}" list="tke-provider-list" placeholder="例如：OpenAI、DeepSeek、华为云、SiYuan" />
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
            <input type="text" id="tke-url" class="b3-text-field" value="${O((t==null?void 0:t.baseUrl)||"")}" placeholder="例如：https://api.openai.com/v1/chat/completions，或 /api/ai/" />
            <div class="tks-form-hint">用于 URL 匹配。可填完整 URL、域名或路径（如 /api/ai/）。留空则仅按 Key 匹配。</div>
          </div>
          <div class="tks-form-row">
            <label>关联模型</label>
            <input type="text" id="tke-models" class="b3-text-field" value="${O(t!=null&&t.models?t.models.join(", "):"")}" placeholder="例如：Qwen/Qwen3-8B, sensenova-6.7-flash-lite" />
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
      `}),a=o.element;(r=a.querySelector("#tke-provider"))==null||r.addEventListener("input",c=>{const u=c.target.value.trim(),d=a.querySelector("#tke-url");!d.value&&u&&(d.value=this.keyManager.getDefaultBaseUrl(u))}),(i=a.querySelector("#tke-cancel"))==null||i.addEventListener("click",()=>o.destroy()),(l=a.querySelector("#tke-save"))==null||l.addEventListener("click",()=>{const c=a.querySelector("#tke-name").value.trim(),u=a.querySelector("#tke-key").value.trim(),d=a.querySelector("#tke-provider").value.trim(),k=a.querySelector("#tke-url").value.trim(),p=a.querySelector("#tke-models").value.split(/[,，]/).map(T=>T.trim()).filter(Boolean),v=parseInt(a.querySelector("#tke-quota").value,10)||0,h=parseInt(a.querySelector("#tke-threshold").value,10)||0,f=Math.max(0,parseInt(a.querySelector("#tke-usedTokensOffset").value,10)||0),m=Math.max(0,parseInt(a.querySelector("#tke-usedInputTokensOffset").value,10)||0),S=Math.max(0,parseInt(a.querySelector("#tke-usedOutputTokensOffset").value,10)||0),x=a.querySelector("#tke-enabled").value==="true";if(!c){M.showMessage("请输入名称",3e3,"error");return}if(n&&t){const T={name:c,provider:d,baseUrl:k,models:p,quotaLimit:v,alertThreshold:h,usedTokensOffset:f,usedInputTokensOffset:m,usedOutputTokensOffset:S,enabled:x};u&&(T.keyFull=u,T.keyMasked=this.keyManager.maskKey(u)),this.store.updateApiKey(t.id,T),this.keyManager.resetAlert(t.id)}else{const T={id:this.keyManager.generateKeyId(),name:c,keyFull:u,keyMasked:this.keyManager.maskKey(u),provider:d,baseUrl:k,models:p,quotaLimit:v,usedTokensOffset:f,usedInputTokensOffset:m,usedOutputTokensOffset:S,alertThreshold:h,enabled:x,createdAt:Date.now()};this.store.addApiKey(T)}this.store.save(),o.destroy(),this.renderKeyList(e),M.showMessage("已保存",2e3,"info")})}exportKeys(){const e=this.store.getApiKeys().map(a=>{const{keyFull:r,...i}=a;return i}),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),apiKeys:e},null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`siyuan-token-stats-keys-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(s)},1e3),M.showMessage(`已导出 ${e.length} 个 API Key`,2e3,"info")}importKeys(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async n=>{var o;const s=(o=n.target.files)==null?void 0:o[0];if(s)try{const a=await s.text(),r=JSON.parse(a),i=Array.isArray(r)?r:r.apiKeys;if(!Array.isArray(i))throw new Error("导入文件格式不正确，未找到 apiKeys 数组");let l=0,c=0;for(const d of i){if(!d||!d.keyFull&&!d.keyHash)continue;const k=Array.isArray(d.models)?d.models:typeof d.models=="string"?d.models.split(/[,，]/).map(h=>h.trim()).filter(Boolean):[],p=d.keyHash||(d.keyFull?ae(d.keyFull):""),v=p?this.store.getApiKeys().find(h=>h.keyHash===p):void 0;if(v){const h={name:d.name||v.name,provider:d.provider||v.provider,baseUrl:d.baseUrl||v.baseUrl,models:k.length?k:v.models||[],quotaLimit:d.quotaLimit??v.quotaLimit,alertThreshold:d.alertThreshold??v.alertThreshold,enabled:d.enabled??v.enabled};d.keyFull&&(h.keyFull=d.keyFull,h.keyMasked=this.keyManager.maskKey(d.keyFull)),this.store.updateApiKey(v.id,h),c++}else this.store.addApiKey({id:this.keyManager.generateKeyId(),name:d.name||"Imported Key",keyFull:d.keyFull||"",keyHash:d.keyHash||"",keyMasked:d.keyMasked||this.keyManager.maskKey(d.keyFull||"Imported"),provider:d.provider||"",baseUrl:d.baseUrl||"",models:k,quotaLimit:d.quotaLimit||0,usedTokensOffset:d.usedTokensOffset||0,usedInputTokensOffset:d.usedInputTokensOffset||0,usedOutputTokensOffset:d.usedOutputTokensOffset||0,alertThreshold:d.alertThreshold||0,enabled:d.enabled!==!1,createdAt:Date.now()}),l++}this.store.save(),this.renderKeyList(e);const u=[];l>0&&u.push(`新增 ${l} 个`),c>0&&u.push(`更新 ${c} 个`),M.showMessage(`导入成功：${u.join("，")||"无变化"}`,2e3,"info")}catch(a){console.error("[TokenStats] Import keys failed:",a),M.showMessage("导入失败："+a.message,3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}providerIcon(e){const t=(e||"").toLowerCase();return{siyuan:"🐿️",openai:"🤖",anthropic:"🧠",deepseek:"🔍",siliconflow:"🌊",华为云:"☁️",huawei:"☁️"}[t]||"🔑"}exportData(){const e=this.store.exportAll(),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(s),s.click(),setTimeout(()=>{document.body.removeChild(s),URL.revokeObjectURL(n)},1e3),M.showMessage("数据已导出",2e3,"info")}clearRecords(){M.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。此操作不可撤销。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),M.showMessage("记录已清除",2e3,"info")})}resetAll(){M.confirm("重置全部数据","⚠️ 确定重置吗？所有调用记录将被清除，设置恢复默认值。API Key 配置保留不变，此操作不可撤销。",()=>{this.store.clearRecords(),this.store.resetSettings(),this.keyManager.clearAllAlerts(),M.showMessage("已重置",2e3,"info")})}}const V=864e5;function ye(y){return`${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,"0")}-${String(y.getDate()).padStart(2,"0")}`}function ve(y,e=30){return y==="daily"?"今日":y==="custom"?`最近 ${e} 天`:"本月"}function Pe(y){return y.globalCostLimit>0?{cycle:y.globalCostResetCycle,label:ve(y.globalCostResetCycle,y.customResetDays)}:y.globalQuotaLimit>0?{cycle:y.globalQuotaResetCycle,label:ve(y.globalQuotaResetCycle,y.customResetDays)}:{cycle:"monthly",label:"自然月"}}function Fe(y,e,t=30,n=Date.now()){if(y==="daily")return e+V;if(y==="custom")return e+t*V;const s=new Date(e);return new Date(s.getFullYear(),s.getMonth()+1,1).getTime()||new Date(new Date(n).getFullYear(),new Date(n).getMonth()+1,1).getTime()}function Ne(y,e,t,n){const s={enabled:e.enableForecast!==!1,hasData:!1,cycleLabel:"",cycleStartTs:0,cycleEndTs:0,daysElapsed:0,daysTotal:0,daysLeft:0,usedTokens:0,usedCost:0,runRateTokens:0,runRateCost:0,projectedTokens:0,projectedCost:0,tokenLimit:e.globalQuotaLimit>0?e.globalQuotaLimit:0,costLimit:e.globalCostLimit>0?e.globalCostLimit:0,projectedTokenPercent:0,projectedCostPercent:0};if(!s.enabled)return s;const o=Pe(e),a=o.cycle==="none"?"monthly":o.cycle,r=t.getResetBoundary(a,e.customResetDays),i=Fe(a,r,e.customResetDays,n.getTime()),l=n.getTime(),c=y.getRecords().filter(x=>x.timestamp>=r&&x.timestamp<=l),u=c.reduce((x,T)=>x+(T.totalTokens||0),0),d=c.reduce((x,T)=>x+y.getRecordCost(T),0);s.cycleLabel=o.label,s.cycleStartTs=r,s.cycleEndTs=i,s.usedTokens=u,s.usedCost=d,s.hasData=c.length>0;const k=Math.max(1,Math.round((i-r)/V)),p=Math.max(0,Math.min(k,(l-r)/V)),v=Math.max(0,k-p);s.daysTotal=k,s.daysElapsed=p,s.daysLeft=v;const h=e.forecastMethod==="linear"?"linear":"recentTrend",f=Math.max(1,Math.min(e.forecastWindowDays||7,p||1));let m,S;if(h==="linear"||p<=0)m=p>0?u/p:0,S=p>0?d/p:0;else{const x=l-f*V,T=c.filter(E=>E.timestamp>=x),w=T.reduce((E,b)=>E+(b.totalTokens||0),0),$=T.reduce((E,b)=>E+y.getRecordCost(b),0);T.length>0?(m=w/f,S=$/f):(m=p>0?u/p:0,S=p>0?d/p:0)}return s.runRateTokens=m,s.runRateCost=S,s.projectedTokens=u+m*v,s.projectedCost=d+S*v,s.projectedTokenPercent=s.tokenLimit>0?s.projectedTokens/s.tokenLimit*100:0,s.projectedCostPercent=s.costLimit>0?s.projectedCost/s.costLimit*100:0,s}function qe(y,e,t){const n=Math.max(3,e.anomalyLookbackDays||30),s=Math.max(1.5,e.anomalySensitivity||2.5),o={hasData:!1,anomalies:[],newModels:[]},a=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime(),r=new Map;for(let h=n-1;h>=0;h--){const f=new Date(a-h*V);r.set(ye(f),{tokens:0,cost:0,count:0,byModel:{}})}const i=y.getRecords();for(const h of i){if(h.timestamp<a-(n-1)*V)continue;const f=ye(new Date(h.timestamp)),m=r.get(f);if(!m)continue;m.tokens+=h.totalTokens||0,m.cost+=y.getRecordCost(h),m.count+=1;const S=(h.model||"unknown").toLowerCase().trim();m.byModel[S]=(m.byModel[S]||0)+(h.totalTokens||0)}const l=Array.from(r.values()),c=Array.from(r.keys());if(o.hasData=l.some(h=>h.count>0),!o.hasData)return o;const u=["tokens","cost","requests"];for(const h of u){const f=l.map(T=>h==="tokens"?T.tokens:h==="cost"?T.cost:T.count),m=f.reduce((T,w)=>T+w,0)/f.length,S=f.reduce((T,w)=>T+(w-m)*(w-m),0)/f.length,x=Math.sqrt(S);for(let T=0;T<f.length;T++){const w=f[T];if(w<=0||x<1e-9)continue;const $=(w-m)/x,E=m>0?(w-m)/m*100:0;if($>=s&&w>m*1.3){let b;const g=Object.entries(l[T].byModel);g.length>0&&(g.sort((I,U)=>U[1]-I[1]),g[0][1]>w*.6&&(b=g[0][0]));const R=h==="tokens"?"Token 用量":h==="cost"?"费用":"请求数";o.anomalies.push({date:c[T],metric:h,value:w,expected:m,z:$,deviationPct:E,reason:`${R}突增${E.toFixed(0)}%（${w.toLocaleString()} vs 日均 ${m.toLocaleString()}）`+(b?`，主要由模型 ${b} 贡献`:""),severity:$>=s*1.5?"high":"medium",topModel:b})}}}const d=new Set,k=new Set,p=a-7*V,v=a-14*V;for(const h of i){const f=(h.model||"unknown").toLowerCase().trim();h.timestamp>=p?d.add(f):h.timestamp>=v&&k.add(f)}for(const h of d)k.has(h)||o.newModels.push(h);return o.anomalies.sort((h,f)=>f.z-h.z),o.anomalies=o.anomalies.slice(0,12),o}function _e(y,e,t,n){const s=[],o=Object.values(t.modelStats);for(const f of o){if(f.inputTokens<=0||!y.modelHasCachePrice(f.model))continue;const m=f.cacheReadTokens/f.inputTokens;if(m>=.2||f.inputTokens<=1e4)continue;const S=y.getInputPrice(f.model),x=y.getCachePrice(f.model);let T=0;S>0&&x>=0&&(T=f.inputTokens*.5/1e3*Math.max(0,S-x)),s.push({id:"cache-"+f.model,severity:"medium",title:`提升「${f.model}」缓存命中率`,detail:`当前缓存命中率仅 ${(m*100).toFixed(0)}%。复用 system prompt 或开启提示缓存，可将部分输入 token 转为更便宜的缓存读取，降低输入成本。`,estimatedSaving:T>0?T:void 0})}const a=t.totalTokens||0;a>0&&t.estimatedTokens/a>.3&&s.push({id:"estimated-ratio",severity:"low",title:"本地估算占比偏高",detail:`约 ${(t.estimatedTokens/a*100).toFixed(0)}% 的用量为启发式估算（供应商未返回 usage）。切换至返回 usage 的端点或模型可提升统计精度，进而改善预测与账单对账的可靠性。`});const r=o.filter(f=>f.cost>0).sort((f,m)=>m.cost-f.cost);if(r.length>0){const f=r[0],m=r.reduce((S,x)=>S+x.cost,0);m>0&&f.cost/m>.5&&s.push({id:"expensive-model",severity:"low",title:`「${f.model}」占总费用 ${(f.cost/m*100).toFixed(0)}%`,detail:"该模型费用占比过半。初稿、摘要、分类等低风险任务可迁移至单价更低的模型，仅在精修阶段使用高价模型，通常可显著降本。"})}const i=y.getRecords(),l=new Array(7).fill(0),c=new Array(7).fill(0),u=["周日","周一","周二","周三","周四","周五","周六"];for(const f of i){const m=new Date(f.timestamp).getDay();l[m]+=f.totalTokens||0,c[m]+=1}const d=l.map((f,m)=>c[m]>0?f/c[m]:0),k=d.filter(f=>f>0),p=k.length>0?Math.max(...k):0,v=k.length>0?Math.min(...k):0;if(v>0&&p>v*1.8){const f=d.indexOf(p);s.push({id:"weekday-concentration",severity:"low",title:`用量集中在${u[f]}`,detail:`${u[f]}的日均用量约为最低日的 ${(p/v).toFixed(1)} 倍。将批量或重任务集中到同一天处理，有助于复用提示缓存、摊薄固定开销。`})}const h={high:0,medium:1,low:2};return s.sort((f,m)=>h[f.severity]-h[m.severity]||(m.estimatedSaving||0)-(f.estimatedSaving||0)),s.slice(0,12)}function K(y){return y?y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function de(y){let e=0;for(let n=0;n<y.length;n++)e=e*31+y.charCodeAt(n)>>>0;return`hsl(${e%360}, 60%, 52%)`}function Z(y){return`${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,"0")}-${String(y.getDate()).padStart(2,"0")}`}function je(y){const e=y.getDay(),t=(e===0?-6:1)-e,n=new Date(y);return n.setDate(y.getDate()+t),n.setHours(0,0,0,0),n}function ze(y){return new Date(y.getFullYear(),y.getMonth(),1)}function P(y,e){return e!=="auto"?y.toLocaleString():y>=1e8?(y/1e8).toFixed(3)+"亿":y>=1e4?(y/1e4).toFixed(1)+"万":y.toLocaleString()}class Ge{constructor(e,t){this.dialog=null,this.summary=null,this.refreshTimer=null,this.disclaimerDismissed=!1,this.onManualSync=null,this.store=e,this.keyManager=t}show(){try{if(this.summary=this.computeSummary(),this.dialog&&this.dialog.element&&this.dialog.element.isConnected){this.refreshContent();return}this.dialog&&(this.dialog.destroy(),this.dialog=null);const e=this.isMobile();this.dialog=new M.Dialog({title:"📊 Token 用量统计",width:e?"95vw":"900px",content:this.renderHTML(this.summary),destroyCallback:()=>{this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null),this.dialog=null}}),this.bindEvents(),this.refreshTimer=setInterval(()=>{if(!this.dialog||!this.dialog.element||!this.dialog.element.isConnected){this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null);return}this.refreshContent()},3e3)}catch(e){console.error("[TokenStats] Dashboard show error:",e),M.showMessage("仪表盘打开失败: "+e.message,3e3,"error")}}refreshContent(){if(!this.dialog||!this.dialog.element)return;const e=this.dialog.element.querySelector(".b3-dialog__body");if(!e)return;const t=document.activeElement;if(t&&e.contains(t)&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"))return;const n=e.scrollTop;this.summary=this.computeSummary(),e.innerHTML=this.renderHTML(this.summary),this.bindEvents();const s=this.dialog.element.querySelector(".b3-dialog__body");s&&(s.scrollTop=n)}isMobile(){const e=M.getFrontend();return e==="mobile"||e==="browser-mobile"}computeSummary(){const e=this.store.getRecords(),t=this.store.getApiKeys(),n=this.store.getSettings(),s={totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalRequests:e.length,successRequests:0,failedRequests:0,averageRequestTime:0,totalCost:0,totalCacheReadTokens:0,totalCacheCreationTokens:0,totalCacheCost:0,exactTokens:0,estimatedTokens:0,archivedMonths:0,modelStats:{},dailyStats:[],keyStats:[]};let o=0;for(const r of e){s.totalTokens+=r.totalTokens,s.totalInputTokens+=r.inputTokens,s.totalOutputTokens+=r.outputTokens,s.totalCost+=this.store.getRecordCost(r),s.totalCacheReadTokens+=r.cacheReadTokens||0,s.totalCacheCreationTokens+=r.cacheCreationTokens||0,s.totalCacheCost+=this.store.getRecordCacheCost(r),o+=r.requestTime,r.estimated===!1?s.exactTokens+=r.totalTokens:s.estimatedTokens+=r.totalTokens,r.success?s.successRequests++:s.failedRequests++;const i=r.model||"unknown",l=i.toLowerCase().trim();s.modelStats[l]||(s.modelStats[l]={model:i,count:0,tokens:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cacheCreationTokens:0,cost:0,cacheCost:0}),s.modelStats[l].count++,s.modelStats[l].tokens+=r.totalTokens,s.modelStats[l].inputTokens+=r.inputTokens,s.modelStats[l].outputTokens+=r.outputTokens,s.modelStats[l].cacheReadTokens+=r.cacheReadTokens||0,s.modelStats[l].cacheCreationTokens+=r.cacheCreationTokens||0,s.modelStats[l].cost+=this.store.getRecordCost(r),s.modelStats[l].cacheCost+=this.store.getRecordCacheCost(r)}const a=this.store.getArchives();s.archivedMonths=a.length;for(const r of a){s.totalTokens+=r.totalTokens,s.totalInputTokens+=r.totalInputTokens,s.totalOutputTokens+=r.totalOutputTokens,s.totalCost+=r.cost,s.totalCacheReadTokens+=r.totalCacheReadTokens,s.totalCacheCreationTokens+=r.totalCacheCreationTokens,s.totalCacheCost+=r.cacheCost,s.exactTokens+=r.exactTokens,s.estimatedTokens+=r.estimatedTokens;for(const[i,l]of Object.entries(r.byModel))s.modelStats[i]||(s.modelStats[i]={model:i,count:0,tokens:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cacheCreationTokens:0,cost:0,cacheCost:0}),s.modelStats[i].tokens+=l.tokens,s.modelStats[i].inputTokens+=l.inputTokens,s.modelStats[i].outputTokens+=l.outputTokens,s.modelStats[i].cacheReadTokens+=l.cacheReadTokens||0,s.modelStats[i].cacheCreationTokens+=l.cacheCreationTokens||0,s.modelStats[i].cost+=l.cost}s.averageRequestTime=e.length>0?o/e.length:0,s.dailyStats=this.computeTrendStats(e,n);for(const r of t){const i=this.keyManager.getKeyUsage(r.id),l=r.quotaLimit>0?Math.min(100,i.totalTokens/r.quotaLimit*100):0;s.keyStats.push({apiKeyId:r.id,apiKeyName:r.name,totalTokens:i.totalTokens,totalInputTokens:i.totalInputTokens,totalOutputTokens:i.totalOutputTokens,totalRequests:i.totalRequests,quotaLimit:r.quotaLimit,alertThreshold:r.alertThreshold,usagePercent:l,isAlert:r.alertThreshold>0&&l>=r.alertThreshold,isExceeded:r.quotaLimit>0&&i.totalTokens>=r.quotaLimit,enabled:r.enabled!==!1})}return s.keyStats.sort((r,i)=>i.totalTokens-r.totalTokens),s}computeTrendStats(e,t){const{trendDateRangeStart:n,trendDateRangeEnd:s,trendAggregation:o}=t;let a=1/0,r=-1/0;for(const m of e)a=Math.min(a,m.timestamp),r=Math.max(r,m.timestamp);const i=e.length>0&&isFinite(a)&&isFinite(r),l=new Date;l.setHours(0,0,0,0);const c=i?new Date(a):new Date(l.getTime()-13*24*60*60*1e3),u=i?new Date(r):l,d=n||Z(c),k=s||Z(u),p=new Date(d+"T00:00:00"),v=new Date(k+"T23:59:59.999"),h={},f=(m,S,x,T,w)=>{h[m]||(h[m]={date:m,tokens:0,count:0,byModel:{},cost:0}),h[m].tokens+=S,h[m].count+=x,h[m].byModel[T]=(h[m].byModel[T]||0)+S,h[m].cost+=w};for(const m of e){if(m.timestamp<p.getTime()||m.timestamp>v.getTime())continue;const S=new Date(m.timestamp),x=(m.model||"unknown").toLowerCase().trim(),T=this.store.getRecordCost(m);if(o==="weekly"){const w=je(S);f(Z(w),m.totalTokens,1,x,T)}else if(o==="monthly"){const w=ze(S);f(Z(w),m.totalTokens,1,x,T)}else f(Z(S),m.totalTokens,1,x,T)}return Object.values(h).sort((m,S)=>m.date.localeCompare(S.date))}renderHTML(e){const t=this.store.getRecentRecords(30),n=Math.max(...Object.values(e.modelStats).map(u=>u.tokens),1),s=this.store.getSettings(),o=this.keyManager.getGlobalUsagePercent(s),a=this.keyManager.getGlobalUsage(s),r=s.tokenDisplayUnit||"auto",i=this.getMinRecordDate(),l=this.getMaxRecordDate(),c=`
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
              <div class="tks-card-value">${P(e.totalTokens,r)}</div>
              <div class="tks-card-label">总 Tokens</div>
              ${s.dashboardSplitExactEstimate?`<div class="tks-card-sub">精确 ${P(e.exactTokens,r)} · 估算 ${P(e.estimatedTokens,r)}</div>`:""}
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📥</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${P(e.totalInputTokens,r)}</div>
              <div class="tks-card-label">输入 Tokens</div>
            </div>
          </div>
          <div class="tks-card">
            <div class="tks-card-icon">📤</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${P(e.totalOutputTokens,r)}</div>
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
              <div class="tks-card-value">${P(e.totalCacheReadTokens,r)}</div>
              <div class="tks-card-label">缓存命中 Tokens</div>
              ${this.store.hasAnyPrice()?`<div class="tks-card-sub">成本 ${this.store.formatCost(e.totalCacheCost)}${e.totalCost>0?` · 占 ${(e.totalCacheCost/e.totalCost*100).toFixed(1)}%`:""}</div>`:'<div class="tks-card-sub">成本（未配置单价）</div>'}
            </div>
          </div>
          ${s.globalQuotaLimit>0?`
          <div class="tks-card tks-card-global">
            <div class="tks-card-icon">🌍</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${o.toFixed(1)}%</div>
              <div class="tks-card-label">全局限额 ${P(a.totalTokens,r)} / ${P(s.globalQuotaLimit,r)}</div>
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
            ${e.keyStats.map(u=>this.renderKeyStat(u)).join("")}
          </div>
        </div>

        <!-- Token 趋势 -->
        <div class="tks-section">
          <h3 class="tks-section-title">📈 Token 趋势</h3>
          ${c}
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
            ${Object.values(e.modelStats).sort((u,d)=>d.tokens-u.tokens).map(u=>this.renderModelBar(u,n)).join("")}
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
                ${t.map(u=>this.renderRecordRow(u,s.enableNoteAttribution!==!1)).join("")}
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
    `}renderAttributionPanel(e){const t=this.store.getRecords(),n=e.tokenDisplayUnit||"auto",s=new Map;for(const i of t){if(!i.docPath&&!i.docId)continue;const l=i.docId||i.docPath||"";if(!l)continue;let c=s.get(l);c||(c={docPath:i.docPath||"(未命名文档)",docId:i.docId||"",tokens:0,count:0},s.set(l,c)),c.tokens+=i.totalTokens||0,c.count+=1}const o=Math.max(1,e.attributionTopN||10),a=Array.from(s.values()).sort((i,l)=>l.tokens-i.tokens).slice(0,o);if(a.length===0)return`<div class="tks-section">
        <h3 class="tks-section-title">📂 笔记归因（按文档）</h3>
        <div class="tks-empty-chart">暂无归因数据。当你在思源中使用 AI（含引用块 / 文档）时，本插件会自动记录调用来源文档，便于按文档统计 Token 消耗。</div>
      </div>`;const r=Math.max(...a.map(i=>i.tokens),1);return`<div class="tks-section">
      <h3 class="tks-section-title">📂 笔记归因（按文档 Top ${a.length}）</h3>
      <div class="tks-attr-stats">
        ${a.map(i=>`
          <div class="tks-attr-row">
            <div class="tks-attr-head">
              <span class="tks-attr-name" title="${K(i.docId)}">${K(i.docPath)}</span>
              <span class="tks-attr-meta">${P(i.tokens,n)} tokens · ${i.count} 次</span>
            </div>
            <div class="tks-attr-bar"><div class="tks-attr-bar-fill" style="width:${(i.tokens/r*100).toFixed(1)}%"></div></div>
          </div>`).join("")}
      </div>
      <div class="tks-attr-caption">按文档统计的 Token 消耗，用于定位「最费 Token 的笔记」。仅统计带来源信息的记录；悬停文档名可查看文档 id。</div>
    </div>`}getMinRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=1/0;for(const n of e)t=Math.min(t,n.timestamp);return Z(new Date(t))}getMaxRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=-1/0;for(const n of e)t=Math.max(t,n.timestamp);return Z(new Date(t))}renderKeyStat(e){const t=this.store.getSettings().tokenDisplayUnit||"auto",n=e.quotaLimit>0?`${P(e.totalTokens,t)} / ${P(e.quotaLimit,t)}`:`${P(e.totalTokens,t)} (不限)`,s=e.alertThreshold>0?` · 阈值 ${e.alertThreshold}%`:"",o=e.enabled?e.isExceeded?"⛔":e.isAlert?"⚠️":e.quotaLimit>0?"✅":"":"🚫";return`
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
    `}buildTrendSvg(e,t){const n=e.dailyStats,s=n.length;if(s===0)return"";const o=720,a=120,r=48,i=52,l=10,c=20,u=o-r-i,d=a-l-c,k=Math.max(...n.map(b=>b.tokens),1),p={};for(const b of n)for(const g of Object.keys(b.byModel))p[g]=(p[g]||0)+b.byModel[g];const v=Object.keys(p).sort((b,g)=>p[g]-p[b]),h=Math.max(...n.map(b=>b.cost),0),f=u/s,m=Math.min(26,f*.62),S=b=>r+f*(b+.5);let x="";for(let b=0;b<s;b++){const g=n[b],I=S(b)-m/2;let U=l+d;for(const N of v){const _=g.byModel[N]||0;if(_<=0)continue;const D=_/k*d;U-=D,x+=`<rect x="${I.toFixed(1)}" y="${U.toFixed(1)}" width="${m.toFixed(1)}" height="${Math.max(.5,D).toFixed(1)}" fill="${de(N)}"><title>${K(N)}: ${_.toLocaleString()} tokens</title></rect>`}}let T="";if(h>0){T=`<polyline points="${n.map((g,R)=>`${S(R).toFixed(1)},${(l+(1-g.cost/h)*d).toFixed(1)}`).join(" ")}" fill="none" stroke="#e0556b" stroke-width="2" stroke-linejoin="round"/>`;for(let g=0;g<s;g++){const R=l+(1-n[g].cost/h)*d;T+=`<circle cx="${S(g).toFixed(1)}" cy="${R.toFixed(1)}" r="2.5" fill="#e0556b"><title>费用: ${K(this.store.formatCost(n[g].cost))}</title></circle>`}}let w="";for(let b=0;b<=2;b++){const g=l+d*b/2,R=Math.round(k*(1-b/2));if(w+=`<line x1="${r}" y1="${g.toFixed(1)}" x2="${r+u}" y2="${g.toFixed(1)}" stroke="#e3e3e3" stroke-width="1"/>`,w+=`<text x="${r-6}" y="${(g+3).toFixed(1)}" text-anchor="end" font-size="10" fill="#8a8a8a">${R>=1e3?(R/1e3).toFixed(R>=1e4?0:1)+"k":R}</text>`,h>0){const I=h*(1-b/2);w+=`<text x="${r+u+6}" y="${(g+3).toFixed(1)}" text-anchor="start" font-size="10" fill="#e0556b">${K(this.store.formatCost(I))}</text>`}}const $=Math.max(1,Math.ceil(s/16));let E="";for(let b=0;b<s;b++){if(b%$!==0&&b!==s-1)continue;const g=n[b];let R=g.date.substring(5);t==="monthly"?R=g.date.substring(0,7):t==="weekly"&&(R=`W${g.date.substring(5,7)}${g.date.substring(8,10)}`),E+=`<text x="${S(b).toFixed(1)}" y="${l+d+14}" text-anchor="middle" font-size="9" fill="#8a8a8a">${K(R)}</text>`}return`<svg class="tks-trend-svg" viewBox="0 0 ${o} ${a}" preserveAspectRatio="xMidYMin slice">${w}${x}${T}${E}</svg>`}buildTrendLegend(e){const t={};for(const a of e.dailyStats)for(const r of Object.keys(a.byModel))t[r]=(t[r]||0)+a.byModel[r];return`<div class="tks-trend-legend">${Object.keys(t).sort((a,r)=>t[r]-t[a]).map(a=>`<span class="tks-legend-item"><span class="tks-legend-swatch" style="background:${de(a)}"></span>${K(a)}</span>`).join("")}<span class="tks-legend-item"><span class="tks-legend-line"></span>当日费用（右轴）</span></div>`}renderModelBar(e,t){const n=this.store.getSettings().tokenDisplayUnit||"auto",s=Math.max(1,e.tokens/t*100);return`
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${K(e.model)}">${K(e.model)}</div>
        <div class="tks-model-bar-track">
          <div class="tks-model-bar-fill" style="width: ${s}%; background: ${de(e.model.toLowerCase().trim())}"></div>
        </div>
        <div class="tks-model-detail">
          ${P(e.tokens,n)} tokens · ${e.count} 次${this.store.hasAnyPrice()?` · 💰 ${this.store.formatCost(e.cost)}`:""}
        </div>
      </div>
    `}renderRecordRow(e,t){const n=this.store.getSettings().tokenDisplayUnit||"auto";return`
      <tr>
        <td>${new Date(e.timestamp).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}</td>
        <td title="${K(e.apiKeyName)}">${K(e.apiKeyName)}</td>
        <td>${K(e.source)}</td>
        ${t?`<td class="tks-doc-cell" title="${K(e.docId||"")}">${K(e.docPath||"—")}</td>`:""}
        <td>${K(e.model)}</td>
        <td>${P(e.inputTokens,n)}</td>
        <td>${e.cacheReadTokens?P(e.cacheReadTokens,n):"—"}${e.cacheCreationTokens&&e.cacheCreationTokens>0?`<br><span class="tks-sub">写入 ${P(e.cacheCreationTokens,n)}</span>`:""}</td>
        <td>${P(e.outputTokens,n)}${e.reasoningTokens&&e.reasoningTokens>0?`<br><span class="tks-sub">含推理 ${P(e.reasoningTokens,n)}</span>`:""}${e.multimodalEstimated?'<br><span class="tks-sub tks-warn">多模态·估算偏低</span>':""}</td>
        <td><strong>${P(e.totalTokens,n)}</strong></td>
        <td>${this.store.hasAnyPrice()?`${this.store.formatCost(this.store.getRecordCost(e))}<br><span class="tks-sub">缓存 ${this.store.formatCost(this.store.getRecordCacheCost(e))}</span>`:"—"}</td>
        <td>${e.requestTime}ms</td>
        <td>${e.success?"✅":"❌"}</td>
      </tr>
    `}bindEvents(){var t,n,s,o,a,r,i,l,c;if(!this.dialog)return;const e=this.dialog.element;(t=e.querySelector("#tks-refresh"))==null||t.addEventListener("click",()=>{this.refreshContent()}),(n=e.querySelector("#tks-disclaimer-close"))==null||n.addEventListener("click",()=>{M.confirm("隐藏免责提示",`本插件统计数据与 API 供应商官方账单可能存在误差，请以 API 供应商的统计及账单为准。

点击「确认」仅本次会话隐藏（重启思源后将自动恢复显示）。
如需永久关闭此提示，请到「设置 - 仪表盘免责提示」中操作。`,()=>{this.disclaimerDismissed=!0,this.refreshContent()})}),(s=e.querySelector("#tks-sync"))==null||s.addEventListener("click",async u=>{const d=u.currentTarget;if(d.disabled)return;const k=d.textContent;d.disabled=!0,d.textContent="同步中…";try{if(!this.onManualSync){M.showMessage("同步功能未就绪",2e3,"error");return}await this.onManualSync(),this.refreshContent()}catch{M.showMessage("同步失败，请确认思源数据同步已开启",3e3,"error")}finally{d.disabled=!1,d.textContent=k}}),(o=e.querySelector("#tks-export-json"))==null||o.addEventListener("click",()=>{const u=this.store.exportAll();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,u,"application/json"),M.showMessage("数据已导出（JSON）",2e3,"info")}),(a=e.querySelector("#tks-export-csv"))==null||a.addEventListener("click",()=>{const u=this.buildRecordsCsv();this.downloadFile(`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.csv`,u,"text/csv;charset=utf-8"),M.showMessage("数据已导出（CSV）",2e3,"info")}),(r=e.querySelector("#tks-export-diagnostic"))==null||r.addEventListener("click",()=>{const u=this.store.getSettings().diagnosticExportCount||50,k=this.store.getRecords().filter(f=>f.rawUsage&&Object.keys(f.rawUsage).length>0).sort((f,m)=>m.timestamp-f.timestamp),p=u>0?k.slice(0,u):k;if(p.length===0){M.showMessage("暂无可导出的原始 usage 记录（需在设置中开启相关功能后产生）",3e3,"info");return}const v=p.map(f=>({timestamp:f.timestamp,apiKeyName:f.apiKeyName,model:f.model,source:f.source,recorded:{inputTokens:f.inputTokens,outputTokens:f.outputTokens,cacheReadTokens:f.cacheReadTokens??0,cacheCreationTokens:f.cacheCreationTokens??0,reasoningTokens:f.reasoningTokens??0,multimodalEstimated:f.multimodalEstimated??!1,totalTokens:f.totalTokens,estimated:f.estimated??!1},rawUsage:f.rawUsage})),h=JSON.stringify({exportedAt:new Date().toISOString(),note:"原始 usage 来自 API 供应商响应，未做任何裁剪，用于排查用量统计偏差。",count:v.length,records:v},null,2);this.downloadFile(`siyuan-token-stats-usage-${new Date().toISOString().split("T")[0]}.json`,h,"application/json"),M.showMessage(`已导出 ${v.length} 条原始 usage 记录`,3e3,"info")}),(i=e.querySelector("#tks-clear-records"))==null||i.addEventListener("click",()=>{M.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),this.refreshContent(),M.showMessage("记录已清除",2e3,"info")})}),(l=e.querySelector("#tks-trend-apply"))==null||l.addEventListener("click",()=>{var p,v,h;const u=((p=e.querySelector("#tks-trend-start"))==null?void 0:p.value)||"",d=((v=e.querySelector("#tks-trend-end"))==null?void 0:v.value)||"",k=(h=e.querySelector("#tks-trend-aggregation"))==null?void 0:h.value;this.store.updateSettings({trendDateRangeStart:u,trendDateRangeEnd:d,trendAggregation:k}),this.store.save(),this.refreshContent()}),(c=e.querySelector("#tks-trend-reset"))==null||c.addEventListener("click",()=>{this.store.updateSettings({trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily"}),this.store.save(),this.refreshContent()})}downloadFile(e,t,n){const s=new Blob([t],{type:n}),o=URL.createObjectURL(s),a=document.createElement("a");a.href=o,a.download=e,a.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}buildRecordsCsv(){var r;const e=this.store.getRecords().slice().sort((i,l)=>i.timestamp-l.timestamp),t=this.store.getSettings().currency||"¥",n=this.summary,s=i=>{const l=String(i);return/[",\n]/.test(l)?`"${l.replace(/"/g,'""')}"`:l},o=[];n&&(o.push(`# 总Token,${n.totalTokens}`),o.push(`# 输入Token,${n.totalInputTokens}`),o.push(`# 输出Token,${n.totalOutputTokens}`),o.push(`# 请求数,${n.totalRequests}`),o.push(`# 总费用,${t}${n.totalCost.toFixed(4)}`)),o.push(`# 记录数,${e.length}`);const a=this.store.getArchives();a.length>0&&o.push(`# 归档月份数,${a.length}`),o.push(["时间","模型","输入Token","缓存命中Token","输出Token","总计Token","费用","缓存成本","Key名称","文档","耗时(ms)","成功"].join(","));for(const i of e){const l=new Date(i.timestamp),c=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")} ${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`,u=((r=this.store.getApiKey(i.apiKeyId))==null?void 0:r.name)||i.apiKeyName||"",d=this.store.hasAnyPrice()?this.store.getRecordCacheCost(i).toFixed(4):"";o.push([c,i.model,i.inputTokens,i.cacheReadTokens??"",i.outputTokens,i.totalTokens,t+this.store.getRecordCost(i).toFixed(4),t+d,u,i.docPath||"",i.requestTime,i.success?"是":"否"].map(s).join(","))}for(const i of a)o.push([`${i.month} (归档)`,"归档(按月聚合)",i.totalInputTokens,i.totalCacheReadTokens,i.totalOutputTokens,i.totalTokens,t+i.cost.toFixed(4),t+i.cacheCost.toFixed(4),"","","—"].map(s).join(","));return"\uFEFF"+o.join(`
`)}renderProgress(e,t,n="ok"){const s=Math.max(0,Math.min(100,e));return`<div class="tks-progress">
      <div class="tks-progress-head"><span>${K(t)}</span><span>${e.toFixed(1)}%</span></div>
      <div class="tks-progress-track"><div class="tks-progress-fill tks-progress-fill--${n}" style="width:${s}%"></div></div>
    </div>`}renderForecastPanel(e,t){if(t.enableForecast===!1)return"";const n=Ne(this.store,t,this.keyManager,new Date),s=t.tokenDisplayUnit||"auto";if(!n.hasData)return'<div class="tks-section"><h3 class="tks-section-title">🔮 月末预测</h3><div class="tks-empty-chart">当前周期内暂无用量数据，产生调用后将自动预测月末费用与 Token。</div></div>';const o=this.store.getCurrency(),a=c=>c>100?"over":c>80?"warn":"ok",r=n.tokenLimit>0?this.renderProgress(n.projectedTokenPercent,"预计月末 Token 占限额",a(n.projectedTokenPercent)):"",i=n.costLimit>0?this.renderProgress(n.projectedCostPercent,"预计月末费用占限额",a(n.projectedCostPercent)):"",l=t.forecastMethod==="linear"?"已用日均线性外推":`最近 ${t.forecastWindowDays||7} 日趋势`;return`<div class="tks-section">
      <h3 class="tks-section-title">🔮 月末预测（${K(n.cycleLabel)}）</h3>
      <div class="tks-forecast-grid">
        <div class="tks-fc-card"><div class="tks-fc-value">${o}${n.projectedCost.toFixed(2)}</div><div class="tks-fc-label">预计月末费用</div><div class="tks-fc-sub">已用 ${o}${n.usedCost.toFixed(2)} · 日均 ${o}${n.runRateCost.toFixed(2)}</div></div>
        <div class="tks-fc-card"><div class="tks-fc-value">${P(n.projectedTokens,s)}</div><div class="tks-fc-label">预计月末 Token</div><div class="tks-fc-sub">已用 ${P(n.usedTokens,s)} · 日均 ${P(n.runRateTokens,s)}</div></div>
        <div class="tks-fc-card"><div class="tks-fc-value">${n.daysLeft.toFixed(0)}</div><div class="tks-fc-label">剩余天数</div><div class="tks-fc-sub">共 ${n.daysTotal} 天 · 已过 ${n.daysElapsed.toFixed(1)} 天</div></div>
      </div>
      ${r}${i}
      <div class="tks-fc-note">预测基于「${K(l)}」，仅供参考，实际以 API 供应商官方账单为准。</div>
    </div>`}renderAnomalyPanel(e,t){if(t.enableAnomaly===!1)return"";const n=qe(this.store,t,new Date);if(!n.hasData)return'<div class="tks-section"><h3 class="tks-section-title">⚠️ 用量异常</h3><div class="tks-empty-chart">暂无足够数据，异常检测需至少 3 天用量记录。</div></div>';const s=n.anomalies.map(a=>`<div class="tks-anom ${a.severity==="high"?"tks-anom--high":"tks-anom--med"}">
        <div class="tks-anom-date">${K(a.date)}</div>
        <div class="tks-anom-body">
          <div class="tks-anom-reason">${K(a.reason)}</div>
          <div class="tks-anom-meta">Z=${a.z.toFixed(1)} · 偏离均值 ${a.deviationPct.toFixed(0)}%</div>
        </div>
      </div>`).join(""),o=n.newModels.length>0?`<div class="tks-anom-note">🆕 近 7 天新出现的模型：${n.newModels.map(a=>K(a)).join("、")}</div>`:"";return`<div class="tks-section">
      <h3 class="tks-section-title">⚠️ 用量异常（近 ${t.anomalyLookbackDays||30} 天）</h3>
      ${n.anomalies.length===0?`<div class="tks-empty-chart">未检测到显著异常（阈值 Z ≥ ${(t.anomalySensitivity||2.5).toFixed(1)}）。</div>`:`<div class="tks-anom-list">${s}</div>`}
      ${o}
    </div>`}renderSuggestionsPanel(e,t){if(t.enableSuggestions===!1)return"";const n=_e(this.store,t,e);return n.length===0?'<div class="tks-section"><h3 class="tks-section-title">💡 优化建议</h3><div class="tks-empty-chart">暂无优化建议，当前用量结构较为均衡。</div></div>':`<div class="tks-section">
      <h3 class="tks-section-title">💡 优化建议</h3>
      <div class="tks-sug-list">${n.map(o=>{const a=o.severity==="high"?"tks-sug--high":o.severity==="medium"?"tks-sug--med":"tks-sug--low",r=o.severity==="high"?"高":o.severity==="medium"?"中":"低",i=typeof o.estimatedSaving=="number"&&o.estimatedSaving>0?`<span class="tks-sug-saving">预估可省 ${this.store.getCurrency()}${o.estimatedSaving.toFixed(2)}/周期</span>`:"";return`<div class="tks-sug ${a}">
        <div class="tks-sug-head"><span class="tks-sug-sev">${r}</span><span class="tks-sug-title">${K(o.title)}</span>${i}</div>
        <div class="tks-sug-detail">${K(o.detail)}</div>
      </div>`}).join("")}</div>
    </div>`}}const Qe=`<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="iconTokenStats" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>
    <rect x="9.5" y="16" width="3" height="7" rx="0.8" fill="currentColor"/>
    <rect x="14.5" y="12" width="3" height="11" rx="0.8" fill="currentColor"/>
    <rect x="19.5" y="9" width="3" height="14" rx="0.8" fill="currentColor"/>
  </symbol>
</svg>`;class Ye extends M.Plugin{constructor(){super(...arguments),this.styleElement=null,this.syncHandler=null,this.mergeTimer=null,this.merging=!1,this.topBarItem=null,this.badgeEl=null,this.badgeTimer=null,this.lsHeartbeatTimer=null}async onload(){console.log("[TokenStats] Plugin loading..."),console.log(`[TokenStats] Frontend: ${M.getFrontend()}`),this.styleElement=document.createElement("style"),this.styleElement.id="siyuan-token-stats-style",this.styleElement.textContent=we,document.head.appendChild(this.styleElement),this.addIcons(Qe),this.store=new Ae(this),await this.store.load(),this.tokenCounter=new Re,this.keyManager=new Me(this.store),this.interceptor=new Ue(this.store,this.keyManager,this.tokenCounter),this.dashboard=new Ge(this.store,this.keyManager),this.interceptor.setThresholdCallback((e,t)=>{this.store.getSettings().showNotifications&&M.showMessage(t,5e3,"info")}),this.interceptor.install(),this.topBarItem=this.addTopBar({icon:"iconTokenStats",title:"Token 用量统计",position:"right",callback:()=>{this.dashboard.show()}}),this.initTopBarBadge(),this.settingsPanel=new Oe(this.store,this.keyManager),this.settingsPanel.onManualSync=()=>this.manualSyncFull(),this.dashboard.onManualSync=()=>this.manualSyncFull(),this.setting=this.settingsPanel.setting,this.addCommand({langKey:"showTokenStats",langText:"打开 Token 用量统计",hotkey:"",callback:()=>{this.dashboard.show()}}),this.syncHandler=e=>{const t=typeof(e==null?void 0:e.detail)=="string"?e.detail:JSON.stringify((e==null?void 0:e.detail)??"");console.log("[TokenStats] Sync event received, merging data...",t.substring(0,100)),setTimeout(()=>this.mergeFromRemote(),2500)},this.eventBus.on("sync-end",this.syncHandler),setTimeout(()=>this.mergeFromRemote(),5e3),this.mergeTimer=window.setInterval(()=>this.mergeFromRemote(),6e4),console.log("[TokenStats] Plugin loaded successfully."),this.lsHeartbeatTimer=window.setInterval(()=>{this.store.saveToLocalStorage()},1e4)}onunload(){var e,t,n,s,o;console.log("[TokenStats] Plugin unloading..."),this.mergeTimer!==null&&(clearInterval(this.mergeTimer),this.mergeTimer=null),this.badgeTimer!==null&&(clearInterval(this.badgeTimer),this.badgeTimer=null),this.lsHeartbeatTimer!==null&&(clearInterval(this.lsHeartbeatTimer),this.lsHeartbeatTimer=null),this.syncHandler&&(this.eventBus.off("sync-end",this.syncHandler),this.syncHandler=null),(e=this.interceptor)==null||e.uninstall(),(t=this.store)==null||t.saveToLocalStorage(),(n=this.store)==null||n.saveSync(),(s=this.store)==null||s.save().catch(a=>console.error("[TokenStats] Save on unload failed:",a)),(o=this.styleElement)==null||o.remove(),this.styleElement=null,this.topBarItem&&(this.topBarItem.remove(),this.topBarItem=null),this.badgeEl=null,console.log("[TokenStats] Plugin unloaded.")}async mergeFromRemote(){this.store.getSettings().syncStatistics&&await this.doMerge()}async doMerge(){if(this.merging)return!1;this.merging=!0;try{const e=await this.store.mergeFromRemote();return e&&this.settingsPanel.refreshFromStore(),this.updateBadge(),this.checkThresholdsLive(),e}catch(e){return console.warn("[TokenStats] Sync merge failed:",e),!1}finally{this.merging=!1}}async manualSyncFull(){let e=!1,t="";try{const s=await M.fetchSyncPost("/api/sync/performSync",{app:"siyuan-token-stats"});s.code===0?e=!0:t=s.msg?String(s.msg):`code=${s.code}`}catch(s){t=s instanceof Error?s.message:String(s)}e&&(M.showMessage("已触发思源云同步，等待同步完成…",2e3,"info"),await new Promise(s=>setTimeout(s,5e3)));const n=await this.doMerge();return n?M.showMessage("已合并其他端统计",2e3,"info"):e?M.showMessage("已是最新，无新数据（请确认其他端已完成过云同步）",3500,"info"):t?M.showMessage(`未能触发思源云同步：${t}。请先在思源「设置 - 关于 - 云端」启用并登录云同步，再点此按钮。`,6e3,"info"):M.showMessage("已是最新，无新数据（建议先在思源设置中开启云同步）",3500,"info"),n}initTopBarBadge(){if(!this.topBarItem)return;const e=document.createElement("span");e.className="tks-topbar-badge",e.style.display="none",this.topBarItem.style.position="relative",this.topBarItem.appendChild(e),this.badgeEl=e,this.updateBadge(),this.badgeTimer=window.setInterval(()=>{this.updateBadge(),this.checkThresholdsLive()},3e3)}updateBadge(){const e=this.badgeEl;if(!e)return;const t=this.store.getSettings();if(!t.showTopBarBadge){e.style.display="none";return}if(e.title="",t.globalCostLimit>0){const a=this.keyManager.getGlobalCostPercent(t),r=this.keyManager.getGlobalCostUsage(t),i=t.currency||"¥";let l,c="neutral";l=`${a.toFixed(0)}%`;const u=t.globalCostAlertThreshold>0?t.globalCostAlertThreshold:70;a>=90||this.keyManager.isGlobalCostExceeded(t)?c="danger":a>=u?c="warn":c="ok",e.textContent=l,e.className=`tks-topbar-badge tks-badge-${c}`,e.style.display="inline-block",e.title=`费用 ${i}${r.totalCost.toFixed(2)} / ${i}${t.globalCostLimit.toFixed(2)}`;return}const n=this.keyManager.getGlobalUsage(t);let s,o="neutral";if(t.globalQuotaLimit>0){const a=this.keyManager.getGlobalUsagePercent(t);s=`${Math.round(a)}%`;const r=t.globalAlertThreshold>0?t.globalAlertThreshold:70;a>=90||this.keyManager.isGlobalQuotaExceeded(t)?o="danger":a>=r?o="warn":o="ok"}else s=this.formatCompactTokens(n.totalTokens),o="neutral";e.textContent=s,e.className=`tks-topbar-badge tks-badge-${o}`,e.style.display="inline-block"}checkThresholdsLive(){this.store.getSettings().showNotifications&&this.keyManager.checkAllThresholds(t=>M.showMessage(t,5e3,"info"))}formatCompactTokens(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}}module.exports=Ye;

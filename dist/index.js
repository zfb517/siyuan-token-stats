"use strict";const T=require("siyuan"),ie=`/* ═══════════════════════════════════════════
   Token Statistics Plugin - Styles
   使用 SiYuan CSS 变量，自动适配明暗主题
   ═══════════════════════════════════════════ */

/* ─── 仪表盘 ─── */
.tks-dashboard {
  padding: 16px 20px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
}

.tks-summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
}

@media (max-width: 800px) {
  .tks-summary-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ─── 移动端适配（含鸿蒙 NEXT） ─── */
@media (max-width: 600px) {
  .tks-dashboard {
    padding: 10px 12px;
  }

  .tks-summary-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }

  .tks-card {
    padding: 8px 10px;
  }

  .tks-card-icon {
    font-size: 18px;
  }

  .tks-card-value {
    font-size: 14px;
  }

  .tks-card-label {
    font-size: 10px;
  }

  .tks-section-title {
    font-size: 13px;
  }

  /* Key 统计条在窄屏下改为更紧凑布局 */
  .tks-key-stat-header {
    flex-wrap: wrap;
  }

  /* 模型分布条在窄屏下名称缩短 */
  .tks-model-name {
    width: 80px;
    font-size: 11px;
  }

  .tks-model-detail {
    width: 100px;
    font-size: 10px;
  }

  /* 记录表横向滚动 */
  .tks-records-table-wrap {
    overflow-x: auto;
  }

  .tks-records-table {
    min-width: 600px;
  }

  /* Key 管理项垂直布局 */
  .tks-key-item {
    flex-direction: column;
    align-items: stretch;
  }

  .tks-key-actions {
    margin-left: 0;
    margin-top: 8px;
    justify-content: flex-end;
  }

  .tks-key-quota {
    flex-wrap: wrap;
  }

  .tks-quota-bar {
    width: 100%;
  }

  /* Key 编辑器双列改单列 */
  .tks-form-row-2col {
    grid-template-columns: 1fr;
  }

  /* 仪表盘操作按钮 */
  .tks-dashboard-actions {
    flex-wrap: wrap;
  }
}

.tks-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: var(--b3-theme-surface);
  border: 1px solid var(--b3-border-color);
  border-radius: 8px;
}

.tks-card-icon {
  font-size: 24px;
  line-height: 1;
}

.tks-card-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--b3-theme-primary);
  line-height: 1.2;
}

.tks-card-label {
  font-size: 11px;
  color: var(--b3-theme-on-surface);
  margin-top: 2px;
}

/* ─── 区块 ─── */
.tks-section {
  margin-bottom: 20px;
}

.tks-section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--b3-theme-on-background);
  margin: 0 0 10px 0;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--b3-border-color);
}

/* ─── API Key 统计条 ─── */
.tks-key-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tks-key-stat {
  padding: 10px 12px;
  background: var(--b3-theme-surface);
  border: 1px solid var(--b3-border-color);
  border-radius: 6px;
  transition: border-color 0.2s;
}

.tks-key-stat-alert {
  border-color: var(--b3-theme-warning, #d97706);
}

.tks-key-stat-exceeded {
  border-color: var(--b3-theme-error);
}

.tks-key-stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.tks-key-stat-name {
  font-weight: 600;
  font-size: 13px;
  color: var(--b3-theme-on-background);
}

.tks-key-stat-requests {
  font-size: 12px;
  color: var(--b3-theme-on-surface);
}

.tks-key-stat-bar {
  height: 8px;
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 4px;
}

.tks-key-stat-fill {
  height: 100%;
  background: var(--b3-theme-primary);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.tks-key-stat-fill.alert {
  background: var(--b3-theme-warning, #d97706);
}

.tks-key-stat-fill.exceeded {
  background: var(--b3-theme-error);
}

.tks-key-stat-detail {
  font-size: 11px;
  color: var(--b3-theme-on-surface);
}

/* ─── Token 趋势控制 ─── */
.tks-trend-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--b3-theme-on-surface);
}

.tks-trend-controls input[type="date"] {
  width: 130px;
  padding: 4px 8px;
  font-size: 12px;
}

.tks-trend-controls .b3-select {
  width: auto;
  min-width: 70px;
  padding: 4px 8px;
  font-size: 12px;
}

.tks-trend-controls .b3-button {
  padding: 4px 10px;
  font-size: 12px;
}

.tks-empty-chart {
  text-align: center;
  padding: 30px;
  color: var(--b3-theme-on-surface);
  font-size: 12px;
  background: var(--b3-theme-surface);
  border: 1px dashed var(--b3-border-color);
  border-radius: 6px;
}

.tks-card-global .tks-card-value {
  color: var(--b3-theme-warning, #d97706);
}

/* ─── 每日趋势图 ─── */
.tks-daily-chart {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 140px;
  padding: 10px;
  background: var(--b3-theme-surface);
  border: 1px solid var(--b3-border-color);
  border-radius: 6px;
  overflow-x: auto;
}

.tks-daily-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 40px;
  height: 100%;
  justify-content: flex-end;
}

.tks-daily-value {
  font-size: 10px;
  color: var(--b3-theme-on-surface);
  margin-bottom: 4px;
  white-space: nowrap;
}

.tks-daily-col {
  width: 70%;
  flex: 1;
  display: flex;
  align-items: flex-end;
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.04));
  border-radius: 3px 3px 0 0;
}

.tks-daily-fill {
  width: 100%;
  background: linear-gradient(180deg, var(--b3-theme-primary), var(--b3-theme-primary-light, rgba(0, 0, 0, 0.2)));
  border-radius: 3px 3px 0 0;
  transition: height 0.3s ease;
}

.tks-daily-date {
  font-size: 10px;
  color: var(--b3-theme-on-surface);
  margin-top: 4px;
}

/* ─── 模型分布 ─── */
.tks-model-stats {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tks-model-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.tks-model-name {
  width: 150px;
  flex-shrink: 0;
  color: var(--b3-theme-on-background);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tks-model-bar-track {
  flex: 1;
  height: 18px;
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));
  border-radius: 3px;
  overflow: hidden;
}

.tks-model-bar-fill {
  height: 100%;
  background: var(--b3-theme-primary);
  border-radius: 3px;
  transition: width 0.3s ease;
  opacity: 0.7;
}

.tks-model-detail {
  width: 180px;
  flex-shrink: 0;
  color: var(--b3-theme-on-surface);
  font-size: 11px;
  text-align: right;
}

/* ─── 请求记录表 ─── */
.tks-records-table-wrap {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid var(--b3-border-color);
  border-radius: 6px;
}

.tks-records-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.tks-records-table thead {
  position: sticky;
  top: 0;
  z-index: 1;
}

.tks-records-table th {
  background: var(--b3-theme-surface);
  color: var(--b3-theme-on-surface);
  padding: 8px 10px;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid var(--b3-border-color);
  white-space: nowrap;
}

.tks-records-table td {
  padding: 6px 10px;
  border-bottom: 1px solid var(--b3-border-color);
  color: var(--b3-theme-on-background);
  white-space: nowrap;
}

.tks-records-table tbody tr:hover {
  background: var(--b3-list-hover, rgba(0, 0, 0, 0.03));
}

/* ─── 仪表盘操作按钮 ─── */
.tks-dashboard-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding-top: 10px;
  border-top: 1px solid var(--b3-border-color);
}

/* ─── API Key 管理对话框 ─── */
.tks-key-mgr {
  padding: 16px 20px;
  height: 100%;
  overflow-y: auto;
}

.tks-key-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--b3-border-color);
}

.tks-key-toolbar > button {
  margin-right: 6px;
}

.tks-key-hint {
  font-size: 12px;
  color: var(--b3-theme-on-surface);
  margin-left: auto;
}

.tks-key-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tks-key-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: var(--b3-theme-surface);
  border: 1px solid var(--b3-border-color);
  border-radius: 6px;
}

.tks-key-info {
  flex: 1;
  min-width: 0;
}

.tks-key-name {
  font-weight: 600;
  font-size: 13px;
  color: var(--b3-theme-on-background);
  margin-bottom: 4px;
}

.tks-badge {
  display: inline-block;
  padding: 1px 6px;
  font-size: 10px;
  border-radius: 3px;
  background: var(--b3-theme-primary-light, rgba(0, 0, 0, 0.08));
  color: var(--b3-theme-primary);
  margin-left: 4px;
  vertical-align: middle;
}

.tks-badge-off {
  background: rgba(0, 0, 0, 0.06);
  color: var(--b3-theme-on-surface);
}

.tks-key-detail {
  font-size: 11px;
  color: var(--b3-theme-on-surface);
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
}

.tks-key-provider {
  padding: 0 4px;
  border-radius: 2px;
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));
  white-space: nowrap;
}

.tks-key-url {
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--b3-theme-on-surface);
}

.tks-key-quota {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tks-quota-bar {
  width: 120px;
  height: 6px;
  background: var(--b3-theme-background-light, rgba(0, 0, 0, 0.06));
  border-radius: 3px;
  overflow: hidden;
}

.tks-quota-fill {
  height: 100%;
  background: var(--b3-theme-primary);
  border-radius: 3px;
}

.tks-quota-fill.tks-quota-alert {
  background: var(--b3-theme-warning, #d97706);
}

.tks-quota-text {
  font-size: 11px;
  color: var(--b3-theme-on-surface);
  white-space: nowrap;
}

.tks-key-actions {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
  margin-left: 10px;
}

/* ─── Key 编辑器表单 ─── */
.tks-key-editor {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.tks-form-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tks-form-row label {
  font-size: 12px;
  font-weight: 600;
  color: var(--b3-theme-on-background);
}

.tks-form-row .b3-text-field,
.tks-form-row .b3-select {
  width: 100%;
}

.tks-form-row-2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.tks-form-hint {
  font-size: 11px;
  color: var(--b3-theme-on-surface);
}

.tks-form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
}

/* ─── 弹窗位置 + 滚动支持 ─── */
/* 使用 overlay 的 align-items + padding-top 控制垂直位置，避免与 Dialog 拖拽时设置的 inline margin 冲突 */
.b3-dialog:has([id^="tks-"]) {
  align-items: flex-start;
  padding-top: 5vh;
}

.b3-dialog:has([id^="tks-"]) .b3-dialog__container {
  max-width: 96vw;
  max-height: 92vh;
}

.b3-dialog:has([id^="tks-"]) .b3-dialog__body {
  max-height: calc(82vh - 120px);
  overflow-y: auto;
}

/* 移除仪表盘内部滚动，统一交给 dialog body */
.tks-dashboard {
  max-height: none;
  overflow-y: visible;
}

/* 滚动条样式 */
.b3-dialog:has([id^="tks-"]) .b3-dialog__body::-webkit-scrollbar {
  width: 6px;
}

.b3-dialog:has([id^="tks-"]) .b3-dialog__body::-webkit-scrollbar-thumb {
  background: var(--b3-theme-on-surface-light, rgba(0, 0, 0, 0.2));
  border-radius: 3px;
}
`,L="data/storage/siyuan-token-stats/data.json",re="data/storage/siyuan-token-stats/data.json.bak",q="data/plugins/siyuan-token-stats/settings.json",R="siyuan-token-stats-data",D="1.3.0",$={matchByUrl:!0,interceptExternalAPIs:!0,blockOnQuotaExceeded:!1,quotaResetCycle:"monthly",abortStreamOnExceeded:!0,showNotifications:!0,maxRecords:5e3,globalQuotaLimit:0,globalAlertThreshold:0,globalQuotaResetCycle:"monthly",globalUsedTokensOffset:0,globalUsedInputTokensOffset:0,globalUsedOutputTokensOffset:0,trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily",debugLogging:!1};class le{constructor(){this.saveTimer=null,this.data={version:D,lastSavedAt:0,apiKeys:[],records:[],settings:{...$}}}async load(){try{let e=null;try{const s=await fetch(`/api/file/getFile?path=${encodeURIComponent(L)}`);if(s.ok){const o=await s.text();o&&(e=JSON.parse(o))}}catch{}if(!e)try{const s=await fetch(`/api/file/getFile?path=${encodeURIComponent(q)}`);if(s.ok){const o=await s.text();if(o){const r=JSON.parse(o);r&&r.lastSavedAt&&(console.log("[TokenStats] Main storage missing, recovered from plugin directory backup."),e=r)}}}catch{}if(!e)try{const s=localStorage.getItem(R);if(s){const o=JSON.parse(s);o&&o.lastSavedAt&&(console.log("[TokenStats] Recovered data from localStorage."),e=o)}}catch{}if(!e){console.log("[TokenStats] No existing data file, starting fresh.");return}const t=(e.apiKeys||[]).map(s=>{const o={...s};return o.id==="siyuan-built-in"&&o.provider==="siyuan"&&(o.provider=o.baseUrl?o.baseUrl:"SiYuan AI"),o.usedTokensOffset===void 0&&(o.usedTokensOffset=0),o.usedInputTokensOffset===void 0&&(o.usedInputTokensOffset=0),o.usedOutputTokensOffset===void 0&&(o.usedOutputTokensOffset=0),Array.isArray(o.models)||(o.models=[]),o}),n={...$,...e.settings};if("autoDetectSiYuanAI"in(e.settings||{})){const s=e.settings;n.matchByUrl=s.autoDetectSiYuanAI}this.data={version:D,lastSavedAt:e.lastSavedAt||0,apiKeys:t,records:e.records||[],settings:n},console.log(`[TokenStats] Loaded: ${this.data.apiKeys.length} keys, ${this.data.records.length} records.`)}catch(e){console.warn("[TokenStats] Failed to load data, starting fresh:",e)}}scheduleSave(e=500){this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.save().catch(t=>console.error("[TokenStats] Save failed:",t))},e)}async save(){try{this.data.lastSavedAt=Date.now();try{const n=await fetch(`/api/file/getFile?path=${encodeURIComponent(L)}`);if(n.ok){const s=await n.text();if(s){const o=new FormData;o.append("path",re),o.append("file",new Blob([s],{type:"application/json"})),await fetch("/api/file/putFile",{method:"POST",body:o})}}}catch{}const e=new FormData;e.append("path",L),e.append("file",new Blob([JSON.stringify(this.data,null,2)],{type:"application/json"}));const t=await fetch("/api/file/putFile",{method:"POST",body:e});if(!t.ok)throw new Error(`putFile returned ${t.status}`);try{const n=new FormData;n.append("path",q),n.append("file",new Blob([JSON.stringify(this.data,null,2)],{type:"application/json"})),await fetch("/api/file/putFile",{method:"POST",body:n})}catch{}try{localStorage.setItem(R,JSON.stringify(this.data))}catch{}}catch(e){console.error("[TokenStats] Failed to save data:",e);try{localStorage.setItem(R,JSON.stringify(this.data))}catch{}}}saveSync(){try{this.data.lastSavedAt=Date.now();const e=JSON.stringify(this.data,null,2);try{const t=new XMLHttpRequest;t.open("POST","/api/file/putFile",!1);const n=new FormData;n.append("path",L),n.append("file",new Blob([e],{type:"application/json"})),t.send(n)}catch{}try{const t=new XMLHttpRequest;t.open("POST","/api/file/putFile",!1);const n=new FormData;n.append("path",q),n.append("file",new Blob([e],{type:"application/json"})),t.send(n)}catch{}try{localStorage.setItem(R,e)}catch{}console.log("[TokenStats] Synchronous save completed (E + F + localStorage).")}catch(e){console.error("[TokenStats] saveSync error:",e)}}async mergeFromRemote(){try{const e=await fetch(`/api/file/getFile?path=${encodeURIComponent(L)}`);if(!e.ok)return;const t=await e.text();if(!t)return;const n=JSON.parse(t);if(!n)return;const s=this.data,o=n.lastSavedAt||0,r=s.lastSavedAt||0;if(o===r&&o>0){console.log("[TokenStats] Sync merge: data unchanged, skipping.");return}console.log(`[TokenStats] Sync merge: local ${r}, remote ${o}`);const i=n.records||[],a=new Map;for(const b of s.records)a.set(b.id,b);for(const b of i)a.has(b.id)||a.set(b.id,b);const l=Array.from(a.values()).sort((b,x)=>b.timestamp-x.timestamp),u=s.settings.maxRecords,d=l.length>u?l.slice(-u):l,c=n.apiKeys||[],g=new Map,f=r>=o,p=f?c:s.apiKeys,h=f?s.apiKeys:c;for(const b of p)g.set(b.id,b);for(const b of h)g.set(b.id,b);const v=Array.from(g.values()),k=f?{...$,...s.settings}:{...$,...n.settings};this.data={version:D,lastSavedAt:Math.max(r,o),apiKeys:v,records:d,settings:k},await this.save(),console.log(`[TokenStats] Sync merge complete: ${v.length} keys, ${d.length} records.`)}catch(e){console.warn("[TokenStats] Sync merge failed:",e)}}getApiKeys(){return this.data.apiKeys}getApiKey(e){return this.data.apiKeys.find(t=>t.id===e)}addApiKey(e){this.data.apiKeys.push(e),this.scheduleSave()}updateApiKey(e,t){const n=this.data.apiKeys.findIndex(s=>s.id===e);n>=0&&(this.data.apiKeys[n]={...this.data.apiKeys[n],...t},this.scheduleSave())}deleteApiKey(e){this.data.apiKeys=this.data.apiKeys.filter(t=>t.id!==e),this.scheduleSave()}addRecord(e){const t=this.data.records,n=t.slice(-5);for(const o of n)if(o.apiKeyId===e.apiKeyId&&o.timestamp===e.timestamp&&o.totalTokens===e.totalTokens&&o.model===e.model){console.log("[TokenStats] Duplicate record skipped:",e.apiKeyName,e.model,e.totalTokens);return}t.push(e);const s=this.data.settings.maxRecords;t.length>s&&(this.data.records=t.slice(-s)),this.scheduleSave()}getRecords(){return this.data.records}getRecentRecords(e=50){return[...this.data.records].sort((t,n)=>n.timestamp-t.timestamp).slice(0,e)}clearRecords(){this.data.records=[],this.scheduleSave()}clearAll(){this.data.records=[],this.data.apiKeys=[],this.scheduleSave()}getSettings(){return this.data.settings}updateSettings(e){this.data.settings={...this.data.settings,...e},this.scheduleSave()}resetSettings(){this.data.settings={...$},this.scheduleSave()}exportAll(){return JSON.stringify(this.data,null,2)}exportRecords(){return JSON.stringify(this.data.records,null,2)}}function O(m){if(!m)return"";try{const e=new URL(m,window.location.href);return e.pathname+e.search}catch{return m}}class de{constructor(e){this.store=e,this.alertedKeys=new Set,this.alertedGlobal=!1}getAllKeys(){return this.store.getApiKeys()}findByKey(e){if(e)return this.store.getApiKeys().find(t=>t.enabled&&t.keyFull&&t.keyFull===e)}findByUrl(e){const t=O(e);if(t)return this.store.getApiKeys().find(n=>{if(!n.enabled||!n.baseUrl)return!1;const s=O(n.baseUrl);return s?t.includes(s)||s.includes(t):!1})}findByUrlAndModel(e,t){if(!e)return;const n=this.store.getApiKeys().filter(s=>{if(!s.enabled||!s.baseUrl)return!1;const o=O(s.baseUrl),r=O(e);return o&&r?r.includes(o)||o.includes(r):!1});if(n.length!==0){if(t){const s=String(t).toLowerCase().trim();for(const o of n)if(Array.isArray(o.models)&&o.models.find(r=>String(r).toLowerCase().trim()===s))return o}return n[0]}}findByModel(e){if(!e)return;const t=String(e).toLowerCase().trim();return this.store.getApiKeys().find(n=>n.enabled?(n.models||[]).map(o=>String(o).toLowerCase().trim()).includes(t):!1)}getResetBoundary(e){if(e==="none")return 0;const t=new Date;return e==="daily"?new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime():new Date(t.getFullYear(),t.getMonth(),1).getTime()}getKeyUsage(e){const t=this.store.getSettings(),n=this.getResetBoundary(t.quotaResetCycle),s=this.store.getApiKey(e),o=this.store.getRecords().filter(l=>l.apiKeyId===e&&l.timestamp>=n),r=(s==null?void 0:s.usedTokensOffset)??0,i=(s==null?void 0:s.usedInputTokensOffset)??0,a=(s==null?void 0:s.usedOutputTokensOffset)??0;return{totalTokens:o.reduce((l,u)=>l+u.totalTokens,0)+r,totalInputTokens:o.reduce((l,u)=>l+u.inputTokens,0)+i,totalOutputTokens:o.reduce((l,u)=>l+u.outputTokens,0)+a,totalRequests:o.length}}getRemainingQuota(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return-1;const n=this.getKeyUsage(e);return Math.max(0,t.quotaLimit-n.totalTokens)}getUsagePercent(e){const t=this.store.getApiKey(e);if(!t||t.quotaLimit<=0)return 0;const n=this.getKeyUsage(e);return Math.min(100,n.totalTokens/t.quotaLimit*100)}isQuotaExceeded(e){const t=this.store.getApiKey(e);return!t||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens>=t.quotaLimit}wouldExceedQuota(e,t){const n=this.store.getApiKey(e);return!n||n.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens+t>n.quotaLimit}isThresholdReached(e){const t=this.store.getApiKey(e);return!t||t.alertThreshold<=0||t.quotaLimit<=0?!1:this.getKeyUsage(e).totalTokens/t.quotaLimit*100>=t.alertThreshold}checkThreshold(e,t){const n=this.store.getApiKey(e);if(n){if(this.alertedKeys.has(e)&&!this.isThresholdReached(e)&&this.alertedKeys.delete(e),this.isThresholdReached(e)&&!this.alertedKeys.has(e)){this.alertedKeys.add(e);const s=this.getKeyUsage(e),o=(s.totalTokens/n.quotaLimit*100).toFixed(1),r=`⚠️ Token 用量提醒：${n.name} 已使用 ${o}%（${s.totalTokens.toLocaleString()} / ${n.quotaLimit.toLocaleString()} tokens）`;t(r)}if(this.isQuotaExceeded(e)){const s=`⛔ Token 限额已用尽：${n.name}（限额 ${n.quotaLimit.toLocaleString()} tokens）`;t(s)}}}resetAlert(e){this.alertedKeys.delete(e)}clearAllAlerts(){this.alertedKeys.clear(),this.alertedGlobal=!1}generateKeyId(){return`key-${Date.now()}-${Math.random().toString(36).substring(2,8)}`}maskKey(e){return e?e.length<=8?e.substring(0,2)+"***":e.substring(0,5)+"..."+e.substring(e.length-4):"(空)"}getDefaultBaseUrl(e){return{openai:"https://api.openai.com/v1/chat/completions",anthropic:"https://api.anthropic.com/v1/messages",deepseek:"https://api.deepseek.com/v1/chat/completions"}[e.toLowerCase()]||""}getGlobalUsage(e){const t=this.getResetBoundary(e.globalQuotaResetCycle),n=this.store.getRecords().filter(s=>s.timestamp>=t);return{totalTokens:n.reduce((s,o)=>s+o.totalTokens,0)+(e.globalUsedTokensOffset??0),totalInputTokens:n.reduce((s,o)=>s+o.inputTokens,0)+(e.globalUsedInputTokensOffset??0),totalOutputTokens:n.reduce((s,o)=>s+o.outputTokens,0)+(e.globalUsedOutputTokensOffset??0),totalRequests:n.length}}getGlobalRemainingQuota(e){if(e.globalQuotaLimit<=0)return-1;const t=this.getGlobalUsage(e);return Math.max(0,e.globalQuotaLimit-t.totalTokens)}getGlobalUsagePercent(e){if(e.globalQuotaLimit<=0)return 0;const t=this.getGlobalUsage(e);return Math.min(100,t.totalTokens/e.globalQuotaLimit*100)}isGlobalQuotaExceeded(e){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens>=e.globalQuotaLimit}wouldExceedGlobalQuota(e,t){return e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens+t>e.globalQuotaLimit}isGlobalThresholdReached(e){return e.globalAlertThreshold<=0||e.globalQuotaLimit<=0?!1:this.getGlobalUsage(e).totalTokens/e.globalQuotaLimit*100>=e.globalAlertThreshold}checkGlobalThreshold(e,t){if(!(e.globalQuotaLimit<=0)){if(this.alertedGlobal&&!this.isGlobalThresholdReached(e)&&(this.alertedGlobal=!1),this.isGlobalThresholdReached(e)&&!this.alertedGlobal){this.alertedGlobal=!0;const n=this.getGlobalUsage(e),o=`⚠️ 全局 Token 用量提醒：已使用 ${(n.totalTokens/e.globalQuotaLimit*100).toFixed(1)}%（${n.totalTokens.toLocaleString()} / ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(o)}if(this.isGlobalQuotaExceeded(e)){const n=`⛔ 全局 Token 限额已用尽（限额 ${e.globalQuotaLimit.toLocaleString()} tokens）`;t(n)}}}resetGlobalAlert(){this.alertedGlobal=!1}}class ce{estimate(e){if(!e)return 0;const t=(e.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g)||[]).length,n=(e.match(/[\u3000-\u303f\uff00-\uffef]/g)||[]).length,s=(e.match(/[a-zA-Z]+/g)||[]).length,o=s*4,r=Math.max(0,e.length-t-n-o),i=Math.ceil(t*1+n*.5+s*1.3+r*.25);return Math.max(0,i)}estimateFromMessages(e){if(!Array.isArray(e))return 0;let t=0;for(const n of e){if(typeof n=="string")t+=this.estimate(n)+4;else if(n!=null&&n.content){if(typeof n.content=="string")t+=this.estimate(n.content)+4;else if(Array.isArray(n.content)){for(const s of n.content)typeof s=="string"?t+=this.estimate(s):s!=null&&s.text&&(t+=this.estimate(s.text));t+=4}}n!=null&&n.role&&(t+=1)}return t}estimateFromText(e){return this.estimate(e)}}function oe(m,e){if(!m)return null;if(m instanceof Headers)return m.get(e);if(Array.isArray(m)){for(const[s,o]of m)if(s.toLowerCase()===e.toLowerCase())return o;return null}const t=m,n=e.toLowerCase();for(const s of Object.keys(t))if(s.toLowerCase()===n)return t[s];return null}function ue(m){return typeof m=="string"?m:m instanceof URL?m.href:m.url}function fe(){return`rec-${Date.now()}-${Math.random().toString(36).substring(2,9)}`}function U(m){return m&&String(m).trim()||""}function ae(m){return!m||m==="unknown"||m==="siyuan-ai"||m==="default"}function E(m){if(!m)return!0;const e=m.trim();return!!(/^\d{14,}-[a-z0-9]+$/i.test(e)||/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)||/^\d+$/.test(e)||e.length>40&&!/[._-]/.test(e))}function I(...m){for(const e of m){const t=U(e);if(t&&!ae(t)&&!E(t))return t}return""}function ge(m){return/\/api\/ai\/agent\/chat\b/i.test(m)||/\/api\/ai\/chatGPT\b/i.test(m)||/\/api\/ai\/chatGPTWithAction\b/i.test(m)}function me(m){return typeof m=="object"&&m!==null&&"code"in m&&"msg"in m&&"data"in m&&!("choices"in m)&&!("usage"in m)}function pe(){return{apiKeyId:"siyuan-ai-default",apiKeyName:"思源智能体",source:"siyuan-ai",provider:"SiYuan AI",model:"unknown"}}class he{constructor(e,t,n){this.installed=!1,this.onThresholdAlert=()=>{},this.siyuanConfigCache=null,this.originalFetch=window.fetch.bind(window),this.store=e,this.keyManager=t,this.tokenCounter=n}setThresholdCallback(e){this.onThresholdAlert=e}keyMatchesModel(e,t){if(!e||!t)return!1;const n=String(t).toLowerCase().trim();return(e.models||[]).map(o=>String(o).toLowerCase().trim()).includes(n)}install(){if(this.installed){console.warn("[TokenStats] Interceptor already installed.");return}this.installed=!0;const e=this;window.fetch=async function(t,n){const s=ue(t),o=e.store.getSettings(),r=await e.extractBodyText(t,n),i=e.tryParseJson(r),a=await e.identifyAiCall(s,n,o,i);if(!a)return e.originalFetch(t,n);e.logDebug(`Intercepted AI call: source=${a.source}, model=${a.model}, key=${a.apiKeyName}`),e.logDebug("Request body",{bodyText:r==null?void 0:r.slice(0,500),parsedBody:i});const l=Date.now();if(o.blockOnQuotaExceeded&&o.globalQuotaLimit>0){const g=e.tokenCounter.estimateFromMessages(e.extractMessages(i));if(e.keyManager.isGlobalQuotaExceeded(o)){const f="[TokenStats] 已阻止请求：全局 Token 限额已用尽";return console.warn(f),e.onThresholdAlert("global",f),e.createBlockedResponse(f,a)}if(e.keyManager.wouldExceedGlobalQuota(o,g)){const p=`[TokenStats] 已阻止请求：全局剩余配额 ${e.keyManager.getGlobalRemainingQuota(o).toLocaleString()} tokens，预估输入 ${g.toLocaleString()} tokens 将超限`;return console.warn(p),e.onThresholdAlert("global",p),e.createBlockedResponse(p,a)}}if(o.blockOnQuotaExceeded){if(e.keyManager.isQuotaExceeded(a.apiKeyId)){const f=e.store.getApiKey(a.apiKeyId),p=`[TokenStats] 已阻止请求：${(f==null?void 0:f.name)||a.apiKeyName} 的 Token 限额已用尽`;return console.warn(p),e.onThresholdAlert(a.apiKeyId,p),e.createBlockedResponse(p,a)}const g=e.tokenCounter.estimateFromMessages(e.extractMessages(i));if(e.keyManager.wouldExceedQuota(a.apiKeyId,g)){const f=e.store.getApiKey(a.apiKeyId),p=e.keyManager.getRemainingQuota(a.apiKeyId),h=`[TokenStats] 已阻止请求：${(f==null?void 0:f.name)||a.apiKeyName} 剩余配额 ${p.toLocaleString()} tokens，预估输入 ${g.toLocaleString()} tokens 将超限`;return console.warn(h),e.onThresholdAlert(a.apiKeyId,h),e.createBlockedResponse(h,a)}}let u,d=!1;try{u=await e.originalFetch(t,n),d=u.ok}catch(g){throw e.recordCall(a,0,0,l,!1,a.model),g}const c=u.clone();return e.analyzeResponse(c,a,l,i,d).catch(g=>console.warn("[TokenStats] Response analysis failed:",g)),u},console.log("[TokenStats] Fetch interceptor installed.")}createBlockedResponse(e,t){const n=JSON.stringify({error:{type:"quota_exceeded",code:"token_stats_blocked",message:e,apiKeyId:t.apiKeyId,apiKeyName:t.apiKeyName}});return new Response(n,{status:429,statusText:"Too Many Requests",headers:{"Content-Type":"application/json","X-TokenStats-Blocked":"true"}})}uninstall(){this.installed&&(window.fetch=this.originalFetch,this.installed=!1,console.log("[TokenStats] Fetch interceptor uninstalled."))}async extractBodyText(e,t){if(t!=null&&t.body&&typeof t.body=="string")return t.body;if((t==null?void 0:t.body)instanceof URLSearchParams)return t.body.toString();if((t==null?void 0:t.body)instanceof FormData)try{const n={};return t.body.forEach((s,o)=>{n[o]=typeof s=="string"?s:s.name}),JSON.stringify(n)}catch{return null}if((t==null?void 0:t.body)instanceof Blob)try{return await t.body.text()}catch{return null}if(t!=null&&t.body&&(t.body instanceof ArrayBuffer||ArrayBuffer.isView(t.body)))try{return new TextDecoder().decode(t.body)}catch{return null}if(e instanceof Request)try{return await e.clone().text()}catch{return null}return null}tryParseJson(e){if(!e)return null;try{return JSON.parse(e)}catch{return null}}isDebugEnabled(){return this.store.getSettings().debugLogging??!1}logDebug(...e){this.isDebugEnabled()&&console.log("[TokenStats]",...e)}async identifyAiCall(e,t,n,s){const o=e.toLowerCase();if(ge(e)){const l=await this.getSiYuanAiConfig(),u=(s==null?void 0:s.model)||null,d=this.extractModel(s)||u||this.getSiYuanSelectedModelId(l);if(d){const g=this.findProviderByModel(l,d),f=g?g.baseURL:null;if(g&&g.apiKey){const h=this.keyManager.findByKey(g.apiKey);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||f||"siyuan-ai",provider:h.provider,model:this.resolveSiYuanModelForCall(s,l)}}const p=this.keyManager.findByModel(d);if(p&&p.enabled)return{apiKeyId:p.id,apiKeyName:p.name,source:p.baseUrl||f||"siyuan-ai",provider:p.provider,model:this.resolveSiYuanModelForCall(s,l)};if(f){const h=this.keyManager.findByUrlAndModel(f,d);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||f||"siyuan-ai",provider:h.provider,model:this.resolveSiYuanModelForCall(s,l)}}}if(l!=null&&l.providers){for(const g of l.providers)if(g!=null&&g.enabled){if(g.apiKey){const f=this.keyManager.findByKey(g.apiKey);if(f&&f.enabled)return{apiKeyId:f.id,apiKeyName:f.name,source:f.baseUrl||g.baseURL||"siyuan-ai",provider:f.provider,model:this.resolveModelByBlockId(u,l)||this.resolveModelNameFromProvider(g)||this.resolveSiYuanModelForCall(s,l)}}if(g.baseURL){const f=this.keyManager.findByUrl(g.baseURL);if(f&&f.enabled)return{apiKeyId:f.id,apiKeyName:f.name,source:f.baseUrl||g.baseURL||"siyuan-ai",provider:f.provider,model:this.resolveModelByBlockId(u,l)||this.resolveModelNameFromProvider(g)||this.resolveSiYuanModelForCall(s,l)}}if(Array.isArray(g.models))for(const f of g.models){const p=(f==null?void 0:f.id)||(f==null?void 0:f.name)||(f==null?void 0:f.displayName);if(!p)continue;const h=this.keyManager.findByModel(p);if(h&&h.enabled)return{apiKeyId:h.id,apiKeyName:h.name,source:h.baseUrl||g.baseURL||"siyuan-ai",provider:h.provider,model:p}}}}const c=this.keyManager.findByUrl(e);return c&&c.enabled?{apiKeyId:c.id,apiKeyName:c.name,source:c.baseUrl||"siyuan-ai",provider:c.provider,model:this.resolveSiYuanModelForCall(s,l)}:{...pe(),model:this.resolveSiYuanModelForCall(s,l)}}if(n.matchByUrl){const l=this.keyManager.findByUrl(e),u=this.extractModel(s);let d=l;if(u&&l&&!this.keyMatchesModel(l,u)){const c=this.keyManager.findByModel(u);c&&c.enabled&&(d=c)}if(d&&d.enabled)return{apiKeyId:d.id,apiKeyName:d.name,source:d.baseUrl||"url-match",provider:d.provider,model:u||"unknown"}}if(!n.interceptExternalAPIs)return null;const i=this.extractModel(s);if(o.includes("/v1/chat/completions")||o.includes("/v1/completions")){const u=(oe(t==null?void 0:t.headers,"Authorization")||"").replace(/^bearer\s+/i,"").trim();let d=i?this.keyManager.findByModel(i):void 0;return(!d||!d.enabled)&&(d=u?this.keyManager.findByKey(u):void 0),(!d||!d.enabled)&&(d=this.keyManager.findByUrl(e)),{apiKeyId:(d==null?void 0:d.id)||"unknown",apiKeyName:(d==null?void 0:d.name)||this.keyManager.maskKey(u)||"Unknown",source:"external-openai",provider:(d==null?void 0:d.provider)||"OpenAI",model:i||"unknown"}}if(o.includes("/v1/messages")){const l=oe(t==null?void 0:t.headers,"x-api-key")||"";let u=i?this.keyManager.findByModel(i):void 0;return(!u||!u.enabled)&&(u=l?this.keyManager.findByKey(l):void 0),(!u||!u.enabled)&&(u=this.keyManager.findByUrl(e)),{apiKeyId:(u==null?void 0:u.id)||"unknown",apiKeyName:(u==null?void 0:u.name)||this.keyManager.maskKey(l)||"Unknown",source:"external-anthropic",provider:(u==null?void 0:u.provider)||"Anthropic",model:i||"unknown"}}let a=i?this.keyManager.findByModel(i):void 0;return(!a||!a.enabled)&&(a=this.keyManager.findByUrl(e)),a&&a.enabled?{apiKeyId:a.id,apiKeyName:a.name,source:a.baseUrl||"custom-url",provider:a.provider,model:i||"unknown"}:null}getSiYuanSelectedModelId(e){if(!e)return null;const t=e.agent||{},n=e.editing||{};return t.modelId||n.modelId||null}extractModel(e){return I(e==null?void 0:e.model)||null}resolveModelByBlockId(e,t){if(!t||!e)return null;const n=t.providers||[];for(const s of n){const o=(s.models||[]).find(r=>(r==null?void 0:r.id)===e);if(o)return o.name||o.displayName||null}return null}resolveSiYuanModelForCall(e,t){const n=e==null?void 0:e.model;if(n){const s=this.resolveModelByBlockId(n,t);if(s)return s}return I(this.extractModel(e))||this.resolveSiYuanModelNameFromConfig(t)||"unknown"}extractMessages(e){if(!e)return[];if(Array.isArray(e.messages))return e.messages;if(typeof e.messages=="string")return[e.messages];if(typeof e.messages=="object"&&e.messages!==null)return[e.messages];if(typeof e.prompt=="string")return[e.prompt];if(Array.isArray(e.contents))return e.contents;if(typeof e.content=="string")return[e.content];if(typeof e.text=="string")return[e.text];if(e.message!==void 0||e.references!==void 0){const t=[];if(Array.isArray(e.references))for(const n of e.references)typeof n=="string"?t.push({role:"system",content:n}):n!=null&&n.content?t.push({role:"system",content:typeof n.content=="string"?n.content:JSON.stringify(n.content)}):n!=null&&n.text&&t.push({role:"system",content:n.text});if(typeof e.message=="string"?t.push({role:"user",content:e.message}):typeof e.message=="object"&&e.message!==null&&t.push({role:"user",content:JSON.stringify(e.message)}),t.length>0)return t}if(typeof e.msg=="string")return[e.msg];if(typeof e.msg=="object"&&e.msg!==null)return[e.msg];if(e.context&&e.query)return[{role:"system",content:e.context},{role:"user",content:e.query}];if(typeof e.query=="string")return[e.query];if(e.input){if(Array.isArray(e.input))return e.input;if(Array.isArray(e.input.messages))return e.input.messages;if(typeof e.input.messages=="string")return[e.input.messages];if(typeof e.input.messages=="object"&&e.input.messages!==null)return[e.input.messages];if(typeof e.input.message=="string")return[e.input.message];if(typeof e.input.message=="object"&&e.input.message!==null)return[e.input.message];if(typeof e.input.text=="string")return[e.input.text];if(typeof e.input=="string")return[e.input]}if(e.data){if(Array.isArray(e.data.messages))return e.data.messages;if(typeof e.data.messages=="string")return[e.data.messages];if(typeof e.data.messages=="object"&&e.data.messages!==null)return[e.data.messages];if(typeof e.data.message=="string")return[e.data.message];if(typeof e.data.message=="object"&&e.data.message!==null)return[e.data.message];if(typeof e.data.prompt=="string")return[e.data.prompt];if(Array.isArray(e.data.contents))return e.data.contents;if(typeof e.data.content=="string")return[e.data.content];if(typeof e.data.text=="string")return[e.data.text]}return[]}async analyzeResponse(e,t,n,s,o=!0){let r=0,i=0,a=t.model;const l=(e.headers.get("content-type")||"").toLowerCase(),u=this.store.getSettings();if(!a||ae(a)){const g=await this.resolveSiYuanModelNameIfNeeded(t.source);g&&(a=g)}const d=this.tokenCounter.estimateFromMessages(this.extractMessages(s));if(this.logDebug("analyzeResponse",{url:t.source,contentType:l,ok:e.ok,status:e.status,estimatedInput:d,bodyPreview:JSON.stringify(s).slice(0,200)}),!e.body){this.logDebug("analyzeResponse: response body is null, using input estimate only"),r=d,i=0,this.recordCall(t,r,i,n,o,a);return}try{if(l.includes("text/event-stream")){const g=await this.parseSSEStream(e,t,u,d);r=g.inputTokens,i=g.outputTokens,g.model&&(a=g.model),g.aborted&&(o=!1)}else if(l.includes("application/json")||l.includes("text/json")){const g=await e.text();this.logDebug("JSON response raw text preview:",g.slice(0,300));const f=this.tryParseJson(g);if(me(f)&&typeof f.data!="string"){this.logDebug("Skipping SiYuan kernel non-AI response",{code:f.code,dataKeys:Object.keys(f.data||{})});return}const p=f?this.extractUsage(f):null;p&&(r=p.inputTokens,i=p.outputTokens),f!=null&&f.model&&(a=I(f.model,a)||a),p||(r=d,i=this.tokenCounter.estimateFromText(f?this.extractOutputText(f):g))}else if(l.includes("application/x-ndjson")||l.includes("application/ndjson")){const g=await this.parseNDJSONStream(e,t,u,d);r=g.inputTokens,i=g.outputTokens,g.model&&(a=g.model),g.aborted&&(o=!1)}else if(l.includes("text/plain")||l.includes("text/html")||l.includes("application/xml")||l.includes("text/xml")){const g=await e.text();r=d,i=this.tokenCounter.estimateFromText(g)}else{const g=await e.text();this.logDebug("Unknown content type, raw response preview:",g.slice(0,300)),r=d;const f=this.tryParseJson(g);if(f){const p=this.extractUsage(f);p?(r=p.inputTokens,i=p.outputTokens):i=this.tokenCounter.estimateFromText(this.extractOutputText(f))}else i=this.tokenCounter.estimateFromText(g)}}catch(g){console.warn("[TokenStats] Token extraction failed, using estimates:",g),r=d;try{const f=await e.text();i=this.tokenCounter.estimateFromText(f)}catch{i=0}}o&&r===0&&d>0&&(r=d),this.logDebug("analyzeResponse result:",{inputTokens:r,outputTokens:i,model:a,success:o});const c=r+i;this.recordCall(t,r,i,n,o,a),c>0&&u.showNotifications&&(this.keyManager.checkThreshold(t.apiKeyId,g=>{this.onThresholdAlert(t.apiKeyId,g)}),this.keyManager.checkGlobalThreshold(u,g=>{this.onThresholdAlert("global",g)}))}async parseSSEStream(e,t,n,s=0){var g;const o=(g=e.body)==null?void 0:g.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1};const r=new TextDecoder;let i="";const a={fullContent:"",usage:null,model:void 0};let l=0,u=!1;const d=f=>{const p=f.split(`
`),h=[];let v="";for(const b of p){const x=b.trim();x&&(x.startsWith("data:")?h.push(x.slice(5).trimStart()):x.startsWith("event:")&&(v=x.slice(6).trim()))}if(h.length===0)return;const k=h.join(`
`);if(this.logDebug("SSE raw event",{eventType:v,data:k.slice(0,500)}),k!=="[DONE]")try{const b=JSON.parse(k);if(this.logDebug("SSE parsed chunk",{eventType:v,chunk:b}),typeof b!="object"||b===null)return;const x=this.collectChunkInfo(b,a.usage,a.model,a.fullContent,v),S=a.fullContent.length;a.usage=x.usage,a.model=x.model,a.fullContent=x.fullContent,this.logDebug("SSE collected after chunk",{eventType:v,contentAdded:a.fullContent.length-S,fullContentLength:a.fullContent.length,usage:a.usage})}catch(b){this.logDebug("SSE chunk JSON parse failed",{eventType:v,data:k.slice(0,300),error:String(b)})}};try{for(;;){const{done:f,value:p}=await o.read();if(f)break;i+=r.decode(p,{stream:!0}),this.logDebug("SSE buffer received",{bufferLength:i.length,decodedLength:(p==null?void 0:p.length)??0});const{events:h,remainder:v}=this.splitSSEEvents(i);i=v,this.logDebug("SSE events split",{eventCount:h.length,remainderLength:v.length});for(const k of h)d(k);if(n.abortStreamOnExceeded&&n.blockOnQuotaExceeded){if(l=a.usage?a.usage.outputTokens:this.tokenCounter.estimateFromText(a.fullContent),this.keyManager.wouldExceedQuota(t.apiKeyId,l)){u=!0;const k=this.store.getApiKey(t.apiKeyId),b=`[TokenStats] 流式响应已中断：${(k==null?void 0:k.name)||t.apiKeyName} 的 Token 限额在生成过程中被超出`;console.warn(b),this.onThresholdAlert(t.apiKeyId,b);try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(n,l)){u=!0;const k="[TokenStats] 流式响应已中断：全局 Token 限额在生成过程中被超出";console.warn(k),this.onThresholdAlert("global",k);try{await o.cancel()}catch{}break}}}if(i.trim().length>0){const{events:f}=this.splitSSEEvents(i+`

`);for(const p of f)d(p)}}finally{o.releaseLock()}if(this.logDebug("parseSSEStream finished",{contentLength:a.fullContent.length,hasUsage:!!a.usage,usage:a.usage,estimatedInput:s}),a.usage){const f=this.tokenCounter.estimateFromText(a.fullContent);return{inputTokens:a.usage.inputTokens||s,outputTokens:a.usage.outputTokens||f,model:a.model,aborted:u}}const c=this.tokenCounter.estimateFromText(a.fullContent);return{inputTokens:s,outputTokens:c,model:a.model,aborted:u}}splitSSEEvents(e){const t=[],s=e.replace(/\r\n/g,`
`).split(`

`),o=s.pop()||"";for(const r of s)r.trim()&&t.push(r);return{events:t,remainder:o}}collectChunkInfo(e,t,n,s,o=""){var l,u,d,c,g,f,p,h,v,k,b,x,S,N,F,P,_,j,Q,z,Y,G,J,H,W,X,V,Z,B,ee,te,ne,se;const r=(...y)=>{const K=I(...y);if(K)return K;const C=U(n);return C&&!E(C)?C:""};if(e.model&&(n=r(e.model,n)),o==="content"||o==="reasoning")return e.token&&(s+=e.token,this.logDebug("SiYuan agent content appended",{token:e.token})),{usage:t,model:n,fullContent:s};if(o==="thinking")return e.reasoning&&(s+=e.reasoning,this.logDebug("SiYuan agent thinking appended",{reasoning:e.reasoning})),{usage:t,model:n,fullContent:s};if(o==="usage"){const y=e.promptTokens??e.prompt_tokens??0,K=e.completionTokens??e.completion_tokens??0;return this.logDebug("SiYuan agent usage event",{promptTokens:y,completionTokens:K,chunk:e}),(y>0||K>0)&&(t={inputTokens:y,outputTokens:K}),{usage:t,model:n,fullContent:s}}if(o==="done"||o==="error"||o==="retry"||o==="snapshot"||o==="tool_call"||o==="tool_result"||o==="confirm"||o==="question"||o==="frontend_tool_call")return{usage:t,model:n,fullContent:s};if(e.usage){const y=e.usage;t={inputTokens:y.prompt_tokens??y.input_tokens??y.promptTokens??0,outputTokens:y.completion_tokens??y.output_tokens??y.completionTokens??0}}const i=y=>{typeof y=="string"&&(s+=y)},a=(l=e.choices)==null?void 0:l[0];if((u=a==null?void 0:a.delta)!=null&&u.content&&i(a.delta.content),a!=null&&a.text&&i(a.text),(d=a==null?void 0:a.delta)!=null&&d.reasoning_content&&i(a.delta.reasoning_content),(c=a==null?void 0:a.message)!=null&&c.content&&i(a.message.content),a!=null&&a.content&&i(a.content),(f=(g=a==null?void 0:a.delta)==null?void 0:g.function_call)!=null&&f.arguments&&i(a.delta.function_call.arguments),(p=a==null?void 0:a.delta)!=null&&p.tool_calls)for(const y of a.delta.tool_calls)(h=y==null?void 0:y.function)!=null&&h.arguments&&i(y.function.arguments);if(e.type==="content_block_delta"&&((v=e.delta)!=null&&v.text)&&i(e.delta.text),e.type==="content_block_delta"&&((k=e.delta)!=null&&k.reasoning)&&i(e.delta.reasoning),e.type==="content_block_start"&&((b=e.content_block)!=null&&b.text)&&i(e.content_block.text),(x=e.message)!=null&&x.usage){const y=e.message.usage;t={inputTokens:y.input_tokens??0,outputTokens:y.output_tokens??0}}if(e.content){if(typeof e.content=="string")i(e.content);else if(Array.isArray(e.content))for(const y of e.content)i(typeof y=="string"?y:y==null?void 0:y.text)}if(e.output&&i(e.output),e.text&&i(e.text),e.result&&i(e.result),e.message&&(typeof e.message=="string"?i(e.message):e.message.content&&i(e.message.content)),(P=(F=(N=(S=e.data)==null?void 0:S.choices)==null?void 0:N[0])==null?void 0:F.delta)!=null&&P.content&&i(e.data.choices[0].delta.content),(Q=(j=(_=e.data)==null?void 0:_.choices)==null?void 0:j[0])!=null&&Q.text&&i(e.data.choices[0].text),(J=(G=(Y=(z=e.data)==null?void 0:z.choices)==null?void 0:Y[0])==null?void 0:G.message)!=null&&J.content&&i(e.data.choices[0].message.content),(V=(X=(W=(H=e.data)==null?void 0:H.choices)==null?void 0:W[0])==null?void 0:X.delta)!=null&&V.reasoning_content&&i(e.data.choices[0].delta.reasoning_content),(Z=e.data)!=null&&Z.model&&(n=r(e.data.model,n)),(B=e.data)!=null&&B.usage){const y=e.data.usage;t={inputTokens:y.prompt_tokens??y.input_tokens??0,outputTokens:y.completion_tokens??y.output_tokens??0}}if((ee=e.data)!=null&&ee.content){if(typeof e.data.content=="string")i(e.data.content);else if(Array.isArray(e.data.content))for(const y of e.data.content)i(typeof y=="string"?y:y==null?void 0:y.text)}return(te=e.data)!=null&&te.output&&i(e.data.output),(ne=e.data)!=null&&ne.text&&i(e.data.text),(se=e.data)!=null&&se.result&&i(e.data.result),{usage:t,model:n,fullContent:s}}async parseNDJSONStream(e,t,n,s=0){var c;const o=(c=e.body)==null?void 0:c.getReader();if(!o)return{inputTokens:0,outputTokens:0,aborted:!1};const r=new TextDecoder;let i="",a="",l=null,u,d=!1;try{for(;;){const{done:g,value:f}=await o.read();if(g)break;i+=r.decode(f,{stream:!0});const p=i.split(`
`);i=p.pop()||"";for(const h of p)if(h.trim())try{const v=JSON.parse(h),k=this.collectChunkInfo(v,l,u,a);l=k.usage,u=k.model,a=k.fullContent}catch{}if(n.abortStreamOnExceeded&&n.blockOnQuotaExceeded){const h=l?l.outputTokens:this.tokenCounter.estimateFromText(a);if(this.keyManager.wouldExceedQuota(t.apiKeyId,h)){d=!0;try{await o.cancel()}catch{}break}if(this.keyManager.wouldExceedGlobalQuota(n,h)){d=!0;try{await o.cancel()}catch{}break}}}if(i.trim())try{const g=JSON.parse(i.trim()),f=this.collectChunkInfo(g,l,u,a);l=f.usage,u=f.model,a=f.fullContent}catch{}}finally{o.releaseLock()}if(this.logDebug("parseNDJSONStream finished",{contentLength:a.length,hasUsage:!!l,usage:l,estimatedInput:s}),l){const g=this.tokenCounter.estimateFromText(a);return{inputTokens:l.inputTokens||s,outputTokens:l.outputTokens||g,model:u,aborted:d}}return{inputTokens:s,outputTokens:this.tokenCounter.estimateFromText(a),model:u,aborted:d}}extractUsage(e){if(e!=null&&e.usage){const t=e.usage,n=t.prompt_tokens??t.input_tokens??t.promptTokens??0,s=t.completion_tokens??t.output_tokens??t.completionTokens??0;return n===0&&s===0?null:{inputTokens:n,outputTokens:s}}if((e==null?void 0:e.promptTokens)!==void 0||(e==null?void 0:e.completionTokens)!==void 0){const t=e.promptTokens??0,n=e.completionTokens??0;return t===0&&n===0?null:{inputTokens:t,outputTokens:n}}return null}extractOutputText(e){var o,r,i,a,l,u,d;if(!e)return"";const t=[],n=c=>{typeof c=="string"&&c?t.push(c):c&&typeof c.text=="string"&&c.text&&t.push(c.text)},s=c=>{var g,f,p,h,v,k,b,x;if(c&&(n((g=c==null?void 0:c.message)==null?void 0:g.content),n((f=c==null?void 0:c.message)==null?void 0:f.reasoning_content),n((p=c==null?void 0:c.delta)==null?void 0:p.content),n((h=c==null?void 0:c.delta)==null?void 0:h.reasoning_content),n(c==null?void 0:c.text),n(c==null?void 0:c.content),(k=(v=c==null?void 0:c.delta)==null?void 0:v.function_call)!=null&&k.arguments&&n(c.delta.function_call.arguments),(b=c==null?void 0:c.delta)!=null&&b.tool_calls))for(const S of c.delta.tool_calls)(x=S==null?void 0:S.function)!=null&&x.arguments&&n(S.function.arguments)};if(e.choices)for(const c of e.choices)s(c);if(e.content){if(typeof e.content=="string")n(e.content);else if(Array.isArray(e.content))for(const c of e.content)n(c)}if(e.output&&n(e.output),e.text&&n(e.text),e.result&&n(e.result),e.message&&(typeof e.message=="string"?n(e.message):(n(e.message.content),n(e.message.text))),e.response&&(typeof e.response=="string"?n(e.response):e.response.text?n(e.response.text):e.response.content&&n(e.response.content)),e.data)if(typeof e.data=="string")n(e.data);else{if(n((o=e.data)==null?void 0:o.text),n((r=e.data)==null?void 0:r.output),n((i=e.data)==null?void 0:i.result),n((a=e.data)==null?void 0:a.msg),(l=e.data)!=null&&l.choices)for(const c of e.data.choices)s(c);if((u=e.data)!=null&&u.content)if(typeof e.data.content=="string")n(e.data.content);else if(Array.isArray(e.data.content))for(const c of e.data.content)n(c);else n(e.data.content);(d=e.data)!=null&&d.message&&(n(e.data.message.content),n(e.data.message.text))}return e.msg&&n(e.msg),e.token&&n(e.token),e.reasoning&&n(e.reasoning),t.join("")}recordCall(e,t,n,s,o,r){const i=this.resolveModelName(r||e.model,e),a={id:fe(),apiKeyId:e.apiKeyId,apiKeyName:e.apiKeyName,source:e.source,model:i,inputTokens:t,outputTokens:n,totalTokens:t+n,timestamp:s,requestTime:Date.now()-s,success:o};this.store.addRecord(a),this.logDebug(`Recorded: ${a.apiKeyName} | ${a.model} | in=${t} out=${n} total=${a.totalTokens} success=${o}`),o&&t===0&&n===0&&console.warn("[TokenStats] 本次请求 token 计数为 0。若持续出现，请在设置中开启“启用调试日志”，并在浏览器控制台中查看请求/响应详情。")}resolveModelName(e,t){var r;const n=[];n.push(e,t.model),this.isSiYuanAiSource(t.source)&&n.push(this.resolveSiYuanModelNameFromConfig((r=this.siyuanConfigCache)==null?void 0:r.config));const s=I(...n);return s||U(e)||U(t.model)||t.source||"unknown"}async resolveSiYuanModelNameIfNeeded(e){return this.isSiYuanAiSource(e)?this.getSiYuanModelName():null}isSiYuanAiSource(e){return e==="siyuan-ai"||e.includes("/api/ai/")}async getSiYuanAiConfig(){var e,t;if(this.siyuanConfigCache&&Date.now()-this.siyuanConfigCache.ts<5e3)return this.siyuanConfigCache.config;try{const n=window.siyuan,s=(e=n==null?void 0:n.config)==null?void 0:e.ai;if(s)return this.siyuanConfigCache={config:s,ts:Date.now()},s;const o=await this.originalFetch("/api/system/getConf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});if(!o.ok)return null;const r=await o.json(),i=((t=r==null?void 0:r.data)==null?void 0:t.ai)||(r==null?void 0:r.ai);if(i)return this.siyuanConfigCache={config:i,ts:Date.now()},i}catch{}return null}findProviderByModel(e,t){if(!e||!t)return null;const n=String(t).toLowerCase().trim();if(!n)return null;const s=e.providers||[];for(const o of s){if(!o||!o.enabled)continue;if((o.models||[]).find(i=>{const a=String((i==null?void 0:i.id)||"").toLowerCase().trim(),l=String((i==null?void 0:i.name)||"").toLowerCase().trim(),u=String((i==null?void 0:i.displayName)||"").toLowerCase().trim();return a===n||l===n||u===n}))return o}return null}resolveSiYuanModelNameFromConfig(e){var i,a;if(!e)return null;const t=e.agent||{},n=e.editing||{},s=t.modelId||n.modelId,o=t.modelName||t.displayName||t.name||n.modelName||n.displayName||n.name;if(o&&!E(o))return o;const r=e.providers||[];if(s)for(const l of r){if(!(l!=null&&l.enabled))continue;const u=(l.models||[]).find(d=>(d==null?void 0:d.id)===s);if(u)return u.displayName||u.name||u.id||null}for(const l of r){if(!(l!=null&&l.enabled))continue;const u=((i=l.models)==null?void 0:i.find(d=>d==null?void 0:d.default))||((a=l.models)==null?void 0:a[0]);if(u)return u.displayName||u.name||u.id||null;if(l.name&&!E(l.name))return l.name}return s&&!E(s)?s:null}resolveModelNameFromProvider(e){if(!(e!=null&&e.models)||!Array.isArray(e.models))return null;const t=e.models.find(n=>n==null?void 0:n.default)||e.models[0];return t&&I(t.displayName,t.name,t.id)||null}async getSiYuanModelName(){return this.resolveSiYuanModelNameFromConfig(await this.getSiYuanAiConfig())}}function A(m){return m?m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}class ke{constructor(e,t){this.store=e,this.keyManager=t,this.setting=this.build()}build(){const e=this,t=new T.Setting({width:this.isMobile()?"92vw":"700px",height:"auto",confirmCallback:()=>{e.saveGlobalSettings(),T.showMessage("设置已保存",2e3,"info")}});setTimeout(()=>this.ensureDialogScrollable(),0);const n=this.store.getSettings();return t.addItem({title:"按 API Base URL 匹配 Key",description:"拦截请求时优先按 URL 匹配已配置的 API Key，适用于思源 AI、自定义代理等场景",createActionElement:()=>this.createCheckbox("matchByUrl",n.matchByUrl??!0)}),t.addItem({title:"拦截外部 API 调用",description:"拦截第三方插件对 OpenAI / Anthropic / DeepSeek 等外部 API 的直接调用",createActionElement:()=>this.createCheckbox("interceptExternalAPIs",n.interceptExternalAPIs)}),t.addItem({title:"超出限额时阻止请求",description:"当某个 API Key 的 Token 用量达到限额时，阻止后续请求（谨慎开启）",createActionElement:()=>this.createCheckbox("blockOnQuotaExceeded",n.blockOnQuotaExceeded)}),t.addItem({title:"限额重置周期",description:"按周期自动重置 Token 用量统计。每月 = 每月 1 日归零，每日 = 每天归零",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-quotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"none",label:"永不重置"}];for(const r of o){const i=document.createElement("option");i.value=r.value,i.textContent=r.label,n.quotaResetCycle===r.value&&(i.selected=!0),s.appendChild(i)}return s}}),t.addItem({title:"流式响应中途超限时中断",description:"当流式 AI 响应生成过程中 Token 超出限额时，立即中断流（避免继续消耗）",createActionElement:()=>this.createCheckbox("abortStreamOnExceeded",n.abortStreamOnExceeded)}),t.addItem({title:"显示阈值提醒通知",description:"当 Token 用量达到设定的提醒阈值时，在思源底部弹出通知",createActionElement:()=>this.createCheckbox("showNotifications",n.showNotifications)}),t.addItem({title:"启用调试日志",description:"在浏览器控制台输出请求/响应调试信息，排查 token 统计为 0 等问题（重启插件后生效）",createActionElement:()=>this.createCheckbox("debugLogging",n.debugLogging??!1)}),t.addItem({title:"最大记录数",description:"保留的最近调用记录数量，超出后自动裁剪旧记录（节省存储空间）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-max-records",s.value=String(n.maxRecords),s.min="100",s.max="50000",s.step="100",s}}),t.addItem({title:"全局总 Token 限额",description:"所有 API Key 的 Token 用量总和超过此值时触发拦截（0 = 不开启）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalQuotaLimit",s.value=String(n.globalQuotaLimit||0),s.min="0",s.step="1000",s}}),t.addItem({title:"全局提醒阈值 (%)",description:"全局 Token 用量达到此百分比时弹出提醒（0 = 不提醒）",createActionElement:()=>{const s=document.createElement("input");return s.type="number",s.className="b3-text-field fn__size200",s.id="tks-globalAlertThreshold",s.value=String(n.globalAlertThreshold||0),s.min="0",s.max="100",s.step="5",s}}),t.addItem({title:"全局限额重置周期",description:"按周期自动重置全局 Token 用量统计",createActionElement:()=>{const s=document.createElement("select");s.className="b3-select fn__size200",s.id="tks-globalQuotaResetCycle";const o=[{value:"monthly",label:"每月重置"},{value:"daily",label:"每日重置"},{value:"none",label:"永不重置"}];for(const r of o){const i=document.createElement("option");i.value=r.value,i.textContent=r.label,n.globalQuotaResetCycle===r.value&&(i.selected=!0),s.appendChild(i)}return s}}),t.addItem({title:"全局已用 Token 校准",description:"手动输入从第三方平台导入的历史已用 Token，叠加到全局统计中（0 = 不校准）",createActionElement:()=>{const s=document.createElement("div");s.style.display="flex",s.style.gap="8px",s.style.alignItems="center";const o=(r,i,a)=>{const l=document.createElement("div");l.style.flex="1";const u=document.createElement("div");u.style.fontSize="12px",u.style.color="var(--b3-theme-on-surface)",u.textContent=i;const d=document.createElement("input");return d.type="number",d.className="b3-text-field",d.id=`tks-${r}`,d.value=String(a||0),d.min="0",d.step="100",d.style.width="100%",l.appendChild(u),l.appendChild(d),l};return s.appendChild(o("globalUsedTokensOffset","总 Token",n.globalUsedTokensOffset)),s.appendChild(o("globalUsedInputTokensOffset","输入",n.globalUsedInputTokensOffset)),s.appendChild(o("globalUsedOutputTokensOffset","输出",n.globalUsedOutputTokensOffset)),s}}),t.addItem({title:"API Key 管理",description:"添加、编辑、删除 API Key，为每个 Key 设置限额与提醒阈值",actionElement:this.createButton("管理 API Key",()=>this.openKeyManager())}),t.addItem({title:"导出统计数据",description:"将所有统计数据导出为 JSON 文件",actionElement:this.createButton("导出",()=>this.exportData())}),t.addItem({title:"清除调用记录",description:"删除所有 Token 调用记录，但保留 API Key 配置",actionElement:this.createButton("清除记录",()=>this.clearRecords())}),t.addItem({title:"重置全部数据",description:"清除所有调用记录并恢复默认设置，API Key 配置保留不变",actionElement:this.createButton("重置",()=>this.resetAll())}),t}createCheckbox(e,t){const n=document.createElement("input");return n.type="checkbox",n.id=`tks-${e}`,n.className="b3-switch",n.checked=t,n}createButton(e,t){const n=document.createElement("button");return n.className="b3-button b3-button--outline",n.textContent=e,n.style.fontSize="14px",n.addEventListener("click",t),n}saveGlobalSettings(){var c,g,f,p,h;const e=v=>{var k;return((k=document.getElementById(`tks-${v}`))==null?void 0:k.checked)??!1},t=parseInt(((c=document.getElementById("tks-max-records"))==null?void 0:c.value)||"5000",10),n=((g=document.getElementById("tks-quotaResetCycle"))==null?void 0:g.value)||"monthly",s=parseInt(((f=document.getElementById("tks-globalQuotaLimit"))==null?void 0:f.value)||"0",10)||0,o=parseInt(((p=document.getElementById("tks-globalAlertThreshold"))==null?void 0:p.value)||"0",10)||0,r=((h=document.getElementById("tks-globalQuotaResetCycle"))==null?void 0:h.value)||"monthly",i=v=>{var k;return parseInt(((k=document.getElementById(`tks-${v}`))==null?void 0:k.value)||"0",10)||0},a=Math.max(0,i("globalUsedTokensOffset")),l=Math.max(0,i("globalUsedInputTokensOffset")),u=Math.max(0,i("globalUsedOutputTokensOffset")),d=s!==this.store.getSettings().globalQuotaLimit||o!==this.store.getSettings().globalAlertThreshold;this.store.updateSettings({matchByUrl:e("matchByUrl"),interceptExternalAPIs:e("interceptExternalAPIs"),blockOnQuotaExceeded:e("blockOnQuotaExceeded"),quotaResetCycle:n,abortStreamOnExceeded:e("abortStreamOnExceeded"),showNotifications:e("showNotifications"),debugLogging:e("debugLogging"),maxRecords:isNaN(t)?5e3:Math.max(100,Math.min(5e4,t)),globalQuotaLimit:Math.max(0,s),globalAlertThreshold:Math.max(0,Math.min(100,o)),globalQuotaResetCycle:r,globalUsedTokensOffset:a,globalUsedInputTokensOffset:l,globalUsedOutputTokensOffset:u}),d&&this.keyManager.resetGlobalAlert()}ensureDialogScrollable(){const e=document.getElementById("tks-matchByUrl")||document.getElementById("tks-interceptExternalAPIs");if(!e)return;const t=e.closest(".b3-dialog");if(!t)return;const n=t.querySelector(".b3-dialog__body");n&&(t.style.maxHeight="85vh",n.style.maxHeight="calc(85vh - 120px)",n.style.overflowY="auto")}isMobile(){const e=T.getFrontend();return e==="mobile"||e==="browser-mobile"}openKeyManager(){const e=this.isMobile(),t=new T.Dialog({title:"API Key 管理",width:e?"95vw":"750px",height:e?"80vh":"500px",content:'<div id="tks-key-mgr" class="tks-key-mgr"></div>'});setTimeout(()=>this.renderKeyList(t),50)}renderKeyList(e){var o,r,i;const t=e.element.querySelector("#tks-key-mgr");if(!t)return;const n=this.store.getApiKeys();t.innerHTML=`
      <div class="tks-key-toolbar">
        <button class="b3-button b3-button--text" id="tks-add-key">+ 添加 API Key</button>
        <button class="b3-button b3-button--text" id="tks-export-keys">📤 导出</button>
        <button class="b3-button b3-button--text" id="tks-import-keys">📥 导入</button>
        <span class="tks-key-hint">共 ${n.length} 个 Key</span>
      </div>
      <div class="tks-key-list" id="tks-key-list-items"></div>
    `;const s=t.querySelector("#tks-key-list-items");for(const a of n){const l=this.keyManager.getKeyUsage(a.id),u=a.quotaLimit>0?Math.min(100,l.totalTokens/a.quotaLimit*100):0,d=document.createElement("div");d.className="tks-key-item",d.innerHTML=`
        <div class="tks-key-info">
          <div class="tks-key-name">
            ${this.providerIcon(a.provider)} ${A(a.name)}
            ${a.enabled?"":'<span class="tks-badge tks-badge-off">已禁用</span>'}
          </div>
          <div class="tks-key-detail">
            <span class="tks-key-masked">${A(a.keyMasked)}</span>
            ${a.provider?`<span class="tks-key-provider">${A(a.provider)}</span>`:""}
            ${a.baseUrl?`<span class="tks-key-url" title="${A(a.baseUrl)}">${A(a.baseUrl)}</span>`:""}
          </div>
          <div class="tks-key-quota">
            <div class="tks-quota-bar">
              <div class="tks-quota-fill ${u>=(a.alertThreshold||100)?"tks-quota-alert":""}"
                   style="width: ${u}%"></div>
            </div>
            <span class="tks-quota-text">
              ${l.totalTokens.toLocaleString()}${a.quotaLimit>0?" / "+a.quotaLimit.toLocaleString():""} tokens
              ${a.alertThreshold>0?`· 阈值 ${a.alertThreshold}%`:""}
            </span>
          </div>
        </div>
        <div class="tks-key-actions">
          <button class="b3-button b3-button--small" data-action="edit" data-id="${A(a.id)}">编辑</button>
          <button class="b3-button b3-button--small b3-button--danger" data-action="delete" data-id="${A(a.id)}">删除</button>
        </div>
      `,s.appendChild(d)}(o=t.querySelector("#tks-add-key"))==null||o.addEventListener("click",()=>{this.openKeyEditor(e,null)}),(r=t.querySelector("#tks-export-keys"))==null||r.addEventListener("click",()=>{this.exportKeys()}),(i=t.querySelector("#tks-import-keys"))==null||i.addEventListener("click",()=>{this.importKeys(e)}),t.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",l=>{const u=l.currentTarget,d=u.dataset.action,c=u.dataset.id;if(d==="edit"){const g=this.store.getApiKey(c);g&&this.openKeyEditor(e,g)}else d==="delete"&&T.confirm("删除 API Key","确定删除此 API Key 吗？相关统计记录将保留。",()=>{this.store.deleteApiKey(c),this.keyManager.resetAlert(c),this.renderKeyList(e),T.showMessage("已删除",2e3,"info")})})})}openKeyEditor(e,t){var i,a,l;const n=!!t,s=this.isMobile(),o=new T.Dialog({title:n?"编辑 API Key":"添加 API Key",width:s?"92vw":"500px",height:"auto",content:`
        <div class="tks-key-editor">
          <div class="tks-form-row">
            <label>名称</label>
            <input type="text" id="tke-name" class="b3-text-field" value="${A((t==null?void 0:t.name)||"")}" placeholder="例如：我的 OpenAI Key" />
          </div>
          <div class="tks-form-row">
            <label>API Key</label>
            <input type="password" id="tke-key" class="b3-text-field" value="${A((t==null?void 0:t.keyFull)||"")}" placeholder="sk-..." />
            <div class="tks-form-hint">用于匹配请求头中的 Authorization / x-api-key，留空则仅按 URL 匹配</div>
          </div>
          <div class="tks-form-row">
            <label>提供商名称</label>
            <input type="text" id="tke-provider" class="b3-text-field" value="${A((t==null?void 0:t.provider)||"")}" list="tke-provider-list" placeholder="例如：OpenAI、DeepSeek、华为云、SiYuan" />
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
            <input type="text" id="tke-url" class="b3-text-field" value="${A((t==null?void 0:t.baseUrl)||"")}" placeholder="例如：https://api.openai.com/v1/chat/completions，或 /api/ai/" />
            <div class="tks-form-hint">用于 URL 匹配。可填完整 URL、域名或路径（如 /api/ai/）。留空则仅按 Key 匹配。</div>
          </div>
          <div class="tks-form-row">
            <label>关联模型</label>
            <input type="text" id="tke-models" class="b3-text-field" value="${A(t!=null&&t.models?t.models.join(", "):"")}" placeholder="例如：Qwen/Qwen3-8B, sensenova-6.7-flash-lite" />
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
      `}),r=o.element;(i=r.querySelector("#tke-provider"))==null||i.addEventListener("input",u=>{const d=u.target.value.trim(),c=r.querySelector("#tke-url");!c.value&&d&&(c.value=this.keyManager.getDefaultBaseUrl(d))}),(a=r.querySelector("#tke-cancel"))==null||a.addEventListener("click",()=>o.destroy()),(l=r.querySelector("#tke-save"))==null||l.addEventListener("click",()=>{const u=r.querySelector("#tke-name").value.trim(),d=r.querySelector("#tke-key").value.trim(),c=r.querySelector("#tke-provider").value.trim(),g=r.querySelector("#tke-url").value.trim(),f=r.querySelector("#tke-models").value.split(/[,，]/).map(S=>S.trim()).filter(Boolean),p=parseInt(r.querySelector("#tke-quota").value,10)||0,h=parseInt(r.querySelector("#tke-threshold").value,10)||0,v=Math.max(0,parseInt(r.querySelector("#tke-usedTokensOffset").value,10)||0),k=Math.max(0,parseInt(r.querySelector("#tke-usedInputTokensOffset").value,10)||0),b=Math.max(0,parseInt(r.querySelector("#tke-usedOutputTokensOffset").value,10)||0),x=r.querySelector("#tke-enabled").value==="true";if(!u){T.showMessage("请输入名称",3e3,"error");return}if(n&&t)this.store.updateApiKey(t.id,{name:u,keyFull:d,keyMasked:this.keyManager.maskKey(d),provider:c,baseUrl:g,models:f,quotaLimit:p,alertThreshold:h,usedTokensOffset:v,usedInputTokensOffset:k,usedOutputTokensOffset:b,enabled:x}),this.keyManager.resetAlert(t.id);else{const S={id:this.keyManager.generateKeyId(),name:u,keyFull:d,keyMasked:this.keyManager.maskKey(d),provider:c,baseUrl:g,models:f,quotaLimit:p,usedTokensOffset:v,usedInputTokensOffset:k,usedOutputTokensOffset:b,alertThreshold:h,enabled:x,createdAt:Date.now()};this.store.addApiKey(S)}this.store.save(),o.destroy(),this.renderKeyList(e),T.showMessage("已保存",2e3,"info")})}exportKeys(){const e=this.store.getApiKeys(),t=JSON.stringify({version:"1.3.0",exportedAt:Date.now(),apiKeys:e},null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`siyuan-token-stats-keys-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(s)},0),T.showMessage(`已导出 ${e.length} 个 API Key`,2e3,"info")}importKeys(e){const t=document.createElement("input");t.type="file",t.accept="application/json",t.style.display="none",t.addEventListener("change",async n=>{var o;const s=(o=n.target.files)==null?void 0:o[0];if(s)try{const r=await s.text(),i=JSON.parse(r),a=Array.isArray(i)?i:i.apiKeys;if(!Array.isArray(a))throw new Error("导入文件格式不正确，未找到 apiKeys 数组");let l=0,u=0;for(const c of a){if(!c||!c.keyFull)continue;const g=Array.isArray(c.models)?c.models:typeof c.models=="string"?c.models.split(/[,，]/).map(p=>p.trim()).filter(Boolean):[],f=this.store.getApiKeys().find(p=>p.keyFull===c.keyFull);f?(this.store.updateApiKey(f.id,{name:c.name||f.name,provider:c.provider||f.provider,baseUrl:c.baseUrl||f.baseUrl,models:g.length?g:f.models||[],quotaLimit:c.quotaLimit??f.quotaLimit,alertThreshold:c.alertThreshold??f.alertThreshold,enabled:c.enabled??f.enabled}),u++):(this.store.addApiKey({id:this.keyManager.generateKeyId(),name:c.name||"Imported Key",keyFull:c.keyFull,keyMasked:this.keyManager.maskKey(c.keyFull),provider:c.provider||"",baseUrl:c.baseUrl||"",models:g,quotaLimit:c.quotaLimit||0,usedTokensOffset:c.usedTokensOffset||0,usedInputTokensOffset:c.usedInputTokensOffset||0,usedOutputTokensOffset:c.usedOutputTokensOffset||0,alertThreshold:c.alertThreshold||0,enabled:c.enabled!==!1,createdAt:Date.now()}),l++)}this.store.save(),this.renderKeyList(e);const d=[];l>0&&d.push(`新增 ${l} 个`),u>0&&d.push(`更新 ${u} 个`),T.showMessage(`导入成功：${d.join("，")||"无变化"}`,2e3,"info")}catch(r){console.error("[TokenStats] Import keys failed:",r),T.showMessage("导入失败："+r.message,3e3,"error")}}),document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),0)}providerIcon(e){const t=(e||"").toLowerCase();return{siyuan:"🐿️",openai:"🤖",anthropic:"🧠",deepseek:"🔍",siliconflow:"🌊",华为云:"☁️",huawei:"☁️"}[t]||"🔑"}exportData(){const e=this.store.exportAll(),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,s.click(),URL.revokeObjectURL(n),T.showMessage("数据已导出",2e3,"info")}clearRecords(){T.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。此操作不可撤销。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),T.showMessage("记录已清除",2e3,"info")})}resetAll(){T.confirm("重置全部数据","⚠️ 确定重置吗？所有调用记录将被清除，设置恢复默认值。API Key 配置保留不变，此操作不可撤销。",()=>{this.store.clearRecords(),this.store.resetSettings(),this.keyManager.clearAllAlerts(),T.showMessage("已重置",2e3,"info")})}}function w(m){return m?m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function M(m){return`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}-${String(m.getDate()).padStart(2,"0")}`}function be(m){const e=m.getDay(),t=(e===0?-6:1)-e,n=new Date(m);return n.setDate(m.getDate()+t),n.setHours(0,0,0,0),n}function ye(m){return new Date(m.getFullYear(),m.getMonth(),1)}class ve{constructor(e,t){this.dialog=null,this.summary=null,this.refreshTimer=null,this.store=e,this.keyManager=t}show(){try{if(this.summary=this.computeSummary(),this.dialog&&this.dialog.element&&this.dialog.element.isConnected){this.refreshContent();return}this.dialog&&(this.dialog.destroy(),this.dialog=null);const e=this.isMobile();this.dialog=new T.Dialog({title:"📊 Token 用量统计",width:e?"95vw":"900px",height:e?"85vh":"700px",content:this.renderHTML(this.summary),destroyCallback:()=>{this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null),this.dialog=null}}),this.bindEvents(),this.refreshTimer=setInterval(()=>{if(!this.dialog||!this.dialog.element||!this.dialog.element.isConnected){this.refreshTimer&&(clearInterval(this.refreshTimer),this.refreshTimer=null);return}this.refreshContent()},3e3)}catch(e){console.error("[TokenStats] Dashboard show error:",e),T.showMessage("仪表盘打开失败: "+e.message,3e3,"error")}}refreshContent(){if(!this.dialog||!this.dialog.element)return;const e=this.dialog.element.querySelector(".b3-dialog__body");if(!e)return;const t=e.scrollTop;this.summary=this.computeSummary(),e.innerHTML=this.renderHTML(this.summary),this.bindEvents();const n=this.dialog.element.querySelector(".b3-dialog__body");n&&(n.scrollTop=t)}isMobile(){const e=T.getFrontend();return e==="mobile"||e==="browser-mobile"}computeSummary(){const e=this.store.getRecords(),t=this.store.getApiKeys(),n=this.store.getSettings(),s={totalTokens:0,totalInputTokens:0,totalOutputTokens:0,totalRequests:e.length,successRequests:0,failedRequests:0,averageRequestTime:0,modelStats:{},dailyStats:[],keyStats:[]};let o=0;for(const r of e){s.totalTokens+=r.totalTokens,s.totalInputTokens+=r.inputTokens,s.totalOutputTokens+=r.outputTokens,o+=r.requestTime,r.success?s.successRequests++:s.failedRequests++;const i=r.model||"unknown",a=i.toLowerCase().trim();s.modelStats[a]||(s.modelStats[a]={model:i,count:0,tokens:0,inputTokens:0,outputTokens:0}),s.modelStats[a].count++,s.modelStats[a].tokens+=r.totalTokens,s.modelStats[a].inputTokens+=r.inputTokens,s.modelStats[a].outputTokens+=r.outputTokens}s.averageRequestTime=e.length>0?o/e.length:0,s.dailyStats=this.computeTrendStats(e,n);for(const r of t){const i=this.keyManager.getKeyUsage(r.id),a=r.quotaLimit>0?Math.min(100,i.totalTokens/r.quotaLimit*100):0;s.keyStats.push({apiKeyId:r.id,apiKeyName:r.name,totalTokens:i.totalTokens,totalInputTokens:i.totalInputTokens,totalOutputTokens:i.totalOutputTokens,totalRequests:i.totalRequests,quotaLimit:r.quotaLimit,alertThreshold:r.alertThreshold,usagePercent:a,isAlert:r.alertThreshold>0&&a>=r.alertThreshold,isExceeded:r.quotaLimit>0&&i.totalTokens>=r.quotaLimit})}return s.keyStats.sort((r,i)=>i.totalTokens-r.totalTokens),s}computeTrendStats(e,t){const{trendDateRangeStart:n,trendDateRangeEnd:s,trendAggregation:o}=t;let r=1/0,i=-1/0;for(const k of e)r=Math.min(r,k.timestamp),i=Math.max(i,k.timestamp);const a=e.length>0&&isFinite(r)&&isFinite(i),l=new Date;l.setHours(0,0,0,0);const u=a?new Date(r):new Date(l.getTime()-13*24*60*60*1e3),d=a?new Date(i):l,c=n||M(u),g=s||M(d),f=new Date(c+"T00:00:00"),p=new Date(g+"T23:59:59.999"),h={},v=(k,b,x)=>{h[k]||(h[k]={date:k,tokens:0,count:0}),h[k].tokens+=b,h[k].count+=x};for(const k of e){if(k.timestamp<f.getTime()||k.timestamp>p.getTime())continue;const b=new Date(k.timestamp);if(o==="weekly"){const x=be(b);v(M(x),k.totalTokens,1)}else if(o==="monthly"){const x=ye(b);v(M(x),k.totalTokens,1)}else v(M(b),k.totalTokens,1)}return Object.values(h).sort((k,b)=>k.date.localeCompare(b.date))}renderHTML(e){const t=this.store.getRecentRecords(30),n=Math.max(...e.dailyStats.map(d=>d.tokens),1),s=Math.max(...Object.values(e.modelStats).map(d=>d.tokens),1),o=this.store.getSettings(),r=this.keyManager.getGlobalUsagePercent(o),i=this.keyManager.getGlobalUsage(o),a=this.getMinRecordDate(),l=this.getMaxRecordDate(),u=`
      <div class="tks-trend-controls">
        <label>区间：</label>
        <input type="date" id="tks-trend-start" class="b3-text-field" value="${w(o.trendDateRangeStart||a||"")}" ${a?`min="${w(a)}" max="${w(l||"")}"`:""} />
        <span>~</span>
        <input type="date" id="tks-trend-end" class="b3-text-field" value="${w(o.trendDateRangeEnd||l||"")}" ${l?`min="${w(a||"")}" max="${w(l)}"`:""} />
        <select id="tks-trend-aggregation" class="b3-select">
          <option value="daily" ${o.trendAggregation==="daily"?"selected":""}>按日</option>
          <option value="weekly" ${o.trendAggregation==="weekly"?"selected":""}>按周</option>
          <option value="monthly" ${o.trendAggregation==="monthly"?"selected":""}>按月</option>
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
          ${o.globalQuotaLimit>0?`
          <div class="tks-card tks-card-global">
            <div class="tks-card-icon">🌍</div>
            <div class="tks-card-body">
              <div class="tks-card-value">${r.toFixed(1)}%</div>
              <div class="tks-card-label">全局限额 ${i.totalTokens.toLocaleString()} / ${o.globalQuotaLimit.toLocaleString()}</div>
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
          ${u}
          <div class="tks-daily-chart">
            ${e.dailyStats.map(d=>this.renderDailyBar(d,n,o.trendAggregation)).join("")}
          </div>
          ${e.dailyStats.length===0?'<div class="tks-empty-chart">当前区间内无数据</div>':""}
        </div>

        <!-- 模型分布 -->
        <div class="tks-section">
          <h3 class="tks-section-title">🤖 模型用量分布</h3>
          <div class="tks-model-stats">
            ${Object.values(e.modelStats).sort((d,c)=>c.tokens-d.tokens).map(d=>this.renderModelBar(d,s)).join("")}
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
          <button class="b3-button b3-button--outline" id="tks-export">📥 导出数据</button>
          <button class="b3-button b3-button--outline b3-button--danger" id="tks-clear-records">🗑️ 清除记录</button>
        </div>
      </div>
    `}getMinRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=1/0;for(const n of e)t=Math.min(t,n.timestamp);return M(new Date(t))}getMaxRecordDate(){const e=this.store.getRecords();if(e.length===0)return null;let t=-1/0;for(const n of e)t=Math.max(t,n.timestamp);return M(new Date(t))}renderKeyStat(e){const t=e.quotaLimit>0?`${e.totalTokens.toLocaleString()} / ${e.quotaLimit.toLocaleString()}`:`${e.totalTokens.toLocaleString()} (不限)`,n=e.alertThreshold>0?` · 阈值 ${e.alertThreshold}%`:"",s=e.isExceeded?"⛔":e.isAlert?"⚠️":e.quotaLimit>0?"✅":"";return`
      <div class="tks-key-stat ${e.isAlert?"tks-key-stat-alert":""} ${e.isExceeded?"tks-key-stat-exceeded":""}">
        <div class="tks-key-stat-header">
          <span class="tks-key-stat-name">${s} ${w(e.apiKeyName)}</span>
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
    `}renderDailyBar(e,t,n){const s=Math.max(2,e.tokens/t*100);let o=e.date.substring(5);return n==="weekly"?o=`W${e.date.substring(5,7)}${e.date.substring(8,10)}`:n==="monthly"&&(o=e.date.substring(0,7)),`
      <div class="tks-daily-bar">
        <div class="tks-daily-value">${e.tokens>999?(e.tokens/1e3).toFixed(1)+"k":e.tokens}</div>
        <div class="tks-daily-col">
          <div class="tks-daily-fill" style="height: ${s}%"></div>
        </div>
        <div class="tks-daily-date">${o}</div>
      </div>
    `}renderModelBar(e,t){const n=Math.max(1,e.tokens/t*100);return`
      <div class="tks-model-bar">
        <div class="tks-model-name" title="${w(e.model)}">${w(e.model)}</div>
        <div class="tks-model-bar-track">
          <div class="tks-model-bar-fill" style="width: ${n}%"></div>
        </div>
        <div class="tks-model-detail">
          ${e.tokens.toLocaleString()} tokens · ${e.count} 次
        </div>
      </div>
    `}renderRecordRow(e){return`
      <tr>
        <td>${new Date(e.timestamp).toLocaleString("zh-CN",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}</td>
        <td title="${w(e.apiKeyName)}">${w(e.apiKeyName)}</td>
        <td>${w(e.source)}</td>
        <td>${w(e.model)}</td>
        <td>${e.inputTokens.toLocaleString()}</td>
        <td>${e.outputTokens.toLocaleString()}</td>
        <td><strong>${e.totalTokens.toLocaleString()}</strong></td>
        <td>${e.requestTime}ms</td>
        <td>${e.success?"✅":"❌"}</td>
      </tr>
    `}bindEvents(){var t,n,s,o,r;if(!this.dialog)return;const e=this.dialog.element;(t=e.querySelector("#tks-refresh"))==null||t.addEventListener("click",()=>{this.refreshContent()}),(n=e.querySelector("#tks-export"))==null||n.addEventListener("click",()=>{const i=this.store.exportAll(),a=new Blob([i],{type:"application/json"}),l=URL.createObjectURL(a),u=document.createElement("a");u.href=l,u.download=`siyuan-token-stats-${new Date().toISOString().split("T")[0]}.json`,u.click(),URL.revokeObjectURL(l),T.showMessage("数据已导出",2e3,"info")}),(s=e.querySelector("#tks-clear-records"))==null||s.addEventListener("click",()=>{T.confirm("清除调用记录","确定清除所有 Token 调用记录吗？API Key 配置将保留。",()=>{this.store.clearRecords(),this.store.save(),this.keyManager.clearAllAlerts(),this.show(),T.showMessage("记录已清除",2e3,"info")})}),(o=e.querySelector("#tks-trend-apply"))==null||o.addEventListener("click",()=>{var u,d,c;const i=((u=e.querySelector("#tks-trend-start"))==null?void 0:u.value)||"",a=((d=e.querySelector("#tks-trend-end"))==null?void 0:d.value)||"",l=(c=e.querySelector("#tks-trend-aggregation"))==null?void 0:c.value;this.store.updateSettings({trendDateRangeStart:i,trendDateRangeEnd:a,trendAggregation:l}),this.store.save(),this.show()}),(r=e.querySelector("#tks-trend-reset"))==null||r.addEventListener("click",()=>{this.store.updateSettings({trendDateRangeStart:"",trendDateRangeEnd:"",trendAggregation:"daily"}),this.store.save(),this.show()})}}const xe=`<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="iconTokenStats" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/>
    <rect x="9.5" y="16" width="3" height="7" rx="0.8" fill="currentColor"/>
    <rect x="14.5" y="12" width="3" height="11" rx="0.8" fill="currentColor"/>
    <rect x="19.5" y="9" width="3" height="14" rx="0.8" fill="currentColor"/>
  </symbol>
</svg>`;class Te extends T.Plugin{constructor(){super(...arguments),this.styleElement=null,this.syncHandler=null}async onload(){console.log("[TokenStats] Plugin loading..."),console.log(`[TokenStats] Frontend: ${T.getFrontend()}`),this.styleElement=document.createElement("style"),this.styleElement.id="siyuan-token-stats-style",this.styleElement.textContent=ie,document.head.appendChild(this.styleElement),this.addIcons(xe),this.store=new le,await this.store.load(),this.tokenCounter=new ce,this.keyManager=new de(this.store),this.interceptor=new he(this.store,this.keyManager,this.tokenCounter),this.dashboard=new ve(this.store,this.keyManager),this.interceptor.setThresholdCallback((e,t)=>{this.store.getSettings().showNotifications&&T.showMessage(t,5e3,"error")}),this.interceptor.install(),this.addTopBar({icon:"iconTokenStats",title:"Token 用量统计",position:"right",callback:()=>{this.dashboard.show()}}),this.settingsPanel=new ke(this.store,this.keyManager),this.setting=this.settingsPanel.setting,this.addCommand({langKey:"showTokenStats",langText:"打开 Token 用量统计",hotkey:"",callback:()=>{this.dashboard.show()}}),this.syncHandler=e=>{const t=typeof(e==null?void 0:e.detail)=="string"?e.detail:JSON.stringify((e==null?void 0:e.detail)??"");console.log("[TokenStats] Sync event received, merging data...",t.substring(0,100)),setTimeout(()=>{this.store.mergeFromRemote().catch(n=>console.warn("[TokenStats] Sync merge failed:",n))},1e3)},this.eventBus.on("sync-end",this.syncHandler),console.log("[TokenStats] Plugin loaded successfully.")}onunload(){var e,t,n,s;console.log("[TokenStats] Plugin unloading..."),this.syncHandler&&(this.eventBus.off("sync-end",this.syncHandler),this.syncHandler=null),(e=this.interceptor)==null||e.uninstall(),(t=this.store)==null||t.save().catch(o=>console.error("[TokenStats] Save on unload failed:",o)),(n=this.store)==null||n.saveSync(),(s=this.styleElement)==null||s.remove(),this.styleElement=null,console.log("[TokenStats] Plugin unloaded.")}}module.exports=Te;

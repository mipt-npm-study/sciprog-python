(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1978,2820],{41978:(t,e,s)=>{"use strict";s.r(e),s.d(e,{IInspector:()=>g,InspectionHandler:()=>c,InspectorPanel:()=>l,KernelConnector:()=>p});var n=s(87939),i=s(85),o=s(87598),r=s(58137);class c{constructor(t){this._cleared=new r.Signal(this),this._disposed=new r.Signal(this),this._editor=null,this._inspected=new r.Signal(this),this._isDisposed=!1,this._pending=0,this._standby=!0,this._connector=t.connector,this._rendermime=t.rendermime,this._debouncer=new o.Debouncer(this.onEditorChange.bind(this),250)}get cleared(){return this._cleared}get disposed(){return this._disposed}get inspected(){return this._inspected}get editor(){return this._editor}set editor(t){if(t===this._editor)return;r.Signal.disconnectReceiver(this);const e=this._editor=t;e&&(this._cleared.emit(void 0),this.onEditorChange(),e.model.selections.changed.connect(this._onChange,this),e.model.value.changed.connect(this._onChange,this))}get standby(){return this._standby}set standby(t){this._standby=t}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this._disposed.emit(void 0),r.Signal.clearData(this))}onEditorChange(){if(this._standby)return;const t=this.editor;if(!t)return;const e=t.model.value.text,s=t.getCursorPosition(),o=n.Text.jsIndexToCharIndex(t.getOffsetAt(s),e),r={content:null},c=++this._pending;this._connector.fetch({offset:o,text:e}).then((t=>{if(!t||this.isDisposed||c!==this._pending)return void this._inspected.emit(r);const{data:e}=t,s=this._rendermime.preferredMimeType(e);if(s){const t=this._rendermime.createRenderer(s),n=new i.MimeModel({data:e});t.renderModel(n),r.content=t}this._inspected.emit(r)})).catch((t=>{this._inspected.emit(r)}))}_onChange(){this._debouncer.invoke()}}var d=s(19573),h=s(17179),a=s(77031);const u="jp-Inspector-content";class l extends a.Panel{constructor(t={}){super(),this._source=null,this.translator=t.translator||h.nullTranslator,this._trans=this.translator.load("jupyterlab"),t.initialContent instanceof a.Widget?this._content=t.initialContent:"string"==typeof t.initialContent?this._content=l._generateContentWidget(`<p>${t.initialContent}</p>`):this._content=l._generateContentWidget("<p>"+this._trans.__("Click on a function to see documentation.")+"</p>"),this.addClass("jp-Inspector"),this.layout.addWidget(this._content)}[d.Printing.symbol](){return()=>d.Printing.printWidget(this)}get source(){return this._source}set source(t){this._source!==t&&(this._source&&(this._source.standby=!0,this._source.inspected.disconnect(this.onInspectorUpdate,this),this._source.disposed.disconnect(this.onSourceDisposed,this)),t&&t.isDisposed&&(t=null),this._source=t,this._source&&(this._source.standby=!1,this._source.inspected.connect(this.onInspectorUpdate,this),this._source.disposed.connect(this.onSourceDisposed,this)))}dispose(){this.isDisposed||(this.source=null,super.dispose())}onInspectorUpdate(t,e){const{content:s}=e;s&&s!==this._content&&(this._content.dispose(),this._content=s,s.addClass(u),this.layout.addWidget(s))}onSourceDisposed(t,e){this.source=null}static _generateContentWidget(t){const e=new a.Widget;return e.node.innerHTML=t,e.addClass(u),e.addClass("jp-Inspector-default-content"),e}}var _=s(49713);class p extends _.DataConnector{constructor(t){super(),this._sessionContext=t.sessionContext}fetch(t){var e;const s=null===(e=this._sessionContext.session)||void 0===e?void 0:e.kernel;if(!s)return Promise.reject(new Error("Inspection fetch requires a kernel."));const n={code:t.text,cursor_pos:t.offset,detail_level:1};return s.requestInspect(n).then((t=>{const e=t.content;if("ok"!==e.status||!e.found)throw new Error("Inspection fetch failed to return successfully.");return{data:e.data,metadata:e.metadata}}))}}const g=new(s(66065).Token)("@jupyterlab/inspector:IInspector")}}]);
//# sourceMappingURL=1978.fc42c1051e1155852753.js.map
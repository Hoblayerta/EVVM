(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,759411,60171,e=>{"use strict";var t=e.i(448401),r=e.i(312746);let i=(0,t.proxy)({isLegalCheckboxChecked:!1}),o={state:i,subscribe:e=>(0,t.subscribe)(i,()=>e(i)),subscribeKey:(e,t)=>(0,r.subscribeKey)(i,e,t),setIsLegalCheckboxChecked(e){i.isLegalCheckboxChecked=e}};e.s(["OptionsStateController",0,o],759411),e.i(136250);var a=e.i(498671),s=e.i(233121);e.i(256353);var n=e.i(542266),l=e.i(873461);e.i(817778);var c=e.i(927677),u=a,d=e.i(503948);e.i(719273);var p=e.i(885671);e.i(151005);var h=e.i(618358);e.i(13290),e.i(263718);var m=e.i(770444),g=e.i(83477);let f=g.css`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:e})=>e[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:e})=>e.neutrals400};
    color: ${({colors:e})=>e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:e})=>e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:e})=>e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:e})=>e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:e})=>e.neutrals700};
    background-color: ${({colors:e})=>e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:e})=>e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:e})=>e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var y=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let b={lg:"md",md:"sm",sm:"sm"},w=class extends u.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,h.createRef)(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){let e=b[this.size];return s.html`
      <label data-size=${this.size}>
        <input
          ${(0,h.ref)(this.inputElementRef)}
          ?checked=${(0,p.ifDefined)(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${e}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};w.styles=[m.resetStyles,f],y([(0,d.property)({type:Boolean})],w.prototype,"checked",void 0),y([(0,d.property)({type:Boolean})],w.prototype,"disabled",void 0),y([(0,d.property)()],w.prototype,"size",void 0),w=y([(0,c.customElement)("wui-checkbox")],w),e.i(59154);let v=g.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:e})=>e["3"]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.theme.textSecondary};
    font-weight: 500;
  }
`;var x=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let C=class extends a.LitElement{constructor(){super(),this.unsubscribe=[],this.checked=o.state.isLegalCheckboxChecked,this.unsubscribe.push(o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=l.OptionsController.state,r=l.OptionsController.state.features?.legalCheckbox;return(e||t)&&r?s.html`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=l.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=l.OptionsController.state;return e?s.html`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=l.OptionsController.state;return e?s.html`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){o.setIsLegalCheckboxChecked(!this.checked)}};C.styles=[v],x([(0,n.state)()],C.prototype,"checked",void 0),C=x([(0,c.customElement)("w3m-legal-checkbox")],C),e.s([],60171)},521295,e=>{"use strict";var t=e.i(448401),r=e.i(312746),i=e.i(6225),o=e.i(873461);let a=(0,t.proxy)({message:"",variant:"info",open:!1}),s=(0,i.withErrorBoundary)({state:a,subscribeKey:(e,t)=>(0,r.subscribeKey)(a,e,t),open(e,t){let{debug:r}=o.OptionsController.state,{code:i,displayMessage:s,debugMessage:n}=e;s&&r&&(a.message=s,a.variant=t,a.open=!0),n&&console.error("function"==typeof n?n():n,i?{code:i}:void 0)},warn(e,t,r){a.open=!0,a.message=e,a.variant="warning",t&&console.warn(t,r)},close(){a.open=!1,a.message="",a.variant="info"}});e.s(["AlertController",0,s])},667538,e=>{"use strict";var t=e.i(624681);let r={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};e.s(["ConstantsUtil",0,r])},487829,(e,t,r)=>{"use strict";function i(e){try{return JSON.stringify(e)}catch(e){return'"[Circular]"'}}t.exports=function(e,t,r){var o=r&&r.stringify||i;if("object"==typeof e&&null!==e){var a=t.length+1;if(1===a)return e;var s=Array(a);s[0]=o(e);for(var n=1;n<a;n++)s[n]=o(t[n]);return s.join(" ")}if("string"!=typeof e)return e;var l=t.length;if(0===l)return e;for(var c="",u=0,d=-1,p=e&&e.length||0,h=0;h<p;){if(37===e.charCodeAt(h)&&h+1<p){switch(d=d>-1?d:0,e.charCodeAt(h+1)){case 100:case 102:if(u>=l||null==t[u])break;d<h&&(c+=e.slice(d,h)),c+=Number(t[u]),d=h+2,h++;break;case 105:if(u>=l||null==t[u])break;d<h&&(c+=e.slice(d,h)),c+=Math.floor(Number(t[u])),d=h+2,h++;break;case 79:case 111:case 106:if(u>=l||void 0===t[u])break;d<h&&(c+=e.slice(d,h));var m=typeof t[u];if("string"===m){c+="'"+t[u]+"'",d=h+2,h++;break}if("function"===m){c+=t[u].name||"<anonymous>",d=h+2,h++;break}c+=o(t[u]),d=h+2,h++;break;case 115:if(u>=l)break;d<h&&(c+=e.slice(d,h)),c+=String(t[u]),d=h+2,h++;break;case 37:d<h&&(c+=e.slice(d,h)),c+="%",d=h+2,h++,u--}++u}++h}return -1===d?e:(d<p&&(c+=e.slice(d)),c)}},942138,(e,t,r)=>{"use strict";let i=e.r(487829);t.exports=u;let o=function(){function e(e){return void 0!==e&&e}try{if("undefined"!=typeof globalThis)return globalThis;return Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch(t){return e(self)||e(window)||e(this)||{}}}().console||{};function a(e,t){return"silent"===e?1/0:t.levels.values[e]}let s=Symbol("pino.logFuncs"),n=Symbol("pino.hierarchy"),l={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function c(e,t){let r={logger:t,parent:e[n]};t[n]=r}function u(e){var t,r,i;let n,m,g;(e=e||{}).browser=e.browser||{};let f=e.browser.transmit;if(f&&"function"!=typeof f.send)throw Error("pino: transmit option must have a send function");let v=e.browser.write||o;e.browser.write&&(e.browser.asObject=!0);let x=e.serializers||{},C=(t=e.browser.serialize,Array.isArray(t)?t.filter(function(e){return"!stdSerializers.err"!==e}):!0===t&&Object.keys(x)),k=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(k=!1);let $=Object.keys(e.customLevels||{}),E=["error","fatal","warn","info","debug","trace"].concat($);"function"==typeof v&&E.forEach(function(e){v[e]=v}),(!1===e.enabled||e.browser.disabled)&&(e.level="silent");let T=e.level||"info",O=Object.create(v);O.log||(O.log=y),n={},E.forEach(e=>{n[e]=v[e]?v[e]:o[e]||o[l[e]||"log"]||y}),O[s]=n,c({},O),Object.defineProperty(O,"levelVal",{get:function(){return a(this.level,this)}}),Object.defineProperty(O,"level",{get:function(){return this._level},set:function(e){if("silent"!==e&&!this.levels.values[e])throw Error("unknown level "+e);this._level=e,d(this,S,O,"error"),d(this,S,O,"fatal"),d(this,S,O,"warn"),d(this,S,O,"info"),d(this,S,O,"debug"),d(this,S,O,"trace"),$.forEach(e=>{d(this,S,O,e)})}});let S={transmit:f,serialize:C,asObject:e.browser.asObject,asObjectBindingsOnly:e.browser.asObjectBindingsOnly,formatters:e.browser.formatters,levels:E,timestamp:"function"==typeof(r=e).timestamp?r.timestamp:!1===r.timestamp?b:w,messageKey:e.messageKey||"msg",onChild:e.onChild||y};function A(t,r,i){if(!r)throw Error("missing bindings for child Pino");i=i||{},C&&r.serializers&&(i.serializers=r.serializers);let o=i.serializers;if(C&&o){var a=Object.assign({},x,o),s=!0===e.browser.serialize?Object.keys(a):C;delete r.serializers,p([r],s,a,this._stdErrSerialize)}function n(e){this._childLevel=(0|e._childLevel)+1,this.bindings=r,a&&(this.serializers=a,this._serialize=s),f&&(this._logEvent=h([].concat(e._logEvent.bindings,r)))}n.prototype=this;let l=new n(this);return c(this,l),l.child=function(...e){return A.call(this,t,...e)},l.level=i.level||this.level,t.onChild(l),l}return m=e.customLevels||{},O.levels={values:Object.assign({},u.levels.values,m),labels:Object.assign({},u.levels.labels,(g={},Object.keys(i=m).forEach(function(e){g[i[e]]=e}),g))},O.level=T,O.isLevelEnabled=function(e){return!!this.levels.values[e]&&this.levels.values[e]>=this.levels.values[this.level]},O.setMaxListeners=O.getMaxListeners=O.emit=O.addListener=O.on=O.prependListener=O.once=O.prependOnceListener=O.removeListener=O.removeAllListeners=O.listeners=O.listenerCount=O.eventNames=O.write=O.flush=y,O.serializers=x,O._serialize=C,O._stdErrSerialize=k,O.child=function(...e){return A.call(this,S,...e)},f&&(O._logEvent=h()),O}function d(e,t,r,l){var c,u,d,m,g,f,b;if(Object.defineProperty(e,l,{value:a(e.level,r)>a(l,r)?y:r[s][l],writable:!0,enumerable:!0,configurable:!0}),e[l]===y){if(!t.transmit)return;let i=a(t.transmit.level||e.level,r);if(a(l,r)<i)return}e[l]=(c=e,u=t,d=r,m=l,g=c[s][m],function(){let e=u.timestamp(),t=Array(arguments.length),r=Object.getPrototypeOf&&Object.getPrototypeOf(this)===o?o:this;for(var s=0;s<t.length;s++)t[s]=arguments[s];var n=!1;if(u.serialize&&(p(t,this._serialize,this.serializers,this._stdErrSerialize),n=!0),u.asObject||u.formatters?g.call(r,...function(e,t,r,o,a){let{level:s,log:n=e=>e}=a.formatters||{},l=r.slice(),c=l[0],u={},d=(0|e._childLevel)+1;if(d<1&&(d=1),o&&(u.time=o),s?Object.assign(u,s(t,e.levels.values[t])):u.level=e.levels.values[t],a.asObjectBindingsOnly){if(null!==c&&"object"==typeof c)for(;d--&&"object"==typeof l[0];)Object.assign(u,l.shift());return[n(u),...l]}if(null!==c&&"object"==typeof c){for(;d--&&"object"==typeof l[0];)Object.assign(u,l.shift());c=l.length?i(l.shift(),l):void 0}else"string"==typeof c&&(c=i(l.shift(),l));return void 0!==c&&(u[a.messageKey]=c),[n(u)]}(this,m,t,e,u)):g.apply(r,t),u.transmit){let r=u.transmit.level||c._level,i=a(r,d),o=a(m,d);if(o<i)return;!function(e,t,r,i=!1){let o=t.send,a=t.ts,s=t.methodLevel,n=t.methodValue,l=t.val,c=e._logEvent.bindings;i||p(r,e._serialize||Object.keys(e.serializers),e.serializers,void 0===e._stdErrSerialize||e._stdErrSerialize),e._logEvent.ts=a,e._logEvent.messages=r.filter(function(e){return -1===c.indexOf(e)}),e._logEvent.level.label=s,e._logEvent.level.value=n,o(s,e._logEvent,l),e._logEvent=h(c)}(this,{ts:e,methodLevel:m,methodValue:o,transmitLevel:r,transmitValue:d.levels.values[u.transmit.level||c._level],send:u.transmit.send,val:a(c._level,d)},t,n)}});let w=function(e){let t=[];e.bindings&&t.push(e.bindings);let r=e[n];for(;r.parent;)(r=r.parent).logger.bindings&&t.push(r.logger.bindings);return t.reverse()}(e);0!==w.length&&(e[l]=(f=w,b=e[l],function(){return b.apply(this,[...f,...arguments])}))}function p(e,t,r,i){for(let o in e)if(i&&e[o]instanceof Error)e[o]=u.stdSerializers.err(e[o]);else if("object"==typeof e[o]&&!Array.isArray(e[o])&&t)for(let i in e[o])t.indexOf(i)>-1&&i in r&&(e[o][i]=r[i](e[o][i]))}function h(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function m(e){let t={type:e.constructor.name,msg:e.message,stack:e.stack};for(let r in e)void 0===t[r]&&(t[r]=e[r]);return t}function g(){return{}}function f(e){return e}function y(){}function b(){return!1}function w(){return Date.now()}u.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},u.stdSerializers={mapHttpRequest:g,mapHttpResponse:g,wrapRequestSerializer:f,wrapResponseSerializer:f,wrapErrorSerializer:f,req:g,res:g,err:m,errWithCause:m},u.stdTimeFunctions=Object.assign({},{nullTime:b,epochTime:w,unixTime:function(){return Math.round(Date.now()/1e3)},isoTime:function(){return new Date(Date.now()).toISOString()}}),t.exports.default=u,t.exports.pino=u},987334,787161,e=>{"use strict";var t=e.i(942138);function r(e){if("string"!=typeof e)throw Error(`Cannot safe json parse value of type ${typeof e}`);try{return JSON.parse(e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,'$1"$2n"$3'),(e,t)=>"string"==typeof t&&t.match(/^\d+n$/)?BigInt(t.substring(0,t.length-1)):t)}catch(t){return e}}function i(e){return"string"==typeof e?e:JSON.stringify(e,(e,t)=>"bigint"==typeof t?t.toString()+"n":t)||""}e.s(["safeJsonParse",()=>r,"safeJsonStringify",()=>i],787161);let o="custom_context";var a=Object.defineProperty,s=(e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?a(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r};class n{constructor(e){s(this,"nodeValue"),s(this,"sizeInBytes"),s(this,"next"),this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class l{constructor(e){s(this,"lengthInNodes"),s(this,"sizeInBytes"),s(this,"head"),s(this,"tail"),s(this,"maxSizeInBytes"),this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){let t=new n(e);if(t.size>this.maxSizeInBytes)throw Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?this.tail&&(this.tail.next=t):this.head=t,this.tail=t,this.lengthInNodes++,this.sizeInBytes+=t.size}shift(){if(!this.head)return;let e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){let e=[],t=this.head;for(;null!==t;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};let t=e.value;return e=e.next,{done:!1,value:t}}}}}var c=Object.defineProperty,u=(e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?c(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r};class d{constructor(e,r=1024e3){u(this,"logs"),u(this,"level"),u(this,"levelValue"),u(this,"MAX_LOG_SIZE_IN_BYTES"),this.level=e??"error",this.levelValue=t.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=r,this.logs=new l(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,r){r===t.levels.values.error?console.error(e):r===t.levels.values.warn?console.warn(e):r===t.levels.values.debug?console.debug(e):r===t.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append(i({timestamp:new Date().toISOString(),log:e}));let t="string"==typeof e?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t)}getLogs(){return this.logs}clearLogs(){this.logs=new l(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){let t=this.getLogArray();return t.push(i({extraMetadata:e})),new Blob(t,{type:"application/json"})}}var p=Object.defineProperty;class h{constructor(e,t=1024e3){((e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?p(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r})(this,"baseChunkLogger"),this.baseChunkLogger=new d(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){let t=URL.createObjectURL(this.logsToBlob(e)),r=document.createElement("a");r.href=t,r.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t)}}var m=Object.defineProperty;class g{constructor(e,t=1024e3){((e,t,r)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?m(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r})(this,"baseChunkLogger"),this.baseChunkLogger=new d(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var f=Object.defineProperty,y=Object.defineProperties,b=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&C(e,r,t[r]);if(w)for(var r of w(t))x.call(t,r)&&C(e,r,t[r]);return e};function $(e){return y(k({},e),b({level:e?.level||"info"}))}function E(e,t=o){return e[t]||""}function T(e,t,r=o){let i=function(e,t,r=o){let i=E(e,r);return i.trim()?`${i}/${t}`:t}(e,t,r);return function(e,t,r=o){return e[r]=t,e}(e.child({context:i}),i,r)}function O(e){var r,i,o,a;let s,n,l,c;return"u">typeof e.loggerOverride&&"string"!=typeof e.loggerOverride?{logger:e.loggerOverride,chunkLoggerController:null}:"u">typeof window?(c=new h(null==(o=(i=e).opts)?void 0:o.level,i.maxSizeInBytes),{logger:(0,t.default)((n=k({},i.opts),l={level:"trace",browser:y(k({},null==(a=i.opts)?void 0:a.browser),b({write:e=>c.write(e)}))},y(n,b(l)))),chunkLoggerController:c}):(s=new g(null==(r=e.opts)?void 0:r.level,e.maxSizeInBytes),{logger:(0,t.default)(y(k({},e.opts),b({level:"trace"})),s),chunkLoggerController:s})}e.s(["generateChildLogger",()=>T,"generatePlatformLogger",()=>O,"getDefaultLoggerOptions",()=>$,"getLoggerContext",()=>E],987334)},388407,e=>{"use strict";e.i(136250);var t,r,i=e.i(498671),o=e.i(233121);e.i(256353);var a=e.i(503948),s=e.i(542266),n=e.i(916906),l=e.i(870873),c=e.i(825612),u=e.i(822337),d=e.i(873461),p=e.i(840046),h=e.i(139103),m=e.i(923271);e.i(817778);var g=e.i(224392),f=e.i(927677);e.i(610266),e.i(449765),e.i(244456),e.i(59154);var y=i;e.i(719273);var b=e.i(885671);e.i(263718);var w=e.i(770444);(t=r||(r={})).approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn";var v=i;e.i(166697),e.i(256094);var x=e.i(83477);let C=x.css`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var k=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let $=class extends v.LitElement{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images;this.images.length||(this.dataset.noImages="true");let r=e?.type==="NFT",i=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    --local-right-border-radius: ${i?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)"};
    `,o.html`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?o.html`<div class="swap-images-container">
        ${e?.url?o.html`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?o.html`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?o.html`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?o.html`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:o.html`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-primary";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?o.html`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${e}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontal":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};$.styles=[C],k([(0,a.property)()],$.prototype,"type",void 0),k([(0,a.property)()],$.prototype,"status",void 0),k([(0,a.property)()],$.prototype,"direction",void 0),k([(0,a.property)({type:Boolean})],$.prototype,"onlyDirectionIcon",void 0),k([(0,a.property)({type:Array})],$.prototype,"images",void 0),k([(0,a.property)({type:Object})],$.prototype,"secondImage",void 0),$=k([(0,f.customElement)("wui-transaction-visual")],$);let E=x.css`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var T=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let O=class extends y.LitElement{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return o.html`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,b.ifDefined)(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${r[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?o.html`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?o.html`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}};O.styles=[w.resetStyles,E],T([(0,a.property)()],O.prototype,"type",void 0),T([(0,a.property)({type:Array})],O.prototype,"descriptions",void 0),T([(0,a.property)()],O.prototype,"date",void 0),T([(0,a.property)({type:Boolean})],O.prototype,"onlyDirectionIcon",void 0),T([(0,a.property)()],O.prototype,"status",void 0),T([(0,a.property)()],O.prototype,"direction",void 0),T([(0,a.property)({type:Array})],O.prototype,"images",void 0),O=T([(0,f.customElement)("wui-transaction-list-item")],O);var S=i;e.i(431523),e.i(268588);var A=i;e.i(13290);let R=x.css`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var P=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let z={sm:"xxs",lg:"md"},N=class extends A.LitElement{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return o.html`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){let[e,t]=this.images;return 2===this.images.length&&(e||t)?o.html`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${t} alt="Swap image"></wui-image>
      `:e?o.html`<wui-image src=${e} alt="Swap image"></wui-image>`:null}fiatTemplate(){return o.html`<wui-icon
      class="fallback-icon"
      size=${z[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return o.html`<wui-icon
      class="fallback-icon"
      size=${z[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){let[e]=this.images;return e?o.html`<wui-image src=${e} alt="Token image"></wui-image> `:o.html`<wui-icon
      class="fallback-icon"
      name=${"nft"===this.type?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?o.html`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:o.html`<wui-icon
      class="direction-icon"
      size=${z[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return"trade"===this.type?"arrowClockWise":"arrowBottom"}};N.styles=[R],P([(0,a.property)()],N.prototype,"type",void 0),P([(0,a.property)()],N.prototype,"size",void 0),P([(0,a.property)()],N.prototype,"statusImageUrl",void 0),P([(0,a.property)({type:Array})],N.prototype,"images",void 0),N=P([(0,f.customElement)("wui-transaction-thumbnail")],N);let I=x.css`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,L=class extends S.LitElement{render(){return o.html`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};L.styles=[w.resetStyles,I],L=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}([(0,f.customElement)("wui-transaction-list-item-loader")],L);var j=e.i(890074);let _=x.css`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e["3"]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e["3"]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var D=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let U="last-transaction",B=class extends i.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=l.ChainController.state.activeCaipAddress,this.transactionsByYear=h.TransactionsController.state.transactionsByYear,this.loading=h.TransactionsController.state.loading,this.empty=h.TransactionsController.state.empty,this.next=h.TransactionsController.state.next,h.TransactionsController.clearCursor(),this.unsubscribe.push(l.ChainController.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(h.TransactionsController.resetTransactions(),h.TransactionsController.fetchTransactions(e)),this.caipAddress=e}),l.ChainController.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),h.TransactionsController.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.html` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){h.TransactionsController.resetTransactions(),this.caipAddress&&h.TransactionsController.fetchTransactions(c.CoreHelperUtil.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{let t=parseInt(e,10),r=Array(12).fill(null).map((e,r)=>({groupTitle:g.TransactionUtil.getTransactionGroupTitle(t,r),transactions:this.transactionsByYear[t]?.[r]})).filter(({transactions:e})=>e).reverse();return r.map(({groupTitle:e,transactions:t},i)=>{let a=i===r.length-1;return t?o.html`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${a?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${e}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(t,a)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:r,descriptions:i,direction:a,images:s,status:n,type:l,transfers:c,isAllNFT:u}=this.getTransactionListItemProps(e);return o.html`
      <wui-transaction-list-item
        date=${r}
        .direction=${a}
        id=${t&&this.next?U:""}
        status=${n}
        type=${l}
        .images=${s}
        .onlyDirectionIcon=${u||1===c.length}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,i)=>{let a=t&&i===e.length-1;return o.html`${this.templateRenderTransaction(r,a)}`})}emptyStateActivity(){return o.html`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return o.html`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?o.html`${this.emptyStateAccount()}`:o.html`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(o.html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){p.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:e}=d.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(h.TransactionsController.fetchTransactions(c.CoreHelperUtil.getPlainAddress(this.caipAddress)),u.EventsController.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:c.CoreHelperUtil.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:(0,m.getPreferredAccountType)(l.ChainController.state.activeChain)===j.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${U}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=n.DateUtil.formatDate(e?.metadata?.minedAt),r=g.TransactionUtil.mergeTransfers(e?.transfers),i=g.TransactionUtil.getTransactionDescriptions(e,r),o=r?.[0],a=!!o&&r?.every(e=>!!e.nft_info),s=g.TransactionUtil.getTransactionImages(r);return{date:t,direction:o?.direction,descriptions:i,isAllNFT:a,images:s,status:e.metadata?.status,transfers:r,type:e.metadata?.operationType}}};B.styles=_,D([(0,a.property)()],B.prototype,"page",void 0),D([(0,s.state)()],B.prototype,"caipAddress",void 0),D([(0,s.state)()],B.prototype,"transactionsByYear",void 0),D([(0,s.state)()],B.prototype,"loading",void 0),D([(0,s.state)()],B.prototype,"empty",void 0),D([(0,s.state)()],B.prototype,"next",void 0),B=D([(0,f.customElement)("w3m-activity-list")],B),e.s([],388407)},890996,e=>{"use strict";var t=e.i(307280),r=e.i(791487),i=e.i(330834),o=e.i(211548);function a(e,t={}){let{key:r="fallback",name:n="Fallback",rank:l=!1,shouldThrow:c=s,retryCount:u,retryDelay:d}=t;return({chain:t,pollingInterval:a=4e3,timeout:s,...p})=>{let h=e,m=()=>{},g=(0,o.createTransport)({key:r,name:n,async request({method:e,params:r}){let i,o=async(a=0)=>{let n=h[a]({...p,chain:t,retryCount:0,timeout:s});try{let t=await n.request({method:e,params:r});return m({method:e,params:r,response:t,transport:n,status:"success"}),t}catch(s){if(m({error:s,method:e,params:r,transport:n,status:"error"}),c(s)||a===h.length-1||!(i??=h.slice(a+1).some(r=>{let{include:i,exclude:o}=r({chain:t}).config.methods||{};return i?i.includes(e):!o||!o.includes(e)})))throw s;return o(a+1)}};return o()},retryCount:u,retryDelay:d,type:"fallback"},{onResponse:e=>m=e,transports:h.map(e=>e({chain:t,retryCount:0}))});if(l){let e="object"==typeof l?l:{};!function({chain:e,interval:t=4e3,onTransports:r,ping:o,sampleCount:a=10,timeout:s=1e3,transports:n,weights:l={}}){let{stability:c=.7,latency:u=.3}=l,d=[],p=async()=>{let l=await Promise.all(n.map(async t=>{let r,i,a=t({chain:e,retryCount:0,timeout:s}),n=Date.now();try{await (o?o({transport:a}):a.request({method:"net_listening"})),i=1}catch{i=0}finally{r=Date.now()}return{latency:r-n,success:i}}));d.push(l),d.length>a&&d.shift();let h=Math.max(...d.map(e=>Math.max(...e.map(({latency:e})=>e))));r(n.map((e,t)=>{let r=d.map(e=>e[t].latency),i=r.reduce((e,t)=>e+t,0)/r.length,o=d.map(e=>e[t].success),a=o.reduce((e,t)=>e+t,0)/o.length;return 0===a?[0,t]:[u*(1-i/h)+c*a,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>n[e])),await (0,i.wait)(t),p()};p()}({chain:t,interval:e.interval??a,onTransports:e=>h=e,ping:e.ping,sampleCount:e.sampleCount,timeout:e.timeout,transports:h,weights:e.weights})}return g}}function s(e){return!!("code"in e&&"number"==typeof e.code&&(e.code===r.TransactionRejectedRpcError.code||e.code===r.UserRejectedRequestError.code||t.ExecutionRevertedError.nodeMessage.test(e.message)||5e3===e.code))}e.s(["fallback",()=>a,"shouldThrow",()=>s])},805598,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948);e.i(166697);var o=e.i(770444),a=e.i(351238),s=e.i(927677),n=e.i(83477);let l=n.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var c=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends t.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){let e={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${e[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${e[this.size??"xl"]});
    `,r.html`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",r.html`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=a.UiHelperUtil.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};u.styles=[o.resetStyles,l],c([(0,i.property)()],u.prototype,"imageSrc",void 0),c([(0,i.property)()],u.prototype,"alt",void 0),c([(0,i.property)()],u.prototype,"address",void 0),c([(0,i.property)()],u.prototype,"size",void 0),u=c([(0,s.customElement)("wui-avatar")],u),e.s([],805598)},746800,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948),o=e.i(542266),a=e.i(210648),s=e.i(840046),n=e.i(260856);e.i(817778);var l=e.i(927677),c=e.i(251088);let u=c.css`
  :host {
    width: 100%;
    display: block;
  }
`;var d=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let p=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.text="",this.open=n.TooltipController.state.open,this.unsubscribe.push(s.RouterController.subscribeKey("view",()=>{n.TooltipController.hide()}),a.ModalController.subscribeKey("open",e=>{e||n.TooltipController.hide()}),n.TooltipController.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),n.TooltipController.hide()}render(){return r.html`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return r.html`<slot></slot> `}onMouseEnter(){let e=this.getBoundingClientRect();if(!this.open){let t=document.querySelector("w3m-modal"),r={width:e.width,height:e.height,left:e.left,top:e.top};if(t){let i=t.getBoundingClientRect();r.left=e.left-(window.innerWidth-i.width)/2,r.top=e.top-(window.innerHeight-i.height)/2}n.TooltipController.showTooltip({message:this.text,triggerRect:r,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||n.TooltipController.hide()}};p.styles=[u],d([(0,i.property)()],p.prototype,"text",void 0),d([(0,o.state)()],p.prototype,"open",void 0),p=d([(0,l.customElement)("w3m-tooltip-trigger")],p),e.s([],746800)},244456,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948);e.i(13290),e.i(263718);var o=e.i(770444),a=e.i(927677),s=e.i(83477);let n=s.css`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({spacing:e})=>e[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let c={sm:"sm-medium",md:"md-medium"},u={accent:"accent-primary",secondary:"secondary"},d=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return r.html`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${u[this.variant]}
          variant=${c[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?r.html`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};d.styles=[o.resetStyles,o.elementStyles,n],l([(0,i.property)()],d.prototype,"size",void 0),l([(0,i.property)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,i.property)()],d.prototype,"variant",void 0),l([(0,i.property)()],d.prototype,"icon",void 0),d=l([(0,a.customElement)("wui-link")],d),e.s([],244456)},300536,e=>{"use strict";e.i(591106),e.s([])},715837,e=>{"use strict";e.s(["NavigationUtil",0,{URLS:{FAQ:"https://walletconnect.com/faq"}}])},677288,e=>{"use strict";let t={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:e.i(258900).ConstantsUtil.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH",getSDKVersionWarningMessage:(e,t)=>`
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${e} is outdated. Latest version is ${t}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`};e.s(["ConstantsUtil",0,t])},608814,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948);e.i(719273);var o=e.i(885671);e.i(13290),e.i(263718);var a=e.i(770444),s=e.i(927677);e.i(338595);var n=e.i(251088);let l=n.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var c=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends t.LitElement{constructor(){super(...arguments),this.disabled=!1}render(){return r.html`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,o.ifDefined)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?r.html`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};u.styles=[a.resetStyles,l],c([(0,i.property)()],u.prototype,"errorMessage",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,i.property)()],u.prototype,"value",void 0),c([(0,i.property)()],u.prototype,"tabIdx",void 0),u=c([(0,s.customElement)("wui-email-input")],u),e.s([],608814)},161513,e=>{"use strict";e.i(136250);var t=e.i(233121);let r=t.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;e.s(["networkSvgMd",0,r])},746533,e=>{"use strict";e.i(794581),e.s([])},402466,e=>{"use strict";e.i(136250);var t=e.i(233121);let r=t.svg`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;e.s(["networkSvgLg",0,r])},61437,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948),o=e.i(402466),a=e.i(161513);let s=r.svg`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;e.i(13290),e.i(166697);var n=e.i(770444),l=e.i(927677),c=e.i(83477);let u=c.css`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var d=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let p=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:a.networkSvgMd,lg:o.networkSvgLg},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${({sm:"4",md:"6",lg:"10"})[this.size]});
    `,r.html`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:r.html`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};p.styles=[n.resetStyles,u],d([(0,i.property)()],p.prototype,"size",void 0),d([(0,i.property)()],p.prototype,"name",void 0),d([(0,i.property)({type:Object})],p.prototype,"networkImagesBySize",void 0),d([(0,i.property)()],p.prototype,"imageSrc",void 0),d([(0,i.property)({type:Boolean})],p.prototype,"selected",void 0),d([(0,i.property)({type:Boolean})],p.prototype,"round",void 0),p=d([(0,l.customElement)("wui-network-image")],p),e.s([],61437)},205451,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948),o=e.i(770444),a=e.i(927677),s=e.i(83477);let n=s.css`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let c=class extends t.LitElement{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return r.html`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};c.styles=[o.resetStyles,n],l([(0,i.property)({type:Number})],c.prototype,"radius",void 0),c=l([(0,a.customElement)("wui-loading-thumbnail")],c),e.s([],205451)},31730,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948);e.i(719273);var o=e.i(885671);e.i(591106),e.i(263718);var a=e.i(770444),s=e.i(927677),n=e.i(83477);let l=n.css`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var c=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends t.LitElement{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",r.html`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,o.ifDefined)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?r.html`<wui-image
        icon=${this.icon}
        iconColor=${(0,o.ifDefined)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:r.html`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?r.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:r.html`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};u.styles=[a.resetStyles,a.elementStyles,l],c([(0,i.property)()],u.prototype,"imageSrc",void 0),c([(0,i.property)()],u.prototype,"icon",void 0),c([(0,i.property)()],u.prototype,"iconColor",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"loading",void 0),c([(0,i.property)()],u.prototype,"tabIdx",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"rightIcon",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"rounded",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"fullSize",void 0),u=c([(0,s.customElement)("wui-list-item")],u),e.s([],31730)},428960,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948);e.i(263718);var o=e.i(770444),a=e.i(927677),s=e.i(83477);let n=s.css`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let c=class extends t.LitElement{constructor(){super(...arguments),this.text=""}render(){return r.html`${this.template()}`}template(){return this.text?r.html`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};c.styles=[o.resetStyles,n],l([(0,i.property)()],c.prototype,"text",void 0),c=l([(0,a.customElement)("wui-separator")],c),e.s([],428960)},322738,806307,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948);e.i(13290);var o=e.i(770444),a=e.i(927677),s=e.i(83477);let n=s.css`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let c=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return r.html`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${({accent:"accent-primary",primary:"inverse",secondary:"default"})[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};c.styles=[o.resetStyles,o.elementStyles,n],l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,i.property)()],c.prototype,"icon",void 0),l([(0,i.property)()],c.prototype,"iconColor",void 0),l([(0,i.property)()],c.prototype,"variant",void 0),c=l([(0,a.customElement)("wui-icon-link")],c),e.s([],806307),e.s([],322738)},390177,e=>{"use strict";e.i(431523),e.s([])},431523,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948),o=e.i(927677),a=e.i(83477);let s=a.css`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var n=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let l=class extends t.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",r.html`<slot></slot>`}};l.styles=[s],n([(0,i.property)()],l.prototype,"width",void 0),n([(0,i.property)()],l.prototype,"height",void 0),n([(0,i.property)()],l.prototype,"variant",void 0),n([(0,i.property)({type:Boolean})],l.prototype,"rounded",void 0),l=n([(0,o.customElement)("wui-shimmer")],l),e.s([],431523)},993945,e=>{"use strict";e.i(338595),e.s([])},46391,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948),o=e.i(392185);e.i(13290),e.i(166697),e.i(263718),e.i(268588);var a=e.i(770444),s=e.i(927677),n=e.i(83477);let l=n.css`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var c=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends t.LitElement{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return r.html`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="space-between" gap="1">
            <wui-text variant="md-regular" color="primary">${this.tokenName}</wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${o.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${o.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?r.html`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:r.html`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};u.styles=[a.resetStyles,a.elementStyles,l],c([(0,i.property)()],u.prototype,"tokenName",void 0),c([(0,i.property)()],u.prototype,"tokenImageUrl",void 0),c([(0,i.property)({type:Number})],u.prototype,"tokenValue",void 0),c([(0,i.property)()],u.prototype,"tokenAmount",void 0),c([(0,i.property)()],u.prototype,"tokenCurrency",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"clickable",void 0),u=c([(0,s.customElement)("wui-list-token")],u),e.s([],46391)},672431,453623,e=>{"use strict";var t=e.i(448401),r=e.i(312746),i=e.i(392185),o=e.i(923271),a=e.i(404461),s=e.i(825612),n=e.i(523976),l=e.i(873461);let c={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class u extends Error{}async function d(e,t){let r=function(){let{sdkType:e,sdkVersion:t,projectId:r}=l.OptionsController.getSnapshot(),i=new URL("https://rpc.walletconnect.org/v1/json-rpc");return i.searchParams.set("projectId",r),i.searchParams.set("st",e),i.searchParams.set("sv",t),i.searchParams.set("source","fund-wallet"),i.toString()}(),{projectId:i}=l.OptionsController.getSnapshot(),o={jsonrpc:"2.0",id:1,method:e,params:{...t||{},projectId:i}},a=await fetch(r,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),s=await a.json();if(s.error)throw new u(s.error.message);return s}async function p(e){return(await d("reown_getExchanges",e)).result}async function h(e){return(await d("reown_getExchangePayUrl",e)).result}async function m(e){return(await d("reown_getExchangeBuyStatus",e)).result}function g(e,t){let{chainNamespace:r,chainId:i}=n.ParseUtil.parseCaipNetworkId(e),o=c[r];if(!o)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${r}`);let a=o.native.assetNamespace,s=o.native.assetReference;"native"!==t&&(a=o.defaultTokenNamespace,s=t);let l=`${r}:${i}`;return`${l}/${a}:${s}`}let f={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},y={ethereumETH:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseETH:{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseUSDC:f,baseSepoliaETH:{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ethereumUSDC:{network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},arbitrumUSDC:{network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},polygonUSDC:{network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},solanaUSDC:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ethereumUSDT:{network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},optimismUSDT:{network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},arbitrumUSDT:{network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},polygonUSDT:{network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaUSDT:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaSOL:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}};function b(e){return Object.values(y).filter(t=>t.network===e)}e.s(["baseSepoliaUSDC",0,{network:"eip155:84532",asset:"0x036CbD53842c5426634e7929541eC2318f3dCF7e",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},"baseUSDC",0,f,"formatCaip19Asset",()=>g,"getBuyStatus",()=>m,"getExchanges",()=>p,"getPayUrl",()=>h,"getPaymentAssetsForNetwork",()=>b],453623);var w=e.i(273879),v=e.i(870873),x=e.i(822337),C=e.i(802118);let k={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},$=(0,t.proxy)(k),E={state:$,subscribe:e=>(0,t.subscribe)($,()=>e($)),subscribeKey:(e,t)=>(0,r.subscribeKey)($,e,t),resetState(){Object.assign($,{...k})},async getAssetsForNetwork(e){let t=b(e),r=await E.getAssetsImageAndPrice(t),i=t.map(e=>{let t="native"===e.asset?(0,o.getActiveNetworkTokenAddress)():`${e.network}:${e.asset}`,i=r.find(e=>e.fungibles?.[0]?.address?.toLowerCase()===t.toLowerCase());return{...e,price:i?.fungibles?.[0]?.price||1,metadata:{...e.metadata,iconUrl:i?.fungibles?.[0]?.iconUrl}}});return $.assets=i,i},async getAssetsImageAndPrice(e){let t=e.map(e=>"native"===e.asset?(0,o.getActiveNetworkTokenAddress)():`${e.network}:${e.asset}`);return await Promise.all(t.map(e=>w.BlockchainApiController.fetchTokenPrice({addresses:[e]})))},getTokenAmount(){if(!$?.paymentAsset?.price)throw Error("Cannot get token price");let e=i.NumberUtil.bigNumber($.amount??0).round(8),t=i.NumberUtil.bigNumber($.paymentAsset.price).round(8);return e.div(t).round(8).toNumber()},setAmount(e){$.amount=e,$.paymentAsset?.price&&($.tokenAmount=E.getTokenAmount())},setPaymentAsset(e){$.paymentAsset=e},isPayWithExchangeEnabled:()=>l.OptionsController.state.remoteFeatures?.payWithExchange,isPayWithExchangeSupported:()=>E.isPayWithExchangeEnabled()&&v.ChainController.state.activeCaipNetwork&&a.ConstantsUtil.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(v.ChainController.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{let e=E.isPayWithExchangeSupported();if(!$.paymentAsset||!e){$.exchanges=[],$.isLoading=!1;return}$.isLoading=!0;let t=await p({page:0,asset:g($.paymentAsset.network,$.paymentAsset.asset),amount:$.amount?.toString()??"0"});$.exchanges=t.exchanges.slice(0,2)}catch(e){throw C.SnackController.showError("Unable to get exchanges"),Error("Unable to get exchanges")}finally{$.isLoading=!1}},async getPayUrl(e,t){try{let r=Number(t.amount),i=await h({exchangeId:e,asset:g(t.network,t.asset),amount:r.toString(),recipient:`${t.network}:${t.recipient}`});return x.EventsController.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:"exchange",exchangeId:e},source:"fund-from-exchange",headless:!1}}),i}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw Error("Asset not supported");throw Error(e.message)}},async handlePayWithExchange(e){try{let t=v.ChainController.getAccountData()?.address;if(!t)throw Error("No account connected");if(!$.paymentAsset)throw Error("No payment asset selected");let r=s.CoreHelperUtil.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!r)throw Error("Could not create popup window");$.isPaymentInProgress=!0,$.paymentId=crypto.randomUUID(),$.currentPayment={type:"exchange",exchangeId:e};let{network:i,asset:o}=$.paymentAsset,a={network:i,asset:o,amount:$.tokenAmount,recipient:t},n=await E.getPayUrl(e,a);if(!n){try{r.close()}catch(e){console.error("Unable to close popup window",e)}throw Error("Unable to initiate payment")}$.currentPayment.sessionId=n.sessionId,$.currentPayment.status="IN_PROGRESS",$.currentPayment.exchangeId=e,r.location.href=n.url}catch(e){$.error="Unable to initiate payment",C.SnackController.showError($.error)}},async waitUntilComplete({exchangeId:e,sessionId:t,paymentId:r,retries:i=20}){let o=await E.getBuyStatus(e,t,r);if("SUCCESS"===o.status||"FAILED"===o.status)return o;if(0===i)throw Error("Unable to get deposit status");return await new Promise(e=>{setTimeout(e,5e3)}),E.waitUntilComplete({exchangeId:e,sessionId:t,paymentId:r,retries:i-1})},async getBuyStatus(e,t,r){try{if(!$.currentPayment)throw Error("No current payment");let i=await m({sessionId:t,exchangeId:e});if($.currentPayment.status=i.status,"SUCCESS"===i.status||"FAILED"===i.status){let e=v.ChainController.getAccountData()?.address;$.currentPayment.result=i.txHash,$.isPaymentInProgress=!1,x.EventsController.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===i.status?s.CoreHelperUtil.parseError($.error):void 0,source:"fund-from-exchange",paymentId:r,configuration:{network:$.paymentAsset?.network||"",asset:$.paymentAsset?.asset||"",recipient:e||"",amount:$.amount??0},currentPayment:{type:"exchange",exchangeId:$.currentPayment?.exchangeId,sessionId:$.currentPayment?.sessionId,result:i.txHash}}})}return i}catch(e){return{status:"UNKNOWN",txHash:""}}},reset(){$.currentPayment=void 0,$.isPaymentInProgress=!1,$.paymentId="",$.paymentAsset=null,$.amount=0,$.tokenAmount=0,$.priceLoading=!1,$.error=null,$.exchanges=[],$.isLoading=!1}};e.s(["ExchangeController",0,E],672431)},794581,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948);e.i(13290),e.i(166697);var o=e.i(770444),a=e.i(927677);e.i(256094);var s=e.i(83477);let n=s.css`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let c=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="1";return"lg"===this.size?e="4":"md"===this.size?e="2":"sm"===this.size&&(e="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${e});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),r.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?r.html`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:r.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};c.styles=[o.resetStyles,n],l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)()],c.prototype,"name",void 0),l([(0,i.property)()],c.prototype,"imageSrc",void 0),l([(0,i.property)()],c.prototype,"walletIcon",void 0),l([(0,i.property)({type:Boolean})],c.prototype,"installed",void 0),l([(0,i.property)()],c.prototype,"badgeSize",void 0),c=l([(0,a.customElement)("wui-wallet-image")],c),e.s([],794581)},627246,e=>{"use strict";var t=e.i(258900),r=e.i(873461),i=e.i(840046),o=e.i(667538);e.s(["HelpersUtil",0,{getTabsByNamespace:e=>e&&e===t.ConstantsUtil.CHAIN.EVM?r.OptionsController.state.remoteFeatures?.activity===!1?o.ConstantsUtil.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):o.ConstantsUtil.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){let e=i.RouterController.state.view;if(o.ConstantsUtil.VIEWS_WITH_LEGAL_FOOTER.includes(e)){let{termsConditionsUrl:e,privacyPolicyUrl:t}=r.OptionsController.state,i=r.OptionsController.state.features?.legalCheckbox;return(!!e||!!t)&&!i}return o.ConstantsUtil.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}}])},93984,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(503948);e.i(13290),e.i(263718);var o=e.i(770444),a=e.i(927677),s=e.i(83477);let n=s.css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var l=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let c=class extends t.LitElement{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e="md"===this.size?"md-medium":"sm-medium",t="md"===this.size?"md":"sm";return r.html`
      ${this.icon?r.html`<wui-icon size=${t} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${e}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};c.styles=[o.resetStyles,n],l([(0,i.property)()],c.prototype,"variant",void 0),l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)()],c.prototype,"icon",void 0),c=l([(0,a.customElement)("wui-tag")],c),e.s([],93984)},124796,260856,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(542266),o=e.i(448401),a=e.i(312746),s=e.i(6225);let n=(0,o.proxy)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),l=(0,s.withErrorBoundary)({state:n,subscribe:e=>(0,o.subscribe)(n,()=>e(n)),subscribeKey:(e,t)=>(0,a.subscribeKey)(n,e,t),showTooltip({message:e,triggerRect:t,variant:r}){n.open=!0,n.message=e,n.triggerRect=t,n.variant=r},hide(){n.open=!1,n.message="",n.triggerRect={width:0,height:0,top:0,left:0}}});e.s(["TooltipController",0,l],260856),e.i(817778);var c=e.i(927677);e.i(610266),e.i(2781),e.i(59154);var u=e.i(83477);let d=u.css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e["3"]} 10px ${({spacing:e})=>e["3"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e["5"]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var p=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let h=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.open=l.state.open,this.message=l.state.message,this.triggerRect=l.state.triggerRect,this.variant=l.state.variant,this.unsubscribe.push(l.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,r.html`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};h.styles=[d],p([(0,i.state)()],h.prototype,"open",void 0),p([(0,i.state)()],h.prototype,"message",void 0),p([(0,i.state)()],h.prototype,"triggerRect",void 0),p([(0,i.state)()],h.prototype,"variant",void 0),h=p([(0,c.customElement)("w3m-tooltip")],h),e.s([],124796)},551574,529871,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121);e.i(256353);var i=e.i(542266),o=e.i(873461);e.i(817778);var a=e.i(927677);e.i(610266),e.i(59154);var s=t;e.i(13290),e.i(263718),e.i(268588);var n=e.i(770444),l=e.i(83477);let c=l.css`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`,u=class extends s.LitElement{render(){return r.html`
      <a
        data-testid="ux-branding-reown"
        href=${"https://reown.com"}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};u.styles=[n.resetStyles,n.elementStyles,c],u=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}([(0,a.customElement)("wui-ux-by-reown")],u),e.s([],529871);let d=l.css`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e["3"]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var p=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let h=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=o.OptionsController.state.remoteFeatures,this.unsubscribe.push(o.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=o.OptionsController.state,i=o.OptionsController.state.features?.legalCheckbox;return(e||t)&&!i?r.html`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `:r.html`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=o.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=o.OptionsController.state;return e?r.html`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){let{privacyPolicyUrl:e}=o.OptionsController.state;return e?r.html`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?r.html`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:r.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}};h.styles=[d],p([(0,i.state)()],h.prototype,"remoteFeatures",void 0),h=p([(0,a.customElement)("w3m-legal-footer")],h),e.s([],551574)},695080,e=>{"use strict";e.i(136250);var t=e.i(498671),r=e.i(233121),i=e.i(870873),o=e.i(822337),a=e.i(873461),s=e.i(840046),n=e.i(923271);e.i(817778);var l=e.i(927677);e.i(610266),e.i(2781),e.i(244456),e.i(59154);var c=e.i(890074),u=e.i(251088);let d=u.css``,p=class extends t.LitElement{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=a.OptionsController.state;return e||t?r.html`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return r.html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){o.EventsController.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,n.getPreferredAccountType)(i.ChainController.state.activeChain)===c.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),s.RouterController.push("WhatIsABuy")}};p.styles=[d],p=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}([(0,l.customElement)("w3m-onramp-providers-footer")],p),e.s([],695080)}]);
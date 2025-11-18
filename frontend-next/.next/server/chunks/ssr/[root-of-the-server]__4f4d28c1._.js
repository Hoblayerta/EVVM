module.exports=[526162,a=>{"use strict";var b=a.i(406832),c=a.i(221282),d=a.i(412489),e=a.i(532723);a.s(["HelpersUtil",0,{getTabsByNamespace:a=>a&&a===b.ConstantsUtil.CHAIN.EVM?c.OptionsController.state.remoteFeatures?.activity===!1?e.ConstantsUtil.ACCOUNT_TABS.filter(a=>"Activity"!==a.label):e.ConstantsUtil.ACCOUNT_TABS:[],isValidReownName:a=>/^[a-zA-Z0-9]+$/gu.test(a),isValidEmail:a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(a),validateReownName:a=>a.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){let a=d.RouterController.state.view;if(e.ConstantsUtil.VIEWS_WITH_LEGAL_FOOTER.includes(a)){let{termsConditionsUrl:a,privacyPolicyUrl:b}=c.OptionsController.state,d=c.OptionsController.state.features?.legalCheckbox;return(!!a||!!b)&&!d}return e.ConstantsUtil.VIEWS_WITH_DEFAULT_FOOTER.includes(a)}}])},61986,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211);a.i(878088),a.i(980841);var e=a.i(37485),f=a.i(829972),g=a.i(806134);let h=g.css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:a})=>a[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
    color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:a})=>a.core.backgroundSuccess};
    color: ${({tokens:a})=>a.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:a})=>a.core.backgroundWarning};
    color: ${({tokens:a})=>a.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:a})=>a.core.backgroundError};
    color: ${({tokens:a})=>a.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:a})=>a[2]};
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:a})=>a[1]};
    border-radius: ${({borderRadius:a})=>a[1]};
  }
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j=class extends b.LitElement{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let a="md"===this.size?"md-medium":"sm-medium",b="md"===this.size?"md":"sm";return c.html`
      ${this.icon?c.html`<wui-icon size=${b} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${a}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};j.styles=[e.resetStyles,h],i([(0,d.property)()],j.prototype,"variant",void 0),i([(0,d.property)()],j.prototype,"size",void 0),i([(0,d.property)()],j.prototype,"icon",void 0),j=i([(0,f.customElement)("wui-tag")],j),a.s([],61986)},330092,102651,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(349631),e=a.i(195615),f=a.i(107700),g=a.i(904167);let h=(0,e.proxy)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),i=(0,g.withErrorBoundary)({state:h,subscribe:a=>(0,e.subscribe)(h,()=>a(h)),subscribeKey:(a,b)=>(0,f.subscribeKey)(h,a,b),showTooltip({message:a,triggerRect:b,variant:c}){h.open=!0,h.message=a,h.triggerRect=b,h.variant=c},hide(){h.open=!1,h.message="",h.triggerRect={width:0,height:0,top:0,left:0}}});a.s(["TooltipController",0,i],102651),a.i(317052);var j=a.i(829972);a.i(423810),a.i(476368),a.i(251264);var k=a.i(806134);let l=k.css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:a})=>a["3"]} 10px ${({spacing:a})=>a["3"]};
    border-radius: ${({borderRadius:a})=>a["3"]};
    color: ${({tokens:a})=>a.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:a})=>a["5"]});
    transition: opacity ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:a})=>a.xl};
    animation-timing-function: ${({easings:a})=>a["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:a})=>a.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:a})=>a.theme.foregroundPrimary};
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
`;var m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let n=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.open=i.state.open,this.message=i.state.message,this.triggerRect=i.state.triggerRect,this.variant=i.state.variant,this.unsubscribe.push(i.subscribe(a=>{this.open=a.open,this.message=a.message,this.triggerRect=a.triggerRect,this.variant=a.variant}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){this.dataset.variant=this.variant;let a=this.triggerRect.top,b=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${a}px;
    --w3m-tooltip-left: ${b}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,c.html`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};n.styles=[l],m([(0,d.state)()],n.prototype,"open",void 0),m([(0,d.state)()],n.prototype,"message",void 0),m([(0,d.state)()],n.prototype,"triggerRect",void 0),m([(0,d.state)()],n.prototype,"variant",void 0),n=m([(0,j.customElement)("w3m-tooltip")],n),a.s([],330092)},254799,(a,b,c)=>{b.exports=a.x("crypto",()=>require("crypto"))},524836,(a,b,c)=>{b.exports=a.x("https",()=>require("https"))},921517,(a,b,c)=>{b.exports=a.x("http",()=>require("http"))},504446,(a,b,c)=>{b.exports=a.x("net",()=>require("net"))},755004,(a,b,c)=>{b.exports=a.x("tls",()=>require("tls"))},446786,(a,b,c)=>{b.exports=a.x("os",()=>require("os"))},800858,(a,b,c)=>{var d=a.r(522734),e=a.r(814747),f=a.r(446786),g="function"==typeof __webpack_require__?__non_webpack_require__:a.t,h=process.config&&process.config.variables||{},i=!!process.env.PREBUILDS_ONLY,j=process.versions.modules,k=process.versions&&process.versions.electron||process.env.ELECTRON_RUN_AS_NODE?"electron":process.versions&&process.versions.nw?"node-webkit":"node",l=process.env.npm_config_arch||f.arch(),m=process.env.npm_config_platform||f.platform(),n=process.env.LIBC||("linux"===m&&d.existsSync("/etc/alpine-release")?"musl":"glibc"),o=process.env.ARM_VERSION||("arm64"===l?"8":h.arm_version)||"",p=(process.versions.uv||"").split(".")[0];function q(a){return g(q.resolve(a))}function r(a){try{return d.readdirSync(a)}catch(a){return[]}}function s(a,b){var c=r(a).filter(b);return c[0]&&e.join(a,c[0])}function t(a){return/\.node$/.test(a)}function u(a){var b=a.split("-");if(2===b.length){var c=b[0],d=b[1].split("+");if(c&&d.length&&d.every(Boolean))return{name:a,platform:c,architectures:d}}}function v(a,b){return function(c){return null!=c&&c.platform===a&&c.architectures.includes(b)}}function w(a,b){return a.architectures.length-b.architectures.length}function x(a){var b=a.split("."),c=b.pop(),d={file:a,specificity:0};if("node"===c){for(var e=0;e<b.length;e++){var f=b[e];if("node"===f||"electron"===f||"node-webkit"===f)d.runtime=f;else if("napi"===f)d.napi=!0;else if("abi"===f.slice(0,3))d.abi=f.slice(3);else if("uv"===f.slice(0,2))d.uv=f.slice(2);else if("armv"===f.slice(0,4))d.armv=f.slice(4);else{if("glibc"!==f&&"musl"!==f)continue;d.libc=f}d.specificity++}return d}}function y(a,b){return function(c){var d;return null!=c&&(!c.runtime||c.runtime===a||!!("node"===(d=c).runtime&&d.napi))&&(!c.abi||c.abi===b||!!c.napi)&&(!c.uv||c.uv===p)&&(!c.armv||c.armv===o)&&(!c.libc||c.libc===n)&&!0}}function z(a){return function(b,c){return b.runtime!==c.runtime?b.runtime===a?-1:1:b.abi!==c.abi?b.abi?-1:1:b.specificity!==c.specificity?b.specificity>c.specificity?-1:1:0}}b.exports=q,q.resolve=q.path=function(a){a=e.resolve(a||".");try{var b=g(e.join(a,"package.json")).name.toUpperCase().replace(/-/g,"_");process.env[b+"_PREBUILD"]&&(a=process.env[b+"_PREBUILD"])}catch(a){}if(!i){var c=s(e.join(a,"build/Release"),t);if(c)return c;var d=s(e.join(a,"build/Debug"),t);if(d)return d}var f=q(a);if(f)return f;var h=q(e.dirname(process.execPath));if(h)return h;throw Error("No native build was found for "+["platform="+m,"arch="+l,"runtime="+k,"abi="+j,"uv="+p,o?"armv="+o:"","libc="+n,"node="+process.versions.node,process.versions.electron?"electron="+process.versions.electron:"","function"==typeof __webpack_require__?"webpack=true":""].filter(Boolean).join(" ")+"\n    loaded from: "+a+"\n");function q(a){var b=r(e.join(a,"prebuilds")).map(u).filter(v(m,l)).sort(w)[0];if(b){var c=e.join(a,"prebuilds",b.name),d=r(c).map(x).filter(y(k,j)).sort(z(k))[0];if(d)return e.join(c,d.file)}}},q.parseTags=x,q.matchTags=y,q.compareTags=z,q.parseTuple=u,q.matchTuple=v,q.compareTuples=w},284482,(a,b,c)=>{let d="function"==typeof __webpack_require__?__non_webpack_require__:a.t;"function"==typeof d.addon?b.exports=d.addon.bind(d):b.exports=a.r(800858)},739523,(a,b,c)=>{"use strict";b.exports={mask:(a,b,c,d,e)=>{for(var f=0;f<e;f++)c[d+f]=a[f]^b[3&f]},unmask:(a,b)=>{let c=a.length;for(var d=0;d<c;d++)a[d]^=b[3&d]}}},165936,(a,b,c)=>{"use strict";try{b.exports=a.r(284482)("/ROOT/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/bufferutil")}catch(c){b.exports=a.r(739523)}},607161,(a,b,c)=>{"use strict";b.exports=function(a){let b=a.length,c=0;for(;c<b;)if((128&a[c])==0)c++;else if((224&a[c])==192){if(c+1===b||(192&a[c+1])!=128||(254&a[c])==192)return!1;c+=2}else if((240&a[c])==224){if(c+2>=b||(192&a[c+1])!=128||(192&a[c+2])!=128||224===a[c]&&(224&a[c+1])==128||237===a[c]&&(224&a[c+1])==160)return!1;c+=3}else{if((248&a[c])!=240||c+3>=b||(192&a[c+1])!=128||(192&a[c+2])!=128||(192&a[c+3])!=128||240===a[c]&&(240&a[c+1])==128||244===a[c]&&a[c+1]>143||a[c]>244)return!1;c+=4}return!0}},762674,(a,b,c)=>{"use strict";try{b.exports=a.r(284482)("/ROOT/frutero/evvm/cross-chain-balancer/frontend-next/node_modules/utf-8-validate")}catch(c){b.exports=a.r(607161)}},526009,a=>{"use strict";var b=a.i(195615),c=a.i(107700),d=a.i(904167),e=a.i(221282);let f=(0,b.proxy)({message:"",variant:"info",open:!1}),g=(0,d.withErrorBoundary)({state:f,subscribeKey:(a,b)=>(0,c.subscribeKey)(f,a,b),open(a,b){let{debug:c}=e.OptionsController.state,{code:d,displayMessage:g,debugMessage:h}=a;g&&c&&(f.message=g,f.variant=b,f.open=!0),h&&console.error("function"==typeof h?h():h,d?{code:d}:void 0)},warn(a,b,c){f.open=!0,f.message=a,f.variant="warning",b&&console.warn(b,c)},close(){f.open=!1,f.message="",f.variant="info"}});a.s(["AlertController",0,g])},532723,a=>{"use strict";let b={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:("undefined"!=typeof process&&void 0!==process.env?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};a.s(["ConstantsUtil",0,b])},224361,(a,b,c)=>{b.exports=a.x("util",()=>require("util"))},814747,(a,b,c)=>{b.exports=a.x("path",()=>require("path"))},427699,(a,b,c)=>{b.exports=a.x("events",()=>require("events"))},792509,(a,b,c)=>{b.exports=a.x("url",()=>require("url"))},500874,(a,b,c)=>{b.exports=a.x("buffer",()=>require("buffer"))},522734,(a,b,c)=>{b.exports=a.x("fs",()=>require("fs"))},688947,(a,b,c)=>{b.exports=a.x("stream",()=>require("stream"))},406461,(a,b,c)=>{b.exports=a.x("zlib",()=>require("zlib"))},449719,(a,b,c)=>{b.exports=a.x("assert",()=>require("assert"))},964922,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211);a.i(878088),a.i(18438);var e=a.i(37485),f=a.i(829972);a.i(278989);var g=a.i(806134);let h=g.css`
  :host {
    position: relative;
    background-color: ${({tokens:a})=>a.theme.foregroundTertiary};
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
    border: 1px solid ${({colors:a})=>a.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:a})=>a.accent010};
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
    border: 2px solid ${({tokens:a})=>a.theme.backgroundPrimary};
    padding: 1px;
  }
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j=class extends b.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let a="1";return"lg"===this.size?a="4":"md"===this.size?a="2":"sm"===this.size&&(a="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${a});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),c.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?c.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?c.html`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:c.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};j.styles=[e.resetStyles,h],i([(0,d.property)()],j.prototype,"size",void 0),i([(0,d.property)()],j.prototype,"name",void 0),i([(0,d.property)()],j.prototype,"imageSrc",void 0),i([(0,d.property)()],j.prototype,"walletIcon",void 0),i([(0,d.property)({type:Boolean})],j.prototype,"installed",void 0),i([(0,d.property)()],j.prototype,"badgeSize",void 0),j=i([(0,f.customElement)("wui-wallet-image")],j),a.s([],964922)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__4f4d28c1._.js.map
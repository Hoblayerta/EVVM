module.exports=[795017,a=>{"use strict";a.i(68993);var b=a.i(15870);let c=b.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;a.s(["networkSvgMd",0,c])},556956,a=>{"use strict";a.i(964922),a.s([])},659316,a=>{"use strict";a.i(68993);var b=a.i(15870);let c=b.svg`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;a.s(["networkSvgLg",0,c])},127432,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211),e=a.i(659316),f=a.i(795017);let g=c.svg`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;a.i(878088),a.i(18438);var h=a.i(37485),i=a.i(829972),j=a.i(806134);let k=j.css`
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
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:a})=>a.core.glass010};
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
    background: ${({tokens:a})=>a.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var l=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let m=class extends b.LitElement{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:g,md:f.networkSvgMd,lg:e.networkSvgLg},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${({sm:"4",md:"6",lg:"10"})[this.size]});
    `,c.html`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?c.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:c.html`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};m.styles=[h.resetStyles,k],l([(0,d.property)()],m.prototype,"size",void 0),l([(0,d.property)()],m.prototype,"name",void 0),l([(0,d.property)({type:Object})],m.prototype,"networkImagesBySize",void 0),l([(0,d.property)()],m.prototype,"imageSrc",void 0),l([(0,d.property)({type:Boolean})],m.prototype,"selected",void 0),l([(0,d.property)({type:Boolean})],m.prototype,"round",void 0),m=l([(0,i.customElement)("wui-network-image")],m),a.s([],127432)},384538,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211),e=a.i(37485),f=a.i(829972),g=a.i(806134);let h=g.css`
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
    stroke: ${a=>a.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j=class extends b.LitElement{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let a=this.radius>50?50:this.radius,b=36-a;return c.html`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${a}
          stroke-dasharray="${116+b} ${245+b}"
          stroke-dashoffset=${360+1.75*b}
        />
      </svg>
    `}};j.styles=[e.resetStyles,h],i([(0,d.property)({type:Number})],j.prototype,"radius",void 0),j=i([(0,f.customElement)("wui-loading-thumbnail")],j),a.s([],384538)},175362,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211);a.i(536858);var e=a.i(299603);a.i(446895),a.i(980841);var f=a.i(37485),g=a.i(829972),h=a.i(806134);let i=h.css`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:a})=>a[3]};
    width: 100%;
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    border-radius: ${({borderRadius:a})=>a[4]};
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      scale ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k=class extends b.LitElement{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",c.html`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,e.ifDefined)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?c.html`<wui-image
        icon=${this.icon}
        iconColor=${(0,e.ifDefined)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:c.html`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?c.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:c.html`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};k.styles=[f.resetStyles,f.elementStyles,i],j([(0,d.property)()],k.prototype,"imageSrc",void 0),j([(0,d.property)()],k.prototype,"icon",void 0),j([(0,d.property)()],k.prototype,"iconColor",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"loading",void 0),j([(0,d.property)()],k.prototype,"tabIdx",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"disabled",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"rightIcon",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"rounded",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"fullSize",void 0),k=j([(0,g.customElement)("wui-list-item")],k),a.s([],175362)},118723,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211);a.i(980841);var e=a.i(37485),f=a.i(829972),g=a.i(806134);let h=g.css`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:a})=>a.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
  }
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j=class extends b.LitElement{constructor(){super(...arguments),this.text=""}render(){return c.html`${this.template()}`}template(){return this.text?c.html`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};j.styles=[e.resetStyles,h],i([(0,d.property)()],j.prototype,"text",void 0),j=i([(0,f.customElement)("wui-separator")],j),a.s([],118723)},508480,81994,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211);a.i(878088);var e=a.i(37485),f=a.i(829972),g=a.i(806134);let h=g.css`
  button {
    background-color: transparent;
    padding: ${({spacing:a})=>a[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
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
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:a})=>a[2]};
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
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j=class extends b.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return c.html`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${({accent:"accent-primary",primary:"inverse",secondary:"default"})[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};j.styles=[e.resetStyles,e.elementStyles,h],i([(0,d.property)()],j.prototype,"size",void 0),i([(0,d.property)({type:Boolean})],j.prototype,"disabled",void 0),i([(0,d.property)()],j.prototype,"icon",void 0),i([(0,d.property)()],j.prototype,"iconColor",void 0),i([(0,d.property)()],j.prototype,"variant",void 0),j=i([(0,f.customElement)("wui-icon-link")],j),a.s([],81994),a.s([],508480)},290309,a=>{"use strict";a.i(914938),a.s([])},914938,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211),e=a.i(829972),f=a.i(806134);let g=f.css`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:a})=>a.theme.foregroundSecondary} 0%,
      ${({tokens:a})=>a.theme.foregroundTertiary} 50%,
      ${({tokens:a})=>a.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:a})=>a[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var h=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let i=class extends b.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",c.html`<slot></slot>`}};i.styles=[g],h([(0,d.property)()],i.prototype,"width",void 0),h([(0,d.property)()],i.prototype,"height",void 0),h([(0,d.property)()],i.prototype,"variant",void 0),h([(0,d.property)({type:Boolean})],i.prototype,"rounded",void 0),i=h([(0,e.customElement)("wui-shimmer")],i),a.s([],914938)},745454,a=>{"use strict";a.i(597226),a.s([])},124999,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211),e=a.i(864292);a.i(878088),a.i(18438),a.i(980841),a.i(123438);var f=a.i(37485),g=a.i(829972),h=a.i(806134);let i=h.css`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:a})=>a[3]};
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:a})=>a[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:a})=>a[10]};
    height: ${({spacing:a})=>a[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:a})=>a[16]};
  }
`;var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k=class extends b.LitElement{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return c.html`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="space-between" gap="1">
            <wui-text variant="md-regular" color="primary">${this.tokenName}</wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${e.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
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
            ${e.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?c.html`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:c.html`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};k.styles=[f.resetStyles,f.elementStyles,i],j([(0,d.property)()],k.prototype,"tokenName",void 0),j([(0,d.property)()],k.prototype,"tokenImageUrl",void 0),j([(0,d.property)({type:Number})],k.prototype,"tokenValue",void 0),j([(0,d.property)()],k.prototype,"tokenAmount",void 0),j([(0,d.property)()],k.prototype,"tokenCurrency",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"clickable",void 0),k=j([(0,g.customElement)("wui-list-token")],k),a.s([],124999)},33737,657363,a=>{"use strict";var b=a.i(195615),c=a.i(107700),d=a.i(864292),e=a.i(889929),f=a.i(228756),g=a.i(326777),h=a.i(591269),i=a.i(221282);let j={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class k extends Error{}async function l(a,b){let c=function(){let{sdkType:a,sdkVersion:b,projectId:c}=i.OptionsController.getSnapshot(),d=new URL("https://rpc.walletconnect.org/v1/json-rpc");return d.searchParams.set("projectId",c),d.searchParams.set("st",a),d.searchParams.set("sv",b),d.searchParams.set("source","fund-wallet"),d.toString()}(),{projectId:d}=i.OptionsController.getSnapshot(),e={jsonrpc:"2.0",id:1,method:a,params:{...b||{},projectId:d}},f=await fetch(c,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),g=await f.json();if(g.error)throw new k(g.error.message);return g}async function m(a){return(await l("reown_getExchanges",a)).result}async function n(a){return(await l("reown_getExchangePayUrl",a)).result}async function o(a){return(await l("reown_getExchangeBuyStatus",a)).result}function p(a,b){let{chainNamespace:c,chainId:d}=h.ParseUtil.parseCaipNetworkId(a),e=j[c];if(!e)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${c}`);let f=e.native.assetNamespace,g=e.native.assetReference;"native"!==b&&(f=e.defaultTokenNamespace,g=b);let i=`${c}:${d}`;return`${i}/${f}:${g}`}let q={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},r={ethereumETH:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseETH:{network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},baseUSDC:q,baseSepoliaETH:{network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ethereumUSDC:{network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},arbitrumUSDC:{network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},polygonUSDC:{network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},solanaUSDC:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ethereumUSDT:{network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},optimismUSDT:{network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},arbitrumUSDT:{network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},polygonUSDT:{network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaUSDT:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},solanaSOL:{network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}};function s(a){return Object.values(r).filter(b=>b.network===a)}a.s(["baseSepoliaUSDC",0,{network:"eip155:84532",asset:"0x036CbD53842c5426634e7929541eC2318f3dCF7e",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},"baseUSDC",0,q,"formatCaip19Asset",()=>p,"getBuyStatus",()=>o,"getExchanges",()=>m,"getPayUrl",()=>n,"getPaymentAssetsForNetwork",()=>s],657363);var t=a.i(468229),u=a.i(62374),v=a.i(553185),w=a.i(700803);let x={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},y=(0,b.proxy)(x),z={state:y,subscribe:a=>(0,b.subscribe)(y,()=>a(y)),subscribeKey:(a,b)=>(0,c.subscribeKey)(y,a,b),resetState(){Object.assign(y,{...x})},async getAssetsForNetwork(a){let b=s(a),c=await z.getAssetsImageAndPrice(b),d=b.map(a=>{let b="native"===a.asset?(0,e.getActiveNetworkTokenAddress)():`${a.network}:${a.asset}`,d=c.find(a=>a.fungibles?.[0]?.address?.toLowerCase()===b.toLowerCase());return{...a,price:d?.fungibles?.[0]?.price||1,metadata:{...a.metadata,iconUrl:d?.fungibles?.[0]?.iconUrl}}});return y.assets=d,d},async getAssetsImageAndPrice(a){let b=a.map(a=>"native"===a.asset?(0,e.getActiveNetworkTokenAddress)():`${a.network}:${a.asset}`);return await Promise.all(b.map(a=>t.BlockchainApiController.fetchTokenPrice({addresses:[a]})))},getTokenAmount(){if(!y?.paymentAsset?.price)throw Error("Cannot get token price");let a=d.NumberUtil.bigNumber(y.amount??0).round(8),b=d.NumberUtil.bigNumber(y.paymentAsset.price).round(8);return a.div(b).round(8).toNumber()},setAmount(a){y.amount=a,y.paymentAsset?.price&&(y.tokenAmount=z.getTokenAmount())},setPaymentAsset(a){y.paymentAsset=a},isPayWithExchangeEnabled:()=>i.OptionsController.state.remoteFeatures?.payWithExchange,isPayWithExchangeSupported:()=>z.isPayWithExchangeEnabled()&&u.ChainController.state.activeCaipNetwork&&f.ConstantsUtil.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(u.ChainController.state.activeCaipNetwork.chainNamespace),async fetchExchanges(){try{let a=z.isPayWithExchangeSupported();if(!y.paymentAsset||!a){y.exchanges=[],y.isLoading=!1;return}y.isLoading=!0;let b=await m({page:0,asset:p(y.paymentAsset.network,y.paymentAsset.asset),amount:y.amount?.toString()??"0"});y.exchanges=b.exchanges.slice(0,2)}catch(a){throw w.SnackController.showError("Unable to get exchanges"),Error("Unable to get exchanges")}finally{y.isLoading=!1}},async getPayUrl(a,b){try{let c=Number(b.amount),d=await n({exchangeId:a,asset:p(b.network,b.asset),amount:c.toString(),recipient:`${b.network}:${b.recipient}`});return v.EventsController.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:a},configuration:{network:b.network,asset:b.asset,recipient:b.recipient,amount:c},currentPayment:{type:"exchange",exchangeId:a},source:"fund-from-exchange",headless:!1}}),d}catch(a){if(a instanceof Error&&a.message.includes("is not supported"))throw Error("Asset not supported");throw Error(a.message)}},async handlePayWithExchange(a){try{let b=u.ChainController.getAccountData()?.address;if(!b)throw Error("No account connected");if(!y.paymentAsset)throw Error("No payment asset selected");let c=g.CoreHelperUtil.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!c)throw Error("Could not create popup window");y.isPaymentInProgress=!0,y.paymentId=crypto.randomUUID(),y.currentPayment={type:"exchange",exchangeId:a};let{network:d,asset:e}=y.paymentAsset,f={network:d,asset:e,amount:y.tokenAmount,recipient:b},h=await z.getPayUrl(a,f);if(!h){try{c.close()}catch(a){console.error("Unable to close popup window",a)}throw Error("Unable to initiate payment")}y.currentPayment.sessionId=h.sessionId,y.currentPayment.status="IN_PROGRESS",y.currentPayment.exchangeId=a,c.location.href=h.url}catch(a){y.error="Unable to initiate payment",w.SnackController.showError(y.error)}},async waitUntilComplete({exchangeId:a,sessionId:b,paymentId:c,retries:d=20}){let e=await z.getBuyStatus(a,b,c);if("SUCCESS"===e.status||"FAILED"===e.status)return e;if(0===d)throw Error("Unable to get deposit status");return await new Promise(a=>{setTimeout(a,5e3)}),z.waitUntilComplete({exchangeId:a,sessionId:b,paymentId:c,retries:d-1})},async getBuyStatus(a,b,c){try{if(!y.currentPayment)throw Error("No current payment");let d=await o({sessionId:b,exchangeId:a});if(y.currentPayment.status=d.status,"SUCCESS"===d.status||"FAILED"===d.status){let a=u.ChainController.getAccountData()?.address;y.currentPayment.result=d.txHash,y.isPaymentInProgress=!1,v.EventsController.sendEvent({type:"track",event:"SUCCESS"===d.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===d.status?g.CoreHelperUtil.parseError(y.error):void 0,source:"fund-from-exchange",paymentId:c,configuration:{network:y.paymentAsset?.network||"",asset:y.paymentAsset?.asset||"",recipient:a||"",amount:y.amount??0},currentPayment:{type:"exchange",exchangeId:y.currentPayment?.exchangeId,sessionId:y.currentPayment?.sessionId,result:d.txHash}}})}return d}catch(a){return{status:"UNKNOWN",txHash:""}}},reset(){y.currentPayment=void 0,y.isPaymentInProgress=!1,y.paymentId="",y.paymentAsset=null,y.amount=0,y.tokenAmount=0,y.priceLoading=!1,y.error=null,y.exchanges=[],y.isLoading=!1}};a.s(["ExchangeController",0,z],33737)},222056,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211);a.i(18438);var e=a.i(37485),f=a.i(332918),g=a.i(829972),h=a.i(806134);let i=h.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:a})=>a[16]};
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
`;var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k=class extends b.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){let a={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${a[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${a[this.size??"xl"]});
    `,c.html`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",c.html`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let a=f.UiHelperUtil.generateAvatarColors(this.address);return this.style.cssText+=`
 ${a}`,null}return this.dataset.variant="default",null}};k.styles=[e.resetStyles,i],j([(0,d.property)()],k.prototype,"imageSrc",void 0),j([(0,d.property)()],k.prototype,"alt",void 0),j([(0,d.property)()],k.prototype,"address",void 0),j([(0,d.property)()],k.prototype,"size",void 0),k=j([(0,g.customElement)("wui-avatar")],k),a.s([],222056)},860089,a=>{"use strict";var b=a.i(656285),c=a.i(418960),d=a.i(371861),e=a.i(228918);function f(a,b={}){let{key:c="fallback",name:h="Fallback",rank:i=!1,shouldThrow:j=g,retryCount:k,retryDelay:l}=b;return({chain:b,pollingInterval:f=4e3,timeout:g,...m})=>{let n=a,o=()=>{},p=(0,e.createTransport)({key:c,name:h,async request({method:a,params:c}){let d,e=async(f=0)=>{let h=n[f]({...m,chain:b,retryCount:0,timeout:g});try{let b=await h.request({method:a,params:c});return o({method:a,params:c,response:b,transport:h,status:"success"}),b}catch(g){if(o({error:g,method:a,params:c,transport:h,status:"error"}),j(g)||f===n.length-1||!(d??=n.slice(f+1).some(c=>{let{include:d,exclude:e}=c({chain:b}).config.methods||{};return d?d.includes(a):!e||!e.includes(a)})))throw g;return e(f+1)}};return e()},retryCount:k,retryDelay:l,type:"fallback"},{onResponse:a=>o=a,transports:n.map(a=>a({chain:b,retryCount:0}))});if(i){let a="object"==typeof i?i:{};!function({chain:a,interval:b=4e3,onTransports:c,ping:e,sampleCount:f=10,timeout:g=1e3,transports:h,weights:i={}}){let{stability:j=.7,latency:k=.3}=i,l=[],m=async()=>{let i=await Promise.all(h.map(async b=>{let c,d,f=b({chain:a,retryCount:0,timeout:g}),h=Date.now();try{await (e?e({transport:f}):f.request({method:"net_listening"})),d=1}catch{d=0}finally{c=Date.now()}return{latency:c-h,success:d}}));l.push(i),l.length>f&&l.shift();let n=Math.max(...l.map(a=>Math.max(...a.map(({latency:a})=>a))));c(h.map((a,b)=>{let c=l.map(a=>a[b].latency),d=c.reduce((a,b)=>a+b,0)/c.length,e=l.map(a=>a[b].success),f=e.reduce((a,b)=>a+b,0)/e.length;return 0===f?[0,b]:[k*(1-d/n)+j*f,b]}).sort((a,b)=>b[0]-a[0]).map(([,a])=>h[a])),await (0,d.wait)(b),m()};m()}({chain:b,interval:a.interval??f,onTransports:a=>n=a,ping:a.ping,sampleCount:a.sampleCount,timeout:a.timeout,transports:n,weights:a.weights})}return p}}function g(a){return!!("code"in a&&"number"==typeof a.code&&(a.code===c.TransactionRejectedRpcError.code||a.code===c.UserRejectedRequestError.code||b.ExecutionRevertedError.nodeMessage.test(a.message)||5e3===a.code))}a.s(["fallback",()=>f,"shouldThrow",()=>g])},150379,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211),e=a.i(349631),f=a.i(816119),g=a.i(412489),h=a.i(102651);a.i(317052);var i=a.i(829972),j=a.i(498648);let k=j.css`
  :host {
    width: 100%;
    display: block;
  }
`;var l=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let m=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.text="",this.open=h.TooltipController.state.open,this.unsubscribe.push(g.RouterController.subscribeKey("view",()=>{h.TooltipController.hide()}),f.ModalController.subscribeKey("open",a=>{a||h.TooltipController.hide()}),h.TooltipController.subscribeKey("open",a=>{this.open=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),h.TooltipController.hide()}render(){return c.html`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return c.html`<slot></slot> `}onMouseEnter(){let a=this.getBoundingClientRect();if(!this.open){let b=document.querySelector("w3m-modal"),c={width:a.width,height:a.height,left:a.left,top:a.top};if(b){let d=b.getBoundingClientRect();c.left=a.left-(window.innerWidth-d.width)/2,c.top=a.top-(window.innerHeight-d.height)/2}h.TooltipController.showTooltip({message:this.text,triggerRect:c,variant:"shade"})}}onMouseLeave(a){this.contains(a.relatedTarget)||h.TooltipController.hide()}};m.styles=[k],l([(0,d.property)()],m.prototype,"text",void 0),l([(0,e.state)()],m.prototype,"open",void 0),m=l([(0,i.customElement)("w3m-tooltip-trigger")],m),a.s([],150379)},459353,a=>{"use strict";let b={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:a.i(406832).ConstantsUtil.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH",getSDKVersionWarningMessage:(a,b)=>`
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
      
AppKit SDK version ${a} is outdated. Latest version is ${b}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`};a.s(["ConstantsUtil",0,b])},544567,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211);a.i(536858);var e=a.i(299603);a.i(878088),a.i(980841);var f=a.i(37485),g=a.i(829972);a.i(597226);var h=a.i(498648);let i=h.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var j=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let k=class extends b.LitElement{constructor(){super(...arguments),this.disabled=!1}render(){return c.html`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,e.ifDefined)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?c.html`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};k.styles=[f.resetStyles,i],j([(0,d.property)()],k.prototype,"errorMessage",void 0),j([(0,d.property)({type:Boolean})],k.prototype,"disabled",void 0),j([(0,d.property)()],k.prototype,"value",void 0),j([(0,d.property)()],k.prototype,"tabIdx",void 0),k=j([(0,g.customElement)("wui-email-input")],k),a.s([],544567)},422074,a=>{"use strict";a.i(446895),a.s([])},164626,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211);a.i(878088),a.i(980841);var e=a.i(37485),f=a.i(829972),g=a.i(806134);let h=g.css`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:a})=>a[2]};
    column-gap: ${({spacing:a})=>a[1]};
    border-radius: ${({borderRadius:a})=>a[1]};
    padding: 0 ${({spacing:a})=>a[1]};
    border-radius: ${({spacing:a})=>a[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var i=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let j={sm:"sm-medium",md:"md-medium"},k={accent:"accent-primary",secondary:"secondary"},l=class extends b.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return c.html`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${k[this.variant]}
          variant=${j[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?c.html`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};l.styles=[e.resetStyles,e.elementStyles,h],i([(0,d.property)()],l.prototype,"size",void 0),i([(0,d.property)({type:Boolean})],l.prototype,"disabled",void 0),i([(0,d.property)()],l.prototype,"variant",void 0),i([(0,d.property)()],l.prototype,"icon",void 0),l=i([(0,f.customElement)("wui-link")],l),a.s([],164626)},597226,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(967211);a.i(536858);var e=a.i(299603);a.i(394994);var f=a.i(396513);a.i(878088),a.i(980841);var g=a.i(37485),h=a.i(829972),i=a.i(806134);let j=i.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:a})=>a[3]};
    color: ${({tokens:a})=>a.theme.textPrimary};
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:a})=>a[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
    padding: ${({spacing:a})=>a[3]} ${({spacing:a})=>a[3]}
      ${({spacing:a})=>a[3]} ${({spacing:a})=>a[10]};
    font-size: ${({textSize:a})=>a.large};
    line-height: ${({typography:a})=>a["lg-regular"].lineHeight};
    letter-spacing: ${({typography:a})=>a["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:a})=>a.regular};
    font-family: ${({fontFamily:a})=>a.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:a})=>a[4]} ${({spacing:a})=>a[3]}
      ${({spacing:a})=>a[4]} ${({spacing:a})=>a[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:a})=>a[4]};
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:a})=>a[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:a})=>a[2]};
    color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:a})=>a.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:a})=>a[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var k=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let l=class extends b.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,f.createRef)(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return c.html` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${(0,f.ref)(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,e.ifDefined)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?c.html`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?c.html`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?c.html`<wui-icon name="spinner" size="md"></wui-icon>`:c.html`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?c.html`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?c.html`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};l.styles=[g.resetStyles,g.elementStyles,j],k([(0,d.property)()],l.prototype,"icon",void 0),k([(0,d.property)({type:Boolean})],l.prototype,"disabled",void 0),k([(0,d.property)({type:Boolean})],l.prototype,"loading",void 0),k([(0,d.property)()],l.prototype,"placeholder",void 0),k([(0,d.property)()],l.prototype,"type",void 0),k([(0,d.property)()],l.prototype,"value",void 0),k([(0,d.property)()],l.prototype,"errorText",void 0),k([(0,d.property)()],l.prototype,"warningText",void 0),k([(0,d.property)()],l.prototype,"onSubmit",void 0),k([(0,d.property)()],l.prototype,"size",void 0),k([(0,d.property)({attribute:!1})],l.prototype,"onKeyDown",void 0),l=k([(0,h.customElement)("wui-input-text")],l),a.s([],597226)},262308,a=>{"use strict";a.s(["NavigationUtil",0,{URLS:{FAQ:"https://walletconnect.com/faq"}}])},20525,245350,a=>{"use strict";var b=a.i(195615),c=a.i(107700);let d=(0,b.proxy)({isLegalCheckboxChecked:!1}),e={state:d,subscribe:a=>(0,b.subscribe)(d,()=>a(d)),subscribeKey:(a,b)=>(0,c.subscribeKey)(d,a,b),setIsLegalCheckboxChecked(a){d.isLegalCheckboxChecked=a}};a.s(["OptionsStateController",0,e],20525),a.i(68993);var f=a.i(86348),g=a.i(15870);a.i(10169);var h=a.i(349631),i=a.i(221282);a.i(317052);var j=a.i(829972),k=f,l=a.i(967211);a.i(536858);var m=a.i(299603);a.i(394994);var n=a.i(396513);a.i(878088),a.i(980841);var o=a.i(37485),p=a.i(806134);let q=p.css`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:a})=>a[2]};
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
    border: 1px solid ${({colors:a})=>a.neutrals400};
    color: ${({colors:a})=>a.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:a})=>a.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:a})=>a.neutrals900};
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
    border-radius: ${({borderRadius:a})=>a[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:a})=>a[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:a})=>a.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:a})=>a.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:a})=>a.neutrals700};
    background-color: ${({colors:a})=>a.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:a})=>a.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:a})=>a.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var r=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let s={lg:"md",md:"sm",sm:"sm"},t=class extends k.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,n.createRef)(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){let a=s[this.size];return g.html`
      <label data-size=${this.size}>
        <input
          ${(0,n.ref)(this.inputElementRef)}
          ?checked=${(0,m.ifDefined)(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${a}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};t.styles=[o.resetStyles,q],r([(0,l.property)({type:Boolean})],t.prototype,"checked",void 0),r([(0,l.property)({type:Boolean})],t.prototype,"disabled",void 0),r([(0,l.property)()],t.prototype,"size",void 0),t=r([(0,j.customElement)("wui-checkbox")],t),a.i(251264);let u=p.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:a})=>a["3"]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:a})=>a.theme.textSecondary};
    font-weight: 500;
  }
`;var v=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let w=class extends f.LitElement{constructor(){super(),this.unsubscribe=[],this.checked=e.state.isLegalCheckboxChecked,this.unsubscribe.push(e.subscribeKey("isLegalCheckboxChecked",a=>{this.checked=a}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=i.OptionsController.state,c=i.OptionsController.state.features?.legalCheckbox;return(a||b)&&c?g.html`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=i.OptionsController.state;return a&&b?"and":""}termsTemplate(){let{termsConditionsUrl:a}=i.OptionsController.state;return a?g.html`<a rel="noreferrer" target="_blank" href=${a}>terms of service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:a}=i.OptionsController.state;return a?g.html`<a rel="noreferrer" target="_blank" href=${a}>privacy policy</a>`:null}onCheckboxChange(){e.setIsLegalCheckboxChecked(!this.checked)}};w.styles=[u],v([(0,h.state)()],w.prototype,"checked",void 0),w=v([(0,j.customElement)("w3m-legal-checkbox")],w),a.s([],245350)},53110,632132,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870);a.i(10169);var d=a.i(349631),e=a.i(221282);a.i(317052);var f=a.i(829972);a.i(423810),a.i(251264);var g=b;a.i(878088),a.i(980841),a.i(123438);var h=a.i(37485),i=a.i(806134);let j=i.css`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`,k=class extends g.LitElement{render(){return c.html`
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
    `}};k.styles=[h.resetStyles,h.elementStyles,j],k=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,f.customElement)("wui-ux-by-reown")],k),a.s([],632132);let l=i.css`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:a})=>a["3"]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:a})=>a.core.textAccentPrimary};
    font-weight: 500;
  }
`;var m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let n=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=e.OptionsController.state.remoteFeatures,this.unsubscribe.push(e.OptionsController.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=e.OptionsController.state,d=e.OptionsController.state.features?.legalCheckbox;return(a||b)&&!d?c.html`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `:c.html`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `}andTemplate(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=e.OptionsController.state;return a&&b?"and":""}termsTemplate(){let{termsConditionsUrl:a}=e.OptionsController.state;return a?c.html`<a href=${a} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){let{privacyPolicyUrl:a}=e.OptionsController.state;return a?c.html`<a href=${a} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(a=!1){return this.remoteFeatures?.reownBranding?a?c.html`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:c.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}};n.styles=[l],m([(0,d.state)()],n.prototype,"remoteFeatures",void 0),n=m([(0,f.customElement)("w3m-legal-footer")],n),a.s([],53110)},765878,a=>{"use strict";a.i(68993);var b=a.i(86348),c=a.i(15870),d=a.i(62374),e=a.i(553185),f=a.i(221282),g=a.i(412489),h=a.i(889929);a.i(317052);var i=a.i(829972);a.i(423810),a.i(476368),a.i(164626),a.i(251264);var j=a.i(191448),k=a.i(498648);let l=k.css``,m=class extends b.LitElement{render(){let{termsConditionsUrl:a,privacyPolicyUrl:b}=f.OptionsController.state;return a||b?c.html`
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
    `:null}howDoesItWorkTemplate(){return c.html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){e.EventsController.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,h.getPreferredAccountType)(d.ChainController.state.activeChain)===j.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.RouterController.push("WhatIsABuy")}};m.styles=[l],m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,i.customElement)("w3m-onramp-providers-footer")],m),a.s([],765878)}];

//# sourceMappingURL=b572f_34ad1efa._.js.map
let t,e,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},r=t=>Promise.resolve(t),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(t){}return!1})(),c=new WeakMap,u=t=>"sc-"+t.o,a={},f=t=>"object"==(t=typeof t)||"function"===t,$=(t,e,...n)=>{let l=null,s=!1,o=!1,r=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!f(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?h(null,l):l),o=s)};i(n);const c=h(t,null);return c.u=e,r.length>0&&(c.$=r),c},h=(t,e)=>({t:0,h:t,i:e,p:null,$:null,u:null}),y={},p=(t,e,n,l,s,o)=>{if(n!==l){let r=U(t,e);e.toLowerCase();{const i=f(l);if((r||i&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let s=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(t){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!r||4&o||s)&&!i&&t.setAttribute(e,l=!0===l?"":l)}}},d=(t,e,n,l)=>{const s=11===e.p.nodeType&&e.p.host?e.p.host:e.p,o=t&&t.u||a,r=e.u||a;for(l in o)l in r||p(s,l,o[l],void 0,n,e.t);for(l in r)p(s,l,o[l],r[l],n,e.t)},m=(e,n,l)=>{let o,r,i=n.$[l],c=0;if(o=i.p=s.createElement(i.h),d(null,i,!1),null!=t&&o["s-si"]!==t&&o.classList.add(o["s-si"]=t),i.$)for(c=0;c<i.$.length;++c)r=m(e,i,c),r&&o.appendChild(r);return o},w=(t,n,l,s,o,r)=>{let i,c=t;for(c.shadowRoot&&c.tagName===e&&(c=c.shadowRoot);o<=r;++o)s[o]&&(i=m(null,l,o),i&&(s[o].p=i,c.insertBefore(i,n)))},b=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.p.remove()},S=(t,e)=>t.h===e.h,g=(t,e)=>{const n=e.p=t.p,l=t.$,s=e.$;d(t,e,!1),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,i=e.length-1,c=e[0],u=e[i],a=l.length-1,f=l[0],$=l[a];for(;o<=i&&r<=a;)null==c?c=e[++o]:null==u?u=e[--i]:null==f?f=l[++r]:null==$?$=l[--a]:S(c,f)?(g(c,f),c=e[++o],f=l[++r]):S(u,$)?(g(u,$),u=e[--i],$=l[--a]):S(c,$)?(g(c,$),t.insertBefore(c.p,u.p.nextSibling),c=e[++o],$=l[--a]):S(u,f)?(g(u,f),t.insertBefore(u.p,c.p),u=e[--i],f=l[++r]):(s=m(e&&e[r],n,r),f=l[++r],s&&c.p.parentNode.insertBefore(s,c.p));o>i?w(t,null==l[a+1]?null:l[a+1].p,n,l,r,a):r>a&&b(e,o,i)})(n,l,e,s):null!==s?w(n,null,e,s,0,s.length-1):null!==l&&b(l,0,l.length-1)},M=(t,e)=>{e&&!t.m&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.m=e)))},j=(t,e)=>{if(t.t|=16,!(4&t.t))return M(t,t.S),K((()=>v(t,e)));t.t|=512},v=(t,e)=>{const n=t.g;let l;return e&&(l=x(n,"componentWillLoad")),E(l,(()=>k(t,n,e)))},k=async(t,e,n)=>{const l=t.M,o=l["s-rc"];n&&(t=>{const e=t.j,n=t.M,l=e.t,o=((t,e)=>{let n=u(e),l=_.get(n);if(t=11===t.nodeType?t:s,l)if("string"==typeof l){let e,o=c.get(t=t.head||t);o||c.set(t,o=new Set),o.has(n)||(e=s.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(t);C(t,e),o&&(o.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>O(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},C=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.M,o=n.v||h(null,null),r=(t=>t&&t.h===y)(l)?l:$(null,null,l);e=s.tagName,r.h=null,r.t|=4,n.v=r,r.p=o.p=s.shadowRoot||s,t=s["s-sc"],g(o,r)})(n,l)}catch(t){H(t,n.M)}return null},O=t=>{const e=t.M,n=t.S;64&t.t||(t.t|=64,L(e),t.k(e),n||P()),t.m&&(t.m(),t.m=void 0),512&t.t&&J((()=>j(t,!1))),t.t&=-517},P=()=>{L(s.documentElement),J((()=>(t=>{const e=o.ce("appload",{detail:{namespace:"stqrcmp"}});return t.dispatchEvent(e),e})(l)))},x=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){H(t)}},E=(t,e)=>t&&t.then?t.then(e):e(),L=t=>t.classList.add("hydrated"),T=(t,e,n)=>{if(e.C){t.watchers&&(e.O=t.watchers);const l=Object.entries(e.C),s=t.prototype;if(l.map((([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,t,{get(){return((t,e)=>A(this).P.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=A(t),o=s.M,r=s.P.get(e),i=s.t,c=s.g;if(n=((t,e)=>null==t||f(t)?t:2&e?parseFloat(t):1&e?t+"":t)(n,l.C[e][0]),!(8&i&&void 0!==r||n===r)&&(s.P.set(e,n),c)){if(l.O&&128&i){const t=l.O[e];t&&t.map((t=>{try{c[t](n,r,e)}catch(t){H(t,o)}}))}2==(18&i)&&j(s,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const e=new Map;s.attributeChangedCallback=function(t,n,l){o.jmp((()=>{const n=e.get(t);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,n])=>{const l=n[1]||t;return e.set(l,t),l}))}}return t},W=(t,e={})=>{const n=[],r=e.exclude||[],c=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),h=[];let y,p=!0;Object.assign(o,e),o.l=new URL(e.resourcesUrl||"./",s.baseURI).href,t.map((t=>{t[1].map((e=>{const l={t:e[0],o:e[1],C:e[2],L:e[3]};l.C=e[2],l.O={};const s=l.o,a=class extends HTMLElement{constructor(t){super(t),R(t=this,l),1&l.t&&t.attachShadow({mode:"open"})}connectedCallback(){y&&(clearTimeout(y),y=null),p?h.push(this):o.jmp((()=>(t=>{if(0==(1&o.t)){const e=A(t),n=e.j,l=()=>{};if(!(1&e.t)){e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){M(e,e.S=n);break}}n.C&&Object.entries(n.C).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,s)=>{if(0==(32&e.t)){{if(e.t|=32,(s=V(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.O=s.watchers,T(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(t){H(t)}e.t&=-9,e.t|=128,t()}if(s.style){let t=s.style;const e=u(n);if(!_.has(e)){const l=()=>{};((t,e,n)=>{let l=_.get(t);i&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,_.set(t,l)})(e,t,!!(1&n.t)),l()}}}const o=e.S,r=()=>j(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return A(this).T}};l.W=t[0],r.includes(s)||c.get(s)||(n.push(s),c.define(s,T(a,l,1)))}))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),p=!1,h.length?h.map((t=>t.connectedCallback())):o.jmp((()=>y=setTimeout(P,30)))},q=new WeakMap,A=t=>q.get(t),F=(t,e)=>q.set(e.g=t,e),R=(t,e)=>{const n={t:0,M:t,j:e,P:new Map};return n.T=new Promise((t=>n.k=t)),t["s-p"]=[],t["s-rc"]=[],q.set(t,n)},U=(t,e)=>e in t,H=(t,e)=>(0,console.error)(t,e),N=new Map,V=t=>{const e=t.o.replace(/-/g,"_"),n=t.W,l=N.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(N.set(n,t),t[e])),H)},_=new Map,z=[],B=[],D=(t,e)=>l=>{t.push(l),n||(n=!0,e&&4&o.t?J(I):o.raf(I))},G=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){H(t)}t.length=0},I=()=>{G(z),G(B),(n=z.length>0)&&o.raf(I)},J=t=>r().then(t),K=D(B,!0);export{W as b,$ as h,r as p,F as r}
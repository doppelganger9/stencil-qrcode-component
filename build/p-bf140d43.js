let t,e,n=!1;const l={},s=t=>"object"==(t=typeof t)||"function"===t,o=(t,e,...n)=>{let l=null,o=!1,c=!1;const i=[],u=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?u(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!s(l))&&(l+=""),o&&c?i[i.length-1].t+=l:i.push(o?r(null,l):l),c=o)};u(n);const a=r(t,null);return a.l=e,i.length>0&&(a.o=i),a},r=(t,e)=>({i:0,u:t,t:e,$:null,o:null,l:null}),c={},i=new WeakMap,u=t=>"sc-"+t.h,a=(t,e,n,l,o,r)=>{if(n!==l){let c=T(t,e);e.toLowerCase();{const i=s(l);if((c||i&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{const s=null==l?"":l;"list"===e?c=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(t){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!c||4&r||o)&&!i&&t.setAttribute(e,l=!0===l?"":l)}}},f=(t,e,n,s)=>{const o=11===e.$.nodeType&&e.$.host?e.$.host:e.$,r=t&&t.l||l,c=e.l||l;for(s in r)s in c||a(o,s,r[s],void 0,n,e.i);for(s in c)a(o,s,r[s],c[s],n,e.i)},$=(e,n,l)=>{const s=n.o[l];let o,r,c=0;if(o=s.$=U.createElement(s.u),f(null,s,!1),null!=t&&o["s-si"]!==t&&o.classList.add(o["s-si"]=t),s.o)for(c=0;c<s.o.length;++c)r=$(e,s,c),r&&o.appendChild(r);return o},h=(t,n,l,s,o,r)=>{let c,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=$(null,l,o),c&&(s[o].$=c,i.insertBefore(c,n)))},y=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.$.remove()},p=(t,e)=>t.u===e.u,m=(t,e)=>{const n=e.$=t.$,l=t.o,s=e.o;f(t,e,!1),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,c=e.length-1,i=e[0],u=e[c],a=l.length-1,f=l[0],d=l[a];for(;o<=c&&r<=a;)null==i?i=e[++o]:null==u?u=e[--c]:null==f?f=l[++r]:null==d?d=l[--a]:p(i,f)?(m(i,f),i=e[++o],f=l[++r]):p(u,d)?(m(u,d),u=e[--c],d=l[--a]):p(i,d)?(m(i,d),t.insertBefore(i.$,u.$.nextSibling),i=e[++o],d=l[--a]):p(u,f)?(m(u,f),t.insertBefore(u.$,i.$),u=e[--c],f=l[++r]):(s=$(e&&e[r],n,r),f=l[++r],s&&i.$.parentNode.insertBefore(s,i.$));o>c?h(t,null==l[a+1]?null:l[a+1].$,n,l,r,a):r>a&&y(e,o,c)})(n,l,e,s):null!==s?h(n,null,e,s,0,s.length-1):null!==l&&y(l,0,l.length-1)},d=(t,e)=>{e&&!t.p&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.p=e)))},w=(t,e)=>{if(t.i|=16,!(4&t.i))return d(t,t.m),K((()=>b(t,e)));t.i|=512},b=(t,e)=>{const n=t.S;let l;return e&&(l=v(n,"componentWillLoad")),k(l,(()=>S(t,n,e)))},S=async(t,e,n)=>{const l=t.g,s=l["s-rc"];n&&(t=>{const e=t.M,n=t.g,l=e.i,s=((t,e)=>{let n=u(e);const l=F.get(n);if(t=11===t.nodeType?t:U,l)if("string"==typeof l){let e,s=i.get(t=t.head||t);s||i.set(t,s=new Set),s.has(n)||(e=U.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(t);g(t,e),s&&(s.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>M(t);0===e.length?n():(Promise.all(e).then(n),t.i|=4,e.length=0)}},g=(n,l)=>{try{l=l.render(),n.i&=-17,n.i|=2,((n,l)=>{const s=n.g,i=n.j||r(null,null),u=(t=>t&&t.u===c)(l)?l:o(null,null,l);e=s.tagName,u.u=null,u.i|=4,n.j=u,u.$=i.$=s.shadowRoot||s,t=s["s-sc"],m(i,u)})(n,l)}catch(t){W(t,n.g)}return null},M=t=>{const e=t.g,n=t.m;64&t.i||(t.i|=64,C(e),t.v(e),n||j()),t.p&&(t.p(),t.p=void 0),512&t.i&&J((()=>w(t,!1))),t.i&=-517},j=()=>{C(U.documentElement),J((()=>(t=>{const e=H.ce("appload",{detail:{namespace:"stqrcmp"}});return t.dispatchEvent(e),e})(R)))},v=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){W(t)}},k=(t,e)=>t&&t.then?t.then(e):e(),C=t=>t.classList.add("hydrated"),O=(t,e,n)=>{if(e.k){t.watchers&&(e.C=t.watchers);const l=Object.entries(e.k),o=t.prototype;if(l.map((([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>E(this).O.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=E(t),r=o.g,c=o.O.get(e),i=o.i,u=o.S;if(n=((t,e)=>null==t||s(t)?t:2&e?parseFloat(t):1&e?t+"":t)(n,l.k[e][0]),(!(8&i)||void 0===c)&&n!==c&&(!Number.isNaN(c)||!Number.isNaN(n))&&(o.O.set(e,n),u)){if(l.C&&128&i){const t=l.C[e];t&&t.map((t=>{try{u[t](n,c,e)}catch(t){W(t,r)}}))}2==(18&i)&&w(o,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){H.jmp((()=>{const n=e.get(t);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(o.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,n])=>{const l=n[1]||t;return e.set(l,t),l}))}}return t},P=(t,e={})=>{const n=[],l=e.exclude||[],s=R.customElements,o=U.head,r=o.querySelector("meta[charset]"),c=U.createElement("style"),i=[];let a,f=!0;Object.assign(H,e),H.P=new URL(e.resourcesUrl||"./",U.baseURI).href,t.map((t=>{t[1].map((e=>{const o={i:e[0],h:e[1],k:e[2],L:e[3]};o.k=e[2],o.C={};const r=o.h,c=class extends HTMLElement{constructor(t){super(t),N(t=this,o),1&o.i&&t.attachShadow({mode:"open"})}connectedCallback(){a&&(clearTimeout(a),a=null),f?i.push(this):H.jmp((()=>(t=>{if(0==(1&H.i)){const e=E(t),n=e.M,l=()=>{};if(!(1&e.i)){e.i|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){d(e,e.m=n);break}}n.k&&Object.entries(n.k).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,s)=>{if(0==(32&e.i)){{if(e.i|=32,(s=A(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.C=s.watchers,O(s,n,2),s.isProxied=!0);const t=()=>{};e.i|=8;try{new s(e)}catch(t){W(t)}e.i&=-9,e.i|=128,t()}if(s.style){let t=s.style;const e=u(n);if(!F.has(e)){const l=()=>{};((t,e,n)=>{let l=F.get(t);_&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=e:l.replaceSync(e)):l=e,F.set(t,l)})(e,t,!!(1&n.i)),l()}}}const o=e.m,r=()=>w(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){H.jmp((()=>{}))}componentOnReady(){return E(this).N}};o.T=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,O(c,o,1)))}))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,r?r.nextSibling:o.firstChild),f=!1,i.length?i.map((t=>t.connectedCallback())):H.jmp((()=>a=setTimeout(j,30)))},x=new WeakMap,E=t=>x.get(t),L=(t,e)=>x.set(e.S=t,e),N=(t,e)=>{const n={i:0,g:t,M:e,O:new Map};return n.N=new Promise((t=>n.v=t)),t["s-p"]=[],t["s-rc"]=[],x.set(t,n)},T=(t,e)=>e in t,W=(t,e)=>(0,console.error)(t,e),q=new Map,A=t=>{const e=t.h.replace(/-/g,"_"),n=t.T,l=q.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(q.set(n,t),t[e])),W)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},F=new Map,R="undefined"!=typeof window?window:{},U=R.document||{head:{}},H={i:0,P:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},V=t=>Promise.resolve(t),_=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(t){}return!1})(),z=[],B=[],D=(t,e)=>l=>{t.push(l),n||(n=!0,e&&4&H.i?J(I):H.raf(I))},G=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){W(t)}t.length=0},I=()=>{G(z),G(B),(n=z.length>0)&&H.raf(I)},J=t=>V().then(t),K=D(B,!0);export{P as b,o as h,V as p,L as r}
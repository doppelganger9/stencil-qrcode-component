const t="stqrcmp";let n;let e;let s=false;let o=false;const l=(t,n="")=>{{return()=>{}}};const c=(t,n)=>{{return()=>{}}};const i="{visibility:hidden}.hydrated{visibility:inherit}";const f="slot-fb{display:contents}slot-fb[hidden]{display:none}";const r={};const u=t=>t!=null;const a=t=>{t=typeof t;return t==="object"||t==="function"};function d(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const y=(t,n,...e)=>{let s=null;let o=false;let l=false;const c=[];const i=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!a(s)){s=String(s)}if(o&&l){c[c.length-1].t+=s}else{c.push(o?h(null,s):s)}l=o}}};i(e);const f=h(t,null);f.o=n;if(c.length>0){f.l=c}return f};const h=(t,n)=>{const e={i:0,u:t,t:n,h:null,l:null};{e.o=null}return e};const p={};const v=t=>t&&t.u===p;const m=(t,n)=>{if(t!=null&&!a(t)){if(n&2){return parseFloat(t)}if(n&1){return String(t)}return t}return t};const $=(t,n,e)=>{const s=at.ce(n,e);t.dispatchEvent(s);return s};const b=new WeakMap;const w=(t,n,e)=>{let s=ft.get(t);if(yt&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}ft.set(t,s)};const S=(t,n,e)=>{var s;const o=j(n);const l=ft.get(o);t=t.nodeType===11?t:ut;if(l){if(typeof l==="string"){t=t.head||t;let e=b.get(t);let c;if(!e){b.set(t,e=new Set)}if(!e.has(o)){{c=ut.createElement("style");c.innerHTML=l;const n=(s=at.p)!==null&&s!==void 0?s:d(ut);if(n!=null){c.setAttribute("nonce",n)}t.insertBefore(c,t.querySelector("link"))}if(n.i&4){c.innerHTML+=f}if(e){e.add(o)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return o};const g=t=>{const n=t.v;const e=t.$hostElement$;const s=n.i;const o=l("attachStyles",n.m);const c=S(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=c;e.classList.add(c+"-h")}o()};const j=(t,n)=>"sc-"+t.m;const k=(t,n,e,s,o,l)=>{if(e!==s){let c=ot(t,n);n.toLowerCase();{const i=a(s);if((c||i&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(n==="list"){c=false}else if(e==null||t[n]!=o){t[n]=o}}else{t[n]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(n)===""){{t.removeAttribute(n)}}}else if((!c||l&4||o)&&!i){s=s===true?"":s;{t.setAttribute(n,s)}}}}};const M=(t,n,e,s)=>{const o=n.h.nodeType===11&&n.h.host?n.h.host:n.h;const l=t&&t.o||r;const c=n.o||r;{for(s in l){if(!(s in c)){k(o,s,l[s],undefined,e,n.i)}}}for(s in c){k(o,s,l[s],c[s],e,n.i)}};const C=(t,o,l,c)=>{const i=o.l[l];let f=0;let r;let a;{r=i.h=ut.createElement(i.u);{M(null,i,s)}if(u(n)&&r["s-si"]!==n){r.classList.add(r["s-si"]=n)}if(i.l){for(f=0;f<i.l.length;++f){a=C(t,i,f);if(a){r.appendChild(a)}}}}r["s-hn"]=e;return r};const O=(t,n,s,o,l,c)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===e){i=i.shadowRoot}for(;l<=c;++l){if(o[l]){f=C(null,s,l);if(f){o[l].h=f;i.insertBefore(f,n)}}}};const P=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.h;if(t){t.remove()}}}};const U=(t,n,e,s,o=false)=>{let l=0;let c=0;let i=n.length-1;let f=n[0];let r=n[i];let u=s.length-1;let a=s[0];let d=s[u];let y;while(l<=i&&c<=u){if(f==null){f=n[++l]}else if(r==null){r=n[--i]}else if(a==null){a=s[++c]}else if(d==null){d=s[--u]}else if(x(f,a,o)){A(f,a,o);f=n[++l];a=s[++c]}else if(x(r,d,o)){A(r,d,o);r=n[--i];d=s[--u]}else if(x(f,d,o)){A(f,d,o);t.insertBefore(f.h,r.h.nextSibling);f=n[++l];d=s[--u]}else if(x(r,a,o)){A(r,a,o);t.insertBefore(r.h,f.h);r=n[--i];a=s[++c]}else{{y=C(n&&n[c],e,c);a=s[++c]}if(y){{f.h.parentNode.insertBefore(y,f.h)}}}}if(l>i){O(t,s[u+1]==null?null:s[u+1].h,e,s,c,u)}else if(c>u){P(n,l,i)}};const x=(t,n,e=false)=>{if(t.u===n.u){return true}return false};const A=(t,n,e=false)=>{const o=n.h=t.h;const l=t.l;const c=n.l;{{{M(t,n,s)}}if(l!==null&&c!==null){U(o,l,n,c,e)}else if(c!==null){O(o,null,n,c,0,c.length-1)}else if(l!==null){P(l,0,l.length-1)}}};const E=(t,s,o=false)=>{const l=t.$hostElement$;const c=t.$||h(null,null);const i=v(s)?s:y(null,null,s);e=l.tagName;if(o&&i.o){for(const t of Object.keys(i.o)){if(l.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){i.o[t]=l[t]}}}i.u=null;i.i|=4;t.$=i;i.h=c.h=l.shadowRoot||l;{n=l["s-sc"]}A(c,i,o)};const L=(t,n)=>{if(n&&!t.S&&n["s-p"]){n["s-p"].push(new Promise((n=>t.S=n)))}};const N=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}L(t,t.j);const e=()=>T(t,n);return wt(e)};const T=(t,n)=>{const e=l("scheduleUpdate",t.v.m);const s=t.k;let o;if(n){{o=V(s,"componentWillLoad")}}e();return W(o,(()=>F(t,s,n)))};const W=(t,n)=>q(t)?t.then(n):n();const q=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const F=async(t,n,e)=>{var s;const o=t.$hostElement$;const c=l("update",t.v.m);const i=o["s-rc"];if(e){g(t)}const f=l("render",t.v.m);{R(t,n,o,e)}if(i){i.map((t=>t()));o["s-rc"]=undefined}f();c();{const n=(s=o["s-p"])!==null&&s!==void 0?s:[];const e=()=>H(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const R=(t,n,e,s)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{E(t,n,s)}}}}catch(n){lt(n,t.$hostElement$)}return null};const H=t=>{const n=t.v.m;const e=t.$hostElement$;const s=l("postUpdate",n);const o=t.j;if(!(t.i&64)){t.i|=64;{_(e)}s();{t.M(e);if(!o){I()}}}else{s()}{if(t.S){t.S();t.S=undefined}if(t.i&512){bt((()=>N(t,false)))}t.i&=~(4|512)}};const I=n=>{{_(ut.documentElement)}bt((()=>$(rt,"appload",{detail:{namespace:t}})))};const V=(t,n,e)=>{if(t&&t[n]){try{return t[n](e)}catch(t){lt(t)}}return undefined};const _=t=>t.classList.add("hydrated");const z=(t,n)=>nt(t).C.get(n);const B=(t,n,e,s)=>{const o=nt(t);const l=o.$hostElement$;const c=o.C.get(n);const i=o.i;const f=o.k;e=m(e,s.O[n][0]);const r=Number.isNaN(c)&&Number.isNaN(e);const u=e!==c&&!r;if((!(i&8)||c===undefined)&&u){o.C.set(n,e);if(f){if(s.P&&i&128){const t=s.P[n];if(t){t.map((t=>{try{f[t](e,c,n)}catch(t){lt(t,l)}}))}}if((i&(2|16))===2){N(o,false)}}}};const D=(t,n,e)=>{var s;const o=t.prototype;if(n.O){if(t.watchers){n.P=t.watchers}const l=Object.entries(n.O);l.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return z(this,t)},set(e){B(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const e=new Map;o.attributeChangedCallback=function(t,s,l){at.jmp((()=>{var c;const i=e.get(t);if(this.hasOwnProperty(i)){l=this[i];delete this[i]}else if(o.hasOwnProperty(i)&&typeof this[i]==="number"&&this[i]==l){return}else if(i==null){const e=nt(this);const o=e===null||e===void 0?void 0:e.i;if(o&&!(o&8)&&o&128&&l!==s){const o=e.k;const i=(c=n.P)===null||c===void 0?void 0:c[t];i===null||i===void 0?void 0:i.forEach((n=>{if(o[n]!=null){o[n].call(o,l,s,t)}}))}return}this[i]=l===null&&typeof this[i]==="boolean"?false:l}))};t.observedAttributes=Array.from(new Set([...Object.keys((s=n.P)!==null&&s!==void 0?s:{}),...l.filter((([t,n])=>n[0]&15)).map((([t,n])=>{const s=n[1]||t;e.set(s,t);return s}))]))}}return t};const G=async(t,n,e,s)=>{let o;if((n.i&32)===0){n.i|=32;{o=it(e);if(o.then){const t=c();o=await o;t()}if(!o.isProxied){{e.P=o.watchers}D(o,e,2);o.isProxied=true}const t=l("createInstance",e.m);{n.i|=8}try{new o(n)}catch(t){lt(t)}{n.i&=~8}{n.i|=128}t()}if(o.style){let t=o.style;const n=j(e);if(!ft.has(n)){const s=l("registerStyles",e.m);w(n,t,!!(e.i&1));s()}}}const i=n.j;const f=()=>N(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const J=t=>{};const K=t=>{if((at.i&1)===0){const n=nt(t);const e=n.v;const s=l("connectedCallback",e.m);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){L(n,n.j=e);break}}}if(e.O){Object.entries(e.O).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{G(t,n,e)}}else{if(n===null||n===void 0?void 0:n.k);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>J()))}}s()}};const Q=t=>{};const X=async t=>{if((at.i&1)===0){const n=nt(t);if(n===null||n===void 0?void 0:n.k);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>Q()))}}};const Y=(t,n={})=>{var e;const s=l();const o=[];const c=n.exclude||[];const r=rt.customElements;const u=ut.head;const a=u.querySelector("meta[charset]");const y=ut.createElement("style");const h=[];let p;let v=true;Object.assign(at,n);at.A=new URL(n.resourcesUrl||"./",ut.baseURI).href;let m=false;t.map((t=>{t[1].map((n=>{var e;const s={i:n[0],m:n[1],O:n[2],L:n[3]};if(s.i&4){m=true}{s.O=n[2]}{s.P=(e=n[4])!==null&&e!==void 0?e:{}}const l=s.m;const i=class extends HTMLElement{constructor(t){super(t);t=this;st(t,s);if(s.i&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(p){clearTimeout(p);p=null}if(v){h.push(this)}else{at.jmp((()=>K(this)))}}disconnectedCallback(){at.jmp((()=>X(this)))}componentOnReady(){return nt(this).U}};s.N=t[0];if(!c.includes(l)&&!r.get(l)){o.push(l);r.define(l,D(i,s,1))}}))}));if(m){y.innerHTML+=f}{y.innerHTML+=o+i}if(y.innerHTML.length){y.setAttribute("data-styles","");const t=(e=at.p)!==null&&e!==void 0?e:d(ut);if(t!=null){y.setAttribute("nonce",t)}u.insertBefore(y,a?a.nextSibling:u.firstChild)}v=false;if(h.length){h.map((t=>t.connectedCallback()))}else{{at.jmp((()=>p=setTimeout(I,30)))}}s()};const Z=t=>at.p=t;const tt=new WeakMap;const nt=t=>tt.get(t);const et=(t,n)=>tt.set(n.k=t,n);const st=(t,n)=>{const e={i:0,$hostElement$:t,v:n,C:new Map};{e.U=new Promise((t=>e.M=t));t["s-p"]=[];t["s-rc"]=[]}return tt.set(t,e)};const ot=(t,n)=>n in t;const lt=(t,n)=>(0,console.error)(t,n);const ct=new Map;const it=(t,n,e)=>{const s=t.m.replace(/-/g,"_");const o=t.N;const l=ct.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{ct.set(o,t)}return t[s]}),lt)};const ft=new Map;const rt=typeof window!=="undefined"?window:{};const ut=rt.document||{head:{}};const at={i:0,A:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const dt=t=>Promise.resolve(t);const yt=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const ht=[];const pt=[];const vt=(t,n)=>e=>{t.push(e);if(!o){o=true;if(n&&at.i&4){bt($t)}else{at.raf($t)}}};const mt=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){lt(t)}}t.length=0};const $t=()=>{mt(ht);{mt(pt);if(o=ht.length>0){at.raf($t)}}};const bt=t=>dt().then(t);const wt=vt(pt,true);export{Y as b,y as h,dt as p,et as r,Z as s};
//# sourceMappingURL=p-24b75593.js.map
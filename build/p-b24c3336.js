const t="stqrcmp";let n;let e;let s=false;let o=false;const c=(t,n="")=>{{return()=>{}}};const l=(t,n)=>{{return()=>{}}};const i="{visibility:hidden}.hydrated{visibility:inherit}";const f={};const r=t=>t!=null;const u=t=>{t=typeof t;return t==="object"||t==="function"};function a(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const d=(t,n,...e)=>{let s=null;let o=false;let c=false;const l=[];const i=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!u(s)){s=String(s)}if(o&&c){l[l.length-1].t+=s}else{l.push(o?h(null,s):s)}c=o}}};i(e);const f=h(t,null);f.o=n;if(l.length>0){f.l=l}return f};const h=(t,n)=>{const e={i:0,u:t,t:n,h:null,l:null};{e.o=null}return e};const p={};const y=t=>t&&t.u===p;const m=(t,n)=>{if(t!=null&&!u(t)){if(n&2){return parseFloat(t)}if(n&1){return String(t)}return t}return t};const $=(t,n,e)=>{const s=ft.ce(n,e);t.dispatchEvent(s);return s};const w=new WeakMap;const b=(t,n,e)=>{let s=ct.get(t);if(ut&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}ct.set(t,s)};const S=(t,n,e)=>{var s;const o=g(n);const c=ct.get(o);t=t.nodeType===11?t:it;if(c){if(typeof c==="string"){t=t.head||t;let n=w.get(t);let e;if(!n){w.set(t,n=new Set)}if(!n.has(o)){{e=it.createElement("style");e.innerHTML=c;const n=(s=ft.p)!==null&&s!==void 0?s:a(it);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(o)}}}else if(!t.adoptedStyleSheets.includes(c)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,c]}}return o};const v=t=>{const n=t.m;const e=t.$;const s=n.i;const o=c("attachStyles",n.S);const l=S(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=l;e.classList.add(l+"-h")}o()};const g=(t,n)=>"sc-"+t.S;const M=(t,n,e,s,o,c)=>{if(e!==s){let l=nt(t,n);n.toLowerCase();{const i=u(s);if((l||i&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(n==="list"){l=false}else if(e==null||t[n]!=o){t[n]=o}}else{t[n]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(n)===""){{t.removeAttribute(n)}}}else if((!l||c&4||o)&&!i){s=s===true?"":s;{t.setAttribute(n,s)}}}}};const j=(t,n,e,s)=>{const o=n.h.nodeType===11&&n.h.host?n.h.host:n.h;const c=t&&t.o||f;const l=n.o||f;{for(s in c){if(!(s in l)){M(o,s,c[s],undefined,e,n.i)}}}for(s in l){M(o,s,c[s],l[s],e,n.i)}};const k=(t,e,o,c)=>{const l=e.l[o];let i=0;let f;let u;{f=l.h=it.createElement(l.u);{j(null,l,s)}if(r(n)&&f["s-si"]!==n){f.classList.add(f["s-si"]=n)}if(l.l){for(i=0;i<l.l.length;++i){u=k(t,l,i);if(u){f.appendChild(u)}}}}return f};const C=(t,n,s,o,c,l)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===e){i=i.shadowRoot}for(;c<=l;++c){if(o[c]){f=k(null,s,c);if(f){o[c].h=f;i.insertBefore(f,n)}}}};const O=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.h;if(t){t.remove()}}}};const P=(t,n,e,s)=>{let o=0;let c=0;let l=n.length-1;let i=n[0];let f=n[l];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=l&&c<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--l]}else if(u==null){u=s[++c]}else if(a==null){a=s[--r]}else if(U(i,u)){x(i,u);i=n[++o];u=s[++c]}else if(U(f,a)){x(f,a);f=n[--l];a=s[--r]}else if(U(i,a)){x(i,a);t.insertBefore(i.h,f.h.nextSibling);i=n[++o];a=s[--r]}else if(U(f,u)){x(f,u);t.insertBefore(f.h,i.h);f=n[--l];u=s[++c]}else{{d=k(n&&n[c],e,c);u=s[++c]}if(d){{i.h.parentNode.insertBefore(d,i.h)}}}}if(o>l){C(t,s[r+1]==null?null:s[r+1].h,e,s,c,r)}else if(c>r){O(n,o,l)}};const U=(t,n)=>{if(t.u===n.u){return true}return false};const x=(t,n)=>{const e=n.h=t.h;const o=t.l;const c=n.l;{{{j(t,n,s)}}if(o!==null&&c!==null){P(e,o,n,c)}else if(c!==null){C(e,null,n,c,0,c.length-1)}else if(o!==null){O(o,0,o.length-1)}}};const E=(t,s)=>{const o=t.$;const c=t.v||h(null,null);const l=y(s)?s:d(null,null,s);e=o.tagName;l.u=null;l.i|=4;t.v=l;l.h=c.h=o.shadowRoot||o;{n=o["s-sc"]}x(c,l)};const L=(t,n)=>{if(n&&!t.g&&n["s-p"]){n["s-p"].push(new Promise((n=>t.g=n)))}};const N=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}L(t,t.M);const e=()=>T(t,n);return $t(e)};const T=(t,n)=>{const e=c("scheduleUpdate",t.m.S);const s=t.j;let o;if(n){{o=I(s,"componentWillLoad")}}e();return W(o,(()=>A(t,s,n)))};const W=(t,n)=>q(t)?t.then(n):n();const q=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const A=async(t,n,e)=>{var s;const o=t.$;const l=c("update",t.m.S);const i=o["s-rc"];if(e){v(t)}const f=c("render",t.m.S);{F(t,n)}if(i){i.map((t=>t()));o["s-rc"]=undefined}f();l();{const n=(s=o["s-p"])!==null&&s!==void 0?s:[];const e=()=>R(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const F=(t,n,e)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{E(t,n)}}}}catch(n){et(n,t.$)}return null};const R=t=>{const n=t.m.S;const e=t.$;const s=c("postUpdate",n);const o=t.M;if(!(t.i&64)){t.i|=64;{V(e)}s();{t.k(e);if(!o){H()}}}else{s()}{if(t.g){t.g();t.g=undefined}if(t.i&512){mt((()=>N(t,false)))}t.i&=~(4|512)}};const H=n=>{{V(it.documentElement)}mt((()=>$(lt,"appload",{detail:{namespace:t}})))};const I=(t,n,e)=>{if(t&&t[n]){try{return t[n](e)}catch(t){et(t)}}return undefined};const V=t=>t.classList.add("hydrated");const _=(t,n)=>Y(t).C.get(n);const z=(t,n,e,s)=>{const o=Y(t);const c=o.$;const l=o.C.get(n);const i=o.i;const f=o.j;e=m(e,s.O[n][0]);const r=Number.isNaN(l)&&Number.isNaN(e);const u=e!==l&&!r;if((!(i&8)||l===undefined)&&u){o.C.set(n,e);if(f){if(s.P&&i&128){const t=s.P[n];if(t){t.map((t=>{try{f[t](e,l,n)}catch(t){et(t,c)}}))}}if((i&(2|16))===2){N(o,false)}}}};const B=(t,n,e)=>{if(n.O){if(t.watchers){n.P=t.watchers}const s=Object.entries(n.O);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return _(this,t)},set(e){z(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const n=new Map;o.attributeChangedCallback=function(t,e,s){ft.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(o.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,n])=>n[0]&15)).map((([t,e])=>{const s=e[1]||t;n.set(s,t);return s}))}}return t};const D=async(t,n,e,s,o)=>{if((n.i&32)===0){n.i|=32;{o=ot(e);if(o.then){const t=l();o=await o;t()}if(!o.isProxied){{e.P=o.watchers}B(o,e,2);o.isProxied=true}const t=c("createInstance",e.S);{n.i|=8}try{new o(n)}catch(t){et(t)}{n.i&=~8}{n.i|=128}t()}if(o.style){let t=o.style;const n=g(e);if(!ct.has(n)){const s=c("registerStyles",e.S);b(n,t,!!(e.i&1));s()}}}const i=n.M;const f=()=>N(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const G=t=>{if((ft.i&1)===0){const n=Y(t);const e=n.m;const s=c("connectedCallback",e.S);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){L(n,n.M=e);break}}}if(e.O){Object.entries(e.O).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{D(t,n,e)}}s()}};const J=t=>{if((ft.i&1)===0){Y(t)}};const K=(t,n={})=>{var e;const s=c();const o=[];const l=n.exclude||[];const f=lt.customElements;const r=it.head;const u=r.querySelector("meta[charset]");const d=it.createElement("style");const h=[];let p;let y=true;Object.assign(ft,n);ft.U=new URL(n.resourcesUrl||"./",it.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],S:n[1],O:n[2],L:n[3]};{e.O=n[2]}{e.P={}}const s=e.S;const c=class extends HTMLElement{constructor(t){super(t);t=this;tt(t,e);if(e.i&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(p){clearTimeout(p);p=null}if(y){h.push(this)}else{ft.jmp((()=>G(this)))}}disconnectedCallback(){ft.jmp((()=>J(this)))}componentOnReady(){return Y(this).N}};e.T=t[0];if(!l.includes(s)&&!f.get(s)){o.push(s);f.define(s,B(c,e,1))}}))}));{d.innerHTML=o+i;d.setAttribute("data-styles","");const t=(e=ft.p)!==null&&e!==void 0?e:a(it);if(t!=null){d.setAttribute("nonce",t)}r.insertBefore(d,u?u.nextSibling:r.firstChild)}y=false;if(h.length){h.map((t=>t.connectedCallback()))}else{{ft.jmp((()=>p=setTimeout(H,30)))}}s()};const Q=t=>ft.p=t;const X=new WeakMap;const Y=t=>X.get(t);const Z=(t,n)=>X.set(n.j=t,n);const tt=(t,n)=>{const e={i:0,$:t,m:n,C:new Map};{e.N=new Promise((t=>e.k=t));t["s-p"]=[];t["s-rc"]=[]}return X.set(t,e)};const nt=(t,n)=>n in t;const et=(t,n)=>(0,console.error)(t,n);const st=new Map;const ot=(t,n,e)=>{const s=t.S.replace(/-/g,"_");const o=t.T;const c=st.get(o);if(c){return c[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{st.set(o,t)}return t[s]}),et)};const ct=new Map;const lt=typeof window!=="undefined"?window:{};const it=lt.document||{head:{}};const ft={i:0,U:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const rt=t=>Promise.resolve(t);const ut=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const at=[];const dt=[];const ht=(t,n)=>e=>{t.push(e);if(!o){o=true;if(n&&ft.i&4){mt(yt)}else{ft.raf(yt)}}};const pt=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){et(t)}}t.length=0};const yt=()=>{pt(at);{pt(dt);if(o=at.length>0){ft.raf(yt)}}};const mt=t=>rt().then(t);const $t=ht(dt,true);export{K as b,d as h,rt as p,Z as r,Q as s};
//# sourceMappingURL=p-b24c3336.js.map
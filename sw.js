if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let o={};const c=e=>i(e,d),t={module:{uri:d},exports:o,require:c};s[d]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/favicon.png",revision:"786ac537ab37ad6e8662dd2549b6817b"},{url:"assets/icon-192.png",revision:"f2a6b449d9ad1adbe5fcd82eeaa25dc4"},{url:"assets/icon-512.png",revision:"167497489a9d3f751fbabcd8239d4872"},{url:"assets/icon-719.png",revision:"4bebfa0959bc92f9ba36051768392c0d"},{url:"build/index.esm.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"build/p-67129801.entry.js",revision:null},{url:"build/p-7fd8bece.js",revision:null},{url:"index.html",revision:"0dba66a6c00ea5e0cd7021d3e9c0548c"},{url:"manifest.json",revision:"4f1693cee61aeb94422d419cfc88d54a"}],{})}));
//# sourceMappingURL=sw.js.map

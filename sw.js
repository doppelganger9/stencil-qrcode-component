if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let d={};const t=e=>i(e,o),c={module:{uri:o},exports:d,require:t};s[o]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/favicon.png",revision:"786ac537ab37ad6e8662dd2549b6817b"},{url:"assets/icon-192.png",revision:"f2a6b449d9ad1adbe5fcd82eeaa25dc4"},{url:"assets/icon-512.png",revision:"167497489a9d3f751fbabcd8239d4872"},{url:"assets/icon-719.png",revision:"4bebfa0959bc92f9ba36051768392c0d"},{url:"build/index.esm.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"build/p-706f73fb.js",revision:null},{url:"build/p-be6113cf.entry.js",revision:null},{url:"index.html",revision:"5aa38c7e37558c913a8357783dba8729"},{url:"manifest.json",revision:"4f1693cee61aeb94422d419cfc88d54a"}],{})}));
//# sourceMappingURL=sw.js.map

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/favicon.png",
    "revision": "786ac537ab37ad6e8662dd2549b6817b"
  },
  {
    "url": "assets/icon-192.png",
    "revision": "f2a6b449d9ad1adbe5fcd82eeaa25dc4"
  },
  {
    "url": "assets/icon-512.png",
    "revision": "167497489a9d3f751fbabcd8239d4872"
  },
  {
    "url": "assets/icon-719.png",
    "revision": "4bebfa0959bc92f9ba36051768392c0d"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-0ad0b6e8.js"
  },
  {
    "url": "build/p-10fb8abc.js"
  },
  {
    "url": "build/p-233a97d2.js"
  },
  {
    "url": "build/p-3d1015c2.js"
  },
  {
    "url": "build/p-7faff4bb.js"
  },
  {
    "url": "build/p-d13aee43.entry.js"
  },
  {
    "url": "index.html",
    "revision": "d92778a94e0ab3255df6e08d9dbe79a5"
  },
  {
    "url": "manifest.json",
    "revision": "4f1693cee61aeb94422d419cfc88d54a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

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
    "url": "20171231/first-day-of-spring-2016-northern-hemisphere.gif",
    "revision": "6f22be4e029e93d82823665a482806b0"
  },
  {
    "url": "20171231/homeScreen128.png",
    "revision": "c75a9a761637308ec133a3958c66c60a"
  },
  {
    "url": "20171231/homeScreen144.png",
    "revision": "e13f35c03850b3b2b5e9bdcc788ec1d0"
  },
  {
    "url": "20171231/homeScreen48.png",
    "revision": "fb050608ac666852b29a5eac4182c12f"
  },
  {
    "url": "20171231/homeScreen72.png",
    "revision": "cb447a29593a26a8473ac2bbe28f4318"
  },
  {
    "url": "20171231/homeScreen96.png",
    "revision": "f6db37464ab7071440b15f6039d42dde"
  },
  {
    "url": "20171231/logo.png",
    "revision": "e13f35c03850b3b2b5e9bdcc788ec1d0"
  },
  {
    "url": "20171231/summer-solstice-strawberry-moon.gif",
    "revision": "75d8fb9ccbd0995d026ed784a72e486f"
  },
  {
    "url": "20171231/tooth.gif",
    "revision": "1d5b4434920a088ca92202a1019e84fe"
  },
  {
    "url": "404.html",
    "revision": "bbe0201f576fe1c3ee948f53a1379ec9"
  },
  {
    "url": "about.html",
    "revision": "aea5b546ce843f58bf4b4d9e359216a8"
  },
  {
    "url": "assets/css/0.styles.7d55f3ed.css",
    "revision": "ab4a2ea404de68dbf18e05785d89018b"
  },
  {
    "url": "assets/img/banner.8069aec6.png",
    "revision": "8069aec697a05cbba6d6a4e5b238b7a6"
  },
  {
    "url": "assets/img/default.2e87daf0.png",
    "revision": "2e87daf025709c986aafebc298cd5ef4"
  },
  {
    "url": "assets/img/first-day-of-spring-2016-northern-hemisphere.6f22be4e.gif",
    "revision": "6f22be4e029e93d82823665a482806b0"
  },
  {
    "url": "assets/img/logo.3e6261d0.png",
    "revision": "3e6261d01c1350604547911cfabb17e8"
  },
  {
    "url": "assets/img/NotFound.b5c9b223.jpg",
    "revision": "b5c9b223d7dc40d8f56617c8979d30a2"
  },
  {
    "url": "assets/img/summer-solstice-strawberry-moon.75d8fb9c.gif",
    "revision": "75d8fb9ccbd0995d026ed784a72e486f"
  },
  {
    "url": "assets/js/10.01beb459.js",
    "revision": "1b1290b0c67a1e2c9828eb3701cec98e"
  },
  {
    "url": "assets/js/11.92cd1c44.js",
    "revision": "b40a9644a1f0f3c185fcb4a7592fb8e9"
  },
  {
    "url": "assets/js/12.e8e61e4d.js",
    "revision": "2eeb09797c10bb79b7834bc9cdd55db0"
  },
  {
    "url": "assets/js/13.f455d06b.js",
    "revision": "ca80e31ed7a4424927c8a144828062d1"
  },
  {
    "url": "assets/js/14.7d69413e.js",
    "revision": "be166f6c08a51ce39c0eaa01abc11c7d"
  },
  {
    "url": "assets/js/15.97f658a7.js",
    "revision": "0a29ca7470ecdf26b47f17b47f96171d"
  },
  {
    "url": "assets/js/16.ba6cbb6f.js",
    "revision": "1078e9728f47459b994018dc23d3295a"
  },
  {
    "url": "assets/js/17.7e6516a6.js",
    "revision": "34600651110522e0f0b01b95d4e4242b"
  },
  {
    "url": "assets/js/2.cc84dc19.js",
    "revision": "45a28c1b7868f5db158a74c72d34cda1"
  },
  {
    "url": "assets/js/3.57a18cb3.js",
    "revision": "830d2dc2c8cfdde0affedfab003aa8c7"
  },
  {
    "url": "assets/js/4.2250360a.js",
    "revision": "580ae3f113c5175e3c170618f352988f"
  },
  {
    "url": "assets/js/5.a9aa86f1.js",
    "revision": "229577ea3e22b8a9a0618a5c3a5c30af"
  },
  {
    "url": "assets/js/6.9bf7ab23.js",
    "revision": "6e4ebb596660a42c5f9bbc541a8d11d2"
  },
  {
    "url": "assets/js/7.46863c17.js",
    "revision": "354764f18b914a742748e05c9cffa001"
  },
  {
    "url": "assets/js/8.05a9ee70.js",
    "revision": "087464687592e942dcaacc027210f5bb"
  },
  {
    "url": "assets/js/9.61ffad32.js",
    "revision": "480aeb0e5e84929a4b6be465fd9bd703"
  },
  {
    "url": "assets/js/app.40095c9e.js",
    "revision": "22c3f34497d9ed52870bdd3893e0fad9"
  },
  {
    "url": "full/index.html",
    "revision": "a44a39f3f1474bc8cdcc115b78ffef3a"
  },
  {
    "url": "index.html",
    "revision": "e7a478e56bc4af7214bfe8c0981f498e"
  },
  {
    "url": "link.html",
    "revision": "b81fcb3e18b140956445586726125a7b"
  },
  {
    "url": "other/for-test4.html",
    "revision": "47458e25f5b4663340208eb8791babf4"
  },
  {
    "url": "other/index.html",
    "revision": "6f4a6b62f3d932f6a46556693b63dd13"
  },
  {
    "url": "posts/index.html",
    "revision": "9ab80660b6cb2b87ec347ebc49d8cb56"
  },
  {
    "url": "tags/index.html",
    "revision": "edb65bfc5a26c8d5b7f3a901becb838c"
  },
  {
    "url": "uikit/for-test.html",
    "revision": "96485fef3805a9b4ec6a62607f5989f3"
  },
  {
    "url": "uikit/for-test1.html",
    "revision": "47458e25f5b4663340208eb8791babf4"
  },
  {
    "url": "uikit/index.html",
    "revision": "86a891949fa94a7cf8c35e7891901aab"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

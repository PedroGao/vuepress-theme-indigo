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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ec58b2c45440bf419ec6c9d2af245410"
  },
  {
    "url": "about/index.html",
    "revision": "8cb02564ebbe1bdf39c7243c207b1093"
  },
  {
    "url": "april.jpg",
    "revision": "e1ce57c893d298ef0b4c7c549b9a7064"
  },
  {
    "url": "assets/css/10.styles.9de73147.css",
    "revision": "b0a93033b4964f116e4f31ad9e60964c"
  },
  {
    "url": "assets/fonts/fa-brands-400.0f2cf53d.ttf",
    "revision": "0f2cf53d993d48641dfe3004f8756451"
  },
  {
    "url": "assets/fonts/fa-brands-400.385c9944.woff",
    "revision": "385c99445f393f2137cd13f8b8cb9548"
  },
  {
    "url": "assets/fonts/fa-brands-400.9143a0ee.woff2",
    "revision": "9143a0ee85f8f2f1e21e8d8048bdd4fe"
  },
  {
    "url": "assets/fonts/fa-brands-400.ee2d477f.eot",
    "revision": "ee2d477f4fddbecf5b07d1b530c0a619"
  },
  {
    "url": "assets/fonts/fa-regular-400.4233afd6.woff2",
    "revision": "4233afd632da228b9e2e88b5ccfe380f"
  },
  {
    "url": "assets/fonts/fa-regular-400.4a1d3aa7.woff",
    "revision": "4a1d3aa7846caed65e25cc3632da6e60"
  },
  {
    "url": "assets/fonts/fa-regular-400.86636605.eot",
    "revision": "86636605942a5a7fdc37d063dcc47ae3"
  },
  {
    "url": "assets/fonts/fa-regular-400.d6ec181c.ttf",
    "revision": "d6ec181c23a4d0283975731b770b4d8f"
  },
  {
    "url": "assets/fonts/fa-solid-900.48f24713.woff",
    "revision": "48f24713d44854d6238c577c83f5aee4"
  },
  {
    "url": "assets/fonts/fa-solid-900.5f54e01a.ttf",
    "revision": "5f54e01a97292d92a9b766e0fb9c95e7"
  },
  {
    "url": "assets/fonts/fa-solid-900.aac0239f.woff2",
    "revision": "aac0239f809734fc35318f3624aa1267"
  },
  {
    "url": "assets/fonts/fa-solid-900.b971151a.eot",
    "revision": "b971151ae89832d63c4742c06b4578ce"
  },
  {
    "url": "assets/img/bg.8195b121.jpg",
    "revision": "8195b12102f375f4f07442d983f63ce9"
  },
  {
    "url": "assets/img/fa-brands-400.8e04d338.svg",
    "revision": "8e04d338e5f3a734136e5fa058f60d0b"
  },
  {
    "url": "assets/img/fa-regular-400.683aea2d.svg",
    "revision": "683aea2d6dbe01d00511266ee839bde4"
  },
  {
    "url": "assets/img/fa-solid-900.84f12353.svg",
    "revision": "84f1235368df805a5aaf323c937ddb2f"
  },
  {
    "url": "assets/img/face.55c9d89d.jpg",
    "revision": "55c9d89de66c7f697ead1b3ac10b008e"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/0.035cdf54.js",
    "revision": "002ca24eaa7469081513f11c6c8a957b"
  },
  {
    "url": "assets/js/1.ffee735d.js",
    "revision": "6089b1f2c62af5495c7a81cc08302b0d"
  },
  {
    "url": "assets/js/2.96d16cdd.js",
    "revision": "dad5e5feecefc83c99ec34752762b4cf"
  },
  {
    "url": "assets/js/3.53a48a38.js",
    "revision": "5e8ea13c454fa6c6603ae5fff43dfb8e"
  },
  {
    "url": "assets/js/4.3b76e126.js",
    "revision": "4a13c3f7497e4406c359a332452a9a5f"
  },
  {
    "url": "assets/js/5.197187a2.js",
    "revision": "08d3d58b22cf6648ae645bb834bfda05"
  },
  {
    "url": "assets/js/6.8a4e3a4f.js",
    "revision": "8f2dfa10e339f28810c1f8b1ec3eb59c"
  },
  {
    "url": "assets/js/7.be40b96c.js",
    "revision": "1ecbf9700797ddbf58c52be7286fbd31"
  },
  {
    "url": "assets/js/8.714f9c66.js",
    "revision": "def000ef933daa737b58f09107882f2e"
  },
  {
    "url": "assets/js/9.233f58f5.js",
    "revision": "1f0f4fb06e98fce036170c5c6b70e18d"
  },
  {
    "url": "assets/js/app.eaa29a29.js",
    "revision": "c7eca2f7f6688262b16870ca89db974f"
  },
  {
    "url": "avatar.jpg",
    "revision": "937e94c4b78566c66dd2c3ac2a977ac9"
  },
  {
    "url": "essay/index.html",
    "revision": "5abd356e1bba833caeca65baabedef3d"
  },
  {
    "url": "face.jpg",
    "revision": "55c9d89de66c7f697ead1b3ac10b008e"
  },
  {
    "url": "github/index.html",
    "revision": "0314c963b47ea9580353cae3a4a2c75c"
  },
  {
    "url": "icons/192.png",
    "revision": "68bb209813d9962fe145b690d1838fc8"
  },
  {
    "url": "icons/512.png",
    "revision": "3987835f3e7dfed8d78e559e34c49596"
  },
  {
    "url": "icons/favicon.png",
    "revision": "cfa97d05be7622e0f57799d7149b93f0"
  },
  {
    "url": "index.html",
    "revision": "f0266bd43ec77968be910e612f5c3b8d"
  },
  {
    "url": "posts/golang-learn-standard.html",
    "revision": "e064044bfceb895ebdac755b19752e0c"
  },
  {
    "url": "posts/golang-learn-web1.html",
    "revision": "a33eb27b79e8afe4b2374cdd1a2dad88"
  },
  {
    "url": "posts/golang-learn-web2.html",
    "revision": "88c0c8276fcbda72e527c72591fbde31"
  },
  {
    "url": "posts/kotlin-coroutine1.html",
    "revision": "1f60f7930a76d43a97ddac18f4c2929b"
  },
  {
    "url": "posts/test-markdown.html",
    "revision": "37edf890cc810393cd8d4a499c2c66a2"
  },
  {
    "url": "tags/index.html",
    "revision": "ab473ab2af5541ffa06a823f7fe4886a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

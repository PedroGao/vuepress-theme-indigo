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
    "revision": "9a35985be5fe32faaef859cca65599b3"
  },
  {
    "url": "about/index.html",
    "revision": "efb42297aae990a946668ce987f3129f"
  },
  {
    "url": "april.jpg",
    "revision": "e1ce57c893d298ef0b4c7c549b9a7064"
  },
  {
    "url": "assets/css/9.styles.7664685f.css",
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
    "url": "assets/js/0.b14b2b67.js",
    "revision": "284665420e9fb41e21090efa2afe466b"
  },
  {
    "url": "assets/js/1.9397de39.js",
    "revision": "b1f0d04a4c331aec7950c76b8e20b121"
  },
  {
    "url": "assets/js/2.baee8524.js",
    "revision": "b92f818afdaef34a4bcdd9ecc2682b25"
  },
  {
    "url": "assets/js/3.b69ed1a6.js",
    "revision": "f6294abdcd41932126186ab73b4b4b4c"
  },
  {
    "url": "assets/js/4.fbd6d359.js",
    "revision": "4a1cce301b03c20eb041f26f1cf9556c"
  },
  {
    "url": "assets/js/5.d8af30ce.js",
    "revision": "aff106d4402de3ad64e525134afc4c76"
  },
  {
    "url": "assets/js/6.ca2e317f.js",
    "revision": "9a6263d040fc7cf8dff232fe75c3400a"
  },
  {
    "url": "assets/js/7.db1b29b8.js",
    "revision": "e530cf9b5dae07a0aefede7758fde5f5"
  },
  {
    "url": "assets/js/8.656c3059.js",
    "revision": "a67d45088d346013c3dd4ccfaf7ad996"
  },
  {
    "url": "assets/js/app.d8231b40.js",
    "revision": "502e731a43947ecf1658f955bd8553ae"
  },
  {
    "url": "avatar.jpg",
    "revision": "937e94c4b78566c66dd2c3ac2a977ac9"
  },
  {
    "url": "essay/index.html",
    "revision": "0d1f9d5b8fb0e2ad521c796afe15164d"
  },
  {
    "url": "face.jpg",
    "revision": "55c9d89de66c7f697ead1b3ac10b008e"
  },
  {
    "url": "github/index.html",
    "revision": "cdd8c03f64df5ed2adf365798abac35d"
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
    "revision": "e8be3df661455028ab72c44f2d8840cc"
  },
  {
    "url": "posts/golang-learn-standard.html",
    "revision": "8736dd00e10962f6e9d756ade68e2b63"
  },
  {
    "url": "posts/golang-learn-web1.html",
    "revision": "d6291fb53e61b39c404eac2765d21c2b"
  },
  {
    "url": "posts/golang-learn-web2.html",
    "revision": "58912a8e525132905917f3aca7305c96"
  },
  {
    "url": "posts/test-markdown.html",
    "revision": "5a9441d47048f65ad58410601c2ec31f"
  },
  {
    "url": "tags/index.html",
    "revision": "9be43c852ecbd3b8bed90d9d590d4ae6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

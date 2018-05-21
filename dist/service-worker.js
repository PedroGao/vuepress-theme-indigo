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
    "revision": "446f6c149372575792bfb987a7762b8d"
  },
  {
    "url": "about/index.html",
    "revision": "ca0fda9ae6dbd5ecc0d6057504eaeb54"
  },
  {
    "url": "april.jpg",
    "revision": "e1ce57c893d298ef0b4c7c549b9a7064"
  },
  {
    "url": "assets/css/10.styles.c2417b62.css",
    "revision": "85e4a64b457e67c9d84aac8967110082"
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
    "url": "assets/fonts/Roboto-Bold.39b2c303.woff2",
    "revision": "39b2c3031be6b4ea96e2e3e95d307814"
  },
  {
    "url": "assets/fonts/Roboto-Bold.dc81817d.woff",
    "revision": "dc81817def276b4f21395f7ea5e88dcd"
  },
  {
    "url": "assets/fonts/Roboto-Bold.e31fcf18.ttf",
    "revision": "e31fcf1885e371e19f5786c2bdfeae1b"
  },
  {
    "url": "assets/fonts/Roboto-Light.3b813c2a.woff",
    "revision": "3b813c2ae0d04909a33a18d792912ee7"
  },
  {
    "url": "assets/fonts/Roboto-Light.46e48ce0.ttf",
    "revision": "46e48ce0628835f68a7369d0254e4283"
  },
  {
    "url": "assets/fonts/Roboto-Light.69f8a061.woff2",
    "revision": "69f8a0617ac472f78e45841323a3df9e"
  },
  {
    "url": "assets/fonts/Roboto-Medium.574fd0b5.woff2",
    "revision": "574fd0b50367f886d359e8264938fc37"
  },
  {
    "url": "assets/fonts/Roboto-Medium.894a2ede.ttf",
    "revision": "894a2ede85a483bf9bedefd4db45cdb9"
  },
  {
    "url": "assets/fonts/Roboto-Medium.fc78759e.woff",
    "revision": "fc78759e93a6cac50458610e3d9d63a0"
  },
  {
    "url": "assets/fonts/Roboto-Regular.2751ee43.woff2",
    "revision": "2751ee43015f9884c3642f103b7f70c9"
  },
  {
    "url": "assets/fonts/Roboto-Regular.ba3dcd89.woff",
    "revision": "ba3dcd8903e3d0af5de7792777f8ae0d"
  },
  {
    "url": "assets/fonts/Roboto-Regular.df7b648c.ttf",
    "revision": "df7b648ce5356ea1ebce435b3459fd60"
  },
  {
    "url": "assets/fonts/Roboto-Thin.7500519d.woff",
    "revision": "7500519de3d82e33d1587f8042e2afcb"
  },
  {
    "url": "assets/fonts/Roboto-Thin.94998475.ttf",
    "revision": "94998475f6aea65f558494802416c1cf"
  },
  {
    "url": "assets/fonts/Roboto-Thin.954bbdeb.woff2",
    "revision": "954bbdeb86483e4ffea00c4591530ece"
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
    "url": "assets/js/0.060ca59e.js",
    "revision": "6cce079d75ce13e742b2e51ba9a27f60"
  },
  {
    "url": "assets/js/1.1e72876c.js",
    "revision": "302089b49cc14c298ad640ec2cc16ca9"
  },
  {
    "url": "assets/js/2.1f6a8ca2.js",
    "revision": "c2ed03e5340f8c3cde101a4385a0aaa9"
  },
  {
    "url": "assets/js/3.c2455fec.js",
    "revision": "0bc5c627e51841d080f15349dd8ece93"
  },
  {
    "url": "assets/js/4.23453537.js",
    "revision": "d7f8d1c30730cb666a853219a6ca0a58"
  },
  {
    "url": "assets/js/5.13ad0bcb.js",
    "revision": "dd316fb926b68d1f6e1ec9c79fd86327"
  },
  {
    "url": "assets/js/6.3de4d206.js",
    "revision": "6d4e942be59475dab270ddda7766f2f7"
  },
  {
    "url": "assets/js/7.0efce696.js",
    "revision": "480e1f3f2347b22fd5488fc3bdf138cd"
  },
  {
    "url": "assets/js/8.da08aaf5.js",
    "revision": "783d9b54f67507f15048de12aa226e5d"
  },
  {
    "url": "assets/js/9.04152f6a.js",
    "revision": "2176d97f233e9e0f05791755488c0e47"
  },
  {
    "url": "assets/js/app.93d885fd.js",
    "revision": "86ac98c1fc89d39321a65659a37329fc"
  },
  {
    "url": "avatar.jpg",
    "revision": "937e94c4b78566c66dd2c3ac2a977ac9"
  },
  {
    "url": "essay/index.html",
    "revision": "2e12377004e87895d23ac93566d0ff1d"
  },
  {
    "url": "face.jpg",
    "revision": "55c9d89de66c7f697ead1b3ac10b008e"
  },
  {
    "url": "github/index.html",
    "revision": "7dc02ec00157752a7880c7eeb0ec914b"
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
    "revision": "1bff332ae759898edcaee384b4985939"
  },
  {
    "url": "posts/golang-learn-standard.html",
    "revision": "edda782648db9e11769b0412613fadd0"
  },
  {
    "url": "posts/golang-learn-web1.html",
    "revision": "13659c981bbc227c08b136ab8e3aefdd"
  },
  {
    "url": "posts/golang-learn-web2.html",
    "revision": "d019743b172d6bc9e56e894459c8008e"
  },
  {
    "url": "posts/kotlin-coroutine1.html",
    "revision": "8b9751e884feb20c47451ca54470266c"
  },
  {
    "url": "posts/test-markdown.html",
    "revision": "4c8d03a69a13c358418468ad45fc5c7d"
  },
  {
    "url": "tags/index.html",
    "revision": "c72114f88eddedeac5edb46199cf0103"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

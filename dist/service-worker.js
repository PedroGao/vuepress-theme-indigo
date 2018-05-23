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
    "revision": "2b6b3c1293dccd6601495399b8f39e1e"
  },
  {
    "url": "about/index.html",
    "revision": "a1398c01081d2a0ba97de212e0f945cb"
  },
  {
    "url": "april.jpg",
    "revision": "e1ce57c893d298ef0b4c7c549b9a7064"
  },
  {
    "url": "assets/css/12.styles.54659ed2.css",
    "revision": "cf2c523ee41fcce899b0a71aa8b06687"
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
    "url": "assets/img/avatar.937e94c4.jpg",
    "revision": "937e94c4b78566c66dd2c3ac2a977ac9"
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
    "url": "assets/img/xun.e1ce57c8.jpg",
    "revision": "e1ce57c893d298ef0b4c7c549b9a7064"
  },
  {
    "url": "assets/js/0.0dfc987e.js",
    "revision": "04f91b6187a6a15e6c1a9ae4f1eb1220"
  },
  {
    "url": "assets/js/1.a2cfed8e.js",
    "revision": "afb2fd8fc299dbbf8bf6a1d134b9cc92"
  },
  {
    "url": "assets/js/10.3cfcb174.js",
    "revision": "ce137e47e407ae3ae962c5bd14801a21"
  },
  {
    "url": "assets/js/11.12af8a77.js",
    "revision": "6419670f1f67c8268d0d63e0e53a52b7"
  },
  {
    "url": "assets/js/2.a7a73642.js",
    "revision": "fe730f7db4359fc89ece8fb7f0533064"
  },
  {
    "url": "assets/js/3.3368ec92.js",
    "revision": "2d6f4c9987462caf187aeac7db14d236"
  },
  {
    "url": "assets/js/4.80736cd4.js",
    "revision": "6b56f87d2f7e0233d778b4a9f70d4b33"
  },
  {
    "url": "assets/js/5.1f59938d.js",
    "revision": "d943fd0eaaf1f6122f89c883b56b0256"
  },
  {
    "url": "assets/js/6.18e4f5ec.js",
    "revision": "5a90bbf386da34bfdc104b72bc31cec4"
  },
  {
    "url": "assets/js/7.80c8b0dc.js",
    "revision": "5ff6fe4629c3cbd8a2b389f1c128a88b"
  },
  {
    "url": "assets/js/8.d430176e.js",
    "revision": "22acf218240c14da24858020dfe1d6d5"
  },
  {
    "url": "assets/js/9.efcaa5f9.js",
    "revision": "dcdda63b1c0c2e02d36deadfe0deb7df"
  },
  {
    "url": "assets/js/app.7679013e.js",
    "revision": "4f08852e30dae4b7515b5965281dbe65"
  },
  {
    "url": "avatar.jpg",
    "revision": "937e94c4b78566c66dd2c3ac2a977ac9"
  },
  {
    "url": "essay/essay-one.html",
    "revision": "d6cd184598227fc7b711386c0616a8ac"
  },
  {
    "url": "essay/index.html",
    "revision": "f44f08b27aec8182f32fbde9d5a29f12"
  },
  {
    "url": "face.jpg",
    "revision": "55c9d89de66c7f697ead1b3ac10b008e"
  },
  {
    "url": "github/index.html",
    "revision": "5a4fafce5901fe0827671cc0ceebe835"
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
    "revision": "b515a8130b3c88a8ac247e5da2c0293f"
  },
  {
    "url": "posts/golang-learn-standard.html",
    "revision": "2a66f8d6d9041af9e74668b333915054"
  },
  {
    "url": "posts/golang-learn-web1.html",
    "revision": "52664116933061f1cc1c32884a12506d"
  },
  {
    "url": "posts/golang-learn-web2.html",
    "revision": "42865a476108b0f9b435383ae9d274bd"
  },
  {
    "url": "posts/kotlin-coroutine1.html",
    "revision": "031d970b7040a8d2c32208485c9133a7"
  },
  {
    "url": "posts/test-markdown.html",
    "revision": "775e8db240e215e3359a5c0e325e51ee"
  },
  {
    "url": "tags/index.html",
    "revision": "99038749cf8b9d18e5b2378178e9e88b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

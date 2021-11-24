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
    "url": "404.html",
    "revision": "2ffbdde5aed5a220d3e1bc3a0caff3e4"
  },
  {
    "url": "assets/css/0.styles.605c012c.css",
    "revision": "735a07d7d91ad25a6a2f494fd7ad36e5"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/bg.f6a99c6a.jpg",
    "revision": "f6a99c6a56db28e009787987a2bb6f0d"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4c3b3feb.js",
    "revision": "aa3aa3951bd2f7d91eb99f8e1a425d80"
  },
  {
    "url": "assets/js/11.29483d5c.js",
    "revision": "fcbd700a33508972777c946c8b56a1b0"
  },
  {
    "url": "assets/js/12.8785764a.js",
    "revision": "c930757e7cdb9e0f5e98492c328b789a"
  },
  {
    "url": "assets/js/13.c0300916.js",
    "revision": "7274738e185834ffc6b92f8570ceeac7"
  },
  {
    "url": "assets/js/14.1d0d6af3.js",
    "revision": "add3ca8001e8353b23693c9270c282c0"
  },
  {
    "url": "assets/js/15.c106125d.js",
    "revision": "3a4f186490c0611dbe9b9d7aca31e5bd"
  },
  {
    "url": "assets/js/16.dab616ec.js",
    "revision": "dc65e412f880fd99e57ac490d00d11d3"
  },
  {
    "url": "assets/js/17.1d8d9d5d.js",
    "revision": "43501becc0ee23ff623113dda28d802e"
  },
  {
    "url": "assets/js/18.172b246f.js",
    "revision": "7ee80b6ce101e81ce693083de1795ca9"
  },
  {
    "url": "assets/js/19.6eb2d079.js",
    "revision": "d32c34e4f7bee45c8d03f64f6338f4db"
  },
  {
    "url": "assets/js/2.2862d7a4.js",
    "revision": "d4ffbf203e48dcef352e9d15abefd813"
  },
  {
    "url": "assets/js/20.46b1e5cf.js",
    "revision": "263d650182acb0ed4cfc66552e7a572b"
  },
  {
    "url": "assets/js/21.7e0dc6b6.js",
    "revision": "b8a7ee5a2afe744429d65978ff8f1797"
  },
  {
    "url": "assets/js/22.f6e5872e.js",
    "revision": "d2b7dfc97e42ed879aec3730948b8ecc"
  },
  {
    "url": "assets/js/23.201b63b9.js",
    "revision": "90debbdd1299593023ae91e809d4c5c7"
  },
  {
    "url": "assets/js/24.417d1692.js",
    "revision": "ac235d3cd6521d73cb9b8fd0d5c51198"
  },
  {
    "url": "assets/js/25.ca100eb6.js",
    "revision": "b2896d395ec75af47d18b6e6b1cd71a7"
  },
  {
    "url": "assets/js/26.238eaf30.js",
    "revision": "fc3fa2f5a06db330816a3b5542787d36"
  },
  {
    "url": "assets/js/27.c56eaa19.js",
    "revision": "821e33e2d0d291bd88e38cc91f895122"
  },
  {
    "url": "assets/js/28.b6b69294.js",
    "revision": "40882c1addbdb04acff550e44234c29f"
  },
  {
    "url": "assets/js/3.1a272b4e.js",
    "revision": "a09bf5e54d165d3f84331f85e3d49367"
  },
  {
    "url": "assets/js/4.002683c0.js",
    "revision": "801f4d2f68e003ff5f2674996989904a"
  },
  {
    "url": "assets/js/5.7cf4823d.js",
    "revision": "9b978fa15d1b9cd45f08f07dd9fb4a7c"
  },
  {
    "url": "assets/js/6.2901c78d.js",
    "revision": "411e57b3706c9762f3c51d53b78eeac5"
  },
  {
    "url": "assets/js/7.7aa4a6e3.js",
    "revision": "39e509c90ed4e8043e532e972519b4e4"
  },
  {
    "url": "assets/js/8.6effc218.js",
    "revision": "0c2f396432f1f23f61a428b6b4a6c13a"
  },
  {
    "url": "assets/js/9.c5ba92c7.js",
    "revision": "2c3992ca397ca04bd9be144648499607"
  },
  {
    "url": "assets/js/app.34b2fb62.js",
    "revision": "0bcb50447c84c4386f8d41bd44081ba0"
  },
  {
    "url": "config.html",
    "revision": "5ab509875c994913a8473cf8a7f80dd4"
  },
  {
    "url": "CSS/animation.html",
    "revision": "b0ca413a30f26ada1b5dfa616378a6de"
  },
  {
    "url": "CSS/cursor.html",
    "revision": "905af5c65ea69c48d93fcd4a01208e29"
  },
  {
    "url": "CSS/hollowCard.html",
    "revision": "3bf7f0e81ad40ad4a49f79b830902d01"
  },
  {
    "url": "en/about.html",
    "revision": "f4fe9217176ea72435125eb70de78a79"
  },
  {
    "url": "en/config.html",
    "revision": "53d6d22caa49ed94404f68491cdf86c3"
  },
  {
    "url": "en/CSS/cursor.html",
    "revision": "a097fbf77c67ff4e76c2687ab0607290"
  },
  {
    "url": "en/CSS/hollowCard.html",
    "revision": "091d737ef5085d74b6e2c6987333bdd4"
  },
  {
    "url": "en/CSS/index.html",
    "revision": "b089a899d5dc3865b2ddf6eaeea844a0"
  },
  {
    "url": "en/help.html",
    "revision": "35295f25ca50a2f20adb890f3ef15a8b"
  },
  {
    "url": "en/index.html",
    "revision": "ff5c5ac8ae6bd18decdc30d431258c24"
  },
  {
    "url": "en/PWA/index.html",
    "revision": "f0d5f56f2e9eb6bb1016b5e1a2b7a129"
  },
  {
    "url": "help.html",
    "revision": "5489cae030a19ec6c0ff2f6aef00c781"
  },
  {
    "url": "icons/icon-144.png",
    "revision": "422b38d63bad40b2b6a309bffe7fb89f"
  },
  {
    "url": "icons/icon-152.png",
    "revision": "1be7cb14e815b230d6235f13cacfe4fb"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "4053a534b737892786a1e391ff32b9bc"
  },
  {
    "url": "index.html",
    "revision": "4440eecf01d56580eb0236fef9b9355e"
  },
  {
    "url": "live2d/hijiki/assets/moc/hijiki.2048/texture_00.png",
    "revision": "817ca52e35fef3ef3a452127d1c88f43"
  },
  {
    "url": "PWA/index.html",
    "revision": "4248d528f9ba09bda9b7237a35bd8bdc"
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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");
workbox.precaching.precacheAndRoute([{"revision":null,"url":"assets/index-7b07c0a1.css"},{"revision":null,"url":"assets/index-8ad80384.js"},{"revision":null,"url":"assets/web-5a7db4ea.js"},{"revision":null,"url":"assets/workbox-window.prod.es5-5ffdab76.js"},{"revision":"14140b1af3a074b63c5e7203c0801096","url":"index.html"},{"revision":"e09cce1c9e92592a56326eb439414fa1","url":"limpar.html"},{"revision":"ca9d483a5bef4118041f1c62c0412350","url":"politica-privacidade.html"},{"revision":"ea860dd599cfd6ca04504d84c16e28ba","url":"reset.html"},{"revision":"e1fced517dc455ba1437f240428bd36e","url":"logos/BITCOIN.png"},{"revision":"132fda6cf7cfaf60e1dba43610a0664e","url":"logos/LOGOTIPO X88 WHITE PNG.fw.png"},{"revision":"fec363629da92e7ce67f42ce9105acc9","url":"logos/logoAi.png"},{"revision":"ab02fe33c7e8e039341712f66580097b","url":"logos/logotipo X88 black-white.fw.png"},{"revision":"bfb99a4f813a792ac7e91db6a332ac50","url":"logos/logotipo X88 green.fw.png"},{"revision":"f1be4fd06b449b0c38285d7e8e29fd3a","url":"logos/logotipo X88 white-black.fw.png"},{"revision":"dd738ef4d1d9cbacdf0db5b6c2674b5c","url":"logos/logotipo X88 white-black2.fw.png"},{"revision":"7c2f8275cdca344c92695c66fc47cdea","url":"logos/logotipo X88 white-green.fw.png"},{"revision":"56bccb5981b0d7bf7fb33a40d2e3ef1e","url":"logos/logotipo X88 white-green2.fw.png"},{"revision":"a078e3130522ac6fc597f1054e3b5eb7","url":"logos/logotipo X88-1 black-green.fw.png"},{"revision":"9da0d36c64d8200cceef1fdaec3b6ccb","url":"logos/x88.png"},{"revision":"245e96939d365702ee399d0e27c381c0","url":"manifest.webmanifest"}] || []);
self.addEventListener("activate", (t) => {
  t.waitUntil(
    caches.keys().then((o) => Promise.all(
      o.map((e) => {
      })
    ))
  );
});
self.addEventListener("push", (t) => {
  let o = { title: "Nova Notificação", body: "Você tem uma nova mensagem.", url: "/" };
  if (t.data)
    try {
      o = t.data.json();
    } catch {
      o.body = t.data.text();
    }
  const e = {
    body: o.body,
    icon: "/logos/logotipo X88 green.fw.png",
    // Ícone Grande
    badge: "/logos/logotipo X88 green.fw.png",
    // Ícone Pequeno (Barra de status) - O ideal é ser branco/transparente
    vibrate: [100, 50, 100],
    data: {
      url: o.url || "/"
    },
    actions: [
      { action: "explore", title: "Ver" }
    ]
  };
  t.waitUntil(
    self.registration.showNotification(o.title, e)
  );
});
self.addEventListener("notificationclick", (t) => {
  t.notification.close(), t.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: !0 }).then((o) => {
      for (const e of o)
        if (e.url && "focus" in e)
          return e.focus();
      if (clients.openWindow)
        return clients.openWindow(t.notification.data.url);
    })
  );
});

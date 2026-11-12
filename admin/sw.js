// Service worker ringkas supaya dashboard boleh di-install sebagai app.
// Semua data tetap diambil terus dari internet (tiada cache).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});

const CACHE = 'dianying-cards-v10';
const ASSETS = ['./', './index.html', './additional-book.js', './reading-passages.js', './interview-questions.js', './manifest.webmanifest'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).catch(() => undefined).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => {
    if (new URL(event.request.url).origin === self.location.origin) event.waitUntil(caches.open(CACHE).then(cache => cache.put(event.request, response.clone())).catch(() => undefined));
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || (event.request.mode === 'navigate' ? caches.match('./index.html') : undefined))));
});

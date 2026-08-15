const CACHE = 'dianying-cards-v6';
const ASSETS = ['./', './index.html', './additional-book.js', './reading-passages.js', './manifest.webmanifest'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request))));

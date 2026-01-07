const CACHE_NAME = 'nebula-hub-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/games.html',
    '/proxy.html',
    '/iframe.html',
    '/apps.html',
    '/about.html',
    '/settings.html',
    '/404.html',
    '/storage/css/main.css',
    '/storage/css/games.css',
    '/storage/css/proxy.css',
    '/storage/css/apps.css',
    '/storage/js/main.js',
    '/storage/js/games.js',
    '/storage/js/proxy.js',
    '/storage/js/settings.js',
    '/storage/images/favicon.ico'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

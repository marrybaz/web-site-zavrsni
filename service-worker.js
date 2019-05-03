var CACHE_NAME = 'njivica-cache-v1';
var urlsToCache = [
  '/',
  '/images/dzem.jpg',
  '/images/kupine-slatko.jpg',
  '/css/styles.css',
  '/css/styles-contact.css',
  '/css/styles-products.css',
  '/js/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
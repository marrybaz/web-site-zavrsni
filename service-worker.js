var CACHE_NAME = 'njivica-cache-v1';
var urlsToCache = [
  '/web-site-zavrsni/',
  '/web-site-zavrsni/images/dzem.jpg',
  '/web-site-zavrsni/images/kupine-slatko.jpg',
  '/web-site-zavrsni/css/styles.css',
  '/web-site-zavrsni/css/styles-contact.css',
  '/web-site-zavrsni/css/styles-products.css',
  '/web-site-zavrsni/js/main.js'
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
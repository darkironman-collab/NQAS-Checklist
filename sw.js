const CACHE='aamsc-nqas-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./data/meta.json','./data/checkpoints-01.json','./data/checkpoints-02.json','./data/checkpoints-03.json','./data/checkpoints-04.json','./data/checkpoints-05.json','./data/checkpoints-06.json','./data/checkpoints-07.json','./data/checkpoints-08.json','./data/checkpoints-09.json','./data/checkpoints-10.json','./data/checkpoints-11.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

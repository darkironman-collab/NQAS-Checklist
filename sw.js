const CACHE='aamsc-nqas-v2';
const ASSETS=['./','./index.html','./manifest.webmanifest','./data/meta.json','./data/part-01.txt','./data/part-02.txt','./data/part-03.txt','./data/part-04.txt','./data/part-05.txt','./data/part-06.txt','./data/part-07.txt','./data/part-08.txt','./data/part-09.txt','./data/part-10.txt','./data/part-11.txt','./data/part-12.txt','./data/part-13.txt','./data/part-14.txt','./data/part-15.txt'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

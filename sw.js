// 旧URL用: 古いキャッシュ用のService Workerを自動で解除します
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(self.registration.unregister());});

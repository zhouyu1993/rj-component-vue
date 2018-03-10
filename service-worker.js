// sw version，
var v = '2018010101'
var CACHE_NAME = 'rjcv-sw-v' + v

var urlsToCache = [
  // '/'
]

self.addEventListener('install', function (event) {
  // event.waitUtil 用于在安装成功之前执行一些预装逻辑
  // 但是建议只做一些轻量级和非常重要资源的缓存，减少安装失败的概率
  // 安装成功后 ServiceWorker 状态会从 installing 变为 installed
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('ServiceWorker is installed')
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // 如果 sw 有自己的返回，就直接返回，减少一次 http 请求
      if (response) {
        return response
      }

      // 如果 sw 没有返回，那就得直接请求真实远程服务
      // 拷贝 request
      var fetchRequest = event.request.clone()

      return fetch(fetchRequest)
        .then(function (res) {
          // 请求失败
          if (!res || res.status !== 200) {
            console.log('Not valid:' + event.request.url)
            return res
          }

          // 请求成功，拷贝 response
          var responseToCache = res.clone()
          // 把 response 缓存
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseToCache)
          })

          return res
        })
        .catch(function () {
          console.log('Not matched:' + event.request.url)
        })
    })
  )
})

self.addEventListener('activate', function (event) {
  var cacheWhitelist = [CACHE_NAME]

  event.waitUntil(
    caches.keys().then(function (cacheList) {
      return Promise.all([
        // 更新客户端
        self.clients.claim(),

        // 清理旧版本
        cacheList.map(function (cache) {
          if (cacheWhitelist.indexOf(cache) === -1) {
            return caches.delete(cache)
          }
        })
      ])
    })
  )
})

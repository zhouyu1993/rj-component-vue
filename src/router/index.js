import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

/**
* @param base 默认值 "/"，对应 <base href="/">
* @param mode 默认值 "hash" (浏览器环境) | "abstract" (Node.js 环境)；可配为 "history" (依赖 HTML5 History API 和服务器配置)
* @param routes 路由数组
* @param scrollBehavior [滚动行为](https://router.vuejs.org/zh-cn/advanced/scroll-behavior.html)
*/

const router = new Router({
  base: '/rjcv/', // set base for your project
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    // - only available in html5 history mode
    // - defaults to no scroll behavior
    // - return false to prevent scroll
    if (savedPosition) {
      // savedPosition is only available for popstate navigations.
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
        // new navigation.
        // scroll to anchor by returning the selector
        position.selector = to.hash
      }
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // check if any matched route config has meta that requires scrolling to top
        position.x = 0
        position.y = 0
      }
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return position
    }
  }
})

// 组件加载之前
router.beforeEach((to, from, next) => {
  if (!to.name) {
    next('/error')
  } else {
    next()
  }
})

// 组件解析之后
router.afterEach((to, from) => {
  // 分享
  // 页面标题
  // 埋点
  // etc.
  console.log(`This page is ${to.name}.`)
  switch (to.name) {
    case 'home':
      break
    case 'error':
      break
    default:
  }
})

export default router

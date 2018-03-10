import components from '../../prod/components.json'

const routes = components.map(component => {
  let path = `/${component}`
  let name = component
  let route
  if (component === 'index') {
    path = '/'
    name = 'home'
    route = async () => await import('./home/index.vue')
  } else if (component === 'badgeitem') {
    route = async () => await import('./badge/index.vue')
  } else if (component === 'swiperitem') {
    route = async () => await import('./swiper/index.vue')
  } else if (component === 'tabitem') {
    route = async () => await import('./tab/index.vue')
  } else {
    route = async () => await import(`./${name}/index.vue`)
  }
  return {
    path,
    name,
    component: route
  }
})

export default [
  {
    path: '/error',
    name: 'error',
    component: async () => await import('./error/index.vue'),
    meta: {
      scrollToTop: true
    }
  },
  ...routes
]

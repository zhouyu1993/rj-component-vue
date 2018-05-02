import components from '../../prod/components.json'

const routes = components.map(component => {
  let path = `/${component}`
  let name = component
  let route = async () => await import(`./${component}`)

  if (component === 'index') {
    path = '/'
    name = 'home'
    route = async () => await import('./home')
  } else if (component === 'badgeitem') {
    route = async () => await import('./badge')
  } else if (component === 'swiperitem') {
    route = async () => await import('./swiper')
  } else if (component === 'tabitem') {
    route = async () => await import('./tab')
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

import './src/style.scss'

import toastComponent from './src'

export default function toast (Vue) {
  const Profile = Vue.extend(toastComponent)

  return function (config = {}) {
    if (typeof window === 'undefined') return
    let conf = {}
    if (typeof config === 'object') {
      conf = {
        el: document.createElement('div'),
        propsData: {
          ...config,
        },
      }
    } else {
      conf = {
        el: document.createElement('div'),
        propsData: {
          message: config,
        }
      }
    }
    const instance = new Profile(conf)
    if (instance.visible) return
    instance.close = () => {
      if (instance.visible) {
        setTimeout(() => {
          instance.visible = false
          instance.afterClose()
        }, instance.duration)
        setTimeout(() => {
          document.body.removeChild(instance.$el)
        }, Number(instance.duration) + 1)
      }
    }
    document.body.appendChild(instance.$el)
    instance.visible = true
    if (instance.autoClose) {
      instance.close()
    }
    return new Promise((resolve) => {
      resolve(instance)
    })
  }
}

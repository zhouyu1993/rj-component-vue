import './src/style.scss'

import loadingComponent from '../loading'

export default function loadingmethod (Vue) {
  const Profile = Vue.extend(loadingComponent)

  class Loading {
    constructor (config) {
      let conf = {}
      if (typeof config === 'object') {
        conf = {
          el: document.createElement('div'),
          propsData: {
            ...config,
            visible: false,
          },
        }
      } else {
        conf = {
          el: document.createElement('div'),
          propsData: {
            text: config,
            visible: false
          }
        }
      }
      this.loading = new Profile(conf)
      this.node = config.node
      this.existing = false
    }

    open () {
      if (this.loading.visible) return
      const loading = this.loading
      if (this.node) {
        // this.node.appendChild(loading.$el)
        loading.$el.style.position = 'relative'
        loading.$el.style.height = '100%'
        const children = this.loading.$el.children;
        [...children].forEach((dom) => {
          dom.style.position = 'absolute'
        })
      } else {
        // document.body.appendChild(loading.$el)
      }
      this.existing = true
      this.loading.visible = true
    }

    close () {
      if (!this.existing) return
      this.existing = false
      this.loading.visible = false
      const loading = this.loading
      if (this.node) {
        this.node.removeChild(loading.$el)
      } else {
        document.body.removeChild(loading.$el)
      }
    }

    show () {
      this.loading.visible = true
    }

    hide () {
      this.loading.visible = false
    }
  }

  return function (config = {}) {
    if (typeof window === 'undefined') return
    return new Loading(config)
  }
}

import './src/style.scss'

import msgboxComponent from './src'

export default function msgbox (Vue) {
  const Profile = Vue.extend(msgboxComponent)

  const render = (conf) => {
    const instance = new Profile(conf)
    instance.close = () => {
      document.body.removeChild(instance.$el)
    }
    instance.cancelFun = () => {
      instance.cancel(instance)
    }
    instance.actionFun = () => {
      instance.action(instance)
    }
    document.body.appendChild(instance.$el)
  }

  const Msgbox = function (config = {}) {
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
    render(conf)
  }

  Msgbox.alert = (config = {}) => {
    if (typeof window === 'undefined') return
    let conf = {}
    if (typeof config === 'object') {
      conf = {
        el: document.createElement('div'),
        propsData: {
          ...config,
          type: 'alert',
        },
      }
    } else {
      conf = {
        el: document.createElement('div'),
        propsData: {
          message: config,
          type: 'alert',
        }
      }
    }
    render(conf)
  }

  Msgbox.confirm = (config = {}) => {
    if (typeof window === 'undefined') return
    let conf = {}
    if (typeof config === 'object') {
      conf = {
        el: document.createElement('div'),
        propsData: {
          ...config,
          type: 'confirm',
        },
      }
    } else {
      conf = {
        el: document.createElement('div'),
        propsData: {
          message: config,
          type: 'confirm',
        }
      }
    }
    render(conf)
  }

  Msgbox.prompt = (config = {}) => {
    if (typeof window === 'undefined') return
    let conf = {}
    if (typeof config === 'object') {
      conf = {
        el: document.createElement('div'),
        propsData: {
          ...config,
          type: 'prompt',
        },
      }
    } else {
      conf = {
        el: document.createElement('div'),
        propsData: {
          message: config,
          type: 'prompt',
        }
      }
    }
    render(conf)
  }

  return Msgbox
}

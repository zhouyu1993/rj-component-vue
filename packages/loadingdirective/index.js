import './src/style.scss'

import loadingComponent from '../loading'

function render (el, binding) {
  const loading = el.vm.loading
  if (binding.value) {
    loading.text = el.getAttribute('loading-text') || '加载中'
    if (binding.modifiers.el) {
      loading.$el.style.position = 'relative'
      loading.$el.style.height = '100%'
      const children = loading.$el.children;
      [...children].forEach((dom) => {
        dom.style.position = 'absolute'
      })
    }
    loading.visible = true
  } else {
    loading.visible = false
  }
}

export default function loadingdirective (Vue) {
  const Profile = Vue.extend(loadingComponent)
  return {
    bind (el, binding) {
      el.vm = {
        loading: new Profile({
          el: document.createElement('div'),
          propsData: {
            visible: false,
            showMask: !binding.modifiers.noMask,
            text: el.getAttribute('loading-text') || '加载中',
          },
        })
      }
    },
    inserted (el, binding) {
      const loading = el.vm.loading
      if (binding.modifiers.el) {
        el.appendChild(loading.$el)
      } else {
        document.body.appendChild(loading.$el)
      }
      render(el, binding)
    },
    update (el, binding) {
      render(el, binding)
    },
    unbind (el, binding) {
      const loading = el.vm.loading
      if (binding.modifiers.el) {
        el.removeChild(loading.$el)
      } else {
        document.body.removeChild(loading.$el)
      }
    }
  }
}

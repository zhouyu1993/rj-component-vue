import './src/style.scss'

import inView from 'in-view'
import defaultSrc from '../__assets/img/lazyloading.png'

function render (el) {
  setTimeout(() => {
    if (inView.is(el)) {
      el.getAttribute('lazy-src') && el.setAttribute('src', el.getAttribute('lazy-src'))
      return
    }
    if (el.vm.action) return
    el.vm.action = () => {
      if (inView.is(el)) {
        el.getAttribute('lazy-src') && el.setAttribute('src', el.getAttribute('lazy-src'))
      }
    }
    el.vm.lazyEl.addEventListener('scroll', el.vm.action)
  }, 0)
}

const lazyloading = {
  bind (el) {
    el.vm = {
      src: el.getAttribute('lazy-src'),
      lazyEl: document.querySelector(el.getAttribute('lazy-el')) || window,
      lazyDefaultSrc: el.getAttribute('lazy-defaultSrc'),
      action: null
    }
  },
  inserted (el) {
    el.style['background-image'] = `url(${el.vm.lazyDefaultSrc || defaultSrc})`
    el.style['background-size'] = '100% 100%'
    el.onload = () => {
      el.style['background-image'] = ''
      el.style['background-size'] = ''
      if (el.vm.action) {
        el.vm.lazyEl.removeEventListener('scroll', el.vm.action)
        el.vm.action = null
      }
    }
    render(el)
  },
  update (el) {
    render(el)
  },
  unbind (el) {
    if (el.vm.action) {
      el.vm.lazyEl.removeEventListener('scroll', el.vm.action)
      el.vm.action = null
    }
  }
}

export default lazyloading

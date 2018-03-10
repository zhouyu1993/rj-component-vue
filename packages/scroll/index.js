import './src/style.scss'

const render = (el, binding) => {
  try {
    if (typeof binding.value !== 'function') return
    if (el.vm.direction === 'up') {
      el.vm.scrollHeight = el.vm.isWindow ? document.body.scrollHeight : el.scrollHeight
      el.vm.offsetHeight = el.vm.isWindow ? window.innerHeight || document.body.offsetHeight : el.offsetHeight
      const scrollTop = el.vm.isWindow ? window.scrollY || document.body.scrollTop : el.scrollTop
      const direction = el.vm.scrollTop > scrollTop ? 'down' : 'up'
      el.vm.scrollTop = scrollTop
      if (direction === 'down' && el.vm.scrollTop <= 0) {
        el.vm.state = 'top'
      } else if (direction === 'up' && (el.vm.scrollHeight - el.vm.scrollTop - el.vm.offsetHeight <= Number(el.vm.distance))) {
        el.vm.state = 'bottom'
      } else {
        el.vm.state = 'loading'
      }
    } else if (el.vm.direction === 'left') {
      el.vm.scrollWidth = el.vm.isWindow ? document.body.scrollWidth : el.scrollWidth
      el.vm.offsetWidth = el.vm.isWindow ? window.innerWidth || document.body.offsetWidth : el.offsetWidth
      const scrollLeft = el.vm.isWindow ? window.scrollX || document.body.scrollLeft : el.scrollLeft
      const direction = el.vm.scrollLeft > scrollLeft ? 'right' : 'left'
      el.vm.scrollLeft = scrollLeft
      if (direction === 'right' && el.vm.scrollLeft <= 0) {
        el.vm.state = 'left'
      } else if (direction === 'left' && (el.vm.scrollWidth - el.vm.scrollLeft - el.vm.offsetWidth <= Number(el.vm.distance))) {
        el.vm.state = 'right'
      } else {
        el.vm.state = 'loading'
      }
    }
    binding.value(el.vm.state)
  } catch (e) {
    console.error(e)
  }
}

const scroll = {
  bind (el, binding) {
    const isWindow = !binding.modifiers.el
    el.vm = {
      isWindow,
      $el: isWindow ? window : el,
      direction: el.getAttribute('scroll-direction') || 'up',
      distance: el.getAttribute('scroll-distance') || 40,
      state: '',
      scrollWidth: 0,
      scrollHeight: 0,
      offsetWidth: 0,
      offsetHeight: 0,
      scrollTop: 0,
      scrollLeft: 0,
      action: null
    }
  },
  inserted (el, binding) {
    el.vm.action = () => {
      render(el, binding)
    }
    el.vm.$el.addEventListener('scroll', el.vm.action)
  },
  update (el, binding) {
    if (binding.value !== binding.oldValue) {
      render(el, binding)
    }
  },
  unbind (el, binding) {
    if (!el.vm.action) return
    el.vm.$el.removeEventListener('scroll', el.vm.action)
    el.vm.action = null
  }
}

export default scroll

import './src/style.scss'

import protocol from '../protocol'
import issupportwebp from '../issupportwebp'
import imageoptimizer from '../imageoptimizer'

const xhtml = (el, binding) => {
  try {
    if (typeof window === 'undefined') return
    if (!binding.value) return
    const ele = document.createElement('div')
    if (typeof binding.value === 'string') {
      ele.innerHTML = binding.value
    } else {
      ele.innerHTML = binding.value.xhtml
    }
    [...ele.querySelectorAll('img')].forEach((img) => {
      const src = protocol(img.src)
      if (/image\.myqcloud\.com/i.test(src)) {
        const useWebp = (typeof binding.value.useWebp) === 'undefined' || binding.value.useWebp
        const type = issupportwebp() && useWebp ? 'webp' : binding.value.type
        img.src = imageoptimizer(src, binding.value.width, binding.value.height, type, binding.value.way, binding.value.quality)
      }
    })
    el.innerHTML = ele.innerHTML
  } catch (e) {
    console.error(e)
  }
}

export default xhtml

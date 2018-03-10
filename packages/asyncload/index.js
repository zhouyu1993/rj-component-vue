import './src/style.scss'

/**
 * @name 异步加载js
 * @param  { String } src [js 的 url]
 * @param  { Boolean } crossorigin [是否设置crossorigin=anonymous，默认 true 设置]
 * @return { Promise }
 */

const load = (src, crossorigin) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.defer = true
    crossorigin && script.setAttribute('crossorigin', 'anonymous')
    script.onload = () => {
      window.__rjcv[src] = 'resolve'
      resolve()
    }
    script.onerror = (e) => {
      window.__rjcv[src] = 'reject'
      reject(new Error(`${src}加载错误`))
    }
    document.querySelector('head').appendChild(script)
  })
}

/**
 * @name 异步加载js后执行callback
 * @param  { String } src [js 的 url]
 * @param  { Function } callback [全局变量存在的情况下可执行函数]
 * @param  { Boolean } crossorigin [是否设置crossorigin=anonymous，默认 true 设置]
 */

const asyncload = async (src, callback, crossorigin = true) => {
  try {
    if (typeof window === 'undefined') return
    if (!window.__rjcv) {
      window.__rjcv = {}
    }
    const __rjcv = window.__rjcv
    if (__rjcv[src] === 'resolve') {
      callback && callback()
    } else if (__rjcv[src] === 'pending') {
      let time = 0
      const flag = setInterval(() => {
        time++
        if (__rjcv[src] === 'resolve') {
          clearInterval(flag)
          callback && callback()
        } else if (time > 20) {
          clearInterval(flag)
          window.__rjcv[src] = 'reject'
        }
      }, 300)
    } else if (!__rjcv[src] || __rjcv[src] === 'reject') {
      window.__rjcv[src] = 'pending'
      await load(src, crossorigin)
      callback && callback()
    }
  } catch (e) {
    throw e
  }
}

export default asyncload

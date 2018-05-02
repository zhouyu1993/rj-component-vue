import './src/style.scss'

/**
 * @name  设置页面标题
 * @param  { String } title [页面标题]
 */

const title = (title = '孩子王') => {
  document.title = title
  const ua = navigator.userAgent
  if (!/MicroMessenger/i.test(ua) && /QQ/i.test(ua)) {
    const iframe = document.createElement('iframe')
    iframe.src = 'https://zhouyu1993.github.io/awesome/rjcv/#/static/favicon.ico'
    iframe.style.display = 'none'
    iframe.onload = () => {
      setTimeout(() => {
        document.body.removeChild(iframe)
      }, 0)
    }
    document.body.appendChild(iframe)
  }
}

export default title

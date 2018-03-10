import './src/style.scss'

/**
 * @name 过滤协议
* @param { String } url [资源地址]
 */

const protocol = (url = '') => {
  try {
    if (typeof url !== 'string') return url
    if (!url) return ''
    return url.replace(/^http(s?):/, '')
  } catch (e) {
    console.log(e)
    return url
  }
}

export default protocol

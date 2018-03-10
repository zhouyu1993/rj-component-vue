import './src/style.scss'

/**
 * @name 判断设备是否支持图片webp格式
 */

const issupportwebp = () => {
  try {
    if (typeof window === 'undefined') return false
    return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
  } catch (e) {
    console.log(e)
    return false
  }
}

export default issupportwebp

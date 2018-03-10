import './src/style.scss'

import protocol from '../protocol'
import issupportwebp from '../issupportwebp'
import imageoptimizer from '../imageoptimizer'
import avatar from '../__assets/img/avatar.png'
/**
 * @name 万像优图+过滤协议+webp+默认头像
 * @param  { String } src 图片地址，必须是腾讯云
 * @param  { Number, String } width 图片宽
 * @param  { Number, String } height 图片高
 * @param  { String } type 图片类型
 * @param  { Number, String } way 优化方式。0-5是基本图像处理接口；否则是高级图像处理接口，用字符串表示。具体看文档
 * @param  { Number, String } quality 图片质量。默认 85
 * @param  { Boolean } useWebp 当设备支持webp时是否强制使用webp
 * @param  { String } defaultAvatar 默认头像
 */

const avatarview = (src = '', width, height, type, way = 1, quality = 85, useWebp = true, defaultAvatar) => {
  try {
    if (typeof src !== 'string') return src
    if (!src) return defaultAvatar || avatar
    src = protocol(src)
    type = issupportwebp() && useWebp ? 'webp' : type
    return imageoptimizer(src, width, height, type, way, quality)
  } catch (e) {
    console.log(e)
    return src
  }
}

export default avatarview

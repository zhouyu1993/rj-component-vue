import './src/style.scss'

/**
 * @name [万像优图](https://cloud.tencent.com/document/product/275/3807#8-.E5.9B.BE.E5.83.8F.E5.A4.84.E7.90.86)
 * @param  { String } src 图片地址，必须是腾讯云
 * @param  { Number, String } width 图片宽
 * @param  { Number, String } height 图片高
 * @param  { String } type 图片类型
 * @param  { Number, String } way 优化方式。0-5是基本图像处理接口；否则是高级图像处理接口，用字符串表示。具体看文档
 * @param  { Number, String } quality 图片质量。默认 85
 */

const imageoptimizer = (src = '', width, height, type, way = 1, quality = 85) => {
  try {
    if (typeof src !== 'string') return src
    if (!src) return ''
    if (!/image\.myqcloud\.com/.test(src)) return src
    src = src.split('?')[0]
    if (way >= 0 && way <= 5) {
      src = `${src}?imageView2/${way}`
      if (width) {
        src = `${src}/w/${width}`
      }
      if (height) {
        src = `${src}/h/${height}`
      }
      src = type ? `${src}/q/${quality}/format/${type}` : `${src}/q/${quality}`
    } else {
      src = `${src}?imageMogr2/${way}`
    }
    return src
  } catch (e) {
    console.log(e)
    return src
  }
}

export default imageoptimizer

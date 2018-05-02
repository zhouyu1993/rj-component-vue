# image

title: image
---

## Import

``` js
import image from 'rj-component-vue/lib/image'
import 'rj-component-vue/lib/image/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { image } from 'rj-component-vue'
```

## Register

``` js
Vue.component(image.name, image)
```

## Example

[Example 传送门](//zhouyu1993.github.io/awesome/rjcv/#/image)

``` html
<rjcv-image />
<rjcv-image :lazyUpdate="lazyUpdate" defaultSrc="//gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=8d1fde4a32a85edfee81f671283d6246/314e251f95cad1c896a84b3d793e6709c93d519c.jpg" />
<rjcv-image :src="src" :lazyUpdate="lazyUpdate" width="300" height="150" defaultSrc="//gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=8d1fde4a32a85edfee81f671283d6246/314e251f95cad1c896a84b3d793e6709c93d519c.jpg" />
<rjcv-image :src="src" :lazyUpdate="lazyUpdate" way="2" width="300" height="150" type="jpeg" :useWebp="false" defaultSrc="//gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=8d1fde4a32a85edfee81f671283d6246/314e251f95cad1c896a84b3d793e6709c93d519c.jpg" />
```

``` js
export default {
  data () {
    return {
      lazyUpdate: '',
      src: '',
    }
  },
  created () {
    setTimeout(() => {
      this.src = 'https://activpic-10004025.image.myqcloud.com/d4c0925a-19e5-4169-a387-853367efb7c9'
      this.lazyUpdate = +new Date()
    }, 2000)
  },
}
```

## API

| props | type | description | required | default |
|:---|:---|:---|:---|:---|
| lazyUpdate | Boolean, Number, String | 用于强制触发 `lazyloading` 指令更新 | false | - |
| width | Number, String | 图片宽 | false | - |
| height | Number, String | 图片高 | false | - |
| type | String | 图片类型 | false | - |
| way | Number, String | 优化方式。0-5是基本图像处理接口；否则是高级图像处理接口，用字符串表示。具体看文档 | false | 1 |
| quality | Number, String | 图片质量 | false | 85 |
| useWebp | Boolean | 当设备支持webp时是否强制使用webp | false | true |
| lazyEl | Boolean, String | css 选择器，对应 `lazyloading` 指令的 `lazy-el` | false | false |
| defaultSrc | Boolean, String | `lazyloading` 指令的懒图 src  | false | false |

lazyEl 默认是 false，相当于 `lazyloading` 指令的 `lazy-el`是使用 window

defaultSrc 默认是 false，相当于 `lazyloading` 指令的懒图是默认图

该组件，内含 `imageview` 过滤器 和 `lazyloading` 指令

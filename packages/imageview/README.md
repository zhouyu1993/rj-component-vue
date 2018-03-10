# imageview

title: imageview
---

## Import

``` js
import imageview from 'rj-component-vue/lib/imageview'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { imageview } from 'rj-component-vue'
```

## Register

``` js
Vue.filter('imageview', imageview)
Vue.prototype.$$imageview = imageview
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/imageview)

``` html
<img :src="src1 | imageview(300, 160, 'png', 1)">
<img :src="$$imageview(src2, 300, 160, 'jpeg', 'crop/300x300')">
<h1>下面这张就不是腾讯云图片</h1>
<img :src="src3 | imageview">
```

## API

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| src | String | 图片地址，必须是腾讯云 | true | - |
| width | Number, String | 图片宽 | false | - |
| height | Number, String | 图片高 | false | - |
| type | String | 图片类型 | false | - |
| way | Number, String | 优化方式。0-5是基本图像处理接口；否则是高级图像处理接口，用字符串表示。具体看文档 | false | 1 |
| quality | Number, String | 图片质量 | false | 85 |
| useWebp | Boolean | 当设备支持webp时是否强制使用webp | false | true |

## Learn More

[万像优图](https://cloud.tencent.com/document/product/275/3807#8-.E5.9B.BE.E5.83.8F.E5.A4.84.E7.90.86)

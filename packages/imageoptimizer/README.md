# imageoptimizer

title: imageoptimizer
---

## Import

``` js
import imageoptimizer from 'rj-component-vue/lib/imageoptimizer'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { imageoptimizer } from 'rj-component-vue'
```

## Register

``` js
Vue.filter('imageoptimizer', imageoptimizer)
Vue.prototype.$$imageoptimizer = imageoptimizer
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/imageoptimizer)

``` html
<img :src="src1 | imageoptimizer(300, 160)">
<img :src="src1 | imageoptimizer(300, 160, 'jpeg', 2, 70)">
<img :src="$$imageoptimizer(src2, 300, 160, 'jpeg', 'crop/300x300')">
<h1>下面这张就不是腾讯云图片</h1>
<img :src="src3 | imageoptimizer">
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

## Learn More

[万像优图](https://cloud.tencent.com/document/product/275/3807#8-.E5.9B.BE.E5.83.8F.E5.A4.84.E7.90.86)

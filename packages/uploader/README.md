# uploader

# uploader

title: uploader
---

## Import

``` js
import uploader from 'rj-component-vue/lib/uploader'
import 'rj-component-vue/lib/uploader/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { uploader } from 'rj-component-vue'
```

## Register

``` js
Vue.component(uploader.name, uploader)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/uploader)

``` html
<rjcv-uploader :maxNum="9" @success="success" @fail="fail" />
```

``` js
export default {
  methods: {
    success (res) {
      console.log(res)
    },
    fail (res) {
      this.$$toast(res.message)
    }
  },
}
```

## API

| props | type | description | required | default |
|:---|:---|:---|:--|:---|
| accept | String | 设置可选文件类型, 默认图片 image/*, 其他值如 video/*, audio/* 等, 如果设置多值以逗号分割, 即 image/*, video/* | false | image/*, video/* |
| maxNum | Number | 图片最大上传张数 | false | 3 |
| maxSize | Number | 文件最大值, 默认 20 * 1024 * 1024 B （20 M） | false | 20971520 |
| imageRegExp | String | 正则检测图片类型 | false | bmp|gif|jp(e?)g|png|webp |
| maxWidth | Number | 图片上传，图片最大宽度，如果真实宽度大于这个值，会进行缩小 | false  | 800 |
| quality | Number | 图片上传, 图片压缩质量比 0-1 | false | 0.7 |
| imageUploadUrl | String | 图片上传接口 | false | //ims.cekid.com/pic/file/uploader.do?bucket=wxmallpic |
| timeout | Number | 图片上传超时处理，默认 10000（ms） | false | 10000 |
| pictures | Array | 上传成功的图片信息列表 | false | 空数组 |

**pictures属性代表已上传图片列表，只支持首次赋值**

## Event

* this.$emit('success', 上传成功的图片信息列表)
* this.$emit('fail', 上传失败的图片信息)

**与老版不同**

上传成功，返回的是上传成功的图片信息列表，它是个数组，数组元素不再是老版中单纯的 `图片url`，而是图片整个上传信息

错误处理，提供 `fail` 方法，由外部处理，不再是统一 `toast` 提示错误

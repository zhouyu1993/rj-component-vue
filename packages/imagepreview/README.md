# imagepreview

title: imagepreview
---

## Import

``` js
import imagepreview from 'rj-component-vue/lib/imagepreview'
import 'rj-component-vue/lib/imagepreview/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { imagepreview } from 'rj-component-vue'
```

## Register

``` js
Vue.component(imagepreview.name, imagepreview)
```

## Example

[Example 传送门](//zhouyu1993.github.io/awesome/rjcv/#/imagepreview)

``` html
<rjcv-imagepreview v-model="visible" :visible="visible" :pics="pics" />
```

## API

| props | type | description | required | default |
|:---|:---|:---|:---|:---|
| v-model | Boolean | 控制预览组件显示隐藏 | false | - |
| visible | Boolean | 控制操作表显示隐藏 | false | true |
| transition | Boolean | 是否使用 CSS 过渡类 | false | true |
| appear | Boolean | 是否在初始渲染的过渡 | false | true |
| showMask | Boolean | 是否显示蒙层 | false | true |
| closeOnClick | Boolean | 点击预览组件是否关闭 | false | true |
| continuous | Boolean | 是否可以循环播放  | false | true |
| pics | Array | 图片列表 | true | - |
| showTip | Boolean | 是否显示提示（多少张，当前多少张）| false | true |

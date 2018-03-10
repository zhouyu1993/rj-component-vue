# xhtml

title: xhtml
---

## Import

``` js
import xhtml from 'rj-component-vue/lib/xhtml'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { xhtml } from 'rj-component-vue'
```

## Register

``` js
Vue.directive('xhtml', xhtml)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/xhtml)

``` html
<template>
  <div class="xhtml" v-xhtml="xhtmls1"></div>
  <div class="xhtml" v-xhtml="xhtmls2"></div>
</template>

<script>
  export default {
    data () {
      return {
        xhtmls1: '<p><img src="//activpic-10004025.image.myqcloud.com/98f25978-c602-419b-a174-4509019147e7">图片</p>',
        xhtmls2: {
          xhtml: '你好<p><img src="https://cmspic-10003009.image.myqcloud.com/9d869ad0-64a1-4feb-8a93-bd0a6bd2b741"></p>我也好',
          width: 600,
          height: 0,
          useWebp: false,
          type: 'png',
          way: 2,
          quality: 0.7,
        }
      }
    }
  }
</script>
```

## API

binding.value 接受两类值，字符串或对象

如果是字符串，该值就对应着富文本的 html；富文本中的图片被默认使用 webp 格式

如果是对象，

``` js
{
  xhtml: '', // 富文本的 html
  width: '', // 富文本中的图片宽
  height: '', // 富文本中的图片高
  useWebp: '', // 富文本中的图片是否使用 webp 格式, 不定义的话默认使用 webp 格式
  type: '', // 富文本中的图片格式
  way: '', // 富文本中的图片处理方法
  quality: '', // 富文本中的图片质量比
}
```

**关于富文本中的图片处理，只对 `image.myqcloud.com` 腾讯云图片有效**

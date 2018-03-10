# swiper

title: swiper
---

## Import

``` js
import swiper from 'rj-component-vue/lib/swiper'
import swiperitem from 'rj-component-vue/lib/swiperitem'
import 'rj-component-vue/lib/swiper/style.css'
import 'rj-component-vue/lib/swiperitem/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { swiper, swiperitem } from 'rj-component-vue'
```

## Register

``` js
Vue.component(swiper.name, swiper)
Vue.component(swiperitem.name, swiperitem)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/swiper)

``` html
<rjcv-swiper class="swiper-wraper">
  <rjcv-swiperitem>
    <img src="//activpic-10004025.image.myqcloud.com/d4c0925a-19e5-4169-a387-853367efb7c9">
  </rjcv-swiperitem>
  <rjcv-swiperitem>
    <img src="//activpic-10004025.image.myqcloud.com/4faa4608-b48e-442e-b177-e12defa1846a">
  </rjcv-swiperitem>
</rjcv-swiper>
```

## API

[和mint-ui一样](https://mint-ui.github.io/docs/#/zh-cn2/swipe)

# scroll

title: scroll
---

## Import

``` js
import scroll from 'rj-component-vue/lib/scroll'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { scroll } from 'rj-component-vue'
```

## Register

``` js
Vue.directive('scroll', scroll)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/scroll)

``` html
<div v-scroll="scrollFun"></div>

<div v-scroll.el="scrollFun" scroll-direction="left" scroll-distance="0"></div>
```

``` js

export default {
  methods: {
    scrollFun (state) {
      // scroll-direction="top"，state 可返回 [top, loading, bottom]，分别表示到达上端、处于中间、到达下端

      // scroll-direction="left"，state 可返回 [left, loading, right]，分别表示到达左端、处于中间、到达右端

      switch (state) {
        case 'top':

          break
        case 'bottom':

          break
        case 'left':

          break
        case 'right':

          break
        case 'loading':

          break
      }
    }
  }
}
```

## 指令参数

* binding.modifiers.el 代表监听当前节点的滚动事件，所以要求必须是可滚元素，否则监听 window 下的滚动事件
* binding.value [Function] 触达条件时执行的，接受一个表示状态的字符串 [top, bottom, left, right, loading]
* 属性 scroll-direction [String] (top/left) 设置滚动方向，默认是为上下；设为 left，表示左右
* 属性 scroll-distance 触达位置，默认 40，表示距离[上下左右] 40 以内触发

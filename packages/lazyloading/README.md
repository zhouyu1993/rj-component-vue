# lazyloading

title: lazyloading
---

## Import

``` js
import lazyloading from 'rj-component-vue/lib/lazyloading'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { lazyloading } from 'rj-component-vue'
```

## Register

``` js
Vue.directive('lazyloading', lazyloading)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/lazyloading)

``` html
<image v-lazyloading="update" :lazy-src="src" :lazy-el="el" :lazy-defaultSrc="defaultSrc">
```

v-lazyloading 的实现原理基于 [in-view](https://github.com/camwiegert/in-view)。

当 img 元素创建后，会立刻执行 lazyloading 指令，此时会根据 in-view 去判断 img 是否在可见视图中，在视图中会加载图片，不在视图中会绑定滚动事件。该判断过程具有一次性。

如果在上判断发生时，外层元素处于隐藏状态时，即使 img 位于视图也不会加载图片（隐藏被视为不在视图）。外层元素切换到显示状态时，仍然不会加载图片。此时只能滚动才能加载图片。

所以我们不建议在使用 lazyloading 元素的外层使用类似于 v-show="false" -> v-show="ture" 的操作。

当然，如果非要如此使用，尤其是配合 v-loading，可以利用 `binding.value` 去强制触发 lazyloading 指令更新，或者使 img 重新渲染（导致 v-lazyloading 销毁再重新绑定）。

``` html
<template>
  <div class="wrapper" v-loading.body="loadingIn">
    <div class="content" v-show="loadingOut">
      <img class="rjcv-image" v-lazyloading="update" :lazy-src="src | imageview(width, height, type, way, iswebp)">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loadingIn: true, // 组件一开始会触发 v-loading 的 show 状态
      loadingOut: false, // 组件一开始隐藏真实内容
      update: false, // 用于强制触发 v-lazyloading 更新
      src: '', // 图片
    }
  },
  created () {
    // 请求数据
    setTimeout(() => {
      this.src = 'http://cmspic-10003009.image.myqcloud.com/8c4fe37e-fee0-481d-95ac-980f52487fea'
      // 数据加载成功渲染页面，将真实内容显示
      this.loadingOut = true
      // 将 v-loading 改为 hide 状态
      this.$nextTick(() => {
        this.loadingIn = false
      })
    }, 2000)
    this.fetchData()
  },
}
</script>
```

## API

只作用于 image 元素

* `binding.value` 的值用于强制触发 `lazyloading` 指令更新。非必填。
* `lazy-src` 的值是真实图片的 src，可以配合 `avatarview` 或 `imageview` 过滤器或方法对图片进行优化，当符合加载条件时，替换懒图。必填。
* `lazy-el` 的值是 css 选择器，表示在 `document.querySelector(lazy-el)` 这个 `Node Obejct` 下监听滚动事件，所以要求 `lazy-el` 必须是可滚元素。`lazy-el` 为空或未定义，表示在 `window` 下监听滚动事件。非必填。
* `lazy-defaultSrc` 的值是懒图 src。有默认。非必填。

## Problems

* 对于横行滚动的，或者在 swiper 组件中使用，存在问题

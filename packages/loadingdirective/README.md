# loadingdirective

title: loadingdirective
---

## Import

``` js
import loadingdirective from 'rj-component-vue/lib/loadingdirective'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { loadingdirective } from 'rj-component-vue'
```

## Register

``` js
import Vue from 'vue'
Vue.directive('loadingdirective', loadingdirective(Vue))
```

**注意，这里不再在底层将Vue打包，而是在使用时引入，以减少打包体积，避免重复引入**

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/loadingdirective)

``` html
<div v-loading="visible1" :loading-text="text1"></div>

<div class="el-loading" v-loading.el.noMask="visible2" :loading-text="text2"></div>
```

``` js
export default {
  data () {
    return {
      visible1: false,
      text1: '',
      visible2: false,
      text2: '',
    }
  },
  methods: {
    open1 () {
      this.visible1 = true

      setTimeout(() => {
        this.visible1 = false

        setTimeout(() => {
          this.text1 = '玩命儿赶来~'
          this.visible1 = true

          setTimeout(() => {
            this.visible1 = false
          }, 1000)
        }, 1000)
      }, 1000)
    },
    open2 () {
      this.visible2 = true

      setTimeout(() => {
        this.visible2 = false

        setTimeout(() => {
          this.text2 = '玩命儿赶来~'
          this.visible2 = true

          setTimeout(() => {
            this.visible2 = false
          }, 1000)
        }, 1000)
      }, 1000)
    },
  },
}
```

## API

* `binding.value` 的值用于控制 `loading` 组件的显示与隐藏。
* `binding.modifiers.noMask` 的值控制是否显示蒙层，true则不显示，false则显示。
* `binding.modifiers.el` 的值控制 `loading` 组件显示的位置，true则在绑定指令的当前元素内，false则在body内。
* `loading-text` 的值是 `loading` 组件的 `text`，即提示文字。

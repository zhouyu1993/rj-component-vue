# mask

title: mask
---

## Import

``` js
import mask from 'rj-component-vue/lib/mask'
import 'rj-component-vue/lib/mask/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { mask } from 'rj-component-vue'
```

## Register

``` js
Vue.component(mask.name, mask)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/mask)

``` html
<rjcv-mask v-model="visible1" :visible="visible1" @mask="mask1">
  <div class="core">
    Click me and I will be hidden.
  </div>
</rjcv-mask>
```

``` js
export default {
  data () {
    return {
      visible1: false,
    }
  },
  methods: {
    open1 () {
      this.visible1 = true
    },
    mask1 () {
      this.visible1 = false
    },
  },
}
```

## slot

支持 [slot](//vuejs.org/v2/api/#slot) 自定义内容

``` html
<rjcv-mask>
  <!-- html -->
</rjcv-mask>
```

## Event

| methods | description |
|:---|:---|:---|
| mask | 点击蒙层事件 |

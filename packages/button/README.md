# button

title: button
---

## Import

``` js
import button from 'rj-component-vue/lib/button'
import 'rj-component-vue/lib/button/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { button } from 'rj-component-vue'
```

## Register

``` js
Vue.component(button.name, button)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/button)

``` html
<rjcv-button @click.native="open(1)">🐶点我🐶</rjcv-button>
<rjcv-button style="background-color: blue" @click.native="open(2)">🐶点我🐶</rjcv-button>
```

``` js
export default {
  methods: {
    open (num) {
      alert(num)
    },
  },
}
```

**给 button 组件绑定原生事件，需要使用 `.native` 修饰符**

## slot

支持 [slot](//vuejs.org/v2/api/#slot) 自定义内容

``` html
<rjcv-button>
  <!-- html -->
</rjcv-button>
```

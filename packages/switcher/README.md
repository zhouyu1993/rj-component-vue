# switcher

title: switcher
---

## Import

``` js
import switcher from 'rj-component-vue/lib/switcher'
import 'rj-component-vue/lib/switcher/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { switcher } from 'rj-component-vue'
```

## Register

``` js
Vue.component(switcher.name, switcher)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/switcher)

``` html
<rjcv-switcher v-model="value" :value="value" />
```

``` js
export default {
  data () {
    return {
      value: false,
    }
  },
  watch: {
    value (value) {
      console.log(value)
    },
  },
}
```

``` html
<rjcv-switcher v-model="value" :value="value" :offset="30" />
<rjcv-switcher disabled />
```

## API

| props | type | description | required | default |
|:---|:---|:---|:--|:---|
| v-model | Boolean | 开关的值 | false | - |
| value | Boolean | 开关的值 | false | true |
| disabled | Boolean | 是否禁止选择 | false | false |
| offset | Number | 滑动阙值，大于阙值则触发值的改变 | false | 10 |

因为该组件的基础是 `input`，所以凡是 `input` 具有的属性，都可以直接使用。

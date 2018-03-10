# log

title: log
---

## Import

``` js
import log from 'rj-component-vue/lib/log'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { log } from 'rj-component-vue'
```

## Register

``` js
Vue.prototype.$$log = log
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/log)

``` js
export default {
  methods: {
    open () {
      this.$$log('你点击了按钮', '嗯是的') // 这里只会在 `链接上query带有rj_debug=on或者cookie带有rj_debug=on` 情况下打印内容
    }
  },
}
```

## API

``` js
this.$$log(...args)
```

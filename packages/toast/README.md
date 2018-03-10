# toast

title: toast
---

## Import

``` js
import toast from 'rj-component-vue/lib/toast'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { toast } from 'rj-component-vue'
```

## Register

``` js
import Vue from 'vue'
Vue.prototype.$$toast = toast(Vue)
```

**注意，这里不再在底层将Vue打包，而是在使用时引入，以减少打包体积，避免重复引入**

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/toast)

``` js
export default {
  methods: {
    toast1 () {
      this.$$toast()
    },
    toast2 () {
      this.$$toast({
        message: 'hello world',
        autoClose: false,
        duration: 2000,
      }).then((toast) => {
        // 返回 toast 实例
        // 提供 toast.close() 用于手动关闭
        toast.close()
      })
    },
  },
}
```

## API

``` js
this.$$toast(config)
```

config 参数：

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| transition | Boolean | 是否使用 CSS 过渡类 | false | true |
| appear | Boolean | 是否在初始渲染的过渡 | false | true |
| message | Number, String | 提示文字 | false | 提示 |
| autoClose | Boolean | 是否自动消失 | false | true |
| duration | Number | 消失的延时时间, 单位 ms 毫秒值 | false | 1000 |

**this.$$toast(config) 返回一个 promise 对象**

``` js
this.$$toast(config).then((toast) => {
  // 返回 toast 实例
  // 提供 toast.close() 用于手动关闭
})
```

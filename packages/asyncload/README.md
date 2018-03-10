# asyncload

title: asyncload
---

## Import

``` js
import asyncload from 'rj-component-vue/lib/asyncload'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { asyncload }  from 'rj-component-vue'
```

## Register

``` js
Vue.prototype.$$asyncload = asyncload
```

## Example

[Example 传送门](https://zhouyu1993.github.io/rjcv/#/asyncload)

``` js
async loadjquery () {
  try {
    await this.$$asyncload('//code.jquery.com/jquery-3.2.1.slim.min.js', () => {
      const $ = window.$
      const body = $('body')
      body.html(body.width())
    }, false)
  } catch (e) {
    console.log(e)
  }
}
```

## API

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| src | String | js 的 url | true | - |
| callback | Function | 当 js 加载成功后执行的函数 | false | - |
| crossorigin | Boolean | 是否设置 crossorigin=anonymous | false | true |

asyncload 返回一个 `Promise`

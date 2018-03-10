# fetch

title: fetch
---

## Import

``` js
import fetch from 'rj-component-vue/lib/fetch'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { fetch } from 'rj-component-vue'
```

## Register

``` js
Vue.prototype.$$fetch = fetch
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/fetch)


``` js
methods: {
  async getData () {
    try {
      const json = await this.$$fetch(
        '//recommend.cekid.com/recommendsvc/RmdInHomePage',
        {
          versio: 'v1',
          source: 2,
          pagesize: 10,
          pagenum: 0,
        },
        {
          method: 'GET',
          credentials: 'omit',
        }
      )
      console.log(json)
    } catch (e) {
      console.log(e)
    }
  },
},
```

## API

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| url | String | 接口地址 | true | - |
| data | Object | 接口参数 | false | - |
| options | Object | fetch参数 | false | `fetchOptions` |

`defaultOptions` 关联 `Request` 属性。

``` js
// 设置 headers
const headers = new Headers()
headers.append('Content-Type', 'text/html')

const defaultOptions = {
  method: 'GET', // GET, POST, etc.
  credentials: 'omit', // omit: 从不发送 cookies; include: 总是发送 cookies (即使跨域); same-origin: 只有当 url 与响应脚本同源才发送 cookies
  mode: 'cos', // cos, same-origin, no-cors, etc.
  headers,
  // etc.
}
```

``` js
const body = new Blob()
const defaultOptions = {
  method: 'POST', // GET, POST, etc.
  credentials: 'include', // omit: 从不发送 cookies; include: 总是发送 cookies (即使跨域); same-origin: 只有当 url 与响应脚本同源才发送 cookies
  mode: 'cos', // cos, same-origin, no-cors, etc.
  body, // body 的值可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息
  // etc.
}
```

## Learn More

[Fetch_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
[GlobalFetch](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalFetch)
[Request](https://developer.mozilla.org/zh-CN/docs/Web/API/Request)
[Response](https://developer.mozilla.org/zh-CN/docs/Web/API/Response)
[Headers](https://developer.mozilla.org/zh-CN/docs/Web/API/Headers)

# protocol

title: protocol
---

## Import

``` js
import protocol from 'rj-component-vue/lib/protocol'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { protocol } from 'rj-component-vue'
```

## Register

``` js
Vue.filter('protocol', protocol)
Vue.prototype.$$protocol = protocol
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/protocol)

``` html
<div>
  原来带有http-----{{url1 | protocol}}

  <br>

  原来带有https-----{{$$protocol(url2)}}
</div>
```

## API

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| url | String | 资源地址 | true | - |

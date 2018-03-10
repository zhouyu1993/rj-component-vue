# card

title: card
---

## Import

``` js
import card from 'rj-component-vue/lib/card'
import 'rj-component-vue/lib/card/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { card } from 'rj-component-vue'
```

## Register

``` js
Vue.component(card.name, card)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/card)

``` html
<rjcv-card :src="src" :lazyUpdate="lazyUpdate" title="大家一起来提前预约孩子王的私人订制2018台历宝宝（黑金免费）" :desc="`$${+new Date()}`" price="¥10或1000积分">
</rjcv-card>

<rjcv-card :src="src" :lazyUpdate="lazyUpdate">
  <div class="title" slot="title">大家一起来提前预约孩子王的私人订制2018台历宝宝（黑金免费）</div>
  <div class="time" slot="desc">活动时间: {{+new Date()}}</div>
  <div class="price" slot="price">&yen;10或1000积分</div>
</rjcv-card>
```

``` js
export default {
  data () {
    return {
      lazyUpdate: '',
      src: '',
    }
  },
  created () {
    setTimeout(() => {
      this.src = 'https://activpic-10004025.image.myqcloud.com/d4c0925a-19e5-4169-a387-853367efb7c9'
      this.lazyUpdate = +new Date()
    }, 500)
  },
}
```

## API

| props | type | description | required | default |
|:---|:---|:---|:---|:---|
| lazyUpdate | Boolean, Number, String | 用于强制触发 `lazyloading` 指令更新 | false | 空字符 |
| src | String | 图片地址 | true | 空字符 |
| width | Number, String | 图片宽 | false | 空字符 |
| height | Number, String | 图片高 | false | 空字符 |
| type | String | 图片类型 | false | 空字符 |
| way | Number, String | 优化方式。0-5是基本图像处理接口；否则是高级图像处理接口，用字符串表示。具体看文档 | false | 1 |
| quality | Number, String | 图片质量 | false | 85 |
| useWebp | Boolean | 当设备支持webp时是否强制使用webp | false | true |
| lazyEl | Boolean, String | css 选择器，对应 `lazyloading` 指令的 `lazy-el` | false | false |
| defaultSrc | Boolean, String | `lazyloading` 指令的懒图 src  | false | false |
| title | String | 标题  | false | 商品名称 |
| desc | String | 描述 | false | 商品描述 |
| price | String | 价格 | false | 商品价格 |

lazyEl 默认是 false，相当于 `lazyloading` 指令的 `lazy-el`是使用 window

defaultSrc 默认是 false，相当于 `lazyloading` 指令的懒图是默认图

该组件，内含 `image` 组件

## slot

支持 [slot](//vuejs.org/v2/api/#slot) 自定义内容

* slot="title"
* slot="desc"
* slot="price"

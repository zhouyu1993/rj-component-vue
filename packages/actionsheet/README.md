# actionsheet

title: actionsheet
---

## Import

``` js
import actionsheet from 'rj-component-vue/lib/actionsheet'
import 'rj-component-vue/lib/actionsheet/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { actionsheet } from 'rj-component-vue'
```

## Register

``` js
Vue.component(actionsheet.name, actionsheet)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/actionsheet)

``` html
<rjcv-actionsheet v-model="visible" :visible="visible" :actions="actions"></rjcv-actionsheet>

<rjcv-actionsheet v-model="visible" :visible="visible">
  <rjcv-button class="rjcv-actionsheet-btn">支付宝支付</rjcv-button>
  <rjcv-button class="rjcv-actionsheet-btn">微信支付</rjcv-button>
</rjcv-actionsheet>
```

## API

| props | type | description | required | default | optional |
|:---|:---|:---|:---|:---|:---|
| v-model | Boolean | 控制操作表显示隐藏 | false | - | - |
| visible | Boolean | 控制操作表显示隐藏 | false | true | true/false |
| transition | Boolean | 是否使用 CSS 过渡类 | false | true | true/false |
| appear | Boolean | 是否在初始渲染的过渡 | false | true | true/false |
| showMask | Boolean | 是否显示蒙层 | false | true | true/false |
| disableScroll | Boolean | 是否禁止滚动传播 | false | true | true/false |
| closeOnClickMask | Boolean | 点击蒙层是否关闭操作表 | false | true | true/false |
| title | Number, String | 操作表名称 | false | 空字符串 | - |
| actions | Array | 操作选型 | false | 空数组 | - |
| actionText | String | 底部按钮 | false | 取消 | - |
| closeOnClickAction | Boolean | 点击底部按钮是否关闭操作表 | false | true | true/false |


actions 的数据格式

``` js
const actions = [
  {
    text: '',
    callback (value) {
      console.log(value)
    },
    other: '',
  },
]
```

| 属性 | 说明 |
|:---|:---|
| text | 文本 |
| callback | 点击时的回调。该回调接受一个参数，参数为点击的当前 action 对象 |
| other | 其他自定义属性 |

## slot

支持 [slot](//vuejs.org/v2/api/#slot) 自定义内容

``` html
<rjcv-actionsheet>
  <!-- html -->
</rjcv-actionsheet>
```

但有个前提，当 `actions` 不传默认为 `[]` 时，`slot` 才起作用

## Event

| methods | description |
|:---|:---|
| mask | 当 closeOnClickMask 为 false 时，可用这个设置点击蒙层事件 |
| action | 当 closeOnClickAction 为 false 时，可用这个设置点击底部按钮事件 |

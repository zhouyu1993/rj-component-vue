# popup

title: popup
---

## Import

``` js
import popup from 'rj-component-vue/lib/popup'
import 'rj-component-vue/lib/popup/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { popup } from 'rj-component-vue'
```

## Register

``` js
Vue.component(popup.name, popup)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/popup)

``` html
<rjcv-popup v-model="visible2" :visible="visible2" position="bottom" @mask="mask">
  bottom
</rjcv-popup>
```

## API

| props | type | description | required | default |
|:---|:---|:---|:--|:---|
| v-model | Boolean | 控制模态弹窗显示隐藏 | false | - |
| visible | Boolean | 控制模态弹窗显示隐藏 | false | true |
| position | String | 显示方式 | false | '' |
| transition | Boolean | 是否使用 CSS 过渡类 | false | true |
| appear | Boolean | 是否在初始渲染的过渡 | false | true |
| showMask | Boolean | 是否显示蒙层 | false | true |
| disableScroll | Boolean | 是否禁止滚动传播 | false | false |

position 的可选值有：空字符串 '', top, right, bottom, left。代表中间淡入，上方滑入，右侧滑入，底部滑入，左侧滑入

## Event

| methods | description |
|:---|:---|:---|
| mask | 点击蒙层事件 |

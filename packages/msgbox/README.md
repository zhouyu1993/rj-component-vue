# msgbox

title: msgbox
---

## Import

``` js
import msgbox from 'rj-component-vue/lib/msgbox'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { msgbox } from 'rj-component-vue'
```

## Register

``` js
import Vue from 'vue'
Vue.prototype.$$msgbox = msgbox(Vue)
```

**注意，这里不再在底层将Vue打包，而是在使用时引入，以减少打包体积，避免重复引入**

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/msgbox)

``` html
<rjcv-button @click.native="open1">显示msgbox</rjcv-button>
```

``` js
export default {
  open1 () {
    this.$$msgbox({
      message: '啦啦啦',
    })
  },
  open1 () {
    this.$$msgbox('啦啦啦')
  },
  open2 () {
    this.$$msgbox.alert()
  },
  open3 () {
    this.$$msgbox.confirm()
  },
  open4 () {
    this.$$msgbox.prompt()
  },
}
```

## API

`msgbox` 可接受两种类型，对象或字符串

### 作为对象

参数如下

| props | type | description | required | default | optional |
|:---|:---|:---|:---|:---|:---|
| showMask | Boolean | 是否显示蒙层 | false | true | true/false |
| disableScroll | Boolean | 是否禁止滚动传播 | false | true | true/false |
| title | String | 标题 | false | 提示 | - |
| message | String | 信息 | false | 操作成功 | - |
| type | String | 类型 | false | alert | alert/confirm/prompt |
| value | String | prompt 输入框值 | false | 空字符串 | - |
| placeholder | String | prompt 输入框提示信息 | false | 请输入 | - |
| errorMsg | String | prompt 输入错误时提示信息 | false | 空字符串 | - |
| cancelButtonText | String | 取消按钮文本 | false | 取消 | - |
| confirmButtonText | String | 确定按钮文本 | false | 确定 | - |
| autoClose | Boolean | 点击确定按钮后是否自动关闭 | false | true | true/false |
| closeOnClickMask | Boolean | 点击蒙层后是否自动关闭 | false | true | true/false |
| cancel | Function | 取消回调, 接受 msgbox 实例 | false | - | - |
| action | Function | 确定回调, 接受 msgbox 实例 |false | - | - |

* `msgbox.alert` 的 `type` 强制设为 `alert`
* `msgbox.confirm` 的 `type` 强制设为 `confirm`
* `msgbox.prompt` 的 `type` 强制设为 `prompt`

### 作为字符串

直接作为 `message` 参数

``` js
msgbox.prompt({
  autoClose: false, // 不可自动关闭
  action (msgbox) {
    msgbox.close() // 提供 msgbox.close() 进行手动关闭
  },
})
```

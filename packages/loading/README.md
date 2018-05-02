# loading

title: loading
---

## Import

``` js
import loading from 'rj-component-vue/lib/loading'
import 'rj-component-vue/lib/loading/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { loading } from 'rj-component-vue'
```

## Register

``` js
Vue.component(loading.name, loading)
```

## Example

[Example 传送门](//zhouyu1993.github.io/awesome/rjcv/#/loading)

``` html
<rjcv-loading :visible="visible" text="玩命儿赶来~" />
```

## API

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| visible | Boolean | 控制加载界面显示隐藏 | false | true |
| transition | Boolean | 是否使用 CSS 过渡类 | false | true |
| appear | Boolean | 是否在初始渲染的过渡 | false | true |
| showMask | Boolean | 是否显示蒙层 | false | true |
| disableScroll | Boolean | 是否禁止滚动传播 | false | true |
| text | Number, String | 加载界面提示文字 | false | 加载中 |

## slot

支持 [slot](//vuejs.org/v2/api/#slot) 自定义内容

``` html
<rjcv-loading :visible="visible3" text="玩命儿赶来~">
  🐎小马儿🐎
</rjcv-loading>
```

会将默认的  `loadingicon` 组件替换

# tabitem

title: tabitem
---

## Import

``` js
import tab from 'rj-component-vue/lib/tab'
import tabitem from 'rj-component-vue/lib/tabitem'
import 'rj-component-vue/lib/tab/style.css'
import 'rj-component-vue/lib/tabitem/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { tab, tabitem } from 'rj-component-vue'
```

## Register

``` js
Vue.component(tab.name, tab)
Vue.component(tabitem.name, tabitem)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/#/tab)

``` html
<rjcv-tab @tabClick="handleTabClick">
  <rjcv-tabitem v-for="(value, index) in tabs" :key="index" :index="index" :name="value.iconName" :info="value.info" :text="value.text" :disabled="index === 1">
  </rjcv-tabitem>
</rjcv-tab>

<rjcv-tab :defaultIndex="2" @tabClick="handleTabClick">
  <rjcv-tabitem v-for="(value, index) in tabs" :key="index" :index="index">
    <span>{{value.text}}</span>
  </rjcv-tabitem>
</rjcv-tab>
```

`rjcv-tabitem` 必须作为 `rjcv-tab` 的 slot 组件使用

`rjcv-tabitem` 内部也支持 `slot`, 会覆盖默认的形式

## API

| props | type | description | required | default |
|:---|:---|:---|:--|:---|
| iconName | String | 图标名称 | false | - |
| index | Number | 序列 | true | - |
| info | Number, String | 数显/提示 | false | 空字符串 |
| text | Number, String | 文本 | true | 空字符串 |
| disabled | Boolean | 是否禁止选择 | false | false |

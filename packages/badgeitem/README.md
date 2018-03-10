# badgeitem

title: badgeitem
---

## Import

``` js
import badge from 'rj-component-vue/lib/badge'
import badgeitem from 'rj-component-vue/lib/badgeitem'
import 'rj-component-vue/lib/badge/style.css'
import 'rj-component-vue/lib/badgeitem/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { badge, badgeitem } from 'rj-component-vue'
```

## Register

``` js
Vue.component(badge.name, badge)
Vue.component(badgeitem.name, badgeitem)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/badge)

``` html
<rjcv-badge @badgeClick="handleBadgeClick">
  <rjcv-badgeitem v-for="(value, index) in badges" :key="index" :index="index" :name="value.iconName" :info="value.info" :text="value.text" :disabled="index === 1">
  </rjcv-badgeitem>
</rjcv-badge>

<rjcv-badge style="width: 200px" :defaultIndex="2" @badgeClick="handleBadgeClick">
  <a v-for="(value, index) in badges" :key="index" :href="value.href">
    <rjcv-badgeitem :index="index">
      <span>{{value.text}}</span>
    </rjcv-badgeitem>
  </a>
</rjcv-badge>
```

`rjcv-badgeitem` 必须作为 `rjcv-badge` 的 slot 组件使用

`rjcv-badgeitem` 内部也支持 `slot`, 会覆盖默认的形式

## API

| props | type | description | required | default |
|:---|:---|:---|:--|:---|
| iconName | String | 图标名称 | false | - |
| index | Number | 序列 | true | - |
| info | Number, String | 数显/提示 | false | 空字符串 |
| text | Number, String | 文本 | true | 空字符串 |
| disabled | Boolean | 是否禁止选择 | false | false |

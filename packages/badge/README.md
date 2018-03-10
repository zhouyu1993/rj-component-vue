# badge

title: badge
---

详细见 `badgeitem`

## API

| props | type | description | required | default |
|:---|:---|:---|:--|:---|
| defaultIndex | Number | 默认显示的序列 | false | 0 |

## Event

| methods | description |
|:---|:---|
| badgeClick | 点击 badgeitem 的回调，参数 index 为 点击的 badgeitem 的索引 |

``` html
<badge :defaultIndex="1" @badgeClick="handleBadgeClick" />
```

``` js
export default {
  methods: {
    handleBadgeClick (index) {
      console.log(index) // 索引
    },
  },
}
```

父级可用 tab 组件的 `setHover` 方法来改变 hover 值

``` html
<badge ref="badge" @tabClick="handleTabClick" />
```

``` js
this.$refs.badge.setHover(2)
```

# tab

title: tab
---

详细见 `tabitem`

## API

| props | type | description | required | default |
|:---|:---|:---|:--|:---|
| defaultIndex | Number | 默认显示的序列 | false | 0 |
| sticky | Boolean | 页面滚动到tab的时候，是否固定位置 | false | false |
| scroll | Boolean | 当 tabitem 很多，是否舍弃 flex:1 的等分布局而启用 scrol-x | false | false |
| useStyle | Number | 选择样式，目前有 0, 1 两种 | false | 0 |

* 如果启用 sticky = true: 对于旧浏览器（不支持 position: sticky）的，开发者需要自己用 css+js 实现；如果支持，可以修改 css（top/bottom）来改变固定的位置。

* 如果启用scroll = true: 如果要实现点击后当前item可滑动定位，开发者需要自己用 css+js 实现


## Event

| methods | description |
|:---|:---|
| tabClick | 点击 tabitem 的回调，参数 index 为 点击的 tabitem 的索引 |

``` html
<tab @tabClick="handleTabClick" />
```

``` js
export default {
  methods: {
    handleTabClick (index) {
      console.log(index) // 索引
    },
  },
}
```

父级可用 tab 组件的 `setHover` 方法来改变 hover 值

``` html
<tab ref="tab" @tabClick="handleTabClick" />
```

``` js
this.$refs.tab.setHover(2)
```

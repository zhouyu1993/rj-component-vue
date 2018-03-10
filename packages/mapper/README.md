# mapper

title: mapper
---

## Import

``` js
import mapper from 'rj-component-vue/lib/mapper'
import 'rj-component-vue/lib/mapper/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { mapper } from 'rj-component-vue'
```

## Register

``` js
Vue.component(mapper.name, mapper)
```

## Example

[Example 传送门](http://zhouyu1993.github.io/rjcv/mapper)

### 根据 ip 地址定位并绘制地图

``` html
<rjcv-mapper @success="success" @fail="fail" />
```

``` js
export default {
  methods: {
    success (value) {
      console.log(value) // 成功的信息 obj
    },
    fail (value) {
      console.log(value) // 失败的信息 obj
    },
  },
}
```

### 根据经纬度绘制地图

``` html
<rjcv-mapper :center="center" @success="success" @fail="fail" />
```

``` js
export default {
  data () {
    return {
      center: [118.80511, 32.03988], // 经纬度
      mark: true // 标记中心点
    }
  },
  methods: {
    success (value) {
      console.log(value) // 成功的信息 obj
    },
    fail (value) {
      console.log(value) // 失败的信息 obj
    },
  },
}
```

### 根据经纬度绘制地图，然后可根据 ip 地址定位并进行导航

``` html
<rjcv-mapper :center="center" :address="address" @success="success" @fail="fail" />
```

``` js
export default {
  data () {
    return {
      center: [118.80511, 32.03988], // 经纬度
      address: '目的地位置描述'
    }
  },
  methods: {
    success (value) {
      console.log(value) // 成功的信息 obj
    },
    fail (value) {
      console.log(value) // 失败的信息 obj
    },
  },
}
```

## API

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| visible | Boolean | 控制地图显示隐藏 | false | true |
| transition | Boolean | 是否使用 CSS 过渡类 | false | true |
| appear | Boolean | 是否在初始渲染的过渡 | false | true |
| address | String | 中心点位置信息描述，非空时显示并提供导航功能 | false | - |
| mark | Boolean | 是否标记中心点 | false | false |
| markIcon | String | 标记图标的url | false | 默认图标  |
| zoom | Number | 地图倍数 | false | 14 |
| center | Array | 经纬度，地图中心点 | false | - |

`center` 是否为明确的经纬度，决定了进行定位（无经纬度）还是进行绘图（有经纬度）。默认无。

`address` 是否为空，决定了是否提供导航功能。前提是 `center` 有明确的经纬度。默认无。

## Event

* this.$emit('success', 成功的信息)
* this.$emit('fail', 失败信息)

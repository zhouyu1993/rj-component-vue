# map

title: map
---

## Import

``` js
import map from 'rj-component-vue/lib/map'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { map } from 'rj-component-vue'
```

## Register

``` js
Vue.prototype.$$map = map
```

## Example

[Example 传送门](//zhouyu1993.github.io/awesome/rjcv/#/map)

``` html
<rjcv-button @click.native="open1">open</rjcv-button>
<div id="map1">因为有id，所以会在这绘制地图</div>

<rjcv-button @click.native="open2">open</rjcv-button>

<rjcv-button @click.native="open3">open</rjcv-button>
<div id="map3"></div>

<rjcv-button @click.native="open4">open</rjcv-button>
<div id="map4"></div>
```

``` js
export default {
  methods: {
    async open1 () {
      try {
        const view = await this.$$map.mapping({
          id: 'map1'
        })
        console.log(view)
      } catch (e) {
        console.log(e)
      }
    },
    async open2 () {
      try {
        const res = await this.$$map.getPosition()
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },
    async open3 () {
      try {
        const res = await this.$$map.getPosition({
          id: 'map3'
        })
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },
    async open4 () {
      try {
        await this.$$map.mapping({
          id: 'map4',
          dragEnable: false,
          zoomEnable: false,
          center: [118.80511, 32.03988],
          mark: true
        })
      } catch (e) {
        console.log(e)
      }
    },
  }
}
```

## API

### methods

| 方法 | 说明 |
|:---|:---|
| map | 异步加载高德地图SDK |
| map.mapping | 根据经纬度作图 |
| map.route | 导航 |
| map.getPosition | 定位 |

都返回 `Promise`

#### map

``` js
/**
 * @name 异步加载高德地图SDK
 * @param  { Function } callback [全局变量 AMap 存在的情况下可执行函数]
 * @param  { String } url [高德地图sdk.js链接]
 */

async map () {
  try {
    await this.$$map(() => {
      console.log(window.AMap)
      // 参考高德地图SDK，我们还可以做位置搜索功能，导航功能等
    })
  } catch (e) {
    console.log(e)
  }
}
```

#### map.mapping

``` js
/**
 * @name 根据经纬度作图
 * @param  { Object } option [地图参数]
 * @return  { Promise } [地图实例]
 * @param  { String } url [高德地图sdk.js链接]
 */

async mapping () {
  try {
    const view = await this.$$map.mapping({
      id: 'map'
    })
    console.log(view)
  } catch (e) {
    console.log(e)
  }
}
```

option 的属性有：

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| id | String | id 选择器，在该元素下作图，为空或该 id 选择器不存在则不作图 | false | - |
| center | Array | 经纬度，地图中心点 | true | [118.81541, 32.03998] |
| resizeEnable | Boolean | 是否可以根据屏幕尺寸变化自动调整地图 | false | true |
| dragEnable | Boolean | 是否可拖动 | false | true |
| zoomEnable | Boolean | 是否可缩放 | false | true |
| zoom | Number | 地图倍数 | false | 14 |

其他参数见 [高德地图 Map 类](//lbs.amap.com/api/javascript-api/reference/map)

#### map.route

``` js
/**
 * @name 导航
 * @param  { Object } view [地图实例]
 * @param  { String } plugin [导航方式 'Driving' 驾车, 'Transfer' 公交, 'Walking' 步行]
 * @param  { Object } option [导航参数 origin 起点, destination 终点]
 */

async route () {
  try {
    const view = await this.$$map.mapping({
      id: 'map5',
      dragEnable: false,
      zoomEnable: false,
      center: [118.888231, 32.013308],
      mark: true
    })
    await this.$$map.route(view, 'Driving', {
      origin: [118.81541, 32.03998],
      destination: [118.888231, 32.013308]
    })
  } catch (e) {
    console.log(e)
  }
}
```

plugin 代表导航方式，有 'Driving' 驾车, 'Transfer' 公交, 'Walking' 步行

option 的属性有：

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| origin | Array | 起点坐标 | true | [118.81541, 32.03998] |
| destination | Array | 终点坐标 | true | [118.888231, 32.013308] |

其他参数见 [高德地图路径规划](http://lbs.amap.com/api/javascript-api/reference/route-search)

#### map.getPosition

``` js
/**
 * @name 定位
 * @param  { Object } option [定位参数]
 * @param  { String } url [高德地图sdk.js链接]
 * @return  { Promise } [定位信息]
 */

async getPosition () {
  try {
    const res = await this.$$map.getPosition()
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}
```

option 的属性有：

| params | type | description | required | default |
|:---|:---|:---|:---|:---|
| id | String | id 选择器，在该元素下作图，为空或该 id 选择器不存在则不作图 | false | - |
| view | Object | 已经构建的地图实例，由 mapping 得到 | false | - |
| mark | Boolean | 是否标记中心点 | false | false |
| markIcon | String | 标记图标的url | false | 默认图标  |

view 优先级别大于 id。如果 view 存在则直接在 view 实例上进行定位。

其他参数见 [高德地图 AMap.Geolocation 插件](http://lbs.amap.com/api/javascript-api/reference/location#m_AMap.Geolocation)

[全国区域编码(http://webapi.amap.com/ui/1.0/ui/geo/DistrictExplorer/assets/d_v1/country_tree.json)

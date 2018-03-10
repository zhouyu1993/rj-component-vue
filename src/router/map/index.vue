<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.绘制地图" tip="option中的id决定是否绘制地图">
      <rjcv-button @click.native="open1">open</rjcv-button>
      <div id="map1">因为有id，所以会在这绘制地图</div>
    </demo-example>
    <demo-example title="2.定位" tip="这里只定位，控制台打出结果，不会绘制地图">
      <rjcv-button @click.native="open2">open</rjcv-button>
    </demo-example>
    <demo-example title="3.定位并绘制地图">
      <rjcv-button @click.native="open3">open</rjcv-button>
      <div id="map3"></div>
    </demo-example>
    <demo-example title="4.根据经纬度绘制地图">
      <rjcv-button @click.native="open4">open</rjcv-button>
      <div id="map4"></div>
    </demo-example>
    <demo-example title="5.根据经纬度绘制地图，并导航">
      <rjcv-button @click.native="open5">open</rjcv-button>
      <div id="map5"></div>
    </demo-example>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Example from '@/components/Example'

export default {
  components: {
    'demo-example': Example,
    'demo-header': Header,
  },
  data () {
    return {
    }
  },
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
          center: [118.888231, 32.013308],
          mark: true
        })
      } catch (e) {
        console.log(e)
      }
    },
    async open5 () {
      try {
        const view = await this.$$map.mapping({
          id: 'map5',
          dragEnable: false,
          zoomEnable: false,
          center: [118.888231, 32.013308],
          mark: true
        })
        setTimeout(async () => {
          try {
            await this.$$map.route(view, 'Driving', {
              origin: [118.81541, 32.03998],
              destination: [118.888231, 32.013308]
            })
          } catch (e) {
            console.log(e)
          }
        }, 2000)
      } catch (e) {
        console.log(e)
      }
    },
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
#map1, #map3, #map4 {
  height: 100px;
}

#map5 {
  height: 500px;
}
</style>

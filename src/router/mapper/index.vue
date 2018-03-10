<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.定位并绘制地图" tip="">
      <rjcv-button @click.native="map(1)">open</rjcv-button>
      <rjcv-mapper v-if="visible1" @success="success" @fail="fail" />
    </demo-example>
    <demo-example title="2.根据经纬度绘制地图" tip="">
      <rjcv-button @click.native="map(2)">open</rjcv-button>
      <rjcv-mapper v-if="visible2" @success="success" @fail="fail" :center="[118.888231, 32.013308]" />
    </demo-example>
    <demo-example title="3.根据经纬度绘制地图，然后进行导航" tip="">
      <rjcv-button @click.native="map(3)">open</rjcv-button>
      <rjcv-mapper v-if="visible3" @success="success" @fail="fail" :center="[118.888231, 32.013308]" address="假如目的地是这里" :mark="false" />
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
      visible1: false,
      visible2: false,
      visible3: false,
    }
  },
  methods: {
    success (value) {
      console.log(value) // 成功的信息 obj
    },
    fail (value) {
      console.log(value) // 失败的信息 obj
    },
    map (id) {
      this[`visible${id}`] = true
    },
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
</style>

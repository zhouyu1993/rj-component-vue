<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.显示mask；需自定义动画或使用popup" tip="可设置点击蒙层事件">
      <rjcv-button @click.native="open1">🐶点我🐶</rjcv-button>
      <rjcv-mask v-model="visible1" :visible="visible1" @mask="mask1">
        <div class="core">
          Click me and I will be hidden.
        </div>
      </rjcv-mask>
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
  mounted () {
    this.$$showPage()
  },
  data () {
    return {
      visible1: false,
    }
  },
  methods: {
    open1 () {
      this.visible1 = true
    },
    mask1 () {
      this.visible1 = false
    },
  },
}
</script>

<style lang="scss" scoped>
.core {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #fff;
}
</style>

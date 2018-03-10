<template>
  <div class="container">
    <demo-header />
    <demo-example title="icon 列表展示" tip="如需自定义，font-family不可为rjcv-iconfont">
      <rjcv-icon name="camera" style="color: red" />
      <br>
      <rjcv-icon name="close" />
      <br>
      <rjcv-icon name="daohang" />
      <br>
      <rjcv-icon name="flower" />
      <br>
      <rjcv-icon name="kefu" />
      <br>
      <rjcv-icon name="lajitong" />
      <br>
      <rjcv-icon name="search" />
      <br>
      <rjcv-icon name="starempty" />
      <br>
      <rjcv-icon name="starfull" />
      <br>
      <rjcv-icon name="store" />
      <br>
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
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.显示loading" tip="">
      <rjcv-button @click.native="open1">显示loading</rjcv-button>
      <rjcv-loading :visible="visible1" />
    </demo-example>
    <demo-example title="2.显示loading并模拟关闭" tip="2秒后关闭">
      <rjcv-button @click.native="open2">显示loading</rjcv-button>
      <rjcv-loading :visible="visible2" text="玩命儿赶来~" />
    </demo-example>
    <demo-example title="3.自定义图标" tip="">
      <rjcv-button @click.native="open3">显示loading</rjcv-button>
      <rjcv-loading :visible="visible3" text="玩命儿赶来~">
        🐎小马儿🐎
      </rjcv-loading>
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
    open1 () {
      this.visible1 = true
    },
    open2 () {
      this.visible2 = true
      setTimeout(() => {
        this.visible2 = false
      }, 2000)
    },
    open3 () {
      this.visible3 = true
    },
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';
@import '../../assets/css/vars';
</style>

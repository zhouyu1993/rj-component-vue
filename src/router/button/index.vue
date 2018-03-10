<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.按钮，自定义样式" tip="事件需加.native修饰符">
      <rjcv-button @click.native="open1">🐶点我🐶</rjcv-button>
      <rjcv-button style="background-color: blue" @click.native="open2">🐶点我🐶</rjcv-button>
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
    open1 () {
      alert(1)
    },
    open2 () {
      alert(2)
    },
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
</style>

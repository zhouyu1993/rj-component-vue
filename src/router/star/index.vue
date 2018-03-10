<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.基础用法" tip="默认五星，点击可选">
      <rjcv-star v-model="score" :score="score" />
    </demo-example>
    <demo-example title="2.纯展示" tip="不可选">
      <rjcv-star :score="8" :canClick="false" />
      <rjcv-star :score="5" :canClick="false" />
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
      score: 10,
    }
  },
  watch: {
    score (score) {
      console.log(score)
    }
  },
  methods: {
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

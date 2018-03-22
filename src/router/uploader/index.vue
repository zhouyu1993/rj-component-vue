<template>
  <div class="container">
    <demo-header />
    <demo-example title="基本用法" tip="">
      <rjcv-uploader :pictures="pictures" :maxNum="9" @success="success" @fail="fail" />
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
      pictures: [],
    }
  },
  methods: {
    success (res) {
      console.log(res)
    },
    fail (res) {
      this.$$toast(res.message)
    }
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

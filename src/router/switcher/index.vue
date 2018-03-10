<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.默认参数" tip="默认是关的">
      <rjcv-switcher v-model="value1" :value="value1" />
    </demo-example>
    <demo-example title="2.把默认改成开的" tip="">
      <rjcv-switcher v-model="value2" :value="value2" />
    </demo-example>
    <demo-example title="3.阙值30比较大" tip="">
      <rjcv-switcher v-model="value3" :value="value3" :offset="30" />
    </demo-example>
    <demo-example title="4.禁止选择" tip="">
      <rjcv-switcher :disabled="true" />
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
      value1: false,
      value2: true,
      value3: false,
    }
  },
  watch: {
    value1 (value) {
      console.log(value)
    },
    value2 (value) {
      console.log(value)
    },
    value3 (value) {
      console.log(value)
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

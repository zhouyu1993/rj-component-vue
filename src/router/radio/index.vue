<template>
  <div class="container">
    <demo-header />
    <demo-example title="" tip="">
      <rjcv-radio :options="option" v-model="selected" />
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
      selected: '',
      option: ['男', '女', '其他']
    }
  },
  watch: {
    selected (v) {
      console.log(v)
    },
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

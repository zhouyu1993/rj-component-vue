<template>
  <div class="container">
    <demo-header />
    <demo-example title="" tip="">
      <rjcv-checklist :options="options" displayId="code" displayValue="name" v-model="selectOption" />
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
      selectOption: [],
      options: [{ 'code': 302, 'name': '高中' }, { 'code': 303, 'name': '大专' }, { 'code': 304, 'name': '本科' }, { 'code': 305, 'name': '硕士' }]
    }
  },
  watch: {
    selectOption (v) {
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

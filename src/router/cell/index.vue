<template>
  <div class="container">
    <demo-header />
    <demo-example title="" tip="">
      <rjcv-cell />
    </demo-example>
    <demo-example title="" tip="">
      <rjcv-cell ltIconName="store" title="南京建邺万达店" label="孩子王第一家门店" value="内容" rtIconName="daohang" />
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

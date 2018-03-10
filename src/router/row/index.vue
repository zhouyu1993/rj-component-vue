<template>
  <div class="container">
    <demo-header />
    <demo-example title="" tip="">
      <rjcv-row>
        <rjcv-col>
          1
        </rjcv-col>
        <rjcv-col>
          2
        </rjcv-col>
        <rjcv-col>
          3
        </rjcv-col>
      </rjcv-row>
      <rjcv-row>
        <rjcv-col flex="1">
          1
        </rjcv-col>
        <rjcv-col flex="1">
          2
        </rjcv-col>
        <rjcv-col flex="1">
          3
        </rjcv-col>
      </rjcv-row>
      <rjcv-row>
        <rjcv-col flex="1">
          1
        </rjcv-col>
        <rjcv-col flex="2">
          2
        </rjcv-col>
        <rjcv-col flex="3">
          3
        </rjcv-col>
      </rjcv-row>
      <rjcv-row>
        <rjcv-col class="left-200">
          1
        </rjcv-col>
        <rjcv-col flex="1">
          2
        </rjcv-col>
      </rjcv-row>
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

.left-200 {
  width: rem(200);
}
</style>

<!-- https://github.com/ElemeFE/mint-ui/blob/master/packages/swipe/src/swipe-item.vue -->
<template>
  <div class="rjcv-swiperitem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rjcv-swiperitem',
  mounted () {
    this.$parent && this.$parent.swipeItemCreated(this)
  },
  destroyed () {
    this.$parent && this.$parent.swipeItemDestroyed(this)
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

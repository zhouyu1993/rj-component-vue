<template>
  <div class="rjcv-col" :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rjcv-col',
  props: {
    flex: {
      type: [Number, String],
      default: 0,
    }
  },
  computed: {
    className () {
      return `rjcv-col-${this.flex}`
    }
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

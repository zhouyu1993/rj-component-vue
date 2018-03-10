<template>
  <div class="rjcv-tab" :class="{ 'rjcv-tab-sticky': sticky, 'rjcv-tab-scroll': scroll }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rjcv-tab',
  props: {
    defaultIndex: {
      type: Number,
      default: 0,
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    scroll: {
      type: Boolean,
      default: false,
    },
    useStyle: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {
      hover: this.defaultIndex,
      style: `rjcv-tabitem-style-${this.useStyle}`,
    }
  },
  methods: {
    setHover (value) {
      this.hover = value
      this.$emit('tabClick', value)
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

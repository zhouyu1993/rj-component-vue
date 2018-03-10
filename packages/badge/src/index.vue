<template>
  <div class="rjcv-badge">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rjcv-badge',
  props: {
    defaultIndex: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {
      hover: this.defaultIndex,
    }
  },
  methods: {
    setHover (value) {
      this.hover = value
      this.$emit('badgeClick', value)
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

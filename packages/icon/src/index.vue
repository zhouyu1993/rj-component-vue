<template>
  <i class='rjcv-icon' :class='`icon-${name}`'></i>
</template>

<script>
export default {
  name: 'rjcv-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

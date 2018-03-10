<template>
  <div class="rjcv-mask" v-show="visible" @click="mask">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rjcv-mask',
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    mask () {
      this.$emit('mask')
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

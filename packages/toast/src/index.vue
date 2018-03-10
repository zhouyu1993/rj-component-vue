<template>
  <transition name="rjcv-fade" :css="transition" :appear="appear">
    <div v-show="visible" v-html="message" class="rjcv-toast"></div>
  </transition>
</template>

<script>
export default {
  name: 'rjcv-toast',
  props: {
    transition: {
      type: Boolean,
      default: true,
    },
    appear: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      default: false
    },
    message: {
      type: [Number, String],
      default: '提示'
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 1000
    },
    afterClose: {
      type: Function,
      default () {},
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

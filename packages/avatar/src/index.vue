<template>
  <img class="rjcv-avatar" v-lazyloading="lazyUpdate" :lazy-src="src | avatarview(width, height, type, way, quality, useWebp, defaultAvatar)" :lazy-el="lazyEl" :lazy-defaultSrc="defaultSrc">
</template>

<script>
import avatarview from '../../avatarview'
import lazyloading from '../../lazyloading'

export default {
  name: 'rjcv-avatar',
  props: {
    lazyUpdate: {
      type: [Boolean, Number, String],
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    width: {
      type: [Number, String],
      default: '',
    },
    height: {
      type: [Number, String],
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    way: {
      type: [Number, String],
      default: 1,
    },
    quality: {
      type: [Number, String],
      default: 85,
    },
    useWebp: {
      type: Boolean,
      default: true,
    },
    defaultAvatar: {
      type: String,
      default: '',
    },
    lazyEl: {
      type: [Boolean, String],
      default: false,
    },
    defaultSrc: {
      type: [Boolean, String],
      default: false,
    },
  },
  filters: {
    avatarview
  },
  directives: {
    lazyloading
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

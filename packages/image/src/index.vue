<template>
  <img class="rjcv-image" v-lazyloading="lazyUpdate" :lazy-src="src | imageview(width, height, type, way, quality, useWebp)" :lazy-el="lazyEl" :lazy-defaultSrc="defaultSrc">
</template>

<script>
import imageview from '../../imageview'
import lazyloading from '../../lazyloading'

export default {
  name: 'rjcv-image',
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
    imageview
  },
  directives: {
    lazyloading
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

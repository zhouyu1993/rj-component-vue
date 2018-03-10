<template>
  <div class="rjcv-card">
    <div class="rjcv-card-image">
      <rjcv-image :lazyUpdate="lazyUpdate" :src="src || product" :width="width" :height="height" :type="type" :way="way" :quality="quality" :useWebp="useWebp" :lazyEl="lazyEl" :defaultSrc="defaultSrc" />
    </div>
    <div class="rjcv-card-detail">
      <div class="rjcv-card-title" v-if="title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="rjcv-card-desc" v-if="desc">
        <slot name="desc">{{desc}}</slot>
      </div>
      <div class="rjcv-card-price" v-if="price">
        <slot name="price">{{price}}</slot>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../../image'

export default {
  name: 'rjcv-card',
  components: {
    'rjcv-image': image,
  },
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
    title: {
      type: String,
      default: '商品名称',
    },
    desc: {
      type: String,
      default: '商品描述',
    },
    price: {
      type: String,
      default: '商品价格',
    },
  },
  data () {
    return {
      product: require('../../__assets/img/product.png')
    }
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

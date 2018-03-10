<template>
  <rjcv-popup class="rjcv-imagepreview" v-model="visible" :visible="visible" :transition="transition" :appear="appear" :showMask="showMask" :closeOnClickMask="false" @click.native="close">
    <rjcv-swiper class="rjcv-imagepreview-swiper" :auto="0" :continuous="continuous" :showIndicators="false" :prevent="false" :stopPropagation="false" @change="handleChange">
      <rjcv-swiperitem v-for="(pic, index) in pics" :key="index">
        <img :src="pic">
      </rjcv-swiperitem>
    </rjcv-swiper>
    <div class="rjcv-imagepreview-tip" v-if="showTip">{{hover}}/{{pics.length}}</div>
  </rjcv-popup>
</template>

<script>
import popup from '../../popup'
import swiper from '../../swiper'
import swiperitem from '../../swiperitem'

export default {
  name: 'rjcv-imagepreview',
  components: {
    'rjcv-popup': popup,
    'rjcv-swiper': swiper,
    'rjcv-swiperitem': swiperitem,
  },
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    transition: {
      type: Boolean,
      default: true,
    },
    appear: {
      type: Boolean,
      default: true,
    },
    showMask: {
      type: Boolean,
      default: true,
    },
    closeOnClick: {
      type: Boolean,
      default: true,
    },
    continuous: {
      type: Boolean,
      default: true
    },
    pics: {
      type: Array,
      default () {
        return []
      }
    },
    showTip: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
      hover: 1,
    }
  },
  methods: {
    close () {
      if (this.closeOnClick) {
        this.$emit('input', false)
      }
    },
    handleChange (index) {
      this.hover = index + 1
    },
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

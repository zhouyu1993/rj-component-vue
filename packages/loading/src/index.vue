<template>
  <rjcv-popup class="rjcv-loading" v-model="visible" :visible="visible" :transition="transition" :appear="appear" :showMask="showMask" :disableScroll="disableScroll">
    <slot>
      <rjcv-loadingicon />
    </slot>
    <div class="rjcv-loading-text" v-if="text">{{text}}</div>
  </rjcv-popup>
</template>

<script>
import loadingicon from '../../loadingicon'
import popup from '../../popup'

export default {
  name: 'rjcv-loading',
  components: {
    'rjcv-loadingicon': loadingicon,
    'rjcv-popup': popup,
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
    disableScroll: {
      type: Boolean,
      default: true,
    },
    text: {
      type: [Number, String],
      default: '加载中'
    },
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

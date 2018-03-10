<template>
  <div class="rjcv-popup" @touchmove="touchmove">
    <template v-if="position">
      <transition :name="`rjcv-${name}`" :css="transition" :appear="appear">
        <div :class="`rjcv-popup-${position}`" v-show="visible">
          <slot></slot>
        </div>
      </transition>
      <template v-if="position === 'bottom' && showMask">
        <transition name="rjcv-fade" :css="transition" :appear="appear">
          <rjcv-mask @mask="mask" v-show="visible" />
        </transition>
      </template>
    </template>
    <template v-else-if="showMask">
      <transition :name="`rjcv-${name}`" :css="transition" :appear="appear">
        <div class="rjcv-popup-wrapper">
          <rjcv-mask @mask="mask" v-show="visible"></rjcv-mask>
          <div class="rjcv-popup-core" v-show="visible">
            <slot></slot>
          </div>
        </div>
      </transition>
    </template>
    <template v-else>
      <transition :name="`rjcv-${name}`" :css="transition" :appear="appear">
        <div class="rjcv-popup-core rjcv-popup-nomask" v-show="visible">
          <slot></slot>
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
import mask from '../../mask'

export default {
  name: 'rjcv-popup',
  components: {
    'rjcv-mask': mask,
  },
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: '', // top, right, bottom, left
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
      default: false,
    },
  },
  computed: {
    name () {
      return this.position || 'fade'
    },
  },
  methods: {
    mask () {
      this.$emit('mask')
    },
    touchmove (e) {
      if (this.disableScroll) {
        e.stopPropagation()
        e.preventDefault()
      }
    },
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

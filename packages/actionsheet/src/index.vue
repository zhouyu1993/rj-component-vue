<template>
  <rjcv-popup class="rjcv-actionsheet" v-model="visible" :visible="visible" position="bottom" :transition="transition" :appear="appear" :showMask="showMask" :disableScroll="disableScroll" @mask="mask">
    <div class="rjcv-actionsheet-title" v-if="title">{{title}}</div>
    <slot>
      <rjcv-button v-for="(value, index) in actions" :key="index" class="rjcv-actionsheet-btn" @click.native="choose(value)">{{value.text}}</rjcv-button>
    </slot>
    <rjcv-button class="rjcv-actionsheet-action" v-if="actionText" @click.native="action">{{actionText}}</rjcv-button>
  </rjcv-popup>
</template>

<script>
import button from '../../button'
import popup from '../../popup'

export default {
  name: 'rjcv-actionsheet',
  components: {
    'rjcv-button': button,
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
    closeOnClickMask: {
      type: Boolean,
      default: true,
    },
    title: {
      type: [Number, String],
      default: ''
    },
    actions: {
      type: Array,
      default: () => []
    },
    actionText: {
      type: String,
      default: '取消'
    },
    closeOnClickAction: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    mask () {
      if (!this.closeOnClickMask) {
        this.$emit('mask')
      } else {
        this.$emit('input', false)
      }
    },
    action () {
      if (!this.closeOnClickAction) {
        this.$emit('action')
      } else {
        this.$emit('input', false)
      }
    },
    choose (value) {
      if (value.closeOnClick) {
        this.$emit('input', false)
      }
      if (typeof value.callback === 'function') {
        value.callback(value)
      }
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

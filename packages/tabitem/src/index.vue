<template>
  <div class="rjcv-tabitem" :class="[$parent.style, { 'rjcv-tabitem-hover': $parent.hover == index, 'rjcv-tabitem-disabled': disabled }]" @click="tabClick">
    <slot>
      <div class="rjcv-tabitem-icon" v-if="iconName">
        <rjcv-icon :name="iconName" />
      </div>
      <span v-if="info && info != 0" class="rjcv-tabitem-info">{{`${info > 99 ? '99+' : info}`}}</span>
      <span class="rjcv-tabitem-text" v-if="text">{{text}}</span>
    </slot>
  </div>
</template>

<script>
import icon from '../../icon'

export default {
  name: 'rjcv-tabitem',
  components: {
    'rjcv-icon': icon,
  },
  props: {
    iconName: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      required: true,
    },
    info: {
      type: [Number, String],
      default: '',
    },
    text: {
      type: [Number, String],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    tabClick () {
      if (this.disabled) return
      this.$parent.setHover(this.index)
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

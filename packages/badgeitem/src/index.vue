<template>
  <div class="rjcv-badgeitem" :class="{ 'rjcv-badgeitem-hover': $parent.hover == index, 'rjcv-tabitem-disabled': disabled }" @click="badgeClick">
    <slot>
      <div class="rjcv-badgeitem-icon" v-if="iconName">
        <rjcv-icon :name="iconName" />
      </div>
      <span v-if="info && info != 0" class="rjcv-badgeitem-info">{{`${info > 99 ? '99+' : info}`}}</span>
      <span class="rjcv-badgeitem-text">{{text}}</span>
    </slot>
  </div>
</template>

<script>
import icon from '../../icon'

export default {
  name: 'rjcv-badgeitem',
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
    badgeClick () {
      if (this.disabled) return
      this.$parent.setHover(this.index)
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

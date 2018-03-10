<template>
  <div v-if="inner" v-scroll.el="onScroll" :scroll-direction="direction" :scroll-distance="threshold" class="rjcv-pagelist">
    <slot></slot>
    <slot v-if="loading" name="loading"></slot>
    <slot v-if="bottom" name="bottom"></slot>
  </div>
  <div v-else v-scroll="onScroll" :scroll-direction="direction" :scroll-distance="threshold" class="rjcv-pagelist">
    <slot></slot>
    <slot v-if="loading" name="loading"></slot>
    <slot v-if="bottom" name="bottom"></slot>
  </div>
</template>

<script>
import scroll from '../../scroll'

const scrollPosMap = {
  up: 'bottom',
  left: 'right'
}
export default {
  name: 'rjcv-pagelist',
  props: {
    /**
     * 滚动到底时触发的方法
     */
    next: {
      type: Function,
      required: true
    },
    /**
     *
     */
    direction: {
      validator: function (value) {
        return ['up', 'left'].indexOf(value) >= 0
      },
      default: 'up'
    },
    /**
     * 是否会容器内滚动
     */
    inner: {
      type: Boolean,
      default: false
    },
    /**
     * 触发加载下一页的阈值
     */
    threshold: {
      type: Number,
      default: 40
    },
    /**
     * 是否加载中
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * 是否到底
     */
    bottom: {
      type: Boolean,
      default: false
    }
  },
  directives: {
    scroll
  },
  methods: {
    onScroll (state) {
      if (!this.bottom && state === scrollPosMap[this.direction]) {
        this.next()
      }
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

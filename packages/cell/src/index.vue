<template>
  <div class="rjcv-cell" @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag">
    <div class="rjcv-cell-left" ref="left">
      <slot name="cell-swiper">
        <div class="rjcv-cell-button" @click="ltButton.callback" v-if="ltButton.text">{{ltButton.text}}</div>
      </slot>
    </div>
    <div class="rjcv-cell-wrapper" ref="wrap">
      <div class="rjcv-cell-lt">
        <slot name="lt-icon">
          <rjcv-icon v-if="ltIconName" :name="ltIconName" />
        </slot>
        <div class="rjcv-cell-lt-desc">
          <slot name="title">
            <div class="rjcv-cell-title" v-if="title">{{title}}</div>
          </slot>
          <slot name="label">
            <div class="rjcv-cell-label" v-if="label">{{label}}</div>
          </slot>
        </div>
      </div>
      <div class="rjcv-cell-rt">
        <slot name="value">
          <div class="rjcv-cell-value" v-if="value">{{value}}</div>
        </slot>
        <slot name="rt-icon">
          <rjcv-icon v-if="rtIconName" :name="rtIconName" @tabRtIcon="tabRtIcon" />
        </slot>
      </div>
    </div>
    <div class="rjcv-cell-right" ref="right">
      <slot name="cell-swiper">
        <div class="rjcv-cell-button" @click="rtButton.callback" v-if="rtButton.text">{{rtButton.text}}</div>
      </slot>
    </div>
  </div>
</template>

<script>
import { once } from '../../__assets/js/dom'
import icon from '../../icon'

export default {
  name: 'rjcv-cell',
  components: {
    'rjcv-icon': icon,
  },
  props: {
    title: {
      type: String,
      default: '标题',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '内容',
    },
    ltIconName: {
      type: String,
      default: '',
    },
    rtIconName: {
      type: String,
      default: '',
    },
    ltButton: {
      type: Object,
      default () {
        return {
          text: '选择',
          callback () {},
        }
      }
    },
    rtButton: {
      type: Object,
      default () {
        return {
          text: '删除',
          callback () {},
        }
      }
    },
  },
  data () {
    return {
      direction: '',
      dragging: false,
      opened: false,
      offsetLeft: 0,
      start: {
        x: 0,
        y: 0
      },
      swipeLeave: false,
      swiping: false,
    }
  },
  methods: {
    tabRtIcon () {
      this.$emit('tabRtIcon')
    },
    translate3d (offset) {
      return `translate3d(${offset}px, 0, 0)`
    },
    setAnimations (val) {
      this.wrap.style.transitionDuration = val
      this.left.style.transitionDuration = val
      this.right.style.transitionDuration = val
    },
    startDrag (evt) {
      const e = evt.changedTouches ? evt.changedTouches[0] : evt
      this.dragging = true
      this.start.x = e.pageX
      this.start.y = e.pageY
      this.direction = ''
    },
    swipeMove (offset = 0) {
      this.wrap.style.webkitTransform = this.translate3d(offset)
      this.left.style.webkitTransform = this.translate3d(-this.leftWidth + offset)
      this.right.style.webkitTransform = this.translate3d(this.rightWidth + offset)
      offset && (this.swiping = true)
    },
    onDrag (evt) {
      if (this.opened) {
        if (!this.swiping) {
          this.swipeMove(0)
          this.setAnimations('')
        }
        this.opened = false
        return
      }
      if (!this.dragging) return
      let swiping
      const e = evt.changedTouches ? evt.changedTouches[0] : evt
      const offsetTop = e.pageY - this.start.y
      const offsetLeft = this.offsetLeft = e.pageX - this.start.x
      const y = Math.abs(offsetTop)
      const x = Math.abs(offsetLeft)
      this.setAnimations('0ms')

      if (this.direction === '') {
        this.direction = x > y ? 'horizonal' : 'vertical'
      }
      if (this.direction === 'horizonal') {
        evt.preventDefault()
        evt.stopPropagation()
        swiping = !(x < 5 || (x >= 5 && y >= x * 1.73))
        if (!swiping) return
        if ((offsetLeft < 0 && -offsetLeft > this.rightWidth) || (offsetLeft > 0 && offsetLeft > this.leftWidth) || (offsetLeft > 0 && !this.leftWidth) || (offsetLeft < 0 && !this.rightWidth)) {
        } else {
          this.swipeMove(offsetLeft)
        }
      }
    },
    resetSwipeStatus () {
      this.swiping = false
      this.opened = true
      this.offsetLeft = 0
    },
    swipeLeaveTransition (direction) {
      setTimeout(() => {
        this.swipeLeave = true
        // left
        if (direction > 0 && -this.offsetLeft > this.rightWidth * 0.4) {
          this.swipeMove(-this.rightWidth)
          this.resetSwipeStatus()
          return
        // right
        } else if (direction < 0 && this.offsetLeft > this.leftWidth * 0.4) {
          this.swipeMove(this.leftWidth)
          this.resetSwipeStatus()
          return
        }
        this.swipeMove(0)
        once(this.wrap, 'webkitTransitionEnd', _ => {
          this.wrap.style.webkitTransform = ''
          this.right.style.webkitTransform = this.rightDefaultTransform
          this.left.style.webkitTransform = this.leftDefaultTransform
          this.swipeLeave = false
          this.swiping = false
        })
      }, 0)
    },
    endDrag () {
      this.direction = ''
      this.setAnimations('')
      if (!this.swiping) return
      this.swipeLeaveTransition(this.offsetLeft > 0 ? -1 : 1)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.wrap = this.$refs.wrap
      this.left = this.$refs.left
      this.right = this.$refs.right
      this.leftWidth = this.left.offsetWidth
      this.rightWidth = this.right.offsetWidth
      this.leftDefaultTransform = this.translate3d(-this.leftWidth - 1)
      this.rightDefaultTransform = this.translate3d(this.rightWidth)
      this.left.style.webkitTransform = this.leftDefaultTransform
      this.right.style.webkitTransform = this.rightDefaultTransform
    })
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

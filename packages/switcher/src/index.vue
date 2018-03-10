<template>
  <input class="rjcv-switcher" type="checkbox" v-model="switcherValue" :disabled="disabled" @touchstart="switcherStart" @touchmove="switcherMove">
</template>

<script>
export default {
  name: 'rjcv-switcher',
  props: {
    value: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number,
      default: 10
    },
  },
  data () {
    return {
      switcherValue: this.value,
      pageX: 0
    }
  },
  watch: {
    switcherValue (value) {
      this.$emit('input', value)
    }
  },
  methods: {
    switcherStart (e) {
      if (this.disabled) return
      const touches = e.touches[0]
      this.pageX = touches.pageX
    },
    switcherMove (e) {
      if (this.disabled) return
      const touches = e.touches[0]
      const x = touches.pageX - this.pageX
      if (Math.abs(x) > this.offset) {
        this.switcherValue = x > 0
      }
    }
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

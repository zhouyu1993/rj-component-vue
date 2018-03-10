<template>
  <div class="rjcv-radiolist" @change="$emit('change', currentValue)">
    <label v-for="option in options"
    class="rjcv-radio"
    :class="[
      { 'is-disabled': option.disabled },
      { 'is-checked': currentValue === option.label || currentValue === option }
    ]"
    role="radio"
    @keydown.space.stop.prevent="currentValue = option.label">
    <span class="rjcv-radio__input"
      :class="{
        'is-disabled': option.disabled,
        'is-checked': currentValue === option.label || currentValue === option
      }">
      <span class="rjcv-radio__inner"></span>
      <input
        class="rjcv-radio__original"
        :value="option.value || option"
        type="radio"
        v-model="currentValue"
        @focus="focus = true"
        @blur="focus = false"
        :disabled="option.disabled"
        tabindex="-1"
      >
    </span>
    <span class="rjcv-radio__label" v-text="option.label || option"></span>
  </label>
  </div>
</template>

<script>
export default {
  name: 'rjcv-radio',
  props: {
    options: {
      type: Array,
      required: true
    },
    value: String
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    isChecked (op) {
      return this.currentValue === op.label || this.currentValue === op
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

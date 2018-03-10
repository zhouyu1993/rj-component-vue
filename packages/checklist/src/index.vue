<template>
  <div @change="$emit('change', currentValue)">
    <label class="rjcv-checkbox" v-for="(option, index) in options" :class="[
        { 'is-disabled': option.disabled },
        { 'is-checked': isChecked(option) }
      ]"
      role="checkbox"
    >
      <span class="rjcv-checkbox__input"
        :class="{
          'is-disabled': option.disabled,
          'is-checked': isChecked(option),
          'is-focus': focus
        }"
      >
        <span class="rjcv-checkbox__inner"></span>
        <input
          class="rjcv-checkbox__original"
          type="checkbox"
          :disabled="option.disabled"
          :value="option[displayId] || option"
          :name="option.name || ''"
          v-model="currentValue"
          @change="handleChange"
          @focus="focus = true"
          @blur="focus = false">
      </span>
      <span class="rjcv-checkbox__label" v-text="option[displayValue] || option">
      </span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'rjcv-checklist',
    props: {
      value: {
        type: Array,
        default () {
          return []
        }
      },
      displayId: {
        type: String,
        default: 'value'
      },
      displayValue: {
        type: String,
        default: 'label'
      },
      options: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        selfModel: false,
        focus: false,
        currentValue: this.value
      }
    },
    computed: {
      model: {
        get () {
          return this.value !== undefined
            ? this.value : this.selfModel
        },
        set (val) {
          this.$emit('input', val)
          this.selfModel = val
        }
      },
      store () {
        return this.value
      },
    },
    watch: {
      value (val) {
        this.currentValue = val
      },
      currentValue (val) {
        // if (this.limit) val.pop();
        this.$emit('input', val)
      }
    },
    methods: {
      isChecked (op) {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model
        } else if (Array.isArray(this.model)) {
          // return true
          return this.model.indexOf(op[this.displayId]) > -1 || this.model.indexOf(op) > -1
        }
      },
      // addToStore() {
      //   if (
      //     Array.isArray(this.model) &&
      //     this.model.indexOf(this.label) === -1
      //   ) {
      //     this.model.push(this.label);
      //   } else {
      //     this.model = true;
      //   }
      // },
      handleChange (ev) {
        // if (this.isLimitExceeded) return;
        let value = ev.target.checked
        this.$emit('change', value, ev)
      }
    },
    // created() {
    //   this.checked && this.addToStore()
    // },
  }
</script>

<style lang="scss">
@import './style.scss';
</style>

<template>
  <rjcv-popup class="rjcv-msgbox" :transition="false" :appear="false" :showMask="showMask" :disableScroll="disableScroll" @mask="mask">
    <div class="rjcv-msgbox-content">
      <div v-html="title" class="rjcv-msgbox-title"></div>
      <div v-if="message" v-html="message" class="rjcv-msgbox-message" :class="{ 'rjcv-msgbox-tm': !title }"></div>
      <div v-if="type === 'prompt'" class="rjcv-msgbox-input">
        <input v-model="value" type="text" :placeholder="placeholder" class="rjcv-msgbox-inputEl">
        <div v-show="errorMsg" class="rjcv-msgbox-errormsg">{{errorMsg}}</div>
      </div>
    </div>
    <div class="rjcv-msgbox-btns">
      <rjcv-button v-if="type === 'confirm' || type === 'prompt'" class="rjcv-msgbox-cancel" @click.native="handleAction('cancel')">{{cancelButtonText}}</rjcv-button>
      <rjcv-button class="rjcv-msgbox-confirm" @click.native="handleAction('action')">{{confirmButtonText}}</rjcv-button>
    </div>
  </rjcv-popup>
</template>

<script>
import button from '../../button'
import popup from '../../popup'

export default {
  name: 'rjcv-msgbox',
  components: {
    'rjcv-button': button,
    'rjcv-popup': popup,
  },
  props: {
    showMask: {
      type: Boolean,
      default: true,
    },
    disableScroll: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '提示'
    },
    message: {
      type: String,
      default: '操作成功'
    },
    type: {
      type: String,
      default: 'alert'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    errorMsg: {
      type: String,
      default: ''
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    cancel: {
      type: Function,
      default () {}
    },
    action: {
      type: Function,
      default () {}
    },
  },
  methods: {
    handleAction (type) {
      if (type === 'cancel') {
        this.close()
        this.cancelFun()
      } else {
        this.autoClose && this.close()
        this.actionFun()
      }
    },
    mask () {
      this.closeOnClickMask && this.close()
      this.cancelFun()
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

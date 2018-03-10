<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.默认参数" tip="alert">
      <rjcv-button @click.native="open1">显示msgbox</rjcv-button>
    </demo-example>
    <demo-example title="2.修改参数" tip="去除蒙层">
      <rjcv-button @click.native="open2">显示msgbox</rjcv-button>
    </demo-example>
    <demo-example title="3.修改参数" tip="title、message、confirmButtonText、actionFun">
      <rjcv-button @click.native="open3">显示msgbox</rjcv-button>
    </demo-example>
    <demo-example title="4.修改参数" tip="autoClose和closeOnClickMask设为false，点击按钮和蒙层不自动关闭">
      <rjcv-button @click.native="open4">显示msgbox</rjcv-button>
    </demo-example>
    <demo-example title="5.msgbox.alert" tip="msgbox.alert(字符串)">
      <rjcv-button @click.native="open5">显示msgbox</rjcv-button>
    </demo-example>
    <demo-example title="6.类型type设为confirm" tip="其他默认">
      <rjcv-button @click.native="open6">显示msgbox</rjcv-button>
    </demo-example>
    <demo-example title="7.msgbox.confirm" tip="msgbox.confirm(字符串)">
      <rjcv-button @click.native="open7">显示msgbox</rjcv-button>
    </demo-example>
    <demo-example title="8.类型type设为prompt" tip="其他默认">
      <rjcv-button @click.native="open8">显示msgbox</rjcv-button>
    </demo-example>
    <demo-example title="9.msgbox.prompt" tip="msgbox.prompt(字符串)">
      <rjcv-button @click.native="open9">显示msgbox</rjcv-button>
    </demo-example>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Example from '@/components/Example'

export default {
  components: {
    'demo-example': Example,
    'demo-header': Header,
  },
  data () {
    return {
    }
  },
  methods: {
    open1 () {
      this.$$msgbox()
    },
    open2 () {
      this.$$msgbox({
        showMask: false,
      })
    },
    open3 () {
      this.$$msgbox({
        title: '快',
        message: '点下面',
        confirmButtonText: '我是按钮',
        cancel () {
          alert('取消咯')
        },
        action () {
          alert('确定咯')
        },
      })
    },
    open4 () {
      this.$$msgbox({
        title: '快',
        message: '点下面',
        confirmButtonText: '我是按钮',
        autoClose: false,
        closeOnClickMask: false,
        cancel () {
          alert('取消咯，但无法自动关闭')
        },
        action (msgbox) {
          alert('确定咯，但无法自动关闭，调用 close 方法关闭')
          msgbox.close()
        },
      })
    },
    open5 () {
      this.$$msgbox.alert('alert')
    },
    open6 () {
      this.$$msgbox({
        type: 'confirm',
      })
    },
    open7 () {
      this.$$msgbox.confirm('confirm')
    },
    open8 () {
      this.$$msgbox({
        type: 'prompt',
        message: '请输入【RainJoy】',
        placeholder: '请输入【RainJoy】',
        autoClose: false,
        action (msgbox) {
          if (msgbox.value === 'RainJoy') {
            msgbox.close()
          } else {
            alert('错误')
          }
        },
      })
    },
    open9 () {
      this.$$msgbox.prompt('prompt')
    },
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';
@import '../../assets/css/vars';
</style>

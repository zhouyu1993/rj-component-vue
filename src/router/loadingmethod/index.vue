<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.body下" tip="">
      <rjcv-button @click.native="open1">显示loading</rjcv-button>
    </demo-example>
    <demo-example title="2.el下" tip="绑定指令的当前元素下，且不显示蒙层">
      <rjcv-button @click.native="open2">显示loading</rjcv-button>
      <div class="el-loading"></div>
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
      loading1: null,
      loading2: null,
    }
  },
  methods: {
    open1 () {
      if (!this.loading1) {
        this.loading1 = this.$$loading()
      }
      this.loading1.open()
      setTimeout(() => {
        this.loading1.hide()

        setTimeout(() => {
          this.loading1.loading.text = '玩命儿赶来~'
          this.loading1.show()

          setTimeout(() => {
            this.loading1.close()
          }, 1000)
        }, 1000)
      }, 1000)
    },
    open2 () {
      if (!this.loading2) {
        this.loading2 = this.$$loading({
          showMask: false,
          node: document.querySelector('.el-loading')
        })
      }
      this.loading2.open()
      setTimeout(() => {
        this.loading2.hide()

        setTimeout(() => {
          this.loading2.loading.text = '玩命儿赶来~'
          this.loading2.show()

          setTimeout(() => {
            this.loading2.close()
          }, 1000)
        }, 1000)
      }, 1000)
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

.el-loading {
  height: rem(400);
  margin-top: rem(20);
  background-color: red;
}
</style>

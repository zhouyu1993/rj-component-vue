<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.默认用法" tip="会自动关闭">
      <rjcv-button @click.native="toast1">open</rjcv-button>
    </demo-example>
    <demo-example title="2.修改参数" tip="不自动关闭">
      <rjcv-button @click.native="toast2">open</rjcv-button>
    </demo-example>
    <demo-example title="3.只填字符串" tip="">
      <rjcv-button @click.native="toast3">open</rjcv-button>
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
    toast1 () {
      this.$$toast()
    },
    toast2 () {
      this.$$toast({
        message: 'hello world',
        autoClose: false,
        duration: 2000,
        afterClose () {
          alert('after close')
        }
      }).then((toast) => {
        this.$$msgbox({
          action () {
            // 返回 toast 实例
            // 提供 toast.close() 用于手动关闭
            toast.close()
          },
        })
      })
    },
    toast3 () {
      this.$$toast('hello world')
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

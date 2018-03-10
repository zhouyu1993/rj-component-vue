<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.使用默认分享参数" tip="需要在孩子王 APP 中或者微信中体验">
      <rjcv-button @click.native="open1">点击设置分享参数，然后进行分享</rjcv-button>
    </demo-example>
    <demo-example title="2.自定义分享参数" tip="需要在孩子王 APP 中或者微信中体验">
      <rjcv-button @click.native="open2">点击设置分享参数，然后进行分享</rjcv-button>
    </demo-example>
    <demo-example title="3.APP中显示二维码分享" tip="需要在孩子王 APP 中或者微信中体验">
      <rjcv-button @click.native="open3">点击设置分享参数，然后进行分享</rjcv-button>
    </demo-example>
    <demo-example title="4.APP中作为图片分享" tip="需要在孩子王 APP 中或者微信中体验">
      <rjcv-button @click.native="open4">点击设置分享参数，然后进行分享</rjcv-button>
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
      this.$$share()
    },
    open2 () {
      this.$$share({
        title: '分享标题',
        desc: '分享描述',
        imgUrl: 'https://cmspic-10003009.image.myqcloud.com/7f06df6d-9ba7-4dd0-962d-2f60f2f9171f',
      })
    },
    open3 () {
      this.$$share({
        showQrCode: 1
      })
    },
    open4 () {
      this.$$share({
        imageByte: 'https://mp.weixin.qq.com/wxopen/qrcode?action=show&type=2&fakeid=3505899918&token=1351995635',
      })
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

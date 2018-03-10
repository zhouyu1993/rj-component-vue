<template>
  <div class="container">
    <demo-header />
    <demo-example title="万像优图+过滤协议+webp+默认头像" tip="去除htpp(s)">
      <img :src="'' | avatarview(300, 160)">
      <img :src="'' | avatarview(300, 160, '', '', '', '', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1881776517,987084327&fm=27&gp=0.jpg')">
      <img :src="src1 | avatarview(300, 160, 'jpeg', 2, 70, false)">
      <img :src="$$avatarview(src2, 300, 160, 'jpeg', 'crop/300x300')">
      <h1>下面这张就不是腾讯云图片</h1>
      <img :src="src3 | imageview">
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
      src1: 'http://activpic-10004025.image.myqcloud.com/d4c0925a-19e5-4169-a387-853367efb7c9',
      src2: 'https://activpic-10004025.image.myqcloud.com/78efea27-d3a7-4a11-8978-20cbbaad8931',
      src3: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=8d1fde4a32a85edfee81f671283d6246/314e251f95cad1c896a84b3d793e6709c93d519c.jpg'
    }
  },
  mounted () {
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 300px;
}
</style>

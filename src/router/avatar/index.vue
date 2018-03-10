<template>
  <div class="container">
    <demo-header />
    <demo-example title="头像组件" tip="配合万像优图过滤器以及图片懒加载指令以及默认头像">
      <rjcv-avatar />
      <rjcv-avatar :defaultAvatar="defaultAvatar" />
      <rjcv-avatar :src="src" :lazyUpdate="lazyUpdate" width="300" height="150" defaultSrc="//gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=8d1fde4a32a85edfee81f671283d6246/314e251f95cad1c896a84b3d793e6709c93d519c.jpg" />
      <rjcv-avatar :src="src" :lazyUpdate="lazyUpdate" way="2" width="300" height="150" type="jpeg" :useWebp="false" defaultSrc="//gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=8d1fde4a32a85edfee81f671283d6246/314e251f95cad1c896a84b3d793e6709c93d519c.jpg" />
      <div v-for="(src, index) in pics" :key="index">
        <rjcv-avatar :src="src" :lazyUpdate="lazyUpdate" />
      </div>
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
      lazyUpdate: '',
      src: '',
      pics: [],
      defaultAvatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1881776517,987084327&fm=27&gp=0.jpg'
    }
  },
  methods: {
  },
  mounted () {
    this.src = 'https://activpic-10004025.image.myqcloud.com/d4c0925a-19e5-4169-a387-853367efb7c9'
    this.pics = [
      'https://activpic-10004025.image.myqcloud.com/d4c0925a-19e5-4169-a387-853367efb7c9',
    ]
    this.$$showPage()
    this.lazyUpdate = +new Date()

    setTimeout(() => {
      this.pics.push('http://activpic-10004025.image.myqcloud.com/4faa4608-b48e-442e-b177-e12defa1846a')
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 300px;
  height: 150px;
}
</style>

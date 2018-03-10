<template>
  <div class="container">
    <demo-header />
    <demo-example title="判断当前环境是否支持webp" tip="服务端默认不支持">
      支持webp吗？{{$$issupportwebp()}}
      <br>
      图片经过处理后：{{img}}
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
      img: '',
    }
  },
  mounted () {
    let img = 'http://activpic-10004025.image.myqcloud.com/83c17d64-470d-4c7b-8671-13f23af581f4'
    if (this.$$issupportwebp()) {
      img += '?format/webp'
    }
    this.img = img
    this.$$showPage()
  },
}
</script>

<style lang="scss" scoped>
</style>

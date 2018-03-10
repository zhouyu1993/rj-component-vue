<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.默认属性" tip="初始值">
      <rjcv-card :lazyUpdate="lazyUpdate" />
    </demo-example>
    <demo-example title="2.自定义属性" tip="图片、标题、描述、价格">
      <rjcv-card :src="src" :lazyUpdate="lazyUpdate" title="大家一起来提前预约孩子王的私人订制2018台历宝宝（黑金免费）" :desc="`${+new Date()}`" price="¥10或1000积分">
      </rjcv-card>
    </demo-example>
    <demo-example title="2.自定义属性" tip="链接、图片、标题、描述、价格">
      <rjcv-card :src="src" :lazyUpdate="lazyUpdate">
        <div class="title" slot="title"><span>活动名称: </span>大家一起来提前预约孩子王的私人订制2018台历宝宝（黑金免费）</div>
        <div class="time" slot="desc"><span>活动时间: </span>{{+new Date()}}</div>
        <div class="price" slot="price"><span>活动金额: </span>&yen;10或1000积分</div>
      </rjcv-card>
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
    }
  },
  methods: {
  },
  mounted () {
    setTimeout(() => {
      this.src = 'https://activpic-10004025.image.myqcloud.com/d4c0925a-19e5-4169-a387-853367efb7c9'
      this.lazyUpdate = +new Date()

      this.$nextTick(() => {
        this.$$showPage()
      })
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
</style>

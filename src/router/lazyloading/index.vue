<template>
  <div class="container">
    <demo-header />
    <demo-example title="1.监听window，有这些情况">
      <h1>本身有图片</h1>
      <img v-lazyloading>
      <img v-lazyloading :lazy-defaultSrc="'http://cmspic-10003009.image.myqcloud.com/8c4fe37e-fee0-481d-95ac-980f52487fea' | imageview(150, 150, 0, 1, 10, false)">
      <h1>本身有图片</h1>
      <img v-lazyloading="update" lazy-src="http://cmspic-10003009.image.myqcloud.com/8c4fe37e-fee0-481d-95ac-980f52487fea">
      <h1>加载图片</h1>
      <img v-lazyloading="update" :lazy-src="pic | imageview(150, 150)">
      <h1>加载图片后又更新图片</h1>
      <img v-lazyloading="update" :lazy-src="pic2 | imageview(150, 150)">
    </demo-example>
    <demo-example title="2.监听上层元素的滚动">
      <div class="pics">
        <div class="pic" v-for="pic in pics">
          <img v-lazyloading :lazy-src="pic | imageview(150, 150)" lazy-el=".pics">
        </div>
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
      update: false,
      pic: '',
      pic2: '',
      pics: [],
    }
  },
  created () {
    setTimeout(() => {
      this.pic = 'http://activpic-10004025.image.myqcloud.com/83c17d64-470d-4c7b-8671-13f23af581f4'

      this.pic2 = 'http://activpic-10004025.image.myqcloud.com/dda546bd-90ec-48c0-9733-3ac67d1b6d99'

      setTimeout(() => {
        this.pic2 = 'http://activpic-10004025.image.myqcloud.com/7a9771e8-6445-4017-ab79-853be441ed2f'
      }, 2000);

      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(() => {
        this.pics.push('//cmspic-10003009.image.myqcloud.com/8c4fe37e-fee0-481d-95ac-980f52487fea')
      })

      this.$nextTick(() => {
        this.$$showPage()
        this.update = true
      })
    }, 1000)
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/rem';

.container {
  img {
    width: rem(300);
    height: rem(300);
  }

  .pics {
    height: rem(600);
    overflow-y: auto;
    border: 1px solid blue;
    // sass-lint:disable no-misspelled-properties
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: contain;
  }
}
</style>

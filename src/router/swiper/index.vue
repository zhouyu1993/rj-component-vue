<template>
  <div class="container swiper">
    <demo-header />
    <demo-example title="" tip="">
      <rjcv-swiper class="swiper-swiper">
        <rjcv-swiperitem v-for="(pic, index) in pics" :key="index">
          <img :src="pic">
        </rjcv-swiperitem>
      </rjcv-swiper>
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
      pics: [],
    }
  },
  mounted () {
    this.pics = [
      'https://activpic-10004025.image.myqcloud.com/d4c0925a-19e5-4169-a387-853367efb7c9',
      'http://activpic-10004025.image.myqcloud.com/4faa4608-b48e-442e-b177-e12defa1846a'
    ]
    this.$nextTick(() => {
      this.$$showPage()
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/rem';

.swiper {
  .swiper-swiper {
    height: rem(383);

    img {
      width: rem(710);
      height: rem(383);
    }
  }
}
</style>

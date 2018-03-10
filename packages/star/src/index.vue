<template>
  <div class="rjcv-star">
    <div class="rjcv-star-item" :class="{ 'rjcv-star-hover': scoreClass.isCur, 'rjcv-star-half': scoreClass.isHalf }" v-for="(scoreClass, index) in scoreClassArr" :key="index" @click="clickStar(index+1)">
      <rjcv-icon name="starfull" />
      <rjcv-icon name="starfull" />
    </div>
  </div>
</template>

<script>
import icon from '../../icon'

export default {
  name: 'rjcv-star',
  components: {
    'rjcv-icon': icon,
  },
  props: {
    score: {
      type: Number,
      default: 10
    },
    canClick: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
      scoreArr: [{}, {}, {}, {}, {}],
      avg: this.score,
    }
  },
  watch: {
    score (val) {
      this.avg = val
    },
  },
  computed: {
    scoreClassArr () {
      if (this.avg > 10) {
        this.avg = 10
      } else if (this.avg < 0) {
        this.avg = 0
      }
      const x = parseInt(this.avg / 2, 10)
      this.scoreArr.forEach((ele) => {
        ele.isCur = false
        ele.isHalf = false
      })
      for (let i = 0; i < x; i += 1) {
        this.scoreArr[i].isCur = true
      }
      if (this.avg % 2 !== 0 && this.scoreArr[x]) {
        this.scoreArr[x].isHalf = true
      }
      return this.scoreArr
    },
  },
  methods: {
    clickStar (index) {
      if (this.canClick) {
        this.avg = index * 2
        this.$emit('input', index * 2)
      }
    }
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

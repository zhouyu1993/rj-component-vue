<template>
  <div class="container">
    <demo-header />
    <demo-example title="上传控件" tip="图片、视频">
      <div class="upload-wrapper">
        点我
        <rjcv-upload @uploadResponse="uploadResponse" />
      </div>
      <div class="upload-preview" v-if="response.data && response.data.classify === 2 && response.data.src">
        <video :src="response.data && response.data.src" :poster="poster" class="video" ref="video"></video>
      </div>
      <br>
      <rjcv-button @click.native="upload">点我也可以，模拟点击事件</rjcv-button>
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
      response: {},
      poster: 'https://zhouyu1993.github.io/awesome/rjcv/static/icon.png',
      preview: false,
    }
  },
  methods: {
    upload () {
      var upload = document.querySelector('.rjcv-upload')
      upload.click()
    },
    uploadResponse (res) {
      console.log(res)
      this.response = res
      if (res.code === 4) {
        const url = res.data.res && res.data.res.data && res.data.res.data.access_url
        if (url) {
          const src = url.replace('file', 'cos.ap-shanghai').replace('http:', 'https:')
          console.log('处理后的access_url', src)
        }
      }
    },
    videoPreview () {
      if (this.preview) return
      const video = this.$refs.video
      if (video) {
        this.preview = true
        video.addEventListener('loadeddata', () => {
          console.log('preview')
          const canvas = document.createElement('canvas')
          canvas.width = video.videoWidth * 0.6
          canvas.height = video.videoHeight * 0.6
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
          this.poster = canvas.toDataURL('image/png')
        })
      }
    }
  },
  mounted () {
    this.$$showPage()
  },
  updated () {
    this.videoPreview()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';
@import '../../assets/css/vars';

.upload-wrapper {
  position: relative;
  width: rem(100);
  height: rem(100);
  color: #fff;
  text-align: center;
  background-color: red;
}

.upload-preview {
  .video {
    width: rem(200);
    height: rem(200);
  }
}
</style>

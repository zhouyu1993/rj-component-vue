<template>
  <div class="rjcv-uploader">
    <div class="rjcv-uploader-tip">上传照片<span>({{pics.length}}/{{maxNum}})</span></div>
    <div class="rjcv-uploader-core">
      <div class="rjcv-uploader-pic" v-for="(pic, index) in pics" :key="index">
        <img :src="pic.preview">
        <rjcv-icon name="lajitong" @click.native.stop.prevent="deleteIt(index)"/>
        <div class="rjcv-uploader-state" @click.stop.prevent="clickIt(pic)">
          {{pic.state}}
        </div>
      </div>
      <div class="rjcv-uploader-upload" v-show="rest">
        <rjcv-upload :accept="accept" :rest="rest" :maxSize="maxSize" :imageRegExp="imageRegExp" :maxWidth="maxWidth" :quality="quality" :imageUploadUrl="imageUploadUrl" :timeout="timeout" :reload="reload" @uploadResponse="uploadResponse" />
        <rjcv-icon name="camera" v-show="rest === maxNum" />
        <div class="rjcv-uploader-upload-tip" v-show="rest === maxNum">最多{{maxNum}}张</div>
        <div class="rjcv-uploader-upload-plus" v-show="rest < maxNum"></div>
      </div>
    </div>
    <rjcv-imagepreview v-model="visible" :visible="visible" :pics="previews" />
  </div>
</template>

<script>
import icon from '../../icon'
import imagepreview from '../../imagepreview'
import upload from '../../upload'

export default {
  name: 'rjcv-uploader',
  components: {
    'rjcv-icon': icon,
    'rjcv-imagepreview': imagepreview,
    'rjcv-upload': upload,
  },
  props: {
    accept: {
      type: String,
      default: 'image/*'
    },
    maxNum: {
      type: Number,
      default: 3
    },
    maxSize: {
      type: Number,
      default: 20971520
    },
    imageRegExp: {
      type: String,
      default: 'bmp|gif|jp(e?)g|png|webp'
    },
    maxWidth: {
      type: Number,
      default: 800
    },
    quality: {
      type: Number,
      default: 0.7
    },
    imageUploadUrl: {
      type: String,
      default: '//ims.cekid.com/pic/file/upload.do?bucket=wxmallpic'
    },
    imageUploadSuccessCode: {
      type: Number,
      default: 0
    },
    timeout: {
      type: Number,
      default: 10000
    },
    pictures: {
      type: Array,
      default () {
        return []
      }
    },
  },
  data () {
    return {
      pics: [...this.pictures],
      reload: {},
      previews: [],
      visible: false,
    }
  },
  watch: {
    pictures (value) {
      this.pics = [...value]
    },
  },
  computed: {
    rest () {
      return this.maxNum - this.pics.length
    }
  },
  methods: {
    uploadResponse (res) {
      if (res.code === 1) {
        // 1 准备上传
        this.start(res.data)
      } else {
        this.update(res.data)
        // 2 预览 3 上传中
        if (res.code === 4) {
          // 4 上传成功
          this.getImages(res)
        } else if ([2, 3].indexOf(res.code) < 0) {
          // 其他 上传失败
          this.$emit('fail', res)
        }
      }
    },
    start (data) {
      this.pics.push(data)
      this.pics.sort((a, b) => {
        return a.id > b.id
      })
    },
    update (data) {
      this.pics = this.pics.map((pic) => {
        return pic.id === data.id ? data : pic
      })
    },
    getImages (res) {
      const response = res.data.res || {}
      if (response.code === this.imageUploadSuccessCode) {
        this.$emit('success', this.pics)
      } else {
        this.$emit('fail', res)
      }
    },
    deleteIt (index) {
      this.pics.splice(index, 1)
      this.$emit('success', this.pics)
    },
    clickIt (data) {
      if (data.progress === 0 && data.fd) {
        this.reload = data
      } else {
        this.previews = this.pics.map((pic) => {
          return pic.preview
        })
        this.visible = true
      }
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

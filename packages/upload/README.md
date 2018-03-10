# upload

title: upload
---

## Import

``` js
import upload from 'rj-component-vue/lib/upload'
import 'rj-component-vue/lib/upload/style.css'
```

**Or use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)**

``` js
import { upload } from 'rj-component-vue'
```

## Register

``` js
Vue.component(upload.name, upload)
```

## Example

[Example 传送门](//zhouyu1993.github.io/rjcv/upload)

``` html
<rjcv-upload accept="image/*" :rest="9" @uploadResponse="uploadResponse" />
```

``` js
export default {
  data () {
    return {
      response: {},
    }
  },
  methods: {
    uploadResponse (res) {
      console.log(res)
    },
  },
}
```

## API

| props | type | description | required | default |
|:---|:---|:---|:--|:---|
| accept | String | 设置可选文件类型, 默认图片 image/*, 其他值如 video/*, audio/* 等, 如果设置多值以逗号分割, 即 `image/*, video/*` | false | image/* |
| capture | Boolean, String | 捕获机制（有兼容问题）, 默认 false, 其他值如 camera 捕获相机, camcorder 捕获摄像, microphone 捕获录音 | false | false |
| isMultiple | Boolean | 是否支持多选, 默认支持, multiple 优先级高于 capture, 即当 multiple 为 true 时默认从相册选 | false | true |
| disabled | Boolean | 是否禁止选择 | false | false |
| rest | Number | 可上传张数或者还剩余张数, 需要动态修改, 比如规定最多上传 n 张, 上传完一张后, 就是 n-1 张, 如果上传完后又删除了, 也要 | false | 3 |
| maxSize | Number | 文件最大值, 默认 20 * 1024 * 1024 B （20 M） | false | 20971520 |
| fileRegExp | String | 文件类型正则检测 | false | [见下面](#fileregexp) |
| maxWidth | Number | 图片上传，图片最大宽度，如果真实宽度大于这个值，会进行缩小 | false  | 800 |
| quality | Number | 图片上传, 图片压缩质量比 0-1 | false | 0.7 |
| imageUploadUrl | String | 图片上传接口 | false | //ims.cekid.com/pic/file/upload.do?bucket=wxmallpic |
| timeout | Number | 图片上传超时处理，默认 10000（ms） | false | 10000 |
| signatureUrl | String | 视频上传时，获取签名的接口  | false | //appdata.cekid.com/vvideo/upload?app=h5&source=shequ |
| appid | Number, String | 视频上传，appid 必填参数 | false | 10004025 |
| bucket | String | 视频上传，bucket 必填参数 | false | shequvideo |
| region | String | 视频上传，region 必填参数 华南填 gz 华东填 sh 华北填 tj | false | sh |
| reload | Object | 文件对象, 当 (reload && reload.progress === 0 && reload.fd) 为真时候, 会触发图片的重新上传, 当 (reload && reload.progress === 0 && reload.videoFd) 为真时候, 会触发视频的重新上传 | false | {} |

### input 属性

因为该组件的基础是 `input`，所以凡是 `input` 具有的属性，都可以直接使用。

### fileRegExp

`fileRegExp` 默认值是：`bmp|gif|jp(e?)g|png|webp`

如果需要同时支持图片和视频，则添加视频格式，例如设置为 `bmp|gif|jp(e?)g|png|webp|mp4`

### 上传回调

**上传过程中，控件会触发$emit('uploadResponse', response)**

监听 response 可以判断上传的情况

``` js
export default {
  data () {
    reload: {},
  },
  methods: {
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
    reUpload (pic) {
      // 重新上传
      if (pic && pic.progress === 0 && pic.fd) {
        this.reload = pic
      }
    }
  }
}
```

### response 数据结构

``` json
{
  "code": 1,
  "data": {
    "state": "",
  },
  "message": "",
}
```

| code | message | data.state |
|:--|:---|:---|
| 0 | 系统异常 | 上传失败 |
| 1 | 准备上传[文件读取成功后] | 上传中 |
| 2 | 预览[图片处理后转换的base64] | 上传中 |
| 3 | 上传中 | 上传中 |
| 4 | 上传成功 | 上传成功 |
| 5 | 接口异常/网络或服务器异常/请求超时/获取签名失败 | 上传失败 |
| 6 | 您的浏览器不支持文件上传 | 上传失败 |
| 7 | 您的文件过大 | 上传失败 |
| 8 | 您的文件格式不符合要求 | 上传失败 |
| 9 | 您的文件无法读取 | 上传失败 |
| 10 | 您的图片无法识别 | 上传失败 |

#### data 参数说明

| 参数 | 说明 |
|:--|:---|
| id | 文件唯一标识 |
| index | 文件位于本轮上传的序列 |
| lastModified | 文件最后修改时间 |
| name | 文件名 |
| size | 文件大小 |
| total | 本轮上传文件总数 |
| type | 文件类型 |
| webkitRelativePath | 文件相对路径 |
| state | 文件上传状态描述 |
| classify | 文件类型，1 为图片，2 为视频；暂时不支持音频 |
| src | 文件原始值base64 |
| width | 图片原始宽 |
| height | 图片原始高 |
| exifdata | 图片信息 exif |
| zoomWidth | 图片缩小后的宽 |
| zoomHeight | 图片缩小后的高 |
| preview | 图片经处理（缩小、翻转、压缩）后的预览图 |
| progress | 文件上传进度 |
| fd | 图片的 FormData 形式（可上传的形式） |
| res | 文件上传成功后，接口的返回值 |

* 文件预览时，可以取 `src/preview`，图片一般取 `preview`，因为这和上传后的图片几乎相等
* 当文件上传失败时，`可以执行 this.$refs.upload.reUploadImage(data)` 或者 `this.$refs.upload.reUploadVideo(data)` 来重新上传，这种方法和动态改变 props 中 `reload` 差不多

这里 `this.$refs.upload` 代表 `upload` 组件

<template>
  <input class="rjcv-upload" type="file" :accept="accept" :capture="capture" :multiple="isMultiple" @change="onChange">
</template>

<script>
import exif from '../../__assets/js/exif.js'

export default {
  name: 'rjcv-upload',
  props: {
    // 设置可选文件类型, 默认图片 image/*, 其他值如 video/*, audio/* 等, 如果设置多值以逗号分割, 即 `image/*, video/*`
    accept: {
      type: String,
      default: 'image/*'
    },
    // 捕获机制（有兼容问题）, 默认 false, 其他值如 camera 捕获相机, camcorder 捕获摄像, microphone 捕获录音
    capture: {
      type: [Boolean, String],
      default: false
    },
    // 是否支持多选, 默认支持, multiple 优先级高于 capture, 即当 multiple 为 true 时默认从相册选
    isMultiple: {
      type: Boolean,
      default: true
    },
    // 是否禁止选择
    disabled: {
      type: Boolean,
      default: false
    },
    // 可上传张数或者还剩余张数, 需要动态修改, 比如规定最多上传 n 张, 上传完一张后, 就是 n-1 张, 如果上传完后又删除了, 也要
    rest: {
      type: Number,
      default: 3
    },
    // 文件最大值, 默认 20 * 1024 * 1024 B （20 M）
    maxSize: {
      type: Number,
      default: 20971520
    },
    // 文件类型正则检测, 如果同时支持视频, `bmp|gif|jp(e?)g|png|webp|mp4`
    fileRegExp: {
      type: String,
      default: 'bmp|gif|jp(e?)g|png|webp'
    },
    // 图片上传，图片最大宽度，如果真实宽度大于这个值，会进行缩小
    maxWidth: {
      type: Number,
      default: 800
    },
    // 图片上传, 图片压缩质量比 0-1
    quality: {
      type: Number,
      default: 0.7
    },
    // 图片上传接口
    imageUploadUrl: {
      type: String,
      default: ''
    },
    // 图片上传超时处理，默认 10000（ms）
    timeout: {
      type: Number,
      default: 10000
    },
    // 视频上传时，获取签名的接口
    signatureUrl: {
      type: String,
      default: ''
    },
    // 视频上传，appid 必填参数
    appid: {
      type: [Number, String],
      default: '10004025'
    },
    // 视频上传，bucket 必填参数
    bucket: {
      type: String,
      default: 'shequvideo'
    },
    // 视频上传，region 必填参数 华南填 gz 华东填 sh 华北填 tj
    region: {
      type: String,
      default: 'sh'
    },
    // 文件对象, 当 (reload && reload.progress === 0 && reload.fd) 为真时候, 会触发图片的重新上传, 当 (reload && reload.progress === 0 && reload.videoFd) 为真时候, 会触发视频的重新上传
    reload: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  data () {
    return {
    }
  },
  watch: {
    reload (reload) {
      if (reload && reload.progress === 0) {
        if (reload.fd) {
          this.uploadImage(reload)
        } else if (reload.videoFd) {
          this.uploadVideo(reload)
        }
      }
    },
  },
  methods: {
    response (data) {
      this.$emit('uploadResponse', data)
    },
    async onChange (e) {
      try {
        if (typeof FileReader === 'undefined') {
          this.response({
            code: 6,
            data: {
              state: '上传失败',
            },
            message: '您的浏览器不支持文件上传',
          })
        } else {
          const files = [...e.target.files]
          let fileArray = files.slice(0, this.rest)
          const total = fileArray.length
          if (!total) return
          const fileRegExp = new RegExp(this.fileRegExp, 'i')
          fileArray.forEach((file, index) => {
            const { lastModified, name, size, type, webkitRelativePath } = file
            const _file = {
              id: +new Date() + index, // 文件唯一标识
              index, // 文件位于本轮上传的序列
              lastModified, // 文件最后修改时间
              name, // 文件名称
              size, // 文件大小
              total, // 本轮上传文件总数
              type, // 文件类型
              webkitRelativePath, // 文件相对路径
            }
            if (size > this.maxSize) {
              this.response({
                code: 7,
                data: {
                  ..._file,
                  state: '上传失败',
                },
                message: '您的文件过大',
              })
            } else if (fileRegExp.test(type)) {
              if (/image/i.test(type)) {
                // 图片
                this.readAsDataURL(file, _file, 1)
              } else if (/video/i.test(type)) {
                // 视频
                this.readAsDataURL(file, _file, 2)
              }
            } else {
              // 格式不符合
              this.response({
                code: 8,
                data: {
                  ..._file,
                  state: '上传失败',
                },
                message: '您的文件格式不符合要求',
              })
            }
          })
          // 清空 input 值
          e.target.value = null
        }
      } catch (e) {
        this.response({
          code: 0,
          data: {
            state: '上传失败',
          },
          message: '系统异常',
        })
        console.log(e)
      }
    },
    readAsDataURL (file, _file, classify) {
      try {
        const reader = new FileReader()
        reader.onload = (event) => {
          _file.classify = classify
          _file.src = event.target.result
          this.response({
            code: 1,
            data: {
              ..._file,
              state: '上传中',
            },
            message: '准备上传',
          })
          if (classify === 1) {
            // 图片处理
            this.imageProcess(file, _file)
          } else if (classify === 2) {
            // 视频上传
            const videoFd = new FormData()
            videoFd.append('op', 'upload')
            videoFd.append('fileContent', file)
            videoFd.append('insertOnly', 0)
            _file.videoFd = videoFd
            this.uploadVideo(_file)
          }
        }
        reader.onerror = (e) => {
          this.response({
            code: 9,
            data: {
              ..._file,
              state: '上传失败',
            },
            message: '您的文件无法读取',
          })
          console.log(e)
        }
        reader.readAsDataURL(file)
      } catch (e) {
        this.response({
          code: 0,
          data: {
            ..._file,
            state: '上传失败',
          },
          message: '系统异常',
        })
        console.log(e)
      }
    },
    imageProcess (file, _file) {
      try {
        const img = new Image()
        img.src = _file.src
        img.onload = () => {
          // 获取图片原始宽高
          const width = img.width
          const height = img.height
          _file.width = width
          _file.height = height

          // 利用 canvas 处理图片
          const canvas = document.createElement('canvas')
          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext('2d')
          ctx.fillStyle = '#fff'
          ctx.fillRect(0, 0, width, height)

          // 获取图片信息 exif
          const imgObj = {
            src: _file.src
          }
          exif.getData(imgObj, () => {
            _file.exifdata = imgObj.exifdata
            // 根据 Orientation 调整图片角度
            const orientation = imgObj.exifdata.Orientation
            // 1 横着, 3 右斜, 6 左斜, 8 倒着
            if (orientation && orientation !== 1) {
              switch (orientation) {
                case 8:
                  // 8 倒着, 需要逆时针（向左）90 度旋转，并交换宽高
                  canvas.width = height
                  canvas.height = width
                  ctx.rotate(-0.5 * Math.PI)
                  ctx.translate(-1 * width, 0)
                  break
                case 6:
                  // 6 左斜或横着, 需要顺时针（向右）90 度旋转
                  canvas.width = height
                  canvas.height = width
                  ctx.rotate(0.5 * Math.PI)
                  ctx.translate(0, -1 * height)
                  break
                case 3:
                  // 3 右斜, 需要顺时针（向右）180 度旋转
                  ctx.rotate(Math.PI)
                  ctx.translate(-1 * width, -1 * height)
                  break
                default:
                  ctx.rotate(0)
              }
            }
            ctx.drawImage(img, 0, 0, width, height, 0, 0, width, height)

            // 缩小图片
            const w = Math.min(canvas.width, this.maxWidth)
            const h = canvas.height / canvas.width * w
            // 记录缩小后的宽高
            _file.zoomWidth = w
            _file.zoomHeight = h
            // 缩小需要重绘
            const _canvas = document.createElement('canvas')
            _canvas.width = w
            _canvas.height = h
            const _ctx = _canvas.getContext('2d')
            _ctx.fillStyle = '#fff'
            _ctx.fillRect(0, 0, w, h)
            _ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, w, h)

            // 压缩图片，这里只允许 webp|jpeg
            let type
            if (/webp/.test(_file.type)) {
              type = 'image/webp'
            } else {
              type = 'image/jpeg'
            }
            // canvas to dataURL
            _file.preview = _canvas.toDataURL(type, this.quality)
            _file.progress = 0

            // dataURL 预览
            this.response({
              code: 2,
              data: {
                ..._file,
                state: '上传中'
              },
              message: '预览',
            })

            setTimeout(() => {
              // dataURL to blob
              this.dataURL2Blob(_file)
            }, 0)
          })
        }
        img.onerror = (e) => {
          this.response({
            code: 10,
            data: {
              ..._file,
              state: '上传失败'
            },
            message: '您的图片无法识别',
          })
          console.log(e)
        }
      } catch (e) {
        this.response({
          code: 0,
          data: {
            ..._file,
            state: '上传失败',
          },
          message: '系统异常',
        })
        console.log(e)
      }
    },
    dataURL2Blob (_file) {
      try {
        // base64 to buffer
        let byteStr
        const parts = _file.preview.split(',')
        if (parts[0].indexOf('base64') > 0) {
          byteStr = atob(parts[1])
        } else {
          byteStr = decodeURIComponent(parts[1])
        }
        const leng = byteStr.length
        const buffer = new ArrayBuffer(leng)
        const uint8 = new Uint8Array(buffer)
        for (let i = 0; i < leng; i += 1) {
          uint8[i] = byteStr.charCodeAt(i)
        }
        const type = parts[0].split(':')[1].split(';')[0]

        // buffer to blob
        let blob
        const Builder = window.BlobBuilder || window.WebKitBlobBuilder
        if (Builder) {
          // android 不支持 new Blob, 只能借助 window.BlobBuilder || window.WebKitBlobBuilder
          const bb = new Builder()
          bb.append(buffer)
          blob = bb.getBlob(type)
        } else {
          // ios
          blob = new Blob([buffer], type ? { type } : {})
        }

        if (blob) {
          const fd = new FormData()
          fd.append('file', blob, _file.name)
          _file.fd = fd
          this.uploadImage(_file)
        } else {
          this.response({
            code: 5,
            data: {
              ..._file,
              state: '上传失败',
            },
            message: '您的图片无法上传',
          })
        }
      } catch (e) {
        this.response({
          code: 0,
          data: {
            ..._file,
            state: '上传失败',
          },
          message: '系统异常',
        })
        console.log(e)
      }
    },
    uploadImage (_file) {
      try {
        const xhr = new XMLHttpRequest()
        xhr.timeout = this.timeout
        xhr.responseType = 'json'
        xhr.open('POST', this.imageUploadUrl)
        if (/mobile/i.test(navigator.userAgent)) {
          // 移动端给个虚假 progress
          _file.progress = 0.5
          this.response({
            code: 3,
            data: {
              ..._file,
              state: '上传中'
            },
            message: '上传中',
          })
        } else {
          // PC 端支持 onprogress
          xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) {
              _file.progress = e.loaded / e.total
              this.response({
                code: 3,
                data: {
                  ..._file,
                  state: '上传中'
                },
                message: '上传中',
              })
            }
          }
        }
        xhr.onload = (e) => {
          const { status, response } = e.target
          if ((status >= 200 && status < 300) || status === 304) {
            _file.res = response
            _file.progress = 1
            this.response({
              code: 4,
              data: {
                ..._file,
                state: '上传成功'
              },
              message: '上传成功',
            })
          } else {
            _file.res = null
            _file.progress = 0
            this.response({
              code: 5,
              data: {
                ..._file,
                state: '上传失败'
              },
              message: '接口异常',
            })
          }
        }
        xhr.onerror = (e) => {
          _file.res = null
          _file.progress = 0
          this.response({
            code: 5,
            data: {
              ..._file,
              state: '上传失败'
            },
            message: '网络或服务器异常',
          })
          console.log(e)
        }
        xhr.ontimeout = (e) => {
          _file.res = null
          _file.progress = 0
          this.response({
            code: 5,
            data: {
              ..._file,
              state: '上传失败'
            },
            message: '请求超时',
          })
          console.log(e)
        }
        xhr.send(_file.fd)
      } catch (e) {
        _file.res = null
        _file.progress = 0
        this.response({
          code: 0,
          data: {
            ..._file,
            state: '上传失败',
          },
          message: '系统异常',
        })
        console.log(e)
      }
    },
    async uploadVideo (_file) {
      try {
        const getAuthorization = new XMLHttpRequest()
        getAuthorization.responseType = 'json'
        getAuthorization.open('GET', this.signatureUrl)
        getAuthorization.onload = (e) => {
          const { status, response } = e.target
          if ((status >= 200 && status < 300) || status === 304) {
            const authorization = response.data && response.data.authorization
            if (authorization) {
              const xhr = new XMLHttpRequest()
              xhr.timeout = this.timeout
              xhr.responseType = 'json'
              xhr.open('POST', `//${this.region}.file.myqcloud.com/files/v2/${this.appid}/${this.bucket}/${_file.name}?sign=${encodeURIComponent(authorization)}`)
              if (/mobile/i.test(navigator.userAgent)) {
                // 移动端给个虚假 progress
                _file.progress = 0.5
                this.response({
                  code: 3,
                  data: {
                    ..._file,
                    state: '上传中'
                  },
                  message: '上传中',
                })
              } else {
                // PC 端支持 onprogress
                xhr.upload.onprogress = (e) => {
                  if (e.lengthComputable) {
                    _file.progress = e.loaded / e.total
                    this.response({
                      code: 3,
                      data: {
                        ..._file,
                        state: '上传中'
                      },
                      message: '上传中',
                    })
                  }
                }
              }
              xhr.onload = (e) => {
                const { status, response } = e.target
                if ((status >= 200 && status < 300) || status === 304) {
                  _file.res = response
                  _file.progress = 1
                  this.response({
                    code: 4,
                    data: {
                      ..._file,
                      state: '上传成功'
                    },
                    message: '上传成功',
                  })
                } else {
                  _file.res = null
                  _file.progress = 0
                  this.response({
                    code: 5,
                    data: {
                      ..._file,
                      state: '上传失败'
                    },
                    message: '接口异常',
                  })
                }
              }
              xhr.onerror = (e) => {
                _file.res = null
                _file.progress = 0
                this.response({
                  code: 5,
                  data: {
                    ..._file,
                    state: '上传失败'
                  },
                  message: '网络或服务器异常',
                })
                console.log(e)
              }
              xhr.ontimeout = (e) => {
                _file.res = null
                _file.progress = 0
                this.response({
                  code: 5,
                  data: {
                    ..._file,
                    state: '上传失败'
                  },
                  message: '请求超时',
                })
                console.log(e)
              }
              xhr.send(_file.videoFd)
            } else {
              _file.res = null
              _file.progress = 0
              this.response({
                code: 5,
                data: {
                  state: '上传失败',
                },
                message: '获取签名失败',
              })
            }
          } else {
            _file.res = null
            _file.progress = 0
            this.response({
              code: 5,
              data: {
                state: '上传失败',
              },
              message: '获取签名失败',
            })
          }
        }
        getAuthorization.onerror = (e) => {
          _file.res = null
          _file.progress = 0
          this.response({
            code: 5,
            data: {
              state: '上传失败',
            },
            message: '获取签名失败',
          })
          console.log(e)
        }
        getAuthorization.send()
      } catch (e) {
        _file.res = null
        _file.progress = 0
        this.response({
          code: 0,
          data: {
            ..._file,
            state: '上传失败',
          },
          message: '系统异常',
        })
        console.log(e)
      }
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>

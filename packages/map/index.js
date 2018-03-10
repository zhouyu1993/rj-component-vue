import './src/style.scss'

import asyncload from '../asyncload'

/**
 * @name 异步加载高德地图SDK
 * @param  { Function } callback [全局变量 AMap 存在的情况下可执行函数]
 * @param  { String } url [高德地图sdk.js链接]
 */

const map = async (callback, url = '//webapi.amap.com/maps?v=1.4.1&key=5bd26f9e57da5668156427983ae9ef2c') => {
  try {
    await asyncload(url, callback, false)
  } catch (e) {
    throw e
  }
}

const getView = (option = {}) => {
  return new window.AMap.Map(option.id || '', {
    resizeEnable: true,
    dragEnable: true,
    zoomEnable: true,
    zoom: 14,
    center: [118.81541, 32.03998],
    ...option
  })
}

const mapping = (option = {}) => {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      if (window.AMap.Map) {
        resolve(getView(option))
      } else {
        let time = 0
        const flag = setInterval(() => {
          time++
          if (window.AMap.Map) {
            clearInterval(flag)
            resolve(getView(option))
          } else if (time > 30) {
            clearInterval(flag)
            reject('地图加载超时')
          }
        }, 300)
      }
    } else {
      reject('地图加载异常')
    }
  })
}

/**
 * @name 根据经纬度作图
 * @param  { Object } option [地图参数]
 * @param  { String } url [高德地图sdk.js链接]
 * @return  { Promise } [地图实例]
 */

map.mapping = (option = {}, url = '//webapi.amap.com/maps?v=1.4.1&key=5bd26f9e57da5668156427983ae9ef2c') => {
  return new Promise(async (resolve, reject) => {
    try {
      await map(async () => {
        try {
          const view = await mapping(option)
          if (option.mark) {
            const marker = new window.AMap.Marker({
              icon: option.markIcon || require('../__assets/img/mark.png'),
              position: option.center
            })
            marker.setMap(view)
          }
          resolve(view)
        } catch (e) {
          console.log(e)
          reject(null)
        }
      }, url)
    } catch (e) {
      console.log(e)
      reject(null)
    }
  })
}

/**
 * @name 导航
 * @param  { Object } view [地图实例]
 * @param  { String } plugin [导航方式 'Driving' 驾车, 'Transfer' 公交, 'Walking' 步行]
 * @param  { Object } option [导航参数 origin 起点, destination 终点]
 */

map.route = (view, plugin = 'Driving', option = {}, el = '.rjcv-mapper .rjcv-mapper-amap') => {
  try {
    if (!view) return
    const AMap = window.AMap
    AMap.plugin([`AMap.${plugin}`], () => {
      const route = new AMap[plugin]({
        map: view,
        origin: [118.81541, 32.03998],
        destination: [118.888231, 32.013308],
        ...option
      })
      route.search(option.origin, option.destination)
      const _el = document.querySelector(el)
      if (!_el) return
      _el.addEventListener('click', () => {
        route.searchOnAMAP({
          origin: option.origin,
          destination: option.destination
        })
      })
      _el.style.display = 'block'
    })
  } catch (e) {
    throw e
  }
}

const getPosition = (option) => {
  return new Promise(async (resolve, reject) => {
    try {
      const view = option.view || await mapping({
        id: option.id || 'rjcv-mapper-id'
      })
      view.plugin('AMap.Geolocation', () => {
        const geolocation = new window.AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 10000, // 超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, // 显示定位按钮，默认：true
          buttonPosition: 'RB', // 定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new window.AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          ...option
        })
        view.addControl(geolocation)
        geolocation.getCurrentPosition()
        // 返回定位信息
        window.AMap.event.addListener(geolocation, 'complete', (res) => {
          if (view && option.mark) {
            const marker = new window.AMap.Marker({
              icon: option.markIcon || require('../__assets/img/mark.png'),
              position: [res.position.lng, res.position.lat],
            })
            marker.setMap(view)
          }
          if (res) {
            const { lng, lat } = res.position
            let { adcode, province, city, district } = res.addressComponent
            const provinceCode = adcode.slice(0, 2) + '0000'
            const districtCode = adcode
            let cityCode
            if (['110000', '120000', '310000', '500000', '710000', '810000', '820000'].indexOf(provinceCode) > -1) {
              // 北京、天津、上海、重庆、台湾、香港、澳门
              cityCode = provinceCode
              city = province
              district = district || province
            } else {
              cityCode = adcode.slice(0, 4) + '00'
            }
            res.rjcvMap = {
              lng,
              lat,
              provinceCode,
              province,
              cityCode,
              city,
              districtCode,
              district
            }
          }
          resolve({
            code: 1,
            data: res,
            message: '定位成功'
          })
        })
        // 返回定位出错信息
        window.AMap.event.addListener(geolocation, 'error', (err) => {
          console.log(err)
          reject({
            code: 0,
            message: '定位失败，请开启定位权限'
          })
        })
      })
    } catch (e) {
      console.log(e)
      reject({
        code: 0,
        message: '定位失败'
      })
    }
  })
}

/**
 * @name 定位
 * @param  { Object } option [定位参数]
* @param  { String } url [高德地图sdk.js链接]
 * @return  { Promise } [定位信息]
 */

map.getPosition = (option = {}, url = '//webapi.amap.com/maps?v=1.4.1&key=5bd26f9e57da5668156427983ae9ef2c') => {
  return new Promise(async (resolve, reject) => {
    try {
      await map(async () => {
        try {
          const res = await getPosition(option)
          resolve(res)
        } catch (e) {
          reject({
            code: 0,
            message: '定位失败'
          })
        }
      }, url)
    } catch (e) {
      console.log(e)
      reject({
        code: 0,
        message: '定位失败'
      })
    }
  })
}

export default map

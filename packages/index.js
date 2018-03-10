import pkg from '../package.json'

import actionsheet from './actionsheet'
import asyncload from './asyncload'
import avatar from './avatar'
import avatarview from './avatarview'
import badge from './badge'
import badgeitem from './badgeitem'
import button from './button'
import card from './card'
import cell from './cell'
import checklist from './checklist'
import col from './col'
import dateformate from './dateformate'
import fetch from './fetch'
import icon from './icon'
import image from './image'
import imageoptimizer from './imageoptimizer'
import imagepreview from './imagepreview'
import imageview from './imageview'
import issupportwebp from './issupportwebp'
import lazyloading from './lazyloading'
import loading from './loading'
import loadingdirective from './loadingdirective'
import loadingmethod from './loadingmethod'
import loadingicon from './loadingicon'
import log from './log'
import map from './map'
import mapper from './mapper'
import mask from './mask'
import msgbox from './msgbox'
import pagelist from './pagelist'
import popup from './popup'
import protocol from './protocol'
import radio from './radio'
import row from './row'
import scroll from './scroll'
import star from './star'
import swiper from './swiper'
import swiperitem from './swiperitem'
import switcher from './switcher'
import tab from './tab'
import tabitem from './tabitem'
import title from './title'
import toast from './toast'
import upload from './upload'
import uploader from './uploader'
import xhtml from './xhtml'

const install = (Vue) => {
  Vue.component(actionsheet.name, actionsheet)
  Vue.component(avatar.name, avatar)
  Vue.component(badge.name, badge)
  Vue.component(badgeitem.name, badgeitem)
  Vue.component(button.name, button)
  Vue.component(card.name, card)
  Vue.component(cell.name, cell)
  Vue.component(checklist.name, checklist)
  Vue.component(col.name, col)
  Vue.component(icon.name, icon)
  Vue.component(image.name, image)
  Vue.component(imagepreview.name, imagepreview)
  Vue.component(loading.name, loading)
  Vue.component(loadingicon.name, loadingicon)
  Vue.component(mapper.name, mapper)
  Vue.component(mask.name, mask)
  Vue.component(pagelist.name, pagelist)
  Vue.component(popup.name, popup)
  Vue.component(radio.name, radio)
  Vue.component(row.name, row)
  Vue.component(star.name, star)
  Vue.component(swiper.name, swiper)
  Vue.component(swiperitem.name, swiperitem)
  Vue.component(switcher.name, switcher)
  Vue.component(tab.name, tab)
  Vue.component(tabitem.name, tabitem)
  Vue.component(upload.name, upload)
  Vue.component(uploader.name, uploader)

  Vue.directive('lazyloading', lazyloading)
  Vue.directive('loading', loadingdirective(Vue))
  Vue.directive('scroll', scroll)
  Vue.directive('xhtml', xhtml)

  Vue.filter('avatarview', avatarview)
  Vue.filter('dateformate', dateformate)
  Vue.filter('imageoptimizer', imageoptimizer)
  Vue.filter('imageview', imageview)
  Vue.filter('protocol', protocol)

  Vue.prototype.$$asyncload = asyncload
  Vue.prototype.$$avatarview = avatarview
  Vue.prototype.$$dateformate = dateformate
  Vue.prototype.$$fetch = fetch
  Vue.prototype.$$imageoptimizer = imageoptimizer
  Vue.prototype.$$imageview = imageview
  Vue.prototype.$$issupportwebp = issupportwebp
  Vue.prototype.$$loading = loadingmethod(Vue)
  Vue.prototype.$$log = log
  Vue.prototype.$$map = map
  Vue.prototype.$$msgbox = msgbox(Vue)
  Vue.prototype.$$protocol = protocol
  Vue.prototype.$$title = title
  Vue.prototype.$$toast = toast(Vue)
}

const plugin = {
  version: pkg.version,
  install,
}

// default all components
export default plugin

// specific component
export {
  actionsheet,
  asyncload,
  avatar,
  avatarview,
  badge,
  badgeitem,
  button,
  card,
  cell,
  checklist,
  col,
  dateformate,
  fetch,
  icon,
  image,
  imageoptimizer,
  imagepreview,
  imageview,
  issupportwebp,
  lazyloading,
  loading,
  loadingdirective,
  loadingicon,
  loadingmethod,
  log,
  map,
  mapper,
  mask,
  msgbox,
  pagelist,
  popup,
  protocol,
  radio,
  row,
  scroll,
  star,
  swiper,
  swiperitem,
  switcher,
  tab,
  tabitem,
  title,
  toast,
  upload,
  uploader,
  xhtml,
}

// Auto install the components
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

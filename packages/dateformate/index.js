import './src/style.scss'

const splitTime = (date) => {
  const time = date ? (Object.prototype.toString.call(date) === '[object Date]' ? date : new Date(Number(date))) : new Date()
  return {
    year: time.getFullYear(),
    month: time.getMonth() + 1,
    day: time.getDate(),
    week: time.getDay(),
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

const zerofill = (input) => {
  return input < 10 ? `0${input}` : `${input}`
}

/**
 * @name  时间格式化
 * @param  { Date Object, Number, String } date [时间]
 * @param  { String } format [格式类型] 默认 'YY-MM-DD hh:mm:ss'
 * @param  { Boolean } original [是否以对象形式显示] 默认 false
 * @return {String, Object}
 */

const dateformate = (date, format = 'YY-MM-DD hh:mm:ss', original = false) => {
  const t = splitTime(date)
  return original ? t : format.replace('YY', t.year)
    .replace('MM', zerofill(t.month))
    .replace('DD', zerofill(t.day))
    .replace('hh', zerofill(t.hour))
    .replace('mm', zerofill(t.minute))
    .replace('ss', zerofill(t.second))
}

export default dateformate

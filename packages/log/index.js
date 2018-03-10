import './src/style.scss'

const log = (...args) => {
  if (/rj_debug=on/i.test(location.search) || /rj_debug=on/i.test(document.cookie)) {
    console.log(...args)
  }
}

export default log

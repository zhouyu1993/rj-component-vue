// https://github.com/michael-ciniawsky/postcss-load-config
// http://browserl.ist/?q=%3E+1%25&q=last+3+versions&q=ie+%3E=+9&q=ios+%3E=+8&q=android+%3E=+4.2

module.exports = {
  'plugins': {
    // to edit target browsers: use 'browserslist' field in package.json
    'autoprefixer': {
      'browsers': [
        "> 1%",
        "last 3 versions",
        "ie >= 9",
        "ios >= 8",
        "android >= 4.2"
      ]
    }
  }
}

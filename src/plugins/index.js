import Vue from 'vue'

Vue.prototype.$$showPage = (visible = false) => {
  const app = document.querySelector('.csr .app')
  const loading = document.querySelector('.csr .aside .rjcv-loading')
  if (app) {
    app.style.display = visible ? 'none' : ''
  }
  if (loading) {
    loading.style.display = visible ? '' : 'none'
  }
}

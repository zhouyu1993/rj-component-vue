export default {
  getApp ({ commit }, app) {
    commit('setApp', app)
  },
  getCard ({ commit }, card) {
    commit('setCard', card)
  },
}

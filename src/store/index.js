import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: JSON.parse(sessionStorage.getItem('setUserInfo'))
  },
  mutations: {
    setUserInfo(state, value) {
      sessionStorage.setItem('setUserInfo', JSON.stringify(value))
    }
  },
})
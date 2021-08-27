import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: JSON.parse(sessionStorage.getItem('userInfo'))
  },
  mutations: {
    // userInfo(state, value) {
    //   sessionStorage.setItem('userInfo', JSON.stringify(value))
    // }
  },
})
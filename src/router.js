import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login/index'
import Regist from './views/login/regist.vue'
import MyInfo from './views/content/myInfo/index'

Vue.use(Router)

// Router.beforeEach((to, form, next) => {
  // next()
// })

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          name: 'myInfo',
          component: MyInfo
        }
      ]
    },
    {
      path: '/',
      component: Login,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login,
        },
      ]
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist,
    },
  ]
})
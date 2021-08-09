import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login/index'
import Regist from './views/login/regist.vue'
import MyInfo from './views/content/myInfo/index'
import List from './views/content/List/index.vue'
import WarningInfo from './views/content/List/warningInfo'

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
          meta: '个人信息',
          component: MyInfo
        },
        {
          path: '/myInfo',
          name: 'myInfo',
          meta: '个人信息',
          component: MyInfo
        },
        {
          path: '/list',
          name: 'list',
          meta: '列表',
          component: List
        },
      ]
    },
    {
      path: '/',
      component: Login,
      children: [
        {
          path: '/login',
          name: 'login',
          meta: '登陆',
          component: Login,
        },
      ]
    },
    {
      path: '/regist',
      name: 'regist',
      meta: '注册',
      component: Regist,
    },
    {
      path: '/warningInfo',
      name: 'warningInfo',
      meta: '预警信息',
      component: WarningInfo,
    }
  ]
})
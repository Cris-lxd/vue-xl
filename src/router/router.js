import Vue from 'vue'
import Router from 'vue-router'

import { Message } from 'element-ui';
import { getStorage } from '../utils/SessionUtil'

const Home = () => import('../views/home')
const Login = () => import('../views/login/login')
const Regist = () => import('../views/login/regist.vue')
const MyInfo = () => import('../views/content/myInfo/myInfo')
const List = () => import('../views/content/list')
const WarningInfo = () => import('../views/content/list/warningInfo')
const notfound = () => import('../views/exception/notfound')
const changePwd = () => import('../views/login/changePwd')
const forest = () => import('../views/content/list/yqForest')
const comp = () => import('../views/content/list/componentLibrary')

Vue.prototype.$message = Message

Vue.use(Router)

const routers = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/myInfo',
      children: [
        {
          path: 'myInfo',
          name: 'myInfo',
          meta: '个人信息',
          component: MyInfo
        },
        {
          path: 'list',
          name: 'list',
          meta: '列表',
          component: List
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
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
    },
    {
      path: '/forest',
      name: 'forest',
      meta: '元气森林',
      component: forest,
    },
    {
      path: '/comp',
      name: 'comp',
      meta: '元气森林',
      component: comp,
    },
    {
      path: '/notfound',
      name: 'notfound',
      meta: '404',
      component: notfound
    },
    {
      path: '/changePwd',
      name: 'changePwd',
      meta: '忘记密码',
      component: changePwd
    },
    {
      path: '*',
      redirect: '/notfound'
    }
  ]
})

const notTokenPath = ['login', 'regist', 'notfound', 'warningInfo','changePwd']

routers.beforeEach((to, form, next) => {
  if(getStorage('token')) {
    if(to.path === '/login') {
      next({ path: '/myInfo' })
    } else {
      next()
    }
  } else  {
   if(notTokenPath.indexOf(to.name) !== -1) {
    next()
   } else {
     next('/login')
   }
  }
})



export default routers
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import api from './request/api'
import 'element-ui/lib/theme-chalk/index.css';
import common from './request/common'
import store from './store/index'

Vue.use(ElementUI);
// 引入 i-view UI组件

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI)
console.log(common, 'common')
Vue.prototype.$api = api
Vue.prototype.common = common.common


// Vue.config.productionTip = false

console.log(process.env, '全局变量环境')

new Vue({
  router,
  store,
  render: h => h(App), 
}).$mount('#app')

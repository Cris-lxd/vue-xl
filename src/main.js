import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import common from './utils/common';
import store from './store/index';
import * as echarts from 'echarts';
import ajax from './utils/AjaxUtil';
Vue.use(ElementUI);
// 引入 i-view UI组件

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import '@/assets/iconfont/iconfont.css';

Vue.use(ViewUI)
console.log(common, 'common')
Vue.prototype.$echarts = echarts
Vue.prototype.common = common.common
Vue.prototype.$ajax = ajax


// Vue.config.productionTip = false

console.log(process.env, '全局变量环境')

new Vue({
  router,
  store,
  render: h => h(App), 
}).$mount('#app')

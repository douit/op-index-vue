import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import api from './http/index.js'

/*全局请求拦截处理*/
import './permission.js'

/*mock 模拟数据*/
import './mock/index.js'

/*elementUi*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/*自定义样式*/
import '@/styles/common/index.scss'
import '@/styles/common/elementUi.scss'

Vue.use(ElementUI)
Vue.use(api)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

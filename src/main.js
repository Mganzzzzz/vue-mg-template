import Vue from 'vue'
import App from './App.vue'
import './assets/css/normalize.css'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { log } from '@/utils/help'
import VuePaginate from 'vue-paginate'
Vue.use(ElementUI)
window.log = log
Vue.use(VuePaginate)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

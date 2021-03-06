import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './registerServiceWorker'
import elementUI from 'element-ui'
import '@/assets/element/index.css'
import '@/assets/less/reset.less'
import '@/assets/less/base.less'
import './mock/index.js'

Vue.use(elementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './app.vue'
import router from './routes/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import filter from '@/utils/filter.js'
import store from './store/store.js'
import './index.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MD5 from 'js-md5'
import utils from '@/utils/utils'
import '@/utils/derective'

Vue.use(ElementUI)
Vue.use(VueAxios, axios)

// axios请求地址
axios.defaults.baseURL = 'http://49.234.183.210:8888'
axios.defaults.withCredentials = true

Vue.filter('timeFormat', filter.formatTime)

Vue.prototype.$md5 = MD5
Vue.prototype.$lengthRule = utils.lengthRule

new Vue({
  data: {

  },
  render: function (el) {
    return el(App)
  },
  router,
  store
}).$mount('#app')

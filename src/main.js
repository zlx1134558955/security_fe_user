import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import filter from './utils/filter/filter.js'
import store from './store/store.js'
import './main.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

//axios请求地址
axios.defaults.baseURL = 'http://localhost:8888'
axios.defaults.withCredentials = true

// Vue.filter('timeFormat', filter.timeFormat)


let vm = new Vue({
	data: {

	},
	render: function (el) {
		return el(App)
	},
	router,
	store
}).$mount("#app")
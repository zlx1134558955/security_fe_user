import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
// import filter from './utils/filter/filter.js'
import store from './store/store.js'
import './main.scss'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

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
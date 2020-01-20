import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './routes/home/home.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

export default router
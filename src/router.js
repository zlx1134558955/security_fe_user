import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '@/routes/user/index.vue'
import Admin from '@/routes/admin/index.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/user/home'
        },
        {
            path: '/user',
            component: User,
            name: '用户首页',
            children: [
                
            ]
        },
        {
            path: '/admin',
            component: Admin,
            name: '管理首页'
        }
        // {
        //     path: '/user',
        //     redirect: '/user/home',
        //     children: [
        //         {
                    
        //         }
        //     ]
        // },
        // {
        //     path: ''
        // }
    ]
})

export default router
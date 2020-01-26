import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '@/routes/user/index.vue'
import Admin from '@/routes/admin/index.vue'
import Api from 'Api/user_api.js'
import Home from '@/routes/user/home/index.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/user/home',
            meta: {

            }
        },
        {
            path: '/user',
            component: User,
            name: '用户首页',
            children: [
                {
                    path: '/user/home',
                    component: Home
                },
                {
                    path: '/user/submit'
                }
            ],
            meta: {
                // api: {
                //     register: Api.register,
                //     login: Api.login,
                //     getSiteInfo: Api.getSiteInfo,
                //     getUserInfo: Api.getUserInfo
                // }
            }
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
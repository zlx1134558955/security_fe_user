import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '@/routes/user/index.vue'
import Admin from '@/routes/admin/index.vue'
import Api from 'Api/user_api.js'
import Home from '@/routes/user/home/index.vue'
import Submit from '@/routes/user/submit/index.vue'
import Member from '@/routes/user/member/index.vue'

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
            children: [
                {
                    path: '/user/home',
                    component: Home,
                    name: '首页'
                },
                {
                    path: '/user/submit',
                    component: Submit,
                    name: '提交漏洞'
                },
                {
                    path: '/user/member',
                    component: Member,
                    name: '个人中心',
                    meta: {
                        api: {
                            getMember: Api.getMember,
                            updateMember: Api.updateMember,
                            setAvatar: Api.setAvatar
                        }
                    }
                },
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
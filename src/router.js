import Vue from 'vue'
import VueRouter from 'vue-router'

import Api from 'Config/api.js'
import Home from '@/routes/home/index.vue'
import Submit from '@/routes/submit/index.vue'
import Member from '@/routes/member/index.vue'
import Mypost from '@/routes/member/components/mypost/index.vue'
import HomePage from '@/routes/member/components/homepage/index.vue'
import Person from '@/routes/member/components/person/index.vue'
import Detail from '@/routes/member/components/post-detail/index.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
            meta: {

            }
        },

        {
            path: '/home',
            component: Home,
            name: '首页'
        },
        {
            path: '/submit',
            component: Submit,
            name: '提交漏洞',
            meta: {
                api: {
                    getCategory: Api.getCategory,
                    insertImg: Api.insertImg,
                    submitPost: Api.submitPost
                }
            }
        },
        {
            path: '/member',
            component: Member,
            name: '个人中心',
            meta: {
                api: {
                    getUserInfo: Api.getUserInfo
                }
            },
            children: [
                {
                    path: '/member/homepage',
                    component: HomePage,
                    name: '个人主页',
                    meta: {
                        api: {
                            getMember: Api.getMember,
                            getUserInfo: Api.getUserInfo,
                        },
                        tab: 'homepage'
                    }
                },
                {
                    path: '/member/mypost',
                    component: Mypost,
                    name: '我提交的',
                    meta: {
                        api: {
                            getUserInfo: Api.getUserInfo,
                            getPostList: Api.getPostList
                        },
                        tab: 'mypost'
                    }
                },
                {
                    path: '/member/person',
                    component: Person,
                    name: '个人信息',
                    meta: {
                        api: {
                            getMember: Api.getMember,
                            updateMember: Api.updateMember,
                            setAvatar: Api.setAvatar,
                            getUserInfo: Api.getUserInfo,
                            addAddress: Api.addAddress,
                            editAddress: Api.editAddress,
                            deleteAddress: Api.deleteAddress,
                            getAddressList: Api.getAddressList
                        },
                        tab: 'person'
                    }
                },
                {
                    path: '/member/post-detail',
                    component: Detail,
                    name: '漏洞详情',
                    meta: {
                        api: {
                            getUserInfo: Api.getUserInfo,
                            getPostDetail: Api.getPostDetail,
                            getCategoryMap: Api.getCategoryMap,
                            getPostState: Api.getPostState,
                            getAttachment: Api.getAttachment
                        },
                        tab: 'mypost'
                    }
                }
            ]
        },
    ]
})

export default router
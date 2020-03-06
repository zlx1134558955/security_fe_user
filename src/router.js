import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '@/routes/user/index.vue'
import Admin from '@/routes/admin/index.vue'
import Api from 'Config/user_api.js'
import AdminApi from 'Config/admin_api'
import Home from '@/routes/user/home/index.vue'
import Submit from '@/routes/user/submit/index.vue'
import Member from '@/routes/user/member/index.vue'
import Setting from '@/routes/admin/setting_manage/index.vue'
import Mypost from '@/routes/user/member/components/mypost/index.vue'
import HomePage from '@/routes/user/member/components/homepage/index.vue'
import Person from '@/routes/user/member/components/person/index.vue'
import Detail from '@/routes/user/member/components/post-detail/index.vue'
import FrontUser from '@/routes/admin/user_manage/front-user/index.vue'
import AdminUser from '@/routes/admin/user_manage/admin-user/index.vue'
import PostList from '@/routes/admin/post_manage/index.vue'
import PostDetail from '@/routes/admin/post_detail/index.vue'
import CategoryManage from '@/routes/admin/category-manage/index.vue'
import GiftManage from '@/routes/admin/gift-manage/gift-manage/index.vue'

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
                    path: '/user/member',
                    component: Member,
                    name: '个人中心',
                    meta: {
                        api: {
                            getUserInfo: Api.getUserInfo
                        }
                    },
                    children: [
                        {
                            path: '/user/member/homepage',
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
                            path: '/user/member/mypost',
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
                            path: '/user/member/person',
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
                            path: '/user/member/post-detail',
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
        },
        {
            path: '/admin',
            component: Admin,
            name: '管理首页',
            children: [
                {
                    path: '/admin/setting',
                    component: Setting,
                    name: '站点管理',
                    meta: {
                        api: {
                            setWebsite: AdminApi.setWebsite
                        }
                    }
                },
                {
                    path: '/admin/front-user',
                    component: FrontUser,
                    name: '前台用户',
                    meta: {
                        api: {
                            getFrontUsers: AdminApi.getFrontUsers,
                            forbidFrontUser: AdminApi.forbidFrontUser,
                            unfreezeFrontUser: AdminApi.unfreezeFrontUser,
                            deleteFrontUser: AdminApi.deleteFrontUser
                        }
                    }
                },
                {
                    path: '/admin/admin-user',
                    component: AdminUser,
                    name: '前台用户',
                    meta: {
                        api: {
                            getAdminUsers: AdminApi.getAdminUsers,
                            forbidFrontUser: AdminApi.forbidFrontUser,
                            unfreezeFrontUser: AdminApi.unfreezeFrontUser,
                            deleteFrontUser: AdminApi.deleteFrontUser,
                            addAdmin: AdminApi.addAdmin,
                            forbidAdminUser: AdminApi.forbidAdminUser,
                            unfreezeAdminUser: AdminApi.unfreezeAdminUser,
                            deleteAdminUser: AdminApi.deleteAdminUser
                        }
                    }
                },
                {
                    path: '/admin/post-list',
                    component: PostList,
                    name: '漏洞提交列表',
                    meta: {
                        api: {
                            getPostList: AdminApi.getPostList,
                            getCategory: AdminApi.getCategory
                        }
                    }
                },
                {
                    path: '/admin/post-detail',
                    component: PostDetail,
                    name: '漏洞详情审核',
                    meta: {
                        api: {
                            getPostDetail: AdminApi.getPostDetail,
                            getCategoryMap: Api.getCategoryMap,
                            reviewPost: AdminApi.reviewPost,
                            getPostState: AdminApi.getPostState,
                            getAttachment: AdminApi.getAttachment
                        }
                    }
                },
                {
                    path: '/admin/category-manage',
                    component: CategoryManage,
                    name: '漏洞分类管理',
                    meta: {
                        api: {
                            getCategoryMap: Api.getCategoryMap,
                            updateCategory: AdminApi.updateCategory
                        }
                    }
                },
                {
                    path: '/admin/gift-manage',
                    component: GiftManage,
                    name: '礼品管理',
                    meta: {
                        api: {
                            addGift: AdminApi.addGift,
                            editGift: AdminApi.editGift,
                            getGiftCate: AdminApi.getGiftCate,
                            getGiftsList: AdminApi.getGiftsList
                        }
                    }
                }
            ]
        }
    ]
})

export default router
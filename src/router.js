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
import Gift from '@/routes/gifts/index.vue'
import GiftDetail from '@/routes/gifts/gift-detail/index.vue'
import GiftOrder from '@/routes/member/components/gift-order/index.vue'
import GiftOrderDetail from '@/routes/member/components/gift-order-detail/index.vue'
import Notice from '@/routes/notice/index.vue'
import NoticeDetail from '@/routes/notice/notice-detail/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      name: '首页',
      meta: {
        headerTab: 'home'
      }
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
        },
        headerTab: 'submit'
      }
    },
    {
      path: '/gift',
      component: Gift,
      name: '礼物兑换',
      meta: {
        api: {
          getGiftCate: Api.getGiftCate,
          getGiftList: Api.getGiftList,
          getMember: Api.getMember
        },
        headerTab: 'gift'
      }
    },
    {
      path: '/gift-detail',
      component: GiftDetail,
      name: '礼品详情',
      meta: {
        api: {
          getGiftDetail: Api.getGiftDetail,
          getMember: Api.getMember,
          exchangeGift: Api.exchangeGift,
          getGiftCate: Api.getGiftCate,
          addAddress: Api.addAddress,
          editAddress: Api.editAddress,
          getAddressList: Api.getAddressList
        },
        headerTab: 'gift'
      }
    },
    {
      path: '/notice',
      component: Notice,
      name: '网站公告',
      meta: {
        api: {
          getNoticeList: Api.getNoticeList
        },
        headerTab: 'notice'
      }
    },
    {
      path: '/notice-detail',
      component: NoticeDetail,
      name: '公告详情',
      meta: {
        api: {
          getNoticeDetail: Api.getNoticeDetail,
          getNoticeAttachment: Api.getNoticeAttachment
        },
        headerTab: 'notice'
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
              getUserInfo: Api.getUserInfo
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
          path: '/member/gift-order',
          component: GiftOrder,
          name: '礼品订单',
          meta: {
            api: {
              getUserInfo: Api.getUserInfo,
              getOrderList: Api.getOrderList
            },
            tab: 'gift-order'
          }
        },
        {
          path: '/member/gift-order-detail',
          component: GiftOrderDetail,
          name: '礼品订单详情',
          meta: {
            api: {
              getGiftOrder: Api.getGiftOrder,
              getUserInfo: Api.getUserInfo
            },
            tab: 'gift-order'
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
    }
  ]
})

export default router

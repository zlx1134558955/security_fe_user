import Vue from 'vue'
import VueRouter from 'vue-router'

import Api from 'Config/api.js'
import Home from '@/routes/home/index.vue'
import Submit from '@/routes/submit/index.vue'
import Member from '@/routes/member/index.vue'
import Mypost from '@/routes/member/mypost/post-record/index.vue'
import HomePage from '@/routes/member/homepage/index.vue'
import Person from '@/routes/member/person/index.vue'
import Detail from '@/routes/member/mypost/post-detail/index.vue'
import Gift from '@/routes/gifts/gift-list/index.vue'
import GiftDetail from '@/routes/gifts/gift-detail/index.vue'
import GiftOrder from '@/routes/member/gift/gift-order/index.vue'
import GiftOrderDetail from '@/routes/member/gift/gift-order-detail/index.vue'
import NoticeList from '@/routes/notice/notice-list/index.vue'
import NoticeDetail from '@/routes/notice/notice-detail/index.vue'
import Ranking from '@/routes/ranking/index.vue'
import Account from '@/routes/member/account/index.vue'

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
          category: Api.category,
          postInsert: Api.postInsert,
          post: Api.post
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
          giftCategory: Api.giftCategory,
          giftList: Api.giftList,
          memberInfo: Api.memberInfo
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
          gift: Api.gift,
          memberInfo: Api.memberInfo,
          giftOrder: Api.giftOrder,
          giftCategory: Api.giftCategory,
          address: Api.address
        },
        headerTab: 'gift'
      }
    },
    {
      path: '/notice',
      component: NoticeList,
      name: '网站公告',
      meta: {
        api: {
          noticeList: Api.noticeList
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
          notice: Api.notice,
          noticeAttachment: Api.noticeAttachment
        },
        headerTab: 'notice'
      }
    },
    {
      path: '/ranking',
      component: Ranking,
      name: '排行榜',
      meta: {
        api: {
          memberRanking: Api.memberRanking
        },
        headerTab: 'ranking'
      }
    },
    {
      path: '/member',
      component: Member,
      name: '个人中心',
      meta: {
        api: {
          member: Api.member
        }
      },
      children: [
        {
          path: '/member/homepage',
          component: HomePage,
          name: '个人主页',
          meta: {
            api: {
              memberInfo: Api.memberInfo,
              member: Api.member
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
              member: Api.member,
              postlist: Api.postlist
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
              member: Api.member,
              giftOrderList: Api.giftOrderList
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
              giftOrder: Api.giftOrder,
              member: Api.member,
              tracking: Api.tracking
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
              memberInfo: Api.memberInfo,
              member: Api.member,
              address: Api.address
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
              member: Api.member,
              post: Api.post,
              category: Api.category,
              postState: Api.postState,
              postAttachment: Api.postAttachment
            },
            tab: 'mypost'
          }
        },
        {
          path: '/member/account',
          component: Account,
          name: '安全账户',
          meta: {
            api: {
              pointsRecord: Api.pointsRecord,
              scoreRecord: Api.scoreRecord,
              member: Api.member,
              memberInfo: Api.memberInfo
            },
            tab: 'account'
          }
        }
      ]
    }
  ]
})

export default router

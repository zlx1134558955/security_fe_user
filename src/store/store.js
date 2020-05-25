import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    site: {
      site_name_cn: '',
      site_name_en: '',
      site_intro: '',
      site_abbrev: '',
      site_qq: '',
      site_email: '',
      site_weibo: '',
      site_wechat: ''
    },
    userInfo: {
      username: '',
      id: '',
      avatar: ''
    },
    needLogin: false
  },
  mutations: {
    getSite (state, data) {
      state.site = data
    },
    getUserInfo (state, data) {
      state.userInfo = data ? {
        username: data.username,
        id: data.id,
        avatar: data.avatar
      } : {
        username: '',
        id: '',
        avatar: ''
      }
    },
    changeLogin (state, value) {
      state.needLogin = value
    }
  },
  actions: {
    getSite ({ commit }, data) {
      commit('getSite', data)
    },
    getUserInfo ({ commit }, data) {
      commit('getUserInfo', data)
    }
  }
})
export default store

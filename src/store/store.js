import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        site: {
            site_name_cn: '',
            site_name_en: '',
            site_intro: '',
            site_abbrev: ''
        },
        userInfo: {
            username: '',
            pid: '',
            avatar: ''
        }
    },
    mutations: {
        getSite(state, data) {
            state.site = {
                site_name_cn: data[0].value,
                site_intro: data[1].value,
                site_name_en: data[9].value,
                site_abbrev: data[10].value
            }
        },
        getUserInfo(state, data) {
            state.userInfo = data ? {
                username: data.username,
                pid: data.pid,
                avatar: data.avatar
            } : {
                    username: '',
                    pid: '',
                    avatar: ''
                }
        }
    },
    actions: {
        getSite({ commit }, data) {
            commit('getSite', data)
        },
        getUserInfo({ commit }, data) {
            commit('getUserInfo', data)
        }
    }
})
export default store
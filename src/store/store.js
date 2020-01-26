import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        site: {
            site_name_cn: '',
            site_name_en: '',
            site_intro: ''
        },
        userInfo: {
            username: '',
            pid: ''
        }
    },
    mutations: {
        getSiteInfo(state, data) {
            state.site = {
                site_name_cn: data[0].value,
                site_intro: data[1].value,
                site_name_en: data[9].value,
            }
        },
        getUserInfo(state, data) {
            if(!data){
                data = {
                    username: '',
                    pid: ''
                }
            }
            state.userInfo = {
                username: data.username,
                pid: data.pid
            }
        }
    }
})
export default store
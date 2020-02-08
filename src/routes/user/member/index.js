import Tip from '@/routes/user/components/tip/index.vue'
import Person from './components/person/index.vue'
export default {
    data() {
        return {
            title: '个人中心',
            desc: '',
            userInfo: {
                id: '',
                username: '',
                avatar: ''
            },
            active: this.$router.history.current.query.active ? this.$router.history.current.query.active : 'center'
        }
    },
    computed: {
    },
    components: {
        Tip,
        Person
    },
    methods: {
        getUserInfo() {
            let url = this.$route.meta.api.getUserInfo
            this.axios.get(url).then(res => {
                if (res.data.data) {
                    this.userInfo = res.data.data
                } else {
                    this.$router.push('/user/home')
                }
            })
        }
    },
    created(){
        this.getUserInfo()
    }
}
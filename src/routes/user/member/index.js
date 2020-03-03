import Tip from '@/routes/user/components/tip/index.vue'
import Person from './components/person/index.vue'
import Mypost from './components/mypost/index.vue'
import HomePage from './components/homepage/index.vue'
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
            active: this.$router.history.current.meta.tab
        }
    },
    computed: {
    },
    components: {
        Tip,
        Person,
        Mypost,
        HomePage
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
        },
        jump(target) {
            let url = `/user/member/${target}`
            if(url === this.$router.history.current.path){
                return
            }
            this.$router.push(url)
        }
    },
    created(){
        this.getUserInfo()
    }
}
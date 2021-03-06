import Tip from '@/components/tip/index.vue'
import Person from './person/index.vue'
import Mypost from './mypost/post-record/index.vue'
import HomePage from './homepage/index.vue'
export default {
  data () {
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
    getUserInfo () {
      const url = this.$route.meta.api.member
      this.axios.get(url).then(res => {
        if (res.data.data) {
          this.userInfo = res.data.data
        } else {
          this.$router.push('/home')
        }
      })
    },
    jump (target) {
      const url = `/member/${target}`
      if (url === this.$router.history.current.path) {
        return
      }
      this.$router.push(url)
    }
  },
  created () {
    this.getUserInfo()
  }
}

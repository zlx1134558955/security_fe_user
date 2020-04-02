import Tip from '@/components/tip/index.vue'
import ENV from 'Config/env.js'
import HeadName from '@/components/head_name/index.vue'
export default {
  data () {
    return {
      pageTitle: '排行榜',
      desc: '感谢有你们守护',
      title: '',
      list: [],
      env: ENV
    }
  },
  components: {
    Tip,
    HeadName
  },
  computed: {
  },
  created () {
    this.getRanking()
  },
  methods: {
    getRanking () {
      const url = this.$route.meta.api.memberRanking
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.list = res.data.data
        }
      })
    },
    getLevel (val) {
      switch (true) {
        case val < 10:
          return '青铜安全员'
        case val < 50:
          return '白银安全员'
        case val < 100:
          return '黄金安全员'
        case val < 200:
          return '铂金安全员'
        case val < 400:
          return '钻石安全员'
        case val < 700:
          return '星耀安全员'
        case val < 1000:
          return '王者安全员'
        default:
          return '荣耀安全员'
      }
    }
  },
  watch: {
  }
}

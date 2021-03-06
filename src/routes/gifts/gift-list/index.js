import Tip from '@/components/tip/index.vue'
import ENV from 'Config/env.js'
export default {
  data () {
    return {
      title: '礼品兑换',
      desc: '安全点兑好礼~',
      giftCateList: [],
      activeCate: '-1',
      giftList: [],
      env: ENV,
      points: 0
    }
  },
  components: {
    Tip
  },
  computed: {
    is_login () {
      return !!this.$store.state.userInfo.id
    }
  },
  created () {
    this.getMember()
    this.getGiftCate()
    this.getGiftList()
  },
  methods: {
    getGiftCate () {
      const url = this.$route.meta.api.giftCategory
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.giftCateList = res.data.data
          this.giftCateList.unshift({ id: -1, name: '全部' })
        }
      })
    },
    getGiftList () {
      const form = {
        gift_category_id: parseInt(this.activeCate),
        visible: 1,
        title: ''
      }
      const url = this.$route.meta.api.giftList
      this.axios.put(url, form).then(res => {
        if (res.data.code === 0) {
          this.giftList = res.data.data.rows
        }
      })
    },
    lookDetail (id) {
      this.$router.push(`/gift-detail?id=${id}`)
    },
    getMember () {
      const url = this.$route.meta.api.memberInfo
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.points = res.data.data.points
        }
      })
    }
  },
  watch: {
    activeCate (val) {
      this.getGiftList()
    },
    is_login (val) {
      this.getMember()
    }
  }
}

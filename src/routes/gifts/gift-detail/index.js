import Tip from '@/routes/components/tip/index.vue'
import ENV from 'Config/env.js'
export default {
  data () {
    return {
      title: '礼品兑换',
      desc: '安全点兑好礼~',
      env: ENV,
      id: 0,
      gift: {
        title: '',
        image: '',
        stock: 0,
        type: '',
        price: 0,
        detail: ''
      },
      points: 0,
      num: 1
    }
  },
  computed: {
    is_login () {
      return !!this.$store.state.userInfo.id
    }
  },
  components: {
    Tip
  },
  created () {
    this.id = this.$router.history.current.query.id
    this.getMember()
    this.getGiftDetail()
  },
  methods: {
    getGiftDetail () {
      const url = this.$route.meta.api.getGiftDetail
      const form = {
        id: this.id
      }
      this.axios.post(url, form).then(res => {
        if (res.data.code === 0) {
          this.gift = res.data.data
          this.gift.image = `${this.env.giftDIR}${this.gift.image}`
        }
      })
    },
    getMember () {
      const url = this.$route.meta.api.getMember
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.points = res.data.data.points
        }
      })
    },
    exchangeGift () {
      if (!this.is_login) {
        this.$store.commit('changeLogin', true)
        return
      }
      const url = this.$route.meta.api.exchangeGift
      const form = {
        num: this.num,
        gift_id: parseInt(this.id)
      }
      this.axios.post(url, form).then(res => {
        if (res.data.code === 0) {
          this.$message({
            message: '订单提交成功',
            type: 'success'
          })
          this.$router.push('/member/gift-order')
        } else {
          this.$message({
            message: res.data.message,
            type: 'warning'
          })
        }
      })
    },
    back () {
      this.$router.push('/gift')
    }
  },
  watch: {
    is_login (val) {
      this.getMember()
    }
  }
}

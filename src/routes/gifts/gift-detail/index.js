import Tip from '@/routes/components/tip/index.vue'
import ENV from 'Config/env.js'
import SelectAddress from '../select-address/index.vue'
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
      giftCateList: {},
      points: 0,
      num: 1,
      showSelectAddress: false,
      defaultAddress: {
        realname: '',
        zipcode: '',
        mobile: '',
        adetail: '',
        id: 0
      }
    }
  },
  computed: {
    is_login () {
      return !!this.$store.state.userInfo.id
    }
  },
  components: {
    Tip,
    SelectAddress
  },
  created () {
    this.id = this.$router.history.current.query.id
    this.getMember()
    this.getGiftCate()
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
      if (!this.defaultAddress.id) {
        this.$message({
          message: '请选择收货地址',
          type: 'warning'
        })
        return
      }
      if (!this.is_login) {
        this.$store.commit('changeLogin', true)
        return
      }
      const url = this.$route.meta.api.exchangeGift
      const form = {
        num: this.num,
        gift_id: parseInt(this.id),
        address: this.defaultAddress.id
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
    getGiftCate () {
      const url = this.$route.meta.api.getGiftCate
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          const list = res.data.data
          list.forEach(item => {
            this.giftCateList[item.id] = item.name
          })
        }
      })
    },
    back () {
      this.$router.push('/gift')
    },
    openSelect () {
      this.showSelectAddress = true
    },
    closeSelect () {
      this.showSelectAddress = false
    },
    setDefaultAddress (item) {
      for (const key in this.defaultAddress) {
        this.defaultAddress[key] = item[key]
      }
    }
  },
  watch: {
    is_login (val) {
      if (!val) return
      this.getMember()
      this.getGiftDetail()
    }
  }
}

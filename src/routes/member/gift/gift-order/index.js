import MAP from '@/assets/map/map.js'
export default {
  data () {
    return {
      list: [],
      map: MAP
    }
  },
  computed: {
    num () {
      return this.list.length
    }
  },
  methods: {
    getOrderList () {
      const url = this.$route.meta.api.giftOrderList
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.list = res.data.data
        }
      })
    },
    jumpDetail (id) {
      this.$router.push(`/member/gift-order-detail?id=${id}`)
    }
  },
  created () {
    this.getOrderList()
  }
}

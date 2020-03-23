import MAP from '@/assets/map/map.js'
import ENV from 'Config/env'
export default {
  data () {
    return {
      id: this.$router.history.current.query.id,
      detail: {
        id: 1,
        num: 1,
        status: 1,
        type: 2,
        content: '',
        company: '',
        tracking_number: '',
        end_time: '',
        create_time: '',
        title: '',
        image: '',
        realname: '',
        zipcode: '',
        adetail: '',
        mobile: ''
      },
      map: MAP,
      steps: [
        {
          content: '处理中',
          timestamp: '',
          color: '#409EFF'
        },
        {
          content: '已发放',
          timestamp: ''
        }
      ],
      env: ENV
    }
  },
  created () {
    this.getGiftOrder()
  },
  methods: {
    formatTime (value, fmt) {
      const getDate = new Date(parseInt(value))
      const o = {
        'M+': getDate.getMonth() + 1,
        'd+': getDate.getDate(),
        'h+': getDate.getHours(),
        'm+': getDate.getMinutes(),
        's+': getDate.getSeconds()
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
    },
    getGiftOrder () {
      const url = this.$route.meta.api.getGiftOrder
      const form = {
        id: parseInt(this.id)
      }
      this.axios.post(url, form).then(res => {
        if (res.data.code === 0) {
          this.detail = res.data.data
          this.detail.image = this.env.giftDIR + res.data.data.image
          this.steps[0].timestamp = this.formatTime(res.data.data.create_time, 'yyyy-MM-dd hh:mm:ss')
          if (res.data.data.end_time && res.data.data.status === 2) {
            this.steps[1].timestamp = this.formatTime(res.data.data.end_time, 'yyyy-MM-dd hh:mm:ss')
            this.steps[1].color = '#409EFF'
          }
          if (res.data.data.end_time && res.data.data.status === 3) {
            this.steps[1].timestamp = this.formatTime(res.data.data.end_time, 'yyyy-MM-dd hh:mm:ss')
            this.steps[1].content = '已取消'
            this.steps[1].color = '#409EFF'
          }
        }
      })
    },
    back () {
      this.$router.push('/member/gift-order')
    }
  }
}

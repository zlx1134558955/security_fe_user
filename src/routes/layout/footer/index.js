import ENV from 'Config/env'
export default {
  data () {
    return {
    }
  },
  computed: {
    qq () {
      return this.$store.state.site.site_qq
    },
    weibo () {
      return this.$store.state.site.site_weibo
    },
    email () {
      return this.$store.state.site.site_email
    },
    wechat_url () {
      return this.$store.state.site.site_wechat ? `${ENV.settingDIR}${this.$store.state.site.site_wechat}` : ''
    }
  },
  methods: {
    toWeibo () {
      window.open(this.weibo)
    }
  }
}

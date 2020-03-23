import ENV from 'Config/env'
const { resolve } = require('path')
export default {
  data () {
    return {
      dir: resolve(__dirname, './src/assets/svg/')
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

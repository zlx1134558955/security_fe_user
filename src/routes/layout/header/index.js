import ENV from 'Config/env.js'
export default {
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    },
    activeIndex () {
      return this.$route.meta.headerTab
    },
    avatar_url () {
      return `${ENV.headerDIR}${this.$store.state.userInfo.avatar}`
    }
  },
  methods: {
    handleSelect (key) {
      const target = `/${key}`
      if (this.$route.path === target) return
      this.$router.push(target)
    },
    register () {
      this.$emit('register')
    },
    login () {
      this.$emit('login')
    },
    logout () {
      this.$emit('logout')
    },
    toMember () {
      const target = '/member'
      if (this.$route.path === target) return
      this.$router.push('/member/homepage')
    },
    handleCommand (command) {
      if (command === 'logout') this.logout()
      if (command === 'member') this.toMember()
    }
  }
}

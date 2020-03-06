import ENV from 'Config/env.js'
export default {
    computed: {
        userInfo() {
            return this.$store.state.userInfo
        },
        activeIndex() {
            let params = this.$route.path.split('/')
            return params[params.length - 1]
        },
        avatar_url() {
            return `${ENV.headerDIR}${this.$store.state.userInfo.avatar}`
        }
    },
    methods: {
        handleSelect(key) {
            let target = `/${key}`
            if(this.$route.path === target) return
            this.$router.push(target)
        },
        register() {
            this.$emit('register')
        },
        login(){
            this.$emit('login')
        },
        logout(){
            this.$emit('logout')
        },
        toMember(){
            let target = '/member'
            if(this.$route.path === target) return
            this.$router.push('/member/homepage')
        },
        handleCommand(command) {
            if(command === 'logout') this.logout()
            if(command === 'member') this.toMember()
        }
    }
}
 
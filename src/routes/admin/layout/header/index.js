import ENV from 'Config/env.js'
export default {
    computed: {
        adminInfo() {
            return this.$store.state.adminInfo
        },
        avatar_url() {
            return `${ENV.headerDIR}${this.$store.state.adminInfo.avatar}`
        },
        type() {
            return this.$store.state.adminInfo.type
        }
    },
    methods: {
        login(){
            this.$emit('login')
        },
        handleCommand(command) {
            if(command === 'logout') this.logout()
        },
        logout(){
            this.$emit('logout')
        },
    }
}
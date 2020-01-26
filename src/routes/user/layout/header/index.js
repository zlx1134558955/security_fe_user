export default {
    data() {
        return {
        };
    },
    computed: {
        siteNameCN() {
            return this.$store.state.site.site_name_cn
        },
        siteNameEN() {
            return this.$store.state.site.site_name_en
        },
        userInfo() {
            return this.$store.state.userInfo
        },
        activeIndex() {
            let params = this.$route.path.split('/')
            return params[params.length - 1]
        }
    },
    methods: {
        handleSelect(key) {
            let target = `/user/${key}`
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
        handleCommand(command) {
            if(command === 'logout') this.logout()
        }
    },
    created() {
        
    }
}
 
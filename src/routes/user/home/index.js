export default {
    data() {
        return {
           
        }
    },
    computed: {
        site_abbrev() {
            return this.$store.state.site.site_abbrev
        }
    },
    methods: {
        jump(){
            this.$router.push('/user/submit')
        }
    },
    created() {
    }
}
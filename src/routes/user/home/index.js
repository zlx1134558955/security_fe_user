import Api from 'Api/user_api.js'
export default {
    data() {
        return {
           
        }
    },
    computed: {
    },
    methods: {
        jump(){
            this.$router.push('/user/submit')
        }
    },
    created() {
    }
}
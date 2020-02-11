export default {
    data() {
        return {
            active: '2'
        }
    },
    computed: {

    },
    methods: {
        jump(target) {
            if(target === this.$router.history.current.path){
                return
            }
            this.$router.push(target)
        }
    }
}
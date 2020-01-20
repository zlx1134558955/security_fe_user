<template>
    <div>
        <!-- <User v-if='curUrl === "user"'></User>
        <Admin v-if='curUrl === "admin"'></Admin> -->
        <router-view></router-view>
    </div>
</template>
<style scoped lang="scss">
</style>
<script>
    // import User from '@/routes/user/index.vue'
    // import Admin from '@/routes/admin/index.vue'
    import Api from '../api/user_api.js'
    export default {
        // components: {
        //     User,
        //     Admin
        // },
        data() {
            return {
                curUrl: ''
            }
        },
        created() {
            // this.getCurUrl()
            this.getSiteInfo()
        },
        methods: {
            getCurUrl() {
                this.curUrl = this.$route.path.split('/')[1]
            },
            getSiteInfo() {
                this.$http.get(Api.getSiteInfo).then(data => {
                    if(data.ok){
                        console.log(data.body)
                        this.$store.commit('getSiteInfo', data.body)
                        console.log(this.$store.state)
                    }
                })
            }
        }
    }
</script>
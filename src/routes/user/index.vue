<template>
    <div>
        <el-container>
            <el-header>
                <Header @register="register" @login="login" @logout="logout"></Header>
            </el-header>
            <div class="main">
                <router-view></router-view>
            </div>
            <el-footer>Footer</el-footer>
        </el-container>
        <Register :showRegister="showRegister" @close="closeRegister"></Register>
        <Login :showLogin="showLogin" @close="closeLogin"></Login>
    </div>
</template>
<style scoped lang="scss">
    .el-header,
    .el-footer {
        width: 100%;
        color: #303133;
        text-align: center;
    }
    body>.el-container {
        margin-bottom: 40px;
    }
    .main {
        padding-top: 1px;
    }
</style>
<script>
    import Api from 'Api/user_api.js'
    import Header from '@/routes/user/layout/header/index.vue'
    import Register from '@/routes/user/components/register/index.vue'
    import Login from '@/routes/user/components/login/index.vue'
    import Home from '@/routes/user/home/index.vue'
    export default {
        components: {
            Header,
            Register,
            Login,
            Home
        },
        data() {
            return {
                showRegister: false,
                showLogin: false
            }
        },
        created() {
            this.getSiteInfo(),
            this.getUserInfo()
        },
        methods: {
            register(){
                this.showRegister = true
            },
            login(){
                this.showLogin = true
            },
            closeRegister() {
                this.showRegister = false
            },
            closeLogin() {
                this.showLogin = false
            },
            getSiteInfo() {
                this.axios.get(Api.getSiteInfo).then(res => {
                    if(res.data.code === 0){
                        this.$store.commit('getSiteInfo', res.data.data)
                    }
                })
            },
            getUserInfo() {
                this.axios.get(Api.getUserInfo).then(res => {
                    if(res.data.code === 0){
                        this.$store.commit('getUserInfo', res.data.data)
                    }
                })
            },
            logout() {
                this.axios.get(Api.logout).then(res => {
                    if(res.data.code === 0){
                        this.$store.commit('getUserInfo', null)
                        this.$message('已退出登录')
                    }
                })
            }
        }
    }
</script>
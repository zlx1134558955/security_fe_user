<template>
    <el-container>
        <Aside></Aside>
        <el-container class="right">
            <Header @login="login" @logout="logout"></Header>
            <el-main>Main</el-main>
        </el-container>
        <Register :showRegister="showRegister" @close="closeRegister"></Register>
        <Login :showLogin="showLogin" @close="closeLogin"></Login>
    </el-container>
</template>
<style scoped lang="scss">
    .el-container {
        height: 100vh;
    }
    .right {
        flex-direction: column;
    }
</style>
<script>
    import Register from '@/routes/admin/components/register/index.vue'
    import Login from '@/routes/admin/components/login/index.vue'
    import Aside from '@/routes/admin/layout/aside/index.vue'
    import Header from '@/routes/admin/layout/header/index.vue'
    import Api from 'Config/admin_api.js'
    export default {
        components: {
            Register,
            Login,
            Aside,
            Header
        },
        data() {
            return {
                showRegister: false,
                showLogin: false
            }
        },
        created() {
            this.getAdminInfo()
        },
        methods: {
            register() {
                this.showRegister = true
            },
            login() {
                this.showLogin = true
            },
            closeRegister() {
                this.showRegister = false
            },
            closeLogin() {
                this.showLogin = false
            },
            getAdminInfo() {
                this.axios.get(Api.getAdminInfo).then(res => {
                    if (res.data.code === 0) {
                        this.$store.dispatch('getAdminInfo', res.data.data)
                    }
                })
            },
            logout() {
                this.axios.get(Api.logout).then(res => {
                    if (res.data.code === 0) {
                        this.$store.dispatch('getAdminInfo', null)
                        this.$message('已退出登录')
                    }
                })
            }
        }
    }
</script>
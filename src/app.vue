<template>
  <div>
    <Header @register="register" @login="login" @logout="logout"></Header>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
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
    min-height: 800px;
  }
</style>
<script>
  import Api from 'Config/api.js'
  import Header from '@/routes/layout/header/index.vue'
  import Footer from '@/routes/layout/footer/index.vue'
  import Register from '@/components/register/index.vue'
  import Login from '@/components/login/index.vue'
  import Home from '@/routes/home/index.vue'
  export default {
    components: {
      Header,
      Footer,
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
      this.getSite(),
        this.getUserInfo()
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
        this.$store.commit('changeLogin', false)
      },
      getSite() {
        this.axios.get(Api.getSite).then(res => {
          if (res.data.code === 0) {
            this.$store.dispatch('getSite', res.data.data)
          }
        })
      },
      getUserInfo() {
        this.axios.get(Api.getUserInfo).then(res => {
          if (res.data.code === 0) {
            this.$store.dispatch('getUserInfo', res.data.data)
          }
        })
      },
      logout() {
        this.axios.get(Api.logout).then(res => {
          if (res.data.code === 0) {
            this.$store.dispatch('getUserInfo', null)
            this.$message('已退出登录')
          }
        })
      }
    }
  }
</script>
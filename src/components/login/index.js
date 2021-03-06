import Api from 'Config/api.js'
export default {
  data () {
    return {
      labelPosition: 'right',
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      },
      err: '',
      fullscreenLoading: false
    }
  },
  props: ['showLogin'],
  computed: {
    site_abbrev () {
      return this.$store.state.site.site_abbrev
    },
    needLogin () {
      return this.$store.state.needLogin
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    login () {
      this.err = ''
      // 表单前端验证
      this.$refs.formName.validate((valid) => {
        if (!valid) {
          return
        }
        // 表单数据
        const form = {
          account: this.form.account,
          password: this.$md5(this.form.password)
        }
        this.fullscreenLoading = true
        // 发送登录请求
        this.axios.put(Api.loginMember, form)
          .then(res => {
            if (res.data.code === 0) {
              this.$emit('close')
              this.$store.commit('getUserInfo', res.data.data)
              this.$store.commit('changeLogin', false)
              this.fullscreenLoading = false
              this.$message({
                message: '登录成功',
                type: 'success'
              })
            } else {
              this.err = res.data.message
              this.fullscreenLoading = false
            }
          })
      })
    }
  }
}

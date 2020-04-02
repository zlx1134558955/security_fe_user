import ENV from 'Config/env.js'
import AddressForm from './address-form/index.vue'
export default {
  data () {
    return {
      userInfo: {
        id: '',
        avatar: 'default.png',
        username: '',
        realname: '',
        team: '',
        email: '',
        qq: '',
        tel: '',
        website: '',
        description: '',
        wechat: ''
      },
      id: '', // 地址id
      address: null,
      show: true,
      addressList: [],
      file: [],
      showAddressForm: false,
      showDelete: false,
      deleteId: 0,
      defaultId: 0,
      rules: {
        username: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { validator: (rule, value, cb) => this.$lengthRule(rule, value, cb, 6), trigger: 'blur' }
        ],
        realname: [
          { validator: (rule, value, cb) => this.$lengthRule(rule, value, cb, 6), trigger: 'blur' }
        ],
        team: [
          { validator: (rule, value, cb) => this.$lengthRule(rule, value, cb, 10), trigger: 'blur' }
        ],
        email: [
          { pattern: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/, message: '请输入正确的邮箱', trigger: 'blur' }
        ],
        qq: [
          { pattern: /^[1-9][0-9]{4,10}$/, message: '请输入正确的qq号', trigger: 'blur' }
        ],
        tel: [
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        wechat: [
          { pattern: /^[1-9A-Za-z][0-9A-Za-z]{1,24}$/, message: '请输入正确的微信号', trigger: 'blur' }
        ],
        description: [
          { validator: (rule, value, cb) => this.$lengthRule(rule, value, cb, 50), trigger: 'blur' }
        ],
        website: [
          { validator: (rule, value, cb) => this.$lengthRule(rule, value, cb, 50), trigger: 'blur' }
        ]
      },
      avatar_url: '',
      image: null
    }
  },
  computed: {
  },
  components: {
    AddressForm
  },
  methods: {
    getMember () {
      const url = this.$route.meta.api.memberInfo
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.userInfo = res.data.data
          this.avatar_url = `${ENV.headerDIR}${this.userInfo.avatar}`
        } else {
          this.$message({
            message: res.data.message,
            type: 'warning'
          })
        }
      })
    },
    toUpdate () {
      this.show = false
    },
    saveInfo () {
      this.$refs.userInfo.validate((valid) => {
        if (!valid) {
          return
        }
        const file = this.image // 获取文件对象
        const form = new FormData()
        if (file) {
          form.append('file', file, file.name) // 将文件添加到formdata中
        }
        form.append('username', this.userInfo.username)
        form.append('realname', this.userInfo.realname)
        form.append('team', this.userInfo.team)
        form.append('email', this.userInfo.email)
        form.append('qq', this.userInfo.qq)
        form.append('wechat', this.userInfo.wechat)
        form.append('website', this.userInfo.website)
        form.append('tel', this.userInfo.tel)
        form.append('description', this.userInfo.description)
        const config = {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
        this.axios.put(this.$route.meta.api.memberInfo, form, config) // 传输数据
          .then(res => {
            if (res.data.code === 0) {
              this.$message({
                message: '用户信息保存成功',
                type: 'success'
              })
              this.$store.commit('getUserInfo', res.data.data)
              this.show = true
            } else {
              this.$message({
                message: res.data.message,
                type: 'warning'
              })
            }
          })
      })
    },
    setAvatar (params) {
      this.image = params.file
      const url = window.URL.createObjectURL(this.image)
      this.avatar_url = url
    },
    closeAddressForm () {
      this.showAddressForm = false
    },
    handleChange (files, file) {
      this.file = file.slice(-1)
    },
    getAddressList () {
      this.defaultId = 0
      const url = this.$route.meta.api.address
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.addressList = res.data.data
          this.addressList.forEach(item => {
            if (parseInt(item.default) === 1) {
              this.defaultId = item.id
            }
          })
        }
      })
    },
    editAddress (item) {
      this.address = item || {
        realname: '',
        mobile: '',
        detail: '',
        default: 1,
        zipcode: ''
      }
      this.showAddressForm = true
    },
    openDelete (id) {
      this.showDelete = true
      this.deleteId = id
    },
    deleteAddress () {
      const url = this.$route.meta.api.address + `/${parseInt(this.deleteId)}`
      this.axios.delete(url).then(res => {
        if (res.data.code === 0) {
          this.$message({
            message: '删除地址成功',
            type: 'success'
          })
          this.getAddressList()
          this.showDelete = false
        } else {
          this.$message({
            message: res.data.message,
            type: 'warning'
          })
        }
      })
    }
  },
  created () {
    this.getMember()
    this.getAddressList()
  }
}

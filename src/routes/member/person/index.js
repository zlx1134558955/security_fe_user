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
        qqnumber: '',
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
        qqnumber: [
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
      }
    }
  },
  computed: {
    avatar_url () {
      return `${ENV.headerDIR}${this.userInfo.avatar}`
    }
  },
  components: {
    AddressForm
  },
  methods: {
    getMember () {
      const url = this.$route.meta.api.getMember
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.userInfo = res.data.data
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
        const form = {
          username: this.userInfo.username,
          realname: this.userInfo.realname,
          avatar: this.userInfo.avatar,
          team: this.userInfo.team,
          email: this.userInfo.email,
          qqnumber: this.userInfo.qqnumber,
          wechat: this.userInfo.wechat,
          website: this.userInfo.website,
          tel: this.userInfo.tel,
          description: this.userInfo.description
        }
        const url = this.$route.meta.api.updateMember
        this.axios.post(url, form).then(res => {
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
      const file = params.file // 获取文件对象
      const form = new FormData()
      form.append('file', file, file.name) // 将文件添加到formdata中
      form.append('chunk', '0')
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      this.axios.post(this.$route.meta.api.setAvatar, form, config) // 传输数据
        .then(res => {
          if (res.data.code === 0) {
            this.userInfo.avatar = res.data.data
          } else {
            this.$message({
              message: res.data.message,
              type: 'warning'
            })
          }
        })
    },
    closeAddressForm () {
      this.showAddressForm = false
    },
    handleChange (files, file) {
      this.file = file.slice(-1)
    },
    getAddressList () {
      this.defaultId = 0
      const url = this.$route.meta.api.getAddressList
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.addressList = res.data.data
          this.addressList.forEach(item => {
            if (parseInt(item.adefault) === 1) {
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
        adetail: '',
        adefault: 1,
        zipcode: ''
      }
      this.showAddressForm = true
    },
    openDelete (id) {
      this.showDelete = true
      this.deleteId = id
    },
    deleteAddress () {
      const url = this.$route.meta.api.deleteAddress
      const id = parseInt(this.deleteId)
      this.axios.post(url, { id: id }).then(res => {
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

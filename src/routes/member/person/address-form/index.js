export default {
  data () {
    return {
      err: '',
      rules: {
        realname: [
          { required: true, message: '请输入收件人', trigger: 'blur' },
          { min: 1, max: 20, message: '收件人姓名不能大于20个字符', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        zipcode: [
          { required: true, message: '请输入邮编', trigger: 'blur' },
          { pattern: /^[1-9][0-9]{5}$/, message: '请输入正确的邮编', trigger: 'blur' }
        ],
        detail: [
          { required: true, message: '请输入详细地址', trigger: 'blur' },
          { min: 1, max: 50, message: '详细地址不能大于50个字符', trigger: 'blur' }
        ],
        default: [
          { required: true, trigger: 'change' }
        ]
      }
    }
  },
  props: ['showAdd', 'userid', 'address'],
  computed: {
    addressForm () {
      if (this.address) this.address.default = parseInt(this.address.default)
      return this.address ? this.address : {
        realname: '',
        mobile: '',
        detail: '',
        default: 1,
        zipcode: ''
      }
    },
    title () {
      return this.addressForm.id ? '编辑收件地址' : '新增收件地址'
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    addAddress () {
      this.err = ''
      this.$refs.addressForm.validate((valid) => {
        if (!valid) {
          return
        }
        const form = {
          realname: this.addressForm.realname,
          mobile: this.addressForm.mobile,
          detail: this.addressForm.adetdetailail,
          default: this.addressForm.default,
          zipcode: this.addressForm.zipcode
        }
        this.axios.post(this.$route.meta.api.address, form).then(res => {
          if (res.data.code === 0) {
            this.$message({
              message: '新增地址成功',
              type: 'success'
            })
            this.$emit('getList')
            this.$emit('close')
          } else {
            this.$message({
              message: res.data.message,
              type: 'warning'
            })
          }
        })
      })
    },
    editAddress () {
      this.err = ''
      this.$refs.addressForm.validate((valid) => {
        if (!valid) {
          return
        }
        const form = {
          realname: this.addressForm.realname,
          mobile: this.addressForm.mobile,
          detail: this.addressForm.detail,
          default: this.addressForm.default,
          zipcode: this.addressForm.zipcode
        }
        const url = this.$route.meta.api.address + `/${parseInt(this.addressForm.id)}`
        this.axios.put(url, form).then(res => {
          if (res.data.code === 0) {
            this.$message({
              message: '编辑地址成功',
              type: 'success'
            })
            this.$emit('getList')
            this.$emit('close')
          } else {
            this.$message({
              message: res.data.message,
              type: 'warning'
            })
          }
        })
      })
    }
  }
}

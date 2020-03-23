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
        zip: [
          { required: true, message: '请输入邮编', trigger: 'blur' },
          { pattern: /^[1-9][0-9]{5}$/, message: '请输入正确的邮编', trigger: 'blur' }
        ],
        adetail: [
          { required: true, message: '请输入详细地址', trigger: 'blur' },
          { min: 1, max: 50, message: '详细地址不能大于50个字符', trigger: 'blur' }
        ],
        adefault: [
          { required: true, trigger: 'change' }
        ]
      }
    }
  },
  props: ['showAdd', 'userid', 'address'],
  computed: {
    addressForm () {
      if (this.address) this.address.adefault = parseInt(this.address.adefault)
      return this.address ? this.address : {
        realname: '',
        mobile: '',
        adetail: '',
        adefault: 1,
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
          adetail: this.addressForm.adetail,
          adefault: this.addressForm.adefault,
          zipcode: this.addressForm.zipcode
        }
        this.axios.post(this.$route.meta.api.addAddress, form).then(res => {
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
          id: parseInt(this.addressForm.id),
          realname: this.addressForm.realname,
          mobile: this.addressForm.mobile,
          adetail: this.addressForm.adetail,
          adefault: this.addressForm.adefault,
          zipcode: this.addressForm.zipcode
        }
        this.axios.post(this.$route.meta.api.editAddress, form).then(res => {
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

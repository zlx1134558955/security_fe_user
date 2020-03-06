import Utils from '@/utils/utils'
export default {
    data() {
        let validateRealname = (rule, value, callback) => {
            if (Utils.getByteLen(value) > 20) {
                callback(new Error('收件人姓名不能大于20个字符或10个汉字'));
            } else {
                callback();
            }
        }
        let validateDetail = (rule, value, callback) => {
            if (Utils.getByteLen(value) > 100) {
                callback(new Error('详细地址不能大于100个字符或50个汉字'));
            } else {
                callback();
            }
        }
        return {
            err: '',
            rules: {
                realname: [
                    { required: true, message: '请输入收件人', trigger: 'blur' },
                    { validator: validateRealname, trigger: 'blur' }
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
                    { validator: validateDetail, trigger: 'blur' }
                ],
                adefault: [
                    { required: true, trigger: 'change' }
                ]
            }
        };
    },
    props: ['showAdd', 'userid', 'address'],
    computed: {
        addressForm() {
            if(this.address) this.address.adefault = parseInt(this.address.adefault)
            return this.address ? this.address : {
                realname: '',
                mobile: '',
                adetail: '',
                adefault: 1,
                zipcode: ''
            }
        },
        title() {
            return this.addressForm.id ? '编辑收件地址' : '新增收件地址'
        }
    },
    methods: {
        handleClose() {
            this.$emit('close')
        },
        addAddress() {
            this.err = ''
            this.$refs.addressForm.validate((valid) => {
                if (!valid) {
                    return
                }
                let form = {
                    realname: this.addressForm.realname,
                    mobile: this.addressForm.mobile,
                    adetail: this.addressForm.adetail,
                    adefault: this.addressForm.adefault,
                    zipcode: this.addressForm.zipcode
                }
                this.axios.post(this.$route.meta.api.addAddress, form).then(res => {
                    if(res.data.code === 0){
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
        editAddress() {
            this.err = ''
            this.$refs.addressForm.validate((valid) => {
                if (!valid) {
                    return
                }
                let form = {
                    id: parseInt(this.addressForm.id),
                    realname: this.addressForm.realname,
                    mobile: this.addressForm.mobile,
                    adetail: this.addressForm.adetail,
                    adefault: this.addressForm.adefault,
                    zipcode: this.addressForm.zipcode
                }
                this.axios.post(this.$route.meta.api.editAddress, form).then(res => {
                    if(res.data.code === 0){
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
    },
    created() {
    }
}
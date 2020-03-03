import Utils from '@/utils/utils'
export default {
    data() {
        let validateUsername = (rule, value, callback) => {
            if (Utils.getByteLen(value) > 16) {
                callback(new Error('管理员名称不能大于16个字符或8个汉字'));
            } else {
                callback();
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        }
        return {
            labelPosition: 'right',
            form: {
                username: '',
                account: '',
                password: '',
                checkPassword: ''
            },
            rules: {
                account: [
                    { required: true, message: '账号不能为空', trigger: 'blur' },
                    { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, message: '密码必须为8-16位字母数字组合', trigger: 'blur' }
                ],
                checkPassword: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    { validator: validatePass2, trigger: 'blur' }
                ],
                username: [
                    { required: true, message: '管理员名称不能为空', trigger: 'blur' },
                    { validator: validateUsername, trigger: 'blur' }
                ]
            },
            err: '',
            fullscreenLoading: false
        };
    },
    props: ['showAdd'],
    computed: {
    },
    methods: {
        handleClose() {
            this.$emit('close')
        },
        addAdmin() {
            this.err = ''
            // 表单前端验证
            this.$refs.formName.validate((valid) => {
                if (!valid) {
                    return
                }
                // 表单数据
                let form = {
                    username: this.form.username,
                    account: this.form.account,
                    password: this.$md5(this.form.password)
                }
                this.fullscreenLoading = true
                // 发送添加请求
                this.axios.post(this.$route.meta.api.addAdmin, form)
                    .then(res => {
                        if (res.data.code === 0) {
                            this.$emit('close')
                            this.$emit('getList')
                            this.fullscreenLoading = false
                            this.$message({
                                message: '管理员添加成功',
                                type: 'success'
                            });
                        } else {
                            this.err = res.data.message
                            this.fullscreenLoading = false
                        }
                    })
            })
        }
    },
    created() {
    }
}
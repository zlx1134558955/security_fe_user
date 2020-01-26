import Api from 'Api/user_api.js'
export default {
    data() {
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
                ]
            },
            err: '',
            fullscreenLoading: false
        };
    },
    props: ['showRegister'],
    computed: {
    },
    methods: {
        handleClose() {
            this.$emit('close')
        },
        register() {
            this.err = ''
            // 表单前端验证
            this.$refs.formName.validate((valid) => {
                if (!valid) {
                    return
                }
            })
            // 表单数据
            let formData = new URLSearchParams()
            formData.append('account', this.form.account)
            formData.append('password', this.form.password)
            formData.append('checkPassword', this.form.checkPassword)
            this.fullscreenLoading = true
            // 发送注册请求
            this.axios.post(Api.register, formData)
                .then(res => {
                    if (res.data.code === 0) {
                        this.$emit('close')
                        this.fullscreenLoading = false
                        this.$message({
                            message: '注册成功',
                            type: 'success'
                        });
                    } else {
                        this.err = res.data.message
                        this.fullscreenLoading = false
                    }
                })
        }
    },
    created() {
    }
}
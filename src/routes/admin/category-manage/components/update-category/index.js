import Utils from '@/utils/utils'
export default {
    data() {
        let validateTwenty = (rule, value, callback) => {
            if (Utils.getByteLen(value) > 20) {
                callback(new Error('漏洞名称不能大于20个字符或10个汉字'));
            } else {
                callback();
            }
        }
        return {
            labelPosition: 'right',
            form: {
                name: '',
                pid: 0
            },
            rules: {
                name: [
                    { required: true, message: '漏洞名称不能为空', trigger: 'blur' },
                    { validator: validateTwenty, trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '请选择漏洞所属分类', trigger: 'change' }
                ]
            },
            err: '',
            fullscreenLoading: false
        };
    },
    props: ['showUpdate', 'id', 'parentList', 'currentName', 'currentPid'],
    computed: {
        title() {
            return this.id === 0 ? '添加漏洞分类' : '修改漏洞分类'
        }
    },
    methods: {
        handleClose() {
            this.$emit('close')
        },
        login() {
            this.err = ''
            // 表单前端验证
            this.$refs.formName.validate((valid) => {
                if (!valid) {
                    return
                }
                // 表单数据
                let form = {
                    name: this.form.name,
                    pid: this.form.pid,
                    id: this.id
                }
                this.fullscreenLoading = true
                // 发送登录请求
                let url = this.$route.meta.api.updateCategory
                this.axios.post(url, form)
                    .then(res => {
                        if (res.data.code === 0) {
                            this.$emit('close')
                            this.fullscreenLoading = false
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            location.reload()
                        } else {
                            this.err = res.data.message
                            this.fullscreenLoading = false
                        }
                    })
            })
        }
    },
    created() {
    },
    watch: {
        currentName(val) {
            this.form.name = val
        },
        currentPid(val) {
            this.form.pid = val
        }
    }
}
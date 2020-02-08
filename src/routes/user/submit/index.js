import Tip from '@/routes/user/components/tip/index.vue'
import Editor from '@/components/editor/index.vue'
import Utils from '@/utils/utils'
export default {
    data() {
        let validateTwenty = (rule, value, callback) => {
            if (Utils.getByteLen(value) > 50) {
                callback(new Error('不能大于50个字符或25个汉字'));
            } else {
                callback();
            }
        }
        return {
            title: '提交漏洞',
            desc: '随心畅游互联网，携手共筑安全墙',
            form: {
                name: '',
                type: '',
                content: '',
                attach: null,
                agree: []
            },
            agree: false,
            rules: {
                name: [
                    { required: true, message: '请输入标题', trigger: 'blur' },
                    { validator: validateTwenty, trigger: 'blur' }
                ],
                type: [
                    { required: true, message: '请选择类型', trigger: 'change' }
                ],
                agree: [
                    { type: 'array', required: true, message: '请勾选同意<<理想安全漏洞管理平台使用协议>>', trigger: 'change' }
                ]
            },
            category: [],
            editorContent: null
        }
    },
    components: {
        Tip,
        Editor
    },
    created() {
        this.getCategory()
    },
    methods: {
        upload(params) {
            this.form.attach = params.file
        },
        getCategory() {
            this.axios.get(this.$route.meta.api.getCategory).then(res => {
                this.category = res.data.data
            })
        },
        submit() {
            this.$refs.form.validate((valid) => {
                if (!valid) {
                    return
                }
                let file = this.form.attach   //获取文件对象
                let form = new FormData()
                if(file){
                    form.append('file', file, file.name) //将文件添加到formdata中
                }
                form.append('chunk', '0')
                form.append('title', this.form.name)
                form.append('content', this.form.content)
                form.append('cate_id', this.form.type[1])
                let config = {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }
                this.axios.post(this.$route.meta.api.submitPost, form, config) //传输数据
                    .then(res => {
                        if (res.data.code === 0) {
                            this.$router.push('/user/member?active=mypost')
                            this.$message({
                                message: '提交成功',
                                type: 'success'
                            })
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
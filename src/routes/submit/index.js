import Tip from '@/components/tip/index.vue'
import Editor from '@/components/editor/index.vue'
export default {
  data () {
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
          { validator: (rule, value, cb) => this.$lengthRule(rule, value, cb, 25), message: '不能大于25个汉字或50英文字符', trigger: 'blur' }
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
  created () {
    this.getCategory()
  },
  methods: {
    upload (params) {
      this.form.attach = params.file
    },
    handleCategoryTree (result) {
      const list = []
      for (const bug of result) {
        if (bug.pid === 0) {
          list.push(bug)
        }
      }
      const arr = []
      list.forEach(item => {
        const obj = {
          value: item.id,
          label: item.name,
          children: []
        }
        arr.push(obj)
        for (const newItem of result) {
          if (newItem.pid === item.id) {
            const bug = {
              value: newItem.id,
              label: newItem.name
            }
            obj.children.push(bug)
          }
        }
      })
      this.category = arr
    },
    getCategory () {
      this.axios.get(this.$route.meta.api.category).then(res => {
        const result = res.data.data
        this.handleCategoryTree(result)
      })
    },
    submit () {
      if (!this.$store.state.userInfo.id) {
        this.$store.commit('changeLogin', true)
        return
      }
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return
        }
        const file = this.form.attach // 获取文件对象
        const form = new FormData()
        if (file) {
          form.append('file', file, file.name) // 将文件添加到formdata中
        }
        form.append('title', this.form.name)
        form.append('content', this.form.content)
        form.append('cate_id', this.form.type[1])
        const config = {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
        this.axios.post(this.$route.meta.api.post, form, config) // 传输数据
          .then(res => {
            if (res.data.code === 0) {
              this.$router.push('/member/mypost')
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

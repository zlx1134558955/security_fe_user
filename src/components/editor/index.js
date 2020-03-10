// 工具栏配置
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import ENV from 'Config/env.js'

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
  ['blockquote', 'code-block'], // 引用  代码块
  [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
  [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
  [{ align: [] }], // 对齐方式
  ['clean'], // 清除文本格式
  ['link', 'image'] // 链接、图片、视频
]

export default {
  props: {
    /* 编辑器的内容 */
    value: {
      type: String
    },
    /* 图片大小 */
    maxSize: {
      type: Number,
      default: 4000 // kb
    }
  },
  components: {
    quillEditor
  },
  data () {
    return {
      content: this.value,
      quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
      editorOption: {
        theme: 'snow',
        placeholder: '请输入漏洞描述及修复建议(若有)？',
        modules: {
          toolbar: {
            container: toolbarOptions,
            // container: "#toolbar",
            handlers: {
              image: function (value) {
                if (value) {
                  // 触发input框选择图片文件
                  document.querySelector('.avatar-uploader input').click()
                } else {
                  this.quill.format('image', false)
                }
              }
            }
          }
        }
      }
    }
  },
  methods: {
    onEditorChange () {
      // 内容改变事件
      this.$emit('input', this.content)
    },
    insertImg (params) {
      const quill = this.$refs.myQuillEditor.quill // 获取富文本组件实例
      const file = params.file // 获取文件对象
      const form = new FormData()
      form.append('file', file, file.name) // 将文件添加到formdata中
      form.append('chunk', '0')
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      this.axios.post(this.$route.meta.api.insertImg, form, config) // 传输数据
        .then(res => {
          if (res.data.code === 0) {
            const src = `${ENV.insertDIR}${res.data.data}`
            const length = quill.getSelection().index // 获取光标所在位置
            quill.insertEmbed(length, 'image', src) // 插入图片
            quill.setSelection(length + 1) // 调整光标到最后
            // this.userInfo.avatar = res.data.data
          } else {
            this.$message({
              message: res.data.message,
              type: 'warning'
            })
          }
        })
    }
  }
}

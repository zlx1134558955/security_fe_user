import Tip from '@/routes/components/tip/index.vue'
export default {
  data () {
    return {
      id: parseInt(this.$router.history.current.query.id),
      pageTitle: '网站公告',
      desc: '网站内容，一览便知',
      notice: {
        title: '',
        update_time: '',
        content: ''
      }
    }
  },
  components: {
    Tip
  },
  computed: {
  },
  created () {
    this.getNoticeDetail()
  },
  methods: {
    getNoticeDetail () {
      const url = this.$route.meta.api.getNoticeDetail
      const form = {
        id: this.id
      }
      this.axios.post(url, form).then(res => {
        if (res.data.code === 0) {
          this.notice = res.data.data
        }
      })
    },
    getAttachment () {
      const form = {
        filename: this.notice.attachment
      }
      const url = this.$route.meta.api.getNoticeAttachment
      this.axios.post(url, form, { responseType: 'blob' }).then((res) => {
        // 下载返回文件
        const type = 'application/octet-stream'
        const blob = new Blob([res.data], { type: type })
        const fileName = JSON.parse(res.config.data).filename || '未知文件'
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
          window.navigator.msSaveBlob(blob, fileName)
        } else {
          const URL = window.URL || window.webkitURL
          const objectUrl = URL.createObjectURL(blob)
          console.log(objectUrl)
          if (fileName) {
            var a = document.createElement('a')
            if (typeof a.download === 'undefined') {
              window.location = objectUrl
            } else {
              a.href = objectUrl
              a.download = fileName
              document.body.appendChild(a)
              a.click()
              a.remove()
              this.$message({
                message: '下载成功',
                type: 'success'
              })
            }
          }
        }
      })
    },
    back () {
      this.$router.push('/notice')
    }
  },
  watch: {
  }
}

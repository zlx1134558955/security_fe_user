import MAP from '@/assets/map/map.js'
export default {
  data () {
    return {
      id: this.$router.history.current.query.id,
      detail: {
        title: ''
      },
      postState: [],
      map: MAP,
      steps: [
        {
          content: '已提交',
          timestamp: '',
          color: '#409EFF'
        },
        {
          content: '审核中',
          timestamp: '',
          color: '#409EFF'
        },
        {
          content: '已确认/已忽略',
          timestamp: ''
        },
        {
          content: '已修复',
          timestamp: ''
        },
        {
          content: '已完成',
          timestamp: ''
        }
      ],
      categoryMap: []
    }
  },
  created () {
    this.getPostDetail()
    this.getCategoryMap()
    this.getPostState()
  },
  methods: {
    formatTime (value, fmt) {
      const getDate = new Date(parseInt(value))
      const o = {
        'M+': getDate.getMonth() + 1,
        'd+': getDate.getDate(),
        'h+': getDate.getHours(),
        'm+': getDate.getMinutes(),
        's+': getDate.getSeconds()
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
    },
    getPostDetail () {
      const url = this.$route.meta.api.getPostDetail
      const form = {
        id: parseInt(this.id)
      }
      this.axios.post(url, form).then(res => {
        if (res.data.code === 0) {
          this.detail = res.data.data
          this.steps[0].timestamp = this.formatTime(this.detail.time, 'yyyy-MM-dd hh:mm:ss')
          this.steps[1].timestamp = this.formatTime(this.detail.time, 'yyyy-MM-dd hh:mm:ss')
        }
      })
    },
    getPostState () {
      const url = this.$route.meta.api.getPostState
      const form = {
        id: this.id
      }
      this.axios.post(url, form).then(res => {
        if (res.data.code === 0) {
          this.postState = res.data.data
          this.handleSteps(this.postState)
        }
      })
    },
    handleSteps (postState) {
      if (postState.length === 0) {
        return
      }
      if (postState.length === 1 && postState[0].status === 2) {
        this.steps[2].content = '已忽略'
        this.steps[2].color = '#409EFF'
        this.steps[2].timestamp = this.formatTime(postState[0].time, 'yyyy-MM-dd hh:mm:ss')
        this.steps.splice(3)
      } else {
        this.steps[2].content = '已确认'
        postState.forEach((value, index) => {
          this.steps[index + 2].color = '#409EFF'
          this.steps[index + 2].timestamp = this.formatTime(postState[index].time, 'yyyy-MM-dd hh:mm:ss')
        })
      }
    },
    getCategoryMap () {
      const url = this.$route.meta.api.getCategoryMap
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.categoryMap = res.data.data
        }
      })
    },
    getCateName (id) {
      let name
      this.categoryMap.some(item => {
        if (id === item.id) {
          name = item.name
          return true
        }
      })
      return name
    },
    getAttachment () {
      const form = {
        filename: this.detail.attachment
      }
      const url = this.$route.meta.api.getAttachment
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
          } else {
            window.location = objectUrl
          }
        }
      })
    },
    back () {
      this.$router.push('/member/mypost')
    }
  }
}

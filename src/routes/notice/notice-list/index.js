import Tip from '@/components/tip/index.vue'
import ENV from 'Config/env.js'
import HeadName from '@/components/head_name/index.vue'
export default {
  data () {
    return {
      pageTitle: '网站公告',
      desc: '网站内容，一览便知',
      title: '',
      list: [],
      env: ENV,
      pageSize: 14,
      // pageList: [10, 20, 30, 40],
      currentPage: 1,
      total: 0
    }
  },
  components: {
    Tip,
    HeadName
  },
  computed: {
  },
  created () {
    this.getNoticeList()
  },
  methods: {
    lookDetail (id) {
      this.$router.push(`/notice-detail?id=${id}`)
    },
    getNoticeList () {
      const url = this.$route.meta.api.getNoticeList
      const form = {
        title: this.title,
        start: (this.currentPage - 1) * this.pageSize,
        pageSize: this.pageSize
      }
      this.axios.post(url, form).then(res => {
        if (res.data.code === 0) {
          this.list = res.data.data.list
          this.total = res.data.data.total
        }
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.getNoticeList()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getNoticeList()
    }
  },
  watch: {
  }
}

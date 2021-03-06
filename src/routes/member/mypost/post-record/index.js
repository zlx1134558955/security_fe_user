import MAP from '@/assets/map/map.js'
import Detail from '../post-detail/index.vue'
export default {
  data () {
    return {
      list: [],
      map: MAP
    }
  },
  components: {
    Detail
  },
  computed: {
    num () {
      return this.list.length
    }
  },
  methods: {
    getPostList () {
      const url = this.$route.meta.api.postlist
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.list = res.data.data
        }
      })
    },
    jumpDetail (id) {
      this.$router.push(`/member/post-detail?id=${id}`)
    }
  },
  created () {
    this.getPostList()
  }
}

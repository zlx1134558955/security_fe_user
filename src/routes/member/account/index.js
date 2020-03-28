import MAP from '@/assets/map/map'
export default {
  data () {
    return {
      points_list: [],
      score_list: [],
      map: MAP,
      points: 0,
      score: 0,
      type: 1
    }
  },
  computed: {
    num () {
      return this.list.length
    }
  },
  methods: {
    getPointsRecord () {
      const url = this.$route.meta.api.pointsRecord
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.points_list = res.data.data
        }
      })
    },
    getScoreRecord () {
      const url = this.$route.meta.api.scoreRecord
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.score_list = res.data.data
        }
      })
    },
    setAccount () {
      const url = this.$route.meta.api.getMember
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.points = res.data.data.points
          this.score = res.data.data.score
        }
      })
    }
  },
  created () {
    this.getPointsRecord()
    this.getScoreRecord()
    this.setAccount()
  }
}

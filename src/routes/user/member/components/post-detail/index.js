import MAP from '@/utils/map/map.js'
export default {
    data() {
        return {
            id: this.$router.history.current.query.id,
            detail: {
                title: ''
            },
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
            ]
        }
    },
    created() {
        this.getPostDetail()
    },
    methods: {
        formatTime(value, fmt) {
            let getDate = new Date(parseInt(value))
            let o = {
                'M+': getDate.getMonth() + 1,
                'd+': getDate.getDate(),
                'h+': getDate.getHours(),
                'm+': getDate.getMinutes(),
                's+': getDate.getSeconds()
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
            }
            for (let k in o) {
                if (new RegExp('(' + k + ')').test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
                }
            }
            return fmt;
        },
        getPostDetail() {
            let url = this.$route.meta.api.getPostDetail
            let form = {
                id: this.id
            }
            this.axios.post(url, form).then(res => {
                if (res.data.code === 0) {
                    this.detail = res.data.data
                    this.steps[0].timestamp = this.formatTime(this.detail.time, 'yyyy-MM-dd hh:mm:ss')
                    this.steps[1].timestamp = this.formatTime(this.detail.time, 'yyyy-MM-dd hh:mm:ss')
                }
            })
        }
    }
}
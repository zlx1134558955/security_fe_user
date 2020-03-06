import ENV from 'Config/env.js'
export default {
    data() {
        return {
            userInfo: {
                id: '',
                avatar: 'default.png',
                username: '',
                points: 0,
                score: 0,
                team: '',
                description: ''
            },
        }
    },
    created() {
        this.getMember()
    },
    computed: {
        avatar_url() {
            return `${ENV.headerDIR}${this.userInfo.avatar}`
        }
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
        getMember() {
            let url = this.$route.meta.api.getMember
            this.axios.get(url).then(res => {
                if (res.data.code === 0) {
                    this.userInfo = res.data.data
                } else {
                    this.$message({
                        message: res.data.message,
                        type: 'warning'
                    })
                }
            })
        },
    }
}
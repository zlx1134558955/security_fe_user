import MAP from '@/utils/map/map.js'
export default {
    data() {
        return {
            id: this.$router.history.current.query.id,
            detail: {
                title: '',
                rank: 1
            },
            map: MAP,
            categoryMap: [],
            advise: 2,
            reason: '',
            postState: []
        }
    },
    created() {
        this.getPostDetail()
        this.getPostState()
        this.getCategoryMap()
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
                }
            })
        },
        getPostState() {
            let url = this.$route.meta.api.getPostState
            let form = {
                id: this.id
            }
            this.axios.post(url, form).then(res => {
                if (res.data.code === 0) {
                    this.postState = res.data.data
                    let obj = {
                        time: this.detail.time,
                        status: 1
                    }
                    this.postState.unshift(obj)
                }
            })
        },
        getCategoryMap() {
            let url = this.$route.meta.api.getCategoryMap
            this.axios.get(url).then(res => {
                if (res.data.code === 0) {
                    this.categoryMap = res.data.data
                }
            })
        },
        getCateName(id) {
            let name
            this.categoryMap.some(item => {
                if(id === item.id){
                    name = item.name
                    return true
                }
            })
            return name
        },
        reviewPost(status){
            let form = {
                id: this.id,
                status: status,
                rank: this.detail.rank,
                score: this.detail.score,
                points: this.detail.points,
                content: this.reason
            }
            this.axios.post(this.$route.meta.api.reviewPost, form).then(res => {
                if(res.data.code === 0){
                    this.$message({
                        message: '状态提交成功',
                        type: 'success'
                    })
                    this.getPostDetail()
                }
            })
        },
        getAttachment() {
            let form = {
                filename: this.detail.attachment
            }
            let url = this.$route.meta.api.getAttachment
            this.axios.post(url, form, {responseType: 'blob' }).then((res) => {
                // 下载返回文件
                let type = 'application/octet-stream'
                let blob = new Blob([res.data], {type: type})
                let fileName = JSON.parse(res.config.data).filename || '未知文件'
                if (typeof window.navigator.msSaveBlob !== 'undefined') {
                    window.navigator.msSaveBlob(blob, fileName);
                } else {
                    let URL = window.URL || window.webkitURL
                    let objectUrl = URL.createObjectURL(blob)
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
        }
    }
}
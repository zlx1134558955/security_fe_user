import Api from 'Api/user_api.js'
export default {
    data() {
        return {
            userInfo: {
                pid: '',
                avatar: 'default.png',
                username: '',
                realname: '',
                team: '',
                email: '',
                qqnumber: '',
                tel: '',
                website: '',
                description: '',
                wechat: ''
            },
            show: true,
            file: []
        }
    },
    computed: {
        avatar_url() {
            return `${Api.env}headers/${this.userInfo.avatar}`
        }
    },
    components: {

    },
    methods: {
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
        toUpdate() {
            this.show = false
        },
        saveInfo() {
            let form = new URLSearchParams()
            form.append('pid', this.userInfo.pid)
            form.append('username', this.userInfo.username)
            form.append('realname', this.userInfo.realname)
            form.append('avatar', this.userInfo.avatar)
            form.append('team', this.userInfo.team)
            form.append('email', this.userInfo.email)
            form.append('qqnumber', this.userInfo.qqnumber)
            form.append('wechat', this.userInfo.wechat)
            form.append('website', this.userInfo.website)
            form.append('tel', this.userInfo.tel)
            form.append('description', this.userInfo.description)
            let url = this.$route.meta.api.updateMember
            this.axios.post(url, form).then(res => {
                if (res.data.code === 0) {
                    this.$message({
                        message: '用户信息保存成功',
                        type: 'success'
                    })
                    this.$store.commit('getUserInfo', res.data.data)
                    this.show = true
                } else {
                    this.$message({
                        message: res.data.message,
                        type: 'warning'
                    })
                }
            })
        },
        setAvatar(params) {
            let file = params.file   //获取文件对象
            let form = new FormData()
            form.append('file', file, file.name) //将文件添加到formdata中
            form.append('chunk', '0')
            form.append('pid', this.userInfo.pid)
            let config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
            this.axios.post(this.$route.meta.api.setAvatar, form, config) //传输数据
                .then(res => {
                    this.userInfo.avatar = res.data.data
                })
        }
    },
    created() {
        this.getMember()
    }
}
import MAP from '@/utils/map/map.js'
export default {
    data() {
        return {
            list: [],
            map: MAP,
            pageSize: 10,
            pageList: [10, 20, 30, 40],
            currentPage: 1,
            status: -1,
            account: '',
            username: '',
            total: 0,
            statusList: [
                {
                    label: '全部',
                    value: -1
                },
                {
                    label: '禁止登录',
                    value: 0
                },
                {
                    label: '正常',
                    value: 1
                }
            ],
            showDelete: false,
            deleteId: 0
        }
    },
    created() {
        this.getFrontUsers()
    },
    methods: {
        getFrontUsers() {
            let url = this.$route.meta.api.getFrontUsers
            let form = {
                status: this.status,
                account: this.account,
                username: this.username,
                start: (this.currentPage - 1) * this.pageSize,
                pageSize: this.pageSize
            }
            this.axios.post(url, form).then(res => {
                if(res.data.code === 0) {
                    this.list = res.data.data
                    this.total = this.list.length
                }
            })
        },
        forbidFrontUser(id) {
            let url = this.$route.meta.api.forbidFrontUser
            let form = {
                id: id
            }
            this.axios.post(url, form).then(res => {
                if(res.data.code === 0) {
                    this.$message({
                        message: '用户禁用成功',
                        type: 'warning'
                    })
                    this.getFrontUsers()
                }
            })
        },
        unfreezeFrontUser(id) {
            let url = this.$route.meta.api.unfreezeFrontUser
            let form = {
                id: id
            }
            this.axios.post(url, form).then(res => {
                if(res.data.code === 0) {
                    this.$message({
                        message: '用户限制解除',
                        type: 'success'
                    })
                    this.getFrontUsers()
                }
            })
        },
        openDelete(id) {
            this.showDelete = true
            this.deleteId = id
        },
        deleteUser() {
            let url = this.$route.meta.api.deleteFrontUser
            let form = {
                id: this.deleteId
            }
            this.axios.post(url, form).then(res => {
                if(res.data.code === 0) {
                    this.$message({
                        message: '用户已删除',
                        type: 'warning'
                    })
                    this.getFrontUsers()
                    this.showDelete = false
                }
            })
        }
    }
}
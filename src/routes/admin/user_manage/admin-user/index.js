import MAP from '@/utils/map/map.js'
import AddAdmin from '../add-admin/index.vue'
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
            deleteId: 0,
            showAdd: false
        }
    },
    components: {
        AddAdmin
    },
    created() {
        this.getAdminUsers()
    },
    computed: {
        currentId() {
            return this.$store.state.adminInfo.id
        },
        type() {
            return this.$store.state.adminInfo.type
        }
    },
    methods: {
        getAdminUsers() {
            let url = this.$route.meta.api.getAdminUsers
            let form = {
                status: this.status,
                account: this.account,
                username: this.username,
                start: (this.currentPage - 1) * this.pageSize,
                pageSize: this.pageSize
            }
            this.axios.post(url, form).then(res => {
                if(res.data.code === 0) {
                    this.list = res.data.data.list
                    this.total = res.data.data.total
                }
            })
        },
        forbidAdminUser(id) {
            let url = this.$route.meta.api.forbidAdminUser
            let form = {
                id: id
            }
            this.axios.post(url, form).then(res => {
                if(res.data.code === 0) {
                    this.$message({
                        message: '用户禁用成功',
                        type: 'warning'
                    })
                    this.getAdminUsers()
                }
            })
        },
        unfreezeAdminUser(id) {
            let url = this.$route.meta.api.unfreezeAdminUser
            let form = {
                id: id
            }
            this.axios.post(url, form).then(res => {
                if(res.data.code === 0) {
                    this.$message({
                        message: '用户限制解除',
                        type: 'success'
                    })
                    this.getAdminUsers()
                }
            })
        },
        openDelete(id) {
            this.showDelete = true
            this.deleteId = id
        },
        deleteUser() {
            let url = this.$route.meta.api.deleteAdminUser
            let form = {
                id: this.deleteId
            }
            this.axios.post(url, form).then(res => {
                if(res.data.code === 0) {
                    this.$message({
                        message: '用户已删除',
                        type: 'warning'
                    })
                    this.getAdminUsers()
                    this.showDelete = false
                }
            })
        },
        addAdmin() {
            this.showAdd = true
        },
        closeAdd() {
            this.showAdd = false
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.getAdminUsers()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.getAdminUsers()
        }
    }
}
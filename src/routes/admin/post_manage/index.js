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
            title: '',
            total: 0,
            typeMap: {
                1: 'info',
                2: 'success',
                3: 'warning',
                4: 'danger'
            },
            statusList: [
                {
                    value: -1,
                    label: '全部'
                },
                {
                    value: 1,
                    label: '审核中'
                },
                {
                    value: 2,
                    label: '已忽略'
                },
                {
                    value: 3,
                    label: '已确认'
                },
                {
                    value: 4,
                    label: '已修复'
                },
                {
                    value: 5,
                    label: '已完成'
                }
            ],
            category: [],
            cate_id_arr: [-1, -1]
        }
    },
    computed: {
        cate_id() {
            return this.cate_id_arr[1]
        }
    },
    methods: {
        getPostList() {
            let url = this.$route.meta.api.getPostList
            let form = {
                status: this.status,
                title: this.title,
                cate_id: this.cate_id,
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
        getCategory() {
            let url = this.$route.meta.api.getCategory
            this.axios.get(url).then(res => {
                if (res.data.code === 0) {
                    this.category = res.data.data
                }
            })
        },
        getCateName(id) {
            let arr = this.category
            let ret
            arr.some(item => {
                let flag = false
                item.children.some(cate => {
                    if (cate.value == id) {
                        ret = cate.label
                        flag = true
                        return true
                    }
                })
                if (flag) return true
            })
            return ret
        },
        review(id) {
            this.$router.push(`/admin/post-detail?id=${id}`)
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.getPostList()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.getPostList()
        }
    },
    created() {
        this.getPostList()
        this.getCategory()
    }
}
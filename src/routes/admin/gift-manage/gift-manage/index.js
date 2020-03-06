import EditGift from '../components/edit-gift/index.vue'
import ENV from 'Config/env.js'
export default {
    data() {
        return {
            dialogShow: false,
            form: {
                gift_category: -1,
                visible: -1,
                title: '',
                start: 0,
                pageSize: 10
            },
            currentGift: {
                id: 0,
                title: '',
                price: 1,
                stock: 1,
                visible: 1,
                gift_category: 1,
                image: 'default.jpg',
                detail: ''
            },  // 编辑礼品传给子组件的礼品数据
            total: 0,
            giftsList: [],
            cateList: [],     // 传给子组件的礼品类别
            categoryList: [], // 自己过滤选择的礼品类别
            env: ENV
        }
    },
    computed: {

    },
    components: {
        EditGift
    },
    created() {
        this.getGiftsList()
        this.getGiftCate()
    },
    methods: {
        getGiftCate() {
            let url = this.$route.meta.api.getGiftCate
            this.axios.get(url).then(res => {
                if(res.data.code === 0){
                    this.cateList = res.data.data
                    this.categoryList = this.cateList
                    this.categoryList.unshift({name: '全部', id: -1})
                }
            })
        },
        closeUpdate(){
            this.dialogShow = false
        },
        addCate() {
            this.currentGift = {
                id: 0,
                title: '',
                price: 1,
                stock: 1,
                visible: 1,
                gift_category: 1,
                image: 'default.jpg',
                detail: ''
            }
            this.dialogShow = true
        },
        getGiftsList() {
            let url = this.$route.meta.api.getGiftsList
            let obj = this.form
            this.axios.post(url, obj).then(res => {
                if(res.data.code === 0){
                    this.giftsList = res.data.data.list
                    this.total = res.data.data.total
                }
            })
        },
        editCate(gift) {
            this.currentGift = gift
            this.dialogShow = true
        }
    }
}
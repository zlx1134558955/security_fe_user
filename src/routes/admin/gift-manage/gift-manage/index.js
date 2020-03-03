import EditGift from '../components/edit-gift/index.vue'
import ENV from 'Config/env.js'
export default {
    data() {
        return {
            dialogShow: false,
            currentId: 0,
            currentTitle: '',
            form: {
                gift_category: -1,
                visible: -1,
                title: '',
                start: 0,
                pageSize: 10
            },
            total: 0,
            giftsList: [],
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
    },
    methods: {
        closeUpdate(){
            this.dialogShow = false
        },
        addCate() {
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
        }
    }
}
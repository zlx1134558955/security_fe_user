import Update from './components/update-category/index.vue'
export default {
    data() {
        return {
            list: [],
            cateMap: {},
            currentId: 0,
            currentPid: 0,
            currentName: '',
            showUpdate: false,
            parentList: []
        }
    },
    computed: {

    },
    components: {
        Update
    },
    created() {
        this.getCategory()
    },
    methods: {
        getCategory(){
            let url = this.$route.meta.api.getCategoryMap
            this.axios.get(url).then(res => {
                if(res.data.code === 0){
                    this.list = res.data.data
                    this.handleCateMap(this.list)
                    this.sortList(this.list)
                    this.handleParentList(this.list)
                }
            })
        },
        handleCateMap(arr){
            this.$set(this.cateMap, 0, '顶级分类')
            arr.forEach(item => {
                this.$set(this.cateMap, item.id, item.name)
            })
        },
        sortList(arr){
            arr.sort((a, b) => {
                return a.pid - b.pid
            })
        },
        updateCate(item){
            this.currentId = item.id
            this.currentName = this.cateMap[this.currentId]
            this.currentPid = item.pid
            this.showUpdate = true
        },
        addCate(){
            this.currentId = 0
            this.currentName = ''
            this.currentPid = 0
            this.showUpdate = true
        },
        closeUpdate(){
            this.showUpdate = false
        },
        handleParentList(){
            this.parentList = this.list.filter((item) => {
                return item.pid === 0
            })
            this.parentList.unshift({
                id: 0,
                name: '顶级分类'
            })
        }
    }
}
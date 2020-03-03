import Utils from '@/utils/utils'
import ENV from 'Config/env'
export default {
    data() {
        let validateTwenty = (rule, value, callback) => {
            if (Utils.getByteLen(value) > 20) {
                callback(new Error('漏洞名称不能大于20个字符或10个汉字'));
            } else {
                callback();
            }
        }
        return {
            labelPosition: 'right',
            form: {
                title: '',
                price: 1,
                stock: 1,
                visible: 1,
                gift_category: 1,
                image: 'default.jpg',
                detail: ''
            },
            cateList: [],
            image_url: `${ENV.giftDIR}default.jpg`,
            image: null,
            rules: {
                // name: [
                //     { required: true, message: '漏洞名称不能为空', trigger: 'blur' },
                //     { validator: validateTwenty, trigger: 'blur'}
                // ],
                // password: [
                //     { required: true, message: '请选择漏洞所属分类', trigger: 'change' }
                // ]
            },
            err: '',
            fullscreenLoading: false
        };
    },
    props: ['dialogShow', 'id', 'currentTitle'],
    computed: {
        title() {
            return this.id === 0 ? '添加礼品' : '编辑礼品'
        }
    },
    methods: {
        initData() {
            this.form = {
                title: '',
                price: 1,
                stock: 1,
                visible: 1,
                gift_category: 1,
                image: 'default.jpg',
                detail: ''
            },
            this.image_url = `${ENV.giftDIR}default.jpg`,
            this.image = null
        },
        handleClose() {
            this.$emit('close')
        },
        getGiftCate() {
            let url = this.$route.meta.api.getGiftCate
            this.axios.get(url).then(res => {
                if(res.data.code === 0){
                    this.cateList = res.data.data
                }
            })
        },
        uploadImage(params) {
            this.image = params.file
            let url = window.URL.createObjectURL(this.image)
            this.image_url = url
        },
        saveGift() {
            let file = this.image  //获取文件对象
            let form = new FormData()
            if(file){
                form.append('image', file, file.name) //将文件添加到formdata中
            }
            form.append('chunk', '0')
            form.append('title', this.form.title)
            form.append('price', this.form.price)
            form.append('stock', this.form.stock)
            form.append('visible', this.form.visible)
            form.append('gift_category', this.form.gift_category)
            form.append('detail', this.form.detail)
            let config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
            this.axios.post(this.$route.meta.api.addGift, form, config) //传输数据
                .then(res => {
                    if(res.data.code === 0){
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        this.handleClose()
                        this.initData()
                    } else {
                        this.$message({
                            message: res.data.message,
                            type: 'warning'
                        })
                    }
                })
        }
    },
    created() {
        this.getGiftCate()
        console.log(this.$route.meta.api.addGift)
    },
    watch: {
        currentName(val) {
            this.form.name = val
        },
        currentPid(val) {
        }
    }
}
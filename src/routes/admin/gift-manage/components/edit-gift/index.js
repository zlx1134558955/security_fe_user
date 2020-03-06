import Utils from '@/utils/utils'
import ENV from 'Config/env'
export default {
    data() {
        return {
            labelPosition: 'right',
            form: {
                id: 0,
                title: '',
                price: 1,
                stock: 1,
                visible: 1,
                gift_category: 1,
                image: 'default.jpg',
                detail: ''
            },
            image_url: `${ENV.giftDIR}default.jpg`,
            image: null,
            rules: {
                title: [
                    { required: true, message: '请输入礼品名称', trigger: 'blur' },
                    { min: 1, max: 40, message: '礼品名称不得超过40个字符', trigger: 'blur' }
                ],
                price: [
                    { required: true, message: '请输入价格', trigger: 'change' }
                ],
                stock: [
                    { required: true, message: '请输入库存', trigger: 'change' }
                ],
                gift_category: [
                    { required: true, message: '请选择类别', trigger: 'change' }
                ],
                visible: [
                    { required: true, message: '请选择上架状态', trigger: 'change' }
                ],
                detail: [
                    { required: true, message: '请输入礼品详情', trigger: 'blur' },
                    { min: 1, max: 500, message: '礼品名称不得超过500个字符', trigger: 'blur' }
                ],
            },
            err: '',
            fullscreenLoading: false
        };
    },
    props: ['dialogShow', 'currentGift', 'cateList'],
    computed: {
        title() {
            return this.id === 0 ? '添加礼品' : '编辑礼品'
        }
    },
    methods: {
        handleClose() {
            this.$emit('close')
        },
        uploadImage(params) {
            this.image = params.file
            let url = window.URL.createObjectURL(this.image)
            this.image_url = url
        },
        saveGift() {
            this.$refs.form.validate((valid) => {
                if (!valid) {
                    return
                }
                let file = this.image  //获取文件对象
                let form = new FormData()
                if (file) {
                    form.append('image', file, file.name) //将文件添加到formdata中
                }
                form.append('chunk', '0')
                form.append('id', this.form.id)
                form.append('title', this.form.title)
                form.append('price', this.form.price)
                form.append('stock', this.form.stock)
                form.append('visible', this.form.visible)
                form.append('gift_category', this.form.gift_category)
                form.append('detail', this.form.detail)
                let config = {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }
                let url = this.form.id === 0 ? this.$route.meta.api.addGift : this.$route.meta.api.editGift
                this.axios.post(url , form, config) //传输数据
                    .then(res => {
                        if (res.data.code === 0) {
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            })
                            this.$emit('getGiftsList')
                            this.handleClose()
                        } else {
                            this.$message({
                                message: res.data.message,
                                type: 'warning'
                            })
                        }
                    })
            })
        }
    },
    created() {
    },
    watch: {
        currentGift(val) {
            this.image = null
            this.image_url = `${ENV.giftDIR}${val.image}`
            let form = this.form
            for(let key in form){
                form[key] = val[key]
            }
        }
    }
}
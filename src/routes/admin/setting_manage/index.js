import ENV from 'Config/env'
import Api from 'Config/admin_api'
export default {
    data() {
        return {
            form: {
                site_name_cn: '',
                site_name_en: '',
                site_intro: '',
                site_abbrev: '',
                site_about: '',
                site_career: '',
                site_email: '',
                site_qq: '',
                site_weibo: '',
                site_wechat: 'weixin.png'
            },
            site_wechat_img: '',
            image: null
        }
    },
    created() {
        this.getSite()
    },
    computed: {
    },
    methods: {
        getSite(){
            this.axios.get(Api.getSite).then(res => {
                if(res.data.code === 0){
                    let setting = res.data.data
                    for(let item in setting){
                        this.form[item] = setting[item]
                    }
                    this.site_wechat_img = `${ENV.settingDIR}${this.form.site_wechat}`
                }
            })
        },
        setWechat(params) {
            this.image = params.file
            let url = window.URL.createObjectURL(this.image)
            this.site_wechat_img = url
        },
        submitSetting() {
            let file = this.image  //获取文件对象
            let form = new FormData()
            if(file){
                form.append('file', file, file.name) //将文件添加到formdata中
            }
            form.append('chunk', '0')
            form.append('site_name_cn', this.form.site_name_cn)
            form.append('site_name_en', this.form.site_name_en)
            form.append('site_intro', this.form.site_intro)
            form.append('site_abbrev', this.form.site_abbrev)
            form.append('site_about', this.form.site_about)
            form.append('site_career', this.form.site_career)
            form.append('site_email', this.form.site_email)
            form.append('site_qq', this.form.site_qq)
            form.append('site_weibo', this.form.site_weibo)
            let config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
            this.axios.post(this.$route.meta.api.setWebsite, form, config) //传输数据
                .then(res => {
                    if(res.data.code === 0){
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                    } else {
                        this.$message({
                            message: res.data.message,
                            type: 'warning'
                        })
                    }
                })
        }
    }
}
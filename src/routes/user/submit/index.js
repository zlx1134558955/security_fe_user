import Tip from '@/routes/user/components/tip/index.vue'
// import Editor from '@/components/editor/index.vue'
export default {
    data() {
        return {
            title: '提交漏洞',
            desc: '随心畅游互联网，携手共筑安全墙',
            form: {
                name: '',
                type: '',
                content: '',
                attach: []
            },
            agree: false,
            rules: {

            },
            editorContent: null
        }
    },
    components: {
        Tip,
        // Editor
    },
    methods: {
        getContent() {
            alert(this.editorContent)
        },
        upload(){
            console.log(this.form.attach)
        }
    }
}
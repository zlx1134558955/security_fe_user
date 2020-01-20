export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    computed: {
        siteNameCN() {
            return this.$store.state.site.site_name_cn
        },
        siteNameEN() {
            return this.$store.state.site.site_name_en
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    created() {
    }
}
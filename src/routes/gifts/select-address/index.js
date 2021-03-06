import AddressForm from '@/routes/member/person/address-form/index.vue'
export default {
  data () {
    return {
      id: '', // 地址id
      address: null,
      user_id: this.$store.state.userInfo.id,
      addressList: [],
      showAddressForm: false,
      dialogVisible: true
    }
  },
  components: {
    AddressForm
  },
  props: ['showSelectAddress'],
  methods: {
    closeAddressForm () {
      this.showAddressForm = false
    },
    handleClose () {
      this.$emit('close')
    },
    getAddressList () {
      this.defaultId = 0
      const url = this.$route.meta.api.address
      this.axios.get(url).then(res => {
        if (res.data.code === 0) {
          this.addressList = res.data.data
          this.addressList.forEach(item => {
            if (parseInt(item.default) === 1) {
              this.defaultId = item.id
              this.$emit('setDefaultAddress', item)
            }
          })
        }
      })
    },
    setDefaultAddress (item) {
      this.$emit('close')
      this.$emit('setDefaultAddress', item)
    },
    editAddress (item) {
      this.address = item || {
        realname: '',
        mobile: '',
        detail: '',
        default: 1,
        zipcode: ''
      }
      this.showAddressForm = true
    }
  },
  created () {
    this.getAddressList()
  }
}

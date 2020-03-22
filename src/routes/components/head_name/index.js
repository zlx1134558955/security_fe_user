export default {
  data () {
    return {
      backgroundDiv: {
        backgroundImage: `url(${this.avatar})`,
        backgroundSize: '100%'
      }
    }
  },
  props: ['avatar', 'name']
}

export default {
  data () {
    return {
      cssStyle: {
        backgroundImage: `url(${this.avatar})`,
        backgroundSize: '100%',
        height: `${this.h}px`,
        width: `${this.w}px`
      }
    }
  },
  props: ['avatar', 'name', 'h', 'w']
}

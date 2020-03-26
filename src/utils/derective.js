import Vue from 'vue'
// 表格固定表头滚动条
const scroll = Vue.directive('my_table_scroll', {
  bind (el, binding) {
    const table = el.querySelector('.el-table__body-wrapper')
    table.classList.add('myscroll')
    const { height, showX = 'hidden', showY = 'auto' } = binding.value
    // 设置滚动条宽度
    document.styleSheets[0].addRule('.myscroll::-webkit-scrollbar', 'width: 6px; height: 6px;')
    // 设置滑块背景色和样式
    document.styleSheets[0].addRule('.myscroll::-webkit-scrollbar-thumb', 'background-color: #ddd; border-radius: 3px;')
    // 设置表格高度
    document.styleSheets[0].addRule('.myscroll', `height: ${height}px; overflow-y: ${showY} !important; overflow-x: ${showX} !important;`)
  }
})
export default {
  scroll
}

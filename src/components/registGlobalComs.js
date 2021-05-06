/*
 * @Description: 统一注册全局组件(部分非全局不挂载到全局)
 * @Autor: ykx
 * @Date: 2021-04-29 00:23:31
 * @LastEditors: your name
 * @LastEditTime: 2021-05-06 11:22:53
 */
import HeadTop from './common/HeadTop.vue'
import CellSelect from './common/CellSelect.vue'
import SelectPicker from './common/SelectPicker.vue'
let isInstalledAll = false
const coms = [HeadTop, CellSelect, SelectPicker]
const install = Vue => {
  if (isInstalledAll) {
    return
  }
  coms.forEach(com => {
    Vue.component(com.name, com)
  })
  isInstalledAll = true
}
export { HeadTop, CellSelect, SelectPicker }
export default {
  install
}

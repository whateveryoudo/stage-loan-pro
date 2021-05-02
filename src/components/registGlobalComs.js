/*
 * @Description: 统一注册全局组件(部分非全局不挂载到全局)
 * @Autor: ykx
 * @Date: 2021-04-29 00:23:31
 * @LastEditors: your name
 * @LastEditTime: 2021-05-02 15:55:30
 */
import HeadTop from './common/HeadTop.vue'
import CellSelect from './common/CellSelect.vue'
let isInstalledAll = false
const coms = [HeadTop, CellSelect]
const install = Vue => {
  if (isInstalledAll) {
    return
  }
  coms.forEach(com => {
    Vue.component(com.name, com)
  })
  isInstalledAll = true
}
export { HeadTop, CellSelect }
export default {
  install
}

/*
 * @Description: 统一注册全局组件(部分非全局不挂载到全局)
 * @Autor: ykx
 * @Date: 2021-04-29 00:23:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-29 00:28:11
 */
import HeadTop from './common/HeadTop.vue'
let isInstalledAll = false
const coms = [HeadTop]
const install = Vue => {
  if (isInstalledAll) {
    return
  }
  coms.forEach(com => {
    Vue.component(com.name, com)
  })
  isInstalledAll = true
}
export { HeadTop }
export default {
  install
}

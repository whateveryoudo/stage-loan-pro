/*
 * @Description: 统一注册全局组件(部分非全局不挂载到全局)
 * @Autor: ykx
 * @Date: 2021-04-29 00:23:31
 * @LastEditors: your name
 * @LastEditTime: 2021-05-13 15:27:45
 */
import HeadTop from "./common/HeadTop.vue";
import CellSelect from "./common/CellSelect.vue";
import SelectPicker from "./common/SelectPicker.vue";
import FooterMsg from "./common/FooterMsg.vue";
let isInstalledAll = false;
const coms = [HeadTop, CellSelect, SelectPicker, FooterMsg];
const install = (Vue) => {
  if (isInstalledAll) {
    return;
  }
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
  isInstalledAll = true;
};
export { HeadTop, CellSelect, SelectPicker, FooterMsg };
export default {
  install,
};

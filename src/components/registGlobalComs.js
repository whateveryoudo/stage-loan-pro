/*
 * @Description: 统一注册全局组件(部分非全局不挂载到全局)
 * @Autor: ykx
 * @Date: 2021-04-29 00:23:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-10 22:03:27
 */
import HeadTop from "./common/HeadTop.vue";
import CellSelect from "./common/CellSelect.vue";
import SelectPicker from "./common/SelectPicker.vue";
import FooterMsg from "./common/FooterMsg.vue";
// 熊猫优贷底部
import PdFooterMsg from "./common/PdFooterMsg.vue";
// 微消费底部
import MicroFooterMsg from "./common/MicroFooterMsg.vue";
// 国美全局组件
import GmHeadTop from "./guomei/HeadTop.vue";
// 马上金融全局组件
import RnHeadTop from "./rightNow/HeadTop.vue";

let isInstalledAll = false;
const coms = [HeadTop, CellSelect, MicroFooterMsg, PdFooterMsg, SelectPicker, FooterMsg, GmHeadTop, RnHeadTop];
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

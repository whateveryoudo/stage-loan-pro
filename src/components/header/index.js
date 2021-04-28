/*
 * @Author: ykx
 * @Date: 2021-04-28 10:41:56
 * @LastEditTime: 2021-04-28 10:45:23
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \stage-load-pro\src\components\header\index.js
 */
import HeadTop  from './headTop.vue'
let isInstalled = false;
const install = (Vue) => {
    if (isInstalled) {return }
    Vue.component(HeadTop.name, HeadTop);
    isInstalled = true;
}
export default {
    install
}
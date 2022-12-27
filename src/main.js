/*
 * @Author: ykx
 * @Date: 2021-04-28 09:46:16
 * @LastEditTime: 2022-12-27 20:05:05
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \stage-load-pro\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import globalComs from '@/components/registGlobalComs'
import mintUI from 'mint-ui'
import { Toast } from 'mint-ui'
import "./config/rem";
import utils from '@/utils'
import "mint-ui/lib/style.css";
import "./style/scss/common.scss";
import "./style/scss/mint-ui-reset.scss";
import "./assets/style/iconfont.css";
Vue.prototype.$toast = Toast;
Vue.prototype.$utils = utils;
//注册组件
Vue.use(mintUI);
Vue.use(globalComs);
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

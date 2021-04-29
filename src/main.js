/*
 * @Author: ykx
 * @Date: 2021-04-28 09:46:16
 * @LastEditTime: 2021-04-29 16:56:25
 * @LastEditors: your name
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
import "mint-ui/lib/style.css";
import "./style/scss/common.scss";
import "./style/scss/mint-ui-reset.scss";
Vue.prototype.$toast = Toast;
//注册组件
Vue.use(mintUI);
Vue.use(globalComs);
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

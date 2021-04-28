/*
 * @Author: ykx
 * @Date: 2021-04-28 09:46:16
 * @LastEditTime: 2021-04-29 00:26:05
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
import "./config/rem";
import "mint-ui/lib/style.css";
import "./style/scss/common.scss";
import "./style/scss/mint-ui-reset.scss";
//注册组件
Vue.use(globalComs);
import { Field, Button, Popup } from "mint-ui";
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);
Vue.config.productionTip = false;
console.log(router);
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

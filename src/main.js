// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "./config/rem";
import "mint-ui/lib/style.css";
import "./style/scss/common.scss";
import "./style/scss/mint-ui-reset.scss";
//注册组件

import { Field, Button, Popup } from "mint-ui";
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

/*
 * @Author: ykx
 * @Date: 2021-04-28 18:38:32
 * @LastEditTime: 2021-05-06 09:56:54
 * @LastEditors: your name
 * @Description:
 * @FilePath: \stage-load-pro\src\router\index.js
 */
import Vue from "vue";
import Router from "vue-router";
import config from "../config";
import routerData from "./routerData";

Vue.use(Router);
const whiteListPath = ["/deal/1", "/deal/2", "/regist"]; // TODO正则匹配
const router = new Router({
  routes: routerData,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta ? to.meta.title : config.APP_NAME;
  if (whiteListPath.includes(to.path)) {
    next();
  } else {
    if (sessionStorage.getItem("token")) {
      if (to.path === "/login") {
        // 这里退回登录，清空本地数据
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userInfo");
      }
      next();
    } else {
      if (to.path === "/login") {
        next();
      } else {
        next({ path: "/login" });
      }
    }
  }
});
export default router;

/*
 * @Author: ykx
 * @Date: 2021-04-28 18:38:32
 * @LastEditTime: 2022-06-23 01:16:43
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \stage-load-pro\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import config from '../config'
import routerData from './routerData'

Vue.use(Router)
const whiteListPath = ['/guoMei/deal/1', '/guoMei/deal/2', '/deal/1', '/deal/2', '/regist'] // TODO正则匹配
const router = new Router({
  routes: routerData
})

// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta ? to.meta.title : config.APP_NAME
  if (whiteListPath.includes(to.path)) {
    next()
  } else {
    if (sessionStorage.getItem('token')) {
      if (to.path === '/login') {
        // 这里退回登录，清空本地数据
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userInfo')
      }
      next()
    } else {
      if (to.path.includes('/login')) {
        next()
      } else {
        if (to.path.includes('/guoMei')) {
          next({ path: '/guoMei/login' })
        } else if (to.path.includes('/rightNow')) {
          next({ path: '/rightNow/login' })
        } else {
          next({ path: '/login' })
        }
      }
    }
  }
})
export default router

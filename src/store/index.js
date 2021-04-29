/*
 * @Description: 顶部进度
 * @Autor: ykx
 * @Date: 2021-04-28 20:39:51
 * @LastEditors: your name
 * @LastEditTime: 2021-04-29 16:43:18
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)

const store = {
  state: {
    //顶部进度控制
    progressSteps: [
      {
        title: '借款申请',
        waiting: false,
        isComplete: false
      },
      {
        title: '资格验证',
        waiting: false,
        isComplete: false
      },
      {
        title: '信息补充',
        waiting: false,
        isComplete: false
      },
      {
        title: '绑定银行卡',
        waiting: false,
        isComplete: false
      }
    ]
  },
  mutations,
  actions: {},
  getters: {}
}
export default new Vuex.Store(store)

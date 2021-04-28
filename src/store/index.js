/*
 * @Description: 顶部进度
 * @Autor: ykx
 * @Date: 2021-04-28 20:39:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-29 01:12:19
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = {
  state: {
    //顶部进度控制
    progressSteps: [
      {
        title: '借款申请',
        isComplete: false
      },
      {
        title: '资格验证',
        isComplete: false
      },
      {
        title: '信息补充',
        isComplete: false
      },
      {
        title: '绑定银行卡',
        isComplete: false
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {}
}
export default new Vuex.Store(store)

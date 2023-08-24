/*
 * @Description: 配置编译环境和线上环境之间的切换
 * @Autor: ykx
 * @Date: 2021-05-06 23:10:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-12 12:01:35
 */
let baseUrl
let routerMode = 'history'
let imgBaseUrl = 'https://gw.alicdn.com/tfs/'
let imgBaseUrl1 = 'https://gw.alicdn.com/i3/'
if (process.env.NODE_ENV == 'development') {
  // baseUrl = 'http://localhost:5050'
  // baseUrl = 'http://www.qdqfa.cn'
  baseUrl = 'http://loan.dlbgp.cn'

} else if (process.env.NODE_ENV == 'production') {
  // baseUrl = 'https://quickloanapi.applinzi.com';
  // baseUrl = 'http://www.qdqfa.cn'
  baseUrl = 'http://loan.dlbgp.cn'
}
export { baseUrl, routerMode, imgBaseUrl, imgBaseUrl1 }

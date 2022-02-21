/*
 * @Description: 配置编译环境和线上环境之间的切换
 * @Autor: ykx
 * @Date: 2021-05-06 23:10:38
 * @LastEditors: your name
 * @LastEditTime: 2022-02-21 11:07:34
 */
let baseUrl
let routerMode = 'history'
let imgBaseUrl = 'https://gw.alicdn.com/tfs/'
let imgBaseUrl1 = 'https://gw.alicdn.com/i3/'
if (process.env.NODE_ENV == 'development') {
  // 这里为非@记录值，添加前缀www
  // baseUrl = 'http://localhost:5050'
  baseUrl = 'http://www.qdqkon.cn'
} else if (process.env.NODE_ENV == 'production') {
  // baseUrl = 'https://quickloanapi.applinzi.com';
  baseUrl = 'http://www.qdqkon.cn'
}
export { baseUrl, routerMode, imgBaseUrl, imgBaseUrl1 }

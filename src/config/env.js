/*
 * @Description: 配置编译环境和线上环境之间的切换
 * @Autor: ykx
 * @Date: 2021-05-06 23:10:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-07 19:31:35
 */
let baseUrl;
let routerMode = 'history';
let imgBaseUrl = 'https://gw.alicdn.com/tfs/';
let imgBaseUrl1 = 'https://gw.alicdn.com/i3/';
if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://localhost:5050';
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'https://quickloanapi.applinzi.com';
}
// baseUrl = 'https://quickloanapi.applinzi.com';
export {
  baseUrl,
  routerMode,
  imgBaseUrl,
  imgBaseUrl1,
}

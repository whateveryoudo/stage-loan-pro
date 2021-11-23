/*
 * @Author: ykx
 * @Date: 2021-04-28 11:06:39
 * @LastEditTime: 2021-06-23 09:24:18
 * @LastEditors: your name
 * @Description: 部分cli配置
 * @FilePath: \stage-load-pro\vue.config.js
 */
module.exports = {
  configureWebpack: (config) => {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      config.devtool = "source-map";
    }
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "stage.load.pro";
      return args;
    });
  },
};

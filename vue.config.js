/*
 * @Author: ykx
 * @Date: 2021-04-28 11:06:39
 * @LastEditTime: 2021-04-29 00:21:03
 * @LastEditors: Please set LastEditors
 * @Description: 部分cli配置
 * @FilePath: \stage-load-pro\vue.config.js
 */
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    config.devtool = 'source-map'

    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'stage.load.pro'
      return args
    })
  }
}

/*
 * @Author: ykx
 * @Date: 2021-04-28 11:06:39
 * @LastEditTime: 2021-04-28 11:09:17
 * @LastEditors: your name
 * @Description: 部分cli配置
 * @FilePath: \stage-load-pro\vue.config.js
 */
module.exports = {
    chainWebpack : config => {
        config.devtool ='source-map';
        config
            .plugin('html')
            .tap(args => {
                args[0].title= 'stage.load.pro';
                return args
            })
    }
};

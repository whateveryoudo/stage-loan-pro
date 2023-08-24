/*
 * @Author: ykx
 * @Date: 2022-06-23 22:28:55
 * @LastEditTime: 2022-06-23 22:30:55
 * @LastEditors: your name
 * @Description: 部分系统区分操作
 * @FilePath: \stage-load-pro\src\components\common\sysMixins.js
 */

export default {
  computed: {
    // 获取系统名称
    sysName() {
      const colorMap = {
        "/guoMei": "guoMei",
        "/rightNow": "rightNow",
      };
      let targetColor = "";
      Object.keys(colorMap).forEach((k) => {
        if (this.$route.path.includes(k)) {
          targetColor = colorMap[k];
        }
      });
      return targetColor || "hfq"; // '返回有德贷款'
    },
  },
};

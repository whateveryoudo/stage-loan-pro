/*
 * @Author: ykx
 * @Date: 2021-04-28 09:37:25
 * @LastEditTime: 2021-04-28 09:59:46
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \temp-pro\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};

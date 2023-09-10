/*
 * @Author: ykx
 * @Date: 2021-04-29 10:37:59
 * @LastEditTime: 2023-09-10 22:46:49
 * @LastEditors: Please set LastEditors
 * @Description: 请求集合-微消费
 * @FilePath: \stage-load-pro\src\service\getData.js
 */
import axios from "@/config/axios";
/*********快贷api集合**********/

export const toLogin = (params) => axios.post("/micro/user/login", params); // 快贷用户登录
export const fetchCaptcha = () => axios.get("/micro/getCaptcha"); // 获取图形验证码
export const toRegist = (params) => axios.post("/micro/user/regist", params); // 用户注册
export const updateUserStatus = (userId) =>
  axios.post("/micro/flow/updateStatus", { userId }); // 更新用户状态（实际应是提交审核资料）
export const verifyUser = (params) => axios.post("/verify/verifyUserInfo", params); // 用户信息认证

/*
 * @Author: ykx
 * @Date: 2021-04-29 10:37:59
 * @LastEditTime: 2021-05-06 09:21:41
 * @LastEditors: your name
 * @Description: 请求集合
 * @FilePath: \stage-load-pro\src\service\getData.js
 */
import axios from "@/config/axios";
export const getLoginMsg = (reqId, phone) =>
  axios(
    "/mobile/message",
    {
      //获取登陆验证码
      reqId,
      phone,
    },
    "post"
  );

export const getSms = (reqId, phone) =>
  axios(
    "/mobile/sms",
    {
      //获取查询的短信验证码
      reqId,
      phone,
    },
    "post"
  );
export const getCaptcha = (reqId) =>
  axios(
    "/mobile/captcha",
    {
      //获取图形验证码
      reqId,
    },
    "post",
    false
  );

export const toSearch = (params) => axios("/mobile/verify", params, "post"); //登陆移动

export const getReqid = () => axios("/mobile/session", {}, "post", false); //获取随机的请求id

/*********快贷api集合**********/

export const toLogin = (params) => axios.post("/user/login", params); // 快贷用户登录
export const fetchCaptcha = () => axios.get("/getCaptcha"); // 获取图形验证码
export const toRegist = (params) => axios.post("/user/regist", params); // 用户注册
export const updateUserStatus = (userId) =>
  axios.post("/flow/updateStatus", { userId }); // 更新用户状态（实际应是提交审核资料）

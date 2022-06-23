/*
 * @Description: 路由配置
 * @Autor: ykx
 * @Date: 2021-04-28 20:43:40
 * @LastEditors: your name
 * @LastEditTime: 2022-06-23 23:14:03
 */
// 好分期
const userLogin = () => import("../page/login/userLogin.vue");
const userRegist = () => import("../page/login/userRegist.vue");
const loanFlow = () => import("../page/loanFlow");
const loanInfo = () => import("../page/loanFlow/loanInfo.vue");
const qualityVerify = () => import("../page/loanFlow/qualityVerify.vue");
const basicInfo = () => import("../page/loanFlow/basicInfo.vue");
const cardInfo = () => import("../page/loanFlow/cardInfo.vue");
const loanResult = () => import("../page/loanResult");

const deal = () => import("../page/deal/deal.vue");
const confirmLoan = () => import("../page/confirmLoan/confirmLoan.vue");
const repayDetail = () => import("../page/repayDetail/repayDetail.vue");
const repayPlanList = () => import("../page/repayPlanList/repayPlanList.vue");
const repayResult = () => import("../page/repayResult/repayResult.vue");

// 国美易卡
const GuoMeiLayout = () => import("@/layout/GuoMeiLayout");
const GmUserLogin = () => import("@/page/guomei/login/userLogin.vue");
const GmDeal = () => import("@/page/guomei/deal/deal.vue");
const GmConfirmLoan = () => import("@/page/guomei/confirmLoan/confirmLoan.vue");
const GmRepayPlanList = () =>
  import("@/page/guomei/repayPlanList/repayPlanList.vue");

const GmLoanFlow = () => import("@/page/guomei/loanFlow");
const GmLoanInfo = () => import("@/page/guomei/loanFlow/loanInfo.vue");
const GmQualityVerify = () =>
  import("@/page/guomei/loanFlow/qualityVerify.vue");
const GmBasicInfo = () => import("@/page/guomei/loanFlow/basicInfo.vue");
const GmCardInfo = () => import("@/page/guomei/loanFlow/cardInfo.vue");
// 马上消费金融
const RnLayout = () => import("@/layout/RightNowLayout");
const RnUserLogin = () => import("@/page/rightNow/login/userLogin.vue");
const RnDeal = () => import("@/page/rightNow/deal/deal.vue");
const RnConfirmLoan = () =>
  import("@/page/rightNow/confirmLoan/confirmLoan.vue");
const RnRepayDetail = () =>
  import("@/page/rightNow/repayDetail/repayDetail.vue");
const RnRepayPlanList = () =>
  import("@/page/rightNow/repayPlanList/repayPlanList.vue");

const RnLoanFlow = () => import("@/page/rightNow/loanFlow");
const RnLoanInfo = () => import("@/page/rightNow/loanFlow/loanInfo.vue");
const RnQualityVerify = () =>
  import("@/page/rightNow/loanFlow/qualityVerify.vue");
const RnBasicInfo = () => import("@/page/rightNow/loanFlow/basicInfo.vue");
const RnCardInfo = () => import("@/page/rightNow/loanFlow/cardInfo.vue");

export default [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "userLogin",
    component: userLogin,
    meta: {
      title: "用户登录",
    },
  },
  {
    path: "/regist",
    name: "userRegist",
    component: userRegist,
    meta: {
      title: "用户注册",
    },
  },
  {
    path: "/loanFlow",
    name: "loanFlow",
    component: loanFlow,
    redirect: "/loanFlow/loanInfo",
    children: [
      {
        path: "/loanFlow/loanInfo",
        name: "loanInfo",
        component: loanInfo,
        meta: {
          title: "申请借款",
        },
      },
      {
        path: "/loanFlow/qualityVerify",
        name: "qualityVerify",
        component: qualityVerify,
        meta: {
          title: "资格验证",
        },
      },
      {
        path: "/loanFlow/basicInfo",
        name: "basicInfo",
        component: basicInfo,
        meta: {
          title: "信息补充",
        },
      },
      {
        path: "/loanFlow/cardInfo",
        name: "cardInfo",
        component: cardInfo,
        meta: {
          title: "绑定银行卡",
        },
      },
    ],
  },
  {
    path: "/loanResult",
    name: "loanResult",
    component: loanResult,
    meta: {
      title: "申请状态",
    },
  },
  {
    path: "/confirmLoan",
    name: "confirmLoan",
    component: confirmLoan,
    meta: {
      title: "借款信息",
    },
  },
  {
    path: "/repayDetail",
    name: "repayDetail",
    component: repayDetail,
    meta: {
      title: "还款详情",
    },
  },
  {
    path: "/repayPlanList",
    name: "repayPlanList",
    component: repayPlanList,
    meta: {
      title: "还款计划",
    },
  },
  {
    path: "/repayResult",
    name: "repayResult",
    component: repayResult,
    meta: {
      title: "还款状态",
    },
  },
  {
    path: "/deal/:type",
    name: "deal",
    component: deal,
    meta: {
      title: "用户注册",
    },
  },
  // 马上金融
  {
    path: "/rightNow",
    component: RnLayout,
    redirect: "/rightNow/login",
    children: [
      {
        path: "login",
        component: RnUserLogin,
        meta: {
          title: "用户登录",
        },
      },
      {
        path: "deal/:type",
        component: RnDeal,
        meta: {
          title: "用户注册",
        },
      },
      // 进件流程
      {
        path: "loanFlow",
        component: RnLoanFlow,
        redirect: "/rightNow/loanFlow/loanInfo",
        children: [
          {
            path: "loanInfo",
            component: RnLoanInfo,
            meta: {
              title: "申请借款",
            },
          },
          {
            path: "qualityVerify",
            component: RnQualityVerify,
            meta: {
              title: "资格验证",
            },
          },
          {
            path: "basicInfo",
            component: RnBasicInfo,
            meta: {
              title: "信息补充",
            },
          },
          {
            path: "cardInfo",
            component: RnCardInfo,
            meta: {
              title: "绑定银行卡",
            },
          },
        ],
      },
      {
        path: "repayDetail",
        component: RnRepayDetail,
        meta: {
          title: "借还详情",
        },
      },
      {
        path: "confirmLoan",
        component: RnConfirmLoan,
        meta: {
          title: "还款",
        },
      },
      {
        path: "repayPlanList",
        component: RnRepayPlanList,
        meta: {
          title: "还款计划",
        },
      },
    ],
  },
  // 国美
  {
    path: "/guoMei",
    component: GuoMeiLayout,
    redirect: "/guoMei/login",
    children: [
      {
        path: "login",
        component: GmUserLogin,
        meta: {
          title: "用户登录",
        },
      },
      {
        path: "deal/:type",
        component: GmDeal,
        meta: {
          title: "用户注册",
        },
      },
      // 进件流程
      {
        path: "loanFlow",
        component: GmLoanFlow,
        redirect: "/guoMei/loanFlow/loanInfo",
        children: [
          {
            path: "loanInfo",
            component: GmLoanInfo,
            meta: {
              title: "申请借款",
            },
          },
          {
            path: "qualityVerify",
            component: GmQualityVerify,
            meta: {
              title: "资格验证",
            },
          },
          {
            path: "basicInfo",
            component: GmBasicInfo,
            meta: {
              title: "信息补充",
            },
          },
          {
            path: "cardInfo",
            component: GmCardInfo,
            meta: {
              title: "绑定银行卡",
            },
          },
        ],
      },
      {
        path: "confirmLoan",
        component: GmConfirmLoan,
        meta: {
          title: "还款",
        },
      },
      {
        path: "repayPlanList",
        component: GmRepayPlanList,
        meta: {
          title: "还款计划",
        },
      },
    ],
  },
];

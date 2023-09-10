/*
 * @Description: 路由配置
 * @Autor: ykx
 * @Date: 2021-04-28 20:43:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-10 22:18:47
 */
// 有德贷款
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
//  熊猫优贷款
const PdLayout = () => import("@/layout/PdLayout");
const PdUserLogin = () => import("@/page/panda/login/userLogin.vue");
const PdUserRegist = () => import("@/page/panda/login/userRegist.vue");
const PdDeal = () => import("@/page/panda/deal/deal.vue");
const PdConfirmLoan = () => import("@/page/panda/confirmLoan/confirmLoan.vue");
const PdRepayDetail = () =>
  import("@/page/panda/repayDetail/repayDetail.vue");

const PdRepayPlanList = () =>
  import("@/page/panda/repayPlanList/repayPlanList.vue");

const PdLoanFlow = () => import("@/page/panda/loanFlow");
const PdLoanInfo = () => import("@/page/panda/loanFlow/loanInfo.vue");
const PdQualityVerify = () =>
  import("@/page/panda/loanFlow/qualityVerify.vue");
const PdBasicInfo = () => import("@/page/panda/loanFlow/basicInfo.vue");
const PdCardInfo = () => import("@/page/panda/loanFlow/cardInfo.vue");

const PdLoanResult = () => import("@/page/panda/loanResult");


//  微消费贷款
const McLayout = () => import("@/layout/McLayout");
const McUserLogin = () => import("@/page/micro/login/userLogin.vue");
const McUserRegist = () => import("@/page/micro/login/userRegist.vue");
const McDeal = () => import("@/page/micro/deal/deal.vue");
const McConfirmLoan = () => import("@/page/micro/confirmLoan/confirmLoan.vue");
const McRepayDetail = () =>
  import("@/page/micro/repayDetail/repayDetail.vue");

const McRepayPlanList = () =>
  import("@/page/micro/repayPlanList/repayPlanList.vue");

const McLoanFlow = () => import("@/page/micro/loanFlow");
const McLoanInfo = () => import("@/page/micro/loanFlow/loanInfo.vue");
const McQualityVerify = () =>
  import("@/page/micro/loanFlow/qualityVerify.vue");
const McBasicInfo = () => import("@/page/micro/loanFlow/basicInfo.vue");
const McCardInfo = () => import("@/page/micro/loanFlow/cardInfo.vue");

const McLoanResult = () => import("@/page/micro/loanResult");


// 国美易卡
// const GuoMeiLayout = () => import("@/layout/GuoMeiLayout");
// const GmUserLogin = () => import("@/page/guomei/login/userLogin.vue");
// const GmDeal = () => import("@/page/guomei/deal/deal.vue");
// const GmConfirmLoan = () => import("@/page/guomei/confirmLoan/confirmLoan.vue");
// const GmRepayPlanList = () =>
//   import("@/page/guomei/repayPlanList/repayPlanList.vue");

// const GmLoanFlow = () => import("@/page/guomei/loanFlow");
// const GmLoanInfo = () => import("@/page/guomei/loanFlow/loanInfo.vue");
// const GmQualityVerify = () =>
//   import("@/page/guomei/loanFlow/qualityVerify.vue");
// const GmBasicInfo = () => import("@/page/guomei/loanFlow/basicInfo.vue");
// const GmCardInfo = () => import("@/page/guomei/loanFlow/cardInfo.vue");

// const GmLoanResult = () => import("@/page/guomei/loanResult");

// // 马上消费金融
// const RnLayout = () => import("@/layout/RightNowLayout");
// const RnUserLogin = () => import("@/page/rightNow/login/userLogin.vue");
// const RnDeal = () => import("@/page/rightNow/deal/deal.vue");
// const RnConfirmLoan = () =>
//   import("@/page/rightNow/confirmLoan/confirmLoan.vue");
// const RnRepayDetail = () =>
//   import("@/page/rightNow/repayDetail/repayDetail.vue");
// const RnRepayPlanList = () =>
//   import("@/page/rightNow/repayPlanList/repayPlanList.vue");

// const RnLoanFlow = () => import("@/page/rightNow/loanFlow");
// const RnLoanInfo = () => import("@/page/rightNow/loanFlow/loanInfo.vue");
// const RnQualityVerify = () =>
//   import("@/page/rightNow/loanFlow/qualityVerify.vue");
// const RnBasicInfo = () => import("@/page/rightNow/loanFlow/basicInfo.vue");
// const RnCardInfo = () => import("@/page/rightNow/loanFlow/cardInfo.vue");
// const RnLoanResult = () => import("@/page/rightNow/loanResult");

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
    // 熊猫优贷
  {
    path: "/panda",
    component: PdLayout,
    redirect: "/panda/login",
    children: [
      {
        path: "login",
        component: PdUserLogin,
        meta: {
          title: "用户登录",
        },
      },
      {
        path: "regist",
        component: PdUserRegist,
        meta: {
          title: "用户注册",
        },
      },
      {
        path: "deal/:type",
        component: PdDeal,
        meta: {
          title: "用户注册",
        },
      },
      // 进件流程
      {
        path: "loanFlow",
        component: PdLoanFlow,
        redirect: "/panda/loanFlow/loanInfo",
        children: [
          {
            path: "loanInfo",
            component: PdLoanInfo,
            meta: {
              title: "申请借款",
            },
          },
          {
            path: "qualityVerify",
            component: PdQualityVerify,
            meta: {
              title: "资格验证",
            },
          },
          {
            path: "basicInfo",
            component: PdBasicInfo,
            meta: {
              title: "信息补充",
            },
          },
          {
            path: "cardInfo",
            component: PdCardInfo,
            meta: {
              title: "绑定银行卡",
            },
          },
        ],
      },
      {
        path: "loanResult",
        component: PdLoanResult,
        meta: {
          title: "申请状态",
        },
      },
      {
        path: "repayDetail",
        component: PdRepayDetail,
        meta: {
          title: "借还详情",
        },
      },
      {
        path: "confirmLoan",
        component: PdConfirmLoan,
        meta: {
          title: "还款",
        },
      },
      {
        path: "repayPlanList",
        component: PdRepayPlanList,
        meta: {
          title: "还款计划",
        },
      },
    ],
  },
    // 微消费
    { 
      path: "/micro",
      component: McLayout,
      redirect: "/micro/login",
      children: [
        {
          path: "login",
          component: McUserLogin,
          meta: {
            title: "用户登录",
          },
        },
        {
          path: "regist",
          component: McUserRegist,
          meta: {
            title: "用户注册",
          },
        },
        {
          path: "deal/:type",
          component: McDeal,
          meta: {
            title: "用户注册",
          },
        },
        // 进件流程
        {
          path: "loanFlow",
          component: McLoanFlow,
          redirect: "/micro/loanFlow/loanInfo",
          children: [
            {
              path: "loanInfo",
              component: McLoanInfo,
              meta: {
                title: "申请借款",
              },
            },
            {
              path: "qualityVerify",
              component: McQualityVerify,
              meta: {
                title: "资格验证",
              },
            },
            {
              path: "basicInfo",
              component: McBasicInfo,
              meta: {
                title: "信息补充",
              },
            },
            {
              path: "cardInfo",
              component: McCardInfo,
              meta: {
                title: "绑定银行卡",
              },
            },
          ],
        },
        {
          path: "loanResult",
          component: McLoanResult,
          meta: {
            title: "申请状态",
          },
        },
        {
          path: "repayDetail",
          component: McRepayDetail,
          meta: {
            title: "借还详情",
          },
        },
        {
          path: "confirmLoan",
          component: McConfirmLoan,
          meta: {
            title: "还款",
          },
        },
        {
          path: "repayPlanList",
          component: McRepayPlanList,
          meta: {
            title: "还款计划",
          },
        },
      ],
    },
  // 马上金融
  // {
  //   path: "/rightNow",
  //   component: RnLayout,
  //   redirect: "/rightNow/login",
  //   children: [
  //     {
  //       path: "login",
  //       component: RnUserLogin,
  //       meta: {
  //         title: "用户登录",
  //       },
  //     },
  //     {
  //       path: "deal/:type",
  //       component: RnDeal,
  //       meta: {
  //         title: "用户注册",
  //       },
  //     },
  //     // 进件流程
  //     {
  //       path: "loanFlow",
  //       component: RnLoanFlow,
  //       redirect: "/rightNow/loanFlow/loanInfo",
  //       children: [
  //         {
  //           path: "loanInfo",
  //           component: RnLoanInfo,
  //           meta: {
  //             title: "申请借款",
  //           },
  //         },
  //         {
  //           path: "qualityVerify",
  //           component: RnQualityVerify,
  //           meta: {
  //             title: "资格验证",
  //           },
  //         },
  //         {
  //           path: "basicInfo",
  //           component: RnBasicInfo,
  //           meta: {
  //             title: "信息补充",
  //           },
  //         },
  //         {
  //           path: "cardInfo",
  //           component: RnCardInfo,
  //           meta: {
  //             title: "绑定银行卡",
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       path: "loanResult",
  //       component: RnLoanResult,
  //       meta: {
  //         title: "申请状态",
  //       },
  //     },
  //     {
  //       path: "repayDetail",
  //       component: RnRepayDetail,
  //       meta: {
  //         title: "借还详情",
  //       },
  //     },
  //     {
  //       path: "confirmLoan",
  //       component: RnConfirmLoan,
  //       meta: {
  //         title: "还款",
  //       },
  //     },
  //     {
  //       path: "repayPlanList",
  //       component: RnRepayPlanList,
  //       meta: {
  //         title: "还款计划",
  //       },
  //     },
  //   ],
  // },
  // 国美
  // {
  //   path: "/guoMei",
  //   component: GuoMeiLayout,
  //   redirect: "/guoMei/login",
  //   children: [
  //     {
  //       path: "login",
  //       component: GmUserLogin,
  //       meta: {
  //         title: "用户登录",
  //       },
  //     },
  //     {
  //       path: "deal/:type",
  //       component: GmDeal,
  //       meta: {
  //         title: "用户注册",
  //       },
  //     },
  //     // 进件流程
  //     {
  //       path: "loanFlow",
  //       component: GmLoanFlow,
  //       redirect: "/guoMei/loanFlow/loanInfo",
  //       children: [
  //         {
  //           path: "loanInfo",
  //           component: GmLoanInfo,
  //           meta: {
  //             title: "申请借款",
  //           },
  //         },
  //         {
  //           path: "qualityVerify",
  //           component: GmQualityVerify,
  //           meta: {
  //             title: "资格验证",
  //           },
  //         },
  //         {
  //           path: "basicInfo",
  //           component: GmBasicInfo,
  //           meta: {
  //             title: "信息补充",
  //           },
  //         },
  //         {
  //           path: "cardInfo",
  //           component: GmCardInfo,
  //           meta: {
  //             title: "绑定银行卡",
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       path: "loanResult",
  //       component: GmLoanResult,
  //       meta: {
  //         title: "申请状态",
  //       },
  //     },
  //     {
  //       path: "confirmLoan",
  //       component: GmConfirmLoan,
  //       meta: {
  //         title: "还款",
  //       },
  //     },
  //     {
  //       path: "repayPlanList",
  //       component: GmRepayPlanList,
  //       meta: {
  //         title: "还款计划",
  //       },
  //     },
  //   ],
  // },
];

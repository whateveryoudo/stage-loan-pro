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


// 微消费
export default [{
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
}]
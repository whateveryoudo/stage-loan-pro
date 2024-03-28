// 安逸借钱
const EasyLayout = () => import("@/layout/EasyLayout");
const EasyUserLogin = () => import("@/page/easy/login/userLogin.vue");
const EasyUserRegist = () => import("@/page/easy/login/userRegist.vue");
const EasyDeal = () => import("@/page/easy/deal/deal.vue");
const EasyConfirmLoan = () => import("@/page/easy/confirmLoan/confirmLoan.vue");
const EasyRepayDetail = () =>
  import("@/page/easy/repayDetail/repayDetail.vue");

const EasyRepayPlanList = () =>
  import("@/page/easy/repayPlanList/repayPlanList.vue");

const EasyLoanFlow = () => import("@/page/easy/loanFlow");
const EasyLoanInfo = () => import("@/page/easy/loanFlow/loanInfo.vue");
const EasyQualityVerify = () =>
  import("@/page/easy/loanFlow/qualityVerify.vue");
const EasyBasicInfo = () => import("@/page/easy/loanFlow/basicInfo.vue");
const EasyCardInfo = () => import("@/page/easy/loanFlow/cardInfo.vue");

const EasyLoanResult = () => import("@/page/easy/loanResult");


// 安逸借钱
export default [{
  path: "/easy",
  component: EasyLayout,
  redirect: "/easy/login",
  children: [
    {
      path: "login",
      component: EasyUserLogin,
      meta: {
        title: "用户登录",
      },
    },
    {
      path: "regist",
      component: EasyUserRegist,
      meta: {
        title: "用户注册",
      },
    },
    {
      path: "deal/:type",
      component: EasyDeal,
      meta: {
        title: "用户注册",
      },
    },
    // 进件流程
    {
      path: "loanFlow",
      component: EasyLoanFlow,
      redirect: "/easy/loanFlow/loanInfo",
      children: [
        {
          path: "loanInfo",
          component: EasyLoanInfo,
          meta: {
            title: "申请借款",
          },
        },
        {
          path: "qualityVerify",
          component: EasyQualityVerify,
          meta: {
            title: "资格验证",
          },
        },
        {
          path: "basicInfo",
          component: EasyBasicInfo,
          meta: {
            title: "信息补充",
          },
        },
        {
          path: "cardInfo",
          component: EasyCardInfo,
          meta: {
            title: "绑定银行卡",
          },
        },
      ],
    },
    {
      path: "loanResult",
      component: EasyLoanResult,
      meta: {
        title: "申请状态",
      },
    },
    {
      path: "repayDetail",
      component: EasyRepayDetail,
      meta: {
        title: "借还详情",
      },
    },
    {
      path: "confirmLoan",
      component: EasyConfirmLoan,
      meta: {
        title: "还款",
      },
    },
    {
      path: "repayPlanList",
      component: EasyRepayPlanList,
      meta: {
        title: "还款计划",
      },
    },
  ],
}]

//  应急贷款花
const EmgLayout = () => import("@/layout/EmgLayout");
const EmgUserLogin = () => import("@/page/emg/login/userLogin.vue");
const EmgUserRegist = () => import("@/page/emg/login/userRegist.vue");
const EmgDeal = () => import("@/page/emg/deal/deal.vue");
const EmgConfirmLoan = () => import("@/page/emg/confirmLoan/confirmLoan.vue");
const EmgRepayDetail = () =>
  import("@/page/emg/repayDetail/repayDetail.vue");

const EmgRepayPlanList = () =>
  import("@/page/emg/repayPlanList/repayPlanList.vue");

const EmgLoanFlow = () => import("@/page/emg/loanFlow");
const EmgLoanInfo = () => import("@/page/emg/loanFlow/loanInfo.vue");
const EmgQualityVerify = () =>
  import("@/page/emg/loanFlow/qualityVerify.vue");
const EmgBasicInfo = () => import("@/page/emg/loanFlow/basicInfo.vue");
const EmgCardInfo = () => import("@/page/emg/loanFlow/cardInfo.vue");

const EmgLoanResult = () => import("@/page/emg/loanResult");


export default [
    // 应急贷款花
    {
        path: "/emg",
        component: EmgLayout,
        redirect: "/emg/login",
        children: [
            {
                path: "login",
                component: EmgUserLogin,
                meta: {
                    title: "用户登录",
                },
            },
            {
                path: "regist",
                component: EmgUserRegist,
                meta: {
                    title: "用户注册",
                },
            },
            {
                path: "deal/:type",
                component: EmgDeal,
                meta: {
                    title: "用户注册",
                },
            },
            // 进件流程
            {
                path: "loanFlow",
                component: EmgLoanFlow,
                redirect: "/emg/loanFlow/loanInfo",
                children: [
                    {
                        path: "loanInfo",
                        component: EmgLoanInfo,
                        meta: {
                            title: "申请借款",
                        },
                    },
                    {
                        path: "qualityVerify",
                        component: EmgQualityVerify,
                        meta: {
                            title: "资格验证",
                        },
                    },
                    {
                        path: "basicInfo",
                        component: EmgBasicInfo,
                        meta: {
                            title: "信息补充",
                        },
                    },
                    {
                        path: "cardInfo",
                        component: EmgCardInfo,
                        meta: {
                            title: "绑定银行卡",
                        },
                    },
                ],
            },
            {
                path: "loanResult",
                component: EmgLoanResult,
                meta: {
                    title: "申请状态",
                },
            },
            {
                path: "repayDetail",
                component: EmgRepayDetail,
                meta: {
                    title: "借还详情",
                },
            },
            {
                path: "confirmLoan",
                component: EmgConfirmLoan,
                meta: {
                    title: "还款",
                },
            },
            {
                path: "repayPlanList",
                component: EmgRepayPlanList,
                meta: {
                    title: "还款计划",
                },
            },
        ],
    },
]
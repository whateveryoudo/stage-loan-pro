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



export default [   // 熊猫优贷
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
    },]
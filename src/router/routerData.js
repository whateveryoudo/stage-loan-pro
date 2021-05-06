/*
 * @Description: 路由配置
 * @Autor: ykx
 * @Date: 2021-04-28 20:43:40
 * @LastEditors: your name
 * @LastEditTime: 2021-05-06 10:26:56
 */
const userLogin = () => import('../page/login/userLogin.vue')
const userRegist = () => import('../page/login/userRegist.vue')
const loanFlow = () => import('../page/loanFlow')
const loanInfo = () => import('../page/loanFlow/loanInfo.vue')
const qualityVerify = () => import('../page/loanFlow/qualityVerify.vue')
const basicInfo = () => import('../page/loanFlow/basicInfo.vue')
const cardInfo = () => import('../page/loanFlow/cardInfo.vue')
const loanResult = () => import('../page/loanResult')

const deal = () => import('../page/deal/deal.vue');
const confirmLoan = () => import('../page/confirmLoan/confirmLoan.vue');
const repayDetail = () => import('../page/repayDetail/repayDetail.vue');
const repayPlanList = () => import('../page/repayPlanList/repayPlanList.vue');
const repayResult = () => import('../page/repayResult/repayResult.vue');


export default
  [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'userLogin',
      component: userLogin,
      meta: {
        title: '用户登录'
      }
    },
    {
      path: '/regist',
      name: 'userRegist',
      component: userRegist,
      meta: {
        title: '用户注册'
      }
    },
    {
      path: '/loanFlow',
      name: 'loanFlow',
      component: loanFlow,
      redirect: '/loanFlow/loanInfo',
      children: [
        {
          path: '/loanFlow/loanInfo',
          name: 'loanInfo',
          component: loanInfo,
          meta: {
            title: '申请借款'
          }
        },
        {
          path: '/loanFlow/qualityVerify',
          name: 'qualityVerify',
          component: qualityVerify,
          meta: {
            title: '资格验证'
          }
        },
        {
          path: '/loanFlow/basicInfo',
          name: 'basicInfo',
          component: basicInfo,
          meta: {
            title: '信息补充'
          }
        },
        {
          path: '/loanFlow/cardInfo',
          name: 'cardInfo',
          component: cardInfo,
          meta: {
            title: '绑定银行卡'
          }
        },
      ]
    },
    {
      path: '/loanResult',
      name: 'loanResult',
      component: loanResult,
      meta: {
        title: '申请状态'
      }
    },
    {
      path: '/confirmLoan',
      name: 'confirmLoan',
      component: confirmLoan,
      meta: {
        title: '借款信息'
      }
    },
    {
      path: '/repayDetail',
      name: 'repayDetail',
      component: repayDetail,
      meta: {
        title: '还款详情'
      }
    },
    {
      path: '/repayPlanList',
      name: 'repayPlanList',
      component: repayPlanList,
      meta: {
        title: '还款计划'
      }
    },
    {
      path: '/repayResult',
      name: 'repayResult',
      component: repayResult,
      meta: {
        title: '还款状态'
      }
    },
    {
      path: '/deal/:type',
      name: 'deal',
      component: deal
    }
  ]

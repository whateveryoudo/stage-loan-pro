/*
 * @Description: 路由配置
 * @Autor: ykx
 * @Date: 2021-04-28 20:43:40
 * @LastEditors: your name
 * @LastEditTime: 2021-05-02 23:51:34
 */
const userLogin = () => import('../page/login/userLogin.vue')
const userRegist = () => import('../page/login/userRegist.vue')
const loanFlow = () => import('../page/loanFlow')
const loanInfo = () => import('../page/loanFlow/loanInfo.vue')
const qualityVerify = () => import('../page/loanFlow/qualityVerify.vue')
const basicInfo = () => import('../page/loanFlow/basicInfo.vue')
const cardInfo = () => import('../page/loanFlow/cardInfo.vue')
const loanResult = () => import('../page/loanResult')

// 第一版界面
const deal = r => require.ensure([], () => r(require('../page/deal/deal.vue')), 'deal');
const confirmLoan = r => require.ensure([], () => r(require('../page/confirmLoan/confirmLoan.vue')), 'confirmLoan');
const repayDetail = r => require.ensure([], () => r(require('../page/repayDetail/repayDetail.vue')), 'repayDetail');
const repayPlanList = r => require.ensure([], () => r(require('../page/repayPlanList/repayPlanList.vue')), 'repayPlanList');
const repayResult = r => require.ensure([], () => r(require('../page/repayResult/repayResult.vue')), 'repayResult');


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
      component: loanResult
    },
    /**********下面是第一版的界面********/
    {
      path: '/confirmLoan',
      name: 'confirmLoan',
      component: confirmLoan
    },
    {
      path: '/repayDetail',
      name: 'repayDetail',
      component: repayDetail
    },
    {
      path: '/repayPlanList',
      name: 'repayPlanList',
      component: repayPlanList
    },
    {
      path: '/repayResult',
      name: 'repayResult',
      component: repayResult
    },
    {
      path: '/deal/:type',
      name: 'deal',
      component: deal
    }
  ]

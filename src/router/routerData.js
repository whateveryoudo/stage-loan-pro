const userLogin = r => require.ensure([], () => r(require('../page/login/userLogin.vue')), 'userLogin');
const userRegist = r => require.ensure([], () => r(require('../page/login/userRegist.vue')), 'userRegist');
const deal = r => require.ensure([], () => r(require('../page/deal/deal.vue')), 'deal');
const confirmLoan = r => require.ensure([], () => r(require('../page/confirmLoan/confirmLoan.vue')), 'confirmLoan');
const repayDetail = r => require.ensure([], () => r(require('../page/repayDetail/repayDetail.vue')), 'repayDetail');
const repayPlanList = r => require.ensure([], () => r(require('../page/repayPlanList/repayPlanList.vue')), 'repayPlanList');
const repayResult = r => require.ensure([], () => r(require('../page/repayResult/repayResult.vue')), 'repayResult');

const Test = r => require.ensure([], () => r(require('../page/test/test.vue')), 'sendStatus');

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
      path: '/test',
      name: '测试界面',
      component: Test
    },
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

<template>
  <div class="repay_info_container">
    <RHeadTop :headTitle="$route.meta.title" theme="light"></RHeadTop>
    <div class="rating-page">
      <div class="repay-info-top">
        <img
          class="res-img"
          :src="require('@/assets/right-now/repay-progress.png')"
          alt=""
        />
      </div>
      <div class="repay-info-content">
        <ul class="repay-item-wrapper">
          <li>
            <p class="title">借款金额</p>
            <p class="info">￥{{ loanInfoDetail.actualMoney.toFixed(2) }}</p>
          </li>
          <li>
            <p class="title">借款时间</p>
            <p class="info">{{ loanInfoDetail.date }}</p>
          </li>
        </ul>
        <div class="dash-block"></div>
        <div class="tip">
          请按时还款，逾期会产生费用并上报人行征信金融信用信息基础数据库
        </div>
        <div class="divider-block"></div>
        <mt-cell title="借款储蓄卡" :value="loanInfoDetail.periods + '期'">
          <img class="bank-logo" :src="bankLogo" alt="" />
          <span
            class="card-bank"
            >{{ cardInfo.bankName }}({{
              cardInfo.cardNum
            }})</span
          >
        </mt-cell>
        <div class="divider-block"></div>
        <div class="info-block-item" style="padding-top: 0.1rem">
          <div class="info-block-item-header">选择还款项</div>
          <div class="info-block-item-body">
            <mt-cell
              title="贷款期限"
              :value="loanInfoDetail.periods + '期'"
            ></mt-cell>
            <mt-cell title="年化利率" :value="loanInfoDetail.rate"></mt-cell>
            <mt-cell
              title="还款总额"
              :value="`￥${loanInfoDetail.totalMoney}`"
            ></mt-cell>
          </div>
        </div>
      </div>
      <div class="fixed-btn">
        <router-link :to="{ path: '/rightNow/repayPlanList' }">查看还款计划</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  data () {
    return {
      headTitle: '还款详情',
      bankLogo: require('@/assets/icons/bank-logo.png'),
      repayInfo: {
        money: 6000,
        date: moment()
          .add(1, 'M')
          .date(9)
          .format('YYYY.MM.DD')
      },
      loanInfoDetail: {
        actualMoney: 6000,
        date: moment()
          .date(14)
          .format('YYYY.MM.DD'),
        periods: 3,
        rate: '18%',
        totalMoney: 6270
      },
      cardInfo: {
        bankName: '中国工商银行',
        cardNum: '9596'
      }
    }
  },
  computed: {
    totalMoneyStr: function () {
      return (
        this.loanInfoDetail.repayTotalMoney.toFixed(2) +
        `含利息(${this.loanInfoDetail.accrual})`
      )
    }
  },
  components: {},
  mounted () {},
  created () {},
  methods: {
    toNext () {
      // 这里不跳转界面，直接toast提示
      // this.$router.push("/repayResult");
      this.$toast('你已获得6000元额度，提现请前往有德贷款APP完成')
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/style/scss/mixin';
.info-block-item {
  background-color: #fff;
}
.repay-info-top {
  background: url('~@/assets/right-now/repay-progress.png') no-repeat;
  width: 100%;
  height: auto;
  background-size: 100% 100%;
  display: flex;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  align-items: center;
  .info-item {
    flex: 1;
    .title {
      font-size: 25px;
      margin-bottom: 0.06rem;
    }
  }
}
.repay-item-wrapper {
  display: flex;
  margin-top: 0.2rem;
  padding-bottom: 0.15rem;

  li {
    text-align: center;
    width: 33.3%;
    p.title {
      color: #9ea09f;
      margin-bottom: 0.1rem;
    }
  }
}
.dash-block {
  border-bottom: 1px dashed #9ea09f4d;
  margin: 0 0.15rem;
}
.tip {
  padding: 0.1rem 0.15rem;
}
.bank-logo {
  width: 0.2rem;
  height: auto;
  margin-right: 0.05rem;
}
.card-bank{
  font-size: 14px;
}
.fixed-btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: $rn-color-primary;
  a {
    color: #fff;
  }
  height: .5rem;
  line-height: .5rem;
  text-align: center;
}
</style>

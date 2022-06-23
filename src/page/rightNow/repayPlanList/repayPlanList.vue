<template>
  <div class="plan_list_container">
    <RHeadTop :headTitle="$route.meta.title" theme="light"></RHeadTop>
    <div class="rating-page">
      <div class="tip">
        账单信息同步有延迟，以实际扣款为准
      </div>
      <div class="plan-list-wrapper">
        <ul>
          <li v-for="(item, index) in loanList" class="list-item" :key="index">
            <div class="list-item-content">
              <div class="right-info-item title">
                <div class="left">
                  <span class="prefix"></span>
                  第{{ item.period }}期
                </div>
                <span class="status">{{ payStatusMap[item.status] }}</span>
              </div>
              <ul class="right-info-item">
                <li>
                  <p class="title">应还款日</p>
                  <p class="value">{{ item.repayDate }}</p>
                </li>
                <li>
                  <p class="title">应还款金额</p>
                  <p class="value">{{ item.money.toFixed(2) }}</p>
                </li>
              </ul>
            </div>
            <div v-if="index !== loanList.length - 1" class="divider-block"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data () {
    return {
      bankLogo: require('@/assets/icons/bank-logo.png'),
      payStatusMap: ['待还款', '待还清', '已还清'],
      loanList: [
        {
          period: 1,
          status: 0,
          money: 2090,
          repayDate: moment()
            .add(1, 'M')
            .date(14)
            .format('YYYY-MM-DD')
        },
        {
          period: 2,
          status: 0,
          money: 2090,
          repayDate: moment()
            .add(2, 'M')
            .date(14)
            .format('YYYY-MM-DD')
        },
        {
          period: 3,
          status: 0,
          money: 2090,
           repayDate: moment()
            .add(3, 'M')
            .date(14)
            .format('YYYY-MM-DD')
        }
      ],
      cardInfo: {
        bankName: '中国工商银行',
        cardDesc: '储蓄卡|尾号8511'
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
    toNext () {}
  }
}
</script>
<style lang="scss" scoped>
@import 'src/style/scss/mixin';
.rating-page {
  background-color: #f6f6f6;
}
.tip {
  color: #2d2929ad;
  font-size: .12rem;
  padding: 0.05rem 0.1rem;
}
.plan-list-wrapper {
  background: #fff;
  color: #333;
  .list-item {
    padding: 0.1rem 0;
    .prefix {
      width: 0.04rem;
      position: relative;
      height: 0.15rem;
      display: inline-block;
      border-radius: 0.02rem;
      background-color: #3093ff;
      margin-right: 0.06rem;
    }
    div.list-item-content {
      flex: 1;
      .right-info-item {
        line-height: 30px;
        display: flex;
        li {
          margin: 0.1rem 0;
          flex: 1;
          text-align: center;
          &:first-child {
            border-right: 1px solid #ccc;
          }
          .title{
            font-size: .12rem;
            color: #666666;
          }
          .value{
            color:#000;
            font-weight: bold;
            font-size: .16rem;
          }
        }
        &.title {
          justify-content: space-between;
          padding: 0 0.15rem;
          padding-bottom: 0.2rem;
          border-bottom: 1px solid #2d29292e;
          .left {
            font-size: 0.16rem;
            font-weight: bold;
          }
          color: #333;
          position: relative;
          .status {
            font-size: 14px;
            position: absolute;
            top: 50%;
            right: 0.15rem;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}
.bank-logo {
  width: 0.2rem;
  height: auto;
  margin-right: 0.05rem;
}
</style>

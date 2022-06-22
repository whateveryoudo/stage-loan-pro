<template>
  <div class="plan_list_container">
    <GHeadTop :headTitle="$route.meta.title"></GHeadTop>
    <div class="rating-page">
      <div class="plan-list-wrapper">
        <ul>
          <li v-for="(item, index) in loanList" class="list-item" :key="index">
            <div class="prefix"></div>
            <div class="list-item-content">
              <div class="right-info-item">第{{ item.period }}期</div>
              <div class="right-info-item">
                <span>还款金额&nbsp;&nbsp;￥{{ item.money.toFixed(2) }}</span>
                <span>{{ payStatusMap[item.status] }}</span>
              </div>
              <div class="right-info-item">
                应还日期&nbsp;&nbsp;{{ item.repayDate }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="divider-block"></div>
      <div class="info-block-item">
        <div class="info-block-item-header">还款银行卡</div>
        <div class="info-block-item-body">
          <div class="info-item-cell">
            <img class="bank-logo" :src="bankLogo" alt="" />
            <span>
              {{ cardInfo.bankName }}&nbsp;&nbsp;&nbsp;
              <span class="little-font">{{ cardInfo.cardDesc }}</span>
            </span>
          </div>
          <div class="info-item-cell cell-small little-font block" style="margin-top:8px">
            <p>任何机构和个人要求你提前还款，请勿相信，均属于诈骗行为</p>
            <p>注：还款时需确保银行卡余额充足,银行卡需开通银联支付</p>
          </div>
        </div>
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
      payStatusMap: ['待还清', '已还清'],
      loanList: [
        {
          period: 1,
          status: 0,
          money: 1060,
          repayDate: moment()
            .add(1, 'M')
            .date(14)
            .format('YYYY.MM.DD')
        },
        {
          period: 2,
          status: 0,
          money: 1060,
          repayDate: moment()
            .add(2, 'M')
            .date(14)
            .format('YYYY.MM.DD')
        },
        {
          period: 3,
          status: 0,
          money: 1060,
          repayDate: moment()
            .add(3, 'M')
            .date(14)
            .format('YYYY.MM.DD')
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
.plan-list-wrapper {
  background: #fff;
  color: #333;
  .list-item {
    display: flex;
    div.prefix {
      position: relative;
      width: 0.15rem;
      margin-right: 0.06rem;
      &:after {
        content: ' ';
        width: 0.1rem;
        height: 0.1rem;
        border: 1px solid $gm-color-primary;
        border-radius: 50%;
        position: absolute;
        top: 7px;
      }
    }
    div.list-item-content {
      flex: 1;
      .right-info-item {
        height: 30px;
        line-height: 30px;
        @include fj();
      }
    }
    padding: 0.1rem 0.15rem;
  }
}
.bank-logo {
  width: 0.2rem;
  height: auto;
  margin-right: 0.05rem;
}
</style>

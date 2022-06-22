<!--
 * @Description: 
 * @Autor: ykx
 * @Date: 2022-06-22 23:49:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-23 00:31:04
-->
<template>
  <div class="loan_info_container">
    <GHeadTop :headTitle="$route.meta.title"></GHeadTop>
    <div class="rating-page">
      <div class="loan-info-top">
        <p class="title">借款金额</p>
        <p class="money">￥{{ money }}</p>
      </div>
      <div class="loan-info-content">
        <div class="info-block-item has-padding">
          <div class="info-block-item-body">
             <mt-cell
              title="到账金额"
              :value="`￥${loanInfoDetail.totalMoney.toFixed(2)}`"
            ></mt-cell>
             <mt-cell
              title="服务费"
              :value="`￥${loanInfoDetail.serveMoney.toFixed(2)}`"
            ></mt-cell>
            <mt-cell title="利息" :value="`￥${loanInfoDetail.interest.toFixed(2)}`"></mt-cell>
            <mt-cell
              title="最后还款期限"
              :value="loanInfoDetail.dateLine"
            ></mt-cell>
          </div>
        </div>
      </div>
      <!--底部下一步按钮组件-->
      <next-btn class="bto-wrapper" :enable="true" text="立即借款" @toNext="toNext"></next-btn>
    </div>
  </div>
</template>
<script>
import NextBtn from '@/components/common/NextBtn'
import moment from "moment";
export default {
  data() {
    return {
      bankLogo: require("@/assets/icons/bank-logo.png"),
      money: '3000.00',
      loanInfoDetail: {
        totalMoney: 3000,
        serveMoney: 60,
        interest: 120,
        dateLine: moment().add(1, "M").date(14).format("YYYY-MM-DD"),
      },
      cardInfo: {
        bankName: "中国工商银行",
        cardDesc: "储蓄卡|尾号8511",
      },
    };
  },
  computed: {
    totalMoneyStr: function () {
      return (
        this.loanInfoDetail.repayTotalMoney.toFixed(2) +
        `含利息(${this.loanInfoDetail.accrual})`
      );
    },
  },
  components: { NextBtn },
  mounted() {},
  created() {},
  methods: {
    toNext() {
      this.$router.push("/guoMei/repayPlanList");
    },
  },
};
</script>
<style lang="scss" scope>
@import "src/style/scss/mixin";
.info-block-item,
.loan-info-top {
  background-color: #fff;
}
.loan-info-top {
  text-align: center;
  padding: 0.3rem 0;
  padding-bottom: 0.35rem;
  p.title {
    @include sc(12px, $gm-color-primary);
    margin-bottom: .15rem;
  }
  p.money {
    @include sc(30px, $gm-color-primary);
    font-weight: 600;
  }
}
.loan-info-content {
}
.bank-logo {
  width: 0.2rem;
  height: auto;
  margin-right: 0.05rem;
}
.bto-wrapper{
  margin-top: 1rem;
}
</style>

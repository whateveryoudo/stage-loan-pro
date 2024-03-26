<!--
 * @Description: 
 * @Autor: ykx
 * @Date: 2021-05-07 19:06:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-05 21:01:40
-->
<template>
  <div class="result_container">
    <div class="rating-page">
      <div class="result-wrapper">
        <img :src="failImg" alt="" />
        <div class="desc">
          <!-- <h2>获得额度：<strong>6000</strong></h2> -->
          <!-- <h2 style="margin-top:10px;padding:0 10%">您好，我们已经收到你的贷款申请，请你留意后续工作人员的回访电话！</h2> -->
          <h2 style="margin-top:10px;padding:0 10%">您好，你的资质暂不符合我们的贷款申请条件。我们已经同步删除你的贷款申请资料！</h2>
          <!-- <mt-button type="primary" @click="toLoanPage">查看借款信息</mt-button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headTitle: "还款结果",
      failImg: require("@/assets/icons/apply-fail.png"),
    };
  },
  computed: {},
  components: {},
  mounted() {},
  created() {},
  methods: {
    toLoanPage () {
      this.$router.push('/panda/confirmLoan')
    }
  },
};
</script>
<style lang="scss" scoped>
@import "src/style/scss/mixin";
.result-wrapper {
  margin-top: 0.8rem;
  text-align: center;
  img {
    width: 0.8rem;
    height: auto;
    margin-bottom: 0.15rem;
  }
  p.desc {
    @include sc(16px, #333);
  }
}
</style>

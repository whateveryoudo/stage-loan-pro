<!--
 * @Description: 
 * @Autor: ykx
 * @Date: 2021-05-07 19:06:36
 * @LastEditors: your name
 * @LastEditTime: 2022-06-24 00:21:21
-->
<template>
  <div class="result_container">
    <div class="rating-page">
      <div class="result-wrapper">
        <svg
          class="icon svg-icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-shenhezhong"></use>
        </svg>
        <div class="desc">
          <!-- <h2>恭喜你获得额度：<strong>3000</strong></h2> -->
          <p style="margin-top:5px">尊敬的客户你好：我们已经收到你的贷款申请</p>
          <p><strong>正在审批中</strong>，请前往马上金融APP查询结果</p>
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
    };
  },
  computed: {},
  components: {},
  mounted() {},
  created() {},
  methods: {
    toLoanPage() {
      this.$router.push("/confirmLoan");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "src/style/scss/mixin";
.result-wrapper {
  margin-top: 0.8rem;
  text-align: center;
  svg {
    font-size: 0.6rem;
    // color: $rn-color-primary;
    margin-bottom: 0.3rem;
  }
  .desc {
    line-height: 2;
    @include sc(16px, #333);
  }
}
</style>

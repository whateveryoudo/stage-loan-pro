<!--
 * @Description: 
 * @Autor: ykx
 * @Date: 2021-05-07 19:06:36
 * @LastEditors: your name
 * @LastEditTime: 2022-06-24 00:19:57
-->
<template>
  <div class="result_container">
    <div class="rating-page">
      <div class="result-wrapper">
        <svg
          class="icon svg-icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-chenggong"></use>
        </svg>
        <div class="desc">
          <h2>恭喜你获得额度：<strong>3000</strong></h2>
          <h2 style="margin-top:5px">提现请前往国美易卡APP</h2>
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
  svg{
    font-size: .6rem;
    color:$rn-color-primary;
    margin-bottom: .3rem;
  }
  .desc {
    @include sc(16px, #333);
  }
}
</style>

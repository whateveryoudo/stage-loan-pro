<!--
 * @Description: 
 * @Autor: ykx
 * @Date: 2021-05-07 19:06:36
 * @LastEditors: 
 * @LastEditTime: 2022-06-23 02:11:30
-->
<template>
  <div class="result_container">
    <div class="rating-page">
      <div class="result-wrapper">
        <img :src="sucImg" alt="" />
        <div class="desc">
          <h2>获得额度：<strong>6000</strong></h2>
          <h2 style="margin-top:5px">提现请前往好分期APP完成</h2>
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
      sucImg: require("../../assets/icons/success.png"),
    };
  },
  computed: {},
  components: {},
  mounted() {},
  created() {},
  methods: {
    toLoanPage () {
      this.$router.push('/confirmLoan')
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

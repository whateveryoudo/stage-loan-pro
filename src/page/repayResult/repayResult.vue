<template>
  <div class="result_container">
    <div class='rating-page'>
      <div class="result-wrapper">
        <img
          :src="sucImg"
          alt=""
        >
        <p class="desc">还款申请已提交，<br />更多操作请前往马上金融app</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headTitle: "还款结果",
      sucImg: require("../../assets/icons/suc.png"),
    };
  },
  computed: {},
  components: {},
  mounted() {},
  created() {},
  methods: {
    toNext() {},
  },
};
</script>
<style lang="scss" scope>
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
    line-height: 1.5;
  }
}
</style>
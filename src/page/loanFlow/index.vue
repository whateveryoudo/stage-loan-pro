<!--
 * @Description: 贷款流程主界面(TODO:字段校验规则封装)
 * @Autor: ykx
 * @Date: 2021-04-29 00:14:56
 * @LastEditors: your name
 * @LastEditTime: 2021-05-06 10:08:24
-->
<template>
  <div class="flow-pages">
    <head-top :headTitle="$route.meta.title"></head-top>
    <div class="rating-page">
      <top-progress class="progress-wrapper"></top-progress>
      <div class="main-form-wrapper form">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TopProgress from "@/components/common/TopProgress";
export default {
  data() {
    return {};
  },
  components: {
    TopProgress,
  },
  created() {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo.isApplyed === 1) { // 防止用户手动输入地址
      this.$router.push("/confirmLoan");
    }
  },
};
</script>

<style lang="scss">
.flow-pages .rating-page {
  top: 1.2rem;
}
</style>

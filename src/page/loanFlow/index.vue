<!--
 * @Description: 贷款流程主界面(TODO:字段校验规则封装)
 * @Autor: ykx
 * @Date: 2021-04-29 00:14:56
 * @LastEditors: your name
 * @LastEditTime: 2021-04-29 16:49:44
-->
<template>
  <div>
    <head-top :headTitle="$route.meta.title"></head-top>
    <div class="rating-page">
      <top-progress class="progress-wrapper"></top-progress>
      <div class="main-form-wrapper">
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
};
</script>

<style scoped lang="scss">
</style>

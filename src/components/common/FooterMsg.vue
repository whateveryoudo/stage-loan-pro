<!--
 * @Author: ykx
 * @Date: 2021-05-13 15:25:39
 * @LastEditTime: 2021-05-26 15:06:52
 * @LastEditors: your name
 * @Description: 底部备注信息
 * @FilePath: \stage-load-pro\src\components\common\FooterMsg.vue
-->
<template>
  <div class="footer">
    <p>贷款有风险，借款需谨慎；请根据个人能力合理贷款，理性消费，避免逾期</p>
    <p>贷款额度、放款时间以实际审批结果为准</p>
    <p>贷款资金由重庆市黑卡小额贷款有限公司提供</p>
    <p>重庆市黑卡小额贷款有限公司 渝ICP备20000928号-1</p>
  </div>
</template>

<script>
export default {
  name: "FooterMsg",
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.footer {
  color: #aaa;
  font-size: 10px;
  line-height: 1.8;
  text-align: center;
  padding: 0 0.05rem;
  margin-bottom: 0.2rem;
}
</style>

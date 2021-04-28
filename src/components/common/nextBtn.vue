<!--
 * @Author: ykx
 * @Date: 2021-04-28 09:46:16
 * @LastEditTime: 2021-04-28 10:26:42
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \stage-load-pro\src\components\common\nextBtn.vue
-->
<template>
  <section class="btn-container">
    <div class="submit_btn_container">
      <mt-button
        :disabled="!enable"
        type="primary"
        @click="submitForm"
        size="large"
        >{{ text }}</mt-button
      >
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["enable", "text", "formType"],
  mounted() {},
  created() {},
  methods: {
    submitForm() {
      this.$emit("toNext");
    },
  },
};
</script>
<style lang="scss">
</style>

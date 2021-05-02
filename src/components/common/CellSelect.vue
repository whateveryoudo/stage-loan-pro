<!--
 * @Author: ykx
 * @Date: 2021-05-02 15:48:47
 * @LastEditTime: 2021-05-02 16:25:05
 * @LastEditors: your name
 * @Description: 用于select的选择
 * @FilePath: \stage-load-pro\src\components\common\CellSelect.vue
-->
<template>
  <mt-cell :title="title" is-link @click.native="datePopVisible = true">
    <span class="placeholder" v-show="!value">请选择</span>
    <span v-show="value">{{ realValue }}</span>
  </mt-cell>
</template>

<script>
export default {
  name: "CellSelect",
  props: {
    title: {
      type: String,
    },
    value: {
      type: [String, Number, Object],
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    realValue() {
      return this.value instanceof Object ? this.value.text : this.value;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss"></style>
<style scoped lang="scss">
.placeholder {
  color: #bbb;
}
</style>

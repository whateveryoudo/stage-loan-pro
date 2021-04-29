<!--
 * @Description: 申请借款
 * @Autor: ykx
 * @Date: 2021-04-29 00:04:34
 * @LastEditors: your name
 * @LastEditTime: 2021-04-29 17:24:11
-->

<template>
  <div class="apply-info-form">
    <mt-cell
      title="借款金额"
      is-link
      @click.native="moneyPopVisible = true"
    >
      <span>{{selectMoney && selectMoney.text}}</span>
    </mt-cell>
    <mt-cell
      title="还款期限"
      is-link
      @click.native="datePopVisible = true"
    >
      <span>{{selectDate && selectDate.text}}</span>
    </mt-cell>
    <mt-field
      label="借款用途"
      placeholder="请输入借款用途"
      v-model="applyInfo.use"
    ></mt-field>
    <!-- 借款金额选择 -->
    <mt-popup
      v-model="moneyPopVisible"
      position="bottom"
      class="bto-pop"
    >
      <mt-picker
        :slots="numSlots"
        value-key="text"
        @change="(...args) => onPickerChange('money', 'selectMoney', ...args)"
        :visible-item-count="5"
        :show-toolbar="false"
      ></mt-picker>
    </mt-popup>
    <!-- 日期选择 -->
    <mt-popup
      v-model="datePopVisible"
      position="bottom"
      class="bto-pop"
    >
      <mt-picker
        :slots="dateSlots"
        value-key="text"
        @change="(...args) => onPickerChange('date', 'selectDate', ...args)"
        :visible-item-count="5"
        :show-toolbar="false"
      ></mt-picker>
    </mt-popup>
    <section class="btn-container">
      <mt-button
        type="primary"
        @click="submitForm"
        size="large"
      >下一步</mt-button>
    </section>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      applyInfo: {
        momeny: "",
        date: "",
        use: "",
      },
      selectDate: null,
      selectMoney: null,
      datePopVisible: false,
      moneyPopVisible: false,
      numSlots: [
        {
          values: [
            { value: 3000, text: 3000 },
            { value: 6000, text: 6000 },
            { value: 9000, text: 9000 },
          ],
        },
      ],
      dateSlots: [
        {
          values: [
            { value: 1, text: "3月" },
            { value: 6, text: "6月" },
            { value: 9, text: "9月" },
            { value: 12, text: "12月" },
          ],
        },
      ],
    };
  },
  created() {
    this.UPDATE_PROGRESS({ stepIndex: 0 }); // 更初始状态
  },
  methods: {
    ...mapMutations(["UPDATE_PROGRESS"]),
    // picker选择
    onPickerChange(key, selectKey, picker, values) {
      this[selectKey] = values[0]; // 初始选中第一项
      values[0] && (this.applyInfo[key] = values[0].value); // 初始化form的值
    },
    // 表单提交
    submitForm() {
      if (!this.applyInfo.use) {
        this.$toast({
          message: "请输入借款用途",
        });
        return;
      }
      this.$router.push("/loanFlow/qualityVerify");
    },
  },
};
</script>

<style lang="scss" scoped>
.apply-info-form {
  margin-top: 0.2rem;
}
.bto-pop {
  width: 100%;
}
</style>
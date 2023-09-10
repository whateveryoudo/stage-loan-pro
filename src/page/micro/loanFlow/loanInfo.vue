<!--
 * @Description: 申请借款
 * @Autor: ykx
 * @Date: 2021-04-29 00:04:34
 * @LastEditors: your name
 * @LastEditTime: 2021-05-06 15:47:37
-->

<template>
  <div class="apply-info-form">
    <cell-select
      title="借款金额"
      @click.native="handleShowPicker('money', '借款金额')"
      :value="pickerValues.money"
    />
    <cell-select
      title="还款期限"
      :value="pickerValues.date"
      @click.native="handleShowPicker('date', '还款期限')"
    >
    </cell-select>
    <mt-field
      label="借款用途"
      placeholder="请输入借款用途"
      v-model="applyInfo.use"
    ></mt-field>
    <!-- picker选择 -->
    <select-picker
      :dataSlots="$data[`${curPickerKey}Slots`]"
      :visible="$data[`${curPickerKey}PopVisible`]"
      :title="curPickerTitle"
      :curValue="$data.applyInfo[curPickerKey]"
      @toggleVisible="toggleVisible"
      @onConfirm="onConfirm"
    ></select-picker>
    <section class="btn-container">
      <mt-button type="primary" @click="submitForm" size="large"
        >下一步</mt-button
      >
    </section>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      applyInfo: {
        money: "",
        date: "",
        use: "",
      },
      curPickerKey: "",
      curPickerTitle: "",
      datePopVisible: false,
      moneyPopVisible: false,
      pickerValues: {
        money: null,
        date: null,
      },
      rules: {
        money: [{ required: true, message: "请选择借款金额" }],
        date: [{ required: true, message: "请选择还款期限" }],
        use: [{ required: true, message: "请输入借款用途" }],
      },
      moneySlots: [
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
    handleShowPicker(key, title) {
      this.curPickerKey = key;
      this.curPickerTitle = title;
      this[`${key}PopVisible`] = true;
    },
    // 用于picker内部调用
    toggleVisible(flag = true) {
      this[`${this.curPickerKey}PopVisible`] = flag;
    },
    onConfirm(values) {
      this.pickerValues[this.curPickerKey] = values[0]; // 初始选中第一项
      values[0] && (this.applyInfo[this.curPickerKey] = values[0].value); // 初始化form的值
    },
    // 表单提交
    async submitForm() {
      const validator = new AsyncValidator(this.rules);
      const errors = await new Promise((resolve) => {
        validator.validate(this.applyInfo, { first: true }, (errors) => {
          resolve(errors);
        });
      });
      if (errors && errors.length > 0) {
        this.$toast({
          message: errors[0].message,
        });
        return;
      }
      this.$router.push("/micro/loanFlow/qualityVerify");
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

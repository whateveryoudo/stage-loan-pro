<!--
 * @Description: 资格认证
 * @Autor: ykx
 * @Date: 2021-04-29 00:04:34
 * @LastEditors: your name
 * @LastEditTime: 2021-04-29 17:56:52
-->

<template>
  <div class="quality-info-form">
    <div class="field-block">
      <div class="title">完成验证，可享受更多账户权益</div>
      <mt-field
        label="姓名"
        placeholder="请输入真实姓名"
        v-model="qualityInfo.realName"
      ></mt-field>
      <mt-field
        label="身份证号"
        placeholder="请输入身份证号"
        v-model="qualityInfo.idCard"
      ></mt-field>
    </div>
    <div class="field-block">
      <div class="title">身份证一经录入，不可更改</div>
      <mt-cell title="支付密码">
        <div class="pwd-inputs-wrapper">
          <input
            v-for="(val, index) in pwdValueArr"
            :ref="'pwdInput' + index"
            :key="index"
            type="number"
            @input="handleJumpInput(index)"
            v-model='pwdValueArr[index]'
          >
        </div>
      </mt-cell>
    </div>
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
      pwdValueArr: Array.apply(null, { length: 6 }),
      qualityInfo: {
        realName: "",
        idCard: "",
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
  computed: {
    pwdValue() {
      return (
        this.pwdValueArr &&
        this.pwdValueArr.length > 0 &&
        this.pwdValueArr.join("")
      );
    },
  },
  created() {
    this.UPDATE_PROGRESS({ stepIndex: 1, attrs: { waiting: true } }); // 更初始状态
  },
  methods: {
    ...mapMutations(["UPDATE_PROGRESS"]),
    // 这里不更新值，仅处理跳转
    handleJumpInput(index) {
      const val = this.pwdValueArr[index];
      debugger
      const inputElem = this.$refs["pwdInput" + index];
      const inputElemNext =
        index <= this.pwdValueArr.length
          ? this.$refs["pwdInput" + (index + 1)]
          : null;
      if (val.length === 1) {
        inputElem.blur();
        inputElemNext && inputElemNext.focus();
      }
    },
    // picker选择
    onPickerChange(key, selectKey, picker, values) {
      this[selectKey] = values[0]; // 初始选中第一项
      values[0] && (this.qualityInfo[key] = values[0].value); // 初始化form的值
    },
    // 表单提交
    submitForm() {
      if (!this.qualityInfo.use) {
        this.$toast({
          message: "请输入借款用途",
        });
        return;
      }
      this.$router.push("");
      console.log(this.qualityInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
.quality-info-form {
  margin-top: 0.2rem;
  .pwd-inputs-wrapper {
    input {
      width: 0.3rem;
      height: 0.3rem;
      border: 2px solid #ccc;
      margin-right: 0.1rem;
      padding: 0.05rem;
      text-align: center;
    }
  }
}
.bto-pop {
  width: 100%;
}
</style>
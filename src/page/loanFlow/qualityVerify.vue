<!--
 * @Description: 资格认证
 * @Autor: ykx
 * @Date: 2021-04-29 00:04:34
 * @LastEditors: your name
 * @LastEditTime: 2021-05-02 21:28:53
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
            v-model="pwdValueArr[index]"
          />
        </div>
      </mt-cell>
    </div>
    <!-- <mt-switch v-model="value">开通小额免密支付，每笔&lt;=500元时免输入支付密码</mt-switch> -->
    <section class="btn-container">
      <mt-button type="primary" @click="submitForm" size="large"
        >下一步</mt-button
      >
    </section>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
import utils from "@/utils";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      pwdValueArr: Array.apply(null, { length: 6 }),
      value: false,
      qualityInfo: {
        realName: "",
        idCard: "",
      },
      rules: {
        realName: [{ required: true, message: "请输入真实姓名" }],
        idCard: [
          { required: true, message: "请输入身份证号" },
          { pattern: utils.idCardRge, message: "身份证号格式错误" },
        ],
      },
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
      const inputElem = this.$refs["pwdInput" + index];
      const inputElemNext =
        index <= this.pwdValueArr.length
          ? this.$refs["pwdInput" + (index + 1)]
          : null;
      if (val.length === 1) {
        inputElem[0].blur();
        inputElemNext && inputElemNext[0] && inputElemNext[0].focus();
      }
    },
    // 表单提交
    async submitForm() {
      const validator = new AsyncValidator(this.rules);
      const errors = await new Promise((resolve) => {
        validator.validate(this.qualityInfo, { first: true }, (errors) => {
          resolve(errors);
        });
      });
      if (errors && errors.length > 0) {
        this.$toast({
          message: errors[0].message,
        });
        return;
      }
      if (this.pwdValueArr.some((val) => val === undefined || val === null)) {
        this.$toast({
          message: "请填写完整的支付密码",
        });
        return;
      }
      this.$router.push("/loanFlow/basicInfo");
    },
  },
};
</script>

<style lang="scss" scoped>
.quality-info-form {
  margin-top: 0.15rem;
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

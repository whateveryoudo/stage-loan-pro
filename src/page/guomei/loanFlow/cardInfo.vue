<!--
 * @Description: 绑定银行卡
 * @Autor: ykx
 * @Date: 2021-04-29 00:04:34
 * @LastEditors: your name
 * @LastEditTime: 2022-06-23 22:46:28
-->

<template>
  <div class="quality-info-form">
    <div class="field-block">
      <h2>添加本人银行卡</h2>
      <div class="title">用于收款、还款、保费及违约金费用的缴纳</div>
      <mt-field
        label="持卡人"
        placeholder="请输入"
        v-model="cardInfo.name"
      ></mt-field>
      <mt-field
        label="银行卡卡号"
        placeholder="请输入"
        v-model="splitCardNo"
      ></mt-field>
    </div>
    <section class="btn-container">
      <mt-button
        type="primary"
        :loading="btnLoading"
        @click="submitForm"
        size="large"
        >完成</mt-button
      >
    </section>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
import { updateUserStatus } from "@/service/getData";
import { mapMutations } from "vuex";
import { Indicator } from "mint-ui";
export default {
  data() {
    return {
      pwdValueArr: Array.apply(null, { length: 6 }),
      value: false,
      cardInfo: {
        name: "",
        cardNo: "",
      },
      btnLoading: false,
      rules: {
        name: [{ required: true, message: "请输入持卡人姓名" }],
        cardNo: [
          { required: true, message: "请输入银行卡号" },
          { validator: this.validateCardNo },
        ],
      },
    };
  },
  computed: {
    splitCardNo: {
      get() {
        const trimVal = this.cardInfo.cardNo.replace(/\s+/g, "");
        return trimVal.length % 4 > 0
          ? trimVal.replace(/(.{4})/g, "$1 ")
          : this.cardInfo.cardNo;
      },
      set(val) {
        this.cardInfo.cardNo = val;
      },
    },
  },
  created() {
    this.UPDATE_PROGRESS({ stepIndex: 3, attrs: { waiting: true } }); // 更初始状态
  },
  methods: {
    ...mapMutations(["UPDATE_PROGRESS"]),
    // 只匹配了长度
    validateCardNo(rule, value, callback) {
      const tempVal = value && value.replace(/\s+/g, "");
      if (!/^\d{16,20}$/g.test(tempVal)) {
        callback("银行卡号格式错误");
      }
      callback();
    },
    handleFieldChange(key, value) {
      this.cardInfo[key] = value;
    },
    // 表单提交
    async submitForm() {
      const validator = new AsyncValidator(this.rules);
      const errors = await new Promise((resolve) => {
        validator.validate(this.cardInfo, { first: true }, (errors) => {
          resolve(errors);
        });
      });
      if (errors && errors.length > 0) {
        this.$toast({
          message: errors[0].message,
        });
        return;
      }
      // 更新用户状态
      const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (!userInfo) {
        this.$toast("不存在的用户信息");
        return;
      }
      Indicator.open("提交中...");
      const res = await updateUserStatus(userInfo.userId); // 这里直接更新用户状态
      Indicator.close();
      if (res && res.code === 200) { // 这里直接跳转借款成功界面
        this.$router.push("/guoMei/confirmLoan");
      }
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

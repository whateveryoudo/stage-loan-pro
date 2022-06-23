<!--
 * @Description: 基本信息（统一采用一个picker处理）
 * @Autor: ykx
 * @Date: 2021-04-29 00:04:34
 * @LastEditors: your name
 * @LastEditTime: 2022-06-23 22:45:05
-->

<template>
  <div class="quality-info-form">
    <div class="field-block">
      <h2>填写本人信息</h2>
      <div class="title">准确有效的信息，有助于您的额度审批</div>
      <cell-select
        title="职业"
        @click.native="handleShowPicker('profession', '职业')"
        :value="pickerValues.profession"
      />
      <cell-select
        title="学历"
        @click.native="handleShowPicker('education', '学历')"
        :value="pickerValues.education"
      />
      <cell-select
        title="婚姻状况"
        @click.native="handleShowPicker('marriage', '婚姻状况')"
        :value="pickerValues.marriage"
      />
      <cell-select
        title="现居住区域"
        @click.native="handleShowPicker('address', '现居住区域')"
        :value="pickerValues.address"
      />
      <mt-field
        label="详细地址"
        placeholder="请输入详细地址"
        v-model="basicFormInfo.detailAddress"
      ></mt-field>
      <cell-select
        title="借款偏好"
        @click.native="handleShowPicker('preferences', '借款偏好')"
        :value="pickerValues.preferences"
      />
    </div>
    <div class="field-block" style="margin-top: 0.1rem">
      <h2>家庭联系人</h2>
      <div class="title">仅用于额度评估</div>
      <mt-field
        label="姓名"
        placeholder="请输入姓名"
        v-model="basicFormInfo.familyName"
      ></mt-field>
      <mt-field
        label="手机号"
        placeholder="请输入手机号"
        v-model="basicFormInfo.familyPhone"
      ></mt-field>
      <cell-select
        title="关系"
        @click.native="handleShowPicker('familyRela', '关系')"
        :value="pickerValues.familyRela"
      />
    </div>
    <div class="field-block" style="margin-top: 0.1rem">
      <h2>紧急联系人</h2>
      <div class="title">仅用于额度评估</div>
      <mt-field
        label="姓名"
        placeholder="请输入姓名"
        v-model="basicFormInfo.urgencyName"
      ></mt-field>
      <mt-field
        label="手机号"
        placeholder="请输入手机号"
        v-model="basicFormInfo.urgencyPhone"
      ></mt-field>
      <cell-select
        title="关系"
        @click.native="handleShowPicker('urgencyRela', '关系')"
        :value="pickerValues.urgencyRela"
      />
    </div>
    <!-- 简易的通用picker -->
    <select-picker
      :dataSlots="curDataSlots"
      :isAddress="curPickerKey === 'address'"
      :visible="$data[`${curPickerKey}PopVisible`]"
      :title="curPickerTitle"
      :curValue="$data.basicFormInfo[curPickerKey]"
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
import { mapMutations } from "vuex";
import AsyncValidator from "async-validator";
import utils from "@/utils";
export default {
  data() {
    return {
      curPickerTitle: "",
      curPickerKey: "", //当前选中picker key
      // 控制显示隐藏的变量(这里用一个值就行了)
      professionPopVisible: false,
      educationPopVisible: false,
      marriagePopVisible: false,
      addressPopVisible: false,
      preferencesPopVisible: false,
      familyRelaPopVisible: false,
      urgencyRelaPopVisible: false,
      pickerValues: {
        profession: null,
        education: null,
        marriage: null,
        address: null,
        preferences: null,
        familyRela: null,
        urgencyRela: null,
      },
      value: false,
      basicFormInfo: {
        profession: "",
        education: "",
        marriage: "",
        address: "",
        detailAddress: "",
        preferences: "",
        idCard: "",
        name: "",
        phone: "",
        urgencyName: "",
        urgencyPhone: "",
        urgencyRela: "",
        familyName: "",
        familyPhone: "",
        familyRela: "",
      },
      rules: {
        profession: [{ required: true, message: "请选择职业" }],
        education: [{ required: true, message: "请选择学历" }],
        marriage: [{ required: true, message: "请选择婚姻状况" }],
        address: [{ required: true, message: "请选择居住区域" }],
        detailAddress: [{ required: true, message: "请输入详细地址" }],
        preferences: [{ required: true, message: "请选择借款偏好" }],
        familyName: [{ required: true, message: "请输入家庭联系人姓名" }],
        familyPhone: [
          { required: true, message: "请输入家庭联系人手机号" },
          { pattern: utils.phoneRge, message: "手机号码格式错误" },
        ],
        familyRela: [{ required: true, message: "请选择家庭联系人关系" }],
        urgencyName: [{ required: true, message: "请输入紧急联系人姓名" }],
        urgencyPhone: [
          { required: true, message: "请输入紧急联系人手机号" },
          { pattern: utils.phoneRge, message: "手机号码格式错误" },
        ],
        urgencyRela: [{ required: true, message: "请选择紧急联系人关系" }],
      },
      // 数据源
      professionSlots: [
        {
          values: [
            { value: 60001, text: "机关事业单位" },
            { value: 60002, text: "金融/医疗/教育/科研" },
            { value: 60003, text: "私营业主/个体户" },
            { value: 60004, text: "建筑/制造/运输邮储" },
            { value: 60005, text: "批发零售/服务" },
            { value: 60006, text: "学生" },
            { value: 60007, text: "其他" },
          ],
        },
      ],
      educationSlots: [
        {
          values: [
            { value: 70001, text: "高中/中专" },
            { value: 70002, text: "大专" },
            { value: 70003, text: "本科" },
            { value: 70004, text: "研究生" },
            { value: 70005, text: "其他" },
          ],
        },
      ],
      marriageSlots: [
        {
          values: [
            { value: 80001, text: "已婚" },
            { value: 80002, text: "未婚" },
          ],
        },
      ],
      preferencesSlots: [
        {
          values: [
            { value: 90001, text: "更高额度" },
            { value: 90002, text: "更低定价" },
            { value: 90003, text: "更快放款" },
            { value: 90004, text: "更短期限" },
            { value: 90005, text: "更低月供" },
          ],
        },
      ],
      familyRelaSlots: [
        {
          values: [
            { value: 10001, text: "父母" },
            { value: 10002, text: "兄弟" },
            { value: 10003, text: "亲戚" },
          ],
        },
      ],
      urgencyRelaSlots: [
        {
          values: [
            { value: 20001, text: "朋友" },
            { value: 20002, text: "同事" },
          ],
        },
      ],
    };
  },
  computed: {
    addressSlots() {
      return [
        {
          flex: 1,
          values: Object.keys(this.$utils.addressData),
          className: "slot1",
          textAlign: "center",
        },
        {
          divider: true,
          content: "-",
          className: "slot2",
        },
        {
          flex: 1,
          values: ["北京"],
          className: "slot3",
          textAlign: "center",
        },
      ];
    },
    curDataSlots() {
      return this[`${this.curPickerKey}Slots`];
    },
  },
  created() {
    this.UPDATE_PROGRESS({ stepIndex: 2, attrs: { waiting: true } }); // 更初始状态
  },
  methods: {
    ...mapMutations(["UPDATE_PROGRESS"]),
    // 用于picker内部调用
    toggleVisible(flag = true) {
      this[`${this.curPickerKey}PopVisible`] = flag;
    },
    handleShowPicker(key, title) {
      this.curPickerKey = key;
      this.curPickerTitle = title;
      this[`${key}PopVisible`] = true;
    },
    onConfirm(values) {
      if (!values || values.length === 0) {
        return;
      }
      if (values.length > 1) {
        // 地区选中情况
        this.pickerValues[this.curPickerKey] = values.join("-");
        this.basicFormInfo[this.curPickerKey] = values.join("-");
      } else {
        this.pickerValues[this.curPickerKey] = values[0]; // 初始选中第一项
        values[0] && (this.basicFormInfo[this.curPickerKey] = values[0].value); // 初始化form的值
      }
    },
    // 表单提交
    async submitForm() {
      const validator = new AsyncValidator(this.rules);
      const errors = await new Promise((resolve) => {
        validator.validate(
          this.basicFormInfo,
          { first: true },
          // https://github.com/yiminghe/async-validator
          // { firstFields: true }, 此配置会校验全部字段
          (errors) => {
            resolve(errors);
          }
        );
      });
      if (errors && errors.length > 0) {
        this.$toast({
          message: errors[0].message,
        });
        return;
      }
      this.$router.push("/rightNow/loanFlow/cardInfo");
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

<!--
 * @Author: ykx
 * @Date: 2021-05-06 11:21:45
 * @LastEditTime: 2021-05-06 15:44:55
 * @LastEditors: your name
 * @Description: 带有确认项的picker选择 slot 的values传入的格式 value - 代表的值  text- 显示的文字
 * @FilePath: \stage-load-pro\src\components\common\SelectPicker.vue
-->
<template>
  <mt-popup
    v-if="modalVisible"
    v-model="modalVisible"
    position="bottom"
    class="bto-pop"
  >
    <mt-picker
      :slots="newDataSlots"
      value-key="text"
      @change="onPickerChange"
      :visible-item-count="visibleItemCount"
      show-toolbar
    >
      <div class="picker-toolbar">
        <span class="cancel" @click="handleCancel">取消</span>
        <span class="title" v-if="title">{{ title }}</span>
        <span class="confirm" @click="handleConfirm">确认</span>
      </div>
    </mt-picker>
  </mt-popup>
</template>

<script>
export default {
  name: "SelectPicker",
  props: {
    isAddress: {
      type: Boolean,
      default: false,
    },
    // 外部确定后的值
    curValue: {
      type: [Number, String],
    },
    visible: {
      type: Boolean,
      default: false,
    },
    visibleItemCount: {
      type: Number,
      default: 5,
    },
    dataSlots: {
      type: Array,
      default: () => {
        return [];
      },
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectValues: null, //  存放picker选中对象数组
    };
  },

  computed: {
    modalVisible: {
      set(val) {
        this.$emit("toggleVisible", val);
      },
      get() {
        return this.visible;
      },
    },
    // 处理选中后的第二次选中
    newDataSlots() {
      if (this.isAddress) {
        // 地址太复杂不做回显
        return this.dataSlots;
      }
      if (this.curValue && this.dataSlots && this.dataSlots.length > 0) {
        return this.dataSlots.map((item) => {
          const { values } = item;
          const index = values.findIndex((obj) => obj.value === this.curValue);
          return {
            ...item,
            defaultIndex: index,
          };
        });
      }
      return this.dataSlots;
    },
  },
  created() {},
  mounted() {},
  methods: {
    onPickerChange(picker, values) {
      if (this.isAddress) {
        // 地区特殊处理
        picker.setSlotValues(1, this.$utils.addressData[values[0]]);
      }
      this.selectValues = values;
    },
    handleCancel() {
      this.$emit("toggleVisible", false);
    },
    handleConfirm() {
      this.$emit("onConfirm", this.selectValues);
      this.handleCancel();
    },
  },
  watch: {
    visible() {},
  },
};
</script>
<style scoped lang="scss">
.picker-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.15rem;
  .title {
    font-size: 16px;
  }
  .cancel {
    color: #969799;
  }
  .confirm {
    color: #576b95;
  }
}
</style>

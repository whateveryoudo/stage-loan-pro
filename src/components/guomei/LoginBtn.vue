<!--
 * @Author: ykx
 * @Date: 2021-04-28 09:46:16
 * @LastEditTime: 2022-06-22 23:32:34
 * @LastEditors: Please set LastEditors
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
        >{{ submitType === 'login' ? '登录' : '注册并登录' }}</mt-button
      >
      <mt-button @click="changeType" size="large">{{
        submitType === 'login' ? '新用户注册' : '去登录'
      }}</mt-button>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    enable: {
      type: Boolean,
      default: false
    },
    submitType: {
      type: String,
      default: ''
    }
  },
  mounted () {},
  created () {},
  methods: {
    changeType () {
      this.$emit(
        'onChangeType',
        this.submitType === 'login' ? 'regist' : 'login'
      )
    },
    submitForm () {
      this.$emit('toNext')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/scss/mixin.scss';
.submit_btn_container {
  ::v-deep {
    .mint-button:first-child {
      margin-bottom: 0.1rem;
    }
    .mint-button:last-child {
      color: $gm-color-primary;
    }
  }
}
</style>

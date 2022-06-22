<!--
 * @Description: 顶部nav
 * @Autor: ykx
 * @Date: 2021-04-28 20:43:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-23 02:07:29
-->
<template>
  <header :class="theme">
    <i class="arrow_left" v-if="isBack" @click="goback"></i>
    <span class="titleName tdd">{{ headTitle }}</span>
  </header>
</template>
<script>
export default {
  name: 'RHeadTop',
  data () {
    return {}
  },
  props: {
    isBack: {
      type: Boolean,
      default: true
    },
    headTitle: {
      type: String
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  mounted () {},
  created () {
    console.log(this.isBack)
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/style/scss/mixin';
header {
  @include hl(0.45rem, 0.45rem);
  position: fixed;
  top: 0;
  text-align: center;
  @include sc(0.17rem, #333);
  @include fj;
  width: 100%;
  .titleName {
    @include center;
    display: inline-block;
    max-width: 1.5rem;
  }
  i.arrow_left {
    @include ct;
    @include wh(0.2rem, 0.2rem);
    left: 3%;
    display: inline-block;
  }
  &.dark {
    @include sc(0.17rem, #fff);
    background-color: $rn-color-primary;
    i.arrow_left {
      background: url(../../assets/icons/arrow-left.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  &.light {
    @include sc(0.17rem, #333);
    background-color: #fff;
    border-bottom: 1px solid #33333314;
    i.arrow_left {
      background: url(../../assets/icons/arrow-left-black.png) no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>

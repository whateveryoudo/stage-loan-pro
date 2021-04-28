<!--
 * @Description: 主入口
 * @Autor: ykx
 * @Date: 2021-04-28 20:43:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-29 00:56:08
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">

  /*页面之间的切换效果 兼容问题先不加...*/
  .router-fade-enter-active,.router-fade-leave-active{
    transition:opacity .3s;
  }
  .router-fade-enter,.router-fade-leave-active{
    opacity: 0;
  }
</style>

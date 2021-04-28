<!--
 * @Description: 贷款流程主界面
 * @Autor: ykx
 * @Date: 2021-04-29 00:14:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-29 00:59:11
-->
<template>
  <div>
    <head-top :headTitle="$route.meta.title"></head-top>
    <top-progress></top-progress>
  </div>
</template>

<script>
import TopProgress from '@/components/common/TopProgress'
export default {
  data () {
    return {}
  },
  components: {
    TopProgress
  }
}
</script>

<style></style>

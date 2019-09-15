<template>
  <el-container>
    <el-header>
      <header-com></header-com>
    </el-header>
    <el-main>
      <main-container></main-container>
    </el-main>
    <el-footer>
      <footer-com></footer-com>
    </el-footer>
  </el-container>
</template>

<script>
import HeaderCom from '@/views/layout/HeaderCom.vue'
import MainContainer from '@/views/layout/MainContainer.vue'
import FooterCom from '@/views/layout/FooterCom.vue'
export default {
  name: 'home',
  components: {
      HeaderCom,
      MainContainer,
      FooterCom
  }
}
</script>

<style lang="scss" scope>
  .el-container{
    height: 100%;
    .el-header{
      padding: 0;
      background-color: $el-header-bg-color;
      color: $el-header-font-color;
      text-align: center;
      line-height: 60px;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .el-main {
      padding: 0;
      background-color: $el-main-bg-color;
      color: $el-main-font-color;
      text-align: center;
      padding-top: 80px;
    }

    .el-footer{
      padding: 0;
      background-color: $el-footer-bg-color;
      color: $el-footer-font-color;
      text-align: center;
      line-height: 60px;
    }
  }
</style>

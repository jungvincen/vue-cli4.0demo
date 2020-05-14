<template>
  <div class="base-layout">
    <el-container>
      <el-main>
        <div class="backimg">
<!--          <img src="../../assets/img/loginPage.jpg">-->
        </div>
        <slot></slot>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "BaseLayout"
  }
</script>

<style lang="scss" scoped>
  .base-layout{
    position: absolute;
    .backimg{
      img{
        // opacity: .6;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size:cover;
        overflow: hidden;
      }
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: 0;
      padding: 0;
      z-index: -999;
      position: fixed;
    }
  }
</style>
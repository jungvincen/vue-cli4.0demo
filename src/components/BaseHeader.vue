<template>
  <div id="header">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <img src="../assets/img/barceLogo.png">
<!--        <img src="../assets/img/barceLogo.png">-->
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">页面1</el-menu-item>
        <el-menu-item index="2-2">页面2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-menu-item index="2-4">选项4</el-menu-item>
      </el-submenu>
    </el-menu>

  </div>
</template>

<script>

  export default {
    name: "BaseHeader",
    data(){
      return{
        activeIndex2: '0',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        let path = (keyPath[1]||'').split('-')[1]
        // console.log((keyPath[1]||'').split('-'))
        this.$router.push({ name: `page${path}` })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #header{
    width: 100%;
    /*margin-top: 10px;*/
    img{
      width: 291px;
      height: 48px;
    }
  }
</style>
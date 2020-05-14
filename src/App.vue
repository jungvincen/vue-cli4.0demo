<template>
  <div id="app">
    <base-header></base-header>
    <vue-ins-progress-bar></vue-ins-progress-bar>
    <router-view v-if="this.$route.name=='Login'"></router-view>
    <base-layout v-else>
      <base-scroll v-if="$route.name !== 'HomePage'">
        <router-view></router-view>
      </base-scroll>
      <router-view v-else></router-view>
    </base-layout>

  </div>
</template>

<style lang="scss">
@import 'assets/css/reset';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .iconfont{
    color: $app-primary;
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .ins-progress{
    /*position: absolute;*/
    /*top: 100px;*/
  }
}

</style>
<script>
  // import BaseLayout from "./components/base-layout/BaseLayout";
  // import BaseScroll from "./components/base-scroll/BaseScroll";
  // import BaseHeader from "./components/base-header/BaseHeader";
  export default {
    components: {
      // BaseHeader,
      // BaseScroll,
      // BaseLayout
    },
    mounted(){
      this.$insProgress.finish()
    },
    methods: {
      
    },
    created () {
    this.$insProgress.start()
    this.$router.beforeEach((to, from, next) => {
      this.$insProgress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$insProgress.finish()
    })
  }
  }
</script>
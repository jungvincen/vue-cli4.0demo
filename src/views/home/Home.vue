<template>
  <div v-loading.lock="loading">
    <div class="box">
      <button @click="getData">获取信息</button>
<!--      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>-->
    </div>
  </div>
</template>

<script>
// import { createSocket, sendWSPush } from "../../api/websocket";
import { addPerson } from '../../api/common'

export default {
  name: "Home",
  components: {

  },
  data(){
    return{
      loading: false,
      websock: null
    }
  },

  methods: {
    getData(){
      addPerson({ name: 'daniel', sex: 'male', age: 10 }).then(res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      })
    }
  },
  mounted(){
    // createSocket()//创建
    // sendWSPush(111)//发送数据

    // //监听WS数据响应
    // const getData = function (e) {
    //   console.log(e.details.data)
    // }
    // window.addEventListener('onmessageWS', getData)
    //
    // //根据需要，销毁事件监听
    // window.removeEventListener('onmessageWS', getData)
  }
};
</script>
<style lang="scss" scoped>
  .box{
    width: 900px;
    height: 900px;
    background-image: linear-gradient(-45deg, $app-primary, $app-peace-color);
    /*background-image: repeating-linear-gradient(to right, orange 10%, blue 20%);*/
  }
</style>

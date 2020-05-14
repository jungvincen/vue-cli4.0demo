<template>
  <div v-loading.lock="loading">
    <template v-if="$route.name=='Login'">
      <div id="login">
        <div id="bar" class="container">
          <div class="row">
            <div class="content">
              <div class="headTitle">
                <i class="iconfont iconqiudui"></i>
                <span>欢迎登陆</span>
                <!-- <img src="../assets/img/log.png"> -->
              </div>
              <div class="splitLine"></div>
              <div class="account">
                <el-input
                  placeholder="account"
                  prefix-icon="el-icon-user"
                  v-model="account">
                </el-input>
              </div>
              <div class="account">
                <el-input
                  type="password"
                  placeholder="password"
                  prefix-icon="el-icon-lock"
                  v-model="password"
                  @keyup.enter.native="login">
                </el-input>
              </div>
              <div class="login">
                <el-button type="primary" @click="login">LOGIN</el-button>
              </div>
              <div class="last">
                <el-checkbox v-model="checked"></el-checkbox>
                <!-- <input type="checkbox" :checked="checked" @click="rememberPass"> -->
                <span>remember password</span>
              </div>
            </div>
          </div>
        </div>
        <div class="backimg">
          <img src="../../assets/img/loginPage.jpg">
        </div>
      </div>
    </template>
    <router-view v-else></router-view>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return{
        loading: false,
        account: '',
        password: '',
        checked: false
      }
    },
    methods: {
      rememberPass(){},
      login(){},
    },
    mounted(){
      this.$doDrag('.row', '#bar')
    }
  }
</script>

<style lang="scss" scoped>
  #login{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    .container{
      position: absolute;
      left: 75%;
      top: 50%;
      box-shadow: 0 0 20px -10px #000;
      transform: translate(-50%,-50%);
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      .row{
        margin-right: -15px;
        margin-left: -15px;
        .content{
          // opacity: .4;
          // margin-top: 100px;
          // margin-left: 35%;
          width: 400px;
          background: #ffffff;
          border-radius: 5px;
          div{
            line-height: 70px;
          }
          .headTitle{
            img{
              width: 400px;
              height: 120px;
            }
            text-align: center;
            font-weight: bold;
            line-height: 50px;
          }
          .splitLine{
            border-bottom: solid 1px #ccc;
          }
          .account{
            position: relative;
            left: 15%;
            width: 70%;
          }
          .login{
            position: relative;
            left: 15%;
            width: 70%;
          }
          .last{
            cursor: pointer;
            padding-left: 15%;
            padding-right: 15%;
            text-align: left;
            div{
              width: 30%;
              display: inline-block;
              &:first-child{
                text-align: left;
                margin-left: 15%;
              }
              &:last-child{
                text-align: right;
                margin-left: 10%;
                // padding-right: 15%;
              }
            }
            // input[type="checkbox"]{
            //   width:13px;
            //   height:13px;
            //   display: inline-block;
            //   text-align: center;
            //   // vertical-align: middle;
            //   line-height: 15px;
            //   position: relative;
            // }
            // input[type="checkbox"]::before{
            //   content: "";
            //   position: absolute;
            //   top: 0;left: 0;
            //   background: #fff;
            //   width: 100%;
            //   height: 100%;
            //   border: 1px solid #d9d9d9;
            // }
            // input[type="checkbox"]:checked::before{
            //   content: "\2713";
            //   background-color: #fff;
            //   position: absolute;
            //   top: 0;
            //   left: 0;
            //   width:100%;
            //   border: 1px solid #409EFF;
            //   color:#409EFF;
            //   font-size: 17px;
            //   font-weight: bold;
            // }
            a{
              // float: right;
              font-size: 14px;
              &:hover{
                color: $app-primary;
                text-decoration:underline
              }
            }
          }
        }
      }
    }
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
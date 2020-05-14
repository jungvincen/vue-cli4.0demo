import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'
import VueInsProgressBar from 'vue-ins-progress-bar' //进度条
import './assets/icon/iconfont.css'
import doDrag from './plugins/drag'
import VueAMap from 'vue-amap';
import global from './components/globalComponents'
import { checkJurisdiction } from './common/jurisdiction'


Vue.config.productionTip = false;
const options = {
  position: 'fixed',
  show: true,
  height: '3px'
}

// 优雅操作 - VUE自定义指令
Vue.directive('permission',{
  inserted(el, binding){
    // inserted → 元素插入的时候

    let permission = binding.value // 获取到 v-permission的值

    if(permission){
      let hasPermission = checkJurisdiction(permission)
      if(!hasPermission){
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }else{
      throw new Error('需要传key')
    }
  }
})

Vue.use(VueInsProgressBar, options);
Vue.use(doDrag)
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 总路由管理文件
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerList = []  // 路由数组 - 存放所有路由
function importAll(routerArr){
  // 该函数用于将所有分区路由中的路由添加到路由数组
  routerArr.keys().forEach( key => {
    console.log(key)
    routerList.push(routerArr(key).default)
  })
}
importAll(require.context('.',true,/\.routes\.js/))

const routes = [
  ...routerList
]

const router = new VueRouter({
  routes
})

export default router
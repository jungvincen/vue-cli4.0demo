// 1 - globalComponent.js

import Vue from 'vue' // 引入vue

// 处理首字母大写 abc => Abc
function changeStr(str){
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/*
    require.context(arg1,arg2,arg3)
        arg1 - 读取文件的路径
        arg2 - 是否遍历文件的子目录
        arg3 - 匹配文件的正则
*/
const requireComponent = require.context('.', false, /\.vue$/)
console.log('requireComponent.keys():',requireComponent.keys())  // 打印
requireComponent.keys().forEach(fileName => {
  const config = requireComponent(fileName)
  console.log('config:',config)  // 打印
  const componentName = changeStr(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')   // ./child1.vue => child1
  )

  Vue.component(componentName, config.default || config) // 动态注册该目录下的所有.vue文件
})
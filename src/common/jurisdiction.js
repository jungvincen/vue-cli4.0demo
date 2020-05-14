// 用于存放与权限相关的全局函数/变量

export function checkJurisdiction(key) {
  // 权限数组
  let jurisdictionList = ['1', '2', '3', '10']
  let index = jurisdictionList.indexOf(key)
  console.log('index:',index)
  if (index > -1) {
    // 有权限
    return true
  } else {
    // 无权限
    return false
  }
}
// // const WSS_URL = `wss://wss.xxxx.com/ws?appid=xxx`
// const WSS_URL = `ws://47.103.69.194:12008/ws`
// let Socket = ''
// let setIntervalWesocketPush = null
//
// /**建立连接 */
// export function createSocket() {
//   if (!Socket) {
//     console.log('建立websocket连接')
//     Socket = new WebSocket(WSS_URL, encodeURIComponent('张文'))
//     Socket.onopen = onopenWS
//     Socket.onmessage = onmessageWS
//     Socket.onerror = onerrorWS
//     Socket.onclose = oncloseWS
//   } else {
//     console.log('websocket已连接')
//   }
// }
// /**打开WS之后发送心跳 */
// export function onopenWS() {
//   sendPing() //发送心跳
// }
// /**连接失败重连 */
// export function onerrorWS() {
//   clearInterval(setIntervalWesocketPush)
//   Socket.close()
//   createSocket() //重连
// }
// /**WS数据接收统一处理 */
// export function onmessageWS(e) {
//   window.dispatchEvent(new CustomEvent('onmessageWS', {
//     detail: {
//       data: e
//     }
//   }))
// }
// /**发送数据
//  * @param eventType
//  */
// export function sendWSPush(eventTypeArr) {
//   const obj = {
//     appId: 'airShip',
//     cover: 0,
//     event: eventTypeArr
//   }
//   if (Socket !== null && Socket.readyState === 3) {
//     Socket.close()
//     createSocket() //重连
//   } else if (Socket.readyState === 1) {
//     Socket.send(JSON.stringify(obj))
//   } else if (Socket.readyState === 0) {
//     setTimeout(() => {
//       Socket.send(JSON.stringify(obj))
//     }, 3000)
//   }
// }
// /**关闭WS */
// export function oncloseWS() {
//   clearInterval(setIntervalWesocketPush)
//   console.log('websocket已断开')
// }
// /**发送心跳 */
// export function sendPing() {
//   Socket.send('ping')
//   setIntervalWesocketPush = setInterval(() => {
//     Socket.send('ping')
//   }, 5000)
// }

var WBT = function (obj) {
  /*
  websocket接口地址
  1、http请求还是https请求 前缀不一样
  2、ip地址host
  3、端口号
  */
  const config = obj ? obj : {}
  const protocol = (window.location.protocol == 'http:') ? 'ws://' : 'wss://';
  const host =  window.location.host;
  const port = ':8087';
  //接口地址url
  this.url = config.ip || protocol + host + port;
  //socket对象
  this.socket;
  //心跳状态  为false时不能执行操作 等待重连
  this.isHeartflag = false;
  //重连状态  避免不间断的重连操作
  this.isReconnect = false;
  //自定义Ws连接函数：服务器连接成功
  this.onopen = ((e) => {
    this.isHeartflag = true;
    console.log(e)
  })
  //自定义Ws消息接收函数：服务器向前端推送消息时触发
  this.onmessage = ((e) => {
    //处理各种推送消息
// console.log(message)
    this.handleEvent(e)
  })
  //自定义Ws异常事件：Ws报错后触发
  this.onerror = ((e) => {
    console.log('error')
    this.isHeartflag = false;
    this.reConnect();
  })
  //自定义Ws关闭事件：Ws连接关闭后触发
  this.onclose = ((e) => {
    this.reConnect()
    console.log('close')
  })
  //初始化websocket连接
  this.initWs()
}

//初始化websocket连接
WBT.prototype.initWs = function () {
  window.WebSocket = window.WebSocket || window.MozWebSocket;
  if (!window.WebSocket) { // 检测浏览器支持
    console.error('错误: 浏览器不支持websocket');
    return;
  }
  var that = this;
  this.socket = new WebSocket(this.url); // 创建连接并注册响应函数
  this.socket.onopen = function (e) {
    that.onopen(e);
  };
  this.socket.onmessage = function (e) {
    that.onmessage(e);
  };
  this.socket.onclose = function (e) {
    that.onclose(e);
    that.socket = null; // 清理
  };
  this.socket.onerror = function (e) {
    that.onerror(e);
  }
  return this;
}

WBT.prototype.reConnect = function () {
  if (this.isReconnect) return;
  this.isReconnect = true;
  //没连接上会一直重连，设置延迟避免请求过多
  setTimeout(function () {
    this.initWs()
    this.isReconnect = false;
  }, 2000);
}

//处理消息
WBT.prototype.handleEvent = function (message) {
  const action = message.action;
  const retCode = message.params.retCode.id;
  //根据action和retCode处理事件
  // console.log(action,retCode)
  if (this.handleAction[action][retCode]) this.handleAction[action][retCode]();
}
//事务处理 根据action
WBT.prototype.handleAction = {
  //登录反馈
  'loginRsp': {
    '0': function () {
      console.log(0)
    },
    '3': function () {
      console.log(3)
    }
  }
}

let defaultParam = {
  action: "loginReq",
  tsxId: "1",
  params:{}
}
WBT.prototype.login = function (params) {
  //ws还没建立连接（发生错误）
  if (!this.isHeartflag) {
    console.log('连接中……')
    return;
  }
  let loginParam = defaultParam;
  loginParam.params = params;
  //组装json数据
  this.socket.send(JSON.stringify(loginParam))
}

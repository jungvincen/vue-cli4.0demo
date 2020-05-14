export function download(url, fileName) {
  let link = document.createElement('a') //创建a标签
  link.style.display = 'none' //将a标签隐藏
  url = 'http://127.0.0.1:8080' + url // 给a标签添加下载链接

  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      // 将链接地址字符内容转变成blob地址
      link.href = URL.createObjectURL(blob)
      console.log(link.href)
      link.download = fileName
      document.body.appendChild(link)
      link.click()
    })
  // link.setAttribute('download', fileName) // 此处注意，要给a标签添加一个download属性，属性值就是文件名称 否则下载出来的文件是没有属性的，空白白
  // document.body.appendChild(link)
  // link.click() //执行a标签
}
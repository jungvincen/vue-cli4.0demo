import axios from 'axios'
import qs from 'qs'
import router from '../router'
// import { Message } from 'element-ui'
import { chooseDevBaseUrl, chooseProductionBaseUrl } from './baseConfig'
axios.create({
	baseURL: axios.defaults.baseURL,
	timeout: 10000,
	responseType: 'json'
	// withCredentials: true
	// 是否允许带cookie这些
})
/*ajax请求工具封装，封装了get，post，delete，put四种请求，需要注意的是如果有需要直接放在url地址后面的参数，需要写在参数的第一个
 *@param url 请求地址
 *@param base baseUrl的地址
 *@param type 请求类型
 *@param data 数据
 */
// axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] =
	'application/x-www-form-urlencoded'
// 请求拦截器
axios.interceptors.request.use(
	config => {
		// 鉴权token
		// localStorage这种必要数据从本地取,不要用vux里的
		if (localStorage.token) {
			config.headers.token = localStorage.token
		}
		return config
	},
	error => {
		console.log(error)
		// error 的回调信息
		// return Promise.reject(error.data.error.message)
	}
)
export default function request(
	url,
	type = 'GET',
	data = {},
	upFile = false,
	base = 'YMF'
) {
	if (process.env.NODE_ENV === 'development') {
		axios.defaults.baseURL = chooseDevBaseUrl(base)
	} else if (process.env.NODE_ENV === 'production') {
		axios.defaults.baseURL = chooseProductionBaseUrl(base)
	}
	return new Promise((resolve, reject) => {
		let options = {
			url,
			method: type
		}
		switch (type.toLowerCase()) {
			case 'get':
				options.params = data
				break
			case 'post':
				options.data = qs.stringify(data)
				break
			case 'delete':
				options.data = data
				break
			case 'put':
				options.data = data
				break
		}
		if (upFile) {
			options.headers = { 'Content-Type': 'multipart/form-data' }
			options.data = data
		}
		axios(options).then(
			res => {
				console.log(typeof res.data.ok)
				if (res.data.ok === 4000) {
					resolve(res.data)
				} else {
					switch (res.data.ok) {
						case 4003:
							localStorage.clear()
							setTimeout(() => {
								router.replace({
									path: '/login',
									query: {
										redirect: router.currentRoute.fullPath
									}
								})
							}, 500)
							reject(res)
							break
						case 4010:
							reject(res)
							break
					}
					reject(res)
				}
			},
			() => {
				reject({ msg: '网络异常' })
			}
		)
	})
}

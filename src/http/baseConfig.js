/*
 *@param val 代表各个baseUrl地址的字符串
 *@return 开发baseUrl地址
 */
export function chooseDevBaseUrl(val) {
	switch (val) {
		case 'YMF':
			return '/'
		case 'IMG':
			return 'http://127.0.0.1/'
		default:
			return 'http://127.0.0.1/'
	}
}
/*方法说明
 *@param val 代表各个baseUrl地址的字符串
 *@return 生产环境baseUrl地址
 */
export function chooseProductionBaseUrl(val) {
	switch (val) {
		case 'IMG':
			return 'http://127.0.0.1/'
		default:
			return 'http://127.0.0.1/'
	}
}

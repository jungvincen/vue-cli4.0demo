// vue.config.js

//去除console
const TerserPlugin = require('terser-webpack-plugin')
// const env = process.env.NODE_ENV
const webpack = require('webpack')
module.exports = {
	productionSourceMap: false,
	outputDir: 'web',
	assetsDir: 'web',
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				'window.Quill': 'quill/dist/quill.js',
				Quill: 'quill/dist/quill.js'
			})
		],
		optimization: {
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						ecma: undefined,
						warnings: false,
						parse: {},
						compress: {
							drop_console: true,
							drop_debugger: false,
							pure_funcs: ['console.log'] // 移除console
						}
					}
				})
			]
		}
	},
	devServer: {
		// 设置代理
		proxy: {
			'/api': {
				target: 'http://127.0.0.1/', // 域名
				ws: true, // 是否启用websockets
				changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
				pathRequiresRewrite: {
					'^/api': '/'
				}
			}
		}
	},
	// pluginOptions: {
	// 	'style-resources-loader': {
	// 		preProcessor: 'less',
	// 		patterns: [path.resolve(__dirname, 'src/assets/css/app-variables.scss')]
	// 	}
	// },
	css: {
		loaderOptions: {
			scss: {
				// 根据自己样式文件的位置调整
				prependData: `@import "~@/assets/css/app-variables.scss";`
			}
		}
	},
	transpileDependencies: ['vue-echarts', 'resize-detector']
}

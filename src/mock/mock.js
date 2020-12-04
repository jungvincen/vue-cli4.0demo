import Mock from 'mockjs'

class baseMock {
	constructor(url, type, data) {
		Mock.setup({
			timeout: '200-600'
		})
		// Mock.mock(RegExp(url + ".*"), type, {
		// 	code: 20000,
		// 	data: data
		// })
		Mock.mock(RegExp(url + ".*"), type, (options) => {
			console.log(url, options)
			return {
				code: 4000, data: data
			}
		})
	}
}

new baseMock('/api/login', 'get', 
	{
		data: 'success'
	}
)

new baseMock('/api/addPerson', 'post',
	{
		data: 'add person success'
	}
)


new baseMock('/api/report/purchasecost/getList', 'get', 
	{
		'lastTime': '@datetime',
		'list|1-10':[{
			'key|+1': 1,
			code: '@string(lower,8)',
			pay: '@float(1, 100,2,2)'
		}]
	}
)
new baseMock('/api/report/incomefactor/getList',
	{
		'lastTime': '@datetime',
		'list|3-6':[{
			'key|+1': 1,
			'id|+1':1,
			channel: '天猫国际',
			shop: '@name',
			scale: '@float(1, 2,1,1)',
			'pastData|24':[{
				'key|+1': 1,
				'monthtime|+1': 1,
				scale: '@float(1, 2,1,1)',
			}]
		}]
	}
)

new baseMock('/api/system/getPermission',{
	"defaultPage": {
		"id": 2,
		"parentId": 1,
		"name": "营收概览",
		"url": "overviewHevenue",
		"perms": "overviewHevenue",
		"sortNum": 1,
		"status": 1,
		"isHideMenu": 0,
		"isTab": 0,
		"createTime": "2020-09-07T03:15:04.000+00:00",
		"updateTime": "2020-09-07T03:15:06.000+00:00"
	},
	"menu": [
		{
			"id": 1,
			"parentId": 0,
			"name": "交易",
			"url": "/transaction",
			"perms": "transaction",
			"sortNum": 1,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:05:17.000+00:00",
			"updateTime": "2020-09-07T03:05:19.000+00:00"
		},
		{
			"id": 2,
			"parentId": 1,
			"name": "营收概览",
			"url": "overviewHevenue",
			"perms": "overviewHevenue",
			"sortNum": 1,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:15:04.000+00:00",
			"updateTime": "2020-09-07T03:15:06.000+00:00"
		},
		{
			"id": 3,
			"parentId": 1,
			"name": "销售目标管理",
			"url": "salesManagement",
			"perms": "salesManagement",
			"sortNum": 1,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:18:04.000+00:00",
			"updateTime": "2020-09-07T03:18:06.000+00:00"
		},
		{
			"id": 4,
			"parentId": 3,
			"name": "销售目标设定",
			"url": "salesTargetSetting",
			"perms": "salesTargetSetting",
			"sortNum": 1,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:22:06.000+00:00",
			"updateTime": "2020-09-07T03:22:09.000+00:00"
		},
		{
			"id": 5,
			"parentId": 3,
			"name": "销售目标跟进",
			"url": "salesTargetFollow",
			"perms": "salesTargetFollow",
			"sortNum": 1,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:22:50.000+00:00",
			"updateTime": "2020-09-07T03:22:53.000+00:00"
		},
		{
			"id": 37,
			"parentId": 4,
			"name": "按组织",
			"perms": "",
			"sortNum": 1,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 1,
			"createTime": "2020-09-08T08:51:34.000+00:00",
			"updateTime": "2020-09-08T08:51:37.000+00:00"
		},
		{
			"id": 40,
			"parentId": 5,
			"name": "按组织",
			"perms": "",
			"sortNum": 1,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 1,
			"createTime": "2020-09-08T09:05:09.000+00:00",
			"updateTime": "2020-09-08T09:05:11.000+00:00"
		},
		{
			"id": 6,
			"parentId": 0,
			"name": "商品",
			"url": "/goods",
			"perms": "goods",
			"sortNum": 2,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:43:34.000+00:00",
			"updateTime": "2020-09-07T03:43:37.000+00:00"
		},
		{
			"id": 7,
			"parentId": 6,
			"name": "品类分析",
			"url": "categoryAnalysis",
			"perms": "categoryAnalysis",
			"sortNum": 2,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:44:37.000+00:00",
			"updateTime": "2020-09-07T03:44:39.000+00:00"
		},
		{
			"id": 8,
			"parentId": 6,
			"name": "商品360",
			"url": "goods360",
			"perms": "goods360",
			"sortNum": 2,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:45:18.000+00:00",
			"updateTime": "2020-09-07T03:45:21.000+00:00"
		},
		{
			"id": 9,
			"parentId": 8,
			"name": "基础物料商品榜",
			"url": "base-list",
			"perms": "goods360-base-list",
			"sortNum": 2,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:46:35.000+00:00",
			"updateTime": "2020-09-07T03:46:38.000+00:00"
		},
		{
			"id": 10,
			"parentId": 8,
			"name": "销售物料商品榜",
			"url": "sales-list",
			"perms": "goods360-sales-list",
			"sortNum": 2,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:47:11.000+00:00",
			"updateTime": "2020-09-07T03:47:13.000+00:00"
		},
		{
			"id": 29,
			"parentId": 9,
			"name": "基础物料详情页",
			"url": "base-detail",
			"perms": "goods360-base-detail",
			"sortNum": 2,
			"status": 1,
			"isHideMenu": 1,
			"isTab": 0,
			"createTime": "2020-09-08T07:02:30.000+00:00",
			"updateTime": "2020-09-08T07:02:33.000+00:00"
		},
		{
			"id": 30,
			"parentId": 29,
			"name": "销售信息",
			"perms": "",
			"sortNum": 2,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 1,
			"createTime": "2020-09-08T08:40:43.000+00:00",
			"updateTime": "2020-09-08T08:40:46.000+00:00"
		},
		{
			"id": 31,
			"parentId": 29,
			"name": "组合商品",
			"perms": "",
			"sortNum": 2,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 1,
			"createTime": "2020-09-08T08:40:35.000+00:00",
			"updateTime": "2020-09-08T08:40:37.000+00:00"
		},
		{
			"id": 32,
			"parentId": 29,
			"name": "库存信息",
			"perms": "",
			"sortNum": 2,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 1,
			"createTime": "2020-09-08T08:41:13.000+00:00",
			"updateTime": "2020-09-08T08:41:16.000+00:00"
		},
		{
			"id": 34,
			"parentId": 29,
			"name": "采购成本信息",
			"perms": "",
			"sortNum": 2,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 1,
			"createTime": "2020-09-08T08:43:16.000+00:00",
			"updateTime": "2020-09-08T08:43:19.000+00:00"
		},
		{
			"id": 35,
			"parentId": 29,
			"name": "售后情况",
			"perms": "",
			"sortNum": 2,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 1,
			"createTime": "2020-09-08T08:43:51.000+00:00",
			"updateTime": "2020-09-08T08:43:54.000+00:00"
		},
		{
			"id": 11,
			"parentId": 0,
			"name": "库存",
			"url": "/inventory",
			"perms": "inventory",
			"sortNum": 6,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:49:30.000+00:00",
			"updateTime": "2020-09-07T03:49:32.000+00:00"
		},
		{
			"id": 12,
			"parentId": 11,
			"name": "库存概览",
			"url": "analysisStock",
			"perms": "analysisStock",
			"sortNum": 6,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T03:53:09.000+00:00",
			"updateTime": "2020-09-07T03:53:11.000+00:00"
		},
		{
			"id": 19,
			"parentId": 0,
			"name": "报表",
			"url": "/report",
			"perms": "report",
			"sortNum": 7,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T06:18:03.000+00:00",
			"updateTime": "2020-09-07T06:18:05.000+00:00"
		},
		{
			"id": 23,
			"parentId": 19,
			"name": "基础数据设置",
			"url": "basedata",
			"perms": "basedata",
			"sortNum": 7,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T06:22:38.000+00:00",
			"updateTime": "2020-09-07T06:22:41.000+00:00"
		},
		{
			"id": 24,
			"parentId": 23,
			"name": "出库收入店铺系数",
			"url": "incomeFactor",
			"perms": "incomeFactor",
			"sortNum": 7,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T06:24:48.000+00:00",
			"updateTime": "2020-09-07T06:24:50.000+00:00"
		},
		{
			"id": 25,
			"parentId": 23,
			"name": "单品采购成本",
			"url": "purchaseCost",
			"perms": "purchaseCost",
			"sortNum": 7,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T06:25:38.000+00:00",
			"updateTime": "2020-09-07T06:25:41.000+00:00"
		},
		{
			"id": 26,
			"parentId": 0,
			"name": "系统",
			"url": "/system",
			"perms": "system",
			"sortNum": 8,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T06:26:57.000+00:00",
			"updateTime": "2020-09-07T06:27:00.000+00:00"
		},
		{
			"id": 27,
			"parentId": 26,
			"name": "用户管理",
			"url": "usermanage",
			"perms": "usermanage",
			"sortNum": 8,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T06:27:52.000+00:00",
			"updateTime": "2020-09-07T06:27:56.000+00:00"
		},
		{
			"id": 28,
			"parentId": 26,
			"name": "角色管理",
			"url": "rolemanage",
			"perms": "rolemanage",
			"sortNum": 8,
			"status": 1,
			"isHideMenu": 0,
			"isTab": 0,
			"createTime": "2020-09-07T06:28:27.000+00:00",
			"updateTime": "2020-09-07T06:28:29.000+00:00"
		}
	]
})
import Mock from 'mockjs';
import url from './url';

Mock.mock(url['records'],'get',{
	"code": 0,
	"data": {
		'0': {
			// 母乳亲喂
			'total': '@integer(30,200)',
			'data|2-5': [{
				'time': '@time',
				'amount': '@integer(5,20)',
			}, ]
		},
		'1': {
			// 母乳瓶喂
			'total': '@integer(30,1000)',
			'data|2-5': [{
				'time': '@time',
				'amount': '@integer(50,200)',
			}, ]
		},
		'2': {
			// 挤奶
			'total': '@integer(30,1000)',
			'data|2-5': [{
				'time': '@time',
				'amount': '@integer(20,200)',
			}, ]
		},
		'4': {
			// 奶粉
			'total': '@integer(30,1000)',
			'data|2-5': [{
				'time': '@time',
				'amount': '@integer(10,200)',
			}, ]
		},
		'3': {
			// 母乳存储
			'total': '@integer(30,1000)',
			'data|2-5': [{
				'time': '@time',
				'amount': '@integer(10,200)',
			}, ]
		},
		'5': {
			//'title': '小便',
			'total': '@integer(0,10)',
			'data|2-5': [{
				'time': '@time',
				'amount': '1',
			}, ]
		},
		'6': {
			//'title': '大便',
			'total': '@integer(0,10)',
			'data|2-5': [{
				'time': '@time',
				'amount': '1',
				'note':'@cname()'
			}, ]
		},
		'7': {
			//'title': '洗澡',
			'total': '@integer(0,10)',
			'data|1-5': [{
				'time': '@time',
				'amount': '1',
			}, ]
		}
	},
	"msg": "Success"
});

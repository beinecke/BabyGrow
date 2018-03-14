//records.js
const util = require('../../utils/util.js');
const app = getApp();

Page({
  data: {
    activeItem:'',
    unitObj:{
      ml:'毫升',
      number:'次',
      scoop:'勺',
      gram:'克',
      minute:'分钟',
    },
    list:['nursing','pumping','storage','nursing_bottle','milk','pee','stool','bathe'],
    records: {
      'nursing':{
        //亲喂
        'title':'母乳亲喂',
        'unit':'minute',
        'total':'100',
        'data':[
          {
            'time':'18:00',
            'amount':'15',
          },
        ]
      },
      nursing_bottle:{
        //母乳亲喂
        'title':'母乳瓶喂',
        'unit':'ml',
        'total':0,
        'data':[]
      },
      pumping:{
        //挤奶
        'title':'挤奶',
        'unit':'ml',
        'total':0,
        'data':[]
      },
      milk:{
        'title':'奶粉',
        'unit':'ml',
        'total':0,
        'data':[]
      },
      storage:{
        'title':'母乳存储',
        'unit':'ml',
        'total':0,
        'data':[]
      },
      pee:{
        'title':'小便',
        'unit':'number',
        'total':0,
        'data':[]
      },
      stool:{
        'title':'大便',
        'unit':'number',
        'total':0,
        'data':[]
      },
      bathe:{
        'title':'洗澡',
        'unit':'number',
        'total':0,
        'data':[]
      }
    }
  },
  onLoad: function () {
    const that = this;
    wx.request({
      url:app.globalData.domain+app.globalData.url['records'],
      success: function(res) {
        if(res.data.code==0){
          that.setData({
            records: res.data.data,
          })
        }
      },
      fail:function(error){
        console.log(error);
      }
    })
  },
  fToggleItem: function(event){
    let name = event.target.dataset.name;
    let item = name == this.data.activeItem ? '' : name;
    console.log(event.target,name,item);
    this.setData({
      activeItem: item
    })
  },
})

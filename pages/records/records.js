//records.js
const util = require('../../utils/util.js');
const app = getApp();

Page({
  data: {
    current:'2018-03-01',
    date:'2018-03-01',
    activeItem:'',
    unitObj:{
      ml:'毫升',
      number:'次',
      scoop:'勺',
      gram:'克',
      minute:'分钟',
    },
    storage:app.globalData.storage,
    list:['0','1','2','3','4','5','6','7'],
    records: {
      '0':{
        'total':'0',
        'data':[]
      },
      '1':{
        'total':0,
        'data':[]
      },
      '2':{
        'total':0,
        'data':[]
      },
      '3':{
        'total':0,
        'data':[]
      },
      '4':{
        'total':0,
        'data':[]
      },
      '5':{
        'total':0,
        'data':[]
      },
      '6':{
        'total':0,
        'data':[]
      },
      '7':{
        'total':0,
        'data':[]
      }
    }
  },
  onLoad: function () {
    let today = util.fmtDate(new Date(),'yyyy-MM-dd');
    this.setData({
      date: today,
      currentDate: today,
    })
    this.fGetData(today);
  },
  fGetData: function(date){
    const that = this;
    wx.request({
      url:app.globalData.domain+app.globalData.url['records'],
      data:{
        date:that.date
      },
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
    let name = event.currentTarget.dataset.name;
    let item = name == this.data.activeItem ? '' : name;
    this.setData({
      activeItem: item
    })
  },
  fAddLog: function(event){
    let dataset = event.target.dataset;
    let params = {
      date:dataset.date,
      index:dataset.index
    };
    util.cNavigateTo('create/create',params);
  },
  fDateChange:function(val){
    let date = val.detail.value;
    if(date != this.data.date){
      this.setData({
        date: date
      })
      this.fGetData(date);
    }
  }
})

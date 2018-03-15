//records.js
const util = require('../../../utils/util.js');
const app = getApp();

Page({
  data: {
    unitObj:{
      ml:'毫升',
      number:'次',
      scoop:'勺',
      gram:'克',
      minute:'分钟',
    },
    list:['nursing','pumping','storage','nursing_bottle','milk','pee','stool','bathe'],
    form: {
      date:'2018-03-01',
      time:'00:00',
      activeItem:'',
      amount:0
    },
    storage:app.globalData.storage
  },
  onLoad: function (params) {
    let now = new Date();
    this.setData({
      'form.date': params.date,
      'form.activeItem':params.index,
      'form.time': util.fmtDate(now,'hh:mm')
    })
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
  fSubmit:function(){

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
    console.log(dataset.name,dataset.date);
  },
  fDateChange:function(val){
    let date = val.detail.value;
    if(date != this.data.date){
      this.setData({
        date: date
      })
      this.fGetData(this.data.date);
    }

  }
})

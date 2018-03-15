//create.js
const util = require('../../../utils/util.js');
const app = getApp();

Page({
  data: {
    list:[],
    form: {
      date:'2018-03-01',
      time:'00:00',
      activeItem:'',
      amount:0,
      note:''
    },
    storage:app.globalData.storage
  },
  onLoad: function (params) {
    let now = new Date(),st = this.data.storage,arr=[];
    arr = Object.keys(st).map(key =>{
      return {
        index:st[key].index,
        label:st[key].label,
      }
    });
    //Object.keys(st).forEach((item,index) =>{
    //  arr[item.index] = item.label
    //});
    this.setData({
      'form.date': params.date,
      'form.activeItem':params.index,
      'form.time': util.fmtDate(now,'hh:mm'),
      'list':arr
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
    let form = this.data.form;
    if(this.data.storage[form.activeItem].unit_en=='number'){
      form.amount = 1
    }else if(form.amount != 0){
      wx.request({
        url:app.globalData.domain+app.globalData.url['logs'],
        method:'POST',
        data:form,
        success: function(res) {
          if(res.data.code==0){
            wx.navigateBack({
              delta: 1
            })
          }else{
            console.log(res.data.msg);
          }
        },
        fail:function(error){
          console.log(error);
        }
      })
    }else{
      console.log('错误,数量不能为空');
    }
  },
  fDateChange:function(val){
    let value = val.detail.value;
    this.setData({
      'form.date': value
    })
  },
  fTimeChange:function(val){
    let value = val.detail.value;
    this.setData({
      'form.time': value
    })
  },
  fAmountChange:function(val){
    let value = val.detail.value;
    this.setData({
      'form.amount': value
    })
  },
  fNoteChange:function(val){
    let value = val.detail.value;
    this.setData({
      'form.note': value
    })
  }

})

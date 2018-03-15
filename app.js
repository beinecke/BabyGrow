//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    domain:'https://www.easy-mock.com/mock/5aa79d3d6701e17a67bde1fe/',
    url:{
      records:'records'
    },
    storage:{
      0:{
        index:0,
        label_en:'nursing',
        label:'母乳亲喂',
        unit:'分钟',
        unit_en:'minute',
        icon:'icon-mother',
      },
      1:{
        index:1,
        label_en:'nursing_bottle',
        label:'母乳瓶喂',
        unit:'毫升',
        unit_en:'ml',
        icon:'icon-ziyuan8',
      },
      2:{
        index:2,
        label_en:'pumping',
        label:'挤奶',
        unit:'毫升',
        unit_en:'ml',
        icon:'icon-naizui1',
      },
      3:{
        index:3,
        label_en:'storage',
        label:'母乳存储',
        unit:'毫升',
        unit_en:'ml',
        icon:'icon-caozuozhileng',
      },
      4:{
        index:4,
        label_en:'milk',
        label:'奶粉',
        unit:'毫升',
        unit_en:'ml',
        icon:'icon-naifen',
      },
      5:{
        index:5,
        label_en:'pee',
        label:'小便',
        unit:'次',
        unit_en:'number',
        icon:'icon-niaobushi1',
      },
      6:{
        index:6,
        label_en:'stool',
        label:'大便',
        unit:'次',
        unit_en:'number',
        icon:'icon-weishengzhi1',
      },
      7:{
        index:7,
        label_en:'bath',
        label:'洗澡',
        unit:'次',
        unit_en:'number',
        icon:'icon-44',
      },
    }
  }
})
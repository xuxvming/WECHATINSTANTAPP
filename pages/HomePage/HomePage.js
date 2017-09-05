// HomePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    inputValue: " ",
    
    adapterSource: ["123", "321", "666", "weixin", "WeiXin", "wechat", "android", "Android", "ios", "iOS", "java", "javascript", "微信小程序", "微信公众号", "微信开发者",
      "微信开发者工具"],//本地匹配源
    bindSource: [],//绑定到页面的数据，根据用户输入动态变化
    actionSheetHidden: true,

  },



  /**
   * 生命周期函数--监听页面加载
   */
  

  actionSheetTap: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetbindchange: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  //当键盘输入时，触发input事件
  bindinput: function (e) {
    var prefix = e.detail.value//用户实时输入值
    var newSource = []//匹配的结果
    if (prefix != "") {
      this.data.adapterSource.forEach(function (e) {
        if (e.indexOf(prefix) != -1) {
          newSource.push(e)
        }
      })
    }
    if (newSource.length != 0) {
      this.setData({
        bindSource: newSource
      })
    } else {
      this.setData({
        bindSource: []
      })
    }
  },
  itemtap: function (e) {
    this.setData({
      inputValue: e.target.id,
      bindSource: []
    })
  },

  24: function () {
    wx.navigateTo({
      url: "../lectureTheatres/lectureTheatres",
    })
  },

  services:function(){
    wx.navigateTo({
      url: "../services/servies",
    })
    
  }
})




  


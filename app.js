// app.js
const req = require("./req/index.js");
const {
  showLoading,
  showToast,
  showModal,
  checkLogin,
  setData,
  wxLogin,
  formatTime
} = require("./utils/util.js");

wx.$setData = setData
wx.$login = wxLogin

App({
  globalData: {
    req, //接口请求配置
    showLoading, //wx.showLoading()
    showToast, //wx.showToast()
    showModal, //wx.showModal()
    checkLogin, //判断是否登录
    paltform: {},
    userInfo: {}
  },

  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  }
})

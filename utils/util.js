const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const getCurrDate = (type = "d") => {
  return formatTime(new Date().getTime() / 1000, type);
}

const showToast = (title, icon = "none", success = () => {}, duration = 2000, mask = true) => {
  return wx.showToast({
    title,
    icon,
    mask,
    duration,
    success
  })
}

const showLoading = (title = "加载中...", mask = true) => {
  return wx.showLoading({
    title,
    mask
  })
}

const showModal = (content, success = () => {}, showCancel = true, cancelText = "取消", confirmText = "确定", title = "提示") => {
  return wx.showModal({
    title,
    content,
    showCancel,
    cancelText,
    confirmText,
    success
  })
}

const checkLogin = (fn) => {
  let token = wx.getStorageSync("sessionId");
  if (!token) {
    wx.navigateTo({
      url: "/pagesUser/login/login"
    });
  } else {
    fn && fn();
  }
}

const wxLogin = () => {
  return new Promise(resolve => {
    wx.login({
      success(res) {
        if (res.code) {
          resolve(res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  })
}

function setData(obj) {
  return new Promise(resolve => {
    this.setData(obj, () => {
      resolve()
    })
  })
}

module.exports = {
  formatTime,
  getCurrDate,
  showToast,
  showLoading,
  showModal,
  checkLogin,
  setData,
  wxLogin
}

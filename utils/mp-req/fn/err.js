/**
 * 提炼错误信息
 * @param {any} err 错误信息
 * @return {string} errMsg
 */
function picker(err) {
  const msg = '程序好像出了点小问题，请与客服联系~';
  const res = typeof err === 'string'
    ? err
    : (err.msg || err.errMsg || (err.detail && err.detail.errMsg) || msg);
  if (err instanceof Error) {
    console.error(err);
  } else {
    console.error(res);
  }
  return res;
}

/**
 * 错误弹窗
 * @param {any} err 错误信息
 */
function show(err) {
  const msg = picker(err);

  wx.hideLoading();
  wx.stopPullDownRefresh();
  wx.showToast({
    title: msg,
    icon: "none",
    mask: true,
    duration: 2000
  })
}

module.exports = {
  install(req) {
    req.err = {
      picker,
      show,
    };
  },
};

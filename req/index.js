const req = require('../utils/mp-req/index.js');
// api
const jiayouApi = require('./api/jiayou.js');
const userApi = require('./api/user.js');

const apiUrlTable = {
  // release: 'http://zsh.xmxnhj.top',
  release: 'http://zsh.xmyyhj.com',
  thirdApi: 'http://www.aika168.com'
};
const apiUrl = apiUrlTable.release;
const thirdApi = apiUrlTable.thirdApi;

/**
 * code换取sessionId
 * @param {string} code
 */
function code2sessionId(code) {
  return new Promise((res, rej) => {
    let loginType = wx.getStorageSync("loginType");
    console.log('loginType',loginType)
    if (loginType == "account") {
      wx.showToast({
        title: "当前尚未登录",
        icon: "none",
        mask: true,
        duration: 2000
      });
      setTimeout(() => {
        wx.navigateTo({
          url: "/pagesUser/login/login"
        });
      }, 2000);
    } else if (loginType == "wechat") {
      wx.getUserInfo({
        success: (resp) => {
          wx.request({
            url: `${apiUrl}/api/third_login/oauthUserLogin`,
            method: 'POST',
            header: {
              "content-type": "application/x-www-form-urlencoded"
            },
            data: {
              "js_code": code,
              "encryptedData": resp.encryptedData,
              "iv": resp.iv
            },
            success(r1) {
              let wechat = r1.data;
              if (wechat.status == 1) {
                res(wechat.data.user);
              } else {
                rej(r1);
              }
            },
            fail: rej,
          });
        }
      })
    }
  });
}

/**
 * 检查session是否有效
 * @param {any} res
 */
function isSessionAvailable(res, key) {
  if (res.status == "-10086") {
    wx.removeStorageSync(key);
  }
  return res.status != "-10086";
}

req.init({
  apiUrl,
  thirdApi,
  code2sessionId,
  isSessionAvailable,
});

req.use(jiayouApi);
req.use(userApi);

module.exports = req;
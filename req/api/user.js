function install(req, request) {
  req.user = {
    test(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/xxx`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    register(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/user/register`;
      return request({
        url,
        method,
        data
      }, false); //是否需要登录，默认false
    },
    login(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/user/loginByAccount`;
      return request({
        url,
        method,
        data
      }, false); //是否需要登录，默认false
    },
    getPhoneCode(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/code/sendCode`;
      return request({
        url,
        method,
        data
      }, false); //是否需要登录，默认false
    },
    getUserInfo(data, method = "GET") { //默认GET
      const url = `${req.apiUrl}/api/user/getUserInfo`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    orderOil(data, method = "GET") { //默认GET
      const url = `${req.apiUrl}/api/order/oil`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    takeOilOrder(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/order/oil`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    orderDetail(order_id) { //默认GET
      const url = `${req.apiUrl}/api/order/${order_id}`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },
    aboutUs() { //默认GET
      const url = `${req.apiUrl}/api/contact/aboutUs`;
      return request({
        url
      }, false); //是否需要登录，默认false
    },
    feedback(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/contact/feedback`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    normal_question() { //默认GET
      const url = `${req.apiUrl}/api/normal_question`;
      return request({
        url
      }, false); //是否需要登录，默认false
    },
    normal_question_detail(normal_id) { //默认GET
      const url = `${req.apiUrl}/api/normal_question/${normal_id}`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },
    user_invoice_add(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/user_invoice/add`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    user_invoice() { //默认GET
      const url = `${req.apiUrl}/api/user_invoice`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },
    Invoice(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/Invoice`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    user_invoice_update(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/user_invoice/update`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    invoice(data, method = "GET") { //默认GET
      const url = `${req.apiUrl}/api/invoice`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    invoiceDetail(invoice_id) { //默认GET
      const url = `${req.apiUrl}/api/user_invoice/${invoice_id}`;
      return request({
        url,
      }, true); //是否需要登录，默认false
    },
    coupon(data, method = "GET") { //默认GET
      const url = `${req.apiUrl}/api/coupon`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    spread(data, method = "GET") { //默认GET
      const url = `${req.apiUrl}/api/user_center/spread`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    profitHome() { //默认GET
      const url = `${req.apiUrl}/api/user_center/profitHome`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },
    profit(data, method = "GET") { //默认GET
      const url = `${req.apiUrl}/api/user_center/profit`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    banks() { //默认GET
      const url = `${req.apiUrl}/api/wallet/banks`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },
    submitWithdraw(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/wallet/submitWithdraw`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    editBank(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/wallet/editBank`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    bank() { //默认GET
      const url = `${req.apiUrl}/api/index/bank`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },
    evaluate(data, method = "GET") { //默认GET
      const url = `${req.apiUrl}/api/evaluate/my`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    updateInfo(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/user/updateInfo`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    unreadCount() { //默认GET
      const url = `${req.apiUrl}/api/message/unreadCount`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },
    deal() { //默认GET
      const url = `${req.apiUrl}/api/message/deal`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },
    contact(data, method = "GET") { //默认GET
      const url = `${req.apiUrl}/api/wallet/userWithdraw`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    system() { //默认GET
      const url = `${req.apiUrl}/api/message/system`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },
    systemDetail(id) { //默认GET
      const url = `${req.apiUrl}/api/message/system/${id}`;
      return request({
        url,
      }, true); //是否需要登录，默认false
    },
    signIn() { //默认GET
      const url = `${req.apiUrl}/api/point/signIn`;
      return request({
        url,
      }, true); //是否需要登录，默认false
    },
    monthSign() { //默认GET
      const url = `${req.apiUrl}/api/point/monthSign`;
      return request({
        url,
      }, true); //是否需要登录，默认false
    },
    getPoint(data, method = "GET") { //默认GET
      const url = `${req.apiUrl}/api/point`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    getOpenid(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/order/getOpenid`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    },
    orderCharge(data, method = "POST") { //默认GET
      const url = `${req.apiUrl}/api/order/charge`;
      return request({
        url,
        method,
        data
      }, true); //是否需要登录，默认false
    }
  };
}

module.exports = {
  install
};
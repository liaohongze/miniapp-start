function install(req, request) {
  req.jiayou = {
    // 平台信息
    getAboutUs(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/contact/aboutUs`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },

    /*首页 */
    // 汽车服务商列表
    getShopService(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/service`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    // banner图
    getAdvert(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/advert`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    // 搜索记录列表
    getSearchLog(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/search_log`;
      return request({ url, method, data }, true);  //是否需要登录，默认false
    },
    // 添加搜索记录
    addSearchLog(data, method = "POST") {  //默认GET
      const url = `${req.apiUrl}/api/search_log`;
      return request({ url, method, data }, true);  //是否需要登录，默认false
    },
    // 清空搜索记录
    deleteSearchLog(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/search_log/delete`;
      return request({ url, method, data }, true);  //是否需要登录，默认false
    },
    // 服务类型
    getServiceType(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/service/type`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    // 今日油价
    getDayPrice(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/oil/dayPrice`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    /*首页结束 */


    /*油站 */
    // 油站列表
    getOilStation(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/oil`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },

    // 油品列表
    getOilType(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/oil/type`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    getOilDetail(id) { //默认GET
      const url = `${req.apiUrl}/api/oil/${id}`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },
    /*油站结束 */

    /*店铺 */
    getShopDetail(id) { //默认GET
      const url = `${req.apiUrl}/api/service/${id}`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },
    getEvaluate(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/evaluate`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    /*店铺结束 */

    /*商品 */
    getGoodsDetail(id) { //默认GET
      const url = `${req.apiUrl}/api/goods/${id}`;
      return request({
        url
      }); //是否需要登录，默认false
    },
    getGoods(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/goods`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    /*商品结束 */

    /*便利店 */
    // 便利店列表
    getStore(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/shop`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    getStoreDetail(id) { //默认GET
      const url = `${req.apiUrl}/api/shop/${id}`;
      return request({
        url
      }); //是否需要登录，默认false
    },
    /*便利店结束 */

    /*购物车 */
    // 购物车列表
    getShopCart(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/cart`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    addToShopCart(data, method = "POST") {  //默认GET
      const url = `${req.apiUrl}/api/cart`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    updateShopCart(data, method = "POST") {  //默认GET
      const url = `${req.apiUrl}/api/cart/update`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    clearShopCart(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/cart/empty`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    delShopCart(data, method = "POST") {  //默认GET
      const url = `${req.apiUrl}/api/cart/delete`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },
    /*购物车结束 */

    /*我的订单 */
    // 订单结算页面
    getTakeOrder(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/order/settlement`;
      return request({ url, method, data }, true);  //是否需要登录，默认false
    },

    // 订单列表
    getOrders(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/order`;
      return request({ url, method, data }, true);  //是否需要登录，默认false
    },
    // 订单详情
    getOrderDetail(id) { //默认GET
      const url = `${req.apiUrl}/api/order/${id}`;
      return request({
        url
      }, true); //是否需要登录，默认false
    },

    // 订单结算
    takeOrder(data, method = "POST") {  //默认GET
      const url = `${req.apiUrl}/api/order`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },

    // 添加评价
    evaluate(data, method = "POST") {  //默认GET
      const url = `${req.apiUrl}/api/evaluate`;
      return request({ url, method, data }, false);  //是否需要登录，默认false
    },

    // 加油评价选项
    getEvaluateTypeList(data, method = "GET") {  //默认GET
      const url = `${req.apiUrl}/api/evaluate/type`;
      return request({ url, method, data }, true);  //是否需要登录，默认false
    },
    /*我的订单结束 */


    /*我的爱车*/
    getCarInfo(data) {
      const url = `${req.thirdApi}/api/TrackingOBD.aspx`;
      return request({ url, data }, true);
    },
    /*爱车轨迹*/
    getCarTrack(data) {
      const url = `${req.thirdApi}/api/Playback.aspx`;
      return request({ url, data }, true);
    },
    /*首页banner图h5内容*/
    getContentDetail(data) {
      const url = `${req.apiUrl}/api/advert/view`;
      return request({ url, data });
    }
  };
}

module.exports = {
  install
};
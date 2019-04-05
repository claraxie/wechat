// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    inputValue : "", 
    restaurants: [],
    location: "",
    hidden: true,
    locationList: []
  },

  inputAddress: function (event) {
    if (event.detail.value) {
      this.setData({ hidden: false })
      this.search(event.detail.value)
    } else {
      this.setData({ hidden: true })
    }
  },

  search: function (text) {
    var that = this
    wx.request({
      url: 'http://api.map.baidu.com/place/v2/search?query=' + text + '&page_size=20&page_num=0&scope=2&region=上海&output=json&ak=7lBzcxECnMYpQSHTn68uLWG3wDjXmzrX',
      success: function (res) {
        console.log(res);
        that.setData({ locationList: res.data.results })
      }
    })
  },

  onTapResult: function (event) {
    wx.setStorageSync('location', event.currentTarget.dataset.key)
    this.setData({ location: event.currentTarget.dataset.key, hidden: true, inputValue: ""})
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log("onShow!!!!")
    var that = this;
    wx.request({
      url: "https://easy-mock.com/mock/5ca5fd2c5c2b7f10af50e927/example/restc",//easy-mock生成的虚拟数据接口链接
      method: "GET",
      success: function (res) {//成功得到数据，对数据进行处理
        that.setData({//将数据发送到data中
          restaurants: res.data.data.restaurant,
          location: wx.getStorageSync('location')
        })
      }
    });
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
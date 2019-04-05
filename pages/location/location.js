// pages/location/location.js
Page({

  /**
   * Page initial data
   */
  data: {
    myLocations: [
      {
        address: "59 Rue de la Sablière, 92400, Courbevoie",
        contact: "Maxime", telephone: "06659259"},
      {
        address: "94 Rue de Paris, 92100, Boulogne billancourt",
        contact: "Clara", telephone: "07659159"
      }]
  },

  getLocation: function() {
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.request({
          url: 'http://api.map.baidu.com/geocoder/v2/?ak=7lBzcxECnMYpQSHTn68uLWG3wDjXmzrX&coordtype=gcj02ll&location=' + latitude + ',' + longitude + '&output=json&pois=0',
          method: "get",
          success: function(res){
            console.log(res.data)
            wx.setStorageSync('location', res.data.result.formatted_address.substr(res.data.result.formatted_address.indexOf('市') + 1, 10))
          }
        })
      },
    })
  },

  onTapAddLocation: function(event){
    
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
// pages/subject/subject.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index: '-',
        total: '-',
        isWordShow: true,
        word: 'commission',
        explain: 'They commissioned a sculpture.',
        read: '|kəˈmɪʃn|',
        options: ['order', 'release', 'prevent', 'affect']
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

    changeTitle: function () {
        var flg = !this.data.isWordShow;
        this.setData({ isWordShow: flg });
    }
})
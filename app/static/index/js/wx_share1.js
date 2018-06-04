/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
    $.ajax({
        url: "http://jilih5.zx0312.com/share/sharesignature",
        type: "GET",
        cache: true,
        data: {url: location.href},
        dataType: "json",

        success: function(back) {
            // console.log(back);
            wx.config({
                debug: false,
                appId: back.appId,
                timestamp: back.timestamp,
                nonceStr: back.nonceStr,
                signature: back.signature,
                jsApiList: [
                    // 所有要调用的 API 都要加到这个列表中
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage'
                ]
            });
        },
        error: function() {
        }
    });
});
wx.ready(function() {
    wx.error(function(res) {
        // console.log(res+'123');
    });
    addWeiXinEvent(0);
});
var scene_1 = true,
 scene_2 = true,
 scene_3 = true,
 scene_4 = true;

var addWeiXinEvent = function(index) {


           		$.timelineTitle = "帝豪GSe打卡挑战赛 ";
				$.shareAppDesc = "北京新能源标主，49999元奖金等您来拿！";
				$.shareAppTitle = "帝豪GSe打卡挑战赛 ";
				$.shareImage = "http://jilih5.zx0312.com/share.png";

				$.shareUrl = "http://jilih5.zx0312.com/";






    wx.onMenuShareAppMessage({
        title: $.shareAppTitle,
        desc: $.shareAppDesc,
        link: $.shareUrl,
        imgUrl: $.shareImage,
        trigger: function(res) {

        },
        success: function(res) {
           // _hmt.push(['_trackEvent', 'shareAppMessage', 'click']);
        },
        cancel: function(res) {

        },
        fail: function(res) {

        }
    });
    wx.onMenuShareTimeline({
        title: $.timelineTitle,
        link: $.shareUrl,
        imgUrl: $.shareImage,
        trigger: function(res) {
        },
        success: function(res) {
           // _hmt.push(['_trackEvent', 'shareTimeLine', 'click']);
        },
        cancel: function(res) {

        },
        fail: function(res) {
        }
    });
};





layui.define(['rate'], function (exports) {
    var $ = layui.jquery,
        rate = layui.rate;

    var articleNav = {
        render: function () {
            $('.article-nav').html(
                '<div class="layui-bg-gray" style="padding: 30px;">'+
                    '<div class="layui-row layui-col-space15">'+
                        '<div class="layui-col-md12">'+
                            '<div class="layui-panel" style="padding: 50px 30px;">'+
                                '<button type="button" class="layui-btn layui-btn-normal">作者：崔师尊</button>'+
                                '<button type="button" class="layui-btn layui-btn-normal">日期：2021-7-22 14:17:41</button>'+
                                '<button type="button" class="layui-btn layui-btn-normal">备注：</button>'+
                                // '<button type="button" class="layui-btn layui-btn-primary layui-btn-lg float-right">'+
                                //     '<div class="share"></div>'+
                                // '</button>'+
                                '<button type="button" class="layui-btn layui-btn-primary layui-btn-lg float-right">'+
                                    '<div id="rate" class="float-right" style="line-height: 10px;"></div>'+
                                '</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</form>'
            );
            rate.render({
                elem: '#rate'
                ,value: 5
            });
            // $('.share').share({sites: ['qzone', 'qq', 'weibo','wechat']});
        }
    }
    exports("articleNav", articleNav);
});
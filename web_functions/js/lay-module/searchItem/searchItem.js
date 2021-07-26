layui.define(['form'], function (exports) {
    var $ = layui.jquery,
        form = layui.form;

    var searchItem = {
        render: function () {
            $('.search-box').html(
                '<form class="layui-form layui-form-pane text-center" action="">'+
                    '<div class="layui-form-item">'+
                        '<div class="layui-inline">'+
                            '<label class="layui-form-label">关键字</label>'+
                            '<div class="layui-input-inline">'+
                            '   <input type="search" name="keyword" autocomplete="off" class="layui-input">'+
                            '</div>'+
                        '</div>'+
                        '<div class="layui-inline">'+
                            '<button type="submit" id="searchBtn" class="layui-btn layui-btn-primary" lay-submit lay-filter="data-search-btn"><i class="layui-icon"></i> 搜 索</button>'+
                        '</div>'+
                    '</div>'+
                '</form>'
            );
            //监听提交
            form.on('submit(data-search-btn)', function(data){
                const collapseDom = $('.layui-field-box .layui-collapse'),
                    keyword = data.field.keyword;
                for (var i = 0; i < collapseDom.length; i++) {
                    const itemDom = $(collapseDom[i].children);
                    let itemFlag = true;
                    for (var j = 0; j < itemDom.length; j++) {
                        const titleDom = itemDom[j];
                        if($($(titleDom.children)[0]).text().indexOf(keyword)>=0){
                            itemFlag = false;
                            $(titleDom).removeClass('layui-hide');
                        }else{
                            $(titleDom).addClass('layui-hide');
                        }
                    }
                    if(itemFlag){
                        $(collapseDom[i]).addClass('layui-hide');
                    }else{
                        $(collapseDom[i]).removeClass('layui-hide');
                    }
                }
                return false;
            });
        }
    }
    exports("searchItem", searchItem);
});
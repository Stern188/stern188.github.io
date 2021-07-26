layui.define([], function (exports) {
    var $ = layui.jquery;

    var dataTemp = {
        render: function (options) {
            $('.data-box').html(
                '<div class="site-demo-laytpl">'+
                    '<div class="text-center">'+
                        '<span>'+ 
                            options.title +
                        '</span>'+
                    '</div>'+
                    '<textarea class="site-demo-text" id="data">'+
                        JSON.stringify(options.data,null,2) +
                    '</textarea>'+
                ' </div>'
            );
        }
    }
    exports("dataTemp", dataTemp);
});
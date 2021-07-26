var data = [];

function copyText(index) {
    $(this).remove();
    var target = document.createElement("textarea");
    target.style.position = "absolute";
    target.style.left = "-9999px";
    target.style.top = "0";
    target.innerHTML = decodeURIComponent(JSON.stringify(data[index],null,2));
    document.body.appendChild(target);
    target.select(); // 选中文本
    document.execCommand("copy"); // 执行浏览器复制命令
    layer.msg("复制成功!使用Ctrl+C可以自由复制哦");
}

function titleClick(dom){
    $(dom).siblings().toggle("layui-show");
}

layui.define(['code'], function (exports) {
    var $ = layui.jquery,
        code = layui.code;

    var collapseItem = {
        async render(options) {
            var tempArr = [];
            for (let i = 0; i < options.length; i++) {
                await $.getJSON(options[i].url, function (res) {
                    if (res) {
                        data.push(res);
                        $('.dictionary').append(
                            '<div class="layui-collapse mr10" lay-filter="test">'+
                                '<div class="layui-colla-item">'+
                                    '<h2 class="layui-colla-title" onclick="titleClick(this)">'+ 
                                        options[i].title +
                                        '<i class="layui-icon layui-colla-icon"></i>'+
                                    '</h2>'+
                                    '<div class="layui-colla-content">'+
                                        '<pre class="layui-code" lay-title="JavaScript">'+
                                            JSON.stringify(res,null,2) +
                                        '</pre>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
                        );
                    }
                });
            }
            
            code();

            var codeDom = $('.layui-colla-content .layui-code .layui-code-h3');
            for (let i = 0; i < codeDom.length; i++) {
                $(codeDom[i]).append('<button onclick="copyText('+ i +')" style="background: #4caf50;border-radius: 5px;padding: 0px 10px;cursor: pointer;color: #fff;position:absolute;right:10px;top:10px">复制</button>')
            }
        }
    }
    exports("collapseItem", collapseItem);
});
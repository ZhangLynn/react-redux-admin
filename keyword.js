/**
 * Created by Lynn on 2017/8/27.
 */
(function($){
    var pluginsName="keyword",
        defaults={
            "data":[],
            "wrapId":"",
            "afterClick":null
        }
    function Keyword(element,options){
        this.element=element;
        this.setting= $.extend({},defaults,options);
        this.target=$("<div>").prop("id","main").appendTo($("#"+this.setting.wrapId));
        this.init();
    }
    Keyword.prototype={
        clicktime:0,
        init:function(){
            this.initSpan();
            this.selectBtn();
        },
        initSpan:function(){
            var that=this,
                target=this.target,
                setting=this.setting,
                element=this.element;
            $(element).click(function(){
                if(that.clicktime==0){
                    if(!Array.isArray(setting.data)){
                        console.error("所传入数据格式必须为数组");
                        return
                    }else if(setting.data.length==0){
                        console.error("没有数据");
                        return
                    }else{
                        var spanStr="<div class='sel-row clearfix'>";
                        $.each(setting.data,function(index,item){
                            var span="<span class='sel-item'>"+item+"</span>";
                            spanStr+=span;
                        })
                        spanStr+="</div>";
                        target.append(spanStr);
                    }
                    that.initBtn();
                    that.clicktime=1;
                }else{
                    target.html("");
                    that.clicktime=0;
                }
            });
        },
        initBtn:function(){
            var that=this,
                target=this.target,
                setting=this.setting;
            var btnwrap=$("<div>").addClass("btn-row clearfix").appendTo(target);
            var reset=$("<span>").addClass("small-btn").html("重置").appendTo(btnwrap);
            var comfirm=$("<span>").addClass("big-btn").html("完成").appendTo(btnwrap);
            reset.click(function(){
                $(".sel-item").each(function () {
                    $(this).removeClass("active")
                })
            });
            comfirm.click(function(){
                var arr = [];
                $(".sel-item.active").each(function () {
                    arr.push($(this).html())
                });
                if(arr.length==0){
                    alert("请至少选择一项关键字");
                    return
                }
                if(typeof setting.afterClick=='undefined'){
                    console.error("未指定回调函数");
                    return
                }
                setting.afterClick(arr);
                target.html("");
                that.clicktime=0;
            });
        },
        selectBtn:function(){
            this.target.on('click', '.sel-item', function () {
                $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
            });
        }
    }
    $.fn.keyword = function (options) {
        var keyword = new Keyword(this, options);
        return keyword;
    };
}(jQuery));
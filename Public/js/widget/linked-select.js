(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.linked_select = Widget;
    Widget.prototype = {
        init: function(dom){  //debug(1);
            var $dom = $(dom);
            var mOption = window[$dom.attr('data-linked-select-option')]();
            var type = mOption.type;
            //路由
            if(type == 'oneToMany'){ //debug('oneToMany');
                new window.widget.linked_select_otm(dom);
                return;
            }
            //
            var mUrl = mOption.url;
            var mTarget = mOption.link;
            $dom.on('change', function(){
                onChange(0, $dom.val());
            });
            //
            for(var i = 0, len = mTarget.length - 1; i < len; i++){
                var $mTarget = $(mTarget[i]);
                $mTarget.on('change', {index: i}, function(e){
                    onChange(e.data.index + 1, $(this).val());
                })
            }
            //
            function onChange(startIndex, val){
                if(val == ''){
                    for(var i = startIndex, len = mTarget.length; i < len; i++){
                        $(mTarget[i]).html('<option value="">请选择</option>');
                    }
                    return;
                }
                //
                for(var i = startIndex, len = mTarget.length; i < len; i++){
                    $(mTarget[i]).html('<option value="">加载中...</option>');
                }
                var url = mUrl;
                if(url.indexOf('?') == -1){
                    url += '?';
                }else{
                    url += '&';
                }
                url += $dom.attr('name') + '=' + $dom.val();
                for(var i = 0; i < startIndex; i++){
                    url += '&' + $(mTarget[i]).attr('name') + '=' + $(mTarget[i]).val();
                }
                //
                $.getJSON(url, function(data){
                    if(data.error){
                        return;
                    }
                    data = data.data;
                    var str = '';
                    for(var i = 0, len = data.length; i < len; i++){
                        str += '<option value="' + data[i].id + '">' + data[i].name + '</option>';
                    }
                    for(var i = startIndex, len = mTarget.length; i < len; i++){
                        if(i == startIndex){
                            $(mTarget[i]).html('<option value="">请选择</option>' + str);
                        }else{
                            $(mTarget[i]).html('<option value="">请选择</option>');
                        }
                    }
                })
            }
        }
    }

})();
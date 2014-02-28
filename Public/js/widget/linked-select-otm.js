(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.linked_select_otm = Widget;
    Widget.prototype = {
        init: function(dom){  //debug(1);
            var $dom = $(dom);
            var mOption = window[$dom.attr('data-linked-select-option')]();
            //
            var mUrl = mOption.url;
            var mTarget = mOption.link;
            $dom.on('change', function(){
                onChange($dom.val());
            });
            //
            function onChange(val){
                if(val == ''){
                    for(var i = 0, len = mTarget.length; i < len; i++){
                        $(mTarget[i]).html('<option value="">请选择</option>');
                    }
                    return;
                }
                //
                for(var i = 0, len = mTarget.length; i < len; i++){
                    $(mTarget[i]).html('<option value="">加载中...</option>');
                }
                var url = mUrl;
                if(url.indexOf('?') == -1){
                    url += '?';
                }else{
                    url += '&';
                }
                url += $dom.attr('name') + '=' + $dom.val();
                for(var i = 0; i < 0; i++){
                    url += '&' + $(mTarget[i]).attr('name') + '=' + $(mTarget[i]).val();
                }
                //
                $.getJSON(url, function(data){
                    if(data.error){
                        return;
                    }
                    data = data.data;   //debug(data); return;
                    for(var i = 0, len = data.length; i < len; i++){
                        var str = '';
                        for(var j = 0, lenj = data[i].length; j < lenj; j++){
                            str += '<option value="' + data[i][j].id + '">' + data[i][j].name + '</option>';
                        }
                        $(mTarget[i]).html('<option value="">请选择</option>' + str);
                    }
                })
            }
        }
    }

})();
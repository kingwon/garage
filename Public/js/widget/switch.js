(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.switch = Widget;
    Widget.prototype = {
        init: function(dom){  //debug(1);
            var $dom = $(dom);
            var mOption = window[$dom.attr('data-switch-option')]();  //debug(mOption);
            var mTarget = mOption.target;
            var mTrigger = mOption.trigger;
            var isForm = mOption.isForm;  //如果目标位于表单内，考虑到验证和提交的问题，不能单纯地隐藏处理
            //
            if($dom.is('select')){ //debug(true);
                $dom.on('change', function(){  //debug(1);
                    var selected = $dom.find('option:selected').html();
                    $dom.find('option').each(function(index){
                        if(selected == $(this).html()){
                            mOption.onSwitch && mOption.onSwitch({
                                index: index
                            });
                            show(index); //debug(index);
                        }
                    });
                })
            }else{
                for(var i = 0, len = mTrigger.length; i < len; i++){
                    $dom.find(mTrigger[i]).on('click', {index: i}, function(e){
                        mOption.onSwitch && mOption.onSwitch({
                            index: e.data.index
                        });
                        show(e.data.index);
                        //
                        for(var j = 0, len = mTrigger.length; j < len; j++){
                            if(j == e.data.index){
                                $dom.find(mTrigger[j]).addClass('switch-selected');
                            }else{
                                $dom.find(mTrigger[j]).removeClass('switch-selected');
                            }
                        }
                    })
                }
            }
            //特殊初始化
            if(isForm){
                if($dom.is('select')){
                    var selected = $dom.find('option:selected').html();
                    $dom.find('option').each(function(index){
                        if(selected == $(this).html()){
                            show(index);
                        }
                    });
                }else{
                    for(var i = 0, len = mTrigger.length; i < len; i++){  //debug($dom.find(mTrigger[i]));
                        if($dom.find(mTrigger[i]).hasClass('switch-selected')){
                            show(i);
                        }
                    }
                }
            }
            //
            function show(index){
                for(var i = 0, len = mTarget.length; i < len; i++){
                    if(i == index){
                        $(mTarget[i]).show();
                        if(isForm){
                            $(mTarget[i]).find('input, select, textarea').prop('disabled', false);
                        }
                    }else{
                        $(mTarget[i]).hide();
                        if(isForm){
                            $(mTarget[i]).find('input, select, textarea').prop('disabled', true);
                        }
                    }
                }
            }
        }
    }
})();
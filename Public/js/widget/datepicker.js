(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.datepicker = Widget;
    Widget.prototype = {
        init: function(dom){   //debug(1);
            var $dom = $(dom);
            var isValidation = false;
            if($dom.attr('data-error-container')){
                isValidation = true;
            }

            var option = {
                language: 'zh-CN',
                format: 'yyyy-mm-dd'
            };
            if($dom.attr('data-date-start')){
                option.startDate = $dom.attr('data-date-start');
            }
            $dom.datepicker(option).on('changeDate', function(e){
                    $dom.datepicker('hide');
                }).on('hide', function(){
                    if(isValidation){    //debug(1);
                        $dom.parsley('validate');
                    }
                });
        }
    }

})();
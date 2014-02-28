(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.send_sms = Widget;
    Widget.prototype = {
        init: function(dom){  //debug(1);
            var $dom = $(dom);
            var $select = $dom.find('.city select');
            var $result = $dom.find('.area td div');
            var mCheckboxName = $dom.attr('data-send-sms-checkbox-name');
            var mOnSelectChange = $dom.attr('data-send-sms-on-select-change');   mOnSelectChange && (mOnSelectChange = window[mOnSelectChange]);
            var checkboxValidateText = $dom.attr('data-send-sms-checkbox-validate-text');
            //
            $select.on('change', function(){
                var selected = $select.val();
                if(!selected){
                    $result.html('');
                    return;
                }

                $result.html('加载中...');
                var obj = {};
                obj.selectId = $select.val();
                obj.build = function(data){
                    var str = '';
                    var arr = data;

                    for(var i = 0, len = arr.length; i < len; i++){
                        if(i == 0){
                            str += '<label class="checkbox-inline">';
                            str += '<input type="checkbox" widget="check-all" data-required="true" data-error-container="#sendSmsCheckboxTip" data-required-message="' + checkboxValidateText +'" data-check-all-target=".w-check-all-1" value="' + arr[i].id +'" name="' + mCheckboxName + '">' + arr[i].name;
                            str += '<span class="error" id="sendSmsCheckboxTip"></span>'
                            str += '</label>';
                            str += '<div class="row">';
                            continue;
                        }
                        str += '<div class="col-md-3"><label class="checkbox-inline">';
                        str += '<input type="checkbox" class="w-check-all-1" value="' + arr[i].id +'" name="' + mCheckboxName + '">' + arr[i].name;
                        str += '</label></div>';
                    }
                    str += '</div>'
                    $result.html(str);
                    window.util.parse($result);
                };
                mOnSelectChange(obj);
            })
        }
    }
})();
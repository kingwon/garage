/*
*
*   demo/edit-ajax.php
* */
(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.ajax_save = Widget;
    Widget.prototype = {
        init: function(dom){     //debug(1);
            var $dom = $(dom);
            var mText = $dom.attr('data-ajax-save-text');  mText || (mText = '保存中...');
            var mOnCompleted = $dom.attr('data-ajax-save-oncompleted');  mOnCompleted && window[mOnCompleted] && (mOnCompleted = window[mOnCompleted]);
            var mOnStart = $dom.attr('data-ajax-save-onstart');
            var $modal;
            var mIsDoing = false;
            //
            $dom.on('submit', function(){
                //自定义阻止
                if(window[mOnStart] && window[mOnStart]() == false){     //debug('stop');
                    return false;
                }
                //验证
                var validation = $dom.data('validation');
                if(validation && !validation.isValid()){
                    return;
                }
                //
                mIsDoing = true;
                //
                if(!$modal){
                    $modal = $(html());
                    $('body').append($modal);
                    $modal.on('hide.bs.modal', function () {
                        return !mIsDoing;
                    });
                }
                //
                $.post($dom.attr('action'), $dom.serialize(), function(data){  //debug(data);
                    mIsDoing = false;
                    if(typeof data == 'string')  data = JSON.parse(data);
                    //data = JSON.parse(data);
                    $modal.modal('hide');
                    mOnCompleted && mOnCompleted({
                        json: data
                    });
                });
                $modal.modal('show');
                return false;
            });
            //
            function html(){
                var str = '';
                str += '<div class="modal fade">';
                str += ' <div class="modal-dialog">';
                str += '  <div class="modal-content">';
                str += '   <div class="modal-body">';
                str += '    <p>' + mText + '</p>';
                str += '   </div>';
                str += '  </div>';
                str += ' </div>';
                str += '</div>';
                return str;
            }
        }
    }

})();
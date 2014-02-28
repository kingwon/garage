(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.input_count = Widget;
    Widget.prototype = {
        init: function(dom){   //debug(1);
            var $dom = $(dom);
            var $target = $($dom.attr('data-input-count-target'));
            var mOnChange = $dom.attr('data-input-count-on-change'); mOnChange && (mOnChange = window[mOnChange]);
            //
            getCount();
            $dom.on('keyup', function(){
                getCount();
            })
            //
            function getCount(){
                var len = $dom.val().replace(/[^\x00-\xff]/g, "**").length;
                len = parseInt(len/2);
                var obj = {};
                obj.count = len;
                mOnChange && ($target.html(mOnChange(obj)));
            }
        }
    }

})();
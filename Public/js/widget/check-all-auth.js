/*
* 全选
* widget="check-all-auth"
* data-check-all-target="selector" - selector: w-check-all-x
*
* */
(function(){
    var Widget = function (dom) {
        this.init(dom);
    }
    window.widget.check_all_auth = Widget;
    Widget.prototype = {
        init: function (dom) {  //debug('1')
            var $dom = $(dom);
            var $children = $($dom.attr('data-check-all-target'));
            //
            $dom.on('change', function () { //debug('$dom change');
                $children.prop('checked', $dom.prop('checked'));
                $children.trigger('change');
            });

            $children.on('change', function () {    //debug('$children change');
                var isAllCheck = false;
                $children.each(function () {
                    if ($(this).prop('checked')) {
                        isAllCheck = true;
                        return;
                    }
                })
                $dom.prop('checked', isAllCheck);
            });
        }
    }

})();
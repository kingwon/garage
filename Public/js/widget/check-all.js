/*
* 全选
* widget="check-all"
* data-check-all-target="selector" - selector: w-check-all-x
*
* */
(function(){
    var Widget = function (dom) {
        this.init(dom);
    }
    window.widget.check_all = Widget;
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
                var isDomChecked = $dom.prop('checked');
                var isTargetChecked = $(this).prop('checked');
                if (isDomChecked && !isTargetChecked) {  //debug(1)
                    $dom.prop('checked', false);
                } else if(!isDomChecked && isTargetChecked) {   //debug(2)
                    var isAllCheck = true;
                    $children.each(function () {
                        if (!$(this).prop('checked')) {
                            isAllCheck = false;
                            return;
                        }
                    })
                    if (isAllCheck) {
                        $dom.prop('checked', true);
                    }
                }
            });
        }
    }

})();
/*
* 显示或隐藏
* widget="toggle"
* data-toggle-target="selector" - selector: w-toggle-x
*
* */
(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.toggle = Widget;
    Widget.prototype = {
        init: function(dom){
            var $dom = $(dom);
            var $target = $($dom.attr('data-toggle-target')); //debug($target);
            //
            update();
            $dom.on('click', function(){
                $target.toggle();
                update();
            });

            function update(){
                if($target.is(':visible')){
                    $dom.addClass('toggle-hide').removeClass('toggle-show');
                }else{
                    $dom.addClass('toggle-show').removeClass('toggle-hide');
                }
            }
        }
    }

})();
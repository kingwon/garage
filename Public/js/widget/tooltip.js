(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.tooltip = Widget;
    Widget.prototype = {
        init: function(dom){
            var $dom = $(dom);
            var title = $dom.attr('data-tooltip-title');
            var placement = $dom.attr('data-tooltip-position');
            var target = $dom.attr('data-tooltip-target');   //debug(selector);
            if(target){
                title = $(target).html();
            }
            $dom.tooltip({
                html: true,
                title: title,
                placement: placement
            })
        }
    }

})();
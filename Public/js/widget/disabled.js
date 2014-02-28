(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.disabled = Widget;
    Widget.prototype = {
        init: function(dom){
            var $dom = $(dom);
            var selector = $dom.attr('data-disabled-selector');
            $dom.find(selector).prop('disabled', true);
        }
    }

})();
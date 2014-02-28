(function(){
    var Widget = function(dom){
        this.init(dom);
    }

    Widget.prototype = {
        init: function(dom){
            var $dom = $(dom);
            $dom.on('click', function(){
                return confirm('确定要' + $dom.text() + '吗？');
            });
        }
    }
    window.widget.confirm = Widget;
})();
(function(window){
    window.widget = {};
    window.util = {};
    function parse($parent){
        $parent.find('[widget]').each(function(){
            var attrs = this.getAttribute('widget').replace(/-/g, '_')
            if(attrs.indexOf(' ') == -1){
                initWidget(this, attrs);
            }else{ //当widget的值含有多个组件
                attrs = attrs.split(' ');
                for(var i = 0, len = attrs.length; i < len; i++){
                    initWidget(this, attrs[i]);
                }
            }
        });
        //
        function initWidget(dom, name){    //console.log(dom, name);
            var Widget = window.widget[name]; //debug(Widget);
            if(Widget){
                new Widget(dom);
            }
        }
    }
    $(function(){
        parse($('body'));
    })
    //
    window.util.parse = function($dom){
        parse($dom);
    }
    //
    window.debug = function(msg){
        console.log(msg);
    }
})(window);
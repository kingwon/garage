(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.validation = Widget;
    Widget.prototype = {

        $dom: null,

        init: function(dom){
            var $dom = $(dom);
            this.$dom = $dom;
            $dom.data('validation', this); //主要是为了给ajax-save等判断验证情况
            $dom.parsley({
                'trigger':'change blur',
                excluded: 'input[type=file], :disabled'
            });
            $dom.find('input, select, textarea').on('blur', function(){
                $(this).parsley( 'validate' );
            });
            /*setTimeout(function(){
                $dom.parsley('isValid');
            }, 200);*/
        },

        isValid: function(){
            return this.$dom.parsley('isValid');
        },

        validate: function(){
            return this.$dom.parsley('validate');
        },

        parse: function(){
            this.$dom.parsley();
        },

        getDom: function(){
            return this.$dom;
        }
    }

})();
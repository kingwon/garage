(function(){
    var Widget = function(dom, option){
        this.init(dom, option);
    }
    window.widget.auto_complete = Widget;
    Widget.prototype = {

        $input: null,
        $hidden: null,
        mOption: null,
        data: [],

        init: function(dom, mOption){ //debug(1);
            var self = this;
            var $dom = $(dom);  $dom.css('position', 'relative');   //debug(!mOption);
            !mOption && (mOption = window[$dom.attr('data-auto-complete-option')]());
            this.mOption = mOption;
            var $input = this.$input = $dom.find('input[type="text"]');
            var $dropdown = $dom.find('.dropdown-menu');
            var $hidden = this.$hidden =  $dom.find('input[type="hidden"]');  //可选
            if($hidden.length > 0){
                $hidden = this.$hidden = $hidden.eq(0);
            }
            var key = '';
            var interval;            
            $(document).on('click', function(){
                $dom.removeClass('open');
            });
            $input.on('click', function(){
                interval = setInterval(function(){
                    var temp = $input.val().trim();
                    if(temp != key){ //console.log(1);
                        key = temp;
                        onKeyUp(key);
                    }
                }, 300);
            });
            $dropdown.on('click', 'a', function(){
                var $this = $(this);
                key = $this.text();
                $input.val(key);
                $hidden && $hidden.val($this.attr('vid'));
                $dom.removeClass('open');   //debug($this.html());
                mOption.onSelect && mOption.onSelect(self.data[$(this).attr('i')]);
                $dropdown.html('');
                return false;
            })
            //
            function onKeyUp(key){  //debug(key);
                if(key == ''){
                    $dropdown.html('');
                    $dom.removeClass('open');
                    return;
                }
                var url = mOption.url;
                if(url.indexOf('?') == -1){
                    url += '?';
                }else{
                    url += '&';
                }
                url += $input.attr('name') + '=' + key;
                $.getJSON(url, function(data){
                    if(data.error){
                        return;
                    }
                    data = data.data;
                    self.data = data;
                    //格式转换
                    if(mOption.entity){
                        for(var i = 0, len = data.length; i < len; i++){
                            data[i].id = data[i][mOption.entity.id];
                            data[i].name = data[i][mOption.entity.name];
                        }
                    }
                    //
                    var str = '';
                    var itemTpl = mOption.item;
                    for(var i = 0, len = data.length; i < len; i++){
                        if (itemTpl) {
                            if ($.isFunction(itemTpl)) {
                                str += itemTpl(data[i]);
                            } else {
                                str += _.template(itemTpl, data[i]);
                            }
                        } else {
                            str += '<li><a href="#" i="'+ i +'" vid="' + data[i].id + '">' + data[i].name + '</a></li>';
                        }
                    }
                    $dropdown.html(str);
                    $dom.addClass('open');
                });
            }
        },

        getOption: function(){
            return this.mOption;
        },

        get$input: function(){
            return this.$input;
        },

        get$hidden: function(){
            return this.$hidden;
        }
    }

})();
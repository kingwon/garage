(function(){
    var Widget = function(dom, option){
        this.init(dom, option);
    }
    window.widget.auto_complete_simple = Widget;
    Widget.prototype = {

        $input: null,
        mOption: null,

        init: function(dom, mOption){ //debug(1);
            var $dom = $(dom);  $dom.css('position', 'relative');   //debug(!mOption);
            !mOption && (mOption = window[$dom.attr('data-auto-complete-option')]());
            this.mOption = mOption;
            var $input = this.$input = $dom.find('input[type="text"]');
            var $dropdown = $dom.find('.dropdown-menu');
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
                $dropdown.html('');
                $dom.removeClass('open');
                mOption.onSelect && mOption.onSelect({
                    id: $this.attr('vid'),
                    name: $this.text()
                });
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
                    //
                    var str = '';
                    for(var i = 0, len = data.length; i < len; i++){
                        str += '<li><a href="#">' + data[i] + '</a></li>';
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
        }
    }

})();
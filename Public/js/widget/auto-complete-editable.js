(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.auto_complete_editable = Widget;
    Widget.prototype = {
        init: function(dom){ //debug(1);
            var $dom = $(dom);  $dom.css('position', 'relative');  $dom.addClass('auto-complete-editable');
            var mOption = window[$dom.attr('data-auto-complete-editable-option')]();
            var $list = $dom.find('[role="list"]');
            var mSelect = [];
            var itemTemp = htmlItem();
            //
            mOption.onSelect = function(obj){
                for(var i = 0, len = mSelect.length; i < len; i++){
                    if(mSelect[i] == obj.id){
                        alert('已经添加');
                        autoComplete.get$input().val('');
                        return;
                    }
                }
                mSelect.push(obj.id);
                autoComplete.get$input().val('');      debug(obj.name);
                $list.append(itemTemp.replace(/{#name#}/g, obj.name).replace(/{#id#}/g, obj.id));
            }
            var autoComplete = new window.widget.auto_complete(dom, mOption);
            //
            autoComplete.get$input().on('keydown', function(e){    //debug(e);
                if(e.keyCode == 13){    //debug(1);
                    return false;
                }
            })
            //
            if(mOption.default){
                for(var i = 0, len = mOption.default.length; i < len; i++){
                    mSelect.push(mOption.default[i].id);
                    $list.append(itemTemp.replace(/{#name#}/g, mOption.default[i].name).replace(/{#id#}/g, mOption.default[i].id));
                }
            }
            //
            $list.on('click', '.delete', function(){
                var r = confirm('确定删除吗');
                if(!r){
                    return false;
                }
                var $this = $(this);
                var id = $this.attr('vid');
                $(this).parent().remove();
                for(var i = 0, len = mSelect.length; i < len; i++){
                    if(mSelect[i] == id){
                        mSelect[i] = undefined;
                    }
                }
                return false;
            })
            //
            function htmlItem(){
                var str = '';
                str += '<div class="item">{#name#}';
                str += '<button class="btn btn-danger btn-xs delete" vid="{#id#}">X</button>';
                str += '<input type="hidden" name="' +  (mOption.inputName || 'arr') + '[]" value="{#id#}"></div>';
                return str;
            }
        }
    }

})();
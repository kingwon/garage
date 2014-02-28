(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.city_mgr = Widget;
    Widget.prototype = {
        init: function(dom){  //debug('city-mgr');
            var $dom = $(dom);
            var mOnCitySave = $dom.attr('data-city-mgr-onAreaSave'); mOnCitySave && (mOnCitySave = window[mOnCitySave]);
            var mOnAreaSave = $dom.attr('data-city-mgr-onAreaSave'); mOnAreaSave && (mOnAreaSave = window[mOnAreaSave]);
            var mOnAreaDelete = $dom.attr('data-city-mgr-onAreaDelete'); mOnAreaDelete && (mOnAreaDelete = window[mOnAreaDelete]);
            //
            function getParams($dom){
                var param = {};  //参数
                $dom.find('input').each(function(){
                    var $this = $(this);
                    param[$this.attr('name')] = $this.val();
                });
                return param;
            }
            //
            function initAreaOnSave($dom, cityId){
                var entity = $dom.data('toggle-edit');
                entity.set({
                    onSave: function(obj){
                        obj.params['cityId'] = cityId;
                        var onfinish = obj.onFinish;
                        obj.onFinish = function(){
                            onfinish();
                            $dom.find('.city-mgr-delete').show();
                        }
                        mOnAreaSave(obj);
                    }
                })
            }
            function initSwitchText($dom){
                var isAllDenied = true;
                $dom.find('.sec-switch').each(function(){
                    var $this = $(this);
                    var $text = $this.find('.sec-text-value');
                    if($text.text().indexOf('启') != -1){
                        isAllDenied = false;
                        $text.addClass('text-success').removeClass('text-danger');
                    }else{
                        $text.addClass('text-danger').removeClass('text-success');
                    }
                })
                return isAllDenied;
            }
            //
            setTimeout(function(){
                $dom.find('.sec-children [widget="toggle-edit"]').each(function(){
                    initAreaOnSave($(this));
                });
                $dom.find('.sec-parent').each(function(){   //debug(1)
                    var $this = $(this);
                    var isAllDenied = initSwitchText($this);
                    isAllDenied && ($this.find('.city-mgr-delete').show());
                    $this.data('toggle-edit').set({
                        onSave: function(obj){
                            var onfinish = obj.onFinish;
                            obj.onFinish = function(){
                                onfinish();
                                isAllDenied = initSwitchText($this); //debug(isAllDenied);
                                isAllDenied && ($this.find('.city-mgr-delete').show());
                            }
                            mOnCitySave(obj);
                        }
                    });
                    //保存地图
                    var mapValue;
                    $this.find('.sec-btn-edit').on('click', function(){
                        mapValue = $($this.find('[widget="map-v2"]').attr('data-map-input')).val();     //debug(mapValue)
                    });
                    $this.find('.sec-btn-cancel').on('click', function(){   //debug('')
                        $($this.find('[widget="map-v2"]').attr('data-map-input')).val(mapValue);
                    });
                })
                $dom.find('.sec-parent [widget="toggle"]').on('click', function(){
                    var $target = $($(this).attr('data-toggle-target'));
                    if(!$target.is(':visible')){
                        $target.find('.sec-btn-cancel').each(function(){
                            var $this = $(this);
                            if($this.css('display') != 'none'){   //debug($this);
                                $this.trigger('click');
                            }
                        })
                    }
                });
            }, 300);
            //
            $dom.find('.sec-children-add-btn').on('click', function(){
                var cityId = $(this).attr('parentId');
                var $parent = $(this);
                while(!$parent.is('td')){
                    $parent = $parent.parent();
                }
                var $add = $parent.find('.sec-children-add');
                var $copy = $('#modal-child').children().clone();
                $add.append($copy);
                $copy.wrap('<span></span>');
                window.util.parse($copy.parent());
                $copy.find('.sec-btn-edit').trigger('click');
                initAreaOnSave($copy, cityId);
                //
                $copy.find('.sec-btn-cancel').on('click', function(){
                    var isEmpty = true;
                    $copy.find('.sec-text-value').each(function(){
                        if($(this).html()){
                            isEmpty = false;
                            return;
                        }
                    });
                    if(isEmpty){
                        $copy.remove();
                    };
                })
            });
            //
            $dom.on('click', '.sec-btn-edit', function(){
                $(this).parent().find('.city-mgr-delete').hide();
            });
            $dom.on('click', '.sec-children .sec-btn-cancel', function(){
                $(this).parent().find('.city-mgr-delete').show();
            });
            $dom.on('click', '.sec-parent .sec-btn-cancel', function(){
                var $parent = $(this);
                while(!$parent.is('tr')){
                    $parent = $parent.parent();
                }
                var isAllDenied = initSwitchText($parent);  //debug(isAllDenied);
                isAllDenied && ($parent.find('.city-mgr-delete').show());
            });
            //
            $dom.on('click', '.sec-children .city-mgr-delete', function(){
                var result = confirm('确定要删除吗？');
                if(!result){
                    return;
                }
                var $parent = $(this);
                while(!$parent.is('[widget="toggle-edit"]')){
                    $parent = $parent.parent();
                }
                window.util.modal({
                    id: 'city-mgr-delete',
                    body: '删除中...',
                    async: function(hide){
                        var obj = {};
                        obj.params = getParams($dom);
                        obj.onError = hide;
                        obj.onFinish = function(){
                            $parent.remove();
                            hide();
                        }
                        mOnAreaDelete(obj);
                    }
                });
            });
            //

        }
    }

})();
(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.toggle_edit = Widget;
    Widget.prototype = {

        $btnCancel: null,
        $btnEdit: null,
        onSaveStart: null,
        onSave: null,
        onSaveFinish: null,

        init: function(dom){
            var self = this;
            var $dom = $(dom); $dom.data('toggle-edit', this);
            var $btnEdit = this.$btnEdit = $dom.find('.sec-btn-edit');
            var $btnSave = $dom.find('.sec-btn-save');
            var $btnCancel = this.$btnCancel = $dom.find('.sec-btn-cancel');
            var $items = $dom.find('.sec-item');
            var mIsEditable = false;
            this.onSave = window[$dom.attr('data-toggle-edit-onsave')];
            //
            $btnEdit.on('click', function(){
                mIsEditable = !mIsEditable;
                $btnEdit.hide();
                $btnSave.show();
                $btnCancel.show();
                $items.each(function(){
                    var $this = $(this);
                    $this.find('.sec-text').hide();
                    $this.find('.sec-edit').show();
                    var $textValue = $this.find('.sec-text-value');
                    var $editInput = $this.find('.sec-edit-value');  $editInput.removeClass('invalid');
                    //
                    if($editInput.is('[type="text"]')){
                        $editInput.val($textValue.text());
                    }else if($editInput.is('select')){
                        var value = $textValue.attr('value');
                        $editInput.find('option').each(function(){
                            var $thisOption = $(this);
                            if($thisOption.attr('value') == value){
                                $editInput.val($thisOption.val());
                            }
                        });
                    }
                });
            });
            //
            $btnSave.on('click', function(){
                if(self.onSaveStart && self.onSaveStart() == false){
                    return false;
                }
                //验证
                var isValid = true;
                $dom.find('.validate').each(function(){
                    var v = $(this).parsley('validate');
                    if(!v){
                        isValid = false;
                    }
                });   //debug(isValid)
                if(!isValid){
                    return false;
                }   //debug(1)
                //
                window.util.modal({
                    id: 'toggle-edit-save',
                    body: '保存中...',
                    async: function(hide){
                        if(self.onSave){
                            function onfinish(){
                                mIsEditable = !mIsEditable;
                                $btnEdit.show();
                                $btnSave.hide();
                                $btnCancel.hide();
                                $items.each(function(){
                                    var $this = $(this);
                                    $this.find('.sec-text').show();
                                    $this.find('.sec-edit').hide();
                                    var $textValue = $this.find('.sec-text-value');
                                    var $editInput = $this.find('.sec-edit-value');
                                    if($editInput.is('[type="text"]')){
                                        $textValue.text($editInput.val());
                                    }else if($editInput.is('select')){
                                        $textValue.text($editInput.find('option:selected').text());
                                        $textValue.attr('value', $editInput.val());
                                    }
                                });
                                hide();
                            };
                            function getParams(){
                                var param = {};  //参数
                                $dom.find('input, select').each(function(){
                                    var $this = $(this);
                                    param[$this.attr('name')] = $this.val();
                                });
                                return param;
                            }
                            var obj = {};
                            obj.params = getParams(); //debug(1)
                            obj.$dom = $dom;
                            obj.onFinish = onfinish;
                            obj.onError = hide;
                            self.onSave(obj);
                        }else{
                            hide();
                        }
                    }
                })
            });
            //
            $btnCancel.on('click', function(){
                mIsEditable = !mIsEditable;
                $btnEdit.show();
                $btnSave.hide();
                $btnCancel.hide();
                $items.each(function(){
                    var $this = $(this);
                    $this.find('.sec-text').show();
                    $this.find('.sec-edit').hide();
                });
            })
        },

        set: function(option){
            option.onSaveStart && (this.onSaveStart = option.onSaveStart);
            option.onSave && (this.onSave = option.onSave);
            option.onSaveFinish && (this.onSaveFinish = option.onSaveFinish);
        },

        onClickCancel: function(){
            this.$btnCancel.trigger('click');
        },

        getBtnEdit: function(){
            return this.$btnEdit;
        },

        getBtnCancel: function(){
            return this.$btnCancel;
        }
    }

})();
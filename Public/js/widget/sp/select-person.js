(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.select_person = Widget;
    Widget.prototype = {
        init: function(dom){
            var $dom = $(dom);
            var $modal = $dom;
            var $trigger = $($dom.attr('data-select-person-trigger'));
            var mOnCompleted = $dom.attr('data-select-person-oncompleted');
            //
            var $selected = $dom.find('.sec-list-selected');
            var $list = $dom.find('.sec-list');
            var $form = $dom.find('form');
            var $pagination = $dom.find('.pagination');
            var $paginationInput = $dom.find('.sec-pagination-input');
            var $btnSave = $dom.find('.select-person-confirm');
            var mSelected = {}, mSelectedTemp = {};
            var mSelectedArr = [];
            var mUrl = $form.attr('action');
            var mPageCurrent, mPageTotal;
            //
            $trigger.on('click', function(){
                mPageCurrent = 1;
                $paginationInput.val(mPageCurrent);
                mSelectedTemp = $.extend({}, mSelected); //debug(mSelectedTemp);
                updateSelected();
                $modal.modal();
                getJSON();
                return false;
            });
            //
            $selected.on('click', 'button', function(){
                var $this = $(this);
                var data = $this.data('data');
                //$chosen
                $this.remove();
                mSelectedTemp[data.id] = null;
                //$list
                $list.find('[cid="' + data.id + '"]').removeClass('btn-info').addClass('btn-default');
            });
            //
            $list.on('click', 'button', function(){ //debug($(this).data('data'));
                var $this = $(this);
                var data = $this.data('data');
                //$list
                if($this.hasClass('btn-info')){
                    $this.removeClass('btn-info').addClass('btn-default');
                }else{
                    $this.removeClass('btn-default').addClass('btn-info');
                }
                //$chonse
                if(mSelectedTemp[data.id]){
                    mSelectedTemp[data.id] = null;
                    $selected.find('[cid="' + data.id + '"]').remove();
                    return;
                }
                mSelectedTemp[data.id] = data;
                var $btn = $('<button type="button" class="btn btn-primary col-md-4" cid="' + data.id + '">' + data.name + '</button>');
                $btn.data('data', data);
                $selected.append($btn);
            });
            //
            $form.on('submit', function(){
                getJSON();
                return false;
            });
            //
            $form.find('[type="submit"]').on('click', function(){
                mPageCurrent = 1;
                $paginationInput.val(mPageCurrent);
            });
            //
            $btnSave.on('click', function(){
                var datas = [];
                $selected.children().each(function(){
                    var data = $(this).data('data');
                    datas.push(data);
                });
                $dom.modal('hide');
                mSelected = $.extend({}, mSelectedTemp);
                mSelectedArr = [].concat(datas);
                window[mOnCompleted]({
                    selected: datas
                });
            });
            //
            $pagination.on('click', 'a', function(){
                var page = parseInt($(this).attr('value'));
                if(page == 0){
                    mPageCurrent--;
                }else if(page == -1){
                    mPageCurrent++;
                }else{
                    mPageCurrent = page;
                }                                       //debug(mPageCurrent);
                $paginationInput.val(mPageCurrent);
                $form.submit();
            });
            //
            function getUrl(){
                var str = mUrl;
                if(str.indexOf('?') == -1){
                    str += '?';
                }
                str += $form.serialize();    //debug(str);
                return str;
            }
            //
            function getJSON(){
                $list.empty();
                $list.append('<h3>数据加载中...</h3>');
                $pagination.empty();
                $.getJSON(getUrl(), function(data){
                    if(data && !data['error']){
                        var datas = data.data; //debug(datas);
                        data.pageTotal = data['pageTotal'];
                        for(var i = 0, length = datas.length; i < length; i++){
                            datas[i].id = datas[i]['id'];
                            datas[i].name = datas[i]['name'];
                        }
                        //
                        updatePagination(data.pageTotal);
                        //
                        $list.empty();
                        for(var i = 0, length = datas.length; i < length; i++){
                            var $btn;
                            if(mSelectedTemp[datas[i].id]){
                                $btn = $('<button type="button" class="btn btn-info col-md-4" cid="' + datas[i].id + '">' + datas[i].name + '</button>');
                            }else{
                                $btn = $('<button type="button" class="btn btn-default col-md-4" cid="' + datas[i].id + '">' + datas[i].name + '</button>');
                            }
                            $btn.data('data', datas[i]);
                            $list.append($btn);
                        }
                    }
                });
            }
            //
            function updateSelected(){
                $selected.empty();
                var $btn;
                for(var i = 0, len = mSelectedArr.length; i < len; i++){
                    $btn = $('<button type="button" class="btn btn-primary col-md-4" cid="' + mSelectedArr[i].id + '">' + mSelectedArr[i].name + '</button>');
                    $btn.data('data', mSelectedArr[i]);
                    $selected.append($btn);
                }
            }
            //
            function updatePagination(pageTotal){
                mPageTotal = pageTotal;
                var str = '';
                var pageStart = mPageCurrent - 2;
                if(pageStart < 1) pageStart = 1;
                var pageEnd = mPageCurrent + 2;
                if(pageEnd > pageTotal) pageEnd = pageTotal;  //debug(mPageCurrent);
                var template = '<li><a href="javascript:;" value="{#pageValue#}">{#page#}</a></li>';
                var templateDisabled = '<li class="disabled"><span>{#page#}</span></li>';
                var templateActive = '<li class="active"><span>{#page#}</span></li>';
                var templateSep = '<li><span>...</span></li>'
                for(var i = pageStart; i <= pageEnd; i++){
                    if(i == mPageCurrent){
                        str += templateActive.replace('{#page#}', i);
                    }else{
                        str += template.replace('{#page#}', i).replace('{#pageValue#}', i);
                    }
                }
                //
                if(pageStart > 2){
                    str = templateSep + str;
                }
                if(pageStart != 1){
                    str = template.replace('{#page#}', 1).replace('{#pageValue#}', 1) + str;
                }
                //
                if(mPageCurrent == 1){
                    str = templateDisabled.replace('{#page#}', '上一页') + str;
                }else{
                    str = template.replace('{#page#}', '上一页').replace('{#pageValue#}', 0) + str;
                }
                //
                if(pageEnd < pageTotal - 1){
                    str += templateSep;
                }
                if(pageEnd != pageTotal){
                    str += template.replace('{#page#}', pageTotal).replace('{#pageValue#}', pageTotal);
                }
                //
                if(mPageCurrent == pageTotal){
                    str += templateDisabled.replace('{#page#}', '下一页');
                }else{
                    str += template.replace('{#page#}', '下一页').replace('{#pageValue#}', -1);
                }
                //
                $pagination.html(str);
            }
        }
    }

})();
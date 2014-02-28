(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.pagination = Widget;
    Widget.prototype = {
        init: function(dom){    //debug('pagination');
            var $dom = $(dom);
            var mOnChange = $dom.attr('data-pagination-onchange');
            var mPageTotal = $dom.attr('data-pagination-total');
            var mPageCurrent = parseInt($dom.attr('data-pagination-current'));
            var PAGE_PRE = 0, PAGE_NEXT = -1;
            updatePagination();

            $dom.on('click', 'a', function(){
                var value = parseInt($(this).attr('value'));
                switch(value){
                    case PAGE_PRE: mPageCurrent--; break;
                    case PAGE_NEXT: mPageCurrent++; break;
                    default: mPageCurrent = value;
                }                                     //debug(mPageCurrent);
                //debug(mPageCurrent);
                updatePagination();
                window[mOnChange] && window[mOnChange]({
                    page: mPageCurrent
                });
            });

            function updatePagination(){
                var pageTotal = mPageTotal;
                var str = '';
                var pageStart = mPageCurrent - 2;
                if(pageStart < 1) pageStart = 1;
                var pageEnd = mPageCurrent + 2;
                if(pageEnd > pageTotal) pageEnd = pageTotal;  //debug(mPageCurrent);
                var template = '<li><a href="javascript:;" value="{#pageValue#}">{#page#}</a></li>';
                var templateDisabled = '<li class="disabled"><span>{#page#}</span></li>';
                var templateActive = '<li class="active"><span>{#page#}</span></li>';
                var templateSep = '<li><span>...</span></li>';
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
                str = '<ul class="pagination">' + str + '</ul>';
                $dom.html(str);
            }
        }
    }

})();
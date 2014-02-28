(function(){
    var id = 123456789;
    window.util.modal = function(obj){
        obj.id || (obj.id = id++);
        //
        var $modal = $('.util-modal-' + obj.id);
        if($modal.length == 0){
            $modal = $(html());
            $modal.addClass('util-modal-' + obj.id);
            $('body').append($modal);
        }
        $modal.modal('show');
        //
        if(obj.async){
            var mIsDoing = true;
            $modal.on('hide.bs.modal', function () {
                return !mIsDoing;
            });
            obj.async(function(){
                mIsDoing = false;
                $modal.modal('hide');
            });
        }
        //
        function html(){
            var str = '';
            str += '<div class="modal fade">';
            str += ' <div class="modal-dialog">';
            str += '  <div class="modal-content">';
            if(obj.title){
                str += '   <div class="modal-header">';
                str += '    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
                str += '    <h4 class="modal-title">' + obj.title + '</h4>'
                str += '   </div>';
            }
            str += '   <div class="modal-body"><p>' + obj.body + '</p></div>';
            if(!obj.async){
                str += '   <div class="modal-footer">';
                str += '    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>';
                str += '   </div>';
            }
            str += '  </div>';
            str += ' </div>';
            str += '</div>';
            return str;
        }
    }
})();
(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.map = Widget;
    Widget.prototype = {
        init: function(dom){
            var $dom = $(dom);
            var $modal;
            var mOnStart = $dom.attr('data-map-onstart');    //可选
            var mOnCompleted = $dom.attr('data-map-oncompleted');  //必须
            var $mapBody;
            var $btnConfrim;
            var mLat, mLng;
            var mMap, mMarker;
            //
            $dom.on('click', function(){
                window[mOnStart] && window[mOnStart](option);
                if(!$modal){
                    $modal = $(html());
                    $('body').append($modal);
                    $mapBody = $modal.find('.modal-body');
                    $btnConfrim = $modal.find('.map-confirm');
                    $btnConfrim.on('click', function(){
                        $modal.modal('hide');
                        var position = mMarker.getPosition();
                        var zoom = mMap.getZoom();
                        var lat = position.lat;
                        var lng = position.lng;
                        window[mOnCompleted] && window[mOnCompleted]({
                            lat: lat,
                            lng: lng
                        });
                    })
                }
                $modal.modal('show');
                setTimeout(function(){
                    initMap();
                }, 500);
                return false;
            });
            //
            function initMap(){
                if (typeof BMap == 'undefined') {
                    throw new Error('亲，得先加载百度地图API');
                } else {
                    init();
                }
                function init() {
                    /*if(!mLat){
                        mLat = '22.547819';
                        mLng = '113.939507'
                    }*/
                    //加载百度地图
                    var point = new BMap.Point(mLng, mLat);
                    mMarker = new BMap.Marker(point); // 创建标注
                    mMap = new BMap.Map($mapBody[0]);
                    mMap.addControl(new BMap.NavigationControl());
                    mMap.addControl(new BMap.OverviewMapControl());
                    mMap.centerAndZoom(point, 13);
                    mMap.addOverlay(mMarker); // 将标注添加到地图中
                    mMap.addEventListener("click", function(e) {
                        mMarker.setPosition(e.point);
                    });
                    mMarker.enableDragging();
                    mMap.enableScrollWheelZoom();
                }
            };
            //
            function option(obj){
                obj.lat && (mLat = obj.lat);
                obj.lng && (mLng = obj.lng);
            }
            //
            function html(){
                var str = ''
                str += '<div class="map modal fade">';
                str += ' <div class="modal-dialog" style="width: 800px;">';
                str += '  <div class="modal-content">';
                str += '   <div class="modal-header">';
                str += '    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
                str += '    <h4 class="modal-title">地图标注</h4>';
                str += '   </div>';
                str += '   <div class="modal-body" style="height: 400px;"></div>';
                str += '   <div class="modal-footer">';
                str += '    <button type="button" class="btn btn-primary map-confirm">确定</button>';
                str += '    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>';
                str += '   </div>';
                str += '  </div>';
                str += ' </div>';
                str += '</div>';
                return str;
            }
        }
    }

})();
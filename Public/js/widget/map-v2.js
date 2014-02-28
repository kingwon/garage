(function(){
    var Widget = function(dom){
        this.init(dom);
    }
    window.widget.map_v2 = Widget;
    Widget.prototype = {
        init: function(dom){
            var $dom = $(dom);
            var $modal;
            var $input = $($dom.attr('data-map-input'));
            var mLat = $dom.attr('data-map-lat');
            var mLng = $dom.attr('data-map-lng');
            var mZoom = $dom.attr('data-map-zoom'); mZoom || (mZoom = 13);
            var mOnMapCompleted = $dom.attr('data-map-on-completed'); mOnMapCompleted && (mOnMapCompleted = window[mOnMapCompleted]);
            var $mapBody;
            var $btnConfrim;
            var mMap, mMarker;
            //
            if($input && mLat){
                $input.val(mLat + ',' + mLng + ',' + mZoom);
            }
            $dom.on('click', function(){
                mLat = $dom.attr('data-map-lat');
                mLng = $dom.attr('data-map-lng');
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
                        //
                        mLat = lat; mLng = lng; mZoom = zoom;
                        $input && $input.val(lat + ',' + lng + ',' + zoom);
                        mOnMapCompleted && mOnMapCompleted({
                            lat: lat,
                            lng: lng,
                            zoom: zoom
                        })
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
                    if($input.length && $input.val().indexOf(',') != -1){
                        var arr = $input.val().split(','); //console.log(arr);
                        mLat = arr[0];
                        mLng = arr[1];
                        mZoom = arr[2];
                    }
                    //加载百度地图
                    var point;
                    if(mLng){    //debug(mLng)
                        point = new BMap.Point(mLng, mLat);
                    }else{               //debug(2)
                        point = new BMap.Point('113.939507', '22.547819');
                    }
                    mMarker = new BMap.Marker(point); // 创建标注
                    mMap = new BMap.Map($mapBody[0]);
                    mMap.addControl(new BMap.NavigationControl());
                    mMap.addControl(new BMap.OverviewMapControl());
                    mMap.centerAndZoom(point, mZoom);
                    mMap.addOverlay(mMarker); // 将标注添加到地图中
                    mMap.addEventListener("click", function(e) {
                        mMarker.setPosition(e.point);
                    });
                    mMarker.enableDragging();
                    mMap.enableScrollWheelZoom();
                }
            };
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
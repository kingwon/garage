(function(){
    window.util.parsley = {};
    window.util.parsley.remove = function($dom, arr){
        try{
            for(var i = 0, len = arr.length; i < len; i++){   //debug(arr[i]);
                $dom.parsley('removeItem', '#' + arr[i] );
            }
        }catch(e){

        }
    };
    window.util.parsley.add = function($dom, arr){
        try{
            for(var i = 0, len = arr.length; i < len; i++){   //debug(arr[i]);
                $dom.parsley('addItem', '#' + arr[i] );
            }
        }catch(e){

        }
    }
})();
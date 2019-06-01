$(function(){


// アーカイブ　モーダル





$(document).on('click', function(e) {
    // ２．クリックされた場所の判定
    if(!$(e.target).closest('.modal').length && !$(e.target).closest('#button').length){
        $('.modal').fadeOut();
    }else if($(e.target).closest('click-action').length){
        // ３．ポップアップの表示状態の判定
        if($('.modal').is(':hidden')){
            $('.modal').fadeIn();
        }else{
            $('.modal').fadeOut();
        }
    }
});

//１．クリックイベントの設定
$(document).on('click', function(e) {
    // ２．クリックされた場所の判定
    if(!$(e.target).closest('.modal').length && !$(e.target).closest('.click-action').length){
        $('.modal').fadeOut();
    }else if($(e.target).closest('.click-action').length){
        // ３．ポップアップの表示状態の判定
        if($('.modal').is(':hidden')){
            $('.modal').fadeIn();
        }else{
            $('.modal').fadeOut();
        }
    }
});

});

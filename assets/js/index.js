$(window).click(function() {
    $('.trigger_popup').click(function(){
       $('.hover_bkgr').show();
    });
  
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr').hide();
    });
});
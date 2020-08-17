
$(window).click(function() {
    $('.popup').click(function(){
       $('.box').show();
    });
  
    $('.popupCloseButton').click(function(){
        $('.box').hide();
    });
});


$("#volume").click(function () {
        volumeOff();
    });

    function volumeOff() {
        $("#volume").addClass("hide-button");
        $("#mute").removeClass("hide-button");
        $("audio").prop("muted", true);
    }

    $("#mute").click(function () {
        volumeOn();
    });

    function volumeOn() {
        $("#volume").removeClass("hide-button");
        $("#mute").addClass("hide-button");
        $("audio").prop("muted", false);
    }









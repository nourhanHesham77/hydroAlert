
// $(window).scroll(function() {
//     var scrollTop = $(window).scrollTop();
//     var myVideo = $('#myVideo').height();
//     var newRadius = (scrollTop / myVideo) * 8;
//     $('#myVideo').css('border-radius', newRadius + '%');
//   });
;
$(document).ready(function(){
    $("#builtInDiet").click(function(){
    
    
    if($('#builtInContent').is(':visible'))
{
    $("#builtInContent").slideToggle("slow");
    $("#myVideo").trigger('pause');

}else{
    $("#builtInContent").slideToggle("slow");
    $("#myVideo").trigger('play');

}

    });
});

// var btnWatch = document.getElementById("builtInDiet");

// btnWatch.onclick = function(){
//     var video = document.getElementById("myVideo");
//     video.play();
// }


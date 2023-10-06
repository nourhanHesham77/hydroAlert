
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

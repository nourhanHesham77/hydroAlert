$(document).ready(function(){
    $("#builtInDiet").click(function(){
    $("#builtInContent").slideToggle("slow");
    });
});


var bepage = document.getElementsByClassName("fa-arrow-left");
var afpage = document.getElementById("next");
var slide = document.querySelector('#slide');
var index = 1;
console.log("wolaa");
afpage.onclick = function(){
    console.log("hello");
    var translateXValue = index * -866;
    index++;
    if(index<=6){
        afpage.disabled = true;
    }
    slide.style.transform = 'translateX(' + translateXValue + 'px)';
}
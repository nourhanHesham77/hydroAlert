
///WATERCYLCE PAGE ///
var btns = document.querySelectorAll('.btnu');
var slide = document.querySelector('#slide');
var slidecol = document.getElementsByClassName('slide-col');
var mainC = document.getElementsByClassName('main');
var speak = document.getElementsByClassName('speak');
var currentIndex = 0;
var intervalId;

// Function to show a specific slide
function showSlide(index) {
  btns.forEach(function (btn) {
    btn.classList.remove('active');
  });


  btns[index].classList.add('active');

  var translateXValue = index * -675;

  slide.style.transform = 'translateX(' + translateXValue + 'px)';

  // Define an array of background colors
  var backgroundColors = ["#91ceff", "#1f3c88", "#5893d4","#2aa9d2", "#1874c3"];
  // Set the background color based on the current index
  mainC[0].style.backgroundColor = backgroundColors[index];
}

function startAutoSlide() {
  intervalId = setInterval(function () {
    currentIndex++;
    if (currentIndex >= btns.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }, 4000); 
}


function stopAutoSlide() {
  clearInterval(intervalId);
}

btns.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    showSlide(index);
    stopAutoSlide(); 
  });
});

for(let x=0;x<slidecol.length;x++){
  slidecol[x].addEventListener("mouseover",()=>{
    stopAutoSlide(); 
})
slidecol[x].addEventListener("mouseout",()=>{
startAutoSlide();
})
}

startAutoSlide();






let speaking = false;

// const selectTag = document.querySelectorAll("select");



// selectTag.forEach((tag, id) => {
// 	for(const country_code in countries){
		
// 		let option = '<option  value=' +country_code+'>' +countries[country_code]+'</option>';
// 		tag.insertAdjacentHTML("beforeend",option);
// 	}
// })

$('.speak').click(function() {

    var $content = $(this).closest('div').find('p').text();
    var $lang = $(this).closest('div').find('.language-selector').val();
   
    if (!speaking){
        // this.style.color = "#000";
        this.classList.remove("fa-play");
        this.classList.add("fa-pause");

    function speak(text, rate, pitch, volume) {
      let speakData = new SpeechSynthesisUtterance();
      speakData.volume = volume; // From 0 to 1
      speakData.rate = 0.9; // From 0.1 to 10
      speakData.pitch = 1; // From 0 to 2
      speakData.text = text;
      speakData.lang = "en";

        speechSynthesis.speak(speakData);
        speaking = true;
    }
    
    if ('speechSynthesis' in window) {
      let rate = 1, pitch = 2, volume = 1;
      let text = $content;
  //     let newt;
  //     let translateto = selectTag[0].value;
  //     let apiUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + translateto + "&dt=t&q=" + encodeURI(text);
	// fetch(apiUrl).then (response => response.json()).then(data => {
	// 	console.log(data[0][0][0]);
	// 	 newt = data[0][0][0];
  //    speak(newt, rate, pitch, volume,translateto);
  // });
  
      speak(text, rate, pitch, volume);
      speaking = true; 
  
    } else {
      console.log('Speech Synthesis Not Supported 😞');
    }
  }else{
    speechSynthesis.cancel();
    speaking = false; 
    this.classList.remove("fa-pause");
    this.classList.add("fa-play");
  }
  });




//     function getTransText(content,lang){
//       var $content = content;
//       var $lang =lang;
//       console.log($lang);
    

// $("#result").load("https://www.reverso.net/text-translation#sl=eng&tl="+$lang+"&text="+$content+"%250A .outputText");

// console.log($("#result").html());
// return $("#result").html();

//     }

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var mainHeight = $('.main').height();
  var newRadius = (scrollTop / mainHeight) * 80;
  $('.main').css('border-radius', newRadius + '%');
});
 

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var myVideo = $('#myVideo').height();
  var newRadius = (scrollTop / myVideo) * 8;
  $('#myVideo').css('border-radius', newRadius + '%');
});
 

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
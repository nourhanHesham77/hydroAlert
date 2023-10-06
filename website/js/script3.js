
// TEMP. ACTIVITY
    const earthImages = [
        document.getElementById("earth1"),
        document.getElementById("earth2"),
        document.getElementById("earth3"),
        document.getElementById("earth4"),
        document.getElementById("earth5")
    ];

    var increaseButton = document.getElementById("inc");

    const decreaseButton = document.getElementById("dec");

    let currentIndex = 0; 

    increaseButton.onclick = function () {
        if (currentIndex < earthImages.length-1 ) {
            earthImages[currentIndex].style.opacity = 0; 
        currentIndex++;
        earthImages[currentIndex].style.opacity = 1;
        decreaseButton.disabled = false;
        }else{
            increaseButton.disabled = true;
        }
        
    };

    decreaseButton.onclick=function () {
        if (currentIndex > 0) {
            earthImages[currentIndex].style.opacity = 0;
            currentIndex--;
            earthImages[currentIndex].style.opacity = 1;
            increaseButton.disabled = false;
        }else{
            decreaseButton.disabled = true;
        }
    }

    //SEA LEVEL ACTIVITY

    let plus = document.getElementById("seainc");
    let minus = document.getElementById("seadec");
    let waves = document.querySelector('.wave');
    let waveshadow = document.querySelector('.wave2');
    let sealevelImg = document.getElementById('sealevelimg');
    
    
    plus.addEventListener('click',()=>
{
    const seaHeight = waves.offsetHeight;
    console.log(seaHeight);
    if(seaHeight >= 160){
        sealevelImg.src = "../img/city.png";
    }
    
    if(seaHeight <= 830){

        const newSeaHeight = seaHeight + 60;

        waves.style.height = newSeaHeight + "px";
    }else{
        alert("hey !!! the city is fully drowned!");
    }

                

})

    minus.addEventListener('click',()=>
{
    const seaHeight = waves.offsetHeight;
    console.log(seaHeight);
    
    if(seaHeight >= 85){
        if(seaHeight <= 220){
            sealevelImg.src = "../img/city4.png";
        }
        const newSeaHeight = seaHeight - 60;
        waves.style.height = newSeaHeight + "px";
        waveshadow.style.height = newSeaHeight + "px";
        

    }else{
        alert("hey !!! the city is suffering from drought");
    }

    
                

})
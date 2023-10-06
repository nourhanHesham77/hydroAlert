//imgSlider

let thumbnails = document.getElementsByClassName("thumb0");
let slider = document.getElementById("slider");
let left= document.getElementById("slide-left");
let right = document.getElementById("slide-right");

left.addEventListener("click",() => {
  slider.scrollLeft-=120;
});

right.addEventListener("click",() => {
  slider.scrollLeft+=120;
});


const maxscrollleft= slider.scrollWidth - slider.clientWidth;

function autoplay0(){
if(slider.scrollLeft > (maxscrollleft-1)){
    slider.scrollLeft -=maxscrollleft;
}
else{
    slider.scrollLeft+=1;
}
}

let play= setInterval(autoplay0,50);

for(let x=0;x<thumbnails.length;x++){
thumbnails[x].addEventListener("mouseover",()=>{
    clearInterval(play)
})
thumbnails[x].addEventListener("mouseout",()=>{
    return play = setInterval(autoplay0,50);
})
}


//imgSlider

let thumbnails2 = document.getElementsByClassName("thumb");
let slider2 = document.getElementById("slider2");
let left2= document.getElementById("slide-left2");
let right2 = document.getElementById("slide-right2");

left2.addEventListener("click",() => {
  slider2.scrollLeft-=120;
});

right2.addEventListener("click",() => {
  slider2.scrollLeft+=120;
});


const maxscrollleft2= slider2.scrollWidth - slider2.clientWidth;

function autoplay(){
if(slider2.scrollLeft > (maxscrollleft2-1)){
    slider2.scrollLeft -=maxscrollleft2;
}
else{
    slider2.scrollLeft+=1;
}
}

let playtwo= setInterval(autoplay,50);

for(let i=0;i<thumbnails2.length;i++){
thumbnails2[i].addEventListener("mouseover",()=>{
    clearInterval(playtwo)
})
thumbnails2[i].addEventListener("mouseout",()=>{
    return playtwo = setInterval(autoplay,50);
})
}

let thumbnails3 = document.getElementsByClassName("thumb2");
let slider3 = document.getElementById("slider3");
let left3= document.getElementById("slide-left3");
let right3 = document.getElementById("slide-right3");

left3.addEventListener("click",() => {
  slider3.scrollLeft-=120;
});

right3.addEventListener("click",() => {
  slider3.scrollLeft+=120;
});


const maxscrollleft3= slider3.scrollWidth - slider3.clientWidth;

function autoplay3(){
if(slider3.scrollLeft > (maxscrollleft2-1)){
    slider3.scrollLeft -=maxscrollleft2;
}
else{
    slider3.scrollLeft+=1;
}
}

let playthree= setInterval(autoplay3,50);

for(let i=0;i<thumbnails3.length;i++){
thumbnails3[i].addEventListener("mouseover",()=>{
    clearInterval(playthree)
})
thumbnails3[i].addEventListener("mouseout",()=>{
    return playthree = setInterval(autoplay3,50);
})
}




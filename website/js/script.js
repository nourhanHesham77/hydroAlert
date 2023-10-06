// animation on scroll
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
}
);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));


window.onscroll=function(){
    let content = document.querySelector(".part");
    let contentPosition = content.getBoundingClientRect().top;
    let screenposition = window.innerHeight;

    if(contentPosition < screenposition+5){
    content.classList.add('show');  
    }
    else{
        content.classList.remove('show');  
    }

    let contentC = document.querySelector(".partC");
    let contentPositionC = contentC.getBoundingClientRect().top;

    if(contentPositionC < screenposition+5){
        contentC.classList.add('show');  
    }
    else{
        contentC.classList.remove('show');  
    }
}
/**EXPLORE */
let videoC = document.getElementById("exploreMegaImg");
let videos = ['../img/SWOT.png', '../img/GPM.png', '../img/GRACE.png'];
let i = 0;

setInterval(function () {
    videoC.src = videos[i];
    i = (i + 1) % videos.length;
}, 7000);
var slideIndex = 1;
var myTimer;
var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 6000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
    clearInterval(myTimer);
    if (n < 0){
        showSlides(slideIndex -= 1);
    }
    else {
        showSlides(slideIndex += 1); 
    }
    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, 6000);
    }
    else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 6000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 6000);
    showSlides(slideIndex = n);
}

function showSlides(n){
    var current = 0;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex=slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        // Cambiar z-index para enviar abajo
        slides[i].style.zIndex = 1;
        slides[i].style.opacity = 0;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    // Cambiar z-index para enviar arriba el activo
    slides[slideIndex-1].style.zIndex = 2;
    slides[slideIndex-1].style.opacity = "1";
    dots[slideIndex-1].classList.add("active");
}
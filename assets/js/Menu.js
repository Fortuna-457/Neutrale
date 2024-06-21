var menuHolder=document.getElementById("burger-holder");
var menuContainer=document.getElementById("list-nav-mobile");

menuHolder.addEventListener('click', ()=>{
    if(menuContainer.classList.contains("clicked")){
        menuContainer.classList.remove("clicked");
        document.getElementById("header").classList.remove("aumento");
    }
    else{
        menuContainer.classList.add("clicked");
        document.getElementById("header").classList.add("aumento");
    }
});
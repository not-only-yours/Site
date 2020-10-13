window.addEventListener('scroll',function (){
    var value = window.scrollY;
    document.getElementById("town").style.top = -value*0.5 +'px';
})


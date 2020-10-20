$(window).on('beforeunload', function (){
    $(window).scrollTop(0);
})


var header = $('.topLine'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();


    if( document.getElementById('myTopnav').className === 'topnav') {
        if (scrolled > 100 && scrolled > scrollPrev) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    }
});


menu.onclick = function() {
    var x = document.getElementById('myTopnav');
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById('logo').style.display = "none"
    } else {
        x.className = "topnav";
        document.getElementById('logo').style.display = "flex"
    }
}



document.getElementById("rightFirstButton").onclick = function(){
    document.getElementById("rightFirstButton").style.display = "none";
    document.getElementById("rightDownMenu").style.display = "flex";
}

document.getElementById("close").onclick = function(){
    document.getElementById("rightFirstButton").style.display = "block";
    document.getElementById("rightDownMenu").style.display = "none";
}

function first(){
    document.getElementById("conf").style.display = "none";
    document.getElementById("displayInfoAboutCar").style.display = "flex";
    document.getElementById("confFirst").style.display = "flex";
    document.getElementById("confSecond").style.display = "none";
    document.getElementById("confThird").style.display = "none";
    document.getElementById("confFouth").style.display = "none";
}

 function second(){
     document.getElementById("conf").style.display = "none";
     document.getElementById("displayInfoAboutCar").style.display = "flex";
    document.getElementById("confFirst").style.display = "none";
    document.getElementById("confSecond").style.display = "flex";
    document.getElementById("confThird").style.display = "none";
    document.getElementById("confFouth").style.display = "none";
}

function third(){
    document.getElementById("conf").style.display = "none";
    document.getElementById("displayInfoAboutCar").style.display = "flex";
    document.getElementById("confFirst").style.display = "none";
    document.getElementById("confSecond").style.display = "none";
    document.getElementById("confThird").style.display = "flex";
    document.getElementById("confFouth").style.display = "none";
}

function fouth(){
    document.getElementById("conf").style.display = "none";
    document.getElementById("displayInfoAboutCar").style.display = "flex";
    document.getElementById("confFirst").style.display = "none";
    document.getElementById("confSecond").style.display = "none";
    document.getElementById("confThird").style.display = "none";
    document.getElementById("confFouth").style.display = "flex";
}

function topFunction() {
    scrollTo(document.getElementById('mainPhotoParalax'));
}

function seeCar(){
    scrollTo(document.getElementById('CarsSection'));
}

function seeConf(){
    scrollTo(document.getElementById('ConfSection'));
}

window.addEventListener('scroll', function() {
    var value = window.scrollY;
    document.getElementById("topMenuOne").style.top = -value;

});

function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}





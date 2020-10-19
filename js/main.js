$(window).on('beforeunload', function (){
    $(window).scrollTop(0);
})

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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function seeCar(){
    document.getElementById("cars").scrollIntoView({ block:"center",behavior: 'wrapper' });
}

function seeConf(){
    document.getElementById("displayInfoAboutCar").scrollIntoView({ block:"center",behavior: 'wrapper' });
}

window.addEventListener('scroll', function() {
    var value = window.scrollY;
    document.getElementById("topMenuOne").style.top = -value;

});
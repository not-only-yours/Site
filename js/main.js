menu.onclick = function myFunction() {
    var x =document.getElementById('myTopnav');
    if(x.className ==="topnav"){
        x.className+=" responsive";
    }else
        x.className = "topnav";
}

document.getElementById("rightFirstButton").onclick = function func(){
    document.getElementById("rightFirstButton").style.display = "none";
    document.getElementById("rightDownMenu").style.display = "flex";
}

document.getElementById("close").onclick = function fun(){
    document.getElementById("rightFirstButton").style.display = "block";
    document.getElementById("rightDownMenu").style.display = "none";
}


document.getElementById("firstConfBut").onclick = function fq(){
    document.getElementById("confFirst").style.display = "flex";
    document.getElementById("confSecond").style.display = "none";
    document.getElementById("confThird").style.display = "none";
    document.getElementById("confFouth").style.display = "none";
}

document.getElementById("SecondConfBut").onclick = function fw(){
    document.getElementById("confFirst").style.display = "none";
    document.getElementById("confSecond").style.display = "flex";
    document.getElementById("confThird").style.display = "none";
    document.getElementById("confFouth").style.display = "none";
}

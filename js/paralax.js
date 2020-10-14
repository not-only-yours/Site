let ground = document.getElementById("ground");
let car = document.getElementById("car");
let water = document.getElementById("water");
let bridge = document.getElementById("bridge");
let town = document.getElementById("town");

window.addEventListener('scroll', function (){
    var value = window.scrollY;

    town.style.top = value * 0.2 + 'px';
    bridge.style.top = -value * 0.1 + 'px';
    water.style.top = -value * 0.1 + 'px';
    car.style.top = -value * 0.4 + 'px';
    ground.style.top = -value * 0.4 + 'px'
})
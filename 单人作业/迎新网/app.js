const lfire = document.getElementsByClassName("t-left");
const rfire = document.getElementsByClassName("t-right");
const mlook = document.querySelector(".m-look");
const hbody = document.querySelector(".h-body");
const view = document.querySelector(".view");
const trains = document.querySelector(".trains");
const actives = document.querySelector(".actives");
const abouts = document.querySelector(".abouts");
const rock = document.querySelector(".backtop");
const fire = document.querySelector(".fire");
for (let i = 0; i<6; i++) {
    lfire[i].style.opacity = 0;
    rfire[i].style.opacity = 0;
}
mlook.onmouseover = function () {
    lfire[0].style.opacity = 1;
    rfire[0].style.opacity = 1;
}
mlook.onmouseout = function () {
    lfire[0].style.opacity = 0;
    rfire[0].style.opacity = 0;
}
hbody.onmouseover = function () {
    lfire[1].style.opacity = 1;
    rfire[1].style.opacity = 1;
}
hbody.onmouseout = function () {
    lfire[1].style.opacity = 0;
    rfire[1].style.opacity = 0;
}
view.onmouseover = function () {
    lfire[2].style.opacity = 1;
    rfire[2].style.opacity = 1;
}
view.onmouseout = function () {
    lfire[2].style.opacity = 0;
    rfire[2].style.opacity = 0;
}
trains.onmouseover = function () {
    lfire[3].style.opacity = 1;
    rfire[3].style.opacity = 1;
}
trains.onmouseout = function () {
    lfire[3].style.opacity = 0;
    rfire[3].style.opacity = 0;
}
actives.onmouseover = function () {
    lfire[4].style.opacity = 1;
    rfire[4].style.opacity = 1;
}
actives.onmouseout = function () {
    lfire[4].style.opacity = 0;
    rfire[4].style.opacity = 0;
}
abouts.onmouseover = function () {
    lfire[5].style.opacity = 1;
    rfire[5].style.opacity = 1;
}
abouts.onmouseout = function () {
    lfire[5].style.opacity = 0;
    rfire[5].style.opacity = 0;
}
rock.onmouseover = function () {
    fire.style.animation = 'fire1 0.15s ease-in-out infinite alternate';
    Console.log(222);
}
rock.onmouseout = function () {
    fire.style.animation = 'none';
    Console.log(222);
}
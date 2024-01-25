var clickbtn = document.getElementById("open-dial-btn");
var clickbtnone= document.getElementById("open-dial-btn-one");
var clickbtntwo= document.getElementById("open-dial-btn-two");
var clickbtnthree= document.getElementById("open-dial-btn-three");
var clickbtnfour= document.getElementById("open-dial-btn-four");
var tableSec = document.getElementById("table-sec");
var formSec = document.getElementById("form-sec");
var nav = document.getElementById("nav");
var footer = document.getElementById("footer");
var dialogueBox = document.getElementById("dial-cont");
var mobNavBtn=document.getElementById("mob-nv-btn");
var mainbBody=document.getElementById("main-body");
var mobileNav=document.getElementById("mob-nav");
var mobNavClose = document.getElementById("mob-nav-close");
var paraZero=document.getElementById("zero-conetnt");
var paraOne=document.getElementById("fst-conetnt");
var paraTwo=document.getElementById("snd-conetnt");
var paraThree=document.getElementById("th-conetnt");
var parafour=document.getElementById("fr-conetnt");
// var menubarheight=document.getElementById("menubarheight");
// var tableSec=document.querySelectorAll(".table-section");

if(clickbtn){clickbtn.addEventListener("click", myfunction)}
function myfunction() {
    dialogueBox.style.display = "flex";
}

if(clickbtnone){clickbtnone.addEventListener("click", myfunctionzero);}
function myfunctionzero() {
    dialogueBox.style.display = "flex"
    paraZero.style.display="block"
    paraOne.style.display="none"
    paraTwo.style.display="none"
    paraThree.style.display="none"
    parafour.style.display="none"
}

if(clickbtnone){clickbtnone.addEventListener("click", myfunctionone);}
function myfunctionone() {
    dialogueBox.style.display = "flex"
    paraZero.style.display="none"
    paraOne.style.display="block"
    paraTwo.style.display="none"
    parafour.style.display="none"
    paraThree.style.display="none"
}

if(clickbtntwo){clickbtntwo.addEventListener("click", myfunctiontwo);}
function myfunctiontwo() {
    dialogueBox.style.display = "flex"
    paraZero.style.display="none"
    paraOne.style.display="none"
    paraTwo.style.display="block"
    paraThree.style.display="none"
    parafour.style.display="none"
}

if(clickbtnthree){clickbtnthree.addEventListener("click", myfunctionthree);}
function myfunctionthree() {
    dialogueBox.style.display = "flex"
    paraZero.style.display="none"
    paraOne.style.display="none"
    paraTwo.style.display="none"
    paraThree.style.display="block"
    parafour.style.display="none"
}

if(clickbtnfour){clickbtnfour.addEventListener("click", myfunctionfour);}
function myfunctionfour() {
    dialogueBox.style.display = "flex"
    paraZero.style.display="none"
    paraOne.style.display="none"
    paraTwo.style.display="none"
    paraThree.style.display="none"
    parafour.style.display="block"
}

var allcashgiftAltClose=document.getElementById("allcashgift-alt-close");
var allcashgiftclose=document.getElementById("allcashgiftclose");
var closebtn = document.getElementById("close");
if(closebtn){closebtn.addEventListener("click", close);}
if(allcashgiftclose){allcashgiftclose.addEventListener("click", close);}
if(allcashgiftAltClose){allcashgiftAltClose.addEventListener("click", close);}
function close() {
    tableSec.style.display = "flex";
    formSec.style.display = "flex";
    nav.style.display = "flex";
    footer.style.display = "flex";
    dialogueBox.style.display = "none"
    // dialogueBox.style.position="absolute"
}

if(mobNavBtn){
mobNavBtn.addEventListener("click", openmobNav);
}

function openmobNav(){ 
    mainbBody.style.display="none";
    mobileNav.style.display="block";
    tableSec.style.display="none";
}

if(mobNavClose){mobNavClose.addEventListener("click", closemobnav);}
function closemobnav(){
    mainbBody.style.display="block";
    mobileNav.style.display="none";
    tableSec.style.display="block";
}
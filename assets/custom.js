var clickbtn = document.getElementById("open-dial-btn");
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
// var tableSec=document.querySelectorAll(".table-section");

if(clickbtn){clickbtn.addEventListener("click", myfunction);}
function myfunction() {


    tableSec.style.display = "none";
    formSec.style.display = "none";
    nav.style.display = "none";
    footer.style.display = "none";


    // var body=document.getElementsByTagName("body")[0];
    dialogueBox.style.display = "flex"


    // dialogueBox.style.position="absolute"

}
if(clickbtntwo){clickbtntwo.addEventListener("click", myfunctiontwo);}
function myfunctiontwo() {


    tableSec.style.display = "none";
    formSec.style.display = "none";
    nav.style.display = "none";
    footer.style.display = "none";


    // var body=document.getElementsByTagName("body")[0];
    dialogueBox.style.display = "flex"


    // dialogueBox.style.position="absolute"

}
if(clickbtnthree){clickbtnthree.addEventListener("click", myfunctionthree);}
function myfunctionthree() {


    tableSec.style.display = "none";
    formSec.style.display = "none";
    nav.style.display = "none";
    footer.style.display = "none";


    // var body=document.getElementsByTagName("body")[0];
    dialogueBox.style.display = "flex"


    // dialogueBox.style.position="absolute"

}
if(clickbtnfour){clickbtnfour.addEventListener("click", myfunctionfour);}
function myfunctionfour() {


    tableSec.style.display = "none";
    formSec.style.display = "none";
    nav.style.display = "none";
    footer.style.display = "none";


    // var body=document.getElementsByTagName("body")[0];
    dialogueBox.style.display = "flex"


    // dialogueBox.style.position="absolute"

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
var clickbtn = document.getElementById("open-dial-btn");
var tableSec = document.getElementById("table-sec");
var formSec = document.getElementById("form-sec");
var nav = document.getElementById("nav");
var footer = document.getElementById("footer");
var dialogueBox = document.getElementById("dial-cont");
// var tableSec=document.querySelectorAll(".table-section");
clickbtn.addEventListener("click", myfunction);

function myfunction() {


    tableSec.style.display = "none";
    formSec.style.display = "none";
    nav.style.display = "none";
    footer.style.display = "none";


    // var body=document.getElementsByTagName("body")[0];
    dialogueBox.style.display = "flex"


    // dialogueBox.style.position="absolute"

}
var closebtn = document.getElementById("close");
closebtn.addEventListener("click", close);

function close() {


    tableSec.style.display = "flex";
    formSec.style.display = "flex";
    nav.style.display = "flex";
    footer.style.display = "flex";


    dialogueBox.style.display = "none"


    // dialogueBox.style.position="absolute"

}
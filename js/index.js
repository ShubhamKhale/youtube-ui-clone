console.log("this is index.js");


let navbar = document.querySelector(".navbar");
let navcontainer = document.querySelector(".navcontainer");
let videocontainer = document.querySelector(".videocontainer");
let videoitem2 = document.querySelector(".videoitem2");
let videoitem3 = document.querySelector(".videoitem3");
let videoitem4 = document.querySelector(".videoitem4");
let videoitem5 = document.querySelector(".videoitem5");
let thumbnail1 = document.getElementById("thumbnail1");
let thumbnail2 = document.getElementById("thumbnail2");
let thumbnail3 = document.getElementById("thumbnail3");
let thumbnail4 = document.getElementById("thumbnail4");
let thumbnail5 = document.getElementById("thumbnail5");
let thumbnail6 = document.getElementById("thumbnail6");
let thumbnail7 = document.getElementById("thumbnail7");
let thumbnail8 = document.getElementById("thumbnail8");
let thumbnail9 = document.getElementById("thumbnail9");
let thumbnail10 = document.getElementById("thumbnail10");
let thumbnail11 = document.getElementById("thumbnail11");
let thumbnail12 = document.getElementById("thumbnail12");
let thumbnail13 = document.getElementById("thumbnail13");
let thumbnail14 = document.getElementById("thumbnail14");
let thumbnail15 = document.getElementById("thumbnail15");
let thumbnail16 = document.getElementById("thumbnail16");
let thumbnail17 = document.getElementById("thumbnail17");
let thumbnail18 = document.getElementById("thumbnail18");
let thumbnail19 = document.getElementById("thumbnail19");
let thumbnail20 = document.getElementById("thumbnail20");
let thumbnail21 = document.getElementById("thumbnail21");
let next = document.getElementById("next");

function wrapleft(){
  document.getElementById("sidebar").classList.add("wrapsidebarLeft");
  navcontainer.style.right = "150px";
  /*padding : top right bottom left   */
  videocontainer.style.padding = "17px 0px 0px 96px";
  videoitem2.style.top = "30px";
  videoitem3.style.top = "50px";
  videoitem4.style.top = "70px";
  videoitem5.style.top = "90px";
  thumbnail1.style.width = "320px";
  thumbnail1.style.height = "183px";
  thumbnail2.style.width = "320px";
  thumbnail2.style.height = "183px";
  thumbnail3.style.width = "320px";
  thumbnail3.style.height = "183px";
  thumbnail4.style.width = "320px";
  thumbnail4.style.height = "183px";
  thumbnail5.style.width = "320px";
  thumbnail5.style.height = "183px";
  thumbnail6.style.width = "320px";
  thumbnail6.style.height = "183px";
  thumbnail7.style.width = "320px";
  thumbnail7.style.height = "183px";
  thumbnail8.style.width = "320px";
  thumbnail8.style.height = "183px";
  thumbnail9.style.width = "320px";
  thumbnail9.style.height = "183px";
  thumbnail10.style.width = "320px";
  thumbnail10.style.height = "183px";
  thumbnail11.style.width = "320px";
  thumbnail11.style.height = "183px";
  thumbnail12.style.width = "320px";
  thumbnail12.style.height = "183px";
  thumbnail13.style.width = "320px";
  thumbnail13.style.height = "183px";
  thumbnail14.style.width = "320px";
  thumbnail14.style.height = "183px";
  thumbnail15.style.width = "320px";
  thumbnail15.style.height = "183px";
  thumbnail16.style.width = "320px";
  thumbnail16.style.height = "183px";
  thumbnail17.style.width = "320px";
  thumbnail17.style.height = "183px";
  thumbnail18.style.width = "320px";
  thumbnail18.style.height = "183px";
  thumbnail19.style.width = "320px";
  thumbnail19.style.height = "183px";
  thumbnail20.style.width = "320px";
  thumbnail20.style.height = "183px";
  thumbnail21.style.width = "320px";
  thumbnail21.style.height = "183px";

}

function wrapright(){
  document.getElementById("sidebar").classList.remove("wrapsidebarLeft");
  navcontainer.style.right = "0px";
  videocontainer.style.padding = "17px 0px 0px 252px";
  videoitem2.style.top = "20px";
  videoitem3.style.top = "40px";
  videoitem4.style.top = "60px";
  videoitem5.style.top = "80px";
  thumbnail1.style.width = "287px";
  thumbnail1.style.height = "161px";
  thumbnail2.style.width = "287px";
  thumbnail2.style.height = "161px";
  thumbnail3.style.width = "287px";
  thumbnail3.style.height = "161px";
  thumbnail4.style.width = "287px";
  thumbnail4.style.height = "161px";
  thumbnail5.style.width = "287px";
  thumbnail5.style.height = "161px";
  thumbnail6.style.width = "287px";
  thumbnail6.style.height = "161px";
  thumbnail7.style.width = "287px";
  thumbnail7.style.height = "161px";
  thumbnail8.style.width = "287px";
  thumbnail8.style.height = "161px";
  thumbnail9.style.width = "287px";
  thumbnail9.style.height = "161px";
  thumbnail10.style.width = "287px";
  thumbnail10.style.height = "161px";
  thumbnail11.style.width = "287px";
  thumbnail11.style.height = "161px";
  thumbnail12.style.width = "287px";
  thumbnail12.style.height = "161px";
  thumbnail13.style.width = "287px";
  thumbnail13.style.height = "161px";
  thumbnail14.style.width = "287px";
  thumbnail14.style.height = "161px";
  thumbnail15.style.width = "287px";
  thumbnail15.style.height = "161px";
  thumbnail16.style.width = "287px";
  thumbnail16.style.height = "161px";
  thumbnail17.style.width = "287px";
  thumbnail17.style.height = "161px";
  thumbnail18.style.width = "287px";
  thumbnail18.style.height = "161px";
  thumbnail19.style.width = "287px";
  thumbnail19.style.height = "161px";
  thumbnail20.style.width = "287px";
  thumbnail20.style.height = "161px";
  thumbnail21.style.width = "287px";
  thumbnail21.style.height = "161px";
}

/*NAVCONTAINER */


let homelink = document.getElementById("homelink");
homelink.style.borderRadius = "25px";
homelink.style.backgroundColor = "white";
homelink.style.color = "black";
homelink.style.paddingLeft = "13.5px";
homelink.style.paddingRight = "13.5px";


/*
SHOW MORE AND SHOW LESS BUTTON
*/

let showLess = document.getElementById("showLess");
let showMore = document.getElementById("showMore");
let hideSide1 = document.getElementById("hideSide1");
let hideSide2 = document.getElementById("hideSide2");
let hideSide3 = document.getElementById("hideSide3");

function more(){
  console.log("click event is fired on show more button");
  showMore.style.display = "none";
  showLess.style.display = "block";
  hideSide1.style.display = "block";
  hideSide2.style.display = "block";
  hideSide3.style.display = "block";
}

function less(){
  console.log("click event is fired on show fever button");
  showMore.style.display = "block";
  showLess.style.display = "none";
  hideSide1.style.display = "none";
  hideSide2.style.display = "none";
  hideSide3.style.display = "none";
}


var body = document.querySelector("body")
var color1 = document.getElementsById("color1")
var color2 = document.getElementsById("color2")
var color3 = document.getElementsById("color3")
var showcolor1 = document.getElementsById("showcolor1")
var showcolor2 = document.getElementsById("showcolor2")
var showcolor3 = document.getElementsById("showcolor3")

function action(){
  body.style.background =
  "linear-gradient(to right , " +
  color1.value+ ","+color2.value+","+color3.value+ ")";
  showcolor1.innerHTML = color1.value;
  showcolor2.innerHTML = color2.value;
  showcolor3.innerHTML = color3.value;
};

color1.addEventListener("input", action)
color2.addEventListener("input", action)
color3.addEventListener("input", action)

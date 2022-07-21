document.getElementById("next-trips-text").onmouseover = function() {mouseOver()};
document.getElementById("next-trips-text").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("sun").style.boxShadow = "0px 0px 20px 20px #ff4e00";
  document.getElementById("sun").style.marginTop = "-100px";
  document.getElementById("sun").style.transition = "all 0.9s ease";
}

function mouseOut() {
  document.getElementById("sun").style.boxShadow = "0px 0px 20px 0px #ff4e00";
  document.getElementById("sun").style.marginTop = "-70px";
  document.getElementById("sun").style.transition = "all 0.9s ease";
}
const places = document.querySelectorAll('.place');

places.forEach(el => el.addEventListener('mouseover', event => {
  el.style.clipPath = "circle(50% at 50% 50%)";
  el.style.transform = "scale(0.9)";
}));

places.forEach(el => el.addEventListener('mouseout', event => {
  el.style.clipPath = "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)";
  el.style.transform = "scale(1)";
}));

places.forEach(el => el.addEventListener('click', event => {
  el.style.clipPath = "none";
  el.style.transform = "scale(1)";
}));
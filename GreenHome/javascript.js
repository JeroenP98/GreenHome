function setActive() {
    nav = document.getElementById("nav").getElementsByClassName('navitem');
    for(i=0;i<nav.length;i++) { 
      if(document.location.href.indexOf(nav[i].href)>=0) {
        nav[i].classList.add("active");
      }
    }
  }

window.onload = setActive;


// Responsive navbar
function hamburger() {
    let x = document.getElementById("nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// end responsive navbar


function changeBg() {
    let navbar = document.getElementById('nav');
    let scrollValue = window.scrollY;
    if(scrollValue < 10) {
        navbar.classList.remove('bgColor')
    } else {
        navbar.classList.add('bgColor')
    }
}

window.addEventListener('scroll', changeBg);
function setActive() {
    nav = document.getElementById("nav").getElementsByClassName('navitem');
    for(i=0;i<nav.length;i++) { 
      if(document.location.href.indexOf(nav[i].href)>=0) {
        nav[i].classList.add("active");
      }
    }
  }

window.onload = setActive;


// START Responsive navbar
function hamburger() {
    let x = document.getElementById("nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// END responsive navbar

// START Add/remove active class in navbar
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
// END add/remove active class in navbar



// START back to top funnction
let myButton = document.getElementById('top')
 
window.onscroll = function() {scrollFunction()}
 
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }
 
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
  }
 
  // END back to top function

  // START Slideshow function
 
  let slideIndex = 0;
  showSlides();
 
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
 
// END slideshow function
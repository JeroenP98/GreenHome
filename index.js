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
    document.documentElement.scrollTop = 0;
  }
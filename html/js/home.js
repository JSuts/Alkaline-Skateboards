function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function fadeOut() {
  document.getElementById('scrollText').style.opacity = '0';
}

function fadeIn() {
  document.getElementById('scrollText').style.opacity = '1';
}


window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  var topImageHeight = document.getElementById('topImage').height;
  if (currentScrollPos > topImageHeight) {
    fadeOut();
  } else {
    fadeIn();
  }
});

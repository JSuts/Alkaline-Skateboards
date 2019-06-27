function blackText() {
  var navTexts = document.getElementsByClassName('white');
  for (var i = 0; i < navTexts.length; i++) {
    navTexts[i].className = "nav-link nav-text";
  }
  var listElements = document.getElementsByClassName('nav-item');
  for (var i = 0; i < listElements.length; i++) {
    listElements[i].style.borderColor = "black";
  }
}

function whiteText() {
  var navTexts = document.getElementsByClassName('nav-text');
  for (var i = 0; i < navTexts.length; i++) {
    navTexts[i].className = "nav-link nav-text white";
  }
  var listElements = document.getElementsByClassName('nav-item');
  for (var i = 0; i < listElements.length; i++) {
    listElements[i].style.borderColor = "white";
  }

}


window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  var topImageHeight = document.getElementById('title').offsetTop;
  if (currentScrollPos > topImageHeight) {
    whiteText();
  } else {
    blackText();
  }
});

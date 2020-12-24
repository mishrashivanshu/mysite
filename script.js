let theme = document.getElementById("theme");
let logo = document.getElementById("logo-image");
const preloader = document.getElementById("preloader-wrap");
var BODY = document.getElementsByTagName("BODY")[0];

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    logo.src = "apple-touch-icon.png";
  } else {
    setTheme("theme-dark");
    logo.src = "images/brand.png";
  }
}

//set theme on every reload
window.onload = function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    logo.src = "images/brand.png";
    document.getElementById("slider").checked = true;
  } else {
    setTheme("theme-light");
    logo.src = "apple-touch-icon.png";
    document.getElementById("slider").checked = false;
  }
  if (preloader) {
    preloader.style.display = "none";
  }
  BODY.style.overflow = "auto";
};

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
// DOM Elements
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const navPanel = document.querySelector("nav");
const navIcons = document.querySelector(".nav-icons");

function toggleNav() {
  navPanel.classList.toggle("active-nav");
  navIcons.classList.toggle("active-icons");
}

menuBtn.addEventListener("click", toggleNav);
closeBtn.addEventListener("click", toggleNav);

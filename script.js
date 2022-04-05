"use strict";

const openMenu = document.querySelector(".icon--hamburger");

const closeMenu = document.querySelector(".close--menu");
const body = document.querySelector("body");

const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu--link");

const isMobile = window.matchMedia("(max-width: 767px)");

openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);

function showMenu() {
  menu.style.display = "flex";
  body.style.overflow = "hidden";
}
function hideMenu() {
  menu.style.display = "none";
  body.style.overflow = "scroll";
}

for (let i = 0; i < menuLinks.length; i++) {
  if (isMobile.matches) {
    menuLinks[i].addEventListener("click", hideMenu);
  }
}

"use strict";

window.addEventListener("DOMContentLoaded", function () {});
window.addEventListener("scroll", function () {
  var carouselHeight = document.querySelector(".carousel");
  if (window.scrollY > carouselHeight.getClientRects()[0].height) document.querySelector("header").classList.add("show-bg");else document.querySelector("header").classList.remove("show-bg");
});
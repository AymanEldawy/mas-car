"use strict";

$(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  }); // $('.play').on('click', function () {
  //   owl.trigger('play.owl.autoplay', [1000])
  // })
  // $('.stop').on('click', function () {
  //   owl.trigger('stop.owl.autoplay')
  // })
});
window.addEventListener("DOMContentLoaded", function () {});
window.addEventListener("scroll", function () {
  var carouselHeight = document.querySelector(".carousel");
  if (window.scrollY > carouselHeight.getClientRects()[0].height) document.querySelector("header").classList.add("show-bg");else document.querySelector("header").classList.remove("show-bg");
});
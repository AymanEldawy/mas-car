window.addEventListener("DOMContentLoaded", () => {});
window.addEventListener("scroll", () => {
  let carouselHeight = document.querySelector(".carousel");
  console.log('Run...')
  if (window.scrollY > carouselHeight.getClientRects()[0].height)
    document.querySelector("header").classList.add("show-bg");
  else document.querySelector("header").classList.remove("show-bg");
});

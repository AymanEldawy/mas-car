window.addEventListener("DOMContentLoaded", () => {
  let globalLink = document.querySelector('.fixed-links > i');
  globalLink.addEventListener('click',() => {
    globalLink.classList.toggle('opened')
    document.querySelector('.fixed-links .menu-links').classList.toggle('open-menu')
  })

});
window.addEventListener("scroll", () => {
  let carouselHeight = document.querySelector(".carousel");
  if (window.scrollY > carouselHeight.getClientRects()[0].height)
    document.querySelector("header").classList.add("show-bg");
  else document.querySelector("header").classList.remove("show-bg");
  
});

const hamburger = document.querySelector(".hamburger");
const navUL = document.getElementById("list");
const closeMenu = document.querySelector(".close-hamburger");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("burger-click");
  closeMenu.classList.toggle("close-menu");
});

closeMenu.addEventListener("click", () => {
  navUL.classList.remove("show");
  closeMenu.classList.toggle("close-menu");
  hamburger.classList.toggle("burger-click");
});

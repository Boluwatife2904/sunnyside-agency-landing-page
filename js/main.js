const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
})
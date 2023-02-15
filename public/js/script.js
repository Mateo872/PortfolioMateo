const moon = document.querySelector("#moon");
const btnHamburger = document.querySelector("#btn-hamburger");
const menuHidden = document.querySelector(".menu");
const menuOverlay = document.querySelector(".menu-overlay");

const switchThemes = () => {
  moon.classList.toggle("bi-sun");
  document.body.classList.toggle("background-dark-mode");
};

moon.addEventListener("click", () => {
  switchThemes();
});

btnHamburger.addEventListener("click", menuVisible);

function menuVisible() {
  menuHidden.classList.toggle("menu-visible");
}

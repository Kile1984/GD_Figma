// MOBILE NAV

const menuBtn = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".header__nav");
const list = document.querySelector(".header__list");

let isOpen = false;

console.log(menuBtn);

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  isOpen = !isOpen;

  nav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);

  menuBtn.setAttribute("aria-expanded", isOpen);
  list.classList.toggle("show", isOpen);

  const use = menuBtn.querySelector("use");
  use.setAttribute(
    "href",
    isOpen
      ? "assets/images/sprite.svg#icon-close"
      : "assets/images/sprite.svg#icon-hamburger"
  );
}

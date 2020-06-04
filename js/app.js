window.CSS.paintWorklet.addModule("js/bezel.js");

const menuButton = document.querySelector(".Menu-button");
const menuCloseButton = document.querySelector(".Menu-close");
const Menu = document.querySelector(".Menu");
const menuDesktopLinks = document.querySelectorAll(".Menu-link");
const subMenuLinks = document.querySelectorAll(".Submenu-open");
const subMenuBackLinks = document.querySelectorAll(".Submenu-back");

menuButton.addEventListener("click", (event) => {
  event.preventDefault();
  Menu.classList.toggle("isActive");
});

menuCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  Menu.classList.toggle("isActive");
});

subMenuLinks.forEach((submenu) => {
  submenu.addEventListener("click", (event) => {
    event.preventDefault();
    submenu.nextElementSibling.classList.toggle("isActive");
  });
});

subMenuBackLinks.forEach((backLink) => {
  backLink.addEventListener("click", (event) => {
    event.preventDefault();
    backLink.parentElement.classList.toggle("isActive");
  });
});

menuDesktopLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    setTimeout(() => {
      link.classList.toggle("isActive");
      link.children[1].classList.toggle("isActive");
    }, 250);
  });
  link.addEventListener("mouseleave", () => {
    link.classList.toggle("isActive");
    link.children[1].classList.toggle("isActive");
  });
});

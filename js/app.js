window.CSS.paintWorklet.addModule("js/bezel.js");

const menuButton = document.querySelector(".Menu-button");
const menuCloseButton = document.querySelector(".Menu-close");
const Menu = document.querySelector(".Menu");
const menuDesktopLinks = document.querySelectorAll(".Menu-link");
const subMenuLinks = document.querySelectorAll(".Submenu-open");
const subMenuBackLinks = document.querySelectorAll(".Submenu-back");

const modalSignIn = document.querySelector("#modalSignIn");
const modalOpenButton = document.querySelector(".Modal-open");
const modalCloseButton = document.querySelector(".Modal-close");

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

modalOpenButton.addEventListener("click", (event) => {
  event.preventDefault();
  modalSignIn.classList.add("isActive");
});

modalCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  modalSignIn.classList.remove("isActive");
});

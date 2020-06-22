window.CSS.paintWorklet.addModule("js/bezel.js");

const menuButton = document.querySelector(".Menu-button");
const menuCloseButton = document.querySelector(".Menu-close");
const Menu = document.querySelector(".Menu");
const menuDesktopLinks = document.querySelectorAll(".Menu-link");
const subMenuLinks = document.querySelectorAll(".Submenu-open");
const subMenuBackLinks = document.querySelectorAll(".Submenu-back");

// Modals
const modalSignIn = document.querySelector("#modalSignIn");
const modalOpenButton = document.querySelectorAll(".Modal-open");
const modalCloseButton = document.querySelectorAll(".Modal-close");

const modalJoin = document.querySelector("#modalJoin");
const modalJoinOpenButton = document.querySelectorAll(".Modal-Join-open");
const modalJoinCloseButton = document.querySelectorAll(".Modal-Join-close");

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

// Modals Actions
modalOpenButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    modalSignIn.classList.add("isActive");
    modalJoin.classList.remove("isActive");
  });
});

modalCloseButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    modalSignIn.classList.remove("isActive");
  });
});

modalJoinOpenButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    modalJoin.classList.add("isActive");
    modalSignIn.classList.remove("isActive");
  });
});

modalJoinCloseButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    modalJoin.classList.remove("isActive");
  });
});

window.CSS.paintWorklet.addModule("js/bezel.js");

const menuButton = document.querySelector(".Menu-button");
const menuCloseButton = document.querySelector(".Menu-close");
const Menu = document.querySelector(".Menu");
const menuDesktopLinks = document.querySelectorAll(".Menu-link");

menuButton.addEventListener("click", (event) => {
  event.preventDefault();
  Menu.classList.toggle("isActive");
  // const menuLinks = document.querySelectorAll(".Menu-link");
  // menuLinks.forEach((menuLink) => {
  //   menuLink.addEventListener("click", (event) => {
  //     const subMenuButton = menuLink.children[0];
  //     const subMenu = menuLink.children[1];
  //     subMenuButton.addEventListener("click", (event) => {
  //       event.preventDefault();
  //       subMenu.classList.toggle("isActive");
  //     });
  //   });
  // });
});

menuCloseButton.addEventListener("click", (event) => {
  event.preventDefault();
  Menu.classList.toggle("isActive");
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

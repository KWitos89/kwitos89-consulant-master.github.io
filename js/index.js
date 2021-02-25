const hamburger = document.querySelector(".menu_hamburger");
const linkNav = document.querySelector(".link_nav");

hamburger.addEventListener("click", () => {
    /*animation menu*/
  linkNav.classList.toggle("open");

  /*animation hamburger*/
  hamburger.classList.toggle("its-active");

});



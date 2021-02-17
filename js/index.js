const hamburger = document.querySelector('.menu_hamburger');
const linkNav = document.querySelector('.link_nav');
const links = document.querySelectorAll('.link_nav li');


hamburger.addEventListener("click", () => {
    linkNav.classList.toggle("open");
});
const hamburger = document.querySelector('.menu_hamburger');
const linkNav = document.querySelector('.link_nav');





hamburger.addEventListener("click", () => {
    linkNav.classList.toggle("open");
    hamburger.classList.toggle("close");

    console.log(this);
});




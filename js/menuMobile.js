const hamburger = document.querySelector('.menu_hamburger');
const menu = document.querySelector('.menu');

const handleClick = () => {
  hamburger.classList.toggle('menu_hamburger:active');
  menu.classList.toggle('menu:active');
}

hamburger.addEventListener('click' ,handleClick);
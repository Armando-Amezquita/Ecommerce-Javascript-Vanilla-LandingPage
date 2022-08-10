const navbarEmail = document.querySelector('.navbar-email');
const hambuguerMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleNavbarMenu);
hambuguerMenu.addEventListener('click', togglehambuguerMenu);

function toggleNavbarMenu(){
    desktopMenu.classList.toggle('activeDesktopMenu');
}

function togglehambuguerMenu(){
    mobileMenu.classList.toggle('activeHambuguerMenu');
}
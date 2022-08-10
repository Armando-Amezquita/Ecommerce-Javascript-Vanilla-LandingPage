const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleNavbarMenu);

function toggleNavbarMenu(){
    desktopMenu.classList.toggle('inactive');
}
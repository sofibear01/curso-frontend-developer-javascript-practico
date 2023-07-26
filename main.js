const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu); //toggle seria como intercambiar, para indicar que se muestra y se esconde tambien
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //esto quita o pone la clase inactive 
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}


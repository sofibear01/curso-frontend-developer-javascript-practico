const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu); //toggle seria como intercambiar, para indicar que se muestra y se esconde tambien

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //esto quita o pone la clase inactive 
}
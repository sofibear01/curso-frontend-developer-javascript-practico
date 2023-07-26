const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const carritoProductos = document.querySelector('.product-detail');



menuEmail.addEventListener('click', toggleDesktopMenu); //toggle seria como intercambiar, para indicar que se muestra y se esconde tambien
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', togglecarritoProductos);

function toggleDesktopMenu(){
    const isCarritoProductosClosed = carritoProductos.classList.contains('inactive');

    if (!isCarritoProductosClosed){
        carritoProductos.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive'); //esto quita o pone la clase inactive 
}

function toggleMobileMenu(){
    const isCarritoProductosClosed = carritoProductos.classList.contains('inactive');

    if (!isCarritoProductosClosed){
        carritoProductos.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');

}

function togglecarritoProductos(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    carritoProductos.classList.toggle('inactive');
}

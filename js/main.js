const hamburgerMenu = document.querySelector('.tibtus-hamburger-menu');
const closeMenu = document.querySelector('.tibtus-close-menu');
const navList = document.querySelector('.tibtus-hamburger-menu-modal');


hamburgerMenu.addEventListener('click', () => {
    navList.classList.add('tibtus-show-menu');
    closeMenu.style.display = 'block';
    hamburgerMenu.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
    navList.classList.remove('tibtus-show-menu');
    closeMenu.style.display = 'none';
    hamburgerMenu.style.display = 'block';
});




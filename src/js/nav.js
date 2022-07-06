const navMenu = document.querySelector('.nav__menu');
const hamburger = document.querySelector('.nav__hamburger');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


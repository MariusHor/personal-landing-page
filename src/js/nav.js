const navMenu = document.querySelector('.nav__menu');
const hamburger = document.querySelector('.nav__hamburger');
const body = document.querySelector('body')


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden')
});


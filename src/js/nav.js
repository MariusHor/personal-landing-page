const navMenu = document.querySelector('.fullscreen-menu--light');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden')
});



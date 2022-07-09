const navMenu = document.querySelector('.nav__menu');
const hamburger = document.querySelector('.nav__hamburger');
const body = document.querySelector('body')
const navLogo = document.querySelector('.nav__logo')

console.log(navLogo)


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden')
});



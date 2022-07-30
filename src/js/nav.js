const navMenu = document.querySelector('.fullscreen-menu--light');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body')
const show = document.querySelectorAll('.show')

console.log(show)

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden')
    setTimeout(() => {     for (const item of show) {
        item.classList.toggle('active')
    } }, 500);
});



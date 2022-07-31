const navMenu = document.querySelector('.fullscreen-menu--light');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body')
let show = document.querySelectorAll('.show')
const services = document.querySelector('.services')
const portfolio = document.querySelector('.portfolio')
const contact = document.querySelector('.contact')
let servicesLink = document.querySelectorAll('.services-link')
let portfolioLink = document.querySelectorAll('.portfolio-link')
let contactLink = document.querySelectorAll('.contact-link')
const homeLink = document.getElementsByClassName('home-link');
let home = document.querySelector('header')

console.log(show)

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden')
    setTimeout(() => {     for (const item of show) {
        item.classList.toggle('active')
    } }, 500);
});

for (const item of show) {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('overflow-hidden')
        for (const item of show) {
            item.classList.remove('active')
        }
    });
}

for (const homeL of homeLink) {
    homeL.addEventListener('click', function onClick() {
        home.scrollIntoView();
    });
}


for (const service of servicesLink) {
    service.addEventListener('click', () => {
        services.scrollIntoView();
    })
}

for (const port of portfolioLink) {
    port.addEventListener('click', () => {
        portfolio.scrollIntoView();
    })
}

for (const cont of contactLink) {
    cont.addEventListener('click', () => {
        contact.scrollIntoView();
    })
}
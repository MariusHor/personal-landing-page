let buttons = document.querySelectorAll('.scrolldown-btn')
const services = document.querySelector('.services')
const portfolio = document.querySelector('.portfolio')
const contact = document.querySelector('.contact')

for (const button of buttons) {
    button.addEventListener('click', () => {
        if (button.closest('.header')) {
            services.scrollIntoView();
        } else if (button.closest('.about')) {
            portfolio.scrollIntoView();
        } else if (button.closest('.portfolio')) {
            contact.scrollIntoView();
        }
    })
}
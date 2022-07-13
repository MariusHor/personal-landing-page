let buttons = document.querySelectorAll('.scrolldown-btn')
const about = document.querySelector('.about')
const portfolio = document.querySelector('.portfolio')
const contact = document.querySelector('.contact')
const bounce = document

for (const button of buttons) {
    button.addEventListener('click', () => {
        if (button.closest('.header')) {
            about.scrollIntoView();
        } else if (button.closest('.about')) {
            portfolio.scrollIntoView();
        } else if (button.closest('.portfolio')) {
            contact.scrollIntoView();
        }
    })
}


setInterval(function() {
    for (const button of buttons) {
        button.classList.toggle('bounce');
    }
  }, 3000);
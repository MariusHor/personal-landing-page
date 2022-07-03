const themeBtn = document.querySelector('.theme-switch')
const moonIcon = document.getElementById('moon-icon')
const sunIcon = document.getElementById('sun-icon')
const body = document.querySelector('body')
const navMenu = document.querySelector('.nav__menu')
let bars = document.querySelectorAll('.bar')

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme')

  if(body.classList.contains('light-theme')) {
        moonIcon.classList.remove('hide')
        sunIcon.classList.toggle('hide')
        navMenu.classList.remove('nav__menu')
        navMenu.classList.toggle('nav__menu--light')
        for (const bar of bars) {
            bar.classList.remove('bar');
          }
        for (const bar of bars) {
            bar.classList.add('bar--light');
          }
    } else {
        sunIcon.classList.remove('hide')
        moonIcon.classList.toggle('hide')
        navMenu.classList.remove('nav__menu--light')
        navMenu.classList.toggle('nav__menu')
        for (const bar of bars) {
            bar.classList.remove('bar--light');
          }
        for (const bar of bars) {
            bar.classList.add('bar');
          }
    }
})

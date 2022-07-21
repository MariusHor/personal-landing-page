const themeBtn = document.querySelector('.theme-switch')
const moonIcon = document.getElementById('moon-icon')
const sunIcon = document.getElementById('sun-icon')
const body = document.querySelector('body')
const navMenu = document.querySelector('.fullscreen-menu--light')
let bars = document.querySelectorAll('.hamburger__bar--light')

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme')

  if(body.classList.contains('light-theme')) {
        document.body.classList.remove('dark-theme')
        moonIcon.classList.remove('hide')
        sunIcon.classList.toggle('hide')
        navMenu.classList.remove('fullscreen-menu')
        navMenu.classList.toggle('fullscreen-menu--light')
        for (const bar of bars) {
            bar.classList.remove('hamburger__bar');
          }
        for (const bar of bars) {
            bar.classList.add('hamburger__bar--light');
          }
    } else {
        document.body.classList.toggle('dark-theme')
        sunIcon.classList.remove('hide')
        moonIcon.classList.toggle('hide')
        navMenu.classList.remove('fullscreen-menu--light')
        navMenu.classList.toggle('fullscreen-menu')
        for (const bar of bars) {
            bar.classList.remove('hamburger__bar--light');
          }
        for (const bar of bars) {
            bar.classList.add('hamburger__bar');
          }
    }
})

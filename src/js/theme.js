const themeBtn = document.querySelector('.theme-switch')
const moonIcon = document.getElementById('moon-icon')
const sunIcon = document.getElementById('sun-icon')
const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')


themeBtn.addEventListener('click', () => {
    header.classList.toggle('light-theme')
    main.classList.toggle('light-theme')
    footer.classList.toggle('light-theme')

    if(header.classList.contains('light-theme')) {
        moonIcon.classList.remove('hide')
        sunIcon.classList.toggle('hide')
    } else {
        sunIcon.classList.remove('hide')
        moonIcon.classList.toggle('hide')
    }
})


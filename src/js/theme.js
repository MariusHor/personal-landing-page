const themeBtn = document.querySelector('.theme-switch')
const moonIcon = document.getElementById('moon-icon')
const sunIcon = document.getElementById('sun-icon')
const body = document.querySelector('body')

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme')

    if(body.classList.contains('light-theme')) {
        moonIcon.classList.remove('hide')
        sunIcon.classList.toggle('hide')
    } else {
        sunIcon.classList.remove('hide')
        moonIcon.classList.toggle('hide')
    }
})


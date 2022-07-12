const button = document.querySelector('.scrolldown-btn')
const skillsSection = document.querySelector('.skills')
const bounce = document

button.addEventListener('click', () => {
    skillsSection.scrollIntoView();
})

setInterval(function() {
    button.classList.toggle('bounce');
  }, 3000);
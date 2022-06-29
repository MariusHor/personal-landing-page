const navUl = document.getElementById('nav-ul');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});
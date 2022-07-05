const navMenu = document.querySelector('.nav__menu');
const hamburger = document.querySelector('.nav__hamburger');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

window.addEventListener("resize", function() {
    if (window.innerWidth > 992) {
        navMenu.classList.remove("active");
        hamburger.classList.remove('active');}
  }); 

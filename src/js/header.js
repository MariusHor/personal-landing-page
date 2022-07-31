document.addEventListener('mousemove', objectMove);
let object = document.querySelectorAll('.object');

function objectMove(e) {
    object.forEach(function(move) {

        let moving_value = move.getAttribute('data-value');
        const x = e.clientX * moving_value / 250;
        const y = e.clientY * moving_value / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}


let buttons = document.querySelectorAll('.scrolldown-btn')
const socialBar = document.querySelectorAll('.socials--bar')
const navigator = document.querySelectorAll('.navigator')
const hero = document.querySelector('.hero__text').children;
const heroLen = hero.length;
let index = 0;

function animate() {
    for (const button of buttons) {
        button.classList.add('active');
    }
    for (const social of socialBar) {
        social.classList.add('active');
    }
    for (const nav of navigator) {
        nav.classList.add('active');
    }
    hero[index].classList.add('active')
    if (index == heroLen-1) {
        index=0
    } else {
        index++;
    }

    setTimeout(animate, 900)

}

window.onload = animate

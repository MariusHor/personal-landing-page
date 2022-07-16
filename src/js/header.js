document.addEventListener('mousemove', triangleMove);
let object = document.querySelectorAll('.object');

function triangleMove(e) {
    object.forEach(function(move) {

        let moving_value = move.getAttribute('data-value');
        const x = e.clientX * moving_value / 150;
        const y = e.clientY * moving_value / 150;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}


const hero = document.querySelector('.hero__text').children;
const heroLen = hero.length;
let index = 0;

function animate() {
    hero[index].classList.add('active')
    if (index == heroLen-1) {
        index=0
    } else {
        index++;
    }

    setTimeout(animate, 1000)

}

window.onload = animate
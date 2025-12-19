const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const item = document.querySelectorAll('.item');
const list = document.querySelector('.list');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

let active = 0
const total = item.length
let timer;

function update(direction) {
    document.querySelector('.item.active').classList.remove('active');

    if(direction > 0) {
        active = active + 1

        if(active === total){
            active = 0;
        }
    }else if(direction < 0) {
        active = active - 1

        if(active < 0){
            active = total - 1;
        }
    }
    item[active].classList.add('active');

}

clearInterval(timer)
timer = setInterval(() => {
    update(1);
}, 5000);

prevButton.addEventListener('click', () => {
    update(-1)
})
nextButton.addEventListener('click', () => {
    update(1)
})

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu li a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});
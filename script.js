AOS.init();

const nav = document.querySelector('nav');
const barsMenu = document.querySelector('.bars-menu');
const bar1 = document.querySelector('.line1-bar');
const bar2 = document.querySelector('.line2-bar');
const bar3 = document.querySelector('.line3-bar');

const nav_links = document.querySelectorAll('.nav-link');
nav_links.forEach((link)=>{
    link.addEventListener('click', ()=>{
        nav.classList.toggle('showNav');
    })
})

barsMenu.addEventListener('click', ()=>{
    bar1.classList.toggle('activeLine1');
    bar2.classList.toggle('activeLine2');
    bar3.classList.toggle('activeLine3');
    nav.classList.toggle('showNav');
})

const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider, index) => {
    let slider_imgs = document.querySelectorAll(`#slider${index + 1} .slider-img`);
    let slider_img_last = slider_imgs[slider_imgs.length -1];
    const left_btn = slider.nextElementSibling;
    const right_btn = slider.nextElementSibling.nextElementSibling;
    slider.insertAdjacentElement('afterbegin', slider_img_last);
    
    left_btn.addEventListener('click', ()=>{
        slider.style.marginLeft = `0%`;
        slider.style.transition = '.5s';
        setTimeout(()=>{
            slider.style.transition = 'none';
            let slider_imgs = document.querySelectorAll(`#slider${index + 1} .slider-img`);
            let slider_img_last = slider_imgs[slider_imgs.length -1];
            slider.insertAdjacentElement('afterbegin', slider_img_last);
            slider.style.marginLeft = '-100%';
        }, 500);
    })
    right_btn.addEventListener('click', ()=>{
        slider.style.marginLeft = '-200%';
        slider.style.transition = '.5s';
        setTimeout(()=>{
            slider.style.transition = 'none';
            let slider_img_first = document.querySelectorAll(`#slider${index + 1} .slider-img`)[0];
            slider.insertAdjacentElement('beforeend', slider_img_first);
            slider.style.marginLeft = '-100%';
        }, 500)
    })
});
/*
let video = document.querySelector('#video video');

window.addEventListener('scroll',()=> {
    let videoContainer = document.querySelector('#video');
    let videoTop = videoContainer.offsetTop;
    let videoBottom = videoTop + videoContainer.offsetHeight;

    if (window.pageYOffset >= videoTop && window.pageYOffset <= videoBottom) {
        video.play();
    } else {
        video.pause();
    }
});*/
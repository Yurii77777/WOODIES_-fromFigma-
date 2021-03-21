'use strict';

const allSlides = document.querySelectorAll('.slider__group_slide');
const allDots = document.querySelectorAll('.slider__group_dot');

const nextSlide = document.querySelector('.slider__group_next-slide');
const prevSlide = document.querySelector('.slider__group_prev-slide');

let currentSlide = 0;
let currentDot = 0;

const SLIDE_INTERVAL = setInterval(showSlides, 3000);

// NextSlide on click
nextSlide.addEventListener('click', function() {
    allSlides[currentSlide].className = 'slider__group_slide';
    allDots[currentDot].className = 'slider__group_dot';
    currentSlide = currentSlide +1;
    currentDot = currentDot + 1;
    
    if (currentSlide > (allSlides.length - 1) && currentDot > (allDots.length - 1)) {
        currentSlide = 0;
        currentDot = 0;
    }
    
    allSlides[currentSlide].className = 'slider__group_slide active';
    allDots[currentDot].className = 'slider__group_dot active';
});

// PrevSlide on click
prevSlide.addEventListener('click', function() {
    allSlides[currentSlide].className = 'slider__group_slide';
    allDots[currentDot].className = 'slider__group_dot';
    currentSlide = currentSlide -1;
    currentDot = currentDot -1;
    
    if (currentSlide < 0 && currentDot < 0) {
        currentSlide = allSlides.length - 1;
        currentDot = allDots.length - 1;
    }
    
    allSlides[currentSlide].className = 'slider__group_slide active';
    allDots[currentDot].className = 'slider__group_dot active';
});

function showSlides() {
    
    allSlides[currentSlide].className = 'slider__group_slide';
    allDots[currentDot].className = 'slider__group_dot';

    currentSlide = (currentSlide + 1) % allSlides.length;
    currentDot = (currentDot + 1) % allDots.length;

    allSlides[currentSlide].className = 'slider__group_slide active';
    allDots[currentDot].className = 'slider__group_dot active';
}

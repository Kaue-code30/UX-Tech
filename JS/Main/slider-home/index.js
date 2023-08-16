document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const prevSlideBtn = document.querySelector('.slide-prev');
    const nextSlideBtn = document.querySelector('.slide-next');
    let slideIndex = 0;

    prevSlideBtn.addEventListener('click', () => {
        showSlide(slideIndex - 1);
    });

    nextSlideBtn.addEventListener('click', () => {
        showSlide(slideIndex + 1);
    });

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index;
        }
        sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
});

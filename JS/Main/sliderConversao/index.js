document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = carousel.querySelectorAll(".slide-venda");
    const prevArrow = document.querySelector(".left-venda");
    const nextArrow = document.querySelector(".right-venda");

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            if (idx === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    prevArrow.addEventListener("click", prevSlide);
    nextArrow.addEventListener("click", nextSlide);

    showSlide(currentSlide);
});
document.addEventListener("DOMContentLoaded", function () {
    const animateSection = document.querySelector(".conversao-de-venda");
    const animatedImage = document.getElementById("animated-image");

    window.addEventListener("scroll", function () {
        const sectionTop = animateSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop - windowHeight <= 0) {
            animatedImage.classList.add("animate-image");
        }
    });
});

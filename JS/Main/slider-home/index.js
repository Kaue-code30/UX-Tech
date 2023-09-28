document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevButtons = document.querySelectorAll('.quadrado-prev');
    let currentSlide = 0;

    // Função para mostrar um slide com base no índice
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        prevButtons.forEach(button => button.classList.remove('active-'));
        
        currentSlide = index;

        slides[currentSlide].classList.add('active');
        prevButtons[currentSlide].classList.add('active-');
    }

    // Adicione eventos de clique aos botões quadrados
    prevButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Função para avançar para o próximo slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Função para retroceder para o slide anterior
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    // Adicione eventos de clique aos botões de próximo e anterior
    const nextSlideBtn = document.querySelector('.slide-next');
    const prevSlideBtn = document.querySelector('.slide-prev');

    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', nextSlide);
    }

    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', prevSlide);
    }

    // Função para avançar automaticamente a cada 5 segundos
    function autoNextSlide() {
        nextSlide();
    }

    // Configure o intervalo para avançar automaticamente a cada 5 segundos
    const interval = setInterval(autoNextSlide, 15000);

    // Pare o intervalo quando o mouse estiver sobre o slider
    const slider = document.querySelector('.slider');
    slider.addEventListener('fullscreenchange', () => {
        clearInterval(interval);
    });

    // Retome o intervalo quando o mouse sair do slider
    slider.addEventListener('mouseleave', () => {
        interval = setInterval(autoNextSlide, 15000);
    });

    // Inicialmente, mostre o primeiro slide
    showSlide(currentSlide);
});

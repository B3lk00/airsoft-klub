let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 4000); // Promjena svakih 4 sekunde
}

document.addEventListener('DOMContentLoaded', showSlides);

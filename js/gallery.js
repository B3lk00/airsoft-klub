document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const nextBtn = document.getElementById('lightbox-next');
  const prevBtn = document.getElementById('lightbox-prev');

  let currentIndex = 0;

  function showLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.classList.remove('hidden');
  }

  function hideLightbox() {
    lightbox.classList.add('hidden');
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => showLightbox(index));
  });

  closeBtn.addEventListener('click', hideLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Takođe možeš da zatvoriš lightbox klikom van slike:
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) hideLightbox();
  });

  // Opcionalno: zatvori ESC tasterom
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      hideLightbox();
    }
  });
});

const treningGallery = document.getElementById('trening-gallery');
const milsimGallery = document.getElementById('milsim-gallery');

function showCategory(category) {
  treningGallery.classList.add('hidden');
  milsimGallery.classList.add('hidden');

  const container = category === 'trening' ? treningGallery : milsimGallery;
  container.innerHTML = ''; // Clear previous

  const totalImages = category === 'trening' ? 5 : 5; // set number

  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.src = `assets/${category}${i}.jpg`;
    img.alt = `${category} ${i}`;
    img.loading = 'lazy'; // Lazy loading
    img.classList.add('gallery-img');
    img.onclick = () => openLightbox(category, i);
    container.appendChild(img);
  }

  container.classList.remove('hidden');
}

function hideCategory() {
  treningGallery.classList.add('hidden');
  milsimGallery.classList.add('hidden');
}


//
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

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
    img.addEventListener('click', () => {
      showLightbox(index);
    });
  });

  closeBtn.addEventListener('click', hideLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Klik na pozadinu zatvara lightbox
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
      hideLightbox();
    }
  });

  // Esc tipka zatvara lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') hideLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    }
  });
});

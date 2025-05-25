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

// Lightbox
let currentCategory = '';
let currentIndex = 0;

function openLightbox(category, index) {
  currentCategory = category;
  currentIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = `assets/${category}${index}.jpg`;
  lightbox.classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}

function nextImage() {
  const total = currentCategory === 'trening' ? 5 : 5; // adjust
  currentIndex = currentIndex < total ? currentIndex + 1 : 1;
  openLightbox(currentCategory, currentIndex);
}

function prevImage() {
  const total = currentCategory === 'trening' ? 5 : 5; // adjust
  currentIndex = currentIndex > 1 ? currentIndex - 1 : total;
  openLightbox(currentCategory, currentIndex);
}

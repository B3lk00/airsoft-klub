document.addEventListener('DOMContentLoaded', () => {
  const folderTrening = document.getElementById('folder-trening');
  const treningGallery = document.getElementById('trening-gallery');
  const btnBackTrening = document.getElementById('btn-back-trening');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  // Slike trening galerije (niz src-ova)
  const treningImages = [
    'assets/trening1.jpg',
    'assets/trening2.jpg',
  ];

  let currentIndex = 0;

  // Prikaži trening galeriju i sakrij folder
  folderTrening.addEventListener('click', () => {
    treningGallery.classList.remove('hidden');
    folderTrening.classList.add('hidden');
  });

  // Nazad na foldere
  btnBackTrening.addEventListener('click', () => {
    treningGallery.classList.add('hidden');
    folderTrening.classList.remove('hidden');
    closeLightbox();
  });

  // Otvori lightbox na klik slike u galeriji
  treningGallery.querySelectorAll('.gallery-img').forEach((img, index) => {
    img.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  // Otvori lightbox funkcija
  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = treningImages[currentIndex];
    lightbox.classList.remove('hidden');
  }

  // Zatvori lightbox
  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);

  // Navigacija prethodne slike
  lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + treningImages.length) % treningImages.length;
    lightboxImg.src = treningImages[currentIndex];
  });

  // Navigacija sledeće slike
  lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % treningImages.length;
    lightboxImg.src = treningImages[currentIndex];
  });

  // Klik van slike zatvara lightbox
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
});

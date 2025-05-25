document.addEventListener('DOMContentLoaded', () => {
  const foldersContainer = document.getElementById('gallery-folders');
  const folderGallery = document.getElementById('folder-gallery');
  const galleryGrid = document.getElementById('gallery-grid');
  const backToFoldersBtn = document.getElementById('back-to-folders');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  // Konfiguracija: folderi + broj slika
  const folders = {
    'slike-sa-treninga': {
      path: 'assets/slike-sa-treninga/',
      count: 5, // koliko slika ima u tom folderu
      prefix: 'trening', // ime fajla: trening1.jpg, trening2.jpg...
    },
    'slike-sa-milsim': {
      path: 'assets/slike-sa-milsim/',
      count: 4,
      prefix: 'milsim',
    },
  };

  // Klik na folder
  foldersContainer.addEventListener('click', (e) => {
    const folder = e.target.closest('.folder');
    if (folder) {
      const folderKey = folder.dataset.folder;
      showFolderGallery(folderKey);
    }
  });

  // Prikazi slike iz foldera
  function showFolderGallery(folderKey) {
    const folderData = folders[folderKey];
    if (!folderData) return;

    foldersContainer.classList.add('hidden');
    folderGallery.classList.remove('hidden');

    galleryGrid.innerHTML = '';
    for (let i = 1; i <= folderData.count; i++) {
      const imgSrc = `${folderData.path}${folderData.prefix}${i}.jpg`;
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = '';
      img.classList.add('gallery-thumb');
      img.addEventListener('click', () => openLightbox(imgSrc));
      galleryGrid.appendChild(img);
    }
  }

  // Nazad na foldere
  backToFoldersBtn.addEventListener('click', () => {
    folderGallery.classList.add('hidden');
    foldersContainer.classList.remove('hidden');
    galleryGrid.innerHTML = '';
  });

  // Otvori lightbox
  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
  }

  // Zatvori lightbox
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
  });

  // Klik izvan slike zatvara lightbox
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
    }
  });
});

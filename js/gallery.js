document.addEventListener('DOMContentLoaded', () => {
  const foldersContainer = document.getElementById('gallery-folders');
  const folderGallery = document.getElementById('folder-gallery');
  const galleryGrid = document.getElementById('gallery-grid');
  const backToFoldersBtn = document.getElementById('back-to-folders');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  // Slike po folderima
  const images = {
    trening: [
      'assets/trening1.jpg',
      'assets/trening2.jpg',
      'assets/trening3.jpg'
    ],
    milsim: [
      'assets/milsim1.jpg',
      'assets/milsim2.jpg',
      'assets/milsim3.jpg'
    ]
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
    foldersContainer.classList.add('hidden');
    folderGallery.classList.remove('hidden');

    galleryGrid.innerHTML = '';
    images[folderKey].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.classList.add('gallery-thumb');
      img.addEventListener('click', () => openLightbox(src));
      galleryGrid.appendChild(img);
    });
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


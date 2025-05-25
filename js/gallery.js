document.addEventListener('DOMContentLoaded', () => {
  const folders = {
    trening: [
      'assets/trening1.jpg',
      'assets/trening2.jpg',
      // dodaj ovde sve slike iz foldera trening
    ],
    milsim: [
      'assets/milsim1.jpg',
      'assets/milsim2.jpg',
      // dodaj ostale slike za milsim
    ]
  };

  const folderElements = {
    trening: document.getElementById('folder-trening'),
    milsim: document.getElementById('folder-milsim'),
  };

  const folderContent = document.getElementById('folder-content');
  const folderImages = document.getElementById('folder-images');
  const backToFoldersBtn = document.getElementById('back-to-folders');

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const nextBtn = document.getElementById('lightbox-next');
  const prevBtn = document.getElementById('lightbox-prev');

  let currentFolder = null;
  let currentIndex = 0;

  // Funkcija za prikaz slika foldera
  function showFolderImages(folderName) {
    currentFolder = folderName;
    folderImages.innerHTML = ''; // očisti prethodne slike

    folders[folderName].forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${folderName} slika ${index + 1}`;
      img.classList.add('gallery-img');
      img.dataset.index = index;
      folderImages.appendChild(img);
    });

    document.querySelector('.gallery-folders').classList.add('hidden');
    folderContent.classList.remove('hidden');

    // Dodaj event listener na slike
    const imgs = folderImages.querySelectorAll('img');
    imgs.forEach(img => {
      img.addEventListener('click', () => {
        currentIndex = Number(img.dataset.index);
        openLightbox();
      });
    });
  }

  // Vrati se na prikaz foldera
  backToFoldersBtn.addEventListener('click', () => {
    folderContent.classList.add('hidden');
    document.querySelector('.gallery-folders').classList.remove('hidden');
  });

  // Otvaranje lightboxa
  function openLightbox() {
    lightboxImg.src = folders[currentFolder][currentIndex];
    lightbox.classList.remove('hidden');
  }

  // Zatvaranje lightboxa
  function closeLightbox() {
    lightbox.classList.add('hidden');
  }

  // Sledeća slika
  function nextImage() {
    currentIndex = (currentIndex + 1) % folders[currentFolder].length;
    openLightbox();
  }

  // Prethodna slika
  function prevImage() {
    currentIndex = (currentIndex - 1 + folders[currentFolder].length) % folders[currentFolder].length;
    openLightbox();
  }

  // Eventi
  folderElements.trening.addEventListener('click', () => showFolderImages('trening'));
  folderElements.milsim.addEventListener('click', () => showFolderImages('milsim'));

  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  // Klik van slike u lightboxu zatvara
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  // ESC zatvara lightbox
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
  });
});

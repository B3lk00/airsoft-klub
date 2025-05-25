document.addEventListener('DOMContentLoaded', () => {
  const folders = document.querySelectorAll('.folder');
  const folderImages = document.getElementById('folder-images');
  const imagesContainer = document.getElementById('images-container');
  const backButton = document.getElementById('back-button');

  const lightbox = document.getElementById('simple-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');

  const imagesData = {
    trening: ['assets/trening1.jpg', 'assets/trening2.jpg', 'assets/trening3.jpg'],
    milsim: ['assets/milsim1.jpg', 'assets/milsim2.jpg', 'assets/milsim3.jpg']
  };

  folders.forEach(folder => {
    folder.addEventListener('click', () => {
      const folderName = folder.getAttribute('data-folder');
      const images = imagesData[folderName];

      imagesContainer.innerHTML = '';
      images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('lightbox-trigger');
        imagesContainer.appendChild(img);
      });

      folderImages.classList.remove('hidden');
    });
  });

  backButton.addEventListener('click', () => {
    folderImages.classList.add('hidden');
    imagesContainer.innerHTML = '';
  });

  // Lightbox setup
  imagesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      lightboxImage.src = e.target.src;
      lightbox.classList.remove('hidden');
    }
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxImage.src = '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      lightbox.classList.add('hidden');
      lightboxImage.src = '';
    }
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightboxImage.src = '';
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const folders = document.querySelectorAll('.folder');

  const folderImages = {
    trening: ['trening1.jpg', 'trening2.jpg', 'trening3.jpg'],
    milsim: ['milsim1.jpg', 'milsim2.jpg', 'milsim3.jpg']
    // dodaj ovde više ako imaš
  };

  folders.forEach(folder => {
    const folderName = folder.getAttribute('data-folder');
    const imageDiv = folder.querySelector('.folder-image');
    const images = folderImages[folderName];

    if (!imageDiv || !images || images.length === 0) return;


    // Postavi prvu sliku
    let currentIndex = 0;
    imageDiv.style.backgroundImage = `url('assets/${images[currentIndex]}')`;

    // Promijeni sliku svakih 3 sekunde
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      imageDiv.style.backgroundImage = `url('assets/${images[currentIndex]}')`;
    }, 3000);
  });




// Funkcija koja vodi na početnu stranicu
function backToHome() {
    window.location.href = "index.html"; // ili "/" ako koristiš root
}

 // ====== OVO DODAJEMO ZA BACK DUGME ======
  const backBtn = document.getElementById('back-to-home');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      window.location.href = 'index.html';  // promeni ako trebaš na root "/"
    });
  }
});



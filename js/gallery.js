document.addEventListener('DOMContentLoaded', () => {
  const folders = document.querySelectorAll('.folder');
  const folderImages = document.getElementById('folder-images');
  const imagesContainer = document.getElementById('images-container');
  const backButton = document.getElementById('back-button');

  const lightbox = document.getElementById('simple-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const lightboxCaption = document.getElementById('lightbox-caption');

  let currentIndex = 0;
  let galleryImages = [];

  const imagesData = {
    trening: [
      { src: 'assets/trening1.jpg', location: 'Sarajevo', date: '2024-05-10', club: 'AK Kojot' },
      { src: 'assets/trening2.jpg', location: 'Mostar', date: '2024-05-12', club: 'AK Kojot' },
      { src: 'assets/trening3.jpg', location: 'Banja Luka', date: '2024-05-15', club: 'AK Kojot' }
    ],
    milsim: [
      { src: 'assets/milsim1.jpg', location: 'Tuzla', date: '2024-06-01', club: 'AK Vukovi', event: 'Operacija Sjenka' },
      { src: 'assets/milsim2.jpg', location: 'Zenica', date: '2024-06-05', club: 'AK Vukovi', event: 'Operacija Sjenka' },
      { src: 'assets/milsim3.jpg', location: 'Doboj', date: '2024-06-08', club: 'AK Vukovi', event: 'Operacija Sjenka' },
      { src: 'assets/milsim4.jpg', location: 'Sanski Most', date: '2024-06-08', club: 'AK Vukovi', event: 'Operacija Sjenka' }
    ]
  };

  folders.forEach(folder => {
    folder.addEventListener('click', () => {
      const folderName = folder.getAttribute('data-folder');
      const images = imagesData[folderName];

      imagesContainer.innerHTML = '';
      images.forEach(image => {
    const img = document.createElement('img');
    img.src = image.src;
    img.classList.add('lightbox-trigger');
    img.setAttribute('data-location', image.location);
    img.setAttribute('data-date', image.date);
    img.setAttribute('data-club', image.club);
    img.setAttribute('data-event', image.event);
    imagesContainer.appendChild(img);
});


      folderImages.classList.remove('hidden');

      // Update galleryImages list
      galleryImages = document.querySelectorAll('#images-container img');
    });
  });

  backButton.addEventListener('click', () => {
    folderImages.classList.add('hidden');
    imagesContainer.innerHTML = '';
  });

  // Lightbox open
  imagesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      currentIndex = Array.from(galleryImages).indexOf(e.target);
      updateLightboxContent(currentIndex);
      lightbox.classList.remove('hidden');
    }
  });

  // Lightbox close
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });

  // Previous image
  prevBtn.addEventListener('click', () => {
    if (galleryImages.length === 0) return;
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxContent(currentIndex);
  });

  // Next image
  nextBtn.addEventListener('click', () => {
    if (galleryImages.length === 0) return;
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateLightboxContent(currentIndex);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      lightbox.classList.add('hidden');
    }
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
    }
  });

  function updateLightboxContent(index) {
    const img = galleryImages[index];
    if (!img) return;

    lightboxImage.src = img.src;

    const location = img.getAttribute('data-location') || 'Nepoznata lokacija';
    const date = img.getAttribute('data-date') || 'Nepoznat datum';
    const club = img.getAttribute('data-club') || 'Nepoznat klub';
    const event = img.getAttribute('data-event') || 'Nepoznat event';

    lightboxCaption.innerHTML = `
        <div style="margin: 4px 0;">
            📍 <b>Lokacija:</b> ${location}
        </div>
        <div style="margin: 4px 0;">
            📅 <b>Datum:</b> <i>${date}</i>
        </div>
        <div style="margin: 4px 0;">
            🏰 <b>Klub:</b> ${club}
        </div>
        <div style="margin: 4px 0;">
            🎖️ <b>Event:</b> ${event}
        </div>
    `;
}



  // Folder preview slideshow
  const folderImagesPreview = {
    trening: ['trening1.jpg', 'trening2.jpg', 'trening3.jpg'],
    milsim: ['milsim1.jpg', 'milsim2.jpg', 'milsim3.jpg']
  };

  folders.forEach(folder => {
    const folderName = folder.getAttribute('data-folder');
    const imageDiv = folder.querySelector('.folder-image');
    const images = folderImagesPreview[folderName];

    if (!imageDiv || !images || images.length === 0) return;

    let currentIndex = 0;
    imageDiv.style.backgroundImage = `url('assets/${images[currentIndex]}')`;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      imageDiv.style.backgroundImage = `url('assets/${images[currentIndex]}')`;
    }, 3000);
  });

  // Back to home button
  const backBtn = document.getElementById('back-to-home');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
});

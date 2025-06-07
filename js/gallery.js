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

  function lockBodyScroll() {
    if (window.innerWidth <= 768) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    }
  }

  function unlockBodyScroll() {
    if (window.innerWidth <= 768) {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
  }

  const imagesData = {
    trening: [
        { src: 'assets/trening4.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening5.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening6.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening7.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening8.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening9.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening10.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening11.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening12.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening13.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening14.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening15.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening16.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening17.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening18.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening19.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening20.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening21.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening22.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening23.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening24.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening25.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening26.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening27.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening28.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening29.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening30.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening31.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening32.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening33.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening34.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening35.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening36.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening37.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening38.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening39.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening40.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening41.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening42.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening43.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening44.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening45.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening46.jpg', location: 'Sanski Most', date: '2024-05-12' },
        { src: 'assets/trening47.jpg', location: 'Sanski Most', date: '2024-05-12' }
    ],
    milsim: [
      { src: 'assets/milsim1.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim2.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim3.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim4.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim5.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim6.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim7.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim8.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim9.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim10.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim11.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim12.jpg', location: 'Petrinja', date: '2025.04.26', club: 'AU Karlovacka', event: 'PMC Verdi' },
      { src: 'assets/milsim13.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim14.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim15.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim16.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim17.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim18.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim19.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim20.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim21.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim22.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim23.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim24.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim25.jpg', location: 'Bihać', date: '2025.05.03', club: 'ASK Operator', event: 'OP HEAVY SHADOW' },
      { src: 'assets/milsim26.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim27.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim28.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim29.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim30.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim31.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim32.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim33.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim34.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim35.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim36.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim37.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' },
      { src: 'assets/milsim38.jpg', location: 'Živinice', date: '2025.05.31', club: 'ASK B-Unit', event: 'ASK B-Unit' }
    ]
  };

  folders.forEach(folder => {
    folder.addEventListener('click', () => {
      const folderName = folder.getAttribute('data-folder');
      const images = imagesData[folderName];

      if (!images) return;

      imagesContainer.innerHTML = '';
      images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.classList.add('lightbox-trigger');
        img.setAttribute('data-location', image.location);
        img.setAttribute('data-date', image.date);
        img.setAttribute('data-club', image.club || '');
        img.setAttribute('data-event', image.event || '');
        img.setAttribute('data-folder', folderName);
        img.loading = 'lazy';
        imagesContainer.appendChild(img);
      });

      folderImages.classList.remove('hidden');
      galleryImages = Array.from(imagesContainer.querySelectorAll('img'));
    });
  });

  backButton.addEventListener('click', () => {
    folderImages.classList.add('hidden');
    imagesContainer.innerHTML = '';
  });

  imagesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      galleryImages = Array.from(imagesContainer.querySelectorAll('img'));
      currentIndex = galleryImages.indexOf(e.target);
      updateLightboxContent(currentIndex);
      lightbox.classList.remove('hidden');
      lockBodyScroll();
    }
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    unlockBodyScroll();
  });

  prevBtn.addEventListener('click', () => {
    if (galleryImages.length === 0) return;
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxContent(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    if (galleryImages.length === 0) return;
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateLightboxContent(currentIndex);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      lightbox.classList.add('hidden');
      unlockBodyScroll();
    }
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      unlockBodyScroll();
    }
  });

  function updateLightboxContent(index) {
    const imgElement = galleryImages[index];
    const folderName = imgElement.getAttribute('data-folder');
    const imgSrc = imgElement.src.split('/').pop();
    const imgData = imagesData[folderName].find(image => image.src.includes(imgSrc));

    lightboxImage.src = imgElement.src;

    let captionHTML = `
      <div class="caption-row">
        <span class="caption-icon">📍</span>
        <span><b>Lokacija:</b> ${imgData?.location || 'Nepoznata'}</span>
      </div>
      <div class="caption-row">
        <span class="caption-icon">📅</span>
        <span><b>Datum:</b> <i>${imgData?.date || 'Nepoznat'}</i></span>
      </div>
    `;

    if (folderName === 'milsim') {
      captionHTML += `
        <div class="caption-row">
          <span class="caption-icon">🏰</span>
          <span><b>Klub:</b> ${imgData?.club || 'Nepoznat'}</span>
        </div>
        <div class="caption-row">
          <span class="caption-icon">🎖️</span>
          <span><b>Event:</b> ${imgData?.event || 'Nepoznat'}</span>
        </div>
      `;
    }

    lightboxCaption.innerHTML = captionHTML;
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

    let index = 0;
    imageDiv.style.backgroundImage = `url('assets/${images[index]}')`;

    setInterval(() => {
      index = (index + 1) % images.length;
      imageDiv.style.backgroundImage = `url('assets/${images[index]}')`;
    }, 3000);
  });

  const backBtn = document.getElementById('back-to-home');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
});

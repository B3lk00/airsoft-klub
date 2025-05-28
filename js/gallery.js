window.addEventListener('DOMContentLoaded', () => {
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

    const imagesData = {
        trening: [
            { src: 'assets/trening1.jpg', location: 'Sarajevo', date: '2024-06-01' },
            { src: 'assets/trening2.jpg', location: 'Zenica', date: '2024-06-02' },
            { src: 'assets/trening3.jpg', location: 'Mostar', date: '2024-06-03' }
        ],
        milsim: [
            { src: 'assets/milsim1.jpg', location: 'Banja Luka', date: '2024-05-10', event: 'Milsim 2024', klub: 'Kojot' },
            { src: 'assets/milsim2.jpg', location: 'Sarajevo', date: '2024-05-11', event: 'Milsim 2024', klub: 'Kojot' },
            { src: 'assets/milsim3.jpg', location: 'Tuzla', date: '2024-05-12', event: 'Milsim 2024', klub: 'Kojot' }
        ]
    };

    let galleryImages = [];
    let currentIndex = 0;

    folders.forEach(folder => {
        folder.addEventListener('click', () => {
            const folderName = folder.getAttribute('data-folder');
            const images = imagesData[folderName];

            imagesContainer.innerHTML = '';
            images.forEach((imageData, idx) => {
                const img = document.createElement('img');
                img.src = imageData.src;
                img.setAttribute('data-folder', folderName);
                img.setAttribute('data-location', imageData.location);
                img.setAttribute('data-date', imageData.date);
                if (folderName === 'milsim') {
                    img.setAttribute('data-event', imageData.event);
                    img.setAttribute('data-klub', imageData.klub);
                }
                imagesContainer.appendChild(img);
            });

            galleryImages = document.querySelectorAll('#images-container img');
            folderImages.classList.remove('hidden');
        });
    });

    backButton.addEventListener('click', () => {
        folderImages.classList.add('hidden');
        imagesContainer.innerHTML = '';
    });

    imagesContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            galleryImages = document.querySelectorAll('#images-container img');
            currentIndex = Array.from(galleryImages).indexOf(e.target);
            openLightbox(currentIndex);
        }
    });

    function openLightbox(index) {
        if (!galleryImages[index]) return;
        updateLightboxContent(index);
        lightbox.classList.remove('hidden');
    }

    function updateLightboxContent(index) {
        const imgElement = galleryImages[index];
        if (!imgElement) return;

        const location = imgElement.getAttribute('data-location') || 'Nepoznata lokacija';
        const date = imgElement.getAttribute('data-date') || 'Nepoznat datum';
        const event = imgElement.getAttribute('data-event') || '';
        const klub = imgElement.getAttribute('data-klub') || '';

        lightboxImage.src = imgElement.src;

        let captionHtml = `<div style="margin-top: 10px; text-align: center;">`;
        captionHtml += `<div><i class="fa fa-map-marker-alt"></i> <b>Lokacija:</b> ${location}</div>`;
        captionHtml += `<div><i class="fa fa-calendar"></i> <i>Datum:</i> ${date}</div>`;

        if (event && klub) {
            captionHtml += `<div><i class="fa fa-flag"></i> <b>Event:</b> ${event}</div>`;
            captionHtml += `<div><i class="fa fa-users"></i> <b>Klub:</b> ${klub}</div>`;
        }

        captionHtml += `</div>`;

        lightboxCaption.innerHTML = captionHtml;
    }

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.add('hidden');
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
        }
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });
});





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

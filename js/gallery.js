document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('simple-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightbox.classList.remove('hidden');
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxImage.src = '';
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      lightbox.classList.add('hidden');
      lightboxImage.src = '';
    }
  });

  // Optional: Close when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightboxImage.src = '';
    }
  });
});


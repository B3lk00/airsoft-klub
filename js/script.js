// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#1b1b1b';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });
});

function showCategory(category) {
  document.querySelector('.gallery-folders').style.display = 'none';

  if (category === 'trening') {
    document.getElementById('trening-gallery').classList.remove('hidden');
  } else if (category === 'milsim') {
    document.getElementById('milsim-gallery').classList.remove('hidden');
  }
}

function hideCategory() {
  document.getElementById('trening-gallery').classList.add('hidden');
  document.getElementById('milsim-gallery').classList.add('hidden');
  document.querySelector('.gallery-folders').style.display = 'flex';
}



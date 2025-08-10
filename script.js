document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const navLinks = document.getElementById('nav-links');
  let lastScrollY = window.scrollY;

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('nameInput').value;

      localStorage.setItem('userName', name);
      const name2 = localStorage.getItem('userName');

      this.submit();
    });
  }

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (window.innerWidth > 768) {
      if (currentScroll > lastScrollY && currentScroll > 100) {
        header.classList.add('hide-header');
      } else {
        header.classList.remove('hide-header');
      }
    } else {
      header.classList.remove('hide-header');
    }

    lastScrollY = currentScroll;
  });


  document.querySelector('.menu-toggle').addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === 'es') {
        window.location.href = 'index.html';
      } else if (lang === 'en') {
        window.location.href = 'index-en.html';
      }
    });
  });
});


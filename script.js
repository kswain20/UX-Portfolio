// About Me accordion
document.querySelectorAll('.about__panel').forEach((panel) => {
  panel.addEventListener('click', () => {
    document.querySelectorAll('.about__panel').forEach((p) => p.classList.remove('about__panel--active'));
    panel.classList.add('about__panel--active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

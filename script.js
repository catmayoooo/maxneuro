document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.getElementById('hamburger');

  // Mobile hamburger toggle
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Scroll color change effect (desktop pillbox behavior)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navLinks.classList.add('scrolled');
    } else {
      navLinks.classList.remove('scrolled');
    }
  });
});

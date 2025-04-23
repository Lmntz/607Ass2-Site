// Mobile nav toggle
const toggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

toggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});


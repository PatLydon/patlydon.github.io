document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.burger');
  const menuLinks = document.querySelectorAll('.menu a');
  const menu = document.querySelector('.menu');

  function toggleMenu() {
    menu.classList.toggle('menu--active');
  }

  if (burgerButton) {
    burgerButton.addEventListener('click', toggleMenu);
  }

  menuLinks.forEach(function (link) {
    link.addEventListener('click', toggleMenu);
  });
});

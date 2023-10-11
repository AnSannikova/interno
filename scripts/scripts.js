const mobileMenuButton = document.querySelector('.header__menu-button');
const mobileMenu = document.querySelector('.header__menu');
const page = document.querySelector('.page');
const backdrop = document.querySelector('.backdrop');

mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('menu-is-active');
  page.classList.toggle('menu-is-open');
});

backdrop.addEventListener('click', function () {
  mobileMenu.classList.toggle('menu-is-active');
  page.classList.toggle('menu-is-open');
});

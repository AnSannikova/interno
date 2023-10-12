const page = document.querySelector('.page');

function mobileMenuOpen() {
  const mobileMenuButton = document.querySelector('.header__menu-button');
  const mobileMenu = document.querySelector('.header__menu');
  const backdrop = document.querySelector('.backdrop');

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('menu-is-active');
    page.classList.toggle('scroll-lock');
  });

  backdrop.addEventListener('click', function () {
    mobileMenu.classList.remove('menu-is-active');
    page.classList.remove('scroll-lock');
  });
}
mobileMenuOpen();

function showModalWindow() {
  const buttonShowModal = document.querySelectorAll('.button_show-modal');
  const dialog = document.getElementById('dialog');
  const buttonCloseModal = document.querySelector('.dialog__close-button');

  buttonShowModal.forEach((item) => {
    item.addEventListener('click', function () {
      dialog.showModal();
      page.classList.add('scroll-lock');
    });
  });

  buttonCloseModal.addEventListener('click', function () {
    dialog.close();
  });

  dialog.addEventListener('close', function () {
    page.classList.remove('scroll-lock');
  });
}

showModalWindow();

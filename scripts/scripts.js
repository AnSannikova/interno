const page = document.querySelector('.page');

function mobileMenuOpen() {
  const mobileMenuButton = page.querySelector('.header__menu-button');
  const mobileMenu = page.querySelector('.header__menu');
  const backdrop = page.querySelector('.backdrop');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('button-change');
    mobileMenu.classList.toggle('menu-is-active');
    page.classList.toggle('scroll-lock');
  });

  backdrop.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-is-active');
    page.classList.remove('scroll-lock');
  });
}
mobileMenuOpen();


function showModalWindow() {
  const buttonShowModal = document.querySelectorAll('.button_show-modal');
  const modalWindow = document.getElementById('dialog');
  const buttonCloseModal = dialog.querySelector('.dialog__close-button');

  buttonShowModal.forEach((item) => {
    item.addEventListener('click', () => {
      modalWindow.showModal();
      page.classList.add('scroll-lock');
    });
  });

  buttonCloseModal.addEventListener('click', () => {
    modalWindow.close();
  });

  modalWindow.addEventListener('close', () => {
    page.classList.remove('scroll-lock');
  });

  modalWindow.addEventListener("click", (evt) => {
    const modalWindow = evt.currentTarget;
    const backDrop = evt.target;

    if (backDrop === modalWindow) {
      modalWindow.close();
    }
  })
}
showModalWindow();

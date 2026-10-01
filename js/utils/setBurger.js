import closeBurgerMenu from './closeBurgerMenu.js';

export default function setBurger() {
  const burgerBtn = document.getElementById('burger-btn');

  if (burgerBtn) {
    const headerMenu = document.getElementById('header-menu');

    headerMenu.addEventListener('click', function (e) {
      if (e.target.classList.contains('header__link')) {
        closeBurgerMenu();
        /* burgerBtn.classList.remove('header__burger_active');
        headerMenu.classList.remove('header__menu_active');
        document.body.classList.remove('overflow-none'); */
      }
    });

    burgerBtn.addEventListener('click', function () {
      burgerBtn.classList.toggle('header__burger_active');
      headerMenu.classList.toggle('header__menu_active');
      document.body.classList.toggle('overflow-none');
    });
  }
}

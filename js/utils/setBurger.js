export default function setBurger() {
  const burgerBtn = document.getElementById('burger-btn');

  if (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      console.log('click');
      burgerBtn.classList.toggle('header__burger_active');

      const headerMenu = document.getElementById('header-menu');
      headerMenu.classList.toggle('header__menu_active');

      document.body.classList.toggle('overflow-none');
    });
  }
}

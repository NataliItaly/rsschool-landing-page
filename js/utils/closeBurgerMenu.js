export default function closeBurgerMenu() {
  const burgerBtn = document.getElementById('burger-btn');
  const headerMenu = document.getElementById('header-menu');

  burgerBtn.classList.remove('header__burger_active');
  headerMenu.classList.remove('header__menu_active');
  document.body.classList.remove('overflow-none');
}

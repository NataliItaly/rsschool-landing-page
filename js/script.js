import setActiveTab from './utils/setActiveTab.js';
import setProducts from './utils/setProducts.js';
import { getTheme, setTheme } from './states.js';
import setTabButtons from './utils/setTabButtons.js';
import setRefreshBtn from './utils/setRefreshBtn.js';
import setBurger from './utils/setBurger.js';
import setSlider from './utils/setSlider.js';
import closeBurgerMenu from './utils/closeBurgerMenu.js';
import setModal from './utils/setModal.js';

const currentTheme = getTheme();
setTheme(currentTheme);

const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('click', function (e) {
  const theme = e.target.id;
  setTheme(theme);
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeBurgerMenu();
  }
});

window.addEventListener('click', function (e) {
  if (e.target.id === 'close-modal-btn') {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.remove();
    }
  }
});

setProducts();
setTabButtons();
setBurger();
setSlider();
setModal();

window.addEventListener('DOMContentLoaded', function () {
  setRefreshBtn();
});
setActiveTab();

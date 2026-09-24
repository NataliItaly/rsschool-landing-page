import setActiveTab from './utils/setActiveTab.js';
import setProducts from './utils/setProducts.js';
import { getTheme, setTheme } from './states.js';
import setTabButtons from './utils/setTabButtons.js';
import setRefreshBtn from './utils/setRefreshBtn.js';
import setBurger from './utils/setBurger.js';

const currentTheme = getTheme();
setTheme(currentTheme);

const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('click', function (e) {
  const theme = e.target.id;
  setTheme(theme);
});

setProducts();
setTabButtons();
setBurger();

window.addEventListener('DOMContentLoaded', function () {
  setRefreshBtn();
});
setActiveTab();

import setActiveTab from './setActiveTab.js';
import setProducts from './setProducts.js';
import { getTheme, setTheme } from './states.js';
import setRefreshBtn from './utils/setRefreshBtn.js';

const currentTheme = getTheme();
setTheme(currentTheme);

const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('click', function (e) {
  const theme = e.target.id;
  setTheme(theme);
});

setProducts();

window.addEventListener('DOMContentLoaded', function () {
  setRefreshBtn();
});
//setActiveTab();

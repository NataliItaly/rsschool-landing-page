import setProducts from './setProducts.js';
import setActiveTab from './setActiveTab.js';
import { getTheme, setTheme } from './states.js';

const currentTheme = getTheme();
setTheme(currentTheme);

const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('click', function (e) {
  const theme = e.target.id;
  setTheme(theme);
});

setProducts();

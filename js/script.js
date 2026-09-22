import setProducts from './setProducts.js';
import { getTheme, setTheme } from './states.js';

const currentTheme = getTheme();
setTheme(currentTheme);

const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('click', function (e) {
  const theme = e.target.id;
  setTheme(theme);
  /* document.body.classList.remove(`${theme === 'light' ? 'dark' : 'light'}`);
  document.body.classList.add(theme);

  const themeBtns = themeSwitch.querySelectorAll('.header__toggle-btn');
  themeBtns.forEach((btn) => btn.classList.remove('header__toggle-active'));
  e.target.classList.add('header__toggle-active'); */
});

setProducts();

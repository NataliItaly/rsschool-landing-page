import setActiveTab from './setActiveTab.js';

const currentTheme = {
  theme: 'light',
};

export function getTheme() {
  return JSON.parse(localStorage.getItem('theme')) || currentTheme.theme;
}

export function setTheme(value) {
  currentTheme.theme = value;
  localStorage.setItem('theme', JSON.stringify(value));
  document.body.classList.remove(`${value === 'light' ? 'dark' : 'light'}`);
  document.body.classList.add(value);

  const themeBtns = document.querySelectorAll('.header__toggle-btn');
  themeBtns.forEach((btn) => {
    if (btn.id !== value) btn.classList.remove('header__toggle_active');
    else btn.classList.add('header__toggle_active');
  });
}

const tabState = {
  products: [],
  tab: 'coffee',
  visibleItems: 4,
};

export function getTabState() {
  return JSON.parse(localStorage.getItem('tabState')) || tabState;
}

export function setTabState(obj) {
  for (const key in tabState) {
    const currentKey = Object.keys(obj).find((el) => el === key);
    if (currentKey) {
      tabState[key] = obj[currentKey];
    }
  }

  localStorage.setItem('tabState', JSON.stringify(tabState));

  const tabBtns = document.querySelectorAll('.tabs__btn');
  tabBtns.forEach((btn) => {
    if (btn.dataset.tab !== tabState.tab)
      btn.classList.remove('tabs__btn_active');
    else btn.classList.add('tabs__btn_active');
  });

  setActiveTab();
}

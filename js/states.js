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
    if (btn.id !== value) btn.classList.remove('header__toggle-active');
    else btn.classList.add('header__toggle-active');
  });
}

const currentTab = {
  tab: 'coffee',
};

export function getTab() {
  return JSON.parse(localStorage.getItem('tab')) || currentTab.tab;
}

export function setTab(value) {
  currentTab.tab = value;
  localStorage.setItem('tab', JSON.stringify(value));
  document.body.classList.remove(`${value === 'light' ? 'dark' : 'light'}`);
  document.body.classList.add(value);

  const themeBtns = document.querySelectorAll('.header__toggle-btn');
  themeBtns.forEach((btn) => {
    if (btn.id !== value) btn.classList.remove('header__toggle-active');
    else btn.classList.add('header__toggle-active');
  });
}

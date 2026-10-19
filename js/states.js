import setActiveTab from './utils/setActiveTab.js';

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

let currentProduct = {
  product: null,
  size: null,
  additives: [],
  total: 0,
};

export function initCurrentProduct(item) {
  currentProduct.product = item;
  const sizeAddPrice = Number(Object.values(item.sizes)[0]['add-price']);
  //const additivesAddPrice = Number(item.additives[0]['add-price']);

  currentProduct.size = {
    size: Object.keys(item.sizes)[0],
    add: sizeAddPrice,
  };
  currentProduct.additives = [];
  currentProduct.total = Number(item.price) + sizeAddPrice;
}

export function setCurrentProduct(obj) {
  for (let key in obj) {
    if (currentProduct[key] === 'additives') {
      obj.additives.forEach((add, i) => {
        console.log('additive', add);
        if (
          !currentProduct.additives.some(
            (item) => item.name === obj.additives[i].name,
          )
        ) {
          currentProduct.additives.push(obj.additives[i]);
        }
      });
    } else if (currentProduct[key]) {
      currentProduct[key] = obj[key];
    }
  }
}

export function getCurrentProduct() {
  return currentProduct;
}

export function resetCurrentProduct() {
  currentProduct = {
    product: null,
    size: null,
    additives: null,
    total: null,
  };
}

import setActiveTab from './utils/setActiveTab.js';
import setProducts from './utils/setProducts.js';
import {
  getTheme,
  setTheme,
  getCurrentProduct,
  setCurrentProduct,
} from './states.js';
import setTabButtons from './utils/setTabButtons.js';
import setRefreshBtn from './utils/setRefreshBtn.js';
import setBurger from './utils/setBurger.js';
import setSlider from './utils/setSlider.js';
import closeBurgerMenu from './utils/closeBurgerMenu.js';
import setModal from './utils/setModal.js';
import closeModal from './utils/closeModal.js';
import displayTotalPrice from './utils/displayTotalPrice.js';

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
    closeModal();
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth >= 769) {
    closeBurgerMenu();
  }
  setRefreshBtn();
});

window.addEventListener('click', function (e) {
  if (e.target.id === 'close-modal-btn') {
    closeModal();
  }

  if (e.target.closest('#modal')) {
    if (e.target.id === 'modal' && !e.target.closest('.modal__card')) {
      closeModal();
    }

    if (e.target.closest('.modal__label')) {
      const label = e.target.closest('.modal__label');

      if (label.hasAttribute('data-size')) {
        const labels = document.querySelectorAll('.modal__label[data-size]');
        labels.forEach((l) => l.classList.remove('modal__label_active'));

        const currentProduct = getCurrentProduct();
        const product = currentProduct.product;
        const sizeAdd = label.dataset.size
          ? Number(label.dataset.price)
          : currentProduct.size.add;
        const size = {
          size: label.dataset.size || currentProduct.size.size,
          add: sizeAdd,
        };
        console.log('from click on label', size);

        const newProduct = {
          product,
          size,
          additives: [...currentProduct.additives],
          total: Number(currentProduct.product.price) + sizeAdd,
        };
        console.log('new product from click on label', newProduct);
        setCurrentProduct(newProduct);

        displayTotalPrice(newProduct.total);
      }
    }
  }
});

window.addEventListener('change', function (e) {
  console.log('checkbox', e.target);
  if (e.target.matches('.modal__checkbox') && e.target.checked) {
    console.log('Checked:', e.target.checked);
    const add = Number(e.target.dataset.add);
    const value = e.target.value;

    const currentProduct = getCurrentProduct();
    const newAdditieve = {
      value,
      add,
    };
    //console.log('total before add', currentProduct.total);
    //console.log('new additives', newAdditieve.add);
    console.log('current total:', currentProduct.total);
    console.log('total type:', typeof currentProduct.total);
    console.log('add:', add);
    console.log('add type:', typeof add);
    const total = currentProduct.total + newAdditieve.add;
    setCurrentProduct({
      additives: [...currentProduct.additives, newAdditieve],
      total,
    });

    displayTotalPrice(total);
    console.log(getCurrentProduct());
  }

  if (e.target.matches('.modal__checkbox') && !e.target.checked) {
    console.log('Checked:', e.target.checked);
    const add = Number(e.target.dataset.add);
    const value = e.target.value;

    const currentProduct = getCurrentProduct();
    const remainAdditieves = currentProduct.additives.filter(
      (a) => a.value !== value,
    );

    console.log('total before add', currentProduct.total);
    console.log('remain additives', remainAdditieves);
    const total = currentProduct.total - add;
    setCurrentProduct({
      additives: [...remainAdditieves],
      total,
    });
    console.log(getCurrentProduct());
    displayTotalPrice(total);
  }
});

await setProducts();
setTabButtons();
setBurger();
await setSlider();
setModal();
setRefreshBtn();

window.addEventListener('DOMContentLoaded', function () {
  setRefreshBtn();
});
setActiveTab();

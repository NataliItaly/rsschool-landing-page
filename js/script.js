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
        console.log(labels);
        labels.forEach((l) => l.classList.remove('modal__label_active'));
        label.classList.add('modal__label_active');

        const currentProduct = getCurrentProduct();
        const product = currentProduct.product;
        const sizeAdd = label.dataset.size
          ? Number(label.dataset.price)
          : currentProduct.size.add;
        const size = {
          size: label.dataset.size || currentProduct.size.size,
          add: sizeAdd,
        };

        const newProduct = {
          product,
          size,
          additives: [...currentProduct.additives],
          total: Number(currentProduct.product.price) + sizeAdd,
        };
        setCurrentProduct(newProduct);

        displayTotalPrice(newProduct.total);
      }
    }
  }
});

window.addEventListener('change', function (e) {
  if (e.target.matches('.modal__checkbox')) {
    const add = Number(e.target.dataset.add);
    const value = e.target.value;
    const currentProduct = getCurrentProduct();

    if (e.target.checked) {
      const newAdditieve = {
        value,
        add,
      };

      const total = currentProduct.total + add;
      setCurrentProduct({
        additives: [...currentProduct.additives, newAdditieve],
        total,
      });
    }

    if (!e.target.checked) {
      const remainAdditieves = currentProduct.additives.filter(
        (a) => a.value !== value,
      );

      const total = currentProduct.total - add;
      setCurrentProduct({
        additives: [...remainAdditieves],
        total,
      });
    }

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

import {
  getTabState,
  initCurrentProduct,
  getCurrentProduct,
} from '../states.js';
import modalCard from './modalCard.js';
import displayTotalPrice from './displayTotalPrice.js';

export default function setModal() {
  const tabsWrapper = document.getElementById('tabs-wrapper');

  if (tabsWrapper) {
    tabsWrapper.addEventListener('click', function (e) {
      if (e.target.closest('.card')) {
        const index = e.target.closest('.card').dataset.index;
        const productName = e.target.closest('.card').dataset.card;
        const category = e.target.closest('.tabs__list').id.split('-')[0];
        const currentProduct = getTabState()
          .products.find((list) => Object.keys(list)[0] === category)
          [category].find((item) => item.name === productName);

        const modal = modalCard(currentProduct, index);
        document.body.insertAdjacentHTML('afterbegin', modal);

        document.body.classList.add('overflow-none');

        initCurrentProduct(currentProduct);

        displayTotalPrice(getCurrentProduct().total);
      }
    });
  }
}

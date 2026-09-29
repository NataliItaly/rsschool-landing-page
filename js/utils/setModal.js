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
        const productName = e.target.closest('.card').dataset.card;
        const category = e.target.closest('.tabs__list').id.split('-')[0];
        const currentProduct = getTabState()
          .products.find((list) => Object.keys(list)[0] === category)
          [category].find((item) => item.name === productName);

        const modal = modalCard(currentProduct);
        document.body.insertAdjacentHTML('afterbegin', modal);

        initCurrentProduct(currentProduct);
        console.log('currentProduct.total', currentProduct.total); // undefined
        displayTotalPrice(getCurrentProduct().total);
      }
    });
  }
}

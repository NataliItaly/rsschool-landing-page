import { getTabState, setTabState } from './states.js';

export default async function setProducts() {
  const products = await fetchData();

  setTabState({ products });
  /* const tabsWrapper = document.getElementById('tabs-wrapper');

  if (tabsWrapper && products) {
    products.forEach((product, i) => {
      const key = Object.keys(product)[0];
      const parent = getParent(key);

      setCardList(parent, key, product[key]);
    });

    setActiveTab();
  } */
}

async function fetchData() {
  try {
    const response = await fetch('./js/products.json');
    if (!response.ok) {
      throw new Error('There are no available products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a fetch data error :', error);
  }
}

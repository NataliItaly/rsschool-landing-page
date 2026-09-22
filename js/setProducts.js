import setCardList from './utils/setCardList.js';

export default async function setProducts() {
  const products = await fetchData();

  const tabsWrapper = document.getElementById('tabs-wrapper');
  if (tabsWrapper) {
    const coffeeProducts = products[0].coffee;
    const teaProducts = products[1].tea;
    const desertProducts = products[2].desert;

    const coffeeTab = document.getElementById('coffee-tab');
    const teaTab = document.getElementById('tea-tab');
    const desertTab = document.getElementById('desert-tab');

    if (products) {
      products.forEach((product, i) => {
        const key = Object.keys(product)[0];
        let parent;
        if (key === 'coffee') parent = coffeeTab;
        if (key === 'tea') parent = teaTab;
        if (key === 'desert') parent = desertTab;

        setCardList(parent, key, product[key]);
      });
    }
  }
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

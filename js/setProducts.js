import { getTabState, setTabState } from './states.js';

export default async function setProducts() {
  const products = await fetchData();

  setTabState({ products });
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

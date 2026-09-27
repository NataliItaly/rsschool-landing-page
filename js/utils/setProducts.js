import { getTabState, setTabState } from '../states.js';
import fetchData from './fetchData.js';

export default async function setProducts() {
  const products = await fetchData('./js/products.json');

  setTabState({ products });
}

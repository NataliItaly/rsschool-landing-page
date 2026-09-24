import setCard from './setCard.js';
import isMobileDevice from './isMobileDevice.js';
import { getTabState } from '../states.js';

export default function setCardList(parent, key) {
  const isMobile = isMobileDevice();

  const data = getTabState().products;
  const currentStateData = data.find((el) => el[key]);

  const currentData = isMobile
    ? currentStateData[key].slice(0, 4)
    : currentStateData[key];

  const cardsData = currentData.map((item, i) => setCard(key, item, i));

  const cards = cardsData.join('');

  const refreshBtn = document.getElementById('refresh-btn');
  if (cardsData.length > 4) {
    refreshBtn.classList.add('tabs__refresh-btn_visible');
  } else {
    refreshBtn.classList.remove('tabs__refresh-btn_visible');
  }

  parent.innerHTML = '';
  parent.insertAdjacentHTML('afterbegin', cards);
}

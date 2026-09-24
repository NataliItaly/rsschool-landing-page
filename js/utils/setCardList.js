import setCard from './setCard.js';
import isMobileDevice from './isMobileDevice.js';

export default function setCardList(parent, key, data) {
  const isMobile = isMobileDevice();
  const cardsData = data.map((item, i) => setCard(key, item, i));
  const cardsArr = isMobile ? cardsData.slice(0, 4) : cardsData;

  const cards = cardsArr.join('');

  const refreshBtn = document.getElementById('refresh-btn');
  if (cardsData.length > 4) {
    refreshBtn.classList.add('tabs__refresh-btn_visible');
  } else {
    refreshBtn.classList.remove('tabs__refresh-btn_visible');
  }

  parent.insertAdjacentHTML('afterbegin', cards);
}

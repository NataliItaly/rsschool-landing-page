import setCard from './setCard.js';

export default function setCardList(parent, key, data) {
  const cards = data.map((item, i) => setCard(key, item, i)).join('');

  parent.insertAdjacentHTML('afterbegin', cards);
}

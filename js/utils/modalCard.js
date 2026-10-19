import createFieldset from './createFieldset.js';

export default function modalCard(item, i) {
  const sizesObj = {
    sizes: item.sizes,
  };

  const additivesObj = {
    additives: item.additives,
  };

  const sizesFieldset = createFieldset(sizesObj);
  const additivesFieldset = createFieldset(additivesObj);

  return `
    <div class="modal" id="modal">
      <div class="modal__card">
        <div class="modal__img-wrapper">
          <img
            src="./assets/images/${item.category}-images/${item.category}-${i}.jpg"
            alt=""
            class="modal__img"
          />
        </div>
        <div class="modal__content">
          <div class="modal__description">
            <h4 class="modal__title">${item.name}</h4>
            <p class="modal__subtitle">
              ${item.description}
            </p>
          </div>
          <form class="modal__form">
            ${sizesFieldset}
            ${additivesFieldset}
          </form>
          <div class="modal__price">
            <span>Total:</span>
            <span id="total-price">$${item.price}</span>
          </div>
          <div class="modal__alert">
            The cost is not final. Download our mobile app to see the final
            price and place your order. Earn loyalty points and enjoy your
            favorite coffee with up to 20% discount.
          </div>
          <button class="modal__btn" id="close-modal-btn">Close</button>
        </div>
      </div>
    </div>
  `;
}

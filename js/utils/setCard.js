export default function setCard(key, product, i) {
  //console.log('from setCard: key', key, 'product', product);

  return `
    <li class="tabs__card card">
      <div class="card__img-wrapper">
        <img
          src="./assets/images/${key}-images/${key}-${i + 1}.jpg"
          alt="${product.name}"
          class="card__img"
        />
      </div>
      <div class="card__content">
        <h4 class="card__title">${product.name}</h4>
        <p class="card__description">
          ${product.description}
        </p>
        <p class="card__price">${product.price}</p>
      </div>
    </li>
  `;
}

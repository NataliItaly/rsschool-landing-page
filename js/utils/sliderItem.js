export default function sliderItem(item) {
  return `
    <li class="slider__item">
      <img
        src="./assets/images/slider/${item.img}.png"
        alt="${item.name}"
        class="slider__img"
      />
      <div class="slider__content">
        <p class="slider__item-title">${item.name}</p>
        <p class="slider__item-text">
          ${item.description}
        </p>
        <p class="slider__item-price">$${item.price}</p>
      </div>
    </li>
  `;
}

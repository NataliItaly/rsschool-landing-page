export function createSizeLabel(key, obj) {
  const activeClass = key === 's' ? 'modal__label_active' : '';

  return `
    <label
      class='modal__label ${activeClass}'
      data-price="${Number(obj['add-price'])}"
      data-size="${key}"
    >
      <input type='radio' name='size' value='${obj.size}' />
      <span>${key}</span>${obj.size}
    </label>
  `;
}

export function createAdditivesLabel(i, obj) {
  const activeClass = i === 1 ? 'modal__label_active' : '';
  return `
    <label class="modal__label ${activeClass}" data-price="${Number(obj['add-price'])}" data-additives="${obj.name}">
      <input type="radio" name="additivies" value="${obj.name}" data-add="${Number(obj['add-price'])}" />
      <span>${i}</span>
      ${obj.name}
    </label>
  `;
}
/**
        "additives": [
          {
            "name": "Sugar",
            "add-price": "0.50"
          },
          {
            "name": "Lemon",
            "add-price": "0.50"
          },
          {
            "name": "Syrup",
            "add-price": "0.50"
          }
        ]
 */

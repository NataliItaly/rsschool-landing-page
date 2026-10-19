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
  return `
    <input id="${obj.name.toLowerCase()}" class="modal__checkbox" type="checkbox" name="${obj.name.toLowerCase()}" value="${obj.name.toLowerCase()}" data-add="${Number(obj['add-price'])}" />
    <label for="${obj.name.toLowerCase()}" class="modal__label" data-price="${Number(obj['add-price'])}" data-additives="${obj.name}">
      <span>${i}</span>
      ${obj.name}
    </label>
  `;
}

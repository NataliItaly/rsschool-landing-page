import { createSizeLabel, createAdditivesLabel } from './createLabel.js';

export default function createFieldset(obj) {
  const keyCategory = Object.keys(obj)[0];
  const values = Object.values(obj)[0];
  let labelsHtml = '';

  if (keyCategory === 'sizes') {
    for (let key in values) {
      const label = createSizeLabel(key, values[key]);
      labelsHtml += label;
    }
  }

  if (keyCategory === 'additives') {
    values.forEach((val, ind) => {
      const label = createAdditivesLabel(Number(ind) + 1, val);
      labelsHtml += label;
    });
  }

  return `
    <fieldset class='modal__fieldset'>
      <legend class='modal__legend'>${keyCategory}</legend>
      <div class='modal__labels-wrapper'>
        ${labelsHtml}
      </div>
    </fieldset>
  `;
}

/**
 * <label class='modal__label modal__label_active' data-add=''>
          <input type='radio' name='size' value='s' />
          <span>s</span>
          200 ml
        </label>
        <label class='modal__label'>
          <input type='radio' name='size' value='m' />
          <span>m</span>
          300 ml
        </label>
        <label class='modal__label'>
          <input type='radio' name='size' value='l' />
          <span>l</span>
          400ml
        </label>
 */

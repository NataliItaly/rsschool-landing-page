import { resetCurrentProduct } from '../states.js';

export default function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.remove();

    resetCurrentProduct();
    document.body.classList.remove('overflow-none');
  }
}

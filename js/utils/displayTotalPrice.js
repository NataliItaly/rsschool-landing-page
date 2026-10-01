export default function displayTotalPrice(price) {
  const totalElement = document.getElementById('total-price');
  const total = String(price).split('.');
  const totalCent = total[1] === undefined ? '' : total[1];
  const totalPrice = `${total[0]}.${totalCent.padEnd(2, '0')}`;

  if (totalElement) {
    totalElement.textContent = `$${totalPrice}`;
  }
}

export default function setSliderButtons(count, length) {
  const prevBtn = document.getElementById('prev-slide-btn');
  const nextBtn = document.getElementById('next-slide-btn');

  prevBtn.disabled = count <= 0;
  nextBtn.disabled = count >= length - 1;
}

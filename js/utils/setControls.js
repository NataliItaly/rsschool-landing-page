export default function setControls(count) {
  const sliderControls = document.querySelectorAll('.slider__controls-item');
  console.log(sliderControls);
  sliderControls.forEach((btn) =>
    btn.classList.remove('slider__controls-item_active'),
  );
  sliderControls[count].classList.add('slider__controls-item_active');
}

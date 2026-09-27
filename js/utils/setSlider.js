import getMatrixValue from './getMatrixValue.js';
import fetchData from './fetchData.js';
import sliderItem from './sliderItem.js';
import setSliderButtons from './setSliderButtons.js';
import setControls from './setControls.js';

export default async function setSlider() {
  const sliderList = document.querySelector('.slider__list');
  const sliders = await fetchData('./js/sliders.json');
  let count = 0;

  if (sliders) {
    const sliderItemsHtml = sliders.map((item) => sliderItem(item)).join('');
    sliderList.innerHTML = '';
    sliderList.insertAdjacentHTML('afterbegin', sliderItemsHtml);
  }
  setSliderButtons(count, sliders.length);

  const sliderBtns = document.getElementById('slider-btn');

  sliderBtns.addEventListener('click', function (e) {
    const slideWidth = window.innerWidth > 630 ? 480 : 348;

    if (e.target.id === 'next-slide-btn' && count < sliders.length - 1) {
      /* const currentTransfromValue =
        window.getComputedStyle(sliderList).transform;
      console.log(
        currentTransfromValue.split(','),
        typeof currentTransfromValue,
      );
      const currentOffset =
        currentTransfromValue === 'none'
          ? 0
          : getMatrixValue(currentTransfromValue);
      console.log(currentOffset);
      sliderList.style.transform = `translateX(${currentOffset - slideWidth}px)`; */

      count += 1;

      setSliderButtons(count, sliders.length);
      setControls(count);
      sliderList.style.transform = `translateX(${-slideWidth * count}px)`;
    }
    if (e.target.id === 'prev-slide-btn' && count > 0) {
      /* const currentTransfromValue =
        window.getComputedStyle(sliderList).transform;
      console.log(
        currentTransfromValue.split(','),
        typeof currentTransfromValue,
      );
      const currentOffset =
        currentTransfromValue === 'none'
          ? 0
          : getMatrixValue(currentTransfromValue);
      console.log(currentOffset);
      sliderList.style.transform = `translateX(${currentOffset + slideWidth}px)`; */

      count -= 1;
      setSliderButtons(count, sliders.length);
      setControls(count);
      sliderList.style.transform = `translateX(${-slideWidth * count}px)`;
    }
  });
}

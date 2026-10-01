import fetchData from './fetchData.js';
import sliderItem from './sliderItem.js';
import setSliderButtons from './setSliderButtons.js';
import setControls from './setControls.js';

export default async function setSlider() {
  const sliderList = document.querySelector('.slider__list');

  if (sliderList) {
    const sliders = await fetchData('./js/sliders.json');
    let count = 0;

    if (sliders) {
      const sliderItemsHtml = sliders.map((item) => sliderItem(item)).join('');
      sliderList.innerHTML = '';
      sliderList.insertAdjacentHTML('afterbegin', sliderItemsHtml);
    }
    setSliderButtons(count, sliders.length);

    const slider = document.getElementById('slider');

    slider.addEventListener('click', function (e) {
      //const slideWidth = window.innerWidth > 630 ? 480 : 348;
      const slideWidth = sliderList.firstElementChild.offsetWidth;

      if (e.target.closest('.slider__controls-item')) {
        const index = e.target.closest('.slider__controls-item').dataset.count;

        count = index;
        setSliderButtons(count, sliders.length);
        setControls(count);
        sliderList.style.transform = `translateX(${-slideWidth * count}px)`;
      }

      if (e.target.id === 'next-slide-btn' && count < sliders.length - 1) {
        count += 1;

        setSliderButtons(count, sliders.length);
        setControls(count);
        sliderList.style.transform = `translateX(${-slideWidth * count}px)`;
      }

      if (e.target.id === 'prev-slide-btn' && count > 0) {
        count -= 1;
        setSliderButtons(count, sliders.length);
        setControls(count);
        sliderList.style.transform = `translateX(${-slideWidth * count}px)`;
      }
    });
  }
}

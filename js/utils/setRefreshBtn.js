import isMobileDevice from './isMobileDevice.js';
import { getTabState, setTabState } from '../states.js';
import setCardList from './setCardList.js';

export default function setRefreshBtn() {
  const isMobile = isMobileDevice();
  const refreshBtn = document.getElementById('refresh-btn');

  if (refreshBtn) {
    refreshBtn.addEventListener('click', function () {
      const tabState = getTabState();
      const currentTab = tabState.tab;
      const currentProducts = tabState.products.find(
        (item) => Object.keys(item)[0] === currentTab,
      )[currentTab];
      console.log(tabState, currentProducts);

      if (currentProducts.length > 4) {
        setTabState({ visibleItems: currentProducts.length });
        console.log('visible items from refresh after click', getTabState());
        const currentTabElement = document.getElementById(`${currentTab}-tab`);
        console.log(currentTabElement);
        currentTabElement.innerHTML = '';
        setCardList(currentTabElement, currentTab);
      }

      refreshBtn.classList.remove('tabs__refresh-btn_visible');
    });

    if (isMobile) {
      refreshBtn.classList.add('tabs__refresh-btn_visible');
    } else {
      refreshBtn.classList.remove('tabs__refresh-btn_visible');
    }
  }
}

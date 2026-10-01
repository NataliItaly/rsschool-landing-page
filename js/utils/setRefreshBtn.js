import isMobileDevice from './isMobileDevice.js';
import { getTabState, setTabState } from '../states.js';
import setCardList from './setCardList.js';

export default function setRefreshBtn() {
  const isMobile = isMobileDevice();
  const refreshBtn = document.getElementById('refresh-btn');
  console.log('from refresh');

  if (refreshBtn) {
    refreshBtn.addEventListener('click', function () {
      console.log('refresh');
      const tabState = getTabState();
      const currentTab = tabState.tab;
      const currentProducts = tabState.products.find(
        (item) => Object.keys(item)[0] === currentTab,
      )[currentTab];

      if (currentProducts.length > 4) {
        setTabState({ visibleItems: currentProducts.length });

        const currentTabElement = document.getElementById(`${currentTab}-tab`);
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

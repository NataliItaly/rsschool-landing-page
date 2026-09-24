import setActiveTab from '../setActiveTab.js';
import { getTabState, setTabState } from '../states.js';
import isMobileDevice from './isMobileDevice.js';

export default function setTabButtons() {
  const tabsButtons = document.getElementById('tabs-btn-wrapper');
  if (tabsButtons) {
    tabsButtons.addEventListener('click', function (e) {
      if (e.target.classList.contains('tabs__btn')) {
        console.log('btn');
        const buttons = document.querySelectorAll('.tabs__btn');
        buttons.forEach((btn) => {
          btn.classList.remove('tabs__btn_active');
        });

        e.target.classList.add('tabs__btn_active');

        const currentLabel = e.target.dataset.tab;
        setTabState({ tab: currentLabel });
        console.log(getTabState());

        const tabs = document.querySelectorAll('.tabs__list');
        tabs.forEach((tab) => {
          if (tab.id === `${currentLabel}-tab`) {
            tab.classList.add('tabs__list_active');

            const isMobile = isMobileDevice();
            const refreshBtn = document.getElementById('refresh-btn');
            if (isMobile && tab.children.length > 4) {
              refreshBtn.classList.add('tabs__refresh-btn_visible');
            } else {
              refreshBtn.classList.remove('tabs__refresh-btn_visible');
            }
          } else {
            tab.classList.remove('tabs__list_active');
          }
        });

        setActiveTab();
      }
    });
  }
}

import isMobileDevice from './utils/isMobileDevice.js';
import { getTabState } from './states.js';
import setCardList from './utils/setCardList.js';

export default function setActiveTab() {
  const activeTab = getTabState().tab;
  const activeTabBtn = document.getElementById(`${activeTab}-btn`);
  activeTabBtn.classList.add('tabs__btn_active');

  const activeList = document.getElementById(`${activeTab}-tab`);
  activeList.classList.add('tabs__list_active');
  setCardList(activeList, activeTab);
}

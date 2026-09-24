import isMobileDevice from './isMobileDevice.js';

export default function setRefreshBtn() {
  const isMobile = isMobileDevice();
  const refreshBtn = document.getElementById('refresh-btn');

  if (refreshBtn) {
    if (isMobile) {
      refreshBtn.classList.add('tabs__refresh-btn_visible');
    } else {
      refreshBtn.classList.remove('tabs__refresh-btn_visible');
    }
  }
}

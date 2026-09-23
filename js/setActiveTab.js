export default function setActiveTab() {
  const tabsButtons = document.getElementById('tabs-btn-wrapper');

  if (tabsButtons) {
    tabsButtons.addEventListener('click', function (e) {
      if (e.target.classList.contains('tabs__btn')) {
        const buttons = document.querySelectorAll('.tabs__btn');
        buttons.forEach((btn) => {
          btn.classList.remove('tabs__btn_active');
        });
        e.target.classList.add('tabs__btn_active');

        const currentLabel = e.target.dataset.tab;

        const tabs = document.querySelectorAll('.tabs__list');
        tabs.forEach((tab) => {
          if (tab.id === `${currentLabel}-tab`) {
            tab.classList.add('tabs__list_active');

            if (tab.children.length > 4) {
              const refreshBtn = document.getElementById('refresh-btn');
              refreshBtn.classList.add('tabs__refresh-btn_visible');
            }
          } else {
            tab.classList.remove('tabs__list_active');
          }
        });
      }
    });
  }
}

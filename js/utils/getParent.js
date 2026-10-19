export default function getParent(key) {
  const tabs = document.querySelectorAll('.tabs__list');
  return Array.from(tabs).find((tab) => tab.id.split('-')[0] === key);
}

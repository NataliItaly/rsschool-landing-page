export default function isMobileDevice() {
  const isTouchScreen =
    'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 768;
  return isTouchScreen || isSmallScreen;
}

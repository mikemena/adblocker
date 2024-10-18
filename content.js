function removeElementsAndSpace(selectors) {
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      // Check if the element is a block-level element
      const style = window.getComputedStyle(element);
      if (
        style.display === 'block' ||
        style.display === 'flex' ||
        style.display === 'grid'
      ) {
        // If it's a block-level element, replace it with a zero-height element
        const placeholder = document.createElement('div');
        placeholder.style.height = '0';
        placeholder.style.overflow = 'hidden';
        placeholder.style.padding = '0';
        placeholder.style.margin = '0';
        placeholder.style.border = 'none';
        element.parentNode.replaceChild(placeholder, element);
      } else {
        // If it's an inline element, simply remove it
        element.remove();
      }
    });
  });
}

// Array of selectors to be removed
const selectorsToRemove = [
  '#mrt-node-Lead-0-Ad',
  '.Pos\\(r\\).Maw\\(1260px\\).M\\(a\\).Ta\\(c\\).W\\(1260px\\)',
  '.Ta\\(c\\).Pos-r.Z-0.Pos\\(r\\).Ov\\(a\\).Z\\(0\\).sdaLite_D\\(n\\)',
  '#mrt-node-Overlay-2-MonalixaComponent',
  '#defaultLREC-sizer',
  '#sda-Horizon',
  '.socialPostCard-DS-EntryPoint1-1',
  '#League_r_1',
  '[data-content="Advertisement"]',
  '[data-content="CNN"]',
  '.trc-first-recommendation',
  '.videoCube',
  '.trc_spotlight_item',
  'iframe[src*="cnn.com"]',
  '[href*="cnn.com"]',
  'span:contains("Ad")',
  '.native-ad-item',
  '.trc-content-sponsored',
  '.stream-ad',
  '[id^="taboola"]',
  '#taboola-stream-48-container',
  '.Mih\\(119px\\)',
  '#module-games',
  '#module-horoscope',
  '#module-subscription'
];

function removeAds() {
  removeElementsAndSpace(selectorsToRemove);
}

// Initial removal
removeAds();

// Set up a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      removeAds();
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });

// Periodically check for new ads
setInterval(removeAds, 1000);

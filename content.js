function removeElementsBySelector(selectors) {
  selectors.forEach(selector => {
    // Check if the selector is for an ID
    if (selector.startsWith('#')) {
      const element = document.getElementById(selector.substring(1));
      if (element) {
        element.parentNode.removeChild(element);
      }
    }
    // Check if the selector is for a class
    else if (selector.startsWith('.')) {
      const elements = document.getElementsByClassName(selector.substring(1));
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
    }
    // Check if the selector is for a data-content attribute
    else if (selector.startsWith('[data-content="')) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.parentNode.removeChild(element);
      });
    }
  });
}

// Array of selectors (IDs, class names, and data-content attributes) to be removed
const selectorsToRemove = [
  '#mrt-node-Lead-0-Ad',
  '.Pos(r) Maw(1260px) M(a) Ta(c) W(1260px)',
  'Ta(c) Pos-r Z-0 Pos(r) Ov(a) Z(0) sdaLite_D(n)',
  '#mrt-node-Overlay-2-MonalixaComponent',
  '#defaultLREC-sizer',
  '#sda-Horizon',
  // The following is for MSN sports page
  '.socialPostCard-DS-EntryPoint1-1',
  '#League_r_1',
  '[data-content="Advertisement"]', // Example of a data-content attribute selector
  '[data-content="CNN"]', // Generic example, adjust based on actual HTML structure
  '.trc-first-recommendation',
  'videoCube',
  'trc_spotlight_item',
  'iframe[src*="cnn.com"]', // Blocks iframes containing CNN content
  '[href*="cnn.com"]', // Blocks links pointing to CNN
  'span:contains("Ad")',
  '.native-ad-item',
  '.trc-content-sponsored',
  '.stream-ad',
  '[id^="taboola"]'
];

// Call the function with the array of selectors immediately after DOM content loaded
document.addEventListener('DOMContentLoaded', function () {
  removeElementsBySelector(selectorsToRemove);
});

// Additional call with a delay to handle dynamically loaded content
setTimeout(() => {
  console.log('Running delayed removal for dynamically loaded content.');
  removeElementsBySelector(selectorsToRemove);
}, 10000); // Delay of 10000 milliseconds (10 seconds)

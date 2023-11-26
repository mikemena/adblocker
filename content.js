function removeElementsBySelector(selectors) {
  selectors.forEach(selector => {
    // Check if the selector is for an ID
    if (selector.startsWith('#')) {
      const element = document.getElementById(selector.substring(1));
      if (element) {
        element.parentNode.removeChild(element);
        console.log(`Element with ID '${selector}' removed.`);
      } else {
        console.log(`Element with ID '${selector}' not found.`);
      }
    }
    // Check if the selector is for a class
    else if (selector.startsWith('.')) {
      const elements = document.getElementsByClassName(selector.substring(1));
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
      console.log(`Elements with class '${selector}' removed.`);
    }
    // Check if the selector is for a data-content attribute
    else if (selector.startsWith('[data-content="')) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.parentNode.removeChild(element);
      });
      console.log(`Elements with data-content '${selector}' removed.`);
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
  '[data-content="Advertisement"]' // Example of a data-content attribute selector
];

// Call the function with the array of selectors
removeElementsBySelector(selectorsToRemove);

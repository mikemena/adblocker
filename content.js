function removeElementsBySelector(selectors) {
  selectors.forEach(selector => {
    // Check if the selector is for an ID or a class
    if (selector.startsWith('#')) {
      // Removing an element by ID
      const element = document.getElementById(selector.substring(1));
      if (element) {
        element.parentNode.removeChild(element);
        console.log(`Element with ID '${selector}' removed.`);
      } else {
        console.log(`Element with ID '${selector}' not found.`);
      }
    } else if (selector.startsWith('.')) {
      // Removing elements by class name
      const elements = document.getElementsByClassName(selector.substring(1));
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
      console.log(`Elements with class '${selector}' removed.`);
    }
  });
}

// Array of selectors (IDs and class names) to be removed
const selectorsToRemove = [
  '#mrt-node-Lead-0-Ad',
  '.Pos(r) Maw(1260px) M(a) Ta(c) W(1260px)',
  '#mrt-node-Overlay-2-MonalixaComponent',
  '#defaultLREC-sizer',
  '#defaultLREC-wrapper'
];

// Call the function with the array of selectors
removeElementsBySelector(selectorsToRemove);

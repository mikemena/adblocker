document.addEventListener('mousedown', function (e) {
  if (e.button != 2) {
    return;
  }

  document
    .querySelectorAll('#clickthru')
    .forEach(old => old.removeAttribute('display'));
  e.target.setAttribute('display', 'none');
  chrome.extension.sendRequest({
    hideElement: e.target
  });
});
